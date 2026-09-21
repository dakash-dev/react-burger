import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/app/app.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=12f80588"; const useEffect = __vite__cjsImport1_react["useEffect"]; const useCallback = __vite__cjsImport1_react["useCallback"]; const Suspense = __vite__cjsImport1_react["Suspense"];
import { Routes, Route, useLocation, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import Modal from "/src/components/modal/modal.tsx";
import OrderDetails from "/src/components/order-details/order-details.tsx";
import { OrderInfo } from "/src/components/order-info/order-info.tsx";
import Preloader from "/src/components/preloader/preloader.tsx";
import { FeedPage } from "/src/pages/feed/feed.tsx";
import { ProfileOrdersPage } from "/src/pages/profile-orders/profile-orders.tsx";
import { fetchIngredients } from "/src/services/ingredients/action.ts";
import {
  selectIngredientsLoading,
  selectIngredientsError
} from "/src/services/ingredients/slice.ts";
import {
  clearOrder,
  selectOrderNumber,
  selectOrderLoading
} from "/src/services/order/slice.ts";
import { AppHeader } from "/src/components/app-header/app-header.tsx";
import { OnlyAuth, OnlyUnAuth } from "/src/components/protected-route/protected-route.tsx";
import {
  Home,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  IngredientPage,
  ProfilePage,
  ProfileForm
} from "/src/pages/index.ts";
import { checkUserAuth } from "/src/services/auth/actions.ts";
import { selectIsAuthChecked } from "/src/services/auth/slice.ts";
import { useAppDispatch, useAppSelector } from "/src/services/hooks.ts";
import styles from "/src/components/app/app.module.css";
export const App = () => {
  _s();
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundLocation = location.state?.background;
  const dispatch = useAppDispatch();
  const isIngredientsLoading = useAppSelector(selectIngredientsLoading);
  const error = useAppSelector(selectIngredientsError);
  const isAuthChecked = useAppSelector(selectIsAuthChecked);
  const orderNumber = useAppSelector(selectOrderNumber);
  const isOrderLoading = useAppSelector(selectOrderLoading);
  const handleOrderClose = useCallback(() => {
    dispatch(clearOrder());
  }, [dispatch]);
  useEffect(() => {
    void dispatch(fetchIngredients());
    void dispatch(checkUserAuth());
  }, [dispatch]);
  if (isIngredientsLoading || !isAuthChecked) {
    return /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 69,
      columnNumber: 12
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ jsxDEV("div", { className: styles.errorContainer, children: /* @__PURE__ */ jsxDEV("div", { className: "text text_type_main-medium", children: [
      "Ошибка загрузки: ",
      error
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: styles.app, children: [
    /* @__PURE__ */ jsxDEV(AppHeader, {}, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Suspense, { fallback: /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 86,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ jsxDEV(Routes, { location: backgroundLocation || location, children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 88,
        columnNumber: 36
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/register", element: /* @__PURE__ */ jsxDEV(OnlyUnAuth, { component: /* @__PURE__ */ jsxDEV(Register, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 90,
        columnNumber: 67
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 90,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/login", element: /* @__PURE__ */ jsxDEV(OnlyUnAuth, { component: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 91,
        columnNumber: 64
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 91,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/forgot-password",
          element: /* @__PURE__ */ jsxDEV(OnlyUnAuth, { component: /* @__PURE__ */ jsxDEV(ForgotPassword, {}, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
            lineNumber: 94,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
            lineNumber: 94,
            columnNumber: 22
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 92,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/reset-password",
          element: /* @__PURE__ */ jsxDEV(OnlyUnAuth, { component: /* @__PURE__ */ jsxDEV(ResetPassword, {}, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
            lineNumber: 98,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
            lineNumber: 98,
            columnNumber: 22
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 96,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(Route, { path: "/profile", element: /* @__PURE__ */ jsxDEV(OnlyAuth, { component: /* @__PURE__ */ jsxDEV(ProfilePage, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 101,
        columnNumber: 64
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 101,
        columnNumber: 43
      }, this), children: [
        /* @__PURE__ */ jsxDEV(Route, { index: true, element: /* @__PURE__ */ jsxDEV(ProfileForm, {}, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 103,
          columnNumber: 35
        }, this) }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Route, { path: "orders", element: /* @__PURE__ */ jsxDEV(ProfileOrdersPage, {}, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 105,
          columnNumber: 43
        }, this) }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/ingredients/:id", element: /* @__PURE__ */ jsxDEV(IngredientPage, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 108,
        columnNumber: 51
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/feed", element: /* @__PURE__ */ jsxDEV(FeedPage, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 110,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/feed/:id", element: /* @__PURE__ */ jsxDEV(OrderInfo, {}, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 112,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/profile/orders/:id",
          element: /* @__PURE__ */ jsxDEV(OnlyAuth, { component: /* @__PURE__ */ jsxDEV(OrderInfo, {}, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
            lineNumber: 116,
            columnNumber: 43
          }, this) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
            lineNumber: 116,
            columnNumber: 22
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 114,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    backgroundLocation && /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/ingredients/:id",
          element: /* @__PURE__ */ jsxDEV(
            Modal,
            {
              title: "Детали ингредиента",
              onClose: () => {
                navigate("/");
              },
              children: /* @__PURE__ */ jsxDEV(IngredientPage, {}, void 0, false, {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
                lineNumber: 133,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
              lineNumber: 126,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 123,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/feed/:id",
          element: /* @__PURE__ */ jsxDEV(
            Modal,
            {
              onClose: () => {
                navigate("/feed");
              },
              children: /* @__PURE__ */ jsxDEV(OrderInfo, {}, void 0, false, {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
                lineNumber: 146,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
              lineNumber: 141,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 138,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/profile/orders/:id",
          element: /* @__PURE__ */ jsxDEV(
            Modal,
            {
              onClose: () => {
                navigate("/profile/orders");
              },
              children: /* @__PURE__ */ jsxDEV(OnlyAuth, { component: /* @__PURE__ */ jsxDEV(OrderInfo, {}, void 0, false, {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
                lineNumber: 159,
                columnNumber: 38
              }, this) }, void 0, false, {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
                lineNumber: 159,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
              lineNumber: 154,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
          lineNumber: 151,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    (orderNumber || isOrderLoading) && /* @__PURE__ */ jsxDEV(Modal, { onClose: handleOrderClose, children: /* @__PURE__ */ jsxDEV(OrderDetails, {}, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 168,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
};
_s(App, "DzWQD44jz0R7ZJpQ2b8TGLwdE1E=", false, function() {
  return [useLocation, useNavigate, useAppDispatch, useAppSelector, useAppSelector, useAppSelector, useAppSelector, useAppSelector];
});
_c = App;
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/app/app.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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Y0FBYztBQUFBO0FBQUEsS0FWMUJFO0FBQUcsSUFBQWdCO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiU3VzcGVuc2UiLCJSb3V0ZXMiLCJSb3V0ZSIsInVzZUxvY2F0aW9uIiwidXNlTmF2aWdhdGUiLCJNb2RhbCIsIk9yZGVyRGV0YWlscyIsIk9yZGVySW5mbyIsIlByZWxvYWRlciIsIkZlZWRQYWdlIiwiUHJvZmlsZU9yZGVyc1BhZ2UiLCJmZXRjaEluZ3JlZGllbnRzIiwic2VsZWN0SW5ncmVkaWVudHNMb2FkaW5nIiwic2VsZWN0SW5ncmVkaWVudHNFcnJvciIsImNsZWFyT3JkZXIiLCJzZWxlY3RPcmRlck51bWJlciIsInNlbGVjdE9yZGVyTG9hZGluZyIsIkFwcEhlYWRlciIsIk9ubHlBdXRoIiwiT25seVVuQXV0aCIsIkhvbWUiLCJSZWdpc3RlciIsIkxvZ2luIiwiRm9yZ290UGFzc3dvcmQiLCJSZXNldFBhc3N3b3JkIiwiSW5ncmVkaWVudFBhZ2UiLCJQcm9maWxlUGFnZSIsIlByb2ZpbGVGb3JtIiwiY2hlY2tVc2VyQXV0aCIsInNlbGVjdElzQXV0aENoZWNrZWQiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic3R5bGVzIiwiQXBwIiwiX3MiLCJsb2NhdGlvbiIsIm5hdmlnYXRlIiwiYmFja2dyb3VuZExvY2F0aW9uIiwic3RhdGUiLCJiYWNrZ3JvdW5kIiwiZGlzcGF0Y2giLCJpc0luZ3JlZGllbnRzTG9hZGluZyIsImVycm9yIiwiaXNBdXRoQ2hlY2tlZCIsIm9yZGVyTnVtYmVyIiwiaXNPcmRlckxvYWRpbmciLCJoYW5kbGVPcmRlckNsb3NlIiwiZXJyb3JDb250YWluZXIiLCJhcHAiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJhcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSwgdXNlTG9jYXRpb24sIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwnO1xuaW1wb3J0IE9yZGVyRGV0YWlscyBmcm9tICdAL2NvbXBvbmVudHMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzJztcbmltcG9ydCB7IE9yZGVySW5mbyB9IGZyb20gJ0AvY29tcG9uZW50cy9vcmRlci1pbmZvL29yZGVyLWluZm8nO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvcHJlbG9hZGVyL3ByZWxvYWRlcic7XG5pbXBvcnQgeyBGZWVkUGFnZSB9IGZyb20gJ0AvcGFnZXMvZmVlZC9mZWVkJztcbmltcG9ydCB7IFByb2ZpbGVPcmRlcnNQYWdlIH0gZnJvbSAnQC9wYWdlcy9wcm9maWxlLW9yZGVycy9wcm9maWxlLW9yZGVycyc7XG5pbXBvcnQgeyBmZXRjaEluZ3JlZGllbnRzIH0gZnJvbSAnQC9zZXJ2aWNlcy9pbmdyZWRpZW50cy9hY3Rpb24nO1xuaW1wb3J0IHtcbiAgc2VsZWN0SW5ncmVkaWVudHNMb2FkaW5nLFxuICBzZWxlY3RJbmdyZWRpZW50c0Vycm9yLFxufSBmcm9tICdAL3NlcnZpY2VzL2luZ3JlZGllbnRzL3NsaWNlJztcbmltcG9ydCB7XG4gIGNsZWFyT3JkZXIsXG4gIHNlbGVjdE9yZGVyTnVtYmVyLFxuICBzZWxlY3RPcmRlckxvYWRpbmcsXG59IGZyb20gJ0Avc2VydmljZXMvb3JkZXIvc2xpY2UnO1xuaW1wb3J0IHsgQXBwSGVhZGVyIH0gZnJvbSAnQGNvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJztcbmltcG9ydCB7IE9ubHlBdXRoLCBPbmx5VW5BdXRoIH0gZnJvbSAnQGNvbXBvbmVudHMvcHJvdGVjdGVkLXJvdXRlL3Byb3RlY3RlZC1yb3V0ZSc7XG5cbmltcG9ydCB7XG4gIEhvbWUsXG4gIFJlZ2lzdGVyLFxuICBMb2dpbixcbiAgRm9yZ290UGFzc3dvcmQsXG4gIFJlc2V0UGFzc3dvcmQsXG4gIEluZ3JlZGllbnRQYWdlLFxuICBQcm9maWxlUGFnZSxcbiAgUHJvZmlsZUZvcm0sXG59IGZyb20gJy4uLy4uL3BhZ2VzJztcbmltcG9ydCB7IGNoZWNrVXNlckF1dGggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2VsZWN0SXNBdXRoQ2hlY2tlZCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgvc2xpY2UnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG9va3MnO1xuXG5pbXBvcnQgdHlwZSB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2FwcC5tb2R1bGUuY3NzJztcblxudHlwZSBUTG9jYXRpb25TdGF0ZSA9IHtcbiAgYmFja2dyb3VuZD86IExvY2F0aW9uO1xufTtcblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCkgYXMgTG9jYXRpb24gJiB7IHN0YXRlOiBUTG9jYXRpb25TdGF0ZSB8IG51bGwgfTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAvLyDQpNC+0L3QvtCy0LDRjyDQu9C+0LrQsNGG0LjRjy5cbiAgY29uc3QgYmFja2dyb3VuZExvY2F0aW9uID0gbG9jYXRpb24uc3RhdGU/LmJhY2tncm91bmQ7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNJbmdyZWRpZW50c0xvYWRpbmcgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RJbmdyZWRpZW50c0xvYWRpbmcpO1xuICBjb25zdCBlcnJvciA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdEluZ3JlZGllbnRzRXJyb3IpO1xuICBjb25zdCBpc0F1dGhDaGVja2VkID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0SXNBdXRoQ2hlY2tlZCk7XG4gIGNvbnN0IG9yZGVyTnVtYmVyID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0T3JkZXJOdW1iZXIpO1xuICBjb25zdCBpc09yZGVyTG9hZGluZyA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdE9yZGVyTG9hZGluZyk7XG5cbiAgY29uc3QgaGFuZGxlT3JkZXJDbG9zZSA9IHVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaChjbGVhck9yZGVyKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCk6IHZvaWQgPT4ge1xuICAgIHZvaWQgZGlzcGF0Y2goZmV0Y2hJbmdyZWRpZW50cygpKTtcbiAgICB2b2lkIGRpc3BhdGNoKGNoZWNrVXNlckF1dGgoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIC8vIDEuINCV0YHQu9C4INC00LDQvdC90YvQtSDQtdGJ0LUg0LfQsNCz0YDRg9C20LDRjtGC0YHRjyDigJQg0L/QvtC60LDQt9GL0LLQsNC10Lwg0L/RgNC10LvQvtCw0LTQtdGAINC4INCy0YvRhdC+0LTQuNC8XG4gIGlmIChpc0luZ3JlZGllbnRzTG9hZGluZyB8fCAhaXNBdXRoQ2hlY2tlZCkge1xuICAgIHJldHVybiA8UHJlbG9hZGVyIC8+O1xuICB9XG5cbiAgLy8gMi4g0JXRgdC70Lgg0LfQsNCz0YDRg9C30LrQsCDQt9Cw0LLQtdGA0YjQuNC70LDRgdGMLCDQvdC+INC/0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAg4oCUINC/0L7QutCw0LfRi9Cy0LDQtdC8INGC0LXQutGB0YIg0L7RiNC40LHQutC4INC4INCy0YvRhdC+0LTQuNC8XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bVwiPtCe0YjQuNCx0LrQsCDQt9Cw0LPRgNGD0LfQutC4OiB7ZXJyb3J9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8gMy4g0JXRgdC70Lgg0LTQsNC90L3Ri9C1INC30LDQs9GA0YPQt9C40LvQuNGB0YwgLSDQv9C+0LrQsNC30YvQstCw0LXRgiDQvtGB0L3QvtCy0L3QvtC5INC40L3RgtC10YDRhNC10LnRgS5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwcH0+XG4gICAgICA8QXBwSGVhZGVyIC8+XG4gICAgICB7Lyog0J7QsdC10YDQvdGD0LvQuCDRgNC+0YPRgtGLINCyIFN1c3BlbnNlLCDRh9GC0L7QsdGLIFJlYWN0INC/0LvQsNCy0L3QviDQv9C+0LrQsNC30YvQstCw0LsgUHJlbG9hZGVyINCy0L4g0LLRgNC10LzRjyDQv9C+0LTQutCw0YfQutC4INGH0LDQvdC60L7QsiDRgdGC0YDQsNC90LjRhiDQv9C+INGB0LXRgtC4ICovfVxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8UHJlbG9hZGVyIC8+fT5cbiAgICAgICAgPFJvdXRlcyBsb2NhdGlvbj17YmFja2dyb3VuZExvY2F0aW9uIHx8IGxvY2F0aW9ufT5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICB7Lyog0JPQvtGB0YLQtdCy0YvQtSDQt9C+0L3Rizog0LDQstGC0L7RgNC40LfQvtCy0LDQvdGL0LUg0YPRhdC+0LTRj9GCINC90LAg0LPQu9Cw0LLQvdGD0Y4g0LjQu9C4INC90LDQt9Cw0LQgKi99XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8T25seVVuQXV0aCBjb21wb25lbnQ9ezxSZWdpc3RlciAvPn0gLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8T25seVVuQXV0aCBjb21wb25lbnQ9ezxMb2dpbiAvPn0gLz59IC8+XG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwiL2ZvcmdvdC1wYXNzd29yZFwiXG4gICAgICAgICAgICBlbGVtZW50PXs8T25seVVuQXV0aCBjb21wb25lbnQ9ezxGb3Jnb3RQYXNzd29yZCAvPn0gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgIHBhdGg9XCIvcmVzZXQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgZWxlbWVudD17PE9ubHlVbkF1dGggY29tcG9uZW50PXs8UmVzZXRQYXNzd29yZCAvPn0gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Lyog0JfQsNGJ0LjRidC10L3QvdCw0Y8g0LfQvtC90LA6INC90LXQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9C1INGD0YXQvtC00Y/RgiDQvdCwIC9sb2dpbiDRgSDRgdC+0YXRgNCw0L3QtdC90LjQtdC8INC40YHRgtC+0YDQuNC4ICovfVxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGVcIiBlbGVtZW50PXs8T25seUF1dGggY29tcG9uZW50PXs8UHJvZmlsZVBhZ2UgLz59IC8+fT5cbiAgICAgICAgICAgIHsvKiBpbmRleCDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L3QsCDRgdCw0LzQvtC8IC9wcm9maWxlINC+0YLQutGA0L7QtdGC0YHRjyDRhNC+0YDQvNCwICovfVxuICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxQcm9maWxlRm9ybSAvPn0gLz5cbiAgICAgICAgICAgIHsvKiDQl9Cw0LzQtdC90LjQuyDRgtC10LrRgdGC0L7QstGD0Y4g0LfQsNCz0LvRg9GI0LrRgyDQvdCwINC/0L7Qu9C90L7RhtC10L3QvdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCINC40YHRgtC+0YDQuNC4INC30LDQutCw0LfQvtCyINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyAqL31cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwib3JkZXJzXCIgZWxlbWVudD17PFByb2ZpbGVPcmRlcnNQYWdlIC8+fSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgey8qINC30LDRhdC+0LQg0L/QviDQv9GA0Y/QvNC+0Lkg0YHRgdGL0LvQutC1ICjQsdC10Lcg0YTQvtC90LApICovfVxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luZ3JlZGllbnRzLzppZFwiIGVsZW1lbnQ9ezxJbmdyZWRpZW50UGFnZSAvPn0gLz5cbiAgICAgICAgICB7Lyog0J7QsdGJ0LXQtNC+0YHRgtGD0L/QvdGL0Lkg0LzQsNGA0YjRgNGD0YIg0LTQu9GPINGB0YLRgNCw0L3QuNGG0Ysg0LPQu9C+0LHQsNC70YzQvdC+0Lkg0LvQtdC90YLRiyDQt9Cw0LrQsNC30L7QsiAqL31cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9mZWVkXCIgZWxlbWVudD17PEZlZWRQYWdlIC8+fSAvPlxuICAgICAgICAgIHsvKiDQnNCw0YDRiNGA0YPRgiDQtNC70Y8g0L7RgtC60YDRi9GC0LjRjyDQtNC10YLQsNC70LXQuSDQt9Cw0LrQsNC30LAg0L3QsCDQvtGC0LTQtdC70YzQvdC+0Lkg0LjQt9C+0LvQuNGA0L7QstCw0L3QvdC+0Lkg0YHRgtGA0LDQvdC40YbQtSAqL31cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9mZWVkLzppZFwiIGVsZW1lbnQ9ezxPcmRlckluZm8gLz59IC8+XG4gICAgICAgICAgey8qINCX0LDRidC40YnQtdC90L3Ri9C5INC80LDRgNGI0YDRg9GCINC00LvRjyDQvtGC0LrRgNGL0YLQuNGPINC00LXRgtCw0LvQtdC5INC30LDQutCw0LfQsCDQuNC3INC40YHRgtC+0YDQuNC4INC90LAg0L7RgtC00LXQu9GM0L3QvtC5INGB0YLRgNCw0L3QuNGG0LUgKi99XG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwiL3Byb2ZpbGUvb3JkZXJzLzppZFwiXG4gICAgICAgICAgICBlbGVtZW50PXs8T25seUF1dGggY29tcG9uZW50PXs8T3JkZXJJbmZvIC8+fSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICAgIDwvU3VzcGVuc2U+XG5cbiAgICAgIHtiYWNrZ3JvdW5kTG9jYXRpb24gJiYgKFxuICAgICAgICA8Um91dGVzPlxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD1cIi9pbmdyZWRpZW50cy86aWRcIlxuICAgICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRpdGxlPVwi0JTQtdGC0LDQu9C4INC40L3Qs9GA0LXQtNC40LXQvdGC0LBcIlxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvJyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiDQmNGB0L/QvtC70YzQt9GD0LXQvCDRgtCy0L7RjiDQttC1INGB0YLRgNCw0L3QuNGG0YMg0LLQvdGD0YLRgNC4INC80L7QtNCw0LvQutC4ISDQntC90LAg0YHQsNC80LAg0LLRi9GC0LDRidC40YIgSUQg0LjQtyDRg9GA0LvQsCAqL31cbiAgICAgICAgICAgICAgICA8SW5ncmVkaWVudFBhZ2UgLz5cbiAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiDQntGC0LrRgNGL0YLQuNC1INC00LXRgtCw0LvQtdC5INC30LDQutCw0LfQsCDQuNC3INC+0LHRidC10Lkg0LvQtdC90YLRiyDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0L7QutC90LUg0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutCw0YDRgtC+0YfQutGDICovfVxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD1cIi9mZWVkLzppZFwiXG4gICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoJy9mZWVkJyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPcmRlckluZm8gLz5cbiAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiDQntGC0LrRgNGL0YLQuNC1INC00LXRgtCw0LvQtdC5INC/0LXRgNGB0L7QvdCw0LvRjNC90L7Qs9C+INC30LDQutCw0LfQsCDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0L7QutC90LUg0L/RgNC4INC60LvQuNC60LUg0LjQtyDQuNGB0YLQvtGA0LjQuCDQv9GA0L7RhNC40LvRjyAqL31cbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgIHBhdGg9XCIvcHJvZmlsZS9vcmRlcnMvOmlkXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgnL3Byb2ZpbGUvb3JkZXJzJyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPbmx5QXV0aCBjb21wb25lbnQ9ezxPcmRlckluZm8gLz59IC8+XG4gICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICApfVxuXG4gICAgICB7KG9yZGVyTnVtYmVyIHx8IGlzT3JkZXJMb2FkaW5nKSAmJiAoXG4gICAgICAgIDxNb2RhbCBvbkNsb3NlPXtoYW5kbGVPcmRlckNsb3NlfT5cbiAgICAgICAgICA8T3JkZXJEZXRhaWxzIC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJmaWxlIjoiL1VzZXJzL2Rha2FzaGlyL2dpdGh1Yi9yZWFjdC1idXJnZXItanMtc3RhcnRlci9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzeCJ9