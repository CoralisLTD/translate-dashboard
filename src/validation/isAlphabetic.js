export function isAlphabetic(input) {
  const inputString = String(input);
  const regex = new RegExp(/^[\u0590-\u05FFa-zA-Z '.\-()]+$/);
  if (!inputString) return false;
  return regex.test(inputString);
}
