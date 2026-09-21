import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/profile-orders/profile-orders.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=12f80588"; const useEffect = __vite__cjsImport1_react["useEffect"];
import { OrderCard } from "/src/components/order-card/order-card.tsx";
import { selectFeedOrders, wsConnect, wsDisconnect } from "/src/services/feed/slice.ts";
import { useAppDispatch, useAppSelector } from "/src/services/hooks.ts";
import SEO from "/src/components/seo/seo.tsx";
import styles from "/src/pages/profile-orders/profile-orders.module.css";
export const ProfileOrdersPage = () => {
  _s();
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectFeedOrders);
  useEffect(() => {
    dispatch(wsConnect("wss://new-stellarburgers.education-services.ru/orders"));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);
  const reversedOrders = [...orders].reverse();
  return /* @__PURE__ */ jsxDEV("div", { className: `${styles.container} custom-scroll`, children: [
    /* @__PURE__ */ jsxDEV(SEO, { title: "История заказов" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile-orders/profile-orders.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    reversedOrders.length === 0 ? /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-medium text_color_inactive mt-10", children: "У вас пока нет оформленных заказов" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile-orders/profile-orders.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this) : (
      /* Передаем флаг showStatus={true}, так как в истории профиля по ТЗ обязателен вывод текущего статуса */
      reversedOrders.map(
        (order) => /* @__PURE__ */ jsxDEV(OrderCard, { order, showStatus: true }, order._id, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile-orders/profile-orders.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      )
    )
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile-orders/profile-orders.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};
_s(ProfileOrdersPage, "SUAWljLws/vdd99F6gOZY056akA=", false, function() {
  return [useAppDispatch, useAppSelector];
});
_c = ProfileOrdersPage;
var _c;
$RefreshReg$(_c, "ProfileOrdersPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/profile-orders/profile-orders.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/profile-orders/profile-orders.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/profile-orders/profile-orders.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0NNOztBQWhDTixTQUFTQSxpQkFBaUI7QUFFMUIsU0FBU0MsaUJBQWlCO0FBQzFCLFNBQVNDLGtCQUFrQkMsV0FBV0Msb0JBQW9CO0FBQzFELFNBQVNDLGdCQUFnQkMsc0JBQXNCO0FBQy9DLE9BQU9DLFNBQVM7QUFLaEIsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLG9CQUF3QkEsTUFBb0I7QUFBQUMsS0FBQTtBQUN2RCxRQUFNQyxXQUFXTixlQUFlO0FBQ2hDLFFBQU1PLFNBQVNOLGVBQWVKLGdCQUFnQjtBQUc5Q0YsWUFBVSxNQUFvQjtBQUU1QlcsYUFBU1IsVUFBVSx1REFBdUQsQ0FBQztBQUczRSxXQUFPLE1BQVk7QUFDakJRLGVBQVNQLGFBQWEsQ0FBQztBQUFBLElBQ3pCO0FBQUEsRUFDRixHQUFHLENBQUNPLFFBQVEsQ0FBQztBQUdiLFFBQU1FLGlCQUFpQixDQUFDLEdBQUdELE1BQU0sRUFBRUUsUUFBUTtBQUUzQyxTQUNFLHVCQUFDLFNBQUksV0FBVyxHQUFHTixPQUFPTyxTQUFTLGtCQUNqQztBQUFBLDJCQUFDLE9BQUksT0FBTSxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRCO0FBQUEsSUFDM0JGLGVBQWVHLFdBQVcsSUFDekIsdUJBQUMsT0FBRSxXQUFVLHdEQUFzRCxrREFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUE7QUFBQSxNQUdBSCxlQUFlSTtBQUFBQSxRQUNiLENBQUNDLFVBQ0MsdUJBQUMsYUFBMEIsT0FBYyxZQUFZLFFBQXJDQSxNQUFNQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTBEO0FBQUEsTUFFOUQ7QUFBQTtBQUFBLE9BWko7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWNBO0FBRUo7QUFBRVQsR0FuQ1dELG1CQUFxQjtBQUFBLFVBQ2ZKLGdCQUNGQyxjQUFjO0FBQUE7QUFBQSxLQUZsQkc7QUFBcUIsSUFBQVc7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwiT3JkZXJDYXJkIiwic2VsZWN0RmVlZE9yZGVycyIsIndzQ29ubmVjdCIsIndzRGlzY29ubmVjdCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJTRU8iLCJzdHlsZXMiLCJQcm9maWxlT3JkZXJzUGFnZSIsIl9zIiwiZGlzcGF0Y2giLCJvcmRlcnMiLCJyZXZlcnNlZE9yZGVycyIsInJldmVyc2UiLCJjb250YWluZXIiLCJsZW5ndGgiLCJtYXAiLCJvcmRlciIsIl9pZCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInByb2ZpbGUtb3JkZXJzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE9yZGVyQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy9vcmRlci1jYXJkL29yZGVyLWNhcmQnO1xuaW1wb3J0IHsgc2VsZWN0RmVlZE9yZGVycywgd3NDb25uZWN0LCB3c0Rpc2Nvbm5lY3QgfSBmcm9tICdAL3NlcnZpY2VzL2ZlZWQvc2xpY2UnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9zZXJ2aWNlcy9ob29rcyc7XG5pbXBvcnQgU0VPIGZyb20gJ0Bjb21wb25lbnRzL3Nlby9zZW8nO1xuXG5pbXBvcnQgdHlwZSB7IFRGZWVkT3JkZXIgfSBmcm9tICdAL3V0aWxzL2J1cmdlci1hcGknO1xuaW1wb3J0IHR5cGUgeyBGQywgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcHJvZmlsZS1vcmRlcnMubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlT3JkZXJzUGFnZTogRkMgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBvcmRlcnMgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RGZWVkT3JkZXJzKTtcblxuICAvKiDQo9C/0YDQsNCy0LvQtdC90LjQtSDRgdC+0LrQtdGCLdGB0L7QtdC00LjQvdC10L3QuNC10Lwg0YEg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LjQvCB0b2tlbi1yZWZyZXNoINCyIG1pZGRsZXdhcmUgKi9cbiAgdXNlRWZmZWN0KCgpOiAoKCkgPT4gdm9pZCkgPT4ge1xuICAgIC8vINCf0L7QtNC60LvRjtGH0LDQtdC80YHRjyDQuiDQv9C10YDRgdC+0L3QsNC70YzQvdC+0Lkg0LjRgdGC0L7RgNC40LguIE1pZGRsZXdhcmUg0YHQsNC80L4g0LLRi9GC0LDRidC40YIgYWNjZXNzVG9rZW4g0Lgg0L7Rh9C40YHRgtC40YIg0L7RgiBCZWFyZXJcbiAgICBkaXNwYXRjaCh3c0Nvbm5lY3QoJ3dzczovL25ldy1zdGVsbGFyYnVyZ2Vycy5lZHVjYXRpb24tc2VydmljZXMucnUvb3JkZXJzJykpO1xuXG4gICAgLy8g0JPQsNGA0LDQvdGC0LjRgNC+0LLQsNC90L3Ri9C5INGA0LDQt9GA0YvQsiDRgdCy0Y/Qt9C4INC/0YDQuCDRg9GF0L7QtNC1INC40Lcg0JvQuNGH0L3QvtCz0L4g0LrQsNCx0LjQvdC10YLQsCDQtNC70Y8g0L/RgNC10LTQvtGC0LLRgNCw0YnQtdC90LjRjyDRg9GC0LXRh9C10Log0L/QsNC80Y/RgtC4XG4gICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgIGRpc3BhdGNoKHdzRGlzY29ubmVjdCgpKTtcbiAgICB9O1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICAvLyDQoNCw0LfQstC+0YDQsNGH0LjQstCw0LXQvCDRgdC/0LjRgdC+0LosINGH0YLQvtCx0Ysg0YHQstC10LbQuNC1INC30LDQutCw0LfRiyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LHRi9C70Lgg0LLQstC10YDRhdGDXG4gIGNvbnN0IHJldmVyc2VkT3JkZXJzID0gWy4uLm9yZGVyc10ucmV2ZXJzZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9IGN1c3RvbS1zY3JvbGxgfT5cbiAgICAgIDxTRU8gdGl0bGU9XCLQmNGB0YLQvtGA0LjRjyDQt9Cw0LrQsNC30L7QslwiIC8+XG4gICAgICB7cmV2ZXJzZWRPcmRlcnMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bSB0ZXh0X2NvbG9yX2luYWN0aXZlIG10LTEwXCI+XG4gICAgICAgICAg0KMg0LLQsNGBINC/0L7QutCwINC90LXRgiDQvtGE0L7RgNC80LvQtdC90L3Ri9GFINC30LDQutCw0LfQvtCyXG4gICAgICAgIDwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIC8qINCf0LXRgNC10LTQsNC10Lwg0YTQu9Cw0LMgc2hvd1N0YXR1cz17dHJ1ZX0sINGC0LDQuiDQutCw0Log0LIg0LjRgdGC0L7RgNC40Lgg0L/RgNC+0YTQuNC70Y8g0L/QviDQotCXINC+0LHRj9C30LDRgtC10LvQtdC9INCy0YvQstC+0LQg0YLQtdC60YPRidC10LPQviDRgdGC0LDRgtGD0YHQsCAqL1xuICAgICAgICByZXZlcnNlZE9yZGVycy5tYXAoXG4gICAgICAgICAgKG9yZGVyOiBURmVlZE9yZGVyKTogUmVhY3RFbGVtZW50ID0+IChcbiAgICAgICAgICAgIDxPcmRlckNhcmQga2V5PXtvcmRlci5faWR9IG9yZGVyPXtvcmRlcn0gc2hvd1N0YXR1cz17dHJ1ZX0gLz5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvVXNlcnMvZGFrYXNoaXIvZ2l0aHViL3JlYWN0LWJ1cmdlci1qcy1zdGFydGVyL3NyYy9wYWdlcy9wcm9maWxlLW9yZGVycy9wcm9maWxlLW9yZGVycy50c3gifQ==