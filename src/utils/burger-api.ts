import { BASE_URL } from '@/utils/constants';

import { checkResponse } from './check-response';

import type { TCustomError } from './check-response';

// Объявляем строгие типы ответов сервераЮ
export type TBaseResponse = {
  success: boolean;
  message?: string;
};

export type TUser = {
  email: string;
  name: string;
};

export type TAuthResponse = TBaseResponse & {
  accessToken: string;
  refreshToken: string;
  user: TUser;
};

export type TUserResponse = TBaseResponse & {
  user: TUser;
};

// на основании ответа JSON (Network->Response)
export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TIngredientsResponse = TBaseResponse & {
  data: Array<TIngredient>;
};

export type TOrderResponse = TBaseResponse & {
  name: string;
  order: {
    number: number;
  };
};

// Тип для отдельного заказа из ленты/истории.
export type TFeedOrder = {
  _id: string;
  ingredients: Array<string>;
  status: 'done' | 'pending' | 'created';
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

// Опции запроса с флагом повтора для fetchWithRefresh
type TCustomFetchOptions = RequestInit & {
  _retry?: boolean;
};

const request = <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  return fetch(`${BASE_URL}${endpoint}`, options).then((res: Response) =>
    checkResponse<T>(res)
  ); // Передаем ссылку на функцию
};

// Тип ответа сервера при запросе конкретного заказа по его ID
export type TSingleOrderResponse = TBaseResponse & {
  orders: Array<TFeedOrder>;
};

// Функция для запроса конкретного заказа по его идентификатору
// Используем fetchWithRefresh, - маршруты истории заказов могут требовать авторизации
// а эндпоинт универсален для "/feed/:id" и "/profile/orders/:id".
export const getOrderRequest = (id: string): Promise<TSingleOrderResponse> => {
  return fetchWithRefresh<TSingleOrderResponse>(`/orders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Сохранение токенов в localStorage после логина или регистрации
export const setTokens = (accessToken: string, refreshToken: string): void => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

// Очистка токенов из localStorage при логауте
export const clearTokens = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

// Запрос на обновление токена
export const refreshTokenRequest = async (): Promise<TAuthResponse> => {
  const data = await request<TAuthResponse>('/auth/token', {
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

export const fetchWithRefresh = async <T>(
  endpoint: string,
  options?: TCustomFetchOptions
): Promise<T> => {
  const fetchOptions = { ...options };
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, fetchOptions);
    return await checkResponse<T>(res);
  } catch (err: unknown) {
    const customError = err as TCustomError;
    const isTokenExpired =
      customError.message === 'jwt expired' ||
      customError.statusCode === 401 ||
      customError.statusCode === 403;
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
        ...options?.headers, //  берем старые заголовки из оригинального объекта
        authorization: refreshData.accessToken || '',
      };

      // Повторяем изначальный запрос заново.
      const res = await fetch(`${BASE_URL}${endpoint}`, fetchOptions);
      return await checkResponse<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};

// Эндпоинты приложения с явными возвращаемыми типами.
export const getIngredientsRequest = (): Promise<TIngredientsResponse> => {
  return request<TIngredientsResponse>('/ingredients');
};

// Добавление функции POST-запроса для оформления заказа.
// Примем весь массив ID ингредиентов: { ingredients: ['id1', 'id2', ...] }
export const createOrderRequest = (
  ingredientIds: Array<string>
): Promise<TOrderResponse> => {
  return fetchWithRefresh<TOrderResponse>('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken') || '',
    },
    // Для корректной отправки на сервер (из JS).
    body: JSON.stringify({
      ingredients: ingredientIds,
    }),
  });
};

// Запрос на регистрацию нового пользователя
export const registerUserRequest = (
  form: Record<string, string>
): Promise<TAuthResponse> => {
  return request<TAuthResponse>('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
};

// Запрос на авторизацию (вход)
export const loginUserRequest = (
  form: Record<string, string>
): Promise<TAuthResponse> => {
  return request<TAuthResponse>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
};

// Запрос на выход из системы (разлогин)
export const logoutUserRequest = (): Promise<TBaseResponse> =>
  fetchWithRefresh<TBaseResponse>('/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken') || '',
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  });

// Восстановление пароля — принимает объект { email: "..." }
export const passwordResetRequest = (
  form: Record<string, string>
): Promise<TBaseResponse> => {
  return request<TBaseResponse>('/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
};

// Сброс пароля — принимает объект { password: "...", token: "..." }
export const passwordResetConfirmRequest = (
  form: Record<string, string>
): Promise<TBaseResponse> => {
  return request<TBaseResponse>('/password-reset/reset', {
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
export const getUserRequest = (): Promise<TUserResponse> => {
  return fetchWithRefresh<TUserResponse>('/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken') || '',
    },
  });
};

// Обновление данных пользователя профиля
export const updateUserRequest = (
  form: Record<string, string>
): Promise<TUserResponse> => {
  return fetchWithRefresh<TUserResponse>('/auth/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken') || '',
    },
    body: JSON.stringify(form),
  });
};
