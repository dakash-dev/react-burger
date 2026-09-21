import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/burger-ingredients/burger-ingredients.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.module.css"
const __vite__css = ".burger-ingredients__burger_ingredients_bf2a4 {\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  color: var(--text-primary-color);\n  font-family: 'Jet Brains Mono', serif;\n}\n\n.burger-ingredients__menu_7b6c3 {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  list-style-type: none;\n}\n\n.burger-ingredients__container_e0dda {\n  /* Расчет по ТЗ \"реализацией и возможным ограничением высоты блока, в том числе и для разных разрешений экранов\"\n  Высота AppHeader пусть ~90px\n  Заголовок «Соберите бургер»  (mt-10 mb-5) пусть ~60px.\n  Высота меню  ~60px\n  */\n  max-height: calc(100vh - 250px);\n  overflow-y: auto;\n}\n\n/* Это  сетка (grid) в две колонки для карточек */\n\n.burger-ingredients__grid_ffaed {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 32px 24px;\n  margin: 0;\n  padding: 0 16px;\n  list-style: none;\n}\n\n/* Выравниваем картинку, цену и текст строго друг под другом по центру */\n\n.burger-ingredients__card_bf0fa {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n}\n\n/* Склеиваем цену и значок валюты в одну линию */\n\n.burger-ingredients__price_e6461 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 24px;\n}\n\n.burger-ingredients__ingredient_name_9a188 {\n  margin: 0;\n  overflow-wrap: break-word; /* Защита от слишком длинных названий */\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const burger_ingredients = "burger-ingredients__burger_ingredients_bf2a4";
export const menu = "burger-ingredients__menu_7b6c3";
export const container = "burger-ingredients__container_e0dda";
export const grid = "burger-ingredients__grid_ffaed";
export const card = "burger-ingredients__card_bf0fa";
export const price = "burger-ingredients__price_e6461";
export const ingredient_name = "burger-ingredients__ingredient_name_9a188";
export default {
	burger_ingredients: burger_ingredients,
	menu: menu,
	container: container,
	grid: grid,
	card: card,
	price: price,
	ingredient_name: ingredient_name
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))