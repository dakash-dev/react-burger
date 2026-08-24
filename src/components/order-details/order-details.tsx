import { CheckMarkIcon } from '@krgaa/react-developer-burger-ui-components';

import { useAppSelector } from '../../services/hooks';
import { selectOrderLoading, selectOrderNumber } from '../../services/order/slice';

import type { ReactElement } from 'react';

import styles from './order-details.module.css';

function OrderDetails(): ReactElement {
  // номер заказа и флаг загрузки из ветки order.
  const orderNumber = useAppSelector(selectOrderNumber);
  const isLoading = useAppSelector(selectOrderLoading);

  // Если запрос к серверу еще идет, выводим текст ожидания
  if (isLoading) {
    return (
      <div className={styles.container}>
        <span className="text text_type_main-medium mt-20 mb-20">
          Генерируем код заказа на орбите...
        </span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className="text text_type_digits-large mt-4 mb-4">{orderNumber}</h1>
      <span className="text text_type_main-medium mb-15">идентификатор заказа</span>
      <CheckMarkIcon type="success" />
      <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
