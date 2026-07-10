import { BASE_URL } from '@/utils/constants';

export const getIngredientsRequest = async () => {
  const response = await fetch(`${BASE_URL}/ingredients`);
  if (!response.ok) {
    throw new Error('Invalid request');
  }
  const fetchData = await response.json();

  return fetchData;
};
