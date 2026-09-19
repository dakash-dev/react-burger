import { useEffect } from 'react';

import { FeedStatus } from '@/components/feed-status/feed-status';
import { OrderCard } from '@/components/order-card/order-card';
import { selectFeedOrders, wsConnect, wsDisconnect } from '@/services/feed/slice';
import { useAppDispatch, useAppSelector } from '@/services/hooks';
import { SEO } from '@components/seo/seo';

import type { TFeedOrder } from '@/utils/burger-api';
import type { FC, ReactElement } from 'react';

import styles from './feed.module.css';

export const FeedPage: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectFeedOrders);

  /* Управление жизненным циклом сокет-соединения для общей ленты по ТЗ */
  useEffect((): (() => void) => {
    // Инициируем подключение к общему эндпоинту всех заказов
    dispatch(wsConnect('wss://new-stellarburgers.education-services.ru/orders/all'));

    // При размонтировании экрана (уходе пользователя) гарантированно гасим сокет и чистим таймеры
    return (): void => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);

  return (
    <main className={`${styles.main} pl-5 pr-5 pt-10`}>
      <SEO
        title="Лента космических заказов"
        description="Следите за заказами галактики в реальном времени! ))"
      />
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      <div className={styles.content}>
        {/* Левая колонка: Прокручиваемый список карточек всех заказов */}
        <section className={`${styles.orders_section} custom-scroll`}>
          {orders.map(
            (order: TFeedOrder): ReactElement => (
              <OrderCard key={order._id} order={order} />
            )
          )}
        </section>

        {/* Правая колонка: Панель статистики и доска статусов */}
        <section className={styles.status_section}>
          <FeedStatus />
        </section>
      </div>
    </main>
  );
};
