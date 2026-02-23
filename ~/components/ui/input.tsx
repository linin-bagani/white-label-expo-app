import * as React from 'react';
import { TextInput, type TextInputProps, View } from 'react-native';
import { cn } from '~/lib/utils';

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, TextInputProps>(
  ({ className, placeholderClassName, ...props }, ref) => {
    const [inputHeight, setHeight] = React.useState<number | null>(null);

    return (
      <View
        style={{
          minHeight: 60,
        }}
        onLayout={(e) => !inputHeight && setHeight(e.nativeEvent.layout.height)}
        className={cn(
          'px-4 justify-center flex w-full rounded-xl bg-background-dark-100 dark:bg-background-dark-300',
          className,
        )}>
        <TextInput
          ref={ref}
          className={cn(
            'w-full shrink dark:text-foreground-light text-foreground-dark placeholder:text-zinc-400 file:border-0 file:bg-transparent file:font-medium',
            props.editable === false && 'opacity-50 web:cursor-not-allowed',
          )}
          placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
          {...props}
        />
      </View>
    );
  },
);

Input.displayName = 'Input';

export { Input };
