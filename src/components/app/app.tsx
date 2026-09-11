import { useEffect, useCallback } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/order-details/order-details';
import { OrderInfo } from '@/components/order-info/order-info';
import Preloader from '@/components/preloader/preloader';
import { FeedPage } from '@/pages/feed/feed';
import { ProfileOrdersPage } from '@/pages/profile-orders/profile-orders';
import { fetchIngredients } from '@/services/ingredients/action';
import {
  selectIngredientsLoading,
  selectIngredientsError,
} from '@/services/ingredients/slice';
import {
  clearOrder,
  selectOrderNumber,
  selectOrderLoading,
} from '@/services/order/slice';
import { AppHeader } from '@components/app-header/app-header';
import { OnlyAuth, OnlyUnAuth } from '@components/protected-route/protected-route';

import {
  Home,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  IngredientPage,
  ProfilePage,
  ProfileForm,
} from '../../pages';
import { checkUserAuth } from '../../services/auth/actions';
import { selectIsAuthChecked } from '../../services/auth/slice';
import { useAppDispatch, useAppSelector } from '../../services/hooks';

import type { ReactElement } from 'react';
import type { Location } from 'react-router-dom';

import styles from './app.module.css';

type TLocationState = {
  background?: Location;
};

export const App = (): ReactElement => {
  const location = useLocation() as Location & { state: TLocationState | null };
  const navigate = useNavigate();
  // Фоновая локация.
  const backgroundLocation = location.state?.background;
  const dispatch = useAppDispatch();
  const isIngredientsLoading = useAppSelector(selectIngredientsLoading);
  const error = useAppSelector(selectIngredientsError);
  const isAuthChecked = useAppSelector(selectIsAuthChecked);
  const orderNumber = useAppSelector(selectOrderNumber);
  const isOrderLoading = useAppSelector(selectOrderLoading);

  const handleOrderClose = useCallback((): void => {
    dispatch(clearOrder());
  }, [dispatch]);

  useEffect((): void => {
    void dispatch(fetchIngredients());
    void dispatch(checkUserAuth());
  }, [dispatch]);

  // 1. Если данные еще загружаются — показываем прелоадер и выходим
  if (isIngredientsLoading || !isAuthChecked) {
    return <Preloader />;
  }

  // 2. Если загрузка завершилась, но произошла ошибка — показываем текст ошибки и выходим
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className="text text_type_main-medium">Ошибка загрузки: {error}</div>
      </div>
    );
  }

  // 3. Если данные загрузились - показывает основной интерфейс.
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        {/* Гостевые зоны: авторизованые уходят на главную или назад */}
        <Route path="/register" element={<OnlyUnAuth component={<Register />} />} />
        <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
        <Route
          path="/forgot-password"
          element={<OnlyUnAuth component={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password"
          element={<OnlyUnAuth component={<ResetPassword />} />}
        />
        {/* Защищенная зона: неавторизованные уходят на /login с сохранением истории */}
        <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />}>
          {/* index означает, что по умолчанию на самом /profile откроется форма */}
          <Route index element={<ProfileForm />} />
          {/* Заменил текстовую заглушку на полноценный компонент истории заказов пользователя */}
          <Route path="orders" element={<ProfileOrdersPage />} />
        </Route>
        {/* заход по прямой ссылке (без фона) */}
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        {/* Общедоступный маршрут для страницы глобальной ленты заказов */}
        <Route path="/feed" element={<FeedPage />} />
        {/* Маршрут для открытия деталей заказа на отдельной изолированной странице */}
        <Route path="/feed/:id" element={<OrderInfo />} />
        {/* Защищенный маршрут для открытия деталей заказа из истории на отдельной странице */}
        <Route
          path="/profile/orders/:id"
          element={<OnlyAuth component={<OrderInfo />} />}
        />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                title="Детали ингредиента"
                onClose={(): void => {
                  navigate('/');
                }}
              >
                {/* Используем твою же страницу внутри модалки! Она сама вытащит ID из урла */}
                <IngredientPage />
              </Modal>
            }
          />
          {/* Открытие деталей заказа из общей ленты в модальном окне при клике на карточку */}
          <Route
            path="/feed/:id"
            element={
              <Modal
                onClose={(): void => {
                  navigate('/feed');
                }}
              >
                <OrderInfo />
              </Modal>
            }
          />
          {/* Открытие деталей персонального заказа в модальном окне при клике из истории профиля */}
          <Route
            path="/profile/orders/:id"
            element={
              <Modal
                onClose={(): void => {
                  navigate('/profile/orders');
                }}
              >
                <OnlyAuth component={<OrderInfo />} />
              </Modal>
            }
          />
        </Routes>
      )}

      {(orderNumber || isOrderLoading) && (
        <Modal onClose={handleOrderClose}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
