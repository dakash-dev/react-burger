import { configureStore, combineSlices } from '@reduxjs/toolkit';

import { currentIngredientSlice } from './currentIngredient/slice';
import { ingredientsSlice } from './ingredients/slice';

const rootReducer = combineSlices(ingredientsSlice, currentIngredientSlice);

export const store = configureStore({
  reducer: rootReducer,
  // Redux DevTools в режиме разработки.
  devTools: process.env.NODE_ENV !== 'production',
});
