import styles from './ingredient-details.module.css';

function IngredientDetails({ item }) {
  if (!item) return null; // Защита от undefined при первой загрузке

  return (
    <div className={styles.container}>
      <img alt={item.name} src={item.image_large} />
      <h2 className={styles.title}>{item.name}</h2>
      <ul className={`${styles.foodList} mb-15`}>
        <li className={styles.foodItem}>
          <span className="text text_type_main-default text_color_inactive">
            Калории, ккал
          </span>
          <span className="text text_type_digits-default">{item.calories}</span>
        </li>
        <li className={styles.foodItem}>
          <span className="text text_type_main-default text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_digits-default">{item.proteins}</span>
        </li>
        <li className={styles.foodItem}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_digits-default">{item.fat}</span>
        </li>
        <li className={styles.foodItem}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default">{item.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
