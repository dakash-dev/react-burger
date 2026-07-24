import { createAsyncThunk } from '@reduxjs/toolkit';

import { createOrderRequest } from '@utils/burger-api';

export const checkoutOrder = createAsyncThunk(
  'order/checkout',
  async (_, { getState }) => {
    // Вытаскиваем текущее состояние конструктора.
    const { bun, ingredients } = getState().burgerConstructor;

    // Собираем массив ID для отправки на сервер.
    // Булка(верх) -> Все Начинки -> Булка(низ)
    const orderIds = [bun._id, ...ingredients.map((item) => item._id), bun._id];

    // Отправляем массив на сервер и получаем результат.
    const response = await createOrderRequest(orderIds);
    return response.order.number; // Передаю номер заказа в payload.fulfilled !!!
  }
);
