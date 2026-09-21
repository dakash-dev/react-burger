import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/index.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/index.css"
const __vite__css = "body {\n  margin: 0;\n}\n\n/* Fix for scrollbar */\n\n@supports (scrollbar-color: auto) {\n  .custom-scroll {\n    scrollbar-color: #8585ad #2f2f37;\n    scrollbar-width: thin;\n  }\n\n  body {\n    scrollbar-color: #8585ad #2f2f37;\n    scrollbar-width: thin;\n  }\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
import.meta.hot.accept()
import.meta.hot.prune(() => __vite__removeStyle(__vite__id))