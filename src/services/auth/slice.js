import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  loginUserRequest,
  setTokens,
  logoutUserRequest,
  clearTokens,
  getUserRequest,
  registerUserRequest,
} from '@/utils/burger-api';

// Асинхронный экшен для регистрации нового пользователя
export const registerUser = createAsyncThunk(
  'auth/register',
  async (form, { rejectWithValue }) => {
    try {
      const data = await registerUserRequest(form);
      if (!data.success) {
        return rejectWithValue(data);
      }
      // При успешной регистрации бэкенд сразу возвращает токены авторизации
      setTokens(data.accessToken, data.refreshToken);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.message || 'Ошибка регистрации');
    }
  }
);

// Асинхронный экшен для входа в систему
export const loginUser = createAsyncThunk(
  'auth/login',
  async (form, { rejectWithValue }) => {
    try {
      const data = await loginUserRequest(form);
      if (!data.success) {
        return rejectWithValue(data);
      }
      // Сохраняем токены в localStorage при успешном входе
      setTokens(data.accessToken, data.refreshToken);
      // Возвращаем данные пользователя { user: { email, name } }
      return data.user;
    } catch (err) {
      return rejectWithValue(err.message || 'Ошибка авторизации');
    }
  }
);

// Асинхронный экшен для выхода из системы
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutUserRequest();
      if (!data.success) {
        return rejectWithValue(data);
      }
      // При успешном ответе сервера полностью очищаем localStorage
      clearTokens();
      return data;
    } catch (err) {
      return rejectWithValue(err.message || 'Ошибка при выходе из системы');
    }
  }
);

// Главный экшен проверки авторизации при старте приложения
export const checkUserAuth = createAsyncThunk(
  'auth/checkUser',
  async (_, { dispatch }) => {
    try {
      // Проверка находится внутри try — код читается сверху вниз
      if (localStorage.getItem('accessToken')) {
        const data = await getUserRequest();
        if (data && data.success) {
          dispatch(setUser(data.user));
        }
      }
    } catch {
      // Если токен невалиден или отозван — чистим хранилище
      clearTokens();
      dispatch(setUser(null));
    } finally {
      // Выполнится ВСЕГДА: и при успехе, и при ошибке, и если токена вообще не было
      dispatch(setAuthChecked(true));
    }
  }
);

const initialState = {
  user: null, // Данные пользователя: { email: '', name: '' }
  isAuthChecked: false, // Флаг: завершилась ли проверка токена при старте приложения
  isLoading: false, // Флаг загрузки для сетевых запросов авторизации
  error: null, // Текст ошибки, если запрос упал.
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectUser: (state) => state.user,
    selectIsAuthChecked: (state) => state.isAuthChecked,
    selectAuthLoading: (state) => state.isLoading,
    selectAuthError: (state) => state.error,
  },
  reducers: {
    // Сеттер для ручной установки флага проверки авторизации
    setAuthChecked: (state, action) => {
      state.isAuthChecked = action.payload;
    },
    // Сеттер для установки данных пользователя
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // register (Добавляем обработку регистрации)
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // logout
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setAuthChecked, setUser } = authSlice.actions;
export const { selectUser, selectIsAuthChecked, selectAuthLoading, selectAuthError } =
  authSlice.selectors;
export default authSlice.reducer;
