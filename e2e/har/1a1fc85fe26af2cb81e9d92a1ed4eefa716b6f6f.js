import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/order-card/order-card.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.module.css"
const __vite__css = "/* Базовый контейнер карточки заказа */\n\n.order-card__card_a970c {\n  background-color: #1c1c21;\n  border: 1px solid transparent;\n  border-radius: 40px;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    border-color 0.2s ease;\n}\n\n/* Эффект наведения на карточку по гайдлайнам UI */\n\n.order-card__card_a970c:hover {\n  border-color: #4c4cff;\n  transform: translateY(-2px);\n}\n\n/* Шапка карточки: номер заказа и дата */\n\n.order-card__header_46702 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* Стилизация статуса \"Выполнен\" (зеленый цвет по ТЗ) */\n\n.order-card__status_done_128a7 {\n  color: #00ecc6;\n}\n\n/* Подвал карточки: список иконок слева, цена справа */\n\n.order-card__footer_f94ce {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 24px;\n}\n\n/* Контейнер списка иконок (горизонтальный ряд) */\n\n.order-card__icons_list_a2db8 {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Обертка для каждой круглой иконки с эффектом наложения (Negative Margin) */\n\n.order-card__icon_wrapper_75a90 {\n  position: relative;\n  width: 48px;\n  height: 48px;\n}\n\n/* Сдвигаем все иконки, кроме первой, влево на 16px для эффекта перекрытия */\n\n.order-card__icons_list_a2db8 .order-card__icon_wrapper_75a90:not(:first-child) {\n  margin-left: -16px;\n}\n\n/* Сама круглая картинка ингредиента */\n\n.order-card__icon_img_7d1f8 {\n  width: 100%;\n  height: 100%;\n  background-color: #131316;\n  border: 2px solid #1c1c21; /* Граница в цвет карточки отделяет круги друг от друга */\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n/* Темная полупрозрачная маска для последней (6-й) иконки, если ингредиентов > 6 */\n\n.order-card__overlay_9c796 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  background-color: rgb(0 0 0 / 60%);\n  border: 2px solid #1c1c21;\n  border-radius: 50%;\n}\n\n/* Контейнер стоимости заказа */\n\n.order-card__price_f0f3b {\n  display: flex;\n  align-items: center;\n}\n\n.order-card__card_link_1a61e {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const card = "order-card__card_a970c";
export const header = "order-card__header_46702";
export const status_done = "order-card__status_done_128a7";
export const footer = "order-card__footer_f94ce";
export const icons_list = "order-card__icons_list_a2db8";
export const icon_wrapper = "order-card__icon_wrapper_75a90";
export const icon_img = "order-card__icon_img_7d1f8";
export const overlay = "order-card__overlay_9c796";
export const price = "order-card__price_f0f3b";
export const card_link = "order-card__card_link_1a61e";
export default {
	card: card,
	header: header,
	status_done: status_done,
	footer: footer,
	icons_list: icons_list,
	icon_wrapper: icon_wrapper,
	icon_img: icon_img,
	overlay: overlay,
	price: price,
	card_link: card_link
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))