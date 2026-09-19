import { afterEach, describe, expect, it, vi } from 'vitest';

import { fetchIngredients } from './action';

import type { TIngredient } from '@/utils/burger-api';

describe('fetchIngredients асинхронный thunk', (): void => {
  afterEach((): void => {
    vi.restoreAllMocks();
  });

  const mockIngredient: TIngredient = {
    _id: 'bun-123',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://yandex.net',
    image_mobile: 'https://yandex.net',
    image_large: 'https://yandex.net',
    __v: 0,
  };

  it('должен успешно загружать ингредиенты (status: fulfilled) и возвращать их массив', async (): Promise<void> => {
    // 1. Arrange
    const mockApiResponse = {
      success: true,
      data: [mockIngredient],
    };

    vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockApiResponse,
    } as Response);

    const dispatch = vi.fn();

    // 2. Act
    const thunk = fetchIngredients();
    const result = await thunk(dispatch, (): unknown => ({}), undefined);

    // 3. Assert
    expect(result.type).toBe(fetchIngredients.fulfilled.type);
    expect(result.payload).toEqual([mockIngredient]);
  });

  it('должен падать в rejected, если fetch/сервер вернул ошибку', async (): Promise<void> => {
    // 1. Arrange
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Сбой сети'));

    const dispatch = vi.fn();

    // 2. Act
    const thunk = fetchIngredients();
    const result = await thunk(dispatch, (): unknown => ({}), undefined);

    // 3. Assert
    expect(result.type).toBe(fetchIngredients.rejected.type);
  });
});
