import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { createSocketMiddleware } from './socket-middleware';

import type { TWSActionTypes } from './socket-middleware';
import type { UnknownAction } from 'redux';

type TMockStore = {
  dispatch: ReturnType<typeof vi.fn>;
  getState: () => unknown;
};

// Хелпер генерирует функции-экшн-креаторы со свойством .type
const createMockActionCreator = (type: string): any => {
  const fn = vi.fn((payload?: unknown) => ({ type, payload }));
  (fn as any).type = type;
  return fn;
};

describe('WebSocket Middleware', (): void => {
  // Все экшены теперь создаются через хелпер, у них есть корректный .type
  const mockActions: TWSActionTypes<unknown> = {
    wsConnect: createMockActionCreator('feed/wsConnect'),
    wsDisconnect: createMockActionCreator('feed/wsDisconnect'),
    wsConnecting: createMockActionCreator('feed/wsConnecting'),
    wsOpen: createMockActionCreator('feed/wsOpen'),
    wsClose: createMockActionCreator('feed/wsClose'),
    wsError: createMockActionCreator('feed/wsError'),
    wsMessage: createMockActionCreator('feed/wsMessage'),
  };

  let store: TMockStore;
  let next: ReturnType<typeof vi.fn>;
  let mockWebSocketInstance: any;

  beforeEach((): void => {
    // контроль времени (Fake Timers) перед каждым тестом
    vi.useFakeTimers();
    store = {
      dispatch: vi.fn(),
      getState: vi.fn((): unknown => ({})),
    };
    next = vi.fn((action: unknown) => action);

    mockWebSocketInstance = {
      close: vi.fn(),
      readyState: 0, // CONNECTING
      onopen: null,
      onclose: null,
      onerror: null,
      onmessage: null,
    };

    const mockWebSocketConstructor = vi.fn((): unknown => mockWebSocketInstance);
    // Прописываем константы состояний для WebSocket, чтобы в middleware работали проверки readyState
    (mockWebSocketConstructor as any).CONNECTING = 0;
    (mockWebSocketConstructor as any).OPEN = 1;
    (mockWebSocketConstructor as any).CLOSING = 2;
    (mockWebSocketConstructor as any).CLOSED = 3;

    vi.stubGlobal('WebSocket', mockWebSocketConstructor);

    localStorage.clear();
  });

  afterEach((): void => {
    // Возвращаем нативное поведение таймеров обратно
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('должен инициализировать сокет и отправлять wsConnecting при экшене wsConnect', (): void => {
    // 1. Arrange
    const middleware = createSocketMiddleware(mockActions);
    const invoke = middleware(store as any)(next);
    // Генерируем экшен
    const action = mockActions.wsConnect('ws://test-feed');

    // 2. Act
    invoke(action as unknown as UnknownAction);
    // setTimeout(() => {}, 0)
    vi.advanceTimersByTime(0);

    // 3. Assert
    expect(global.WebSocket).toHaveBeenCalledWith('ws://test-feed');
    // Проверяем, что в стор отправлен правильный объект экшена
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'feed/wsConnecting',
      payload: undefined,
    });
    expect(next).toHaveBeenCalledWith(action);
  });

  it('должен корректно отрезать "Bearer " из токена и подставлять его в URL', (): void => {
    // 1. Arrange
    localStorage.setItem('accessToken', 'Bearer my-jwt-secret-token');
    const middleware = createSocketMiddleware(mockActions);
    const invoke = middleware(store as any)(next);
    // Генерируем экшен через креатор, чтобы URL содержал /orders
    const action = mockActions.wsConnect('ws://test/orders');

    // 2. Act
    invoke(action as unknown as UnknownAction);
    // Прокручиваем таймер вперед
    vi.advanceTimersByTime(0);

    // 3. Assert
    expect(global.WebSocket).toHaveBeenCalledWith(
      'ws://test/orders?token=my-jwt-secret-token'
    );
  });

  it('должен диспетчеризовать экшен wsOpen при срабатывании события onopen', (): void => {
    // 1. Arrange
    const middleware = createSocketMiddleware(mockActions);
    const invoke = middleware(store as any)(next);
    // Сначала инициируем коннект, чтобы middleware успело повесить слушатель onopen
    invoke(mockActions.wsConnect('ws://test') as unknown as UnknownAction);
    // таймаут, чтобы сокет записал обработчик в mockWebSocketInstance.onopen
    vi.advanceTimersByTime(0);

    // 2. Act: Симулируем событие открытия сокета браузером
    if (typeof mockWebSocketInstance.onopen === 'function') {
      mockWebSocketInstance.onopen();
    }

    // 3. Assert
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'feed/wsOpen',
      payload: undefined,
    });
  });

  it('должен закрывать соединение и глушить onclose при ручном вызове wsDisconnect в статусе CONNECTING', (): void => {
    // 1. Arrange
    const middleware = createSocketMiddleware(mockActions);
    const invoke = middleware(store as any)(next);

    // Сначала подключаемся, чтобы сохранить ссылку на socket в замыкании
    invoke(mockActions.wsConnect('ws://test') as unknown as UnknownAction);
    //  время на создание  сокета
    vi.advanceTimersByTime(0);

    mockWebSocketInstance.readyState = 0; // WebSocket.CONNECTING

    // 2. Act: Вызываем ручное отключение через сгенерированный экшен
    invoke(mockActions.wsDisconnect() as unknown as UnknownAction);

    // 3. Assert
    expect(mockWebSocketInstance.onclose).toBeNull();
    expect(mockWebSocketInstance.close).toHaveBeenCalledWith(
      1000,
      'Компонент размонтирован пользователем'
    );
  });
});
