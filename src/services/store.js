import { configureStore, combineSlices } from '@reduxjs/toolkit';

import { burgerConstructorSlice } from './burgerConstructor/slice';
import { currentIngredientSlice } from './currentIngredient/slice';
import { ingredientsSlice } from './ingredients/slice';

const rootReducer = combineSlices(
  ingredientsSlice,
  currentIngredientSlice,
  burgerConstructorSlice
);

export const store = configureStore({
  reducer: rootReducer,
  // Redux DevTools в режиме разработки.
  devTools: process.env.NODE_ENV !== 'production',
});
