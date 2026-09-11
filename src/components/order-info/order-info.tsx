import {
  CurrencyIcon,
  FormattedDate,
} from '@krgaa/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { selectFeedOrders } from '@/services/feed/slice';
import { useAppSelector } from '@/services/hooks';
import { selectIngredients } from '@/services/ingredients/slice';
import { getOrderRequest } from '@/utils/burger-api';

import type { TFeedOrder, TIngredient, TSingleOrderResponse } from '@/utils/burger-api';
import type { FC, ReactElement } from 'react';

import styles from './order-info.module.css';

/* Тип для агрегированного ингредиента, чтобы выводить его количество в деталях заказа */
type TCalculatedIngredient = TIngredient & {
  count: number;
};

export const OrderInfo: FC = (): ReactElement | null => {
  const { id } = useParams<{ id: string }>();

  // 1. Пытаемся найти заказ в Redux-хранилище сокетов
  const orders = useAppSelector(selectFeedOrders);
  const reduxOrder = orders.find((item: TFeedOrder): boolean => item._id === id);

  // 2. Локальный стейт для заказа, если он загружен напрямую по HTTP-фолбеку
  const [localOrder, setLocalOrder] = useState<TFeedOrder | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 3. Справочник всех ингредиентов для cross-mapping трансформации
  const allIngredients = useAppSelector(selectIngredients);

  // 4. Реализация логики фолбека (HTTP-запрос, если заказа нет в сокетах)
  useEffect((): void => {
    if (reduxOrder || !id) return;

    setIsLoading(true);
    setError(null);

    getOrderRequest(id)
      .then((data: TSingleOrderResponse): void => {
        if (data.success) {
          // Проверяем сначала одиночный объект order, затем массив orders
          if (data.order) {
            setLocalOrder(data.order);
          } else if (data.orders && data.orders.length > 0) {
            setLocalOrder(data.orders[0]);
          } else {
            setError('Заказ не найден');
          }
        } else {
          setError('Заказ не найден');
        }
      })
      .catch((err: unknown): void => {
        console.error('Ошибка загрузки заказа:', err);
        setError('Не удалось загрузить данные заказа');
      })
      .finally((): void => {
        setIsLoading(false);
      });
  }, [id, reduxOrder]);

  // Определяем, какой заказ использовать для рендеринга
  const currentOrder = reduxOrder || localOrder;

  if (isLoading) {
    return (
      <div className={`${styles.centered} text text_type_main-medium`}>
        Загрузка деталей заказа...
      </div>
    );
  }

  if (error || !currentOrder) {
    return (
      <div
        className={`${styles.centered} text text_type_main-medium text_color_inactive`}
      >
        {error || 'Информация о заказе недоступна'}
      </div>
    );
  }

  // 5. Cross-mapping ингредиентов текущего заказа на глобальный справочник
  const ingredientsMap = allIngredients.reduce(
    (
      map: Record<string, TIngredient>,
      item: TIngredient
    ): Record<string, TIngredient> => {
      map[item._id] = item;
      return map;
    },
    {} as Record<string, TIngredient>
  );

  const orderIngredients = currentOrder.ingredients
    .map((ingredientId: string): TIngredient | undefined => ingredientsMap[ingredientId])
    .filter((item: TIngredient | undefined): item is TIngredient => item !== undefined);

  // 6. Агрегация (группировка) ингредиентов для вывода списком с подсчетом количества
  const aggregatedIngredients = orderIngredients.reduce(
    (
      acc: Record<string, TCalculatedIngredient>,
      item: TIngredient
    ): Record<string, TCalculatedIngredient> => {
      if (item.type === 'bun') {
        // Булка всегда должна учитываться х2 в заказе
        acc[item._id] = { ...item, count: 2 };
      } else if (acc[item._id]) {
        acc[item._id].count += 1;
      } else {
        acc[item._id] = { ...item, count: 1 };
      }
      return acc;
    },
    {} as Record<string, TCalculatedIngredient>
  );

  const uniqueIngredientsList = Object.values(aggregatedIngredients);

  // 7. Точный расчет финальной стоимости заказа
  const totalCost = uniqueIngredientsList.reduce(
    (sum: number, item: TCalculatedIngredient): number => {
      return sum + item.price * item.count;
    },
    0
  );

  const statusLabels = {
    done: 'Выполнен',
    pending: 'Готовится',
    created: 'Создан',
  };

  return (
    <div className={styles.container}>
      <span className={`${styles.number} text text_type_digits-default mb-10`}>
        #{currentOrder.number}
      </span>

      <h2 className="text text_type_main-medium mb-3">{currentOrder.name}</h2>

      <p
        className={`text text_type_main-default mb-10 ${currentOrder.status === 'done' ? styles.status_done : ''}`}
      >
        {statusLabels[currentOrder.status]}
      </p>

      <h3 className="text text_type_main-medium mb-6">Состав:</h3>

      <ul className={`${styles.ingredients_list} custom-scroll mb-10`}>
        {uniqueIngredientsList.map(
          (ingredient: TCalculatedIngredient): ReactElement => (
            <li key={ingredient._id} className={styles.ingredient_item}>
              <div className={styles.ingredient_preview}>
                <div className={styles.icon_wrapper}>
                  <img
                    src={ingredient.image_mobile}
                    alt={ingredient.name}
                    className={styles.icon_img}
                  />
                </div>
                <span className="text text_type_main-default ml-4">
                  {ingredient.name}
                </span>
              </div>
              <div className={styles.ingredient_price}>
                <span className="text text_type_digits-default mr-2">
                  {ingredient.count} x {ingredient.price}
                </span>
                <CurrencyIcon type="primary" />
              </div>
            </li>
          )
        )}
      </ul>

      <div className={styles.footer}>
        <span className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(currentOrder.createdAt)} />
        </span>
        <div className={styles.total}>
          <span className="text text_type_digits-default mr-2">{totalCost}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
