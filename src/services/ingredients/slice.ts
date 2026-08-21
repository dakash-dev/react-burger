import { createSlice } from '@reduxjs/toolkit';

import { fetchIngredients } from './action';

import type { TIngredient } from '@/utils/burger-api';

type TIngredientsState = {
  ingredients: Array<TIngredient>;
  isLoading: boolean;
  error: string | null;
};

const initialState: TIngredientsState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  selectors: {
    selectIngredients: (state: TIngredientsState): Array<TIngredient> =>
      state.ingredients,
    selectIngredientsLoading: (state: TIngredientsState): boolean => state.isLoading,
    selectIngredientsError: (state: TIngredientsState): string | null => state.error,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload; // это TIngredient[]
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Что-то пошло не так';
      });
  },
});

// Экспорт селекторов.
export const { selectIngredients, selectIngredientsLoading, selectIngredientsError } =
  ingredientsSlice.selectors;
export default ingredientsSlice.reducer;
