import { useState, useEffect, useCallback } from 'react';
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
import { AppHeader } from '@components/app-header/app-header';
import { BurgerConstructor } from '@components/burger-constructor/burger-constructor';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients';

import styles from './app.module.css';

// Конструкция получена по документации от ИИ.
export const App = () => {
  const dispatch = useDispatch();
  const { ingredients, isLoading, error } = useSelector((state) => state.ingredients);

  // Состояние для открытого ингредиента
  const { ingredient } = useSelector((state) => state.currentIngredient);
  // Состояние для открытия модалки заказа
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleIngredientClick = useCallback(
    (ingredient) => {
      dispatch(setIngredientDetails(ingredient));
    },
    [dispatch]
  );

  const handleIngredientClose = useCallback(() => {
    dispatch(clearIngredientDetails());
  }, [dispatch]);

  const handleOrderClick = useCallback(() => {
    setIsOrderModalOpen(true);
  }, []);

  const handleOrderClose = useCallback(() => {
    setIsOrderModalOpen(false);
  }, []);

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
      <main className={`${styles.main} pl-5 pr-5`}>
        <BurgerIngredients
          ingredients={ingredients}
          onIngredientClick={handleIngredientClick}
        />
        <BurgerConstructor ingredients={ingredients} onOrderClick={handleOrderClick} />
      </main>
      {ingredient && (
        <Modal title="Детали ингредиента" onClose={handleIngredientClose}>
          <IngredientDetails item={ingredient} />
        </Modal>
      )}
      {isOrderModalOpen && (
        <Modal onClose={handleOrderClose}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
