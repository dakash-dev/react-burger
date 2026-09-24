import { afterEach, describe, expect, it, vi } from 'vitest';

import { loginUser, logoutUser } from './actions';

describe('асинхронные экшены авторизации (auth thunks)', (): void => {
  afterEach((): void => {
    vi.restoreAllMocks();
  });

  const mockUser = {
    email: 'mentor@yandex.ru',
    name: 'Старший Фронтендер',
  };

  const mockForm: Record<string, string> = {
    email: 'mentor@yandex.ru',
    password: 'password123',
  };

  describe('loginUser Thunk', (): void => {
    it('должен успешно авторизовать пользователя (fulfilled)', async (): Promise<void> => {
      // 1. Arrange
      const mockApiResponse = {
        success: true,
        accessToken: 'Bearer mock-access',
        refreshToken: 'mock-refresh',
        user: mockUser,
      };

      vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => mockApiResponse,
      } as Response);

      const dispatch = vi.fn();

      // 2. Act
      const thunk = loginUser(mockForm);
      const result = await thunk(dispatch, (): unknown => ({}), undefined);

      // 3. Assert
      expect(result.type).toBe(loginUser.fulfilled.type);
      expect(result.payload).toEqual(mockUser);
    });

    it('должен возвращать ошибку при сбое авторизации (rejected)', async (): Promise<void> => {
      // 1. Arrange
      const mockErrorResponse = {
        success: false,
        message: 'Неверный логин или пароль',
      };

      vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: false,
        status: 401,
        json: async () => mockErrorResponse,
      } as Response);

      const dispatch = vi.fn();

      // 2. Act
      const thunk = loginUser(mockForm);
      const result = await thunk(dispatch, (): unknown => ({}), undefined);

      // 3. Assert
      expect(result.type).toBe(loginUser.rejected.type);
      expect(result.payload).toBe('Неверный логин или пароль');
    });
  });

  describe('logoutUser Thunk', (): void => {
    it('должен успешно разлогинить пользователя (fulfilled)', async (): Promise<void> => {
      // 1. Arrange
      const mockApiResponse = {
        success: true,
      };

      vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => mockApiResponse,
      } as Response);

      const dispatch = vi.fn();

      // 2. Act
      const thunk = logoutUser();
      const result = await thunk(dispatch, (): unknown => ({}), undefined);

      // 3. Assert
      expect(result.type).toBe(logoutUser.fulfilled.type);
      expect(result.payload).toEqual(mockApiResponse);
    });
  });
});
