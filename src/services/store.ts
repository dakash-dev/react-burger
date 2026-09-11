import { configureStore, combineSlices } from '@reduxjs/toolkit';

import { authSlice } from './auth/slice';
import { burgerConstructorSlice } from './burgerConstructor/slice';
import { currentIngredientSlice } from './currentIngredient/slice';
import { feedSlice } from './feed/slice';
import { ingredientsSlice } from './ingredients/slice';
import { createSocketMiddleware } from './middleware/socket-middleware';
import { orderSlice } from './order/slice';

import type { TWebSocketResponse } from './feed/slice';

// combineSlices автоматически создаст ветку в store для каждого слайса.
const rootReducer = combineSlices(
  ingredientsSlice,
  currentIngredientSlice,
  burgerConstructorSlice,
  orderSlice,
  authSlice,
  feedSlice
);

/* 
  Два раздельных middleware из одного generic-конструктора по ТЗ.
  Для истории заказов в профиле передаем флаг withTokenRefresh = true, так как этот эндпоинт требует авторизации.
*/
const allFeedMiddleware = createSocketMiddleware<TWebSocketResponse>(
  feedSlice.actions,
  false
);
const userOrdersMiddleware = createSocketMiddleware<TWebSocketResponse>(
  feedSlice.actions,
  true
);

export const store = configureStore({
  reducer: rootReducer,
  /* Подключаем оба созданных middleware в конвейер Redux */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allFeedMiddleware, userOrdersMiddleware),
  // Redux DevTools в режиме разработки.
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
