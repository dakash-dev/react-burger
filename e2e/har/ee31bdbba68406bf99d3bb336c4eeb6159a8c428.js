import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/app-header/app-header.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import { NavLink, Link } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import styles from "/src/components/app-header/app-header.module.css";
export const AppHeader = () => {
  return /* @__PURE__ */ jsxDEV("header", { className: styles.header, children: /* @__PURE__ */ jsxDEV("nav", { className: `${styles.menu} p-4`, children: [
    /* @__PURE__ */ jsxDEV("div", { className: styles.menu_part_left, children: [
      /* @__PURE__ */ jsxDEV(
        NavLink,
        {
          to: "/",
          className: ({ isActive }) => `${styles.link} ${isActive ? styles.link_active : ""}`,
          children: ({ isActive }) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(BurgerIcon, { type: isActive ? "primary" : "secondary" }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
              lineNumber: 26,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default ml-2", children: "Конструктор" }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
              lineNumber: 27,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
          lineNumber: 18,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        NavLink,
        {
          to: "/feed",
          className: ({ isActive }) => `${styles.link} ml-10 ${isActive ? styles.link_active : ""}`,
          children: ({ isActive }) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(ListIcon, { type: isActive ? "primary" : "secondary" }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
              lineNumber: 39,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default ml-2", children: "Лента заказов" }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
              lineNumber: 40,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Link, { to: "/", className: styles.logo, children: /* @__PURE__ */ jsxDEV(Logo, {}, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      NavLink,
      {
        to: "/profile",
        className: ({ isActive }) => `${styles.link} ${styles.link_position_last} ${isActive ? styles.link_active : ""}`,
        children: ({ isActive }) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV(ProfileIcon, { type: isActive ? "primary" : "secondary" }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default ml-2", children: "Личный кабинет" }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
        lineNumber: 48,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};
_c = AppHeader;
var _c;
$RefreshReg$(_c, "AppHeader");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/app-header/app-header.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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aW5rIiwiTGluayIsInN0eWxlcyIsIkFwcEhlYWRlciIsImhlYWRlciIsIm1lbnUiLCJtZW51X3BhcnRfbGVmdCIsImlzQWN0aXZlIiwibGluayIsImxpbmtfYWN0aXZlIiwibG9nbyIsImxpbmtfcG9zaXRpb25fbGFzdCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJ1cmdlckljb24sXG4gIExpc3RJY29uLFxuICBQcm9maWxlSWNvbixcbiAgTG9nbyxcbn0gZnJvbSAnQGtyZ2FhL3JlYWN0LWRldmVsb3Blci1idXJnZXItdWktY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB0eXBlIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXBwLWhlYWRlci5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEFwcEhlYWRlciA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVudX0gcC00YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudV9wYXJ0X2xlZnR9PlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9OiB7IGlzQWN0aXZlOiBib29sZWFuIH0pOiBzdHJpbmcgPT5cbiAgICAgICAgICAgICAgYCR7c3R5bGVzLmxpbmt9ICR7aXNBY3RpdmUgPyBzdHlsZXMubGlua19hY3RpdmUgOiAnJ31gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyh7IGlzQWN0aXZlIH06IHsgaXNBY3RpdmU6IGJvb2xlYW4gfSk6IFJlYWN0RWxlbWVudCA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEJ1cmdlckljb24gdHlwZT17aXNBY3RpdmUgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J30gLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgbWwtMlwiPtCa0L7QvdGB0YLRgNGD0LrRgtC+0YA8L3A+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIHRvPVwiL2ZlZWRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9OiB7IGlzQWN0aXZlOiBib29sZWFuIH0pOiBzdHJpbmcgPT5cbiAgICAgICAgICAgICAgYCR7c3R5bGVzLmxpbmt9IG1sLTEwICR7aXNBY3RpdmUgPyBzdHlsZXMubGlua19hY3RpdmUgOiAnJ31gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyh7IGlzQWN0aXZlIH06IHsgaXNBY3RpdmU6IGJvb2xlYW4gfSk6IFJlYWN0RWxlbWVudCA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPExpc3RJY29uIHR5cGU9e2lzQWN0aXZlID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9IC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IG1sLTJcIj7Qm9C10L3RgtCwINC30LDQutCw0LfQvtCyPC9wPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHRvPVwiL3Byb2ZpbGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfTogeyBpc0FjdGl2ZTogYm9vbGVhbiB9KTogc3RyaW5nID0+XG4gICAgICAgICAgICBgJHtzdHlsZXMubGlua30gJHtzdHlsZXMubGlua19wb3NpdGlvbl9sYXN0fSAke2lzQWN0aXZlID8gc3R5bGVzLmxpbmtfYWN0aXZlIDogJyd9YFxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsoeyBpc0FjdGl2ZSB9OiB7IGlzQWN0aXZlOiBib29sZWFuIH0pOiBSZWFjdEVsZW1lbnQgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFByb2ZpbGVJY29uIHR5cGU9e2lzQWN0aXZlID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9IC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCBtbC0yXCI+0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvVXNlcnMvZGFrYXNoaXIvZ2l0aHViL3JlYWN0LWJ1cmdlci1qcy1zdGFydGVyL3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlci50c3gifQ==