import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import { Animated, TextInput, type TextInputProps, TouchableOpacity, View } from 'react-native';
import { cn } from '~/lib/utils';
import { Text } from '~/components/ui/text';
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import {
  TextInputEndEditingEventData,
  TextInputFocusEventData,
} from 'react-native/Libraries/Components/TextInput/TextInput';
import EyeSlash from '@/components/svg/EyeSlash';
import Eye from '@/components/svg/Eye';
import TimesCircle from '@/components/svg/TimesCircle';

export interface FloatingLabelTextInputProps extends TextInputProps {
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  label?: string;
  onClear?: () => void;
  isClearable?: boolean;
  classNames?: {
    inputWrapper?: string;
    innerWrapper?: string;
    input?: string;
    base?: string;
    mainWrapper?: string;
    label?: string;
    errorMessage?: string;
    helperWrapper?: string;
  };
}

interface InputReference extends TextInput {
  value: string;
}

const InputFloatingLabel = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  FloatingLabelTextInputProps
>(
  (
    {
      classNames = {},
      placeholderClassName,
      startContent,
      endContent,
      errorMessage,
      isInvalid,
      isClearable = false,
      onClear = () => {},
      ...props
    },
    ref,
  ) => {
    const { onFocus = () => {} } = props;
    const [inputHeight, setHeight] = useState<number | null>(null);
    const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(
      props.textContentType === 'password',
    );

    const floatingLabelAnimation = useRef(new Animated.Value(props.value ? 1 : 0)).current;

    const inputRef = React.useRef<InputReference>(null);
    const combinedRef = React.useMemo(() => {
      if (typeof ref === 'function') return (node: TextInput) => ref(node);
      return ref || inputRef;
    }, [ref]);

    const isFilled = !!props.value;
    const hasLabelAndPlaceholder = !!(props.label && props.placeholder);

    const [isFocused, setIsFocused] = useState(hasLabelAndPlaceholder);

    const triggerLabelAnimation = (val: number) => {
      Animated.spring(floatingLabelAnimation, {
        toValue: val,
        // duration: 300,
        useNativeDriver: false,
      }).start();
    };
    const handleInputFocus = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus(event);
      setIsFocused(true);
      triggerLabelAnimation(1);
    }, []);

    const handleOnEndEditing = useCallback(
      (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        const val = e.nativeEvent.text;

        if (!val) {
          if (hasLabelAndPlaceholder) {
            setIsFocused(true);
          } else {
            setIsFocused(false);
            triggerLabelAnimation(0);
          }
        }
      },
      [],
    );

    const floatingLabelStyle = {
      // transform:[{ translateY }],
      top: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 4],
      }),
      fontSize: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 10],
      }),
      color: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [isInvalid ? '#ef4444' : '#a1a1aa', isInvalid ? '#ef4444' : '#71717A'],
      }),
    };

    return (
      <View className={cn('', classNames.base)}>
        <View
          style={{
            minHeight: 60,
          }}
          onLayout={(e) => !inputHeight && setHeight(e.nativeEvent.layout.height)}
          className={cn(
            'px-4 justify-center flex w-full rounded-xl bg-background-dark-100 dark:bg-background-dark-300',
            {
              'border border-red-500': isInvalid,
            },
            classNames.mainWrapper,
          )}>
          <Animated.Text
            className={cn(
              'text-lg text-zinc-500 dark:text-foreground-light absolute',
              {
                hidden: !isFocused && !isFilled,
              },
              classNames?.label,
            )}
            style={{
              left: 14,
              ...(!hasLabelAndPlaceholder
                ? floatingLabelStyle
                : {
                    top: 4,
                    fontSize: 14,
                    color: isInvalid ? '#ef4444' : '#a1a1aa',
                  }),
            }}>
            {props.label || props.placeholder}
          </Animated.Text>
          <View
            className={cn(
              'flex flex-row items-center justify-between gap-3 ',
              classNames?.inputWrapper,
              {
                'pt-4': !(!isFocused && !isFilled),
              },
            )}>
            {startContent ?? null}
            <TextInput
              ref={combinedRef}
              className={cn(
                'w-full shrink native:h-12 text-foreground dark:text-foreground-light placeholder:text-zinc-400 file:border-0 file:bg-transparent file:font-medium',
                props.editable === false && 'opacity-50 web:cursor-not-allowed',
                classNames?.input,
              )}
              placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
              {...props}
              placeholder={
                hasLabelAndPlaceholder
                  ? props.placeholder
                  : isFocused
                    ? undefined
                    : props.placeholder || props.label
              }
              onFocus={handleInputFocus}
              onEndEditing={handleOnEndEditing}
              secureTextEntry={isSecureTextEntry}></TextInput>
            {props.value && !!endContent ? endContent : null}
            {isClearable && props.value && (
              <TouchableOpacity activeOpacity={1} onPress={onClear}>
                <TimesCircle color={'#a1a1aa'} height={16} width={16} />
              </TouchableOpacity>
            )}
            {props.textContentType === 'password' && (
              <View className={'flex'}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setIsSecureTextEntry((prevState) => !prevState)}>
                  {isSecureTextEntry ? (
                    <EyeSlash color={'#a1a1aa'} height={22} width={22} />
                  ) : (
                    <Eye color={'#a1a1aa'} height={22} width={22} />
                  )}
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        {isInvalid && errorMessage && (
          <View
            className={cn(classNames?.helperWrapper)}
            style={{
              minHeight: 20,
            }}>
            <Text className={cn('text-red-500 pl-2 pt-2', classNames?.errorMessage)}>
              {errorMessage}
            </Text>
          </View>
        )}
      </View>
    );
  },
);

InputFloatingLabel.displayName = 'InputFloatingLabel';

export { InputFloatingLabel };
