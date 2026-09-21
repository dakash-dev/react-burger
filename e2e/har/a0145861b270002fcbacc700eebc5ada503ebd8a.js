import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/forgot-password/forgot-password.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.module.css"
const __vite__css = ".forgot-password__wrapper_76532 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: calc(100vh - 250px);\n}\n\n.forgot-password__form_3e18d {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 480px;\n}\n\n.forgot-password__footer_05b3f {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.forgot-password__link_419b1 {\n  color: #4c4cff;\n  text-decoration: none;\n}\n\n.forgot-password__link_419b1:hover {\n  text-shadow: 0 0 8px rgb(76 76 255 / 60%);\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const wrapper = "forgot-password__wrapper_76532";
export const form = "forgot-password__form_3e18d";
export const footer = "forgot-password__footer_05b3f";
export const link = "forgot-password__link_419b1";
export default {
	wrapper: wrapper,
	form: form,
	footer: footer,
	link: link
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))