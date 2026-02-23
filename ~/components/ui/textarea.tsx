import * as React from 'react';
import { TextInput, View } from 'react-native';
import { cn } from '~/lib/utils';
import { FloatingLabelTextInputProps } from './input-floating-label';
import { Text } from './text';

const Textarea = React.forwardRef<React.ElementRef<typeof TextInput>, FloatingLabelTextInputProps>(
  ({ className, multiline = true, numberOfLines = 2, placeholderClassName, ...props }, ref) => {
    return (
      <View>
        <View
          className={cn(
            'p-4 flex justify-between gap-2 w-full rounded-xl bg-background-dark-100 dark:bg-background-dark-300',
            {
              'border border-red-500': props.isInvalid,
            },
          )}>
          <View className="flex flex-col gap-2">
            {props.label && (
              <View className="flex flex-row items-start gap-1">
                {props.startContent ?? null}
                <Text className="text-sm font-semibold">{props.label}</Text>
              </View>
            )}
            <TextInput
              ref={ref}
              className={cn(
                'web:flex min-h-[80px] w-full rounded-xl bg-background-dark-100 dark:bg-background-dark-300 text-sm lg:text-sm native:text-base native:leading-[1.25] text-foreground dark:text-foreground-light web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 placeholder:text-zinc-400',
                props.editable === false && 'opacity-50 web:cursor-not-allowed',
                className,
              )}
              placeholderClassName={cn('text-foreground text-sm', placeholderClassName)}
              multiline={multiline}
              numberOfLines={numberOfLines}
              textAlignVertical="top"
              {...props}
            />
          </View>
          {props.endContent ?? null}
        </View>
        {props.isInvalid && props.errorMessage && (
          <View
            style={{
              minHeight: 20,
            }}>
            <Text className={cn('text-red-500 pt-2')}>{props.errorMessage}</Text>
          </View>
        )}
      </View>
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
