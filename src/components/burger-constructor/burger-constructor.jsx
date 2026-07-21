import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import { useDrop, useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';

import {
  addIngredient,
  removeIngredient,
  moveIngredient,
} from '@/services/burgerConstructor/slice';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ onOrderClick }) => {
  const dispatch = useDispatch();

  const { bun, ingredients: constructorIngredients } = useSelector(
    (state) => state.burgerConstructor
  );

  // accept: 'ingredient' — ловим только те элементы, у которых тип совпадает с useDrag карточки.
  // drop: (item) — в момент отпускания мыши берем прилетевший ингредиент и бросаем его в Redux.
  const [, dropTargetRef] = useDrop({
    accept: 'ingredient',
    drop: (item) => {
      dispatch(addIngredient(item));
    },
  });

  console.log('Данные конструктора из Redux:', { bun, constructorIngredients });

  return (
    <section ref={dropTargetRef} className={styles.burger_constructor}>
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
            {constructorIngredients.map((base, index) => (
              <ConstructorIngredient
                // Используем уникальный id из nanoid в качестве ключа
                key={base.id}
                id={base.id}
                index={index}
                text={base.name}
                price={base.price}
                thumbnail={base.image}
                extraClass="ml-2"
                handleClose={() => dispatch(removeIngredient(base.id))}
              />
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
              disabled={!bun} // Кнопка заблокирована, до перетаскивания инградиента.
            >
              Оформить заказ
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
};

// Компонент для одной перетаскиваемой строчки начинки/соуса
const ConstructorIngredient = ({ id, index, text, price, thumbnail, handleClose }) => {
  const dispatch = useDispatch();
  // Настраиваем useDrag для перетаскивания внутри списка.
  const [{ isDragging }, dragRef] = useDrag({
    type: 'sort_ingredient',
    item: { id, index }, // Передаем id и текущий индекс элемента в массиве
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Настраиваем useDrop, чтобы ловить соседние элементы при наведении
  const [, dropRef] = useDrop({
    accept: 'sort_ingredient',
    hover: (item) => {
      // dragIndex — индекс элемента, который мы тащим&
      const dragIndex = item.index;
      // hoverIndex — индекс элемента, над которым сейчас находится курсор
      const hoverIndex = index;

      // Если навели на самого себя — ничего не делаем!!!!!
      if (dragIndex === hoverIndex) return;

      // Диспатчим экшен перемещения.
      dispatch(moveIngredient({ dragIndex, hoverIndex }));

      // Для плавной сортировки.
      item.index = hoverIndex;
    },
  });

  // элемент делаем  прозрачным
  const opacityStyle = isDragging ? { opacity: 0 } : { opacity: 1 };

  return (
    // Объединяем dragRef и dropRef на одном элементе
    // чтобы он стал и перетаскиваемым, и принимающим одновременно.
    <li
      ref={(node) => dragRef(dropRef(node))}
      style={opacityStyle}
      className={styles.ingredients_base}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={text}
        price={price}
        thumbnail={thumbnail}
        extraClass="ml-2"
        handleClose={handleClose}
      />
    </li>
  );
};
