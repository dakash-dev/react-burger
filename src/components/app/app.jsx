import { useEffect, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';

import IngredientDetails from '@/components/ingredient-details/ingredient-details';
import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/order-details/order-details';
import Preloader from '@/components/preloader/preloader';
import {
  setIngredientDetails,
  clearIngredientDetails,
} from '@/services/currentIngredient/slice';
import { fetchIngredients } from '@/services/ingredients/action';
import { clearOrder } from '@/services/order/slice';
import { AppHeader } from '@components/app-header/app-header';
import { BurgerConstructor } from '@components/burger-constructor/burger-constructor';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients';

import styles from './app.module.css';

// Конструкция получена по документации от ИИ.
export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.ingredients);

  // Состояние для открытого ингредиента
  const { ingredient } = useSelector((state) => state.currentIngredient);

  // Достаем состояние заказа из стора
  const { orderNumber, isLoading: isOrderLoading } = useSelector((state) => state.order);

  const handleIngredientClick = useCallback(
    (ingredient) => {
      dispatch(setIngredientDetails(ingredient));
    },
    [dispatch]
  );

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
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
        Соберите бургер
      </h1>
      <DndProvider backend={HTML5Backend}>
        <main className={`${styles.main} pl-5 pr-5`}>
          <BurgerIngredients onIngredientClick={handleIngredientClick} />
          <BurgerConstructor />
        </main>
      </DndProvider>
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
