import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/modal/modal.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { CloseIcon } from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=12f80588"; const useEffect = __vite__cjsImport2_react["useEffect"];
import __vite__cjsImport3_reactDom from "/node_modules/.vite/deps/react-dom.js?v=12f80588"; const createPortal = __vite__cjsImport3_reactDom["createPortal"];
import ModalOverlay from "/src/components/modal-overlay/modal-overlay.tsx";
import styles from "/src/components/modal/modal.module.css";
const modalRoot = document.getElementById("react-modals");
const Modal = ({ title, children, onClose }) => {
  _s();
  useEffect(() => {
    const handleEscClose = (esc) => {
      if (esc.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);
  if (!modalRoot) {
    throw new Error(
      "Не найден корневой элемент #react-modals для рендеринга модального окна"
    );
  }
  return createPortal(
    /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(ModalOverlay, { onClose }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: styles.modal, children: [
        /* @__PURE__ */ jsxDEV("div", { className: `${styles.header} mt-10 mr-10 ml-10`, children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text text_type_main-large", children: title }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx",
            lineNumber: 50,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: styles.closeButton, onClick: onClose, children: /* @__PURE__ */ jsxDEV(CloseIcon, { type: "primary", ...{ width: 24, height: 24 } }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: styles.content, children }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    modalRoot
  );
};
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
export default Modal;
var _c;
$RefreshReg$(_c, "Modal");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/modal/modal.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBMkNJLG1CQUVFLGNBRkY7O0FBM0NKLFNBQVNBLGlCQUFpQjtBQUMxQixTQUFTQyxpQkFBaUI7QUFDMUIsU0FBU0Msb0JBQW9CO0FBRTdCLE9BQU9DLGtCQUFrQjtBQUl6QixPQUFPQyxZQUFZO0FBUW5CLE1BQU1DLFlBQVlDLFNBQVNDLGVBQWUsY0FBYztBQUV4RCxNQUFNQyxRQUF5QkEsQ0FBQyxFQUFFQyxPQUFPQyxVQUFVQyxRQUFRLE1BQW1CO0FBQUFDLEtBQUE7QUFDNUVYLFlBQVUsTUFBTTtBQUVkLFVBQU1ZLGlCQUFpQkEsQ0FBQ0MsUUFBNkI7QUFDbkQsVUFBSUEsSUFBSUMsUUFBUSxVQUFVO0FBQ3hCSixnQkFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBRUFMLGFBQVNVLGlCQUFpQixXQUFXSCxjQUFjO0FBRW5ELFdBQU8sTUFBWTtBQUNqQlAsZUFBU1csb0JBQW9CLFdBQVdKLGNBQWM7QUFBQSxJQUN4RDtBQUFBLEVBQ0YsR0FBRyxDQUFDRixPQUFPLENBQUM7QUFHWixNQUFJLENBQUNOLFdBQVc7QUFDZCxVQUFNLElBQUlhO0FBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUdBLFNBQU9oQjtBQUFBQSxJQUNMLG1DQUVFO0FBQUEsNkJBQUMsZ0JBQWEsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQStCO0FBQUEsTUFFL0IsdUJBQUMsU0FBSSxXQUFXRSxPQUFPZSxPQUNyQjtBQUFBLCtCQUFDLFNBQUksV0FBVyxHQUFHZixPQUFPZ0IsTUFBTSxzQkFDOUI7QUFBQSxpQ0FBQyxRQUFHLFdBQVUsNkJBQTZCWCxtQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUQ7QUFBQSxVQUNqRCx1QkFBQyxZQUFPLFdBQVdMLE9BQU9pQixhQUFhLFNBQVNWLFNBQzlDLGlDQUFDLGFBQVUsTUFBSyxXQUFVLEdBQUssRUFBRVcsT0FBTyxJQUFJQyxRQUFRLEdBQUcsS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUUsS0FEbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUtBO0FBQUEsUUFFQSx1QkFBQyxTQUFJLFdBQVduQixPQUFPb0IsU0FBVWQsWUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEwQztBQUFBLFdBUjVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFTQTtBQUFBLFNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWNBO0FBQUEsSUFDQUw7QUFBQUEsRUFDRjtBQUNGO0FBQUVPLEdBMUNJSixPQUFzQjtBQUFBLEtBQXRCQTtBQTRDTixlQUFlQTtBQUFNLElBQUFpQjtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJDbG9zZUljb24iLCJ1c2VFZmZlY3QiLCJjcmVhdGVQb3J0YWwiLCJNb2RhbE92ZXJsYXkiLCJzdHlsZXMiLCJtb2RhbFJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTW9kYWwiLCJ0aXRsZSIsImNoaWxkcmVuIiwib25DbG9zZSIsIl9zIiwiaGFuZGxlRXNjQ2xvc2UiLCJlc2MiLCJrZXkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVycm9yIiwibW9kYWwiLCJoZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGVudCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBNb2RhbE92ZXJsYXkgZnJvbSAnLi4vbW9kYWwtb3ZlcmxheS9tb2RhbC1vdmVybGF5JztcblxuaW1wb3J0IHR5cGUgeyBGQywgUmVhY3ROb2RlLCBSZWFjdFBvcnRhbCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vZGFsLm1vZHVsZS5jc3MnO1xuXG50eXBlIFRNb2RhbFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IG1vZGFsUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1tb2RhbHMnKTtcblxuY29uc3QgTW9kYWw6IEZDPFRNb2RhbFByb3BzPiA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgb25DbG9zZSB9KTogUmVhY3RQb3J0YWwgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vINGB0YLRgNC+0LPQuNC5INGC0LjQvyBLZXlib2FyZEV2ZW50INC00LvRjyDRgdC+0LHRi9GC0LjRjyDQvdCw0LbQsNGC0LjRjyDQutC70LDQstC40YgmXG4gICAgY29uc3QgaGFuZGxlRXNjQ2xvc2UgPSAoZXNjOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXNjLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgb25DbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8g0JLQutC7INGB0LvRg9GI0LDRgtGMINC60LvQsNCy0LjQsNGC0YPRgNGDXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzY0Nsb3NlKTtcbiAgICAvLyDQktGL0LrQuyDRgdC70YPRiNCw0YLRjCDQutC70LDQstC40LDRgtGD0YDRgy5cbiAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzY0Nsb3NlKTtcbiAgICB9O1xuICB9LCBbb25DbG9zZV0pO1xuXG4gIC8vINCY0Lcg0L/RgNC+0YHRgtC+0YDQvtCyINC40L3QtdGC0LAgLSDQl9Cw0YnQuNGC0L3QsNGPINC/0YDQvtCy0LXRgNC60LAg0L3QsCDRgdGD0YnQtdGB0YLQstC+0LLQsNC90LjQtSDQvdC+0LTRiyDQsiBET00t0LTQtdGA0LXQstC1IVxuICBpZiAoIW1vZGFsUm9vdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICfQndC1INC90LDQudC00LXQvSDQutC+0YDQvdC10LLQvtC5INGN0LvQtdC80LXQvdGCICNyZWFjdC1tb2RhbHMg0LTQu9GPINGA0LXQvdC00LXRgNC40L3Qs9CwINC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwJ1xuICAgICk7XG4gIH1cblxuICAvLyBSZWFjdERPTS5jcmVhdGVQb3J0YWwg0LfQsNC80LXQvdC10L0g0L3QsCAg0LzQtdGC0L7QtCBjcmVhdGVQb3J0YWwuXG4gIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgPD5cbiAgICAgIHsvKiDQndC10LjQt9C80LXQvdGP0LXQvNGL0Lkg0YfQtdGA0L3Ri9C5INGE0L7QvSAqL31cbiAgICAgIDxNb2RhbE92ZXJsYXkgb25DbG9zZT17b25DbG9zZX0gLz5cbiAgICAgIHsvKiDQkdC10LvQvtC1INC+0LrQvdC+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVyfSBtdC0xMCBtci0xMCBtbC0xMGB9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLWxhcmdlXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICA8Q2xvc2VJY29uIHR5cGU9XCJwcmltYXJ5XCIgey4uLih7IHdpZHRoOiAyNCwgaGVpZ2h0OiAyNCB9IGFzIGFueSl9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Lyog0KHQvtC00LXRgNC20LjQvNC+0LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz4sXG4gICAgbW9kYWxSb290XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJmaWxlIjoiL1VzZXJzL2Rha2FzaGlyL2dpdGh1Yi9yZWFjdC1idXJnZXItanMtc3RhcnRlci9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC50c3gifQ==