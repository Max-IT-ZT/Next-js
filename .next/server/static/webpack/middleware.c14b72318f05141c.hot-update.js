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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    if (request.nextUrl.pathname.startsWith(\"/dashboard\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/login\", request.url));\n    }\n    if (request.nextUrl.pathname === \"/\") {\n        const url = request.nextUrl.clone();\n        const group = Math.random() > 0.5 ? \"variant-a\" : \"variant-b\";\n        url.pathname = `/${group}`;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(url);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBRWpELFNBQVNDLFdBQVdDLE9BQW9CO0lBQzdDLElBQUlBLFFBQVFDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsZUFBZTtRQUNyRCxPQUFPTCxxREFBWUEsQ0FBQ00sUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVUwsUUFBUU0sR0FBRztJQUM1RDtJQUVBLElBQUlOLFFBQVFDLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLEtBQUs7UUFDcEMsTUFBTUksTUFBTU4sUUFBUUMsT0FBTyxDQUFDTSxLQUFLO1FBQ2pDLE1BQU1DLFFBQVFDLEtBQUtDLE1BQU0sS0FBSyxNQUFNLGNBQWM7UUFDbERKLElBQUlKLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRU0sT0FBTztRQUMxQixPQUFPVixxREFBWUEsQ0FBQ00sUUFBUSxDQUFDRTtJQUMvQjtJQUVBLE9BQU9SLHFEQUFZQSxDQUFDYSxJQUFJO0FBQzFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQUk7QUFDaEIsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL21heC9EZXNrdG9wL1Byb2plY3QvTmV4dC1qcy9zcmMvbWlkZGxld2FyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UsIE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9kYXNoYm9hcmRcIikpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvbG9naW5cIiwgcmVxdWVzdC51cmwpKTtcbiAgfVxuXG4gIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09IFwiL1wiKSB7XG4gICAgY29uc3QgdXJsID0gcmVxdWVzdC5uZXh0VXJsLmNsb25lKCk7XG4gICAgY29uc3QgZ3JvdXAgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJ2YXJpYW50LWFcIiA6IFwidmFyaWFudC1iXCI7XG4gICAgdXJsLnBhdGhuYW1lID0gYC8ke2dyb3VwfWA7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdCh1cmwpO1xuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFtcIi9cIl0sXG59O1xuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiY2xvbmUiLCJncm91cCIsIk1hdGgiLCJyYW5kb20iLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});