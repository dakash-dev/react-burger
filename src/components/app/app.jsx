import { useState, useEffect } from 'react';

import Preloader from '@/components/preloader/preloader';
import { getIngredientsRequest } from '@/utils/burger-api';
import { AppHeader } from '@components/app-header/app-header';
import { BurgerConstructor } from '@components/burger-constructor/burger-constructor';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients';

import styles from './app.module.css';

// Конструкция получена по документации от ИИ.
export const App = () => {
  // Сптсок инградиентов, получаемые с сервера.
  const [ingredientsData, setIngredientsData] = useState([]);
  // Состояние загрузки.
  const [isLoading, setIsLoading] = useState(true);
  // Вероятные ошибки.
  const [hasError, setHasError] = useState(null);

  // Получение данных с сервера.
  const getIngredients = async () => {
    try {
      const response = await getIngredientsRequest();
      setIngredientsData(response.data);
    } catch (error) {
      setHasError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  // 1. Если данные еще загружаются — показываем прелоадер и выходим
  if (isLoading) {
    return <Preloader />;
  }

  // 2. Если загрузка завершилась, но произошла ошибка — показываем текст ошибки и выходим
  if (hasError) {
    return (
      <div className={styles.errorContainer}>
        <div className="text text_type_main-medium">Ошибка загрузки: {hasError}</div>
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
        <BurgerIngredients ingredients={ingredientsData} />
        <BurgerConstructor ingredients={ingredientsData} />
      </main>
    </div>
  );
};
