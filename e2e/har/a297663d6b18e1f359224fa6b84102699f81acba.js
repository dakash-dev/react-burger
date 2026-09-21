import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/ingredient/ingredient.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import IngredientDetails from "/src/components/ingredient-details/ingredient-details.tsx";
import { useAppSelector } from "/src/services/hooks.ts";
import { selectIngredients } from "/src/services/ingredients/slice.ts";
import SEO from "/src/components/seo/seo.tsx";
import styles from "/src/pages/ingredient/ingredients.module.css";
const IngredientPage = () => {
  _s();
  const { id } = useParams();
  const ingredients = useAppSelector(selectIngredients);
  const ingredientData = ingredients.find(
    (item) => item._id === id
  );
  if (!ingredientData) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: styles.page, children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: ingredientData.name,
        description: `Детальная информация об ингредиенте: ${ingredientData.name}`
      },
      void 0,
      false,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/ingredient/ingredient.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(IngredientDetails, { item: ingredientData }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/ingredient/ingredient.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/pages/ingredient/ingredient.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
_s(IngredientPage, "UzVdYANBfesa8hTNzcv+gaiWiww=", false, function() {
  return [useParams, useAppSelector];
});
_c = IngredientPage;
export default IngredientPage;
var _c;
$RefreshReg$(_c, "IngredientPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/pages/ingredient/ingredient.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/pages/ingredient/ingredient.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/pages/ingredient/ingredient.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBMEJNOztBQTFCTixTQUFTQSxpQkFBaUI7QUFFMUIsT0FBT0MsdUJBQXVCO0FBQzlCLFNBQVNDLHNCQUFzQjtBQUMvQixTQUFTQyx5QkFBeUI7QUFDbEMsT0FBT0MsU0FBUztBQUtoQixPQUFPQyxZQUFZO0FBRW5CLE1BQU1DLGlCQUFpQkEsTUFBMkI7QUFBQUMsS0FBQTtBQUNoRCxRQUFNLEVBQUVDLEdBQUcsSUFBSVIsVUFBMEI7QUFDekMsUUFBTVMsY0FBY1AsZUFBZUMsaUJBQWlCO0FBQ3BELFFBQU1PLGlCQUFpQkQsWUFBWUU7QUFBQUEsSUFDakMsQ0FBQ0MsU0FBK0JBLEtBQUtDLFFBQVFMO0FBQUFBLEVBQy9DO0FBR0EsTUFBSSxDQUFDRSxnQkFBZ0I7QUFDbkIsV0FBTztBQUFBLEVBQ1Q7QUFFQSxTQUNFLHVCQUFDLFNBQUksV0FBV0wsT0FBT1MsTUFDckI7QUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsT0FBT0osZUFBZUs7QUFBQUEsUUFDdEIsYUFBYSx3Q0FBd0NMLGVBQWVLLElBQUk7QUFBQTtBQUFBLE1BRjFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUU2RTtBQUFBLElBRTdFLHVCQUFDLHFCQUFrQixNQUFNTCxrQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3QztBQUFBLE9BTDFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNQTtBQUVKO0FBQUVILEdBckJJRCxnQkFBYztBQUFBLFVBQ0hOLFdBQ0tFLGNBQWM7QUFBQTtBQUFBLEtBRjlCSTtBQXVCTixlQUFlQTtBQUFlLElBQUFVO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZVBhcmFtcyIsIkluZ3JlZGllbnREZXRhaWxzIiwidXNlQXBwU2VsZWN0b3IiLCJzZWxlY3RJbmdyZWRpZW50cyIsIlNFTyIsInN0eWxlcyIsIkluZ3JlZGllbnRQYWdlIiwiX3MiLCJpZCIsImluZ3JlZGllbnRzIiwiaW5ncmVkaWVudERhdGEiLCJmaW5kIiwiaXRlbSIsIl9pZCIsInBhZ2UiLCJuYW1lIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiaW5ncmVkaWVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBJbmdyZWRpZW50RGV0YWlscyBmcm9tICdAL2NvbXBvbmVudHMvaW5ncmVkaWVudC1kZXRhaWxzL2luZ3JlZGllbnQtZGV0YWlscyc7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0Avc2VydmljZXMvaG9va3MnO1xuaW1wb3J0IHsgc2VsZWN0SW5ncmVkaWVudHMgfSBmcm9tICdAL3NlcnZpY2VzL2luZ3JlZGllbnRzL3NsaWNlJztcbmltcG9ydCBTRU8gZnJvbSAnQGNvbXBvbmVudHMvc2VvL3Nlbyc7XG5cbmltcG9ydCB0eXBlIHsgVEluZ3JlZGllbnQgfSBmcm9tICdAL3V0aWxzL2J1cmdlci1hcGknO1xuaW1wb3J0IHR5cGUgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmdyZWRpZW50cy5tb2R1bGUuY3NzJztcblxuY29uc3QgSW5ncmVkaWVudFBhZ2UgPSAoKTogUmVhY3RFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtczx7IGlkOiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgaW5ncmVkaWVudHMgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RJbmdyZWRpZW50cyk7XG4gIGNvbnN0IGluZ3JlZGllbnREYXRhID0gaW5ncmVkaWVudHMuZmluZChcbiAgICAoaXRlbTogVEluZ3JlZGllbnQpOiBib29sZWFuID0+IGl0ZW0uX2lkID09PSBpZFxuICApO1xuXG4gIC8vINCX0LDRidC40YLQsCwg0LXRgdC70Lgg0LTQsNC90L3Ri9C1INC10YnQtSDQvdC1INC/0YDQuNC70LXRgtC10LvQuCDRgSDRgdC10YDQstC10YDQsFxuICBpZiAoIWluZ3JlZGllbnREYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICA8U0VPXG4gICAgICAgIHRpdGxlPXtpbmdyZWRpZW50RGF0YS5uYW1lfVxuICAgICAgICBkZXNjcmlwdGlvbj17YNCU0LXRgtCw0LvRjNC90LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRjyDQvtCxINC40L3Qs9GA0LXQtNC40LXQvdGC0LU6ICR7aW5ncmVkaWVudERhdGEubmFtZX1gfVxuICAgICAgLz5cbiAgICAgIDxJbmdyZWRpZW50RGV0YWlscyBpdGVtPXtpbmdyZWRpZW50RGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZ3JlZGllbnRQYWdlO1xuIl0sImZpbGUiOiIvVXNlcnMvZGFrYXNoaXIvZ2l0aHViL3JlYWN0LWJ1cmdlci1qcy1zdGFydGVyL3NyYy9wYWdlcy9pbmdyZWRpZW50L2luZ3JlZGllbnQudHN4In0=