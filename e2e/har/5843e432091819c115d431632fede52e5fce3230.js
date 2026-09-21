import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/burger-constructor/burger-constructor.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.module.css"
const __vite__css = ".burger-constructor__burger_constructor_5f604 {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  padding-bottom: 20px;\n  color: var(--text-primary-color);\n\n  /* border: 2px solid red; */\n\n  /* background-color: rgba(0, 0, 255, 0.2); */\n}\n\n.burger-constructor__burger_list_f79d5 {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.burger-constructor__ingredients_set_84866 {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-height: calc(100vh - 550px);\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n}\n\n.burger-constructor__ingredients_base_cba7b {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.burger-constructor__place_order_a768d {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n\n  /* border: 2px solid green; */\n}\n\n.burger-constructor__price_order_e0df8 {\n  display: flex;\n  align-items: center;\n}\n\n.burger-constructor__currency_icon_88e47 {\n  display: flex;\n  align-items: center;\n  transform: scale(1.3); /* подсказка от ИИ */\n}\n\n/* Стили для пустых состояний (заглушек) конструктора */\n\n.burger-constructor__empty_bun_top_ec1c2,\n.burger-constructor__empty_bun_bottom_e4b1b,\n.burger-constructor__empty_ingredients_920b4 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 80px;\n  background-color: #1c1c21;\n  border: 2px dashed #2f2f37;\n}\n\n/* Скругления для верхней булки по макету */\n\n.burger-constructor__empty_bun_top_ec1c2 {\n  border-radius: 40px 40px 10px 10px;\n}\n\n/* Скругления для нижней булки по макету */\n\n.burger-constructor__empty_bun_bottom_e4b1b {\n  border-radius: 10px 10px 40px 40px;\n}\n\n/* Заглушка для центральной части (начинки и соусы) */\n\n.burger-constructor__empty_ingredients_920b4 {\n  /* Делаем небольшой отступ слева, имитируя отсутствие иконки DragIcon */\n  margin-left: 32px;\n  border-radius: 10px;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const burger_constructor = "burger-constructor__burger_constructor_5f604";
export const burger_list = "burger-constructor__burger_list_f79d5";
export const ingredients_set = "burger-constructor__ingredients_set_84866";
export const ingredients_base = "burger-constructor__ingredients_base_cba7b";
export const place_order = "burger-constructor__place_order_a768d";
export const price_order = "burger-constructor__price_order_e0df8";
export const currency_icon = "burger-constructor__currency_icon_88e47";
export const empty_bun_top = "burger-constructor__empty_bun_top_ec1c2";
export const empty_bun_bottom = "burger-constructor__empty_bun_bottom_e4b1b";
export const empty_ingredients = "burger-constructor__empty_ingredients_920b4";
export default {
	burger_constructor: burger_constructor,
	burger_list: burger_list,
	ingredients_set: ingredients_set,
	ingredients_base: ingredients_base,
	place_order: place_order,
	price_order: price_order,
	currency_icon: currency_icon,
	empty_bun_top: empty_bun_top,
	empty_bun_bottom: empty_bun_bottom,
	empty_ingredients: empty_ingredients
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))