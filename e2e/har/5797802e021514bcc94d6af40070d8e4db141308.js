import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/protected-route/protected-route.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Navigate, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import { selectIsAuthChecked, selectUser } from "/src/services/auth/slice.ts";
import { useAppSelector } from "/src/services/hooks.ts";
import Preloader from "/src/components/preloader/preloader.tsx";
const Protected = ({
  onlyUnAuth = false,
  component
}) => {
  _s();
  const isAuthChecked = useAppSelector(selectIsAuthChecked);
  const user = useAppSelector(selectUser);
  const location = useLocation();
  if (!isAuthChecked) {
    return /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/protected-route/protected-route.tsx",
      lineNumber: 38,
      columnNumber: 12
    }, this);
  }
  if (onlyUnAuth && user) {
    const state = location.state;
    const from = state?.from || { pathname: "/" };
    return /* @__PURE__ */ jsxDEV(Navigate, { to: from, replace: true }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/protected-route/protected-route.tsx",
      lineNumber: 46,
      columnNumber: 12
    }, this);
  }
  if (!onlyUnAuth && !user) {
    return /* @__PURE__ */ jsxDEV(Navigate, { to: "/login", state: { from: location }, replace: true }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/protected-route/protected-route.tsx",
      lineNumber: 52,
      columnNumber: 12
    }, this);
  }
  return component;
};
_s(Protected, "nMY2nJS2z8EM9xI8CbZizINmK78=", false, function() {
  return [useAppSelector, useAppSelector, useLocation];
});
_c = Protected;
export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }) => {
  return /* @__PURE__ */ jsxDEV(Protected, { onlyUnAuth: true, component }, void 0, false, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/protected-route/protected-route.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
};
_c2 = OnlyUnAuth;
var _c, _c2;
$RefreshReg$(_c, "Protected");
$RefreshReg$(_c2, "OnlyUnAuth");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/protected-route/protected-route.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/protected-route/protected-route.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/protected-route/protected-route.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUNXOztBQXJDWCxTQUFTQSxVQUFVQyxtQkFBbUI7QUFFdEMsU0FBU0MscUJBQXFCQyxrQkFBa0I7QUFDaEQsU0FBU0Msc0JBQXNCO0FBQy9CLE9BQU9DLGVBQWU7QUFtQnRCLE1BQU1DLFlBQWlDQSxDQUFDO0FBQUEsRUFDdENDLGFBQWE7QUFBQSxFQUNiQztBQUNGLE1BQW9CO0FBQUFDLEtBQUE7QUFFbEIsUUFBTUMsZ0JBQWdCTixlQUFlRixtQkFBbUI7QUFDeEQsUUFBTVMsT0FBT1AsZUFBZUQsVUFBVTtBQUN0QyxRQUFNUyxXQUFXWCxZQUFZO0FBTTdCLE1BQUksQ0FBQ1MsZUFBZTtBQUNsQixXQUFPLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFVO0FBQUEsRUFDbkI7QUFHQSxNQUFJSCxjQUFjSSxNQUFNO0FBRXRCLFVBQU1FLFFBQVFELFNBQVNDO0FBQ3ZCLFVBQU1DLE9BQU9ELE9BQU9DLFFBQVEsRUFBRUMsVUFBVSxJQUFJO0FBQzVDLFdBQU8sdUJBQUMsWUFBUyxJQUFJRCxNQUFNLFNBQU8sUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEyQjtBQUFBLEVBQ3BDO0FBR0EsTUFBSSxDQUFDUCxjQUFjLENBQUNJLE1BQU07QUFFeEIsV0FBTyx1QkFBQyxZQUFTLElBQUcsVUFBUyxPQUFPLEVBQUVHLE1BQU1GLFNBQVMsR0FBRyxTQUFPLFFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBd0Q7QUFBQSxFQUNqRTtBQUdBLFNBQU9KO0FBQ1Q7QUFFQUMsR0FuQ01ILFdBQThCO0FBQUEsVUFLWkYsZ0JBQ1RBLGdCQUNJSCxXQUFXO0FBQUE7QUFBQSxLQVB4Qks7QUFvQ0MsYUFBTVUsV0FBZ0NWO0FBQ3RDLGFBQU1XLGFBQW1DQSxDQUFDLEVBQUVULFVBQVUsTUFBb0I7QUFDL0UsU0FBTyx1QkFBQyxhQUFVLFlBQVksTUFBTSxhQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWtEO0FBQzNEO0FBQUVVLE1BRldEO0FBQWdDLElBQUFFLElBQUFEO0FBQUEsYUFBQUMsSUFBQTtBQUFBLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJOYXZpZ2F0ZSIsInVzZUxvY2F0aW9uIiwic2VsZWN0SXNBdXRoQ2hlY2tlZCIsInNlbGVjdFVzZXIiLCJ1c2VBcHBTZWxlY3RvciIsIlByZWxvYWRlciIsIlByb3RlY3RlZCIsIm9ubHlVbkF1dGgiLCJjb21wb25lbnQiLCJfcyIsImlzQXV0aENoZWNrZWQiLCJ1c2VyIiwibG9jYXRpb24iLCJzdGF0ZSIsImZyb20iLCJwYXRobmFtZSIsIk9ubHlBdXRoIiwiT25seVVuQXV0aCIsIl9jMiIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInByb3RlY3RlZC1yb3V0ZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IHNlbGVjdElzQXV0aENoZWNrZWQsIHNlbGVjdFVzZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoL3NsaWNlJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG9va3MnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuLi9wcmVsb2FkZXIvcHJlbG9hZGVyJztcblxuaW1wb3J0IHR5cGUgeyBGQywgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFRQcm90ZWN0ZWRQcm9wcyA9IHtcbiAgb25seVVuQXV0aD86IGJvb2xlYW47XG4gIGNvbXBvbmVudDogUmVhY3RFbGVtZW50O1xufTtcblxudHlwZSBUT25seVVuQXV0aFByb3BzID0ge1xuICBjb21wb25lbnQ6IFJlYWN0RWxlbWVudDtcbn07XG5cbnR5cGUgVExvY2F0aW9uU3RhdGUgPSB7XG4gIGZyb20/OiB7XG4gICAgcGF0aG5hbWU6IHN0cmluZztcbiAgfTtcbn07XG5cbmNvbnN0IFByb3RlY3RlZDogRkM8VFByb3RlY3RlZFByb3BzPiA9ICh7XG4gIG9ubHlVbkF1dGggPSBmYWxzZSxcbiAgY29tcG9uZW50LFxufSk6IFJlYWN0RWxlbWVudCA9PiB7XG4gIC8vINCU0L7RgdGC0LDQtdC8INC00LDQvdC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0Lgg0YHRgtCw0YLRg9GBINC/0YDQvtCy0LXRgNC60Lgg0YLQvtC60LXQvdCwLlxuICBjb25zdCBpc0F1dGhDaGVja2VkID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0SXNBdXRoQ2hlY2tlZCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RVc2VyKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIC8vINCV0YHQu9C4INC/0YDQvtCy0LXRgNC60LAg0YLQvtC60LXQvdCwINC90LUg0L/RgNC+0YXQvtC00LjRgiDigJQg0L3QuNGH0LXQs9C+INC90LUg0YDQtdC90LTQtdGA0LjQvFxuICAvLyBQcmVsb2FkZXIg0YDQsNCx0L7RgtCw0LXRgiwg0YfRgtC+0LHRiyDQstC+INCy0YDQtdC80Y8g0L7QttC40LTQsNC90LjRjyDQvtGC0LLQtdGC0LAg0L7RglxuICAvLyDRgdC10YDQstC10YDQsCDRgyDQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQvdC1INC/0L7QutCw0LfRi9Cy0LDQu9Cw0YHRjFxuICAvLyDRgdGC0YDQsNC90LjRhtCwINC70L7Qs9C40L3QsC5cbiAgaWYgKCFpc0F1dGhDaGVja2VkKSB7XG4gICAgcmV0dXJuIDxQcmVsb2FkZXIgLz47XG4gIH1cblxuICAvLyDQrdGC0L4g0LzQsNGA0YjRgNGD0YIg0YLQvtC70YzQutC+INC00LvRjyDQndCV0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvRhSAoTG9naW4sIFJlZ2lzdGVyLCBGb3Jnb3RQYXNzd29yZCksINC90L4g0Y7Qt9C10YAg0KPQltCVINCy0L7RiNC10LshXG4gIGlmIChvbmx5VW5BdXRoICYmIHVzZXIpIHtcbiAgICAvLyDQktC+0LfQstGA0LDRidCw0LXQvCDQtdCz0L4g0L3QsCDRgdC+0YXRgNCw0L3QtdC90L3Ri9C5INGA0LDQvdC10LUg0LzQsNGA0YjRgNGD0YIg0LjQu9C4INC90LAg0LPQu9Cw0LLQvdGD0Y4g0YHRgtGA0LDQvdC40YbRgyEhISEhXG4gICAgY29uc3Qgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSBhcyBUTG9jYXRpb25TdGF0ZSB8IG51bGw7XG4gICAgY29uc3QgZnJvbSA9IHN0YXRlPy5mcm9tIHx8IHsgcGF0aG5hbWU6ICcvJyB9O1xuICAgIHJldHVybiA8TmF2aWdhdGUgdG89e2Zyb219IHJlcGxhY2UgLz47XG4gIH1cblxuICAvLyDQrdGC0L4g0LzQsNGA0YjRgNGD0YIg0YLQvtC70YzQutC+INC00LvRjyDQkNCS0KLQntCg0JjQl9Ce0JLQkNCd0J3Qq9ClIChQcm9maWxlKSwg0L3QviDRjtGN0LLQtdGA0Y8g0J3QldCiINCyINGB0LjRgdGC0LXQvNC1IVxuICBpZiAoIW9ubHlVbkF1dGggJiYgIXVzZXIpIHtcbiAgICAvLyDQntGC0L/RgNCw0LLQu9GP0LXQvCDQvdCwINC70L7Qs9C40L0sINC4INGB0L7RhdGA0LDQvdGP0LXQvCDQsiBzdGF0ZSAgVVJMINC00LvRjyDQsdGD0LTRg9GJ0LXQs9C+INCy0L7Qt9Cy0YDQsNGC0LAuLi5cbiAgICByZXR1cm4gPE5hdmlnYXRlIHRvPVwiL2xvZ2luXCIgc3RhdGU9e3sgZnJvbTogbG9jYXRpb24gfX0gcmVwbGFjZSAvPjtcbiAgfVxuXG4gIC8vINCV0YHQu9C4INCy0YHQtSDQv9GA0L7QstC10YDQutC4INC+0Log4oCUINGA0LXQvdC00LXRgNC40Lwg0LfQsNGJ0LjRidCw0LXQvNGD0Y4g0YHRgtGA0LDQvdC40YbRgy5cbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8vINCt0LrRgdC/0L7RgNGC0LjRgNGD0LXQvCDQvtCx0ZHRgNGC0LrQuCDQtNC70Y8gQXBwLmpzeFxuZXhwb3J0IGNvbnN0IE9ubHlBdXRoOiBGQzxUUHJvdGVjdGVkUHJvcHM+ID0gUHJvdGVjdGVkO1xuZXhwb3J0IGNvbnN0IE9ubHlVbkF1dGg6IEZDPFRPbmx5VW5BdXRoUHJvcHM+ID0gKHsgY29tcG9uZW50IH0pOiBSZWFjdEVsZW1lbnQgPT4ge1xuICByZXR1cm4gPFByb3RlY3RlZCBvbmx5VW5BdXRoPXt0cnVlfSBjb21wb25lbnQ9e2NvbXBvbmVudH0gLz47XG59O1xuIl0sImZpbGUiOiIvVXNlcnMvZGFrYXNoaXIvZ2l0aHViL3JlYWN0LWJ1cmdlci1qcy1zdGFydGVyL3NyYy9jb21wb25lbnRzL3Byb3RlY3RlZC1yb3V0ZS9wcm90ZWN0ZWQtcm91dGUudHN4In0=