import { describe, expect, it } from 'vitest';

import { checkoutOrder } from './action';
import orderReducer, { clearOrder, initialState, orderSlice } from './slice';

type TOrderState = {
  orderNumber: number | null;
  isLoading: boolean;
  error: string | null;
};

describe('order slice', (): void => {
  it('должен возвращать исходное состояние, если передан неизвестный экшен', (): void => {
    // 1. Arrange & Act
    const result = orderReducer(undefined, { type: 'UNKNOWN_ACTION' });

    // 3. Assert
    expect(result).toEqual(initialState);
  });

  it('должен сбрасывать номер заказа при вызове clearOrder', (): void => {
    // 1. Arrange
    const stateWithOrder: TOrderState = {
      ...initialState,
      orderNumber: 777,
    };

    // 2. Act
    const result = orderReducer(stateWithOrder, clearOrder());

    // 3. Assert
    expect(result).toEqual(initialState);
  });

  it('должен устанавливать isLoading в true при checkoutOrder.pending', (): void => {
    // 1. Arrange
    const stateWithError: TOrderState = {
      ...initialState,
      error: 'Предыдущая ошибка',
    };

    // 2. Act
    const result = orderReducer(
      stateWithError,
      checkoutOrder.pending('mock-request-id')
    );

    // 3. Assert
    expect(result).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('должен сохранять номер заказа и сбрасывать isLoading при checkoutOrder.fulfilled', (): void => {
    // 1. Arrange
    const loadingState: TOrderState = {
      ...initialState,
      isLoading: true,
    };

    // 2. Act
    const result = orderReducer(
      loadingState,
      checkoutOrder.fulfilled(12345, 'mock-request-id')
    );

    // 3. Assert
    expect(result).toEqual({
      ...initialState,
      orderNumber: 12345,
    });
  });

  it('должен сохранять текст ошибки при checkoutOrder.rejected', (): void => {
    // 1. Arrange
    const loadingState: TOrderState = {
      ...initialState,
      isLoading: true,
    };
    const mockError = new Error('Ошибка создания заказа');

    // 2. Act
    const result = orderReducer(
      loadingState,
      checkoutOrder.rejected(mockError, 'mock-request-id')
    );

    // 3. Assert
    expect(result).toEqual({
      ...initialState,
      error: 'Ошибка создания заказа',
    });
  });

  it('должен проставлять дефолтную ошибку при checkoutOrder.rejected без сообщения', (): void => {
    // 1. Arrange
    const loadingState: TOrderState = {
      ...initialState,
      isLoading: true,
    };
    const action = {
      type: checkoutOrder.rejected.type,
      error: {},
    };

    // 2. Act
    const result = orderReducer(loadingState, action);

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
