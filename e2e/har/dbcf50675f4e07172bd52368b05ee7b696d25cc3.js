import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/feed-status/feed-status.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12f80588"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import {
  selectFeedOrders,
  selectFeedTotal,
  selectFeedTotalToday
} from "/src/services/feed/slice.ts";
import { useAppSelector } from "/src/services/hooks.ts";
import styles from "/src/components/feed-status/feed-status.module.css";
const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};
export const FeedStatus = () => {
  _s();
  const orders = useAppSelector(selectFeedOrders);
  const total = useAppSelector(selectFeedTotal);
  const totalToday = useAppSelector(selectFeedTotalToday);
  const doneNumbers = orders.filter((order) => order.status === "done").map((order) => order.number);
  const pendingNumbers = orders.filter(
    (order) => order.status === "pending" || order.status === "created"
  ).map((order) => order.number);
  const doneColumns = chunkArray(doneNumbers, 10).slice(0, 2);
  const pendingColumns = chunkArray(pendingNumbers, 10).slice(0, 2);
  return /* @__PURE__ */ jsxDEV("div", { className: styles.container, children: [
    /* @__PURE__ */ jsxDEV("div", { className: styles.board, children: [
      /* @__PURE__ */ jsxDEV("div", { className: styles.status_block, children: [
        /* @__PURE__ */ jsxDEV("h3", { className: `${styles.title} text text_type_main-medium`, children: "Готово:" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: styles.columns_grid, children: doneColumns.map(
          (column, colIndex) => /* @__PURE__ */ jsxDEV("ul", { className: styles.number_list, children: column.map(
            (num) => /* @__PURE__ */ jsxDEV(
              "li",
              {
                className: `${styles.number_done} text text_type_digits-default`,
                children: num
              },
              num,
              false,
              {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
                lineNumber: 57,
                columnNumber: 19
              },
              this
            )
          ) }, `done-col-${colIndex}`, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: styles.status_block, children: [
        /* @__PURE__ */ jsxDEV("h3", { className: `${styles.title} text text_type_main-medium`, children: "В работе:" }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: styles.columns_grid, children: pendingColumns.map(
          (column, colIndex) => /* @__PURE__ */ jsxDEV("ul", { className: styles.number_list, children: column.map(
            (num) => /* @__PURE__ */ jsxDEV(
              "li",
              {
                className: `${styles.number_pending} text text_type_digits-default`,
                children: num
              },
              num,
              false,
              {
                fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
                lineNumber: 80,
                columnNumber: 19
              },
              this
            )
          ) }, `pending-col-${colIndex}`, false, {
            fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text text_type_main-medium", children: "Выполнено за все время:" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: `${styles.counter_digits} text text_type_digits-large`, children: total }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text text_type_main-medium", children: "Выполнено за сегодня:" }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: `${styles.counter_digits} text text_type_digits-large`, children: totalToday }, void 0, false, {
        fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
};
_s(FeedStatus, "zvbtamzx9aSVFYFoWSXdJzCz1XM=", false, function() {
  return [useAppSelector, useAppSelector, useAppSelector];
});
_c = FeedStatus;
var _c;
$RefreshReg$(_c, "FeedStatus");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/dakashir/github/react-burger-js-starter/src/components/feed-status/feed-status.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaURVOztBQWpEVjtBQUFBLEVBQ0VBO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLE9BQ0s7QUFDUCxTQUFTQyxzQkFBc0I7QUFLL0IsT0FBT0MsWUFBWTtBQUduQixNQUFNQyxhQUFhLENBQUtDLE9BQWlCQyxTQUFrQztBQUN6RSxRQUFNQyxTQUEwQjtBQUNoQyxXQUFTQyxJQUFJLEdBQUdBLElBQUlILE1BQU1JLFFBQVFELEtBQUtGLE1BQU07QUFDM0NDLFdBQU9HLEtBQUtMLE1BQU1NLE1BQU1ILEdBQUdBLElBQUlGLElBQUksQ0FBQztBQUFBLEVBQ3RDO0FBQ0EsU0FBT0M7QUFDVDtBQUVPLGFBQU1LLGFBQWlCQSxNQUFvQjtBQUFBQyxLQUFBO0FBRWhELFFBQU1DLFNBQVNaLGVBQWVILGdCQUFnQjtBQUM5QyxRQUFNZ0IsUUFBUWIsZUFBZUYsZUFBZTtBQUM1QyxRQUFNZ0IsYUFBYWQsZUFBZUQsb0JBQW9CO0FBR3RELFFBQU1nQixjQUFjSCxPQUNqQkksT0FBTyxDQUFDQyxVQUFzQkEsTUFBTUMsV0FBVyxNQUFNLEVBQ3JEQyxJQUFJLENBQUNGLFVBQXNCQSxNQUFNRyxNQUFNO0FBRzFDLFFBQU1DLGlCQUFpQlQsT0FDcEJJO0FBQUFBLElBQ0MsQ0FBQ0MsVUFBc0JBLE1BQU1DLFdBQVcsYUFBYUQsTUFBTUMsV0FBVztBQUFBLEVBQ3hFLEVBQ0NDLElBQUksQ0FBQ0YsVUFBc0JBLE1BQU1HLE1BQU07QUFHMUMsUUFBTUUsY0FBY3BCLFdBQVdhLGFBQWEsRUFBRSxFQUFFTixNQUFNLEdBQUcsQ0FBQztBQUMxRCxRQUFNYyxpQkFBaUJyQixXQUFXbUIsZ0JBQWdCLEVBQUUsRUFBRVosTUFBTSxHQUFHLENBQUM7QUFFaEUsU0FDRSx1QkFBQyxTQUFJLFdBQVdSLE9BQU91QixXQUVyQjtBQUFBLDJCQUFDLFNBQUksV0FBV3ZCLE9BQU93QixPQUVyQjtBQUFBLDZCQUFDLFNBQUksV0FBV3hCLE9BQU95QixjQUNyQjtBQUFBLCtCQUFDLFFBQUcsV0FBVyxHQUFHekIsT0FBTzBCLEtBQUssK0JBQStCLHVCQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW9FO0FBQUEsUUFDcEUsdUJBQUMsU0FBSSxXQUFXMUIsT0FBTzJCLGNBQ3BCTixzQkFBWUg7QUFBQUEsVUFDWCxDQUFDVSxRQUF1QkMsYUFDdEIsdUJBQUMsUUFBZ0MsV0FBVzdCLE9BQU84QixhQUNoREYsaUJBQU9WO0FBQUFBLFlBQ04sQ0FBQ2EsUUFDQztBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUVDLFdBQVcsR0FBRy9CLE9BQU9nQyxXQUFXO0FBQUEsZ0JBRS9CRDtBQUFBQTtBQUFBQSxjQUhJQTtBQUFBQSxjQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFLQTtBQUFBLFVBRUosS0FWTyxZQUFZRixRQUFRLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBV0E7QUFBQSxRQUVKLEtBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFpQkE7QUFBQSxXQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBb0JBO0FBQUEsTUFHQSx1QkFBQyxTQUFJLFdBQVc3QixPQUFPeUIsY0FDckI7QUFBQSwrQkFBQyxRQUFHLFdBQVcsR0FBR3pCLE9BQU8wQixLQUFLLCtCQUErQix5QkFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFzRTtBQUFBLFFBQ3RFLHVCQUFDLFNBQUksV0FBVzFCLE9BQU8yQixjQUNwQkwseUJBQWVKO0FBQUFBLFVBQ2QsQ0FBQ1UsUUFBdUJDLGFBQ3RCLHVCQUFDLFFBQW1DLFdBQVc3QixPQUFPOEIsYUFDbkRGLGlCQUFPVjtBQUFBQSxZQUNOLENBQUNhLFFBQ0M7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFFQyxXQUFXLEdBQUcvQixPQUFPaUMsY0FBYztBQUFBLGdCQUVsQ0Y7QUFBQUE7QUFBQUEsY0FISUE7QUFBQUEsY0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBS0E7QUFBQSxVQUVKLEtBVk8sZUFBZUYsUUFBUSxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVdBO0FBQUEsUUFFSixLQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaUJBO0FBQUEsV0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW9CQTtBQUFBLFNBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E4Q0E7QUFBQSxJQUdBLHVCQUFDLFNBQ0M7QUFBQSw2QkFBQyxRQUFHLFdBQVUsOEJBQTZCLHVDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWtFO0FBQUEsTUFDbEUsdUJBQUMsT0FBRSxXQUFXLEdBQUc3QixPQUFPa0MsY0FBYyxnQ0FBaUN0QixtQkFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE2RTtBQUFBLFNBRi9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FHQTtBQUFBLElBR0EsdUJBQUMsU0FDQztBQUFBLDZCQUFDLFFBQUcsV0FBVSw4QkFBNkIscUNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZ0U7QUFBQSxNQUNoRSx1QkFBQyxPQUFFLFdBQVcsR0FBR1osT0FBT2tDLGNBQWMsZ0NBQ25DckIsd0JBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVBO0FBQUEsU0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBS0E7QUFBQSxPQTlERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBK0RBO0FBRUo7QUFBRUgsR0F4RldELFlBQWM7QUFBQSxVQUVWVixnQkFDREEsZ0JBQ0tBLGNBQWM7QUFBQTtBQUFBLEtBSnRCVTtBQUFjLElBQUEwQjtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJzZWxlY3RGZWVkT3JkZXJzIiwic2VsZWN0RmVlZFRvdGFsIiwic2VsZWN0RmVlZFRvdGFsVG9kYXkiLCJ1c2VBcHBTZWxlY3RvciIsInN0eWxlcyIsImNodW5rQXJyYXkiLCJhcnJheSIsInNpemUiLCJjaHVua3MiLCJpIiwibGVuZ3RoIiwicHVzaCIsInNsaWNlIiwiRmVlZFN0YXR1cyIsIl9zIiwib3JkZXJzIiwidG90YWwiLCJ0b3RhbFRvZGF5IiwiZG9uZU51bWJlcnMiLCJmaWx0ZXIiLCJvcmRlciIsInN0YXR1cyIsIm1hcCIsIm51bWJlciIsInBlbmRpbmdOdW1iZXJzIiwiZG9uZUNvbHVtbnMiLCJwZW5kaW5nQ29sdW1ucyIsImNvbnRhaW5lciIsImJvYXJkIiwic3RhdHVzX2Jsb2NrIiwidGl0bGUiLCJjb2x1bW5zX2dyaWQiLCJjb2x1bW4iLCJjb2xJbmRleCIsIm51bWJlcl9saXN0IiwibnVtIiwibnVtYmVyX2RvbmUiLCJudW1iZXJfcGVuZGluZyIsImNvdW50ZXJfZGlnaXRzIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZmVlZC1zdGF0dXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHNlbGVjdEZlZWRPcmRlcnMsXG4gIHNlbGVjdEZlZWRUb3RhbCxcbiAgc2VsZWN0RmVlZFRvdGFsVG9kYXksXG59IGZyb20gJ0Avc2VydmljZXMvZmVlZC9zbGljZSc7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0Avc2VydmljZXMvaG9va3MnO1xuXG5pbXBvcnQgdHlwZSB7IFRGZWVkT3JkZXIgfSBmcm9tICdAL3V0aWxzL2J1cmdlci1hcGknO1xuaW1wb3J0IHR5cGUgeyBGQywgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZmVlZC1zdGF0dXMubW9kdWxlLmNzcyc7XG5cbi8vINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90LDRjyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0YDQsNC30LHQuNC10L3QuNGPINC80LDRgdGB0LjQstCwINC90LAg0YfQsNC90LrQuCAo0L/QvtC00LzQsNGB0YHQuNCy0YspINGE0LjQutGB0LjRgNC+0LLQsNC90L3QvtCz0L4g0YDQsNC30LzQtdGA0LBcbmNvbnN0IGNodW5rQXJyYXkgPSA8VCw+KGFycmF5OiBBcnJheTxUPiwgc2l6ZTogbnVtYmVyKTogQXJyYXk8QXJyYXk8VD4+ID0+IHtcbiAgY29uc3QgY2h1bmtzOiBBcnJheTxBcnJheTxUPj4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGNodW5rcy5wdXNoKGFycmF5LnNsaWNlKGksIGkgKyBzaXplKSk7XG4gIH1cbiAgcmV0dXJuIGNodW5rcztcbn07XG5cbmV4cG9ydCBjb25zdCBGZWVkU3RhdHVzOiBGQyA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICAvLyAxLiDQlNC+0YHRgtCw0LXQvCDQstGB0LUg0LfQsNC60LDQt9GLINC4INGB0YfQtdGC0YfQuNC60Lgg0LjQtyBmZWVkU2xpY2VcbiAgY29uc3Qgb3JkZXJzID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0RmVlZE9yZGVycyk7XG4gIGNvbnN0IHRvdGFsID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0RmVlZFRvdGFsKTtcbiAgY29uc3QgdG90YWxUb2RheSA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdEZlZWRUb3RhbFRvZGF5KTtcblxuICAvLyAyLiDQntGC0LHQuNGA0LDQtdC8INGC0L7Qu9GM0LrQviDQs9C+0YLQvtCy0YvQtSDQt9Cw0LrQsNC30YsgKHN0YXR1cyA9PT0gJ2RvbmUnKSDQuCDQsdC10YDQtdC8INGC0L7Qu9GM0LrQviDQvdC+0LzQtdGA0LBcbiAgY29uc3QgZG9uZU51bWJlcnMgPSBvcmRlcnNcbiAgICAuZmlsdGVyKChvcmRlcjogVEZlZWRPcmRlcikgPT4gb3JkZXIuc3RhdHVzID09PSAnZG9uZScpXG4gICAgLm1hcCgob3JkZXI6IFRGZWVkT3JkZXIpID0+IG9yZGVyLm51bWJlcik7XG5cbiAgLy8gMy4g0J7RgtCx0LjRgNCw0LXQvCDQt9Cw0LrQsNC30Ysg0LIg0YDQsNCx0L7RgtC1IChzdGF0dXMgPT09ICdwZW5kaW5nJyDQuNC70LggJ2NyZWF0ZWQnKVxuICBjb25zdCBwZW5kaW5nTnVtYmVycyA9IG9yZGVyc1xuICAgIC5maWx0ZXIoXG4gICAgICAob3JkZXI6IFRGZWVkT3JkZXIpID0+IG9yZGVyLnN0YXR1cyA9PT0gJ3BlbmRpbmcnIHx8IG9yZGVyLnN0YXR1cyA9PT0gJ2NyZWF0ZWQnXG4gICAgKVxuICAgIC5tYXAoKG9yZGVyOiBURmVlZE9yZGVyKSA9PiBvcmRlci5udW1iZXIpO1xuXG4gIC8vIDQuINCg0LDQt9Cx0LjQstCw0LXQvCDQvdCwINC60L7Qu9C+0L3QutC4INC/0L4gMTAg0YjRgtGD0Log0Lgg0LbQtdGB0YLQutC+INC70LjQvNC40YLQuNGA0YPQtdC8INC00L4gMiDQutC+0LvQvtC90L7QuiDQv9C+INCi0JdcbiAgY29uc3QgZG9uZUNvbHVtbnMgPSBjaHVua0FycmF5KGRvbmVOdW1iZXJzLCAxMCkuc2xpY2UoMCwgMik7XG4gIGNvbnN0IHBlbmRpbmdDb2x1bW5zID0gY2h1bmtBcnJheShwZW5kaW5nTnVtYmVycywgMTApLnNsaWNlKDAsIDIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgey8qINCU0L7RgdC60LAg0YHRgtCw0YLRg9GB0L7Qsjog0JPQvtGC0L7QstC+INC4INCSINGA0LDQsdC+0YLQtSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9hcmR9PlxuICAgICAgICB7Lyog0JHQu9C+0LogXCLQk9C+0YLQvtCy0L5cIiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNfYmxvY2t9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Ake3N0eWxlcy50aXRsZX0gdGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW1gfT7Qk9C+0YLQvtCy0L46PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbnNfZ3JpZH0+XG4gICAgICAgICAgICB7ZG9uZUNvbHVtbnMubWFwKFxuICAgICAgICAgICAgICAoY29sdW1uOiBBcnJheTxudW1iZXI+LCBjb2xJbmRleDogbnVtYmVyKTogUmVhY3RFbGVtZW50ID0+IChcbiAgICAgICAgICAgICAgICA8dWwga2V5PXtgZG9uZS1jb2wtJHtjb2xJbmRleH1gfSBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJfbGlzdH0+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKG51bTogbnVtYmVyKTogUmVhY3RFbGVtZW50ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubnVtYmVyX2RvbmV9IHRleHQgdGV4dF90eXBlX2RpZ2l0cy1kZWZhdWx0YH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bnVtfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qINCR0LvQvtC6IFwi0JIg0YDQsNCx0L7RgtC1XCIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzX2Jsb2NrfT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGl0bGV9IHRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtYH0+0JIg0YDQsNCx0L7RgtC1OjwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW5zX2dyaWR9PlxuICAgICAgICAgICAge3BlbmRpbmdDb2x1bW5zLm1hcChcbiAgICAgICAgICAgICAgKGNvbHVtbjogQXJyYXk8bnVtYmVyPiwgY29sSW5kZXg6IG51bWJlcik6IFJlYWN0RWxlbWVudCA9PiAoXG4gICAgICAgICAgICAgICAgPHVsIGtleT17YHBlbmRpbmctY29sLSR7Y29sSW5kZXh9YH0gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyX2xpc3R9PlxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChudW06IG51bWJlcik6IFJlYWN0RWxlbWVudCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e251bX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm51bWJlcl9wZW5kaW5nfSB0ZXh0IHRleHRfdHlwZV9kaWdpdHMtZGVmYXVsdGB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge251bX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiDQktGL0LLQvtC0INGB0YfQtdGC0YfQuNC60LA6INCS0YvQv9C+0LvQvdC10L3QviDQt9CwINCy0YHQtSDQstGA0LXQvNGPICovfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtXCI+0JLRi9C/0L7Qu9C90LXQvdC+INC30LAg0LLRgdC1INCy0YDQtdC80Y86PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnRlcl9kaWdpdHN9IHRleHQgdGV4dF90eXBlX2RpZ2l0cy1sYXJnZWB9Pnt0b3RhbH08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qINCS0YvQstC+0LQg0YHRh9C10YLRh9C40LrQsDog0JLRi9C/0L7Qu9C90LXQvdC+INC30LAg0YHQtdCz0L7QtNC90Y8gKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW1cIj7QktGL0L/QvtC70L3QtdC90L4g0LfQsCDRgdC10LPQvtC00L3Rjzo8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGVyX2RpZ2l0c30gdGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWxhcmdlYH0+XG4gICAgICAgICAge3RvdGFsVG9kYXl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJmaWxlIjoiL1VzZXJzL2Rha2FzaGlyL2dpdGh1Yi9yZWFjdC1idXJnZXItanMtc3RhcnRlci9zcmMvY29tcG9uZW50cy9mZWVkLXN0YXR1cy9mZWVkLXN0YXR1cy50c3gifQ==