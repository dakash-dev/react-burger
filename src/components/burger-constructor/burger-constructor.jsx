import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  console.log(ingredients);

  const bun = ingredients.find((ingredient) => ingredient.type === 'bun');
  const ingredientsWithoutBun = ingredients.filter(
    (ingredient) => ingredient.type !== 'bun'
  );

  return (
    <section className={styles.burger_constructor}>
      {bun && (
        <>
          <div className={`${styles.burger_list} pl-4`}>
            {/*  Верх списка инградиентов */}
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun?.price}
              thumbnail={bun?.image}
              extraClass="ml-8"
            />
            {/*  Список инградиентов со скроллом*/}
            <ul className={`${styles.ingredients_set}`}>
              {ingredientsWithoutBun.map((base) => (
                <li key={base._id} className={styles.ingredients_base}>
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
            {/*  Низ списка инградиентов */}
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun?.price}
              thumbnail={bun?.image}
              extraClass="ml-8"
            />
          </div>
          {/*  Итогая стоимость. */}
          <div className={`${styles.place_order} mt-10`}>
            <div className={`${styles.price_order} pr-6`}>
              <span className="text text_type_digits-medium mr-2">610</span>
              <span className={`${styles.currency_icon} mr-10`}>
                <CurrencyIcon type="primary" />
              </span>
              <span>
                <Button htmlType="button" type="primary" size="large">
                  Оформить заказ
                </Button>
              </span>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
