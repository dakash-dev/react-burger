import { createAsyncThunk } from '@reduxjs/toolkit';

import { createOrderRequest } from '@/utils/burger-api';

import type { RootState } from '@/services/store';

export const checkoutOrder = createAsyncThunk<number, void>(
  'order/checkout',
  async (_, { getState, rejectWithValue }): Promise<number> => {
    // Вытаскиваем текущее состояние конструктора.
    // getState() --> к типу RootState
    const state = getState() as RootState;
    const { bun, ingredients } = state.burgerConstructor;

    // Защита от отправки заказа без булки
    if (!bun) {
      return rejectWithValue('Невозможно оформить заказ без булки') as unknown as number;
    }

    // Собираем массив ID для отправки на сервер.
    // Булка(верх) -> Все Начинки -> Булка(низ)
    const orderIds: Array<string> = [
      bun._id,
      ...ingredients.map((item) => item._id),
      bun._id,
    ];

    // Отправляем массив на сервер и получаем результат.
    const response = await createOrderRequest(orderIds);
    return response.order.number; // Передаю номер заказа в payload.fulfilled !!!
  }
);
