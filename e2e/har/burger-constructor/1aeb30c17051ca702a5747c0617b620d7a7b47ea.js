import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/home/home.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { DndProvider } from "/node_modules/.vite/deps/react-dnd.js?v=12f80588";
import { HTML5Backend } from "/node_modules/.vite/deps/react-dnd-html5-backend.js?v=12f80588";
import { BurgerIngredients } from "/src/components/burger-ingredients/burger-ingredients.tsx";
import { BurgerConstructor } from "/src/components/burger-constructor/burger-constructor.tsx";
import SEO from "/src/components/seo/seo.tsx";
import styles from "/src/pages/home/home.module.css";
export const Home = () => {
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(SEO, { title: "Конструктор космических бургеров" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("h1", { className: `${styles.title} text text_type_main-large mt-10 mb-5 pl-5`, children: "Соберите бургер" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsxDEV("main", { className: `${styles.main} pl-5 pr-5`, children: [
      /* @__PURE__ */ jsxDEV(BurgerIngredients, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(BurgerConstructor, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/home/home.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY007QUFkTixTQUFTQSxtQkFBbUI7QUFDNUIsU0FBU0Msb0JBQW9CO0FBRTdCLFNBQVNDLHlCQUF5QjtBQUNsQyxTQUFTQyx5QkFBeUI7QUFDbEMsT0FBT0MsU0FBUztBQUloQixPQUFPQyxZQUFZO0FBRVosYUFBTUMsT0FBT0EsTUFBb0I7QUFDdEMsU0FDRSx1QkFBQyxTQUNDO0FBQUEsMkJBQUMsT0FBSSxPQUFNLHNDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNkM7QUFBQSxJQUM3Qyx1QkFBQyxRQUFHLFdBQVcsR0FBR0QsT0FBT0UsS0FBSyw4Q0FBNkMsK0JBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBQ0EsdUJBQUMsZUFBWSxTQUFTTixjQUNwQixpQ0FBQyxVQUFLLFdBQVcsR0FBR0ksT0FBT0csSUFBSSxjQUM3QjtBQUFBLDZCQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBa0I7QUFBQSxNQUNsQix1QkFBQyx1QkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWtCO0FBQUEsU0FGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUdBLEtBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUtBO0FBQUEsT0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBV0E7QUFFSjtBQUFFQyxLQWZXSDtBQUFJLElBQUFHO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIkRuZFByb3ZpZGVyIiwiSFRNTDVCYWNrZW5kIiwiQnVyZ2VySW5ncmVkaWVudHMiLCJCdXJnZXJDb25zdHJ1Y3RvciIsIlNFTyIsInN0eWxlcyIsIkhvbWUiLCJ0aXRsZSIsIm1haW4iLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJob21lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5cbmltcG9ydCB7IEJ1cmdlckluZ3JlZGllbnRzIH0gZnJvbSAnQC9jb21wb25lbnRzL2J1cmdlci1pbmdyZWRpZW50cy9idXJnZXItaW5ncmVkaWVudHMnO1xuaW1wb3J0IHsgQnVyZ2VyQ29uc3RydWN0b3IgfSBmcm9tICdAY29tcG9uZW50cy9idXJnZXItY29uc3RydWN0b3IvYnVyZ2VyLWNvbnN0cnVjdG9yJztcbmltcG9ydCBTRU8gZnJvbSAnQGNvbXBvbmVudHMvc2VvL3Nlbyc7XG5cbmltcG9ydCB0eXBlIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNFTyB0aXRsZT1cItCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0LrQvtGB0LzQuNGH0LXRgdC60LjRhSDQsdGD0YDQs9C10YDQvtCyXCIgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy50aXRsZX0gdGV4dCB0ZXh0X3R5cGVfbWFpbi1sYXJnZSBtdC0xMCBtYi01IHBsLTVgfT5cbiAgICAgICAg0KHQvtCx0LXRgNC40YLQtSDQsdGD0YDQs9C10YBcbiAgICAgIDwvaDE+XG4gICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17SFRNTDVCYWNrZW5kfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFpbn0gcGwtNSBwci01YH0+XG4gICAgICAgICAgPEJ1cmdlckluZ3JlZGllbnRzIC8+XG4gICAgICAgICAgPEJ1cmdlckNvbnN0cnVjdG9yIC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvRG5kUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvVXNlcnMvZGFrYXNoaXIvZ2l0aHViL3JlYWN0LWJ1cmdlci1qcy1zdGFydGVyL3NyYy9wYWdlcy9ob21lL2hvbWUudHN4In0=