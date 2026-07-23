import { BASE_URL } from '@/utils/constants';

import { checkResponse } from './check-response';

const request = (endpoint, options) => {
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse); // Передаем ссылку на функцию
};

export const getIngredientsRequest = () => {
  return request('/ingredients');
};

// Добавление функции POST-запроса для оформления заказа.
// Примем весь массив ID ингредиентов: { ingredients: ['id1', 'id2', ...] }
export const createOrderRequest = (ingredientIds) => {
  return request('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // Для корректной отправки на сервер (из JS).
    body: JSON.stringify({
      ingredients: ingredientIds,
    }),
  });
};
