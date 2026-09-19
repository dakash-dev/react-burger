import { describe, expect, it } from 'vitest';

import feedReducer, {
  feedSlice,
  wsClose,
  wsConnect,
  wsConnecting,
  wsDisconnect,
  wsError,
  wsMessage,
  wsOpen,
} from './slice';

import type { TWebSocketResponse } from './slice';

// Извлекаем тип отдельного заказа напрямую из структуры ответа
type TWebSocketOrder = TWebSocketResponse['orders'][number];

type TFeedState = {
  isConnected: boolean;
  orders: Array<TWebSocketOrder>;
  total: number;
  totalToday: number;
  error: string | null;
};

describe('feed slice', (): void => {
  const mockOrder: TWebSocketOrder = {
    _id: '12345',
    ingredients: ['bun-1', 'main-1'],
    status: 'done',
    name: 'Космический бургер',
    createdAt: '2026-03-19T00:00:00.000Z',
    updatedAt: '2026-03-19T00:00:00.000Z',
    number: 777,
  };

  it('должен возвращать исходное состояние, если передан неизвестный экшен', (): void => {
    // 1. Arrange
    const expectedInitialState: TFeedState = {
      isConnected: false,
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
    };

    // 2. Act
    const result = feedReducer(undefined, { type: 'UNKNOWN_ACTION' });

    // 3. Assert
    expect(result).toEqual(expectedInitialState);
  });

  it('должен сбрасывать ошибку при вызове wsConnect', (): void => {
    // 1. Arrange
    const initialState: TFeedState = {
      isConnected: true,
      orders: [],
      total: 0,
      totalToday: 0,
      error: 'Старая ошибка',
    };

    // 2. Act
    const result = feedReducer(initialState, wsConnect('ws://test-url'));

    // 3. Assert
    expect(result.isConnected).toBe(false);
    expect(result.error).toBeNull();
  });

  it('должен переводить isConnected в false при wsDisconnect, wsConnecting и wsClose', (): void => {
    // 1. Arrange
    const initialState: TFeedState = {
      isConnected: true,
      orders: [],
      total: 100,
      totalToday: 10,
      error: null,
    };

    // 2. Act & Assert
    expect(feedReducer(initialState, wsDisconnect()).isConnected).toBe(false);
    expect(feedReducer(initialState, wsConnecting()).isConnected).toBe(false);
    expect(feedReducer(initialState, wsClose()).isConnected).toBe(false);
  });

  it('должен устанавливать флаг активности соединения при wsOpen', (): void => {
    // 1. Arrange
    const initialState: TFeedState = {
      isConnected: false,
      orders: [],
      total: 0,
      totalToday: 0,
      error: 'Ошибка',
    };

    // 2. Act
    const result = feedReducer(initialState, wsOpen());

    // 3. Assert
    expect(result.isConnected).toBe(true);
    expect(result.error).toBeNull();
  });

  it('должен сохранять текст ошибки при wsError', (): void => {
    // 1. Arrange
    const initialState: TFeedState = {
      isConnected: true,
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
    };

    // 2. Act
    const result = feedReducer(initialState, wsError('Критический сбой сети'));

    // 3. Assert
    expect(result.isConnected).toBe(false);
    expect(result.error).toBe('Критический сбой сети');
  });

  describe('обработка wsMessage (включая Edge Cases валидации)', (): void => {
    it('должен сохранять корректные заказы и обновлять счетчики при wsMessage', (): void => {
      // 1. Arrange
      const initialState: TFeedState = {
        isConnected: true,
        orders: [],
        total: 0,
        totalToday: 0,
        error: null,
      };
      const mockResponse: TWebSocketResponse = {
        success: true,
        orders: [mockOrder],
        total: 1500,
        totalToday: 25,
      };

      // 2. Act
      const result = feedReducer(initialState, wsMessage(mockResponse));

      // 3. Assert
      expect(result.orders).toEqual([mockOrder]);
      expect(result.total).toBe(1500);
      expect(result.totalToday).toBe(25);
    });

    it('должен отфильтровывать битые или некорректные заказы', (): void => {
      // 1. Arrange
      const initialState: TFeedState = {
        isConnected: true,
        orders: [],
        total: 0,
        totalToday: 0,
        error: null,
      };

      // Подготавливаем массив с одним хорошим заказом и несколькими сломанными
      const badOrders = [
        mockOrder,
        { ...mockOrder, _id: 12345 as unknown as string }, // Не строка
        { ...mockOrder, ingredients: 'not-array' as unknown as Array<string> }, // Не массив
        { ...mockOrder, status: 'invalid-status' as unknown as 'done' }, // Невалидный статус
        { ...mockOrder, name: undefined as unknown as string }, // Отсутствует имя
      ];

      const mockResponse: TWebSocketResponse = {
        success: true,
        orders: badOrders,
        total: 100,
        totalToday: 5,
      };

      // 2. Act
      const result = feedReducer(initialState, wsMessage(mockResponse));

      // 3. Assert
      // Должен остаться только один валидный заказ
      expect(result.orders).toHaveLength(1);
      expect(result.orders).toEqual([mockOrder]);
    });

    it('должен проставлять нули в total и totalToday, если они пришли пустыми', (): void => {
      // 1. Arrange
      const initialState: TFeedState = {
        isConnected: true,
        orders: [],
        total: 50,
        totalToday: 5,
        error: null,
      };
      const mockResponse = {
        success: true,
        orders: [],
      } as unknown as TWebSocketResponse;

      // 2. Act
      const result = feedReducer(initialState, wsMessage(mockResponse));

      // 3. Assert
      expect(result.total).toBe(0);
      expect(result.totalToday).toBe(0);
    });
  });

  describe('селекторы', (): void => {
    const mockSliceState: TFeedState = {
      isConnected: true,
      orders: [mockOrder],
      total: 500,
      totalToday: 15,
      error: 'Ошибка селектора',
    };

    const mockRootState = {
      feed: mockSliceState,
    };

    it('должны корректно извлекать данные из RootState', (): void => {
      expect(feedSlice.selectors.selectFeedOrders(mockRootState)).toEqual([mockOrder]);
      expect(feedSlice.selectors.selectFeedTotal(mockRootState)).toBe(500);
      expect(feedSlice.selectors.selectFeedTotalToday(mockRootState)).toBe(15);
      expect(feedSlice.selectors.selectFeedConnected(mockRootState)).toBe(true);
      expect(feedSlice.selectors.selectFeedError(mockRootState)).toBe(
        'Ошибка селектора'
      );
    });
  });
});
