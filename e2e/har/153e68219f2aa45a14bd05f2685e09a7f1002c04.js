import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/home/home.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.module.css"
const __vite__css = ".home__title_86afe {\n  width: 100%;\n  margin: 0;\n\n  /* max-width: 1260px; */\n\n  /* margin-right: auto;\n  margin-left: auto; */\n\n  /* border: 3px, solid;\n  border-color: red; */\n}\n\n.home__main_e9175 {\n  display: flex;\n  justify-content: space-between;\n  width: 1240px;\n  height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n\n  /* border: 3px, solid;\n  border-color: red; */\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const title = "home__title_86afe";
export const main = "home__main_e9175";
export default {
	title: title,
	main: main
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))