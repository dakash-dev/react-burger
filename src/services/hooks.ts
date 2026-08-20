import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from './store';

// Кастомный хук диспетчера с поддержкой асинхронных thunk-экшенов
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

// Кастомный хук селектора, который автоматически знает структуру всего стейта
export const useAppSelector = useSelector.withTypes<RootState>();
