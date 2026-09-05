import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

// Описание структуры отдельного заказа из WebSocket
type TWebSocketOrder = {
  _id: string;
  ingredients: Array<string>;
  status: 'done' | 'pending' | 'created';
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

// Описание структуры успешного ответа сервера
export type TWebSocketResponse = {
  success: boolean;
  orders: Array<TWebSocketOrder>;
  total: number;
  totalToday: number;
};

// Состояние Redux для хранения данных WebSocket-соединения
type TFeedState = {
  isConnected: boolean;
  orders: Array<TWebSocketOrder>;
  total: number;
  totalToday: number;
  error: string | null;
};

const initialState: TFeedState = {
  isConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
  error: null,
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  selectors: {
    selectFeedOrders: (state: TFeedState): Array<TWebSocketOrder> => state.orders,
    selectFeedTotal: (state: TFeedState): number => state.total,
    selectFeedTotalToday: (state: TFeedState): number => state.totalToday,
    selectFeedConnected: (state: TFeedState): boolean => state.isConnected,
    selectFeedError: (state: TFeedState): string | null => state.error,
  },
  reducers: {
    // Экшены-триггеры для Middleware
    wsConnect: (state: TFeedState): void => {
      state.isConnected = false;
      state.error = null;
    },
    wsDisconnect: (state: TFeedState): void => {
      state.isConnected = false;
    },
    wsConnecting: (state: TFeedState): void => {
      state.isConnected = false;
    },
    wsOpen: (state: TFeedState): void => {
      state.isConnected = true;
      state.error = null;
    },
    wsClose: (state: TFeedState): void => {
      state.isConnected = false;
    },
    wsError: (state: TFeedState, action: PayloadAction<string>): void => {
      state.isConnected = false;
      state.error = action.payload;
    },
    // Получение данных от сервера. фильтруем битые данные
    wsMessage: (state: TFeedState, action: PayloadAction<TWebSocketResponse>): void => {
      const { orders, total, totalToday } = action.payload;
      // проверка и валидация данных перед сохранением
      const validOrders = orders.filter((order: TWebSocketOrder): boolean => {
        return (
          typeof order._id === 'string' &&
          Array.isArray(order.ingredients) &&
          ['done', 'pending', 'created'].includes(order.status) &&
          typeof order.name === 'string' &&
          typeof order.number === 'number' &&
          typeof order.createdAt === 'string'
        );
      });

      state.orders = validOrders;
      state.total = total || 0;
      state.totalToday = totalToday || 0;
    },
  },
});

export const {
  wsConnect,
  wsDisconnect,
  wsConnecting,
  wsOpen,
  wsClose,
  wsError,
  wsMessage,
} = feedSlice.actions;

export const {
  selectFeedOrders,
  selectFeedTotal,
  selectFeedTotalToday,
  selectFeedConnected,
  selectFeedError,
} = feedSlice.selectors;

export default feedSlice.reducer;
