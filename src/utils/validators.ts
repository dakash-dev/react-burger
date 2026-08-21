const PWD_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{6,}$/;
// Исправлено {2,4} на {2,}, чтобы поддерживать длинные домены (.online, .travel и т.д.)
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_REGEX = /^[A-Za-zА-Яа-яЁё0-9\s-]{2,}$/;

type TValidationRule = {
  // eslint-disable-next-line no-unused-vars
  validator: (value: string) => boolean;
  message: string;
};

type TValidators = Record<string, TValidationRule>;

export const validators: TValidators = {
  name: {
    validator: (value: string): boolean => !!value && NAME_REGEX.test(value.trim()),
    message: 'Укажите корректное имя.',
  },
  email: {
    validator: (value: string): boolean => !!value && EMAIL_REGEX.test(value.trim()),
    message: 'Укажите корректный email.',
  },
  password: {
    validator: (value: string): boolean => !!value && PWD_REGEX.test(value.trim()),
    message: 'Укажите пароль посложнее.',
  },
};
