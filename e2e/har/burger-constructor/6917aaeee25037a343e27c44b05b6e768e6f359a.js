import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/app/app.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.module.css"
const __vite__css = ".app__app_b3c0a {\n  display: flex;\n  flex-direction: column;\n  max-width: 1240px;\n  height: 100vh;\n  margin: 0 auto;\n  color: var(--text-primary-color);\n  background-color: var(--background-alt);\n}\n\n.app__errorContainer_7ad55 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  color: #f2f2f3;\n  background-color: #1a1b22;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const app = "app__app_b3c0a";
export const errorContainer = "app__errorContainer_7ad55";
export default {
	app: app,
	errorContainer: errorContainer
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))