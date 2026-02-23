import * as SwitchPrimitives from '@rn-primitives/switch';
import * as React from 'react';
import { Platform } from 'react-native';
import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import { cn } from '~/lib/utils';

const SwitchNative = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const translateX = useDerivedValue(() => (props.checked ? 18 : 0));

  // Animated thumb style
  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(translateX.value, { duration: 200 }) }],
  }));

  return (
    <Animated.View
      className={cn(
        'h-8 w-[46px] rounded-full',
        props.disabled && 'opacity-50',
        props.checked ? 'bg-primary' : 'bg-slate-300', // Background: primary when on, gray when off
      )}>
      <SwitchPrimitives.Root
        className={cn(
          'flex-row h-8 w-[46px] shrink-0 items-center rounded-full border-2 border-transparent',
          className,
        )}
        {...props}
        ref={ref}>
        <Animated.View style={animatedThumbStyle}>
          <SwitchPrimitives.Thumb
            className={cn(
              'h-7 w-7 rounded-full bg-white shadow-md ring-0', // Always white circle
            )}
          />
        </Animated.View>
      </SwitchPrimitives.Root>
    </Animated.View>
  );
});
SwitchNative.displayName = 'SwitchNative';

const Switch = Platform.select({
  default: SwitchNative,
});

export { Switch };
