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

export const createSocketMiddleware = (
  wsAction: TWSActionTypes,
  withTokenRefresh = false
): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let currentUrl = '';
    const reconnectPeriod = 3000; // Пауза перед переподключением — 3 секунды
    let reconnectTimerId = 0;

    return (next) => (action) => {
      const { dispatch } = store;
      const customAction = action as UnknownAction;
      const { type } = customAction; // Извлекаем тип пролетающего экшена

      if (type === wsAction.wsConnect.type) {
        let url = customAction.payload as string;
        if (url.includes('/orders') && !url.includes('/all')) {
          const accessToken = localStorage.getItem('accessToken');
          if (accessToken) {
            // // Отрезаем "Bearer ", оставляя только чистый токен для сокета - по заданию.
            const clearTokens = accessToken.replace('Bearer ', '');
            url = `${url}?token=${clearTokens}`;
          }
        }
        isConnected = true; // Пользователь намеренно открыл экран ленты
        currentUrl = url; // Запоминаем  URL для возможного авто-реконнекта c token
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
            // Перехват ошибки протухшего токена согласно ТЗ
            if (withTokenRefresh && parseData.message === 'Invalid or missing token') {
              dispatch(wsAction.wsDisconnect());
              // процесс обновления токена через API-слой&
              import('@/utils/burger-api').then(({ refreshTokenRequest }) => {
                refreshTokenRequest()
                  .then((refreshedData): void => {
                    const wssUrl = new URL(currentUrl);
                    wssUrl.searchParams.set(
                      'token',
                      refreshedData.accessToken.replace('Bearer ', '')
                    );
                    // Токен  обновлсяется и заново переподключение.
                    // Передаем базовый путь, Middleware само прицепит токен из localStorage
                    dispatch(wsAction.wsConnect(wssUrl.toString()));
                  })
                  .catch((): void => {
                    // Если даже рефреш-токен сдох, шлем ошибку авторизации в стор
                    dispatch(wsAction.wsError('Не удалось обновить токен авторизации'));
                  });
              });
              return; // Прерываем дальнейшую обработку сообщения
            }
            // Отправляем штатные распарсенные данные в наш слайс&
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
            reconnectTimerId = window.setTimeout((): void => {
              // Переподключаемся по сохраненному ранее адресу
              dispatch(wsAction.wsConnect(currentUrl));
            }, reconnectPeriod);
          }
        };
      }

      if (type === wsAction.wsDisconnect.type) {
        clearTimeout(reconnectTimerId);
        reconnectTimerId = 0;
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
