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

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (form, { rejectWithValue }) => {
    try {
      const data = await updateUserRequest(form);
      if (!data.success) return rejectWithValue(data);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.message || 'Ошибка обновления данных');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (form, { rejectWithValue }) => {
    try {
      const data = await registerUserRequest(form);
      if (!data.success) return rejectWithValue(data);
      setTokens(data.accessToken, data.refreshToken);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.message || 'Ошибка регистрации');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (form, { rejectWithValue }) => {
    try {
      const data = await loginUserRequest(form);
      if (!data.success) return rejectWithValue(data);
      setTokens(data.accessToken, data.refreshToken);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.message || 'Ошибка авторизации');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutUserRequest();
      if (!data.success) return rejectWithValue(data);
      clearTokens();
      return data;
    } catch (err) {
      return rejectWithValue(err.message || 'Ошибка при выходе из системы');
    }
  }
);

export const checkUserAuth = createAsyncThunk(
  'auth/checkUser',
  async (_, { dispatch }) => {
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
