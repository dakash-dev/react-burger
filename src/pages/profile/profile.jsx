import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@krgaa/react-developer-burger-ui-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logoutUser, selectUser } from '../../services/auth/slice';

import styles from './profile.module.css';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({ name: user.name || '', email: user.email || '', password: '' });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const nextForm = { ...form, [e.target.name]: e.target.value };
    setForm(nextForm);
    setIsFormChanged(
      nextForm.name !== (user?.name || '') ||
        nextForm.email !== (user?.email || '') ||
        nextForm.password !== ''
    );
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setForm({ name: user?.name || '', email: user?.email || '', password: '' });
    setIsFormChanged(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка PATCH-запроса:', form);
  };

  return (
    <div className={styles.wrapper}>
      <nav className={`${styles.sidebar} mr-15`}>
        <NavLink
          to="/profile"
          end
          className={({ isActive }) =>
            `${styles.tab_link} text text_type_main-medium ${
              isActive ? styles.tab_active : 'text_color_inactive'
            }`
          }
        >
          Профиль
        </NavLink>
        <button onClick={() => dispatch(logoutUser())} className={styles.logout_btn}>
          Выход
        </button>
      </nav>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Имя"
          onChange={handleInputChange}
          value={form.name}
          name="name"
          icon="EditIcon"
          extraClass="mb-6"
        />
        <EmailInput
          onChange={handleInputChange}
          value={form.email}
          name="email"
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleInputChange}
          value={form.password}
          name="password"
          icon="EditIcon"
          placeholder="Пароль"
          extraClass="mb-6"
        />
        {isFormChanged && (
          <div className={styles.buttons_container}>
            <button type="button" onClick={handleCancel} className={styles.cancel_btn}>
              Отмена
            </button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};
