"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    const isAuth = false;\n    if (!isAuth && request.nextUrl.pathname.startsWith(\"/dashboard\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/login\", request.url));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFHcEMsU0FBU0MsV0FBV0MsT0FBb0I7SUFDN0MsTUFBTUMsU0FBUztJQUVmLElBQUksQ0FBQ0EsVUFBVUQsUUFBUUUsT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxlQUFlO1FBQ2hFLE9BQU9OLHFEQUFZQSxDQUFDTyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVTixRQUFRTyxHQUFHO0lBQzVEO0lBRUEsT0FBT1QscURBQVlBLENBQUNVLElBQUk7QUFDMUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXgvRGVza3RvcC9Qcm9qZWN0L05leHQtanMvc3JjL21pZGRsZXdhcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IGlzQXV0aCA9IGZhbHNlO1xuXG4gIGlmICghaXNBdXRoICYmIHJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2Rhc2hib2FyZFwiKSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9sb2dpblwiLCByZXF1ZXN0LnVybCkpO1xuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJpc0F1dGgiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJuZXh0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});