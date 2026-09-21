import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/modal/modal.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.module.css"
const __vite__css = ".modal__modal_c0b1a {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n\n  /* у оверлея (1000) */\n  z-index: 2000;\n  display: flex;\n  flex-direction: column;\n  min-width: 700px;\n  background-color: #1c1c21;\n  border: 1px solid rgb(76 76 255 / 20%);\n  border-radius: 40px;\n  transform: translate(-50%, -50%);\n}\n\n.modal__header_c6290 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal__closeButton_902e2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n\n.modal__closeButton_902e2:hover {\n  opacity: 0.6;\n}\n\n.modal__content_f05c5 {\n  width: 100%;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
export const modal = "modal__modal_c0b1a";
export const header = "modal__header_c6290";
export const closeButton = "modal__closeButton_902e2";
export const content = "modal__content_f05c5";
export default {
	modal: modal,
	header: header,
	closeButton: closeButton,
	content: content
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))