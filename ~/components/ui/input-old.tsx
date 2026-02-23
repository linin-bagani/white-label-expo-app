import { ForgotPasswordSchemaType } from '@/types/FormTypes';
import { usePathname } from 'expo-router';
import * as React from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  Animated,
  Keyboard,
  TextInput,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { cn } from '~/lib/utils';
import useResponsiveScale from '@/hooks/useResponsiveScale';
import { moderateScale } from 'react-native-size-matters';

export interface InputProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  viewClass?: string;
  textClass?: string;
  textInputClass?: string;
  topOutputRange?: number[];
  fontSizeOutputRange?: number[];
  error?: string;
  methods?: UseFormReturn<ForgotPasswordSchemaType>;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  type?: string;
  label?: string;
  textInputPlaceholder?: string;
}

const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      label,
      placeholder,
      viewClass,
      textClass,
      textInputClass,
      topOutputRange = [placeholder === 'Land Area (m²)' ? 12 : 22, 12],
      fontSizeOutputRange = [
        moderateScale(14),
        // placeholder === 'Add email subject here' ? RFValue(11, height) : RFValue(10, height),
        placeholder === 'Add email subject here' ? moderateScale(11) : moderateScale(11),
      ],
      error,
      methods,
      onChange = () => {},
      onBlur = () => {},
      type,
      multiline,
      numberOfLines,
      textInputPlaceholder,
      ...props
    },
    ref,
  ) => {
    const pathname = usePathname();
    const floatingLabelAnimation = React.useRef(new Animated.Value(props.value ? 1 : 0)).current;
    const [password, setPassword] = React.useState<boolean>(type === 'password');
    const [onFocus, setOnFocus] = React.useState<boolean>();
    // const { getLightDarkMode } = useAuth();
    // const { switchLightDarkMode } = useSwitchLightDarkMode();
    // const [lightDarkMode, setLightDarkMode] = React.useState<boolean>();
    const scale = useResponsiveScale();

    const inputRef = React.useRef<TextInput>(null);
    const combinedRef = React.useMemo(() => {
      if (typeof ref === 'function') return (node: TextInput) => ref(node);
      return ref || inputRef;
    }, [ref]);

    // React.useEffect(() => {
    //   const fetchLightDarkMode = async () => {
    //     setLightDarkMode(
    //       (await getLightDarkMode()) === null ? switchLightDarkMode : await getLightDarkMode(),
    //     );
    //   };
    //   fetchLightDarkMode();
    // }, []);

    const handleFocus = (): void => {
      setOnFocus(true);
      Animated.timing(floatingLabelAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    };

    const handleBlur = (): void => {
      if (!props.value) {
        setOnFocus(false);
        Animated.timing(floatingLabelAnimation, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }).start();
      }
    };

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const text = e.nativeEvent.text;
      if (text === '') Keyboard.dismiss();
      if (props.keyboardType === 'numeric') {
        if (!/^\d*\.?\d*$/.test(text)) {
          Keyboard.dismiss();
        }
      }

      onChange(e);
      methods?.clearErrors('email');
    };

    React.useEffect(() => {
      if (
        !placeholder?.includes('Price') &&
        !placeholder?.includes('Bed') &&
        !placeholder?.includes('Bath') &&
        !placeholder?.includes('Parking') &&
        !placeholder?.includes('Area') &&
        !placeholder?.includes('Rent') &&
        !placeholder?.includes('Budget')
      )
        if (props.value) {
          handleFocus();
        } else handleBlur();
    }, [props.value]);

    const floatingLabelStyle = {
      top: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange:
          placeholder === 'Agency'
            ? [pathname.includes('profile') ? 22 : 21, 21]
            : multiline
              ? [20, 0]
              : // : topOutputRange,
                onFocus
                ? [22, 12]
                : topOutputRange,
      }),
      fontSize: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: fontSizeOutputRange,
      }),
      color: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [error ? '#ef4444' : '#71717a', error ? '#ef4444' : '#71717a'],
      }),
    };

    return (
      <View
        className={cn(
          // 'bg-background-dark-100 dark:bg-background-dark-300 rounded-xl px-5 flex-row justify-between',
          'bg-background-dark-100 dark:bg-background-dark-300 rounded-xl px-4 flex-row justify-between',
          placeholder === 'Phone Number' && 'pl-[19px]',
        )}>
        <TouchableOpacity
          activeOpacity={1}
          className={cn(
            'h-10 flex-1',
            viewClass,
            error ? 'border border-red-500' : '',
            placeholder === 'Phone Number' && 'justify-center',
          )}
          onPress={(e) => {
            if (props?.onPress) props.onPress(e);

            if (placeholder?.includes('Area'))
              if (combinedRef && 'current' in combinedRef && combinedRef.current)
                combinedRef.current.focus();
          }}>
          {placeholder !== 'Phone Number' && (
            <Animated.Text
              className={cn('absolute', textClass, placeholder === 'Agency' && onFocus && 'hidden')}
              style={floatingLabelStyle}>
              {label ? <Text>{label}</Text> : <Text>{placeholder}</Text>}
            </Animated.Text>
          )}

          <View className={cn('', placeholder?.includes('Area') && 'flex-row')}>
            <TextInput
              ref={combinedRef}
              className={cn(
                'text-foreground dark:text-foreground-light',
                error
                  ? 'text-destructive'
                  : // 'text-foreground'
                    'text-zinc-400',
                placeholder !== 'Phone Number' ? textInputClass : 'font-medium',
                // lightDarkMode && 'text-zinc-100',
              )}
              {...props}
              onFocus={handleFocus}
              onBlur={(e) => {
                // handleBlur();
                if (
                  !placeholder?.includes('Price') &&
                  !placeholder?.includes('Bed') &&
                  !placeholder?.includes('Bath') &&
                  !placeholder?.includes('Parking') &&
                  !placeholder?.includes('Area') &&
                  !placeholder?.includes('Rent') &&
                  !placeholder?.includes('Budget')
                )
                  handleBlur();
                onBlur(e);
              }}
              value={props.value}
              onChange={
                !placeholder?.includes('Price') &&
                !placeholder?.includes('Bed') &&
                !placeholder?.includes('Bath') &&
                !placeholder?.includes('Parking') &&
                !placeholder?.includes('Area') &&
                !placeholder?.includes('Rent') &&
                !placeholder?.includes('Budget')
                  ? handleChange
                  : undefined
              }
              secureTextEntry={type === 'password' && password}
              placeholderTextColor={textInputPlaceholder ? '#a1a1aa' : ''}
              placeholder={
                textInputPlaceholder
                  ? onFocus
                    ? textInputPlaceholder
                    : ''
                  : placeholder === 'Phone Number'
                    ? 'Phone Number'
                    : label
                      ? onFocus
                        ? placeholder
                        : undefined
                      : undefined
              }
              multiline={multiline}
              numberOfLines={multiline ? numberOfLines : 1}
              textAlignVertical="center"
            />
            {props.value && placeholder?.includes('Area') && (
              <Text className={cn('text-zinc-400', textInputClass)}>m²</Text>
            )}
          </View>
        </TouchableOpacity>
        {type === 'password' && (
          <TouchableOpacity
            className="flex-col justify-center"
            activeOpacity={1}
            onPress={() => setPassword(!password)}>
            <Image
              source={require('@/assets/images/eye.png')}
              style={{ width: scale(13), height: scale(13) }}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

Input.displayName = 'Input';

export { Input };
