import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/reset-password/reset-password.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import {
  Button,
  Input,
  PasswordInput
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=12f80588"; const useEffect = __vite__cjsImport2_react["useEffect"]; const useState = __vite__cjsImport2_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import { passwordResetConfirmRequest } from "/src/utils/burger-api.ts";
import SEO from "/src/components/seo/seo.tsx";
import { useFormWithValidation } from "/src/hooks/use-form-with-validation.ts";
import styles from "/src/pages/reset-password/reset-password.module.css";
export const ResetPassword = () => {
  _s();
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const wasVisited = localStorage.getItem("forgotPasswordVisited");
    if (!wasVisited) {
      navigate("/forgot-password");
    } else {
      setIsAllowed(true);
    }
  }, [navigate]);
  const { values, handleChange, isValid } = useFormWithValidation({
    password: "",
    token: ""
    // Это код из письма
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    passwordResetConfirmRequest(values).then((data) => {
      if (data.success) {
        localStorage.removeItem("forgotPasswordVisited");
        navigate("/login", { replace: true });
      }
    }).catch((err) => console.error("Ошибка сброса пароля:", err)).finally(() => setIsLoading(false));
  };
  if (!isAllowed) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ jsxDEV(SEO, { title: "Сброс пароля" }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { className: styles.form, noValidate: true, onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text text_type_main-medium mb-6", children: "Восстановление пароля" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        PasswordInput,
        {
          onChange: handleChange,
          value: values.password,
          name: "password",
          placeholder: "Введите новый пароль",
          disabled: isLoading,
          extraClass: "mb-6"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
          lineNumber: 70,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Input,
        {
          type: "text",
          placeholder: "Введите код из письма",
          onChange: handleChange,
          value: values.token,
          name: "token",
          size: "default",
          disabled: isLoading,
          extraClass: "mb-6"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
          lineNumber: 79,
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
          children: isLoading ? "Сохранение..." : "Сохранить"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
          lineNumber: 90,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `${styles.footer} mt-20`, children: /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default text_color_inactive", children: [
      "Вспомнили пароль?",
      " ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/login", className: styles.link, children: "Войти" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
};
_s(ResetPassword, "ujxY5CVCzZEeuXxl06W7grvq3Ts=", false, function() {
  return [useNavigate, useFormWithValidation];
});
_c = ResetPassword;
var _c;
$RefreshReg$(_c, "ResetPassword");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/reset-password/reset-password.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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U0E5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQStCQTtBQUFBLElBRUEsdUJBQUMsU0FBSSxXQUFXLEdBQUdOLE9BQU8rQixNQUFNLFVBQzlCLGlDQUFDLE9BQUUsV0FBVSxtREFBaUQ7QUFBQTtBQUFBLE1BQzFDO0FBQUEsTUFDbEIsdUJBQUMsUUFBSyxJQUFHLFVBQVMsV0FBVy9CLE9BQU9nQyxNQUFLLHFCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxTQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FLQSxLQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FPQTtBQUFBLE9BMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0EyQ0E7QUFFSjtBQUFFOUIsR0E1RldELGVBQWE7QUFBQSxVQUNQTCxhQWlCeUJHLHFCQUFxQjtBQUFBO0FBQUEsS0FsQnBERTtBQUFhLElBQUFnQztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsIlBhc3N3b3JkSW5wdXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInBhc3N3b3JkUmVzZXRDb25maXJtUmVxdWVzdCIsIlNFTyIsInVzZUZvcm1XaXRoVmFsaWRhdGlvbiIsInN0eWxlcyIsIlJlc2V0UGFzc3dvcmQiLCJfcyIsIm5hdmlnYXRlIiwiaXNBbGxvd2VkIiwic2V0SXNBbGxvd2VkIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwid2FzVmlzaXRlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJpc1ZhbGlkIiwicGFzc3dvcmQiLCJ0b2tlbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZW1vdmVJdGVtIiwicmVwbGFjZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmluYWxseSIsIndyYXBwZXIiLCJmb3JtIiwiZm9vdGVyIiwibGluayIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCdXR0b24sXG4gIElucHV0LFxuICBQYXNzd29yZElucHV0LFxufSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBwYXNzd29yZFJlc2V0Q29uZmlybVJlcXVlc3QgfSBmcm9tICdAL3V0aWxzL2J1cmdlci1hcGknO1xuaW1wb3J0IFNFTyBmcm9tICdAY29tcG9uZW50cy9zZW8vc2VvJztcbmltcG9ydCB7IHVzZUZvcm1XaXRoVmFsaWRhdGlvbiB9IGZyb20gJ0Bob29rcy91c2UtZm9ybS13aXRoLXZhbGlkYXRpb24nO1xuXG5pbXBvcnQgdHlwZSB7IFRCYXNlUmVzcG9uc2UgfSBmcm9tICdAL3V0aWxzL2J1cmdlci1hcGknO1xuaW1wb3J0IHR5cGUgeyBGb3JtRXZlbnQsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgUmVzZXRQYXNzd29yZCA9ICgpOiBSZWFjdEVsZW1lbnQgfCBudWxsID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBbaXNBbGxvd2VkLCBzZXRJc0FsbG93ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8vINCf0YDQvtCy0LXRgNC60LAg0YTQu9Cw0LPQsCDQv9GA0Lgg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC4INGB0YLRgNCw0L3QuNGG0YsuXG4gIHVzZUVmZmVjdCgoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgd2FzVmlzaXRlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb3Jnb3RQYXNzd29yZFZpc2l0ZWQnKTtcblxuICAgIC8vINCV0YHQu9C4INGE0LvQsNCz0LAg0L3QtdGCIOKAlCDQttC10YHRgtC60L4g0YPQstC+0LTQuNC8INC90LAgZm9yZ290LXBhc3N3b3JkXG4gICAgaWYgKCF3YXNWaXNpdGVkKSB7XG4gICAgICBuYXZpZ2F0ZSgnL2ZvcmdvdC1wYXNzd29yZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDQldGB0LvQuCDRhNC70LDQsyDQtdGB0YLRjCDigJQg0YDQsNC30YDQtdGI0LDQtdC8INC/0L7QutCw0Lcg0YTQvtGA0LzRi1xuICAgICAgc2V0SXNBbGxvd2VkKHRydWUpO1xuICAgIH1cbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3QgeyB2YWx1ZXMsIGhhbmRsZUNoYW5nZSwgaXNWYWxpZCB9ID0gdXNlRm9ybVdpdGhWYWxpZGF0aW9uKHtcbiAgICBwYXNzd29yZDogJycsXG4gICAgdG9rZW46ICcnLCAvLyDQrdGC0L4g0LrQvtC0INC40Lcg0L/QuNGB0YzQvNCwXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAvLyBjb25zb2xlLmxvZygn0JTQsNC90L3Ri9C1INC/0LXRgNC10LQg0L7RgtC/0YDQsNCy0LrQvtC5INC90LAg0YHQtdGA0LLQtdGAOicsIHZhbHVlcyk7XG5cbiAgICAvLyDQktGL0LfRi9Cy0LDQtdC8INC80LXRgtC+0LQg0YHQtdGC0LXQstC+0LPQviDRgdC70L7RjyDQuCDQv9C10YDQtdC00LDQtdC8INC+0LHRitC10LrRgiDRgSDQtNCw0L3QvdGL0LzQuCDRhNC+0YDQvNGLXG4gICAgcGFzc3dvcmRSZXNldENvbmZpcm1SZXF1ZXN0KHZhbHVlcylcbiAgICAgIC50aGVuKChkYXRhOiBUQmFzZVJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAvLyDQkiDRgdC70YPRh9Cw0LUg0YPRgdC/0LXRhdCwINC+0YfQuNGJ0LDQtdC8INGE0LvQsNCzINC4INC+0YLQv9GA0LDQstC70Y/QtdC8INC90LAg0LvQvtCz0LjQvSDQv9C+INCi0JdcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZm9yZ290UGFzc3dvcmRWaXNpdGVkJyk7XG4gICAgICAgICAgbmF2aWdhdGUoJy9sb2dpbicsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiB1bmtub3duKTogdm9pZCA9PiBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0YHQsdGA0L7RgdCwINC/0LDRgNC+0LvRjzonLCBlcnIpKVxuICAgICAgLmZpbmFsbHkoKCk6IHZvaWQgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XG4gIH07XG5cbiAgLy8g0JXRgdC70Lgg0LfQsNGI0LvQuCDQvdCw0L/RgNGP0LzRg9GOLCDQv9GA0LXRgNGL0LLQsNC10Lwg0YDQtdC90LTQtdGALCDRh9GC0L7QsdGLINGB0YLRgNCw0L3QuNGG0LAg0L3QtSDQv9Cw0LTQsNC70LAg0LIgXCLQsdC10LvRi9C5INGN0LrRgNCw0L1cIlxuICBpZiAoIWlzQWxsb3dlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPFNFTyB0aXRsZT1cItCh0LHRgNC+0YEg0L/QsNGA0L7Qu9GPXCIgLz5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bSBtYi02XCI+0JLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjQtSDQv9Cw0YDQvtC70Y88L2gyPlxuXG4gICAgICAgIDxQYXNzd29yZElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQvdC+0LLRi9C5INC/0LDRgNC+0LvRjFwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICBleHRyYUNsYXNzPVwibWItNlwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LrQvtC0INC40Lcg0L/QuNGB0YzQvNCwXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudG9rZW59XG4gICAgICAgICAgbmFtZT1cInRva2VuXCJcbiAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICBleHRyYUNsYXNzPVwibWItNlwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc1ZhbGlkIHx8IGlzTG9hZGluZ31cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0xvYWRpbmcgPyAn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nIDogJ9Ch0L7RhdGA0LDQvdC40YLRjCd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZvb3Rlcn0gbXQtMjBgfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IHRleHRfY29sb3JfaW5hY3RpdmVcIj5cbiAgICAgICAgICDQktGB0L/QvtC80L3QuNC70Lgg0L/QsNGA0L7Qu9GMP3snICd9XG4gICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAgICAgINCS0L7QudGC0LhcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJmaWxlIjoiL1VzZXJzL2Rha2FzaGlyL2dpdGh1Yi9yZWFjdC1idXJnZXItanMtc3RhcnRlci9zcmMvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudHN4In0=