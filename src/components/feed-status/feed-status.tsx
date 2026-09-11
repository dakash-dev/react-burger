import {
  selectFeedOrders,
  selectFeedTotal,
  selectFeedTotalToday,
} from '@/services/feed/slice';
import { useAppSelector } from '@/services/hooks';

import type { TFeedOrder } from '@/utils/burger-api';
import type { FC, ReactElement } from 'react';

import styles from './feed-status.module.css';

// Вспомогательная функция для разбиения массива на чанки (подмассивы) фиксированного размера
const chunkArray = <T,>(array: Array<T>, size: number): Array<Array<T>> => {
  const chunks: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export const FeedStatus: FC = (): ReactElement => {
  // 1. Достаем все заказы и счетчики из feedSlice
  const orders = useAppSelector(selectFeedOrders);
  const total = useAppSelector(selectFeedTotal);
  const totalToday = useAppSelector(selectFeedTotalToday);

  // 2. Отбираем только готовые заказы (status === 'done') и берем только номера
  const doneNumbers = orders
    .filter((order: TFeedOrder) => order.status === 'done')
    .map((order: TFeedOrder) => order.number);

  // 3. Отбираем заказы в работе (status === 'pending' или 'created')
  const pendingNumbers = orders
    .filter(
      (order: TFeedOrder) => order.status === 'pending' || order.status === 'created'
    )
    .map((order: TFeedOrder) => order.number);

  // 4. Разбиваем на колонки по 10 штук и жестко лимитируем до 2 колонок по ТЗ
  const doneColumns = chunkArray(doneNumbers, 10).slice(0, 2);
  const pendingColumns = chunkArray(pendingNumbers, 10).slice(0, 2);

  return (
    <div className={styles.container}>
      {/* Доска статусов: Готово и В работе */}
      <div className={styles.board}>
        {/* Блок "Готово" */}
        <div className={styles.status_block}>
          <h3 className={`${styles.title} text text_type_main-medium`}>Готово:</h3>
          <div className={styles.columns_grid}>
            {doneColumns.map(
              (column: Array<number>, colIndex: number): ReactElement => (
                <ul key={`done-col-${colIndex}`} className={styles.number_list}>
                  {column.map(
                    (num: number): ReactElement => (
                      <li
                        key={num}
                        className={`${styles.number_done} text text_type_digits-default`}
                      >
                        {num}
                      </li>
                    )
                  )}
                </ul>
              )
            )}
          </div>
        </div>

        {/* Блок "В работе" */}
        <div className={styles.status_block}>
          <h3 className={`${styles.title} text text_type_main-medium`}>В работе:</h3>
          <div className={styles.columns_grid}>
            {pendingColumns.map(
              (column: Array<number>, colIndex: number): ReactElement => (
                <ul key={`pending-col-${colIndex}`} className={styles.number_list}>
                  {column.map(
                    (num: number): ReactElement => (
                      <li
                        key={num}
                        className={`${styles.number_pending} text text_type_digits-default`}
                      >
                        {num}
                      </li>
                    )
                  )}
                </ul>
              )
            )}
          </div>
        </div>
      </div>

      {/* Вывод счетчика: Выполнено за все время */}
      <div>
        <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
        <p className={`${styles.counter_digits} text text_type_digits-large`}>{total}</p>
      </div>

      {/* Вывод счетчика: Выполнено за сегодня */}
      <div>
        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
        <p className={`${styles.counter_digits} text text_type_digits-large`}>
          {totalToday}
        </p>
      </div>
    </div>
  );
};
