import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/register/register.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.module.css"
const __vite__css = ".register__wrapper_acac1 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: calc(100vh - 250px);\n}\n\n.register__form_dfd56 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 480px;\n}\n\n.register__footer_3c4d8 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.register__link_47c79 {\n  color: #4c4cff;\n  text-decoration: none;\n}\n\n.register__link_47c79:hover {\n  text-shadow: 0 0 8px rgb(76 76 255 / 60%);\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const wrapper = "register__wrapper_acac1";
export const form = "register__form_dfd56";
export const footer = "register__footer_3c4d8";
export const link = "register__link_47c79";
export default {
	wrapper: wrapper,
	form: form,
	footer: footer,
	link: link
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))