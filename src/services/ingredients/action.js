import { createAsyncThunk } from '@reduxjs/toolkit';

import { getIngredientsRequest } from '@utils/burger-api';

// Создаем асинхронный экшен для получения ингредиентов.
export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients', // Имя экшена.
  async () => {
    const response = await getIngredientsRequest();
    // Возвращаем данные -  array, которые прилетят в "action.payload.fulfilled".
    // Надо себе расписывать   action.payload, чтобы не запутатся где  action.payload, а где action.payload.что-то.
    return response.data;
  }
);
