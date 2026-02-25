export const agentMobileNumberBuilder = (
  mobileNumberCountryCode?: number | string | null,
  mobileNumber?: number | string | null,
) => {
  const isValidMobileNumber =
    mobileNumber && Number(mobileNumber) !== 0 && String(mobileNumber).trim() !== '';
  const isValidCountryCode =
    mobileNumberCountryCode && String(mobileNumberCountryCode).trim() !== '';

  return isValidMobileNumber && isValidCountryCode
    ? `+${mobileNumberCountryCode} ${mobileNumber}`
    : '-';
};
