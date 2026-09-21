import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/feed-status/feed-status.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.module.css"
const __vite__css = "/* Главный контейнер панели статистики */\n\n.feed-status__container_8cf50 {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  width: 100%;\n}\n\n/* Блок со списками номеров (Готово и В работе) */\n\n.feed-status__board_0d583 {\n  display: flex;\n  gap: 24px;\n}\n\n/* Колонка одного статуса */\n\n.feed-status__status_block_e86aa {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n/* Заголовок статуса (\"Готово:\" / \"В работе:\") */\n\n.feed-status__title_9d253 {\n  margin-bottom: 24px;\n}\n\n/* Сетка для вывода колонок с номерами */\n\n.feed-status__columns_grid_7f9ba {\n  display: flex;\n  gap: 24px;\n}\n\n/* Список номеров (один чанк из 10 элементов) */\n\n.feed-status__number_list_8725c {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Номер готового заказа (крупный цифровой шрифт + неоновый зеленый цвет) */\n\n.feed-status__number_done_55ded {\n  color: #00ecc6;\n  text-shadow: 0 0 10px rgb(0 236 198 / 30%);\n}\n\n/* Номер заказа в работе (стандартный белый цвет) */\n\n.feed-status__number_pending_2e819 {\n  color: #f2f2f3;\n}\n\n/* Цифровой счетчик для \"Всего за все время\" и \"Всего за сегодня\" */\n\n.feed-status__counter_digits_aba73 {\n  text-shadow: 0 0 15px rgb(242 242 243 / 10%);\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const container = "feed-status__container_8cf50";
export const board = "feed-status__board_0d583";
export const status_block = "feed-status__status_block_e86aa";
export const title = "feed-status__title_9d253";
export const columns_grid = "feed-status__columns_grid_7f9ba";
export const number_list = "feed-status__number_list_8725c";
export const number_done = "feed-status__number_done_55ded";
export const number_pending = "feed-status__number_pending_2e819";
export const counter_digits = "feed-status__counter_digits_aba73";
export default {
	container: container,
	board: board,
	status_block: status_block,
	title: title,
	columns_grid: columns_grid,
	number_list: number_list,
	number_done: number_done,
	number_pending: number_pending,
	counter_digits: counter_digits
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))