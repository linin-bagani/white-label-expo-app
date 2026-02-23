import { ButtonProps } from '@/types/UITypes';
import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { cn } from '~/lib/utils';

const buttonVariants = {
  default: 'py-6 px-6 rounded-lg',
  outline: 'border border-primary-foreground py-6 px-6 rounded-xl',
  secondary: 'py-6 px-6 rounded-lg',
  ghost: 'bg-transparent py-6 px-6 rounded-lg',
  link: 'bg-transparent py-6 px-6 rounded-lg',
  dark: 'bg-dark py-6 px-6 rounded-md',
  success: 'bg-emerald-50 py-6 px-6 rounded-md',
};

const sizeVariants = {
  default: 'text-base py-6 px-6',
  sm: 'text-sm py-2 px-2',
  lg: 'text-lg py-8 px-8',
  icon: 'text-base py-4 px-2',
};

const textVariants = {
  default: 'font-bold text-center',
  outline: 'font-bold text-center',
  secondary: 'font-bold text-center',
  ghost: 'font-bold text-center',
  link: 'font-bold text-center',
  dark: 'font-bold text-lg text-white text-center',
  success: 'font-bold text-lg text-green-600 text-center',
};

const colorVariants = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  destructive: 'bg-destructive text-destructive-foreground',
  accent: 'bg-accent text-accent-foreground',
  dark: 'bg-dark text-whites-foreground',
  custom: '', // Placeholder for custom colors passed via props
};

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'default',
      color = 'primary', // Default color is primary
      customColorClass = '', // New prop for custom color class
      disabled = false,
      children,
      className,
      onPress,
      icon,
      ...props
    },
    ref,
  ) => {
    // Combine button styles
    const buttonClass = cn(
      buttonVariants[variant],
      sizeVariants[size],
      color === 'custom' ? customColorClass : colorVariants[color], // Apply custom color if variant is custom
      disabled && 'opacity-50 pointer-events-none',
      className,
    );

    // Combine text styles
    const textClass = cn(
      textVariants[variant],
      color === 'custom' ? customColorClass : '', // Apply custom color if variant is custom
      size === 'lg' && 'text-xl',
      'leading-6 text-center',
    );

    return (
      <Pressable className={buttonClass} ref={ref} onPress={onPress} disabled={disabled} {...props}>
        {icon ? children : <Text className={textClass}>{children}</Text>}
      </Pressable>
    );
  },
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
