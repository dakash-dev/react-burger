import { configureStore, combineSlices } from '@reduxjs/toolkit';

import { ingredientsSlice } from './ingredients/slice';

const rootReducer = combineSlices(ingredientsSlice);

export const store = configureStore({
  reducer: rootReducer,
  // Redux DevTools в режиме разработки.
  devTools: process.env.NODE_ENV !== 'production',
});
