import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/order-details/order-details.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { CheckMarkIcon } from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import { useAppSelector } from "/src/services/hooks.ts";
import { selectOrderLoading, selectOrderNumber } from "/src/services/order/slice.ts";
import styles from "/src/components/order-details/order-details.module.css";
function OrderDetails() {
  _s();
  const orderNumber = useAppSelector(selectOrderNumber);
  const isLoading = useAppSelector(selectOrderLoading);
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { className: styles.container, children: /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-medium mt-20 mb-20", children: "Генерируем код заказа на орбите..." }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: styles.container, children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "text text_type_digits-large mt-4 mb-4", children: orderNumber }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-medium mb-15", children: "идентификатор заказа" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CheckMarkIcon, { type: "success" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default mt-15 mb-2", children: "Ваш заказ начали готовить" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default text_color_inactive mb-30", children: "Дождитесь готовности на орбитальной станции" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
_s(OrderDetails, "HmLPEys2Hqs8Bv+h9gc2j6Mgiw0=", false, function() {
  return [useAppSelector, useAppSelector];
});
_c = OrderDetails;
export default OrderDetails;
var _c;
$RefreshReg$(_c, "OrderDetails");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/order-details/order-details.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JROztBQWxCUixTQUFTQSxxQkFBcUI7QUFFOUIsU0FBU0Msc0JBQXNCO0FBQy9CLFNBQVNDLG9CQUFvQkMseUJBQXlCO0FBSXRELE9BQU9DLFlBQVk7QUFFbkIsU0FBU0MsZUFBNkI7QUFBQUMsS0FBQTtBQUVwQyxRQUFNQyxjQUFjTixlQUFlRSxpQkFBaUI7QUFDcEQsUUFBTUssWUFBWVAsZUFBZUMsa0JBQWtCO0FBR25ELE1BQUlNLFdBQVc7QUFDYixXQUNFLHVCQUFDLFNBQUksV0FBV0osT0FBT0ssV0FDckIsaUNBQUMsVUFBSyxXQUFVLDBDQUF3QyxrREFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlBO0FBQUEsRUFFSjtBQUVBLFNBQ0UsdUJBQUMsU0FBSSxXQUFXTCxPQUFPSyxXQUNyQjtBQUFBLDJCQUFDLFFBQUcsV0FBVSx5Q0FBeUNGLHlCQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW1FO0FBQUEsSUFDbkUsdUJBQUMsVUFBSyxXQUFVLG9DQUFtQyxvQ0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF1RTtBQUFBLElBQ3ZFLHVCQUFDLGlCQUFjLE1BQUssYUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE2QjtBQUFBLElBQzdCLHVCQUFDLE9BQUUsV0FBVSwwQ0FBeUMseUNBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBK0U7QUFBQSxJQUMvRSx1QkFBQyxPQUFFLFdBQVUseURBQXVELDJEQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxPQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRQTtBQUVKO0FBQUNELEdBM0JRRCxjQUFZO0FBQUEsVUFFQ0osZ0JBQ0ZBLGNBQWM7QUFBQTtBQUFBLEtBSHpCSTtBQTZCVCxlQUFlQTtBQUFhLElBQUFLO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIkNoZWNrTWFya0ljb24iLCJ1c2VBcHBTZWxlY3RvciIsInNlbGVjdE9yZGVyTG9hZGluZyIsInNlbGVjdE9yZGVyTnVtYmVyIiwic3R5bGVzIiwiT3JkZXJEZXRhaWxzIiwiX3MiLCJvcmRlck51bWJlciIsImlzTG9hZGluZyIsImNvbnRhaW5lciIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZWNrTWFya0ljb24gfSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ob29rcyc7XG5pbXBvcnQgeyBzZWxlY3RPcmRlckxvYWRpbmcsIHNlbGVjdE9yZGVyTnVtYmVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3JkZXIvc2xpY2UnO1xuXG5pbXBvcnQgdHlwZSB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL29yZGVyLWRldGFpbHMubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE9yZGVyRGV0YWlscygpOiBSZWFjdEVsZW1lbnQge1xuICAvLyDQvdC+0LzQtdGAINC30LDQutCw0LfQsCDQuCDRhNC70LDQsyDQt9Cw0LPRgNGD0LfQutC4INC40Lcg0LLQtdGC0LrQuCBvcmRlci5cbiAgY29uc3Qgb3JkZXJOdW1iZXIgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RPcmRlck51bWJlcik7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdE9yZGVyTG9hZGluZyk7XG5cbiAgLy8g0JXRgdC70Lgg0LfQsNC/0YDQvtGBINC6INGB0LXRgNCy0LXRgNGDINC10YnQtSDQuNC00LXRgiwg0LLRi9Cy0L7QtNC40Lwg0YLQtdC60YHRgiDQvtC20LjQtNCw0L3QuNGPXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bSBtdC0yMCBtYi0yMFwiPlxuICAgICAgICAgINCT0LXQvdC10YDQuNGA0YPQtdC8INC60L7QtCDQt9Cw0LrQsNC30LAg0L3QsCDQvtGA0LHQuNGC0LUuLi5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX2RpZ2l0cy1sYXJnZSBtdC00IG1iLTRcIj57b3JkZXJOdW1iZXJ9PC9oMT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtIG1iLTE1XCI+0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LfQsNC60LDQt9CwPC9zcGFuPlxuICAgICAgPENoZWNrTWFya0ljb24gdHlwZT1cInN1Y2Nlc3NcIiAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IG10LTE1IG1iLTJcIj7QktCw0Ygg0LfQsNC60LDQtyDQvdCw0YfQsNC70Lgg0LPQvtGC0L7QstC40YLRjDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCB0ZXh0X2NvbG9yX2luYWN0aXZlIG1iLTMwXCI+XG4gICAgICAgINCU0L7QttC00LjRgtC10YHRjCDQs9C+0YLQvtCy0L3QvtGB0YLQuCDQvdCwINC+0YDQsdC40YLQsNC70YzQvdC+0Lkg0YHRgtCw0L3RhtC40LhcbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJEZXRhaWxzO1xuIl0sImZpbGUiOiIvVXNlcnMvZGFrYXNoaXIvZ2l0aHViL3JlYWN0LWJ1cmdlci1qcy1zdGFydGVyL3NyYy9jb21wb25lbnRzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy50c3gifQ==