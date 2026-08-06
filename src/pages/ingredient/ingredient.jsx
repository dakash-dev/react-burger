import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import IngredientDetails from '@/components/ingredient-details/ingredient-details';

import styles from './ingredients.module.css';

const IngredientPage = () => {
  const { id } = useParams();
  const { ingredients } = useSelector((state) => state.ingredients);
  const ingredientData = ingredients.find((item) => item._id === id);

  return (
    <div className={styles.page}>
      <IngredientDetails item={ingredientData} />
    </div>
  );
};

export default IngredientPage;
