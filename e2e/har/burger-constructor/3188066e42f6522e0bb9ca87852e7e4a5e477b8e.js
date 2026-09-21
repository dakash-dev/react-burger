import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/burger-ingredients/burger-ingredients.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import { Counter, CurrencyIcon, Tab } from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=12f80588"; const useState = __vite__cjsImport2_react["useState"]; const useRef = __vite__cjsImport2_react["useRef"];
import { useDrag } from "/node_modules/.vite/deps/react-dnd.js?v=12f80588";
import { useNavigate, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import { selectIngredientCount } from "/src/services/burgerConstructor/slice.ts";
import { useAppSelector } from "/src/services/hooks.ts";
import { selectIngredients } from "/src/services/ingredients/slice.ts";
import styles from "/src/components/burger-ingredients/burger-ingredients.module.css";
export const BurgerIngredients = () => {
  _s();
  const ingredients = useAppSelector(selectIngredients);
  console.log(ingredients);
  const [current, setCurrent] = useState("bun");
  const containerRef = useRef(null);
  const bunsRef = useRef(null);
  const mainsRef = useRef(null);
  const saucesRef = useRef(null);
  const handleScroll = () => {
    if (!containerRef.current || !bunsRef.current || !mainsRef.current || !saucesRef.current) {
      return;
    }
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const bunsDiff = Math.abs(
      bunsRef.current.getBoundingClientRect().top - containerTop
    );
    const mainsDiff = Math.abs(
      mainsRef.current.getBoundingClientRect().top - containerTop
    );
    const saucesDiff = Math.abs(
      saucesRef.current.getBoundingClientRect().top - containerTop
    );
    if (bunsDiff < mainsDiff && bunsDiff < saucesDiff) {
      setCurrent("bun");
    } else if (mainsDiff < bunsDiff && mainsDiff < saucesDiff) {
      setCurrent("main");
    } else {
      setCurrent("sauce");
    }
  };
  const buns = ingredients.filter(
    (ingredient) => ingredient.type === "bun"
  );
  const mains = ingredients.filter(
    (ingredient) => ingredient.type === "main"
  );
  const sauces = ingredients.filter(
    (ingredient) => ingredient.type === "sauce"
  );
  return /* @__PURE__ */ jsxDEV("section", { className: styles.burger_ingredients, children: [
    /* @__PURE__ */ jsxDEV("nav", { children: /* @__PURE__ */ jsxDEV("ul", { className: styles.menu, children: [
      /* @__PURE__ */ jsxDEV(Tab, { value: "bun", active: current === "bun", onClick: setCurrent, children: "Булки" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Tab, { value: "main", active: current === "main", onClick: setCurrent, children: "Начинки" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Tab, { value: "sauce", active: current === "sauce", onClick: setCurrent, children: "Соусы" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        ref: containerRef,
        onScroll: handleScroll,
        className: `${styles.container} custom-scroll pt-10`,
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-10", children: [
            /* @__PURE__ */ jsxDEV("h2", { ref: bunsRef, className: "text text_type_main-medium mb-6", children: "Булки" }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
              lineNumber: 97,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: styles.grid, children: buns.map(
              (product) => /* @__PURE__ */ jsxDEV(IngredientCard, { model: product }, product._id, false, {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
                lineNumber: 104,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
              lineNumber: 100,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
            lineNumber: 96,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mb-10", children: [
            /* @__PURE__ */ jsxDEV("h2", { ref: mainsRef, className: "text text_type_main-medium mb-6", children: "Начинка" }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
              lineNumber: 111,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: styles.grid, children: mains.map(
              (product) => /* @__PURE__ */ jsxDEV(IngredientCard, { model: product }, product._id, false, {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
                lineNumber: 118,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
              lineNumber: 114,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
            lineNumber: 110,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mb-10", children: [
            /* @__PURE__ */ jsxDEV("h2", { ref: saucesRef, className: "text text_type_main-medium mb-6", children: "Соусы" }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
              lineNumber: 125,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: styles.grid, children: sauces.map(
              (product) => /* @__PURE__ */ jsxDEV(IngredientCard, { model: product }, product._id, false, {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
                lineNumber: 132,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
              lineNumber: 128,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
            lineNumber: 124,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
        lineNumber: 90,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
};
_s(BurgerIngredients, "ZCgsYoIIqJfQLTe1O8lQntW4k+4=", false, function() {
  return [useAppSelector];
});
_c = BurgerIngredients;
const IngredientCard = ({ model }) => {
  _s2();
  const navigate = useNavigate();
  const location = useLocation();
  const count = useAppSelector(
    (state) => selectIngredientCount(state)(model._id)
  );
  const [{ isDragging }, dragRef] = useDrag(
    {
      type: "ingredient",
      item: model,
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }
  );
  const opacityStyle = isDragging ? { opacity: 0.4 } : {};
  return /* @__PURE__ */ jsxDEV(
    "li",
    {
      ref: (node) => {
        if (node) {
          dragRef(node);
        }
      },
      style: opacityStyle,
      className: styles.card,
      "data-testid": "ingredient-card",
      onClick: () => {
        navigate(`/ingredients/${model._id}`, { state: { background: location } });
      },
      children: [
        count > 0 && /* @__PURE__ */ jsxDEV(Counter, { count, size: "default", extraClass: "m-1" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
          lineNumber: 183,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("img", { src: model.image, alt: model.name, className: "pl-4 pr-4 mb-1" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
          lineNumber: 186,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: `${styles.price} mb-1`, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default mr-2", children: model.price }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
            lineNumber: 190,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
            lineNumber: 191,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
          lineNumber: 189,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: `${styles.ingredient_name} text text_type_main-default`, children: model.name }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
          lineNumber: 195,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx",
      lineNumber: 168,
      columnNumber: 5
    },
    this
  );
};
_s2(IngredientCard, "3tseXYSOgn/K73w+TohXP5QMN2I=", false, function() {
  return [useNavigate, useLocation, useAppSelector, useDrag];
});
_c2 = IngredientCard;
var _c, _c2;
$RefreshReg$(_c, "BurgerIngredients");
$RefreshReg$(_c2, "IngredientCard");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/burger-ingredients/burger-ingredients.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFjLE1BQUssV0FBVSxZQUFXLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBc0Q7QUFBQSxRQUdwRSx1QkFBQyxTQUFJLEtBQUtKLE1BQU1nQixPQUFPLEtBQUtoQixNQUFNaUIsTUFBTSxXQUFVLG9CQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWtFO0FBQUEsUUFHbEUsdUJBQUMsU0FBSSxXQUFXLEdBQUdwRCxPQUFPcUQsS0FBSyxTQUM3QjtBQUFBLGlDQUFDLFVBQUssV0FBVSxzQ0FBc0NsQixnQkFBTWtCLFNBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWtFO0FBQUEsVUFDbEUsdUJBQUMsZ0JBQWEsTUFBSyxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE0QjtBQUFBLGFBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFHQTtBQUFBLFFBR0EsdUJBQUMsT0FBRSxXQUFXLEdBQUdyRCxPQUFPc0QsZUFBZSxnQ0FDcENuQixnQkFBTWlCLFFBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUE7QUFBQTtBQUFBLElBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQThCQTtBQUVKO0FBQUVoQixJQXpESUYsZ0JBQXdDO0FBQUEsVUFDM0J2QyxhQUNBQyxhQUNIRSxnQkFJb0JKLE9BQU87QUFBQTtBQUFBLE1BUHJDd0M7QUFBd0MsSUFBQXFCLElBQUFDO0FBQUEsYUFBQUQsSUFBQTtBQUFBLGFBQUFDLEtBQUEiLCJuYW1lcyI6WyJDb3VudGVyIiwiQ3VycmVuY3lJY29uIiwiVGFiIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VEcmFnIiwidXNlTmF2aWdhdGUiLCJ1c2VMb2NhdGlvbiIsInNlbGVjdEluZ3JlZGllbnRDb3VudCIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0SW5ncmVkaWVudHMiLCJzdHlsZXMiLCJCdXJnZXJJbmdyZWRpZW50cyIsIl9zIiwiaW5ncmVkaWVudHMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJjb250YWluZXJSZWYiLCJidW5zUmVmIiwibWFpbnNSZWYiLCJzYXVjZXNSZWYiLCJoYW5kbGVTY3JvbGwiLCJjb250YWluZXJUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJidW5zRGlmZiIsIk1hdGgiLCJhYnMiLCJtYWluc0RpZmYiLCJzYXVjZXNEaWZmIiwiYnVucyIsImZpbHRlciIsImluZ3JlZGllbnQiLCJ0eXBlIiwibWFpbnMiLCJzYXVjZXMiLCJidXJnZXJfaW5ncmVkaWVudHMiLCJtZW51IiwiY29udGFpbmVyIiwiZ3JpZCIsIm1hcCIsInByb2R1Y3QiLCJfaWQiLCJJbmdyZWRpZW50Q2FyZCIsIm1vZGVsIiwiX3MyIiwibmF2aWdhdGUiLCJsb2NhdGlvbiIsImNvdW50Iiwic3RhdGUiLCJpc0RyYWdnaW5nIiwiZHJhZ1JlZiIsIml0ZW0iLCJjb2xsZWN0IiwibW9uaXRvciIsIm9wYWNpdHlTdHlsZSIsIm9wYWNpdHkiLCJub2RlIiwiY2FyZCIsImJhY2tncm91bmQiLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImluZ3JlZGllbnRfbmFtZSIsIl9jIiwiX2MyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImJ1cmdlci1pbmdyZWRpZW50cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ291bnRlciwgQ3VycmVuY3lJY29uLCBUYWIgfSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBzZWxlY3RJbmdyZWRpZW50Q291bnQgfSBmcm9tICdAL3NlcnZpY2VzL2J1cmdlckNvbnN0cnVjdG9yL3NsaWNlJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9zZXJ2aWNlcy9ob29rcyc7XG5pbXBvcnQgeyBzZWxlY3RJbmdyZWRpZW50cyB9IGZyb20gJ0Avc2VydmljZXMvaW5ncmVkaWVudHMvc2xpY2UnO1xuXG5pbXBvcnQgdHlwZSB7IFRJbmdyZWRpZW50IH0gZnJvbSAnQC91dGlscy9idXJnZXItYXBpJztcbmltcG9ydCB0eXBlIHsgUm9vdFN0YXRlIH0gZnJvbSAnQHNlcnZpY2VzL3N0b3JlJztcbmltcG9ydCB0eXBlIHsgRkMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRHJhZ1NvdXJjZU1vbml0b3IgfSBmcm9tICdyZWFjdC1kbmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnVyZ2VyLWluZ3JlZGllbnRzLm1vZHVsZS5jc3MnO1xuXG50eXBlIFRJbmdyZWRpZW50Q2FyZFByb3BzID0ge1xuICBtb2RlbDogVEluZ3JlZGllbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgQnVyZ2VySW5ncmVkaWVudHMgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgaW5ncmVkaWVudHMgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RJbmdyZWRpZW50cyk7XG4gIGNvbnNvbGUubG9nKGluZ3JlZGllbnRzKTtcblxuICAvLyDQsNC60YLQuNCy0LjRgNGD0LXQvCDRgdGB0YvQu9C60Lgg0LTQuNC90LDQvNC40YfQtdGB0LrQuC5cbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGU8c3RyaW5nPignYnVuJyk7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgYnVuc1JlZiA9IHVzZVJlZjxIVE1MSGVhZGluZ0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBtYWluc1JlZiA9IHVzZVJlZjxIVE1MSGVhZGluZ0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBzYXVjZXNSZWYgPSB1c2VSZWY8SFRNTEhlYWRpbmdFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKTogdm9pZCA9PiB7XG4gICAgLy8g0JfQsNGJ0LjRgtC90LDRjyDQv9GA0L7QstC10YDQutCwOiDQtdGB0LvQuCDRhdC+0YLRjCDQvtC00LjQvSDRgNC10YQg0YDQsNCy0LXQvSBudWxsLCDRgdGA0LDQt9GDINCy0YvRhdC+0LTQuNC8JlxuICAgIGlmIChcbiAgICAgICFjb250YWluZXJSZWYuY3VycmVudCB8fFxuICAgICAgIWJ1bnNSZWYuY3VycmVudCB8fFxuICAgICAgIW1haW5zUmVmLmN1cnJlbnQgfHxcbiAgICAgICFzYXVjZXNSZWYuY3VycmVudFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXJUb3AgPSBjb250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3QgYnVuc0RpZmYgPSBNYXRoLmFicyhcbiAgICAgIGJ1bnNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBjb250YWluZXJUb3BcbiAgICApO1xuICAgIGNvbnN0IG1haW5zRGlmZiA9IE1hdGguYWJzKFxuICAgICAgbWFpbnNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBjb250YWluZXJUb3BcbiAgICApO1xuICAgIGNvbnN0IHNhdWNlc0RpZmYgPSBNYXRoLmFicyhcbiAgICAgIHNhdWNlc1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNvbnRhaW5lclRvcFxuICAgICk7XG5cbiAgICBpZiAoYnVuc0RpZmYgPCBtYWluc0RpZmYgJiYgYnVuc0RpZmYgPCBzYXVjZXNEaWZmKSB7XG4gICAgICBzZXRDdXJyZW50KCdidW4nKTtcbiAgICB9IGVsc2UgaWYgKG1haW5zRGlmZiA8IGJ1bnNEaWZmICYmIG1haW5zRGlmZiA8IHNhdWNlc0RpZmYpIHtcbiAgICAgIHNldEN1cnJlbnQoJ21haW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudCgnc2F1Y2UnKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g0YDQsNC30LXQu9GP0LXQvCDQvtCx0YnQuNC5INC80LDRgdGB0LjQsiDQuNC90LPRgNCw0LTQuNC10L3RgtC+0LIuXG4gIC8vINGH0YLQvtCx0Ysg0L3QtSDQt9Cw0L/Rg9GC0LDRgtGM0YHRjyAtINC+0YHRgtCw0LLQu9GP0LXQvCDQsdC70LjQt9C60LjQtSDQvdCw0LfQstCw0L3QuNGPINC4INC90LUg0YHQvtC60YDQsNGJ0LDQtdC8LlxuICBjb25zdCBidW5zID0gaW5ncmVkaWVudHMuZmlsdGVyKFxuICAgIChpbmdyZWRpZW50OiBUSW5ncmVkaWVudCk6IGJvb2xlYW4gPT4gaW5ncmVkaWVudC50eXBlID09PSAnYnVuJ1xuICApO1xuICBjb25zdCBtYWlucyA9IGluZ3JlZGllbnRzLmZpbHRlcihcbiAgICAoaW5ncmVkaWVudDogVEluZ3JlZGllbnQpOiBib29sZWFuID0+IGluZ3JlZGllbnQudHlwZSA9PT0gJ21haW4nXG4gICk7XG4gIGNvbnN0IHNhdWNlcyA9IGluZ3JlZGllbnRzLmZpbHRlcihcbiAgICAoaW5ncmVkaWVudDogVEluZ3JlZGllbnQpOiBib29sZWFuID0+IGluZ3JlZGllbnQudHlwZSA9PT0gJ3NhdWNlJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyX2luZ3JlZGllbnRzfT5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cbiAgICAgICAgICA8VGFiIHZhbHVlPVwiYnVuXCIgYWN0aXZlPXtjdXJyZW50ID09PSAnYnVuJ30gb25DbGljaz17c2V0Q3VycmVudH0+XG4gICAgICAgICAgICDQkdGD0LvQutC4XG4gICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgPFRhYiB2YWx1ZT1cIm1haW5cIiBhY3RpdmU9e2N1cnJlbnQgPT09ICdtYWluJ30gb25DbGljaz17c2V0Q3VycmVudH0+XG4gICAgICAgICAgICDQndCw0YfQuNC90LrQuFxuICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgIDxUYWIgdmFsdWU9XCJzYXVjZVwiIGFjdGl2ZT17Y3VycmVudCA9PT0gJ3NhdWNlJ30gb25DbGljaz17c2V0Q3VycmVudH0+XG4gICAgICAgICAgICDQodC+0YPRgdGLXG4gICAgICAgICAgPC9UYWI+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICAgIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gY3VzdG9tLXNjcm9sbCBwdC0xMGB9XG4gICAgICA+XG4gICAgICAgIHsvKtCg0LDQt9C00LXQuyDQkdGD0LvQutC4LiovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgICAgPGgyIHJlZj17YnVuc1JlZn0gY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gbWItNlwiPlxuICAgICAgICAgICAg0JHRg9C70LrQuFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAgey8qINCa0LDRgNGC0L7Rh9C60LggKi99XG4gICAgICAgICAgICB7YnVucy5tYXAoXG4gICAgICAgICAgICAgIChwcm9kdWN0OiBUSW5ncmVkaWVudCk6IFJlYWN0RWxlbWVudCA9PiAoXG4gICAgICAgICAgICAgICAgPEluZ3JlZGllbnRDYXJkIGtleT17cHJvZHVjdC5faWR9IG1vZGVsPXtwcm9kdWN0fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Lyog0KDQsNC30LTQtdC7INCd0LDRh9C40L3QutC4LiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxuICAgICAgICAgIDxoMiByZWY9e21haW5zUmVmfSBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bSBtYi02XCI+XG4gICAgICAgICAgICDQndCw0YfQuNC90LrQsFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAgey8qINCa0LDRgNGC0L7Rh9C60LggKi99XG4gICAgICAgICAgICB7bWFpbnMubWFwKFxuICAgICAgICAgICAgICAocHJvZHVjdDogVEluZ3JlZGllbnQpOiBSZWFjdEVsZW1lbnQgPT4gKFxuICAgICAgICAgICAgICAgIDxJbmdyZWRpZW50Q2FyZCBrZXk9e3Byb2R1Y3QuX2lkfSBtb2RlbD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8q0KDQsNC30LTQtdC7INCh0L7Rg9GB0YsuKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj5cbiAgICAgICAgICA8aDIgcmVmPXtzYXVjZXNSZWZ9IGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtIG1iLTZcIj5cbiAgICAgICAgICAgINCh0L7Rg9GB0YtcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIHsvKiDQmtCw0YDRgtC+0YfQutC4ICovfVxuICAgICAgICAgICAge3NhdWNlcy5tYXAoXG4gICAgICAgICAgICAgIChwcm9kdWN0OiBUSW5ncmVkaWVudCk6IFJlYWN0RWxlbWVudCA9PiAoXG4gICAgICAgICAgICAgICAgPEluZ3JlZGllbnRDYXJkIGtleT17cHJvZHVjdC5faWR9IG1vZGVsPXtwcm9kdWN0fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuLy8g0JLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3Ri9C5INC60L7QvNC/0L7QvdC10L3RgiDQtNC70Y8g0L7QtNC90L7QuSDQutCw0YDRgtC+0YfQutC4INC40L3Qs9GA0LXQtNC40LXQvdGC0LAgKNCY0Jgg0YHRjdC90LrRgSlcbmNvbnN0IEluZ3JlZGllbnRDYXJkOiBGQzxUSW5ncmVkaWVudENhcmRQcm9wcz4gPSAoeyBtb2RlbCB9KTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IGNvdW50ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+XG4gICAgc2VsZWN0SW5ncmVkaWVudENvdW50KHN0YXRlKShtb2RlbC5faWQpXG4gICk7XG5cbiAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnUmVmXSA9IHVzZURyYWc8XG4gICAgVEluZ3JlZGllbnQsXG4gICAgdW5rbm93bixcbiAgICB7IGlzRHJhZ2dpbmc6IGJvb2xlYW4gfVxuICA+KHtcbiAgICB0eXBlOiAnaW5ncmVkaWVudCcsXG4gICAgaXRlbTogbW9kZWwsXG4gICAgY29sbGVjdDogKFxuICAgICAgbW9uaXRvcjogRHJhZ1NvdXJjZU1vbml0b3I8VEluZ3JlZGllbnQsIHVua25vd24+XG4gICAgKTogeyBpc0RyYWdnaW5nOiBib29sZWFuIH0gPT4gKHtcbiAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyAob3BhY2l0eTogMC40KSDQtNC70Y8g0L/QvtC70YPQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0LguXG4gIGNvbnN0IG9wYWNpdHlTdHlsZSA9IGlzRHJhZ2dpbmcgPyB7IG9wYWNpdHk6IDAuNCB9IDoge307XG5cbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIHJlZj17KG5vZGU6IEhUTUxFbGVtZW50IHwgbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgIGRyYWdSZWYobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBzdHlsZT17b3BhY2l0eVN0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgIGRhdGEtdGVzdGlkPVwiaW5ncmVkaWVudC1jYXJkXCJcbiAgICAgIG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcbiAgICAgICAgbmF2aWdhdGUoYC9pbmdyZWRpZW50cy8ke21vZGVsLl9pZH1gLCB7IHN0YXRlOiB7IGJhY2tncm91bmQ6IGxvY2F0aW9uIH0gfSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHsvKiDQodGH0ZHRgtGH0LjQuiAtINC00LXRhNC+0LvRgtC+0Lwg0LHRg9C00LXRgiAxIC0g0LzQuNC90LjQvNCw0LvRjNC90L7QtSDQvtGC0L7QsdGA0LDQttC10L3QuNC1LiBcbiAgICAgIDAgLSDQvdC1INC+0YLQvtCx0YDQsNC20LDQtdGC0YHRjy4gKi99XG4gICAgICB7Y291bnQgPiAwICYmIDxDb3VudGVyIGNvdW50PXtjb3VudH0gc2l6ZT1cImRlZmF1bHRcIiBleHRyYUNsYXNzPVwibS0xXCIgLz59XG5cbiAgICAgIHsvKiDQmtCw0YDRgtC40L3QutCwINC40L3Qs9GA0LXQtNC40LXQvdGC0LAgKi99XG4gICAgICA8aW1nIHNyYz17bW9kZWwuaW1hZ2V9IGFsdD17bW9kZWwubmFtZX0gY2xhc3NOYW1lPVwicGwtNCBwci00IG1iLTFcIiAvPlxuXG4gICAgICB7Lyog0KbQtdC90LAg0YHQviDQt9C90LDRh9C60L7QvCDQutCw0LzQtdGI0LrQsCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJpY2V9IG1iLTFgfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHQgbXItMlwiPnttb2RlbC5wcmljZX08L3NwYW4+XG4gICAgICAgIDxDdXJyZW5jeUljb24gdHlwZT1cInByaW1hcnlcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiDQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0L/RgNC+0LTRg9C60YLQsCAqL31cbiAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLmluZ3JlZGllbnRfbmFtZX0gdGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0YH0+XG4gICAgICAgIHttb2RlbC5uYW1lfVxuICAgICAgPC9wPlxuICAgIDwvbGk+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvVXNlcnMvZGFrYXNoaXIvZ2l0aHViL3JlYWN0LWJ1cmdlci1qcy1zdGFydGVyL3NyYy9jb21wb25lbnRzL2J1cmdlci1pbmdyZWRpZW50cy9idXJnZXItaW5ncmVkaWVudHMudHN4In0=