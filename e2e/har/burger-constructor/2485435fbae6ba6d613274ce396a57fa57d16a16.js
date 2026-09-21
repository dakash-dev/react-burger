import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/profile/profile-form.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import {
  Input,
  EmailInput,
  PasswordInput,
  Button
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=12f80588"; const useState = __vite__cjsImport2_react["useState"]; const useEffect = __vite__cjsImport2_react["useEffect"];
import { updateUser } from "/src/services/auth/actions.ts";
import { selectUser, selectAuthLoading } from "/src/services/auth/slice.ts";
import { useAppDispatch, useAppSelector } from "/src/services/hooks.ts";
import styles from "/src/pages/profile/profile-form.module.css";
export const ProfileForm = () => {
  _s();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isAuthLoading = useAppSelector(selectAuthLoading);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isFormChanged, setIsFormChanged] = useState(false);
  useEffect(() => {
    if (user) {
      setForm({ name: user.name || "", email: user.email || "", password: "" });
    }
  }, [user]);
  const handleInputChange = (e) => {
    const nextForm = { ...form, [e.target.name]: e.target.value };
    setForm(nextForm);
    setIsFormChanged(
      nextForm.name !== (user?.name || "") || nextForm.email !== (user?.email || "") || nextForm.password !== ""
    );
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setForm({ name: user?.name || "", email: user?.email || "", password: "" });
    setIsFormChanged(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(form)).unwrap().then(() => setIsFormChanged(false)).catch((err) => console.error("Ошибка обновления профиля:", err));
  };
  return /* @__PURE__ */ jsxDEV("form", { className: styles.form, onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxDEV(
      Input,
      {
        type: "text",
        placeholder: "Имя",
        onChange: handleInputChange,
        value: form.name,
        name: "name",
        icon: "EditIcon",
        disabled: isAuthLoading,
        extraClass: "mb-6"
      },
      void 0,
      false,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx",
        lineNumber: 67,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      EmailInput,
      {
        onChange: handleInputChange,
        value: form.email,
        name: "email",
        placeholder: "Логин",
        isIcon: true,
        disabled: isAuthLoading,
        extraClass: "mb-6"
      },
      void 0,
      false,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx",
        lineNumber: 77,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      PasswordInput,
      {
        onChange: handleInputChange,
        value: form.password,
        name: "password",
        icon: "EditIcon",
        placeholder: "Пароль",
        disabled: isAuthLoading,
        extraClass: "mb-6"
      },
      void 0,
      false,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx",
        lineNumber: 86,
        columnNumber: 7
      },
      this
    ),
    isFormChanged && /* @__PURE__ */ jsxDEV("div", { className: styles.buttons_container, children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          type: "button",
          onClick: handleCancel,
          className: styles.cancel_btn,
          disabled: isAuthLoading,
          children: "Отмена"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx",
          lineNumber: 98,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          htmlType: "submit",
          type: "primary",
          size: "medium",
          disabled: isAuthLoading,
          children: isAuthLoading ? "Сохранение..." : "Сохранить"
        },
        void 0,
        false,
        {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx",
          lineNumber: 106,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
};
_s(ProfileForm, "jTab7pkIbu08Csnsn5G4ee+vfuw=", false, function() {
  return [useAppDispatch, useAppSelector, useAppSelector];
});
_c = ProfileForm;
var _c;
$RefreshReg$(_c, "ProfileForm");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/profile/profile-form.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUNaLFVBQVVMO0FBQUFBLFFBQ1YsWUFBVztBQUFBO0FBQUEsTUFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPbUI7QUFBQSxJQUdsQk0saUJBQ0MsdUJBQUMsU0FBSSxXQUFXWCxPQUFPMkIsbUJBQ3JCO0FBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE1BQUs7QUFBQSxVQUNMLFNBQVNUO0FBQUFBLFVBQ1QsV0FBV2xCLE9BQU80QjtBQUFBQSxVQUNsQixVQUFVdkI7QUFBQUEsVUFBYztBQUFBO0FBQUEsUUFKMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0E7QUFBQSxNQUNBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxVQUFTO0FBQUEsVUFDVCxNQUFLO0FBQUEsVUFDTCxNQUFLO0FBQUEsVUFDTCxVQUFVQTtBQUFBQSxVQUVUQSwwQkFBZ0Isa0JBQWtCO0FBQUE7QUFBQSxRQU5yQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQTtBQUFBLFNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FpQkE7QUFBQSxPQWhESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBa0RBO0FBRUo7QUFBRUgsR0EvRldELGFBQVc7QUFBQSxVQUNMSCxnQkFDSkMsZ0JBQ1NBLGNBQWM7QUFBQTtBQUFBLEtBSHpCRTtBQUFXLElBQUE0QjtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJJbnB1dCIsIkVtYWlsSW5wdXQiLCJQYXNzd29yZElucHV0IiwiQnV0dG9uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1cGRhdGVVc2VyIiwic2VsZWN0VXNlciIsInNlbGVjdEF1dGhMb2FkaW5nIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInN0eWxlcyIsIlByb2ZpbGVGb3JtIiwiX3MiLCJkaXNwYXRjaCIsInVzZXIiLCJpc0F1dGhMb2FkaW5nIiwiZm9ybSIsInNldEZvcm0iLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImlzRm9ybUNoYW5nZWQiLCJzZXRJc0Zvcm1DaGFuZ2VkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmV4dEZvcm0iLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNhbmNlbCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU3VibWl0IiwidW53cmFwIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiYnV0dG9uc19jb250YWluZXIiLCJjYW5jZWxfYnRuIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicHJvZmlsZS1mb3JtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgRW1haWxJbnB1dCxcbiAgUGFzc3dvcmRJbnB1dCxcbiAgQnV0dG9uLFxufSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVwZGF0ZVVzZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2VsZWN0VXNlciwgc2VsZWN0QXV0aExvYWRpbmcgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoL3NsaWNlJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hvb2tzJztcblxuaW1wb3J0IHR5cGUgeyBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50LCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcm9maWxlLWZvcm0ubW9kdWxlLmNzcyc7XG5cbnR5cGUgVFByb2ZpbGVGb3JtU3RhdGUgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlRm9ybSA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RVc2VyKTtcbiAgY29uc3QgaXNBdXRoTG9hZGluZyA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdEF1dGhMb2FkaW5nKTtcblxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZTxUUHJvZmlsZUZvcm1TdGF0ZT4oe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gIH0pO1xuICBjb25zdCBbaXNGb3JtQ2hhbmdlZCwgc2V0SXNGb3JtQ2hhbmdlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpOiB2b2lkID0+IHtcbiAgICBpZiAodXNlcikge1xuICAgICAgc2V0Rm9ybSh7IG5hbWU6IHVzZXIubmFtZSB8fCAnJywgZW1haWw6IHVzZXIuZW1haWwgfHwgJycsIHBhc3N3b3JkOiAnJyB9KTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICBjb25zdCBuZXh0Rm9ybTogVFByb2ZpbGVGb3JtU3RhdGUgPSB7IC4uLmZvcm0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfTtcbiAgICBzZXRGb3JtKG5leHRGb3JtKTtcbiAgICBzZXRJc0Zvcm1DaGFuZ2VkKFxuICAgICAgbmV4dEZvcm0ubmFtZSAhPT0gKHVzZXI/Lm5hbWUgfHwgJycpIHx8XG4gICAgICAgIG5leHRGb3JtLmVtYWlsICE9PSAodXNlcj8uZW1haWwgfHwgJycpIHx8XG4gICAgICAgIG5leHRGb3JtLnBhc3N3b3JkICE9PSAnJ1xuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKGU6IEZvcm1FdmVudCk6IHZvaWQgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRGb3JtKHsgbmFtZTogdXNlcj8ubmFtZSB8fCAnJywgZW1haWw6IHVzZXI/LmVtYWlsIHx8ICcnLCBwYXNzd29yZDogJycgfSk7XG4gICAgc2V0SXNGb3JtQ2hhbmdlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IEZvcm1FdmVudCk6IHZvaWQgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVVc2VyKGZvcm0pKVxuICAgICAgLnVud3JhcCgpXG4gICAgICAudGhlbigoKSA9PiBzZXRJc0Zvcm1DaGFuZ2VkKGZhbHNlKSlcbiAgICAgIC5jYXRjaCgoZXJyOiB1bmtub3duKTogdm9pZCA9PiBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0L7QsdC90L7QstC70LXQvdC40Y8g0L/RgNC+0YTQuNC70Y86JywgZXJyKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxJbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICB2YWx1ZT17Zm9ybS5uYW1lfVxuICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgIGljb249XCJFZGl0SWNvblwiXG4gICAgICAgIGRpc2FibGVkPXtpc0F1dGhMb2FkaW5nfVxuICAgICAgICBleHRyYUNsYXNzPVwibWItNlwiXG4gICAgICAvPlxuICAgICAgPEVtYWlsSW5wdXRcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQm9C+0LPQuNC9XCJcbiAgICAgICAgaXNJY29uPXt0cnVlfVxuICAgICAgICBkaXNhYmxlZD17aXNBdXRoTG9hZGluZ31cbiAgICAgICAgZXh0cmFDbGFzcz1cIm1iLTZcIlxuICAgICAgLz5cbiAgICAgIDxQYXNzd29yZElucHV0XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgdmFsdWU9e2Zvcm0ucGFzc3dvcmR9XG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIGljb249XCJFZGl0SWNvblwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcbiAgICAgICAgZGlzYWJsZWQ9e2lzQXV0aExvYWRpbmd9XG4gICAgICAgIGV4dHJhQ2xhc3M9XCJtYi02XCJcbiAgICAgIC8+XG5cbiAgICAgIHtpc0Zvcm1DaGFuZ2VkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYW5jZWxfYnRufVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQXV0aExvYWRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNBdXRoTG9hZGluZ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNBdXRoTG9hZGluZyA/ICfQodC+0YXRgNCw0L3QtdC90LjQtS4uLicgOiAn0KHQvtGF0YDQsNC90LjRgtGMJ31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9kYWthc2hpci9naXRodWIvcmVhY3QtYnVyZ2VyLWpzLXN0YXJ0ZXIvc3JjL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLnRzeCJ9