import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/ingredient/ingredients.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/ingredient/ingredients.module.css"
const __vite__css = ".ingredients__page_ccdc0 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: calc(100vh - 250px); /* Вычитаем высоту шапки AppHeader */\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const page = "ingredients__page_ccdc0";
export default {
	page: page
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))