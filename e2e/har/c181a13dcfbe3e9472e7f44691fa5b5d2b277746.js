import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/burger-constructor/burger-constructor.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=12f80588";
import { useDrop, useDrag } from "/node_modules/.vite/deps/react-dnd.js?v=12f80588";
import { useNavigate, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=12f80588";
import { selectUser } from "/src/services/auth/slice.ts";
import {
  addIngredient,
  removeIngredient,
  moveIngredient,
  selectConstructorBun,
  selectConstructorIngredients,
  selectTotalPrice
} from "/src/services/burgerConstructor/slice.ts";
import { useAppDispatch, useAppSelector } from "/src/services/hooks.ts";
import { checkoutOrder } from "/src/services/order/action.ts";
import styles from "/src/components/burger-constructor/burger-constructor.module.css";
export const BurgerConstructor = () => {
  _s();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector(selectUser);
  const bun = useAppSelector(selectConstructorBun);
  const constructorIngredients = useAppSelector(selectConstructorIngredients);
  const totalPrice = useAppSelector(selectTotalPrice);
  const [, dropTargetRef] = useDrop({
    accept: "ingredient",
    drop: (item) => {
      dispatch(addIngredient(item));
    }
  });
  const handleOrderSubmit = () => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      return;
    }
    dispatch(checkoutOrder());
  };
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      ref: (node) => {
        if (node) {
          dropTargetRef(node);
        }
      },
      "data-testid": "constructor-drop-target",
      className: styles.burger_constructor,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: `${styles.burger_list} pl-4`, children: [
          bun ? /* @__PURE__ */ jsxDEV(
            ConstructorElement,
            {
              type: "top",
              isLocked: true,
              text: `${bun.name} (верх)`,
              price: bun.price,
              thumbnail: bun.image,
              extraClass: "ml-8"
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
              lineNumber: 91,
              columnNumber: 9
            },
            this
          ) : /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `${styles.empty_bun_top} ml-8 text text_type_main-default text_color_inactive`,
              children: "Выберите булки"
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
              lineNumber: 100,
              columnNumber: 9
            },
            this
          ),
          constructorIngredients.length > 0 ? /* @__PURE__ */ jsxDEV("ul", { className: `${styles.ingredients_set} custom-scroll`, children: constructorIngredients.map(
            (base, index) => /* @__PURE__ */ jsxDEV(
              ConstructorIngredient,
              {
                id: base.id,
                index,
                text: base.name,
                price: base.price,
                thumbnail: base.image,
                extraClass: "ml-2",
                handleClose: () => {
                  dispatch(removeIngredient(base.id));
                }
              },
              base.id,
              false,
              {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
                lineNumber: 112,
                columnNumber: 13
              },
              this
            )
          ) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
            lineNumber: 109,
            columnNumber: 9
          }, this) : /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `${styles.empty_ingredients} ml-8 text text_type_main-default text_color_inactive`,
              children: "Выберите начинки и соусы"
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
              lineNumber: 129,
              columnNumber: 9
            },
            this
          ),
          bun ? /* @__PURE__ */ jsxDEV(
            ConstructorElement,
            {
              type: "bottom",
              isLocked: true,
              text: `${bun.name} (низ)`,
              price: bun.price,
              thumbnail: bun.image,
              extraClass: "ml-8"
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
              lineNumber: 138,
              columnNumber: 9
            },
            this
          ) : /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `${styles.empty_bun_bottom} ml-8 text text_type_main-default text_color_inactive`,
              children: "Выберите булки"
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
              lineNumber: 147,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: `${styles.place_order} mt-10`, children: /* @__PURE__ */ jsxDEV("div", { className: `${styles.price_order} pr-6`, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-medium mr-2", children: totalPrice }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
            lineNumber: 158,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: `${styles.currency_icon} mr-10`, children: /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
            lineNumber: 160,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
            lineNumber: 159,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: /* @__PURE__ */ jsxDEV(
            Button,
            {
              htmlType: "button",
              type: "primary",
              size: "large",
              onClick: handleOrderSubmit,
              disabled: !bun,
              "data-testid": "order-button",
              children: "Оформить заказ"
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
              lineNumber: 163,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
            lineNumber: 162,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
          lineNumber: 157,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
          lineNumber: 156,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
      lineNumber: 78,
      columnNumber: 5
    },
    this
  );
};
_s(BurgerConstructor, "XX6LV8UouxkLNBxJTjklaFecI4o=", false, function() {
  return [useAppDispatch, useNavigate, useLocation, useAppSelector, useAppSelector, useAppSelector, useAppSelector, useDrop];
});
_c = BurgerConstructor;
const ConstructorIngredient = ({
  id,
  index,
  text,
  price,
  thumbnail,
  handleClose
}) => {
  _s2();
  const dispatch = useAppDispatch();
  const [{ isDragging }, dragRef] = useDrag(
    {
      type: "sort_ingredient",
      item: { id, index },
      // Передаем id и текущий индекс элемента в массиве
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }
  );
  const [, dropRef] = useDrop({
    accept: "sort_ingredient",
    hover: (item) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      dispatch(moveIngredient({ dragIndex, hoverIndex }));
      item.index = hoverIndex;
    }
  });
  const opacityStyle = isDragging ? { opacity: 0 } : { opacity: 1 };
  return (
    // Объединяем dragRef и dropRef на одном элементе
    // чтобы он стал и перетаскиваемым, и принимающим одновременно.
    /* @__PURE__ */ jsxDEV(
      "li",
      {
        ref: (node) => {
          if (node) {
            dragRef(node);
            dropRef(node);
          }
        },
        style: opacityStyle,
        className: styles.ingredients_base,
        children: [
          /* @__PURE__ */ jsxDEV(DragIcon, { type: "primary" }, void 0, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
            lineNumber: 240,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV(
            ConstructorElement,
            {
              text,
              price,
              thumbnail,
              extraClass: "ml-2",
              handleClose
            },
            void 0,
            false,
            {
              fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
              lineNumber: 241,
              columnNumber: 7
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx",
        lineNumber: 230,
        columnNumber: 5
      },
      this
    )
  );
};
_s2(ConstructorIngredient, "1hhxsAVjG16D4v+iHlBzTZOgdNI=", false, function() {
  return [useAppDispatch, useDrag, useDrop];
});
_c2 = ConstructorIngredient;
var _c, _c2;
$RefreshReg$(_c, "BurgerConstructor");
$RefreshReg$(_c2, "ConstructorIngredient");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/burger-constructor/burger-constructor.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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LFdBQVk7QUFHOUI3QyxlQUFTVixlQUFlLEVBQUVzRCxXQUFXQyxXQUFXLENBQUMsQ0FBQztBQUdsRG5DLFdBQUtlLFFBQVFvQjtBQUFBQSxJQUNmO0FBQUEsRUFDRixDQUFDO0FBR0QsUUFBTUMsZUFBZVQsYUFBYSxFQUFFVSxTQUFTLEVBQUUsSUFBSSxFQUFFQSxTQUFTLEVBQUU7QUFFaEU7QUFBQTtBQUFBO0FBQUEsSUFHRTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsS0FBSyxDQUFDakMsU0FBcUM7QUFDekMsY0FBSUEsTUFBTTtBQUNSd0Isb0JBQVF4QixJQUFJO0FBQ1o0QixvQkFBUTVCLElBQUk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0EsT0FBT2dDO0FBQUFBLFFBQ1AsV0FBV2pELE9BQU9tRDtBQUFBQSxRQUVsQjtBQUFBLGlDQUFDLFlBQVMsTUFBSyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXdCO0FBQUEsVUFDeEI7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxjQUNBLFlBQVc7QUFBQSxjQUNYO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUsyQjtBQUFBO0FBQUE7QUFBQSxNQWhCN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBa0JBO0FBQUE7QUFFSjtBQUFFWixJQXBFSUosdUJBQXNEO0FBQUEsVUFRekN0QyxnQkFFaUJWLFNBYWRELE9BQU87QUFBQTtBQUFBLE1BdkJ2QmlEO0FBQXNELElBQUFpQixJQUFBQztBQUFBLGFBQUFELElBQUE7QUFBQSxhQUFBQyxLQUFBIiwibmFtZXMiOlsiQ29uc3RydWN0b3JFbGVtZW50IiwiQ3VycmVuY3lJY29uIiwiQnV0dG9uIiwiRHJhZ0ljb24iLCJ1c2VEcm9wIiwidXNlRHJhZyIsInVzZU5hdmlnYXRlIiwidXNlTG9jYXRpb24iLCJzZWxlY3RVc2VyIiwiYWRkSW5ncmVkaWVudCIsInJlbW92ZUluZ3JlZGllbnQiLCJtb3ZlSW5ncmVkaWVudCIsInNlbGVjdENvbnN0cnVjdG9yQnVuIiwic2VsZWN0Q29uc3RydWN0b3JJbmdyZWRpZW50cyIsInNlbGVjdFRvdGFsUHJpY2UiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiY2hlY2tvdXRPcmRlciIsInN0eWxlcyIsIkJ1cmdlckNvbnN0cnVjdG9yIiwiX3MiLCJkaXNwYXRjaCIsIm5hdmlnYXRlIiwibG9jYXRpb24iLCJ1c2VyIiwiYnVuIiwiY29uc3RydWN0b3JJbmdyZWRpZW50cyIsInRvdGFsUHJpY2UiLCJkcm9wVGFyZ2V0UmVmIiwiYWNjZXB0IiwiZHJvcCIsIml0ZW0iLCJoYW5kbGVPcmRlclN1Ym1pdCIsInN0YXRlIiwiZnJvbSIsIm5vZGUiLCJidXJnZXJfY29uc3RydWN0b3IiLCJidXJnZXJfbGlzdCIsIm5hbWUiLCJwcmljZSIsImltYWdlIiwiZW1wdHlfYnVuX3RvcCIsImxlbmd0aCIsImluZ3JlZGllbnRzX3NldCIsIm1hcCIsImJhc2UiLCJpbmRleCIsImlkIiwiZW1wdHlfaW5ncmVkaWVudHMiLCJlbXB0eV9idW5fYm90dG9tIiwicGxhY2Vfb3JkZXIiLCJwcmljZV9vcmRlciIsImN1cnJlbmN5X2ljb24iLCJDb25zdHJ1Y3RvckluZ3JlZGllbnQiLCJ0ZXh0IiwidGh1bWJuYWlsIiwiaGFuZGxlQ2xvc2UiLCJfczIiLCJpc0RyYWdnaW5nIiwiZHJhZ1JlZiIsInR5cGUiLCJjb2xsZWN0IiwibW9uaXRvciIsImRyb3BSZWYiLCJob3ZlciIsImRyYWdJbmRleCIsImhvdmVySW5kZXgiLCJvcGFjaXR5U3R5bGUiLCJvcGFjaXR5IiwiaW5ncmVkaWVudHNfYmFzZSIsIl9jIiwiX2MyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImJ1cmdlci1jb25zdHJ1Y3Rvci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29uc3RydWN0b3JFbGVtZW50LFxuICBDdXJyZW5jeUljb24sXG4gIEJ1dHRvbixcbiAgRHJhZ0ljb24sXG59IGZyb20gJ0BrcmdhYS9yZWFjdC1kZXZlbG9wZXItYnVyZ2VyLXVpLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlRHJvcCwgdXNlRHJhZyB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gJ0Avc2VydmljZXMvYXV0aC9zbGljZSc7XG5pbXBvcnQge1xuICBhZGRJbmdyZWRpZW50LFxuICByZW1vdmVJbmdyZWRpZW50LFxuICBtb3ZlSW5ncmVkaWVudCxcbiAgc2VsZWN0Q29uc3RydWN0b3JCdW4sXG4gIHNlbGVjdENvbnN0cnVjdG9ySW5ncmVkaWVudHMsXG4gIHNlbGVjdFRvdGFsUHJpY2UsXG59IGZyb20gJ0Avc2VydmljZXMvYnVyZ2VyQ29uc3RydWN0b3Ivc2xpY2UnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9zZXJ2aWNlcy9ob29rcyc7XG5pbXBvcnQgeyBjaGVja291dE9yZGVyIH0gZnJvbSAnQC9zZXJ2aWNlcy9vcmRlci9hY3Rpb24nO1xuXG5pbXBvcnQgdHlwZSB7IFRDb25zdHJ1Y3RvckluZ3JlZGllbnQgfSBmcm9tICdAL3NlcnZpY2VzL2J1cmdlckNvbnN0cnVjdG9yL3NsaWNlJztcbmltcG9ydCB0eXBlIHsgVEluZ3JlZGllbnQgfSBmcm9tICdAL3V0aWxzL2J1cmdlci1hcGknO1xuaW1wb3J0IHR5cGUgeyBGQywgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBEcmFnU291cmNlTW9uaXRvciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXJnZXItY29uc3RydWN0b3IubW9kdWxlLmNzcyc7XG5cbnR5cGUgVENvbnN0cnVjdG9ySW5ncmVkaWVudFByb3BzID0ge1xuICBpZDogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xuICBoYW5kbGVDbG9zZTogKCkgPT4gdm9pZDtcbiAgZXh0cmFDbGFzcz86IHN0cmluZztcbn07XG5cbnR5cGUgVERyYWdJdGVtID0ge1xuICBpZDogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IEJ1cmdlckNvbnN0cnVjdG9yID0gKCk6IFJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgY29uc3QgdXNlciA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdFVzZXIpO1xuICBjb25zdCBidW4gPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RDb25zdHJ1Y3RvckJ1bik7XG4gIGNvbnN0IGNvbnN0cnVjdG9ySW5ncmVkaWVudHMgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RDb25zdHJ1Y3RvckluZ3JlZGllbnRzKTtcbiAgY29uc3QgdG90YWxQcmljZSA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdFRvdGFsUHJpY2UpO1xuXG4gIC8vIGFjY2VwdDogJ2luZ3JlZGllbnQnIOKAlCDQu9C+0LLQuNC8INGC0L7Qu9GM0LrQviDRgtC1INGN0LvQtdC80LXQvdGC0YssINGDINC60L7RgtC+0YDRi9GFINGC0LjQvyDRgdC+0LLQv9Cw0LTQsNC10YIg0YEgdXNlRHJhZyDQutCw0YDRgtC+0YfQutC4LlxuICAvLyBkcm9wOiAoaXRlbSkg4oCUINCyINC80L7QvNC10L3RgiDQvtGC0L/Rg9GB0LrQsNC90LjRjyDQvNGL0YjQuCDQsdC10YDQtdC8INC/0YDQuNC70LXRgtC10LLRiNC40Lkg0LjQvdCz0YDQtdC00LjQtdC90YIg0Lgg0LHRgNC+0YHQsNC10Lwg0LXQs9C+INCyIFJlZHV4LlxuICBjb25zdCBbLCBkcm9wVGFyZ2V0UmVmXSA9IHVzZURyb3A8VEluZ3JlZGllbnQsIHZvaWQsIHVua25vd24+KHtcbiAgICBhY2NlcHQ6ICdpbmdyZWRpZW50JyxcbiAgICBkcm9wOiAoaXRlbTogVEluZ3JlZGllbnQpOiB2b2lkID0+IHtcbiAgICAgIGRpc3BhdGNoKGFkZEluZ3JlZGllbnQoaXRlbSkpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZU9yZGVyU3VibWl0ID0gKCk6IHZvaWQgPT4ge1xuICAgIC8vINCV0YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQndCVINCw0LLRgtC+0YDQuNC30L7QstCw0L0g4oCUINCx0LvQvtC60LjRgNGD0LXQvCDQt9Cw0L/RgNC+0YEg0Lgg0YPQstC+0LTQuNC8INC90LAg0LvQvtCz0LjQvS5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIG5hdmlnYXRlKCcvbG9naW4nLCB7IHN0YXRlOiB7IGZyb206IGxvY2F0aW9uIH0gfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vINCV0YHQu9C4INCw0LLRgtC+0YDQuNC30L7QstCw0L1cbiAgICAvLyDQkNGA0LPRg9C80LXQvdGC0Ysg0L3QtSDQv9C10YDQtdC00LDQtdC8IChfKSxcbiAgICAvLyDRgtCw0Log0LrQsNC6INGB0LDQvdC60LAg0YHQsNC80LAg0YHQvtCx0LXRgNC10YIg0L3Rg9C20L3Ri9C1IElEINC40Lcg0YHRgtC+0YDQsCDRh9C10YDQtdC3IGdldFN0YXRlKClcbiAgICBkaXNwYXRjaChjaGVja291dE9yZGVyKCkpO1xuICB9O1xuXG4gIC8vIGNvbnNvbGUubG9nKCfQlNCw0L3QvdGL0LUg0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwINC40LcgUmVkdXg6JywgeyBidW4sIGNvbnN0cnVjdG9ySW5ncmVkaWVudHMgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgcmVmPXsobm9kZTogSFRNTEVsZW1lbnQgfCBudWxsKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgZHJvcFRhcmdldFJlZihub2RlKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIC8vIGRhdGEtdGVzdGlkPVwiY29uc3RydWN0b3ItZHJvcC10YXJnZXRcIiDQtNC70Y8g0LfQvtC90Ysg0YHQsdGA0L7RgdCwINC40L3Qs9GA0LXQtNC40LXQvdGC0L7QsiDQsiBQbGF5d3JpZ2h0XG4gICAgICBkYXRhLXRlc3RpZD1cImNvbnN0cnVjdG9yLWRyb3AtdGFyZ2V0XCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlcl9jb25zdHJ1Y3Rvcn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1cmdlcl9saXN0fSBwbC00YH0+XG4gICAgICAgIHsvKiDQktC10YDRhdC90Y/RjyDQsdGD0LvQutCwINC40LvQuCDQt9Cw0LPQu9GD0YjQutCwICovfVxuICAgICAgICB7YnVuID8gKFxuICAgICAgICAgIDxDb25zdHJ1Y3RvckVsZW1lbnRcbiAgICAgICAgICAgIHR5cGU9XCJ0b3BcIlxuICAgICAgICAgICAgaXNMb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICB0ZXh0PXtgJHtidW4ubmFtZX0gKNCy0LXRgNGFKWB9XG4gICAgICAgICAgICBwcmljZT17YnVuLnByaWNlfVxuICAgICAgICAgICAgdGh1bWJuYWlsPXtidW4uaW1hZ2V9XG4gICAgICAgICAgICBleHRyYUNsYXNzPVwibWwtOFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5lbXB0eV9idW5fdG9wfSBtbC04IHRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCB0ZXh0X2NvbG9yX2luYWN0aXZlYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDQktGL0LHQtdGA0LjRgtC1INCx0YPQu9C60LhcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7Lyog0KHQv9C40YHQvtC6INC90LDRh9C40L3QvtC6INC40LvQuCDQt9Cw0LPQu9GD0YjQutCwICovfVxuICAgICAgICB7Y29uc3RydWN0b3JJbmdyZWRpZW50cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbmdyZWRpZW50c19zZXR9IGN1c3RvbS1zY3JvbGxgfT5cbiAgICAgICAgICAgIHtjb25zdHJ1Y3RvckluZ3JlZGllbnRzLm1hcChcbiAgICAgICAgICAgICAgKGJhc2U6IFRDb25zdHJ1Y3RvckluZ3JlZGllbnQsIGluZGV4OiBudW1iZXIpOiBSZWFjdEVsZW1lbnQgPT4gKFxuICAgICAgICAgICAgICAgIDxDb25zdHJ1Y3RvckluZ3JlZGllbnRcbiAgICAgICAgICAgICAgICAgIC8vINCY0YHQv9C+0LvRjNC30YPQtdC8INGD0L3QuNC60LDQu9GM0L3Ri9C5IGlkINC40LcgbmFub2lkINCyINC60LDRh9C10YHRgtCy0LUg0LrQu9GO0YfQsFxuICAgICAgICAgICAgICAgICAga2V5PXtiYXNlLmlkfVxuICAgICAgICAgICAgICAgICAgaWQ9e2Jhc2UuaWR9XG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICB0ZXh0PXtiYXNlLm5hbWV9XG4gICAgICAgICAgICAgICAgICBwcmljZT17YmFzZS5wcmljZX1cbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbD17YmFzZS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGV4dHJhQ2xhc3M9XCJtbC0yXCJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZUluZ3JlZGllbnQoYmFzZS5pZCkpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZW1wdHlfaW5ncmVkaWVudHN9IG1sLTggdGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IHRleHRfY29sb3JfaW5hY3RpdmVgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCS0YvQsdC10YDQuNGC0LUg0L3QsNGH0LjQvdC60Lgg0Lgg0YHQvtGD0YHRi1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiDQndC40LbQvdGP0Y8g0LHRg9C70LrQsCDQuNC70Lgg0LfQsNCz0LvRg9GI0LrQsCAqL31cbiAgICAgICAge2J1biA/IChcbiAgICAgICAgICA8Q29uc3RydWN0b3JFbGVtZW50XG4gICAgICAgICAgICB0eXBlPVwiYm90dG9tXCJcbiAgICAgICAgICAgIGlzTG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgdGV4dD17YCR7YnVuLm5hbWV9ICjQvdC40LcpYH1cbiAgICAgICAgICAgIHByaWNlPXtidW4ucHJpY2V9XG4gICAgICAgICAgICB0aHVtYm5haWw9e2J1bi5pbWFnZX1cbiAgICAgICAgICAgIGV4dHJhQ2xhc3M9XCJtbC04XCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmVtcHR5X2J1bl9ib3R0b219IG1sLTggdGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IHRleHRfY29sb3JfaW5hY3RpdmVgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCS0YvQsdC10YDQuNGC0LUg0LHRg9C70LrQuFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiDQkdC70L7QuiDRgdGC0L7QuNC80L7RgdGC0Lgg0Lgg0LrQvdC+0L/QutCwINC30LDQutCw0LfQsCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucGxhY2Vfb3JkZXJ9IG10LTEwYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJpY2Vfb3JkZXJ9IHByLTZgfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9kaWdpdHMtbWVkaXVtIG1yLTJcIj57dG90YWxQcmljZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY3VycmVuY3lfaWNvbn0gbXItMTBgfT5cbiAgICAgICAgICAgIDxDdXJyZW5jeUljb24gdHlwZT1cInByaW1hcnlcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9yZGVyU3VibWl0fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWJ1bn0gLy8g0JrQvdC+0L/QutCwINC30LDQsdC70L7QutC40YDQvtCy0LDQvdCwLCDQtNC+INC/0LXRgNC10YLQsNGB0LrQuNCy0LDQvdC40Y8g0LjQvdCz0YDQsNC00LjQtdC90YLQsC5cbiAgICAgICAgICAgICAgLy8gZGF0YS10ZXN0aWQ9XCJvcmRlci1idXR0b25cIiDQtNC70Y8g0LrQu9C40LrQsCDQv9GA0Lgg0L7RhNC+0YDQvNC70LXQvdC40Lgg0LfQsNC60LDQt9CwINCyIFBsYXl3cmlnaHRcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJvcmRlci1idXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQntGE0L7RgNC80LjRgtGMINC30LDQutCw0LdcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG4vLyDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC+0LTQvdC+0Lkg0L/QtdGA0LXRgtCw0YHQutC40LLQsNC10LzQvtC5INGB0YLRgNC+0YfQutC4INC90LDRh9C40L3QutC4L9GB0L7Rg9GB0LBcbmNvbnN0IENvbnN0cnVjdG9ySW5ncmVkaWVudDogRkM8VENvbnN0cnVjdG9ySW5ncmVkaWVudFByb3BzPiA9ICh7XG4gIGlkLFxuICBpbmRleCxcbiAgdGV4dCxcbiAgcHJpY2UsXG4gIHRodW1ibmFpbCxcbiAgaGFuZGxlQ2xvc2UsXG59KTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAvLyDQndCw0YHRgtGA0LDQuNCy0LDQtdC8IHVzZURyYWcg0LTQu9GPINC/0LXRgNC10YLQsNGB0LrQuNCy0LDQvdC40Y8g0LLQvdGD0YLRgNC4INGB0L/QuNGB0LrQsC5cbiAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnUmVmXSA9IHVzZURyYWc8VERyYWdJdGVtLCB1bmtub3duLCB7IGlzRHJhZ2dpbmc6IGJvb2xlYW4gfT4oXG4gICAge1xuICAgICAgdHlwZTogJ3NvcnRfaW5ncmVkaWVudCcsXG4gICAgICBpdGVtOiB7IGlkLCBpbmRleCB9LCAvLyDQn9C10YDQtdC00LDQtdC8IGlkINC4INGC0LXQutGD0YnQuNC5INC40L3QtNC10LrRgSDRjdC70LXQvNC10L3RgtCwINCyINC80LDRgdGB0LjQstC1XG4gICAgICBjb2xsZWN0OiAoXG4gICAgICAgIG1vbml0b3I6IERyYWdTb3VyY2VNb25pdG9yPFREcmFnSXRlbSwgdW5rbm93bj5cbiAgICAgICk6IHsgaXNEcmFnZ2luZzogYm9vbGVhbiB9ID0+ICh7XG4gICAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICAgICAgfSksXG4gICAgfVxuICApO1xuXG4gIC8vINCd0LDRgdGC0YDQsNC40LLQsNC10LwgdXNlRHJvcCwg0YfRgtC+0LHRiyDQu9C+0LLQuNGC0Ywg0YHQvtGB0LXQtNC90LjQtSDRjdC70LXQvNC10L3RgtGLINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LhcbiAgY29uc3QgWywgZHJvcFJlZl0gPSB1c2VEcm9wPFREcmFnSXRlbSwgdm9pZCwgdW5rbm93bj4oe1xuICAgIGFjY2VwdDogJ3NvcnRfaW5ncmVkaWVudCcsXG4gICAgaG92ZXI6IChpdGVtOiBURHJhZ0l0ZW0pOiB2b2lkID0+IHtcbiAgICAgIC8vIGRyYWdJbmRleCDigJQg0LjQvdC00LXQutGBINGN0LvQtdC80LXQvdGC0LAsINC60L7RgtC+0YDRi9C5INC80Ysg0YLQsNGJ0LjQvCZcbiAgICAgIGNvbnN0IGRyYWdJbmRleCA9IGl0ZW0uaW5kZXg7XG4gICAgICAvLyBob3ZlckluZGV4IOKAlCDQuNC90LTQtdC60YEg0Y3Qu9C10LzQtdC90YLQsCwg0L3QsNC0INC60L7RgtC+0YDRi9C8INGB0LXQudGH0LDRgSDQvdCw0YXQvtC00LjRgtGB0Y8g0LrRg9GA0YHQvtGAXG4gICAgICBjb25zdCBob3ZlckluZGV4ID0gaW5kZXg7XG5cbiAgICAgIC8vINCV0YHQu9C4INC90LDQstC10LvQuCDQvdCwINGB0LDQvNC+0LPQviDRgdC10LHRjyDigJQg0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdC8ISEhISFcbiAgICAgIGlmIChkcmFnSW5kZXggPT09IGhvdmVySW5kZXgpIHJldHVybjtcblxuICAgICAgLy8g0JTQuNGB0L/QsNGC0YfQuNC8INGN0LrRiNC10L0g0L/QtdGA0LXQvNC10YnQtdC90LjRjy5cbiAgICAgIGRpc3BhdGNoKG1vdmVJbmdyZWRpZW50KHsgZHJhZ0luZGV4LCBob3ZlckluZGV4IH0pKTtcblxuICAgICAgLy8g0JTQu9GPINC/0LvQsNCy0L3QvtC5INGB0L7RgNGC0LjRgNC+0LLQutC4LlxuICAgICAgaXRlbS5pbmRleCA9IGhvdmVySW5kZXg7XG4gICAgfSxcbiAgfSk7XG5cbiAgLy8g0Y3Qu9C10LzQtdC90YIg0LTQtdC70LDQtdC8ICDQv9GA0L7Qt9GA0LDRh9C90YvQvFxuICBjb25zdCBvcGFjaXR5U3R5bGUgPSBpc0RyYWdnaW5nID8geyBvcGFjaXR5OiAwIH0gOiB7IG9wYWNpdHk6IDEgfTtcblxuICByZXR1cm4gKFxuICAgIC8vINCe0LHRitC10LTQuNC90Y/QtdC8IGRyYWdSZWYg0LggZHJvcFJlZiDQvdCwINC+0LTQvdC+0Lwg0Y3Qu9C10LzQtdC90YLQtVxuICAgIC8vINGH0YLQvtCx0Ysg0L7QvSDRgdGC0LDQuyDQuCDQv9C10YDQtdGC0LDRgdC60LjQstCw0LXQvNGL0LwsINC4INC/0YDQuNC90LjQvNCw0Y7RidC40Lwg0L7QtNC90L7QstGA0LXQvNC10L3QvdC+LlxuICAgIDxsaVxuICAgICAgcmVmPXsobm9kZTogSFRNTExJRWxlbWVudCB8IG51bGwpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICBkcmFnUmVmKG5vZGUpO1xuICAgICAgICAgIGRyb3BSZWYobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBzdHlsZT17b3BhY2l0eVN0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5ncmVkaWVudHNfYmFzZX1cbiAgICA+XG4gICAgICA8RHJhZ0ljb24gdHlwZT1cInByaW1hcnlcIiAvPlxuICAgICAgPENvbnN0cnVjdG9yRWxlbWVudFxuICAgICAgICB0ZXh0PXt0ZXh0fVxuICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgIHRodW1ibmFpbD17dGh1bWJuYWlsfVxuICAgICAgICBleHRyYUNsYXNzPVwibWwtMlwiXG4gICAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgIC8+XG4gICAgPC9saT5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9kYWthc2hpci9naXRodWIvcmVhY3QtYnVyZ2VyLWpzLXN0YXJ0ZXIvc3JjL2NvbXBvbmVudHMvYnVyZ2VyLWNvbnN0cnVjdG9yL2J1cmdlci1jb25zdHJ1Y3Rvci50c3gifQ==