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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    console.log(\"Middleware спрацював на:\", request.nextUrl.pathname);\n    if (request.nextUrl.pathname.startsWith(\"/dashboard\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/login\", request.url));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/dashboard/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBR3BDLFNBQVNDLFdBQVdDLE9BQW9CO0lBQzdDQyxRQUFRQyxHQUFHLENBQUMsNEJBQTRCRixRQUFRRyxPQUFPLENBQUNDLFFBQVE7SUFDaEUsSUFBSUosUUFBUUcsT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxlQUFlO1FBQ3JELE9BQU9QLHFEQUFZQSxDQUFDUSxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVUCxRQUFRUSxHQUFHO0lBQzVEO0lBRUEsT0FBT1YscURBQVlBLENBQUNXLElBQUk7QUFDMUI7QUFDTyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7S0FBb0I7QUFDaEMsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL21heC9EZXNrdG9wL1Byb2plY3QvTmV4dC1qcy9zcmMvbWlkZGxld2FyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc29sZS5sb2coXCJNaWRkbGV3YXJlINGB0L/RgNCw0YbRjtCy0LDQsiDQvdCwOlwiLCByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUpO1xuICBpZiAocmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZGFzaGJvYXJkXCIpKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL2xvZ2luXCIsIHJlcXVlc3QudXJsKSk7XG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFtcIi9kYXNoYm9hcmQvOnBhdGgqXCJdLFxufTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});