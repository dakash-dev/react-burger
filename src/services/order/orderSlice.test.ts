import { describe, expect, it } from 'vitest';

import { checkoutOrder } from './action';
import orderReducer, { clearOrder, orderSlice } from './slice';

type TOrderState = {
  orderNumber: number | null;
  isLoading: boolean;
  error: string | null;
};

describe('order slice', (): void => {
  it('должен возвращать исходное состояние, если передан неизвестный экшен', (): void => {
    // 1. Arrange
    const expectedInitialState: TOrderState = {
      orderNumber: null,
      isLoading: false,
      error: null,
    };

    // 2. Act
    const result = orderReducer(undefined, { type: 'UNKNOWN_ACTION' });

    // 3. Assert
    expect(result).toEqual(expectedInitialState);
  });

  it('должен сбрасывать номер заказа при вызове clearOrder', (): void => {
    // 1. Arrange
    const initialState: TOrderState = {
      orderNumber: 777,
      isLoading: false,
      error: null,
    };

    // 2. Act
    const result = orderReducer(initialState, clearOrder());

    // 3. Assert
    expect(result).toEqual({
      orderNumber: null,
      isLoading: false,
      error: null,
    });
  });

  it('должен устанавливать isLoading в true при checkoutOrder.pending', (): void => {
    // 1. Arrange
    const initialState: TOrderState = {
      orderNumber: null,
      isLoading: false,
      error: 'Предыдущая ошибка',
    };

    // 2. Act
    const result = orderReducer(initialState, checkoutOrder.pending('mock-request-id'));

    // 3. Assert
    expect(result).toEqual({
      orderNumber: null,
      isLoading: true,
      error: null,
    });
  });

  it('должен сохранять номер заказа и сбрасывать isLoading при checkoutOrder.fulfilled', (): void => {
    // 1. Arrange
    const initialState: TOrderState = {
      orderNumber: null,
      isLoading: true,
      error: null,
    };

    // 2. Act
    const result = orderReducer(
      initialState,
      checkoutOrder.fulfilled(12345, 'mock-request-id')
    );

    // 3. Assert
    expect(result).toEqual({
      orderNumber: 12345,
      isLoading: false,
      error: null,
    });
  });

  it('должен сохранять текст ошибки при checkoutOrder.rejected', (): void => {
    // 1. Arrange
    const initialState: TOrderState = {
      orderNumber: null,
      isLoading: true,
      error: null,
    };
    const mockError = new Error('Ошибка создания заказа');

    // 2. Act
    const result = orderReducer(
      initialState,
      checkoutOrder.rejected(mockError, 'mock-request-id')
    );

    // 3. Assert
    expect(result).toEqual({
      orderNumber: null,
      isLoading: false,
      error: 'Ошибка создания заказа',
    });
  });

  it('должен проставлять дефолтную ошибку при checkoutOrder.rejected без сообщения', (): void => {
    // 1. Arrange
    const initialState: TOrderState = {
      orderNumber: null,
      isLoading: true,
      error: null,
    };
    const action = {
      type: checkoutOrder.rejected.type,
      error: {},
    };

    // 2. Act
    const result = orderReducer(initialState, action);

    // 3. Assert
    expect(result.error).toBe('Не удалось оформить заказ');
  });

  describe('селекторы', (): void => {
    const mockSliceState: TOrderState = {
      orderNumber: 999,
      isLoading: true,
      error: 'Ошибка селектора',
    };

    const mockRootState = {
      order: mockSliceState,
    };

    it('должны корректно извлекать данные из RootState через селекторы', (): void => {
      expect(orderSlice.selectors.selectOrderNumber(mockRootState)).toBe(999);
      expect(orderSlice.selectors.selectOrderLoading(mockRootState)).toBe(true);
      expect(orderSlice.selectors.selectOrderError(mockRootState)).toBe(
        'Ошибка селектора'
      );
    });
  });
});
