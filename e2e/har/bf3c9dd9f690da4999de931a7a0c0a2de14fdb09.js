import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/feed/feed.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.module.css"
const __vite__css = "/* Главный контейнер страницы ленты */\n\n.feed__main_0b67b {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n}\n\n/* Сетка контента: двухколоночный лейаут по ТЗ */\n\n.feed__content_e1602 {\n  display: flex;\n  gap: 60px; /* Отступ между списком заказов и статистикой */\n  height: calc(100vh - 250px); /* Фиксируем высоту, чтобы работал внутренний скролл */\n  min-height: 400px;\n  margin-top: 20px;\n}\n\n/* Левая колонка: Прокручиваемый вертикальный список карточек */\n\n.feed__orders_section_80906 {\n  flex: 1; /* Занимает половину свободного пространства */\n  padding-right: 8px; /* Зазор для красивого отображения скроллбара */\n  overflow-y: auto; /* Включает вертикальную прокрутку */\n}\n\n/* Правая колонка: Панель статистики и счетчиков */\n\n.feed__status_section_fad11 {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const main = "feed__main_0b67b";
export const content = "feed__content_e1602";
export const orders_section = "feed__orders_section_80906";
export const status_section = "feed__status_section_fad11";
export default {
	main: main,
	content: content,
	orders_section: orders_section,
	status_section: status_section
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))