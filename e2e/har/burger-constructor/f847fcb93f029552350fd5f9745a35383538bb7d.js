import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ingredient-details/ingredient-details.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import styles from "/src/components/ingredient-details/ingredient-details.module.css";
function IngredientDetails({ item }) {
  if (!item) return null;
  return /* @__PURE__ */ jsxDEV("div", { className: styles.container, children: [
    /* @__PURE__ */ jsxDEV("img", { alt: item.name, src: item.image_large }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("h2", { className: styles.title, children: item.name }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("ul", { className: `${styles.foodList} mb-15`, children: [
      /* @__PURE__ */ jsxDEV("li", { className: styles.foodItem, children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-default text_color_inactive", children: "Калории, ккал" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default", children: item.calories }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("li", { className: styles.foodItem, children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-default text_color_inactive", children: "Белки, г" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default", children: item.proteins }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("li", { className: styles.foodItem, children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-default text_color_inactive", children: "Жиры, г" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default", children: item.fat }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("li", { className: styles.foodItem, children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-default text_color_inactive", children: "Углеводы, г" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default", children: item.carbohydrates }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c = IngredientDetails;
export default IngredientDetails;
var _c;
$RefreshReg$(_c, "IngredientDetails");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/ingredient-details/ingredient-details.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY007QUFYTixPQUFPQSxZQUFZO0FBTW5CLFNBQVNDLGtCQUFrQixFQUFFQyxLQUE4QixHQUF3QjtBQUNqRixNQUFJLENBQUNBLEtBQU0sUUFBTztBQUVsQixTQUNFLHVCQUFDLFNBQUksV0FBV0YsT0FBT0csV0FDckI7QUFBQSwyQkFBQyxTQUFJLEtBQUtELEtBQUtFLE1BQU0sS0FBS0YsS0FBS0csZUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEyQztBQUFBLElBQzNDLHVCQUFDLFFBQUcsV0FBV0wsT0FBT00sT0FBUUosZUFBS0UsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3QztBQUFBLElBQ3hDLHVCQUFDLFFBQUcsV0FBVyxHQUFHSixPQUFPTyxRQUFRLFVBQy9CO0FBQUEsNkJBQUMsUUFBRyxXQUFXUCxPQUFPUSxVQUNwQjtBQUFBLCtCQUFDLFVBQUssV0FBVSxtREFBaUQsNkJBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFFBQ0EsdUJBQUMsVUFBSyxXQUFVLGlDQUFpQ04sZUFBS08sWUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUErRDtBQUFBLFdBSmpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFLQTtBQUFBLE1BQ0EsdUJBQUMsUUFBRyxXQUFXVCxPQUFPUSxVQUNwQjtBQUFBLCtCQUFDLFVBQUssV0FBVSxtREFBaUQsd0JBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFFBQ0EsdUJBQUMsVUFBSyxXQUFVLGlDQUFpQ04sZUFBS1EsWUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUErRDtBQUFBLFdBSmpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFLQTtBQUFBLE1BQ0EsdUJBQUMsUUFBRyxXQUFXVixPQUFPUSxVQUNwQjtBQUFBLCtCQUFDLFVBQUssV0FBVSxtREFBaUQsdUJBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFFBQ0EsdUJBQUMsVUFBSyxXQUFVLGlDQUFpQ04sZUFBS1MsT0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEwRDtBQUFBLFdBSjVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFLQTtBQUFBLE1BQ0EsdUJBQUMsUUFBRyxXQUFXWCxPQUFPUSxVQUNwQjtBQUFBLCtCQUFDLFVBQUssV0FBVSxtREFBaUQsMkJBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFFBQ0EsdUJBQUMsVUFBSyxXQUFVLGlDQUFpQ04sZUFBS1UsaUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBb0U7QUFBQSxXQUp0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBS0E7QUFBQSxTQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBeUJBO0FBQUEsT0E1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTZCQTtBQUVKO0FBQUNDLEtBbkNRWjtBQXFDVCxlQUFlQTtBQUFrQixJQUFBWTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJzdHlsZXMiLCJJbmdyZWRpZW50RGV0YWlscyIsIml0ZW0iLCJjb250YWluZXIiLCJuYW1lIiwiaW1hZ2VfbGFyZ2UiLCJ0aXRsZSIsImZvb2RMaXN0IiwiZm9vZEl0ZW0iLCJjYWxvcmllcyIsInByb3RlaW5zIiwiZmF0IiwiY2FyYm9oeWRyYXRlcyIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtZGV0YWlscy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUSW5ncmVkaWVudCB9IGZyb20gJ0AvdXRpbHMvYnVyZ2VyLWFwaSc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZ3JlZGllbnQtZGV0YWlscy5tb2R1bGUuY3NzJztcblxudHlwZSBUSW5ncmVkaWVudERldGFpbHNQcm9wcyA9IHtcbiAgaXRlbTogVEluZ3JlZGllbnQ7XG59O1xuXG5mdW5jdGlvbiBJbmdyZWRpZW50RGV0YWlscyh7IGl0ZW0gfTogVEluZ3JlZGllbnREZXRhaWxzUHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbDsgLy8g0JfQsNGJ0LjRgtCwINC+0YIgdW5kZWZpbmVkINC/0YDQuCDQv9C10YDQstC+0Lkg0LfQsNCz0YDRg9C30LrQtVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGltZyBhbHQ9e2l0ZW0ubmFtZX0gc3JjPXtpdGVtLmltYWdlX2xhcmdlfSAvPlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57aXRlbS5uYW1lfTwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZm9vZExpc3R9IG1iLTE1YH0+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5mb29kSXRlbX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IHRleHRfY29sb3JfaW5hY3RpdmVcIj5cbiAgICAgICAgICAgINCa0LDQu9C+0YDQuNC4LCDQutC60LDQu1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9kaWdpdHMtZGVmYXVsdFwiPntpdGVtLmNhbG9yaWVzfTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmZvb2RJdGVtfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgdGV4dF9jb2xvcl9pbmFjdGl2ZVwiPlxuICAgICAgICAgICAg0JHQtdC70LrQuCwg0LNcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHRcIj57aXRlbS5wcm90ZWluc308L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5mb29kSXRlbX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IHRleHRfY29sb3JfaW5hY3RpdmVcIj5cbiAgICAgICAgICAgINCW0LjRgNGLLCDQs1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9kaWdpdHMtZGVmYXVsdFwiPntpdGVtLmZhdH08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5mb29kSXRlbX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IHRleHRfY29sb3JfaW5hY3RpdmVcIj5cbiAgICAgICAgICAgINCj0LPQu9C10LLQvtC00YssINCzXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX2RpZ2l0cy1kZWZhdWx0XCI+e2l0ZW0uY2FyYm9oeWRyYXRlc308L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50RGV0YWlscztcbiJdLCJmaWxlIjoiL1VzZXJzL2Rha2FzaGlyL2dpdGh1Yi9yZWFjdC1idXJnZXItanMtc3RhcnRlci9zcmMvY29tcG9uZW50cy9pbmdyZWRpZW50LWRldGFpbHMvaW5ncmVkaWVudC1kZXRhaWxzLnRzeCJ9