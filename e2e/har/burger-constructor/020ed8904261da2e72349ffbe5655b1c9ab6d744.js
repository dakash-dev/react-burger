import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/modal-overlay/modal_overlay.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/modal-overlay/modal_overlay.module.css"
const __vite__css = "/* Из рекомендации по форумам */\n\n.modal_overlay__overlay_bab65 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n\n  /* это черный фон с 60% прозрачностью */\n  background-color: rgb(0 0 0 / 60%);\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const overlay = "modal_overlay__overlay_bab65";
export default {
	overlay: overlay
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))