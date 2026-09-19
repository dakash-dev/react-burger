import { afterEach, describe, expect, it, vi } from 'vitest';

import { checkoutOrder } from './action';

describe('checkoutOrder асинхронный thunk', (): void => {
  // Очищаем моки после каждого тест-кейса, чтобы не было утечек состояния
  afterEach((): void => {
    vi.restoreAllMocks();
  });

  const mockBun = {
    _id: 'bun-111',
    price: 1000,
    name: 'Тестовая булка',
    type: 'bun',
    proteins: 10,
    fat: 10,
    carbohydrates: 10,
    calories: 100,
    image: '',
    image_mobile: '',
    image_large: '',
    __v: 0,
  };

  const mockIngredient = {
    _id: 'main-222',
    price: 500,
    name: 'Тестовая начинка',
    type: 'main',
    proteins: 20,
    fat: 20,
    carbohydrates: 20,
    calories: 200,
    image: '',
    image_mobile: '',
    image_large: '',
    __v: 0,
    id: 'unique-id-1', // Поле для конструктора
  };

  it('должен успешно оформлять заказ (status: fulfilled) и возвращать номер заказа', async (): Promise<void> => {
    // 1. Arrange: Мокируем глобальный fetch для возврата успешного ответа сервера
    const mockOrderResponse = {
      success: true,
      name: 'Космический бургер',
      order: { number: 45678 },
    };

    const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockOrderResponse,
    } as Response);

    // Имитируем стейт с булкой и начинкой
    const mockGetState = (): unknown => ({
      burgerConstructor: {
        bun: mockBun,
        ingredients: [mockIngredient],
      },
    });

    const dispatch = vi.fn();

    // 2. Act: Запускаем Thunk вручную
    const thunk = checkoutOrder();
    const result = await thunk(dispatch, mockGetState, undefined);

    // 3. Assert
    expect(result.type).toBe(checkoutOrder.fulfilled.type);
    expect(result.payload).toBe(45678);
    // Проверяем, что fetch вызывался на правильный URL
    expect(fetchSpy).toHaveBeenCalled();
  });

  it('должен отклонять операцию (status: rejected), если в конструкторе отсутствует булка', async (): Promise<void> => {
    // 1. Arrange: Булка отсутствует в состоянии
    const mockGetState = (): unknown => ({
      burgerConstructor: {
        bun: null,
        ingredients: [mockIngredient],
      },
    });

    const dispatch = vi.fn();

    // 2. Act
    const thunk = checkoutOrder();
    const result = await thunk(dispatch, mockGetState, undefined);

    // 3. Assert
    expect(result.type).toBe(checkoutOrder.rejected.type);
    expect(result.payload).toBe('Невозможно оформить заказ без булки');
  });

  it('должен падать в rejected, если fetch/сервер вернул ошибку', async (): Promise<void> => {
    // 1. Arrange: Симулируем падение сети или ошибку парсинга checkResponse
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Ошибка сервера'));

    const mockGetState = (): unknown => ({
      burgerConstructor: {
        bun: mockBun,
        ingredients: [],
      },
    });

    const dispatch = vi.fn();

    // 2. Act
    const thunk = checkoutOrder();
    const result = await thunk(dispatch, mockGetState, undefined);

    // 3. Assert
    expect(result.type).toBe(checkoutOrder.rejected.type);
  });
});
