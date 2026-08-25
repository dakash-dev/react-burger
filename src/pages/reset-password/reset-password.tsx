import {
  Button,
  Input,
  PasswordInput,
} from '@krgaa/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { passwordResetConfirmRequest } from '@/utils/burger-api';
import { useFormWithValidation } from '@hooks/use-form-with-validation';

import type { TBaseResponse } from '@/utils/burger-api';
import type { FormEvent, ReactElement } from 'react';

import styles from './reset-password.module.css';

export const ResetPassword = (): ReactElement | null => {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Проверка флага при монтировании страницы.
  useEffect((): void => {
    const wasVisited = localStorage.getItem('forgotPasswordVisited');

    // Если флага нет — жестко уводим на forgot-password
    if (!wasVisited) {
      navigate('/forgot-password');
    } else {
      // Если флаг есть — разрешаем показ формы
      setIsAllowed(true);
    }
  }, [navigate]);

  const { values, handleChange, isValid } = useFormWithValidation({
    password: '',
    token: '', // Это код из письма
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsLoading(true);
    // console.log('Данные перед отправкой на сервер:', values);

    // Вызываем метод сетевого слоя и передаем объект с данными формы
    passwordResetConfirmRequest(values)
      .then((data: TBaseResponse): void => {
        if (data.success) {
          // В случае успеха очищаем флаг и отправляем на логин по ТЗ
          localStorage.removeItem('forgotPasswordVisited');
          navigate('/login', { replace: true });
        }
      })
      .catch((err: unknown): void => console.error('Ошибка сброса пароля:', err))
      .finally((): void => setIsLoading(false));
  };

  // Если зашли напрямую, прерываем рендер, чтобы страница не падала в "белый экран"
  if (!isAllowed) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>

        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name="password"
          placeholder="Введите новый пароль"
          disabled={isLoading}
          extraClass="mb-6"
        />

        <Input
          type="text"
          placeholder="Введите код из письма"
          onChange={handleChange}
          value={values.token}
          name="token"
          size="default"
          disabled={isLoading}
          extraClass="mb-6"
        />

        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!isValid || isLoading}
        >
          {isLoading ? 'Сохранение...' : 'Сохранить'}
        </Button>
      </form>

      <div className={`${styles.footer} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{' '}
          <Link to="/login" className={styles.link}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
