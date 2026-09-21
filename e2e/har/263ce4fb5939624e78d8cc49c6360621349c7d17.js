import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/profile/profile-form.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.module.css"
const __vite__css = ".profile-form__form_46730 {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  margin-left: 60px;\n}\n\n.profile-form__buttons_container_af522 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 24px;\n}\n\n.profile-form__cancel_btn_e3975 {\n  color: #4c4cff;\n  font-family: inherit;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.profile-form__cancel_btn_e3975:hover {\n  opacity: 0.8;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const form = "profile-form__form_46730";
export const buttons_container = "profile-form__buttons_container_af522";
export const cancel_btn = "profile-form__cancel_btn_e3975";
export default {
	form: form,
	buttons_container: buttons_container,
	cancel_btn: cancel_btn
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))