export const text2xl = (width: number) => {
  if (width === 430) return 'native:text-4302xl';
  if (width === 375) return 'native:text-3752xl';
  if (width === 390 || width === 414) return 'native:text-390x4142xl';
  return 'native:text-4302xl';
};

export const textSm = (width: number) => {
  if (width === 430) return 'native:text-430sm';
  if (width === 375) return 'native:text-375sm';
  if (width === 390 || width === 414) return 'native:text-390x414sm';
  return 'native:text-430sm';
};

export const textXs = (width: number) => {
  if (width === 430) return 'native:text-430xs';
  if (width === 375) return 'native:text-375xs';
  if (width === 390 || width === 414) return 'native:text-390x414xs';
  return 'native:text-430xs';
};

export const textBase = (width: number) => {
  if (width === 430) return 'native:text-430base';
  if (width === 375) return 'native:text-375base';
  if (width === 390 || width === 414) return 'native:text-390x414base';
  return 'native:text-430base';
};

export const text32 = (width: number) => {
  if (width === 430) return 'native:text-43032px';
  if (width === 375 || width === 390 || width === 414) return 'native:text-375x390x41432';
  return 'native:text-43032px';
};
