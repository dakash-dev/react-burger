import { Tab, Counter, CurrencyIcon } from '@krgaa/react-developer-burger-ui-components';
import React from 'react';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients, onIngredientClick }) => {
  console.log(ingredients);

  // активируем ссылки динамически.
  const [current, setCurrent] = React.useState('bun');

  // разеляем общий массив инградиентов.
  // чтобы не запутаться - оставляем близкие названия и не сокращаем.
  const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
  const mains = ingredients.filter((ingredient) => ingredient.type === 'main');
  const sauces = ingredients.filter((ingredient) => ingredient.type === 'sauce');

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={setCurrent}>
            Начинки
          </Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
            Соусы
          </Tab>
        </ul>
      </nav>
      <div className={`${styles.container} custom-scroll pt-10`}>
        {/*Раздел Булки.*/}
        <div className="mb-10">
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <ul className={styles.grid}>
            {/* Карточки */}
            {buns.map((product) => (
              <IngredientCard
                key={product._id}
                model={product}
                onCardClick={onIngredientClick}
              />
            ))}
          </ul>
        </div>
        {/* Раздел Начинки. */}
        <div className="mb-10">
          <h2 className="text text_type_main-medium mb-6">Начинка</h2>
          <ul className={styles.grid}>
            {/* Карточки */}
            {mains.map((product) => (
              <IngredientCard
                key={product._id}
                model={product}
                onCardClick={onIngredientClick}
              />
            ))}
          </ul>
        </div>
        {/*Раздел Соусы.*/}
        <div className="mb-10">
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <ul className={styles.grid}>
            {/* Карточки */}
            {sauces.map((product) => (
              <IngredientCard
                key={product._id}
                model={product}
                onCardClick={onIngredientClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Вспомогательный компонент для одной карточки ингредиента (ИИ сэнкс)
const IngredientCard = ({ model, onCardClick }) => {
  // временная заглушка.
  const count = 0;
  return (
    <li className={styles.card} onClick={() => onCardClick(model)}>
      {/* Счётчик - дефолтом будет 1 - минимальное отображение. 
      0 - не отображается. */}
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}

      {/* Картинка ингредиента */}
      <img src={model.image} alt={model.name} className="pl-4 pr-4 mb-1" />

      {/* Цена со значком камешка */}
      <div className={`${styles.price} mb-1`}>
        <span className="text text_type_digits-default mr-2">{model.price}</span>
        <CurrencyIcon type="primary" />
      </div>

      {/* Наименование продукта */}
      <p className={`${styles.ingredient_name} text text_type_main-default`}>
        {model.name}
      </p>
    </li>
  );
};
