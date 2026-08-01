import {
  Button,
  Input,
  PasswordInput,
} from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useFormWithValidation } from '@hooks/use-form-with-validation';

import styles from './reset-password.module.css';

export const ResetPassword = () => {
  const navigate = useNavigate();

  // Проверка флага при монтировании страницы.
  useEffect(() => {
    const wasVisited = localStorage.getItem('forgotPasswordVisited');
    if (!wasVisited) {
      navigate('/forgot-password', { replace: true });
    }
  }, [navigate]);

  const { values, handleChange, isValid } = useFormWithValidation({
    password: '',
    token: '', // Это код из письма
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Данные сброса пароля:', values);

    // В случае успеха по ТЗ: очищаем флаг и отправляем на логин.
    localStorage.removeItem('forgotPasswordVisited');
    navigate('/login');
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>

        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name="password"
          placeholder="Введите новый пароль"
          extraClass="mb-6"
        />

        <Input
          type="text"
          placeholder="Введите код из письма"
          onChange={handleChange}
          value={values.token}
          name="token"
          size="default"
          extraClass="mb-6"
        />

        <Button htmlType="submit" type="primary" size="medium" disabled={!isValid}>
          Сохранить
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
