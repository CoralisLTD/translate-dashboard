export function minLength(input, numberOrFn) {
  if (typeof numberOrFn === "function") return numberOrFn(String(input).length);
  return input && Number(numberOrFn) <= String(input).length;
}

export function maxLength(input, numberOrFn) {
  if (typeof numberOrFn === "function") return numberOrFn(String(input).length);
  return input && Number(numberOrFn) > String(input).length;
}
