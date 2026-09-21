import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/app-header/app-header.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.module.css"
const __vite__css = ".app-header__header_217fe {\n  background-color: var(--background);\n}\n\n.app-header__menu_e1cd7 {\n  display: flex;\n  align-items: center;\n  max-width: 1240px;\n  height: 56px;\n  margin: 0 auto;\n}\n\n.app-header__menu_part_left_c66be {\n  display: flex;\n  flex-basis: 35%;\n}\n\n.app-header__link_11364 {\n  display: flex;\n  color: var(--text-inactive-color);\n  text-decoration: none;\n}\n\n.app-header__link_active_6b8b9 {\n  color: var(--text-primary-color);\n}\n\n.app-header__link_position_last_060dd {\n  display: flex;\n  flex-basis: 35%;\n  justify-content: flex-end;\n}\n\n.app-header__logo_e1a17 {\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const header = "app-header__header_217fe";
export const menu = "app-header__menu_e1cd7";
export const menu_part_left = "app-header__menu_part_left_c66be";
export const link = "app-header__link_11364";
export const link_active = "app-header__link_active_6b8b9";
export const link_position_last = "app-header__link_position_last_060dd";
export const logo = "app-header__logo_e1a17";
export default {
	header: header,
	menu: menu,
	menu_part_left: menu_part_left,
	link: link,
	link_active: link_active,
	link_position_last: link_position_last,
	logo: logo
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))