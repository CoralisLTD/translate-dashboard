export function isValidIsraeliPhone(input) {
  const inputString = String(input);
  const regex = new RegExp(/^(972|0)0?(([23489]{1}\d{7})|[5]{1}\d{8})$/);
  if (!inputString) return false;
  return regex.test(inputString);
}
