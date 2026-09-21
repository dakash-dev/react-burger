import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/reset-password/reset-password.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.module.css"
const __vite__css = ".reset-password__wrapper_12ef2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: calc(100vh - 250px);\n}\n\n.reset-password__form_4e437 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 480px;\n}\n\n.reset-password__footer_120b3 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.reset-password__link_acc21 {\n  color: #4c4cff;\n  text-decoration: none;\n}\n\n.reset-password__link_acc21:hover {\n  text-shadow: 0 0 8px rgb(76 76 255 / 60%);\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const wrapper = "reset-password__wrapper_12ef2";
export const form = "reset-password__form_4e437";
export const footer = "reset-password__footer_120b3";
export const link = "reset-password__link_acc21";
export default {
	wrapper: wrapper,
	form: form,
	footer: footer,
	link: link
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))