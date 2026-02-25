import { ReactNode } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
}

interface ButtonProps {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'dark' | 'success';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  children: ReactNode;
  onPress?: () => void;
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'dark' | 'custom'; // 'custom' added to handle dynamic colors
  customColorClass?: string; // For dynamic Tailwind classes like 'text-red-500'
  loading?: boolean;
  gradient?: string[];
  icon?: boolean;
}

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  labelPosition?: 'before' | 'after';
  className?: string; // Use className for additional styles
}

interface SelectOptionProps {
  label: string;
  value: string | number;
}

export { InputProps, ButtonProps, CheckboxProps, SelectOptionProps };
