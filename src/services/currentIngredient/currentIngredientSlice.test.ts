import { describe, expect, it } from 'vitest';

import currentIngredientReducer, {
  clearIngredientDetails,
  currentIngredientSlice,
  initialState,
  setIngredientDetails,
} from './slice';

import type { TIngredient } from '@/utils/burger-api';

type TCurrentIngredientState = {
  ingredient: TIngredient | null;
};

describe('currentIngredient slice', (): void => {
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
    // 1. Arrange & Act
    const result = currentIngredientReducer(undefined, { type: 'UNKNOWN_ACTION' });

    // 3. Assert
    expect(result).toEqual(initialState);
  });

  it('должен записывать данные ингредиента при вызове setIngredientDetails', (): void => {
    // 1. Arrange & Act
    const result = currentIngredientReducer(
      initialState,
      setIngredientDetails(mockIngredient)
    );

    // 3. Assert
    expect(result).toEqual({
      ingredient: mockIngredient,
    });
  });

  it('должен очищать данные ингредиента при вызове clearIngredientDetails', (): void => {
    // 1. Arrange
    const stateWithIngredient = {
      ...initialState,
      ingredient: mockIngredient,
    };
    // 2. Act
    const result = currentIngredientReducer(
      stateWithIngredient,
      clearIngredientDetails()
    );

    // 3. Assert
    expect(result).toEqual(initialState);
  });

  describe('селекторы', (): void => {
    it('selectCurrentIngredient должен возвращать текущий ингредиент из стейта', (): void => {
      // 1. Arrange
      const mockSliceState: TCurrentIngredientState = {
        ingredient: mockIngredient,
      };
      const mockRootState = {
        currentIngredient: mockSliceState,
      };

      // 2. Act
      const selected =
        currentIngredientSlice.selectors.selectCurrentIngredient(mockRootState);

      // 3. Assert
      expect(selected).toEqual(mockIngredient);
    });
  });
});
