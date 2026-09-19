import { NavLink, Outlet } from 'react-router-dom';

import SEO from '@components/seo/seo';

import { logoutUser } from '../../services/auth/actions';
import { useAppDispatch } from '../../services/hooks';

import type { ReactElement } from 'react';

import styles from './profile.module.css';

export const ProfilePage = (): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <SEO title="Профиль пользователя" />
      <div>
        <nav className={styles.sidebar}>
          <NavLink
            to="/profile"
            end
            className={({ isActive }: { isActive: boolean }): string =>
              `${styles.tab_link} text text_type_main-medium ${
                isActive ? styles.tab_active : 'text_color_inactive'
              }`
            }
          >
            Профиль
          </NavLink>
          <NavLink
            to="/profile/orders"
            className={({ isActive }: { isActive: boolean }): string =>
              `${styles.tab_link} text text_type_main-medium ${
                isActive ? styles.tab_active : 'text_color_inactive'
              }`
            }
          >
            История заказов
          </NavLink>
          <button
            onClick={(): void => {
              dispatch(logoutUser());
            }}
            className={`${styles.logout_btn} text text_type_main-medium text_color_inactive`}
          >
            Выход
          </button>
        </nav>
        <p
          className={`${styles.info_text} text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <Outlet />
    </div>
  );
};
