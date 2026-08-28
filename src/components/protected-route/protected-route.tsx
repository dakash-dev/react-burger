import { Navigate, useLocation } from 'react-router-dom';

import { selectIsAuthChecked, selectUser } from '../../services/auth/slice';
import { useAppSelector } from '../../services/hooks';
import Preloader from '../preloader/preloader';

import type { FC, ReactElement } from 'react';

type TProtectedProps = {
  onlyUnAuth?: boolean;
  component: ReactElement;
};

type TOnlyUnAuthProps = {
  component: ReactElement;
};

type TLocationState = {
  from?: {
    pathname: string;
  };
};

const Protected: FC<TProtectedProps> = ({
  onlyUnAuth = false,
  component,
}): ReactElement => {
  // Достаем данные пользователя и статус проверки токена.
  const isAuthChecked = useAppSelector(selectIsAuthChecked);
  const user = useAppSelector(selectUser);
  const location = useLocation();

  // Если проверка токена не проходит — ничего не рендерим
  // Preloader работает, чтобы во время ожидания ответа от
  // сервера у авторизированного пользователя не показывалась
  // страница логина.
  if (!isAuthChecked) {
    return <Preloader />;
  }

  // Это маршрут только для НЕавторизованных (Login, Register, ForgotPassword), но юзер УЖЕ вошел!
  if (onlyUnAuth && user) {
    // Возвращаем его на сохраненный ранее маршрут или на главную страницу!!!!!
    const state = location.state as TLocationState | null;
    const from = state?.from || { pathname: '/' };
    return <Navigate to={from} replace />;
  }

  // Это маршрут только для АВТОРИЗОВАННЫХ (Profile), но юэверя НЕТ в системе!
  if (!onlyUnAuth && !user) {
    // Отправляем на логин, и сохраняем в state  URL для будущего возврата...
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Если все проверки ок — рендерим защищаемую страницу.
  return component;
};

// Экспортируем обёртки для App.jsx
export const OnlyAuth: FC<TProtectedProps> = Protected;
export const OnlyUnAuth: FC<TOnlyUnAuthProps> = ({ component }): ReactElement => {
  return <Protected onlyUnAuth={true} component={component} />;
};
