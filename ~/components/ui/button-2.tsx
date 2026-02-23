import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Pressable } from 'react-native';
import { cn } from '~/lib/utils';
import { TextClassContext } from '~/components/ui/text';
import { LinearGradient } from 'expo-linear-gradient';

const buttonVariants = cva(
  'group flex items-center justify-center rounded-lg web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-btn-primary web:hover:opacity-90 active:opacity-90',
        destructive: 'bg-destructive web:hover:opacity-90 active:opacity-90',
        outline: 'border border-input bg-background dark:bg-background-dark-300 active:bg-accent ',
        secondary: 'bg-primary web:hover:opacity-80 active:opacity-80',
        ghost: 'web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        link: 'web:underline-offset-4 web:hover:underline web:focus:underline ',
        gradient: 'bg-transparent web:hover:opacity-90 active:opacity-90',
      },
      size: {
        default: 'h-10 px-4 py-2 native:h-12 native:px-5 native:py-3',
        sm: 'h-9 rounded-lg px-3',
        lg: 'h-11 rounded-lg px-8 native:h-14',
        xl: 'h-16 rounded-lg px-10 native:h-16',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const buttonTextVariants = cva(
  'web:whitespace-nowrap text-sm native:text-base font-medium text-foreground dark:text-foreground-light web:transition-colors',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        gradient: 'text-primary-foreground',
        destructive: 'text-destructive-foreground',
        outline: 'group-active:text-accent-foreground ',
        secondary: 'text-secondary-foreground group-active:text-secondary-foreground',
        ghost: 'group-active:text-accent-foreground',
        link: 'text-primary dark:text-primary-500 group-active:underline',
      },
      size: {
        default: '',
        sm: '',
        lg: 'native:text-lg',
        xl: 'native:text-xl',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const [pressed, setPressed] = React.useState(false);
    return (
      <TextClassContext.Provider
        value={buttonTextVariants({ variant, size, className: 'web:pointer-events-none' })}>
        {variant === 'gradient' ? (
          <LinearGradient
            style={{
              overflow: 'hidden',
              borderRadius: 8,
            }}
            colors={[pressed ? '#7c3aedD9' : '#7c3aed', pressed ? '#2563ebD9' : '#2563eb']}
            start={[0, 0]}
            locations={[0.5, 1]}
            end={[1, 1]}>
            <Pressable
              onPressIn={() => setPressed(true)}
              onPressOut={() => setPressed(false)}
              className={cn(
                props.disabled && 'opacity-50 web:pointer-events-none',
                buttonVariants({ variant, size, className }),
              )}
              ref={ref}
              role="button"
              {...props}
            />
          </LinearGradient>
        ) : (
          <Pressable
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            className={cn(
              props.disabled && 'opacity-50 web:pointer-events-none',
              buttonVariants({ variant, size, className }),
            )}
            ref={ref}
            role="button"
            {...props}
          />
        )}
      </TextClassContext.Provider>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
