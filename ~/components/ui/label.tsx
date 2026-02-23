import * as LabelPrimitive from '@rn-primitives/label';
import * as React from 'react';
import { cn } from '~/lib/utils';

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Text> {
  error?: boolean;
}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Text>, LabelProps>(
  ({ className, onPress, onLongPress, onPressIn, onPressOut, error, ...props }, ref) => (
    <LabelPrimitive.Root
      className="web:cursor-default"
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <LabelPrimitive.Text
        ref={ref}
        className={cn(
          'text-sm text-foreground dark:text-foreground-light native:text-base font-medium leading-none web:peer-disabled:cursor-not-allowed web:peer-disabled:opacity-70',
          error ? 'text-destructive' : '', // Conditionally apply `text-destructive`
          className,
        )}
        {...props}
      />
    </LabelPrimitive.Root>
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
