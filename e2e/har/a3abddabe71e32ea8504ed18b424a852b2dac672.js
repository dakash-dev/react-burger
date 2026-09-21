import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/profile/profile.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { NavLink, Outlet } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import SEO from "/src/components/seo/seo.tsx";
import { logoutUser } from "/src/services/auth/actions.ts";
import { useAppDispatch } from "/src/services/hooks.ts";
import styles from "/src/pages/profile/profile.module.css";
export const ProfilePage = () => {
  _s();
  const dispatch = useAppDispatch();
  return /* @__PURE__ */ jsxDEV("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ jsxDEV(SEO, { title: "Профиль пользователя" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("nav", { className: styles.sidebar, children: [
        /* @__PURE__ */ jsxDEV(
          NavLink,
          {
            to: "/profile",
            end: true,
            className: ({ isActive }) => `${styles.tab_link} text text_type_main-medium ${isActive ? styles.tab_active : "text_color_inactive"}`,
            children: "Профиль"
          },
          void 0,
          false,
          {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx",
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          NavLink,
          {
            to: "/profile/orders",
            className: ({ isActive }) => `${styles.tab_link} text text_type_main-medium ${isActive ? styles.tab_active : "text_color_inactive"}`,
            children: "История заказов"
          },
          void 0,
          false,
          {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx",
            lineNumber: 31,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              dispatch(logoutUser());
            },
            className: `${styles.logout_btn} text text_type_main-medium text_color_inactive`,
            children: "Выход"
          },
          void 0,
          false,
          {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx",
            lineNumber: 41,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "p",
        {
          className: `${styles.info_text} text text_type_main-default text_color_inactive`,
          children: "В этом разделе вы можете изменить свои персональные данные"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx",
          lineNumber: 50,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
_s(ProfilePage, "BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=", false, function() {
  return [useAppDispatch];
});
_c = ProfilePage;
var _c;
$RefreshReg$(_c, "ProfilePage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JNOztBQWhCTixTQUFTQSxTQUFTQyxjQUFjO0FBRWhDLE9BQU9DLFNBQVM7QUFFaEIsU0FBU0Msa0JBQWtCO0FBQzNCLFNBQVNDLHNCQUFzQjtBQUkvQixPQUFPQyxZQUFZO0FBRVosYUFBTUMsY0FBY0EsTUFBb0I7QUFBQUMsS0FBQTtBQUM3QyxRQUFNQyxXQUFXSixlQUFlO0FBRWhDLFNBQ0UsdUJBQUMsU0FBSSxXQUFXQyxPQUFPSSxTQUNyQjtBQUFBLDJCQUFDLE9BQUksT0FBTSwwQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWlDO0FBQUEsSUFDakMsdUJBQUMsU0FDQztBQUFBLDZCQUFDLFNBQUksV0FBV0osT0FBT0ssU0FDckI7QUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsSUFBRztBQUFBLFlBQ0g7QUFBQSxZQUNBLFdBQVcsQ0FBQyxFQUFFQyxTQUFnQyxNQUM1QyxHQUFHTixPQUFPTyxRQUFRLCtCQUNoQkQsV0FBV04sT0FBT1EsYUFBYSxxQkFBcUI7QUFBQSxZQUV2RDtBQUFBO0FBQUEsVUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFVQTtBQUFBLFFBQ0E7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLElBQUc7QUFBQSxZQUNILFdBQVcsQ0FBQyxFQUFFRixTQUFnQyxNQUM1QyxHQUFHTixPQUFPTyxRQUFRLCtCQUNoQkQsV0FBV04sT0FBT1EsYUFBYSxxQkFBcUI7QUFBQSxZQUV2RDtBQUFBO0FBQUEsVUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFTQTtBQUFBLFFBQ0E7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFNBQVMsTUFBWTtBQUNuQkwsdUJBQVNMLFdBQVcsQ0FBQztBQUFBLFlBQ3ZCO0FBQUEsWUFDQSxXQUFXLEdBQUdFLE9BQU9TLFVBQVU7QUFBQSxZQUFrRDtBQUFBO0FBQUEsVUFKbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBT0E7QUFBQSxXQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOEJBO0FBQUEsTUFDQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsV0FBVyxHQUFHVCxPQUFPVSxTQUFTO0FBQUEsVUFBbUQ7QUFBQTtBQUFBLFFBRG5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlBO0FBQUEsU0FwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXFDQTtBQUFBLElBRUEsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQXpDVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMENBO0FBRUo7QUFBRVIsR0FoRFdELGFBQVc7QUFBQSxVQUNMRixjQUFjO0FBQUE7QUFBQSxLQURwQkU7QUFBVyxJQUFBVTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJOYXZMaW5rIiwiT3V0bGV0IiwiU0VPIiwibG9nb3V0VXNlciIsInVzZUFwcERpc3BhdGNoIiwic3R5bGVzIiwiUHJvZmlsZVBhZ2UiLCJfcyIsImRpc3BhdGNoIiwid3JhcHBlciIsInNpZGViYXIiLCJpc0FjdGl2ZSIsInRhYl9saW5rIiwidGFiX2FjdGl2ZSIsImxvZ291dF9idG4iLCJpbmZvX3RleHQiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJwcm9maWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZMaW5rLCBPdXRsZXQgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IFNFTyBmcm9tICdAY29tcG9uZW50cy9zZW8vc2VvJztcblxuaW1wb3J0IHsgbG9nb3V0VXNlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgvYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hvb2tzJztcblxuaW1wb3J0IHR5cGUgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcm9maWxlLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZVBhZ2UgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxTRU8gdGl0bGU9XCLQn9GA0L7RhNC40LvRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgdG89XCIvcHJvZmlsZVwiXG4gICAgICAgICAgICBlbmRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfTogeyBpc0FjdGl2ZTogYm9vbGVhbiB9KTogc3RyaW5nID0+XG4gICAgICAgICAgICAgIGAke3N0eWxlcy50YWJfbGlua30gdGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gJHtcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/IHN0eWxlcy50YWJfYWN0aXZlIDogJ3RleHRfY29sb3JfaW5hY3RpdmUnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg0J/RgNC+0YTQuNC70YxcbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIHRvPVwiL3Byb2ZpbGUvb3JkZXJzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfTogeyBpc0FjdGl2ZTogYm9vbGVhbiB9KTogc3RyaW5nID0+XG4gICAgICAgICAgICAgIGAke3N0eWxlcy50YWJfbGlua30gdGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gJHtcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/IHN0eWxlcy50YWJfYWN0aXZlIDogJ3RleHRfY29sb3JfaW5hY3RpdmUnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg0JjRgdGC0L7RgNC40Y8g0LfQsNC60LDQt9C+0LJcbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChsb2dvdXRVc2VyKCkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxvZ291dF9idG59IHRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtIHRleHRfY29sb3JfaW5hY3RpdmVgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCS0YvRhdC+0LRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5mb190ZXh0fSB0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgdGV4dF9jb2xvcl9pbmFjdGl2ZWB9XG4gICAgICAgID5cbiAgICAgICAgICDQkiDRjdGC0L7QvCDRgNCw0LfQtNC10LvQtSDQstGLINC80L7QttC10YLQtSDQuNC30LzQtdC90LjRgtGMINGB0LLQvtC4INC/0LXRgNGB0L7QvdCw0LvRjNC90YvQtSDQtNCw0L3QvdGL0LVcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9kYWthc2hpci9naXRodWIvcmVhY3QtYnVyZ2VyLWpzLXN0YXJ0ZXIvc3JjL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS50c3gifQ==