/**
 * @fileoverview Custom hook
 */
import { useState } from "react";

export const useFormInput = () => {
  const [value, setValue] = useState<string>('');
  const [validity, setValidity] = useState<boolean>(false);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    setValue(inputValue);
    if (inputValue.trim() === '') {
      setValidity(false);
    } else {
      setValidity(true)
    }
  }

  return {
    value: value,
    onChange: inputChangeHandler,
    validity: validity
  }
};
