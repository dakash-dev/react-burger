import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/order-card/order-card.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import {
  CurrencyIcon,
  FormattedDate
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import { Link, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import { useAppSelector } from "/src/services/hooks.ts";
import { selectIngredients } from "/src/services/ingredients/slice.ts";
import styles from "/src/components/order-card/order-card.module.css";
export const OrderCard = ({
  order,
  showStatus = false
}) => {
  _s();
  const location = useLocation();
  const allIngredients = useAppSelector(selectIngredients);
  const ingredientsMap = allIngredients.reduce(
    (map, item) => {
      map[item._id] = item;
      return map;
    },
    {}
  );
  const orderIngredients = order.ingredients.map((id) => ingredientsMap[id]).filter((item) => item !== void 0);
  const buns = orderIngredients.filter(
    (item) => item.type === "bun"
  );
  const fillings = orderIngredients.filter(
    (item) => item.type !== "bun"
  );
  const bunPrice = buns.length > 0 ? buns[0].price * 2 : 0;
  const fillingsPrice = fillings.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const totalPrice = bunPrice + fillingsPrice;
  const maxIcons = 6;
  const iconsToRender = orderIngredients.slice(0, maxIcons);
  const remainingCount = orderIngredients.length - maxIcons;
  const statusLabels = {
    done: "Выполнен",
    pending: "Готовится",
    created: "Создан"
  };
  const orderPath = showStatus ? `/profile/orders/${order._id}` : `/feed/${order._id}`;
  return /* @__PURE__ */ jsxDEV(
    Link,
    {
      to: orderPath,
      state: { background: location },
      className: styles.card_link,
      children: /* @__PURE__ */ jsxDEV("div", { className: `${styles.card} p-6 mb-4`, children: [
        /* @__PURE__ */ jsxDEV("div", { className: styles.header, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default", children: [
            "#",
            order.number
          ] }, void 0, true, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-default text_color_inactive", children: /* @__PURE__ */ jsxDEV(FormattedDate, { date: new Date(order.createdAt) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text text_type_main-medium mt-6 mb-2", children: order.name }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        showStatus && /* @__PURE__ */ jsxDEV(
          "p",
          {
            className: `text text_type_main-default mb-6 ${order.status === "done" ? styles.status_done : ""}`,
            children: statusLabels[order.status]
          },
          void 0,
          false,
          {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
            lineNumber: 101,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: styles.footer, children: [
          /* @__PURE__ */ jsxDEV("ul", { className: styles.icons_list, children: iconsToRender.map(
            (ingredient, index) => {
              const isLast = index === maxIcons - 1 && remainingCount > 0;
              return /* @__PURE__ */ jsxDEV(
                "li",
                {
                  className: styles.icon_wrapper,
                  style: { zIndex: maxIcons - index },
                  children: [
                    /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        src: ingredient.image_mobile,
                        alt: ingredient.name,
                        className: styles.icon_img
                      },
                      void 0,
                      false,
                      {
                        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
                        lineNumber: 122,
                        columnNumber: 21
                      },
                      this
                    ),
                    isLast && /* @__PURE__ */ jsxDEV("div", { className: `${styles.overlay} text text_type_main-default`, children: [
                      "+",
                      remainingCount
                    ] }, void 0, true, {
                      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
                      lineNumber: 130,
                      columnNumber: 21
                    }, this)
                  ]
                },
                `${ingredient._id}-${index}`,
                true,
                {
                  fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
                  lineNumber: 116,
                  columnNumber: 19
                },
                this
              );
            }
          ) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
            lineNumber: 111,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: styles.price, children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default mr-2", children: totalPrice }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
              lineNumber: 141,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
              lineNumber: 142,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
            lineNumber: 140,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx",
      lineNumber: 82,
      columnNumber: 5
    },
    this
  );
};
_s(OrderCard, "vB5KTZ54raDoqbPF2CJbGKlPFGs=", false, function() {
  return [useLocation, useAppSelector];
});
_c = OrderCard;
var _c;
$RefreshReg$(_c, "OrderCard");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/order-card/order-card.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUEsYUFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW1DQTtBQUFBLFdBdkRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF3REE7QUFBQTtBQUFBLElBL0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWdFQTtBQUVKO0FBQUVyQixHQXRIV0gsV0FBOEI7QUFBQSxVQUl4QkosYUFFTUMsY0FBYztBQUFBO0FBQUEsS0FOMUJHO0FBQThCLElBQUFzRDtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJDdXJyZW5jeUljb24iLCJGb3JtYXR0ZWREYXRlIiwiTGluayIsInVzZUxvY2F0aW9uIiwidXNlQXBwU2VsZWN0b3IiLCJzZWxlY3RJbmdyZWRpZW50cyIsInN0eWxlcyIsIk9yZGVyQ2FyZCIsIm9yZGVyIiwic2hvd1N0YXR1cyIsIl9zIiwibG9jYXRpb24iLCJhbGxJbmdyZWRpZW50cyIsImluZ3JlZGllbnRzTWFwIiwicmVkdWNlIiwibWFwIiwiaXRlbSIsIl9pZCIsIm9yZGVySW5ncmVkaWVudHMiLCJpbmdyZWRpZW50cyIsImlkIiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiYnVucyIsInR5cGUiLCJmaWxsaW5ncyIsImJ1blByaWNlIiwibGVuZ3RoIiwicHJpY2UiLCJmaWxsaW5nc1ByaWNlIiwic3VtIiwidG90YWxQcmljZSIsIm1heEljb25zIiwiaWNvbnNUb1JlbmRlciIsInNsaWNlIiwicmVtYWluaW5nQ291bnQiLCJzdGF0dXNMYWJlbHMiLCJkb25lIiwicGVuZGluZyIsImNyZWF0ZWQiLCJvcmRlclBhdGgiLCJiYWNrZ3JvdW5kIiwiY2FyZF9saW5rIiwiY2FyZCIsImhlYWRlciIsIm51bWJlciIsIkRhdGUiLCJjcmVhdGVkQXQiLCJuYW1lIiwic3RhdHVzIiwic3RhdHVzX2RvbmUiLCJmb290ZXIiLCJpY29uc19saXN0IiwiaW5ncmVkaWVudCIsImluZGV4IiwiaXNMYXN0IiwiaWNvbl93cmFwcGVyIiwiekluZGV4IiwiaW1hZ2VfbW9iaWxlIiwiaWNvbl9pbWciLCJvdmVybGF5IiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsib3JkZXItY2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ3VycmVuY3lJY29uLFxuICBGb3JtYXR0ZWREYXRlLFxufSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9zZXJ2aWNlcy9ob29rcyc7XG5pbXBvcnQgeyBzZWxlY3RJbmdyZWRpZW50cyB9IGZyb20gJ0Avc2VydmljZXMvaW5ncmVkaWVudHMvc2xpY2UnO1xuXG5pbXBvcnQgdHlwZSB7IFRJbmdyZWRpZW50IH0gZnJvbSAnQC91dGlscy9idXJnZXItYXBpJztcbmltcG9ydCB0eXBlIHsgRkMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL29yZGVyLWNhcmQubW9kdWxlLmNzcyc7XG4vLyBGb3JtYXR0ZWREYXRlIC0g0YHRgtGA0L7QutCwINC00LDRgtGLIChjcmVhdGVkQXQpINCyINGE0L7RgNC80LDRgtC1IFwi0KHQtdCz0L7QtNC90Y8sIDE0OjMwIGktR01UKzNcIlxuXG4vLyDQtNC70Y8g0L/RgNC+0L/RgdC+0LIg0LrQsNGA0YLQvtGH0LrQuCDQt9Cw0LrQsNC30LBcbnR5cGUgVE9yZGVyQ2FyZFByb3BzID0ge1xuICBvcmRlcjoge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIGluZ3JlZGllbnRzOiBBcnJheTxzdHJpbmc+O1xuICAgIHN0YXR1czogJ2RvbmUnIHwgJ3BlbmRpbmcnIHwgJ2NyZWF0ZWQnO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgICBudW1iZXI6IG51bWJlcjtcbiAgfTtcbiAgc2hvd1N0YXR1cz86IGJvb2xlYW47IC8vINCe0L/RhtC40L7QvdCw0LvRjNC90YvQuSDRhNC70LDQszog0L/QvtC60LDQt9GL0LLQsNGC0Ywg0LvQuCDRgdGC0LDRgtGD0YEg0LfQsNC60LDQt9CwICjQvdGD0LbQtdC9INCyINC/0YDQvtGE0LjQu9C1KVxufTtcblxuZXhwb3J0IGNvbnN0IE9yZGVyQ2FyZDogRkM8VE9yZGVyQ2FyZFByb3BzPiA9ICh7XG4gIG9yZGVyLFxuICBzaG93U3RhdHVzID0gZmFsc2UsXG59KTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICAvLyAxIC0gINCU0L7RgdGC0LDQtdC8INC/0L7Qu9C90YvQuSDRgdC/0YDQsNCy0L7Rh9C90LjQuiDQuNC90LPRgNC10LTQuNC10L3RgtC+0LIg0LjQtyBSZWR1eFxuICBjb25zdCBhbGxJbmdyZWRpZW50cyA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdEluZ3JlZGllbnRzKTtcbiAgLy8gMiAtINCh0L7Qt9C00LDQtdC8INC60LDRgNGC0YMgKG1hcCkg0LTQu9GPINC/0L7QuNGB0LrQsCDQvtCx0YrQtdC60YLQvtCyINC40L3Qs9GA0LXQtNC40LXQvdGC0L7QsiDQv9C+INC40YUgX2lkXG4gIGNvbnN0IGluZ3JlZGllbnRzTWFwID0gYWxsSW5ncmVkaWVudHMucmVkdWNlKFxuICAgIChtYXA6IFJlY29yZDxzdHJpbmcsIFRJbmdyZWRpZW50PiwgaXRlbTogVEluZ3JlZGllbnQpID0+IHtcbiAgICAgIG1hcFtpdGVtLl9pZF0gPSBpdGVtO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LFxuICAgIHt9XG4gICk7XG4gIC8vIDMgLSDQodC+0LHQuNGA0LDQtdC8INC+0LHRitC10LrRgtGLINC40L3Qs9GA0LXQtNC40LXQvdGC0L7QsiDQtNC70Y8g0YLQtdC60YPRidC10LPQviDQt9Cw0LrQsNC30LBcbiAgY29uc3Qgb3JkZXJJbmdyZWRpZW50cyA9IG9yZGVyLmluZ3JlZGllbnRzXG4gICAgLm1hcCgoaWQ6IHN0cmluZyk6IFRJbmdyZWRpZW50IHwgdW5kZWZpbmVkID0+IGluZ3JlZGllbnRzTWFwW2lkXSlcbiAgICAuZmlsdGVyKChpdGVtKTogaXRlbSBpcyBUSW5ncmVkaWVudCA9PiBpdGVtICE9PSB1bmRlZmluZWQpOyAvLyDQmNGB0LrQu9GO0YfQtdC90LjQtSDQsdC40YLRi9GFIElEXG5cbiAgLy8gNCAtINCY0YLQvtCz0L7QstGD0Y4g0YHRgtC+0LjQvNC+0YHRgtGMICjQkdGD0LvQutCwINGB0YfQuNGC0LDQtdGC0YHRjyDQtNCy0LDQttC00YspXG4gIGNvbnN0IGJ1bnMgPSBvcmRlckluZ3JlZGllbnRzLmZpbHRlcihcbiAgICAoaXRlbTogVEluZ3JlZGllbnQpOiBib29sZWFuID0+IGl0ZW0udHlwZSA9PT0gJ2J1bidcbiAgKTtcbiAgY29uc3QgZmlsbGluZ3MgPSBvcmRlckluZ3JlZGllbnRzLmZpbHRlcihcbiAgICAoaXRlbTogVEluZ3JlZGllbnQpOiBib29sZWFuID0+IGl0ZW0udHlwZSAhPT0gJ2J1bidcbiAgKTtcblxuICAvLyDQkdC10YDQtdC8INGG0LXQvdGDINGC0L7Qu9GM0LrQviDQv9C10YDQstC+0Lkg0L3QsNC50LTQtdC90L3QvtC5INCx0YPQu9C60Lgg0Lgg0YPQvNC90L7QttCw0LXQvCDQvdCwIDIuINCd0LDRh9C40L3QutC4INGB0LrQu9Cw0LTRi9Cy0LDQtdC8INC60LDQuiDQvtCx0YvRh9C90L4uXG4gIGNvbnN0IGJ1blByaWNlID0gYnVucy5sZW5ndGggPiAwID8gYnVuc1swXS5wcmljZSAqIDIgOiAwO1xuICBjb25zdCBmaWxsaW5nc1ByaWNlID0gZmlsbGluZ3MucmVkdWNlKFxuICAgIChzdW06IG51bWJlciwgaXRlbTogVEluZ3JlZGllbnQpOiBudW1iZXIgPT4gc3VtICsgaXRlbS5wcmljZSxcbiAgICAwXG4gICk7XG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBidW5QcmljZSArIGZpbGxpbmdzUHJpY2U7XG5cbiAgLy8gNSAtINCe0LPRgNCw0L3QuNGH0LjQstCw0LXQvCDQutC+0LvQuNGH0LXRgdGC0LLQviDQuNC60L7QvdC+0Log0LTQu9GPINGA0LXQvdC00LXRgNCwICjQvNCw0LrRgdC40LzRg9C8IDYpXG4gIGNvbnN0IG1heEljb25zID0gNjtcbiAgY29uc3QgaWNvbnNUb1JlbmRlciA9IG9yZGVySW5ncmVkaWVudHMuc2xpY2UoMCwgbWF4SWNvbnMpO1xuICBjb25zdCByZW1haW5pbmdDb3VudCA9IG9yZGVySW5ncmVkaWVudHMubGVuZ3RoIC0gbWF4SWNvbnM7XG5cbiAgLy8g0KHQu9C+0LLQsNGA0Ywg0LTQu9GPINGH0LXQu9C+0LLQtdC60L7Rh9C40YLQsNC10LzQvtCz0L4g0L/QtdGA0LXQstC+0LTQsCDRgdGC0LDRgtGD0YHQvtCyINC90LAg0YDRg9GB0YHQutC40Lkg0Y/Qt9GL0LpcbiAgY29uc3Qgc3RhdHVzTGFiZWxzID0ge1xuICAgIGRvbmU6ICfQktGL0L/QvtC70L3QtdC9JyxcbiAgICBwZW5kaW5nOiAn0JPQvtGC0L7QstC40YLRgdGPJyxcbiAgICBjcmVhdGVkOiAn0KHQvtC30LTQsNC9JyxcbiAgfTtcblxuICAvLyDQvtC/0YDQtdC00LXQu9GP0LXQvCAg0L/Rg9GC0Ywg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGC0L7Qs9C+LCDQs9C00LUg0L3QsNGF0L7QtNC40YLRgdGPINC60LDRgNGC0L7Rh9C60LBcbiAgY29uc3Qgb3JkZXJQYXRoID0gc2hvd1N0YXR1cyA/IGAvcHJvZmlsZS9vcmRlcnMvJHtvcmRlci5faWR9YCA6IGAvZmVlZC8ke29yZGVyLl9pZH1gO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHRvPXtvcmRlclBhdGh9XG4gICAgICAvLyDQn9C10YDQtdC00LDQtdC8INGC0LXQutGD0YnQuNC5IGxvY2F0aW9uINCyINGB0YLQtdC50YIg0YDQvtGD0YLQtdGA0LAuXG4gICAgICAvLyDQmNC80LXQvdC90L4g0Y3RgtC+INC30LDRgdGC0LDQstC40YIgQXBwLnRzeCDQv9C+0L3Rj9GC0YwsINGH0YLQviDQvdGD0LbQvdC+INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCf0J7QktCV0KDQpSDRgdGC0YDQsNC90LjRhtGLIVxuICAgICAgc3RhdGU9e3sgYmFja2dyb3VuZDogbG9jYXRpb24gfX1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfbGlua31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmR9IHAtNiBtYi00YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9kaWdpdHMtZGVmYXVsdFwiPiN7b3JkZXIubnVtYmVyfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgdGV4dF9jb2xvcl9pbmFjdGl2ZVwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZERhdGUgZGF0ZT17bmV3IERhdGUob3JkZXIuY3JlYXRlZEF0KX0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bSBtdC02IG1iLTJcIj57b3JkZXIubmFtZX08L2gyPlxuXG4gICAgICAgIHsvKiDQn9GA0L7QstC10YDQutCwINGE0LvQsNCz0LAgc2hvd1N0YXR1cyDQtNC70Y8g0LLRi9Cy0L7QtNCwINGB0YLQsNGC0YPRgdCwINC30LDQutCw0LfQsCDQsiDQuNGB0YLQvtGA0LjQuCDQv9GA0L7RhNC40LvRjyAqL31cbiAgICAgICAge3Nob3dTdGF0dXMgJiYgKFxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgbWItNiAke29yZGVyLnN0YXR1cyA9PT0gJ2RvbmUnID8gc3R5bGVzLnN0YXR1c19kb25lIDogJyd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3RhdHVzTGFiZWxzW29yZGVyLnN0YXR1c119XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiDQtNC70Y8g0LLRi9GA0LDQstC90LjQstCw0L3QuNGPINC90LjQttC90LXQuSDRh9Cw0YHRgtC4INC60LDRgNGC0L7Rh9C60LggKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICB7Lyog0LTQu9GPINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LPQviDRgNGP0LTQsCDQuNC60L7QvdC+0LogKi99XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmljb25zX2xpc3R9PlxuICAgICAgICAgICAge2ljb25zVG9SZW5kZXIubWFwKFxuICAgICAgICAgICAgICAoaW5ncmVkaWVudDogVEluZ3JlZGllbnQsIGluZGV4OiBudW1iZXIpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID09PSBtYXhJY29ucyAtIDEgJiYgcmVtYWluaW5nQ291bnQgPiAwO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpbmdyZWRpZW50Ll9pZH0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAvLyDQtNC40L3QsNC80LjRh9C10YHQutC40Lkg0YDQsNGB0YfQtdGCIHpJbmRleCwg0LfQsNCy0LjRgdGP0YnQuNC5INC+0YIg0LjQvdC00LXQutGB0LAg0L/QtdGA0LXQsdC+0YDQsC5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl93cmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IG1heEljb25zIC0gaW5kZXggfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW5ncmVkaWVudC5pbWFnZV9tb2JpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbmdyZWRpZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9pbWd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qINCV0YHQu9C4INC40L3Qs9GA0LXQtNC40LXQvdGC0L7QsiA+IDYsINC90LDQutC70LDQtNGL0LLQsNC10Lwg0LzQsNGB0LrRgyDRgdC+INGB0YfQtdGC0YfQuNC60L7QvCDQvtGB0YLQsNGC0LrQsCAqL31cbiAgICAgICAgICAgICAgICAgICAge2lzTGFzdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5vdmVybGF5fSB0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHRgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICt7cmVtYWluaW5nQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHQgbXItMlwiPnt0b3RhbFByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxDdXJyZW5jeUljb24gdHlwZT1cInByaW1hcnlcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9kYWthc2hpci9naXRodWIvcmVhY3QtYnVyZ2VyLWpzLXN0YXJ0ZXIvc3JjL2NvbXBvbmVudHMvb3JkZXItY2FyZC9vcmRlci1jYXJkLnRzeCJ9