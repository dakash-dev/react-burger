import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

import { logoutUser } from '../../services/auth/actions';

import styles from './profile.module.css';

export const ProfilePage = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div>
        <nav className={styles.sidebar}>
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
          <NavLink
            to="/profile/orders"
            className={({ isActive }) =>
              `${styles.tab_link} text text_type_main-medium ${
                isActive ? styles.tab_active : 'text_color_inactive'
              }`
            }
          >
            История заказов
          </NavLink>
          <button
            onClick={() => dispatch(logoutUser())}
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
