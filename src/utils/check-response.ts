// Расширяем стандартный тип Error для поддержки статус-кодов сервера
export type TCustomError = Error & {
  statusCode?: number;
};

export const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json() as Promise<T>;
  }
  // Передаем статус-код ответа, чтобы fetchWithRefresh мог его прочитать
  return res.json().then((err: { message?: string }) => {
    const error: TCustomError = new Error(err.message || `Ошибка: ${res.status}`);
    error.statusCode = res.status;
    return Promise.reject(error);
  });
};
