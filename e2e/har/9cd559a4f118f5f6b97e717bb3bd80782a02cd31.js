import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/login/login.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.module.css"
const __vite__css = ".login__wrapper_0219f {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: calc(100vh - 250px);\n}\n\n.login__form_3214c {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 480px;\n}\n\n.login__footer_26295 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.login__link_69744 {\n  color: #4c4cff;\n  text-decoration: none;\n}\n\n.login__link_69744:hover {\n  text-shadow: 0 0 8px rgb(76 76 255 / 60%);\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const wrapper = "login__wrapper_0219f";
export const form = "login__form_3214c";
export const footer = "login__footer_26295";
export const link = "login__link_69744";
export default {
	wrapper: wrapper,
	form: form,
	footer: footer,
	link: link
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))