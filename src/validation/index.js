import { isValidIsraeliPhone } from "./isValidIsraeliPhone";
import { isNotEmpty } from "./isNotEmpty";
import { isValidIsraeliID } from "./isValidIsraeliID";
import { isAlphabetic } from "./isAlphabetic";
import { minLength } from "./minLength";
import { isValidEmailAddress } from "./isValidEmailAddress";

function findInvalid(input, validators) {
  const validatorsArray = Array.isArray(validators) ? validators : [validators];
  return validatorsArray.find((validate) => !validate(input));
}

function hasError(input, validators, needText) {
  const hasInvalid = findInvalid(input, validators);
  return needText
    ? hasInvalid
      ? hasInvalid.errorText || "Input is not valid"
      : ""
    : !!hasInvalid;
}

function withError(validator, errorText) {
  const validatorWithErrorText = validator;
  validatorWithErrorText.errorText = errorText;
  return validatorWithErrorText;
}

export {
  withError,
  isNotEmpty,
  isValidIsraeliID,
  isValidEmailAddress,
  hasError,
  isValidIsraeliPhone,
  isAlphabetic,
  minLength,
};
