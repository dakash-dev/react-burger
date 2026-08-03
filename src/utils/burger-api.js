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
export const refreshTokenRequest = async () => {
  const data = await request('/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  });

  if (data && data.success) {
    setTokens(data.accessToken, data.refreshToken);
  }
  return data;
};

export const fetchWithRefresh = async (endpoint, options) => {
  const fetchOptions = { ...options };
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, fetchOptions);
    return await checkResponse(res);
  } catch (err) {
    const isTokenExpired =
      err.message === 'jwt expired' || err.statusCode === 401 || err.statusCode === 403;
    // Если сервер ответил, что токен протух, запускаем обновление.
    if (isTokenExpired && !fetchOptions._retry) {
      // флаг-предохранитель, чтобы не уйти в бесконечный цикл.
      fetchOptions._retry = true;

      const refreshData = await refreshTokenRequest();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }

      // Подставляем свежий токен в загаловки изначального запроса.
      fetchOptions.headers = {
        ...options.headers, //  берем старые заголовки из оригинального объекта
        authorization: refreshData.accessToken,
      };

      // Повторяем изначальный запрос заново.
      const res = await fetch(`${BASE_URL}${endpoint}`, fetchOptions);
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

// Восстановление пароля — принимает объект { email: "..." }
export const passwordResetRequest = (form) => {
  return request('/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
};

// Сброс пароля — принимает объект { password: "...", token: "..." }
export const passwordResetConfirmRequest = (form) => {
  return request('/password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: form.password,
      token: form.token,
    }),
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
