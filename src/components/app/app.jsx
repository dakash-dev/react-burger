import { useState, useEffect } from 'react';

import Preloader from '@/components/preloader/preloader';
import { BASE_URL } from '@/utils/constants';
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
      const responce = await fetch(`${BASE_URL}/ingredients`);
      if (!responce.ok) {
        throw new Error('Invalid request');
      }
      const fetchData = await responce.json();
      setIngredientsData(fetchData.data);
    } catch (error) {
      setHasError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  if (isLoading) {
    // return <div>Загрузка космических ингредиентов...</div>;
    return <Preloader />;
  }
  if (hasError) {
    return <div>Ошибка загрузки</div>;
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
        Соберите бургер
      </h1>
      <main className={`${styles.main} pl-5 pr-5`}>
        {/* <BurgerIngredients ingredients={ingredients} /> */}
        {/* <BurgerConstructor ingredients={ingredients} /> */}
        <BurgerIngredients ingredients={ingredientsData} />
        <BurgerConstructor ingredients={ingredientsData} />
      </main>
    </div>
  );
};
