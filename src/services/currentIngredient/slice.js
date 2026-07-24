import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ingredient: null,
};

export const currentIngredientSlice = createSlice({
  name: 'currentIngredient',
  initialState,
  reducers: {
    // Экшен для открытия модалки и записи данных по инградиенту.
    setIngredientDetails: (state, action) => {
      state.ingredient = action.payload;
    },
    // Экшен для очистки данных при закрытии модалки.
    clearIngredientDetails: (state) => {
      state.ingredient = null;
    },
  },
});

export const { setIngredientDetails, clearIngredientDetails } =
  currentIngredientSlice.actions;
