import { Property } from '@/__generated__/types';
import * as WebBrowser from 'expo-web-browser';

export const formattedPrice = (price: number, decimal?: number) => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: decimal || 0,
  });
};

export const redirectTermsPrivacy = async () => {
  const TERMS_PRIVACY_URL = 'https://www.homeowner.com.au/privacy-policy';
  await WebBrowser.openBrowserAsync(TERMS_PRIVACY_URL);
};

export const numberStringToNumber = (numberString: string): number => {
  return parseFloat(numberString.replace(/,/g, ''));
};

export const validateCurrencyValue = (value: string, decimalPlaces?: number) => {
  let inputValue = '';

  const valuePattern: RegExp = new RegExp(`^\\d*\\.?\\d{0,${decimalPlaces || 2}}$`);

  if (valuePattern.test(value)) {
    inputValue = value;
  }

  return inputValue;
};

export const formatToCurrency = (value: string) => {
  if (value) {
    let [integer] = value.replace(/,/g, '').split('.');
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '0';

    return integer;
  } else return '';
};

export const imgToBase64 = async (imgUrl: string) => {
  const data = await fetch(imgUrl);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader(); // eslint-disable-line
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};

export const propertyUrl = (
  slugUrlPrefix: Property['slugUrlPrefix'],
  slugUrl: Property['slugUrl'],
) => {
  const baseUrl = 'https://www.realty.com.au';

  return `${baseUrl}/${slugUrlPrefix}/${slugUrl}`;
};

export const isValidPhoneNumber = (dialCode: number, number: string) => {
  const regexMap: { [key: string]: RegExp } = {
    61: /[4-5]\d{8}$/,
    64: /^0[34679]\d{7}$/,
    1: /^0[34679]\d{7}$/,
    63: /^9[\d]{9}$/,
  };

  return regexMap[dialCode]?.test(number);
};

export const maskPhoneNumber = (phoneNumber: string) => {
  const clonePhoneNumber = phoneNumber.toString().replace(/\D/g, '');
  const unmaskedNumber =
    clonePhoneNumber.slice(0, 2) +
    clonePhoneNumber.slice(2, -3).replace(/\d/g, '*') +
    clonePhoneNumber.slice(-3);

  return unmaskedNumber;
};
