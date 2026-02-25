export const formatToUnits = (number: number, precision?: number) => {
  if (number === 0) return number;

  const abbrev = ['', 'k', 'm', 'b', 't'];
  const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3);
  const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length - 1));
  const suffix = abbrev[order];

  let formatted = `${(number / 10 ** (order * 3)).toFixed(number > 999999 ? 2 : (precision ?? 0))}`;

  const hasDot = formatted.lastIndexOf('.') > 0;

  if (number > 999999 && hasDot && formatted.endsWith('0')) formatted = formatted.slice(0, -1);

  if (/\.0$/.test(formatted)) {
    formatted = formatted.substr(0, formatted.length - 2);
  }
  return formatted + suffix;
};
