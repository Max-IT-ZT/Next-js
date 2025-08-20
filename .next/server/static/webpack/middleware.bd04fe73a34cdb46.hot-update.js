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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    const { pathname } = request.nextUrl;\n    // Якщо користувач зайшов без вказаної мови\n    if (pathname === \"/\") {\n        const locale = request.headers.get(\"accept-language\")?.split(\",\")[0] || \"en\";\n        const url = request.nextUrl.clone();\n        url.pathname = `/${locale}`;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(url);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBR3BDLFNBQVNDLFdBQVdDLE9BQW9CO0lBQzdDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdELFFBQVFFLE9BQU87SUFFcEMsMkNBQTJDO0lBQzNDLElBQUlELGFBQWEsS0FBSztRQUNwQixNQUFNRSxTQUNKSCxRQUFRSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0JDLE1BQU0sSUFBSSxDQUFDLEVBQUUsSUFBSTtRQUMzRCxNQUFNQyxNQUFNUCxRQUFRRSxPQUFPLENBQUNNLEtBQUs7UUFDakNELElBQUlOLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRUUsUUFBUTtRQUMzQixPQUFPTCxxREFBWUEsQ0FBQ1csUUFBUSxDQUFDRjtJQUMvQjtJQUVBLE9BQU9ULHFEQUFZQSxDQUFDWSxJQUFJO0FBQzFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQUk7QUFDaEIsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL21heC9EZXNrdG9wL1Byb2plY3QvTmV4dC1qcy9zcmMvbWlkZGxld2FyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcmVxdWVzdC5uZXh0VXJsO1xuXG4gIC8vINCv0LrRidC+INC60L7RgNC40YHRgtGD0LLQsNGHINC30LDQudGI0L7QsiDQsdC10Lcg0LLQutCw0LfQsNC90L7RlyDQvNC+0LLQuFxuICBpZiAocGF0aG5hbWUgPT09IFwiL1wiKSB7XG4gICAgY29uc3QgbG9jYWxlID1cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJhY2NlcHQtbGFuZ3VhZ2VcIik/LnNwbGl0KFwiLFwiKVswXSB8fCBcImVuXCI7XG4gICAgY29uc3QgdXJsID0gcmVxdWVzdC5uZXh0VXJsLmNsb25lKCk7XG4gICAgdXJsLnBhdGhuYW1lID0gYC8ke2xvY2FsZX1gO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QodXJsKTtcbiAgfVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbXCIvXCJdLFxufTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInBhdGhuYW1lIiwibmV4dFVybCIsImxvY2FsZSIsImhlYWRlcnMiLCJnZXQiLCJzcGxpdCIsInVybCIsImNsb25lIiwicmVkaXJlY3QiLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});