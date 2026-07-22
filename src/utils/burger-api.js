import { BASE_URL } from '@/utils/constants';

export const getIngredientsRequest = async () => {
  const response = await fetch(`${BASE_URL}/ingredients`);
  if (!response.ok) {
    throw new Error('Invalid request');
  }
  const fetchData = await response.json();

  return fetchData;
};

// Добавление функции POST-запроса для оформления заказа.
// Примем весь массив ID ингредиентов: { ingredients: ['id1', 'id2', ...] }
export const createOrderRequest = async (ingredientIds) => {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // Для корректной отправки на сервер (из JS).
    body: JSON.stringify({
      ingredients: ingredientIds,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create order');
  }

  const data = await response.json();
  return data; // Возвращаем объект с номером заказа.
};
