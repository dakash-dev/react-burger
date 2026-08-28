import { useState } from 'react';

import { validators } from '../utils/validators';

import type { ChangeEvent } from 'react';

type TUseFormReturn<T> = {
  values: T;
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errors: Record<keyof T, boolean>;
  isValid: boolean;
};

export function useFormWithValidation<T extends Record<string, string>>(
  initialValues: T = {} as T
): TUseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, boolean>>(() =>
    initErrors(initialValues)
  );
  const [isValid, setIsValid] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target;
    const value = input.value;
    const name = input.name as keyof T & string; // Приведение к типу ключа формы.

    const newValues: T = {
      ...values,
      [name]: value,
    };

    setValues(newValues);

    const newErrors: Record<keyof T, boolean> = {
      ...errors,
      [name]: validators[name]?.validator(value) ?? true,
    };

    setErrors(newErrors);

    const formIsNotValid = Object.values(newErrors).some((x) => !x);

    setIsValid(!formIsNotValid);
  }

  return { values, handleChange, errors, isValid };
}

function initErrors<T extends Record<string, string>>(
  formValues: T
): Record<keyof T, boolean> {
  return Object.keys(formValues).reduce(
    (errors, fieldName) => {
      errors[fieldName as keyof T] = false;
      return errors;
    },
    {} as Record<keyof T, boolean>
  );
}
