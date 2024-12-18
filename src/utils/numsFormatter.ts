/**
 * Formats a number with comma separators
 * @param number - The number to format
 * @param minimumFractionDigits - Minimum number of decimal places (default: 0)
 * @param maximumFractionDigits - Maximum number of decimal places (default: 0)
 * @returns Formatted string (e.g., 100,000)
 */
export const formatNumber = (number: number, minimumFractionDigits: number = 0, maximumFractionDigits: number = 0): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
    useGrouping: true,
  }).format(number);
};

/**
 * Formats a large number with K/M/B suffix
 * @param number - The number to format
 * @returns Formatted string (e.g., 1.2M)
 */
export const formatCompactNumber = (number: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(number);
};

/**
 * Formats a number into a price format with commas as thousands separators.
 * @param value - The number to be formatted.
 * @returns A formatted string with commas.
 */
export const formatPrice = (value: number): string => {
  return value.toLocaleString('en-US');
};

/**
 * Formats a number into a price format with optional currency and decimals.
 * @param value - The number to be formatted.
 * @param currency - Optional currency symbol (e.g., '$').
 * @param decimals - Number of decimal places (default is 0).
 * @returns A formatted string with commas and currency.
 */
export const formatPriceS = (value: number, currency: string = '', decimals: number = 0): string => {
  return `${currency}${value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

/**
 * Formats a string or number input into a price format with commas.
 * @param value - The input value to be formatted (string or number).
 * @returns A formatted string with commas as thousands separators.
 */
export const formatInputPrice = (value: string | number): string => {
  const numericValue = value.toString().replace(/[^\d.]/g, ""); // Remove non-numeric characters
  const parts = numericValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas to the integer part
  return parts.join("."); // Rejoin integer and decimal parts
};