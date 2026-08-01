import { BASE_URL } from '@/utils/constants';

import { checkResponse } from './check-response';

const request = (endpoint, options) => {
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse); // Передаем ссылку на функцию
};

// Сохранение токенов в localStorage после логина или регистрации
export const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

// Очистка токенов из localStorage при логауте
export const clearTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

// Запрос на обновление токена
export const refreshTokenRequest = () => {
  return request('/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  });
};

export const fetchWithRefresh = async (endpoint, options) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, options);
    return await checkResponse(res);
  } catch (err) {
    // Если сервер ответил, что токен протух, запускаем обновление.
    if (err.message === 'jwt expired') {
      const refreshData = await refreshTokenRequest();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      // Сохраняем новые токены в localStorage.
      setTokens(refreshData.accessToken, refreshData.refreshToken);

      // Подставляем свежий токен в загаловки изначального запроса.
      options.headers.authorization = refreshData.accessToken;

      // Повторяем изначальный запрос заново.
      const res = await fetch(`${BASE_URL}${endpoint}`, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const getIngredientsRequest = () => {
  return request('/ingredients');
};

// Добавление функции POST-запроса для оформления заказа.
// Примем весь массив ID ингредиентов: { ingredients: ['id1', 'id2', ...] }
export const createOrderRequest = (ingredientIds) => {
  return fetchWithRefresh('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken'),
    },
    // Для корректной отправки на сервер (из JS).
    body: JSON.stringify({
      ingredients: ingredientIds,
    }),
  });
};

// Запрос на регистрацию нового пользователя
export const registerUserRequest = (form) => {
  return request('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
};

// Запрос на авторизацию (вход)
export const loginUserRequest = (form) => {
  return request('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
};

// Запрос на выход из системы (разлогин)
export const logoutUserRequest = () => {
  return request('/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  });
};

// Запрос на восстановление пароля (отправка email)
export const passwordResetRequest = (email) => {
  return request('/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
};

// Запрос на сброс пароля (установка нового пароля по коду)
export const passwordResetConfirmRequest = (form) => {
  return request('/password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
};

// Получение данных пользователя профиля
export const getUserRequest = () => {
  return fetchWithRefresh('/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken'),
    },
  });
};

// Обновление данных пользователя профиля
export const updateUserRequest = (form) => {
  return fetchWithRefresh('/auth/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken'),
    },
    body: JSON.stringify(form),
  });
};
