import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/profile/profile.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.module.css"
const __vite__css = ".profile__wrapper_022be {\n  display: flex;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 1200px;\n  margin: 120px auto 0;\n}\n\n.profile__sidebar_19b5c {\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  width: 320px;\n}\n\n.profile__tab_link_8a0e7 {\n  display: block;\n  display: flex;\n  align-items: center;\n  height: 64px;\n  text-decoration: none;\n  transition: color 0.2s ease-in-out;\n}\n\n.profile__tab_active_4d2d6 {\n  color: #f2f2f3 !important;\n}\n\n.profile__logout_btn_39ade {\n  display: flex;\n  align-items: center;\n  height: 64px;\n  padding: 0;\n  font-family: inherit;\n  text-align: left;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: color 0.2s ease-in-out;\n}\n\n.profile__logout_btn_39ade:hover,\n.profile__tab_link_8a0e7:hover {\n  color: #f2f2f3 !important;\n}\n\n.profile__info_text_ead64 {\n  width: 320px;\n  margin-top: 80px;\n  line-height: 1.5;\n  opacity: 0.4;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const wrapper = "profile__wrapper_022be";
export const sidebar = "profile__sidebar_19b5c";
export const tab_link = "profile__tab_link_8a0e7";
export const tab_active = "profile__tab_active_4d2d6";
export const logout_btn = "profile__logout_btn_39ade";
export const info_text = "profile__info_text_ead64";
export default {
	wrapper: wrapper,
	sidebar: sidebar,
	tab_link: tab_link,
	tab_active: tab_active,
	logout_btn: logout_btn,
	info_text: info_text
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))