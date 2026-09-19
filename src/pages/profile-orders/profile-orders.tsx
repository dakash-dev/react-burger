import { useEffect } from 'react';

import { OrderCard } from '@/components/order-card/order-card';
import { selectFeedOrders, wsConnect, wsDisconnect } from '@/services/feed/slice';
import { useAppDispatch, useAppSelector } from '@/services/hooks';
import SEO from '@components/seo/seo';

import type { TFeedOrder } from '@/utils/burger-api';
import type { FC, ReactElement } from 'react';

import styles from './profile-orders.module.css';

export const ProfileOrdersPage: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectFeedOrders);

  /* Управление сокет-соединением с автоматическим token-refresh в middleware */
  useEffect((): (() => void) => {
    // Подключаемся к персональной истории. Middleware само вытащит accessToken и очистит от Bearer
    dispatch(wsConnect('wss://new-stellarburgers.education-services.ru/orders'));

    // Гарантированный разрыв связи при уходе из Личного кабинета для предотвращения утечек памяти
    return (): void => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);

  // Разворачиваем список, чтобы свежие заказы пользователя были вверху
  const reversedOrders = [...orders].reverse();

  return (
    <div className={`${styles.container} custom-scroll`}>
      <SEO title="История заказов" />
      {reversedOrders.length === 0 ? (
        <p className="text text_type_main-medium text_color_inactive mt-10">
          У вас пока нет оформленных заказов
        </p>
      ) : (
        /* Передаем флаг showStatus={true}, так как в истории профиля по ТЗ обязателен вывод текущего статуса */
        reversedOrders.map(
          (order: TFeedOrder): ReactElement => (
            <OrderCard key={order._id} order={order} showStatus={true} />
          )
        )
      )}
    </div>
  );
};
