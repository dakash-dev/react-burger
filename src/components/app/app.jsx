import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/order-details/order-details';
import Preloader from '@/components/preloader/preloader';
import { fetchIngredients } from '@/services/ingredients/action';
import { clearOrder } from '@/services/order/slice';
import { AppHeader } from '@components/app-header/app-header';

import {
  Home,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  IngredientPage,
} from '../../pages';

import styles from './app.module.css';

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Фоновая локация.
  const backgroundLocation = location.state && location.state.background;
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.ingredients);

  // Достаем состояние заказа из стора
  const { orderNumber, isLoading: isOrderLoading } = useSelector((state) => state.order);

  const handleOrderClose = useCallback(() => {
    dispatch(clearOrder());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  // 1. Если данные еще загружаются — показываем прелоадер и выходим
  if (isLoading) {
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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* заход по прямой ссылке (без фона) */}
        <Route path="/ingredients/:id" element={<IngredientPage />} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal title="Детали ингредиента" onClose={() => navigate('/')}>
                {/* Используем твою же страницу внутри модалки! Она сама вытащит ID из урла */}
                <IngredientPage />
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
