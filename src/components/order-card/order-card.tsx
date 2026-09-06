import {
  CurrencyIcon,
  FormattedDate,
} from '@krgaa/react-developer-burger-ui-components';

import { useAppSelector } from '@/services/hooks';
import { selectIngredients } from '@/services/ingredients/slice';

import type { TIngredient } from '@/utils/burger-api';
import type { FC, ReactElement } from 'react';

import styles from './order-card.module.css';
// FormattedDate - строка даты (createdAt) в формате "Сегодня, 14:30 i-GMT+3"

// для пропсов карточки заказа
type TOrderCardProps = {
  order: {
    _id: string;
    ingredients: Array<string>;
    status: 'done' | 'pending' | 'created';
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
  };
  showStatus?: boolean; // Опциональный флаг: показывать ли статус заказа (нужен в профиле)
};

export const OrderCard: FC<TOrderCardProps> = ({
  order,
  showStatus = false,
}): ReactElement => {
  // 1 -  Достаем полный справочник ингредиентов из Redux
  const allIngredients = useAppSelector(selectIngredients);
  // 2 - Создаем карту (map) для поиска объектов ингредиентов по их _id
  const ingredientsMap = allIngredients.reduce(
    (map: Record<string, TIngredient>, item: TIngredient) => {
      map[item._id] = item;
      return map;
    },
    {}
  );
  // 3 - Собираем объекты ингредиентов для текущего заказа
  const orderIngredients = order.ingredients
    .map((id: string): TIngredient | undefined => ingredientsMap[id])
    .filter((item): item is TIngredient => item !== undefined); // Исключение битых ID

  // 4 - Итоговую стоимость (Булка считается дважды)
  const buns = orderIngredients.filter(
    (item: TIngredient): boolean => item.type === 'bun'
  );
  const fillings = orderIngredients.filter(
    (item: TIngredient): boolean => item.type !== 'bun'
  );

  // Берем цену только первой найденной булки и умножаем на 2. Начинки складываем как обычно.
  const bunPrice = buns.length > 0 ? buns[0].price * 2 : 0;
  const fillingsPrice = fillings.reduce(
    (sum: number, item: TIngredient): number => sum + item.price,
    0
  );
  const totalPrice = bunPrice + fillingsPrice;

  // 5 - Ограничиваем количество иконок для рендера (максимум 6)
  const maxIcons = 6;
  const iconsToRender = orderIngredients.slice(0, maxIcons);
  const remainingCount = orderIngredients.length - maxIcons;

  // Словарь для человекочитаемого перевода статусов на русский язык
  const statusLabels = {
    done: 'Выполнен',
    pending: 'Готовится',
    created: 'Создан',
  };

  return (
    <div className={`${styles.card} p-6 mb-4`}>
      <div className={styles.header}>
        <span className="text text_type_digits-default">#{order.number}</span>
        <span className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)} />
        </span>
      </div>

      <h2 className="text text_type_main-medium mt-6 mb-2">{order.name}</h2>

      {/* Проверка флага showStatus для вывода статуса заказа в истории профиля */}
      {showStatus && (
        <p
          className={`text text_type_main-default mb-6 ${order.status === 'done' ? styles.status_done : ''}`}
        >
          {statusLabels[order.status]}
        </p>
      )}

      {/* для выравнивания нижней части карточки */}
      <div className={styles.footer}>
        {/* для горизонтального ряда иконок */}
        <ul className={styles.icons_list}>
          {iconsToRender.map((ingredient: TIngredient, index: number): ReactElement => {
            const isLast = index === maxIcons - 1 && remainingCount > 0;
            return (
              <li
                key={`${ingredient._id}-${index}`}
                // динамический расчет zIndex, зависящий от индекса перебора.
                className={styles.icon_wrapper}
                style={{ zIndex: maxIcons - index }}
              >
                <img
                  src={ingredient.image_mobile}
                  alt={ingredient.name}
                  className={styles.icon_img}
                />

                {/* Если ингредиентов > 6, накладываем маску со счетчиком остатка */}
                {isLast && (
                  <div className={`${styles.overlay} text text_type_main-default`}>
                    +{remainingCount}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
