import { configureStore, combineSlices } from '@reduxjs/toolkit';

import { burgerConstructorSlice } from './burgerConstructor/slice';
import { currentIngredientSlice } from './currentIngredient/slice';
import { ingredientsSlice } from './ingredients/slice';
import { orderSlice } from './order/slice';

// combineSlices автоматически создаст ветку в store для каждого слайса.
const rootReducer = combineSlices(
  ingredientsSlice,
  currentIngredientSlice,
  burgerConstructorSlice,
  orderSlice
);

export const store = configureStore({
  reducer: rootReducer,
  // Redux DevTools в режиме разработки.
  devTools: process.env.NODE_ENV !== 'production',
});
