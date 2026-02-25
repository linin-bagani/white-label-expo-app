export type SocialShareParams = {
  type?: string;
  title?: string;
  message?: string;
  url: string;
};

export type ModalProps = {
  visible: boolean;
  slugUrlPrefix?: string;
  onClose: () => void;
};

export const Status = {
  FOR_SALE: 'buy',
  SOLD: 'sold',
  OFF_MARKET: 'off-market',
};
