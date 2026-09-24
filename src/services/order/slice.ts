import { createSlice } from '@reduxjs/toolkit';

import { checkoutOrder } from './action';

type TOrderState = {
  orderNumber: number | null;
  isLoading: boolean;
  error: string | null;
};

export const initialState: TOrderState = {
  orderNumber: null,
  isLoading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  selectors: {
    selectOrderNumber: (state: TOrderState): number | null => state.orderNumber,
    selectOrderLoading: (state: TOrderState): boolean => state.isLoading,
    selectOrderError: (state: TOrderState): string | null => state.error,
  },
  reducers: {
    // Экшен для сброса номера заказа при закрытии модалки..
    clearOrder: (state: TOrderState) => {
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
// Экспортируем селекторы&
export const { selectOrderNumber, selectOrderLoading, selectOrderError } =
  orderSlice.selectors;
export default orderSlice.reducer;
