import { createSlice } from '@reduxjs/toolkit';

import { checkoutOrder } from './action';

const initialState = {
  orderNumber: null,
  isLoading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // Экшен для сброса номера заказа при закрытии модалки..
    clearOrder: (state) => {
      state.orderNumber = null;
    },
  },
  extraReducers: (builder) => {
    // Обработка экшенов для оформления заказа.
    builder
      .addCase(checkoutOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkoutOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderNumber = action.payload; // Записываем реальный номер заказа с сервера.
      })
      .addCase(checkoutOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Не удалось оформить заказ'; // Записываем ошибку. Если есть.
      });
  },
});

export const { clearOrder } = orderSlice.actions;
