import { useState } from "react";

const useInput = (validateValue, inputField) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueErrorMsg = validateValue(inputField, enteredValue);
  const valueIsValid = !valueErrorMsg.length;
  const hasErrorMsg = !valueIsValid && isTouched ? valueErrorMsg : "";

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasErrorMsg,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
