import { createSlice } from '@reduxjs/toolkit';

import type { TIngredient } from '@/utils/burger-api';
import type { PayloadAction } from '@reduxjs/toolkit';

type TCurrentIngredientState = {
  ingredient: TIngredient | null;
};

const initialState: TCurrentIngredientState = {
  ingredient: null,
};

export const currentIngredientSlice = createSlice({
  name: 'currentIngredient',
  initialState,
  selectors: {
    selectCurrentIngredient: (state: TCurrentIngredientState): TIngredient | null =>
      state.ingredient,
  },
  reducers: {
    // Экшен для открытия модалки и записи данных по инградиенту.
    setIngredientDetails: (
      state: TCurrentIngredientState,
      action: PayloadAction<TIngredient>
    ): void => {
      state.ingredient = action.payload;
    },
    // Экшен для очистки данных при закрытии модалки.
    clearIngredientDetails: (state: TCurrentIngredientState): void => {
      state.ingredient = null;
    },
  },
});

export const { setIngredientDetails, clearIngredientDetails } =
  currentIngredientSlice.actions;

export const { selectCurrentIngredient } = currentIngredientSlice.selectors;

export default currentIngredientSlice.reducer;
