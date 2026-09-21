import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/preloader/preloader.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/preloader/preloader.module.css"
const __vite__css = ".preloader__preloader_97cc5 {\n  position: fixed; /* Фиксируем относительно экрана */\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw; /* Вся ширина экрана */\n  height: 100vh; /* Вся высота экрана */\n}\n\n.preloader__preloader_circle_3c960 {\n  display: block;\n  width: 74px;\n  height: 74px;\n  border: 2px solid; /* Утолщенная линия для красивого свечения */\n  border-color: #d1d2d6 #9fa0a5 #626368 #1a1b22;\n  border-radius: 50%;\n\n  /* Неоновое свечение в стиле Stellar Burgers */\n  box-shadow:\n    0 0 15px rgb(76 76 255 / 40%),\n    inset 0 0 15px rgb(76 76 255 / 20%);\n  animation: preloader__spin_c8b0d 0.75s infinite linear;\n}\n\n@keyframes preloader__spin_c8b0d {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const preloader = "preloader__preloader_97cc5";
export const preloader_circle = "preloader__preloader_circle_3c960";
export const spin = "preloader__spin_c8b0d";
export default {
	preloader: preloader,
	preloader_circle: preloader_circle,
	spin: spin
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))