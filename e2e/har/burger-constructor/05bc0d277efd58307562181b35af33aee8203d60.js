import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/forgot-password/forgot-password.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Button, EmailInput } from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=12f80588"; const useState = __vite__cjsImport2_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import { passwordResetRequest } from "/src/utils/burger-api.ts";
import SEO from "/src/components/seo/seo.tsx";
import { useFormWithValidation } from "/src/hooks/use-form-with-validation.ts";
import styles from "/src/pages/forgot-password/forgot-password.module.css";
export const ForgotPassword = () => {
  _s();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, isValid } = useFormWithValidation({
    email: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    passwordResetRequest(values).then((data) => {
      if (data.success) {
        localStorage.setItem("forgotPasswordVisited", "true");
        navigate("/reset-password", { replace: true });
      }
    }).catch((err) => console.error("Ошибка восстановления пароля:", err)).finally(() => setIsLoading(false));
  };
  return /* @__PURE__ */ jsxDEV("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ jsxDEV(SEO, { title: "Восстановление пароля" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { className: styles.form, noValidate: true, onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text text_type_main-medium mb-6", children: "Восстановление пароля" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        EmailInput,
        {
          onChange: handleChange,
          value: values.email,
          name: "email",
          placeholder: "Укажите e-mail",
          isIcon: false,
          disabled: isLoading,
          extraClass: "mb-6"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx",
          lineNumber: 43,
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
          disabled: !isValid || isLoading,
          children: isLoading ? "Восстановление..." : "Восстановить"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `${styles.footer} mt-20`, children: /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default text_color_inactive", children: [
      "Вспомнили пароль?",
      " ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/login", className: styles.link, children: "Войти" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
};
_s(ForgotPassword, "eZCu0Z5Z1ijFX4YiYMCv0iZ1zBA=", false, function() {
  return [useNavigate, useFormWithValidation];
});
_c = ForgotPassword;
var _c;
$RefreshReg$(_c, "ForgotPassword");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/forgot-password/forgot-password.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc0NNOztBQXRDTixTQUFTQSxRQUFRQyxrQkFBa0I7QUFDbkMsU0FBU0MsZ0JBQWdCO0FBQ3pCLFNBQVNDLE1BQU1DLG1CQUFtQjtBQUVsQyxTQUFTQyw0QkFBNEI7QUFDckMsT0FBT0MsU0FBUztBQUNoQixTQUFTQyw2QkFBNkI7QUFLdEMsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLGlCQUFpQkEsTUFBb0I7QUFBQUMsS0FBQTtBQUNoRCxRQUFNQyxXQUFXUCxZQUFZO0FBQzdCLFFBQU0sQ0FBQ1EsV0FBV0MsWUFBWSxJQUFJWCxTQUFTLEtBQUs7QUFDaEQsUUFBTSxFQUFFWSxRQUFRQyxjQUFjQyxRQUFRLElBQUlULHNCQUFzQjtBQUFBLElBQzlEVSxPQUFPO0FBQUEsRUFDVCxDQUFDO0FBRUQsUUFBTUMsZUFBZUEsQ0FBQ0MsVUFBNEM7QUFDaEVBLFVBQU1DLGVBQWU7QUFDckJQLGlCQUFhLElBQUk7QUFFakJSLHlCQUFxQlMsTUFBTSxFQUN4Qk8sS0FBSyxDQUFDQyxTQUE4QjtBQUNuQyxVQUFJQSxLQUFLQyxTQUFTO0FBRWhCQyxxQkFBYUMsUUFBUSx5QkFBeUIsTUFBTTtBQUNwRGQsaUJBQVMsbUJBQW1CLEVBQUVlLFNBQVMsS0FBSyxDQUFDO0FBQUEsTUFDL0M7QUFBQSxJQUNGLENBQUMsRUFDQUMsTUFBTSxDQUFDQyxRQUF1QkMsUUFBUUMsTUFBTSxpQ0FBaUNGLEdBQUcsQ0FBQyxFQUNqRkcsUUFBUSxNQUFZbEIsYUFBYSxLQUFLLENBQUM7QUFBQSxFQUM1QztBQUVBLFNBQ0UsdUJBQUMsU0FBSSxXQUFXTCxPQUFPd0IsU0FDckI7QUFBQSwyQkFBQyxPQUFJLE9BQU0sMkJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFrQztBQUFBLElBQ2xDLHVCQUFDLFVBQUssV0FBV3hCLE9BQU95QixNQUFNLFlBQVUsTUFBQyxVQUFVZixjQUNqRDtBQUFBLDZCQUFDLFFBQUcsV0FBVSxtQ0FBa0MscUNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcUU7QUFBQSxNQUVyRTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsVUFBVUg7QUFBQUEsVUFDVixPQUFPRCxPQUFPRztBQUFBQSxVQUNkLE1BQUs7QUFBQSxVQUNMLGFBQVk7QUFBQSxVQUNaLFFBQVE7QUFBQSxVQUNSLFVBQVVMO0FBQUFBLFVBQ1YsWUFBVztBQUFBO0FBQUEsUUFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPbUI7QUFBQSxNQUduQjtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsVUFBUztBQUFBLFVBQ1QsTUFBSztBQUFBLFVBQ0wsTUFBSztBQUFBLFVBQ0wsVUFBVSxDQUFDSSxXQUFXSjtBQUFBQSxVQUVyQkEsc0JBQVksc0JBQXNCO0FBQUE7QUFBQSxRQU5yQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQTtBQUFBLFNBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FxQkE7QUFBQSxJQUVBLHVCQUFDLFNBQUksV0FBVyxHQUFHSixPQUFPMEIsTUFBTSxVQUM5QixpQ0FBQyxPQUFFLFdBQVUsbURBQWlEO0FBQUE7QUFBQSxNQUMxQztBQUFBLE1BQ2xCLHVCQUFDLFFBQUssSUFBRyxVQUFTLFdBQVcxQixPQUFPMkIsTUFBSyxxQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVBO0FBQUEsU0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBS0EsS0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBT0E7QUFBQSxPQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBaUNBO0FBRUo7QUFBRXpCLEdBM0RXRCxnQkFBYztBQUFBLFVBQ1JMLGFBRXlCRyxxQkFBcUI7QUFBQTtBQUFBLEtBSHBERTtBQUFjLElBQUEyQjtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJCdXR0b24iLCJFbWFpbElucHV0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJwYXNzd29yZFJlc2V0UmVxdWVzdCIsIlNFTyIsInVzZUZvcm1XaXRoVmFsaWRhdGlvbiIsInN0eWxlcyIsIkZvcmdvdFBhc3N3b3JkIiwiX3MiLCJuYXZpZ2F0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImlzVmFsaWQiLCJlbWFpbCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiZGF0YSIsInN1Y2Nlc3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVwbGFjZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmluYWxseSIsIndyYXBwZXIiLCJmb3JtIiwiZm9vdGVyIiwibGluayIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBFbWFpbElucHV0IH0gZnJvbSAnQGtyZ2FhL3JlYWN0LWRldmVsb3Blci1idXJnZXItdWktY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IHBhc3N3b3JkUmVzZXRSZXF1ZXN0IH0gZnJvbSAnQC91dGlscy9idXJnZXItYXBpJztcbmltcG9ydCBTRU8gZnJvbSAnQGNvbXBvbmVudHMvc2VvL3Nlbyc7XG5pbXBvcnQgeyB1c2VGb3JtV2l0aFZhbGlkYXRpb24gfSBmcm9tICdAaG9va3MvdXNlLWZvcm0td2l0aC12YWxpZGF0aW9uJztcblxuaW1wb3J0IHR5cGUgeyBUQmFzZVJlc3BvbnNlIH0gZnJvbSAnQC91dGlscy9idXJnZXItYXBpJztcbmltcG9ydCB0eXBlIHsgRm9ybUV2ZW50LCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb3Jnb3QtcGFzc3dvcmQubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZCA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdmFsdWVzLCBoYW5kbGVDaGFuZ2UsIGlzVmFsaWQgfSA9IHVzZUZvcm1XaXRoVmFsaWRhdGlvbih7XG4gICAgZW1haWw6ICcnLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICBwYXNzd29yZFJlc2V0UmVxdWVzdCh2YWx1ZXMpXG4gICAgICAudGhlbigoZGF0YTogVEJhc2VSZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0YTQu9Cw0LMsINGH0YLQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L/RgNC40YjQtdC7INGB0L4g0YHRgtGA0LDQvdC40YbRiyDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPLlxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb3Jnb3RQYXNzd29yZFZpc2l0ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIG5hdmlnYXRlKCcvcmVzZXQtcGFzc3dvcmQnLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogdW5rbm93bik6IHZvaWQgPT4gY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8g0L/QsNGA0L7Qu9GPOicsIGVycikpXG4gICAgICAuZmluYWxseSgoKTogdm9pZCA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8U0VPIHRpdGxlPVwi0JLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjQtSDQv9Cw0YDQvtC70Y9cIiAvPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtIG1iLTZcIj7QktC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNC1INC/0LDRgNC+0LvRjzwvaDI+XG5cbiAgICAgICAgPEVtYWlsSW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCj0LrQsNC20LjRgtC1IGUtbWFpbFwiXG4gICAgICAgICAgaXNJY29uPXtmYWxzZX1cbiAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgIGV4dHJhQ2xhc3M9XCJtYi02XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICBkaXNhYmxlZD17IWlzVmFsaWQgfHwgaXNMb2FkaW5nfVxuICAgICAgICA+XG4gICAgICAgICAge2lzTG9hZGluZyA/ICfQktC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNC1Li4uJyA6ICfQktC+0YHRgdGC0LDQvdC+0LLQuNGC0YwnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mb290ZXJ9IG10LTIwYH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCB0ZXh0X2NvbG9yX2luYWN0aXZlXCI+XG4gICAgICAgICAg0JLRgdC/0L7QvNC90LjQu9C4INC/0LDRgNC+0LvRjD97JyAnfVxuICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgICDQktC+0LnRgtC4XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9kYWthc2hpci9naXRodWIvcmVhY3QtYnVyZ2VyLWpzLXN0YXJ0ZXIvc3JjL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQudHN4In0=