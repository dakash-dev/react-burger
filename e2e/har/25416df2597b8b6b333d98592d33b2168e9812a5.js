import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/seo/seo.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { Helmet } from "/node_modules/.vite/deps/react-helmet-async.js?v=12f80588";
export default function SEO({
  title,
  description = "Космическая бургерная нового поколения. Собери свой идеальный бургер прямо сейчас!",
  name = "Stellar Burgers Team",
  type = "website"
}) {
  const currentTitle = `${title} | Stellar Burgers`;
  return /* @__PURE__ */ jsxDEV(Helmet, { children: [
    /* @__PURE__ */ jsxDEV("title", { children: currentTitle }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("meta", { name: "description", content: description }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: type }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: currentTitle }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: description }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:creator", content: name }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: currentTitle }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: description }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
_c = SEO;
var _c;
$RefreshReg$(_c, "SEO");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/seo/seo.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBdUJNO0FBdkJOLFNBQVNBLGNBQWM7QUFXdkIsd0JBQXdCQyxJQUFJO0FBQUEsRUFDMUJDO0FBQUFBLEVBQ0FDLGNBQWM7QUFBQSxFQUNkQyxPQUFPO0FBQUEsRUFDUEMsT0FBTztBQUNFLEdBQWlCO0FBRTFCLFFBQU1DLGVBQWUsR0FBR0osS0FBSztBQUU3QixTQUNFLHVCQUFDLFVBRUM7QUFBQSwyQkFBQyxXQUFPSSwwQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFCO0FBQUEsSUFDckIsdUJBQUMsVUFBSyxNQUFLLGVBQWMsU0FBU0gsZUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE4QztBQUFBLElBRzlDLHVCQUFDLFVBQUssVUFBUyxXQUFVLFNBQVNFLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdUM7QUFBQSxJQUN2Qyx1QkFBQyxVQUFLLFVBQVMsWUFBVyxTQUFTQyxnQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnRDtBQUFBLElBQ2hELHVCQUFDLFVBQUssVUFBUyxrQkFBaUIsU0FBU0gsZUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxRDtBQUFBLElBR3JELHVCQUFDLFVBQUssTUFBSyxtQkFBa0IsU0FBU0MsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEyQztBQUFBLElBQzNDLHVCQUFDLFVBQUssTUFBSyxnQkFBZSxTQUFRLHlCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXVEO0FBQUEsSUFDdkQsdUJBQUMsVUFBSyxNQUFLLGlCQUFnQixTQUFTRSxnQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFpRDtBQUFBLElBQ2pELHVCQUFDLFVBQUssTUFBSyx1QkFBc0IsU0FBU0gsZUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFzRDtBQUFBLE9BZHhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FlQTtBQUVKO0FBQUNJLEtBM0J1Qk47QUFBRyxJQUFBTTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJIZWxtZXQiLCJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibmFtZSIsInR5cGUiLCJjdXJyZW50VGl0bGUiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzZW8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYyc7XG5cbmltcG9ydCB0eXBlIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFRTRU9Qcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7IC8vINCh0LTQtdC70LDQu9C4INC+0L/RhtC40L7QvdCw0LvRjNC90YvQvCwg0YfRgtC+0LHRiyDQvdC1INC00YPQsdC70LjRgNC+0LLQsNGC0Ywg0L3QsCDQutCw0LbQtNC+0Lkg0YTQvtGA0LzQtVxuICBuYW1lPzogc3RyaW5nOyAvLyDQntC/0YbQuNC+0L3QsNC70YzQvdC+ICjQsNCy0YLQvtGAL9GB0L7Qt9C00LDRgtC10LvRjCDQutCw0YDRgtC+0YfQutC4KVxuICB0eXBlPzogc3RyaW5nOyAvLyDQntC/0YbQuNC+0L3QsNC70YzQvdC+ICjRgtC40L8g0YHRgtGA0LDQvdC40YbRiyDQtNC70Y8g0YHQvtGG0YHQtdGC0LXQuSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbiA9ICfQmtC+0YHQvNC40YfQtdGB0LrQsNGPINCx0YPRgNCz0LXRgNC90LDRjyDQvdC+0LLQvtCz0L4g0L/QvtC60L7Qu9C10L3QuNGPLiDQodC+0LHQtdGA0Lgg0YHQstC+0Lkg0LjQtNC10LDQu9GM0L3Ri9C5INCx0YPRgNCz0LXRgCDQv9GA0Y/QvNC+INGB0LXQudGH0LDRgSEnLFxuICBuYW1lID0gJ1N0ZWxsYXIgQnVyZ2VycyBUZWFtJyxcbiAgdHlwZSA9ICd3ZWJzaXRlJyxcbn06IFRTRU9Qcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQutGA0LDRgdC40LLRg9GOINGE0LjRgNC80LXQvdC90YPRjiDQv9GA0LjRgdGC0LDQstC60YMg0Log0LfQsNCz0L7Qu9C+0LLQutCw0Lwg0LLQutC70LDQtNC+0LpcbiAgY29uc3QgY3VycmVudFRpdGxlID0gYCR7dGl0bGV9IHwgU3RlbGxhciBCdXJnZXJzYDtcblxuICByZXR1cm4gKFxuICAgIDxIZWxtZXQ+XG4gICAgICB7Lyog0KHRgtCw0L3QtNCw0YDRgtC90YvQtSDQvNC10YLQsNGC0LXQs9C4ICovfVxuICAgICAgPHRpdGxlPntjdXJyZW50VGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuXG4gICAgICB7Lyog0JzQtdGC0LDRgtC10LPQuCDQtNC70Y8g0JLQmtC+0L3RgtCw0LrRgtC1IC8gT3BlbiBHcmFwaCAqL31cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9e3R5cGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17Y3VycmVudFRpdGxlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuXG4gICAgICB7Lyog0JzQtdGC0LDRgtC10LPQuCDQtNC70Y8gVHdpdHRlciAqL31cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PXtuYW1lfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17Y3VycmVudFRpdGxlfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICA8L0hlbG1ldD5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL1VzZXJzL2Rha2FzaGlyL2dpdGh1Yi9yZWFjdC1idXJnZXItanMtc3RhcnRlci9zcmMvY29tcG9uZW50cy9zZW8vc2VvLnRzeCJ9