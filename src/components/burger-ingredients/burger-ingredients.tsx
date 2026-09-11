import { Counter, CurrencyIcon, Tab } from '@krgaa/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { useNavigate, useLocation } from 'react-router-dom';

import { selectIngredientCount } from '@/services/burgerConstructor/slice';
import { useAppSelector } from '@/services/hooks';
import { selectIngredients } from '@/services/ingredients/slice';

import type { TIngredient } from '@/utils/burger-api';
import type { RootState } from '@services/store';
import type { FC, ReactElement } from 'react';
import type { DragSourceMonitor } from 'react-dnd';

import styles from './burger-ingredients.module.css';

type TIngredientCardProps = {
  model: TIngredient;
};

export const BurgerIngredients = (): ReactElement => {
  const ingredients = useAppSelector(selectIngredients);
  console.log(ingredients);

  // активируем ссылки динамически.
  const [current, setCurrent] = useState<string>('bun');

  const containerRef = useRef<HTMLDivElement>(null);
  const bunsRef = useRef<HTMLHeadingElement>(null);
  const mainsRef = useRef<HTMLHeadingElement>(null);
  const saucesRef = useRef<HTMLHeadingElement>(null);

  const handleScroll = (): void => {
    // Защитная проверка: если хоть один реф равен null, сразу выходим&
    if (
      !containerRef.current ||
      !bunsRef.current ||
      !mainsRef.current ||
      !saucesRef.current
    ) {
      return;
    }
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const bunsDiff = Math.abs(
      bunsRef.current.getBoundingClientRect().top - containerTop
    );
    const mainsDiff = Math.abs(
      mainsRef.current.getBoundingClientRect().top - containerTop
    );
    const saucesDiff = Math.abs(
      saucesRef.current.getBoundingClientRect().top - containerTop
    );

    if (bunsDiff < mainsDiff && bunsDiff < saucesDiff) {
      setCurrent('bun');
    } else if (mainsDiff < bunsDiff && mainsDiff < saucesDiff) {
      setCurrent('main');
    } else {
      setCurrent('sauce');
    }
  };

  // разеляем общий массив инградиентов.
  // чтобы не запутаться - оставляем близкие названия и не сокращаем.
  const buns = ingredients.filter(
    (ingredient: TIngredient): boolean => ingredient.type === 'bun'
  );
  const mains = ingredients.filter(
    (ingredient: TIngredient): boolean => ingredient.type === 'main'
  );
  const sauces = ingredients.filter(
    (ingredient: TIngredient): boolean => ingredient.type === 'sauce'
  );

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
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className={`${styles.container} custom-scroll pt-10`}
      >
        {/*Раздел Булки.*/}
        <div className="mb-10">
          <h2 ref={bunsRef} className="text text_type_main-medium mb-6">
            Булки
          </h2>
          <ul className={styles.grid}>
            {/* Карточки */}
            {buns.map(
              (product: TIngredient): ReactElement => (
                <IngredientCard key={product._id} model={product} />
              )
            )}
          </ul>
        </div>
        {/* Раздел Начинки. */}
        <div className="mb-10">
          <h2 ref={mainsRef} className="text text_type_main-medium mb-6">
            Начинка
          </h2>
          <ul className={styles.grid}>
            {/* Карточки */}
            {mains.map(
              (product: TIngredient): ReactElement => (
                <IngredientCard key={product._id} model={product} />
              )
            )}
          </ul>
        </div>
        {/*Раздел Соусы.*/}
        <div className="mb-10">
          <h2 ref={saucesRef} className="text text_type_main-medium mb-6">
            Соусы
          </h2>
          <ul className={styles.grid}>
            {/* Карточки */}
            {sauces.map(
              (product: TIngredient): ReactElement => (
                <IngredientCard key={product._id} model={product} />
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Вспомогательный компонент для одной карточки ингредиента (ИИ сэнкс)
const IngredientCard: FC<TIngredientCardProps> = ({ model }): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();
  const count = useAppSelector((state: RootState) =>
    selectIngredientCount(state)(model._id)
  );

  const [{ isDragging }, dragRef] = useDrag<
    TIngredient,
    unknown,
    { isDragging: boolean }
  >({
    type: 'ingredient',
    item: model,
    collect: (
      monitor: DragSourceMonitor<TIngredient, unknown>
    ): { isDragging: boolean } => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // (opacity: 0.4) для полупрозрачности.
  const opacityStyle = isDragging ? { opacity: 0.4 } : {};

  return (
    <li
      ref={(node: HTMLElement | null): void => {
        if (node) {
          dragRef(node);
        }
      }}
      style={opacityStyle}
      className={styles.card}
      onClick={(): void => {
        navigate(`/ingredients/${model._id}`, { state: { background: location } });
      }}
    >
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
