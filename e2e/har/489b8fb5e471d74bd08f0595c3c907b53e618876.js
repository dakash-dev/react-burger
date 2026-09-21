import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/register/register.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import {
  Button,
  Input,
  EmailInput,
  PasswordInput
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import SEO from "/src/components/seo/seo.tsx";
import { useFormWithValidation } from "/src/hooks/use-form-with-validation.ts";
import { registerUser } from "/src/services/auth/actions.ts";
import { selectAuthLoading } from "/src/services/auth/slice.ts";
import { useAppDispatch, useAppSelector } from "/src/services/hooks.ts";
import styles from "/src/pages/register/register.module.css";
export const Register = () => {
  _s();
  const dispatch = useAppDispatch();
  const isAuthLoading = useAppSelector(selectAuthLoading);
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: "",
    email: "",
    password: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    void dispatch(registerUser(values));
  };
  return /* @__PURE__ */ jsxDEV("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ jsxDEV(SEO, { title: "Регистрация" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { className: styles.form, onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text text_type_main-medium mb-6", children: "Регистрация" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        Input,
        {
          type: "text",
          placeholder: "Имя",
          onChange: handleChange,
          value: values.name,
          name: "name",
          error: errors.name,
          errorText: "Укажите корректное имя",
          size: "default",
          extraClass: "mb-6"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ),
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
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
          lineNumber: 53,
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
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
          lineNumber: 62,
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
          children: isAuthLoading ? "Регистрация..." : "Зарегистрироваться"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
          lineNumber: 70,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `${styles.footer} mt-20`, children: /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default text_color_inactive", children: [
      "Уже зарегистрированы?",
      " ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/login", className: styles.link, children: "Войти" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
};
_s(Register, "1Kdmduu7N/vqgf2FruMIuFuXfJw=", false, function() {
  return [useAppDispatch, useAppSelector, useFormWithValidation];
});
_c = Register;
var _c;
$RefreshReg$(_c, "Register");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/register/register.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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bERGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FtREE7QUFFSjtBQUFFaEIsR0F0RVdELFVBQVE7QUFBQSxVQUNGSCxnQkFFS0MsZ0JBQzRCSixxQkFBcUI7QUFBQTtBQUFBLEtBSjVETTtBQUFRLElBQUFrQjtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsIkVtYWlsSW5wdXQiLCJQYXNzd29yZElucHV0IiwiTGluayIsIlNFTyIsInVzZUZvcm1XaXRoVmFsaWRhdGlvbiIsInJlZ2lzdGVyVXNlciIsInNlbGVjdEF1dGhMb2FkaW5nIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInN0eWxlcyIsIlJlZ2lzdGVyIiwiX3MiLCJkaXNwYXRjaCIsImlzQXV0aExvYWRpbmciLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiLCJpc1ZhbGlkIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid3JhcHBlciIsImZvcm0iLCJmb290ZXIiLCJsaW5rIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicmVnaXN0ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJ1dHRvbixcbiAgSW5wdXQsXG4gIEVtYWlsSW5wdXQsXG4gIFBhc3N3b3JkSW5wdXQsXG59IGZyb20gJ0BrcmdhYS9yZWFjdC1kZXZlbG9wZXItYnVyZ2VyLXVpLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgU0VPIGZyb20gJ0Bjb21wb25lbnRzL3Nlby9zZW8nO1xuaW1wb3J0IHsgdXNlRm9ybVdpdGhWYWxpZGF0aW9uIH0gZnJvbSAnQGhvb2tzL3VzZS1mb3JtLXdpdGgtdmFsaWRhdGlvbic7XG5cbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3RBdXRoTG9hZGluZyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgvc2xpY2UnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG9va3MnO1xuXG5pbXBvcnQgdHlwZSB7IEZvcm1FdmVudCwgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcmVnaXN0ZXIubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBSZWdpc3RlciA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIC8vINGB0YLQsNGC0YPRgSDQt9Cw0LPRgNGD0LfQutC4INC00LvRjyDQsdC70L7QutC40YDQvtCy0LrQuCDQuNC90YLQtdGA0YTQtdC50YHQsFxuICBjb25zdCBpc0F1dGhMb2FkaW5nID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0QXV0aExvYWRpbmcpO1xuICBjb25zdCB7IHZhbHVlcywgaGFuZGxlQ2hhbmdlLCBlcnJvcnMsIGlzVmFsaWQgfSA9IHVzZUZvcm1XaXRoVmFsaWRhdGlvbih7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdm9pZCBkaXNwYXRjaChyZWdpc3RlclVzZXIodmFsdWVzKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ9CU0LDQvdC90YvQtSDRhNC+0YDQvNGLINGA0LXQs9C40YHRgtGA0LDRhtC40Lg6JywgdmFsdWVzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8U0VPIHRpdGxlPVwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1wiIC8+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtIG1iLTZcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9oMj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgZXJyb3I9e2Vycm9ycy5uYW1lfVxuICAgICAgICAgIGVycm9yVGV4dD1cItCj0LrQsNC20LjRgtC1INC60L7RgNGA0LXQutGC0L3QvtC1INC40LzRj1wiXG4gICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgIGV4dHJhQ2xhc3M9XCJtYi02XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8RW1haWxJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcbiAgICAgICAgICBpc0ljb249e2ZhbHNlfVxuICAgICAgICAgIGV4dHJhQ2xhc3M9XCJtYi02XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8UGFzc3dvcmRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICBleHRyYUNsYXNzPVwibWItNlwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc1ZhbGlkIHx8IGlzQXV0aExvYWRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNBdXRoTG9hZGluZyA/ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPLi4uJyA6ICfQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8nfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mb290ZXJ9IG10LTIwYH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCB0ZXh0X2NvbG9yX2luYWN0aXZlXCI+XG4gICAgICAgICAg0KPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvdGLP3snICd9XG4gICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAgICAgINCS0L7QudGC0LhcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJmaWxlIjoiL1VzZXJzL2Rha2FzaGlyL2dpdGh1Yi9yZWFjdC1idXJnZXItanMtc3RhcnRlci9zcmMvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIudHN4In0=