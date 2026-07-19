import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  bun: null,
  ingredients: [],
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    // Экшен добавления ингредиента в конструкторю
    addIngredient: {
      reducer: (state, action) => {
        const { ingredient } = action.payload;
        // Проверяем тип игредиента.
        if (ingredient.type === 'bun') {
          // Если это булка, она полностью заменяет текущую булку
          state.bun = ingredient;
        } else {
          // Если это начинка или соус, добавляем её в массив вместе с уникальным ключом
          state.ingredients.push({
            ...ingredient,
            // Записать что здесь action.payload.id
            id: action.payload.id,
          });
        }
      },
      // Используем функцию prepare, чтобы автоматически генерировать уникальный
      // ключ nanoid прямо в момент вызова экшена addIngredient(ingredient)
      prepare: (ingredient) => {
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
  },
});

// Экспортируем сгенерированный экшен наружу
export const { addIngredient } = burgerConstructorSlice.actions;
