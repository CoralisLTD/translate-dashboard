import { useState, useEffect, useContext } from "react";
import { hasError } from "../validation";

/* eslint-disable */
export function useContextFactory(name, context) {
  return () => {
    const ctx = useContext(context);
    if (ctx === undefined) {
      throw new Error(
        `use${name}Context must be used withing a ${name}ContextProvider.`
      );
    }
    return ctx;
  };
}

export const useInput = (props = {}) => {
  let {
    value: initValue,
    label,
    onChange,
    onFocus,
    type = "text",
    validation = () => "",
    errorText,
    placeholder = "",
    helperText,
    options,
    translation = (input) => input,
    ...rest
  } = props;
  const [error, setError] = useState(translation(errorText));
  const [input, setInput] = useState(initValue);
  useEffect(() => {
    setInput(initValue);
  }, [initValue]);
  const _validate = (value) => {
    const validationArray = Array.isArray(validation)
      ? validation
      : [validation];
    const error = translation(hasError(value, validationArray, true));
    setError(error);
    return error;
  };

  if (typeof onChange !== "function")
    onChange = (e) => setInput(e.target.value);
  if (typeof onFocus !== "function") onFocus = () => setError("");

  return {
    value: input,
    type: type,
    label: label,
    placeholder: placeholder,
    error: !!error,
    helperText: error || helperText,
    onChange: onChange,
    onFocus: onFocus,
    options,
    validate: () => _validate(input),
    ...rest
  };
};

export const inputsHasError = (...inputs) => {
  return (
    [...inputs].map((input) => input.validate()).findIndex((input) => input) !==
    -1
  );
};

export const inputs = (...inputsArgs) => {
  return {
    get hasError() {
      return inputsHasError(...inputsArgs);
    }
  };
};

export const useScript = (url) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    document.body.appendChild(script);
    script.onload = () => setIsLoaded(true);
    script.src = url;

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
  return isLoaded;
};

export const sortDate = (a, b) => {
  a = a.split("/").reverse().join("");
  b = b.split("/").reverse().join("");
  return a > b ? 1 : a < b ? -1 : 0;
};
