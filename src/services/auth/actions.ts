import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  loginUserRequest,
  setTokens,
  logoutUserRequest,
  clearTokens,
  getUserRequest,
  registerUserRequest,
  updateUserRequest,
} from '@/utils/burger-api';

import { setUser, setAuthChecked } from './slice';

import type { TBaseResponse, TUser } from '@/utils/burger-api';
import type { TCustomError } from '@/utils/check-response';

export const updateUser = createAsyncThunk<TUser, Record<string, string>>(
  'auth/updateUser',
  async (form, { rejectWithValue }): Promise<TUser> => {
    try {
      const data = await updateUserRequest(form);
      return data.user;
    } catch (err: unknown) {
      const customError = err as TCustomError;
      if (
        customError.statusCode === 401 ||
        customError.statusCode === 403 ||
        customError.message === 'jwt expired'
      ) {
        clearTokens();
      }
      return rejectWithValue(
        customError.message || 'Ошибка обновления данных'
      ) as unknown as TUser;
    }
  }
);

export const registerUser = createAsyncThunk<TUser, Record<string, string>>(
  'auth/register',
  async (form, { rejectWithValue }): Promise<TUser> => {
    try {
      const data = await registerUserRequest(form);
      setTokens(data.accessToken, data.refreshToken);
      return data.user;
    } catch (err: unknown) {
      const customError = err as TCustomError;
      return rejectWithValue(
        customError.message || 'Ошибка регистрации'
      ) as unknown as TUser;
    }
  }
);

export const loginUser = createAsyncThunk<TUser, Record<string, string>>(
  'auth/login',
  async (form, { rejectWithValue }): Promise<TUser> => {
    try {
      const data = await loginUserRequest(form);
      setTokens(data.accessToken, data.refreshToken);
      return data.user;
    } catch (err: unknown) {
      const customError = err as TCustomError;
      return rejectWithValue(
        customError.message || 'Ошибка авторизации'
      ) as unknown as TUser;
    }
  }
);

export const logoutUser = createAsyncThunk<TBaseResponse, void>(
  'auth/logout',
  async (_, { rejectWithValue }): Promise<TBaseResponse> => {
    try {
      const data = await logoutUserRequest();
      clearTokens();
      return data;
    } catch (err: unknown) {
      const customError = err as TCustomError;
      return rejectWithValue(
        customError.message || 'Ошибка при выходе из системы'
      ) as unknown as TBaseResponse;
    }
  }
);

export const checkUserAuth = createAsyncThunk<void, void>(
  'auth/checkUser',
  async (_, { dispatch }): Promise<void> => {
    try {
      if (localStorage.getItem('accessToken')) {
        const data = await getUserRequest();
        if (data && data.success) {
          dispatch(setUser(data.user));
        }
      }
    } catch {
      clearTokens();
      dispatch(setUser(null));
    } finally {
      dispatch(setAuthChecked(true));
    }
  }
);
