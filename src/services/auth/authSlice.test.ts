import { describe, expect, it } from 'vitest';

import { loginUser, logoutUser, registerUser, updateUser } from './actions';
import authReducer, { authSlice, initialState, setAuthChecked, setUser } from './slice';

import type { TUser } from '@/utils/burger-api';

type TAuthState = {
  user: TUser | null;
  isAuthChecked: boolean;
  isLoading: boolean;
  error: string | unknown | null;
};

describe('auth slice', (): void => {
  const mockUser: TUser = {
    email: 'mentor@yandex.ru',
    name: 'Старший Фронтендер',
  };

  const mockForm: Record<string, string> = {
    email: 'mentor@yandex.ru',
    password: 'password123',
  };

  it('должен возвращать исходное состояние, если передан неизвестный экшен', (): void => {
    // 1. Arrange
    const result = authReducer(undefined, { type: 'UNKNOWN_ACTION' });

    // 3. Assert
    expect(result).toEqual(initialState);
  });

  it('должен менять флаг проверки авторизации при вызове setAuthChecked', (): void => {
    // 1. Arrange & Act
    const result = authReducer(initialState, setAuthChecked(true));
    // 3. Assert
    expect(result.isAuthChecked).toBe(true);
  });

  it('должен сохранять данные пользователя при вызове setUser', (): void => {
    // 1. Arrange & Act
    const result = authReducer(initialState, setUser(mockUser));
    // 3. Assert
    expect(result.user).toEqual(mockUser);
  });

  describe('тестирование extraReducers для registerUser', (): void => {
    it('registerUser.pending должен выставлять isLoading и сбрасывать ошибку', (): void => {
      const state = authReducer(
        { ...initialState, error: 'Ошибка' },
        registerUser.pending('mock-id', mockForm)
      );
      expect(state.isLoading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('registerUser.fulfilled должен сохранять юзера и выставлять флаги', (): void => {
      const state = authReducer(
        { ...initialState, isLoading: true },
        registerUser.fulfilled(mockUser, 'mock-id', mockForm)
      );
      expect(state.isLoading).toBe(false);
      expect(state.user).toEqual(mockUser);
      expect(state.isAuthChecked).toBe(true);
    });

    it('registerUser.rejected должен записывать текст ошибки из payload', (): void => {
      const action = registerUser.rejected(
        null,
        'mock-id',
        mockForm,
        'Ошибка регистрации'
      );
      const state = authReducer({ ...initialState, isLoading: true }, action);
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe('Ошибка регистрации');
    });
  });

  describe('тестирование extraReducers для loginUser', (): void => {
    it('loginUser.pending должен выставлять isLoading', (): void => {
      const state = authReducer(initialState, loginUser.pending('mock-id', mockForm));
      expect(state.isLoading).toBe(true);
    });

    it('loginUser.fulfilled должен сохранять сессию', (): void => {
      const state = authReducer(
        { ...initialState, isLoading: true },
        loginUser.fulfilled(mockUser, 'mock-id', mockForm)
      );
      expect(state.isLoading).toBe(false);
      expect(state.user).toEqual(mockUser);
      expect(state.isAuthChecked).toBe(true);
    });

    it('loginUser.rejected должен сохранять ошибку', (): void => {
      const action = loginUser.rejected(null, 'mock-id', mockForm, 'Ошибка авторизации');
      const state = authReducer({ ...initialState, isLoading: true }, action);
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe('Ошибка авторизации');
    });
  });

  describe('тестирование extraReducers для logoutUser', (): void => {
    it('logoutUser.pending должен менять isLoading', (): void => {
      const state = authReducer(
        { ...initialState, user: mockUser, isAuthChecked: true },
        logoutUser.pending('mock-id')
      );
      expect(state.isLoading).toBe(true);
    });

    it('logoutUser.fulfilled должен удалять пользователя', (): void => {
      const state = authReducer(
        { ...initialState, user: mockUser, isAuthChecked: true, isLoading: true },
        logoutUser.fulfilled({ success: true }, 'mock-id')
      );
      expect(state.isLoading).toBe(false);
      expect(state.user).toBeNull();
    });

    it('logoutUser.rejected должен выставлять ошибку', (): void => {
      const action = logoutUser.rejected(null, 'mock-id', undefined, 'Ошибка выхода');
      const state = authReducer(
        { ...initialState, user: mockUser, isAuthChecked: true, isLoading: true },
        action
      );
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe('Ошибка выхода');
    });
  });

  describe('тестирование extraReducers для updateUser', (): void => {
    it('updateUser.pending должен сбрасывать ошибку', (): void => {
      const state = authReducer(
        { ...initialState, user: mockUser, isAuthChecked: true, error: 'Устарело' },
        updateUser.pending('mock-id', mockForm)
      );
      expect(state.isLoading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('updateUser.fulfilled должен обновлять юзера', (): void => {
      const updatedUser: TUser = { ...mockUser, name: 'Новое имя' };
      const state = authReducer(
        { ...initialState, user: mockUser, isAuthChecked: true, isLoading: true },
        updateUser.fulfilled(updatedUser, 'mock-id', mockForm)
      );
      expect(state.isLoading).toBe(false);
      expect(state.user).toEqual(updatedUser);
    });

    it('updateUser.rejected должен прокидывать ошибку в стор', (): void => {
      const action = updateUser.rejected(null, 'mock-id', mockForm, 'Сбой обновления');
      const state = authReducer(
        { ...initialState, user: mockUser, isAuthChecked: true, isLoading: true },
        action
      );
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe('Сбой обновления');
    });
  });

  describe('селекторы', (): void => {
    const mockSliceState: TAuthState = {
      user: mockUser,
      isAuthChecked: true,
      isLoading: true,
      error: 'Ошибка селектора',
    };
    const mockRootState = { auth: mockSliceState };

    it('должны корректно извлекать данные через селекторы RTK 2.0', (): void => {
      expect(authSlice.selectors.selectUser(mockRootState)).toEqual(mockUser);
      expect(authSlice.selectors.selectIsAuthChecked(mockRootState)).toBe(true);
      expect(authSlice.selectors.selectAuthLoading(mockRootState)).toBe(true);
      expect(authSlice.selectors.selectAuthError(mockRootState)).toBe(
        'Ошибка селектора'
      );
    });
  });
});
