import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ onOrderClick }) => {
  const { bun, ingredients: constructorIngredients } = useSelector(
    (state) => state.burgerConstructor
  );

  console.log('Данные конструктора из Redux:', { bun, constructorIngredients });

  return (
    <section className={styles.burger_constructor}>
      <div className={`${styles.burger_list} pl-4`}>
        {/* Верхняя булка или заглушка */}
        {bun ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
            extraClass="ml-8"
          />
        ) : (
          <div
            className={`${styles.empty_bun_top} ml-8 text text_type_main-default text_color_inactive`}
          >
            Выберите булки
          </div>
        )}

        {/* Список начинок или заглушка */}
        {constructorIngredients.length > 0 ? (
          <ul className={`${styles.ingredients_set} custom-scroll`}>
            {constructorIngredients.map((base) => (
              // Используем уникальный id из nanoid в качестве ключа
              <li key={base.id} className={styles.ingredients_base}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={base.name}
                  price={base.price}
                  thumbnail={base.image}
                  extraClass="ml-2"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div
            className={`${styles.empty_ingredients} ml-8 text text_type_main-default text_color_inactive`}
          >
            Выберите начинки и соусы
          </div>
        )}

        {/* Нижняя булка или заглушка */}
        {bun ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
            extraClass="ml-8"
          />
        ) : (
          <div
            className={`${styles.empty_bun_bottom} ml-8 text text_type_main-default text_color_inactive`}
          >
            Выберите булки
          </div>
        )}
      </div>

      {/* Блок стоимости и кнопка заказа */}
      <div className={`${styles.place_order} mt-10`}>
        <div className={`${styles.price_order} pr-6`}>
          <span className="text text_type_digits-medium mr-2">0</span>
          <span className={`${styles.currency_icon} mr-10`}>
            <CurrencyIcon type="primary" />
          </span>
          <span>
            <Button
              htmlType="button"
              type="primary"
              size="large"
              onClick={onOrderClick}
              disabled={!bun} // Кнопка заблокирована, пока не выполним перетаскивание инградиента.
            >
              Оформить заказ
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
};
