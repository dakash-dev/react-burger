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
    // синхронный экшен для удаления элемента.
    removeIngredient: (state, action) => {
      // action.payload тут содержет уникальный id (строку из nanoid) удаляемого элемента.
      // Фильтруем массив. Здесь те ингредиенты, чей id не совпадает с удаляемым.
      state.ingredients = state.ingredients.filter((item) => item.id !== action.payload);
    },
    moveIngredient: (state, action) => {
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
  },
});

// Экспортируем сгенерированный экшен наружу
export const { addIngredient, removeIngredient, moveIngredient } =
  burgerConstructorSlice.actions;
