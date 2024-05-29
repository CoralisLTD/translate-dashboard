export function isNotEmpty(input) {
  var inputString;
  if ((typeof input === "object") && input !== null) {
    inputString = String(input.value);
  } else if (input !== null) {
    inputString = String(input);
  }
  const regex = new RegExp(/.+/);
  if (!inputString) return false;
  return regex.test(inputString);
}
