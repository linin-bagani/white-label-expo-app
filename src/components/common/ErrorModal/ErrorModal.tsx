import React, { FC } from 'react';
import { View } from 'react-native';
import { Button } from '../../../../~/components/ui/button-2';
import { Text } from '../../../../~/components/ui/text';
import {
  Dialog,
  DialogClose,
  DialogContentWithSafeAreaView,
  DialogFooter,
  DialogOverlayProps,
} from '../../../../~/components/ui/dialog';
import useCardShadowStyle from 'hooks/useCardShadowStyle';
import XCircle from '@/components/svg/XCircle';

type Props = {
  visible?: boolean;
  onOpenChange?: (visible: boolean) => void;
  message?: string;
  dialogContentProps?: {
    showClose?: boolean;
    overlayProps?: DialogOverlayProps;
  };
};

const ErrorModal: FC<Props> = ({
  visible,
  onOpenChange = () => {},
  message = 'Error',
  dialogContentProps = {},
}: Props) => {
  const cardShadowStyle = useCardShadowStyle();

  return (
    <Dialog open={visible} onOpenChange={onOpenChange}>
      <DialogContentWithSafeAreaView
        style={cardShadowStyle}
        className="w-screen max-w-xs py-10 bg-white"
        {...dialogContentProps}>
        <View className="flex items-center justify-center gap-6">
          <XCircle color={'#ef4444'} />
          <Text className="text-lg text-center font-semibold">{message}</Text>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={'link'}>
                <Text className={'text-foreground'}>Close</Text>
              </Button>
            </DialogClose>
          </DialogFooter>
        </View>
      </DialogContentWithSafeAreaView>
    </Dialog>
  );
};

export default ErrorModal;
