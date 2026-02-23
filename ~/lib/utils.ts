import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  // Get the combined class names from clsx and twMerge
  const classNames = twMerge(clsx(inputs));

  return classNames;
}
