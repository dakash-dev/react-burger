import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/order-info/order-info.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.module.css"
const __vite__css = "/* Основной контейнер детализации заказа */\n\n.order-info__container_5c12e {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n}\n\n/* Номер заказа, выровненный по центру или по левому краю в зависимости от контейнера (модалка/страница) */\n\n.order-info__number_95d0e {\n  display: block;\n  text-align: center;\n}\n\n/* Стилизация статуса \"Выполнен\" (акцентный бирюзовый цвет по ТЗ) */\n\n.order-info__status_done_72b29 {\n  color: #00ecc6;\n}\n\n/* Список ингредиентов с фиксированной максимальной высотой и кастомным скроллом */\n\n.order-info__ingredients_list_d83f6 {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-height: 312px;\n  margin: 0;\n  padding: 0;\n  padding-right: 4px;\n  overflow-y: auto;\n  list-style: none;\n}\n\n/* Элемент списка ингредиентов (название слева, цена справа) */\n\n.order-info__ingredient_item_3ac2e {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* Левая часть элемента: круглая превью-картинка и название */\n\n.order-info__ingredient_preview_762f5 {\n  display: flex;\n  align-items: center;\n}\n\n/* Круглая обертка для иконки ингредиента */\n\n.order-info__icon_wrapper_a8e47 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  width: 64px;\n  height: 64px;\n  padding: 2px;\n  background: linear-gradient(180deg, #4c4cff 0%, #2f2f36 100%);\n  border-radius: 50%;\n}\n\n/* Изображение внутри круглой обертки */\n\n.order-info__icon_img_6cc5f {\n  width: 100%;\n  height: 100%;\n  background-color: #131316;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n/* Правая часть элемента: вывод цены в формате \"N x Цена\" и иконка валюты */\n\n.order-info__ingredient_price_12a2a {\n  display: flex;\n  align-items: center;\n}\n\n/* Подвал компонента: дата создания слева, общая стоимость заказа справа */\n\n.order-info__footer_b3da3 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n}\n\n/* Блок итоговой стоимости */\n\n.order-info__total_26d29 {\n  display: flex;\n  align-items: center;\n}\n\n/* Центрирующий контейнер для экранов загрузки и ошибок */\n\n.order-info__centered_49780 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 200px;\n  text-align: center;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const container = "order-info__container_5c12e";
export const number = "order-info__number_95d0e";
export const status_done = "order-info__status_done_72b29";
export const ingredients_list = "order-info__ingredients_list_d83f6";
export const ingredient_item = "order-info__ingredient_item_3ac2e";
export const ingredient_preview = "order-info__ingredient_preview_762f5";
export const icon_wrapper = "order-info__icon_wrapper_a8e47";
export const icon_img = "order-info__icon_img_6cc5f";
export const ingredient_price = "order-info__ingredient_price_12a2a";
export const footer = "order-info__footer_b3da3";
export const total = "order-info__total_26d29";
export const centered = "order-info__centered_49780";
export default {
	container: container,
	number: number,
	status_done: status_done,
	ingredients_list: ingredients_list,
	ingredient_item: ingredient_item,
	ingredient_preview: ingredient_preview,
	icon_wrapper: icon_wrapper,
	icon_img: icon_img,
	ingredient_price: ingredient_price,
	footer: footer,
	total: total,
	centered: centered
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))