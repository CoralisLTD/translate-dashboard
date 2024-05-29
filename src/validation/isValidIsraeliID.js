export function isValidIsraeliID(id) {
  const idString = String(id);
  if (!idString || /^.{0,8}$/.test(idString)) return false;
  const isNineDigits = /^\d{9}$/.test(idString);
  const isDivided =
    Array.from(idString, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    }) %
      10 ===
    0;
  return isNineDigits && isDivided;
}
