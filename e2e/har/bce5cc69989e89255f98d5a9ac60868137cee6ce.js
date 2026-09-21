import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/order-info/order-info.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import {
  CurrencyIcon,
  FormattedDate
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=12f80588"; const useEffect = __vite__cjsImport2_react["useEffect"]; const useState = __vite__cjsImport2_react["useState"];
import { useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import { selectFeedOrders } from "/src/services/feed/slice.ts";
import { useAppSelector } from "/src/services/hooks.ts";
import { selectIngredients } from "/src/services/ingredients/slice.ts";
import { getOrderRequest } from "/src/utils/burger-api.ts";
import styles from "/src/components/order-info/order-info.module.css";
export const OrderInfo = () => {
  _s();
  const { id } = useParams();
  const orders = useAppSelector(selectFeedOrders);
  const reduxOrder = orders.find((item) => item._id === id);
  const [localOrder, setLocalOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const allIngredients = useAppSelector(selectIngredients);
  useEffect(() => {
    if (reduxOrder || !id) return;
    setIsLoading(true);
    setError(null);
    getOrderRequest(id).then((data) => {
      if (data.success) {
        if (data.order) {
          setLocalOrder(data.order);
        } else if (data.orders && data.orders.length > 0) {
          setLocalOrder(data.orders[0]);
        } else {
          setError("Заказ не найден");
        }
      } else {
        setError("Заказ не найден");
      }
    }).catch((err) => {
      console.error("Ошибка загрузки заказа:", err);
      setError("Не удалось загрузить данные заказа");
    }).finally(() => {
      setIsLoading(false);
    });
  }, [id, reduxOrder]);
  const currentOrder = reduxOrder || localOrder;
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { className: `${styles.centered} text text_type_main-medium`, children: "Загрузка деталей заказа..." }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this);
  }
  if (error || !currentOrder) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: `${styles.centered} text text_type_main-medium text_color_inactive`,
        children: error || "Информация о заказе недоступна"
      },
      void 0,
      false,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
        lineNumber: 82,
        columnNumber: 7
      },
      this
    );
  }
  const ingredientsMap = allIngredients.reduce(
    (map, item) => {
      map[item._id] = item;
      return map;
    },
    {}
  );
  const orderIngredients = currentOrder.ingredients.map((ingredientId) => ingredientsMap[ingredientId]).filter((item) => item !== void 0);
  const aggregatedIngredients = orderIngredients.reduce(
    (acc, item) => {
      if (item.type === "bun") {
        acc[item._id] = { ...item, count: 2 };
      } else if (acc[item._id]) {
        acc[item._id].count += 1;
      } else {
        acc[item._id] = { ...item, count: 1 };
      }
      return acc;
    },
    {}
  );
  const uniqueIngredientsList = Object.values(aggregatedIngredients);
  const totalCost = uniqueIngredientsList.reduce(
    (sum, item) => {
      return sum + item.price * item.count;
    },
    0
  );
  const statusLabels = {
    done: "Выполнен",
    pending: "Готовится",
    created: "Создан"
  };
  return /* @__PURE__ */ jsxDEV("div", { className: styles.container, children: [
    /* @__PURE__ */ jsxDEV("span", { className: `${styles.number} text text_type_digits-default mb-10`, children: [
      "#",
      currentOrder.number
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("h2", { className: "text text_type_main-medium mb-3", children: currentOrder.name }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "p",
      {
        className: `text text_type_main-default mb-10 ${currentOrder.status === "done" ? styles.status_done : ""}`,
        children: statusLabels[currentOrder.status]
      },
      void 0,
      false,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
        lineNumber: 149,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("h3", { className: "text text_type_main-medium mb-6", children: "Состав:" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("ul", { className: `${styles.ingredients_list} custom-scroll mb-10`, children: uniqueIngredientsList.map(
      (ingredient) => /* @__PURE__ */ jsxDEV("li", { className: styles.ingredient_item, children: [
        /* @__PURE__ */ jsxDEV("div", { className: styles.ingredient_preview, children: [
          /* @__PURE__ */ jsxDEV("div", { className: styles.icon_wrapper, children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: ingredient.image_mobile,
              alt: ingredient.name,
              className: styles.icon_img
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
              lineNumber: 163,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-default ml-4", children: ingredient.name }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: styles.ingredient_price, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default mr-2", children: [
            ingredient.count,
            " x ",
            ingredient.price
          ] }, void 0, true, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
          lineNumber: 173,
          columnNumber: 15
        }, this)
      ] }, ingredient._id, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this)
    ) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: styles.footer, children: [
      /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-default text_color_inactive", children: /* @__PURE__ */ jsxDEV(FormattedDate, { date: new Date(currentOrder.createdAt) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: styles.total, children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default mr-2", children: totalCost }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx",
    lineNumber: 142,
    columnNumber: 5
  }, this);
};
_s(OrderInfo, "kDYE5mNwFYszwhcVQePNpa5Hr94=", false, function() {
  return [useParams, useAppSelector, useAppSelector];
});
_c = OrderInfo;
var _c;
$RefreshReg$(_c, "OrderInfo");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/order-info/order-info.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUssV0FBVSxtREFDZCxpQ0FBQyxpQkFBYyxNQUFNLElBQUlDLEtBQUt0QyxhQUFhdUMsU0FBUyxLQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXNELEtBRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BQ0EsdUJBQUMsU0FBSSxXQUFXaEUsT0FBT2lFLE9BQ3JCO0FBQUEsK0JBQUMsVUFBSyxXQUFVLHNDQUFzQ3ZCLHVCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWdFO0FBQUEsUUFDaEUsdUJBQUMsZ0JBQWEsTUFBSyxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTRCO0FBQUEsV0FGOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUdBO0FBQUEsU0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUUE7QUFBQSxPQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbURBO0FBRUo7QUFBRXhDLEdBNUtXRCxXQUFhO0FBQUEsVUFDVE4sV0FHQUUsZ0JBU1FBLGNBQWM7QUFBQTtBQUFBLEtBYjFCSTtBQUFhLElBQUFpRTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJDdXJyZW5jeUljb24iLCJGb3JtYXR0ZWREYXRlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJzZWxlY3RGZWVkT3JkZXJzIiwidXNlQXBwU2VsZWN0b3IiLCJzZWxlY3RJbmdyZWRpZW50cyIsImdldE9yZGVyUmVxdWVzdCIsInN0eWxlcyIsIk9yZGVySW5mbyIsIl9zIiwiaWQiLCJvcmRlcnMiLCJyZWR1eE9yZGVyIiwiZmluZCIsIml0ZW0iLCJfaWQiLCJsb2NhbE9yZGVyIiwic2V0TG9jYWxPcmRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhbGxJbmdyZWRpZW50cyIsInRoZW4iLCJkYXRhIiwic3VjY2VzcyIsIm9yZGVyIiwibGVuZ3RoIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZmluYWxseSIsImN1cnJlbnRPcmRlciIsImNlbnRlcmVkIiwiaW5ncmVkaWVudHNNYXAiLCJyZWR1Y2UiLCJtYXAiLCJvcmRlckluZ3JlZGllbnRzIiwiaW5ncmVkaWVudHMiLCJpbmdyZWRpZW50SWQiLCJmaWx0ZXIiLCJ1bmRlZmluZWQiLCJhZ2dyZWdhdGVkSW5ncmVkaWVudHMiLCJhY2MiLCJ0eXBlIiwiY291bnQiLCJ1bmlxdWVJbmdyZWRpZW50c0xpc3QiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ0b3RhbENvc3QiLCJzdW0iLCJwcmljZSIsInN0YXR1c0xhYmVscyIsImRvbmUiLCJwZW5kaW5nIiwiY3JlYXRlZCIsImNvbnRhaW5lciIsIm51bWJlciIsIm5hbWUiLCJzdGF0dXMiLCJzdGF0dXNfZG9uZSIsImluZ3JlZGllbnRzX2xpc3QiLCJpbmdyZWRpZW50IiwiaW5ncmVkaWVudF9pdGVtIiwiaW5ncmVkaWVudF9wcmV2aWV3IiwiaWNvbl93cmFwcGVyIiwiaW1hZ2VfbW9iaWxlIiwiaWNvbl9pbWciLCJpbmdyZWRpZW50X3ByaWNlIiwiZm9vdGVyIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvdGFsIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsib3JkZXItaW5mby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ3VycmVuY3lJY29uLFxuICBGb3JtYXR0ZWREYXRlLFxufSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgc2VsZWN0RmVlZE9yZGVycyB9IGZyb20gJ0Avc2VydmljZXMvZmVlZC9zbGljZSc7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0Avc2VydmljZXMvaG9va3MnO1xuaW1wb3J0IHsgc2VsZWN0SW5ncmVkaWVudHMgfSBmcm9tICdAL3NlcnZpY2VzL2luZ3JlZGllbnRzL3NsaWNlJztcbmltcG9ydCB7IGdldE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvdXRpbHMvYnVyZ2VyLWFwaSc7XG5cbmltcG9ydCB0eXBlIHsgVEZlZWRPcmRlciwgVEluZ3JlZGllbnQsIFRTaW5nbGVPcmRlclJlc3BvbnNlIH0gZnJvbSAnQC91dGlscy9idXJnZXItYXBpJztcbmltcG9ydCB0eXBlIHsgRkMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL29yZGVyLWluZm8ubW9kdWxlLmNzcyc7XG5cbi8qINCi0LjQvyDQtNC70Y8g0LDQs9GA0LXQs9C40YDQvtCy0LDQvdC90L7Qs9C+INC40L3Qs9GA0LXQtNC40LXQvdGC0LAsINGH0YLQvtCx0Ysg0LLRi9Cy0L7QtNC40YLRjCDQtdCz0L4g0LrQvtC70LjRh9C10YHRgtCy0L4g0LIg0LTQtdGC0LDQu9GP0YUg0LfQsNC60LDQt9CwICovXG50eXBlIFRDYWxjdWxhdGVkSW5ncmVkaWVudCA9IFRJbmdyZWRpZW50ICYge1xuICBjb3VudDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IE9yZGVySW5mbzogRkMgPSAoKTogUmVhY3RFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtczx7IGlkOiBzdHJpbmcgfT4oKTtcblxuICAvLyAxLiDQn9GL0YLQsNC10LzRgdGPINC90LDQudGC0Lgg0LfQsNC60LDQtyDQsiBSZWR1eC3RhdGA0LDQvdC40LvQuNGJ0LUg0YHQvtC60LXRgtC+0LJcbiAgY29uc3Qgb3JkZXJzID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0RmVlZE9yZGVycyk7XG4gIGNvbnN0IHJlZHV4T3JkZXIgPSBvcmRlcnMuZmluZCgoaXRlbTogVEZlZWRPcmRlcik6IGJvb2xlYW4gPT4gaXRlbS5faWQgPT09IGlkKTtcblxuICAvLyAyLiDQm9C+0LrQsNC70YzQvdGL0Lkg0YHRgtC10LnRgiDQtNC70Y8g0LfQsNC60LDQt9CwLCDQtdGB0LvQuCDQvtC9INC30LDQs9GA0YPQttC10L0g0L3QsNC/0YDRj9C80YPRjiDQv9C+IEhUVFAt0YTQvtC70LHQtdC60YNcbiAgY29uc3QgW2xvY2FsT3JkZXIsIHNldExvY2FsT3JkZXJdID0gdXNlU3RhdGU8VEZlZWRPcmRlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIC8vIDMuINCh0L/RgNCw0LLQvtGH0L3QuNC6INCy0YHQtdGFINC40L3Qs9GA0LXQtNC40LXQvdGC0L7QsiDQtNC70Y8gY3Jvc3MtbWFwcGluZyDRgtGA0LDQvdGB0YTQvtGA0LzQsNGG0LjQuFxuICBjb25zdCBhbGxJbmdyZWRpZW50cyA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdEluZ3JlZGllbnRzKTtcblxuICAvLyA0LiDQoNC10LDQu9C40LfQsNGG0LjRjyDQu9C+0LPQuNC60Lgg0YTQvtC70LHQtdC60LAgKEhUVFAt0LfQsNC/0YDQvtGBLCDQtdGB0LvQuCDQt9Cw0LrQsNC30LAg0L3QtdGCINCyINGB0L7QutC10YLQsNGFKVxuICB1c2VFZmZlY3QoKCk6IHZvaWQgPT4ge1xuICAgIGlmIChyZWR1eE9yZGVyIHx8ICFpZCkgcmV0dXJuO1xuXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgZ2V0T3JkZXJSZXF1ZXN0KGlkKVxuICAgICAgLnRoZW4oKGRhdGE6IFRTaW5nbGVPcmRlclJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10Lwg0YHQvdCw0YfQsNC70LAg0L7QtNC40L3QvtGH0L3Ri9C5INC+0LHRitC10LrRgiBvcmRlciwg0LfQsNGC0LXQvCDQvNCw0YHRgdC40LIgb3JkZXJzXG4gICAgICAgICAgaWYgKGRhdGEub3JkZXIpIHtcbiAgICAgICAgICAgIHNldExvY2FsT3JkZXIoZGF0YS5vcmRlcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLm9yZGVycyAmJiBkYXRhLm9yZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRMb2NhbE9yZGVyKGRhdGEub3JkZXJzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoJ9CX0LDQutCw0Lcg0L3QtSDQvdCw0LnQtNC10L0nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RXJyb3IoJ9CX0LDQutCw0Lcg0L3QtSDQvdCw0LnQtNC10L0nKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiB1bmtub3duKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsCDQt9Cw0LPRgNGD0LfQutC4INC30LDQutCw0LfQsDonLCBlcnIpO1xuICAgICAgICBzZXRFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQsNC90L3Ri9C1INC30LDQutCw0LfQsCcpO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbaWQsIHJlZHV4T3JkZXJdKTtcblxuICAvLyDQntC/0YDQtdC00LXQu9GP0LXQvCwg0LrQsNC60L7QuSDQt9Cw0LrQsNC3INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC70Y8g0YDQtdC90LTQtdGA0LjQvdCz0LBcbiAgY29uc3QgY3VycmVudE9yZGVyID0gcmVkdXhPcmRlciB8fCBsb2NhbE9yZGVyO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jZW50ZXJlZH0gdGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW1gfT5cbiAgICAgICAg0JfQsNCz0YDRg9C30LrQsCDQtNC10YLQsNC70LXQuSDQt9Cw0LrQsNC30LAuLi5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoZXJyb3IgfHwgIWN1cnJlbnRPcmRlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNlbnRlcmVkfSB0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bSB0ZXh0X2NvbG9yX2luYWN0aXZlYH1cbiAgICAgID5cbiAgICAgICAge2Vycm9yIHx8ICfQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDQt9Cw0LrQsNC30LUg0L3QtdC00L7RgdGC0YPQv9C90LAnfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIDUuIENyb3NzLW1hcHBpbmcg0LjQvdCz0YDQtdC00LjQtdC90YLQvtCyINGC0LXQutGD0YnQtdCz0L4g0LfQsNC60LDQt9CwINC90LAg0LPQu9C+0LHQsNC70YzQvdGL0Lkg0YHQv9GA0LDQstC+0YfQvdC40LpcbiAgY29uc3QgaW5ncmVkaWVudHNNYXAgPSBhbGxJbmdyZWRpZW50cy5yZWR1Y2UoXG4gICAgKFxuICAgICAgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSW5ncmVkaWVudD4sXG4gICAgICBpdGVtOiBUSW5ncmVkaWVudFxuICAgICk6IFJlY29yZDxzdHJpbmcsIFRJbmdyZWRpZW50PiA9PiB7XG4gICAgICBtYXBbaXRlbS5faWRdID0gaXRlbTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBUSW5ncmVkaWVudD5cbiAgKTtcblxuICBjb25zdCBvcmRlckluZ3JlZGllbnRzID0gY3VycmVudE9yZGVyLmluZ3JlZGllbnRzXG4gICAgLm1hcCgoaW5ncmVkaWVudElkOiBzdHJpbmcpOiBUSW5ncmVkaWVudCB8IHVuZGVmaW5lZCA9PiBpbmdyZWRpZW50c01hcFtpbmdyZWRpZW50SWRdKVxuICAgIC5maWx0ZXIoKGl0ZW06IFRJbmdyZWRpZW50IHwgdW5kZWZpbmVkKTogaXRlbSBpcyBUSW5ncmVkaWVudCA9PiBpdGVtICE9PSB1bmRlZmluZWQpO1xuXG4gIC8vIDYuINCQ0LPRgNC10LPQsNGG0LjRjyAo0LPRgNGD0L/Qv9C40YDQvtCy0LrQsCkg0LjQvdCz0YDQtdC00LjQtdC90YLQvtCyINC00LvRjyDQstGL0LLQvtC00LAg0YHQv9C40YHQutC+0Lwg0YEg0L/QvtC00YHRh9C10YLQvtC8INC60L7Qu9C40YfQtdGB0YLQstCwXG4gIGNvbnN0IGFnZ3JlZ2F0ZWRJbmdyZWRpZW50cyA9IG9yZGVySW5ncmVkaWVudHMucmVkdWNlKFxuICAgIChcbiAgICAgIGFjYzogUmVjb3JkPHN0cmluZywgVENhbGN1bGF0ZWRJbmdyZWRpZW50PixcbiAgICAgIGl0ZW06IFRJbmdyZWRpZW50XG4gICAgKTogUmVjb3JkPHN0cmluZywgVENhbGN1bGF0ZWRJbmdyZWRpZW50PiA9PiB7XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnYnVuJykge1xuICAgICAgICAvLyDQkdGD0LvQutCwINCy0YHQtdCz0LTQsCDQtNC+0LvQttC90LAg0YPRh9C40YLRi9Cy0LDRgtGM0YHRjyDRhTIg0LIg0LfQsNC60LDQt9C1XG4gICAgICAgIGFjY1tpdGVtLl9pZF0gPSB7IC4uLml0ZW0sIGNvdW50OiAyIH07XG4gICAgICB9IGVsc2UgaWYgKGFjY1tpdGVtLl9pZF0pIHtcbiAgICAgICAgYWNjW2l0ZW0uX2lkXS5jb3VudCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjW2l0ZW0uX2lkXSA9IHsgLi4uaXRlbSwgY291bnQ6IDEgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBUQ2FsY3VsYXRlZEluZ3JlZGllbnQ+XG4gICk7XG5cbiAgY29uc3QgdW5pcXVlSW5ncmVkaWVudHNMaXN0ID0gT2JqZWN0LnZhbHVlcyhhZ2dyZWdhdGVkSW5ncmVkaWVudHMpO1xuXG4gIC8vIDcuINCi0L7Rh9C90YvQuSDRgNCw0YHRh9C10YIg0YTQuNC90LDQu9GM0L3QvtC5INGB0YLQvtC40LzQvtGB0YLQuCDQt9Cw0LrQsNC30LBcbiAgY29uc3QgdG90YWxDb3N0ID0gdW5pcXVlSW5ncmVkaWVudHNMaXN0LnJlZHVjZShcbiAgICAoc3VtOiBudW1iZXIsIGl0ZW06IFRDYWxjdWxhdGVkSW5ncmVkaWVudCk6IG51bWJlciA9PiB7XG4gICAgICByZXR1cm4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0uY291bnQ7XG4gICAgfSxcbiAgICAwXG4gICk7XG5cbiAgY29uc3Qgc3RhdHVzTGFiZWxzID0ge1xuICAgIGRvbmU6ICfQktGL0L/QvtC70L3QtdC9JyxcbiAgICBwZW5kaW5nOiAn0JPQvtGC0L7QstC40YLRgdGPJyxcbiAgICBjcmVhdGVkOiAn0KHQvtC30LTQsNC9JyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3R5bGVzLm51bWJlcn0gdGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHQgbWItMTBgfT5cbiAgICAgICAgI3tjdXJyZW50T3JkZXIubnVtYmVyfVxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gbWItM1wiPntjdXJyZW50T3JkZXIubmFtZX08L2gyPlxuXG4gICAgICA8cFxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgbWItMTAgJHtjdXJyZW50T3JkZXIuc3RhdHVzID09PSAnZG9uZScgPyBzdHlsZXMuc3RhdHVzX2RvbmUgOiAnJ31gfVxuICAgICAgPlxuICAgICAgICB7c3RhdHVzTGFiZWxzW2N1cnJlbnRPcmRlci5zdGF0dXNdfVxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gbWItNlwiPtCh0L7RgdGC0LDQsjo8L2gzPlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5ncmVkaWVudHNfbGlzdH0gY3VzdG9tLXNjcm9sbCBtYi0xMGB9PlxuICAgICAgICB7dW5pcXVlSW5ncmVkaWVudHNMaXN0Lm1hcChcbiAgICAgICAgICAoaW5ncmVkaWVudDogVENhbGN1bGF0ZWRJbmdyZWRpZW50KTogUmVhY3RFbGVtZW50ID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZ3JlZGllbnQuX2lkfSBjbGFzc05hbWU9e3N0eWxlcy5pbmdyZWRpZW50X2l0ZW19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZ3JlZGllbnRfcHJldmlld30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX3dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2luZ3JlZGllbnQuaW1hZ2VfbW9iaWxlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2luZ3JlZGllbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9pbWd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCBtbC00XCI+XG4gICAgICAgICAgICAgICAgICB7aW5ncmVkaWVudC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5ncmVkaWVudF9wcmljZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHQgbXItMlwiPlxuICAgICAgICAgICAgICAgICAge2luZ3JlZGllbnQuY291bnR9IHgge2luZ3JlZGllbnQucHJpY2V9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxDdXJyZW5jeUljb24gdHlwZT1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC91bD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgdGV4dF9jb2xvcl9pbmFjdGl2ZVwiPlxuICAgICAgICAgIDxGb3JtYXR0ZWREYXRlIGRhdGU9e25ldyBEYXRlKGN1cnJlbnRPcmRlci5jcmVhdGVkQXQpfSAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWx9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX2RpZ2l0cy1kZWZhdWx0IG1yLTJcIj57dG90YWxDb3N0fTwvc3Bhbj5cbiAgICAgICAgICA8Q3VycmVuY3lJY29uIHR5cGU9XCJwcmltYXJ5XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9kYWthc2hpci9naXRodWIvcmVhY3QtYnVyZ2VyLWpzLXN0YXJ0ZXIvc3JjL2NvbXBvbmVudHMvb3JkZXItaW5mby9vcmRlci1pbmZvLnRzeCJ9