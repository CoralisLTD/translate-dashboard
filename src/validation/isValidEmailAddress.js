/* eslint-disable */

export function isValidEmailAddress(input) {
  const inputString = String(input);
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/);
  if (!inputString) return false;
  return regex.test(inputString);
}
