import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from '@krgaa/react-developer-burger-ui-components';
import { NavLink, Link } from 'react-router-dom';

import type { ReactElement } from 'react';

import styles from './app-header.module.css';

export const AppHeader = (): ReactElement => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }): string =>
              `${styles.link} ${isActive ? styles.link_active : ''}`
            }
          >
            {({ isActive }: { isActive: boolean }): ReactElement => (
              <>
                <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
                <p className="text text_type_main-default ml-2">Конструктор</p>
              </>
            )}
          </NavLink>
          <NavLink
            to="/feed"
            className={({ isActive }: { isActive: boolean }): string =>
              `${styles.link} ml-10 ${isActive ? styles.link_active : ''}`
            }
          >
            {({ isActive }: { isActive: boolean }): ReactElement => (
              <>
                <ListIcon type={isActive ? 'primary' : 'secondary'} />
                <p className="text text_type_main-default ml-2">Лента заказов</p>
              </>
            )}
          </NavLink>
        </div>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <NavLink
          to="/profile"
          className={({ isActive }: { isActive: boolean }): string =>
            `${styles.link} ${styles.link_position_last} ${isActive ? styles.link_active : ''}`
          }
        >
          {({ isActive }: { isActive: boolean }): ReactElement => (
            <>
              <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
              <p className="text text_type_main-default ml-2">Личный кабинет</p>
            </>
          )}
        </NavLink>
      </nav>
    </header>
  );
};
