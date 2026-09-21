import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ingredient-details/ingredient-details.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.module.css"
const __vite__css = ".ingredient-details__container_46260 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.ingredient-details__title_29746 {\n  padding: 0;\n}\n\n.ingredient-details__foodList_c47f9 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.ingredient-details__foodItem_268cc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const container = "ingredient-details__container_46260";
export const title = "ingredient-details__title_29746";
export const foodList = "ingredient-details__foodList_c47f9";
export const foodItem = "ingredient-details__foodItem_268cc";
export default {
	container: container,
	title: title,
	foodList: foodList,
	foodItem: foodItem
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))