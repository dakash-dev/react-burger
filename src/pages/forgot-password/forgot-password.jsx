import { Button, EmailInput } from '@krgaa/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';

import { checkResponse } from '@/utils/check-response';
import { BASE_URL } from '@/utils/constants';
import { useFormWithValidation } from '@hooks/use-form-with-validation';

import styles from './forgot-password.module.css';

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { values, handleChange, isValid } = useFormWithValidation({
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${BASE_URL}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          // Устанавливаем флаг, что пользователь пришел со страницы восстановления.
          localStorage.setItem('forgotPasswordVisited', 'true');
          navigate('/reset-password');
        }
      })
      .catch((err) => console.error('Ошибка восстановления пароля:', err));
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
          extraClass="mb-6"
        />

        <Button htmlType="submit" type="primary" size="medium" disabled={!isValid}>
          Восстановить
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
