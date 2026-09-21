import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/profile-orders/profile-orders.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/profile-orders/profile-orders.module.css"
const __vite__css = "/* \n Контейнер списка заказов внутри личного кабинета.\n По ТЗ он рендерится как вложенный роут справа от навигационного меню профиля.\n*/\n\n.profile-orders__container_4dacd {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 844px; /* Ограничиваем ширину списка в Личном Кабинете */\n  height: calc(100vh - 250px); /* Фиксируем высоту под внутренний скролл */\n  padding-right: 8px;\n  overflow-y: auto;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const container = "profile-orders__container_4dacd";
export default {
	container: container
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))