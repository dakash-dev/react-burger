import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/feed/feed.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=12f80588"; const useEffect = __vite__cjsImport1_react["useEffect"];
import { FeedStatus } from "/src/components/feed-status/feed-status.tsx";
import { OrderCard } from "/src/components/order-card/order-card.tsx";
import { selectFeedOrders, wsConnect, wsDisconnect } from "/src/services/feed/slice.ts";
import { useAppDispatch, useAppSelector } from "/src/services/hooks.ts";
import SEO from "/src/components/seo/seo.tsx";
import styles from "/src/pages/feed/feed.module.css";
export const FeedPage = () => {
  _s();
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectFeedOrders);
  useEffect(() => {
    dispatch(wsConnect("wss://new-stellarburgers.education-services.ru/orders/all"));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);
  return /* @__PURE__ */ jsxDEV("main", { className: `${styles.main} pl-5 pr-5 pt-10`, children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "Лента космических заказов",
        description: "Следите за заказами галактики в реальном времени! ))"
      },
      void 0,
      false,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("h1", { className: "text text_type_main-large mb-5", children: "Лента заказов" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: styles.content, children: [
      /* @__PURE__ */ jsxDEV("section", { className: `${styles.orders_section} custom-scroll`, children: orders.map(
        (order) => /* @__PURE__ */ jsxDEV(OrderCard, { order }, order._id, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: styles.status_section, children: /* @__PURE__ */ jsxDEV(FeedStatus, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
_s(FeedPage, "SUAWljLws/vdd99F6gOZY056akA=", false, function() {
  return [useAppDispatch, useAppSelector];
});
_c = FeedPage;
var _c;
$RefreshReg$(_c, "FeedPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/feed/feed.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBOEJNOztBQTlCTixTQUFTQSxpQkFBaUI7QUFFMUIsU0FBU0Msa0JBQWtCO0FBQzNCLFNBQVNDLGlCQUFpQjtBQUMxQixTQUFTQyxrQkFBa0JDLFdBQVdDLG9CQUFvQjtBQUMxRCxTQUFTQyxnQkFBZ0JDLHNCQUFzQjtBQUMvQyxPQUFPQyxTQUFTO0FBS2hCLE9BQU9DLFlBQVk7QUFFWixhQUFNQyxXQUFlQSxNQUFvQjtBQUFBQyxLQUFBO0FBQzlDLFFBQU1DLFdBQVdOLGVBQWU7QUFDaEMsUUFBTU8sU0FBU04sZUFBZUosZ0JBQWdCO0FBRzlDSCxZQUFVLE1BQW9CO0FBRTVCWSxhQUFTUixVQUFVLDJEQUEyRCxDQUFDO0FBRy9FLFdBQU8sTUFBWTtBQUNqQlEsZUFBU1AsYUFBYSxDQUFDO0FBQUEsSUFDekI7QUFBQSxFQUNGLEdBQUcsQ0FBQ08sUUFBUSxDQUFDO0FBRWIsU0FDRSx1QkFBQyxVQUFLLFdBQVcsR0FBR0gsT0FBT0ssSUFBSSxvQkFDN0I7QUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsT0FBTTtBQUFBLFFBQ04sYUFBWTtBQUFBO0FBQUEsTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFFb0U7QUFBQSxJQUVwRSx1QkFBQyxRQUFHLFdBQVUsa0NBQWlDLDZCQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTREO0FBQUEsSUFDNUQsdUJBQUMsU0FBSSxXQUFXTCxPQUFPTSxTQUVyQjtBQUFBLDZCQUFDLGFBQVEsV0FBVyxHQUFHTixPQUFPTyxjQUFjLGtCQUN6Q0gsaUJBQU9JO0FBQUFBLFFBQ04sQ0FBQ0MsVUFDQyx1QkFBQyxhQUEwQixTQUFYQSxNQUFNQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXdDO0FBQUEsTUFFNUMsS0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTUE7QUFBQSxNQUdBLHVCQUFDLGFBQVEsV0FBV1YsT0FBT1csZ0JBQ3pCLGlDQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVyxLQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLFNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWNBO0FBQUEsT0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXFCQTtBQUVKO0FBQUVULEdBdkNXRCxVQUFZO0FBQUEsVUFDTkosZ0JBQ0ZDLGNBQWM7QUFBQTtBQUFBLEtBRmxCRztBQUFZLElBQUFXO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsIkZlZWRTdGF0dXMiLCJPcmRlckNhcmQiLCJzZWxlY3RGZWVkT3JkZXJzIiwid3NDb25uZWN0Iiwid3NEaXNjb25uZWN0IiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIlNFTyIsInN0eWxlcyIsIkZlZWRQYWdlIiwiX3MiLCJkaXNwYXRjaCIsIm9yZGVycyIsIm1haW4iLCJjb250ZW50Iiwib3JkZXJzX3NlY3Rpb24iLCJtYXAiLCJvcmRlciIsIl9pZCIsInN0YXR1c19zZWN0aW9uIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZmVlZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBGZWVkU3RhdHVzIH0gZnJvbSAnQC9jb21wb25lbnRzL2ZlZWQtc3RhdHVzL2ZlZWQtc3RhdHVzJztcbmltcG9ydCB7IE9yZGVyQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy9vcmRlci1jYXJkL29yZGVyLWNhcmQnO1xuaW1wb3J0IHsgc2VsZWN0RmVlZE9yZGVycywgd3NDb25uZWN0LCB3c0Rpc2Nvbm5lY3QgfSBmcm9tICdAL3NlcnZpY2VzL2ZlZWQvc2xpY2UnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9zZXJ2aWNlcy9ob29rcyc7XG5pbXBvcnQgU0VPIGZyb20gJ0Bjb21wb25lbnRzL3Nlby9zZW8nO1xuXG5pbXBvcnQgdHlwZSB7IFRGZWVkT3JkZXIgfSBmcm9tICdAL3V0aWxzL2J1cmdlci1hcGknO1xuaW1wb3J0IHR5cGUgeyBGQywgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZmVlZC5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEZlZWRQYWdlOiBGQyA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IG9yZGVycyA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdEZlZWRPcmRlcnMpO1xuXG4gIC8qINCj0L/RgNCw0LLQu9C10L3QuNC1INC20LjQt9C90LXQvdC90YvQvCDRhtC40LrQu9C+0Lwg0YHQvtC60LXRgi3RgdC+0LXQtNC40L3QtdC90LjRjyDQtNC70Y8g0L7QsdGJ0LXQuSDQu9C10L3RgtGLINC/0L4g0KLQlyAqL1xuICB1c2VFZmZlY3QoKCk6ICgoKSA9PiB2b2lkKSA9PiB7XG4gICAgLy8g0JjQvdC40YbQuNC40YDRg9C10Lwg0L/QvtC00LrQu9GO0YfQtdC90LjQtSDQuiDQvtCx0YnQtdC80YMg0Y3QvdC00L/QvtC40L3RgtGDINCy0YHQtdGFINC30LDQutCw0LfQvtCyXG4gICAgZGlzcGF0Y2god3NDb25uZWN0KCd3c3M6Ly9uZXctc3RlbGxhcmJ1cmdlcnMuZWR1Y2F0aW9uLXNlcnZpY2VzLnJ1L29yZGVycy9hbGwnKSk7XG5cbiAgICAvLyDQn9GA0Lgg0YDQsNC30LzQvtC90YLQuNGA0L7QstCw0L3QuNC4INGN0LrRgNCw0L3QsCAo0YPRhdC+0LTQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8pINCz0LDRgNCw0L3RgtC40YDQvtCy0LDQvdC90L4g0LPQsNGB0LjQvCDRgdC+0LrQtdGCINC4INGH0LjRgdGC0LjQvCDRgtCw0LnQvNC10YDRi1xuICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICBkaXNwYXRjaCh3c0Rpc2Nvbm5lY3QoKSk7XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSBwbC01IHByLTUgcHQtMTBgfT5cbiAgICAgIDxTRU9cbiAgICAgICAgdGl0bGU9XCLQm9C10L3RgtCwINC60L7RgdC80LjRh9C10YHQutC40YUg0LfQsNC60LDQt9C+0LJcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cItCh0LvQtdC00LjRgtC1INC30LAg0LfQsNC60LDQt9Cw0LzQuCDQs9Cw0LvQsNC60YLQuNC60Lgg0LIg0YDQtdCw0LvRjNC90L7QvCDQstGA0LXQvNC10L3QuCEgKSlcIlxuICAgICAgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLWxhcmdlIG1iLTVcIj7Qm9C10L3RgtCwINC30LDQutCw0LfQvtCyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIHsvKiDQm9C10LLQsNGPINC60L7Qu9C+0L3QutCwOiDQn9GA0L7QutGA0YPRh9C40LLQsNC10LzRi9C5INGB0L/QuNGB0L7QuiDQutCw0YDRgtC+0YfQtdC6INCy0YHQtdGFINC30LDQutCw0LfQvtCyICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5vcmRlcnNfc2VjdGlvbn0gY3VzdG9tLXNjcm9sbGB9PlxuICAgICAgICAgIHtvcmRlcnMubWFwKFxuICAgICAgICAgICAgKG9yZGVyOiBURmVlZE9yZGVyKTogUmVhY3RFbGVtZW50ID0+IChcbiAgICAgICAgICAgICAgPE9yZGVyQ2FyZCBrZXk9e29yZGVyLl9pZH0gb3JkZXI9e29yZGVyfSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7Lyog0J/RgNCw0LLQsNGPINC60L7Qu9C+0L3QutCwOiDQn9Cw0L3QtdC70Ywg0YHRgtCw0YLQuNGB0YLQuNC60Lgg0Lgg0LTQvtGB0LrQsCDRgdGC0LDRgtGD0YHQvtCyICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNfc2VjdGlvbn0+XG4gICAgICAgICAgPEZlZWRTdGF0dXMgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcbiJdLCJmaWxlIjoiL1VzZXJzL2Rha2FzaGlyL2dpdGh1Yi9yZWFjdC1idXJnZXItanMtc3RhcnRlci9zcmMvcGFnZXMvZmVlZC9mZWVkLnRzeCJ9