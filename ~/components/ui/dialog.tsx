import * as DialogPrimitive from '@rn-primitives/dialog';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
  import { X } from '../../lib/icons/X';
  import { cn } from '../../lib/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlayNative = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      style={StyleSheet.absoluteFill}
      className={cn('bg-black/80 justify-center items-center', className)}
      {...props}
      ref={ref}>
      <Animated.View entering={FadeIn.duration(150)} exiting={FadeOut.duration(150)}>
        <>{children}</>
      </Animated.View>
    </DialogPrimitive.Overlay>
  );
});

DialogOverlayNative.displayName = 'DialogOverlayNative';

const DialogOverlay = Platform.select({
  default: DialogOverlayNative,
});

// DialogPrimitive.Overlay props
export type DialogOverlayProps = {
  onKeyDown?: (ev: React.KeyboardEvent) => void;
  onKeyUp?: (ev: React.KeyboardEvent) => void;
  closeOnPress?: boolean;
};

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    portalHost?: string;
    showClose?: boolean;
    overlayProps?: DialogOverlayProps;
  }
>(({ className, children, portalHost, overlayProps = {}, showClose = true, ...props }, ref) => {
  const { open } = DialogPrimitive.useRootContext();
  return (
    <DialogPortal hostName={portalHost}>
      <DialogOverlay {...overlayProps}>
        <DialogPrimitive.Content
          ref={ref}
          className={cn('bg-background dark:bg-background-dark shadow-lg', className)}
          {...props}>
          {children}
          {showClose && (
            <DialogPrimitive.Close className={'absolute right-4 top-4 rounded-sm opacity-70 p-2'}>
              <X size={18} className={cn('', open && 'text-zinc-400')} />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  );
});

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogContentWithSafeAreaView = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    portalHost?: string;
    showClose?: boolean;
    overlayProps?: DialogOverlayProps;
  }
>(({ className, children, portalHost, overlayProps = {}, showClose = true, ...props }, ref) => {
  const { open } = DialogPrimitive.useRootContext();
  return (
    <DialogPortal hostName={portalHost}>
      <DialogOverlay {...overlayProps}>
        <SafeAreaView>
          <DialogPrimitive.Content
            ref={ref}
            className={cn(
              'z-50a max-w-lg gap-4 border border-border dark:border-0 web:cursor-default bg-background dark:bg-background-dark p-6 shadow-lg web:duration-200 rounded-xl',
              open
                ? 'web:animate-in web:fade-in-0 web:zoom-in-95'
                : 'web:animate-out web:fade-out-0 web:zoom-out-95',
              className,
            )}
            {...props}>
            {children}
            {showClose && (
              <DialogPrimitive.Close
                className={
                  'absolute right-4 top-4 web:group rounded-sm opacity-70 web:ring-offset-background web:transition-opacity web:hover:opacity-100 web:focus:outline-none web:focus:ring-2 web:focus:ring-ring web:focus:ring-offset-2 web:disabled:pointer-events-none p-2'
                }>
                <X
                  size={Platform.OS === 'web' ? 16 : 18}
                  className={cn('', open && 'text-neutral-500')}
                />
              </DialogPrimitive.Close>
            )}
          </DialogPrimitive.Content>
        </SafeAreaView>
      </DialogOverlay>
    </DialogPortal>
  );
});

DialogContentWithSafeAreaView.displayName = 'DialogContentWithSafeAreaView';

const DialogHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View className={cn('flex flex-col gap-1.5 text-center sm:text-left', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end gap-2', className)}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg native:text-xl text-foreground dark:text-foreground-light font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm native:text-base text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogContentWithSafeAreaView,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
