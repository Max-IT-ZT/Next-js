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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    // Наприклад: якщо юзер не авторизований → редірект на /login\n    const isAuth = false;\n    if (!isAuth && request.nextUrl.pathname.startsWith(\"/dashboard\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/login\", request.url));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFHcEMsU0FBU0MsV0FBV0MsT0FBb0I7SUFDN0MsNkRBQTZEO0lBQzdELE1BQU1DLFNBQVM7SUFFZixJQUFJLENBQUNBLFVBQVVELFFBQVFFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsZUFBZTtRQUNoRSxPQUFPTixxREFBWUEsQ0FBQ08sUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVU4sUUFBUU8sR0FBRztJQUM1RDtJQUVBLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJO0FBQzFCIiwic291cmNlcyI6WyIvVXNlcnMvbWF4L0Rlc2t0b3AvUHJvamVjdC9OZXh0LWpzL3NyYy9taWRkbGV3YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICAvLyDQndCw0L/RgNC40LrQu9Cw0LQ6INGP0LrRidC+INGO0LfQtdGAINC90LUg0LDQstGC0L7RgNC40LfQvtCy0LDQvdC40Lkg4oaSINGA0LXQtNGW0YDQtdC60YIg0L3QsCAvbG9naW5cbiAgY29uc3QgaXNBdXRoID0gZmFsc2U7XG5cbiAgaWYgKCFpc0F1dGggJiYgcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZGFzaGJvYXJkXCIpKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL2xvZ2luXCIsIHJlcXVlc3QudXJsKSk7XG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImlzQXV0aCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsIm5leHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});