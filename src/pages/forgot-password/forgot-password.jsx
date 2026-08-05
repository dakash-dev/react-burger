import { Button, EmailInput } from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { passwordResetRequest } from '@/utils/burger-api';
import { useFormWithValidation } from '@hooks/use-form-with-validation';

import styles from './forgot-password.module.css';

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, isValid } = useFormWithValidation({
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    passwordResetRequest(values)
      .then((data) => {
        if (data.success) {
          // Устанавливаем флаг, что пользователь пришел со страницы восстановления.
          localStorage.setItem('forgotPasswordVisited', 'true');
          navigate('/reset-password');
        }
      })
      .catch((err) => console.error('Ошибка восстановления пароля:', err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>

        <EmailInput
          onChange={handleChange}
          value={values.email}
          name="email"
          placeholder="Укажите e-mail"
          isIcon={false}
          disabled={isLoading}
          extraClass="mb-6"
        />

        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!isValid || isLoading}
        >
          {isLoading ? 'Восстановление...' : 'Восстановить'}
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
