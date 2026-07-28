import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import IngredientDetails from '@/components/ingredient-details/ingredient-details';
import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/order-details/order-details';
import Preloader from '@/components/preloader/preloader';
import { clearIngredientDetails } from '@/services/currentIngredient/slice';
import { fetchIngredients } from '@/services/ingredients/action';
import { clearOrder } from '@/services/order/slice';
import { AppHeader } from '@components/app-header/app-header';
import { Home } from '@pages/home';

import styles from './app.module.css';

// Конструкция получена по документации от ИИ.
export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.ingredients);

  // Состояние для открытого ингредиента
  const { ingredient } = useSelector((state) => state.currentIngredient);

  // Достаем состояние заказа из стора
  const { orderNumber, isLoading: isOrderLoading } = useSelector((state) => state.order);

  const handleIngredientClose = useCallback(() => {
    dispatch(clearIngredientDetails());
  }, [dispatch]);

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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {ingredient && (
        <Modal title="Детали ингредиента" onClose={handleIngredientClose}>
          <IngredientDetails item={ingredient} />
        </Modal>
      )}
      {(orderNumber || isOrderLoading) && (
        <Modal onClose={handleOrderClose}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
