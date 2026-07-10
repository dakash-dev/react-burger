import { CheckMarkIcon } from '@krgaa/react-developer-burger-ui-components';

import styles from './order-details.module.css';

function OrderDetails() {
  return (
    <div className={styles.container}>
      <h1 className="text text_type_digits-large mt-4 mb-4">034536</h1>
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
