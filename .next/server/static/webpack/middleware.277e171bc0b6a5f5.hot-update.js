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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    if (request.nextUrl.pathname.startsWith(\"/dashboard\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/login\", request.url));\n    }\n    if (request.nextUrl.pathname === \"/\") {\n        const url = request.nextUrl.clone();\n        const group = Math.random() > 0.5 ? \"variant-a\" : \"variant-b\";\n        url.pathname = `/${group}`;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(url);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBR3BDLFNBQVNDLFdBQVdDLE9BQW9CO0lBQzdDLElBQUlBLFFBQVFDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsZUFBZTtRQUNyRCxPQUFPTCxxREFBWUEsQ0FBQ00sUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVUwsUUFBUU0sR0FBRztJQUM1RDtJQUVBLElBQUlOLFFBQVFDLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLEtBQUs7UUFDcEMsTUFBTUksTUFBTU4sUUFBUUMsT0FBTyxDQUFDTSxLQUFLO1FBQ2pDLE1BQU1DLFFBQVFDLEtBQUtDLE1BQU0sS0FBSyxNQUFNLGNBQWM7UUFDbERKLElBQUlKLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRU0sT0FBTztRQUMxQixPQUFPVixxREFBWUEsQ0FBQ00sUUFBUSxDQUFDRTtJQUMvQjtJQUVBLE9BQU9SLHFEQUFZQSxDQUFDYSxJQUFJO0FBQzFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQUk7QUFDaEIsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL21heC9EZXNrdG9wL1Byb2plY3QvTmV4dC1qcy9zcmMvbWlkZGxld2FyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgaWYgKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2Rhc2hib2FyZFwiKSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9sb2dpblwiLCByZXF1ZXN0LnVybCkpO1xuICB9XG5cbiAgaWYgKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gXCIvXCIpIHtcbiAgICBjb25zdCB1cmwgPSByZXF1ZXN0Lm5leHRVcmwuY2xvbmUoKTtcbiAgICBjb25zdCBncm91cCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcInZhcmlhbnQtYVwiIDogXCJ2YXJpYW50LWJcIjtcbiAgICB1cmwucGF0aG5hbWUgPSBgLyR7Z3JvdXB9YDtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KHVybCk7XG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogW1wiL1wiXSxcbn07XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJjbG9uZSIsImdyb3VwIiwiTWF0aCIsInJhbmRvbSIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});