import { describe, expect, it } from 'vitest';

import { fetchIngredients } from './action';
import ingredientsReducer, { ingredientsSlice } from './slice';

import type { TIngredient } from '@/utils/burger-api';

type TIngredientsState = {
  ingredients: Array<TIngredient>;
  isLoading: boolean;
  error: string | null;
};

describe('ingredients slice', (): void => {
  // Mock-данные ингредиента для использования в тестах
  const mockIngredient: TIngredient = {
    _id: '643d69a5c3b7490027fa3aca',
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

  it('должен возвращать исходное состояние, если передан неизвестный экшен', (): void => {
    // 1. Arrange
    const expectedInitialState: TIngredientsState = {
      ingredients: [],
      isLoading: false,
      error: null,
    };

    // 2. Act
    const result = ingredientsReducer(undefined, { type: 'UNKNOWN_ACTION' });

    // 3. Assert
    expect(result).toEqual(expectedInitialState);
  });

  it('должен устанавливать isLoading в true при fetchIngredients.pending', (): void => {
    // 1. Arrange
    const initialState: TIngredientsState = {
      ingredients: [],
      isLoading: false,
      error: 'Предыдущая ошибка',
    };

    // 2. Act
    const result = ingredientsReducer(initialState, fetchIngredients.pending(''));

    // 3. Assert
    expect(result).toEqual({
      ingredients: [],
      isLoading: true,
      error: null,
    });
  });

  it('должен сохранять ингредиенты и сбрасывать isLoading при fetchIngredients.fulfilled', (): void => {
    // 1. Arrange
    const initialState: TIngredientsState = {
      ingredients: [],
      isLoading: true,
      error: null,
    };
    const mockPayload: Array<TIngredient> = [mockIngredient];

    // 2. Act
    const result = ingredientsReducer(
      initialState,
      fetchIngredients.fulfilled(mockPayload, '', undefined)
    );

    // 3. Assert
    expect(result).toEqual({
      ingredients: mockPayload,
      isLoading: false,
      error: null,
    });
  });

  it('должен сохранять ошибку из экшена и сбрасывать isLoading при fetchIngredients.rejected', (): void => {
    // 1. Arrange
    const initialState: TIngredientsState = {
      ingredients: [],
      isLoading: true,
      error: null,
    };
    const mockError = new Error('Ошибка сети');

    // 2. Act
    const result = ingredientsReducer(
      initialState,
      fetchIngredients.rejected(mockError, '', undefined)
    );

    // 3. Assert
    expect(result).toEqual({
      ingredients: [],
      isLoading: false,
      error: 'Ошибка сети',
    });
  });

  it('должен подставлять дефолтный текст ошибки при fetchIngredients.rejected без сообщения', (): void => {
    // 1. Arrange
    const initialState: TIngredientsState = {
      ingredients: [],
      isLoading: true,
      error: null,
    };
    // Создаем экшен с пустым объектом ошибки
    const action = {
      type: fetchIngredients.rejected.type,
      error: {},
    };

    // 2. Act
    const result = ingredientsReducer(initialState, action);

    // 3. Assert
    expect(result.error).toBe('Что-то пошло не так');
  });

  describe('селекторы', (): void => {
    const mockSliceState: TIngredientsState = {
      ingredients: [mockIngredient],
      isLoading: true,
      error: 'Тест ошибки',
    };

    const mockRootState = {
      ingredients: mockSliceState,
    };

    it('selectIngredients должен возвращать массив ингредиентов', (): void => {
      // 2. Act
      const selected = ingredientsSlice.selectors.selectIngredients(mockRootState);
      // 3. Assert
      expect(selected).toEqual([mockIngredient]);
    });

    it('selectIngredientsLoading должен возвращать флаг загрузки', (): void => {
      // 2. Act
      const selected =
        ingredientsSlice.selectors.selectIngredientsLoading(mockRootState);
      // 3. Assert
      expect(selected).toBe(true);
    });

    it('selectIngredientsError должен возвращать текущую ошибку', (): void => {
      // 2. Act
      const selected = ingredientsSlice.selectors.selectIngredientsError(mockRootState);
      // 3. Assert
      expect(selected).toBe('Тест ошибки');
    });
  });
});
