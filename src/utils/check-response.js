export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // Передаем статус-код ответа, чтобы fetchWithRefresh мог его прочитать
  return res.json().then((err) => {
    const error = new Error(err.message || `Ошибка: ${res.status}`);
    error.statusCode = res.status;
    return Promise.reject(error);
  });
};
