import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/login/login.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import {
  Button,
  EmailInput,
  PasswordInput
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import SEO from "/src/components/seo/seo.tsx";
import { useFormWithValidation } from "/src/hooks/use-form-with-validation.ts";
import { loginUser } from "/src/services/auth/actions.ts";
import { selectAuthLoading } from "/src/services/auth/slice.ts";
import { useAppDispatch, useAppSelector } from "/src/services/hooks.ts";
import styles from "/src/pages/login/login.module.css";
export const Login = () => {
  _s();
  const dispatch = useAppDispatch();
  const isAuthLoading = useAppSelector(selectAuthLoading);
  const { values, handleChange, isValid } = useFormWithValidation({
    email: "",
    password: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    void dispatch(loginUser(values));
  };
  return /* @__PURE__ */ jsxDEV("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ jsxDEV(SEO, { title: "Авторизация" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { className: styles.form, noValidate: true, onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text text_type_main-medium mb-6", children: "Вход" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        EmailInput,
        {
          onChange: handleChange,
          value: values.email,
          name: "email",
          placeholder: "E-mail",
          isIcon: false,
          extraClass: "mb-6"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
          lineNumber: 38,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        PasswordInput,
        {
          onChange: handleChange,
          value: values.password,
          name: "password",
          placeholder: "Пароль",
          extraClass: "mb-6"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          htmlType: "submit",
          type: "primary",
          size: "medium",
          disabled: !isValid || isAuthLoading,
          children: isAuthLoading ? "Вход..." : "Войти"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
          lineNumber: 55,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `${styles.footer} mt-20`, children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default text_color_inactive", children: [
        "Вы — новый пользователь?",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/register", className: styles.link, children: "Зарегистрироваться" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default text_color_inactive mt-4", children: [
        "Забыли пароль?",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/forgot-password", className: styles.link, children: "Восстановить пароль" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
};
_s(Login, "3spnAutBPE+i3UxSZMFlpmOYnEM=", false, function() {
  return [useAppDispatch, useAppSelector, useFormWithValidation];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/login/login.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBQSxLQUhwRE07QUFBSyxJQUFBZ0I7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiQnV0dG9uIiwiRW1haWxJbnB1dCIsIlBhc3N3b3JkSW5wdXQiLCJMaW5rIiwiU0VPIiwidXNlRm9ybVdpdGhWYWxpZGF0aW9uIiwibG9naW5Vc2VyIiwic2VsZWN0QXV0aExvYWRpbmciLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic3R5bGVzIiwiTG9naW4iLCJfcyIsImRpc3BhdGNoIiwiaXNBdXRoTG9hZGluZyIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImlzVmFsaWQiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndyYXBwZXIiLCJmb3JtIiwiZm9vdGVyIiwibGluayIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImxvZ2luLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCdXR0b24sXG4gIEVtYWlsSW5wdXQsXG4gIFBhc3N3b3JkSW5wdXQsXG59IGZyb20gJ0BrcmdhYS9yZWFjdC1kZXZlbG9wZXItYnVyZ2VyLXVpLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgU0VPIGZyb20gJ0Bjb21wb25lbnRzL3Nlby9zZW8nO1xuaW1wb3J0IHsgdXNlRm9ybVdpdGhWYWxpZGF0aW9uIH0gZnJvbSAnQGhvb2tzL3VzZS1mb3JtLXdpdGgtdmFsaWRhdGlvbic7XG5cbmltcG9ydCB7IGxvZ2luVXNlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3RBdXRoTG9hZGluZyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgvc2xpY2UnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG9va3MnO1xuXG5pbXBvcnQgdHlwZSB7IEZvcm1FdmVudCwgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbG9naW4ubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBMb2dpbiA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IGlzQXV0aExvYWRpbmcgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RBdXRoTG9hZGluZyk7XG4gIGNvbnN0IHsgdmFsdWVzLCBoYW5kbGVDaGFuZ2UsIGlzVmFsaWQgfSA9IHVzZUZvcm1XaXRoVmFsaWRhdGlvbih7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdm9pZCBkaXNwYXRjaChsb2dpblVzZXIodmFsdWVzKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ9CU0LDQvdC90YvQtSDRhNC+0YDQvNGLINCw0LLRgtC+0YDQuNC30LDRhtC40Lg6JywgdmFsdWVzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8U0VPIHRpdGxlPVwi0JDQstGC0L7RgNC40LfQsNGG0LjRj1wiIC8+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gbWItNlwiPtCS0YXQvtC0PC9oMj5cbiAgICAgICAgPEVtYWlsSW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiXG4gICAgICAgICAgaXNJY29uPXtmYWxzZX1cbiAgICAgICAgICBleHRyYUNsYXNzPVwibWItNlwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPFBhc3N3b3JkSW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiXG4gICAgICAgICAgZXh0cmFDbGFzcz1cIm1iLTZcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgIGRpc2FibGVkPXshaXNWYWxpZCB8fCBpc0F1dGhMb2FkaW5nfVxuICAgICAgICA+XG4gICAgICAgICAge2lzQXV0aExvYWRpbmcgPyAn0JLRhdC+0LQuLi4nIDogJ9CS0L7QudGC0LgnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mb290ZXJ9IG10LTIwYH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCB0ZXh0X2NvbG9yX2luYWN0aXZlXCI+XG4gICAgICAgICAg0JLRiyDigJQg0L3QvtCy0YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Yw/eycgJ31cbiAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxuICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCB0ZXh0X2NvbG9yX2luYWN0aXZlIG10LTRcIj5cbiAgICAgICAgICDQl9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMP3snICd9XG4gICAgICAgICAgPExpbmsgdG89XCIvZm9yZ290LXBhc3N3b3JkXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgICDQktC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0L/QsNGA0L7Qu9GMXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9kYWthc2hpci9naXRodWIvcmVhY3QtYnVyZ2VyLWpzLXN0YXJ0ZXIvc3JjL3BhZ2VzL2xvZ2luL2xvZ2luLnRzeCJ9