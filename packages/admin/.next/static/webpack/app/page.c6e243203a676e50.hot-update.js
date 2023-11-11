"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/common */ \"(app-pages-browser)/../common/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [traceData, setTraceData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [eventId, setEventId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [traces, setTraces] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"http://localhost:9000/traces\").then((res)=>{\n            res.json().then((data)=>{\n                setTraces(data);\n            });\n        });\n    }, []);\n    function handleAddTrace(e) {\n        e.preventDefault();\n    }\n    function handleRemoveTrace(e) {\n        e.preventDefault();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col  mx-auto border border-slate-200 p-10 items-center justify-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Add trace\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannyborisov/workspace/next-sockets-module-fd-example/packages/admin/app/page.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_common__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        placeholder: \"Enter message error here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannyborisov/workspace/next-sockets-module-fd-example/packages/admin/app/page.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_common__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: handleAddTrace,\n                        label: \"Add trace\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannyborisov/workspace/next-sockets-module-fd-example/packages/admin/app/page.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannyborisov/workspace/next-sockets-module-fd-example/packages/admin/app/page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col  mx-auto border border-slate-200 p-10 items-center justify-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Remove trace\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannyborisov/workspace/next-sockets-module-fd-example/packages/admin/app/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: (e)=>{\n                            setEventId(e.target.value);\n                        },\n                        placeholder: \"Enter ID\",\n                        children: traces.map((trace)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: trace.eventId,\n                                children: trace.eventId\n                            }, trace.eventId, false, {\n                                fileName: \"/Users/dannyborisov/workspace/next-sockets-module-fd-example/packages/admin/app/page.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/dannyborisov/workspace/next-sockets-module-fd-example/packages/admin/app/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_common__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onChange: handleRemoveTrace,\n                        variant: \"error\",\n                        label: \"Remove trace\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannyborisov/workspace/next-sockets-module-fd-example/packages/admin/app/page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannyborisov/workspace/next-sockets-module-fd-example/packages/admin/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"aQvIGuSff/BwfAboksjWQHIeehQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFDQTtBQUU3QixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkNDLGdEQUFTQSxDQUFDO1FBQ1JRLE1BQU0sZ0NBQWdDQyxJQUFJLENBQUMsQ0FBQ0M7WUFDMUNBLElBQUlDLElBQUksR0FBR0YsSUFBSSxDQUFDLENBQUNHO2dCQUNmTCxVQUFVSztZQUNaO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTQyxlQUFlQyxDQUFDO1FBQ3ZCQSxFQUFFQyxjQUFjO0lBQ2xCO0lBRUEsU0FBU0Msa0JBQWtCRixDQUFDO1FBQzFCQSxFQUFFQyxjQUFjO0lBQ2xCO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDRTtnQkFBS0MsV0FBVTs7a0NBQ2QsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNyQiw4Q0FBS0E7d0JBQUNzQixhQUFZOzs7Ozs7a0NBQ25CLDhEQUFDdkIsK0NBQU1BO3dCQUFDd0IsU0FBU1I7d0JBQWdCUyxPQUFNOzs7Ozs7Ozs7Ozs7MEJBR3pDLDhEQUFDTDtnQkFBS0MsV0FBVTs7a0NBQ2QsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNJO3dCQUNDQyxVQUFVLENBQUNWOzRCQUNUVCxXQUFXUyxFQUFFVyxNQUFNLENBQUNDLEtBQUs7d0JBQzNCO3dCQUNBTixhQUFZO2tDQUVYZCxPQUFPcUIsR0FBRyxDQUFDLENBQUNDOzRCQUNYLHFCQUNFLDhEQUFDQztnQ0FBMkJILE9BQU9FLE1BQU14QixPQUFPOzBDQUM3Q3dCLE1BQU14QixPQUFPOytCQURId0IsTUFBTXhCLE9BQU87Ozs7O3dCQUk5Qjs7Ozs7O2tDQUVGLDhEQUFDUCwrQ0FBTUE7d0JBQ0wyQixVQUFVUjt3QkFDVmMsU0FBUTt3QkFDUlIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0FuRHdCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiQGFwcC9jb21tb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RyYWNlRGF0YSwgc2V0VHJhY2VEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXZlbnRJZCwgc2V0RXZlbnRJZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdHJhY2VzLCBzZXRUcmFjZXNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwL3RyYWNlc1wiKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRUcmFjZXMoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRyYWNlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVUcmFjZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIG14LWF1dG8gYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcC0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgPGgyPkFkZCB0cmFjZTwvaDI+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIG1lc3NhZ2UgZXJyb3IgaGVyZVwiIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQWRkVHJhY2V9IGxhYmVsPVwiQWRkIHRyYWNlXCIgLz5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgbXgtYXV0byBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBwLTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxuICAgICAgICA8aDI+UmVtb3ZlIHRyYWNlPC9oMj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0RXZlbnRJZChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIElEXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFjZXMubWFwKCh0cmFjZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3RyYWNlLmV2ZW50SWR9IHZhbHVlPXt0cmFjZS5ldmVudElkfT5cbiAgICAgICAgICAgICAgICB7dHJhY2UuZXZlbnRJZH1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSZW1vdmVUcmFjZX1cbiAgICAgICAgICB2YXJpYW50PVwiZXJyb3JcIlxuICAgICAgICAgIGxhYmVsPVwiUmVtb3ZlIHRyYWNlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInRyYWNlRGF0YSIsInNldFRyYWNlRGF0YSIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwidHJhY2VzIiwic2V0VHJhY2VzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJoYW5kbGVBZGRUcmFjZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVJlbW92ZVRyYWNlIiwiZm9ybSIsImNsYXNzTmFtZSIsImgyIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwibGFiZWwiLCJzZWxlY3QiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidHJhY2UiLCJvcHRpb24iLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});