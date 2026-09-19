import { describe, expect, it } from 'vitest';

import { checkoutOrder } from '../order/action';
import burgerConstructorReducer, {
  addIngredient,
  burgerConstructorSlice,
  moveIngredient,
  removeIngredient,
  resetConstructor,
} from './slice';

import type { TConstructorIngredient } from './slice';
import type { TIngredient } from '@/utils/burger-api';

type TBurgerConstructorState = {
  bun: TIngredient | null;
  ingredients: Array<TConstructorIngredient>;
};

describe('burgerConstructor slice', (): void => {
  const mockBun: TIngredient = {
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

  const mockMainIngredient: TIngredient = {
    _id: 'main-456',
    name: 'Биокотлета из марсианской нутрии',
    type: 'main',
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 1500,
    image: 'https://yandex.net',
    image_mobile: 'https://yandex.net',
    image_large: 'https://yandex.net',
    __v: 0,
  };

  it('должен возвращать исходное состояние, если передан неизвестный экшен', (): void => {
    // 1. Arrange
    const expectedInitialState: TBurgerConstructorState = {
      bun: null,
      ingredients: [],
    };

    // 2. Act
    const result = burgerConstructorReducer(undefined, { type: 'UNKNOWN_ACTION' });

    // 3. Assert
    expect(result).toEqual(expectedInitialState);
  });

  describe('добавление ингредиентов (addIngredient)', (): void => {
    it('должен заменять булку, если тип ингредиента "bun"', (): void => {
      // 1. Arrange
      const initialState: TBurgerConstructorState = {
        bun: null,
        ingredients: [],
      };

      // Имитируем экшен, который создается экспортным addIngredient
      const action = {
        type: addIngredient.type,
        payload: { ingredient: mockBun, id: 'fixed-bun-id' },
      };

      // 2. Act
      const result = burgerConstructorReducer(initialState, action);

      // 3. Assert
      expect(result.bun).toEqual(mockBun);
    });

    it('должен добавлять начинку в массив ingredients, сохраняя уникальный id', (): void => {
      // 1. Arrange
      const initialState: TBurgerConstructorState = {
        bun: null,
        ingredients: [],
      };
      const action = {
        type: addIngredient.type,
        payload: { ingredient: mockMainIngredient, id: 'unique-nanoid-1' },
      };

      // 2. Act
      const result = burgerConstructorReducer(initialState, action);

      // 3. Assert
      expect(result.ingredients).toHaveLength(1);
      expect(result.ingredients[0]).toEqual({
        ...mockMainIngredient,
        id: 'unique-nanoid-1',
      });
    });
  });

  it('должен удалять ингредиент по его уникальному id при вызове removeIngredient', (): void => {
    // 1. Arrange
    const initialState: TBurgerConstructorState = {
      bun: null,
      ingredients: [
        { ...mockMainIngredient, id: 'id-to-keep' },
        { ...mockMainIngredient, id: 'id-to-remove' },
      ],
    };

    // 2. Act
    const result = burgerConstructorReducer(
      initialState,
      removeIngredient('id-to-remove')
    );

    // 3. Assert
    expect(result.ingredients).toHaveLength(1);
    expect(result.ingredients[0].id).toBe('id-to-keep');
  });

  it('должен корректно менять порядок элементов в массиве при вызове moveIngredient', (): void => {
    // 1. Arrange
    const itemA = { ...mockMainIngredient, id: 'A', name: 'Ингредиент А' };
    const itemB = { ...mockMainIngredient, id: 'B', name: 'Ингредиент Б' };
    const itemC = { ...mockMainIngredient, id: 'C', name: 'Ингредиент В' };

    const initialState: TBurgerConstructorState = {
      bun: null,
      ingredients: [itemA, itemB, itemC],
    };

    // Перемещаем элемент с индекса 0 (itemA) на индекс 1 (после itemB)
    // 2. Act
    const result = burgerConstructorReducer(
      initialState,
      moveIngredient({ dragIndex: 0, hoverIndex: 1 })
    );

    // 3. Assert
    // Ожидаемый новый порядок: [itemB, itemA, itemC]
    expect(result.ingredients).toEqual([itemB, itemA, itemC]);
  });

  it('должен полностью очищать конструктор при вызове resetConstructor', (): void => {
    // 1. Arrange
    const initialState: TBurgerConstructorState = {
      bun: mockBun,
      ingredients: [{ ...mockMainIngredient, id: 'some-id' }],
    };

    // 2. Act
    const result = burgerConstructorReducer(initialState, resetConstructor());

    // 3. Assert
    expect(result).toEqual({ bun: null, ingredients: [] });
  });

  it('должен очищать конструктор при успешном оформлении заказа checkoutOrder.fulfilled', (): void => {
    // 1. Arrange
    const initialState: TBurgerConstructorState = {
      bun: mockBun,
      ingredients: [{ ...mockMainIngredient, id: 'some-id' }],
    };
    const fulfilledAction = checkoutOrder.fulfilled(777, 'mock-id');

    // 2. Act
    const result = burgerConstructorReducer(initialState, fulfilledAction);

    // 3. Assert
    expect(result).toEqual({ bun: null, ingredients: [] });
  });

  describe('селекторы', (): void => {
    const mockSliceState: TBurgerConstructorState = {
      bun: mockBun,
      ingredients: [
        { ...mockMainIngredient, id: '1', _id: 'main-456' },
        { ...mockMainIngredient, id: '2', _id: 'main-456' },
        { ...mockMainIngredient, id: '3', _id: 'other-789' },
      ],
    };

    const mockRootState = {
      burgerConstructor: mockSliceState,
    };

    it('selectConstructorBun должен возвращать текущую булку', (): void => {
      expect(
        burgerConstructorSlice.selectors.selectConstructorBun(mockRootState)
      ).toEqual(mockBun);
    });

    it('selectConstructorIngredients должен возвращать массив начинок', (): void => {
      expect(
        burgerConstructorSlice.selectors.selectConstructorIngredients(mockRootState)
      ).toHaveLength(3);
    });

    it('selectTotalPrice должен правильно рассчитывать цену с учетом двух булок', (): void => {
      // Цена булки: 1255 * 2 = 2510
      // Цена трех начинок: 1500 * 3 = 4500
      // Итого: 2510 + 4500 = 7010
      const total = burgerConstructorSlice.selectors.selectTotalPrice(mockRootState);
      expect(total).toBe(7010);
    });

    it('selectIngredientCount должен возвращать 2 для булки и корректное число для начинок', (): void => {
      const getCount =
        burgerConstructorSlice.selectors.selectIngredientCount(mockRootState);

      // Проверяем булку по её _id (должно быть жестко 2)
      expect(getCount('bun-123')).toBe(2);

      // Проверяем начинку, которой 2 штуки
      expect(getCount('main-456')).toBe(2);

      // Проверяем начинку, которой 1 штука
      expect(getCount('other-789')).toBe(1);

      // Проверяем несуществующий ингредиент
      expect(getCount('fake-id')).toBe(0);
    });
  });
});
