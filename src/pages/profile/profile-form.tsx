import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@krgaa/react-developer-burger-ui-components';
import { useState, useEffect } from 'react';

import { updateUser } from '../../services/auth/actions';
import { selectUser, selectAuthLoading } from '../../services/auth/slice';
import { useAppDispatch, useAppSelector } from '../../services/hooks';

import type { ChangeEvent, FormEvent, ReactElement } from 'react';

import styles from './profile-form.module.css';

type TProfileFormState = {
  name: string;
  email: string;
  password: string;
};

export const ProfileForm = (): ReactElement => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isAuthLoading = useAppSelector(selectAuthLoading);

  const [form, setForm] = useState<TProfileFormState>({
    name: '',
    email: '',
    password: '',
  });
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect((): void => {
    if (user) {
      setForm({ name: user.name || '', email: user.email || '', password: '' });
    }
  }, [user]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const nextForm: TProfileFormState = { ...form, [e.target.name]: e.target.value };
    setForm(nextForm);
    setIsFormChanged(
      nextForm.name !== (user?.name || '') ||
        nextForm.email !== (user?.email || '') ||
        nextForm.password !== ''
    );
  };

  const handleCancel = (e: FormEvent): void => {
    e.preventDefault();
    setForm({ name: user?.name || '', email: user?.email || '', password: '' });
    setIsFormChanged(false);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(updateUser(form))
      .unwrap()
      .then(() => setIsFormChanged(false))
      .catch((err: unknown): void => console.error('Ошибка обновления профиля:', err));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Имя"
        onChange={handleInputChange}
        value={form.name}
        name="name"
        icon="EditIcon"
        disabled={isAuthLoading}
        extraClass="mb-6"
      />
      <EmailInput
        onChange={handleInputChange}
        value={form.email}
        name="email"
        placeholder="Логин"
        isIcon={true}
        disabled={isAuthLoading}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={handleInputChange}
        value={form.password}
        name="password"
        icon="EditIcon"
        placeholder="Пароль"
        disabled={isAuthLoading}
        extraClass="mb-6"
      />

      {isFormChanged && (
        <div className={styles.buttons_container}>
          <button
            type="button"
            onClick={handleCancel}
            className={styles.cancel_btn}
            disabled={isAuthLoading}
          >
            Отмена
          </button>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={isAuthLoading}
          >
            {isAuthLoading ? 'Сохранение...' : 'Сохранить'}
          </Button>
        </div>
      )}
    </form>
  );
};
