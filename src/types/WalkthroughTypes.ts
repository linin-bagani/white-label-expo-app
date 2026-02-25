import { ModalProps } from './CommonTypes';

export type WalkthroughSaveSuccessModalProps = ModalProps & {
  onViewVideo: () => void;
  onShareVideo: () => void;
  slugUrlPrefix?: string;
};

export type ViewWalkthroughModalProps = ModalProps & {
  videoUrl: string;
  onShareVideo: () => void;
};
