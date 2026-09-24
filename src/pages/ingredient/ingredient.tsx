import { useParams } from 'react-router-dom';

import IngredientDetails from '@/components/ingredient-details/ingredient-details';
import { useAppSelector } from '@/services/hooks';
import { selectIngredients } from '@/services/ingredients/slice';
import SEO from '@components/seo/seo';

import type { TIngredient } from '@/utils/burger-api';
import type { ReactElement } from 'react';

import styles from './ingredients.module.css';

const IngredientPage = (): ReactElement | null => {
  const { id } = useParams<{ id: string }>();
  const ingredients = useAppSelector(selectIngredients);
  const ingredientData = ingredients.find(
    (item: TIngredient): boolean => item._id === id
  );

  // Защита, если данные еще не прилетели с сервера
  if (!ingredientData) {
    return null;
  }

  return (
    <div className={styles.page}>
      <SEO
        title={ingredientData.name}
        description={`Детальная информация об ингредиенте: ${ingredientData.name}`}
      />
      <IngredientDetails item={ingredientData} />
    </div>
  );
};

export default IngredientPage;
