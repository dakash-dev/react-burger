import { createSlice } from '@reduxjs/toolkit';

import { registerUser, loginUser, logoutUser, updateUser } from './actions';

import type { TUser } from '@/utils/burger-api';
import type { PayloadAction } from '@reduxjs/toolkit';

type TAuthState = {
  user: TUser | null;
  isAuthChecked: boolean;
  isLoading: boolean;
  error: string | unknown | null;
};

const initialState: TAuthState = {
  user: null,
  isAuthChecked: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectUser: (state: TAuthState): TUser | null => state.user,
    selectIsAuthChecked: (state: TAuthState): boolean => state.isAuthChecked,
    selectAuthLoading: (state: TAuthState): boolean => state.isLoading,
    selectAuthError: (state: TAuthState): string | unknown | null => state.error,
  },
  reducers: {
    setAuthChecked: (state: TAuthState, action: PayloadAction<boolean>): void => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state: TAuthState, action: PayloadAction<TUser | null>): void => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
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
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setAuthChecked, setUser } = authSlice.actions;
export const { selectUser, selectIsAuthChecked, selectAuthLoading, selectAuthError } =
  authSlice.selectors;
export default authSlice.reducer;
