// https://redux-toolkit.js.org/usage/migrating-to-modern-redux
import type {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from '@reduxjs/toolkit';
// https://redux.js.org/usage/writing-custom-middleware
import type { Middleware, UnknownAction } from 'redux';

export type TWSActionTypes = {
  wsConnect: ActionCreatorWithPayload<string>;
  wsDisconnect: ActionCreatorWithoutPayload;
  wsConnecting: ActionCreatorWithoutPayload;
  wsOpen: ActionCreatorWithoutPayload;
  wsClose: ActionCreatorWithoutPayload;
  wsError: ActionCreatorWithPayload<string>;
  wsMessage: ActionCreatorWithPayload<any>; // Структура универсальна. Слайс сам знает, что придет.
};

export const createSocketMiddleware = (wsAction: TWSActionTypes): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let currentUrl = '';
    const reconnectPeriod = 3000; // Пауза перед переподключением — 3 секунды

    return (next) => (action) => {
      const { dispatch } = store;
      const customAction = action as UnknownAction;
      const { type } = customAction; // Извлекаем тип пролетающего экшена

      if (type === wsAction.wsConnect.type) {
        const url = customAction.payload as string;
        isConnected = true; // Пользователь намеренно открыл экран ленты
        currentUrl = url; // Запоминаем текущий URL для возможного авто-реконнекта
        // Переводим сокет в состояние "в процессе подключения"
        dispatch(wsAction.wsConnecting());

        // Создаем браузерное соединение.
        socket = new WebSocket(url);

        socket.onopen = (): void => {
          dispatch(wsAction.wsOpen());
        };

        socket.onmessage = (event: MessageEvent<string>): void => {
          try {
            // event.data = сырая JSON-строка от бэкенда
            const { data } = event;
            const parseData = JSON.parse(data);
            // Отправляем распарсенные данные в наш слайс&
            dispatch(wsAction.wsMessage(parseData));
          } catch {
            //  если ошибка  -  отправка ощибки в редюсер.
            dispatch(wsAction.wsError('Ошибка парсинга данных сокета'));
          }
        };

        socket.onerror = (): void => {
          dispatch(wsAction.wsError('Ошибка соединения WebSocket'));
        };

        socket.onclose = (): void => {
          dispatch(wsAction.wsClose());
          socket = null;
          //  автопереподключение, если разрыв произошел со стороны сервера
          if (isConnected) {
            setTimeout((): void => {
              // Переподключаемся по сохраненному ранее адресу
              dispatch(wsAction.wsConnect(currentUrl));
            }, reconnectPeriod);
          }
        };
      }

      if (type === wsAction.wsDisconnect.type) {
        isConnected = false; // Пользователь сам ушел с экрана, переподключение не требуется
        if (socket) {
          socket.close();
          socket = null;
        }
      }

      return next(action);
    };
  };
};
