import { createSlice, nanoid } from '@reduxjs/toolkit';

import { checkoutOrder } from '../order/action';

import type { TIngredient } from '@/utils/burger-api';
import type { PayloadAction } from '@reduxjs/toolkit';

// тип ингредиента внутри конструктора (базовый ингредиент + уникальный id от nanoid)
export type TConstructorIngredient = TIngredient & {
  id: string;
};

// состояния конструктора
type TBurgerConstructorState = {
  bun: TIngredient | null;
  ingredients: Array<TConstructorIngredient>; // чтобы _id не был never  в /oredr/action
};

export const initialState: TBurgerConstructorState = {
  bun: null,
  ingredients: [],
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  selectors: {
    selectConstructorBun: (state: TBurgerConstructorState): TIngredient | null =>
      state.bun,
    selectConstructorIngredients: (
      state: TBurgerConstructorState
    ): Array<TConstructorIngredient> => state.ingredients,

    // Мемоизированный селектор стоимости (в RTK 2.0 внутри selectors можно писать обычные функции)
    selectTotalPrice: (state: TBurgerConstructorState): number => {
      const bunPrice = state.bun ? state.bun.price * 2 : 0;
      const ingredientsPrice = state.ingredients.reduce(
        (sum, item) => sum + item.price,
        0
      );
      return bunPrice + ingredientsPrice;
    },

    // Селектор подсчета количества конкретного ингредиента по его ID
    selectIngredientCount:
      (state: TBurgerConstructorState) =>
      (ingredientId: string): number => {
        if (state.bun && state.bun._id === ingredientId) {
          return 2;
        }
        return state.ingredients.filter((item) => item._id === ingredientId).length;
      },
  },
  reducers: {
    // Экшен добавления ингредиента в конструкторю
    addIngredient: {
      reducer: (
        state: TBurgerConstructorState,
        action: PayloadAction<{ ingredient: TIngredient; id: string }>
      ) => {
        const { ingredient, id } = action.payload;
        // Проверяем тип игредиента.
        if (ingredient.type === 'bun') {
          // Если это булка, она полностью заменяет текущую булку
          state.bun = ingredient;
        } else {
          // Если это начинка или соус, добавляем её в массив вместе с уникальным ключом
          state.ingredients.push({
            ...ingredient,
            // Записать что здесь action.payload.id
            id: id,
          });
        }
      },
      // Используем функцию prepare, чтобы автоматически генерировать уникальный
      // ключ nanoid прямо в момент вызова экшена addIngredient(ingredient)
      prepare: (ingredient: TIngredient) => {
        return {
          payload: {
            ingredient,
            // Из теории - "Чтобы различать их при удалении, нужно при добавлении ингредиента
            // генерировать уникальный ключ с помощью функции nanoid из тулкита и добавлять
            // его к объекту ингредиента."
            id: nanoid(),
          },
        };
      },
    },
    // синхронный экшен для удаления элемента.
    removeIngredient: (
      state: TBurgerConstructorState,
      action: PayloadAction<string>
    ) => {
      // action.payload тут содержет уникальный id (строку из nanoid) удаляемого элемента.
      // Фильтруем массив. Здесь те ингредиенты, чей id не совпадает с удаляемым.
      state.ingredients = state.ingredients.filter((item) => item.id !== action.payload);
    },
    moveIngredient: (
      state: TBurgerConstructorState,
      action: PayloadAction<{ dragIndex: number; hoverIndex: number }>
    ) => {
      // action.payload это объект с индексами: { dragIndex: 0, hoverIndex: 1 }
      const { dragIndex, hoverIndex } = action.payload;
      // Копируем массив ингредиентов.
      const newIngredients = [...state.ingredients];
      // Вырезаем перетаскиваемый элемент из его старого места.
      const draggedItem = newIngredients.splice(dragIndex, 1)[0];
      // Вставка элнмента на новое место.
      newIngredients.splice(hoverIndex, 0, draggedItem);
      // Обновляе массива.
      state.ingredients = newIngredients;
    },
    // очищать конструктор после успешного получения номера
    // заказа с сервера в блоке .then или после закрытия попапа
    // с номером заказа, чтобы пользователь мог следующий
    // заказ сделать, не удаляя старые ингредиенты
    resetConstructor: (state: TBurgerConstructorState): void => {
      state.bun = null;
      state.ingredients = [];
    },
  },
  // при успешном заказе сброс булук и начинок в исходное - пустое состояние!
  extraReducers: (builder) => {
    builder.addCase(checkoutOrder.fulfilled, (state) => {
      state.bun = null;
      state.ingredients = [];
    });
  },
});

export const { addIngredient, removeIngredient, moveIngredient, resetConstructor } =
  burgerConstructorSlice.actions;

// Экспортируем селекторы&
export const {
  selectConstructorBun,
  selectConstructorIngredients,
  selectTotalPrice,
  selectIngredientCount,
} = burgerConstructorSlice.selectors;

export default burgerConstructorSlice.reducer;
