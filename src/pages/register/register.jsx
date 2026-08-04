import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@krgaa/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useFormWithValidation } from '@hooks/use-form-with-validation';

import { registerUser, selectAuthLoading } from '../../services/auth/slice';

import styles from './register.module.css';

export const Register = () => {
  const dispatch = useDispatch();
  // статус загрузки для блокировки интерфейса
  const isAuthLoading = useSelector(selectAuthLoading);
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(values));
    // console.log('Данные формы регистрации:', values);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
        <Input
          type="text"
          placeholder="Имя"
          onChange={handleChange}
          value={values.name}
          name="name"
          error={!errors.name && values.name !== ''}
          errorText="Укажите корректное имя"
          size="default"
          extraClass="mb-6"
        />

        <EmailInput
          onChange={handleChange}
          value={values.email}
          name="email"
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
        />

        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name="password"
          placeholder="Пароль"
          extraClass="mb-6"
        />

        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!isValid || isAuthLoading}
        >
          {isAuthLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        </Button>
      </form>

      <div className={`${styles.footer} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?{' '}
          <Link to="/login" className={styles.link}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
