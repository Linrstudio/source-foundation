/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css ***!
  \*************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  touch-action: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"AAAA;;;EAGE;AACF;;EAEE,2BAA2B;EAC3B,6CAA6C;EAC7C,yBAAyB;EAEzB,kBAAkB;EAElB,sBAAsB;EACtB,iBAAiB;EAEjB,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE;AACF;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;;EAEE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE;AACF;EACE,OAAO;EACP,WAAW;AACb;AACA;;EAEE;AACF;EACE,UAAU;EACV,QAAQ;AACV;AACA;EACE,SAAS;AACX;AACA;EAEE,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;;EAGE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE;AACF;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;AACf;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;;EAEE;AACF;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,wDAAwD;AAC1D;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE;AACF;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,4EAA4E;AAC9E;AACA;EACE,yEAAyE;AAC3E;AACA;EACE;AACF;;EAEE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;;EAEE,WAAW;EACX,WAAW;EACX,SAAS;EACT,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE;AACF;EACE,mBAAmB;AACrB;AACA;;;EAGE,mBAAmB;AACrB;AACA;;EAEE;AACF;;EAGE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,OAAO;EACP,WAAW;AACb;AACA;EAEE,+BAA+B;AACjC;AACA;EAEE,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,MAAM;EACN,UAAU;AACZ;AACA;EAEE,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EAEE,4BAA4B;AAC9B;AACA;EACE,UAAU;EACV,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EAEE,6BAA6B;EAC7B,SAAS;EACT,YAAY;AACd;AACA;EAEE,6BAA6B;EAC7B,QAAQ;EACR,WAAW;AACb;AACA;EAEE,4BAA4B;EAC5B,UAAU;EACV,YAAY;AACd;AACA;EAEE,8BAA8B;EAC9B,SAAS;EACT,WAAW;AACb","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.m-0 {\n  margin: 0px;\n}\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-4 {\n  margin-right: 1rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.block {\n  display: block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.w-1 {\n  width: 0.25rem;\n}\n.w-1\\/5 {\n  width: 20%;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-24 {\n  width: 6rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-3 {\n  flex: 3 3 0%;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.resize {\n  resize: both;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.items-baseline {\n  align-items: baseline;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-0 {\n  gap: 0px;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-none {\n  border-radius: 0px;\n}\n.rounded-l {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.border {\n  border-width: 1px;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.text-right {\n  text-align: right;\n}\n.align-baseline {\n  vertical-align: baseline;\n}\n.align-top {\n  vertical-align: top;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.italic {\n  font-style: italic;\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.opacity-70 {\n  opacity: 0.7;\n}\n.opacity-75 {\n  opacity: 0.75;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n:root {\n    --spacing: 0.5rem 1rem;\n    --slider-thumb-size: calc(var(--line-height-md) + var(--sy-xs));\n    --slider-track-size: calc(var(--slider-thumb-size) / 4);\n    --slider-margin: var(--slider-thumb-size);\n\n    --primary: #0C75D0;\n    --primary-text: #65a5dd;\n    --info: #078380;\n    --success: #078650;\n    --warning: #C15600;\n    --danger: #E81B00;\n\n    --font-size-base: 12px;\n    --line-height-base: 16px;\n\n    --font-size-md: 14px;\n    --line-height-md: 20px;\n    --font-size-lg: 16px;\n    --line-height-lg: 24px;\n\n    --radii-base: 4px;\n    --radii-md: calc(var(--radii-base) + 2px);\n    --radii-md: calc(var(--radii-base) + 4px);\n\n    --sx-xs4: 2px;\n    --sx-xs3: 4px;\n    --sx-xs2: 6px;\n    --sx-xs: 8px;\n    --sx-sm: 12px;\n    --sx-base: 16px;\n    --sx-md: 20px;\n    --sx-lg: 24px;\n    --sx-xl: 28px;\n    --sx-xl2: 32px;\n    --sx-xl3: 40px;\n\n    --sy-xs4: 1px;\n    --sy-xs3: 2px;\n    --sy-xs2: 4px;\n    --sy-xs: 6px;\n    --sy-sm: 8px;\n    --sy-base: 12px;\n    --sy-md: 16px;\n    --sy-lg: 20px;\n    --sy-xl: 24px;\n    --sy-xl2: 28px;\n    --sy-xl3: 32px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    background-color: var(--figma-color-bg-secondary);\n    font-size: 12px;\n    font-size: var(--font-size-base);\n    line-height: 16px;\n    line-height: var(--line-height-base);\n    color: var(--figma-color-text);\n    margin: 0;\n    overflow: hidden;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\na {\n    color: #0C75D0;\n    color: var(--primary);\n}\n\na:hover {\n    -webkit-text-decoration: underline;\n    text-decoration: underline;\n}\n\n.figma-bg-secondary {\n    background-color: var(--figma-color-bg-secondary);\n}\n\n.card {\n    --light-1: #f8fafc;\n    --light-2: #e1e7ea;\n    --light-3: #e7ecee;\n    --light-4: #edf1f3;\n    --light-5: #f2f6f7;\n\n    --dark-1: #121516;\n    --dark-2: #171a1c;\n    --dark-3: #1c2022;\n    --dark-4: #202527;\n    --dark-5: #252a2d;\n\n    background-color: var(--figma-color-bg);\n    border-radius: calc(4px + 4px);\n    border-radius: var(--radii-md);\n    padding: 12px 16px;\n    padding: var(--sy-base) var(--sx-base) ;\n    gap: 12px;\n    gap: var(--sy-base);\n    display: flex;\n    flex-direction: column;\n}\n\n.card-stiky {\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 10;\n    margin: 0px;\n    border-radius: 0px;\n    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\n.color-box {\n    min-height: 2rem;\n    ;\n    padding: 0.5rem;\n    color: white;\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.color-box.l-1 {\n    background-color: var(--light-1);\n}\n\n.color-box.l-2 {\n    background-color: var(--light-2);\n}\n\n.color-box.l-3 {\n    background-color: var(--light-3);\n}\n\n.color-box.l-4 {\n    background-color: var(--light-4);\n}\n\n.color-box.l-5 {\n    background-color: var(--light-5);\n}\n\n.color-box.d-1 {\n    background-color: var(--dark-1);\n}\n\n.color-box.d-2 {\n    background-color: var(--dark-2);\n}\n\n.color-box.d-3 {\n    background-color: var(--dark-3);\n}\n\n.color-box.d-4 {\n    background-color: var(--dark-4);\n}\n\n.color-box.d-5 {\n    background-color: var(--dark-5);\n}\n\n.color-box.a-primary {\n    background-color: #0C75D0;\n    background-color: var(--primary);\n}\n\n.color-box.a-info {\n    background-color: #078380;\n    background-color: var(--info);\n}\n\n.color-box.a-success {\n    background-color: #078650;\n    background-color: var(--success);\n}\n\n.color-box.a-warning {\n    background-color: #C15600;\n    background-color: var(--warning);\n}\n\n.color-box.a-danger {\n    background-color: #E81B00;\n    background-color: var(--danger);\n}\n\n.color-box .token-value {\n    display: block;\n    opacity: 0.7;\n    font-size: var(--font-size-xs);\n    line-height: var(--line-height-xs);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: auto;\n    margin: 0;\n}\n\nbutton {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border-radius: 4px;\n    border-radius: var(--radii-base);\n    padding: 6px 12px;\n    padding: var(--sy-xs) var(--sx-sm);\n}\n\ninput,\ntextarea {\n    padding: 6px 12px;\n    padding: var(--sy-xs) var(--sx-sm);\n}\n\nform>* {\n    display: block;\n    width: 100%;\n}\n\nbutton.primary {\n    background-color: #0C75D0;\n    background-color: var(--primary);\n    border: none;\n    color: var(--figma-color-text-onbrand);\n}\n\ninput,\ntextarea {\n    background-color: var(--figma-color-bg-secondary);\n    color: var(--figma-color-text);\n    border: 2px solid var(--figma-color-border);\n}\n\ninput[type=radio] {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    padding: 0;\n    border-radius: 50%;\n    width: 16px;\n    width: var(--line-height-base);\n    height: 16px;\n    height: var(--line-height-base);\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n}\n\ninput[type=radio]:checked {\n    --width: calc(var(--line-height-base)/4);\n    background-color: white;\n    border: calc(16px/4) solid #0C75D0;\n    border: var(--width) solid var(--primary);\n}\n\n.radiogroup {\n    background-color: var(--figma-color-bg-secondary);\n    padding: 2px;\n    gap: 1px;\n    display: flex;\n    flex-direction: row;\n    border-radius: 0.25rem;\n}\n\n.radiogroup input[type=radio] {\n    background-color: #0C75D0;\n    background-color: var(--primary);\n    border: 0 none;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n    opacity: 0.5;\n    border-radius: 0px;\n}\n\n.radiogroup input[type=radio]:checked {\n    opacity: 1;\n    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow)}\n\ninput:focus,\ntextarea:focus {\n    border-color: var(--figma-color-border-selected);\n    outline: none;\n}\n\ntextarea {\n    flex: 1;\n    white-space: pre;\n}\n\nfieldset {\n    border-style: solid;\n    border-color: var(--figma-color-border);\n    border-radius: calc(4px + 4px);\n    border-radius: var(--radii-md);\n    border-width: 1px;\n}\n\n[data-slider] {\n    --thumb-color:  var(--primary);\n}\n\n.sliders label {\n    display: flex;\n    align-items: center;\n}\n\n.sliders .text-label {\n    width: 20%;\n}\n\n.sliders .slider {\n    height: calc((20px + 6px) / 4);\n    height: calc(calc(20px + 6px) / 4);\n    height: var(--slider-track-size);\n    background-color: var(--figma-color-border);\n    border: 0 none;\n    box-shadow: none;\n    flex: 3;\n    margin: 0 calc(20px + 6px);\n    margin: 0 var(--slider-margin);\n}\n\n.sliders input[type=text] {\n    width: 5rem;\n    border: 1px solid var(--figma-color-border);\n    background: transparent;\n    text-align: center;\n    border-radius: 4px;\n    border-radius: var(--radii-base);\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n    padding-left: 0;\n    padding-right: 0;\n}\n\n.sliders .slider .noUi-connect {\n    background-color: var(--thumb-color);\n}\n\n.sliders .slider  .noUi-handle {\n    border: calc((20px + 6px) / 5) solid white;\n    border: calc(calc(20px + 6px) / 5) solid white;\n    border: calc(var(--slider-thumb-size) / 5) solid white;\n    cursor: default;\n    box-shadow: none;\n\n    \n    height: calc(20px + 6px);\n\n    \n    height: var(--slider-thumb-size);\n    width: calc(20px + 6px);\n    width: var(--slider-thumb-size);\n\n    top: calc((calc(20px + 6px) - calc((20px + 6px) / 4)) / -2);\n\n    top: calc((calc(20px + 6px) - calc(calc(20px + 6px) / 4)) / -2);\n\n    top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n    right: calc((calc(20px + 6px) - calc((20px + 6px) / 4)) / -2);\n    right: calc((calc(20px + 6px) - calc(calc(20px + 6px) / 4)) / -2);\n    right: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n\n    box-shadow: 0px 1px 2px -1px rgba(0, 35, 41, 0.04), 0px 1px 3px 0px rgba(0, 35, 41, 0.04), 0px 0px 0px 1px rgba(0, 35, 41, 0.1);\n;\n\n    /*custom styles*/\n    background: var(--thumb-color);\n    border-radius: 50%;\n\n}\n\n.sliders .slider:hover  .noUi-handle {\n    border: calc((20px + 6px) / 4) solid white;\n    border: calc(calc(20px + 6px) / 4) solid white;\n    border: calc(var(--slider-thumb-size) / 4) solid white;\n}\n\n.sliders .slider  .noUi-handle::before,\n.sliders .slider  .noUi-handle::after {\n    display: none;\n}\n\n[data-semantics] .sliders input[type=text] {\n    font-size: 0.9rem;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    gap: var(--sy-base);\n    height: 100%;\n}\n\n\n#export {\n    background-color: var(--figma-color-bg-component);\n}\n\n/********** Range Input Styles **********/\n/*Range Reset*/\ninput[type=\"range\"] {\n    --thumb-color: var(--primary);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n         appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 15rem;\n    border: 0 none;\n    padding: 0;\n}\n\n/* Removes default focus */\ninput[type=\"range\"]:focus {\n    outline: none;\n}\n\n/***** Chrome, Safari, Opera and Edge Chromium styles *****/\n/* slider track */\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n    background-color: var(--figma-color-border);\n    border-radius: 0.5rem;\n    height: calc((20px + 6px) / 4);\n    height: calc(calc(20px + 6px) / 4);\n    height: var(--slider-track-size);\n}\n\n/* slider thumb */\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    /* Override default look */\n    appearance: none;\n    margin-top: calc((calc(20px + 6px) - calc((20px + 6px) / 4)) / -2);\n    margin-top: calc((calc(20px + 6px) - calc(calc(20px + 6px) / 4)) / -2);\n    margin-top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n\n    /*custom styles*/\n    background-color: var(--thumb-color);\n    height: calc(20px + 6px);\n    height: var(--slider-thumb-size);\n    width: calc(20px + 6px);\n    width: var(--slider-thumb-size);\n    border-radius: calc(20px + 6px);\n    border-radius: var(--slider-thumb-size);\n}\n\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    border: 1px solid #053a5f;\n    outline: 3px solid #053a5f;\n\n    outline-color: color-mix(in srgb, var(--thumb-color), transparent 20%);\n    outline-offset: 0.125rem;\n}\n\nhr {\n    border-color: var(--figma-color-border);\n}\n\na[data-expander]::after {\n    content: '';\n    display: inline-block;\n    width: 7.29px;\n    height: 7.29px;\n    border: solid #0C75D0;\n    border: solid var(--primary);\n    border-width: 0 1px 1px 0;\n    transform: rotate(-45deg) translate(2px, 0px);\n    margin-left: 4px;\n}\n\na[data-expanded=yes]::after {\n    transform: rotate(45deg) translate(0px, -5px);\n}\n\n.font-preview-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 3rem;\n    background-color: var(--figma-color-bg-secondary);\n}\n\n.font-preview-box .base {\n    font-size: 12px;\n    font-size: var(--font-size-base);\n}\n\n.font-preview-box .md {\n    font-size: 14px;\n    font-size: var(--font-size-md);\n}\n\n.font-preview-box .lg {\n    font-size: 16px;\n    font-size: var(--font-size-lg);\n}\n\n.checkbox {\n    display: flex;\n}\n\n.checkbox:hover input[type=checkbox] {\n    border-color: var(--figma-color-border-selected);\n}\n\n.checkbox input[type=\"checkbox\"] {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    width: 16px;\n    width: var(--line-height-base);\n    height: 16px;\n    height: var(--line-height-base);\n    padding: 0;\n    border-radius: 4px;\n    flex: 0 0 auto;\n    \n}\n\n.checkbox input[type=\"checkbox\"]:checked {\n    border-color: #0C75D0;\n    border-color: var(--primary);\n    background-color: #0C75D0;\n    background-color: var(--primary);\n    position: relative;\n}\n\n.checkbox input[type=\"checkbox\"]:checked::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    border: 2px solid white;\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg) translate(1px, -3px);\n    width: 0.4rem;\n    height: 0.7rem;\n}\n\n\n.action-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.action-list li {\n    display: block;\n    border-bottom: 1px solid var(--figma-color-border);\n}\n\n.action-list li:last-child {\n    border-width: 0;\n}\n\n.action-list li a {\n    color: var(--figma-color-text);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 12px 0;\n    padding: var(--sy-base) 0;\n}\n\n.action-list li a:hover {\n    color: #0C75D0;\n    color: var(--primary);\n    -webkit-text-decoration: none;\n    text-decoration: none;\n}\n\n.action-list li a > span:last-child::after {\n    content: '';\n    display: inline-block;\n    width: 7.29px;\n    height: 7.29px;\n    border: solid #0C75D0;\n    border: solid var(--primary);\n    border-width: 0 1px 1px 0;\n    transform: rotate(-45deg) translate(2px, 0px);\n    margin-left: 12px;\n    margin-left: var(--sx-sm);\n}\n\ndialog {\n    width: 95%;\n    color: var(--figma-color-text);\n    background-color: var(--figma-color-bg);\n    border-radius: var(--radii-lg);\n    padding: 20px 24px;\n    padding: var(--sy-lg) var(--sx-lg) ;\n    outline: 1px solid color-mix(in srgb, var(--figma-color-text), transparent 85%);\n    box-shadow: 0px 12px 20px -6px rgba(14, 16, 17, 0.10), 0px 30px 48px -8px rgba(14, 16, 17, 0.15);\n}\n\ndialog button.close {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n}\n\n.close-icon-bar {\n    width: 1px;\n    height: 10px;\n}\n\nbutton.close {\n    color: currentColor;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0 none;\n    background: transparent;\n    border-radius: 4px;\n    border-radius: var(--radii-base);\n    width: 1.5rem;\n    height: 1.5rem;\n    opacity: 0.6;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton.close svg {\n    color: var(--figma-color-text);\n}\n\nbutton.close:hover {\n    opacity: 1;\n}\n\n:focus-visible {\n    outline: #0C75D0 auto 2px;\n    outline: var(--primary) auto 2px;\n    outline-offset: 2px;\n}\n", "",{"version":3,"sources":["webpack://./src/ui/styles.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n    --spacing: 0.5rem 1rem;\n    --slider-thumb-size: calc(var(--line-height-md) + var(--sy-xs));\n    --slider-track-size: calc(var(--slider-thumb-size) / 4);\n    --slider-margin: var(--slider-thumb-size);\n\n    --primary: #0C75D0;\n    --primary-text: #65a5dd;\n    --info: #078380;\n    --success: #078650;\n    --warning: #C15600;\n    --danger: #E81B00;\n\n    --font-size-base: 12px;\n    --line-height-base: 16px;\n\n    --font-size-md: 14px;\n    --line-height-md: 20px;\n    --font-size-lg: 16px;\n    --line-height-lg: 24px;\n\n    --radii-base: 4px;\n    --radii-md: calc(var(--radii-base) + 2px);\n    --radii-md: calc(var(--radii-base) + 4px);\n\n    --sx-xs4: 2px;\n    --sx-xs3: 4px;\n    --sx-xs2: 6px;\n    --sx-xs: 8px;\n    --sx-sm: 12px;\n    --sx-base: 16px;\n    --sx-md: 20px;\n    --sx-lg: 24px;\n    --sx-xl: 28px;\n    --sx-xl2: 32px;\n    --sx-xl3: 40px;\n\n    --sy-xs4: 1px;\n    --sy-xs3: 2px;\n    --sy-xs2: 4px;\n    --sy-xs: 6px;\n    --sy-sm: 8px;\n    --sy-base: 12px;\n    --sy-md: 16px;\n    --sy-lg: 20px;\n    --sy-xl: 24px;\n    --sy-xl2: 28px;\n    --sy-xl3: 32px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    background-color: var(--figma-color-bg-secondary);\n    font-size: var(--font-size-base);\n    line-height: var(--line-height-base);\n    color: var(--figma-color-text);\n    margin: 0;\n    overflow: hidden;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\na {\n    color: var(--primary);\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.figma-bg-secondary {\n    background-color: var(--figma-color-bg-secondary);\n}\n\n.card {\n    --light-1: #f8fafc;\n    --light-2: #e1e7ea;\n    --light-3: #e7ecee;\n    --light-4: #edf1f3;\n    --light-5: #f2f6f7;\n\n    --dark-1: #121516;\n    --dark-2: #171a1c;\n    --dark-3: #1c2022;\n    --dark-4: #202527;\n    --dark-5: #252a2d;\n\n    background-color: var(--figma-color-bg);\n    border-radius: var(--radii-md);\n    padding: var(--sy-base) var(--sx-base) ;\n    gap: var(--sy-base);\n\n    @apply flex flex-col;\n}\n\n.card-stiky {\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 10;\n    @apply rounded-none m-0 shadow-md;\n}\n\n.color-box {\n    min-height: 2rem;\n    ;\n    padding: 0.5rem;\n    color: white;\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.color-box.l-1 {\n    background-color: var(--light-1);\n}\n\n.color-box.l-2 {\n    background-color: var(--light-2);\n}\n\n.color-box.l-3 {\n    background-color: var(--light-3);\n}\n\n.color-box.l-4 {\n    background-color: var(--light-4);\n}\n\n.color-box.l-5 {\n    background-color: var(--light-5);\n}\n\n.color-box.d-1 {\n    background-color: var(--dark-1);\n}\n\n.color-box.d-2 {\n    background-color: var(--dark-2);\n}\n\n.color-box.d-3 {\n    background-color: var(--dark-3);\n}\n\n.color-box.d-4 {\n    background-color: var(--dark-4);\n}\n\n.color-box.d-5 {\n    background-color: var(--dark-5);\n}\n\n.color-box.a-primary {\n    background-color: var(--primary);\n}\n\n.color-box.a-info {\n    background-color: var(--info);\n}\n\n.color-box.a-success {\n    background-color: var(--success);\n}\n\n.color-box.a-warning {\n    background-color: var(--warning);\n}\n\n.color-box.a-danger {\n    background-color: var(--danger);\n}\n\n.color-box .token-value {\n    display: block;\n    opacity: 0.7;\n    font-size: var(--font-size-xs);\n    line-height: var(--line-height-xs);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: auto;\n    margin: 0;\n}\n\nbutton {\n    appearance: none;\n    border-radius: var(--radii-base);\n    padding: var(--sy-xs) var(--sx-sm);\n}\n\ninput,\ntextarea {\n    padding: var(--sy-xs) var(--sx-sm);\n}\n\nform>* {\n    display: block;\n    width: 100%;\n}\n\nbutton.primary {\n    background-color: var(--primary);\n    border: none;\n    color: var(--figma-color-text-onbrand);\n}\n\ninput,\ntextarea {\n    background-color: var(--figma-color-bg-secondary);\n    color: var(--figma-color-text);\n    border: 2px solid var(--figma-color-border);\n}\n\ninput[type=radio] {\n    appearance: none;\n    padding: 0;\n    border-radius: 50%;\n    width: var(--line-height-base);\n    height: var(--line-height-base);\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n}\n\ninput[type=radio]:checked {\n    --width: calc(var(--line-height-base)/4);\n    background-color: white;\n    border: var(--width) solid var(--primary);\n}\n\n.radiogroup {\n    background-color: var(--figma-color-bg-secondary);\n    padding: 2px;\n    gap: 1px;\n    @apply flex flex-row rounded;\n}\n\n.radiogroup input[type=radio] {\n    background-color: var(--primary);\n    border: 0 none;\n    appearance: none;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n    opacity: 0.5;\n\n    @apply rounded-none;\n}\n\n.radiogroup input[type=radio]:checked {\n    opacity: 1;\n    @apply shadow\n}\n\ninput:focus,\ntextarea:focus {\n    border-color: var(--figma-color-border-selected);\n    outline: none;\n}\n\ntextarea {\n    flex: 1;\n    white-space: pre;\n}\n\nfieldset {\n    border-style: solid;\n    border-color: var(--figma-color-border);\n    border-radius: var(--radii-md);\n    border-width: 1px;\n}\n\n[data-slider] {\n    --thumb-color:  var(--primary);\n}\n\n.sliders label {\n    display: flex;\n    align-items: center;\n}\n\n.sliders .text-label {\n    width: 20%;\n}\n\n.sliders .slider {\n    height: var(--slider-track-size);\n    background-color: var(--figma-color-border);\n    border: 0 none;\n    box-shadow: none;\n    flex: 3;\n    margin: 0 var(--slider-margin);\n}\n\n.sliders input[type=text] {\n    width: 5rem;\n    border: 1px solid var(--figma-color-border);\n    background: transparent;\n    text-align: center;\n    border-radius: var(--radii-base);\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n    padding-left: 0;\n    padding-right: 0;\n}\n\n.sliders .slider .noUi-connect {\n    background-color: var(--thumb-color);\n}\n\n.sliders .slider  .noUi-handle {\n    border: calc(var(--slider-thumb-size) / 5) solid white;\n    cursor: default;\n    box-shadow: none;\n\n    \n    height: var(--slider-thumb-size);\n    width: var(--slider-thumb-size);\n\n    top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n    right: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n\n    box-shadow: 0px 1px 2px -1px rgba(0, 35, 41, 0.04), 0px 1px 3px 0px rgba(0, 35, 41, 0.04), 0px 0px 0px 1px rgba(0, 35, 41, 0.1);\n;\n\n    /*custom styles*/\n    background: var(--thumb-color);\n    border-radius: 50%;\n\n}\n\n.sliders .slider:hover  .noUi-handle {\n    border: calc(var(--slider-thumb-size) / 4) solid white;\n}\n\n.sliders .slider  .noUi-handle::before,\n.sliders .slider  .noUi-handle::after {\n    display: none;\n}\n\n[data-semantics] .sliders input[type=text] {\n    font-size: 0.9rem;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: var(--sy-base);\n    height: 100%;\n}\n\n\n#export {\n    background-color: var(--figma-color-bg-component);\n}\n\n/********** Range Input Styles **********/\n/*Range Reset*/\ninput[type=\"range\"] {\n    --thumb-color: var(--primary);\n    -webkit-appearance: none;\n    appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 15rem;\n    border: 0 none;\n    padding: 0;\n}\n\n/* Removes default focus */\ninput[type=\"range\"]:focus {\n    outline: none;\n}\n\n/***** Chrome, Safari, Opera and Edge Chromium styles *****/\n/* slider track */\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n    background-color: var(--figma-color-border);\n    border-radius: 0.5rem;\n    height: var(--slider-track-size);\n}\n\n/* slider thumb */\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    /* Override default look */\n    appearance: none;\n    margin-top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n\n    /*custom styles*/\n    background-color: var(--thumb-color);\n    height: var(--slider-thumb-size);\n    width: var(--slider-thumb-size);\n    border-radius: var(--slider-thumb-size);\n}\n\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    border: 1px solid #053a5f;\n    outline: 3px solid #053a5f;\n\n    outline-color: color-mix(in srgb, var(--thumb-color), transparent 20%);\n    outline-offset: 0.125rem;\n}\n\nhr {\n    border-color: var(--figma-color-border);\n}\n\na[data-expander]::after {\n    content: '';\n    display: inline-block;\n    width: 7.29px;\n    height: 7.29px;\n    border: solid var(--primary);\n    border-width: 0 1px 1px 0;\n    transform: rotate(-45deg) translate(2px, 0px);\n    margin-left: 4px;\n}\n\na[data-expanded=yes]::after {\n    transform: rotate(45deg) translate(0px, -5px);\n}\n\n.font-preview-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 3rem;\n    background-color: var(--figma-color-bg-secondary);\n}\n\n.font-preview-box .base {\n    font-size: var(--font-size-base);\n}\n\n.font-preview-box .md {\n    font-size: var(--font-size-md);\n}\n\n.font-preview-box .lg {\n    font-size: var(--font-size-lg);\n}\n\n.checkbox {\n    display: flex;\n}\n\n.checkbox:hover input[type=checkbox] {\n    border-color: var(--figma-color-border-selected);\n}\n\n.checkbox input[type=\"checkbox\"] {\n    appearance: none;\n    width: var(--line-height-base);\n    height: var(--line-height-base);\n    padding: 0;\n    border-radius: 4px;\n    flex: 0 0 auto;\n    \n}\n\n.checkbox input[type=\"checkbox\"]:checked {\n    border-color: var(--primary);\n    background-color: var(--primary);\n    position: relative;\n}\n\n.checkbox input[type=\"checkbox\"]:checked::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    border: 2px solid white;\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg) translate(1px, -3px);\n    width: 0.4rem;\n    height: 0.7rem;\n}\n\n\n.action-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.action-list li {\n    display: block;\n    border-bottom: 1px solid var(--figma-color-border);\n}\n\n.action-list li:last-child {\n    border-width: 0;\n}\n\n.action-list li a {\n    color: var(--figma-color-text);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: var(--sy-base) 0;\n}\n\n.action-list li a:hover {\n    color: var(--primary);\n    text-decoration: none;\n}\n\n.action-list li a > span:last-child::after {\n    content: '';\n    display: inline-block;\n    width: 7.29px;\n    height: 7.29px;\n    border: solid var(--primary);\n    border-width: 0 1px 1px 0;\n    transform: rotate(-45deg) translate(2px, 0px);\n    margin-left: var(--sx-sm);\n}\n\ndialog {\n    width: 95%;\n    color: var(--figma-color-text);\n    background-color: var(--figma-color-bg);\n    border-radius: var(--radii-lg);\n    padding: var(--sy-lg) var(--sx-lg) ;\n    outline: 1px solid color-mix(in srgb, var(--figma-color-text), transparent 85%);\n    box-shadow: 0px 12px 20px -6px rgba(14, 16, 17, 0.10), 0px 30px 48px -8px rgba(14, 16, 17, 0.15);\n}\n\ndialog button.close {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n}\n\n.close-icon-bar {\n    width: 1px;\n    height: 10px;\n}\n\nbutton.close {\n    color: currentColor;\n    appearance: none;\n    border: 0 none;\n    background: transparent;\n    border-radius: var(--radii-base);\n    width: 1.5rem;\n    height: 1.5rem;\n    opacity: 0.6;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton.close svg {\n    color: var(--figma-color-text);\n}\n\nbutton.close:hover {\n    opacity: 1;\n}\n\n:focus-visible {\n    outline: var(--primary) auto 2px;\n    outline-offset: 2px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/utils.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/utils.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.text-size-xs {\n    font-size: var(--font-size-xs);\n    line-height: var(--line-height-xs);\n}\n\n.text-size-sm {\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n}\n\n.text-size-base {\n    font-size: var(--font-size-base);\n    line-height: var(--line-height-base);\n}\n\n.text-size-md {\n    font-size: var(--font-size-md);\n    line-height: var(--line-height-md);\n}\n\n.text-size-lg {\n    font-size: var(--font-size-lg);\n    line-height: var(--line-height-lg);\n}\n\n.radii-base {\n    border-radius: var(--radii-base);\n}\n\n.radii-base-l {\n    border-radius: var(--radii-base) 0 0 var(--radii-base);\n}\n\n.radii-md {\n    border-radius: var(--radii-md);\n}\n\n.px-xs4 {\n    padding-left: var(--sx-xs4);\n    padding-right: var(--sx-xs4);\n}\n.px-xs3 {\n    padding-left: var(--sx-xs3);\n    padding-right: var(--sx-xs3);\n}\n.px-xs2 {\n    padding-left: var(--sx-xs2);\n    padding-right: var(--sx-xs2);\n}\n.px-xs {\n    padding-left: var(--sx-xs);\n    padding-right: var(--sx-xs);\n}\n.px-sm {\n    padding-left: var(--sx-sm);\n    padding-right: var(--sx-sm);\n}\n.px-base {\n    padding-left: var(--sx-base);\n    padding-right: var(--sx-base);\n}\n.px-md {\n    padding-left: var(--sx-md);\n    padding-right: var(--sx-md);\n}\n.px-lg {\n    padding-left: var(--sx-lg);\n    padding-right: var(--sx-lg);\n}\n.px-xl {\n    padding-left: var(--sx-xl);\n    padding-right: var(--sx-xl);\n}\n.px-xl2 {\n    padding-left: var(--sx-xl2);\n    padding-right: var(--sx-xl2);\n}\n.px-xl3 {\n    padding-left: var(--sx-xl3);\n    padding-right: var(--sx-xl3);\n}\n\n.py-xs4 {\n    padding-top: var(--sy-xs4);\n    padding-bottom: var(--sy-xs4);\n}\n.py-xs3 {\n    padding-top: var(--sy-xs3);\n    padding-bottom: var(--sy-xs3);\n}\n.py-xs2 {\n    padding-top: var(--sy-xs2);\n    padding-bottom: var(--sy-xs2);\n}\n.py-xs {\n    padding-top: var(--sy-xs);\n    padding-bottom: var(--sy-xs);\n}\n.py-sm {\n    padding-top: var(--sy-sm);\n    padding-bottom: var(--sy-sm);\n}\n.py-base {\n    padding-top: var(--sy-base);\n    padding-bottom: var(--sy-base);\n}\n.py-md {\n    padding-top: var(--sy-md);\n    padding-bottom: var(--sy-md);\n}\n.py-lg {\n    padding-top: var(--sy-lg);\n    padding-bottom: var(--sy-lg);\n}\n.py-xl {\n    padding-top: var(--sy-xl);\n    padding-bottom: var(--sy-xl);\n}\n.py-xl2 {\n    padding-top: var(--sy-xl2);\n    padding-bottom: var(--sy-xl2);\n}\n.py-xl3 {\n    padding-top: var(--sy-xl3);\n    padding-bottom: var(--sy-xl3);\n}\n\n\n.gap-sy-xs4 {\n    gap: var(--sy-xs4);\n}\n.gap-sy-xs3 {\n    gap: var(--sy-xs3);\n}\n.gap-sy-xs2 {\n    gap: var(--sy-xs2);\n}\n.gap-sy-xs {\n    gap: var(--sy-xs);\n}\n.gap-sy-sm {\n    gap: var(--sy-sm);\n}\n.gap-sy-base {\n    gap: var(--sy-base);\n}\n.gap-sy-md {\n    gap: var(--sy-md);\n}\n.gap-sy-lg {\n    gap: var(--sy-lg);\n}\n.gap-sy-xl {\n    gap: var(--sy-xl);\n}\n.gap-sy-xl2 {\n    gap: var(--sy-xl2);\n}\n.gap-sy-xl3 {\n    gap: var(--sy-xl3);\n}\n\n.gap-sx-xs4 {\n    gap: var(--sx-xs4);\n}\n.gap-sx-xs3 {\n    gap: var(--sx-xs3);\n}\n.gap-sx-xs2 {\n    gap: var(--sx-xs2);\n}\n.gap-sx-xs {\n    gap: var(--sx-xs);\n}\n.gap-sx-sm {\n    gap: var(--sx-sm);\n}\n.gap-sx-base {\n    gap: var(--sx-base);\n}\n.gap-sx-md {\n    gap: var(--sx-md);\n}\n.gap-sx-lg {\n    gap: var(--sx-lg);\n}\n.gap-sx-xl {\n    gap: var(--sx-xl);\n}\n.gap-sx-xl2 {\n    gap: var(--sx-xl2);\n}\n.gap-sx-xl3 {\n    gap: var(--sx-xl3);\n}", "",{"version":3,"sources":["webpack://./src/ui/utils.css"],"names":[],"mappings":";AACA;IACI,8BAA8B;IAC9B,kCAAkC;AACtC;;AAEA;IACI,8BAA8B;IAC9B,kCAAkC;AACtC;;AAEA;IACI,gCAAgC;IAChC,oCAAoC;AACxC;;AAEA;IACI,8BAA8B;IAC9B,kCAAkC;AACtC;;AAEA;IACI,8BAA8B;IAC9B,kCAAkC;AACtC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,sDAAsD;AAC1D;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,2BAA2B;IAC3B,4BAA4B;AAChC;AACA;IACI,2BAA2B;IAC3B,4BAA4B;AAChC;AACA;IACI,2BAA2B;IAC3B,4BAA4B;AAChC;AACA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,4BAA4B;IAC5B,6BAA6B;AACjC;AACA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,2BAA2B;IAC3B,4BAA4B;AAChC;AACA;IACI,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,0BAA0B;IAC1B,6BAA6B;AACjC;AACA;IACI,0BAA0B;IAC1B,6BAA6B;AACjC;AACA;IACI,0BAA0B;IAC1B,6BAA6B;AACjC;AACA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;AACA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;AACA;IACI,2BAA2B;IAC3B,8BAA8B;AAClC;AACA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;AACA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;AACA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;AACA;IACI,0BAA0B;IAC1B,6BAA6B;AACjC;AACA;IACI,0BAA0B;IAC1B,6BAA6B;AACjC;;;AAGA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB","sourcesContent":["\n.text-size-xs {\n    font-size: var(--font-size-xs);\n    line-height: var(--line-height-xs);\n}\n\n.text-size-sm {\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n}\n\n.text-size-base {\n    font-size: var(--font-size-base);\n    line-height: var(--line-height-base);\n}\n\n.text-size-md {\n    font-size: var(--font-size-md);\n    line-height: var(--line-height-md);\n}\n\n.text-size-lg {\n    font-size: var(--font-size-lg);\n    line-height: var(--line-height-lg);\n}\n\n.radii-base {\n    border-radius: var(--radii-base);\n}\n\n.radii-base-l {\n    border-radius: var(--radii-base) 0 0 var(--radii-base);\n}\n\n.radii-md {\n    border-radius: var(--radii-md);\n}\n\n.px-xs4 {\n    padding-left: var(--sx-xs4);\n    padding-right: var(--sx-xs4);\n}\n.px-xs3 {\n    padding-left: var(--sx-xs3);\n    padding-right: var(--sx-xs3);\n}\n.px-xs2 {\n    padding-left: var(--sx-xs2);\n    padding-right: var(--sx-xs2);\n}\n.px-xs {\n    padding-left: var(--sx-xs);\n    padding-right: var(--sx-xs);\n}\n.px-sm {\n    padding-left: var(--sx-sm);\n    padding-right: var(--sx-sm);\n}\n.px-base {\n    padding-left: var(--sx-base);\n    padding-right: var(--sx-base);\n}\n.px-md {\n    padding-left: var(--sx-md);\n    padding-right: var(--sx-md);\n}\n.px-lg {\n    padding-left: var(--sx-lg);\n    padding-right: var(--sx-lg);\n}\n.px-xl {\n    padding-left: var(--sx-xl);\n    padding-right: var(--sx-xl);\n}\n.px-xl2 {\n    padding-left: var(--sx-xl2);\n    padding-right: var(--sx-xl2);\n}\n.px-xl3 {\n    padding-left: var(--sx-xl3);\n    padding-right: var(--sx-xl3);\n}\n\n.py-xs4 {\n    padding-top: var(--sy-xs4);\n    padding-bottom: var(--sy-xs4);\n}\n.py-xs3 {\n    padding-top: var(--sy-xs3);\n    padding-bottom: var(--sy-xs3);\n}\n.py-xs2 {\n    padding-top: var(--sy-xs2);\n    padding-bottom: var(--sy-xs2);\n}\n.py-xs {\n    padding-top: var(--sy-xs);\n    padding-bottom: var(--sy-xs);\n}\n.py-sm {\n    padding-top: var(--sy-sm);\n    padding-bottom: var(--sy-sm);\n}\n.py-base {\n    padding-top: var(--sy-base);\n    padding-bottom: var(--sy-base);\n}\n.py-md {\n    padding-top: var(--sy-md);\n    padding-bottom: var(--sy-md);\n}\n.py-lg {\n    padding-top: var(--sy-lg);\n    padding-bottom: var(--sy-lg);\n}\n.py-xl {\n    padding-top: var(--sy-xl);\n    padding-bottom: var(--sy-xl);\n}\n.py-xl2 {\n    padding-top: var(--sy-xl2);\n    padding-bottom: var(--sy-xl2);\n}\n.py-xl3 {\n    padding-top: var(--sy-xl3);\n    padding-bottom: var(--sy-xl3);\n}\n\n\n.gap-sy-xs4 {\n    gap: var(--sy-xs4);\n}\n.gap-sy-xs3 {\n    gap: var(--sy-xs3);\n}\n.gap-sy-xs2 {\n    gap: var(--sy-xs2);\n}\n.gap-sy-xs {\n    gap: var(--sy-xs);\n}\n.gap-sy-sm {\n    gap: var(--sy-sm);\n}\n.gap-sy-base {\n    gap: var(--sy-base);\n}\n.gap-sy-md {\n    gap: var(--sy-md);\n}\n.gap-sy-lg {\n    gap: var(--sy-lg);\n}\n.gap-sy-xl {\n    gap: var(--sy-xl);\n}\n.gap-sy-xl2 {\n    gap: var(--sy-xl2);\n}\n.gap-sy-xl3 {\n    gap: var(--sy-xl3);\n}\n\n.gap-sx-xs4 {\n    gap: var(--sx-xs4);\n}\n.gap-sx-xs3 {\n    gap: var(--sx-xs3);\n}\n.gap-sx-xs2 {\n    gap: var(--sx-xs2);\n}\n.gap-sx-xs {\n    gap: var(--sx-xs);\n}\n.gap-sx-sm {\n    gap: var(--sx-sm);\n}\n.gap-sx-base {\n    gap: var(--sx-base);\n}\n.gap-sx-md {\n    gap: var(--sx-md);\n}\n.gap-sx-lg {\n    gap: var(--sx-lg);\n}\n.gap-sx-xl {\n    gap: var(--sx-xl);\n}\n.gap-sx-xl2 {\n    gap: var(--sx-xl2);\n}\n.gap-sx-xl3 {\n    gap: var(--sx-xl3);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.css":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!./nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/styles.css":
/*!***************************!*\
  !*** ./src/ui/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/utils.css":
/*!**************************!*\
  !*** ./src/ui/utils.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./utils.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/utils.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/defaults.ts":
/*!*************************!*\
  !*** ./src/defaults.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAccentHUEs: () => (/* binding */ defaultAccentHUEs),
/* harmony export */   defaultSemanticAccents: () => (/* binding */ defaultSemanticAccents),
/* harmony export */   defaultSettings: () => (/* binding */ defaultSettings),
/* harmony export */   iconSizeName: () => (/* binding */ iconSizeName),
/* harmony export */   iconSizeValues: () => (/* binding */ iconSizeValues),
/* harmony export */   radiiSizeName: () => (/* binding */ radiiSizeName),
/* harmony export */   radiiSizeValues: () => (/* binding */ radiiSizeValues),
/* harmony export */   spacingSizeName: () => (/* binding */ spacingSizeName),
/* harmony export */   systemAccentList: () => (/* binding */ systemAccentList),
/* harmony export */   typographySizeName: () => (/* binding */ typographySizeName),
/* harmony export */   typographySizeValues: () => (/* binding */ typographySizeValues)
/* harmony export */ });
const radiiSizeName = [
    "compact",
    "base",
    "large",
];
const radiiSizeValues = [
    4,
    6,
    8,
];
const spacingSizeName = [
    "compact",
    "base",
    "large",
    "touch",
];
const typographySizeName = [
    "compact",
    "base",
    "large",
];
const typographySizeValues = [
    "13/16",
    "15/20",
    "17/24",
];
const iconSizeName = [
    "base",
    "touch"
];
const iconSizeValues = [
    "16",
    "24",
];
const systemAccentList = [
    "red",
    "amber",
    "brown",
    "green",
    "teal",
    "cyan",
    "blue",
    "indigo",
    "violet",
    "purple",
    "pink"
];
const defaultAccentHUEs = {
    "red": 4,
    "amber": 25,
    "brown": 33,
    "green": 150,
    "teal": 180,
    "cyan": 200,
    "blue": 210,
    "indigo": 240,
    "violet": 260,
    "purple": 280,
    "pink": 340
};
const defaultSettings = {
    type: 'IMPORT',
    hue: 190,
    saturation: 0.2,
    distance: 0.02,
    primary: 'blue',
    info: 'cyan',
    success: 'green',
    warning: 'amber',
    danger: 'red',
    red: 4,
    amber: 25,
    brown: 33,
    green: 150,
    teal: 180,
    cyan: 200,
    blue: 210,
    indigo: 240,
    violet: 260,
    purple: 280,
    pink: 340,
    baseFontSize: 'base',
    typeScale: 'minorThird',
    createStyles: true,
    accentSaturation: 0.9,
    radii: 'base',
    spacing: 'base',
    singleCollection: false
};
const defaultSemanticAccents = {
    primary: 'blue',
    info: 'cyan',
    success: 'green',
    warning: 'amber',
    danger: 'red'
};


/***/ }),

/***/ "./src/radii-tokens.ts":
/*!*****************************!*\
  !*** ./src/radii-tokens.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   compact: () => (/* binding */ compact),
/* harmony export */   large: () => (/* binding */ large)
/* harmony export */ });
/* harmony import */ var _tokens_radii_base_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/radii/base.json */ "./src/tokens/radii/base.json");
/* harmony import */ var _tokens_radii_compact_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/radii/compact.json */ "./src/tokens/radii/compact.json");
/* harmony import */ var _tokens_radii_large_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/radii/large.json */ "./src/tokens/radii/large.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");




const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(_tokens_radii_base_json__WEBPACK_IMPORTED_MODULE_0__);
const compact = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(_tokens_radii_compact_json__WEBPACK_IMPORTED_MODULE_1__);
const large = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(_tokens_radii_large_json__WEBPACK_IMPORTED_MODULE_2__);


/***/ }),

/***/ "./src/spacing-tokens.ts":
/*!*******************************!*\
  !*** ./src/spacing-tokens.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   compact: () => (/* binding */ compact),
/* harmony export */   large: () => (/* binding */ large),
/* harmony export */   touch: () => (/* binding */ touch)
/* harmony export */ });
/* harmony import */ var _tokens_spacing_base_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/spacing/base.json */ "./src/tokens/spacing/base.json");
/* harmony import */ var _tokens_spacing_compact_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/spacing/compact.json */ "./src/tokens/spacing/compact.json");
/* harmony import */ var _tokens_spacing_large_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/spacing/large.json */ "./src/tokens/spacing/large.json");
/* harmony import */ var _tokens_spacing_touch_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/spacing/touch.json */ "./src/tokens/spacing/touch.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");





const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__.flattenObject)(_tokens_spacing_base_json__WEBPACK_IMPORTED_MODULE_0__);
const compact = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__.flattenObject)(_tokens_spacing_compact_json__WEBPACK_IMPORTED_MODULE_1__);
const large = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__.flattenObject)(_tokens_spacing_large_json__WEBPACK_IMPORTED_MODULE_2__);
const touch = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__.flattenObject)(_tokens_spacing_touch_json__WEBPACK_IMPORTED_MODULE_3__);


/***/ }),

/***/ "./src/typescale-tokens.ts":
/*!*********************************!*\
  !*** ./src/typescale-tokens.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   compact: () => (/* binding */ compact),
/* harmony export */   getFontDetails: () => (/* binding */ getFontDetails),
/* harmony export */   getTypograohyTokens: () => (/* binding */ getTypograohyTokens),
/* harmony export */   large: () => (/* binding */ large)
/* harmony export */ });
/* harmony import */ var _tokens_typography_styles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/typography/styles.json */ "./src/tokens/typography/styles.json");
/* harmony import */ var _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/typography/typeface.json */ "./src/tokens/typography/typeface.json");
/* harmony import */ var _tokens_typography_minor_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/typography/minor-third/typescale-base.json */ "./src/tokens/typography/minor-third/typescale-base.json");
/* harmony import */ var _tokens_typography_minor_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/typography/minor-third/typescale-compact.json */ "./src/tokens/typography/minor-third/typescale-compact.json");
/* harmony import */ var _tokens_typography_minor_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokens/typography/minor-third/typescale-large.json */ "./src/tokens/typography/minor-third/typescale-large.json");
/* harmony import */ var _tokens_typography_major_second_typescale_base_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens/typography/major-second/typescale-base.json */ "./src/tokens/typography/major-second/typescale-base.json");
/* harmony import */ var _tokens_typography_major_second_typescale_compact_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokens/typography/major-second/typescale-compact.json */ "./src/tokens/typography/major-second/typescale-compact.json");
/* harmony import */ var _tokens_typography_major_second_typescale_large_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokens/typography/major-second/typescale-large.json */ "./src/tokens/typography/major-second/typescale-large.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");









const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_minor_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__);
const compact = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_minor_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__);
const large = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_minor_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__);
const styles = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_styles_json__WEBPACK_IMPORTED_MODULE_0__);
const tokens = {
    minorThird: {
        base: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_minor_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__),
        compact: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_minor_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__),
        large: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_minor_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__),
    },
    majorSecond: {
        base: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_major_second_typescale_base_json__WEBPACK_IMPORTED_MODULE_5__),
        compact: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_major_second_typescale_compact_json__WEBPACK_IMPORTED_MODULE_6__),
        large: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_major_second_typescale_large_json__WEBPACK_IMPORTED_MODULE_7__),
    },
};
function getTypograohyTokens(size, scale = "minorThird") {
    let scaleTokens = tokens[scale][size];
    return Object.assign(Object.assign(Object.assign({}, (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_8__.flattenObject)(_tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__)), scaleTokens), styles);
}
function getFontDetails() {
    let names = [];
    const tokens = _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__;
    const family = _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__["font-families"].primary.$value;
    for (let [name, fontWeight] of Object.entries(_tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__["font-weights"])) {
        names.push({ family, style: fontWeight.$value });
    }
    return names;
}


/***/ }),

/***/ "./src/ui/slider.ts":
/*!**************************!*\
  !*** ./src/ui/slider.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSlider: () => (/* binding */ initSlider)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
/* harmony import */ var _utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/text-to-title-case */ "./src/utils/text-to-title-case.ts");


function initSlider(el, options) {
    const data = el.dataset.slider || '{}';
    let params = JSON.parse(data);
    params = Object.assign(params, options || {});
    return Object.assign({ rootElement: el, params }, processComponent(el, params));
}
function getMarkup({ label, name, min, max, step, value }) {
    return `
        
        <label class="sliders flex flex-row items-center">
            <span class="text-label">${label}</span>
            <div class="slider"></div>
            <input data-display type="text" readonly>
            <input data-value type="hidden" name="${name}" value="${value}">
        </label>    
    `;
}
function processComponent(el, options) {
    el.innerHTML = getMarkup(options);
    const displayInput = el.querySelector(`input[data-display]`);
    const valueInput = el.querySelector(`input[data-value]`);
    let slider = el.querySelector(`.slider`);
    slider = nouislider__WEBPACK_IMPORTED_MODULE_0__["default"].create(slider, {
        connect: 'lower',
        animate: false,
        start: [options.value],
        step: options.step,
        range: {
            'min': [options.min],
            'max': [options.max]
        }
    });
    displayInput.value = getDisplayValue(options.value, options.valueMap);
    slider.on('update', function (values, handle) {
        var value = parseInt(values[handle]);
        valueInput.value = `${value}`;
        displayInput.dispatchEvent(new Event('input', { 'bubbles': true }));
        displayInput.value = getDisplayValue(value, options.valueMap);
    });
    valueInput.addEventListener("input", (event) => {
        slider.set([valueInput.value]);
    });
    return { valueInput, displayInput, slider };
}
function getDisplayValue(value, valueMap) {
    if (valueMap != null) {
        return (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_1__.toTitleCase)(valueMap[value]);
    }
    else {
        return parseInt(value);
    }
}
function syncValues({ slider, valueInput }) {
    slider.on('update', function (values, handle) {
        var value = parseInt(values[handle]);
        valueInput.value = `${value}`;
    });
    valueInput.addEventListener("input", (event) => {
        slider.set([valueInput.value]);
    });
}


/***/ }),

/***/ "./src/utils/debounce.ts":
/*!*******************************!*\
  !*** ./src/utils/debounce.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
function debounce(cb, delay = 250) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args);
        }, delay);
    };
}


/***/ }),

/***/ "./src/utils/flatten-object.ts":
/*!*************************************!*\
  !*** ./src/utils/flatten-object.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flattenObject: () => (/* binding */ flattenObject)
/* harmony export */ });
function flattenObject(data) {
    const tokens = {};
    Object.entries(data).forEach(([key, object]) => {
        traverseToken({
            key,
            object,
            tokens,
        });
    });
    return tokens;
}
function traverseToken({ key, object, tokens, }) {
    if (!object)
        debugger;
    // if key is a meta field, move on
    if (key.charAt(0) === "$") {
        return;
    }
    if (object.$value !== undefined) {
        tokens[key] = Object.assign({}, object);
    }
    else {
        Object.entries(object).forEach(([key2, object2]) => {
            if (key2.charAt(0) !== "$") {
                traverseToken({
                    key: `${key}/${key2}`,
                    object: object2,
                    tokens
                });
            }
        });
    }
}


/***/ }),

/***/ "./src/utils/import-utils.ts":
/*!***********************************!*\
  !*** ./src/utils/import-utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePreview: () => (/* binding */ generatePreview),
/* harmony export */   getFormData: () => (/* binding */ getFormData),
/* harmony export */   loadSettings: () => (/* binding */ loadSettings),
/* harmony export */   transformValue: () => (/* binding */ transformValue)
/* harmony export */ });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");
/* harmony import */ var _radii_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../radii-tokens */ "./src/radii-tokens.ts");
/* harmony import */ var _typescale_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typescale-tokens */ "./src/typescale-tokens.ts");
/* harmony import */ var _spacing_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spacing-tokens */ "./src/spacing-tokens.ts");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _text_to_title_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-to-title-case */ "./src/utils/text-to-title-case.ts");






function transformValue(name, value, direction) {
    let val = parseInt(value);
    let valueMap;
    switch (name) {
        case 'baseFontSize': {
            valueMap = _defaults__WEBPACK_IMPORTED_MODULE_0__.typographySizeName;
            break;
        }
        case 'spacing': {
            valueMap = _defaults__WEBPACK_IMPORTED_MODULE_0__.spacingSizeName;
            break;
        }
        case 'radii': {
            valueMap = _defaults__WEBPACK_IMPORTED_MODULE_0__.radiiSizeName;
            break;
        }
        case 'primary':
        case 'info':
        case 'success':
        case 'danger':
        case 'warning': {
            valueMap = _defaults__WEBPACK_IMPORTED_MODULE_0__.systemAccentList;
            break;
        }
        case 'saturation':
        case 'distance':
        case 'accentSaturation': {
            if (direction === 'IN') {
                val = parseFloat(value) * 100;
            }
            if (direction === 'OUT') {
                val = val / 100;
            }
            break;
        }
    }
    if (isNaN(val)) {
        // this is string value we need to convert to number
        return valueMap ? valueMap.indexOf(value) : value;
    }
    else {
        return valueMap ? valueMap[value] : val;
    }
}
function collectValues(form) {
    const formElements = form.querySelectorAll('input[name]');
    let rawValues = {};
    formElements.forEach((formEl) => {
        const fieldName = formEl.name;
        if (formEl.type == 'radio') {
            if (formEl.checked) {
                rawValues[fieldName] = transformValue(formEl.name, formEl.value, "OUT");
            }
            return;
        }
        if (formEl.type == 'checkbox') {
            rawValues[fieldName] = formEl.checked;
            return;
        }
        rawValues[fieldName] = transformValue(formEl.name, formEl.value, "OUT");
    });
    return rawValues;
}
function getFormData(form) {
    return Object.assign({ type: 'IMPORT' }, collectValues(form));
}
function generatePreview(form, colorPreviewCard, sliders) {
    let data = getFormData(form);
    // render neutral colours preview
    for (var a = 1, b = 7; a < b; a++) {
        const colorLight = chroma_js__WEBPACK_IMPORTED_MODULE_4___default().hsl(data.hue, data.saturation, 1 - data.distance * a);
        const colorDark = chroma_js__WEBPACK_IMPORTED_MODULE_4___default().hsl(data.hue, data.saturation, 0.2 + data.distance * a);
        colorPreviewCard.style.setProperty(`--light-${a}`, colorLight.hex());
        colorPreviewCard.style.setProperty(`--dark-${a}`, colorDark.hex());
    }
    // set colours on neutrals hue & sdaturation sliders
    sliders['hue'].rootElement.style.setProperty('--thumb-color', chroma_js__WEBPACK_IMPORTED_MODULE_4___default().hsl(data.hue, data.accentSaturation, 0.5).hex());
    sliders['saturation'].rootElement.style.setProperty('--thumb-color', chroma_js__WEBPACK_IMPORTED_MODULE_4___default().hsl(data.hue, data.saturation, 0.5).hex());
    const semanticSlidersUpdateMap = [
        ["primary", data.primary],
        ["info", data.info],
        ["success", data.success],
        ["warning", data.warning],
        ["danger", data.danger],
    ];
    Object.entries(_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultAccentHUEs).forEach(([name, hue]) => {
        const sliderValue = data[name];
        const accentColor = chroma_js__WEBPACK_IMPORTED_MODULE_4___default().hsl(sliderValue, data.accentSaturation, 0.5).luminance(0.18);
        sliders[name].rootElement.style.setProperty('--thumb-color', accentColor.hex());
    });
    semanticSlidersUpdateMap.forEach(([colorName, accentReference]) => {
        const sliderAccentColorHUE = data[accentReference];
        const sliderAccentColor = chroma_js__WEBPACK_IMPORTED_MODULE_4___default().hsl(sliderAccentColorHUE, data.accentSaturation, 0.5).luminance(0.18);
        sliders[colorName].rootElement.style.setProperty('--thumb-color', sliderAccentColor);
        document.documentElement.style.setProperty(`--${colorName}`, sliderAccentColor);
        document.documentElement.style.setProperty(`--${colorName}-text`, sliderAccentColor.luminance(0.3));
        // update text node to display selected value
        const valueEl = document.querySelector(`.color-box.a-${colorName} > .token-value`);
        if (valueEl) {
            valueEl.innerHTML = accentReference;
        }
    });
    generateCSSVars(_radii_tokens__WEBPACK_IMPORTED_MODULE_1__[data.radii]);
    generateCSSVars(_typescale_tokens__WEBPACK_IMPORTED_MODULE_2__.getTypograohyTokens(data.baseFontSize, data.typeScale));
    generateCSSVars(_spacing_tokens__WEBPACK_IMPORTED_MODULE_3__[data.spacing]);
    updateValuesDisplay(data);
}
function updateValuesDisplay(data) {
    Object.entries(data).forEach(([key, value]) => {
        document.querySelectorAll(`[data-value=${key}]`).forEach((el) => {
            el.innerHTML = (0,_text_to_title_case__WEBPACK_IMPORTED_MODULE_5__.camelToTitle)(value);
        });
    });
}
function generateCSSVars(tokens = {}) {
    Object.entries(tokens).forEach(([name, value]) => {
        const varName = `--${name.replace(/\//g, "-")}`;
        const type = value['$type'];
        if (type == 'number') {
            const varValue = parseInt(value["$value"]);
            document.documentElement.style.setProperty(varName, `${varValue}px`);
        }
    });
}
function loadSettings(form, data) {
    Object.entries(data).forEach(([key, value]) => {
        const formElements = form.querySelectorAll(`[name=${key}]`);
        const val = transformValue(key, value, "IN");
        formElements.forEach((formEl) => {
            if (formEl.type == 'radio') {
                if (formEl.value === value) {
                    formEl.checked = true;
                    formEl.dispatchEvent(new Event('input', { 'bubbles': true }));
                }
            }
            else {
                formEl.value = val;
                formEl.dispatchEvent(new Event('input', { 'bubbles': true }));
            }
        });
    });
}


/***/ }),

/***/ "./src/utils/text-to-title-case.ts":
/*!*****************************************!*\
  !*** ./src/utils/text-to-title-case.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelToTitle: () => (/* binding */ camelToTitle),
/* harmony export */   toTitleCase: () => (/* binding */ toTitleCase)
/* harmony export */ });
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function camelToTitle(camelCase) {
    // no side-effects
    return camelCase
        // inject space before the upper case letters
        .replace(/([A-Z])/g, function (match) {
        return " " + match;
    })
        // replace first char with upper case
        .replace(/^./, function (match) {
        return match.toUpperCase();
    });
}


/***/ }),

/***/ "./node_modules/chroma-js/chroma.js":
/*!******************************************!*\
  !*** ./node_modules/chroma-js/chroma.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    var limit$2 = function (x, min, max) {
        if ( min === void 0 ) min=0;
        if ( max === void 0 ) max=1;

        return x < min ? min : x > max ? max : x;
    };

    var limit$1 = limit$2;

    var clip_rgb$3 = function (rgb) {
        rgb._clipped = false;
        rgb._unclipped = rgb.slice(0);
        for (var i=0; i<=3; i++) {
            if (i < 3) {
                if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                rgb[i] = limit$1(rgb[i], 0, 255);
            } else if (i === 3) {
                rgb[i] = limit$1(rgb[i], 0, 1);
            }
        }
        return rgb;
    };

    // ported from jQuery's $.type
    var classToType = {};
    for (var i$1 = 0, list$1 = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i$1 < list$1.length; i$1 += 1) {
        var name = list$1[i$1];

        classToType[("[object " + name + "]")] = name.toLowerCase();
    }
    var type$p = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
    };

    var type$o = type$p;

    var unpack$B = function (args, keyOrder) {
        if ( keyOrder === void 0 ) keyOrder=null;

    	// if called with more than 3 arguments, we return the arguments
        if (args.length >= 3) { return Array.prototype.slice.call(args); }
        // with less than 3 args we check if first arg is object
        // and use the keyOrder string to extract and sort properties
    	if (type$o(args[0]) == 'object' && keyOrder) {
    		return keyOrder.split('')
    			.filter(function (k) { return args[0][k] !== undefined; })
    			.map(function (k) { return args[0][k]; });
    	}
    	// otherwise we just return the first argument
    	// (which we suppose is an array of args)
        return args[0];
    };

    var type$n = type$p;

    var last$4 = function (args) {
        if (args.length < 2) { return null; }
        var l = args.length-1;
        if (type$n(args[l]) == 'string') { return args[l].toLowerCase(); }
        return null;
    };

    var PI$2 = Math.PI;

    var utils = {
    	clip_rgb: clip_rgb$3,
    	limit: limit$2,
    	type: type$p,
    	unpack: unpack$B,
    	last: last$4,
    	PI: PI$2,
    	TWOPI: PI$2*2,
    	PITHIRD: PI$2/3,
    	DEG2RAD: PI$2 / 180,
    	RAD2DEG: 180 / PI$2
    };

    var input$h = {
    	format: {},
    	autodetect: []
    };

    var last$3 = utils.last;
    var clip_rgb$2 = utils.clip_rgb;
    var type$m = utils.type;
    var _input = input$h;

    var Color$D = function Color() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var me = this;
        if (type$m(args[0]) === 'object' &&
            args[0].constructor &&
            args[0].constructor === this.constructor) {
            // the argument is already a Color instance
            return args[0];
        }

        // last argument could be the mode
        var mode = last$3(args);
        var autodetect = false;

        if (!mode) {
            autodetect = true;
            if (!_input.sorted) {
                _input.autodetect = _input.autodetect.sort(function (a,b) { return b.p - a.p; });
                _input.sorted = true;
            }
            // auto-detect format
            for (var i = 0, list = _input.autodetect; i < list.length; i += 1) {
                var chk = list[i];

                mode = chk.test.apply(chk, args);
                if (mode) { break; }
            }
        }

        if (_input.format[mode]) {
            var rgb = _input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
            me._rgb = clip_rgb$2(rgb);
        } else {
            throw new Error('unknown format: '+args);
        }

        // add alpha channel
        if (me._rgb.length === 3) { me._rgb.push(1); }
    };

    Color$D.prototype.toString = function toString () {
        if (type$m(this.hex) == 'function') { return this.hex(); }
        return ("[" + (this._rgb.join(',')) + "]");
    };

    var Color_1 = Color$D;

    var chroma$k = function () {
    	var args = [], len = arguments.length;
    	while ( len-- ) args[ len ] = arguments[ len ];

    	return new (Function.prototype.bind.apply( chroma$k.Color, [ null ].concat( args) ));
    };

    chroma$k.Color = Color_1;
    chroma$k.version = '2.4.2';

    var chroma_1 = chroma$k;

    var unpack$A = utils.unpack;
    var max$2 = Math.max;

    var rgb2cmyk$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$A(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max$2(r,max$2(g,b));
        var f = k < 1 ? 1 / (1-k) : 0;
        var c = (1-r-k) * f;
        var m = (1-g-k) * f;
        var y = (1-b-k) * f;
        return [c,m,y,k];
    };

    var rgb2cmyk_1 = rgb2cmyk$1;

    var unpack$z = utils.unpack;

    var cmyk2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$z(args, 'cmyk');
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) { return [0,0,0,alpha]; }
        return [
            c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
            m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
            y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
            alpha
        ];
    };

    var cmyk2rgb_1 = cmyk2rgb;

    var chroma$j = chroma_1;
    var Color$C = Color_1;
    var input$g = input$h;
    var unpack$y = utils.unpack;
    var type$l = utils.type;

    var rgb2cmyk = rgb2cmyk_1;

    Color$C.prototype.cmyk = function() {
        return rgb2cmyk(this._rgb);
    };

    chroma$j.cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$C, [ null ].concat( args, ['cmyk']) ));
    };

    input$g.format.cmyk = cmyk2rgb_1;

    input$g.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$y(args, 'cmyk');
            if (type$l(args) === 'array' && args.length === 4) {
                return 'cmyk';
            }
        }
    });

    var unpack$x = utils.unpack;
    var last$2 = utils.last;
    var rnd = function (a) { return Math.round(a*100)/100; };

    /*
     * supported arguments:
     * - hsl2css(h,s,l)
     * - hsl2css(h,s,l,a)
     * - hsl2css([h,s,l], mode)
     * - hsl2css([h,s,l,a], mode)
     * - hsl2css({h,s,l,a}, mode)
     */
    var hsl2css$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hsla = unpack$x(args, 'hsla');
        var mode = last$2(args) || 'lsa';
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1]*100) + '%';
        hsla[2] = rnd(hsla[2]*100) + '%';
        if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = 'hsla';
        } else {
            hsla.length = 3;
        }
        return (mode + "(" + (hsla.join(',')) + ")");
    };

    var hsl2css_1 = hsl2css$1;

    var unpack$w = utils.unpack;

    /*
     * supported arguments:
     * - rgb2hsl(r,g,b)
     * - rgb2hsl(r,g,b,a)
     * - rgb2hsl([r,g,b])
     * - rgb2hsl([r,g,b,a])
     * - rgb2hsl({r,g,b,a})
     */
    var rgb2hsl$3 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$w(args, 'rgba');
        var r = args[0];
        var g = args[1];
        var b = args[2];

        r /= 255;
        g /= 255;
        b /= 255;

        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);

        var l = (max + min) / 2;
        var s, h;

        if (max === min){
            s = 0;
            h = Number.NaN;
        } else {
            s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        }

        if (r == max) { h = (g - b) / (max - min); }
        else if (g == max) { h = 2 + (b - r) / (max - min); }
        else if (b == max) { h = 4 + (r - g) / (max - min); }

        h *= 60;
        if (h < 0) { h += 360; }
        if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
        return [h,s,l];
    };

    var rgb2hsl_1 = rgb2hsl$3;

    var unpack$v = utils.unpack;
    var last$1 = utils.last;
    var hsl2css = hsl2css_1;
    var rgb2hsl$2 = rgb2hsl_1;
    var round$6 = Math.round;

    /*
     * supported arguments:
     * - rgb2css(r,g,b)
     * - rgb2css(r,g,b,a)
     * - rgb2css([r,g,b], mode)
     * - rgb2css([r,g,b,a], mode)
     * - rgb2css({r,g,b,a}, mode)
     */
    var rgb2css$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$v(args, 'rgba');
        var mode = last$1(args) || 'rgb';
        if (mode.substr(0,3) == 'hsl') {
            return hsl2css(rgb2hsl$2(rgba), mode);
        }
        rgba[0] = round$6(rgba[0]);
        rgba[1] = round$6(rgba[1]);
        rgba[2] = round$6(rgba[2]);
        if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = 'rgba';
        }
        return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
    };

    var rgb2css_1 = rgb2css$1;

    var unpack$u = utils.unpack;
    var round$5 = Math.round;

    var hsl2rgb$1 = function () {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$u(args, 'hsl');
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r,g,b;
        if (s === 0) {
            r = g = b = l*255;
        } else {
            var t3 = [0,0,0];
            var c = [0,0,0];
            var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
            var t1 = 2 * l - t2;
            var h_ = h / 360;
            t3[0] = h_ + 1/3;
            t3[1] = h_;
            t3[2] = h_ - 1/3;
            for (var i=0; i<3; i++) {
                if (t3[i] < 0) { t3[i] += 1; }
                if (t3[i] > 1) { t3[i] -= 1; }
                if (6 * t3[i] < 1)
                    { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                else if (2 * t3[i] < 1)
                    { c[i] = t2; }
                else if (3 * t3[i] < 2)
                    { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                else
                    { c[i] = t1; }
            }
            (assign = [round$5(c[0]*255),round$5(c[1]*255),round$5(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
        }
        if (args.length > 3) {
            // keep alpha channel
            return [r,g,b,args[3]];
        }
        return [r,g,b,1];
    };

    var hsl2rgb_1 = hsl2rgb$1;

    var hsl2rgb = hsl2rgb_1;
    var input$f = input$h;

    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

    var round$4 = Math.round;

    var css2rgb$1 = function (css) {
        css = css.toLowerCase().trim();
        var m;

        if (input$f.format.named) {
            try {
                return input$f.format.named(css);
            } catch (e) {
                // eslint-disable-next-line
            }
        }

        // rgb(250,20,0)
        if ((m = css.match(RE_RGB))) {
            var rgb = m.slice(1,4);
            for (var i=0; i<3; i++) {
                rgb[i] = +rgb[i];
            }
            rgb[3] = 1;  // default alpha
            return rgb;
        }

        // rgba(250,20,0,0.4)
        if ((m = css.match(RE_RGBA))) {
            var rgb$1 = m.slice(1,5);
            for (var i$1=0; i$1<4; i$1++) {
                rgb$1[i$1] = +rgb$1[i$1];
            }
            return rgb$1;
        }

        // rgb(100%,0%,0%)
        if ((m = css.match(RE_RGB_PCT))) {
            var rgb$2 = m.slice(1,4);
            for (var i$2=0; i$2<3; i$2++) {
                rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
            }
            rgb$2[3] = 1;  // default alpha
            return rgb$2;
        }

        // rgba(100%,0%,0%,0.4)
        if ((m = css.match(RE_RGBA_PCT))) {
            var rgb$3 = m.slice(1,5);
            for (var i$3=0; i$3<3; i$3++) {
                rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
            }
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
        }

        // hsl(0,100%,50%)
        if ((m = css.match(RE_HSL))) {
            var hsl = m.slice(1,4);
            hsl[1] *= 0.01;
            hsl[2] *= 0.01;
            var rgb$4 = hsl2rgb(hsl);
            rgb$4[3] = 1;
            return rgb$4;
        }

        // hsla(0,100%,50%,0.5)
        if ((m = css.match(RE_HSLA))) {
            var hsl$1 = m.slice(1,4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb(hsl$1);
            rgb$5[3] = +m[4];  // default alpha = 1
            return rgb$5;
        }
    };

    css2rgb$1.test = function (s) {
        return RE_RGB.test(s) ||
            RE_RGBA.test(s) ||
            RE_RGB_PCT.test(s) ||
            RE_RGBA_PCT.test(s) ||
            RE_HSL.test(s) ||
            RE_HSLA.test(s);
    };

    var css2rgb_1 = css2rgb$1;

    var chroma$i = chroma_1;
    var Color$B = Color_1;
    var input$e = input$h;
    var type$k = utils.type;

    var rgb2css = rgb2css_1;
    var css2rgb = css2rgb_1;

    Color$B.prototype.css = function(mode) {
        return rgb2css(this._rgb, mode);
    };

    chroma$i.css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$B, [ null ].concat( args, ['css']) ));
    };

    input$e.format.css = css2rgb;

    input$e.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$k(h) === 'string' && css2rgb.test(h)) {
                return 'css';
            }
        }
    });

    var Color$A = Color_1;
    var chroma$h = chroma_1;
    var input$d = input$h;
    var unpack$t = utils.unpack;

    input$d.format.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$t(args, 'rgba');
        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;
        return rgb;
    };

    chroma$h.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$A, [ null ].concat( args, ['gl']) ));
    };

    Color$A.prototype.gl = function() {
        var rgb = this._rgb;
        return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
    };

    var unpack$s = utils.unpack;

    var rgb2hcg$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$s(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var c = delta * 100 / 255;
        var _g = min / (255 - delta) * 100;
        var h;
        if (delta === 0) {
            h = Number.NaN;
        } else {
            if (r === max) { h = (g - b) / delta; }
            if (g === max) { h = 2+(b - r) / delta; }
            if (b === max) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, c, _g];
    };

    var rgb2hcg_1 = rgb2hcg$1;

    var unpack$r = utils.unpack;
    var floor$3 = Math.floor;

    /*
     * this is basically just HSV with some minor tweaks
     *
     * hue.. [0..360]
     * chroma .. [0..1]
     * grayness .. [0..1]
     */

    var hcg2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$r(args, 'hcg');
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r,g,b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
            r = g = b = _g;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;
            var i = floor$3(h);
            var f = h - i;
            var p = _g * (1 - c);
            var q = p + _c * (1 - f);
            var t = p + _c * f;
            var v = p + _c;
            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var hcg2rgb_1 = hcg2rgb;

    var unpack$q = utils.unpack;
    var type$j = utils.type;
    var chroma$g = chroma_1;
    var Color$z = Color_1;
    var input$c = input$h;

    var rgb2hcg = rgb2hcg_1;

    Color$z.prototype.hcg = function() {
        return rgb2hcg(this._rgb);
    };

    chroma$g.hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$z, [ null ].concat( args, ['hcg']) ));
    };

    input$c.format.hcg = hcg2rgb_1;

    input$c.autodetect.push({
        p: 1,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$q(args, 'hcg');
            if (type$j(args) === 'array' && args.length === 3) {
                return 'hcg';
            }
        }
    });

    var unpack$p = utils.unpack;
    var last = utils.last;
    var round$3 = Math.round;

    var rgb2hex$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$p(args, 'rgba');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last(args) || 'auto';
        if (a === undefined) { a = 1; }
        if (mode === 'auto') {
            mode = a < 1 ? 'rgba' : 'rgb';
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16); //#.toUpperCase();
        str = str.substr(str.length - 6);
        var hxa = '0' + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
            case 'rgba': return ("#" + str + hxa);
            case 'argb': return ("#" + hxa + str);
            default: return ("#" + str);
        }
    };

    var rgb2hex_1 = rgb2hex$2;

    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

    var hex2rgb$1 = function (hex) {
        if (hex.match(RE_HEX)) {
            // remove optional leading #
            if (hex.length === 4 || hex.length === 7) {
                hex = hex.substr(1);
            }
            // expand short-notation to full six-digit
            if (hex.length === 3) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            }
            var u = parseInt(hex, 16);
            var r = u >> 16;
            var g = u >> 8 & 0xFF;
            var b = u & 0xFF;
            return [r,g,b,1];
        }

        // match rgba hex format, eg #FF000077
        if (hex.match(RE_HEXA)) {
            if (hex.length === 5 || hex.length === 9) {
                // remove optional leading #
                hex = hex.substr(1);
            }
            // expand short-notation to full eight-digit
            if (hex.length === 4) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 0xFF;
            var g$1 = u$1 >> 16 & 0xFF;
            var b$1 = u$1 >> 8 & 0xFF;
            var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
            return [r$1,g$1,b$1,a];
        }

        // we used to check for css colors here
        // if _input.css? and rgb = _input.css hex
        //     return rgb

        throw new Error(("unknown hex color: " + hex));
    };

    var hex2rgb_1 = hex2rgb$1;

    var chroma$f = chroma_1;
    var Color$y = Color_1;
    var type$i = utils.type;
    var input$b = input$h;

    var rgb2hex$1 = rgb2hex_1;

    Color$y.prototype.hex = function(mode) {
        return rgb2hex$1(this._rgb, mode);
    };

    chroma$f.hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$y, [ null ].concat( args, ['hex']) ));
    };

    input$b.format.hex = hex2rgb_1;
    input$b.autodetect.push({
        p: 4,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$i(h) === 'string' && [3,4,5,6,7,8,9].indexOf(h.length) >= 0) {
                return 'hex';
            }
        }
    });

    var unpack$o = utils.unpack;
    var TWOPI$2 = utils.TWOPI;
    var min$2 = Math.min;
    var sqrt$4 = Math.sqrt;
    var acos = Math.acos;

    var rgb2hsi$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
        */
        var ref = unpack$o(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min$2(r,g,b);
        var i = (r+g+b) / 3;
        var s = i > 0 ? 1 - min_/i : 0;
        if (s === 0) {
            h = NaN;
        } else {
            h = ((r-g)+(r-b)) / 2;
            h /= sqrt$4((r-g)*(r-g) + (r-b)*(g-b));
            h = acos(h);
            if (b > g) {
                h = TWOPI$2 - h;
            }
            h /= TWOPI$2;
        }
        return [h*360,s,i];
    };

    var rgb2hsi_1 = rgb2hsi$1;

    var unpack$n = utils.unpack;
    var limit = utils.limit;
    var TWOPI$1 = utils.TWOPI;
    var PITHIRD = utils.PITHIRD;
    var cos$4 = Math.cos;

    /*
     * hue [0..360]
     * saturation [0..1]
     * intensity [0..1]
     */
    var hsi2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
        */
        args = unpack$n(args, 'hsi');
        var h = args[0];
        var s = args[1];
        var i = args[2];
        var r,g,b;

        if (isNaN(h)) { h = 0; }
        if (isNaN(s)) { s = 0; }
        // normalize hue
        if (h > 360) { h -= 360; }
        if (h < 0) { h += 360; }
        h /= 360;
        if (h < 1/3) {
            b = (1-s)/3;
            r = (1+s*cos$4(TWOPI$1*h)/cos$4(PITHIRD-TWOPI$1*h))/3;
            g = 1 - (b+r);
        } else if (h < 2/3) {
            h -= 1/3;
            r = (1-s)/3;
            g = (1+s*cos$4(TWOPI$1*h)/cos$4(PITHIRD-TWOPI$1*h))/3;
            b = 1 - (r+g);
        } else {
            h -= 2/3;
            g = (1-s)/3;
            b = (1+s*cos$4(TWOPI$1*h)/cos$4(PITHIRD-TWOPI$1*h))/3;
            r = 1 - (g+b);
        }
        r = limit(i*r*3);
        g = limit(i*g*3);
        b = limit(i*b*3);
        return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
    };

    var hsi2rgb_1 = hsi2rgb;

    var unpack$m = utils.unpack;
    var type$h = utils.type;
    var chroma$e = chroma_1;
    var Color$x = Color_1;
    var input$a = input$h;

    var rgb2hsi = rgb2hsi_1;

    Color$x.prototype.hsi = function() {
        return rgb2hsi(this._rgb);
    };

    chroma$e.hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$x, [ null ].concat( args, ['hsi']) ));
    };

    input$a.format.hsi = hsi2rgb_1;

    input$a.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$m(args, 'hsi');
            if (type$h(args) === 'array' && args.length === 3) {
                return 'hsi';
            }
        }
    });

    var unpack$l = utils.unpack;
    var type$g = utils.type;
    var chroma$d = chroma_1;
    var Color$w = Color_1;
    var input$9 = input$h;

    var rgb2hsl$1 = rgb2hsl_1;

    Color$w.prototype.hsl = function() {
        return rgb2hsl$1(this._rgb);
    };

    chroma$d.hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$w, [ null ].concat( args, ['hsl']) ));
    };

    input$9.format.hsl = hsl2rgb_1;

    input$9.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$l(args, 'hsl');
            if (type$g(args) === 'array' && args.length === 3) {
                return 'hsl';
            }
        }
    });

    var unpack$k = utils.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;

    /*
     * supported arguments:
     * - rgb2hsv(r,g,b)
     * - rgb2hsv([r,g,b])
     * - rgb2hsv({r,g,b})
     */
    var rgb2hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$k(args, 'rgb');
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h,s,v;
        v = max_ / 255.0;
        if (max_ === 0) {
            h = Number.NaN;
            s = 0;
        } else {
            s = delta / max_;
            if (r === max_) { h = (g - b) / delta; }
            if (g === max_) { h = 2+(b - r) / delta; }
            if (b === max_) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, s, v]
    };

    var rgb2hsv$1 = rgb2hsl;

    var unpack$j = utils.unpack;
    var floor$2 = Math.floor;

    var hsv2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$j(args, 'hsv');
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r,g,b;
        v *= 255;
        if (s === 0) {
            r = g = b = v;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;

            var i = floor$2(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r,g,b,args.length > 3?args[3]:1];
    };

    var hsv2rgb_1 = hsv2rgb;

    var unpack$i = utils.unpack;
    var type$f = utils.type;
    var chroma$c = chroma_1;
    var Color$v = Color_1;
    var input$8 = input$h;

    var rgb2hsv = rgb2hsv$1;

    Color$v.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
    };

    chroma$c.hsv = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$v, [ null ].concat( args, ['hsv']) ));
    };

    input$8.format.hsv = hsv2rgb_1;

    input$8.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$i(args, 'hsv');
            if (type$f(args) === 'array' && args.length === 3) {
                return 'hsv';
            }
        }
    });

    var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,

        // D65 standard referent
        Xn: 0.950470,
        Yn: 1,
        Zn: 1.088830,

        t0: 0.137931034,  // 4 / 29
        t1: 0.206896552,  // 6 / 29
        t2: 0.12841855,   // 3 * t1 * t1
        t3: 0.008856452,  // t1 * t1 * t1
    };

    var LAB_CONSTANTS$3 = labConstants;
    var unpack$h = utils.unpack;
    var pow$a = Math.pow;

    var rgb2lab$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$h(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r,g,b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };

    var rgb_xyz = function (r) {
        if ((r /= 255) <= 0.04045) { return r / 12.92; }
        return pow$a((r + 0.055) / 1.055, 2.4);
    };

    var xyz_lab = function (t) {
        if (t > LAB_CONSTANTS$3.t3) { return pow$a(t, 1 / 3); }
        return t / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
    };

    var rgb2xyz = function (r,g,b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS$3.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS$3.Yn);
        var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS$3.Zn);
        return [x,y,z];
    };

    var rgb2lab_1 = rgb2lab$2;

    var LAB_CONSTANTS$2 = labConstants;
    var unpack$g = utils.unpack;
    var pow$9 = Math.pow;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var lab2rgb$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$g(args, 'lab');
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x,y,z, r,g,b_;

        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;

        y = LAB_CONSTANTS$2.Yn * lab_xyz(y);
        x = LAB_CONSTANTS$2.Xn * lab_xyz(x);
        z = LAB_CONSTANTS$2.Zn * lab_xyz(z);

        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
        g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

        return [r,g,b_,args.length > 3 ? args[3] : 1];
    };

    var xyz_rgb = function (r) {
        return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$9(r, 1 / 2.4) - 0.055)
    };

    var lab_xyz = function (t) {
        return t > LAB_CONSTANTS$2.t1 ? t * t * t : LAB_CONSTANTS$2.t2 * (t - LAB_CONSTANTS$2.t0)
    };

    var lab2rgb_1 = lab2rgb$1;

    var unpack$f = utils.unpack;
    var type$e = utils.type;
    var chroma$b = chroma_1;
    var Color$u = Color_1;
    var input$7 = input$h;

    var rgb2lab$1 = rgb2lab_1;

    Color$u.prototype.lab = function() {
        return rgb2lab$1(this._rgb);
    };

    chroma$b.lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$u, [ null ].concat( args, ['lab']) ));
    };

    input$7.format.lab = lab2rgb_1;

    input$7.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$f(args, 'lab');
            if (type$e(args) === 'array' && args.length === 3) {
                return 'lab';
            }
        }
    });

    var unpack$e = utils.unpack;
    var RAD2DEG = utils.RAD2DEG;
    var sqrt$3 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var round$2 = Math.round;

    var lab2lch$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$e(args, 'lab');
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$3(a * a + b * b);
        var h = (atan2$2(b, a) * RAD2DEG + 360) % 360;
        if (round$2(c*10000) === 0) { h = Number.NaN; }
        return [l, c, h];
    };

    var lab2lch_1 = lab2lch$2;

    var unpack$d = utils.unpack;
    var rgb2lab = rgb2lab_1;
    var lab2lch$1 = lab2lch_1;

    var rgb2lch$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$d(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab(r,g,b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch$1(l,a,b_);
    };

    var rgb2lch_1 = rgb2lch$1;

    var unpack$c = utils.unpack;
    var DEG2RAD = utils.DEG2RAD;
    var sin$3 = Math.sin;
    var cos$3 = Math.cos;

    var lch2lab$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
        These formulas were invented by David Dalrymple to obtain maximum contrast without going
        out of gamut if the parameters are in the range 0-1.

        A saturation multiplier was added by Gregor Aisch
        */
        var ref = unpack$c(args, 'lch');
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) { h = 0; }
        h = h * DEG2RAD;
        return [l, cos$3(h) * c, sin$3(h) * c]
    };

    var lch2lab_1 = lch2lab$2;

    var unpack$b = utils.unpack;
    var lch2lab$1 = lch2lab_1;
    var lab2rgb = lab2rgb_1;

    var lch2rgb$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$b(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab$1 (l,c,h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb (L,a,b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var lch2rgb_1 = lch2rgb$1;

    var unpack$a = utils.unpack;
    var lch2rgb = lch2rgb_1;

    var hcl2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hcl = unpack$a(args, 'hcl').reverse();
        return lch2rgb.apply(void 0, hcl);
    };

    var hcl2rgb_1 = hcl2rgb;

    var unpack$9 = utils.unpack;
    var type$d = utils.type;
    var chroma$a = chroma_1;
    var Color$t = Color_1;
    var input$6 = input$h;

    var rgb2lch = rgb2lch_1;

    Color$t.prototype.lch = function() { return rgb2lch(this._rgb); };
    Color$t.prototype.hcl = function() { return rgb2lch(this._rgb).reverse(); };

    chroma$a.lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$t, [ null ].concat( args, ['lch']) ));
    };
    chroma$a.hcl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$t, [ null ].concat( args, ['hcl']) ));
    };

    input$6.format.lch = lch2rgb_1;
    input$6.format.hcl = hcl2rgb_1;

    ['lch','hcl'].forEach(function (m) { return input$6.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$9(args, m);
            if (type$d(args) === 'array' && args.length === 3) {
                return m;
            }
        }
    }); });

    /**
    	X11 color names

    	http://www.w3.org/TR/css3-color/#svg-color
    */

    var w3cx11$1 = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflower: '#6495ed',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        laserlemon: '#ffff54',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrod: '#fafad2',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        maroon2: '#7f0000',
        maroon3: '#b03060',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        purple2: '#7f007f',
        purple3: '#a020f0',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
    };

    var w3cx11_1 = w3cx11$1;

    var Color$s = Color_1;
    var input$5 = input$h;
    var type$c = utils.type;

    var w3cx11 = w3cx11_1;
    var hex2rgb = hex2rgb_1;
    var rgb2hex = rgb2hex_1;

    Color$s.prototype.name = function() {
        var hex = rgb2hex(this._rgb, 'rgb');
        for (var i = 0, list = Object.keys(w3cx11); i < list.length; i += 1) {
            var n = list[i];

            if (w3cx11[n] === hex) { return n.toLowerCase(); }
        }
        return hex;
    };

    input$5.format.named = function (name) {
        name = name.toLowerCase();
        if (w3cx11[name]) { return hex2rgb(w3cx11[name]); }
        throw new Error('unknown color name: '+name);
    };

    input$5.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$c(h) === 'string' && w3cx11[h.toLowerCase()]) {
                return 'named';
            }
        }
    });

    var unpack$8 = utils.unpack;

    var rgb2num$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$8(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
    };

    var rgb2num_1 = rgb2num$1;

    var type$b = utils.type;

    var num2rgb = function (num) {
        if (type$b(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
            var r = num >> 16;
            var g = (num >> 8) & 0xFF;
            var b = num & 0xFF;
            return [r,g,b,1];
        }
        throw new Error("unknown num color: "+num);
    };

    var num2rgb_1 = num2rgb;

    var chroma$9 = chroma_1;
    var Color$r = Color_1;
    var input$4 = input$h;
    var type$a = utils.type;

    var rgb2num = rgb2num_1;

    Color$r.prototype.num = function() {
        return rgb2num(this._rgb);
    };

    chroma$9.num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$r, [ null ].concat( args, ['num']) ));
    };

    input$4.format.num = num2rgb_1;

    input$4.autodetect.push({
        p: 5,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            if (args.length === 1 && type$a(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                return 'num';
            }
        }
    });

    var chroma$8 = chroma_1;
    var Color$q = Color_1;
    var input$3 = input$h;
    var unpack$7 = utils.unpack;
    var type$9 = utils.type;
    var round$1 = Math.round;

    Color$q.prototype.rgb = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        if (rnd === false) { return this._rgb.slice(0,3); }
        return this._rgb.slice(0,3).map(round$1);
    };

    Color$q.prototype.rgba = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        return this._rgb.slice(0,4).map(function (v,i) {
            return i<3 ? (rnd === false ? v : round$1(v)) : v;
        });
    };

    chroma$8.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$q, [ null ].concat( args, ['rgb']) ));
    };

    input$3.format.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$7(args, 'rgba');
        if (rgba[3] === undefined) { rgba[3] = 1; }
        return rgba;
    };

    input$3.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$7(args, 'rgba');
            if (type$9(args) === 'array' && (args.length === 3 ||
                args.length === 4 && type$9(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                return 'rgb';
            }
        }
    });

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     */

    var log$1 = Math.log;

    var temperature2rgb$1 = function (kelvin) {
        var temp = kelvin / 100;
        var r,g,b;
        if (temp < 66) {
            r = 255;
            g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log$1(g);
            b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log$1(b);
        } else {
            r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log$1(r);
            g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log$1(g);
            b = 255;
        }
        return [r,g,b,1];
    };

    var temperature2rgb_1 = temperature2rgb$1;

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     **/

    var temperature2rgb = temperature2rgb_1;
    var unpack$6 = utils.unpack;
    var round = Math.round;

    var rgb2temperature$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$6(args, 'rgb');
        var r = rgb[0], b = rgb[2];
        var minTemp = 1000;
        var maxTemp = 40000;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb(temp);
            if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                maxTemp = temp;
            } else {
                minTemp = temp;
            }
        }
        return round(temp);
    };

    var rgb2temperature_1 = rgb2temperature$1;

    var chroma$7 = chroma_1;
    var Color$p = Color_1;
    var input$2 = input$h;

    var rgb2temperature = rgb2temperature_1;

    Color$p.prototype.temp =
    Color$p.prototype.kelvin =
    Color$p.prototype.temperature = function() {
        return rgb2temperature(this._rgb);
    };

    chroma$7.temp =
    chroma$7.kelvin =
    chroma$7.temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$p, [ null ].concat( args, ['temp']) ));
    };

    input$2.format.temp =
    input$2.format.kelvin =
    input$2.format.temperature = temperature2rgb_1;

    var unpack$5 = utils.unpack;
    var cbrt = Math.cbrt;
    var pow$8 = Math.pow;
    var sign$1 = Math.sign;

    var rgb2oklab$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        // OKLab color space implementation taken from
        // https://bottosson.github.io/posts/oklab/
        var ref = unpack$5(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b / 255)];
        var lr = ref$1[0];
        var lg = ref$1[1];
        var lb = ref$1[2];
        var l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
        var m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
        var s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);

        return [
            0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
            1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
            0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
        ];
    };

    var rgb2oklab_1 = rgb2oklab$2;

    function rgb2lrgb(c) {
        var abs = Math.abs(c);
        if (abs < 0.04045) {
            return c / 12.92;
        }
        return (sign$1(c) || 1) * pow$8((abs + 0.055) / 1.055, 2.4);
    }

    var unpack$4 = utils.unpack;
    var pow$7 = Math.pow;
    var sign = Math.sign;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var oklab2rgb$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$4(args, 'lab');
        var L = args[0];
        var a = args[1];
        var b = args[2];

        var l = pow$7(L + 0.3963377774 * a + 0.2158037573 * b, 3);
        var m = pow$7(L - 0.1055613458 * a - 0.0638541728 * b, 3);
        var s = pow$7(L - 0.0894841775 * a - 1.291485548 * b, 3);

        return [
            255 * lrgb2rgb(+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
            255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
            255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
            args.length > 3 ? args[3] : 1
        ];
    };

    var oklab2rgb_1 = oklab2rgb$1;

    function lrgb2rgb(c) {
        var abs = Math.abs(c);
        if (abs > 0.0031308) {
            return (sign(c) || 1) * (1.055 * pow$7(abs, 1 / 2.4) - 0.055);
        }
        return c * 12.92;
    }

    var unpack$3 = utils.unpack;
    var type$8 = utils.type;
    var chroma$6 = chroma_1;
    var Color$o = Color_1;
    var input$1 = input$h;

    var rgb2oklab$1 = rgb2oklab_1;

    Color$o.prototype.oklab = function () {
        return rgb2oklab$1(this._rgb);
    };

    chroma$6.oklab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$o, [ null ].concat( args, ['oklab']) ));
    };

    input$1.format.oklab = oklab2rgb_1;

    input$1.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$3(args, 'oklab');
            if (type$8(args) === 'array' && args.length === 3) {
                return 'oklab';
            }
        }
    });

    var unpack$2 = utils.unpack;
    var rgb2oklab = rgb2oklab_1;
    var lab2lch = lab2lch_1;

    var rgb2oklch$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$2(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2oklab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch(l, a, b_);
    };

    var rgb2oklch_1 = rgb2oklch$1;

    var unpack$1 = utils.unpack;
    var lch2lab = lch2lab_1;
    var oklab2rgb = oklab2rgb_1;

    var oklch2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$1(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = oklab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var oklch2rgb_1 = oklch2rgb;

    var unpack = utils.unpack;
    var type$7 = utils.type;
    var chroma$5 = chroma_1;
    var Color$n = Color_1;
    var input = input$h;

    var rgb2oklch = rgb2oklch_1;

    Color$n.prototype.oklch = function () {
        return rgb2oklch(this._rgb);
    };

    chroma$5.oklch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$n, [ null ].concat( args, ['oklch']) ));
    };

    input.format.oklch = oklch2rgb_1;

    input.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack(args, 'oklch');
            if (type$7(args) === 'array' && args.length === 3) {
                return 'oklch';
            }
        }
    });

    var Color$m = Color_1;
    var type$6 = utils.type;

    Color$m.prototype.alpha = function(a, mutate) {
        if ( mutate === void 0 ) mutate=false;

        if (a !== undefined && type$6(a) === 'number') {
            if (mutate) {
                this._rgb[3] = a;
                return this;
            }
            return new Color$m([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
        }
        return this._rgb[3];
    };

    var Color$l = Color_1;

    Color$l.prototype.clipped = function() {
        return this._rgb._clipped || false;
    };

    var Color$k = Color_1;
    var LAB_CONSTANTS$1 = labConstants;

    Color$k.prototype.darken = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lab = me.lab();
    	lab[0] -= LAB_CONSTANTS$1.Kn * amount;
    	return new Color$k(lab, 'lab').alpha(me.alpha(), true);
    };

    Color$k.prototype.brighten = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.darken(-amount);
    };

    Color$k.prototype.darker = Color$k.prototype.darken;
    Color$k.prototype.brighter = Color$k.prototype.brighten;

    var Color$j = Color_1;

    Color$j.prototype.get = function (mc) {
        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
            if (i > -1) { return src[i]; }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var Color$i = Color_1;
    var type$5 = utils.type;
    var pow$6 = Math.pow;

    var EPS = 1e-7;
    var MAX_ITER = 20;

    Color$i.prototype.luminance = function(lum) {
        if (lum !== undefined && type$5(lum) === 'number') {
            if (lum === 0) {
                // return pure black
                return new Color$i([0,0,0,this._rgb[3]], 'rgb');
            }
            if (lum === 1) {
                // return pure white
                return new Color$i([255,255,255,this._rgb[3]], 'rgb');
            }
            // compute new color using...
            var cur_lum = this.luminance();
            var mode = 'rgb';
            var max_iter = MAX_ITER;

            var test = function (low, high) {
                var mid = low.interpolate(high, 0.5, mode);
                var lm = mid.luminance();
                if (Math.abs(lum - lm) < EPS || !max_iter--) {
                    // close enough
                    return mid;
                }
                return lm > lum ? test(low, mid) : test(mid, high);
            };

            var rgb = (cur_lum > lum ? test(new Color$i([0,0,0]), this) : test(this, new Color$i([255,255,255]))).rgb();
            return new Color$i(rgb.concat( [this._rgb[3]]));
        }
        return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
    };


    var rgb2luminance = function (r,g,b) {
        // relative luminance
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    var luminance_x = function (x) {
        x /= 255;
        return x <= 0.03928 ? x/12.92 : pow$6((x+0.055)/1.055, 2.4);
    };

    var interpolator$1 = {};

    var Color$h = Color_1;
    var type$4 = utils.type;
    var interpolator = interpolator$1;

    var mix$1 = function (col1, col2, f) {
        if ( f === void 0 ) f=0.5;
        var rest = [], len = arguments.length - 3;
        while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

        var mode = rest[0] || 'lrgb';
        if (!interpolator[mode] && !rest.length) {
            // fall back to the first supported mode
            mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
            throw new Error(("interpolation mode " + mode + " is not defined"));
        }
        if (type$4(col1) !== 'object') { col1 = new Color$h(col1); }
        if (type$4(col2) !== 'object') { col2 = new Color$h(col2); }
        return interpolator[mode](col1, col2, f)
            .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };

    var Color$g = Color_1;
    var mix = mix$1;

    Color$g.prototype.mix =
    Color$g.prototype.interpolate = function(col2, f) {
    	if ( f === void 0 ) f=0.5;
    	var rest = [], len = arguments.length - 2;
    	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

    	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
    };

    var Color$f = Color_1;

    Color$f.prototype.premultiply = function(mutate) {
    	if ( mutate === void 0 ) mutate=false;

    	var rgb = this._rgb;
    	var a = rgb[3];
    	if (mutate) {
    		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
    		return this;
    	} else {
    		return new Color$f([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
    	}
    };

    var Color$e = Color_1;
    var LAB_CONSTANTS = labConstants;

    Color$e.prototype.saturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lch = me.lch();
    	lch[1] += LAB_CONSTANTS.Kn * amount;
    	if (lch[1] < 0) { lch[1] = 0; }
    	return new Color$e(lch, 'lch').alpha(me.alpha(), true);
    };

    Color$e.prototype.desaturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.saturate(-amount);
    };

    var Color$d = Color_1;
    var type$3 = utils.type;

    Color$d.prototype.set = function (mc, value, mutate) {
        if ( mutate === void 0 ) mutate = false;

        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
            if (i > -1) {
                if (type$3(value) == 'string') {
                    switch (value.charAt(0)) {
                        case '+':
                            src[i] += +value;
                            break;
                        case '-':
                            src[i] += +value;
                            break;
                        case '*':
                            src[i] *= +value.substr(1);
                            break;
                        case '/':
                            src[i] /= +value.substr(1);
                            break;
                        default:
                            src[i] = +value;
                    }
                } else if (type$3(value) === 'number') {
                    src[i] = value;
                } else {
                    throw new Error("unsupported value for Color.set");
                }
                var out = new Color$d(src, mode);
                if (mutate) {
                    this._rgb = out._rgb;
                    return this;
                }
                return out;
            }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var Color$c = Color_1;

    var rgb = function (col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color$c(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'rgb'
        )
    };

    // register interpolator
    interpolator$1.rgb = rgb;

    var Color$b = Color_1;
    var sqrt$2 = Math.sqrt;
    var pow$5 = Math.pow;

    var lrgb = function (col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color$b(
            sqrt$2(pow$5(x1,2) * (1-f) + pow$5(x2,2) * f),
            sqrt$2(pow$5(y1,2) * (1-f) + pow$5(y2,2) * f),
            sqrt$2(pow$5(z1,2) * (1-f) + pow$5(z2,2) * f),
            'rgb'
        )
    };

    // register interpolator
    interpolator$1.lrgb = lrgb;

    var Color$a = Color_1;

    var lab = function (col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color$a(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'lab'
        )
    };

    // register interpolator
    interpolator$1.lab = lab;

    var Color$9 = Color_1;

    var _hsx = function (col1, col2, f, m) {
        var assign, assign$1;

        var xyz0, xyz1;
        if (m === 'hsl') {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
        } else if (m === 'hsv') {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
        } else if (m === 'hcg') {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
        } else if (m === 'hsi') {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
        } else if (m === 'lch' || m === 'hcl') {
            m = 'hcl';
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
        } else if (m === 'oklch') {
            xyz0 = col1.oklch().reverse();
            xyz1 = col2.oklch().reverse();
        }

        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === 'h' || m === 'oklch') {
            (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
            (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
        }

        var sat, hue, lbv, dh;

        if (!isNaN(hue0) && !isNaN(hue1)) {
            // both colors have hue
            if (hue1 > hue0 && hue1 - hue0 > 180) {
                dh = hue1 - (hue0 + 360);
            } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                dh = hue1 + 360 - hue0;
            } else {
                dh = hue1 - hue0;
            }
            hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
        } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
        } else {
            hue = Number.NaN;
        }

        if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
        lbv = lbv0 + f * (lbv1 - lbv0);
        return m === 'oklch' ? new Color$9([lbv, sat, hue], m) : new Color$9([hue, sat, lbv], m);
    };

    var interpolate_hsx$5 = _hsx;

    var lch = function (col1, col2, f) {
    	return interpolate_hsx$5(col1, col2, f, 'lch');
    };

    // register interpolator
    interpolator$1.lch = lch;
    interpolator$1.hcl = lch;

    var Color$8 = Color_1;

    var num = function (col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color$8(c1 + f * (c2-c1), 'num')
    };

    // register interpolator
    interpolator$1.num = num;

    var interpolate_hsx$4 = _hsx;

    var hcg = function (col1, col2, f) {
    	return interpolate_hsx$4(col1, col2, f, 'hcg');
    };

    // register interpolator
    interpolator$1.hcg = hcg;

    var interpolate_hsx$3 = _hsx;

    var hsi = function (col1, col2, f) {
    	return interpolate_hsx$3(col1, col2, f, 'hsi');
    };

    // register interpolator
    interpolator$1.hsi = hsi;

    var interpolate_hsx$2 = _hsx;

    var hsl = function (col1, col2, f) {
    	return interpolate_hsx$2(col1, col2, f, 'hsl');
    };

    // register interpolator
    interpolator$1.hsl = hsl;

    var interpolate_hsx$1 = _hsx;

    var hsv = function (col1, col2, f) {
    	return interpolate_hsx$1(col1, col2, f, 'hsv');
    };

    // register interpolator
    interpolator$1.hsv = hsv;

    var Color$7 = Color_1;

    var oklab = function (col1, col2, f) {
        var xyz0 = col1.oklab();
        var xyz1 = col2.oklab();
        return new Color$7(
            xyz0[0] + f * (xyz1[0] - xyz0[0]),
            xyz0[1] + f * (xyz1[1] - xyz0[1]),
            xyz0[2] + f * (xyz1[2] - xyz0[2]),
            'oklab'
        );
    };

    // register interpolator
    interpolator$1.oklab = oklab;

    var interpolate_hsx = _hsx;

    var oklch = function (col1, col2, f) {
        return interpolate_hsx(col1, col2, f, 'oklch');
    };

    // register interpolator
    interpolator$1.oklch = oklch;

    var Color$6 = Color_1;
    var clip_rgb$1 = utils.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$1 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$2 = Math.sin;
    var atan2$1 = Math.atan2;

    var average = function (colors, mode, weights) {
        if ( mode === void 0 ) mode='lrgb';
        if ( weights === void 0 ) weights=null;

        var l = colors.length;
        if (!weights) { weights = Array.from(new Array(l)).map(function () { return 1; }); }
        // normalize weights
        var k = l / weights.reduce(function(a, b) { return a + b; });
        weights.forEach(function (w,i) { weights[i] *= k; });
        // convert colors to Color objects
        colors = colors.map(function (c) { return new Color$6(c); });
        if (mode === 'lrgb') {
            return _average_lrgb(colors, weights)
        }
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        // initial color
        for (var i=0; i<xyz.length; i++) {
            xyz[i] = (xyz[i] || 0) * weights[0];
            cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
            if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                var A = xyz[i] / 180 * PI$1;
                dx += cos$2(A) * weights[0];
                dy += sin$2(A) * weights[0];
            }
        }

        var alpha = first.alpha() * weights[0];
        colors.forEach(function (c,ci) {
            var xyz2 = c.get(mode);
            alpha += c.alpha() * weights[ci+1];
            for (var i=0; i<xyz.length; i++) {
                if (!isNaN(xyz2[i])) {
                    cnt[i] += weights[ci+1];
                    if (mode.charAt(i) === 'h') {
                        var A = xyz2[i] / 180 * PI$1;
                        dx += cos$2(A) * weights[ci+1];
                        dy += sin$2(A) * weights[ci+1];
                    } else {
                        xyz[i] += xyz2[i] * weights[ci+1];
                    }
                }
            }
        });

        for (var i$1=0; i$1<xyz.length; i$1++) {
            if (mode.charAt(i$1) === 'h') {
                var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                while (A$1 < 0) { A$1 += 360; }
                while (A$1 >= 360) { A$1 -= 360; }
                xyz[i$1] = A$1;
            } else {
                xyz[i$1] = xyz[i$1]/cnt[i$1];
            }
        }
        alpha /= l;
        return (new Color$6(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };


    var _average_lrgb = function (colors, weights) {
        var l = colors.length;
        var xyz = [0,0,0,0];
        for (var i=0; i < colors.length; i++) {
            var col = colors[i];
            var f = weights[i] / l;
            var rgb = col._rgb;
            xyz[0] += pow$4(rgb[0],2) * f;
            xyz[1] += pow$4(rgb[1],2) * f;
            xyz[2] += pow$4(rgb[2],2) * f;
            xyz[3] += rgb[3] * f;
        }
        xyz[0] = sqrt$1(xyz[0]);
        xyz[1] = sqrt$1(xyz[1]);
        xyz[2] = sqrt$1(xyz[2]);
        if (xyz[3] > 0.9999999) { xyz[3] = 1; }
        return new Color$6(clip_rgb$1(xyz));
    };

    // minimal multi-purpose interface

    // @requires utils color analyze

    var chroma$4 = chroma_1;
    var type$2 = utils.type;

    var pow$3 = Math.pow;

    var scale$2 = function(colors) {

        // constructor
        var _mode = 'rgb';
        var _nacol = chroma$4('#ccc');
        var _spread = 0;
        // const _fixed = false;
        var _domain = [0, 1];
        var _pos = [];
        var _padding = [0,0];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;

        // private methods

        var setColors = function(colors) {
            colors = colors || ['#fff', '#000'];
            if (colors && type$2(colors) === 'string' && chroma$4.brewer &&
                chroma$4.brewer[colors.toLowerCase()]) {
                colors = chroma$4.brewer[colors.toLowerCase()];
            }
            if (type$2(colors) === 'array') {
                // handle single color
                if (colors.length === 1) {
                    colors = [colors[0], colors[0]];
                }
                // make a copy of the colors
                colors = colors.slice(0);
                // convert to chroma classes
                for (var c=0; c<colors.length; c++) {
                    colors[c] = chroma$4(colors[c]);
                }
                // auto-fill color position
                _pos.length = 0;
                for (var c$1=0; c$1<colors.length; c$1++) {
                    _pos.push(c$1/(colors.length-1));
                }
            }
            resetCache();
            return _colors = colors;
        };

        var getClass = function(value) {
            if (_classes != null) {
                var n = _classes.length-1;
                var i = 0;
                while (i < n && value >= _classes[i]) {
                    i++;
                }
                return i-1;
            }
            return 0;
        };

        var tMapLightness = function (t) { return t; };
        var tMapDomain = function (t) { return t; };

        // const classifyValue = function(value) {
        //     let val = value;
        //     if (_classes.length > 2) {
        //         const n = _classes.length-1;
        //         const i = getClass(value);
        //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
        //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
        //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
        //     }
        //     return val;
        // };

        var getColor = function(val, bypassMap) {
            var col, t;
            if (bypassMap == null) { bypassMap = false; }
            if (isNaN(val) || (val === null)) { return _nacol; }
            if (!bypassMap) {
                if (_classes && (_classes.length > 2)) {
                    // find the class
                    var c = getClass(val);
                    t = c / (_classes.length-2);
                } else if (_max !== _min) {
                    // just interpolate between min/max
                    t = (val - _min) / (_max - _min);
                } else {
                    t = 1;
                }
            } else {
                t = val;
            }

            // domain map
            t = tMapDomain(t);

            if (!bypassMap) {
                t = tMapLightness(t);  // lightness correction
            }

            if (_gamma !== 1) { t = pow$3(t, _gamma); }

            t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

            t = Math.min(1, Math.max(0, t));

            var k = Math.floor(t * 10000);

            if (_useCache && _colorCache[k]) {
                col = _colorCache[k];
            } else {
                if (type$2(_colors) === 'array') {
                    //for i in [0.._pos.length-1]
                    for (var i=0; i<_pos.length; i++) {
                        var p = _pos[i];
                        if (t <= p) {
                            col = _colors[i];
                            break;
                        }
                        if ((t >= p) && (i === (_pos.length-1))) {
                            col = _colors[i];
                            break;
                        }
                        if (t > p && t < _pos[i+1]) {
                            t = (t-p)/(_pos[i+1]-p);
                            col = chroma$4.interpolate(_colors[i], _colors[i+1], t, _mode);
                            break;
                        }
                    }
                } else if (type$2(_colors) === 'function') {
                    col = _colors(t);
                }
                if (_useCache) { _colorCache[k] = col; }
            }
            return col;
        };

        var resetCache = function () { return _colorCache = {}; };

        setColors(colors);

        // public interface

        var f = function(v) {
            var c = chroma$4(getColor(v));
            if (_out && c[_out]) { return c[_out](); } else { return c; }
        };

        f.classes = function(classes) {
            if (classes != null) {
                if (type$2(classes) === 'array') {
                    _classes = classes;
                    _domain = [classes[0], classes[classes.length-1]];
                } else {
                    var d = chroma$4.analyze(_domain);
                    if (classes === 0) {
                        _classes = [d.min, d.max];
                    } else {
                        _classes = chroma$4.limits(d, 'e', classes);
                    }
                }
                return f;
            }
            return _classes;
        };


        f.domain = function(domain) {
            if (!arguments.length) {
                return _domain;
            }
            _min = domain[0];
            _max = domain[domain.length-1];
            _pos = [];
            var k = _colors.length;
            if ((domain.length === k) && (_min !== _max)) {
                // update positions
                for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                    var d = list[i];

                  _pos.push((d-_min) / (_max-_min));
                }
            } else {
                for (var c=0; c<k; c++) {
                    _pos.push(c/(k-1));
                }
                if (domain.length > 2) {
                    // set domain map
                    var tOut = domain.map(function (d,i) { return i/(domain.length-1); });
                    var tBreaks = domain.map(function (d) { return (d - _min) / (_max - _min); });
                    if (!tBreaks.every(function (val, i) { return tOut[i] === val; })) {
                        tMapDomain = function (t) {
                            if (t <= 0 || t >= 1) { return t; }
                            var i = 0;
                            while (t >= tBreaks[i+1]) { i++; }
                            var f = (t - tBreaks[i]) / (tBreaks[i+1] - tBreaks[i]);
                            var out = tOut[i] + f * (tOut[i+1] - tOut[i]);
                            return out;
                        };
                    }

                }
            }
            _domain = [_min, _max];
            return f;
        };

        f.mode = function(_m) {
            if (!arguments.length) {
                return _mode;
            }
            _mode = _m;
            resetCache();
            return f;
        };

        f.range = function(colors, _pos) {
            setColors(colors);
            return f;
        };

        f.out = function(_o) {
            _out = _o;
            return f;
        };

        f.spread = function(val) {
            if (!arguments.length) {
                return _spread;
            }
            _spread = val;
            return f;
        };

        f.correctLightness = function(v) {
            if (v == null) { v = true; }
            _correctLightness = v;
            resetCache();
            if (_correctLightness) {
                tMapLightness = function(t) {
                    var L0 = getColor(0, true).lab()[0];
                    var L1 = getColor(1, true).lab()[0];
                    var pol = L0 > L1;
                    var L_actual = getColor(t, true).lab()[0];
                    var L_ideal = L0 + ((L1 - L0) * t);
                    var L_diff = L_actual - L_ideal;
                    var t0 = 0;
                    var t1 = 1;
                    var max_iter = 20;
                    while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                        (function() {
                            if (pol) { L_diff *= -1; }
                            if (L_diff < 0) {
                                t0 = t;
                                t += (t1 - t) * 0.5;
                            } else {
                                t1 = t;
                                t += (t0 - t) * 0.5;
                            }
                            L_actual = getColor(t, true).lab()[0];
                            return L_diff = L_actual - L_ideal;
                        })();
                    }
                    return t;
                };
            } else {
                tMapLightness = function (t) { return t; };
            }
            return f;
        };

        f.padding = function(p) {
            if (p != null) {
                if (type$2(p) === 'number') {
                    p = [p,p];
                }
                _padding = p;
                return f;
            } else {
                return _padding;
            }
        };

        f.colors = function(numColors, out) {
            // If no arguments are given, return the original colors that were provided
            if (arguments.length < 2) { out = 'hex'; }
            var result = [];

            if (arguments.length === 0) {
                result = _colors.slice(0);

            } else if (numColors === 1) {
                result = [f(0.5)];

            } else if (numColors > 1) {
                var dm = _domain[0];
                var dd = _domain[1] - dm;
                result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

            } else { // returns all colors based on the defined classes
                colors = [];
                var samples = [];
                if (_classes && (_classes.length > 2)) {
                    for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                        samples.push((_classes[i-1]+_classes[i])*0.5);
                    }
                } else {
                    samples = _domain;
                }
                result = samples.map(function (v) { return f(v); });
            }

            if (chroma$4[out]) {
                result = result.map(function (c) { return c[out](); });
            }
            return result;
        };

        f.cache = function(c) {
            if (c != null) {
                _useCache = c;
                return f;
            } else {
                return _useCache;
            }
        };

        f.gamma = function(g) {
            if (g != null) {
                _gamma = g;
                return f;
            } else {
                return _gamma;
            }
        };

        f.nodata = function(d) {
            if (d != null) {
                _nacol = chroma$4(d);
                return f;
            } else {
                return _nacol;
            }
        };

        return f;
    };

    function __range__(left, right, inclusive) {
      var range = [];
      var ascending = left < right;
      var end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
      }
      return range;
    }

    //
    // interpolates between a set of colors uzing a bezier spline
    //

    // @requires utils lab
    var Color$5 = Color_1;

    var scale$1 = scale$2;

    // nth row of the pascal triangle
    var binom_row = function(n) {
        var row = [1, 1];
        for (var i = 1; i < n; i++) {
            var newrow = [1];
            for (var j = 1; j <= row.length; j++) {
                newrow[j] = (row[j] || 0) + row[j - 1];
            }
            row = newrow;
        }
        return row;
    };

    var bezier = function(colors) {
        var assign, assign$1, assign$2;

        var I, lab0, lab1, lab2;
        colors = colors.map(function (c) { return new Color$5(c); });
        if (colors.length === 2) {
            // linear interpolation
            (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                return new Color$5(lab, 'lab');
            };
        } else if (colors.length === 3) {
            // quadratic bezier interpolation
            (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                return new Color$5(lab, 'lab');
            };
        } else if (colors.length === 4) {
            // cubic bezier interpolation
            var lab3;
            (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                return new Color$5(lab, 'lab');
            };
        } else if (colors.length >= 5) {
            // general case (degree n bezier)
            var labs, row, n;
            labs = colors.map(function (c) { return c.lab(); });
            n = colors.length - 1;
            row = binom_row(n);
            I = function (t) {
                var u = 1 - t;
                var lab = ([0, 1, 2].map(function (i) { return labs.reduce(function (sum, el, j) { return (sum + row[j] * Math.pow( u, (n - j) ) * Math.pow( t, j ) * el[i]); }, 0); }));
                return new Color$5(lab, 'lab');
            };
        } else {
            throw new RangeError("No point in running bezier with only one color.")
        }
        return I;
    };

    var bezier_1 = function (colors) {
        var f = bezier(colors);
        f.scale = function () { return scale$1(f); };
        return f;
    };

    /*
     * interpolates between a set of colors uzing a bezier spline
     * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
     */

    var chroma$3 = chroma_1;

    var blend = function (bottom, top, mode) {
        if (!blend[mode]) {
            throw new Error('unknown blend mode ' + mode);
        }
        return blend[mode](bottom, top);
    };

    var blend_f = function (f) { return function (bottom,top) {
            var c0 = chroma$3(top).rgb();
            var c1 = chroma$3(bottom).rgb();
            return chroma$3.rgb(f(c0, c1));
        }; };

    var each = function (f) { return function (c0, c1) {
            var out = [];
            out[0] = f(c0[0], c1[0]);
            out[1] = f(c0[1], c1[1]);
            out[2] = f(c0[2], c1[2]);
            return out;
        }; };

    var normal = function (a) { return a; };
    var multiply = function (a,b) { return a * b / 255; };
    var darken = function (a,b) { return a > b ? b : a; };
    var lighten = function (a,b) { return a > b ? a : b; };
    var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
    var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
    var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
    var dodge = function (a,b) {
        if (a === 255) { return 255; }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a
    };

    // # add = (a,b) ->
    // #     if (a + b > 255) then 255 else a + b

    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    // blend.add = blend_f(each(add));

    var blend_1 = blend;

    // cubehelix interpolation
    // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
    // http://astron-soc.in/bulletin/11June/289392011.pdf

    var type$1 = utils.type;
    var clip_rgb = utils.clip_rgb;
    var TWOPI = utils.TWOPI;
    var pow$2 = Math.pow;
    var sin$1 = Math.sin;
    var cos$1 = Math.cos;
    var chroma$2 = chroma_1;

    var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if ( start === void 0 ) start=300;
        if ( rotations === void 0 ) rotations=-1.5;
        if ( hue === void 0 ) hue=1;
        if ( gamma === void 0 ) gamma=1;
        if ( lightness === void 0 ) lightness=[0,1];

        var dh = 0, dl;
        if (type$1(lightness) === 'array') {
            dl = lightness[1] - lightness[0];
        } else {
            dl = 0;
            lightness = [lightness, lightness];
        }

        var f = function(fract) {
            var a = TWOPI * (((start+120)/360) + (rotations * fract));
            var l = pow$2(lightness[0] + (dl * fract), gamma);
            var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
            var amp = (h * l * (1-l)) / 2;
            var cos_a = cos$1(a);
            var sin_a = sin$1(a);
            var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
            var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
            var b = l + (amp * (+1.97294 * cos_a));
            return chroma$2(clip_rgb([r*255,g*255,b*255,1]));
        };

        f.start = function(s) {
            if ((s == null)) { return start; }
            start = s;
            return f;
        };

        f.rotations = function(r) {
            if ((r == null)) { return rotations; }
            rotations = r;
            return f;
        };

        f.gamma = function(g) {
            if ((g == null)) { return gamma; }
            gamma = g;
            return f;
        };

        f.hue = function(h) {
            if ((h == null)) { return hue; }
            hue = h;
            if (type$1(hue) === 'array') {
                dh = hue[1] - hue[0];
                if (dh === 0) { hue = hue[1]; }
            } else {
                dh = 0;
            }
            return f;
        };

        f.lightness = function(h) {
            if ((h == null)) { return lightness; }
            if (type$1(h) === 'array') {
                lightness = h;
                dl = h[1] - h[0];
            } else {
                lightness = [h,h];
                dl = 0;
            }
            return f;
        };

        f.scale = function () { return chroma$2.scale(f); };

        f.hue(hue);

        return f;
    };

    var Color$4 = Color_1;
    var digits = '0123456789abcdef';

    var floor$1 = Math.floor;
    var random = Math.random;

    var random_1 = function () {
        var code = '#';
        for (var i=0; i<6; i++) {
            code += digits.charAt(floor$1(random() * 16));
        }
        return new Color$4(code, 'hex');
    };

    var type = type$p;
    var log = Math.log;
    var pow$1 = Math.pow;
    var floor = Math.floor;
    var abs$1 = Math.abs;


    var analyze = function (data, key) {
        if ( key === void 0 ) key=null;

        var r = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE*-1,
            sum: 0,
            values: [],
            count: 0
        };
        if (type(data) === 'object') {
            data = Object.values(data);
        }
        data.forEach(function (val) {
            if (key && type(val) === 'object') { val = val[key]; }
            if (val !== undefined && val !== null && !isNaN(val)) {
                r.values.push(val);
                r.sum += val;
                if (val < r.min) { r.min = val; }
                if (val > r.max) { r.max = val; }
                r.count += 1;
            }
        });

        r.domain = [r.min, r.max];

        r.limits = function (mode, num) { return limits(r, mode, num); };

        return r;
    };


    var limits = function (data, mode, num) {
        if ( mode === void 0 ) mode='equal';
        if ( num === void 0 ) num=7;

        if (type(data) == 'array') {
            data = analyze(data);
        }
        var min = data.min;
        var max = data.max;
        var values = data.values.sort(function (a,b) { return a-b; });

        if (num === 1) { return [min,max]; }

        var limits = [];

        if (mode.substr(0,1) === 'c') { // continuous
            limits.push(min);
            limits.push(max);
        }

        if (mode.substr(0,1) === 'e') { // equal interval
            limits.push(min);
            for (var i=1; i<num; i++) {
                limits.push(min+((i/num)*(max-min)));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'l') { // log scale
            if (min <= 0) {
                throw new Error('Logarithmic scales are only possible for values > 0');
            }
            var min_log = Math.LOG10E * log(min);
            var max_log = Math.LOG10E * log(max);
            limits.push(min);
            for (var i$1=1; i$1<num; i$1++) {
                limits.push(pow$1(10, min_log + ((i$1/num) * (max_log - min_log))));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'q') { // quantile scale
            limits.push(min);
            for (var i$2=1; i$2<num; i$2++) {
                var p = ((values.length-1) * i$2)/num;
                var pb = floor(p);
                if (pb === p) {
                    limits.push(values[pb]);
                } else { // p > pb
                    var pr = p - pb;
                    limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                }
            }
            limits.push(max);

        }

        else if (mode.substr(0,1) === 'k') { // k-means clustering
            /*
            implementation based on
            http://code.google.com/p/figue/source/browse/trunk/figue.js#336
            simplified for 1-d input values
            */
            var cluster;
            var n = values.length;
            var assignments = new Array(n);
            var clusterSizes = new Array(num);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;

            // get seed values
            centroids = [];
            centroids.push(min);
            for (var i$3=1; i$3<num; i$3++) {
                centroids.push(min + ((i$3/num) * (max-min)));
            }
            centroids.push(max);

            while (repeat) {
                // assignment step
                for (var j=0; j<num; j++) {
                    clusterSizes[j] = 0;
                }
                for (var i$4=0; i$4<n; i$4++) {
                    var value = values[i$4];
                    var mindist = Number.MAX_VALUE;
                    var best = (void 0);
                    for (var j$1=0; j$1<num; j$1++) {
                        var dist = abs$1(centroids[j$1]-value);
                        if (dist < mindist) {
                            mindist = dist;
                            best = j$1;
                        }
                        clusterSizes[best]++;
                        assignments[i$4] = best;
                    }
                }

                // update centroids step
                var newCentroids = new Array(num);
                for (var j$2=0; j$2<num; j$2++) {
                    newCentroids[j$2] = null;
                }
                for (var i$5=0; i$5<n; i$5++) {
                    cluster = assignments[i$5];
                    if (newCentroids[cluster] === null) {
                        newCentroids[cluster] = values[i$5];
                    } else {
                        newCentroids[cluster] += values[i$5];
                    }
                }
                for (var j$3=0; j$3<num; j$3++) {
                    newCentroids[j$3] *= 1/clusterSizes[j$3];
                }

                // check convergence
                repeat = false;
                for (var j$4=0; j$4<num; j$4++) {
                    if (newCentroids[j$4] !== centroids[j$4]) {
                        repeat = true;
                        break;
                    }
                }

                centroids = newCentroids;
                nb_iters++;

                if (nb_iters > 200) {
                    repeat = false;
                }
            }

            // finished k-means clustering
            // the next part is borrowed from gabrielflor.it
            var kClusters = {};
            for (var j$5=0; j$5<num; j$5++) {
                kClusters[j$5] = [];
            }
            for (var i$6=0; i$6<n; i$6++) {
                cluster = assignments[i$6];
                kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for (var j$6=0; j$6<num; j$6++) {
                tmpKMeansBreaks.push(kClusters[j$6][0]);
                tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
            limits.push(tmpKMeansBreaks[0]);
            for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                var v = tmpKMeansBreaks[i$7];
                if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                    limits.push(v);
                }
            }
        }
        return limits;
    };

    var analyze_1 = {analyze: analyze, limits: limits};

    var Color$3 = Color_1;


    var contrast = function (a, b) {
        // WCAG contrast ratio
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
        a = new Color$3(a);
        b = new Color$3(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };

    var Color$2 = Color_1;
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    var min = Math.min;
    var max = Math.max;
    var atan2 = Math.atan2;
    var abs = Math.abs;
    var cos = Math.cos;
    var sin = Math.sin;
    var exp = Math.exp;
    var PI = Math.PI;

    var deltaE = function(a, b, Kl, Kc, Kh) {
        if ( Kl === void 0 ) Kl=1;
        if ( Kc === void 0 ) Kc=1;
        if ( Kh === void 0 ) Kh=1;

        // Delta E (CIE 2000)
        // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html
        var rad2deg = function(rad) {
            return 360 * rad / (2 * PI);
        };
        var deg2rad = function(deg) {
            return (2 * PI * deg) / 360;
        };
        a = new Color$2(a);
        b = new Color$2(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var avgL = (L1 + L2)/2;
        var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
        var C2 = sqrt(pow(a2, 2) + pow(b2, 2));
        var avgC = (C1 + C2)/2;
        var G = 0.5*(1-sqrt(pow(avgC, 7)/(pow(avgC, 7) + pow(25, 7))));
        var a1p = a1*(1+G);
        var a2p = a2*(1+G);
        var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
        var C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
        var avgCp = (C1p + C2p)/2;
        var arctan1 = rad2deg(atan2(b1, a1p));
        var arctan2 = rad2deg(atan2(b2, a2p));
        var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
        var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
        var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360)/2 : (h1p + h2p)/2;
        var T = 1 - 0.17*cos(deg2rad(avgHp - 30)) + 0.24*cos(deg2rad(2*avgHp)) + 0.32*cos(deg2rad(3*avgHp + 6)) - 0.2*cos(deg2rad(4*avgHp - 63));
        var deltaHp = h2p - h1p;
        deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
        deltaHp = 2*sqrt(C1p*C2p)*sin(deg2rad(deltaHp)/2);
        var deltaL = L2 - L1;
        var deltaCp = C2p - C1p;    
        var sl = 1 + (0.015*pow(avgL - 50, 2))/sqrt(20 + pow(avgL - 50, 2));
        var sc = 1 + 0.045*avgCp;
        var sh = 1 + 0.015*avgCp*T;
        var deltaTheta = 30*exp(-pow((avgHp - 275)/25, 2));
        var Rc = 2*sqrt(pow(avgCp, 7)/(pow(avgCp, 7) + pow(25, 7)));
        var Rt = -Rc*sin(2*deg2rad(deltaTheta));
        var result = sqrt(pow(deltaL/(Kl*sl), 2) + pow(deltaCp/(Kc*sc), 2) + pow(deltaHp/(Kh*sh), 2) + Rt*(deltaCp/(Kc*sc))*(deltaHp/(Kh*sh)));
        return max(0, min(100, result));
    };

    var Color$1 = Color_1;

    // simple Euclidean distance
    var distance = function(a, b, mode) {
        if ( mode === void 0 ) mode='lab';

        // Delta E (CIE 1976)
        // see http://www.brucelindbloom.com/index.html?Equations.html
        a = new Color$1(a);
        b = new Color$1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i in l1) {
            var d = (l1[i] || 0) - (l2[i] || 0);
            sum_sq += d*d;
        }
        return Math.sqrt(sum_sq);
    };

    var Color = Color_1;

    var valid = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        try {
            new (Function.prototype.bind.apply( Color, [ null ].concat( args) ));
            return true;
        } catch (e) {
            return false;
        }
    };

    // some pre-defined color scales:
    var chroma$1 = chroma_1;

    var scale = scale$2;

    var scales = {
    	cool: function cool() { return scale([chroma$1.hsl(180,1,.9), chroma$1.hsl(250,.7,.4)]) },
    	hot: function hot() { return scale(['#000','#f00','#ff0','#fff']).mode('rgb') }
    };

    /**
        ColorBrewer colors for chroma.js

        Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
        Pennsylvania State University.

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software distributed
        under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
        CONDITIONS OF ANY KIND, either express or implied. See the License for the
        specific language governing permissions and limitations under the License.
    */

    var colorbrewer = {
        // sequential
        OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
        PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
        BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
        Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
        BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
        YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
        YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
        Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
        RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
        Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
        YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
        Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
        GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
        Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
        YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
        PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
        Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
        PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
        Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

        // diverging

        Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
        RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
        RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
        PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
        PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
        RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
        BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
        RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
        PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

        // qualitative

        Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
        Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
        Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
        Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
        Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
        Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
        Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
        Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
    };

    // add lowercase aliases for case-insensitive matches
    for (var i = 0, list = Object.keys(colorbrewer); i < list.length; i += 1) {
        var key = list[i];

        colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }

    var colorbrewer_1 = colorbrewer;

    var chroma = chroma_1;

    // feel free to comment out anything to rollup
    // a smaller chroma.js built

    // io --> convert colors

















    // operators --> modify existing Colors










    // interpolators












    // generators -- > create new colors
    chroma.average = average;
    chroma.bezier = bezier_1;
    chroma.blend = blend_1;
    chroma.cubehelix = cubehelix;
    chroma.mix = chroma.interpolate = mix$1;
    chroma.random = random_1;
    chroma.scale = scale$2;

    // other utility methods
    chroma.analyze = analyze_1.analyze;
    chroma.contrast = contrast;
    chroma.deltaE = deltaE;
    chroma.distance = distance;
    chroma.limits = analyze_1.limits;
    chroma.valid = valid;

    // scale
    chroma.scales = scales;

    // colors
    chroma.colors = w3cx11_1;
    chroma.brewer = colorbrewer_1;

    var chroma_js = chroma;

    return chroma_js;

}));


/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipsMode: () => (/* binding */ PipsMode),
/* harmony export */   PipsType: () => (/* binding */ PipsType),
/* harmony export */   create: () => (/* binding */ initialize),
/* harmony export */   cssClasses: () => (/* binding */ cssClasses),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var PipsMode;
(function (PipsMode) {
    PipsMode["Range"] = "range";
    PipsMode["Steps"] = "steps";
    PipsMode["Positions"] = "positions";
    PipsMode["Count"] = "count";
    PipsMode["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function (PipsType) {
    PipsType[PipsType["None"] = -1] = "None";
    PipsType[PipsType["NoValue"] = 0] = "NoValue";
    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
//region Helper Methods
function isValidFormatter(entry) {
    return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
    // partial formatters only need a to function and not a from function
    return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
    el.parentElement.removeChild(el);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
// Bindable version
function preventDefault(e) {
    e.preventDefault();
}
// Removes duplicates from an array.
function unique(array) {
    return array.filter(function (a) {
        return !this[a] ? (this[a] = true) : false;
    }, {});
}
// Round a value to the closest 'to'.
function closest(value, to) {
    return Math.round(value / to) * to;
}
// Current position of an element relative to the document.
function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc);
    // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
    }
    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
// Checks whether a value is numerical.
function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
}
// Sets a class and removes it after [duration] ms.
function addClassFor(element, className, duration) {
    if (duration > 0) {
        addClass(element, className);
        setTimeout(function () {
            removeClass(element, className);
        }, duration);
    }
}
// Limits a value to 0 - 100
function limit(a) {
    return Math.max(Math.min(a, 100), 0);
}
// Wraps a variable as an array, if it isn't one yet.
// Note that an input array is returned by reference!
function asArray(a) {
    return Array.isArray(a) ? a : [a];
}
// Counts decimals
function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
}
// http://youmightnotneedjquery.com/#add_class
function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
    }
    else {
        el.className += " " + className;
    }
}
// http://youmightnotneedjquery.com/#remove_class
function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
}
// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
            ? doc.documentElement.scrollLeft
            : doc.body.scrollLeft;
    var y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
            ? doc.documentElement.scrollTop
            : doc.body.scrollTop;
    return {
        x: x,
        y: y,
    };
}
// we provide a function to compute constants instead
// of accessing window.* as soon as the module needs it
// so that we do not compute anything if not needed
function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled
        ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup",
        }
        : window.navigator.msPointerEnabled
            ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
            }
            : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
            };
}
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
// Issue #785
function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        // @ts-ignore
        window.addEventListener("test", null, opts);
    }
    catch (e) { }
    /* eslint-enable */
    return supportsPassive;
}
function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
//endregion
//region Range Calculation
// Determine the size of a sub-range in relation to a full range.
function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
}
// (percentage) How many percent is this value of this range?
function fromPercentage(range, value, startRange) {
    return (value * 100) / (range[startRange + 1] - range[startRange]);
}
// (percentage) Where is this value on this range?
function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
// (value) How much is this percentage on this range?
function isPercentage(range, value) {
    return (value * (range[1] - range[0])) / 100 + range[0];
}
function getJ(value, arr) {
    var j = 1;
    while (value >= arr[j]) {
        j += 1;
    }
    return j;
}
// (percentage) Input a value, find where, on a scale of 0-100, it applies.
function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
        return 100;
    }
    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
// (value) Input a percentage, find where it is on the specified range.
function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
        return xVal.slice(-1)[0];
    }
    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
// (percentage) Get the step that applies at a certain value.
function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
        return value;
    }
    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j];
    // If 'snap' is set, steps are used as fixed points on the slider.
    if (snap) {
        // Find the closest position, a or b.
        if (value - a > (b - a) / 2) {
            return b;
        }
        return a;
    }
    if (!xSteps[j - 1]) {
        return value;
    }
    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
//endregion
//region Spectrum
var Spectrum = /** @class */ (function () {
    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [];
        this.xNumSteps = [];
        this.xHighestCompleteStep = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.snap = snap;
        var index;
        var ordered = [];
        // Map the object keys to an array.
        Object.keys(entry).forEach(function (index) {
            ordered.push([asArray(entry[index]), index]);
        });
        // Sort all entries by value (numeric sort).
        ordered.sort(function (a, b) {
            return a[0][0] - b[0][0];
        });
        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            this.handleEntryPoint(ordered[index][1], ordered[index][0]);
        }
        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);
        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            this.handleStepPoint(index, this.xNumSteps[index]);
        }
    }
    Spectrum.prototype.getDistance = function (value) {
        var distances = [];
        for (var index = 0; index < this.xNumSteps.length - 1; index++) {
            distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
    };
    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;
        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        }
        else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }
        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }
        if (distances === null) {
            distances = [];
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            }
            else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }
            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            }
            else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }
            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
    };
    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
    };
    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
    };
    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);
        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
            },
        };
    };
    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };
    Spectrum.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };
    Spectrum.prototype.handleEntryPoint = function (index, value) {
        var percentage;
        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        }
        else if (index === "max") {
            percentage = 100;
        }
        else {
            percentage = parseFloat(index);
        }
        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }
        // Store values.
        this.xPct.push(percentage);
        this.xVal.push(value[0]);
        var value1 = Number(value[1]);
        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value1)) {
                this.xSteps[0] = value1;
            }
        }
        else {
            this.xSteps.push(isNaN(value1) ? false : value1);
        }
        this.xHighestCompleteStep.push(0);
    };
    Spectrum.prototype.handleStepPoint = function (i, n) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }
        // Step over zero-length ranges (#948);
        if (this.xVal[i] === this.xVal[i + 1]) {
            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
            return;
        }
        // Factor to range ratio
        this.xSteps[i] =
            fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
        this.xHighestCompleteStep[i] = step;
    };
    return Spectrum;
}());
//endregion
//region Options
/*	Every input option is tested and parsed. This will prevent
    endless validation in internal methods. These tests are
    structured with an item for every option available. An
    option can be marked as required by setting the 'r' flag.
    The testing function is provided with three arguments:
        - The provided value for the option;
        - A reference to the options object;
        - The name for the option;

    The testing function returns false when an error is detected,
    or true when everything is OK. It can also modify the option
    object, to make sure all values can be correctly looped elsewhere. */
//region Defaults
var defaultFormatter = {
    to: function (value) {
        return value === undefined ? "" : value.toFixed(2);
    },
    from: Number,
};
var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
};
// Namespaces of internal event listeners
var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria",
};
//endregion
function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'step' is not numeric.");
    }
    // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.
    parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    }
    parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    }
    parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    }
    parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider: 'range' is not an object.");
    }
    // Catch missing start or end.
    if (entry.min === undefined || entry.max === undefined) {
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    }
    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
    entry = asArray(entry);
    // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.
    if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider: 'start' option is incorrect.");
    }
    // Store the number of handles.
    parsed.handles = entry.length;
    // When the slider is initialized, the .val method will
    // be called with the start options.
    parsed.start = entry;
}
function testSnap(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;
}
function testAnimate(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
    if (typeof entry !== "number") {
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }
    parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
    var connect = [false];
    var i;
    // Map legacy options
    if (entry === "lower") {
        entry = [true, false];
    }
    else if (entry === "upper") {
        entry = [false, true];
    }
    // Handle boolean options
    if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
            connect.push(entry);
        }
        connect.push(false);
    }
    // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    }
    else {
        connect = entry;
    }
    parsed.connect = connect;
}
function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
        case "horizontal":
            parsed.ort = 0;
            break;
        case "vertical":
            parsed.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
}
function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'margin' option must be numeric.");
    }
    // Issue #582
    if (entry === 0) {
        return;
    }
    parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'limit' option must be numeric.");
    }
    parsed.limit = parsed.spectrum.getDistance(entry);
    if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
}
function testPadding(parsed, entry) {
    var index;
    if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (entry === 0) {
        return;
    }
    if (!Array.isArray(entry)) {
        entry = [entry, entry];
    }
    // 'getDistance' returns false for invalid values.
    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        }
    }
    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
    if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
}
function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
        case "ltr":
            parsed.dir = 0;
            break;
        case "rtl":
            parsed.dir = 1;
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
}
function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    }
    // Check if the string contains any keywords.
    // None are required.
    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
        if (parsed.handles !== 2) {
            throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        // Use margin to enforce fixed state
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }
    if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    }
    parsed.events = {
        tap: tap || snap,
        drag: drag,
        dragAll: dragAll,
        smoothSteps: smoothSteps,
        fixed: fixed,
        snap: snap,
        hover: hover,
        unconstrained: unconstrained,
    };
}
function testTooltips(parsed, entry) {
    if (entry === false) {
        return;
    }
    if (entry === true || isValidPartialFormatter(entry)) {
        parsed.tooltips = [];
        for (var i = 0; i < parsed.handles; i++) {
            parsed.tooltips.push(entry);
        }
    }
    else {
        entry = asArray(entry);
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a formatter for all handles.");
        }
        entry.forEach(function (formatter) {
            if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            }
        });
        parsed.tooltips = entry;
    }
}
function testHandleAttributes(parsed, entry) {
    if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a attributes for all handles.");
    }
    parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
    if (!isValidPartialFormatter(entry)) {
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    }
    parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
    if (!isValidFormatter(entry)) {
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }
    parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    }
    parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    }
    parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
    }
    if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};
        Object.keys(entry).forEach(function (key) {
            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        });
    }
    else {
        parsed.cssClasses = entry;
    }
}
// Test all developer settings and parse to assumption-safe values.
function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
        margin: null,
        limit: null,
        padding: null,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter,
    };
    // Tests are executed in the order they are presented here.
    var tests = {
        step: { r: false, t: testStep },
        keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
        keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
        keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
        start: { r: true, t: testStart },
        connect: { r: true, t: testConnect },
        direction: { r: true, t: testDirection },
        snap: { r: false, t: testSnap },
        animate: { r: false, t: testAnimate },
        animationDuration: { r: false, t: testAnimationDuration },
        range: { r: true, t: testRange },
        orientation: { r: false, t: testOrientation },
        margin: { r: false, t: testMargin },
        limit: { r: false, t: testLimit },
        padding: { r: false, t: testPadding },
        behaviour: { r: true, t: testBehaviour },
        ariaFormat: { r: false, t: testAriaFormat },
        format: { r: false, t: testFormat },
        tooltips: { r: false, t: testTooltips },
        keyboardSupport: { r: true, t: testKeyboardSupport },
        documentElement: { r: false, t: testDocumentElement },
        cssPrefix: { r: true, t: testCssPrefix },
        cssClasses: { r: true, t: testCssClasses },
        handleAttributes: { r: false, t: testHandleAttributes },
    };
    var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses: cssClasses,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
    };
    // AriaFormat defaults to regular format, if any.
    if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
    }
    // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.
    Object.keys(tests).forEach(function (name) {
        // If the option isn't set, but it is required, throw an error.
        if (!isSet(options[name]) && defaults[name] === undefined) {
            if (tests[name].r) {
                throw new Error("noUiSlider: '" + name + "' is required.");
            }
            return;
        }
        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    });
    // Forward pips options
    parsed.pips = options.pips;
    // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d
    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
    // Pips don't move, so we can place them using left/top.
    var styles = [
        ["left", "top"],
        ["right", "bottom"],
    ];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
}
//endregion
function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
    // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes
    var scope_Target = target;
    var scope_Base;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips;
    // Slider state values
    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {};
    // Document Nodes
    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body;
    // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.
    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
    // Creates a node, adds it to target, returns the new node.
    function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");
        if (className) {
            addClass(div, className);
        }
        addTarget.appendChild(div);
        return div;
    }
    // Append a origin to the base
    function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", String(handleNumber));
        if (options.keyboardSupport) {
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
            // 0 = focusable and reachable
            handle.setAttribute("tabindex", "0");
            handle.addEventListener("keydown", function (event) {
                return eventKeydown(event, handleNumber);
            });
        }
        if (options.handleAttributes !== undefined) {
            var attributes_1 = options.handleAttributes[handleNumber];
            Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute]);
            });
        }
        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
        if (handleNumber === 0) {
            addClass(handle, options.cssClasses.handleLower);
        }
        else if (handleNumber === options.handles - 1) {
            addClass(handle, options.cssClasses.handleUpper);
        }
        origin.handle = handle;
        return origin;
    }
    // Insert nodes for connect elements
    function addConnect(base, add) {
        if (!add) {
            return false;
        }
        return addNodeTo(base, options.cssClasses.connect);
    }
    // Add handles to the slider base.
    function addElements(connectOptions, base) {
        var connectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(connectBase, connectOptions[0]));
        // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]
        for (var i = 0; i < options.handles; i++) {
            // Keep a list of all added handles.
            scope_Handles.push(addOrigin(base, i));
            scope_HandleNumbers[i] = i;
            scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
        }
    }
    // Initialize a single slider.
    function addSlider(addTarget) {
        // Apply classes and data to the target.
        addClass(addTarget, options.cssClasses.target);
        if (options.dir === 0) {
            addClass(addTarget, options.cssClasses.ltr);
        }
        else {
            addClass(addTarget, options.cssClasses.rtl);
        }
        if (options.ort === 0) {
            addClass(addTarget, options.cssClasses.horizontal);
        }
        else {
            addClass(addTarget, options.cssClasses.vertical);
        }
        var textDirection = getComputedStyle(addTarget).direction;
        if (textDirection === "rtl") {
            addClass(addTarget, options.cssClasses.textDirectionRtl);
        }
        else {
            addClass(addTarget, options.cssClasses.textDirectionLtr);
        }
        return addNodeTo(addTarget, options.cssClasses.base);
    }
    function addTooltip(handle, handleNumber) {
        if (!options.tooltips || !options.tooltips[handleNumber]) {
            return false;
        }
        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }
    function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
    }
    // Disable the slider dragging if any handle is disabled
    function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
    }
    function disable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].setAttribute("disabled", "");
            scope_Handles[handleNumber].handle.removeAttribute("tabindex");
        }
        else {
            scope_Target.setAttribute("disabled", "");
            scope_Handles.forEach(function (handle) {
                handle.handle.removeAttribute("tabindex");
            });
        }
    }
    function enable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].removeAttribute("disabled");
            scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
        }
        else {
            scope_Target.removeAttribute("disabled");
            scope_Handles.forEach(function (handle) {
                handle.removeAttribute("disabled");
                handle.handle.setAttribute("tabindex", "0");
            });
        }
    }
    function removeTooltips() {
        if (scope_Tooltips) {
            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
            scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) {
                    removeElement(tooltip);
                }
            });
            scope_Tooltips = null;
        }
    }
    // The tooltips option is a shorthand for using the 'update' event.
    function tooltips() {
        removeTooltips();
        // Tooltips are added with options.tooltips in original order.
        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
            if (!scope_Tooltips || !options.tooltips) {
                return;
            }
            if (scope_Tooltips[handleNumber] === false) {
                return;
            }
            var formattedValue = values[handleNumber];
            if (options.tooltips[handleNumber] !== true) {
                formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
            }
            scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
    }
    function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
            // Update Aria Values for all handles, as a change in one changes min and max values for the next.
            scope_HandleNumbers.forEach(function (index) {
                var handle = scope_Handles[index];
                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                var now = positions[index];
                // Formatted value for display
                var text = String(options.ariaFormat.to(unencoded[index]));
                // Map to slider range values
                min = scope_Spectrum.fromStepping(min).toFixed(1);
                max = scope_Spectrum.fromStepping(max).toFixed(1);
                now = scope_Spectrum.fromStepping(now).toFixed(1);
                handle.children[0].setAttribute("aria-valuemin", min);
                handle.children[0].setAttribute("aria-valuemax", max);
                handle.children[0].setAttribute("aria-valuenow", now);
                handle.children[0].setAttribute("aria-valuetext", text);
            });
        });
    }
    function getGroup(pips) {
        // Use the range.
        if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) {
            return scope_Spectrum.xVal;
        }
        if (pips.mode === PipsMode.Count) {
            if (pips.values < 2) {
                throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
            }
            // Divide 0 - 100 in 'count' parts.
            var interval = pips.values - 1;
            var spread = 100 / interval;
            var values = [];
            // List these parts and have them handled as 'positions'.
            while (interval--) {
                values[interval] = interval * spread;
            }
            values.push(100);
            return mapToRange(values, pips.stepped);
        }
        if (pips.mode === PipsMode.Positions) {
            // Map all percentages to on-range values.
            return mapToRange(pips.values, pips.stepped);
        }
        if (pips.mode === PipsMode.Values) {
            // If the value must be stepped, it needs to be converted to a percentage first.
            if (pips.stepped) {
                return pips.values.map(function (value) {
                    // Convert to percentage, apply step, return to value.
                    return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                });
            }
            // Otherwise, we can simply use the values.
            return pips.values;
        }
        return []; // pips.mode = never
    }
    function mapToRange(values, stepped) {
        return values.map(function (value) {
            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
    }
    function generateSpread(pips) {
        function safeIncrement(value, increment) {
            // Avoid floating point variance by dropping the smallest decimal places.
            return Number((value + increment).toFixed(7));
        }
        var group = getGroup(pips);
        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0;
        // Create a copy of the group, sort it and filter away all duplicates.
        group = unique(group.slice().sort(function (a, b) {
            return a - b;
        }));
        // Make sure the range starts with the first element.
        if (group[0] !== firstInRange) {
            group.unshift(firstInRange);
            ignoreFirst = true;
        }
        // Likewise for the last one.
        if (group[group.length - 1] !== lastInRange) {
            group.push(lastInRange);
            ignoreLast = true;
        }
        group.forEach(function (current, index) {
            // Get the current step and the lower + upper positions.
            var step;
            var i;
            var q;
            var low = current;
            var high = group[index + 1];
            var newPct;
            var pctDifference;
            var pctPos;
            var type;
            var steps;
            var realSteps;
            var stepSize;
            var isSteps = pips.mode === PipsMode.Steps;
            // When using 'steps' mode, use the provided steps.
            // Otherwise, we'll step on to the next subrange.
            if (isSteps) {
                step = scope_Spectrum.xNumSteps[index];
            }
            // Default to a 'full' step.
            if (!step) {
                step = high - low;
            }
            // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
            if (high === undefined) {
                high = low;
            }
            // Make sure step isn't 0, which would cause an infinite loop (#654)
            step = Math.max(step, 0.0000001);
            // Find all steps in the subrange.
            for (i = low; i <= high; i = safeIncrement(i, step)) {
                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping(i);
                pctDifference = newPct - prevPct;
                steps = pctDifference / (pips.density || 1);
                realSteps = Math.round(steps);
                // This ratio represents the amount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepSize = pctDifference / realSteps;
                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for (q = 1; q <= realSteps; q += 1) {
                    // The ratio between the rounded value and the actual size might be ~1% off.
                    // Correct the percentage offset by the number of points
                    // per subrange. density = 1 will result in 100 points on the
                    // full range, 2 for 50, 4 for 25, etc.
                    pctPos = prevPct + q * stepSize;
                    indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                }
                // Determine the point type.
                type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if (!index && ignoreFirst && i !== high) {
                    type = 0;
                }
                if (!(i === high && ignoreLast)) {
                    // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                    indexes[newPct.toFixed(5)] = [i, type];
                }
                // Update the percentage count.
                prevPct = newPct;
            }
        });
        return indexes;
    }
    function addMarking(spread, filterFunc, formatter) {
        var _a, _b;
        var element = scope_Document.createElement("div");
        var valueSizeClasses = (_a = {},
            _a[PipsType.None] = "",
            _a[PipsType.NoValue] = options.cssClasses.valueNormal,
            _a[PipsType.LargeValue] = options.cssClasses.valueLarge,
            _a[PipsType.SmallValue] = options.cssClasses.valueSub,
            _a);
        var markerSizeClasses = (_b = {},
            _b[PipsType.None] = "",
            _b[PipsType.NoValue] = options.cssClasses.markerNormal,
            _b[PipsType.LargeValue] = options.cssClasses.markerLarge,
            _b[PipsType.SmallValue] = options.cssClasses.markerSub,
            _b);
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
        function getClasses(type, source) {
            var a = source === options.cssClasses.value;
            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }
        function addSpread(offset, value, type) {
            // Apply the filter function, if it is set.
            type = filterFunc ? filterFunc(value, type) : type;
            if (type === PipsType.None) {
                return;
            }
            // Add a marker for every point
            var node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.marker);
            node.style[options.style] = offset + "%";
            // Values are only appended for points marked '1' or '2'.
            if (type > PipsType.NoValue) {
                node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.value);
                node.setAttribute("data-value", String(value));
                node.style[options.style] = offset + "%";
                node.innerHTML = String(formatter.to(value));
            }
        }
        // Append all points.
        Object.keys(spread).forEach(function (offset) {
            addSpread(offset, spread[offset][0], spread[offset][1]);
        });
        return element;
    }
    function removePips() {
        if (scope_Pips) {
            removeElement(scope_Pips);
            scope_Pips = null;
        }
    }
    function pips(pips) {
        // Fix #669
        removePips();
        var spread = generateSpread(pips);
        var filter = pips.filter;
        var format = pips.format || {
            to: function (value) {
                return String(Math.round(value));
            },
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
    }
    // Shorthand for base dimensions.
    function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = ("offset" + ["Width", "Height"][options.ort]);
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    }
    // Handler for attaching events trough a proxy.
    function attachEvent(events, element, callback, data) {
        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList
        var method = function (event) {
            var e = fixEvent(event, data.pageOffset, data.target || element);
            // fixEvent returns false if this event has a different target
            // when handling (multi-) touch events;
            if (!e) {
                return false;
            }
            // doNotReject is passed by all end events to make sure released touches
            // are not rejected, leaving the slider "stuck" to the cursor;
            if (isSliderDisabled() && !data.doNotReject) {
                return false;
            }
            // Stop if an active 'tap' transition is taking place.
            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (data.hover && e.buttons) {
                return false;
            }
            // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
            // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
            // touch-action: manipulation, but that allows panning, which breaks
            // sliders after zooming/on non-responsive pages.
            // See: https://bugs.webkit.org/show_bug.cgi?id=133112
            if (!supportsPassive) {
                e.preventDefault();
            }
            e.calcPoint = e.points[options.ort];
            // Call the event handler with the event [ and additional data ].
            callback(e, data);
            return;
        };
        var methods = [];
        // Bind a closure on the target for every event type.
        events.split(" ").forEach(function (eventName) {
            element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
            methods.push([eventName, method]);
        });
        return methods;
    }
    // Provide a clean event with standardized offset values.
    function fixEvent(e, pageOffset, eventTarget) {
        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x = 0;
        var y = 0;
        // IE10 implemented pointer events with a prefix;
        if (e.type.indexOf("MSPointer") === 0) {
            pointer = true;
        }
        // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
        // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
        // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
        if (e.type === "mousedown" && !e.buttons && !e.touches) {
            return false;
        }
        // The only thing one handle should be concerned about is the touches that originated on top of it.
        if (touch) {
            // Returns true if a touch originated on the target.
            var isTouchOnTarget = function (checkTouch) {
                var target = checkTouch.target;
                return (target === eventTarget ||
                    eventTarget.contains(target) ||
                    (e.composed && e.composedPath().shift() === eventTarget));
            };
            // In the case of touchstart events, we need to make sure there is still no more than one
            // touch on the target so we look amongst all touches.
            if (e.type === "touchstart") {
                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                // Do not support more than one touch per handle.
                if (targetTouches.length > 1) {
                    return false;
                }
                x = targetTouches[0].pageX;
                y = targetTouches[0].pageY;
            }
            else {
                // In the other cases, find on changedTouches is enough.
                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                // Cancel if the target touch has not moved.
                if (!targetTouch) {
                    return false;
                }
                x = targetTouch.pageX;
                y = targetTouch.pageY;
            }
        }
        pageOffset = pageOffset || getPageOffset(scope_Document);
        if (mouse || pointer) {
            x = e.clientX + pageOffset.x;
            y = e.clientY + pageOffset.y;
        }
        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer; // Fix #435
        return e;
    }
    // Translate a coordinate in the document to a percentage on the slider
    function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = (location * 100) / baseSize();
        // Clamp proposal between 0% and 100%
        // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
        // are used (e.g. contained handles feature)
        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
    }
    // Find handle closest to a certain percentage on the slider
    function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function (handle, index) {
            // Disabled handles are ignored
            if (isHandleDisabled(index)) {
                return;
            }
            var handlePosition = scope_Locations[index];
            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
            // Initial state
            var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
            // Difference with this handle is smaller than the previously checked handle
            var isCloser = differenceWithThisHandle < smallestDifference;
            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
            if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index;
                smallestDifference = differenceWithThisHandle;
            }
        });
        return handleNumber;
    }
    // Fire 'end' when a mouse or pen leaves the document.
    function documentLeave(event, data) {
        if (event.type === "mouseout" &&
            event.target.nodeName === "HTML" &&
            event.relatedTarget === null) {
            eventEnd(event, data);
        }
    }
    // Handle movement on document for handle and range drag.
    function eventMove(event, data) {
        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
            return eventEnd(event, data);
        }
        // Check if we are moving up or down
        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
        // Convert the movement into a percentage of the slider width/height
        var proposal = (movement * 100) / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
    }
    // Unbind move events on document, call callbacks.
    function eventEnd(event, data) {
        // The handle is no longer active, so remove the class.
        if (data.handle) {
            removeClass(data.handle, options.cssClasses.active);
            scope_ActiveHandlesCount -= 1;
        }
        // Unbind the move and end events, which are added on 'start'.
        data.listeners.forEach(function (c) {
            scope_DocumentElement.removeEventListener(c[0], c[1]);
        });
        if (scope_ActiveHandlesCount === 0) {
            // Remove dragging class.
            removeClass(scope_Target, options.cssClasses.drag);
            setZindex();
            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                scope_Body.style.cursor = "";
                scope_Body.removeEventListener("selectstart", preventDefault);
            }
        }
        if (options.events.smoothSteps) {
            data.handleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
            });
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
            });
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            fireEvent("end", handleNumber);
        });
    }
    // Bind move events on document.
    function eventStart(event, data) {
        // Ignore event if any handle is disabled
        if (data.handleNumbers.some(isHandleDisabled)) {
            return;
        }
        var handle;
        if (data.handleNumbers.length === 1) {
            var handleOrigin = scope_Handles[data.handleNumbers[0]];
            handle = handleOrigin.children[0];
            scope_ActiveHandlesCount += 1;
            // Mark the handle as 'active' so it can be styled.
            addClass(handle, options.cssClasses.active);
        }
        // A drag should never propagate up to the 'tap' event.
        event.stopPropagation();
        // Record the event listeners.
        var listeners = [];
        // Attach the move and end events.
        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
            // The event target has changed so we need to propagate the original one so that we keep
            // relying on it to extract target touches.
            target: event.target,
            handle: handle,
            connect: data.connect,
            listeners: listeners,
            startCalcPoint: event.calcPoint,
            baseSize: baseSize(),
            pageOffset: event.pageOffset,
            handleNumbers: data.handleNumbers,
            buttonsProperty: event.buttons,
            locations: scope_Locations.slice(),
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        // We want to make sure we pushed the listeners in the listener list rather than creating
        // a new one as it has already been passed to the event handlers.
        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
        // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.
        if (event.cursor) {
            // Prevent the 'I' cursor and extend the range-drag cursor.
            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
            // Mark the target with a dragging state.
            if (scope_Handles.length > 1) {
                addClass(scope_Target, options.cssClasses.drag);
            }
            // Prevent text selection when dragging the handles.
            // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
            // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
            // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
            // The 'cursor' flag is false.
            // See: http://caniuse.com/#search=selectstart
            scope_Body.addEventListener("selectstart", preventDefault, false);
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("start", handleNumber);
        });
    }
    // Move closest handle to tapped location.
    function eventTap(event) {
        // The tap event shouldn't propagate up
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal);
        // Tackle the case that all handles are 'disabled'.
        if (handleNumber === false) {
            return;
        }
        // Flag the slider as it is now in a transitional state.
        // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
        if (!options.events.snap) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        if (!options.events.snap) {
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
        }
        else {
            eventStart(event, { handleNumbers: [handleNumber] });
        }
    }
    // Fires a 'hover' event for a hovered mouse/pen position.
    function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function (targetEvent) {
            if ("hover" === targetEvent.split(".")[0]) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(scope_Self, value);
                });
            }
        });
    }
    // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles
    function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
            return false;
        }
        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];
        if (options.dir && !options.ort) {
            // On an right-to-left slider, the left and right keys act inverted
            horizontalKeys.reverse();
        }
        else if (options.ort && !options.dir) {
            // On a top-to-bottom slider, the up and down keys act inverted
            verticalKeys.reverse();
            largeStepKeys.reverse();
        }
        // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];
        if (!isDown && !isUp && !isMin && !isMax) {
            return true;
        }
        event.preventDefault();
        var to;
        if (isUp || isDown) {
            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];
            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }
            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
            }
            if (isLargeUp || isLargeDown) {
                step *= options.keyboardPageMultiplier;
            }
            else {
                step *= options.keyboardMultiplier;
            }
            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);
            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;
            to = scope_Values[handleNumber] + step;
        }
        else if (isMax) {
            // End key
            to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        }
        else {
            // Home key
            to = options.spectrum.xVal[0];
        }
        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
    }
    // Attach events to several slider parts.
    function bindSliderEvents(behaviour) {
        // Attach the standard drag event to the handles.
        if (!behaviour.fixed) {
            scope_Handles.forEach(function (handle, index) {
                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attachEvent(actions.start, handle.children[0], eventStart, {
                    handleNumbers: [index],
                });
            });
        }
        // Attach the tap event to the slider base.
        if (behaviour.tap) {
            attachEvent(actions.start, scope_Base, eventTap, {});
        }
        // Fire hover events
        if (behaviour.hover) {
            attachEvent(actions.move, scope_Base, eventHover, {
                hover: true,
            });
        }
        // Make the range draggable.
        if (behaviour.drag) {
            scope_Connects.forEach(function (connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                    return;
                }
                var handleBefore = scope_Handles[index - 1];
                var handleAfter = scope_Handles[index];
                var eventHolders = [connect];
                var handlesToDrag = [handleBefore, handleAfter];
                var handleNumbersToDrag = [index - 1, index];
                addClass(connect, options.cssClasses.draggable);
                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                    eventHolders.push(handleBefore.children[0]);
                    eventHolders.push(handleAfter.children[0]);
                }
                if (behaviour.dragAll) {
                    handlesToDrag = scope_Handles;
                    handleNumbersToDrag = scope_HandleNumbers;
                }
                eventHolders.forEach(function (eventHolder) {
                    attachEvent(actions.start, eventHolder, eventStart, {
                        handles: handlesToDrag,
                        handleNumbers: handleNumbersToDrag,
                        connect: connect,
                    });
                });
            });
        }
    }
    // Attach an event to this slider, possibly including a namespace
    function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);
        // If the event bound is 'update,' fire it immediately for all handles.
        if (namespacedEvent.split(".")[0] === "update") {
            scope_Handles.forEach(function (a, index) {
                fireEvent("update", index);
            });
        }
    }
    function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    }
    // Undo attachment of event
    function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function (bind) {
            var tEvent = bind.split(".")[0];
            var tNamespace = bind.substring(tEvent.length);
            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                // only delete protected internal event if intentional
                if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                    delete scope_Events[bind];
                }
            }
        });
    }
    // External event handling
    function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function (targetEvent) {
            var eventType = targetEvent.split(".")[0];
            if (eventName === eventType) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(
                    // Use the slider public API as the scope ('this')
                    scope_Self, 
                    // Return values as array, so arg_1[arg_2] is always valid.
                    scope_Values.map(options.format.to), 
                    // Handle index, 0 or 1
                    handleNumber, 
                    // Un-formatted slider values
                    scope_Values.slice(), 
                    // Event is fired by tap, true or false
                    tap || false, 
                    // Left offset of the handle, in relation to the slider
                    scope_Locations.slice(), 
                    // add the slider public API to an accessible parameter when this is unavailable
                    scope_Self);
                });
            }
        });
    }
    // Split out the handle positioning logic so the Move event can use it, too
    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
        var distance;
        // For sliders with multiple handles, limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.
        if (scope_Handles.length > 1 && !options.events.unconstrained) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                to = Math.max(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                to = Math.min(to, distance);
            }
        }
        // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmovable.
        if (scope_Handles.length > 1 && options.limit) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                to = Math.min(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                to = Math.max(to, distance);
            }
        }
        // The padding option keeps the handles a certain distance from the
        // edges of the slider. Padding must be > 0.
        if (options.padding) {
            if (handleNumber === 0) {
                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                to = Math.max(to, distance);
            }
            if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                to = Math.min(to, distance);
            }
        }
        if (!smoothSteps) {
            to = scope_Spectrum.getStep(to);
        }
        // Limit percentage to the 0 - 100 range
        to = limit(to);
        // Return false if handle can't move
        if (to === reference[handleNumber] && !getValue) {
            return false;
        }
        return to;
    }
    // Uses slider orientation to create CSS rules. a = base value;
    function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
    }
    // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
        var proposals = locations.slice();
        // Store first handle now, so we still have it in case handleNumbers is reversed
        var firstHandle = handleNumbers[0];
        var smoothSteps = options.events.smoothSteps;
        var b = [!upward, upward];
        var f = [upward, !upward];
        // Copy handleNumbers so we don't change the dataset
        handleNumbers = handleNumbers.slice();
        // Check to see which handle is 'leading'.
        // If that one can't move the second can't either.
        if (upward) {
            handleNumbers.reverse();
        }
        // Step 1: get the maximum percentage that any of the handles can move
        if (handleNumbers.length > 1) {
            handleNumbers.forEach(function (handleNumber, o) {
                var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                // Stop if one of the handles can't move.
                if (to === false) {
                    proposal = 0;
                }
                else {
                    proposal = to - proposals[handleNumber];
                    proposals[handleNumber] = to;
                }
            });
        }
        // If using one handle, check backward AND forward
        else {
            b = f = [true];
        }
        var state = false;
        // Step 2: Try to set the handles with the found percentage
        handleNumbers.forEach(function (handleNumber, o) {
            state =
                setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
        });
        // Step 3: If a handle moved, fire events
        if (state) {
            handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                fireEvent("slide", handleNumber);
            });
            // If target is a connect, then fire drag event
            if (connect != undefined) {
                fireEvent("drag", firstHandle);
            }
        }
    }
    // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
    function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
    }
    // Updates scope_Locations and scope_Values, updates visual state
    function updateHandlePosition(handleNumber, to) {
        // Update locations.
        scope_Locations[handleNumber] = to;
        // Convert the value to the slider stepping/range.
        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = transformDirection(to, 0) - scope_DirOffset;
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
    }
    // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]
    function setZindex() {
        scope_HandleNumbers.forEach(function (handleNumber) {
            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
            scope_Handles[handleNumber].style.zIndex = String(zIndex);
        });
    }
    // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
        if (!exactInput) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
        }
        if (to === false) {
            return false;
        }
        updateHandlePosition(handleNumber, to);
        return true;
    }
    // Updates style attribute for connect nodes
    function updateConnect(index) {
        // Skip connects set to false
        if (!scope_Connects[index]) {
            return;
        }
        var l = 0;
        var h = 100;
        if (index !== 0) {
            l = scope_Locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
            h = scope_Locations[index];
        }
        // We use two rules:
        // 'translate' to change the left/top offset;
        // 'scale' to change the width of the element;
        // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] =
            translateRule + " " + scaleRule;
    }
    // Parses value passed to .set method. Returns current value if not parse-able.
    function resolveToValue(to, handleNumber) {
        // Setting with null indicates an 'ignore'.
        // Inputting 'false' is invalid.
        if (to === null || to === false || to === undefined) {
            return scope_Locations[handleNumber];
        }
        // If a formatted number was passed, attempt to decode it.
        if (typeof to === "number") {
            to = String(to);
        }
        to = options.format.from(to);
        if (to !== false) {
            to = scope_Spectrum.toStepping(to);
        }
        // If parsing the number failed, use the current value.
        if (to === false || isNaN(to)) {
            return scope_Locations[handleNumber];
        }
        return to;
    }
    // Set the slider value.
    function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === undefined;
        // Event fires by default
        fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
        // Animation is optional.
        // Make sure the initial values were set before using animated placement.
        if (options.animate && !isInit) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        // First pass, without lookAhead but with lookBackward. Values are set from left to right.
        scope_HandleNumbers.forEach(function (handleNumber) {
            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
        // Spread handles evenly across the slider if the range has no size (min=max)
        if (isInit && scope_Spectrum.hasNoSize()) {
            exactInput = true;
            scope_Locations[0] = 0;
            if (scope_HandleNumbers.length > 1) {
                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                scope_HandleNumbers.forEach(function (handleNumber) {
                    scope_Locations[handleNumber] = handleNumber * space_1;
                });
            }
        }
        // Secondary passes. Now that all base values are set, apply constraints.
        // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
        for (; i < scope_HandleNumbers.length; ++i) {
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
            });
        }
        setZindex();
        scope_HandleNumbers.forEach(function (handleNumber) {
            fireEvent("update", handleNumber);
            // Fire the event only for handles that received a new value, as per #579
            if (values[handleNumber] !== null && fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        });
    }
    // Reset slider to initial values
    function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
    }
    // Set value for a single handle
    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        // Ensure numeric input
        handleNumber = Number(handleNumber);
        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
            throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
        }
        // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
        // The exactInput argument can be used to ignore slider stepping (#436)
        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);
        if (fireSetEvent) {
            fireEvent("set", handleNumber);
        }
    }
    // Get the slider value.
    function valueGet(unencoded) {
        if (unencoded === void 0) { unencoded = false; }
        if (unencoded) {
            // return a copy of the raw values
            return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
        }
        var values = scope_Values.map(options.format.to);
        // If only one handle is used, return a single value.
        if (values.length === 1) {
            return values[0];
        }
        return values;
    }
    // Removes classes from the root and empties it.
    function destroy() {
        // remove protected internal listeners
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);
        Object.keys(options.cssClasses).forEach(function (key) {
            removeClass(scope_Target, options.cssClasses[key]);
        });
        while (scope_Target.firstChild) {
            scope_Target.removeChild(scope_Target.firstChild);
        }
        delete scope_Target.noUiSlider;
    }
    function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null;
        // If snapped, directly use defined step value
        if (options.snap) {
            return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
            ];
        }
        // If the next value in this step moves into the next step,
        // the increment is the start of the next step - the current value
        if (increment !== false) {
            if (value + increment > nearbySteps.stepAfter.startValue) {
                increment = nearbySteps.stepAfter.startValue - value;
            }
        }
        // If the value is beyond the starting point
        if (value > nearbySteps.thisStep.startValue) {
            decrement = nearbySteps.thisStep.step;
        }
        else if (nearbySteps.stepBefore.step === false) {
            decrement = false;
        }
        // If a handle is at the start of a step, it always steps back into the previous step first
        else {
            decrement = value - nearbySteps.stepBefore.highestStep;
        }
        // Now, if at the slider edges, there is no in/decrement
        if (location === 100) {
            increment = null;
        }
        else if (location === 0) {
            decrement = null;
        }
        // As per #391, the comparison for the decrement step can have some rounding issues.
        var stepDecimals = scope_Spectrum.countStepDecimals();
        // Round per #391
        if (increment !== null && increment !== false) {
            increment = Number(increment.toFixed(stepDecimals));
        }
        if (decrement !== null && decrement !== false) {
            decrement = Number(decrement.toFixed(stepDecimals));
        }
        return [decrement, increment];
    }
    // Get the current step size for the slider.
    function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
    }
    // Updatable: margin, limit, padding, step, range, animate, snap
    function updateOptions(optionsToUpdate, fireSetEvent) {
        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet();
        var updateAble = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
        ];
        // Only change options that we're actually passed to update.
        updateAble.forEach(function (name) {
            // Check for undefined. null removes the value.
            if (optionsToUpdate[name] !== undefined) {
                originalOptions[name] = optionsToUpdate[name];
            }
        });
        var newOptions = testOptions(originalOptions);
        // Load new options into the slider state
        updateAble.forEach(function (name) {
            if (optionsToUpdate[name] !== undefined) {
                options[name] = newOptions[name];
            }
        });
        scope_Spectrum = newOptions.spectrum;
        // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding;
        // Update pips, removes existing.
        if (options.pips) {
            pips(options.pips);
        }
        else {
            removePips();
        }
        // Update tooltips, removes existing.
        if (options.tooltips) {
            tooltips();
        }
        else {
            removeTooltips();
        }
        // Invalidate the current positioning so valueSet forces an update.
        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
    }
    // Initialization steps
    function setupSlider() {
        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);
        // Attach user events.
        bindSliderEvents(options.events);
        // Use the public value method to set the start values.
        valueSet(options.start);
        if (options.pips) {
            pips(options.pips);
        }
        if (options.tooltips) {
            tooltips();
        }
        aria();
    }
    setupSlider();
    var scope_Self = {
        destroy: destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        disable: disable,
        enable: enable,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function (upward, proposal, handleNumbers) {
            moveHandles(upward, proposal, scope_Locations, handleNumbers);
        },
        options: originalOptions,
        updateOptions: updateOptions,
        target: scope_Target,
        removePips: removePips,
        removeTooltips: removeTooltips,
        getPositions: function () {
            return scope_Locations.slice();
        },
        getTooltips: function () {
            return scope_Tooltips;
        },
        getOrigins: function () {
            return scope_Handles;
        },
        pips: pips, // Issue #594
    };
    return scope_Self;
}
// Run the standard initializer
function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
        throw new Error("noUiSlider: create requires a single element, got: " + target);
    }
    // Throw an error if the slider was already initialized.
    if (target.noUiSlider) {
        throw new Error("noUiSlider: Slider was already initialized.");
    }
    // Test the options and create the slider environment;
    var options = testOptions(originalOptions);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize,
});


/***/ }),

/***/ "./src/tokens/radii/base.json":
/*!************************************!*\
  !*** ./src/tokens/radii/base.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"5","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/radii/compact.json":
/*!***************************************!*\
  !*** ./src/tokens/radii/compact.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"3","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/radii/large.json":
/*!*************************************!*\
  !*** ./src/tokens/radii/large.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"7","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/spacing/base.json":
/*!**************************************!*\
  !*** ./src/tokens/spacing/base.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"sx":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs3":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl3":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl4":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl5":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]}},"sy":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl4":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl5":{"$value":"68","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]}}}');

/***/ }),

/***/ "./src/tokens/spacing/compact.json":
/*!*****************************************!*\
  !*** ./src/tokens/spacing/compact.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"sx":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl2":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl3":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl5":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]}},"sy":{"xs4":{"$value":"1","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs3":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs2":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"sm":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"base":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl2":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl3":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl4":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl5":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]}}}');

/***/ }),

/***/ "./src/tokens/spacing/large.json":
/*!***************************************!*\
  !*** ./src/tokens/spacing/large.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"sx":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs3":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"lg":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl2":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl3":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]}},"sy":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl2":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl3":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]}}}');

/***/ }),

/***/ "./src/tokens/spacing/touch.json":
/*!***************************************!*\
  !*** ./src/tokens/spacing/touch.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"sx":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs3":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]}},"sy":{"xs4":{"$value":"1","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs3":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs2":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"base":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"md":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]},"xl":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-base.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-base.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"21","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"30","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"43","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"42","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-compact.json":
/*!*******************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-compact.json ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"21","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"23","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"26","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"30","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"33","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"26","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"46","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-large.json":
/*!*****************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-large.json ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"31","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"39","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"49","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"62","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"68","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-base.json":
/*!***************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-base.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"18","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"26","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"31","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"37","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"45","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"54","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"77","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"86","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-compact.json":
/*!******************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-compact.json ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"39","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"47","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"67","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"78","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-large.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-large.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"29","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"35","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"42","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"51","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"61","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"73","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"88","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"68","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"80","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/styles.json":
/*!*******************************************!*\
  !*** ./src/tokens/typography/styles.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"text-case":{"none":{"$value":"none","$type":"textCase"},"uppercase":{"$value":"uppercase","$type":"textCase"}},"text-decoration":{"none":{"$value":"none","$type":"textDecoration"},"underline":{"$value":"underline","$type":"textDecoration"}},"body":{"base":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"medium":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"small":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"x-small":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"x-small2":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"large":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","base":"[object Object]","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}}},"paragraph":{"base":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"medium":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"small":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"x-small":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"x-small2":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"large":{"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.italic}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}}},"heading":{"h1":{"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.xl3}","fontSize":"{font-size.xl3}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xl3}","fontSize":"{font-size.xl3}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h2":{"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.xl2}","fontSize":"{font-size.xl2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xl2}","fontSize":"{font-size.xl2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h3":{"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.xl}","fontSize":"{font-size.xl}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xl}","fontSize":"{font-size.xl}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h4":{"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h5":{"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h6":{"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}}},"display":{"d4":{"light":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.light}","lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"d3":{"light":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.light}","lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"d2":{"light":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.light}","lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"d1":{"light":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.light}","lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.regular}","lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-families.primary}","fontWeight":"{font-weights.semibold}","lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}}}}');

/***/ }),

/***/ "./src/tokens/typography/typeface.json":
/*!*********************************************!*\
  !*** ./src/tokens/typography/typeface.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-families":{"primary":{"$value":"Inter","$type":"fontFamilies"}},"font-weights":{"regular":{"$value":"Regular","$type":"fontWeights"},"bold":{"$value":"Bold","$type":"fontWeights"},"semibold":{"$value":"Semi Bold","$type":"fontWeights"},"light":{"$value":"Light","$type":"fontWeights"},"italic":{"$value":"Italic","$type":"fontWeights"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/ui/import.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.css */ "./src/ui/utils.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/ui/styles.css");
/* harmony import */ var _node_modules_nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./src/ui/slider.ts");
/* harmony import */ var _utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/text-to-title-case */ "./src/utils/text-to-title-case.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/debounce */ "./src/utils/debounce.ts");
/* harmony import */ var _utils_import_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/import-utils */ "./src/utils/import-utils.ts");








/*
    UI INITIALIZATION
*/
const form = document.querySelector('form');
const colorPreviewCard = document.querySelector('.color-preview');
const accentSlidersContainer = document.getElementById('accentColorsSliders');
let importButton = document.getElementById('importVariablesButton');
let resetDefaultsButton = document.getElementById('resetDefaultsButton');
let sliders = {};
document.querySelectorAll('[data-command="renderAccents"]').forEach((el) => {
    el.addEventListener('click', (e) => {
        const params = (0,_utils_import_utils__WEBPACK_IMPORTED_MODULE_7__.getFormData)(form);
        parent.postMessage({
            pluginMessage: {
                type: 'RENDER_ACCENTS',
                params: params
            }
        }, "*");
    });
});
document.querySelectorAll('[data-command="renderNeutrals"]').forEach((el) => {
    el.addEventListener('click', (e) => {
        const params = (0,_utils_import_utils__WEBPACK_IMPORTED_MODULE_7__.getFormData)(form);
        parent.postMessage({
            pluginMessage: {
                type: 'RENDER_NEUTRALS',
                params: params
            }
        }, "*");
    });
});
document.querySelectorAll('[data-modal').forEach((el) => {
    const modalID = el.dataset.modal;
    const modal = document.getElementById(modalID);
    el.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();
    });
    modal.querySelector('button.close').addEventListener('click', (e) => {
        e.preventDefault();
        modal.close();
    });
});
document.querySelectorAll('[data-expander][data-role="trigger"]').forEach((el) => {
    const next = el.nextElementSibling;
    if (next.dataset.role == 'container') {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            next.style.display = next.style.display == 'none' ? 'inherit' : 'none';
            el.setAttribute('data-expanded', next.style.display == 'none' ? 'no' : 'yes');
        });
    }
    else {
        console.warn('Cannot find container to expand');
    }
});
document.querySelectorAll('[data-slider]').forEach((el) => {
    const valueMaps = {
        'semantics': _defaults__WEBPACK_IMPORTED_MODULE_5__.systemAccentList,
        'typography': _defaults__WEBPACK_IMPORTED_MODULE_5__.typographySizeValues,
        'radii': _defaults__WEBPACK_IMPORTED_MODULE_5__.radiiSizeName,
        'spacing': _defaults__WEBPACK_IMPORTED_MODULE_5__.spacingSizeName
    };
    const type = el.dataset.type;
    const sliderComponent = (0,_slider__WEBPACK_IMPORTED_MODULE_3__.initSlider)(el, { valueMap: valueMaps[type] || null });
    sliders[sliderComponent.params.name] = sliderComponent;
});
Object.entries(_defaults__WEBPACK_IMPORTED_MODULE_5__.defaultAccentHUEs).forEach(([name, hue]) => {
    const options = { "label": (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_4__.toTitleCase)(name), "name": name, "min": 0, "max": 360, "step": 1, "value": hue, syncValue: true };
    let el = document.createElement('div');
    const sliderCompoent = (0,_slider__WEBPACK_IMPORTED_MODULE_3__.initSlider)(el, options);
    accentSlidersContainer.appendChild(el);
    sliders[name] = sliderCompoent;
});
form.addEventListener("input", (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_6__.debounce)(() => {
    (0,_utils_import_utils__WEBPACK_IMPORTED_MODULE_7__.generatePreview)(form, colorPreviewCard, sliders);
}, 10));
resetDefaultsButton.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_utils_import_utils__WEBPACK_IMPORTED_MODULE_7__.loadSettings)(form, _defaults__WEBPACK_IMPORTED_MODULE_5__.defaultSettings);
});
importButton.addEventListener('click', (e) => {
    e.preventDefault();
    let message = {
        type: "IMPORT",
        params: (0,_utils_import_utils__WEBPACK_IMPORTED_MODULE_7__.getFormData)(form)
    };
    parent.postMessage({ pluginMessage: message }, "*");
});
parent.postMessage({
    pluginMessage: { type: 'LOADED' }
}, "*");
(0,_utils_import_utils__WEBPACK_IMPORTED_MODULE_7__.generatePreview)(form, colorPreviewCard, sliders);
onmessage = (event) => {
    console.log("got this from the plugin code", event.data.pluginMessage);
    const data = event.data.pluginMessage;
    // convert string values into numbers for sliders
    (0,_utils_import_utils__WEBPACK_IMPORTED_MODULE_7__.loadSettings)(form, data);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FB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QU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxhQUFhLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksWUFBWSxhQUFhLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxjQUFjLGVBQWUsYUFBYSxhQUFhLGNBQWMsY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsZUFBZSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLFlBQVksV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsT0FBTyxZQUFZLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLGFBQWEsT0FBTyxLQUFLLFdBQVcsYUFBYSxPQUFPLEtBQUssV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxZQUFZLGFBQWEsWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFh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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUU7QUFDckU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUM7QUFDekMseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxpQkFBaUI7QUFDckU7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QixpRUFBaUU7QUFDOUYsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELGlCQUFpQjtBQUN0RTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5L0dZO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUN0QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBOEM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLGdCQUFnQjtBQUM1RjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtCQUErQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQztBQUNWO0FBQ3RCLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOXRFRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDQztBQUNxQztBQUNyQjtBQUNvQjtBQUMrRTtBQUM1RjtBQUNzQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdFQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsdUJBQXVCLGdFQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EscUJBQXFCLHVEQUFnQjtBQUNyQyxzQkFBc0IsMkRBQW9CO0FBQzFDLGlCQUFpQixvREFBYTtBQUM5QixtQkFBbUIsc0RBQWU7QUFDbEM7QUFDQTtBQUNBLDRCQUE0QixtREFBVSxPQUFPLG1DQUFtQztBQUNoRjtBQUNBLENBQUM7QUFDRCxlQUFlLHdEQUFpQjtBQUNoQyxzQkFBc0IsU0FBUyxzRUFBVztBQUMxQztBQUNBLDJCQUEyQixtREFBVTtBQUNyQztBQUNBO0FBQ0EsQ0FBQztBQUNELCtCQUErQix5REFBUTtBQUN2QyxJQUFJLG9FQUFlO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxpRUFBWSxPQUFPLHNEQUFlO0FBQ3RDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnRUFBVztBQUMzQjtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQsQ0FBQztBQUNEO0FBQ0EscUJBQXFCO0FBQ3JCLENBQUM7QUFDRCxvRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBWTtBQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3V0aWxzLmNzcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3M/YzIwNyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3N0eWxlcy5jc3M/Y2VjOCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3V0aWxzLmNzcz80ZmRiIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9kZWZhdWx0cy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3JhZGlpLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3NwYWNpbmctdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdHlwZXNjYWxlLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3NsaWRlci50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2RlYm91bmNlLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmxhdHRlbi1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9pbXBvcnQtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy90ZXh0LXRvLXRpdGxlLWNhc2UudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvY2hyb21hLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIubWpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvaW1wb3J0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXRhcmdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4vKiBXcmFwcGVyIGZvciBhbGwgY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMDtcXG59XFxuLm5vVWktY29ubmVjdCxcXG4ubm9VaS1vcmlnaW4ge1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbn1cXG4vKiBPZmZzZXQgZGlyZWN0aW9uXFxuICovXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxcbiAqIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcXG4gIHRvcDogLTEwMCU7XFxuICB3aWR0aDogMDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9VaS10b3VjaC1hcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG4ubm9VaS1zdGF0ZS1kcmFnICoge1xcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xcbiAqL1xcbi5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHJpZ2h0OiAtMTdweDtcXG4gIHRvcDogLTZweDtcXG59XFxuLm5vVWktdmVydGljYWwge1xcbiAgd2lkdGg6IDE4cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbiAgYm90dG9tOiAtMTdweDtcXG59XFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICBsZWZ0OiAtMTdweDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBTdHlsaW5nO1xcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxcbiAqL1xcbi5ub1VpLXRhcmdldCB7XFxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjRjBGMEYwLCAwIDNweCA2cHggLTVweCAjQkJCO1xcbn1cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogIzNGQjhBRjtcXG59XFxuLyogSGFuZGxlcyBhbmQgY3Vyc29ycztcXG4gKi9cXG4ubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0VCRUJFQiwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLm5vVWktYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNEREQsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi8qIEhhbmRsZSBzdHJpcGVzO1xcbiAqL1xcbi5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI0U4RTdFNjtcXG4gIGxlZnQ6IDE0cHg7XFxuICB0b3A6IDZweDtcXG59XFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGxlZnQ6IDE3cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBsZWZ0OiA2cHg7XFxuICB0b3A6IDE0cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB0b3A6IDE3cHg7XFxufVxcbi8qIERpc2FibGVkIHN0YXRlO1xcbiAqL1xcbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjQjhCOEI4O1xcbn1cXG5bZGlzYWJsZWRdLm5vVWktdGFyZ2V0LFxcbltkaXNhYmxlZF0ubm9VaS1oYW5kbGUsXFxuW2Rpc2FibGVkXSAubm9VaS1oYW5kbGUge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLyogQmFzZTtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMsXFxuLm5vVWktcGlwcyAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXBpcHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi8qIFZhbHVlcztcXG4gKlxcbiAqL1xcbi5ub1VpLXZhbHVlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ub1VpLXZhbHVlLXN1YiB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLyogTWFya2luZ3M7XFxuICpcXG4gKi9cXG4ubm9VaS1tYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI0NDQztcXG59XFxuLm5vVWktbWFya2VyLXN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4ubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLyogVmVydGljYWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlciB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcbi5ub1VpLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS10b29sdGlwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMjAlO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTIwJTtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRTtBQUNGOztFQUVFLDJCQUEyQjtFQUMzQiw2Q0FBNkM7RUFDN0MseUJBQXlCO0VBRXpCLGtCQUFrQjtFQUVsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBOztFQUVFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsT0FBTztF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O0VBRUUsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRnVuY3Rpb25hbCBzdHlsaW5nO1xcbiAqIFRoZXNlIHN0eWxlcyBhcmUgcmVxdWlyZWQgZm9yIG5vVWlTbGlkZXIgdG8gZnVuY3Rpb24uXFxuICogWW91IGRvbid0IG5lZWQgdG8gY2hhbmdlIHRoZXNlIHJ1bGVzIHRvIGFwcGx5IHlvdXIgZGVzaWduLlxcbiAqL1xcbi5ub1VpLXRhcmdldCxcXG4ubm9VaS10YXJnZXQgKiB7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXRhcmdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4vKiBXcmFwcGVyIGZvciBhbGwgY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMDtcXG59XFxuLm5vVWktY29ubmVjdCxcXG4ubm9VaS1vcmlnaW4ge1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbn1cXG4vKiBPZmZzZXQgZGlyZWN0aW9uXFxuICovXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxcbiAqIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcXG4gIHRvcDogLTEwMCU7XFxuICB3aWR0aDogMDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub1VpLXRvdWNoLWFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1jb25uZWN0LFxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1vcmlnaW4ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG4ubm9VaS1zdGF0ZS1kcmFnICoge1xcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xcbiAqL1xcbi5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHJpZ2h0OiAtMTdweDtcXG4gIHRvcDogLTZweDtcXG59XFxuLm5vVWktdmVydGljYWwge1xcbiAgd2lkdGg6IDE4cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbiAgYm90dG9tOiAtMTdweDtcXG59XFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICBsZWZ0OiAtMTdweDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBTdHlsaW5nO1xcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxcbiAqL1xcbi5ub1VpLXRhcmdldCB7XFxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjRjBGMEYwLCAwIDNweCA2cHggLTVweCAjQkJCO1xcbn1cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogIzNGQjhBRjtcXG59XFxuLyogSGFuZGxlcyBhbmQgY3Vyc29ycztcXG4gKi9cXG4ubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0VCRUJFQiwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLm5vVWktYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNEREQsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi8qIEhhbmRsZSBzdHJpcGVzO1xcbiAqL1xcbi5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI0U4RTdFNjtcXG4gIGxlZnQ6IDE0cHg7XFxuICB0b3A6IDZweDtcXG59XFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGxlZnQ6IDE3cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBsZWZ0OiA2cHg7XFxuICB0b3A6IDE0cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB0b3A6IDE3cHg7XFxufVxcbi8qIERpc2FibGVkIHN0YXRlO1xcbiAqL1xcbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjQjhCOEI4O1xcbn1cXG5bZGlzYWJsZWRdLm5vVWktdGFyZ2V0LFxcbltkaXNhYmxlZF0ubm9VaS1oYW5kbGUsXFxuW2Rpc2FibGVkXSAubm9VaS1oYW5kbGUge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLyogQmFzZTtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMsXFxuLm5vVWktcGlwcyAqIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXBpcHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi8qIFZhbHVlcztcXG4gKlxcbiAqL1xcbi5ub1VpLXZhbHVlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ub1VpLXZhbHVlLXN1YiB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLyogTWFya2luZ3M7XFxuICpcXG4gKi9cXG4ubm9VaS1tYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI0NDQztcXG59XFxuLm5vVWktbWFya2VyLXN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4ubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlciB7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4vKiBWZXJ0aWNhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLXZlcnRpY2FsIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlciB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcbi5ub1VpLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvdHRvbTogMTIwJTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMjAlO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIGxlZnQ6IGF1dG87XFxuICBib3R0b206IDEwcHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0b3A6IGF1dG87XFxuICByaWdodDogMjhweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjMuMiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNzY4cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTI4MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxNTM2cHg7XFxuICB9XFxufVxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5jb2xsYXBzZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnN0aWNreSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG4uYm90dG9tLTAge1xcbiAgYm90dG9tOiAwcHg7XFxufVxcbi5sZWZ0LTAge1xcbiAgbGVmdDogMHB4O1xcbn1cXG4ucmlnaHQtMCB7XFxuICByaWdodDogMHB4O1xcbn1cXG4uei0xMCB7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLm0tMCB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuLm14LTMge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcbi5teC00IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4ubWItMyB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ubWwtMiB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG4ubXItMSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5tci00IHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLm10LTIge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubXQtMyB7XFxuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xcbn1cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5pbmxpbmUge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGFibGUge1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5jb250ZW50cyB7XFxuICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udy0xIHtcXG4gIHdpZHRoOiAwLjI1cmVtO1xcbn1cXG4udy0xXFxcXC81IHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcbi53LTIwIHtcXG4gIHdpZHRoOiA1cmVtO1xcbn1cXG4udy0yNCB7XFxuICB3aWR0aDogNnJlbTtcXG59XFxuLmZsZXgtMSB7XFxuICBmbGV4OiAxIDEgMCU7XFxufVxcbi5mbGV4LTMge1xcbiAgZmxleDogMyAzIDAlO1xcbn1cXG4uYm9yZGVyLWNvbGxhcHNlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcbi50cmFuc2Zvcm0ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcbi5yZXNpemUge1xcbiAgcmVzaXplOiBib3RoO1xcbn1cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pdGVtcy1zdGFydCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaXRlbXMtYmFzZWxpbmUge1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmdhcC0wIHtcXG4gIGdhcDogMHB4O1xcbn1cXG4uZ2FwLTEge1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG4uZ2FwLTIge1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5nYXAtMyB7XFxuICBnYXA6IDAuNzVyZW07XFxufVxcbi5nYXAtNCB7XFxuICBnYXA6IDFyZW07XFxufVxcbi5vdmVyZmxvdy1oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuLnJvdW5kZWQtbWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxufVxcbi5yb3VuZGVkLW5vbmUge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4ucm91bmRlZC1sIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG4uYm9yZGVyIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4uYmctd2hpdGUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5weC00IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbi5weS0zIHtcXG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxufVxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uYWxpZ24tYmFzZWxpbmUge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4uYWxpZ24tdG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi50ZXh0LWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGV4dC14cyB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4udXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG59XFxuLmNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbi5pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxufVxcbi5saW5lLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG59XFxuLm9wYWNpdHktNzAge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG4ub3BhY2l0eS03NSB7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4uc2hhZG93IHtcXG4gIC0tdHctc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMXB4IDNweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMXB4IDJweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5vdXRsaW5lIHtcXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcbn1cXG4uYmx1ciB7XFxuICAtLXR3LWJsdXI6IGJsdXIoOHB4KTtcXG4gIGZpbHRlcjogYmx1cig4cHgpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcbi5maWx0ZXIge1xcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbn1cXG4udHJhbnNpdGlvbiB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tc3BhY2luZzogMC41cmVtIDFyZW07XFxuICAgIC0tc2xpZGVyLXRodW1iLXNpemU6IGNhbGModmFyKC0tbGluZS1oZWlnaHQtbWQpICsgdmFyKC0tc3kteHMpKTtcXG4gICAgLS1zbGlkZXItdHJhY2stc2l6ZTogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyA0KTtcXG4gICAgLS1zbGlkZXItbWFyZ2luOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuXFxuICAgIC0tcHJpbWFyeTogIzBDNzVEMDtcXG4gICAgLS1wcmltYXJ5LXRleHQ6ICM2NWE1ZGQ7XFxuICAgIC0taW5mbzogIzA3ODM4MDtcXG4gICAgLS1zdWNjZXNzOiAjMDc4NjUwO1xcbiAgICAtLXdhcm5pbmc6ICNDMTU2MDA7XFxuICAgIC0tZGFuZ2VyOiAjRTgxQjAwO1xcblxcbiAgICAtLWZvbnQtc2l6ZS1iYXNlOiAxMnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LWJhc2U6IDE2cHg7XFxuXFxuICAgIC0tZm9udC1zaXplLW1kOiAxNHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LW1kOiAyMHB4O1xcbiAgICAtLWZvbnQtc2l6ZS1sZzogMTZweDtcXG4gICAgLS1saW5lLWhlaWdodC1sZzogMjRweDtcXG5cXG4gICAgLS1yYWRpaS1iYXNlOiA0cHg7XFxuICAgIC0tcmFkaWktbWQ6IGNhbGModmFyKC0tcmFkaWktYmFzZSkgKyAycHgpO1xcbiAgICAtLXJhZGlpLW1kOiBjYWxjKHZhcigtLXJhZGlpLWJhc2UpICsgNHB4KTtcXG5cXG4gICAgLS1zeC14czQ6IDJweDtcXG4gICAgLS1zeC14czM6IDRweDtcXG4gICAgLS1zeC14czI6IDZweDtcXG4gICAgLS1zeC14czogOHB4O1xcbiAgICAtLXN4LXNtOiAxMnB4O1xcbiAgICAtLXN4LWJhc2U6IDE2cHg7XFxuICAgIC0tc3gtbWQ6IDIwcHg7XFxuICAgIC0tc3gtbGc6IDI0cHg7XFxuICAgIC0tc3gteGw6IDI4cHg7XFxuICAgIC0tc3gteGwyOiAzMnB4O1xcbiAgICAtLXN4LXhsMzogNDBweDtcXG5cXG4gICAgLS1zeS14czQ6IDFweDtcXG4gICAgLS1zeS14czM6IDJweDtcXG4gICAgLS1zeS14czI6IDRweDtcXG4gICAgLS1zeS14czogNnB4O1xcbiAgICAtLXN5LXNtOiA4cHg7XFxuICAgIC0tc3ktYmFzZTogMTJweDtcXG4gICAgLS1zeS1tZDogMTZweDtcXG4gICAgLS1zeS1sZzogMjBweDtcXG4gICAgLS1zeS14bDogMjRweDtcXG4gICAgLS1zeS14bDI6IDI4cHg7XFxuICAgIC0tc3kteGwzOiAzMnB4O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLXNlY29uZGFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogIzBDNzVEMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5maWdtYS1iZy1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIC0tbGlnaHQtMTogI2Y4ZmFmYztcXG4gICAgLS1saWdodC0yOiAjZTFlN2VhO1xcbiAgICAtLWxpZ2h0LTM6ICNlN2VjZWU7XFxuICAgIC0tbGlnaHQtNDogI2VkZjFmMztcXG4gICAgLS1saWdodC01OiAjZjJmNmY3O1xcblxcbiAgICAtLWRhcmstMTogIzEyMTUxNjtcXG4gICAgLS1kYXJrLTI6ICMxNzFhMWM7XFxuICAgIC0tZGFyay0zOiAjMWMyMDIyO1xcbiAgICAtLWRhcmstNDogIzIwMjUyNztcXG4gICAgLS1kYXJrLTU6ICMyNTJhMmQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyg0cHggKyA0cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1tZCk7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgcGFkZGluZzogdmFyKC0tc3ktYmFzZSkgdmFyKC0tc3gtYmFzZSkgO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGdhcDogdmFyKC0tc3ktYmFzZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkLXN0aWt5IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgLS10dy1zaGFkb3ctY29sb3JlZDogMCA0cHggNnB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcbi5jb2xvci1ib3gge1xcbiAgICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgICA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1zbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbG9yLWJveC5sLTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC0xKTtcXG59XFxuXFxuLmNvbG9yLWJveC5sLTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC0yKTtcXG59XFxuXFxuLmNvbG9yLWJveC5sLTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC0zKTtcXG59XFxuXFxuLmNvbG9yLWJveC5sLTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC00KTtcXG59XFxuXFxuLmNvbG9yLWJveC5sLTUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC01KTtcXG59XFxuXFxuLmNvbG9yLWJveC5kLTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTEpO1xcbn1cXG5cXG4uY29sb3ItYm94LmQtMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstMik7XFxufVxcblxcbi5jb2xvci1ib3guZC0zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0zKTtcXG59XFxuXFxuLmNvbG9yLWJveC5kLTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTQpO1xcbn1cXG5cXG4uY29sb3ItYm94LmQtNSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstNSk7XFxufVxcblxcbi5jb2xvci1ib3guYS1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDNzVEMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5jb2xvci1ib3guYS1pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3ODM4MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5mbyk7XFxufVxcblxcbi5jb2xvci1ib3guYS1zdWNjZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3ODY1MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XFxufVxcblxcbi5jb2xvci1ib3guYS13YXJuaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MxNTYwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZyk7XFxufVxcblxcbi5jb2xvci1ib3guYS1kYW5nZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgxQjAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xcbn1cXG5cXG4uY29sb3ItYm94IC50b2tlbi12YWx1ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXhzKTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG4gICAgcGFkZGluZzogNnB4IDEycHg7XFxuICAgIHBhZGRpbmc6IHZhcigtLXN5LXhzKSB2YXIoLS1zeC1zbSk7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogNnB4IDEycHg7XFxuICAgIHBhZGRpbmc6IHZhcigtLXN5LXhzKSB2YXIoLS1zeC1zbSk7XFxufVxcblxcbmZvcm0+KiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uLnByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEM3NUQwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmJyYW5kKTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgd2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcXG4gICAgLS13aWR0aDogY2FsYyh2YXIoLS1saW5lLWhlaWdodC1iYXNlKS80KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogY2FsYygxNnB4LzQpIHNvbGlkICMwQzc1RDA7XFxuICAgIGJvcmRlcjogdmFyKC0td2lkdGgpIHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ucmFkaW9ncm91cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5yYWRpb2dyb3VwIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDNzVEMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG5cXG4ucmFkaW9ncm91cCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLS10dy1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAzcHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDFweCAycHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KX1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLXNlbGVjdGVkKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyg0cHggKyA0cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1tZCk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG5bZGF0YS1zbGlkZXJdIHtcXG4gICAgLS10aHVtYi1jb2xvcjogIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uc2xpZGVycyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zbGlkZXJzIC50ZXh0LWxhYmVsIHtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLnNsaWRlcnMgLnNsaWRlciB7XFxuICAgIGhlaWdodDogY2FsYygoMjBweCArIDZweCkgLyA0KTtcXG4gICAgaGVpZ2h0OiBjYWxjKGNhbGMoMjBweCArIDZweCkgLyA0KTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBmbGV4OiAzO1xcbiAgICBtYXJnaW46IDAgY2FsYygyMHB4ICsgNnB4KTtcXG4gICAgbWFyZ2luOiAwIHZhcigtLXNsaWRlci1tYXJnaW4pO1xcbn1cXG5cXG4uc2xpZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXNtKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVycyAuc2xpZGVyIC5ub1VpLWNvbm5lY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aHVtYi1jb2xvcik7XFxufVxcblxcbi5zbGlkZXJzIC5zbGlkZXIgIC5ub1VpLWhhbmRsZSB7XFxuICAgIGJvcmRlcjogY2FsYygoMjBweCArIDZweCkgLyA1KSBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyOiBjYWxjKGNhbGMoMjBweCArIDZweCkgLyA1KSBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDUpIHNvbGlkIHdoaXRlO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuXFxuICAgIFxcbiAgICBoZWlnaHQ6IGNhbGMoMjBweCArIDZweCk7XFxuXFxuICAgIFxcbiAgICBoZWlnaHQ6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcXG4gICAgd2lkdGg6IGNhbGMoMjBweCArIDZweCk7XFxuICAgIHdpZHRoOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuXFxuICAgIHRvcDogY2FsYygoY2FsYygyMHB4ICsgNnB4KSAtIGNhbGMoKDIwcHggKyA2cHgpIC8gNCkpIC8gLTIpO1xcblxcbiAgICB0b3A6IGNhbGMoKGNhbGMoMjBweCArIDZweCkgLSBjYWxjKGNhbGMoMjBweCArIDZweCkgLyA0KSkgLyAtMik7XFxuXFxuICAgIHRvcDogY2FsYygodmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC0gdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpKSAvIC0yKTtcXG4gICAgcmlnaHQ6IGNhbGMoKGNhbGMoMjBweCArIDZweCkgLSBjYWxjKCgyMHB4ICsgNnB4KSAvIDQpKSAvIC0yKTtcXG4gICAgcmlnaHQ6IGNhbGMoKGNhbGMoMjBweCArIDZweCkgLSBjYWxjKGNhbGMoMjBweCArIDZweCkgLyA0KSkgLyAtMik7XFxuICAgIHJpZ2h0OiBjYWxjKCh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLSB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSkpIC8gLTIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAtMXB4IHJnYmEoMCwgMzUsIDQxLCAwLjA0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMzUsIDQxLCAwLjA0KSwgMHB4IDBweCAwcHggMXB4IHJnYmEoMCwgMzUsIDQxLCAwLjEpO1xcbjtcXG5cXG4gICAgLypjdXN0b20gc3R5bGVzKi9cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGh1bWItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcblxcbi5zbGlkZXJzIC5zbGlkZXI6aG92ZXIgIC5ub1VpLWhhbmRsZSB7XFxuICAgIGJvcmRlcjogY2FsYygoMjBweCArIDZweCkgLyA0KSBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyOiBjYWxjKGNhbGMoMjBweCArIDZweCkgLyA0KSBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDQpIHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2xpZGVycyAuc2xpZGVyICAubm9VaS1oYW5kbGU6OmJlZm9yZSxcXG4uc2xpZGVycyAuc2xpZGVyICAubm9VaS1oYW5kbGU6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuW2RhdGEtc2VtYW50aWNzXSAuc2xpZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGdhcDogdmFyKC0tc3ktYmFzZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuI2V4cG9ydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWNvbXBvbmVudCk7XFxufVxcblxcbi8qKioqKioqKioqIFJhbmdlIElucHV0IFN0eWxlcyAqKioqKioqKioqL1xcbi8qUmFuZ2UgUmVzZXQqL1xcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlcyBkZWZhdWx0IGZvY3VzICovXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qKioqKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgYW5kIEVkZ2UgQ2hyb21pdW0gc3R5bGVzICoqKioqL1xcbi8qIHNsaWRlciB0cmFjayAqL1xcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IGNhbGMoKDIwcHggKyA2cHgpIC8gNCk7XFxuICAgIGhlaWdodDogY2FsYyhjYWxjKDIwcHggKyA2cHgpIC8gNCk7XFxuICAgIGhlaWdodDogdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpO1xcbn1cXG5cXG4vKiBzbGlkZXIgdGh1bWIgKi9cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLyogT3ZlcnJpZGUgZGVmYXVsdCBsb29rICovXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IGNhbGMoKGNhbGMoMjBweCArIDZweCkgLSBjYWxjKCgyMHB4ICsgNnB4KSAvIDQpKSAvIC0yKTtcXG4gICAgbWFyZ2luLXRvcDogY2FsYygoY2FsYygyMHB4ICsgNnB4KSAtIGNhbGMoY2FsYygyMHB4ICsgNnB4KSAvIDQpKSAvIC0yKTtcXG4gICAgbWFyZ2luLXRvcDogY2FsYygodmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC0gdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpKSAvIC0yKTtcXG5cXG4gICAgLypjdXN0b20gc3R5bGVzKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWItY29sb3IpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMjBweCArIDZweCk7XFxuICAgIGhlaWdodDogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xcbiAgICB3aWR0aDogY2FsYygyMHB4ICsgNnB4KTtcXG4gICAgd2lkdGg6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYygyMHB4ICsgNnB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNTNhNWY7XFxuICAgIG91dGxpbmU6IDNweCBzb2xpZCAjMDUzYTVmO1xcblxcbiAgICBvdXRsaW5lLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdGh1bWItY29sb3IpLCB0cmFuc3BhcmVudCAyMCUpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMC4xMjVyZW07XFxufVxcblxcbmhyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xcbn1cXG5cXG5hW2RhdGEtZXhwYW5kZXJdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA3LjI5cHg7XFxuICAgIGhlaWdodDogNy4yOXB4O1xcbiAgICBib3JkZXI6IHNvbGlkICMwQzc1RDA7XFxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDJweCwgMHB4KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuYVtkYXRhLWV4cGFuZGVkPXllc106OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgwcHgsIC01cHgpO1xcbn1cXG5cXG4uZm9udC1wcmV2aWV3LWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLXNlY29uZGFyeSk7XFxufVxcblxcbi5mb250LXByZXZpZXctYm94IC5iYXNlIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcXG59XFxuXFxuLmZvbnQtcHJldmlldy1ib3ggLm1kIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5mb250LXByZXZpZXctYm94IC5sZyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXIgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1zZWxlY3RlZCk7XFxufVxcblxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIHdpZHRoOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBcXG59XFxuXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzBDNzVEMDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDNzVEMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDFweCwgLTNweCk7XFxuICAgIHdpZHRoOiAwLjRyZW07XFxuICAgIGhlaWdodDogMC43cmVtO1xcbn1cXG5cXG5cXG4uYWN0aW9uLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWN0aW9uLWxpc3QgbGkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxufVxcblxcbi5hY3Rpb24tbGlzdCBsaTpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG5cXG4uYWN0aW9uLWxpc3QgbGkgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMnB4IDA7XFxuICAgIHBhZGRpbmc6IHZhcigtLXN5LWJhc2UpIDA7XFxufVxcblxcbi5hY3Rpb24tbGlzdCBsaSBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwQzc1RDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmFjdGlvbi1saXN0IGxpIGEgPiBzcGFuOmxhc3QtY2hpbGQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDcuMjlweDtcXG4gICAgaGVpZ2h0OiA3LjI5cHg7XFxuICAgIGJvcmRlcjogc29saWQgIzBDNzVEMDtcXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMnB4LCAwcHgpO1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXN4LXNtKTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWxnKTtcXG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zeS1sZykgdmFyKC0tc3gtbGcpIDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1maWdtYS1jb2xvci10ZXh0KSwgdHJhbnNwYXJlbnQgODUlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCAtNnB4IHJnYmEoMTQsIDE2LCAxNywgMC4xMCksIDBweCAzMHB4IDQ4cHggLThweCByZ2JhKDE0LCAxNiwgMTcsIDAuMTUpO1xcbn1cXG5cXG5kaWFsb2cgYnV0dG9uLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG4gICAgcmlnaHQ6IDhweDtcXG59XFxuXFxuLmNsb3NlLWljb24tYmFyIHtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG5idXR0b24uY2xvc2Uge1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24uY2xvc2Ugc3ZnIHtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbn1cXG5cXG5idXR0b24uY2xvc2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG46Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6ICMwQzc1RDAgYXV0byAycHg7XFxuICAgIG91dGxpbmU6IHZhcigtLXByaW1hcnkpIGF1dG8gMnB4O1xcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCx3UkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYztFQUFkLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVB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O0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsK0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsd0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtF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SUFDckIsYUFBYTtJQUNiLGNBQWM7SUFDZCxxQkFBNEI7SUFBNUIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6Qiw2Q0FBNkM7SUFDN0MsaUJBQXlCO0lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixrQkFBbUM7SUFBbkMsbUNBQW1DO0lBQ25DLCtFQUErRTtJQUMvRSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUFnQjtPQUFoQixxQkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWdDO0lBQWhDLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBZ0M7SUFBaEMsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbjpyb290IHtcXG4gICAgLS1zcGFjaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgLS1zbGlkZXItdGh1bWItc2l6ZTogY2FsYyh2YXIoLS1saW5lLWhlaWdodC1tZCkgKyB2YXIoLS1zeS14cykpO1xcbiAgICAtLXNsaWRlci10cmFjay1zaXplOiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDQpO1xcbiAgICAtLXNsaWRlci1tYXJnaW46IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcXG5cXG4gICAgLS1wcmltYXJ5OiAjMEM3NUQwO1xcbiAgICAtLXByaW1hcnktdGV4dDogIzY1YTVkZDtcXG4gICAgLS1pbmZvOiAjMDc4MzgwO1xcbiAgICAtLXN1Y2Nlc3M6ICMwNzg2NTA7XFxuICAgIC0td2FybmluZzogI0MxNTYwMDtcXG4gICAgLS1kYW5nZXI6ICNFODFCMDA7XFxuXFxuICAgIC0tZm9udC1zaXplLWJhc2U6IDEycHg7XFxuICAgIC0tbGluZS1oZWlnaHQtYmFzZTogMTZweDtcXG5cXG4gICAgLS1mb250LXNpemUtbWQ6IDE0cHg7XFxuICAgIC0tbGluZS1oZWlnaHQtbWQ6IDIwcHg7XFxuICAgIC0tZm9udC1zaXplLWxnOiAxNnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LWxnOiAyNHB4O1xcblxcbiAgICAtLXJhZGlpLWJhc2U6IDRweDtcXG4gICAgLS1yYWRpaS1tZDogY2FsYyh2YXIoLS1yYWRpaS1iYXNlKSArIDJweCk7XFxuICAgIC0tcmFkaWktbWQ6IGNhbGModmFyKC0tcmFkaWktYmFzZSkgKyA0cHgpO1xcblxcbiAgICAtLXN4LXhzNDogMnB4O1xcbiAgICAtLXN4LXhzMzogNHB4O1xcbiAgICAtLXN4LXhzMjogNnB4O1xcbiAgICAtLXN4LXhzOiA4cHg7XFxuICAgIC0tc3gtc206IDEycHg7XFxuICAgIC0tc3gtYmFzZTogMTZweDtcXG4gICAgLS1zeC1tZDogMjBweDtcXG4gICAgLS1zeC1sZzogMjRweDtcXG4gICAgLS1zeC14bDogMjhweDtcXG4gICAgLS1zeC14bDI6IDMycHg7XFxuICAgIC0tc3gteGwzOiA0MHB4O1xcblxcbiAgICAtLXN5LXhzNDogMXB4O1xcbiAgICAtLXN5LXhzMzogMnB4O1xcbiAgICAtLXN5LXhzMjogNHB4O1xcbiAgICAtLXN5LXhzOiA2cHg7XFxuICAgIC0tc3ktc206IDhweDtcXG4gICAgLS1zeS1iYXNlOiAxMnB4O1xcbiAgICAtLXN5LW1kOiAxNnB4O1xcbiAgICAtLXN5LWxnOiAyMHB4O1xcbiAgICAtLXN5LXhsOiAyNHB4O1xcbiAgICAtLXN5LXhsMjogMjhweDtcXG4gICAgLS1zeS14bDM6IDMycHg7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uZmlnbWEtYmctc2Vjb25kYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICAtLWxpZ2h0LTE6ICNmOGZhZmM7XFxuICAgIC0tbGlnaHQtMjogI2UxZTdlYTtcXG4gICAgLS1saWdodC0zOiAjZTdlY2VlO1xcbiAgICAtLWxpZ2h0LTQ6ICNlZGYxZjM7XFxuICAgIC0tbGlnaHQtNTogI2YyZjZmNztcXG5cXG4gICAgLS1kYXJrLTE6ICMxMjE1MTY7XFxuICAgIC0tZGFyay0yOiAjMTcxYTFjO1xcbiAgICAtLWRhcmstMzogIzFjMjAyMjtcXG4gICAgLS1kYXJrLTQ6ICMyMDI1Mjc7XFxuICAgIC0tZGFyay01OiAjMjUyYTJkO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLW1kKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3ktYmFzZSkgdmFyKC0tc3gtYmFzZSkgO1xcbiAgICBnYXA6IHZhcigtLXN5LWJhc2UpO1xcblxcbiAgICBAYXBwbHkgZmxleCBmbGV4LWNvbDtcXG59XFxuXFxuLmNhcmQtc3Rpa3kge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgQGFwcGx5IHJvdW5kZWQtbm9uZSBtLTAgc2hhZG93LW1kO1xcbn1cXG5cXG4uY29sb3ItYm94IHtcXG4gICAgbWluLWhlaWdodDogMnJlbTtcXG4gICAgO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtc20pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb2xvci1ib3gubC0xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtMSk7XFxufVxcblxcbi5jb2xvci1ib3gubC0yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtMik7XFxufVxcblxcbi5jb2xvci1ib3gubC0zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtMyk7XFxufVxcblxcbi5jb2xvci1ib3gubC00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtNCk7XFxufVxcblxcbi5jb2xvci1ib3gubC01IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtNSk7XFxufVxcblxcbi5jb2xvci1ib3guZC0xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0xKTtcXG59XFxuXFxuLmNvbG9yLWJveC5kLTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTIpO1xcbn1cXG5cXG4uY29sb3ItYm94LmQtMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstMyk7XFxufVxcblxcbi5jb2xvci1ib3guZC00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay00KTtcXG59XFxuXFxuLmNvbG9yLWJveC5kLTUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTUpO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtcHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZm8pO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtc3VjY2VzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtd2FybmluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG59XFxuXFxuLmNvbG9yLWJveCAudG9rZW4tdmFsdWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC14cyk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zeS14cykgdmFyKC0tc3gtc20pO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXN5LXhzKSB2YXIoLS1zeC1zbSk7XFxufVxcblxcbmZvcm0+KiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uLnByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmJyYW5kKTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxuICAgIGhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcXG4gICAgLS13aWR0aDogY2FsYyh2YXIoLS1saW5lLWhlaWdodC1iYXNlKS80KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogdmFyKC0td2lkdGgpIHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ucmFkaW9ncm91cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtcm93IHJvdW5kZWQ7XFxufVxcblxcbi5yYWRpb2dyb3VwIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG5cXG4gICAgQGFwcGx5IHJvdW5kZWQtbm9uZTtcXG59XFxuXFxuLnJhZGlvZ3JvdXAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIEBhcHBseSBzaGFkb3dcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1zZWxlY3RlZCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLW1kKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcblxcbltkYXRhLXNsaWRlcl0ge1xcbiAgICAtLXRodW1iLWNvbG9yOiAgdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5zbGlkZXJzIGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNsaWRlcnMgLnRleHQtbGFiZWwge1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4uc2xpZGVycyAuc2xpZGVyIHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBmbGV4OiAzO1xcbiAgICBtYXJnaW46IDAgdmFyKC0tc2xpZGVyLW1hcmdpbik7XFxufVxcblxcbi5zbGlkZXJzIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXNtKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVycyAuc2xpZGVyIC5ub1VpLWNvbm5lY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aHVtYi1jb2xvcik7XFxufVxcblxcbi5zbGlkZXJzIC5zbGlkZXIgIC5ub1VpLWhhbmRsZSB7XFxuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyA1KSBzb2xpZCB3aGl0ZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcblxcbiAgICBcXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuICAgIHdpZHRoOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuXFxuICAgIHRvcDogY2FsYygodmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC0gdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpKSAvIC0yKTtcXG4gICAgcmlnaHQ6IGNhbGMoKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAtIHZhcigtLXNsaWRlci10cmFjay1zaXplKSkgLyAtMik7XFxuXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IC0xcHggcmdiYSgwLCAzNSwgNDEsIDAuMDQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAzNSwgNDEsIDAuMDQpLCAwcHggMHB4IDBweCAxcHggcmdiYSgwLCAzNSwgNDEsIDAuMSk7XFxuO1xcblxcbiAgICAvKmN1c3RvbSBzdHlsZXMqL1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aHVtYi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG59XFxuXFxuLnNsaWRlcnMgLnNsaWRlcjpob3ZlciAgLm5vVWktaGFuZGxlIHtcXG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDQpIHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2xpZGVycyAuc2xpZGVyICAubm9VaS1oYW5kbGU6OmJlZm9yZSxcXG4uc2xpZGVycyAuc2xpZGVyICAubm9VaS1oYW5kbGU6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuW2RhdGEtc2VtYW50aWNzXSAuc2xpZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXN5LWJhc2UpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbiNleHBvcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1jb21wb25lbnQpO1xcbn1cXG5cXG4vKioqKioqKioqKiBSYW5nZSBJbnB1dCBTdHlsZXMgKioqKioqKioqKi9cXG4vKlJhbmdlIFJlc2V0Ki9cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlcyBkZWZhdWx0IGZvY3VzICovXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qKioqKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgYW5kIEVkZ2UgQ2hyb21pdW0gc3R5bGVzICoqKioqL1xcbi8qIHNsaWRlciB0cmFjayAqL1xcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNsaWRlci10cmFjay1zaXplKTtcXG59XFxuXFxuLyogc2xpZGVyIHRodW1iICovXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLSB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSkpIC8gLTIpO1xcblxcbiAgICAvKmN1c3RvbSBzdHlsZXMqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aHVtYi1jb2xvcik7XFxuICAgIGhlaWdodDogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xcbiAgICB3aWR0aDogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA1M2E1ZjtcXG4gICAgb3V0bGluZTogM3B4IHNvbGlkICMwNTNhNWY7XFxuXFxuICAgIG91dGxpbmUtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS10aHVtYi1jb2xvciksIHRyYW5zcGFyZW50IDIwJSk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAwLjEyNXJlbTtcXG59XFxuXFxuaHIge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxufVxcblxcbmFbZGF0YS1leHBhbmRlcl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDcuMjlweDtcXG4gICAgaGVpZ2h0OiA3LjI5cHg7XFxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDJweCwgMHB4KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuYVtkYXRhLWV4cGFuZGVkPXllc106OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgwcHgsIC01cHgpO1xcbn1cXG5cXG4uZm9udC1wcmV2aWV3LWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLXNlY29uZGFyeSk7XFxufVxcblxcbi5mb250LXByZXZpZXctYm94IC5iYXNlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxufVxcblxcbi5mb250LXByZXZpZXctYm94IC5tZCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1kKTtcXG59XFxuXFxuLmZvbnQtcHJldmlldy1ib3ggLmxnIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXIgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1zZWxlY3RlZCk7XFxufVxcblxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBcXG59XFxuXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgxcHgsIC0zcHgpO1xcbiAgICB3aWR0aDogMC40cmVtO1xcbiAgICBoZWlnaHQ6IDAuN3JlbTtcXG59XFxuXFxuXFxuLmFjdGlvbi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFjdGlvbi1saXN0IGxpIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xcbn1cXG5cXG4uYWN0aW9uLWxpc3QgbGk6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci13aWR0aDogMDtcXG59XFxuXFxuLmFjdGlvbi1saXN0IGxpIGEge1xcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogdmFyKC0tc3ktYmFzZSkgMDtcXG59XFxuXFxuLmFjdGlvbi1saXN0IGxpIGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmFjdGlvbi1saXN0IGxpIGEgPiBzcGFuOmxhc3QtY2hpbGQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDcuMjlweDtcXG4gICAgaGVpZ2h0OiA3LjI5cHg7XFxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDJweCwgMHB4KTtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXN4LXNtKTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWxnKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3ktbGcpIHZhcigtLXN4LWxnKSA7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tZmlnbWEtY29sb3ItdGV4dCksIHRyYW5zcGFyZW50IDg1JSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDIwcHggLTZweCByZ2JhKDE0LCAxNiwgMTcsIDAuMTApLCAwcHggMzBweCA0OHB4IC04cHggcmdiYSgxNCwgMTYsIDE3LCAwLjE1KTtcXG59XFxuXFxuZGlhbG9nIGJ1dHRvbi5jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHJpZ2h0OiA4cHg7XFxufVxcblxcbi5jbG9zZS1pY29uLWJhciB7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG59XFxuXFxuYnV0dG9uLmNsb3NlIHtcXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5jbG9zZSBzdmcge1xcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XFxufVxcblxcbmJ1dHRvbi5jbG9zZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogdmFyKC0tcHJpbWFyeSkgYXV0byAycHg7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50ZXh0LXNpemUteHMge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC14cyk7XFxufVxcblxcbi50ZXh0LXNpemUtc20ge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1zbSk7XFxufVxcblxcbi50ZXh0LXNpemUtYmFzZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxufVxcblxcbi50ZXh0LXNpemUtbWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1tZCk7XFxufVxcblxcbi50ZXh0LXNpemUtbGcge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1sZyk7XFxufVxcblxcbi5yYWRpaS1iYXNlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxufVxcblxcbi5yYWRpaS1iYXNlLWwge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKSAwIDAgdmFyKC0tcmFkaWktYmFzZSk7XFxufVxcblxcbi5yYWRpaS1tZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLW1kKTtcXG59XFxuXFxuLnB4LXhzNCB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteHM0KTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteHM0KTtcXG59XFxuLnB4LXhzMyB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteHMzKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteHMzKTtcXG59XFxuLnB4LXhzMiB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteHMyKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteHMyKTtcXG59XFxuLnB4LXhzIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC14cyk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXhzKTtcXG59XFxuLnB4LXNtIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC1zbSk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXNtKTtcXG59XFxuLnB4LWJhc2Uge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LWJhc2UpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC1iYXNlKTtcXG59XFxuLnB4LW1kIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC1tZCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LW1kKTtcXG59XFxuLnB4LWxnIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC1sZyk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LWxnKTtcXG59XFxuLnB4LXhsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC14bCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXhsKTtcXG59XFxuLnB4LXhsMiB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteGwyKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteGwyKTtcXG59XFxuLnB4LXhsMyB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteGwzKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteGwzKTtcXG59XFxuXFxuLnB5LXhzNCB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14czQpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteHM0KTtcXG59XFxuLnB5LXhzMyB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14czMpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteHMzKTtcXG59XFxuLnB5LXhzMiB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14czIpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteHMyKTtcXG59XFxuLnB5LXhzIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXhzKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXhzKTtcXG59XFxuLnB5LXNtIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXNtKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXNtKTtcXG59XFxuLnB5LWJhc2Uge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3ktYmFzZSk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS1iYXNlKTtcXG59XFxuLnB5LW1kIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LW1kKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LW1kKTtcXG59XFxuLnB5LWxnIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LWxnKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LWxnKTtcXG59XFxuLnB5LXhsIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXhsKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXhsKTtcXG59XFxuLnB5LXhsMiB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14bDIpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteGwyKTtcXG59XFxuLnB5LXhsMyB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14bDMpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteGwzKTtcXG59XFxuXFxuXFxuLmdhcC1zeS14czQge1xcbiAgICBnYXA6IHZhcigtLXN5LXhzNCk7XFxufVxcbi5nYXAtc3kteHMzIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14czMpO1xcbn1cXG4uZ2FwLXN5LXhzMiB7XFxuICAgIGdhcDogdmFyKC0tc3kteHMyKTtcXG59XFxuLmdhcC1zeS14cyB7XFxuICAgIGdhcDogdmFyKC0tc3kteHMpO1xcbn1cXG4uZ2FwLXN5LXNtIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS1zbSk7XFxufVxcbi5nYXAtc3ktYmFzZSB7XFxuICAgIGdhcDogdmFyKC0tc3ktYmFzZSk7XFxufVxcbi5nYXAtc3ktbWQge1xcbiAgICBnYXA6IHZhcigtLXN5LW1kKTtcXG59XFxuLmdhcC1zeS1sZyB7XFxuICAgIGdhcDogdmFyKC0tc3ktbGcpO1xcbn1cXG4uZ2FwLXN5LXhsIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14bCk7XFxufVxcbi5nYXAtc3kteGwyIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14bDIpO1xcbn1cXG4uZ2FwLXN5LXhsMyB7XFxuICAgIGdhcDogdmFyKC0tc3kteGwzKTtcXG59XFxuXFxuLmdhcC1zeC14czQge1xcbiAgICBnYXA6IHZhcigtLXN4LXhzNCk7XFxufVxcbi5nYXAtc3gteHMzIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14czMpO1xcbn1cXG4uZ2FwLXN4LXhzMiB7XFxuICAgIGdhcDogdmFyKC0tc3gteHMyKTtcXG59XFxuLmdhcC1zeC14cyB7XFxuICAgIGdhcDogdmFyKC0tc3gteHMpO1xcbn1cXG4uZ2FwLXN4LXNtIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC1zbSk7XFxufVxcbi5nYXAtc3gtYmFzZSB7XFxuICAgIGdhcDogdmFyKC0tc3gtYmFzZSk7XFxufVxcbi5nYXAtc3gtbWQge1xcbiAgICBnYXA6IHZhcigtLXN4LW1kKTtcXG59XFxuLmdhcC1zeC1sZyB7XFxuICAgIGdhcDogdmFyKC0tc3gtbGcpO1xcbn1cXG4uZ2FwLXN4LXhsIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14bCk7XFxufVxcbi5nYXAtc3gteGwyIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14bDIpO1xcbn1cXG4uZ2FwLXN4LXhsMyB7XFxuICAgIGdhcDogdmFyKC0tc3gteGwzKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL3V0aWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnRleHQtc2l6ZS14cyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXhzKTtcXG59XFxuXFxuLnRleHQtc2l6ZS1zbSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXNtKTtcXG59XFxuXFxuLnRleHQtc2l6ZS1iYXNlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG59XFxuXFxuLnRleHQtc2l6ZS1tZCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1kKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LW1kKTtcXG59XFxuXFxuLnRleHQtc2l6ZS1sZyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWxnKTtcXG59XFxuXFxuLnJhZGlpLWJhc2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG59XFxuXFxuLnJhZGlpLWJhc2UtbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpIDAgMCB2YXIoLS1yYWRpaS1iYXNlKTtcXG59XFxuXFxuLnJhZGlpLW1kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktbWQpO1xcbn1cXG5cXG4ucHgteHM0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC14czQpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC14czQpO1xcbn1cXG4ucHgteHMzIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC14czMpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC14czMpO1xcbn1cXG4ucHgteHMyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC14czIpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC14czIpO1xcbn1cXG4ucHgteHMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LXhzKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteHMpO1xcbn1cXG4ucHgtc20ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LXNtKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gtc20pO1xcbn1cXG4ucHgtYmFzZSB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gtYmFzZSk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LWJhc2UpO1xcbn1cXG4ucHgtbWQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LW1kKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gtbWQpO1xcbn1cXG4ucHgtbGcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LWxnKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gtbGcpO1xcbn1cXG4ucHgteGwge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LXhsKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteGwpO1xcbn1cXG4ucHgteGwyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC14bDIpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC14bDIpO1xcbn1cXG4ucHgteGwzIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC14bDMpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC14bDMpO1xcbn1cXG5cXG4ucHkteHM0IHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXhzNCk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS14czQpO1xcbn1cXG4ucHkteHMzIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXhzMyk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS14czMpO1xcbn1cXG4ucHkteHMyIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXhzMik7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS14czIpO1xcbn1cXG4ucHkteHMge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3kteHMpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteHMpO1xcbn1cXG4ucHktc20ge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3ktc20pO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3ktc20pO1xcbn1cXG4ucHktYmFzZSB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS1iYXNlKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LWJhc2UpO1xcbn1cXG4ucHktbWQge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3ktbWQpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3ktbWQpO1xcbn1cXG4ucHktbGcge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3ktbGcpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3ktbGcpO1xcbn1cXG4ucHkteGwge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3kteGwpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteGwpO1xcbn1cXG4ucHkteGwyIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXhsMik7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS14bDIpO1xcbn1cXG4ucHkteGwzIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXhsMyk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS14bDMpO1xcbn1cXG5cXG5cXG4uZ2FwLXN5LXhzNCB7XFxuICAgIGdhcDogdmFyKC0tc3kteHM0KTtcXG59XFxuLmdhcC1zeS14czMge1xcbiAgICBnYXA6IHZhcigtLXN5LXhzMyk7XFxufVxcbi5nYXAtc3kteHMyIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14czIpO1xcbn1cXG4uZ2FwLXN5LXhzIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14cyk7XFxufVxcbi5nYXAtc3ktc20ge1xcbiAgICBnYXA6IHZhcigtLXN5LXNtKTtcXG59XFxuLmdhcC1zeS1iYXNlIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS1iYXNlKTtcXG59XFxuLmdhcC1zeS1tZCB7XFxuICAgIGdhcDogdmFyKC0tc3ktbWQpO1xcbn1cXG4uZ2FwLXN5LWxnIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS1sZyk7XFxufVxcbi5nYXAtc3kteGwge1xcbiAgICBnYXA6IHZhcigtLXN5LXhsKTtcXG59XFxuLmdhcC1zeS14bDIge1xcbiAgICBnYXA6IHZhcigtLXN5LXhsMik7XFxufVxcbi5nYXAtc3kteGwzIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14bDMpO1xcbn1cXG5cXG4uZ2FwLXN4LXhzNCB7XFxuICAgIGdhcDogdmFyKC0tc3gteHM0KTtcXG59XFxuLmdhcC1zeC14czMge1xcbiAgICBnYXA6IHZhcigtLXN4LXhzMyk7XFxufVxcbi5nYXAtc3gteHMyIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14czIpO1xcbn1cXG4uZ2FwLXN4LXhzIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14cyk7XFxufVxcbi5nYXAtc3gtc20ge1xcbiAgICBnYXA6IHZhcigtLXN4LXNtKTtcXG59XFxuLmdhcC1zeC1iYXNlIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC1iYXNlKTtcXG59XFxuLmdhcC1zeC1tZCB7XFxuICAgIGdhcDogdmFyKC0tc3gtbWQpO1xcbn1cXG4uZ2FwLXN4LWxnIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC1sZyk7XFxufVxcbi5nYXAtc3gteGwge1xcbiAgICBnYXA6IHZhcigtLXN4LXhsKTtcXG59XFxuLmdhcC1zeC14bDIge1xcbiAgICBnYXA6IHZhcigtLXN4LXhsMik7XFxufVxcbi5nYXAtc3gteGwzIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14bDMpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm91aXNsaWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm91aXNsaWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi91dGlscy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi91dGlscy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCByYWRpaVNpemVOYW1lID0gW1xuICAgIFwiY29tcGFjdFwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwibGFyZ2VcIixcbl07XG5leHBvcnQgY29uc3QgcmFkaWlTaXplVmFsdWVzID0gW1xuICAgIDQsXG4gICAgNixcbiAgICA4LFxuXTtcbmV4cG9ydCBjb25zdCBzcGFjaW5nU2l6ZU5hbWUgPSBbXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJsYXJnZVwiLFxuICAgIFwidG91Y2hcIixcbl07XG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeVNpemVOYW1lID0gW1xuICAgIFwiY29tcGFjdFwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwibGFyZ2VcIixcbl07XG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeVNpemVWYWx1ZXMgPSBbXG4gICAgXCIxMy8xNlwiLFxuICAgIFwiMTUvMjBcIixcbiAgICBcIjE3LzI0XCIsXG5dO1xuZXhwb3J0IGNvbnN0IGljb25TaXplTmFtZSA9IFtcbiAgICBcImJhc2VcIixcbiAgICBcInRvdWNoXCJcbl07XG5leHBvcnQgY29uc3QgaWNvblNpemVWYWx1ZXMgPSBbXG4gICAgXCIxNlwiLFxuICAgIFwiMjRcIixcbl07XG5leHBvcnQgY29uc3Qgc3lzdGVtQWNjZW50TGlzdCA9IFtcbiAgICBcInJlZFwiLFxuICAgIFwiYW1iZXJcIixcbiAgICBcImJyb3duXCIsXG4gICAgXCJncmVlblwiLFxuICAgIFwidGVhbFwiLFxuICAgIFwiY3lhblwiLFxuICAgIFwiYmx1ZVwiLFxuICAgIFwiaW5kaWdvXCIsXG4gICAgXCJ2aW9sZXRcIixcbiAgICBcInB1cnBsZVwiLFxuICAgIFwicGlua1wiXG5dO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRBY2NlbnRIVUVzID0ge1xuICAgIFwicmVkXCI6IDQsXG4gICAgXCJhbWJlclwiOiAyNSxcbiAgICBcImJyb3duXCI6IDMzLFxuICAgIFwiZ3JlZW5cIjogMTUwLFxuICAgIFwidGVhbFwiOiAxODAsXG4gICAgXCJjeWFuXCI6IDIwMCxcbiAgICBcImJsdWVcIjogMjEwLFxuICAgIFwiaW5kaWdvXCI6IDI0MCxcbiAgICBcInZpb2xldFwiOiAyNjAsXG4gICAgXCJwdXJwbGVcIjogMjgwLFxuICAgIFwicGlua1wiOiAzNDBcbn07XG5leHBvcnQgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgIHR5cGU6ICdJTVBPUlQnLFxuICAgIGh1ZTogMTkwLFxuICAgIHNhdHVyYXRpb246IDAuMixcbiAgICBkaXN0YW5jZTogMC4wMixcbiAgICBwcmltYXJ5OiAnYmx1ZScsXG4gICAgaW5mbzogJ2N5YW4nLFxuICAgIHN1Y2Nlc3M6ICdncmVlbicsXG4gICAgd2FybmluZzogJ2FtYmVyJyxcbiAgICBkYW5nZXI6ICdyZWQnLFxuICAgIHJlZDogNCxcbiAgICBhbWJlcjogMjUsXG4gICAgYnJvd246IDMzLFxuICAgIGdyZWVuOiAxNTAsXG4gICAgdGVhbDogMTgwLFxuICAgIGN5YW46IDIwMCxcbiAgICBibHVlOiAyMTAsXG4gICAgaW5kaWdvOiAyNDAsXG4gICAgdmlvbGV0OiAyNjAsXG4gICAgcHVycGxlOiAyODAsXG4gICAgcGluazogMzQwLFxuICAgIGJhc2VGb250U2l6ZTogJ2Jhc2UnLFxuICAgIHR5cGVTY2FsZTogJ21pbm9yVGhpcmQnLFxuICAgIGNyZWF0ZVN0eWxlczogdHJ1ZSxcbiAgICBhY2NlbnRTYXR1cmF0aW9uOiAwLjksXG4gICAgcmFkaWk6ICdiYXNlJyxcbiAgICBzcGFjaW5nOiAnYmFzZScsXG4gICAgc2luZ2xlQ29sbGVjdGlvbjogZmFsc2Vcbn07XG5leHBvcnQgY29uc3QgZGVmYXVsdFNlbWFudGljQWNjZW50cyA9IHtcbiAgICBwcmltYXJ5OiAnYmx1ZScsXG4gICAgaW5mbzogJ2N5YW4nLFxuICAgIHN1Y2Nlc3M6ICdncmVlbicsXG4gICAgd2FybmluZzogJ2FtYmVyJyxcbiAgICBkYW5nZXI6ICdyZWQnXG59O1xuIiwiaW1wb3J0IGJhc2VSYWRpaVRva2VucyBmcm9tIFwiLi90b2tlbnMvcmFkaWkvYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdFJhZGlpVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9yYWRpaS9jb21wYWN0Lmpzb25cIjtcbmltcG9ydCBsYXJnZVJhZGlpVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9yYWRpaS9sYXJnZS5qc29uXCI7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZmxhdHRlbi1vYmplY3RcIjtcbmV4cG9ydCBjb25zdCBiYXNlID0gZmxhdHRlbk9iamVjdChiYXNlUmFkaWlUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSBmbGF0dGVuT2JqZWN0KGNvbXBhY3RSYWRpaVRva2Vucyk7XG5leHBvcnQgY29uc3QgbGFyZ2UgPSBmbGF0dGVuT2JqZWN0KGxhcmdlUmFkaWlUb2tlbnMpO1xuIiwiaW1wb3J0IGJhc2VTcGFjaW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zcGFjaW5nL2Jhc2UuanNvblwiO1xuaW1wb3J0IGNvbXBhY3RTcGFjaW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zcGFjaW5nL2NvbXBhY3QuanNvblwiO1xuaW1wb3J0IGxhcmdlU3BhY2luZ1Rva2VucyBmcm9tIFwiLi90b2tlbnMvc3BhY2luZy9sYXJnZS5qc29uXCI7XG5pbXBvcnQgdG91Y2hTcGFjaW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zcGFjaW5nL3RvdWNoLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IGJhc2UgPSBmbGF0dGVuT2JqZWN0KGJhc2VTcGFjaW5nVG9rZW5zKTtcbmV4cG9ydCBjb25zdCBjb21wYWN0ID0gZmxhdHRlbk9iamVjdChjb21wYWN0U3BhY2luZ1Rva2Vucyk7XG5leHBvcnQgY29uc3QgbGFyZ2UgPSBmbGF0dGVuT2JqZWN0KGxhcmdlU3BhY2luZ1Rva2Vucyk7XG5leHBvcnQgY29uc3QgdG91Y2ggPSBmbGF0dGVuT2JqZWN0KHRvdWNoU3BhY2luZ1Rva2Vucyk7XG4iLCJpbXBvcnQgdGV4dFN0eWxlVG9rZW5zIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L3N0eWxlcy5qc29uXCI7XG5pbXBvcnQgdHlwZUZhY2VUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvdHlwZWZhY2UuanNvblwiO1xuaW1wb3J0IGJhc2VNaW5vclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21pbm9yLXRoaXJkL3R5cGVzY2FsZS1iYXNlLmpzb25cIjtcbmltcG9ydCBjb21wYWN0TWlub3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9taW5vci10aGlyZC90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VNaW5vclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21pbm9yLXRoaXJkL3R5cGVzY2FsZS1sYXJnZS5qc29uXCI7XG5pbXBvcnQgYmFzZU1ham9yU2Vjb25kIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXNlY29uZC90eXBlc2NhbGUtYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdE1ham9yU2Vjb25kIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXNlY29uZC90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VNYWpvclNlY29uZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci1zZWNvbmQvdHlwZXNjYWxlLWxhcmdlLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IGJhc2UgPSBmbGF0dGVuT2JqZWN0KGJhc2VNaW5vclRoaXJkKTtcbmV4cG9ydCBjb25zdCBjb21wYWN0ID0gZmxhdHRlbk9iamVjdChjb21wYWN0TWlub3JUaGlyZCk7XG5leHBvcnQgY29uc3QgbGFyZ2UgPSBmbGF0dGVuT2JqZWN0KGxhcmdlTWlub3JUaGlyZCk7XG5jb25zdCBzdHlsZXMgPSBmbGF0dGVuT2JqZWN0KHRleHRTdHlsZVRva2Vucyk7XG5jb25zdCB0b2tlbnMgPSB7XG4gICAgbWlub3JUaGlyZDoge1xuICAgICAgICBiYXNlOiBmbGF0dGVuT2JqZWN0KGJhc2VNaW5vclRoaXJkKSxcbiAgICAgICAgY29tcGFjdDogZmxhdHRlbk9iamVjdChjb21wYWN0TWlub3JUaGlyZCksXG4gICAgICAgIGxhcmdlOiBmbGF0dGVuT2JqZWN0KGxhcmdlTWlub3JUaGlyZCksXG4gICAgfSxcbiAgICBtYWpvclNlY29uZDoge1xuICAgICAgICBiYXNlOiBmbGF0dGVuT2JqZWN0KGJhc2VNYWpvclNlY29uZCksXG4gICAgICAgIGNvbXBhY3Q6IGZsYXR0ZW5PYmplY3QoY29tcGFjdE1ham9yU2Vjb25kKSxcbiAgICAgICAgbGFyZ2U6IGZsYXR0ZW5PYmplY3QobGFyZ2VNYWpvclNlY29uZCksXG4gICAgfSxcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwb2dyYW9oeVRva2VucyhzaXplLCBzY2FsZSA9IFwibWlub3JUaGlyZFwiKSB7XG4gICAgbGV0IHNjYWxlVG9rZW5zID0gdG9rZW5zW3NjYWxlXVtzaXplXTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZsYXR0ZW5PYmplY3QodHlwZUZhY2VUb2tlbnMpKSwgc2NhbGVUb2tlbnMpLCBzdHlsZXMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbnREZXRhaWxzKCkge1xuICAgIGxldCBuYW1lcyA9IFtdO1xuICAgIGNvbnN0IHRva2VucyA9IHR5cGVGYWNlVG9rZW5zO1xuICAgIGNvbnN0IGZhbWlseSA9IHR5cGVGYWNlVG9rZW5zW1wiZm9udC1mYW1pbGllc1wiXS5wcmltYXJ5LiR2YWx1ZTtcbiAgICBmb3IgKGxldCBbbmFtZSwgZm9udFdlaWdodF0gb2YgT2JqZWN0LmVudHJpZXModHlwZUZhY2VUb2tlbnNbXCJmb250LXdlaWdodHNcIl0pKSB7XG4gICAgICAgIG5hbWVzLnB1c2goeyBmYW1pbHksIHN0eWxlOiBmb250V2VpZ2h0LiR2YWx1ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzO1xufVxuIiwiaW1wb3J0IG5vdWlzbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5pbXBvcnQgeyB0b1RpdGxlQ2FzZSB9IGZyb20gJy4uL3V0aWxzL3RleHQtdG8tdGl0bGUtY2FzZSc7XG5leHBvcnQgZnVuY3Rpb24gaW5pdFNsaWRlcihlbCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRhdGEgPSBlbC5kYXRhc2V0LnNsaWRlciB8fCAne30nO1xuICAgIGxldCBwYXJhbXMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24ocGFyYW1zLCBvcHRpb25zIHx8IHt9KTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJvb3RFbGVtZW50OiBlbCwgcGFyYW1zIH0sIHByb2Nlc3NDb21wb25lbnQoZWwsIHBhcmFtcykpO1xufVxuZnVuY3Rpb24gZ2V0TWFya3VwKHsgbGFiZWwsIG5hbWUsIG1pbiwgbWF4LCBzdGVwLCB2YWx1ZSB9KSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInNsaWRlcnMgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1sYWJlbFwiPiR7bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtZGlzcGxheSB0eXBlPVwidGV4dFwiIHJlYWRvbmx5PlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtdmFsdWUgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWV9XCIgdmFsdWU9XCIke3ZhbHVlfVwiPlxuICAgICAgICA8L2xhYmVsPiAgICBcbiAgICBgO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChlbCwgb3B0aW9ucykge1xuICAgIGVsLmlubmVySFRNTCA9IGdldE1hcmt1cChvcHRpb25zKTtcbiAgICBjb25zdCBkaXNwbGF5SW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtkYXRhLWRpc3BsYXldYCk7XG4gICAgY29uc3QgdmFsdWVJbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W2RhdGEtdmFsdWVdYCk7XG4gICAgbGV0IHNsaWRlciA9IGVsLnF1ZXJ5U2VsZWN0b3IoYC5zbGlkZXJgKTtcbiAgICBzbGlkZXIgPSBub3Vpc2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcbiAgICAgICAgY29ubmVjdDogJ2xvd2VyJyxcbiAgICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICAgIHN0YXJ0OiBbb3B0aW9ucy52YWx1ZV0sXG4gICAgICAgIHN0ZXA6IG9wdGlvbnMuc3RlcCxcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICdtaW4nOiBbb3B0aW9ucy5taW5dLFxuICAgICAgICAgICAgJ21heCc6IFtvcHRpb25zLm1heF1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRpc3BsYXlJbnB1dC52YWx1ZSA9IGdldERpc3BsYXlWYWx1ZShvcHRpb25zLnZhbHVlLCBvcHRpb25zLnZhbHVlTWFwKTtcbiAgICBzbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUludCh2YWx1ZXNbaGFuZGxlXSk7XG4gICAgICAgIHZhbHVlSW5wdXQudmFsdWUgPSBgJHt2YWx1ZX1gO1xuICAgICAgICBkaXNwbGF5SW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JywgeyAnYnViYmxlcyc6IHRydWUgfSkpO1xuICAgICAgICBkaXNwbGF5SW5wdXQudmFsdWUgPSBnZXREaXNwbGF5VmFsdWUodmFsdWUsIG9wdGlvbnMudmFsdWVNYXApO1xuICAgIH0pO1xuICAgIHZhbHVlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgICAgICBzbGlkZXIuc2V0KFt2YWx1ZUlucHV0LnZhbHVlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgdmFsdWVJbnB1dCwgZGlzcGxheUlucHV0LCBzbGlkZXIgfTtcbn1cbmZ1bmN0aW9uIGdldERpc3BsYXlWYWx1ZSh2YWx1ZSwgdmFsdWVNYXApIHtcbiAgICBpZiAodmFsdWVNYXAgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdG9UaXRsZUNhc2UodmFsdWVNYXBbdmFsdWVdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3luY1ZhbHVlcyh7IHNsaWRlciwgdmFsdWVJbnB1dCB9KSB7XG4gICAgc2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VJbnQodmFsdWVzW2hhbmRsZV0pO1xuICAgICAgICB2YWx1ZUlucHV0LnZhbHVlID0gYCR7dmFsdWV9YDtcbiAgICB9KTtcbiAgICB2YWx1ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc2xpZGVyLnNldChbdmFsdWVJbnB1dC52YWx1ZV0pO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGNiLCBkZWxheSA9IDI1MCkge1xuICAgIGxldCB0aW1lb3V0O1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3MpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuT2JqZWN0KGRhdGEpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCBvYmplY3RdKSA9PiB7XG4gICAgICAgIHRyYXZlcnNlVG9rZW4oe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuZnVuY3Rpb24gdHJhdmVyc2VUb2tlbih7IGtleSwgb2JqZWN0LCB0b2tlbnMsIH0pIHtcbiAgICBpZiAoIW9iamVjdClcbiAgICAgICAgZGVidWdnZXI7XG4gICAgLy8gaWYga2V5IGlzIGEgbWV0YSBmaWVsZCwgbW92ZSBvblxuICAgIGlmIChrZXkuY2hhckF0KDApID09PSBcIiRcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvYmplY3QuJHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdG9rZW5zW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBvYmplY3QpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqZWN0KS5mb3JFYWNoKChba2V5Miwgb2JqZWN0Ml0pID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkyLmNoYXJBdCgwKSAhPT0gXCIkXCIpIHtcbiAgICAgICAgICAgICAgICB0cmF2ZXJzZVRva2VuKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBgJHtrZXl9LyR7a2V5Mn1gLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IG9iamVjdDIsXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0QWNjZW50SFVFcywgcmFkaWlTaXplTmFtZSwgc3BhY2luZ1NpemVOYW1lLCBzeXN0ZW1BY2NlbnRMaXN0LCB0eXBvZ3JhcGh5U2l6ZU5hbWUgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCAqIGFzIHJhZGlpIGZyb20gXCIuLi9yYWRpaS10b2tlbnNcIjtcbmltcG9ydCAqIGFzIHR5cGVzY2FsZSBmcm9tIFwiLi4vdHlwZXNjYWxlLXRva2Vuc1wiO1xuaW1wb3J0ICogYXMgc3BhY2luZyBmcm9tIFwiLi4vc3BhY2luZy10b2tlbnNcIjtcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmltcG9ydCB7IGNhbWVsVG9UaXRsZSB9IGZyb20gXCIuL3RleHQtdG8tdGl0bGUtY2FzZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVZhbHVlKG5hbWUsIHZhbHVlLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgdmFsID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGxldCB2YWx1ZU1hcDtcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSAnYmFzZUZvbnRTaXplJzoge1xuICAgICAgICAgICAgdmFsdWVNYXAgPSB0eXBvZ3JhcGh5U2l6ZU5hbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdzcGFjaW5nJzoge1xuICAgICAgICAgICAgdmFsdWVNYXAgPSBzcGFjaW5nU2l6ZU5hbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdyYWRpaSc6IHtcbiAgICAgICAgICAgIHZhbHVlTWFwID0gcmFkaWlTaXplTmFtZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIGNhc2UgJ3dhcm5pbmcnOiB7XG4gICAgICAgICAgICB2YWx1ZU1hcCA9IHN5c3RlbUFjY2VudExpc3Q7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdzYXR1cmF0aW9uJzpcbiAgICAgICAgY2FzZSAnZGlzdGFuY2UnOlxuICAgICAgICBjYXNlICdhY2NlbnRTYXR1cmF0aW9uJzoge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ0lOJykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlRmxvYXQodmFsdWUpICogMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ09VVCcpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB2YWwgLyAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgICAvLyB0aGlzIGlzIHN0cmluZyB2YWx1ZSB3ZSBuZWVkIHRvIGNvbnZlcnQgdG8gbnVtYmVyXG4gICAgICAgIHJldHVybiB2YWx1ZU1hcCA/IHZhbHVlTWFwLmluZGV4T2YodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWVNYXAgPyB2YWx1ZU1hcFt2YWx1ZV0gOiB2YWw7XG4gICAgfVxufVxuZnVuY3Rpb24gY29sbGVjdFZhbHVlcyhmb3JtKSB7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lXScpO1xuICAgIGxldCByYXdWYWx1ZXMgPSB7fTtcbiAgICBmb3JtRWxlbWVudHMuZm9yRWFjaCgoZm9ybUVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGZvcm1FbC5uYW1lO1xuICAgICAgICBpZiAoZm9ybUVsLnR5cGUgPT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgaWYgKGZvcm1FbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcmF3VmFsdWVzW2ZpZWxkTmFtZV0gPSB0cmFuc2Zvcm1WYWx1ZShmb3JtRWwubmFtZSwgZm9ybUVsLnZhbHVlLCBcIk9VVFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybUVsLnR5cGUgPT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgcmF3VmFsdWVzW2ZpZWxkTmFtZV0gPSBmb3JtRWwuY2hlY2tlZDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByYXdWYWx1ZXNbZmllbGROYW1lXSA9IHRyYW5zZm9ybVZhbHVlKGZvcm1FbC5uYW1lLCBmb3JtRWwudmFsdWUsIFwiT1VUXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiByYXdWYWx1ZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybURhdGEoZm9ybSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgdHlwZTogJ0lNUE9SVCcgfSwgY29sbGVjdFZhbHVlcyhmb3JtKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQcmV2aWV3KGZvcm0sIGNvbG9yUHJldmlld0NhcmQsIHNsaWRlcnMpIHtcbiAgICBsZXQgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm0pO1xuICAgIC8vIHJlbmRlciBuZXV0cmFsIGNvbG91cnMgcHJldmlld1xuICAgIGZvciAodmFyIGEgPSAxLCBiID0gNzsgYSA8IGI7IGErKykge1xuICAgICAgICBjb25zdCBjb2xvckxpZ2h0ID0gY2hyb21hLmhzbChkYXRhLmh1ZSwgZGF0YS5zYXR1cmF0aW9uLCAxIC0gZGF0YS5kaXN0YW5jZSAqIGEpO1xuICAgICAgICBjb25zdCBjb2xvckRhcmsgPSBjaHJvbWEuaHNsKGRhdGEuaHVlLCBkYXRhLnNhdHVyYXRpb24sIDAuMiArIGRhdGEuZGlzdGFuY2UgKiBhKTtcbiAgICAgICAgY29sb3JQcmV2aWV3Q2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShgLS1saWdodC0ke2F9YCwgY29sb3JMaWdodC5oZXgoKSk7XG4gICAgICAgIGNvbG9yUHJldmlld0NhcmQuc3R5bGUuc2V0UHJvcGVydHkoYC0tZGFyay0ke2F9YCwgY29sb3JEYXJrLmhleCgpKTtcbiAgICB9XG4gICAgLy8gc2V0IGNvbG91cnMgb24gbmV1dHJhbHMgaHVlICYgc2RhdHVyYXRpb24gc2xpZGVyc1xuICAgIHNsaWRlcnNbJ2h1ZSddLnJvb3RFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRodW1iLWNvbG9yJywgY2hyb21hLmhzbChkYXRhLmh1ZSwgZGF0YS5hY2NlbnRTYXR1cmF0aW9uLCAwLjUpLmhleCgpKTtcbiAgICBzbGlkZXJzWydzYXR1cmF0aW9uJ10ucm9vdEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGh1bWItY29sb3InLCBjaHJvbWEuaHNsKGRhdGEuaHVlLCBkYXRhLnNhdHVyYXRpb24sIDAuNSkuaGV4KCkpO1xuICAgIGNvbnN0IHNlbWFudGljU2xpZGVyc1VwZGF0ZU1hcCA9IFtcbiAgICAgICAgW1wicHJpbWFyeVwiLCBkYXRhLnByaW1hcnldLFxuICAgICAgICBbXCJpbmZvXCIsIGRhdGEuaW5mb10sXG4gICAgICAgIFtcInN1Y2Nlc3NcIiwgZGF0YS5zdWNjZXNzXSxcbiAgICAgICAgW1wid2FybmluZ1wiLCBkYXRhLndhcm5pbmddLFxuICAgICAgICBbXCJkYW5nZXJcIiwgZGF0YS5kYW5nZXJdLFxuICAgIF07XG4gICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdEFjY2VudEhVRXMpLmZvckVhY2goKFtuYW1lLCBodWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWRlclZhbHVlID0gZGF0YVtuYW1lXTtcbiAgICAgICAgY29uc3QgYWNjZW50Q29sb3IgPSBjaHJvbWEuaHNsKHNsaWRlclZhbHVlLCBkYXRhLmFjY2VudFNhdHVyYXRpb24sIDAuNSkubHVtaW5hbmNlKDAuMTgpO1xuICAgICAgICBzbGlkZXJzW25hbWVdLnJvb3RFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRodW1iLWNvbG9yJywgYWNjZW50Q29sb3IuaGV4KCkpO1xuICAgIH0pO1xuICAgIHNlbWFudGljU2xpZGVyc1VwZGF0ZU1hcC5mb3JFYWNoKChbY29sb3JOYW1lLCBhY2NlbnRSZWZlcmVuY2VdKSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWRlckFjY2VudENvbG9ySFVFID0gZGF0YVthY2NlbnRSZWZlcmVuY2VdO1xuICAgICAgICBjb25zdCBzbGlkZXJBY2NlbnRDb2xvciA9IGNocm9tYS5oc2woc2xpZGVyQWNjZW50Q29sb3JIVUUsIGRhdGEuYWNjZW50U2F0dXJhdGlvbiwgMC41KS5sdW1pbmFuY2UoMC4xOCk7XG4gICAgICAgIHNsaWRlcnNbY29sb3JOYW1lXS5yb290RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10aHVtYi1jb2xvcicsIHNsaWRlckFjY2VudENvbG9yKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7Y29sb3JOYW1lfWAsIHNsaWRlckFjY2VudENvbG9yKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7Y29sb3JOYW1lfS10ZXh0YCwgc2xpZGVyQWNjZW50Q29sb3IubHVtaW5hbmNlKDAuMykpO1xuICAgICAgICAvLyB1cGRhdGUgdGV4dCBub2RlIHRvIGRpc3BsYXkgc2VsZWN0ZWQgdmFsdWVcbiAgICAgICAgY29uc3QgdmFsdWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb2xvci1ib3guYS0ke2NvbG9yTmFtZX0gPiAudG9rZW4tdmFsdWVgKTtcbiAgICAgICAgaWYgKHZhbHVlRWwpIHtcbiAgICAgICAgICAgIHZhbHVlRWwuaW5uZXJIVE1MID0gYWNjZW50UmVmZXJlbmNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZ2VuZXJhdGVDU1NWYXJzKHJhZGlpW2RhdGEucmFkaWldKTtcbiAgICBnZW5lcmF0ZUNTU1ZhcnModHlwZXNjYWxlLmdldFR5cG9ncmFvaHlUb2tlbnMoZGF0YS5iYXNlRm9udFNpemUsIGRhdGEudHlwZVNjYWxlKSk7XG4gICAgZ2VuZXJhdGVDU1NWYXJzKHNwYWNpbmdbZGF0YS5zcGFjaW5nXSk7XG4gICAgdXBkYXRlVmFsdWVzRGlzcGxheShkYXRhKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVZhbHVlc0Rpc3BsYXkoZGF0YSkge1xuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS12YWx1ZT0ke2tleX1dYCkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGNhbWVsVG9UaXRsZSh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVDU1NWYXJzKHRva2VucyA9IHt9KSB7XG4gICAgT2JqZWN0LmVudHJpZXModG9rZW5zKS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhck5hbWUgPSBgLS0ke25hbWUucmVwbGFjZSgvXFwvL2csIFwiLVwiKX1gO1xuICAgICAgICBjb25zdCB0eXBlID0gdmFsdWVbJyR0eXBlJ107XG4gICAgICAgIGlmICh0eXBlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJWYWx1ZSA9IHBhcnNlSW50KHZhbHVlW1wiJHZhbHVlXCJdKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCBgJHt2YXJWYWx1ZX1weGApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9hZFNldHRpbmdzKGZvcm0sIGRhdGEpIHtcbiAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKGBbbmFtZT0ke2tleX1dYCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IHRyYW5zZm9ybVZhbHVlKGtleSwgdmFsdWUsIFwiSU5cIik7XG4gICAgICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKChmb3JtRWwpID0+IHtcbiAgICAgICAgICAgIGlmIChmb3JtRWwudHlwZSA9PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1FbC52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JywgeyAnYnViYmxlcyc6IHRydWUgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1FbC52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICBmb3JtRWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JywgeyAnYnViYmxlcyc6IHRydWUgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKHR4dCkge1xuICAgICAgICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9UaXRsZShjYW1lbENhc2UpIHtcbiAgICAvLyBubyBzaWRlLWVmZmVjdHNcbiAgICByZXR1cm4gY2FtZWxDYXNlXG4gICAgICAgIC8vIGluamVjdCBzcGFjZSBiZWZvcmUgdGhlIHVwcGVyIGNhc2UgbGV0dGVyc1xuICAgICAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFwiIFwiICsgbWF0Y2g7XG4gICAgfSlcbiAgICAgICAgLy8gcmVwbGFjZSBmaXJzdCBjaGFyIHdpdGggdXBwZXIgY2FzZVxuICAgICAgICAucmVwbGFjZSgvXi4vLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIGNocm9tYS5qcyAtIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgY29sb3IgY29udmVyc2lvbnNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxOSwgR3JlZ29yIEFpc2NoXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqXG4gKiAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gKiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiAzLiBUaGUgbmFtZSBHcmVnb3IgQWlzY2ggbWF5IG5vdCBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuICogZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxuICogRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgR1JFR09SIEFJU0NIIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORyxcbiAqIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZXG4gKiBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICogTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuICogRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogY2hyb21hLmpzIGluY2x1ZGVzIGNvbG9ycyBmcm9tIGNvbG9yYnJld2VyMi5vcmcsIHdoaWNoIGFyZSByZWxlYXNlZCB1bmRlclxuICogdGhlIGZvbGxvd2luZyBsaWNlbnNlOlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAwMiBDeW50aGlhIEJyZXdlciwgTWFyayBIYXJyb3dlcixcbiAqIGFuZCBUaGUgUGVubnN5bHZhbmlhIFN0YXRlIFVuaXZlcnNpdHkuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4gKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpY1xuICogbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBOYW1lZCBjb2xvcnMgYXJlIHRha2VuIGZyb20gWDExIENvbG9yIE5hbWVzLlxuICogaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yXG4gKlxuICogQHByZXNlcnZlXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuY2hyb21hID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBsaW1pdCQyID0gZnVuY3Rpb24gKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIGlmICggbWluID09PSB2b2lkIDAgKSBtaW49MDtcbiAgICAgICAgaWYgKCBtYXggPT09IHZvaWQgMCApIG1heD0xO1xuXG4gICAgICAgIHJldHVybiB4IDwgbWluID8gbWluIDogeCA+IG1heCA/IG1heCA6IHg7XG4gICAgfTtcblxuICAgIHZhciBsaW1pdCQxID0gbGltaXQkMjtcblxuICAgIHZhciBjbGlwX3JnYiQzID0gZnVuY3Rpb24gKHJnYikge1xuICAgICAgICByZ2IuX2NsaXBwZWQgPSBmYWxzZTtcbiAgICAgICAgcmdiLl91bmNsaXBwZWQgPSByZ2Iuc2xpY2UoMCk7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTw9MzsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmdiW2ldIDwgMCB8fCByZ2JbaV0gPiAyNTUpIHsgcmdiLl9jbGlwcGVkID0gdHJ1ZTsgfVxuICAgICAgICAgICAgICAgIHJnYltpXSA9IGxpbWl0JDEocmdiW2ldLCAwLCAyNTUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gbGltaXQkMShyZ2JbaV0sIDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfTtcblxuICAgIC8vIHBvcnRlZCBmcm9tIGpRdWVyeSdzICQudHlwZVxuICAgIHZhciBjbGFzc1RvVHlwZSA9IHt9O1xuICAgIGZvciAodmFyIGkkMSA9IDAsIGxpc3QkMSA9IFsnQm9vbGVhbicsICdOdW1iZXInLCAnU3RyaW5nJywgJ0Z1bmN0aW9uJywgJ0FycmF5JywgJ0RhdGUnLCAnUmVnRXhwJywgJ1VuZGVmaW5lZCcsICdOdWxsJ107IGkkMSA8IGxpc3QkMS5sZW5ndGg7IGkkMSArPSAxKSB7XG4gICAgICAgIHZhciBuYW1lID0gbGlzdCQxW2kkMV07XG5cbiAgICAgICAgY2xhc3NUb1R5cGVbKFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIildID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICB2YXIgdHlwZSRwID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBjbGFzc1RvVHlwZVtPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIjtcbiAgICB9O1xuXG4gICAgdmFyIHR5cGUkbyA9IHR5cGUkcDtcblxuICAgIHZhciB1bnBhY2skQiA9IGZ1bmN0aW9uIChhcmdzLCBrZXlPcmRlcikge1xuICAgICAgICBpZiAoIGtleU9yZGVyID09PSB2b2lkIDAgKSBrZXlPcmRlcj1udWxsO1xuXG4gICAgXHQvLyBpZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gMyBhcmd1bWVudHMsIHdlIHJldHVybiB0aGUgYXJndW1lbnRzXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTsgfVxuICAgICAgICAvLyB3aXRoIGxlc3MgdGhhbiAzIGFyZ3Mgd2UgY2hlY2sgaWYgZmlyc3QgYXJnIGlzIG9iamVjdFxuICAgICAgICAvLyBhbmQgdXNlIHRoZSBrZXlPcmRlciBzdHJpbmcgdG8gZXh0cmFjdCBhbmQgc29ydCBwcm9wZXJ0aWVzXG4gICAgXHRpZiAodHlwZSRvKGFyZ3NbMF0pID09ICdvYmplY3QnICYmIGtleU9yZGVyKSB7XG4gICAgXHRcdHJldHVybiBrZXlPcmRlci5zcGxpdCgnJylcbiAgICBcdFx0XHQuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBhcmdzWzBdW2tdICE9PSB1bmRlZmluZWQ7IH0pXG4gICAgXHRcdFx0Lm1hcChmdW5jdGlvbiAoaykgeyByZXR1cm4gYXJnc1swXVtrXTsgfSk7XG4gICAgXHR9XG4gICAgXHQvLyBvdGhlcndpc2Ugd2UganVzdCByZXR1cm4gdGhlIGZpcnN0IGFyZ3VtZW50XG4gICAgXHQvLyAod2hpY2ggd2Ugc3VwcG9zZSBpcyBhbiBhcnJheSBvZiBhcmdzKVxuICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9O1xuXG4gICAgdmFyIHR5cGUkbiA9IHR5cGUkcDtcblxuICAgIHZhciBsYXN0JDQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAyKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIHZhciBsID0gYXJncy5sZW5ndGgtMTtcbiAgICAgICAgaWYgKHR5cGUkbihhcmdzW2xdKSA9PSAnc3RyaW5nJykgeyByZXR1cm4gYXJnc1tsXS50b0xvd2VyQ2FzZSgpOyB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgUEkkMiA9IE1hdGguUEk7XG5cbiAgICB2YXIgdXRpbHMgPSB7XG4gICAgXHRjbGlwX3JnYjogY2xpcF9yZ2IkMyxcbiAgICBcdGxpbWl0OiBsaW1pdCQyLFxuICAgIFx0dHlwZTogdHlwZSRwLFxuICAgIFx0dW5wYWNrOiB1bnBhY2skQixcbiAgICBcdGxhc3Q6IGxhc3QkNCxcbiAgICBcdFBJOiBQSSQyLFxuICAgIFx0VFdPUEk6IFBJJDIqMixcbiAgICBcdFBJVEhJUkQ6IFBJJDIvMyxcbiAgICBcdERFRzJSQUQ6IFBJJDIgLyAxODAsXG4gICAgXHRSQUQyREVHOiAxODAgLyBQSSQyXG4gICAgfTtcblxuICAgIHZhciBpbnB1dCRoID0ge1xuICAgIFx0Zm9ybWF0OiB7fSxcbiAgICBcdGF1dG9kZXRlY3Q6IFtdXG4gICAgfTtcblxuICAgIHZhciBsYXN0JDMgPSB1dGlscy5sYXN0O1xuICAgIHZhciBjbGlwX3JnYiQyID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIHR5cGUkbSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIF9pbnB1dCA9IGlucHV0JGg7XG5cbiAgICB2YXIgQ29sb3IkRCA9IGZ1bmN0aW9uIENvbG9yKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlJG0oYXJnc1swXSkgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICBhcmdzWzBdLmNvbnN0cnVjdG9yICYmXG4gICAgICAgICAgICBhcmdzWzBdLmNvbnN0cnVjdG9yID09PSB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAvLyB0aGUgYXJndW1lbnQgaXMgYWxyZWFkeSBhIENvbG9yIGluc3RhbmNlXG4gICAgICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxhc3QgYXJndW1lbnQgY291bGQgYmUgdGhlIG1vZGVcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0JDMoYXJncyk7XG4gICAgICAgIHZhciBhdXRvZGV0ZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFtb2RlKSB7XG4gICAgICAgICAgICBhdXRvZGV0ZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghX2lucHV0LnNvcnRlZCkge1xuICAgICAgICAgICAgICAgIF9pbnB1dC5hdXRvZGV0ZWN0ID0gX2lucHV0LmF1dG9kZXRlY3Quc29ydChmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBiLnAgLSBhLnA7IH0pO1xuICAgICAgICAgICAgICAgIF9pbnB1dC5zb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXV0by1kZXRlY3QgZm9ybWF0XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IF9pbnB1dC5hdXRvZGV0ZWN0OyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGsgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgbW9kZSA9IGNoay50ZXN0LmFwcGx5KGNoaywgYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfaW5wdXQuZm9ybWF0W21vZGVdKSB7XG4gICAgICAgICAgICB2YXIgcmdiID0gX2lucHV0LmZvcm1hdFttb2RlXS5hcHBseShudWxsLCBhdXRvZGV0ZWN0ID8gYXJncyA6IGFyZ3Muc2xpY2UoMCwtMSkpO1xuICAgICAgICAgICAgbWUuX3JnYiA9IGNsaXBfcmdiJDIocmdiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBmb3JtYXQ6ICcrYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgYWxwaGEgY2hhbm5lbFxuICAgICAgICBpZiAobWUuX3JnYi5sZW5ndGggPT09IDMpIHsgbWUuX3JnYi5wdXNoKDEpOyB9XG4gICAgfTtcblxuICAgIENvbG9yJEQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgICAgICBpZiAodHlwZSRtKHRoaXMuaGV4KSA9PSAnZnVuY3Rpb24nKSB7IHJldHVybiB0aGlzLmhleCgpOyB9XG4gICAgICAgIHJldHVybiAoXCJbXCIgKyAodGhpcy5fcmdiLmpvaW4oJywnKSkgKyBcIl1cIik7XG4gICAgfTtcblxuICAgIHZhciBDb2xvcl8xID0gQ29sb3IkRDtcblxuICAgIHZhciBjaHJvbWEkayA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgXHR3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgXHRyZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggY2hyb21hJGsuQ29sb3IsIFsgbnVsbCBdLmNvbmNhdCggYXJncykgKSk7XG4gICAgfTtcblxuICAgIGNocm9tYSRrLkNvbG9yID0gQ29sb3JfMTtcbiAgICBjaHJvbWEkay52ZXJzaW9uID0gJzIuNC4yJztcblxuICAgIHZhciBjaHJvbWFfMSA9IGNocm9tYSRrO1xuXG4gICAgdmFyIHVucGFjayRBID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBtYXgkMiA9IE1hdGgubWF4O1xuXG4gICAgdmFyIHJnYjJjbXlrJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRBKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgciA9IHIgLyAyNTU7XG4gICAgICAgIGcgPSBnIC8gMjU1O1xuICAgICAgICBiID0gYiAvIDI1NTtcbiAgICAgICAgdmFyIGsgPSAxIC0gbWF4JDIocixtYXgkMihnLGIpKTtcbiAgICAgICAgdmFyIGYgPSBrIDwgMSA/IDEgLyAoMS1rKSA6IDA7XG4gICAgICAgIHZhciBjID0gKDEtci1rKSAqIGY7XG4gICAgICAgIHZhciBtID0gKDEtZy1rKSAqIGY7XG4gICAgICAgIHZhciB5ID0gKDEtYi1rKSAqIGY7XG4gICAgICAgIHJldHVybiBbYyxtLHksa107XG4gICAgfTtcblxuICAgIHZhciByZ2IyY215a18xID0gcmdiMmNteWskMTtcblxuICAgIHZhciB1bnBhY2skeiA9IHV0aWxzLnVucGFjaztcblxuICAgIHZhciBjbXlrMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJHooYXJncywgJ2NteWsnKTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgbSA9IGFyZ3NbMV07XG4gICAgICAgIHZhciB5ID0gYXJnc1syXTtcbiAgICAgICAgdmFyIGsgPSBhcmdzWzNdO1xuICAgICAgICB2YXIgYWxwaGEgPSBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogMTtcbiAgICAgICAgaWYgKGsgPT09IDEpIHsgcmV0dXJuIFswLDAsMCxhbHBoYV07IH1cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGMgPj0gMSA/IDAgOiAyNTUgKiAoMS1jKSAqICgxLWspLCAvLyByXG4gICAgICAgICAgICBtID49IDEgPyAwIDogMjU1ICogKDEtbSkgKiAoMS1rKSwgLy8gZ1xuICAgICAgICAgICAgeSA+PSAxID8gMCA6IDI1NSAqICgxLXkpICogKDEtayksIC8vIGJcbiAgICAgICAgICAgIGFscGhhXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHZhciBjbXlrMnJnYl8xID0gY215azJyZ2I7XG5cbiAgICB2YXIgY2hyb21hJGogPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkQyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JGcgPSBpbnB1dCRoO1xuICAgIHZhciB1bnBhY2skeSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRsID0gdXRpbHMudHlwZTtcblxuICAgIHZhciByZ2IyY215ayA9IHJnYjJjbXlrXzE7XG5cbiAgICBDb2xvciRDLnByb3RvdHlwZS5jbXlrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyY215ayh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkai5jbXlrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRDLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnY215ayddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkZy5mb3JtYXQuY215ayA9IGNteWsycmdiXzE7XG5cbiAgICBpbnB1dCRnLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJHkoYXJncywgJ2NteWsnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGwoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NteWsnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJHggPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QkMiA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIHJuZCA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBNYXRoLnJvdW5kKGEqMTAwKS8xMDA7IH07XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSBoc2wyY3NzKGgscyxsKVxuICAgICAqIC0gaHNsMmNzcyhoLHMsbCxhKVxuICAgICAqIC0gaHNsMmNzcyhbaCxzLGxdLCBtb2RlKVxuICAgICAqIC0gaHNsMmNzcyhbaCxzLGwsYV0sIG1vZGUpXG4gICAgICogLSBoc2wyY3NzKHtoLHMsbCxhfSwgbW9kZSlcbiAgICAgKi9cbiAgICB2YXIgaHNsMmNzcyQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciBoc2xhID0gdW5wYWNrJHgoYXJncywgJ2hzbGEnKTtcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0JDIoYXJncykgfHwgJ2xzYSc7XG4gICAgICAgIGhzbGFbMF0gPSBybmQoaHNsYVswXSB8fCAwKTtcbiAgICAgICAgaHNsYVsxXSA9IHJuZChoc2xhWzFdKjEwMCkgKyAnJSc7XG4gICAgICAgIGhzbGFbMl0gPSBybmQoaHNsYVsyXSoxMDApICsgJyUnO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ2hzbGEnIHx8IChoc2xhLmxlbmd0aCA+IDMgJiYgaHNsYVszXTwxKSkge1xuICAgICAgICAgICAgaHNsYVszXSA9IGhzbGEubGVuZ3RoID4gMyA/IGhzbGFbM10gOiAxO1xuICAgICAgICAgICAgbW9kZSA9ICdoc2xhJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhzbGEubGVuZ3RoID0gMztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG1vZGUgKyBcIihcIiArIChoc2xhLmpvaW4oJywnKSkgKyBcIilcIik7XG4gICAgfTtcblxuICAgIHZhciBoc2wyY3NzXzEgPSBoc2wyY3NzJDE7XG5cbiAgICB2YXIgdW5wYWNrJHcgPSB1dGlscy51bnBhY2s7XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSByZ2IyaHNsKHIsZyxiKVxuICAgICAqIC0gcmdiMmhzbChyLGcsYixhKVxuICAgICAqIC0gcmdiMmhzbChbcixnLGJdKVxuICAgICAqIC0gcmdiMmhzbChbcixnLGIsYV0pXG4gICAgICogLSByZ2IyaHNsKHtyLGcsYixhfSlcbiAgICAgKi9cbiAgICB2YXIgcmdiMmhzbCQzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skdyhhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgciA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBnID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuXG4gICAgICAgIHIgLz0gMjU1O1xuICAgICAgICBnIC89IDI1NTtcbiAgICAgICAgYiAvPSAyNTU7XG5cbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cbiAgICAgICAgdmFyIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gICAgICAgIHZhciBzLCBoO1xuXG4gICAgICAgIGlmIChtYXggPT09IG1pbil7XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcyA9IGwgPCAwLjUgPyAobWF4IC0gbWluKSAvIChtYXggKyBtaW4pIDogKG1heCAtIG1pbikgLyAoMiAtIG1heCAtIG1pbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAociA9PSBtYXgpIHsgaCA9IChnIC0gYikgLyAobWF4IC0gbWluKTsgfVxuICAgICAgICBlbHNlIGlmIChnID09IG1heCkgeyBoID0gMiArIChiIC0gcikgLyAobWF4IC0gbWluKTsgfVxuICAgICAgICBlbHNlIGlmIChiID09IG1heCkgeyBoID0gNCArIChyIC0gZykgLyAobWF4IC0gbWluKTsgfVxuXG4gICAgICAgIGggKj0gNjA7XG4gICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGg+MyAmJiBhcmdzWzNdIT09dW5kZWZpbmVkKSB7IHJldHVybiBbaCxzLGwsYXJnc1szXV07IH1cbiAgICAgICAgcmV0dXJuIFtoLHMsbF07XG4gICAgfTtcblxuICAgIHZhciByZ2IyaHNsXzEgPSByZ2IyaHNsJDM7XG5cbiAgICB2YXIgdW5wYWNrJHYgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QkMSA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIGhzbDJjc3MgPSBoc2wyY3NzXzE7XG4gICAgdmFyIHJnYjJoc2wkMiA9IHJnYjJoc2xfMTtcbiAgICB2YXIgcm91bmQkNiA9IE1hdGgucm91bmQ7XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSByZ2IyY3NzKHIsZyxiKVxuICAgICAqIC0gcmdiMmNzcyhyLGcsYixhKVxuICAgICAqIC0gcmdiMmNzcyhbcixnLGJdLCBtb2RlKVxuICAgICAqIC0gcmdiMmNzcyhbcixnLGIsYV0sIG1vZGUpXG4gICAgICogLSByZ2IyY3NzKHtyLGcsYixhfSwgbW9kZSlcbiAgICAgKi9cbiAgICB2YXIgcmdiMmNzcyQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2JhID0gdW5wYWNrJHYoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0JDEoYXJncykgfHwgJ3JnYic7XG4gICAgICAgIGlmIChtb2RlLnN1YnN0cigwLDMpID09ICdoc2wnKSB7XG4gICAgICAgICAgICByZXR1cm4gaHNsMmNzcyhyZ2IyaHNsJDIocmdiYSksIG1vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJnYmFbMF0gPSByb3VuZCQ2KHJnYmFbMF0pO1xuICAgICAgICByZ2JhWzFdID0gcm91bmQkNihyZ2JhWzFdKTtcbiAgICAgICAgcmdiYVsyXSA9IHJvdW5kJDYocmdiYVsyXSk7XG4gICAgICAgIGlmIChtb2RlID09PSAncmdiYScgfHwgKHJnYmEubGVuZ3RoID4gMyAmJiByZ2JhWzNdPDEpKSB7XG4gICAgICAgICAgICByZ2JhWzNdID0gcmdiYS5sZW5ndGggPiAzID8gcmdiYVszXSA6IDE7XG4gICAgICAgICAgICBtb2RlID0gJ3JnYmEnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobW9kZSArIFwiKFwiICsgKHJnYmEuc2xpY2UoMCxtb2RlPT09J3JnYic/Mzo0KS5qb2luKCcsJykpICsgXCIpXCIpO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmNzc18xID0gcmdiMmNzcyQxO1xuXG4gICAgdmFyIHVucGFjayR1ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByb3VuZCQ1ID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBoc2wycmdiJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ247XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayR1KGFyZ3MsICdoc2wnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBsID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gbCoyNTU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdDMgPSBbMCwwLDBdO1xuICAgICAgICAgICAgdmFyIGMgPSBbMCwwLDBdO1xuICAgICAgICAgICAgdmFyIHQyID0gbCA8IDAuNSA/IGwgKiAoMStzKSA6IGwrcy1sKnM7XG4gICAgICAgICAgICB2YXIgdDEgPSAyICogbCAtIHQyO1xuICAgICAgICAgICAgdmFyIGhfID0gaCAvIDM2MDtcbiAgICAgICAgICAgIHQzWzBdID0gaF8gKyAxLzM7XG4gICAgICAgICAgICB0M1sxXSA9IGhfO1xuICAgICAgICAgICAgdDNbMl0gPSBoXyAtIDEvMztcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodDNbaV0gPCAwKSB7IHQzW2ldICs9IDE7IH1cbiAgICAgICAgICAgICAgICBpZiAodDNbaV0gPiAxKSB7IHQzW2ldIC09IDE7IH1cbiAgICAgICAgICAgICAgICBpZiAoNiAqIHQzW2ldIDwgMSlcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDNbaV07IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgyICogdDNbaV0gPCAxKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MjsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDMgKiB0M1tpXSA8IDIpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxICsgKHQyIC0gdDEpICogKCgyIC8gMykgLSB0M1tpXSkgKiA2OyB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzc2lnbiA9IFtyb3VuZCQ1KGNbMF0qMjU1KSxyb3VuZCQ1KGNbMV0qMjU1KSxyb3VuZCQ1KGNbMl0qMjU1KV0sIHIgPSBhc3NpZ25bMF0sIGcgPSBhc3NpZ25bMV0sIGIgPSBhc3NpZ25bMl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgYWxwaGEgY2hhbm5lbFxuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYixhcmdzWzNdXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgIH07XG5cbiAgICB2YXIgaHNsMnJnYl8xID0gaHNsMnJnYiQxO1xuXG4gICAgdmFyIGhzbDJyZ2IgPSBoc2wycmdiXzE7XG4gICAgdmFyIGlucHV0JGYgPSBpbnB1dCRoO1xuXG4gICAgdmFyIFJFX1JHQiA9IC9ecmdiXFwoXFxzKigtP1xcZCspLFxccyooLT9cXGQrKVxccyosXFxzKigtP1xcZCspXFxzKlxcKSQvO1xuICAgIHZhciBSRV9SR0JBID0gL15yZ2JhXFwoXFxzKigtP1xcZCspLFxccyooLT9cXGQrKVxccyosXFxzKigtP1xcZCspXFxzKixcXHMqKFswMV18WzAxXT9cXC5cXGQrKVxcKSQvO1xuICAgIHZhciBSRV9SR0JfUENUID0gL15yZ2JcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqXFwpJC87XG4gICAgdmFyIFJFX1JHQkFfUENUID0gL15yZ2JhXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKFswMV18WzAxXT9cXC5cXGQrKVxcKSQvO1xuICAgIHZhciBSRV9IU0wgPSAvXmhzbFxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKlxcKSQvO1xuICAgIHZhciBSRV9IU0xBID0gL15oc2xhXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG5cbiAgICB2YXIgcm91bmQkNCA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgY3NzMnJnYiQxID0gZnVuY3Rpb24gKGNzcykge1xuICAgICAgICBjc3MgPSBjc3MudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgIHZhciBtO1xuXG4gICAgICAgIGlmIChpbnB1dCRmLmZvcm1hdC5uYW1lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQkZi5mb3JtYXQubmFtZWQoY3NzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYigyNTAsMjAsMClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQikpKSB7XG4gICAgICAgICAgICB2YXIgcmdiID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPDM7IGkrKykge1xuICAgICAgICAgICAgICAgIHJnYltpXSA9ICtyZ2JbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2JbM10gPSAxOyAgLy8gZGVmYXVsdCBhbHBoYVxuICAgICAgICAgICAgcmV0dXJuIHJnYjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYmEoMjUwLDIwLDAsMC40KVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCQSkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDEgPSBtLnNsaWNlKDEsNSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDE9MDsgaSQxPDQ7IGkkMSsrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDFbaSQxXSA9ICtyZ2IkMVtpJDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJnYiQxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiKDEwMCUsMCUsMCUpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JfUENUKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMiA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMj0wOyBpJDI8MzsgaSQyKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkMltpJDJdID0gcm91bmQkNChyZ2IkMltpJDJdICogMi41NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2IkMlszXSA9IDE7ICAvLyBkZWZhdWx0IGFscGhhXG4gICAgICAgICAgICByZXR1cm4gcmdiJDI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2JhKDEwMCUsMCUsMCUsMC40KVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCQV9QQ1QpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQzID0gbS5zbGljZSgxLDUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQzPTA7IGkkMzwzOyBpJDMrKykge1xuICAgICAgICAgICAgICAgIHJnYiQzW2kkM10gPSByb3VuZCQ0KHJnYiQzW2kkM10gKiAyLjU1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYiQzWzNdID0gK3JnYiQzWzNdO1xuICAgICAgICAgICAgcmV0dXJuIHJnYiQzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHNsKDAsMTAwJSw1MCUpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9IU0wpKSkge1xuICAgICAgICAgICAgdmFyIGhzbCA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGhzbFsxXSAqPSAwLjAxO1xuICAgICAgICAgICAgaHNsWzJdICo9IDAuMDE7XG4gICAgICAgICAgICB2YXIgcmdiJDQgPSBoc2wycmdiKGhzbCk7XG4gICAgICAgICAgICByZ2IkNFszXSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gcmdiJDQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoc2xhKDAsMTAwJSw1MCUsMC41KVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfSFNMQSkpKSB7XG4gICAgICAgICAgICB2YXIgaHNsJDEgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBoc2wkMVsxXSAqPSAwLjAxO1xuICAgICAgICAgICAgaHNsJDFbMl0gKj0gMC4wMTtcbiAgICAgICAgICAgIHZhciByZ2IkNSA9IGhzbDJyZ2IoaHNsJDEpO1xuICAgICAgICAgICAgcmdiJDVbM10gPSArbVs0XTsgIC8vIGRlZmF1bHQgYWxwaGEgPSAxXG4gICAgICAgICAgICByZXR1cm4gcmdiJDU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY3NzMnJnYiQxLnRlc3QgPSBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gUkVfUkdCLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQkEudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCX1BDVC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JBX1BDVC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9IU0wudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfSFNMQS50ZXN0KHMpO1xuICAgIH07XG5cbiAgICB2YXIgY3NzMnJnYl8xID0gY3NzMnJnYiQxO1xuXG4gICAgdmFyIGNocm9tYSRpID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJEIgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRlID0gaW5wdXQkaDtcbiAgICB2YXIgdHlwZSRrID0gdXRpbHMudHlwZTtcblxuICAgIHZhciByZ2IyY3NzID0gcmdiMmNzc18xO1xuICAgIHZhciBjc3MycmdiID0gY3NzMnJnYl8xO1xuXG4gICAgQ29sb3IkQi5wcm90b3R5cGUuY3NzID0gZnVuY3Rpb24obW9kZSkge1xuICAgICAgICByZXR1cm4gcmdiMmNzcyh0aGlzLl9yZ2IsIG1vZGUpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkaS5jc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJEIsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydjc3MnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGUuZm9ybWF0LmNzcyA9IGNzczJyZ2I7XG5cbiAgICBpbnB1dCRlLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDUsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJGsoaCkgPT09ICdzdHJpbmcnICYmIGNzczJyZ2IudGVzdChoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnY3NzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbG9yJEEgPSBDb2xvcl8xO1xuICAgIHZhciBjaHJvbWEkaCA9IGNocm9tYV8xO1xuICAgIHZhciBpbnB1dCRkID0gaW5wdXQkaDtcbiAgICB2YXIgdW5wYWNrJHQgPSB1dGlscy51bnBhY2s7XG5cbiAgICBpbnB1dCRkLmZvcm1hdC5nbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiID0gdW5wYWNrJHQoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgcmdiWzBdICo9IDI1NTtcbiAgICAgICAgcmdiWzFdICo9IDI1NTtcbiAgICAgICAgcmdiWzJdICo9IDI1NTtcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9O1xuXG4gICAgY2hyb21hJGguZ2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJEEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydnbCddKSApKTtcbiAgICB9O1xuXG4gICAgQ29sb3IkQS5wcm90b3R5cGUuZ2wgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJnYiA9IHRoaXMuX3JnYjtcbiAgICAgICAgcmV0dXJuIFtyZ2JbMF0vMjU1LCByZ2JbMV0vMjU1LCByZ2JbMl0vMjU1LCByZ2JbM11dO1xuICAgIH07XG5cbiAgICB2YXIgdW5wYWNrJHMgPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgcmdiMmhjZyQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skcyhhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICB2YXIgZGVsdGEgPSBtYXggLSBtaW47XG4gICAgICAgIHZhciBjID0gZGVsdGEgKiAxMDAgLyAyNTU7XG4gICAgICAgIHZhciBfZyA9IG1pbiAvICgyNTUgLSBkZWx0YSkgKiAxMDA7XG4gICAgICAgIHZhciBoO1xuICAgICAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHIgPT09IG1heCkgeyBoID0gKGcgLSBiKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoZyA9PT0gbWF4KSB7IGggPSAyKyhiIC0gcikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGIgPT09IG1heCkgeyBoID0gNCsociAtIGcpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGggKj0gNjA7XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gsIGMsIF9nXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoY2dfMSA9IHJnYjJoY2ckMTtcblxuICAgIHZhciB1bnBhY2skciA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgZmxvb3IkMyA9IE1hdGguZmxvb3I7XG5cbiAgICAvKlxuICAgICAqIHRoaXMgaXMgYmFzaWNhbGx5IGp1c3QgSFNWIHdpdGggc29tZSBtaW5vciB0d2Vha3NcbiAgICAgKlxuICAgICAqIGh1ZS4uIFswLi4zNjBdXG4gICAgICogY2hyb21hIC4uIFswLi4xXVxuICAgICAqIGdyYXluZXNzIC4uIFswLi4xXVxuICAgICAqL1xuXG4gICAgdmFyIGhjZzJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMiwgYXNzaWduJDMsIGFzc2lnbiQ0LCBhc3NpZ24kNTtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgICAgICBhcmdzID0gdW5wYWNrJHIoYXJncywgJ2hjZycpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBjID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIF9nID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICBfZyA9IF9nICogMjU1O1xuICAgICAgICB2YXIgX2MgPSBjICogMjU1O1xuICAgICAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gX2c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaCA9PT0gMzYwKSB7IGggPSAwOyB9XG4gICAgICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgICAgICBoIC89IDYwO1xuICAgICAgICAgICAgdmFyIGkgPSBmbG9vciQzKGgpO1xuICAgICAgICAgICAgdmFyIGYgPSBoIC0gaTtcbiAgICAgICAgICAgIHZhciBwID0gX2cgKiAoMSAtIGMpO1xuICAgICAgICAgICAgdmFyIHEgPSBwICsgX2MgKiAoMSAtIGYpO1xuICAgICAgICAgICAgdmFyIHQgPSBwICsgX2MgKiBmO1xuICAgICAgICAgICAgdmFyIHYgPSBwICsgX2M7XG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IChhc3NpZ24gPSBbdiwgdCwgcF0sIHIgPSBhc3NpZ25bMF0sIGcgPSBhc3NpZ25bMV0sIGIgPSBhc3NpZ25bMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMTogKGFzc2lnbiQxID0gW3EsIHYsIHBdLCByID0gYXNzaWduJDFbMF0sIGcgPSBhc3NpZ24kMVsxXSwgYiA9IGFzc2lnbiQxWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDI6IChhc3NpZ24kMiA9IFtwLCB2LCB0XSwgciA9IGFzc2lnbiQyWzBdLCBnID0gYXNzaWduJDJbMV0sIGIgPSBhc3NpZ24kMlsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzOiAoYXNzaWduJDMgPSBbcCwgcSwgdl0sIHIgPSBhc3NpZ24kM1swXSwgZyA9IGFzc2lnbiQzWzFdLCBiID0gYXNzaWduJDNbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNDogKGFzc2lnbiQ0ID0gW3QsIHAsIHZdLCByID0gYXNzaWduJDRbMF0sIGcgPSBhc3NpZ24kNFsxXSwgYiA9IGFzc2lnbiQ0WzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IChhc3NpZ24kNSA9IFt2LCBwLCBxXSwgciA9IGFzc2lnbiQ1WzBdLCBnID0gYXNzaWduJDVbMV0sIGIgPSBhc3NpZ24kNVsyXSk7IGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBoY2cycmdiXzEgPSBoY2cycmdiO1xuXG4gICAgdmFyIHVucGFjayRxID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGogPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkZyA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR6ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkYyA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhjZyA9IHJnYjJoY2dfMTtcblxuICAgIENvbG9yJHoucHJvdG90eXBlLmhjZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhjZyh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkZy5oY2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHosIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoY2cnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGMuZm9ybWF0LmhjZyA9IGhjZzJyZ2JfMTtcblxuICAgIGlucHV0JGMuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skcShhcmdzLCAnaGNnJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRqKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoY2cnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJHAgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QgPSB1dGlscy5sYXN0O1xuICAgIHZhciByb3VuZCQzID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciByZ2IyaGV4JDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRwKGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBhID0gcmVmWzNdO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QoYXJncykgfHwgJ2F1dG8nO1xuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7IGEgPSAxOyB9XG4gICAgICAgIGlmIChtb2RlID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgIG1vZGUgPSBhIDwgMSA/ICdyZ2JhJyA6ICdyZ2InO1xuICAgICAgICB9XG4gICAgICAgIHIgPSByb3VuZCQzKHIpO1xuICAgICAgICBnID0gcm91bmQkMyhnKTtcbiAgICAgICAgYiA9IHJvdW5kJDMoYik7XG4gICAgICAgIHZhciB1ID0gciA8PCAxNiB8IGcgPDwgOCB8IGI7XG4gICAgICAgIHZhciBzdHIgPSBcIjAwMDAwMFwiICsgdS50b1N0cmluZygxNik7IC8vIy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSA2KTtcbiAgICAgICAgdmFyIGh4YSA9ICcwJyArIHJvdW5kJDMoYSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBoeGEgPSBoeGEuc3Vic3RyKGh4YS5sZW5ndGggLSAyKTtcbiAgICAgICAgc3dpdGNoIChtb2RlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JnYmEnOiByZXR1cm4gKFwiI1wiICsgc3RyICsgaHhhKTtcbiAgICAgICAgICAgIGNhc2UgJ2FyZ2InOiByZXR1cm4gKFwiI1wiICsgaHhhICsgc3RyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAoXCIjXCIgKyBzdHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZ2IyaGV4XzEgPSByZ2IyaGV4JDI7XG5cbiAgICB2YXIgUkVfSEVYID0gL14jPyhbQS1GYS1mMC05XXs2fXxbQS1GYS1mMC05XXszfSkkLztcbiAgICB2YXIgUkVfSEVYQSA9IC9eIz8oW0EtRmEtZjAtOV17OH18W0EtRmEtZjAtOV17NH0pJC87XG5cbiAgICB2YXIgaGV4MnJnYiQxID0gZnVuY3Rpb24gKGhleCkge1xuICAgICAgICBpZiAoaGV4Lm1hdGNoKFJFX0hFWCkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25hbCBsZWFkaW5nICNcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA0IHx8IGhleC5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXhwYW5kIHNob3J0LW5vdGF0aW9uIHRvIGZ1bGwgc2l4LWRpZ2l0XG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4WzBdK2hleFswXStoZXhbMV0raGV4WzFdK2hleFsyXStoZXhbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgICAgdmFyIHIgPSB1ID4+IDE2O1xuICAgICAgICAgICAgdmFyIGcgPSB1ID4+IDggJiAweEZGO1xuICAgICAgICAgICAgdmFyIGIgPSB1ICYgMHhGRjtcbiAgICAgICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCByZ2JhIGhleCBmb3JtYXQsIGVnICNGRjAwMDA3N1xuICAgICAgICBpZiAoaGV4Lm1hdGNoKFJFX0hFWEEpKSB7XG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNSB8fCBoZXgubGVuZ3RoID09PSA5KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbmFsIGxlYWRpbmcgI1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBleHBhbmQgc2hvcnQtbm90YXRpb24gdG8gZnVsbCBlaWdodC1kaWdpdFxuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGhleCA9IGhleFswXStoZXhbMF0raGV4WzFdK2hleFsxXStoZXhbMl0raGV4WzJdK2hleFszXStoZXhbM107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdSQxID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgICAgICB2YXIgciQxID0gdSQxID4+IDI0ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBnJDEgPSB1JDEgPj4gMTYgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGIkMSA9IHUkMSA+PiA4ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBhID0gTWF0aC5yb3VuZCgodSQxICYgMHhGRikgLyAweEZGICogMTAwKSAvIDEwMDtcbiAgICAgICAgICAgIHJldHVybiBbciQxLGckMSxiJDEsYV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSB1c2VkIHRvIGNoZWNrIGZvciBjc3MgY29sb3JzIGhlcmVcbiAgICAgICAgLy8gaWYgX2lucHV0LmNzcz8gYW5kIHJnYiA9IF9pbnB1dC5jc3MgaGV4XG4gICAgICAgIC8vICAgICByZXR1cm4gcmdiXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gaGV4IGNvbG9yOiBcIiArIGhleCkpO1xuICAgIH07XG5cbiAgICB2YXIgaGV4MnJnYl8xID0gaGV4MnJnYiQxO1xuXG4gICAgdmFyIGNocm9tYSRmID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHkgPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJGkgPSB1dGlscy50eXBlO1xuICAgIHZhciBpbnB1dCRiID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaGV4JDEgPSByZ2IyaGV4XzE7XG5cbiAgICBDb2xvciR5LnByb3RvdHlwZS5oZXggPSBmdW5jdGlvbihtb2RlKSB7XG4gICAgICAgIHJldHVybiByZ2IyaGV4JDEodGhpcy5fcmdiLCBtb2RlKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGYuaGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR5LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGV4J10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRiLmZvcm1hdC5oZXggPSBoZXgycmdiXzE7XG4gICAgaW5wdXQkYi5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA0LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICAgICAgICAgIGlmICghcmVzdC5sZW5ndGggJiYgdHlwZSRpKGgpID09PSAnc3RyaW5nJyAmJiBbMyw0LDUsNiw3LDgsOV0uaW5kZXhPZihoLmxlbmd0aCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRvID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBUV09QSSQyID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIG1pbiQyID0gTWF0aC5taW47XG4gICAgdmFyIHNxcnQkNCA9IE1hdGguc3FydDtcbiAgICB2YXIgYWNvcyA9IE1hdGguYWNvcztcblxuICAgIHZhciByZ2IyaHNpJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgYm9ycm93ZWQgZnJvbSBoZXJlOlxuICAgICAgICBodHRwOi8vaHVtbWVyLnN0YW5mb3JkLmVkdS9tdXNlaW5mby9kb2MvZXhhbXBsZXMvaHVtZHJ1bS9rZXlzY2FwZTIvcmdiMmhzaS5jcHBcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRvKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgciAvPSAyNTU7XG4gICAgICAgIGcgLz0gMjU1O1xuICAgICAgICBiIC89IDI1NTtcbiAgICAgICAgdmFyIGg7XG4gICAgICAgIHZhciBtaW5fID0gbWluJDIocixnLGIpO1xuICAgICAgICB2YXIgaSA9IChyK2crYikgLyAzO1xuICAgICAgICB2YXIgcyA9IGkgPiAwID8gMSAtIG1pbl8vaSA6IDA7XG4gICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICBoID0gTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaCA9ICgoci1nKSsoci1iKSkgLyAyO1xuICAgICAgICAgICAgaCAvPSBzcXJ0JDQoKHItZykqKHItZykgKyAoci1iKSooZy1iKSk7XG4gICAgICAgICAgICBoID0gYWNvcyhoKTtcbiAgICAgICAgICAgIGlmIChiID4gZykge1xuICAgICAgICAgICAgICAgIGggPSBUV09QSSQyIC0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGggLz0gVFdPUEkkMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gqMzYwLHMsaV07XG4gICAgfTtcblxuICAgIHZhciByZ2IyaHNpXzEgPSByZ2IyaHNpJDE7XG5cbiAgICB2YXIgdW5wYWNrJG4gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxpbWl0ID0gdXRpbHMubGltaXQ7XG4gICAgdmFyIFRXT1BJJDEgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgUElUSElSRCA9IHV0aWxzLlBJVEhJUkQ7XG4gICAgdmFyIGNvcyQ0ID0gTWF0aC5jb3M7XG5cbiAgICAvKlxuICAgICAqIGh1ZSBbMC4uMzYwXVxuICAgICAqIHNhdHVyYXRpb24gWzAuLjFdXG4gICAgICogaW50ZW5zaXR5IFswLi4xXVxuICAgICAqL1xuICAgIHZhciBoc2kycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGJvcnJvd2VkIGZyb20gaGVyZTpcbiAgICAgICAgaHR0cDovL2h1bW1lci5zdGFuZm9yZC5lZHUvbXVzZWluZm8vZG9jL2V4YW1wbGVzL2h1bWRydW0va2V5c2NhcGUyL2hzaTJyZ2IuY3BwXG4gICAgICAgICovXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skbihhcmdzLCAnaHNpJyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIHMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgaSA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcblxuICAgICAgICBpZiAoaXNOYU4oaCkpIHsgaCA9IDA7IH1cbiAgICAgICAgaWYgKGlzTmFOKHMpKSB7IHMgPSAwOyB9XG4gICAgICAgIC8vIG5vcm1hbGl6ZSBodWVcbiAgICAgICAgaWYgKGggPiAzNjApIHsgaCAtPSAzNjA7IH1cbiAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIGggLz0gMzYwO1xuICAgICAgICBpZiAoaCA8IDEvMykge1xuICAgICAgICAgICAgYiA9ICgxLXMpLzM7XG4gICAgICAgICAgICByID0gKDErcypjb3MkNChUV09QSSQxKmgpL2NvcyQ0KFBJVEhJUkQtVFdPUEkkMSpoKSkvMztcbiAgICAgICAgICAgIGcgPSAxIC0gKGIrcik7XG4gICAgICAgIH0gZWxzZSBpZiAoaCA8IDIvMykge1xuICAgICAgICAgICAgaCAtPSAxLzM7XG4gICAgICAgICAgICByID0gKDEtcykvMztcbiAgICAgICAgICAgIGcgPSAoMStzKmNvcyQ0KFRXT1BJJDEqaCkvY29zJDQoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgYiA9IDEgLSAocitnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGggLT0gMi8zO1xuICAgICAgICAgICAgZyA9ICgxLXMpLzM7XG4gICAgICAgICAgICBiID0gKDErcypjb3MkNChUV09QSSQxKmgpL2NvcyQ0KFBJVEhJUkQtVFdPUEkkMSpoKSkvMztcbiAgICAgICAgICAgIHIgPSAxIC0gKGcrYik7XG4gICAgICAgIH1cbiAgICAgICAgciA9IGxpbWl0KGkqciozKTtcbiAgICAgICAgZyA9IGxpbWl0KGkqZyozKTtcbiAgICAgICAgYiA9IGxpbWl0KGkqYiozKTtcbiAgICAgICAgcmV0dXJuIFtyKjI1NSwgZyoyNTUsIGIqMjU1LCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBoc2kycmdiXzEgPSBoc2kycmdiO1xuXG4gICAgdmFyIHVucGFjayRtID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGggPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkZSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR4ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkYSA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhzaSA9IHJnYjJoc2lfMTtcblxuICAgIENvbG9yJHgucHJvdG90eXBlLmhzaSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhzaSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkZS5oc2kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHgsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc2knXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGEuZm9ybWF0LmhzaSA9IGhzaTJyZ2JfMTtcblxuICAgIGlucHV0JGEuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skbShhcmdzLCAnaHNpJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRoKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoc2knO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGwgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkZyA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRkID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHcgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ5ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaHNsJDEgPSByZ2IyaHNsXzE7XG5cbiAgICBDb2xvciR3LnByb3RvdHlwZS5oc2wgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc2wkMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkZC5oc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHcsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc2wnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDkuZm9ybWF0LmhzbCA9IGhzbDJyZ2JfMTtcblxuICAgIGlucHV0JDkuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skbChhcmdzLCAnaHNsJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRnKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoc2wnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGsgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIG1pbiQxID0gTWF0aC5taW47XG4gICAgdmFyIG1heCQxID0gTWF0aC5tYXg7XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSByZ2IyaHN2KHIsZyxiKVxuICAgICAqIC0gcmdiMmhzdihbcixnLGJdKVxuICAgICAqIC0gcmdiMmhzdih7cixnLGJ9KVxuICAgICAqL1xuICAgIHZhciByZ2IyaHNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skayhhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGcgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG4gICAgICAgIHZhciBtaW5fID0gbWluJDEociwgZywgYik7XG4gICAgICAgIHZhciBtYXhfID0gbWF4JDEociwgZywgYik7XG4gICAgICAgIHZhciBkZWx0YSA9IG1heF8gLSBtaW5fO1xuICAgICAgICB2YXIgaCxzLHY7XG4gICAgICAgIHYgPSBtYXhfIC8gMjU1LjA7XG4gICAgICAgIGlmIChtYXhfID09PSAwKSB7XG4gICAgICAgICAgICBoID0gTnVtYmVyLk5hTjtcbiAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcyA9IGRlbHRhIC8gbWF4XztcbiAgICAgICAgICAgIGlmIChyID09PSBtYXhfKSB7IGggPSAoZyAtIGIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChnID09PSBtYXhfKSB7IGggPSAyKyhiIC0gcikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGIgPT09IG1heF8pIHsgaCA9IDQrKHIgLSBnKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBoICo9IDYwO1xuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtoLCBzLCB2XVxuICAgIH07XG5cbiAgICB2YXIgcmdiMmhzdiQxID0gcmdiMmhzbDtcblxuICAgIHZhciB1bnBhY2skaiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgZmxvb3IkMiA9IE1hdGguZmxvb3I7XG5cbiAgICB2YXIgaHN2MnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyLCBhc3NpZ24kMywgYXNzaWduJDQsIGFzc2lnbiQ1O1xuXG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgICAgIGFyZ3MgPSB1bnBhY2skaihhcmdzLCAnaHN2Jyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIHMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgdiA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgdiAqPSAyNTU7XG4gICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICByID0gZyA9IGIgPSB2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGggPT09IDM2MCkgeyBoID0gMDsgfVxuICAgICAgICAgICAgaWYgKGggPiAzNjApIHsgaCAtPSAzNjA7IH1cbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICAgICAgaCAvPSA2MDtcblxuICAgICAgICAgICAgdmFyIGkgPSBmbG9vciQyKGgpO1xuICAgICAgICAgICAgdmFyIGYgPSBoIC0gaTtcbiAgICAgICAgICAgIHZhciBwID0gdiAqICgxIC0gcyk7XG4gICAgICAgICAgICB2YXIgcSA9IHYgKiAoMSAtIHMgKiBmKTtcbiAgICAgICAgICAgIHZhciB0ID0gdiAqICgxIC0gcyAqICgxIC0gZikpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IChhc3NpZ24gPSBbdiwgdCwgcF0sIHIgPSBhc3NpZ25bMF0sIGcgPSBhc3NpZ25bMV0sIGIgPSBhc3NpZ25bMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMTogKGFzc2lnbiQxID0gW3EsIHYsIHBdLCByID0gYXNzaWduJDFbMF0sIGcgPSBhc3NpZ24kMVsxXSwgYiA9IGFzc2lnbiQxWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDI6IChhc3NpZ24kMiA9IFtwLCB2LCB0XSwgciA9IGFzc2lnbiQyWzBdLCBnID0gYXNzaWduJDJbMV0sIGIgPSBhc3NpZ24kMlsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzOiAoYXNzaWduJDMgPSBbcCwgcSwgdl0sIHIgPSBhc3NpZ24kM1swXSwgZyA9IGFzc2lnbiQzWzFdLCBiID0gYXNzaWduJDNbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNDogKGFzc2lnbiQ0ID0gW3QsIHAsIHZdLCByID0gYXNzaWduJDRbMF0sIGcgPSBhc3NpZ24kNFsxXSwgYiA9IGFzc2lnbiQ0WzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IChhc3NpZ24kNSA9IFt2LCBwLCBxXSwgciA9IGFzc2lnbiQ1WzBdLCBnID0gYXNzaWduJDVbMV0sIGIgPSBhc3NpZ24kNVsyXSk7IGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLGcsYixhcmdzLmxlbmd0aCA+IDM/YXJnc1szXToxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhzdjJyZ2JfMSA9IGhzdjJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJGkgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkZiA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRjID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHYgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ4ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaHN2ID0gcmdiMmhzdiQxO1xuXG4gICAgQ29sb3Ikdi5wcm90b3R5cGUuaHN2ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaHN2KHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRjLmhzdiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hzdiddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkOC5mb3JtYXQuaHN2ID0gaHN2MnJnYl8xO1xuXG4gICAgaW5wdXQkOC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRpKGFyZ3MsICdoc3YnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGYoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzdic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBsYWJDb25zdGFudHMgPSB7XG4gICAgICAgIC8vIENvcnJlc3BvbmRzIHJvdWdobHkgdG8gUkdCIGJyaWdodGVyL2RhcmtlclxuICAgICAgICBLbjogMTgsXG5cbiAgICAgICAgLy8gRDY1IHN0YW5kYXJkIHJlZmVyZW50XG4gICAgICAgIFhuOiAwLjk1MDQ3MCxcbiAgICAgICAgWW46IDEsXG4gICAgICAgIFpuOiAxLjA4ODgzMCxcblxuICAgICAgICB0MDogMC4xMzc5MzEwMzQsICAvLyA0IC8gMjlcbiAgICAgICAgdDE6IDAuMjA2ODk2NTUyLCAgLy8gNiAvIDI5XG4gICAgICAgIHQyOiAwLjEyODQxODU1LCAgIC8vIDMgKiB0MSAqIHQxXG4gICAgICAgIHQzOiAwLjAwODg1NjQ1MiwgIC8vIHQxICogdDEgKiB0MVxuICAgIH07XG5cbiAgICB2YXIgTEFCX0NPTlNUQU5UUyQzID0gbGFiQ29uc3RhbnRzO1xuICAgIHZhciB1bnBhY2skaCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcG93JGEgPSBNYXRoLnBvdztcblxuICAgIHZhciByZ2IybGFiJDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRoKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMnh5eihyLGcsYik7XG4gICAgICAgIHZhciB4ID0gcmVmJDFbMF07XG4gICAgICAgIHZhciB5ID0gcmVmJDFbMV07XG4gICAgICAgIHZhciB6ID0gcmVmJDFbMl07XG4gICAgICAgIHZhciBsID0gMTE2ICogeSAtIDE2O1xuICAgICAgICByZXR1cm4gW2wgPCAwID8gMCA6IGwsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geildO1xuICAgIH07XG5cbiAgICB2YXIgcmdiX3h5eiA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIGlmICgociAvPSAyNTUpIDw9IDAuMDQwNDUpIHsgcmV0dXJuIHIgLyAxMi45MjsgfVxuICAgICAgICByZXR1cm4gcG93JGEoKHIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICB9O1xuXG4gICAgdmFyIHh5el9sYWIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodCA+IExBQl9DT05TVEFOVFMkMy50MykgeyByZXR1cm4gcG93JGEodCwgMSAvIDMpOyB9XG4gICAgICAgIHJldHVybiB0IC8gTEFCX0NPTlNUQU5UUyQzLnQyICsgTEFCX0NPTlNUQU5UUyQzLnQwO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMnh5eiA9IGZ1bmN0aW9uIChyLGcsYikge1xuICAgICAgICByID0gcmdiX3h5eihyKTtcbiAgICAgICAgZyA9IHJnYl94eXooZyk7XG4gICAgICAgIGIgPSByZ2JfeHl6KGIpO1xuICAgICAgICB2YXIgeCA9IHh5el9sYWIoKDAuNDEyNDU2NCAqIHIgKyAwLjM1NzU3NjEgKiBnICsgMC4xODA0Mzc1ICogYikgLyBMQUJfQ09OU1RBTlRTJDMuWG4pO1xuICAgICAgICB2YXIgeSA9IHh5el9sYWIoKDAuMjEyNjcyOSAqIHIgKyAwLjcxNTE1MjIgKiBnICsgMC4wNzIxNzUwICogYikgLyBMQUJfQ09OU1RBTlRTJDMuWW4pO1xuICAgICAgICB2YXIgeiA9IHh5el9sYWIoKDAuMDE5MzMzOSAqIHIgKyAwLjExOTE5MjAgKiBnICsgMC45NTAzMDQxICogYikgLyBMQUJfQ09OU1RBTlRTJDMuWm4pO1xuICAgICAgICByZXR1cm4gW3gseSx6XTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJsYWJfMSA9IHJnYjJsYWIkMjtcblxuICAgIHZhciBMQUJfQ09OU1RBTlRTJDIgPSBsYWJDb25zdGFudHM7XG4gICAgdmFyIHVucGFjayRnID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBwb3ckOSA9IE1hdGgucG93O1xuXG4gICAgLypcbiAgICAgKiBMKiBbMC4uMTAwXVxuICAgICAqIGEgWy0xMDAuLjEwMF1cbiAgICAgKiBiIFstMTAwLi4xMDBdXG4gICAgICovXG4gICAgdmFyIGxhYjJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGcoYXJncywgJ2xhYicpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBhID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgeCx5LHosIHIsZyxiXztcblxuICAgICAgICB5ID0gKGwgKyAxNikgLyAxMTY7XG4gICAgICAgIHggPSBpc05hTihhKSA/IHkgOiB5ICsgYSAvIDUwMDtcbiAgICAgICAgeiA9IGlzTmFOKGIpID8geSA6IHkgLSBiIC8gMjAwO1xuXG4gICAgICAgIHkgPSBMQUJfQ09OU1RBTlRTJDIuWW4gKiBsYWJfeHl6KHkpO1xuICAgICAgICB4ID0gTEFCX0NPTlNUQU5UUyQyLlhuICogbGFiX3h5eih4KTtcbiAgICAgICAgeiA9IExBQl9DT05TVEFOVFMkMi5abiAqIGxhYl94eXooeik7XG5cbiAgICAgICAgciA9IHh5el9yZ2IoMy4yNDA0NTQyICogeCAtIDEuNTM3MTM4NSAqIHkgLSAwLjQ5ODUzMTQgKiB6KTsgIC8vIEQ2NSAtPiBzUkdCXG4gICAgICAgIGcgPSB4eXpfcmdiKC0wLjk2OTI2NjAgKiB4ICsgMS44NzYwMTA4ICogeSArIDAuMDQxNTU2MCAqIHopO1xuICAgICAgICBiXyA9IHh5el9yZ2IoMC4wNTU2NDM0ICogeCAtIDAuMjA0MDI1OSAqIHkgKyAxLjA1NzIyNTIgKiB6KTtcblxuICAgICAgICByZXR1cm4gW3IsZyxiXyxhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciB4eXpfcmdiID0gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIDI1NSAqIChyIDw9IDAuMDAzMDQgPyAxMi45MiAqIHIgOiAxLjA1NSAqIHBvdyQ5KHIsIDEgLyAyLjQpIC0gMC4wNTUpXG4gICAgfTtcblxuICAgIHZhciBsYWJfeHl6ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgPiBMQUJfQ09OU1RBTlRTJDIudDEgPyB0ICogdCAqIHQgOiBMQUJfQ09OU1RBTlRTJDIudDIgKiAodCAtIExBQl9DT05TVEFOVFMkMi50MClcbiAgICB9O1xuXG4gICAgdmFyIGxhYjJyZ2JfMSA9IGxhYjJyZ2IkMTtcblxuICAgIHZhciB1bnBhY2skZiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRlID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGIgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdSA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDcgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJsYWIkMSA9IHJnYjJsYWJfMTtcblxuICAgIENvbG9yJHUucHJvdG90eXBlLmxhYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmxhYiQxKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRiLmxhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2xhYiddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkNy5mb3JtYXQubGFiID0gbGFiMnJnYl8xO1xuXG4gICAgaW5wdXQkNy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRmKGFyZ3MsICdsYWInKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGUoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xhYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skZSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgUkFEMkRFRyA9IHV0aWxzLlJBRDJERUc7XG4gICAgdmFyIHNxcnQkMyA9IE1hdGguc3FydDtcbiAgICB2YXIgYXRhbjIkMiA9IE1hdGguYXRhbjI7XG4gICAgdmFyIHJvdW5kJDIgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGxhYjJsY2gkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGUoYXJncywgJ2xhYicpO1xuICAgICAgICB2YXIgbCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGEgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgYyA9IHNxcnQkMyhhICogYSArIGIgKiBiKTtcbiAgICAgICAgdmFyIGggPSAoYXRhbjIkMihiLCBhKSAqIFJBRDJERUcgKyAzNjApICUgMzYwO1xuICAgICAgICBpZiAocm91bmQkMihjKjEwMDAwKSA9PT0gMCkgeyBoID0gTnVtYmVyLk5hTjsgfVxuICAgICAgICByZXR1cm4gW2wsIGMsIGhdO1xuICAgIH07XG5cbiAgICB2YXIgbGFiMmxjaF8xID0gbGFiMmxjaCQyO1xuXG4gICAgdmFyIHVucGFjayRkID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByZ2IybGFiID0gcmdiMmxhYl8xO1xuICAgIHZhciBsYWIybGNoJDEgPSBsYWIybGNoXzE7XG5cbiAgICB2YXIgcmdiMmxjaCQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skZChhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IHJnYjJsYWIocixnLGIpO1xuICAgICAgICB2YXIgbCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIGxhYjJsY2gkMShsLGEsYl8pO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmxjaF8xID0gcmdiMmxjaCQxO1xuXG4gICAgdmFyIHVucGFjayRjID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBERUcyUkFEID0gdXRpbHMuREVHMlJBRDtcbiAgICB2YXIgc2luJDMgPSBNYXRoLnNpbjtcbiAgICB2YXIgY29zJDMgPSBNYXRoLmNvcztcblxuICAgIHZhciBsY2gybGFiJDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgQ29udmVydCBmcm9tIGEgcXVhbGl0YXRpdmUgcGFyYW1ldGVyIGggYW5kIGEgcXVhbnRpdGF0aXZlIHBhcmFtZXRlciBsIHRvIGEgMjQtYml0IHBpeGVsLlxuICAgICAgICBUaGVzZSBmb3JtdWxhcyB3ZXJlIGludmVudGVkIGJ5IERhdmlkIERhbHJ5bXBsZSB0byBvYnRhaW4gbWF4aW11bSBjb250cmFzdCB3aXRob3V0IGdvaW5nXG4gICAgICAgIG91dCBvZiBnYW11dCBpZiB0aGUgcGFyYW1ldGVycyBhcmUgaW4gdGhlIHJhbmdlIDAtMS5cblxuICAgICAgICBBIHNhdHVyYXRpb24gbXVsdGlwbGllciB3YXMgYWRkZWQgYnkgR3JlZ29yIEFpc2NoXG4gICAgICAgICovXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skYyhhcmdzLCAnbGNoJyk7XG4gICAgICAgIHZhciBsID0gcmVmWzBdO1xuICAgICAgICB2YXIgYyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGggPSByZWZbMl07XG4gICAgICAgIGlmIChpc05hTihoKSkgeyBoID0gMDsgfVxuICAgICAgICBoID0gaCAqIERFRzJSQUQ7XG4gICAgICAgIHJldHVybiBbbCwgY29zJDMoaCkgKiBjLCBzaW4kMyhoKSAqIGNdXG4gICAgfTtcblxuICAgIHZhciBsY2gybGFiXzEgPSBsY2gybGFiJDI7XG5cbiAgICB2YXIgdW5wYWNrJGIgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxjaDJsYWIkMSA9IGxjaDJsYWJfMTtcbiAgICB2YXIgbGFiMnJnYiA9IGxhYjJyZ2JfMTtcblxuICAgIHZhciBsY2gycmdiJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayRiKGFyZ3MsICdsY2gnKTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBoID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHJlZiA9IGxjaDJsYWIkMSAobCxjLGgpO1xuICAgICAgICB2YXIgTCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGEgPSByZWZbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gbGFiMnJnYiAoTCxhLGJfKTtcbiAgICAgICAgdmFyIHIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGcgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGIgPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBsY2gycmdiXzEgPSBsY2gycmdiJDE7XG5cbiAgICB2YXIgdW5wYWNrJGEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxjaDJyZ2IgPSBsY2gycmdiXzE7XG5cbiAgICB2YXIgaGNsMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgaGNsID0gdW5wYWNrJGEoYXJncywgJ2hjbCcpLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIGxjaDJyZ2IuYXBwbHkodm9pZCAwLCBoY2wpO1xuICAgIH07XG5cbiAgICB2YXIgaGNsMnJnYl8xID0gaGNsMnJnYjtcblxuICAgIHZhciB1bnBhY2skOSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRkID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGEgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdCA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDYgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJsY2ggPSByZ2IybGNoXzE7XG5cbiAgICBDb2xvciR0LnByb3RvdHlwZS5sY2ggPSBmdW5jdGlvbigpIHsgcmV0dXJuIHJnYjJsY2godGhpcy5fcmdiKTsgfTtcbiAgICBDb2xvciR0LnByb3RvdHlwZS5oY2wgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHJnYjJsY2godGhpcy5fcmdiKS5yZXZlcnNlKCk7IH07XG5cbiAgICBjaHJvbWEkYS5sY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHQsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydsY2gnXSkgKSk7XG4gICAgfTtcbiAgICBjaHJvbWEkYS5oY2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHQsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoY2wnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDYuZm9ybWF0LmxjaCA9IGxjaDJyZ2JfMTtcbiAgICBpbnB1dCQ2LmZvcm1hdC5oY2wgPSBoY2wycmdiXzE7XG5cbiAgICBbJ2xjaCcsJ2hjbCddLmZvckVhY2goZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGlucHV0JDYuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skOShhcmdzLCBtKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGQoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pOyB9KTtcblxuICAgIC8qKlxuICAgIFx0WDExIGNvbG9yIG5hbWVzXG5cbiAgICBcdGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvclxuICAgICovXG5cbiAgICB2YXIgdzNjeDExJDEgPSB7XG4gICAgICAgIGFsaWNlYmx1ZTogJyNmMGY4ZmYnLFxuICAgICAgICBhbnRpcXVld2hpdGU6ICcjZmFlYmQ3JyxcbiAgICAgICAgYXF1YTogJyMwMGZmZmYnLFxuICAgICAgICBhcXVhbWFyaW5lOiAnIzdmZmZkNCcsXG4gICAgICAgIGF6dXJlOiAnI2YwZmZmZicsXG4gICAgICAgIGJlaWdlOiAnI2Y1ZjVkYycsXG4gICAgICAgIGJpc3F1ZTogJyNmZmU0YzQnLFxuICAgICAgICBibGFjazogJyMwMDAwMDAnLFxuICAgICAgICBibGFuY2hlZGFsbW9uZDogJyNmZmViY2QnLFxuICAgICAgICBibHVlOiAnIzAwMDBmZicsXG4gICAgICAgIGJsdWV2aW9sZXQ6ICcjOGEyYmUyJyxcbiAgICAgICAgYnJvd246ICcjYTUyYTJhJyxcbiAgICAgICAgYnVybHl3b29kOiAnI2RlYjg4NycsXG4gICAgICAgIGNhZGV0Ymx1ZTogJyM1ZjllYTAnLFxuICAgICAgICBjaGFydHJldXNlOiAnIzdmZmYwMCcsXG4gICAgICAgIGNob2NvbGF0ZTogJyNkMjY5MWUnLFxuICAgICAgICBjb3JhbDogJyNmZjdmNTAnLFxuICAgICAgICBjb3JuZmxvd2VyOiAnIzY0OTVlZCcsXG4gICAgICAgIGNvcm5mbG93ZXJibHVlOiAnIzY0OTVlZCcsXG4gICAgICAgIGNvcm5zaWxrOiAnI2ZmZjhkYycsXG4gICAgICAgIGNyaW1zb246ICcjZGMxNDNjJyxcbiAgICAgICAgY3lhbjogJyMwMGZmZmYnLFxuICAgICAgICBkYXJrYmx1ZTogJyMwMDAwOGInLFxuICAgICAgICBkYXJrY3lhbjogJyMwMDhiOGInLFxuICAgICAgICBkYXJrZ29sZGVucm9kOiAnI2I4ODYwYicsXG4gICAgICAgIGRhcmtncmF5OiAnI2E5YTlhOScsXG4gICAgICAgIGRhcmtncmVlbjogJyMwMDY0MDAnLFxuICAgICAgICBkYXJrZ3JleTogJyNhOWE5YTknLFxuICAgICAgICBkYXJra2hha2k6ICcjYmRiNzZiJyxcbiAgICAgICAgZGFya21hZ2VudGE6ICcjOGIwMDhiJyxcbiAgICAgICAgZGFya29saXZlZ3JlZW46ICcjNTU2YjJmJyxcbiAgICAgICAgZGFya29yYW5nZTogJyNmZjhjMDAnLFxuICAgICAgICBkYXJrb3JjaGlkOiAnIzk5MzJjYycsXG4gICAgICAgIGRhcmtyZWQ6ICcjOGIwMDAwJyxcbiAgICAgICAgZGFya3NhbG1vbjogJyNlOTk2N2EnLFxuICAgICAgICBkYXJrc2VhZ3JlZW46ICcjOGZiYzhmJyxcbiAgICAgICAgZGFya3NsYXRlYmx1ZTogJyM0ODNkOGInLFxuICAgICAgICBkYXJrc2xhdGVncmF5OiAnIzJmNGY0ZicsXG4gICAgICAgIGRhcmtzbGF0ZWdyZXk6ICcjMmY0ZjRmJyxcbiAgICAgICAgZGFya3R1cnF1b2lzZTogJyMwMGNlZDEnLFxuICAgICAgICBkYXJrdmlvbGV0OiAnIzk0MDBkMycsXG4gICAgICAgIGRlZXBwaW5rOiAnI2ZmMTQ5MycsXG4gICAgICAgIGRlZXBza3libHVlOiAnIzAwYmZmZicsXG4gICAgICAgIGRpbWdyYXk6ICcjNjk2OTY5JyxcbiAgICAgICAgZGltZ3JleTogJyM2OTY5NjknLFxuICAgICAgICBkb2RnZXJibHVlOiAnIzFlOTBmZicsXG4gICAgICAgIGZpcmVicmljazogJyNiMjIyMjInLFxuICAgICAgICBmbG9yYWx3aGl0ZTogJyNmZmZhZjAnLFxuICAgICAgICBmb3Jlc3RncmVlbjogJyMyMjhiMjInLFxuICAgICAgICBmdWNoc2lhOiAnI2ZmMDBmZicsXG4gICAgICAgIGdhaW5zYm9ybzogJyNkY2RjZGMnLFxuICAgICAgICBnaG9zdHdoaXRlOiAnI2Y4ZjhmZicsXG4gICAgICAgIGdvbGQ6ICcjZmZkNzAwJyxcbiAgICAgICAgZ29sZGVucm9kOiAnI2RhYTUyMCcsXG4gICAgICAgIGdyYXk6ICcjODA4MDgwJyxcbiAgICAgICAgZ3JlZW46ICcjMDA4MDAwJyxcbiAgICAgICAgZ3JlZW55ZWxsb3c6ICcjYWRmZjJmJyxcbiAgICAgICAgZ3JleTogJyM4MDgwODAnLFxuICAgICAgICBob25leWRldzogJyNmMGZmZjAnLFxuICAgICAgICBob3RwaW5rOiAnI2ZmNjliNCcsXG4gICAgICAgIGluZGlhbnJlZDogJyNjZDVjNWMnLFxuICAgICAgICBpbmRpZ286ICcjNGIwMDgyJyxcbiAgICAgICAgaXZvcnk6ICcjZmZmZmYwJyxcbiAgICAgICAga2hha2k6ICcjZjBlNjhjJyxcbiAgICAgICAgbGFzZXJsZW1vbjogJyNmZmZmNTQnLFxuICAgICAgICBsYXZlbmRlcjogJyNlNmU2ZmEnLFxuICAgICAgICBsYXZlbmRlcmJsdXNoOiAnI2ZmZjBmNScsXG4gICAgICAgIGxhd25ncmVlbjogJyM3Y2ZjMDAnLFxuICAgICAgICBsZW1vbmNoaWZmb246ICcjZmZmYWNkJyxcbiAgICAgICAgbGlnaHRibHVlOiAnI2FkZDhlNicsXG4gICAgICAgIGxpZ2h0Y29yYWw6ICcjZjA4MDgwJyxcbiAgICAgICAgbGlnaHRjeWFuOiAnI2UwZmZmZicsXG4gICAgICAgIGxpZ2h0Z29sZGVucm9kOiAnI2ZhZmFkMicsXG4gICAgICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnI2ZhZmFkMicsXG4gICAgICAgIGxpZ2h0Z3JheTogJyNkM2QzZDMnLFxuICAgICAgICBsaWdodGdyZWVuOiAnIzkwZWU5MCcsXG4gICAgICAgIGxpZ2h0Z3JleTogJyNkM2QzZDMnLFxuICAgICAgICBsaWdodHBpbms6ICcjZmZiNmMxJyxcbiAgICAgICAgbGlnaHRzYWxtb246ICcjZmZhMDdhJyxcbiAgICAgICAgbGlnaHRzZWFncmVlbjogJyMyMGIyYWEnLFxuICAgICAgICBsaWdodHNreWJsdWU6ICcjODdjZWZhJyxcbiAgICAgICAgbGlnaHRzbGF0ZWdyYXk6ICcjNzc4ODk5JyxcbiAgICAgICAgbGlnaHRzbGF0ZWdyZXk6ICcjNzc4ODk5JyxcbiAgICAgICAgbGlnaHRzdGVlbGJsdWU6ICcjYjBjNGRlJyxcbiAgICAgICAgbGlnaHR5ZWxsb3c6ICcjZmZmZmUwJyxcbiAgICAgICAgbGltZTogJyMwMGZmMDAnLFxuICAgICAgICBsaW1lZ3JlZW46ICcjMzJjZDMyJyxcbiAgICAgICAgbGluZW46ICcjZmFmMGU2JyxcbiAgICAgICAgbWFnZW50YTogJyNmZjAwZmYnLFxuICAgICAgICBtYXJvb246ICcjODAwMDAwJyxcbiAgICAgICAgbWFyb29uMjogJyM3ZjAwMDAnLFxuICAgICAgICBtYXJvb24zOiAnI2IwMzA2MCcsXG4gICAgICAgIG1lZGl1bWFxdWFtYXJpbmU6ICcjNjZjZGFhJyxcbiAgICAgICAgbWVkaXVtYmx1ZTogJyMwMDAwY2QnLFxuICAgICAgICBtZWRpdW1vcmNoaWQ6ICcjYmE1NWQzJyxcbiAgICAgICAgbWVkaXVtcHVycGxlOiAnIzkzNzBkYicsXG4gICAgICAgIG1lZGl1bXNlYWdyZWVuOiAnIzNjYjM3MScsXG4gICAgICAgIG1lZGl1bXNsYXRlYmx1ZTogJyM3YjY4ZWUnLFxuICAgICAgICBtZWRpdW1zcHJpbmdncmVlbjogJyMwMGZhOWEnLFxuICAgICAgICBtZWRpdW10dXJxdW9pc2U6ICcjNDhkMWNjJyxcbiAgICAgICAgbWVkaXVtdmlvbGV0cmVkOiAnI2M3MTU4NScsXG4gICAgICAgIG1pZG5pZ2h0Ymx1ZTogJyMxOTE5NzAnLFxuICAgICAgICBtaW50Y3JlYW06ICcjZjVmZmZhJyxcbiAgICAgICAgbWlzdHlyb3NlOiAnI2ZmZTRlMScsXG4gICAgICAgIG1vY2Nhc2luOiAnI2ZmZTRiNScsXG4gICAgICAgIG5hdmFqb3doaXRlOiAnI2ZmZGVhZCcsXG4gICAgICAgIG5hdnk6ICcjMDAwMDgwJyxcbiAgICAgICAgb2xkbGFjZTogJyNmZGY1ZTYnLFxuICAgICAgICBvbGl2ZTogJyM4MDgwMDAnLFxuICAgICAgICBvbGl2ZWRyYWI6ICcjNmI4ZTIzJyxcbiAgICAgICAgb3JhbmdlOiAnI2ZmYTUwMCcsXG4gICAgICAgIG9yYW5nZXJlZDogJyNmZjQ1MDAnLFxuICAgICAgICBvcmNoaWQ6ICcjZGE3MGQ2JyxcbiAgICAgICAgcGFsZWdvbGRlbnJvZDogJyNlZWU4YWEnLFxuICAgICAgICBwYWxlZ3JlZW46ICcjOThmYjk4JyxcbiAgICAgICAgcGFsZXR1cnF1b2lzZTogJyNhZmVlZWUnLFxuICAgICAgICBwYWxldmlvbGV0cmVkOiAnI2RiNzA5MycsXG4gICAgICAgIHBhcGF5YXdoaXA6ICcjZmZlZmQ1JyxcbiAgICAgICAgcGVhY2hwdWZmOiAnI2ZmZGFiOScsXG4gICAgICAgIHBlcnU6ICcjY2Q4NTNmJyxcbiAgICAgICAgcGluazogJyNmZmMwY2InLFxuICAgICAgICBwbHVtOiAnI2RkYTBkZCcsXG4gICAgICAgIHBvd2RlcmJsdWU6ICcjYjBlMGU2JyxcbiAgICAgICAgcHVycGxlOiAnIzgwMDA4MCcsXG4gICAgICAgIHB1cnBsZTI6ICcjN2YwMDdmJyxcbiAgICAgICAgcHVycGxlMzogJyNhMDIwZjAnLFxuICAgICAgICByZWJlY2NhcHVycGxlOiAnIzY2MzM5OScsXG4gICAgICAgIHJlZDogJyNmZjAwMDAnLFxuICAgICAgICByb3N5YnJvd246ICcjYmM4ZjhmJyxcbiAgICAgICAgcm95YWxibHVlOiAnIzQxNjllMScsXG4gICAgICAgIHNhZGRsZWJyb3duOiAnIzhiNDUxMycsXG4gICAgICAgIHNhbG1vbjogJyNmYTgwNzInLFxuICAgICAgICBzYW5keWJyb3duOiAnI2Y0YTQ2MCcsXG4gICAgICAgIHNlYWdyZWVuOiAnIzJlOGI1NycsXG4gICAgICAgIHNlYXNoZWxsOiAnI2ZmZjVlZScsXG4gICAgICAgIHNpZW5uYTogJyNhMDUyMmQnLFxuICAgICAgICBzaWx2ZXI6ICcjYzBjMGMwJyxcbiAgICAgICAgc2t5Ymx1ZTogJyM4N2NlZWInLFxuICAgICAgICBzbGF0ZWJsdWU6ICcjNmE1YWNkJyxcbiAgICAgICAgc2xhdGVncmF5OiAnIzcwODA5MCcsXG4gICAgICAgIHNsYXRlZ3JleTogJyM3MDgwOTAnLFxuICAgICAgICBzbm93OiAnI2ZmZmFmYScsXG4gICAgICAgIHNwcmluZ2dyZWVuOiAnIzAwZmY3ZicsXG4gICAgICAgIHN0ZWVsYmx1ZTogJyM0NjgyYjQnLFxuICAgICAgICB0YW46ICcjZDJiNDhjJyxcbiAgICAgICAgdGVhbDogJyMwMDgwODAnLFxuICAgICAgICB0aGlzdGxlOiAnI2Q4YmZkOCcsXG4gICAgICAgIHRvbWF0bzogJyNmZjYzNDcnLFxuICAgICAgICB0dXJxdW9pc2U6ICcjNDBlMGQwJyxcbiAgICAgICAgdmlvbGV0OiAnI2VlODJlZScsXG4gICAgICAgIHdoZWF0OiAnI2Y1ZGViMycsXG4gICAgICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgICAgIHdoaXRlc21va2U6ICcjZjVmNWY1JyxcbiAgICAgICAgeWVsbG93OiAnI2ZmZmYwMCcsXG4gICAgICAgIHllbGxvd2dyZWVuOiAnIzlhY2QzMidcbiAgICB9O1xuXG4gICAgdmFyIHczY3gxMV8xID0gdzNjeDExJDE7XG5cbiAgICB2YXIgQ29sb3IkcyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDUgPSBpbnB1dCRoO1xuICAgIHZhciB0eXBlJGMgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHczY3gxMSA9IHczY3gxMV8xO1xuICAgIHZhciBoZXgycmdiID0gaGV4MnJnYl8xO1xuICAgIHZhciByZ2IyaGV4ID0gcmdiMmhleF8xO1xuXG4gICAgQ29sb3Ikcy5wcm90b3R5cGUubmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGV4ID0gcmdiMmhleCh0aGlzLl9yZ2IsICdyZ2InKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBPYmplY3Qua2V5cyh3M2N4MTEpOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIG4gPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICBpZiAodzNjeDExW25dID09PSBoZXgpIHsgcmV0dXJuIG4udG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZXg7XG4gICAgfTtcblxuICAgIGlucHV0JDUuZm9ybWF0Lm5hbWVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHczY3gxMVtuYW1lXSkgeyByZXR1cm4gaGV4MnJnYih3M2N4MTFbbmFtZV0pOyB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBjb2xvciBuYW1lOiAnK25hbWUpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ1LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDUsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJGMoaCkgPT09ICdzdHJpbmcnICYmIHczY3gxMVtoLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICduYW1lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skOCA9IHV0aWxzLnVucGFjaztcblxuICAgIHZhciByZ2IybnVtJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQ4KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgcmV0dXJuIChyIDw8IDE2KSArIChnIDw8IDgpICsgYjtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJudW1fMSA9IHJnYjJudW0kMTtcblxuICAgIHZhciB0eXBlJGIgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIG51bTJyZ2IgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIGlmICh0eXBlJGIobnVtKSA9PSBcIm51bWJlclwiICYmIG51bSA+PSAwICYmIG51bSA8PSAweEZGRkZGRikge1xuICAgICAgICAgICAgdmFyIHIgPSBudW0gPj4gMTY7XG4gICAgICAgICAgICB2YXIgZyA9IChudW0gPj4gOCkgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGIgPSBudW0gJiAweEZGO1xuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIG51bSBjb2xvcjogXCIrbnVtKTtcbiAgICB9O1xuXG4gICAgdmFyIG51bTJyZ2JfMSA9IG51bTJyZ2I7XG5cbiAgICB2YXIgY2hyb21hJDkgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkciA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDQgPSBpbnB1dCRoO1xuICAgIHZhciB0eXBlJGEgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHJnYjJudW0gPSByZ2IybnVtXzE7XG5cbiAgICBDb2xvciRyLnByb3RvdHlwZS5udW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJudW0odGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDkubnVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRyLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbnVtJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ0LmZvcm1hdC5udW0gPSBudW0ycmdiXzE7XG5cbiAgICBpbnB1dCQ0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDUsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZSRhKGFyZ3NbMF0pID09PSAnbnVtYmVyJyAmJiBhcmdzWzBdID49IDAgJiYgYXJnc1swXSA8PSAweEZGRkZGRikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVtJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGNocm9tYSQ4ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHEgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQzID0gaW5wdXQkaDtcbiAgICB2YXIgdW5wYWNrJDcgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkOSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIHJvdW5kJDEgPSBNYXRoLnJvdW5kO1xuXG4gICAgQ29sb3IkcS5wcm90b3R5cGUucmdiID0gZnVuY3Rpb24ocm5kKSB7XG4gICAgICAgIGlmICggcm5kID09PSB2b2lkIDAgKSBybmQ9dHJ1ZTtcblxuICAgICAgICBpZiAocm5kID09PSBmYWxzZSkgeyByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsMyk7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLDMpLm1hcChyb3VuZCQxKTtcbiAgICB9O1xuXG4gICAgQ29sb3IkcS5wcm90b3R5cGUucmdiYSA9IGZ1bmN0aW9uKHJuZCkge1xuICAgICAgICBpZiAoIHJuZCA9PT0gdm9pZCAwICkgcm5kPXRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLDQpLm1hcChmdW5jdGlvbiAodixpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTwzID8gKHJuZCA9PT0gZmFsc2UgPyB2IDogcm91bmQkMSh2KSkgOiB2O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDgucmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRxLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsncmdiJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQzLmZvcm1hdC5yZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYmEgPSB1bnBhY2skNyhhcmdzLCAncmdiYScpO1xuICAgICAgICBpZiAocmdiYVszXSA9PT0gdW5kZWZpbmVkKSB7IHJnYmFbM10gPSAxOyB9XG4gICAgICAgIHJldHVybiByZ2JhO1xuICAgIH07XG5cbiAgICBpbnB1dCQzLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDMsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJDcoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDkoYXJncykgPT09ICdhcnJheScgJiYgKGFyZ3MubGVuZ3RoID09PSAzIHx8XG4gICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPT09IDQgJiYgdHlwZSQ5KGFyZ3NbM10pID09ICdudW1iZXInICYmIGFyZ3NbM10gPj0gMCAmJiBhcmdzWzNdIDw9IDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyZ2InO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKlxuICAgICAqIEJhc2VkIG9uIGltcGxlbWVudGF0aW9uIGJ5IE5laWwgQmFydGxldHRcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vbmVpbGJhcnRsZXR0L2NvbG9yLXRlbXBlcmF0dXJlXG4gICAgICovXG5cbiAgICB2YXIgbG9nJDEgPSBNYXRoLmxvZztcblxuICAgIHZhciB0ZW1wZXJhdHVyZTJyZ2IkMSA9IGZ1bmN0aW9uIChrZWx2aW4pIHtcbiAgICAgICAgdmFyIHRlbXAgPSBrZWx2aW4gLyAxMDA7XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgaWYgKHRlbXAgPCA2Nikge1xuICAgICAgICAgICAgciA9IDI1NTtcbiAgICAgICAgICAgIGcgPSB0ZW1wIDwgNiA/IDAgOiAtMTU1LjI1NDg1NTYyNzA5MTc5IC0gMC40NDU5Njk1MDQ2OTU3OTEzMyAqIChnID0gdGVtcC0yKSArIDEwNC40OTIxNjE5OTM5Mzg4OCAqIGxvZyQxKGcpO1xuICAgICAgICAgICAgYiA9IHRlbXAgPCAyMCA/IDAgOiAtMjU0Ljc2OTM1MTg0MTIwOTAyICsgMC44Mjc0MDk2MDY0MDA3Mzk1ICogKGIgPSB0ZW1wLTEwKSArIDExNS42Nzk5NDQwMTA2NjE0NyAqIGxvZyQxKGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IDM1MS45NzY5MDU2NjgwNTY5MyArIDAuMTE0MjA2NDUzNzg0MTY1ICogKHIgPSB0ZW1wLTU1KSAtIDQwLjI1MzY2MzA5MzMyMTI3ICogbG9nJDEocik7XG4gICAgICAgICAgICBnID0gMzI1LjQ0OTQxMjU3MTE5NzQgKyAwLjA3OTQzNDU2NTM2NjYyMzQyICogKGcgPSB0ZW1wLTUwKSAtIDI4LjA4NTI5NjM1MDc5NTcgKiBsb2ckMShnKTtcbiAgICAgICAgICAgIGIgPSAyNTU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICB9O1xuXG4gICAgdmFyIHRlbXBlcmF0dXJlMnJnYl8xID0gdGVtcGVyYXR1cmUycmdiJDE7XG5cbiAgICAvKlxuICAgICAqIEJhc2VkIG9uIGltcGxlbWVudGF0aW9uIGJ5IE5laWwgQmFydGxldHRcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vbmVpbGJhcnRsZXR0L2NvbG9yLXRlbXBlcmF0dXJlXG4gICAgICoqL1xuXG4gICAgdmFyIHRlbXBlcmF0dXJlMnJnYiA9IHRlbXBlcmF0dXJlMnJnYl8xO1xuICAgIHZhciB1bnBhY2skNiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIHJnYjJ0ZW1wZXJhdHVyZSQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2IgPSB1bnBhY2skNihhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmdiWzBdLCBiID0gcmdiWzJdO1xuICAgICAgICB2YXIgbWluVGVtcCA9IDEwMDA7XG4gICAgICAgIHZhciBtYXhUZW1wID0gNDAwMDA7XG4gICAgICAgIHZhciBlcHMgPSAwLjQ7XG4gICAgICAgIHZhciB0ZW1wO1xuICAgICAgICB3aGlsZSAobWF4VGVtcCAtIG1pblRlbXAgPiBlcHMpIHtcbiAgICAgICAgICAgIHRlbXAgPSAobWF4VGVtcCArIG1pblRlbXApICogMC41O1xuICAgICAgICAgICAgdmFyIHJnYiQxID0gdGVtcGVyYXR1cmUycmdiKHRlbXApO1xuICAgICAgICAgICAgaWYgKChyZ2IkMVsyXSAvIHJnYiQxWzBdKSA+PSAoYiAvIHIpKSB7XG4gICAgICAgICAgICAgICAgbWF4VGVtcCA9IHRlbXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1pblRlbXAgPSB0ZW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3VuZCh0ZW1wKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJ0ZW1wZXJhdHVyZV8xID0gcmdiMnRlbXBlcmF0dXJlJDE7XG5cbiAgICB2YXIgY2hyb21hJDcgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkcCA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDIgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJ0ZW1wZXJhdHVyZSA9IHJnYjJ0ZW1wZXJhdHVyZV8xO1xuXG4gICAgQ29sb3IkcC5wcm90b3R5cGUudGVtcCA9XG4gICAgQ29sb3IkcC5wcm90b3R5cGUua2VsdmluID1cbiAgICBDb2xvciRwLnByb3RvdHlwZS50ZW1wZXJhdHVyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMnRlbXBlcmF0dXJlKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSQ3LnRlbXAgPVxuICAgIGNocm9tYSQ3LmtlbHZpbiA9XG4gICAgY2hyb21hJDcudGVtcGVyYXR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHAsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWyd0ZW1wJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQyLmZvcm1hdC50ZW1wID1cbiAgICBpbnB1dCQyLmZvcm1hdC5rZWx2aW4gPVxuICAgIGlucHV0JDIuZm9ybWF0LnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmUycmdiXzE7XG5cbiAgICB2YXIgdW5wYWNrJDUgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGNicnQgPSBNYXRoLmNicnQ7XG4gICAgdmFyIHBvdyQ4ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpZ24kMSA9IE1hdGguc2lnbjtcblxuICAgIHZhciByZ2Iyb2tsYWIkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvLyBPS0xhYiBjb2xvciBzcGFjZSBpbXBsZW1lbnRhdGlvbiB0YWtlbiBmcm9tXG4gICAgICAgIC8vIGh0dHBzOi8vYm90dG9zc29uLmdpdGh1Yi5pby9wb3N0cy9va2xhYi9cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQ1KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gW3JnYjJscmdiKHIgLyAyNTUpLCByZ2IybHJnYihnIC8gMjU1KSwgcmdiMmxyZ2IoYiAvIDI1NSldO1xuICAgICAgICB2YXIgbHIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGxnID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBsYiA9IHJlZiQxWzJdO1xuICAgICAgICB2YXIgbCA9IGNicnQoMC40MTIyMjE0NzA4ICogbHIgKyAwLjUzNjMzMjUzNjMgKiBsZyArIDAuMDUxNDQ1OTkyOSAqIGxiKTtcbiAgICAgICAgdmFyIG0gPSBjYnJ0KDAuMjExOTAzNDk4MiAqIGxyICsgMC42ODA2OTk1NDUxICogbGcgKyAwLjEwNzM5Njk1NjYgKiBsYik7XG4gICAgICAgIHZhciBzID0gY2JydCgwLjA4ODMwMjQ2MTkgKiBsciArIDAuMjgxNzE4ODM3NiAqIGxnICsgMC42Mjk5Nzg3MDA1ICogbGIpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAwLjIxMDQ1NDI1NTMgKiBsICsgMC43OTM2MTc3ODUgKiBtIC0gMC4wMDQwNzIwNDY4ICogcyxcbiAgICAgICAgICAgIDEuOTc3OTk4NDk1MSAqIGwgLSAyLjQyODU5MjIwNSAqIG0gKyAwLjQ1MDU5MzcwOTkgKiBzLFxuICAgICAgICAgICAgMC4wMjU5MDQwMzcxICogbCArIDAuNzgyNzcxNzY2MiAqIG0gLSAwLjgwODY3NTc2NiAqIHNcbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJva2xhYl8xID0gcmdiMm9rbGFiJDI7XG5cbiAgICBmdW5jdGlvbiByZ2IybHJnYihjKSB7XG4gICAgICAgIHZhciBhYnMgPSBNYXRoLmFicyhjKTtcbiAgICAgICAgaWYgKGFicyA8IDAuMDQwNDUpIHtcbiAgICAgICAgICAgIHJldHVybiBjIC8gMTIuOTI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChzaWduJDEoYykgfHwgMSkgKiBwb3ckOCgoYWJzICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfVxuXG4gICAgdmFyIHVucGFjayQ0ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBwb3ckNyA9IE1hdGgucG93O1xuICAgIHZhciBzaWduID0gTWF0aC5zaWduO1xuXG4gICAgLypcbiAgICAgKiBMKiBbMC4uMTAwXVxuICAgICAqIGEgWy0xMDAuLjEwMF1cbiAgICAgKiBiIFstMTAwLi4xMDBdXG4gICAgICovXG4gICAgdmFyIG9rbGFiMnJnYiQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skNChhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBMID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGEgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG5cbiAgICAgICAgdmFyIGwgPSBwb3ckNyhMICsgMC4zOTYzMzc3Nzc0ICogYSArIDAuMjE1ODAzNzU3MyAqIGIsIDMpO1xuICAgICAgICB2YXIgbSA9IHBvdyQ3KEwgLSAwLjEwNTU2MTM0NTggKiBhIC0gMC4wNjM4NTQxNzI4ICogYiwgMyk7XG4gICAgICAgIHZhciBzID0gcG93JDcoTCAtIDAuMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGIsIDMpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAyNTUgKiBscmdiMnJnYigrNC4wNzY3NDE2NjIxICogbCAtIDMuMzA3NzExNTkxMyAqIG0gKyAwLjIzMDk2OTkyOTIgKiBzKSxcbiAgICAgICAgICAgIDI1NSAqIGxyZ2IycmdiKC0xLjI2ODQzODAwNDYgKiBsICsgMi42MDk3NTc0MDExICogbSAtIDAuMzQxMzE5Mzk2NSAqIHMpLFxuICAgICAgICAgICAgMjU1ICogbHJnYjJyZ2IoLTAuMDA0MTk2MDg2MyAqIGwgLSAwLjcwMzQxODYxNDcgKiBtICsgMS43MDc2MTQ3MDEgKiBzKSxcbiAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHZhciBva2xhYjJyZ2JfMSA9IG9rbGFiMnJnYiQxO1xuXG4gICAgZnVuY3Rpb24gbHJnYjJyZ2IoYykge1xuICAgICAgICB2YXIgYWJzID0gTWF0aC5hYnMoYyk7XG4gICAgICAgIGlmIChhYnMgPiAwLjAwMzEzMDgpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2lnbihjKSB8fCAxKSAqICgxLjA1NSAqIHBvdyQ3KGFicywgMSAvIDIuNCkgLSAwLjA1NSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGMgKiAxMi45MjtcbiAgICB9XG5cbiAgICB2YXIgdW5wYWNrJDMgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkOCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSQ2ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJG8gPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQxID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2Iyb2tsYWIkMSA9IHJnYjJva2xhYl8xO1xuXG4gICAgQ29sb3Ikby5wcm90b3R5cGUub2tsYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZ2Iyb2tsYWIkMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkNi5va2xhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkbywgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ29rbGFiJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQxLmZvcm1hdC5va2xhYiA9IG9rbGFiMnJnYl8xO1xuXG4gICAgaW5wdXQkMS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAzLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayQzKGFyZ3MsICdva2xhYicpO1xuICAgICAgICAgICAgaWYgKHR5cGUkOChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnb2tsYWInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJDIgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJnYjJva2xhYiA9IHJnYjJva2xhYl8xO1xuICAgIHZhciBsYWIybGNoID0gbGFiMmxjaF8xO1xuXG4gICAgdmFyIHJnYjJva2xjaCQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skMihhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IHJnYjJva2xhYihyLCBnLCBiKTtcbiAgICAgICAgdmFyIGwgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGEgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBsYWIybGNoKGwsIGEsIGJfKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJva2xjaF8xID0gcmdiMm9rbGNoJDE7XG5cbiAgICB2YXIgdW5wYWNrJDEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxjaDJsYWIgPSBsY2gybGFiXzE7XG4gICAgdmFyIG9rbGFiMnJnYiA9IG9rbGFiMnJnYl8xO1xuXG4gICAgdmFyIG9rbGNoMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJDEoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBjID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcmVmID0gbGNoMmxhYihsLCBjLCBoKTtcbiAgICAgICAgdmFyIEwgPSByZWZbMF07XG4gICAgICAgIHZhciBhID0gcmVmWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IG9rbGFiMnJnYihMLCBhLCBiXyk7XG4gICAgICAgIHZhciByID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBnID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgb2tsY2gycmdiXzEgPSBva2xjaDJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDcgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkNSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRuID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJva2xjaCA9IHJnYjJva2xjaF8xO1xuXG4gICAgQ29sb3Ikbi5wcm90b3R5cGUub2tsY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZ2Iyb2tsY2godGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDUub2tsY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJG4sIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydva2xjaCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuZm9ybWF0Lm9rbGNoID0gb2tsY2gycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAzLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayhhcmdzLCAnb2tsY2gnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDcoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29rbGNoJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbG9yJG0gPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJDYgPSB1dGlscy50eXBlO1xuXG4gICAgQ29sb3IkbS5wcm90b3R5cGUuYWxwaGEgPSBmdW5jdGlvbihhLCBtdXRhdGUpIHtcbiAgICAgICAgaWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZT1mYWxzZTtcblxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkICYmIHR5cGUkNihhKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChtdXRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZ2JbM10gPSBhO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRtKFt0aGlzLl9yZ2JbMF0sIHRoaXMuX3JnYlsxXSwgdGhpcy5fcmdiWzJdLCBhXSwgJ3JnYicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2JbM107XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRsID0gQ29sb3JfMTtcblxuICAgIENvbG9yJGwucHJvdG90eXBlLmNsaXBwZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYi5fY2xpcHBlZCB8fCBmYWxzZTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGsgPSBDb2xvcl8xO1xuICAgIHZhciBMQUJfQ09OU1RBTlRTJDEgPSBsYWJDb25zdGFudHM7XG5cbiAgICBDb2xvciRrLnByb3RvdHlwZS5kYXJrZW4gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0dmFyIG1lID0gdGhpcztcbiAgICBcdHZhciBsYWIgPSBtZS5sYWIoKTtcbiAgICBcdGxhYlswXSAtPSBMQUJfQ09OU1RBTlRTJDEuS24gKiBhbW91bnQ7XG4gICAgXHRyZXR1cm4gbmV3IENvbG9yJGsobGFiLCAnbGFiJykuYWxwaGEobWUuYWxwaGEoKSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIENvbG9yJGsucHJvdG90eXBlLmJyaWdodGVuID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHJldHVybiB0aGlzLmRhcmtlbigtYW1vdW50KTtcbiAgICB9O1xuXG4gICAgQ29sb3Ikay5wcm90b3R5cGUuZGFya2VyID0gQ29sb3Ikay5wcm90b3R5cGUuZGFya2VuO1xuICAgIENvbG9yJGsucHJvdG90eXBlLmJyaWdodGVyID0gQ29sb3Ikay5wcm90b3R5cGUuYnJpZ2h0ZW47XG5cbiAgICB2YXIgQ29sb3IkaiA9IENvbG9yXzE7XG5cbiAgICBDb2xvciRqLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobWMpIHtcbiAgICAgICAgdmFyIHJlZiA9IG1jLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBtb2RlID0gcmVmWzBdO1xuICAgICAgICB2YXIgY2hhbm5lbCA9IHJlZlsxXTtcbiAgICAgICAgdmFyIHNyYyA9IHRoaXNbbW9kZV0oKTtcbiAgICAgICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHZhciBpID0gbW9kZS5pbmRleE9mKGNoYW5uZWwpIC0gKG1vZGUuc3Vic3RyKDAsIDIpID09PSAnb2snID8gMiA6IDApO1xuICAgICAgICAgICAgaWYgKGkgPiAtMSkgeyByZXR1cm4gc3JjW2ldOyB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwidW5rbm93biBjaGFubmVsIFwiICsgY2hhbm5lbCArIFwiIGluIG1vZGUgXCIgKyBtb2RlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRpID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSQ1ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgcG93JDYgPSBNYXRoLnBvdztcblxuICAgIHZhciBFUFMgPSAxZS03O1xuICAgIHZhciBNQVhfSVRFUiA9IDIwO1xuXG4gICAgQ29sb3IkaS5wcm90b3R5cGUubHVtaW5hbmNlID0gZnVuY3Rpb24obHVtKSB7XG4gICAgICAgIGlmIChsdW0gIT09IHVuZGVmaW5lZCAmJiB0eXBlJDUobHVtKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChsdW0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcHVyZSBibGFja1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkaShbMCwwLDAsdGhpcy5fcmdiWzNdXSwgJ3JnYicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGx1bSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBwdXJlIHdoaXRlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRpKFsyNTUsMjU1LDI1NSx0aGlzLl9yZ2JbM11dLCAncmdiJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb21wdXRlIG5ldyBjb2xvciB1c2luZy4uLlxuICAgICAgICAgICAgdmFyIGN1cl9sdW0gPSB0aGlzLmx1bWluYW5jZSgpO1xuICAgICAgICAgICAgdmFyIG1vZGUgPSAncmdiJztcbiAgICAgICAgICAgIHZhciBtYXhfaXRlciA9IE1BWF9JVEVSO1xuXG4gICAgICAgICAgICB2YXIgdGVzdCA9IGZ1bmN0aW9uIChsb3csIGhpZ2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWlkID0gbG93LmludGVycG9sYXRlKGhpZ2gsIDAuNSwgbW9kZSk7XG4gICAgICAgICAgICAgICAgdmFyIGxtID0gbWlkLmx1bWluYW5jZSgpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhsdW0gLSBsbSkgPCBFUFMgfHwgIW1heF9pdGVyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2UgZW5vdWdoXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsbSA+IGx1bSA/IHRlc3QobG93LCBtaWQpIDogdGVzdChtaWQsIGhpZ2gpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHJnYiA9IChjdXJfbHVtID4gbHVtID8gdGVzdChuZXcgQ29sb3IkaShbMCwwLDBdKSwgdGhpcykgOiB0ZXN0KHRoaXMsIG5ldyBDb2xvciRpKFsyNTUsMjU1LDI1NV0pKSkucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJGkocmdiLmNvbmNhdCggW3RoaXMuX3JnYlszXV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiMmx1bWluYW5jZS5hcHBseSh2b2lkIDAsICh0aGlzLl9yZ2IpLnNsaWNlKDAsMykpO1xuICAgIH07XG5cblxuICAgIHZhciByZ2IybHVtaW5hbmNlID0gZnVuY3Rpb24gKHIsZyxiKSB7XG4gICAgICAgIC8vIHJlbGF0aXZlIGx1bWluYW5jZVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuICAgICAgICByID0gbHVtaW5hbmNlX3gocik7XG4gICAgICAgIGcgPSBsdW1pbmFuY2VfeChnKTtcbiAgICAgICAgYiA9IGx1bWluYW5jZV94KGIpO1xuICAgICAgICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xuICAgIH07XG5cbiAgICB2YXIgbHVtaW5hbmNlX3ggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB4IC89IDI1NTtcbiAgICAgICAgcmV0dXJuIHggPD0gMC4wMzkyOCA/IHgvMTIuOTIgOiBwb3ckNigoeCswLjA1NSkvMS4wNTUsIDIuNCk7XG4gICAgfTtcblxuICAgIHZhciBpbnRlcnBvbGF0b3IkMSA9IHt9O1xuXG4gICAgdmFyIENvbG9yJGggPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJDQgPSB1dGlscy50eXBlO1xuICAgIHZhciBpbnRlcnBvbGF0b3IgPSBpbnRlcnBvbGF0b3IkMTtcblxuICAgIHZhciBtaXgkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIGlmICggZiA9PT0gdm9pZCAwICkgZj0wLjU7XG4gICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAzO1xuICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAzIF07XG5cbiAgICAgICAgdmFyIG1vZGUgPSByZXN0WzBdIHx8ICdscmdiJztcbiAgICAgICAgaWYgKCFpbnRlcnBvbGF0b3JbbW9kZV0gJiYgIXJlc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBmYWxsIGJhY2sgdG8gdGhlIGZpcnN0IHN1cHBvcnRlZCBtb2RlXG4gICAgICAgICAgICBtb2RlID0gT2JqZWN0LmtleXMoaW50ZXJwb2xhdG9yKVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcImludGVycG9sYXRpb24gbW9kZSBcIiArIG1vZGUgKyBcIiBpcyBub3QgZGVmaW5lZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUkNChjb2wxKSAhPT0gJ29iamVjdCcpIHsgY29sMSA9IG5ldyBDb2xvciRoKGNvbDEpOyB9XG4gICAgICAgIGlmICh0eXBlJDQoY29sMikgIT09ICdvYmplY3QnKSB7IGNvbDIgPSBuZXcgQ29sb3IkaChjb2wyKTsgfVxuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdG9yW21vZGVdKGNvbDEsIGNvbDIsIGYpXG4gICAgICAgICAgICAuYWxwaGEoY29sMS5hbHBoYSgpICsgZiAqIChjb2wyLmFscGhhKCkgLSBjb2wxLmFscGhhKCkpKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGcgPSBDb2xvcl8xO1xuICAgIHZhciBtaXggPSBtaXgkMTtcblxuICAgIENvbG9yJGcucHJvdG90eXBlLm1peCA9XG4gICAgQ29sb3IkZy5wcm90b3R5cGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihjb2wyLCBmKSB7XG4gICAgXHRpZiAoIGYgPT09IHZvaWQgMCApIGY9MC41O1xuICAgIFx0dmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgXHR3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAyIF07XG5cbiAgICBcdHJldHVybiBtaXguYXBwbHkodm9pZCAwLCBbIHRoaXMsIGNvbDIsIGYgXS5jb25jYXQoIHJlc3QgKSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRmID0gQ29sb3JfMTtcblxuICAgIENvbG9yJGYucHJvdG90eXBlLnByZW11bHRpcGx5ID0gZnVuY3Rpb24obXV0YXRlKSB7XG4gICAgXHRpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlPWZhbHNlO1xuXG4gICAgXHR2YXIgcmdiID0gdGhpcy5fcmdiO1xuICAgIFx0dmFyIGEgPSByZ2JbM107XG4gICAgXHRpZiAobXV0YXRlKSB7XG4gICAgXHRcdHRoaXMuX3JnYiA9IFtyZ2JbMF0qYSwgcmdiWzFdKmEsIHJnYlsyXSphLCBhXTtcbiAgICBcdFx0cmV0dXJuIHRoaXM7XG4gICAgXHR9IGVsc2Uge1xuICAgIFx0XHRyZXR1cm4gbmV3IENvbG9yJGYoW3JnYlswXSphLCByZ2JbMV0qYSwgcmdiWzJdKmEsIGFdLCAncmdiJyk7XG4gICAgXHR9XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRlID0gQ29sb3JfMTtcbiAgICB2YXIgTEFCX0NPTlNUQU5UUyA9IGxhYkNvbnN0YW50cztcblxuICAgIENvbG9yJGUucHJvdG90eXBlLnNhdHVyYXRlID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHZhciBtZSA9IHRoaXM7XG4gICAgXHR2YXIgbGNoID0gbWUubGNoKCk7XG4gICAgXHRsY2hbMV0gKz0gTEFCX0NPTlNUQU5UUy5LbiAqIGFtb3VudDtcbiAgICBcdGlmIChsY2hbMV0gPCAwKSB7IGxjaFsxXSA9IDA7IH1cbiAgICBcdHJldHVybiBuZXcgQ29sb3IkZShsY2gsICdsY2gnKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgQ29sb3IkZS5wcm90b3R5cGUuZGVzYXR1cmF0ZSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHRyZXR1cm4gdGhpcy5zYXR1cmF0ZSgtYW1vdW50KTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGQgPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJDMgPSB1dGlscy50eXBlO1xuXG4gICAgQ29sb3IkZC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG1jLCB2YWx1ZSwgbXV0YXRlKSB7XG4gICAgICAgIGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGUgPSBmYWxzZTtcblxuICAgICAgICB2YXIgcmVmID0gbWMuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG1vZGUgPSByZWZbMF07XG4gICAgICAgIHZhciBjaGFubmVsID0gcmVmWzFdO1xuICAgICAgICB2YXIgc3JjID0gdGhpc1ttb2RlXSgpO1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgdmFyIGkgPSBtb2RlLmluZGV4T2YoY2hhbm5lbCkgLSAobW9kZS5zdWJzdHIoMCwgMikgPT09ICdvaycgPyAyIDogMCk7XG4gICAgICAgICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkMyh2YWx1ZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSArPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gKz0gK3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldICo9ICt2YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gLz0gK3ZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldID0gK3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlJDModmFsdWUpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBzcmNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnN1cHBvcnRlZCB2YWx1ZSBmb3IgQ29sb3Iuc2V0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3V0ID0gbmV3IENvbG9yJGQoc3JjLCBtb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JnYiA9IG91dC5fcmdiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGNoYW5uZWwgXCIgKyBjaGFubmVsICsgXCIgaW4gbW9kZSBcIiArIG1vZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGMgPSBDb2xvcl8xO1xuXG4gICAgdmFyIHJnYiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciB4eXowID0gY29sMS5fcmdiO1xuICAgICAgICB2YXIgeHl6MSA9IGNvbDIuX3JnYjtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRjKFxuICAgICAgICAgICAgeHl6MFswXSArIGYgKiAoeHl6MVswXS14eXowWzBdKSxcbiAgICAgICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0teHl6MFsxXSksXG4gICAgICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdLXh5ejBbMl0pLFxuICAgICAgICAgICAgJ3JnYidcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5yZ2IgPSByZ2I7XG5cbiAgICB2YXIgQ29sb3IkYiA9IENvbG9yXzE7XG4gICAgdmFyIHNxcnQkMiA9IE1hdGguc3FydDtcbiAgICB2YXIgcG93JDUgPSBNYXRoLnBvdztcblxuICAgIHZhciBscmdiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHJlZiA9IGNvbDEuX3JnYjtcbiAgICAgICAgdmFyIHgxID0gcmVmWzBdO1xuICAgICAgICB2YXIgeTEgPSByZWZbMV07XG4gICAgICAgIHZhciB6MSA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gY29sMi5fcmdiO1xuICAgICAgICB2YXIgeDIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIHkyID0gcmVmJDFbMV07XG4gICAgICAgIHZhciB6MiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJGIoXG4gICAgICAgICAgICBzcXJ0JDIocG93JDUoeDEsMikgKiAoMS1mKSArIHBvdyQ1KHgyLDIpICogZiksXG4gICAgICAgICAgICBzcXJ0JDIocG93JDUoeTEsMikgKiAoMS1mKSArIHBvdyQ1KHkyLDIpICogZiksXG4gICAgICAgICAgICBzcXJ0JDIocG93JDUoejEsMikgKiAoMS1mKSArIHBvdyQ1KHoyLDIpICogZiksXG4gICAgICAgICAgICAncmdiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmxyZ2IgPSBscmdiO1xuXG4gICAgdmFyIENvbG9yJGEgPSBDb2xvcl8xO1xuXG4gICAgdmFyIGxhYiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciB4eXowID0gY29sMS5sYWIoKTtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLmxhYigpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJGEoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdLXh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXS14eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0teHl6MFsyXSksXG4gICAgICAgICAgICAnbGFiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmxhYiA9IGxhYjtcblxuICAgIHZhciBDb2xvciQ5ID0gQ29sb3JfMTtcblxuICAgIHZhciBfaHN4ID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYsIG0pIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDE7XG5cbiAgICAgICAgdmFyIHh5ejAsIHh5ejE7XG4gICAgICAgIGlmIChtID09PSAnaHNsJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHNsKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc2woKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaHN2Jykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHN2KCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc3YoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaGNnJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaGNnKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oY2coKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaHNpJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHNpKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc2koKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnbGNoJyB8fCBtID09PSAnaGNsJykge1xuICAgICAgICAgICAgbSA9ICdoY2wnO1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaGNsKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oY2woKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnb2tsY2gnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5va2xjaCgpLnJldmVyc2UoKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLm9rbGNoKCkucmV2ZXJzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGh1ZTAsIGh1ZTEsIHNhdDAsIHNhdDEsIGxidjAsIGxidjE7XG4gICAgICAgIGlmIChtLnN1YnN0cigwLCAxKSA9PT0gJ2gnIHx8IG0gPT09ICdva2xjaCcpIHtcbiAgICAgICAgICAgIChhc3NpZ24gPSB4eXowLCBodWUwID0gYXNzaWduWzBdLCBzYXQwID0gYXNzaWduWzFdLCBsYnYwID0gYXNzaWduWzJdKTtcbiAgICAgICAgICAgIChhc3NpZ24kMSA9IHh5ejEsIGh1ZTEgPSBhc3NpZ24kMVswXSwgc2F0MSA9IGFzc2lnbiQxWzFdLCBsYnYxID0gYXNzaWduJDFbMl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNhdCwgaHVlLCBsYnYsIGRoO1xuXG4gICAgICAgIGlmICghaXNOYU4oaHVlMCkgJiYgIWlzTmFOKGh1ZTEpKSB7XG4gICAgICAgICAgICAvLyBib3RoIGNvbG9ycyBoYXZlIGh1ZVxuICAgICAgICAgICAgaWYgKGh1ZTEgPiBodWUwICYmIGh1ZTEgLSBodWUwID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxIC0gKGh1ZTAgKyAzNjApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChodWUxIDwgaHVlMCAmJiBodWUwIC0gaHVlMSA+IDE4MCkge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlMSArIDM2MCAtIGh1ZTA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlMSAtIGh1ZTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodWUgPSBodWUwICsgZiAqIGRoO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihodWUwKSkge1xuICAgICAgICAgICAgaHVlID0gaHVlMDtcbiAgICAgICAgICAgIGlmICgobGJ2MSA9PSAxIHx8IGxidjEgPT0gMCkgJiYgbSAhPSAnaHN2JykgeyBzYXQgPSBzYXQwOyB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKGh1ZTEpKSB7XG4gICAgICAgICAgICBodWUgPSBodWUxO1xuICAgICAgICAgICAgaWYgKChsYnYwID09IDEgfHwgbGJ2MCA9PSAwKSAmJiBtICE9ICdoc3YnKSB7IHNhdCA9IHNhdDE7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh1ZSA9IE51bWJlci5OYU47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2F0ID09PSB1bmRlZmluZWQpIHsgc2F0ID0gc2F0MCArIGYgKiAoc2F0MSAtIHNhdDApOyB9XG4gICAgICAgIGxidiA9IGxidjAgKyBmICogKGxidjEgLSBsYnYwKTtcbiAgICAgICAgcmV0dXJuIG0gPT09ICdva2xjaCcgPyBuZXcgQ29sb3IkOShbbGJ2LCBzYXQsIGh1ZV0sIG0pIDogbmV3IENvbG9yJDkoW2h1ZSwgc2F0LCBsYnZdLCBtKTtcbiAgICB9O1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQ1ID0gX2hzeDtcblxuICAgIHZhciBsY2ggPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQ1KGNvbDEsIGNvbDIsIGYsICdsY2gnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubGNoID0gbGNoO1xuICAgIGludGVycG9sYXRvciQxLmhjbCA9IGxjaDtcblxuICAgIHZhciBDb2xvciQ4ID0gQ29sb3JfMTtcblxuICAgIHZhciBudW0gPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgYzEgPSBjb2wxLm51bSgpO1xuICAgICAgICB2YXIgYzIgPSBjb2wyLm51bSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDgoYzEgKyBmICogKGMyLWMxKSwgJ251bScpXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLm51bSA9IG51bTtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkNCA9IF9oc3g7XG5cbiAgICB2YXIgaGNnID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkNChjb2wxLCBjb2wyLCBmLCAnaGNnJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmhjZyA9IGhjZztcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkMyA9IF9oc3g7XG5cbiAgICB2YXIgaHNpID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkMyhjb2wxLCBjb2wyLCBmLCAnaHNpJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmhzaSA9IGhzaTtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkMiA9IF9oc3g7XG5cbiAgICB2YXIgaHNsID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkMihjb2wxLCBjb2wyLCBmLCAnaHNsJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmhzbCA9IGhzbDtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkMSA9IF9oc3g7XG5cbiAgICB2YXIgaHN2ID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkMShjb2wxLCBjb2wyLCBmLCAnaHN2Jyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmhzdiA9IGhzdjtcblxuICAgIHZhciBDb2xvciQ3ID0gQ29sb3JfMTtcblxuICAgIHZhciBva2xhYiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciB4eXowID0gY29sMS5va2xhYigpO1xuICAgICAgICB2YXIgeHl6MSA9IGNvbDIub2tsYWIoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ3KFxuICAgICAgICAgICAgeHl6MFswXSArIGYgKiAoeHl6MVswXSAtIHh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXSAtIHh5ejBbMV0pLFxuICAgICAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXSAtIHh5ejBbMl0pLFxuICAgICAgICAgICAgJ29rbGFiJ1xuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5va2xhYiA9IG9rbGFiO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCA9IF9oc3g7XG5cbiAgICB2YXIgb2tsY2ggPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGVfaHN4KGNvbDEsIGNvbDIsIGYsICdva2xjaCcpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5va2xjaCA9IG9rbGNoO1xuXG4gICAgdmFyIENvbG9yJDYgPSBDb2xvcl8xO1xuICAgIHZhciBjbGlwX3JnYiQxID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIHBvdyQ0ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNxcnQkMSA9IE1hdGguc3FydDtcbiAgICB2YXIgUEkkMSA9IE1hdGguUEk7XG4gICAgdmFyIGNvcyQyID0gTWF0aC5jb3M7XG4gICAgdmFyIHNpbiQyID0gTWF0aC5zaW47XG4gICAgdmFyIGF0YW4yJDEgPSBNYXRoLmF0YW4yO1xuXG4gICAgdmFyIGF2ZXJhZ2UgPSBmdW5jdGlvbiAoY29sb3JzLCBtb2RlLCB3ZWlnaHRzKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nbHJnYic7XG4gICAgICAgIGlmICggd2VpZ2h0cyA9PT0gdm9pZCAwICkgd2VpZ2h0cz1udWxsO1xuXG4gICAgICAgIHZhciBsID0gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgaWYgKCF3ZWlnaHRzKSB7IHdlaWdodHMgPSBBcnJheS5mcm9tKG5ldyBBcnJheShsKSkubWFwKGZ1bmN0aW9uICgpIHsgcmV0dXJuIDE7IH0pOyB9XG4gICAgICAgIC8vIG5vcm1hbGl6ZSB3ZWlnaHRzXG4gICAgICAgIHZhciBrID0gbCAvIHdlaWdodHMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgKyBiOyB9KTtcbiAgICAgICAgd2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uICh3LGkpIHsgd2VpZ2h0c1tpXSAqPSBrOyB9KTtcbiAgICAgICAgLy8gY29udmVydCBjb2xvcnMgdG8gQ29sb3Igb2JqZWN0c1xuICAgICAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZXcgQ29sb3IkNihjKTsgfSk7XG4gICAgICAgIGlmIChtb2RlID09PSAnbHJnYicpIHtcbiAgICAgICAgICAgIHJldHVybiBfYXZlcmFnZV9scmdiKGNvbG9ycywgd2VpZ2h0cylcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlyc3QgPSBjb2xvcnMuc2hpZnQoKTtcbiAgICAgICAgdmFyIHh5eiA9IGZpcnN0LmdldChtb2RlKTtcbiAgICAgICAgdmFyIGNudCA9IFtdO1xuICAgICAgICB2YXIgZHggPSAwO1xuICAgICAgICB2YXIgZHkgPSAwO1xuICAgICAgICAvLyBpbml0aWFsIGNvbG9yXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx4eXoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHh5eltpXSA9ICh4eXpbaV0gfHwgMCkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICAgICAgY250LnB1c2goaXNOYU4oeHl6W2ldKSA/IDAgOiB3ZWlnaHRzWzBdKTtcbiAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpKSA9PT0gJ2gnICYmICFpc05hTih4eXpbaV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIEEgPSB4eXpbaV0gLyAxODAgKiBQSSQxO1xuICAgICAgICAgICAgICAgIGR4ICs9IGNvcyQyKEEpICogd2VpZ2h0c1swXTtcbiAgICAgICAgICAgICAgICBkeSArPSBzaW4kMihBKSAqIHdlaWdodHNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWxwaGEgPSBmaXJzdC5hbHBoYSgpICogd2VpZ2h0c1swXTtcbiAgICAgICAgY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGMsY2kpIHtcbiAgICAgICAgICAgIHZhciB4eXoyID0gYy5nZXQobW9kZSk7XG4gICAgICAgICAgICBhbHBoYSArPSBjLmFscGhhKCkgKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHh5ei5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oeHl6MltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY250W2ldICs9IHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpKSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQSA9IHh5ejJbaV0gLyAxODAgKiBQSSQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHggKz0gY29zJDIoQSkgKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHkgKz0gc2luJDIoQSkgKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeHl6W2ldICs9IHh5ejJbaV0gKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpJDE9MDsgaSQxPHh5ei5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSQxKSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgdmFyIEEkMSA9IGF0YW4yJDEoZHkgLyBjbnRbaSQxXSwgZHggLyBjbnRbaSQxXSkgLyBQSSQxICogMTgwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChBJDEgPCAwKSB7IEEkMSArPSAzNjA7IH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoQSQxID49IDM2MCkgeyBBJDEgLT0gMzYwOyB9XG4gICAgICAgICAgICAgICAgeHl6W2kkMV0gPSBBJDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHh5eltpJDFdID0geHl6W2kkMV0vY250W2kkMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWxwaGEgLz0gbDtcbiAgICAgICAgcmV0dXJuIChuZXcgQ29sb3IkNih4eXosIG1vZGUpKS5hbHBoYShhbHBoYSA+IDAuOTk5OTkgPyAxIDogYWxwaGEsIHRydWUpO1xuICAgIH07XG5cblxuICAgIHZhciBfYXZlcmFnZV9scmdiID0gZnVuY3Rpb24gKGNvbG9ycywgd2VpZ2h0cykge1xuICAgICAgICB2YXIgbCA9IGNvbG9ycy5sZW5ndGg7XG4gICAgICAgIHZhciB4eXogPSBbMCwwLDAsMF07XG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbCA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIHZhciBmID0gd2VpZ2h0c1tpXSAvIGw7XG4gICAgICAgICAgICB2YXIgcmdiID0gY29sLl9yZ2I7XG4gICAgICAgICAgICB4eXpbMF0gKz0gcG93JDQocmdiWzBdLDIpICogZjtcbiAgICAgICAgICAgIHh5elsxXSArPSBwb3ckNChyZ2JbMV0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzJdICs9IHBvdyQ0KHJnYlsyXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbM10gKz0gcmdiWzNdICogZjtcbiAgICAgICAgfVxuICAgICAgICB4eXpbMF0gPSBzcXJ0JDEoeHl6WzBdKTtcbiAgICAgICAgeHl6WzFdID0gc3FydCQxKHh5elsxXSk7XG4gICAgICAgIHh5elsyXSA9IHNxcnQkMSh4eXpbMl0pO1xuICAgICAgICBpZiAoeHl6WzNdID4gMC45OTk5OTk5KSB7IHh5elszXSA9IDE7IH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ2KGNsaXBfcmdiJDEoeHl6KSk7XG4gICAgfTtcblxuICAgIC8vIG1pbmltYWwgbXVsdGktcHVycG9zZSBpbnRlcmZhY2VcblxuICAgIC8vIEByZXF1aXJlcyB1dGlscyBjb2xvciBhbmFseXplXG5cbiAgICB2YXIgY2hyb21hJDQgPSBjaHJvbWFfMTtcbiAgICB2YXIgdHlwZSQyID0gdXRpbHMudHlwZTtcblxuICAgIHZhciBwb3ckMyA9IE1hdGgucG93O1xuXG4gICAgdmFyIHNjYWxlJDIgPSBmdW5jdGlvbihjb2xvcnMpIHtcblxuICAgICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICB2YXIgX21vZGUgPSAncmdiJztcbiAgICAgICAgdmFyIF9uYWNvbCA9IGNocm9tYSQ0KCcjY2NjJyk7XG4gICAgICAgIHZhciBfc3ByZWFkID0gMDtcbiAgICAgICAgLy8gY29uc3QgX2ZpeGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBfZG9tYWluID0gWzAsIDFdO1xuICAgICAgICB2YXIgX3BvcyA9IFtdO1xuICAgICAgICB2YXIgX3BhZGRpbmcgPSBbMCwwXTtcbiAgICAgICAgdmFyIF9jbGFzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBfY29sb3JzID0gW107XG4gICAgICAgIHZhciBfb3V0ID0gZmFsc2U7XG4gICAgICAgIHZhciBfbWluID0gMDtcbiAgICAgICAgdmFyIF9tYXggPSAxO1xuICAgICAgICB2YXIgX2NvcnJlY3RMaWdodG5lc3MgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9jb2xvckNhY2hlID0ge307XG4gICAgICAgIHZhciBfdXNlQ2FjaGUgPSB0cnVlO1xuICAgICAgICB2YXIgX2dhbW1hID0gMTtcblxuICAgICAgICAvLyBwcml2YXRlIG1ldGhvZHNcblxuICAgICAgICB2YXIgc2V0Q29sb3JzID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgICAgICBjb2xvcnMgPSBjb2xvcnMgfHwgWycjZmZmJywgJyMwMDAnXTtcbiAgICAgICAgICAgIGlmIChjb2xvcnMgJiYgdHlwZSQyKGNvbG9ycykgPT09ICdzdHJpbmcnICYmIGNocm9tYSQ0LmJyZXdlciAmJlxuICAgICAgICAgICAgICAgIGNocm9tYSQ0LmJyZXdlcltjb2xvcnMudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBjaHJvbWEkNC5icmV3ZXJbY29sb3JzLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUkMihjb2xvcnMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHNpbmdsZSBjb2xvclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IFtjb2xvcnNbMF0sIGNvbG9yc1swXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG1ha2UgYSBjb3B5IG9mIHRoZSBjb2xvcnNcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBjb2xvcnMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgLy8gY29udmVydCB0byBjaHJvbWEgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzxjb2xvcnMubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzW2NdID0gY2hyb21hJDQoY29sb3JzW2NdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYXV0by1maWxsIGNvbG9yIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgX3Bvcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGMkMT0wOyBjJDE8Y29sb3JzLmxlbmd0aDsgYyQxKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX3Bvcy5wdXNoKGMkMS8oY29sb3JzLmxlbmd0aC0xKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb2xvcnMgPSBjb2xvcnM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdldENsYXNzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChfY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBfY2xhc3Nlcy5sZW5ndGgtMTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBuICYmIHZhbHVlID49IF9jbGFzc2VzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGktMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0TWFwTGlnaHRuZXNzID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07XG4gICAgICAgIHZhciB0TWFwRG9tYWluID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07XG5cbiAgICAgICAgLy8gY29uc3QgY2xhc3NpZnlWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICBsZXQgdmFsID0gdmFsdWU7XG4gICAgICAgIC8vICAgICBpZiAoX2NsYXNzZXMubGVuZ3RoID4gMikge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG4gPSBfY2xhc3Nlcy5sZW5ndGgtMTtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBpID0gZ2V0Q2xhc3ModmFsdWUpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1pbmMgPSBfY2xhc3Nlc1swXSArICgoX2NsYXNzZXNbMV0tX2NsYXNzZXNbMF0pICogKDAgKyAoX3NwcmVhZCAqIDAuNSkpKTsgIC8vIGNlbnRlciBvZiAxc3QgY2xhc3NcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBtYXhjID0gX2NsYXNzZXNbbi0xXSArICgoX2NsYXNzZXNbbl0tX2NsYXNzZXNbbi0xXSkgKiAoMSAtIChfc3ByZWFkICogMC41KSkpOyAgLy8gY2VudGVyIG9mIGxhc3QgY2xhc3NcbiAgICAgICAgLy8gICAgICAgICB2YWwgPSBfbWluICsgKCgoKF9jbGFzc2VzW2ldICsgKChfY2xhc3Nlc1tpKzFdIC0gX2NsYXNzZXNbaV0pICogMC41KSkgLSBtaW5jKSAvIChtYXhjLW1pbmMpKSAqIChfbWF4IC0gX21pbikpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgLy8gfTtcblxuICAgICAgICB2YXIgZ2V0Q29sb3IgPSBmdW5jdGlvbih2YWwsIGJ5cGFzc01hcCkge1xuICAgICAgICAgICAgdmFyIGNvbCwgdDtcbiAgICAgICAgICAgIGlmIChieXBhc3NNYXAgPT0gbnVsbCkgeyBieXBhc3NNYXAgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbCkgfHwgKHZhbCA9PT0gbnVsbCkpIHsgcmV0dXJuIF9uYWNvbDsgfVxuICAgICAgICAgICAgaWYgKCFieXBhc3NNYXApIHtcbiAgICAgICAgICAgICAgICBpZiAoX2NsYXNzZXMgJiYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gZ2V0Q2xhc3ModmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdCA9IGMgLyAoX2NsYXNzZXMubGVuZ3RoLTIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX21heCAhPT0gX21pbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGludGVycG9sYXRlIGJldHdlZW4gbWluL21heFxuICAgICAgICAgICAgICAgICAgICB0ID0gKHZhbCAtIF9taW4pIC8gKF9tYXggLSBfbWluKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHQgPSB2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRvbWFpbiBtYXBcbiAgICAgICAgICAgIHQgPSB0TWFwRG9tYWluKHQpO1xuXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgICAgIHQgPSB0TWFwTGlnaHRuZXNzKHQpOyAgLy8gbGlnaHRuZXNzIGNvcnJlY3Rpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF9nYW1tYSAhPT0gMSkgeyB0ID0gcG93JDModCwgX2dhbW1hKTsgfVxuXG4gICAgICAgICAgICB0ID0gX3BhZGRpbmdbMF0gKyAodCAqICgxIC0gX3BhZGRpbmdbMF0gLSBfcGFkZGluZ1sxXSkpO1xuXG4gICAgICAgICAgICB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgdCkpO1xuXG4gICAgICAgICAgICB2YXIgayA9IE1hdGguZmxvb3IodCAqIDEwMDAwKTtcblxuICAgICAgICAgICAgaWYgKF91c2VDYWNoZSAmJiBfY29sb3JDYWNoZVtrXSkge1xuICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvckNhY2hlW2tdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSQyKF9jb2xvcnMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9yIGkgaW4gWzAuLl9wb3MubGVuZ3RoLTFdXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxfcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IF9wb3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA8PSBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodCA+PSBwKSAmJiAoaSA9PT0gKF9wb3MubGVuZ3RoLTEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+IHAgJiYgdCA8IF9wb3NbaSsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAodC1wKS8oX3Bvc1tpKzFdLXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IGNocm9tYSQ0LmludGVycG9sYXRlKF9jb2xvcnNbaV0sIF9jb2xvcnNbaSsxXSwgdCwgX21vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlJDIoX2NvbG9ycykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9ycyh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF91c2VDYWNoZSkgeyBfY29sb3JDYWNoZVtrXSA9IGNvbDsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVzZXRDYWNoZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9jb2xvckNhY2hlID0ge307IH07XG5cbiAgICAgICAgc2V0Q29sb3JzKGNvbG9ycyk7XG5cbiAgICAgICAgLy8gcHVibGljIGludGVyZmFjZVxuXG4gICAgICAgIHZhciBmID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgdmFyIGMgPSBjaHJvbWEkNChnZXRDb2xvcih2KSk7XG4gICAgICAgICAgICBpZiAoX291dCAmJiBjW19vdXRdKSB7IHJldHVybiBjW19vdXRdKCk7IH0gZWxzZSB7IHJldHVybiBjOyB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jbGFzc2VzID0gZnVuY3Rpb24oY2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKGNsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDIoY2xhc3NlcykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBjbGFzc2VzO1xuICAgICAgICAgICAgICAgICAgICBfZG9tYWluID0gW2NsYXNzZXNbMF0sIGNsYXNzZXNbY2xhc3Nlcy5sZW5ndGgtMV1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gY2hyb21hJDQuYW5hbHl6ZShfZG9tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gW2QubWluLCBkLm1heF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IGNocm9tYSQ0LmxpbWl0cyhkLCAnZScsIGNsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9jbGFzc2VzO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgZi5kb21haW4gPSBmdW5jdGlvbihkb21haW4pIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZG9tYWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX21pbiA9IGRvbWFpblswXTtcbiAgICAgICAgICAgIF9tYXggPSBkb21haW5bZG9tYWluLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIF9wb3MgPSBbXTtcbiAgICAgICAgICAgIHZhciBrID0gX2NvbG9ycy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoKGRvbWFpbi5sZW5ndGggPT09IGspICYmIChfbWluICE9PSBfbWF4KSkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBwb3NpdGlvbnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IEFycmF5LmZyb20oZG9tYWluKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgICBfcG9zLnB1c2goKGQtX21pbikgLyAoX21heC1fbWluKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8azsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wb3MucHVzaChjLyhrLTEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvbWFpbi5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBkb21haW4gbWFwXG4gICAgICAgICAgICAgICAgICAgIHZhciB0T3V0ID0gZG9tYWluLm1hcChmdW5jdGlvbiAoZCxpKSB7IHJldHVybiBpLyhkb21haW4ubGVuZ3RoLTEpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRCcmVha3MgPSBkb21haW4ubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiAoZCAtIF9taW4pIC8gKF9tYXggLSBfbWluKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdEJyZWFrcy5ldmVyeShmdW5jdGlvbiAodmFsLCBpKSB7IHJldHVybiB0T3V0W2ldID09PSB2YWw7IH0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0TWFwRG9tYWluID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA8PSAwIHx8IHQgPj0gMSkgeyByZXR1cm4gdDsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodCA+PSB0QnJlYWtzW2krMV0pIHsgaSsrOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSAodCAtIHRCcmVha3NbaV0pIC8gKHRCcmVha3NbaSsxXSAtIHRCcmVha3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdXQgPSB0T3V0W2ldICsgZiAqICh0T3V0W2krMV0gLSB0T3V0W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2RvbWFpbiA9IFtfbWluLCBfbWF4XTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYubW9kZSA9IGZ1bmN0aW9uKF9tKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX21vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbW9kZSA9IF9tO1xuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5yYW5nZSA9IGZ1bmN0aW9uKGNvbG9ycywgX3Bvcykge1xuICAgICAgICAgICAgc2V0Q29sb3JzKGNvbG9ycyk7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLm91dCA9IGZ1bmN0aW9uKF9vKSB7XG4gICAgICAgICAgICBfb3V0ID0gX287XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnNwcmVhZCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zcHJlYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3ByZWFkID0gdmFsO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jb3JyZWN0TGlnaHRuZXNzID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCkgeyB2ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgX2NvcnJlY3RMaWdodG5lc3MgPSB2O1xuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgaWYgKF9jb3JyZWN0TGlnaHRuZXNzKSB7XG4gICAgICAgICAgICAgICAgdE1hcExpZ2h0bmVzcyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEwwID0gZ2V0Q29sb3IoMCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBMMSA9IGdldENvbG9yKDEsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9sID0gTDAgPiBMMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfYWN0dWFsID0gZ2V0Q29sb3IodCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2lkZWFsID0gTDAgKyAoKEwxIC0gTDApICogdCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0MCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0MSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhfaXRlciA9IDIwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKE1hdGguYWJzKExfZGlmZikgPiAxZS0yKSAmJiAobWF4X2l0ZXItLSA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvbCkgeyBMX2RpZmYgKj0gLTE7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTF9kaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQxIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9ICh0MCAtIHQpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMX2FjdHVhbCA9IGdldENvbG9yKHQsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRNYXBMaWdodG5lc3MgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucGFkZGluZyA9IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIGlmIChwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSQyKHApID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBwID0gW3AscF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9wYWRkaW5nID0gcDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuY29sb3JzID0gZnVuY3Rpb24obnVtQ29sb3JzLCBvdXQpIHtcbiAgICAgICAgICAgIC8vIElmIG5vIGFyZ3VtZW50cyBhcmUgZ2l2ZW4sIHJldHVybiB0aGUgb3JpZ2luYWwgY29sb3JzIHRoYXQgd2VyZSBwcm92aWRlZFxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7IG91dCA9ICdoZXgnOyB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2NvbG9ycy5zbGljZSgwKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1Db2xvcnMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbZigwLjUpXTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1Db2xvcnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRtID0gX2RvbWFpblswXTtcbiAgICAgICAgICAgICAgICB2YXIgZGQgPSBfZG9tYWluWzFdIC0gZG07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX19yYW5nZV9fKDAsIG51bUNvbG9ycywgZmFsc2UpLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gZiggZG0gKyAoKGkvKG51bUNvbG9ycy0xKSkgKiBkZCkgKTsgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIHJldHVybnMgYWxsIGNvbG9ycyBiYXNlZCBvbiB0aGUgZGVmaW5lZCBjbGFzc2VzXG4gICAgICAgICAgICAgICAgY29sb3JzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHNhbXBsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NsYXNzZXMgJiYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxLCBlbmQgPSBfY2xhc3Nlcy5sZW5ndGgsIGFzYyA9IDEgPD0gZW5kOyBhc2MgPyBpIDwgZW5kIDogaSA+IGVuZDsgYXNjID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goKF9jbGFzc2VzW2ktMV0rX2NsYXNzZXNbaV0pKjAuNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVzID0gX2RvbWFpbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc2FtcGxlcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGYodik7IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hyb21hJDRbb3V0XSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGNbb3V0XSgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jYWNoZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIGlmIChjICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfdXNlQ2FjaGUgPSBjO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3VzZUNhY2hlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuZ2FtbWEgPSBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICBpZiAoZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX2dhbW1hID0gZztcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9nYW1tYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLm5vZGF0YSA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGlmIChkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfbmFjb2wgPSBjaHJvbWEkNChkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9uYWNvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX19yYW5nZV9fKGxlZnQsIHJpZ2h0LCBpbmNsdXNpdmUpIHtcbiAgICAgIHZhciByYW5nZSA9IFtdO1xuICAgICAgdmFyIGFzY2VuZGluZyA9IGxlZnQgPCByaWdodDtcbiAgICAgIHZhciBlbmQgPSAhaW5jbHVzaXZlID8gcmlnaHQgOiBhc2NlbmRpbmcgPyByaWdodCArIDEgOiByaWdodCAtIDE7XG4gICAgICBmb3IgKHZhciBpID0gbGVmdDsgYXNjZW5kaW5nID8gaSA8IGVuZCA6IGkgPiBlbmQ7IGFzY2VuZGluZyA/IGkrKyA6IGktLSkge1xuICAgICAgICByYW5nZS5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gaW50ZXJwb2xhdGVzIGJldHdlZW4gYSBzZXQgb2YgY29sb3JzIHV6aW5nIGEgYmV6aWVyIHNwbGluZVxuICAgIC8vXG5cbiAgICAvLyBAcmVxdWlyZXMgdXRpbHMgbGFiXG4gICAgdmFyIENvbG9yJDUgPSBDb2xvcl8xO1xuXG4gICAgdmFyIHNjYWxlJDEgPSBzY2FsZSQyO1xuXG4gICAgLy8gbnRoIHJvdyBvZiB0aGUgcGFzY2FsIHRyaWFuZ2xlXG4gICAgdmFyIGJpbm9tX3JvdyA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgdmFyIHJvdyA9IFsxLCAxXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXdyb3cgPSBbMV07XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8PSByb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBuZXdyb3dbal0gPSAocm93W2pdIHx8IDApICsgcm93W2ogLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvdyA9IG5ld3JvdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93O1xuICAgIH07XG5cbiAgICB2YXIgYmV6aWVyID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMjtcblxuICAgICAgICB2YXIgSSwgbGFiMCwgbGFiMSwgbGFiMjtcbiAgICAgICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gbmV3IENvbG9yJDUoYyk7IH0pO1xuICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgLy8gbGluZWFyIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIChhc3NpZ24gPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnblswXSwgbGFiMSA9IGFzc2lnblsxXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gbGFiMFtpXSArICh0ICogKGxhYjFbaV0gLSBsYWIwW2ldKSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIC8vIHF1YWRyYXRpYyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgKGFzc2lnbiQxID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSksIGxhYjAgPSBhc3NpZ24kMVswXSwgbGFiMSA9IGFzc2lnbiQxWzFdLCBsYWIyID0gYXNzaWduJDFbMl0pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICgoMS10KSooMS10KSAqIGxhYjBbaV0pICsgKDIgKiAoMS10KSAqIHQgKiBsYWIxW2ldKSArICh0ICogdCAqIGxhYjJbaV0pOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ1KGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAvLyBjdWJpYyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgdmFyIGxhYjM7XG4gICAgICAgICAgICAoYXNzaWduJDIgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnbiQyWzBdLCBsYWIxID0gYXNzaWduJDJbMV0sIGxhYjIgPSBhc3NpZ24kMlsyXSwgbGFiMyA9IGFzc2lnbiQyWzNdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiAoKDEtdCkqKDEtdCkqKDEtdCkgKiBsYWIwW2ldKSArICgzICogKDEtdCkgKiAoMS10KSAqIHQgKiBsYWIxW2ldKSArICgzICogKDEtdCkgKiB0ICogdCAqIGxhYjJbaV0pICsgKHQqdCp0ICogbGFiM1tpXSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgLy8gZ2VuZXJhbCBjYXNlIChkZWdyZWUgbiBiZXppZXIpXG4gICAgICAgICAgICB2YXIgbGFicywgcm93LCBuO1xuICAgICAgICAgICAgbGFicyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pO1xuICAgICAgICAgICAgbiA9IGNvbG9ycy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcm93ID0gYmlub21fcm93KG4pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHUgPSAxIC0gdDtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGxhYnMucmVkdWNlKGZ1bmN0aW9uIChzdW0sIGVsLCBqKSB7IHJldHVybiAoc3VtICsgcm93W2pdICogTWF0aC5wb3coIHUsIChuIC0gaikgKSAqIE1hdGgucG93KCB0LCBqICkgKiBlbFtpXSk7IH0sIDApOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ1KGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTm8gcG9pbnQgaW4gcnVubmluZyBiZXppZXIgd2l0aCBvbmx5IG9uZSBjb2xvci5cIilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSTtcbiAgICB9O1xuXG4gICAgdmFyIGJlemllcl8xID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICAgICAgICB2YXIgZiA9IGJlemllcihjb2xvcnMpO1xuICAgICAgICBmLnNjYWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2NhbGUkMShmKTsgfTtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICogaW50ZXJwb2xhdGVzIGJldHdlZW4gYSBzZXQgb2YgY29sb3JzIHV6aW5nIGEgYmV6aWVyIHNwbGluZVxuICAgICAqIGJsZW5kIG1vZGUgZm9ybXVsYXMgdGFrZW4gZnJvbSBodHRwOi8vd3d3LnZlbnR1cmUtd2FyZS5jb20va2V2aW4vY29kaW5nL2xldHMtbGVhcm4tbWF0aC1waG90b3Nob3AtYmxlbmQtbW9kZXMvXG4gICAgICovXG5cbiAgICB2YXIgY2hyb21hJDMgPSBjaHJvbWFfMTtcblxuICAgIHZhciBibGVuZCA9IGZ1bmN0aW9uIChib3R0b20sIHRvcCwgbW9kZSkge1xuICAgICAgICBpZiAoIWJsZW5kW21vZGVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gYmxlbmQgbW9kZSAnICsgbW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsZW5kW21vZGVdKGJvdHRvbSwgdG9wKTtcbiAgICB9O1xuXG4gICAgdmFyIGJsZW5kX2YgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZnVuY3Rpb24gKGJvdHRvbSx0b3ApIHtcbiAgICAgICAgICAgIHZhciBjMCA9IGNocm9tYSQzKHRvcCkucmdiKCk7XG4gICAgICAgICAgICB2YXIgYzEgPSBjaHJvbWEkMyhib3R0b20pLnJnYigpO1xuICAgICAgICAgICAgcmV0dXJuIGNocm9tYSQzLnJnYihmKGMwLCBjMSkpO1xuICAgICAgICB9OyB9O1xuXG4gICAgdmFyIGVhY2ggPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZnVuY3Rpb24gKGMwLCBjMSkge1xuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICAgICAgb3V0WzBdID0gZihjMFswXSwgYzFbMF0pO1xuICAgICAgICAgICAgb3V0WzFdID0gZihjMFsxXSwgYzFbMV0pO1xuICAgICAgICAgICAgb3V0WzJdID0gZihjMFsyXSwgYzFbMl0pO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfTsgfTtcblxuICAgIHZhciBub3JtYWwgPSBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYTsgfTtcbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhICogYiAvIDI1NTsgfTtcbiAgICB2YXIgZGFya2VuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYSA+IGIgPyBiIDogYTsgfTtcbiAgICB2YXIgbGlnaHRlbiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEgPiBiID8gYSA6IGI7IH07XG4gICAgdmFyIHNjcmVlbiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIDI1NSAqICgxIC0gKDEtYS8yNTUpICogKDEtYi8yNTUpKTsgfTtcbiAgICB2YXIgb3ZlcmxheSA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGIgPCAxMjggPyAyICogYSAqIGIgLyAyNTUgOiAyNTUgKiAoMSAtIDIgKiAoMSAtIGEgLyAyNTUgKSAqICggMSAtIGIgLyAyNTUgKSk7IH07XG4gICAgdmFyIGJ1cm4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiAyNTUgKiAoMSAtICgxIC0gYiAvIDI1NSkgLyAoYS8yNTUpKTsgfTtcbiAgICB2YXIgZG9kZ2UgPSBmdW5jdGlvbiAoYSxiKSB7XG4gICAgICAgIGlmIChhID09PSAyNTUpIHsgcmV0dXJuIDI1NTsgfVxuICAgICAgICBhID0gMjU1ICogKGIgLyAyNTUpIC8gKDEgLSBhIC8gMjU1KTtcbiAgICAgICAgcmV0dXJuIGEgPiAyNTUgPyAyNTUgOiBhXG4gICAgfTtcblxuICAgIC8vICMgYWRkID0gKGEsYikgLT5cbiAgICAvLyAjICAgICBpZiAoYSArIGIgPiAyNTUpIHRoZW4gMjU1IGVsc2UgYSArIGJcblxuICAgIGJsZW5kLm5vcm1hbCA9IGJsZW5kX2YoZWFjaChub3JtYWwpKTtcbiAgICBibGVuZC5tdWx0aXBseSA9IGJsZW5kX2YoZWFjaChtdWx0aXBseSkpO1xuICAgIGJsZW5kLnNjcmVlbiA9IGJsZW5kX2YoZWFjaChzY3JlZW4pKTtcbiAgICBibGVuZC5vdmVybGF5ID0gYmxlbmRfZihlYWNoKG92ZXJsYXkpKTtcbiAgICBibGVuZC5kYXJrZW4gPSBibGVuZF9mKGVhY2goZGFya2VuKSk7XG4gICAgYmxlbmQubGlnaHRlbiA9IGJsZW5kX2YoZWFjaChsaWdodGVuKSk7XG4gICAgYmxlbmQuZG9kZ2UgPSBibGVuZF9mKGVhY2goZG9kZ2UpKTtcbiAgICBibGVuZC5idXJuID0gYmxlbmRfZihlYWNoKGJ1cm4pKTtcbiAgICAvLyBibGVuZC5hZGQgPSBibGVuZF9mKGVhY2goYWRkKSk7XG5cbiAgICB2YXIgYmxlbmRfMSA9IGJsZW5kO1xuXG4gICAgLy8gY3ViZWhlbGl4IGludGVycG9sYXRpb25cbiAgICAvLyBiYXNlZCBvbiBELkEuIEdyZWVuIFwiQSBjb2xvdXIgc2NoZW1lIGZvciB0aGUgZGlzcGxheSBvZiBhc3Ryb25vbWljYWwgaW50ZW5zaXR5IGltYWdlc1wiXG4gICAgLy8gaHR0cDovL2FzdHJvbi1zb2MuaW4vYnVsbGV0aW4vMTFKdW5lLzI4OTM5MjAxMS5wZGZcblxuICAgIHZhciB0eXBlJDEgPSB1dGlscy50eXBlO1xuICAgIHZhciBjbGlwX3JnYiA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciBUV09QSSA9IHV0aWxzLlRXT1BJO1xuICAgIHZhciBwb3ckMiA9IE1hdGgucG93O1xuICAgIHZhciBzaW4kMSA9IE1hdGguc2luO1xuICAgIHZhciBjb3MkMSA9IE1hdGguY29zO1xuICAgIHZhciBjaHJvbWEkMiA9IGNocm9tYV8xO1xuXG4gICAgdmFyIGN1YmVoZWxpeCA9IGZ1bmN0aW9uKHN0YXJ0LCByb3RhdGlvbnMsIGh1ZSwgZ2FtbWEsIGxpZ2h0bmVzcykge1xuICAgICAgICBpZiAoIHN0YXJ0ID09PSB2b2lkIDAgKSBzdGFydD0zMDA7XG4gICAgICAgIGlmICggcm90YXRpb25zID09PSB2b2lkIDAgKSByb3RhdGlvbnM9LTEuNTtcbiAgICAgICAgaWYgKCBodWUgPT09IHZvaWQgMCApIGh1ZT0xO1xuICAgICAgICBpZiAoIGdhbW1hID09PSB2b2lkIDAgKSBnYW1tYT0xO1xuICAgICAgICBpZiAoIGxpZ2h0bmVzcyA9PT0gdm9pZCAwICkgbGlnaHRuZXNzPVswLDFdO1xuXG4gICAgICAgIHZhciBkaCA9IDAsIGRsO1xuICAgICAgICBpZiAodHlwZSQxKGxpZ2h0bmVzcykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGRsID0gbGlnaHRuZXNzWzFdIC0gbGlnaHRuZXNzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGwgPSAwO1xuICAgICAgICAgICAgbGlnaHRuZXNzID0gW2xpZ2h0bmVzcywgbGlnaHRuZXNzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmID0gZnVuY3Rpb24oZnJhY3QpIHtcbiAgICAgICAgICAgIHZhciBhID0gVFdPUEkgKiAoKChzdGFydCsxMjApLzM2MCkgKyAocm90YXRpb25zICogZnJhY3QpKTtcbiAgICAgICAgICAgIHZhciBsID0gcG93JDIobGlnaHRuZXNzWzBdICsgKGRsICogZnJhY3QpLCBnYW1tYSk7XG4gICAgICAgICAgICB2YXIgaCA9IGRoICE9PSAwID8gaHVlWzBdICsgKGZyYWN0ICogZGgpIDogaHVlO1xuICAgICAgICAgICAgdmFyIGFtcCA9IChoICogbCAqICgxLWwpKSAvIDI7XG4gICAgICAgICAgICB2YXIgY29zX2EgPSBjb3MkMShhKTtcbiAgICAgICAgICAgIHZhciBzaW5fYSA9IHNpbiQxKGEpO1xuICAgICAgICAgICAgdmFyIHIgPSBsICsgKGFtcCAqICgoLTAuMTQ4NjEgKiBjb3NfYSkgKyAoMS43ODI3Nyogc2luX2EpKSk7XG4gICAgICAgICAgICB2YXIgZyA9IGwgKyAoYW1wICogKCgtMC4yOTIyNyAqIGNvc19hKSAtICgwLjkwNjQ5KiBzaW5fYSkpKTtcbiAgICAgICAgICAgIHZhciBiID0gbCArIChhbXAgKiAoKzEuOTcyOTQgKiBjb3NfYSkpO1xuICAgICAgICAgICAgcmV0dXJuIGNocm9tYSQyKGNsaXBfcmdiKFtyKjI1NSxnKjI1NSxiKjI1NSwxXSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuc3RhcnQgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBpZiAoKHMgPT0gbnVsbCkpIHsgcmV0dXJuIHN0YXJ0OyB9XG4gICAgICAgICAgICBzdGFydCA9IHM7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnJvdGF0aW9ucyA9IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgIGlmICgociA9PSBudWxsKSkgeyByZXR1cm4gcm90YXRpb25zOyB9XG4gICAgICAgICAgICByb3RhdGlvbnMgPSByO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5nYW1tYSA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgIGlmICgoZyA9PSBudWxsKSkgeyByZXR1cm4gZ2FtbWE7IH1cbiAgICAgICAgICAgIGdhbW1hID0gZztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuaHVlID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgaWYgKChoID09IG51bGwpKSB7IHJldHVybiBodWU7IH1cbiAgICAgICAgICAgIGh1ZSA9IGg7XG4gICAgICAgICAgICBpZiAodHlwZSQxKGh1ZSkgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZVsxXSAtIGh1ZVswXTtcbiAgICAgICAgICAgICAgICBpZiAoZGggPT09IDApIHsgaHVlID0gaHVlWzFdOyB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYubGlnaHRuZXNzID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgaWYgKChoID09IG51bGwpKSB7IHJldHVybiBsaWdodG5lc3M7IH1cbiAgICAgICAgICAgIGlmICh0eXBlJDEoaCkgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICBsaWdodG5lc3MgPSBoO1xuICAgICAgICAgICAgICAgIGRsID0gaFsxXSAtIGhbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpZ2h0bmVzcyA9IFtoLGhdO1xuICAgICAgICAgICAgICAgIGRsID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuc2NhbGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjaHJvbWEkMi5zY2FsZShmKTsgfTtcblxuICAgICAgICBmLmh1ZShodWUpO1xuXG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkNCA9IENvbG9yXzE7XG4gICAgdmFyIGRpZ2l0cyA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICAgIHZhciBmbG9vciQxID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb207XG5cbiAgICB2YXIgcmFuZG9tXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb2RlID0gJyMnO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8NjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlICs9IGRpZ2l0cy5jaGFyQXQoZmxvb3IkMShyYW5kb20oKSAqIDE2KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ0KGNvZGUsICdoZXgnKTtcbiAgICB9O1xuXG4gICAgdmFyIHR5cGUgPSB0eXBlJHA7XG4gICAgdmFyIGxvZyA9IE1hdGgubG9nO1xuICAgIHZhciBwb3ckMSA9IE1hdGgucG93O1xuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgdmFyIGFicyQxID0gTWF0aC5hYnM7XG5cblxuICAgIHZhciBhbmFseXplID0gZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuICAgICAgICBpZiAoIGtleSA9PT0gdm9pZCAwICkga2V5PW51bGw7XG5cbiAgICAgICAgdmFyIHIgPSB7XG4gICAgICAgICAgICBtaW46IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXg6IE51bWJlci5NQVhfVkFMVUUqLTEsXG4gICAgICAgICAgICBzdW06IDAsXG4gICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGUoZGF0YSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkYXRhID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgaWYgKGtleSAmJiB0eXBlKHZhbCkgPT09ICdvYmplY3QnKSB7IHZhbCA9IHZhbFtrZXldOyB9XG4gICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmICFpc05hTih2YWwpKSB7XG4gICAgICAgICAgICAgICAgci52YWx1ZXMucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIHIuc3VtICs9IHZhbDtcbiAgICAgICAgICAgICAgICBpZiAodmFsIDwgci5taW4pIHsgci5taW4gPSB2YWw7IH1cbiAgICAgICAgICAgICAgICBpZiAodmFsID4gci5tYXgpIHsgci5tYXggPSB2YWw7IH1cbiAgICAgICAgICAgICAgICByLmNvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHIuZG9tYWluID0gW3IubWluLCByLm1heF07XG5cbiAgICAgICAgci5saW1pdHMgPSBmdW5jdGlvbiAobW9kZSwgbnVtKSB7IHJldHVybiBsaW1pdHMociwgbW9kZSwgbnVtKTsgfTtcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuXG5cbiAgICB2YXIgbGltaXRzID0gZnVuY3Rpb24gKGRhdGEsIG1vZGUsIG51bSkge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2VxdWFsJztcbiAgICAgICAgaWYgKCBudW0gPT09IHZvaWQgMCApIG51bT03O1xuXG4gICAgICAgIGlmICh0eXBlKGRhdGEpID09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGRhdGEgPSBhbmFseXplKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaW4gPSBkYXRhLm1pbjtcbiAgICAgICAgdmFyIG1heCA9IGRhdGEubWF4O1xuICAgICAgICB2YXIgdmFsdWVzID0gZGF0YS52YWx1ZXMuc29ydChmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhLWI7IH0pO1xuXG4gICAgICAgIGlmIChudW0gPT09IDEpIHsgcmV0dXJuIFttaW4sbWF4XTsgfVxuXG4gICAgICAgIHZhciBsaW1pdHMgPSBbXTtcblxuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2MnKSB7IC8vIGNvbnRpbnVvdXNcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdlJykgeyAvLyBlcXVhbCBpbnRlcnZhbFxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MTsgaTxudW07IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbisoKGkvbnVtKSoobWF4LW1pbikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnbCcpIHsgLy8gbG9nIHNjYWxlXG4gICAgICAgICAgICBpZiAobWluIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2FyaXRobWljIHNjYWxlcyBhcmUgb25seSBwb3NzaWJsZSBmb3IgdmFsdWVzID4gMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1pbl9sb2cgPSBNYXRoLkxPRzEwRSAqIGxvZyhtaW4pO1xuICAgICAgICAgICAgdmFyIG1heF9sb2cgPSBNYXRoLkxPRzEwRSAqIGxvZyhtYXgpO1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMT0xOyBpJDE8bnVtOyBpJDErKykge1xuICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHBvdyQxKDEwLCBtaW5fbG9nICsgKChpJDEvbnVtKSAqIChtYXhfbG9nIC0gbWluX2xvZykpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ3EnKSB7IC8vIHF1YW50aWxlIHNjYWxlXG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQyPTE7IGkkMjxudW07IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSAoKHZhbHVlcy5sZW5ndGgtMSkgKiBpJDIpL251bTtcbiAgICAgICAgICAgICAgICB2YXIgcGIgPSBmbG9vcihwKTtcbiAgICAgICAgICAgICAgICBpZiAocGIgPT09IHApIHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2godmFsdWVzW3BiXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcCA+IHBiXG4gICAgICAgICAgICAgICAgICAgIHZhciBwciA9IHAgLSBwYjtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2goKHZhbHVlc1twYl0qKDEtcHIpKSArICh2YWx1ZXNbcGIrMV0qcHIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnaycpIHsgLy8gay1tZWFucyBjbHVzdGVyaW5nXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gYmFzZWQgb25cbiAgICAgICAgICAgIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9maWd1ZS9zb3VyY2UvYnJvd3NlL3RydW5rL2ZpZ3VlLmpzIzMzNlxuICAgICAgICAgICAgc2ltcGxpZmllZCBmb3IgMS1kIGlucHV0IHZhbHVlc1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBjbHVzdGVyO1xuICAgICAgICAgICAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGFzc2lnbm1lbnRzID0gbmV3IEFycmF5KG4pO1xuICAgICAgICAgICAgdmFyIGNsdXN0ZXJTaXplcyA9IG5ldyBBcnJheShudW0pO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbmJfaXRlcnMgPSAwO1xuICAgICAgICAgICAgdmFyIGNlbnRyb2lkcyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIGdldCBzZWVkIHZhbHVlc1xuICAgICAgICAgICAgY2VudHJvaWRzID0gW107XG4gICAgICAgICAgICBjZW50cm9pZHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQzPTE7IGkkMzxudW07IGkkMysrKSB7XG4gICAgICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWluICsgKChpJDMvbnVtKSAqIChtYXgtbWluKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWF4KTtcblxuICAgICAgICAgICAgd2hpbGUgKHJlcGVhdCkge1xuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnQgc3RlcFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxudW07IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyU2l6ZXNbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDQ9MDsgaSQ0PG47IGkkNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tpJDRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluZGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiZXN0ID0gKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGokMT0wOyBqJDE8bnVtOyBqJDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3QgPSBhYnMkMShjZW50cm9pZHNbaiQxXS12YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IG1pbmRpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5kaXN0ID0gZGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0ID0gaiQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2x1c3RlclNpemVzW2Jlc3RdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50c1tpJDRdID0gYmVzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjZW50cm9pZHMgc3RlcFxuICAgICAgICAgICAgICAgIHZhciBuZXdDZW50cm9pZHMgPSBuZXcgQXJyYXkobnVtKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDI9MDsgaiQyPG51bTsgaiQyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2okMl0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDU9MDsgaSQ1PG47IGkkNSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXIgPSBhc3NpZ25tZW50c1tpJDVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q2VudHJvaWRzW2NsdXN0ZXJdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbY2x1c3Rlcl0gPSB2YWx1ZXNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tjbHVzdGVyXSArPSB2YWx1ZXNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDM9MDsgaiQzPG51bTsgaiQzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2okM10gKj0gMS9jbHVzdGVyU2l6ZXNbaiQzXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBjb252ZXJnZW5jZVxuICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGokND0wOyBqJDQ8bnVtOyBqJDQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q2VudHJvaWRzW2okNF0gIT09IGNlbnRyb2lkc1tqJDRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG4gICAgICAgICAgICAgICAgbmJfaXRlcnMrKztcblxuICAgICAgICAgICAgICAgIGlmIChuYl9pdGVycyA+IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbmlzaGVkIGstbWVhbnMgY2x1c3RlcmluZ1xuICAgICAgICAgICAgLy8gdGhlIG5leHQgcGFydCBpcyBib3Jyb3dlZCBmcm9tIGdhYnJpZWxmbG9yLml0XG4gICAgICAgICAgICB2YXIga0NsdXN0ZXJzID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBqJDU9MDsgaiQ1PG51bTsgaiQ1KyspIHtcbiAgICAgICAgICAgICAgICBrQ2x1c3RlcnNbaiQ1XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSQ2PTA7IGkkNjxuOyBpJDYrKykge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXIgPSBhc3NpZ25tZW50c1tpJDZdO1xuICAgICAgICAgICAgICAgIGtDbHVzdGVyc1tjbHVzdGVyXS5wdXNoKHZhbHVlc1tpJDZdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0bXBLTWVhbnNCcmVha3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGokNj0wOyBqJDY8bnVtOyBqJDYrKykge1xuICAgICAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcy5wdXNoKGtDbHVzdGVyc1tqJDZdWzBdKTtcbiAgICAgICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MucHVzaChrQ2x1c3RlcnNbaiQ2XVtrQ2x1c3RlcnNbaiQ2XS5sZW5ndGgtMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzID0gdG1wS01lYW5zQnJlYWtzLnNvcnQoZnVuY3Rpb24gKGEsYil7IHJldHVybiBhLWI7IH0pO1xuICAgICAgICAgICAgbGltaXRzLnB1c2godG1wS01lYW5zQnJlYWtzWzBdKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkNz0xOyBpJDcgPCB0bXBLTWVhbnNCcmVha3MubGVuZ3RoOyBpJDcrPSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0bXBLTWVhbnNCcmVha3NbaSQ3XTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHYpICYmIChsaW1pdHMuaW5kZXhPZih2KSA9PT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGltaXRzO1xuICAgIH07XG5cbiAgICB2YXIgYW5hbHl6ZV8xID0ge2FuYWx5emU6IGFuYWx5emUsIGxpbWl0czogbGltaXRzfTtcblxuICAgIHZhciBDb2xvciQzID0gQ29sb3JfMTtcblxuXG4gICAgdmFyIGNvbnRyYXN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgLy8gV0NBRyBjb250cmFzdCByYXRpb1xuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNjb250cmFzdC1yYXRpb2RlZlxuICAgICAgICBhID0gbmV3IENvbG9yJDMoYSk7XG4gICAgICAgIGIgPSBuZXcgQ29sb3IkMyhiKTtcbiAgICAgICAgdmFyIGwxID0gYS5sdW1pbmFuY2UoKTtcbiAgICAgICAgdmFyIGwyID0gYi5sdW1pbmFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGwxID4gbDIgPyAobDEgKyAwLjA1KSAvIChsMiArIDAuMDUpIDogKGwyICsgMC4wNSkgLyAobDEgKyAwLjA1KTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJDIgPSBDb2xvcl8xO1xuICAgIHZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xuICAgIHZhciBwb3cgPSBNYXRoLnBvdztcbiAgICB2YXIgbWluID0gTWF0aC5taW47XG4gICAgdmFyIG1heCA9IE1hdGgubWF4O1xuICAgIHZhciBhdGFuMiA9IE1hdGguYXRhbjI7XG4gICAgdmFyIGFicyA9IE1hdGguYWJzO1xuICAgIHZhciBjb3MgPSBNYXRoLmNvcztcbiAgICB2YXIgc2luID0gTWF0aC5zaW47XG4gICAgdmFyIGV4cCA9IE1hdGguZXhwO1xuICAgIHZhciBQSSA9IE1hdGguUEk7XG5cbiAgICB2YXIgZGVsdGFFID0gZnVuY3Rpb24oYSwgYiwgS2wsIEtjLCBLaCkge1xuICAgICAgICBpZiAoIEtsID09PSB2b2lkIDAgKSBLbD0xO1xuICAgICAgICBpZiAoIEtjID09PSB2b2lkIDAgKSBLYz0xO1xuICAgICAgICBpZiAoIEtoID09PSB2b2lkIDAgKSBLaD0xO1xuXG4gICAgICAgIC8vIERlbHRhIEUgKENJRSAyMDAwKVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcW5fRGVsdGFFX0NJRTIwMDAuaHRtbFxuICAgICAgICB2YXIgcmFkMmRlZyA9IGZ1bmN0aW9uKHJhZCkge1xuICAgICAgICAgICAgcmV0dXJuIDM2MCAqIHJhZCAvICgyICogUEkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVnMnJhZCA9IGZ1bmN0aW9uKGRlZykge1xuICAgICAgICAgICAgcmV0dXJuICgyICogUEkgKiBkZWcpIC8gMzYwO1xuICAgICAgICB9O1xuICAgICAgICBhID0gbmV3IENvbG9yJDIoYSk7XG4gICAgICAgIGIgPSBuZXcgQ29sb3IkMihiKTtcbiAgICAgICAgdmFyIHJlZiA9IEFycmF5LmZyb20oYS5sYWIoKSk7XG4gICAgICAgIHZhciBMMSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGExID0gcmVmWzFdO1xuICAgICAgICB2YXIgYjEgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IEFycmF5LmZyb20oYi5sYWIoKSk7XG4gICAgICAgIHZhciBMMiA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgYTIgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGIyID0gcmVmJDFbMl07XG4gICAgICAgIHZhciBhdmdMID0gKEwxICsgTDIpLzI7XG4gICAgICAgIHZhciBDMSA9IHNxcnQocG93KGExLCAyKSArIHBvdyhiMSwgMikpO1xuICAgICAgICB2YXIgQzIgPSBzcXJ0KHBvdyhhMiwgMikgKyBwb3coYjIsIDIpKTtcbiAgICAgICAgdmFyIGF2Z0MgPSAoQzEgKyBDMikvMjtcbiAgICAgICAgdmFyIEcgPSAwLjUqKDEtc3FydChwb3coYXZnQywgNykvKHBvdyhhdmdDLCA3KSArIHBvdygyNSwgNykpKSk7XG4gICAgICAgIHZhciBhMXAgPSBhMSooMStHKTtcbiAgICAgICAgdmFyIGEycCA9IGEyKigxK0cpO1xuICAgICAgICB2YXIgQzFwID0gc3FydChwb3coYTFwLCAyKSArIHBvdyhiMSwgMikpO1xuICAgICAgICB2YXIgQzJwID0gc3FydChwb3coYTJwLCAyKSArIHBvdyhiMiwgMikpO1xuICAgICAgICB2YXIgYXZnQ3AgPSAoQzFwICsgQzJwKS8yO1xuICAgICAgICB2YXIgYXJjdGFuMSA9IHJhZDJkZWcoYXRhbjIoYjEsIGExcCkpO1xuICAgICAgICB2YXIgYXJjdGFuMiA9IHJhZDJkZWcoYXRhbjIoYjIsIGEycCkpO1xuICAgICAgICB2YXIgaDFwID0gYXJjdGFuMSA+PSAwID8gYXJjdGFuMSA6IGFyY3RhbjEgKyAzNjA7XG4gICAgICAgIHZhciBoMnAgPSBhcmN0YW4yID49IDAgPyBhcmN0YW4yIDogYXJjdGFuMiArIDM2MDtcbiAgICAgICAgdmFyIGF2Z0hwID0gYWJzKGgxcCAtIGgycCkgPiAxODAgPyAoaDFwICsgaDJwICsgMzYwKS8yIDogKGgxcCArIGgycCkvMjtcbiAgICAgICAgdmFyIFQgPSAxIC0gMC4xNypjb3MoZGVnMnJhZChhdmdIcCAtIDMwKSkgKyAwLjI0KmNvcyhkZWcycmFkKDIqYXZnSHApKSArIDAuMzIqY29zKGRlZzJyYWQoMyphdmdIcCArIDYpKSAtIDAuMipjb3MoZGVnMnJhZCg0KmF2Z0hwIC0gNjMpKTtcbiAgICAgICAgdmFyIGRlbHRhSHAgPSBoMnAgLSBoMXA7XG4gICAgICAgIGRlbHRhSHAgPSBhYnMoZGVsdGFIcCkgPD0gMTgwID8gZGVsdGFIcCA6IGgycCA8PSBoMXAgPyBkZWx0YUhwICsgMzYwIDogZGVsdGFIcCAtIDM2MDtcbiAgICAgICAgZGVsdGFIcCA9IDIqc3FydChDMXAqQzJwKSpzaW4oZGVnMnJhZChkZWx0YUhwKS8yKTtcbiAgICAgICAgdmFyIGRlbHRhTCA9IEwyIC0gTDE7XG4gICAgICAgIHZhciBkZWx0YUNwID0gQzJwIC0gQzFwOyAgICBcbiAgICAgICAgdmFyIHNsID0gMSArICgwLjAxNSpwb3coYXZnTCAtIDUwLCAyKSkvc3FydCgyMCArIHBvdyhhdmdMIC0gNTAsIDIpKTtcbiAgICAgICAgdmFyIHNjID0gMSArIDAuMDQ1KmF2Z0NwO1xuICAgICAgICB2YXIgc2ggPSAxICsgMC4wMTUqYXZnQ3AqVDtcbiAgICAgICAgdmFyIGRlbHRhVGhldGEgPSAzMCpleHAoLXBvdygoYXZnSHAgLSAyNzUpLzI1LCAyKSk7XG4gICAgICAgIHZhciBSYyA9IDIqc3FydChwb3coYXZnQ3AsIDcpLyhwb3coYXZnQ3AsIDcpICsgcG93KDI1LCA3KSkpO1xuICAgICAgICB2YXIgUnQgPSAtUmMqc2luKDIqZGVnMnJhZChkZWx0YVRoZXRhKSk7XG4gICAgICAgIHZhciByZXN1bHQgPSBzcXJ0KHBvdyhkZWx0YUwvKEtsKnNsKSwgMikgKyBwb3coZGVsdGFDcC8oS2Mqc2MpLCAyKSArIHBvdyhkZWx0YUhwLyhLaCpzaCksIDIpICsgUnQqKGRlbHRhQ3AvKEtjKnNjKSkqKGRlbHRhSHAvKEtoKnNoKSkpO1xuICAgICAgICByZXR1cm4gbWF4KDAsIG1pbigxMDAsIHJlc3VsdCkpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkMSA9IENvbG9yXzE7XG5cbiAgICAvLyBzaW1wbGUgRXVjbGlkZWFuIGRpc3RhbmNlXG4gICAgdmFyIGRpc3RhbmNlID0gZnVuY3Rpb24oYSwgYiwgbW9kZSkge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2xhYic7XG5cbiAgICAgICAgLy8gRGVsdGEgRSAoQ0lFIDE5NzYpXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LmJydWNlbGluZGJsb29tLmNvbS9pbmRleC5odG1sP0VxdWF0aW9ucy5odG1sXG4gICAgICAgIGEgPSBuZXcgQ29sb3IkMShhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvciQxKGIpO1xuICAgICAgICB2YXIgbDEgPSBhLmdldChtb2RlKTtcbiAgICAgICAgdmFyIGwyID0gYi5nZXQobW9kZSk7XG4gICAgICAgIHZhciBzdW1fc3EgPSAwO1xuICAgICAgICBmb3IgKHZhciBpIGluIGwxKSB7XG4gICAgICAgICAgICB2YXIgZCA9IChsMVtpXSB8fCAwKSAtIChsMltpXSB8fCAwKTtcbiAgICAgICAgICAgIHN1bV9zcSArPSBkKmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChzdW1fc3EpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IgPSBDb2xvcl8xO1xuXG4gICAgdmFyIHZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciwgWyBudWxsIF0uY29uY2F0KCBhcmdzKSApKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gc29tZSBwcmUtZGVmaW5lZCBjb2xvciBzY2FsZXM6XG4gICAgdmFyIGNocm9tYSQxID0gY2hyb21hXzE7XG5cbiAgICB2YXIgc2NhbGUgPSBzY2FsZSQyO1xuXG4gICAgdmFyIHNjYWxlcyA9IHtcbiAgICBcdGNvb2w6IGZ1bmN0aW9uIGNvb2woKSB7IHJldHVybiBzY2FsZShbY2hyb21hJDEuaHNsKDE4MCwxLC45KSwgY2hyb21hJDEuaHNsKDI1MCwuNywuNCldKSB9LFxuICAgIFx0aG90OiBmdW5jdGlvbiBob3QoKSB7IHJldHVybiBzY2FsZShbJyMwMDAnLCcjZjAwJywnI2ZmMCcsJyNmZmYnXSkubW9kZSgncmdiJykgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICAgQ29sb3JCcmV3ZXIgY29sb3JzIGZvciBjaHJvbWEuanNcblxuICAgICAgICBDb3B5cmlnaHQgKGMpIDIwMDIgQ3ludGhpYSBCcmV3ZXIsIE1hcmsgSGFycm93ZXIsIGFuZCBUaGVcbiAgICAgICAgUGVubnN5bHZhbmlhIFN0YXRlIFVuaXZlcnNpdHkuXG5cbiAgICAgICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgICAgICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgICAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICAgICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZFxuICAgICAgICB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUlxuICAgICAgICBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICAgICAgICBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICAgICovXG5cbiAgICB2YXIgY29sb3JicmV3ZXIgPSB7XG4gICAgICAgIC8vIHNlcXVlbnRpYWxcbiAgICAgICAgT3JSZDogWycjZmZmN2VjJywgJyNmZWU4YzgnLCAnI2ZkZDQ5ZScsICcjZmRiYjg0JywgJyNmYzhkNTknLCAnI2VmNjU0OCcsICcjZDczMDFmJywgJyNiMzAwMDAnLCAnIzdmMDAwMCddLFxuICAgICAgICBQdUJ1OiBbJyNmZmY3ZmInLCAnI2VjZTdmMicsICcjZDBkMWU2JywgJyNhNmJkZGInLCAnIzc0YTljZicsICcjMzY5MGMwJywgJyMwNTcwYjAnLCAnIzA0NWE4ZCcsICcjMDIzODU4J10sXG4gICAgICAgIEJ1UHU6IFsnI2Y3ZmNmZCcsICcjZTBlY2Y0JywgJyNiZmQzZTYnLCAnIzllYmNkYScsICcjOGM5NmM2JywgJyM4YzZiYjEnLCAnIzg4NDE5ZCcsICcjODEwZjdjJywgJyM0ZDAwNGInXSxcbiAgICAgICAgT3JhbmdlczogWycjZmZmNWViJywgJyNmZWU2Y2UnLCAnI2ZkZDBhMicsICcjZmRhZTZiJywgJyNmZDhkM2MnLCAnI2YxNjkxMycsICcjZDk0ODAxJywgJyNhNjM2MDMnLCAnIzdmMjcwNCddLFxuICAgICAgICBCdUduOiBbJyNmN2ZjZmQnLCAnI2U1ZjVmOScsICcjY2NlY2U2JywgJyM5OWQ4YzknLCAnIzY2YzJhNCcsICcjNDFhZTc2JywgJyMyMzhiNDUnLCAnIzAwNmQyYycsICcjMDA0NDFiJ10sXG4gICAgICAgIFlsT3JCcjogWycjZmZmZmU1JywgJyNmZmY3YmMnLCAnI2ZlZTM5MScsICcjZmVjNDRmJywgJyNmZTk5MjknLCAnI2VjNzAxNCcsICcjY2M0YzAyJywgJyM5OTM0MDQnLCAnIzY2MjUwNiddLFxuICAgICAgICBZbEduOiBbJyNmZmZmZTUnLCAnI2Y3ZmNiOScsICcjZDlmMGEzJywgJyNhZGRkOGUnLCAnIzc4YzY3OScsICcjNDFhYjVkJywgJyMyMzg0NDMnLCAnIzAwNjgzNycsICcjMDA0NTI5J10sXG4gICAgICAgIFJlZHM6IFsnI2ZmZjVmMCcsICcjZmVlMGQyJywgJyNmY2JiYTEnLCAnI2ZjOTI3MicsICcjZmI2YTRhJywgJyNlZjNiMmMnLCAnI2NiMTgxZCcsICcjYTUwZjE1JywgJyM2NzAwMGQnXSxcbiAgICAgICAgUmRQdTogWycjZmZmN2YzJywgJyNmZGUwZGQnLCAnI2ZjYzVjMCcsICcjZmE5ZmI1JywgJyNmNzY4YTEnLCAnI2RkMzQ5NycsICcjYWUwMTdlJywgJyM3YTAxNzcnLCAnIzQ5MDA2YSddLFxuICAgICAgICBHcmVlbnM6IFsnI2Y3ZmNmNScsICcjZTVmNWUwJywgJyNjN2U5YzAnLCAnI2ExZDk5YicsICcjNzRjNDc2JywgJyM0MWFiNWQnLCAnIzIzOGI0NScsICcjMDA2ZDJjJywgJyMwMDQ0MWInXSxcbiAgICAgICAgWWxHbkJ1OiBbJyNmZmZmZDknLCAnI2VkZjhiMScsICcjYzdlOWI0JywgJyM3ZmNkYmInLCAnIzQxYjZjNCcsICcjMWQ5MWMwJywgJyMyMjVlYTgnLCAnIzI1MzQ5NCcsICcjMDgxZDU4J10sXG4gICAgICAgIFB1cnBsZXM6IFsnI2ZjZmJmZCcsICcjZWZlZGY1JywgJyNkYWRhZWInLCAnI2JjYmRkYycsICcjOWU5YWM4JywgJyM4MDdkYmEnLCAnIzZhNTFhMycsICcjNTQyNzhmJywgJyMzZjAwN2QnXSxcbiAgICAgICAgR25CdTogWycjZjdmY2YwJywgJyNlMGYzZGInLCAnI2NjZWJjNScsICcjYThkZGI1JywgJyM3YmNjYzQnLCAnIzRlYjNkMycsICcjMmI4Y2JlJywgJyMwODY4YWMnLCAnIzA4NDA4MSddLFxuICAgICAgICBHcmV5czogWycjZmZmZmZmJywgJyNmMGYwZjAnLCAnI2Q5ZDlkOScsICcjYmRiZGJkJywgJyM5Njk2OTYnLCAnIzczNzM3MycsICcjNTI1MjUyJywgJyMyNTI1MjUnLCAnIzAwMDAwMCddLFxuICAgICAgICBZbE9yUmQ6IFsnI2ZmZmZjYycsICcjZmZlZGEwJywgJyNmZWQ5NzYnLCAnI2ZlYjI0YycsICcjZmQ4ZDNjJywgJyNmYzRlMmEnLCAnI2UzMWExYycsICcjYmQwMDI2JywgJyM4MDAwMjYnXSxcbiAgICAgICAgUHVSZDogWycjZjdmNGY5JywgJyNlN2UxZWYnLCAnI2Q0YjlkYScsICcjYzk5NGM3JywgJyNkZjY1YjAnLCAnI2U3Mjk4YScsICcjY2UxMjU2JywgJyM5ODAwNDMnLCAnIzY3MDAxZiddLFxuICAgICAgICBCbHVlczogWycjZjdmYmZmJywgJyNkZWViZjcnLCAnI2M2ZGJlZicsICcjOWVjYWUxJywgJyM2YmFlZDYnLCAnIzQyOTJjNicsICcjMjE3MWI1JywgJyMwODUxOWMnLCAnIzA4MzA2YiddLFxuICAgICAgICBQdUJ1R246IFsnI2ZmZjdmYicsICcjZWNlMmYwJywgJyNkMGQxZTYnLCAnI2E2YmRkYicsICcjNjdhOWNmJywgJyMzNjkwYzAnLCAnIzAyODE4YScsICcjMDE2YzU5JywgJyMwMTQ2MzYnXSxcbiAgICAgICAgVmlyaWRpczogWycjNDQwMTU0JywgJyM0ODI3NzcnLCAnIzNmNGE4YScsICcjMzE2NzhlJywgJyMyNjgzOGYnLCAnIzFmOWQ4YScsICcjNmNjZTVhJywgJyNiNmRlMmInLCAnI2ZlZTgyNSddLFxuXG4gICAgICAgIC8vIGRpdmVyZ2luZ1xuXG4gICAgICAgIFNwZWN0cmFsOiBbJyM5ZTAxNDInLCAnI2Q1M2U0ZicsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA4YicsICcjZmZmZmJmJywgJyNlNmY1OTgnLCAnI2FiZGRhNCcsICcjNjZjMmE1JywgJyMzMjg4YmQnLCAnIzVlNGZhMiddLFxuICAgICAgICBSZFlsR246IFsnI2E1MDAyNicsICcjZDczMDI3JywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDhiJywgJyNmZmZmYmYnLCAnI2Q5ZWY4YicsICcjYTZkOTZhJywgJyM2NmJkNjMnLCAnIzFhOTg1MCcsICcjMDA2ODM3J10sXG4gICAgICAgIFJkQnU6IFsnIzY3MDAxZicsICcjYjIxODJiJywgJyNkNjYwNGQnLCAnI2Y0YTU4MicsICcjZmRkYmM3JywgJyNmN2Y3ZjcnLCAnI2QxZTVmMCcsICcjOTJjNWRlJywgJyM0MzkzYzMnLCAnIzIxNjZhYycsICcjMDUzMDYxJ10sXG4gICAgICAgIFBpWUc6IFsnIzhlMDE1MicsICcjYzUxYjdkJywgJyNkZTc3YWUnLCAnI2YxYjZkYScsICcjZmRlMGVmJywgJyNmN2Y3ZjcnLCAnI2U2ZjVkMCcsICcjYjhlMTg2JywgJyM3ZmJjNDEnLCAnIzRkOTIyMScsICcjMjc2NDE5J10sXG4gICAgICAgIFBSR246IFsnIzQwMDA0YicsICcjNzYyYTgzJywgJyM5OTcwYWInLCAnI2MyYTVjZicsICcjZTdkNGU4JywgJyNmN2Y3ZjcnLCAnI2Q5ZjBkMycsICcjYTZkYmEwJywgJyM1YWFlNjEnLCAnIzFiNzgzNycsICcjMDA0NDFiJ10sXG4gICAgICAgIFJkWWxCdTogWycjYTUwMDI2JywgJyNkNzMwMjcnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOTAnLCAnI2ZmZmZiZicsICcjZTBmM2Y4JywgJyNhYmQ5ZTknLCAnIzc0YWRkMScsICcjNDU3NWI0JywgJyMzMTM2OTUnXSxcbiAgICAgICAgQnJCRzogWycjNTQzMDA1JywgJyM4YzUxMGEnLCAnI2JmODEyZCcsICcjZGZjMjdkJywgJyNmNmU4YzMnLCAnI2Y1ZjVmNScsICcjYzdlYWU1JywgJyM4MGNkYzEnLCAnIzM1OTc4ZicsICcjMDE2NjVlJywgJyMwMDNjMzAnXSxcbiAgICAgICAgUmRHeTogWycjNjcwMDFmJywgJyNiMjE4MmInLCAnI2Q2NjA0ZCcsICcjZjRhNTgyJywgJyNmZGRiYzcnLCAnI2ZmZmZmZicsICcjZTBlMGUwJywgJyNiYWJhYmEnLCAnIzg3ODc4NycsICcjNGQ0ZDRkJywgJyMxYTFhMWEnXSxcbiAgICAgICAgUHVPcjogWycjN2YzYjA4JywgJyNiMzU4MDYnLCAnI2UwODIxNCcsICcjZmRiODYzJywgJyNmZWUwYjYnLCAnI2Y3ZjdmNycsICcjZDhkYWViJywgJyNiMmFiZDInLCAnIzgwNzNhYycsICcjNTQyNzg4JywgJyMyZDAwNGInXSxcblxuICAgICAgICAvLyBxdWFsaXRhdGl2ZVxuXG4gICAgICAgIFNldDI6IFsnIzY2YzJhNScsICcjZmM4ZDYyJywgJyM4ZGEwY2InLCAnI2U3OGFjMycsICcjYTZkODU0JywgJyNmZmQ5MmYnLCAnI2U1YzQ5NCcsICcjYjNiM2IzJ10sXG4gICAgICAgIEFjY2VudDogWycjN2ZjOTdmJywgJyNiZWFlZDQnLCAnI2ZkYzA4NicsICcjZmZmZjk5JywgJyMzODZjYjAnLCAnI2YwMDI3ZicsICcjYmY1YjE3JywgJyM2NjY2NjYnXSxcbiAgICAgICAgU2V0MTogWycjZTQxYTFjJywgJyMzNzdlYjgnLCAnIzRkYWY0YScsICcjOTg0ZWEzJywgJyNmZjdmMDAnLCAnI2ZmZmYzMycsICcjYTY1NjI4JywgJyNmNzgxYmYnLCAnIzk5OTk5OSddLFxuICAgICAgICBTZXQzOiBbJyM4ZGQzYzcnLCAnI2ZmZmZiMycsICcjYmViYWRhJywgJyNmYjgwNzInLCAnIzgwYjFkMycsICcjZmRiNDYyJywgJyNiM2RlNjknLCAnI2ZjY2RlNScsICcjZDlkOWQ5JywgJyNiYzgwYmQnLCAnI2NjZWJjNScsICcjZmZlZDZmJ10sXG4gICAgICAgIERhcmsyOiBbJyMxYjllNzcnLCAnI2Q5NWYwMicsICcjNzU3MGIzJywgJyNlNzI5OGEnLCAnIzY2YTYxZScsICcjZTZhYjAyJywgJyNhNjc2MWQnLCAnIzY2NjY2NiddLFxuICAgICAgICBQYWlyZWQ6IFsnI2E2Y2VlMycsICcjMWY3OGI0JywgJyNiMmRmOGEnLCAnIzMzYTAyYycsICcjZmI5YTk5JywgJyNlMzFhMWMnLCAnI2ZkYmY2ZicsICcjZmY3ZjAwJywgJyNjYWIyZDYnLCAnIzZhM2Q5YScsICcjZmZmZjk5JywgJyNiMTU5MjgnXSxcbiAgICAgICAgUGFzdGVsMjogWycjYjNlMmNkJywgJyNmZGNkYWMnLCAnI2NiZDVlOCcsICcjZjRjYWU0JywgJyNlNmY1YzknLCAnI2ZmZjJhZScsICcjZjFlMmNjJywgJyNjY2NjY2MnXSxcbiAgICAgICAgUGFzdGVsMTogWycjZmJiNGFlJywgJyNiM2NkZTMnLCAnI2NjZWJjNScsICcjZGVjYmU0JywgJyNmZWQ5YTYnLCAnI2ZmZmZjYycsICcjZTVkOGJkJywgJyNmZGRhZWMnLCAnI2YyZjJmMiddLFxuICAgIH07XG5cbiAgICAvLyBhZGQgbG93ZXJjYXNlIGFsaWFzZXMgZm9yIGNhc2UtaW5zZW5zaXRpdmUgbWF0Y2hlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gT2JqZWN0LmtleXMoY29sb3JicmV3ZXIpOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIga2V5ID0gbGlzdFtpXTtcblxuICAgICAgICBjb2xvcmJyZXdlcltrZXkudG9Mb3dlckNhc2UoKV0gPSBjb2xvcmJyZXdlcltrZXldO1xuICAgIH1cblxuICAgIHZhciBjb2xvcmJyZXdlcl8xID0gY29sb3JicmV3ZXI7XG5cbiAgICB2YXIgY2hyb21hID0gY2hyb21hXzE7XG5cbiAgICAvLyBmZWVsIGZyZWUgdG8gY29tbWVudCBvdXQgYW55dGhpbmcgdG8gcm9sbHVwXG4gICAgLy8gYSBzbWFsbGVyIGNocm9tYS5qcyBidWlsdFxuXG4gICAgLy8gaW8gLS0+IGNvbnZlcnQgY29sb3JzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIG9wZXJhdG9ycyAtLT4gbW9kaWZ5IGV4aXN0aW5nIENvbG9yc1xuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gaW50ZXJwb2xhdG9yc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIGdlbmVyYXRvcnMgLS0gPiBjcmVhdGUgbmV3IGNvbG9yc1xuICAgIGNocm9tYS5hdmVyYWdlID0gYXZlcmFnZTtcbiAgICBjaHJvbWEuYmV6aWVyID0gYmV6aWVyXzE7XG4gICAgY2hyb21hLmJsZW5kID0gYmxlbmRfMTtcbiAgICBjaHJvbWEuY3ViZWhlbGl4ID0gY3ViZWhlbGl4O1xuICAgIGNocm9tYS5taXggPSBjaHJvbWEuaW50ZXJwb2xhdGUgPSBtaXgkMTtcbiAgICBjaHJvbWEucmFuZG9tID0gcmFuZG9tXzE7XG4gICAgY2hyb21hLnNjYWxlID0gc2NhbGUkMjtcblxuICAgIC8vIG90aGVyIHV0aWxpdHkgbWV0aG9kc1xuICAgIGNocm9tYS5hbmFseXplID0gYW5hbHl6ZV8xLmFuYWx5emU7XG4gICAgY2hyb21hLmNvbnRyYXN0ID0gY29udHJhc3Q7XG4gICAgY2hyb21hLmRlbHRhRSA9IGRlbHRhRTtcbiAgICBjaHJvbWEuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBjaHJvbWEubGltaXRzID0gYW5hbHl6ZV8xLmxpbWl0cztcbiAgICBjaHJvbWEudmFsaWQgPSB2YWxpZDtcblxuICAgIC8vIHNjYWxlXG4gICAgY2hyb21hLnNjYWxlcyA9IHNjYWxlcztcblxuICAgIC8vIGNvbG9yc1xuICAgIGNocm9tYS5jb2xvcnMgPSB3M2N4MTFfMTtcbiAgICBjaHJvbWEuYnJld2VyID0gY29sb3JicmV3ZXJfMTtcblxuICAgIHZhciBjaHJvbWFfanMgPSBjaHJvbWE7XG5cbiAgICByZXR1cm4gY2hyb21hX2pzO1xuXG59KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydCB2YXIgUGlwc01vZGU7XG4oZnVuY3Rpb24gKFBpcHNNb2RlKSB7XG4gICAgUGlwc01vZGVbXCJSYW5nZVwiXSA9IFwicmFuZ2VcIjtcbiAgICBQaXBzTW9kZVtcIlN0ZXBzXCJdID0gXCJzdGVwc1wiO1xuICAgIFBpcHNNb2RlW1wiUG9zaXRpb25zXCJdID0gXCJwb3NpdGlvbnNcIjtcbiAgICBQaXBzTW9kZVtcIkNvdW50XCJdID0gXCJjb3VudFwiO1xuICAgIFBpcHNNb2RlW1wiVmFsdWVzXCJdID0gXCJ2YWx1ZXNcIjtcbn0pKFBpcHNNb2RlIHx8IChQaXBzTW9kZSA9IHt9KSk7XG5leHBvcnQgdmFyIFBpcHNUeXBlO1xuKGZ1bmN0aW9uIChQaXBzVHlwZSkge1xuICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9uZVwiXSA9IC0xXSA9IFwiTm9uZVwiO1xuICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9WYWx1ZVwiXSA9IDBdID0gXCJOb1ZhbHVlXCI7XG4gICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJMYXJnZVZhbHVlXCJdID0gMV0gPSBcIkxhcmdlVmFsdWVcIjtcbiAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIlNtYWxsVmFsdWVcIl0gPSAyXSA9IFwiU21hbGxWYWx1ZVwiO1xufSkoUGlwc1R5cGUgfHwgKFBpcHNUeXBlID0ge30pKTtcbi8vcmVnaW9uIEhlbHBlciBNZXRob2RzXG5mdW5jdGlvbiBpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgcmV0dXJuIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSAmJiB0eXBlb2YgZW50cnkuZnJvbSA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAvLyBwYXJ0aWFsIGZvcm1hdHRlcnMgb25seSBuZWVkIGEgdG8gZnVuY3Rpb24gYW5kIG5vdCBhIGZyb20gZnVuY3Rpb25cbiAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBlbnRyeS50byA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xufVxuZnVuY3Rpb24gaXNTZXQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cbi8vIEJpbmRhYmxlIHZlcnNpb25cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG4vLyBSZW1vdmVzIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheS5cbmZ1bmN0aW9uIHVuaXF1ZShhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzW2FdID8gKHRoaXNbYV0gPSB0cnVlKSA6IGZhbHNlO1xuICAgIH0sIHt9KTtcbn1cbi8vIFJvdW5kIGEgdmFsdWUgdG8gdGhlIGNsb3Nlc3QgJ3RvJy5cbmZ1bmN0aW9uIGNsb3Nlc3QodmFsdWUsIHRvKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB0bykgKiB0bztcbn1cbi8vIEN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG5mdW5jdGlvbiBvZmZzZXQoZWxlbSwgb3JpZW50YXRpb24pIHtcbiAgICB2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgICB2YXIgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIHBhZ2VPZmZzZXQgPSBnZXRQYWdlT2Zmc2V0KGRvYyk7XG4gICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGNvbnRhaW5zIGxlZnQgc2Nyb2xsIGluIENocm9tZSBvbiBBbmRyb2lkLlxuICAgIC8vIEkgaGF2ZW4ndCBmb3VuZCBhIGZlYXR1cmUgZGV0ZWN0aW9uIHRoYXQgcHJvdmVzIHRoaXMuIFdvcnN0IGNhc2VcbiAgICAvLyBzY2VuYXJpbyBvbiBtaXMtbWF0Y2g6IHRoZSAndGFwJyBmZWF0dXJlIG9uIGhvcml6b250YWwgc2xpZGVycyBicmVha3MuXG4gICAgaWYgKC93ZWJraXQuKkNocm9tZS4qTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICBwYWdlT2Zmc2V0LnggPSAwO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb24gPyByZWN0LnRvcCArIHBhZ2VPZmZzZXQueSAtIGRvY0VsZW0uY2xpZW50VG9wIDogcmVjdC5sZWZ0ICsgcGFnZU9mZnNldC54IC0gZG9jRWxlbS5jbGllbnRMZWZ0O1xufVxuLy8gQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBudW1lcmljYWwuXG5mdW5jdGlvbiBpc051bWVyaWMoYSkge1xuICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oYSkgJiYgaXNGaW5pdGUoYSk7XG59XG4vLyBTZXRzIGEgY2xhc3MgYW5kIHJlbW92ZXMgaXQgYWZ0ZXIgW2R1cmF0aW9uXSBtcy5cbmZ1bmN0aW9uIGFkZENsYXNzRm9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cbn1cbi8vIExpbWl0cyBhIHZhbHVlIHRvIDAgLSAxMDBcbmZ1bmN0aW9uIGxpbWl0KGEpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oYSwgMTAwKSwgMCk7XG59XG4vLyBXcmFwcyBhIHZhcmlhYmxlIGFzIGFuIGFycmF5LCBpZiBpdCBpc24ndCBvbmUgeWV0LlxuLy8gTm90ZSB0aGF0IGFuIGlucHV0IGFycmF5IGlzIHJldHVybmVkIGJ5IHJlZmVyZW5jZSFcbmZ1bmN0aW9uIGFzQXJyYXkoYSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXTtcbn1cbi8vIENvdW50cyBkZWNpbWFsc1xuZnVuY3Rpb24gY291bnREZWNpbWFscyhudW1TdHIpIHtcbiAgICBudW1TdHIgPSBTdHJpbmcobnVtU3RyKTtcbiAgICB2YXIgcGllY2VzID0gbnVtU3RyLnNwbGl0KFwiLlwiKTtcbiAgICByZXR1cm4gcGllY2VzLmxlbmd0aCA+IDEgPyBwaWVjZXNbMV0ubGVuZ3RoIDogMDtcbn1cbi8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNhZGRfY2xhc3NcbmZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuICAgIH1cbn1cbi8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNyZW1vdmVfY2xhc3NcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxiKVwiICsgY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKSArIFwiKFxcXFxifCQpXCIsIFwiZ2lcIiksIFwiIFwiKTtcbiAgICB9XG59XG4vLyBodHRwczovL3BsYWluanMuY29tL2phdmFzY3JpcHQvYXR0cmlidXRlcy9hZGRpbmctcmVtb3ZpbmctYW5kLXRlc3RpbmctZm9yLWNsYXNzZXMtOS9cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0ID8gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOiBuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGNsYXNzTmFtZSArIFwiXFxcXGJcIikudGVzdChlbC5jbGFzc05hbWUpO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxZI05vdGVzXG5mdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KGRvYykge1xuICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jLmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgIHZhciB4ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgPyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgdmFyIHkgPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeSxcbiAgICB9O1xufVxuLy8gd2UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgY29uc3RhbnRzIGluc3RlYWRcbi8vIG9mIGFjY2Vzc2luZyB3aW5kb3cuKiBhcyBzb29uIGFzIHRoZSBtb2R1bGUgbmVlZHMgaXRcbi8vIHNvIHRoYXQgd2UgZG8gbm90IGNvbXB1dGUgYW55dGhpbmcgaWYgbm90IG5lZWRlZFxuZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIGV2ZW50cyB0byBiaW5kLiBJRTExIGltcGxlbWVudHMgcG9pbnRlckV2ZW50cyB3aXRob3V0XG4gICAgLy8gYSBwcmVmaXgsIHdoaWNoIGJyZWFrcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIElFMTAgaW1wbGVtZW50YXRpb24uXG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBzdGFydDogXCJwb2ludGVyZG93blwiLFxuICAgICAgICAgICAgbW92ZTogXCJwb2ludGVybW92ZVwiLFxuICAgICAgICAgICAgZW5kOiBcInBvaW50ZXJ1cFwiLFxuICAgICAgICB9XG4gICAgICAgIDogd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJNU1BvaW50ZXJEb3duXCIsXG4gICAgICAgICAgICAgICAgbW92ZTogXCJNU1BvaW50ZXJNb3ZlXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcIk1TUG9pbnRlclVwXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJtb3VzZXVwIHRvdWNoZW5kXCIsXG4gICAgICAgICAgICB9O1xufVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbi8vIElzc3VlICM3ODVcbmZ1bmN0aW9uIGdldFN1cHBvcnRzUGFzc2l2ZSgpIHtcbiAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICB0cnkge1xuICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7IH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbn1cbmZ1bmN0aW9uIGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCkge1xuICAgIHJldHVybiB3aW5kb3cuQ1NTICYmIENTUy5zdXBwb3J0cyAmJiBDU1Muc3VwcG9ydHMoXCJ0b3VjaC1hY3Rpb25cIiwgXCJub25lXCIpO1xufVxuLy9lbmRyZWdpb25cbi8vcmVnaW9uIFJhbmdlIENhbGN1bGF0aW9uXG4vLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgYSBzdWItcmFuZ2UgaW4gcmVsYXRpb24gdG8gYSBmdWxsIHJhbmdlLlxuZnVuY3Rpb24gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpIHtcbiAgICByZXR1cm4gMTAwIC8gKHBiIC0gcGEpO1xufVxuLy8gKHBlcmNlbnRhZ2UpIEhvdyBtYW55IHBlcmNlbnQgaXMgdGhpcyB2YWx1ZSBvZiB0aGlzIHJhbmdlP1xuZnVuY3Rpb24gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlLCBzdGFydFJhbmdlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkgLyAocmFuZ2Vbc3RhcnRSYW5nZSArIDFdIC0gcmFuZ2Vbc3RhcnRSYW5nZV0pO1xufVxuLy8gKHBlcmNlbnRhZ2UpIFdoZXJlIGlzIHRoaXMgdmFsdWUgb24gdGhpcyByYW5nZT9cbmZ1bmN0aW9uIHRvUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHJhbmdlWzBdIDwgMCA/IHZhbHVlICsgTWF0aC5hYnMocmFuZ2VbMF0pIDogdmFsdWUgLSByYW5nZVswXSwgMCk7XG59XG4vLyAodmFsdWUpIEhvdyBtdWNoIGlzIHRoaXMgcGVyY2VudGFnZSBvbiB0aGlzIHJhbmdlP1xuZnVuY3Rpb24gaXNQZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgKiAocmFuZ2VbMV0gLSByYW5nZVswXSkpIC8gMTAwICsgcmFuZ2VbMF07XG59XG5mdW5jdGlvbiBnZXRKKHZhbHVlLCBhcnIpIHtcbiAgICB2YXIgaiA9IDE7XG4gICAgd2hpbGUgKHZhbHVlID49IGFycltqXSkge1xuICAgICAgICBqICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBqO1xufVxuLy8gKHBlcmNlbnRhZ2UpIElucHV0IGEgdmFsdWUsIGZpbmQgd2hlcmUsIG9uIGEgc2NhbGUgb2YgMC0xMDAsIGl0IGFwcGxpZXMuXG5mdW5jdGlvbiB0b1N0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID49IHhWYWwuc2xpY2UoLTEpWzBdKSB7XG4gICAgICAgIHJldHVybiAxMDA7XG4gICAgfVxuICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFZhbCk7XG4gICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgIHJldHVybiBwYSArIHRvUGVyY2VudGFnZShbdmEsIHZiXSwgdmFsdWUpIC8gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpO1xufVxuLy8gKHZhbHVlKSBJbnB1dCBhIHBlcmNlbnRhZ2UsIGZpbmQgd2hlcmUgaXQgaXMgb24gdGhlIHNwZWNpZmllZCByYW5nZS5cbmZ1bmN0aW9uIGZyb21TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgIC8vIFRoZXJlIGlzIG5vIHJhbmdlIGdyb3VwIHRoYXQgZml0cyAxMDBcbiAgICBpZiAodmFsdWUgPj0gMTAwKSB7XG4gICAgICAgIHJldHVybiB4VmFsLnNsaWNlKC0xKVswXTtcbiAgICB9XG4gICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgcmV0dXJuIGlzUGVyY2VudGFnZShbdmEsIHZiXSwgKHZhbHVlIC0gcGEpICogc3ViUmFuZ2VSYXRpbyhwYSwgcGIpKTtcbn1cbi8vIChwZXJjZW50YWdlKSBHZXQgdGhlIHN0ZXAgdGhhdCBhcHBsaWVzIGF0IGEgY2VydGFpbiB2YWx1ZS5cbmZ1bmN0aW9uIGdldFN0ZXAoeFBjdCwgeFN0ZXBzLCBzbmFwLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gMTAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICB2YXIgYSA9IHhQY3RbaiAtIDFdO1xuICAgIHZhciBiID0geFBjdFtqXTtcbiAgICAvLyBJZiAnc25hcCcgaXMgc2V0LCBzdGVwcyBhcmUgdXNlZCBhcyBmaXhlZCBwb2ludHMgb24gdGhlIHNsaWRlci5cbiAgICBpZiAoc25hcCkge1xuICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IHBvc2l0aW9uLCBhIG9yIGIuXG4gICAgICAgIGlmICh2YWx1ZSAtIGEgPiAoYiAtIGEpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGlmICgheFN0ZXBzW2ogLSAxXSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB4UGN0W2ogLSAxXSArIGNsb3Nlc3QodmFsdWUgLSB4UGN0W2ogLSAxXSwgeFN0ZXBzW2ogLSAxXSk7XG59XG4vL2VuZHJlZ2lvblxuLy9yZWdpb24gU3BlY3RydW1cbnZhciBTcGVjdHJ1bSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTcGVjdHJ1bShlbnRyeSwgc25hcCwgc2luZ2xlU3RlcCkge1xuICAgICAgICB0aGlzLnhQY3QgPSBbXTtcbiAgICAgICAgdGhpcy54VmFsID0gW107XG4gICAgICAgIHRoaXMueFN0ZXBzID0gW107XG4gICAgICAgIHRoaXMueE51bVN0ZXBzID0gW107XG4gICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAgPSBbXTtcbiAgICAgICAgdGhpcy54U3RlcHMgPSBbc2luZ2xlU3RlcCB8fCBmYWxzZV07XG4gICAgICAgIHRoaXMueE51bVN0ZXBzID0gW2ZhbHNlXTtcbiAgICAgICAgdGhpcy5zbmFwID0gc25hcDtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICB2YXIgb3JkZXJlZCA9IFtdO1xuICAgICAgICAvLyBNYXAgdGhlIG9iamVjdCBrZXlzIHRvIGFuIGFycmF5LlxuICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIG9yZGVyZWQucHVzaChbYXNBcnJheShlbnRyeVtpbmRleF0pLCBpbmRleF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU29ydCBhbGwgZW50cmllcyBieSB2YWx1ZSAobnVtZXJpYyBzb3J0KS5cbiAgICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYVswXVswXSAtIGJbMF1bMF07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDb252ZXJ0IGFsbCBlbnRyaWVzIHRvIHN1YnJhbmdlcy5cbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgb3JkZXJlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50cnlQb2ludChvcmRlcmVkW2luZGV4XVsxXSwgb3JkZXJlZFtpbmRleF1bMF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBhY3R1YWwgc3RlcCB2YWx1ZXMuXG4gICAgICAgIC8vIHhTdGVwcyBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeFBjdCBhbmQgeFZhbC5cbiAgICAgICAgdGhpcy54TnVtU3RlcHMgPSB0aGlzLnhTdGVwcy5zbGljZSgwKTtcbiAgICAgICAgLy8gQ29udmVydCBhbGwgbnVtZXJpYyBzdGVwcyB0byB0aGUgcGVyY2VudGFnZSBvZiB0aGUgc3VicmFuZ2UgdGhleSByZXByZXNlbnQuXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwUG9pbnQoaW5kZXgsIHRoaXMueE51bVN0ZXBzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGRpc3RhbmNlc1tpbmRleF0gPSBmcm9tUGVyY2VudGFnZSh0aGlzLnhWYWwsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcbiAgICB9O1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvdmVyIHRoZSB3aG9sZSBzY2FsZSBvZiByYW5nZXMuXG4gICAgLy8gZGlyZWN0aW9uOiAwID0gYmFja3dhcmRzIC8gMSA9IGZvcndhcmRzXG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmdldEFic29sdXRlRGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUsIGRpc3RhbmNlcywgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciB4UGN0X2luZGV4ID0gMDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmdlIHdoZXJlIHRvIHN0YXJ0IGNhbGN1bGF0aW9uXG4gICAgICAgIGlmICh2YWx1ZSA8IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIHdoaWxlICh2YWx1ZSA+IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIHhQY3RfaW5kZXggPSB0aGlzLnhQY3QubGVuZ3RoIC0gMjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBsb29raW5nIGJhY2t3YXJkcyBhbmQgdGhlIHZhbHVlIGlzIGV4YWN0bHkgYXQgYSByYW5nZSBzZXBhcmF0b3IgdGhlbiBsb29rIG9uZSByYW5nZSBmdXJ0aGVyXG4gICAgICAgIGlmICghZGlyZWN0aW9uICYmIHZhbHVlID09PSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpc3RhbmNlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGlzdGFuY2VzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgdmFyIHJlc3RfZmFjdG9yID0gMTtcbiAgICAgICAgdmFyIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXhdO1xuICAgICAgICB2YXIgcmFuZ2VfcGN0ID0gMDtcbiAgICAgICAgdmFyIHJlbF9yYW5nZV9kaXN0YW5jZSA9IDA7XG4gICAgICAgIHZhciBhYnNfZGlzdGFuY2VfY291bnRlciA9IDA7XG4gICAgICAgIHZhciByYW5nZV9jb3VudGVyID0gMDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHdoYXQgcGFydCBvZiB0aGUgc3RhcnQgcmFuZ2UgdGhlIHZhbHVlIGlzXG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh2YWx1ZSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHZhbHVlKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyB1bnRpbCB0aGUgY29tcGxldGUgZGlzdGFuY2UgYWNyb3NzIHJhbmdlcyBpcyBjYWxjdWxhdGVkXG4gICAgICAgIHdoaWxlIChyZXN0X3JlbF9kaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudGFnZSBvZiB0b3RhbCByYW5nZVxuICAgICAgICAgICAgcmFuZ2VfcGN0ID0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxICsgcmFuZ2VfY291bnRlcl0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIHRoZSBtYXJnaW4sIHBhZGRpbmcgb3IgbGltaXQgaXMgbGFyZ2VyIHRoZW4gdGhlIGN1cnJlbnQgcmFuZ2UgYW5kIGNhbGN1bGF0ZVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvciArIDEwMCAtIHN0YXJ0X2ZhY3RvciAqIDEwMCA+IDEwMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGxhcmdlciB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIHdob2xlIHJhbmdlXG4gICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gcmFuZ2VfcGN0ICogc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgICAgIC8vIFJlc3QgZmFjdG9yIG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gKHJlc3RfcmVsX2Rpc3RhbmNlIC0gMTAwICogc3RhcnRfZmFjdG9yKSAvIGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgLy8gU2V0IHN0YXJ0IGZhY3RvciB0byAxIGFzIGZvciBuZXh0IHJhbmdlIGl0IGRvZXMgbm90IGFwcGx5LlxuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzbWFsbGVyIG9yIGVxdWFsIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgY2FsY3VsYXRlIHBlcmNlbnR1YWwgcGFydCBvZiB0aGF0IHJhbmdlXG4gICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gKChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmFuZ2VfcGN0KSAvIDEwMCkgKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAvLyBObyByZXN0IGxlZnQgYXMgdGhlIHJlc3QgZml0cyBpbiBjdXJyZW50IHJhbmdlXG4gICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgLSByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gZmlyc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWluaW11bSByYW5nZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoICsgcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXItLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyICsgcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGxhc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWF4aW11bSByYW5nZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoIC0gcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0IG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlICsgYWJzX2Rpc3RhbmNlX2NvdW50ZXI7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUudG9TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IHRvU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmZyb21TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnJvbVN0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IGdldFN0ZXAodGhpcy54UGN0LCB0aGlzLnhTdGVwcywgdGhpcy5zbmFwLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREZWZhdWx0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSwgaXNEb3duLCBzaXplKSB7XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgLy8gV2hlbiBhdCB0aGUgdG9wIG9yIHN0ZXBwaW5nIGRvd24sIGxvb2sgYXQgdGhlIHByZXZpb3VzIHN1Yi1yYW5nZVxuICAgICAgICBpZiAodmFsdWUgPT09IDEwMCB8fCAoaXNEb3duICYmIHZhbHVlID09PSB0aGlzLnhQY3RbaiAtIDFdKSkge1xuICAgICAgICAgICAgaiA9IE1hdGgubWF4KGogLSAxLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMueFZhbFtqXSAtIHRoaXMueFZhbFtqIC0gMV0pIC8gc2l6ZTtcbiAgICB9O1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGVwQmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAyXSxcbiAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMl0sXG4gICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXNTdGVwOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAxXSxcbiAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMV0sXG4gICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDFdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0ZXBBZnRlcjoge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqXSxcbiAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqXSxcbiAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY291bnRTdGVwRGVjaW1hbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSB0aGlzLnhOdW1TdGVwcy5tYXAoY291bnREZWNpbWFscyk7XG4gICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBzdGVwRGVjaW1hbHMpO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmhhc05vU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueFZhbFswXSA9PT0gdGhpcy54VmFsW3RoaXMueFZhbC5sZW5ndGggLSAxXTtcbiAgICB9O1xuICAgIC8vIE91dHNpZGUgdGVzdGluZ1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0ZXAodGhpcy50b1N0ZXBwaW5nKHZhbHVlKSk7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlRW50cnlQb2ludCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHBlcmNlbnRhZ2U7XG4gICAgICAgIC8vIENvdmVydCBtaW4vbWF4IHN5bnRheCB0byAwIGFuZCAxMDAuXG4gICAgICAgIGlmIChpbmRleCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgcGVyY2VudGFnZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJjZW50YWdlID0gcGFyc2VGbG9hdChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGNvcnJlY3QgaW5wdXQuXG4gICAgICAgIGlmICghaXNOdW1lcmljKHBlcmNlbnRhZ2UpIHx8ICFpc051bWVyaWModmFsdWVbMF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHZhbHVlcy5cbiAgICAgICAgdGhpcy54UGN0LnB1c2gocGVyY2VudGFnZSk7XG4gICAgICAgIHRoaXMueFZhbC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgdmFyIHZhbHVlMSA9IE51bWJlcih2YWx1ZVsxXSk7XG4gICAgICAgIC8vIE5hTiB3aWxsIGV2YWx1YXRlIHRvIGZhbHNlIHRvbywgYnV0IHRvIGtlZXBcbiAgICAgICAgLy8gbG9nZ2luZyBjbGVhciwgc2V0IHN0ZXAgZXhwbGljaXRseS4gTWFrZSBzdXJlXG4gICAgICAgIC8vIG5vdCB0byBvdmVycmlkZSB0aGUgJ3N0ZXAnIHNldHRpbmcgd2l0aCBmYWxzZS5cbiAgICAgICAgaWYgKCFwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1swXSA9IHZhbHVlMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzLnB1c2goaXNOYU4odmFsdWUxKSA/IGZhbHNlIDogdmFsdWUxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwLnB1c2goMCk7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlU3RlcFBvaW50ID0gZnVuY3Rpb24gKGksIG4pIHtcbiAgICAgICAgLy8gSWdub3JlICdmYWxzZScgc3RlcHBpbmcuXG4gICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICBpZiAodGhpcy54VmFsW2ldID09PSB0aGlzLnhWYWxbaSArIDFdKSB7XG4gICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSB0aGlzLnhWYWxbaV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmFjdG9yIHRvIHJhbmdlIHJhdGlvXG4gICAgICAgIHRoaXMueFN0ZXBzW2ldID1cbiAgICAgICAgICAgIGZyb21QZXJjZW50YWdlKFt0aGlzLnhWYWxbaV0sIHRoaXMueFZhbFtpICsgMV1dLCBuLCAwKSAvIHN1YlJhbmdlUmF0aW8odGhpcy54UGN0W2ldLCB0aGlzLnhQY3RbaSArIDFdKTtcbiAgICAgICAgdmFyIHRvdGFsU3RlcHMgPSAodGhpcy54VmFsW2kgKyAxXSAtIHRoaXMueFZhbFtpXSkgLyB0aGlzLnhOdW1TdGVwc1tpXTtcbiAgICAgICAgdmFyIGhpZ2hlc3RTdGVwID0gTWF0aC5jZWlsKE51bWJlcih0b3RhbFN0ZXBzLnRvRml4ZWQoMykpIC0gMSk7XG4gICAgICAgIHZhciBzdGVwID0gdGhpcy54VmFsW2ldICsgdGhpcy54TnVtU3RlcHNbaV0gKiBoaWdoZXN0U3RlcDtcbiAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHN0ZXA7XG4gICAgfTtcbiAgICByZXR1cm4gU3BlY3RydW07XG59KCkpO1xuLy9lbmRyZWdpb25cbi8vcmVnaW9uIE9wdGlvbnNcbi8qXHRFdmVyeSBpbnB1dCBvcHRpb24gaXMgdGVzdGVkIGFuZCBwYXJzZWQuIFRoaXMgd2lsbCBwcmV2ZW50XG4gICAgZW5kbGVzcyB2YWxpZGF0aW9uIGluIGludGVybmFsIG1ldGhvZHMuIFRoZXNlIHRlc3RzIGFyZVxuICAgIHN0cnVjdHVyZWQgd2l0aCBhbiBpdGVtIGZvciBldmVyeSBvcHRpb24gYXZhaWxhYmxlLiBBblxuICAgIG9wdGlvbiBjYW4gYmUgbWFya2VkIGFzIHJlcXVpcmVkIGJ5IHNldHRpbmcgdGhlICdyJyBmbGFnLlxuICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICAgICAgICAtIFRoZSBwcm92aWRlZCB2YWx1ZSBmb3IgdGhlIG9wdGlvbjtcbiAgICAgICAgLSBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBvYmplY3Q7XG4gICAgICAgIC0gVGhlIG5hbWUgZm9yIHRoZSBvcHRpb247XG5cbiAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHdoZW4gYW4gZXJyb3IgaXMgZGV0ZWN0ZWQsXG4gICAgb3IgdHJ1ZSB3aGVuIGV2ZXJ5dGhpbmcgaXMgT0suIEl0IGNhbiBhbHNvIG1vZGlmeSB0aGUgb3B0aW9uXG4gICAgb2JqZWN0LCB0byBtYWtlIHN1cmUgYWxsIHZhbHVlcyBjYW4gYmUgY29ycmVjdGx5IGxvb3BlZCBlbHNld2hlcmUuICovXG4vL3JlZ2lvbiBEZWZhdWx0c1xudmFyIGRlZmF1bHRGb3JtYXR0ZXIgPSB7XG4gICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgIH0sXG4gICAgZnJvbTogTnVtYmVyLFxufTtcbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIHRhcmdldDogXCJ0YXJnZXRcIixcbiAgICBiYXNlOiBcImJhc2VcIixcbiAgICBvcmlnaW46IFwib3JpZ2luXCIsXG4gICAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICAgIGhhbmRsZUxvd2VyOiBcImhhbmRsZS1sb3dlclwiLFxuICAgIGhhbmRsZVVwcGVyOiBcImhhbmRsZS11cHBlclwiLFxuICAgIHRvdWNoQXJlYTogXCJ0b3VjaC1hcmVhXCIsXG4gICAgaG9yaXpvbnRhbDogXCJob3Jpem9udGFsXCIsXG4gICAgdmVydGljYWw6IFwidmVydGljYWxcIixcbiAgICBiYWNrZ3JvdW5kOiBcImJhY2tncm91bmRcIixcbiAgICBjb25uZWN0OiBcImNvbm5lY3RcIixcbiAgICBjb25uZWN0czogXCJjb25uZWN0c1wiLFxuICAgIGx0cjogXCJsdHJcIixcbiAgICBydGw6IFwicnRsXCIsXG4gICAgdGV4dERpcmVjdGlvbkx0cjogXCJ0eHQtZGlyLWx0clwiLFxuICAgIHRleHREaXJlY3Rpb25SdGw6IFwidHh0LWRpci1ydGxcIixcbiAgICBkcmFnZ2FibGU6IFwiZHJhZ2dhYmxlXCIsXG4gICAgZHJhZzogXCJzdGF0ZS1kcmFnXCIsXG4gICAgdGFwOiBcInN0YXRlLXRhcFwiLFxuICAgIGFjdGl2ZTogXCJhY3RpdmVcIixcbiAgICB0b29sdGlwOiBcInRvb2x0aXBcIixcbiAgICBwaXBzOiBcInBpcHNcIixcbiAgICBwaXBzSG9yaXpvbnRhbDogXCJwaXBzLWhvcml6b250YWxcIixcbiAgICBwaXBzVmVydGljYWw6IFwicGlwcy12ZXJ0aWNhbFwiLFxuICAgIG1hcmtlcjogXCJtYXJrZXJcIixcbiAgICBtYXJrZXJIb3Jpem9udGFsOiBcIm1hcmtlci1ob3Jpem9udGFsXCIsXG4gICAgbWFya2VyVmVydGljYWw6IFwibWFya2VyLXZlcnRpY2FsXCIsXG4gICAgbWFya2VyTm9ybWFsOiBcIm1hcmtlci1ub3JtYWxcIixcbiAgICBtYXJrZXJMYXJnZTogXCJtYXJrZXItbGFyZ2VcIixcbiAgICBtYXJrZXJTdWI6IFwibWFya2VyLXN1YlwiLFxuICAgIHZhbHVlOiBcInZhbHVlXCIsXG4gICAgdmFsdWVIb3Jpem9udGFsOiBcInZhbHVlLWhvcml6b250YWxcIixcbiAgICB2YWx1ZVZlcnRpY2FsOiBcInZhbHVlLXZlcnRpY2FsXCIsXG4gICAgdmFsdWVOb3JtYWw6IFwidmFsdWUtbm9ybWFsXCIsXG4gICAgdmFsdWVMYXJnZTogXCJ2YWx1ZS1sYXJnZVwiLFxuICAgIHZhbHVlU3ViOiBcInZhbHVlLXN1YlwiLFxufTtcbi8vIE5hbWVzcGFjZXMgb2YgaW50ZXJuYWwgZXZlbnQgbGlzdGVuZXJzXG52YXIgSU5URVJOQUxfRVZFTlRfTlMgPSB7XG4gICAgdG9vbHRpcHM6IFwiLl9fdG9vbHRpcHNcIixcbiAgICBhcmlhOiBcIi5fX2FyaWFcIixcbn07XG4vL2VuZHJlZ2lvblxuZnVuY3Rpb24gdGVzdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICAvLyBUaGUgc3RlcCBvcHRpb24gY2FuIHN0aWxsIGJlIHVzZWQgdG8gc2V0IHN0ZXBwaW5nXG4gICAgLy8gZm9yIGxpbmVhciBzbGlkZXJzLiBPdmVyd3JpdHRlbiBpZiBzZXQgaW4gJ3JhbmdlJy5cbiAgICBwYXJzZWQuc2luZ2xlU3RlcCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRQYWdlTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQua2V5Ym9hcmRQYWdlTXVsdGlwbGllciA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEtleWJvYXJkTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZE11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmtleWJvYXJkTXVsdGlwbGllciA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmREZWZhdWx0U3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQua2V5Ym9hcmREZWZhdWx0U3RlcCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdFJhbmdlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBGaWx0ZXIgaW5jb3JyZWN0IGlucHV0LlxuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtcbiAgICB9XG4gICAgLy8gQ2F0Y2ggbWlzc2luZyBzdGFydCBvciBlbmQuXG4gICAgaWYgKGVudHJ5Lm1pbiA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5Lm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IE1pc3NpbmcgJ21pbicgb3IgJ21heCcgaW4gJ3JhbmdlJy5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5zcGVjdHJ1bSA9IG5ldyBTcGVjdHJ1bShlbnRyeSwgcGFyc2VkLnNuYXAgfHwgZmFsc2UsIHBhcnNlZC5zaW5nbGVTdGVwKTtcbn1cbmZ1bmN0aW9uIHRlc3RTdGFydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dC4gVmFsdWVzIGFyZW4ndCB0ZXN0ZWQsIGFzIHRoZSBwdWJsaWMgLnZhbCBtZXRob2RcbiAgICAvLyB3aWxsIGFsd2F5cyBwcm92aWRlIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGFydCcgb3B0aW9uIGlzIGluY29ycmVjdC5cIik7XG4gICAgfVxuICAgIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgaGFuZGxlcy5cbiAgICBwYXJzZWQuaGFuZGxlcyA9IGVudHJ5Lmxlbmd0aDtcbiAgICAvLyBXaGVuIHRoZSBzbGlkZXIgaXMgaW5pdGlhbGl6ZWQsIHRoZSAudmFsIG1ldGhvZCB3aWxsXG4gICAgLy8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXJ0IG9wdGlvbnMuXG4gICAgcGFyc2VkLnN0YXJ0ID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0U25hcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3NuYXAnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgIHBhcnNlZC5zbmFwID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0QW5pbWF0ZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGUnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgIHBhcnNlZC5hbmltYXRlID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGlvbkR1cmF0aW9uJyBvcHRpb24gbXVzdCBiZSBhIG51bWJlci5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5hbmltYXRpb25EdXJhdGlvbiA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdENvbm5lY3QocGFyc2VkLCBlbnRyeSkge1xuICAgIHZhciBjb25uZWN0ID0gW2ZhbHNlXTtcbiAgICB2YXIgaTtcbiAgICAvLyBNYXAgbGVnYWN5IG9wdGlvbnNcbiAgICBpZiAoZW50cnkgPT09IFwibG93ZXJcIikge1xuICAgICAgICBlbnRyeSA9IFt0cnVlLCBmYWxzZV07XG4gICAgfVxuICAgIGVsc2UgaWYgKGVudHJ5ID09PSBcInVwcGVyXCIpIHtcbiAgICAgICAgZW50cnkgPSBbZmFsc2UsIHRydWVdO1xuICAgIH1cbiAgICAvLyBIYW5kbGUgYm9vbGVhbiBvcHRpb25zXG4gICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgY29ubmVjdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0LnB1c2goZmFsc2UpO1xuICAgIH1cbiAgICAvLyBSZWplY3QgaW52YWxpZCBpbnB1dFxuICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoIHx8IGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMgKyAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjb25uZWN0JyBvcHRpb24gZG9lc24ndCBtYXRjaCBoYW5kbGUgY291bnQuXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29ubmVjdCA9IGVudHJ5O1xuICAgIH1cbiAgICBwYXJzZWQuY29ubmVjdCA9IGNvbm5lY3Q7XG59XG5mdW5jdGlvbiB0ZXN0T3JpZW50YXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgIC8vIFNldCBvcmllbnRhdGlvbiB0byBhbiBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeVxuICAgIC8vIGFycmF5IHNlbGVjdGlvbi5cbiAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICBwYXJzZWQub3J0ID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnb3JpZW50YXRpb24nIG9wdGlvbiBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0TWFyZ2luKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ21hcmdpbicgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgfVxuICAgIC8vIElzc3VlICM1ODJcbiAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwYXJzZWQubWFyZ2luID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbn1cbmZ1bmN0aW9uIHRlc3RMaW1pdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5saW1pdCA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgaWYgKCFwYXJzZWQubGltaXQgfHwgcGFyc2VkLmhhbmRsZXMgPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzIHdpdGggMiBvciBtb3JlIGhhbmRsZXMuXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRlc3RQYWRkaW5nKHBhcnNlZCwgZW50cnkpIHtcbiAgICB2YXIgaW5kZXg7XG4gICAgaWYgKCFpc051bWVyaWMoZW50cnkpICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSAmJiAhKGVudHJ5Lmxlbmd0aCA9PT0gMiB8fCBpc051bWVyaWMoZW50cnlbMF0pIHx8IGlzTnVtZXJpYyhlbnRyeVsxXSkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICB9XG4gICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICBlbnRyeSA9IFtlbnRyeSwgZW50cnldO1xuICAgIH1cbiAgICAvLyAnZ2V0RGlzdGFuY2UnIHJldHVybnMgZmFsc2UgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgIHBhcnNlZC5wYWRkaW5nID0gW3BhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVswXSksIHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVsxXSldO1xuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHBhcnNlZC5zcGVjdHJ1bS54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAvLyBsYXN0IFwicmFuZ2VcIiBjYW4ndCBjb250YWluIHN0ZXAgc2l6ZSBhcyBpdCBpcyBwdXJlbHkgYW4gZW5kcG9pbnQuXG4gICAgICAgIGlmIChwYXJzZWQucGFkZGluZ1swXVtpbmRleF0gPCAwIHx8IHBhcnNlZC5wYWRkaW5nWzFdW2luZGV4XSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcihzKS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHRvdGFsUGFkZGluZyA9IGVudHJ5WzBdICsgZW50cnlbMV07XG4gICAgdmFyIGZpcnN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFswXTtcbiAgICB2YXIgbGFzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbcGFyc2VkLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgaWYgKHRvdGFsUGFkZGluZyAvIChsYXN0VmFsdWUgLSBmaXJzdFZhbHVlKSA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRlc3REaXJlY3Rpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgIC8vIFNldCBkaXJlY3Rpb24gYXMgYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3kgcGFyc2luZy5cbiAgICAvLyBJbnZlcnQgY29ubmVjdGlvbiBmb3IgUlRMIHNsaWRlcnMsIHNvIHRoYXQgdGhlIHByb3BlclxuICAgIC8vIGhhbmRsZXMgZ2V0IHRoZSBjb25uZWN0L2JhY2tncm91bmQgY2xhc3Nlcy5cbiAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgIGNhc2UgXCJsdHJcIjpcbiAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJydGxcIjpcbiAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZGlyZWN0aW9uJyBvcHRpb24gd2FzIG5vdCByZWNvZ25pemVkLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0QmVoYXZpb3VyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIGlucHV0IGlzIGEgc3RyaW5nLlxuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2JlaGF2aW91cicgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIG9wdGlvbnMuXCIpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIGFueSBrZXl3b3Jkcy5cbiAgICAvLyBOb25lIGFyZSByZXF1aXJlZC5cbiAgICB2YXIgdGFwID0gZW50cnkuaW5kZXhPZihcInRhcFwiKSA+PSAwO1xuICAgIHZhciBkcmFnID0gZW50cnkuaW5kZXhPZihcImRyYWdcIikgPj0gMDtcbiAgICB2YXIgZml4ZWQgPSBlbnRyeS5pbmRleE9mKFwiZml4ZWRcIikgPj0gMDtcbiAgICB2YXIgc25hcCA9IGVudHJ5LmluZGV4T2YoXCJzbmFwXCIpID49IDA7XG4gICAgdmFyIGhvdmVyID0gZW50cnkuaW5kZXhPZihcImhvdmVyXCIpID49IDA7XG4gICAgdmFyIHVuY29uc3RyYWluZWQgPSBlbnRyeS5pbmRleE9mKFwidW5jb25zdHJhaW5lZFwiKSA+PSAwO1xuICAgIHZhciBkcmFnQWxsID0gZW50cnkuaW5kZXhPZihcImRyYWctYWxsXCIpID49IDA7XG4gICAgdmFyIHNtb290aFN0ZXBzID0gZW50cnkuaW5kZXhPZihcInNtb290aC1zdGVwc1wiKSA+PSAwO1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgICBpZiAocGFyc2VkLmhhbmRsZXMgIT09IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmaXhlZCcgYmVoYXZpb3VyIG11c3QgYmUgdXNlZCB3aXRoIDIgaGFuZGxlc1wiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2UgbWFyZ2luIHRvIGVuZm9yY2UgZml4ZWQgc3RhdGVcbiAgICAgICAgdGVzdE1hcmdpbihwYXJzZWQsIHBhcnNlZC5zdGFydFsxXSAtIHBhcnNlZC5zdGFydFswXSk7XG4gICAgfVxuICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3VuY29uc3RyYWluZWQnIGJlaGF2aW91ciBjYW5ub3QgYmUgdXNlZCB3aXRoIG1hcmdpbiBvciBsaW1pdFwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmV2ZW50cyA9IHtcbiAgICAgICAgdGFwOiB0YXAgfHwgc25hcCxcbiAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgZHJhZ0FsbDogZHJhZ0FsbCxcbiAgICAgICAgc21vb3RoU3RlcHM6IHNtb290aFN0ZXBzLFxuICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgIHNuYXA6IHNuYXAsXG4gICAgICAgIGhvdmVyOiBob3ZlcixcbiAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZCxcbiAgICB9O1xufVxuZnVuY3Rpb24gdGVzdFRvb2x0aXBzKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBmb3JtYXR0ZXIgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybWF0dGVyICE9PSBcImJvb2xlYW5cIiAmJiAhaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZm9ybWF0dGVyKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd0b29sdGlwcycgbXVzdCBiZSBwYXNzZWQgYSBmb3JtYXR0ZXIgb3IgJ2ZhbHNlJy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBlbnRyeTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0SGFuZGxlQXR0cmlidXRlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgYXR0cmlidXRlcyBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQuaGFuZGxlQXR0cmlidXRlcyA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEFyaWFGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhcmlhRm9ybWF0JyByZXF1aXJlcyAndG8nIG1ldGhvZC5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5hcmlhRm9ybWF0ID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0Rm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmb3JtYXQnIHJlcXVpcmVzICd0bycgYW5kICdmcm9tJyBtZXRob2RzLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmZvcm1hdCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEtleWJvYXJkU3VwcG9ydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkU3VwcG9ydCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmtleWJvYXJkU3VwcG9ydCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdERvY3VtZW50RWxlbWVudChwYXJzZWQsIGVudHJ5KSB7XG4gICAgLy8gVGhpcyBpcyBhbiBhZHZhbmNlZCBvcHRpb24uIFBhc3NlZCB2YWx1ZXMgYXJlIHVzZWQgd2l0aG91dCB2YWxpZGF0aW9uLlxuICAgIHBhcnNlZC5kb2N1bWVudEVsZW1lbnQgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RDc3NQcmVmaXgocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIgJiYgZW50cnkgIT09IGZhbHNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NQcmVmaXgnIG11c3QgYmUgYSBzdHJpbmcgb3IgYGZhbHNlYC5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5jc3NQcmVmaXggPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RDc3NDbGFzc2VzKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NDbGFzc2VzJyBtdXN0IGJlIGFuIG9iamVjdC5cIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcGFyc2VkLmNzc1ByZWZpeCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3Nlc1trZXldID0gcGFyc2VkLmNzc1ByZWZpeCArIGVudHJ5W2tleV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSBlbnRyeTtcbiAgICB9XG59XG4vLyBUZXN0IGFsbCBkZXZlbG9wZXIgc2V0dGluZ3MgYW5kIHBhcnNlIHRvIGFzc3VtcHRpb24tc2FmZSB2YWx1ZXMuXG5mdW5jdGlvbiB0ZXN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgLy8gVG8gcHJvdmUgYSBmaXggZm9yICM1MzcsIGZyZWV6ZSBvcHRpb25zIGhlcmUuXG4gICAgLy8gSWYgdGhlIG9iamVjdCBpcyBtb2RpZmllZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gICAgLy8gT2JqZWN0LmZyZWV6ZShvcHRpb25zKTtcbiAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICBtYXJnaW46IG51bGwsXG4gICAgICAgIGxpbWl0OiBudWxsLFxuICAgICAgICBwYWRkaW5nOiBudWxsLFxuICAgICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgICAgICBhcmlhRm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyLFxuICAgICAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgfTtcbiAgICAvLyBUZXN0cyBhcmUgZXhlY3V0ZWQgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIHByZXNlbnRlZCBoZXJlLlxuICAgIHZhciB0ZXN0cyA9IHtcbiAgICAgICAgc3RlcDogeyByOiBmYWxzZSwgdDogdGVzdFN0ZXAgfSxcbiAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIgfSxcbiAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyIH0sXG4gICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZERlZmF1bHRTdGVwIH0sXG4gICAgICAgIHN0YXJ0OiB7IHI6IHRydWUsIHQ6IHRlc3RTdGFydCB9LFxuICAgICAgICBjb25uZWN0OiB7IHI6IHRydWUsIHQ6IHRlc3RDb25uZWN0IH0sXG4gICAgICAgIGRpcmVjdGlvbjogeyByOiB0cnVlLCB0OiB0ZXN0RGlyZWN0aW9uIH0sXG4gICAgICAgIHNuYXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTbmFwIH0sXG4gICAgICAgIGFuaW1hdGU6IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRlIH0sXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24gfSxcbiAgICAgICAgcmFuZ2U6IHsgcjogdHJ1ZSwgdDogdGVzdFJhbmdlIH0sXG4gICAgICAgIG9yaWVudGF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0T3JpZW50YXRpb24gfSxcbiAgICAgICAgbWFyZ2luOiB7IHI6IGZhbHNlLCB0OiB0ZXN0TWFyZ2luIH0sXG4gICAgICAgIGxpbWl0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0TGltaXQgfSxcbiAgICAgICAgcGFkZGluZzogeyByOiBmYWxzZSwgdDogdGVzdFBhZGRpbmcgfSxcbiAgICAgICAgYmVoYXZpb3VyOiB7IHI6IHRydWUsIHQ6IHRlc3RCZWhhdmlvdXIgfSxcbiAgICAgICAgYXJpYUZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEFyaWFGb3JtYXQgfSxcbiAgICAgICAgZm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0Rm9ybWF0IH0sXG4gICAgICAgIHRvb2x0aXBzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0VG9vbHRpcHMgfSxcbiAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB7IHI6IHRydWUsIHQ6IHRlc3RLZXlib2FyZFN1cHBvcnQgfSxcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50OiB7IHI6IGZhbHNlLCB0OiB0ZXN0RG9jdW1lbnRFbGVtZW50IH0sXG4gICAgICAgIGNzc1ByZWZpeDogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzUHJlZml4IH0sXG4gICAgICAgIGNzc0NsYXNzZXM6IHsgcjogdHJ1ZSwgdDogdGVzdENzc0NsYXNzZXMgfSxcbiAgICAgICAgaGFuZGxlQXR0cmlidXRlczogeyByOiBmYWxzZSwgdDogdGVzdEhhbmRsZUF0dHJpYnV0ZXMgfSxcbiAgICB9O1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgY29ubmVjdDogZmFsc2UsXG4gICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgYmVoYXZpb3VyOiBcInRhcFwiLFxuICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcbiAgICAgICAgY3NzUHJlZml4OiBcIm5vVWktXCIsXG4gICAgICAgIGNzc0NsYXNzZXM6IGNzc0NsYXNzZXMsXG4gICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IDUsXG4gICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogMSxcbiAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogMTAsXG4gICAgfTtcbiAgICAvLyBBcmlhRm9ybWF0IGRlZmF1bHRzIHRvIHJlZ3VsYXIgZm9ybWF0LCBpZiBhbnkuXG4gICAgaWYgKG9wdGlvbnMuZm9ybWF0ICYmICFvcHRpb25zLmFyaWFGb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucy5hcmlhRm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQ7XG4gICAgfVxuICAgIC8vIFJ1biBhbGwgb3B0aW9ucyB0aHJvdWdoIGEgdGVzdGluZyBtZWNoYW5pc20gdG8gZW5zdXJlIGNvcnJlY3RcbiAgICAvLyBpbnB1dC4gSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQgb3B0aW9ucyBtaWdodCBnZXQgbW9kaWZpZWQgdG9cbiAgICAvLyBiZSBoYW5kbGVkIHByb3Blcmx5LiBFLmcuIHdyYXBwaW5nIGludGVnZXJzIGluIGFycmF5cy5cbiAgICBPYmplY3Qua2V5cyh0ZXN0cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIGlzbid0IHNldCwgYnV0IGl0IGlzIHJlcXVpcmVkLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgaWYgKCFpc1NldChvcHRpb25zW25hbWVdKSAmJiBkZWZhdWx0c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGVzdHNbbmFtZV0ucikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdcIiArIG5hbWUgKyBcIicgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRlc3RzW25hbWVdLnQocGFyc2VkLCAhaXNTZXQob3B0aW9uc1tuYW1lXSkgPyBkZWZhdWx0c1tuYW1lXSA6IG9wdGlvbnNbbmFtZV0pO1xuICAgIH0pO1xuICAgIC8vIEZvcndhcmQgcGlwcyBvcHRpb25zXG4gICAgcGFyc2VkLnBpcHMgPSBvcHRpb25zLnBpcHM7XG4gICAgLy8gQWxsIHJlY2VudCBicm93c2VycyBhY2NlcHQgdW5wcmVmaXhlZCB0cmFuc2Zvcm0uXG4gICAgLy8gV2UgbmVlZCAtbXMtIGZvciBJRTkgYW5kIC13ZWJraXQtIGZvciBvbGRlciBBbmRyb2lkO1xuICAgIC8vIEFzc3VtZSB1c2Ugb2YgLXdlYmtpdC0gaWYgdW5wcmVmaXhlZCBhbmQgLW1zLSBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXRyYW5zZm9ybXMyZFxuICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YXIgbXNQcmVmaXggPSBkLnN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIG5vUHJlZml4ID0gZC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICBwYXJzZWQudHJhbnNmb3JtUnVsZSA9IG5vUHJlZml4ID8gXCJ0cmFuc2Zvcm1cIiA6IG1zUHJlZml4ID8gXCJtc1RyYW5zZm9ybVwiIDogXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcbiAgICAvLyBQaXBzIGRvbid0IG1vdmUsIHNvIHdlIGNhbiBwbGFjZSB0aGVtIHVzaW5nIGxlZnQvdG9wLlxuICAgIHZhciBzdHlsZXMgPSBbXG4gICAgICAgIFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgIFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdLFxuICAgIF07XG4gICAgcGFyc2VkLnN0eWxlID0gc3R5bGVzW3BhcnNlZC5kaXJdW3BhcnNlZC5vcnRdO1xuICAgIHJldHVybiBwYXJzZWQ7XG59XG4vL2VuZHJlZ2lvblxuZnVuY3Rpb24gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICB2YXIgc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgPSBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpO1xuICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSAmJiBnZXRTdXBwb3J0c1Bhc3NpdmUoKTtcbiAgICAvLyBBbGwgdmFyaWFibGVzIGxvY2FsIHRvICdzY29wZScgYXJlIHByZWZpeGVkIHdpdGggJ3Njb3BlXydcbiAgICAvLyBTbGlkZXIgRE9NIE5vZGVzXG4gICAgdmFyIHNjb3BlX1RhcmdldCA9IHRhcmdldDtcbiAgICB2YXIgc2NvcGVfQmFzZTtcbiAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XG4gICAgdmFyIHNjb3BlX1BpcHM7XG4gICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgIC8vIFNsaWRlciBzdGF0ZSB2YWx1ZXNcbiAgICB2YXIgc2NvcGVfU3BlY3RydW0gPSBvcHRpb25zLnNwZWN0cnVtO1xuICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICB2YXIgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgdmFyIHNjb3BlX0hhbmRsZU51bWJlcnMgPSBbXTtcbiAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICB2YXIgc2NvcGVfRXZlbnRzID0ge307XG4gICAgLy8gRG9jdW1lbnQgTm9kZXNcbiAgICB2YXIgc2NvcGVfRG9jdW1lbnQgPSB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICB2YXIgc2NvcGVfRG9jdW1lbnRFbGVtZW50ID0gb3B0aW9ucy5kb2N1bWVudEVsZW1lbnQgfHwgc2NvcGVfRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBzY29wZV9Cb2R5ID0gc2NvcGVfRG9jdW1lbnQuYm9keTtcbiAgICAvLyBGb3IgaG9yaXpvbnRhbCBzbGlkZXJzIGluIHN0YW5kYXJkIGx0ciBkb2N1bWVudHMsXG4gICAgLy8gbWFrZSAubm9VaS1vcmlnaW4gb3ZlcmZsb3cgdG8gdGhlIGxlZnQgc28gdGhlIGRvY3VtZW50IGRvZXNuJ3Qgc2Nyb2xsLlxuICAgIHZhciBzY29wZV9EaXJPZmZzZXQgPSBzY29wZV9Eb2N1bWVudC5kaXIgPT09IFwicnRsXCIgfHwgb3B0aW9ucy5vcnQgPT09IDEgPyAwIDogMTAwO1xuICAgIC8vIENyZWF0ZXMgYSBub2RlLCBhZGRzIGl0IHRvIHRhcmdldCwgcmV0dXJucyB0aGUgbmV3IG5vZGUuXG4gICAgZnVuY3Rpb24gYWRkTm9kZVRvKGFkZFRhcmdldCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHZhciBkaXYgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIC8vIEFwcGVuZCBhIG9yaWdpbiB0byB0aGUgYmFzZVxuICAgIGZ1bmN0aW9uIGFkZE9yaWdpbihiYXNlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgdmFyIG9yaWdpbiA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMub3JpZ2luKTtcbiAgICAgICAgdmFyIGhhbmRsZSA9IGFkZE5vZGVUbyhvcmlnaW4sIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGUpO1xuICAgICAgICBhZGROb2RlVG8oaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMudG91Y2hBcmVhKTtcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImRhdGEtaGFuZGxlXCIsIFN0cmluZyhoYW5kbGVOdW1iZXIpKTtcbiAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0dsb2JhbF9hdHRyaWJ1dGVzL3RhYmluZGV4XG4gICAgICAgICAgICAvLyAwID0gZm9jdXNhYmxlIGFuZCByZWFjaGFibGVcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXNfMSA9IG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlc18xKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc18xW2F0dHJpYnV0ZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJzbGlkZXJcIik7XG4gICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsIG9wdGlvbnMub3J0ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCIpO1xuICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVMb3dlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGFuZGxlTnVtYmVyID09PSBvcHRpb25zLmhhbmRsZXMgLSAxKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVVcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luLmhhbmRsZSA9IGhhbmRsZTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICB9XG4gICAgLy8gSW5zZXJ0IG5vZGVzIGZvciBjb25uZWN0IGVsZW1lbnRzXG4gICAgZnVuY3Rpb24gYWRkQ29ubmVjdChiYXNlLCBhZGQpIHtcbiAgICAgICAgaWYgKCFhZGQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0KTtcbiAgICB9XG4gICAgLy8gQWRkIGhhbmRsZXMgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgIGZ1bmN0aW9uIGFkZEVsZW1lbnRzKGNvbm5lY3RPcHRpb25zLCBiYXNlKSB7XG4gICAgICAgIHZhciBjb25uZWN0QmFzZSA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdHMpO1xuICAgICAgICBzY29wZV9IYW5kbGVzID0gW107XG4gICAgICAgIHNjb3BlX0Nvbm5lY3RzID0gW107XG4gICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbMF0pKTtcbiAgICAgICAgLy8gWzo6OjpPPT09PU89PT09Tz09PT1dXG4gICAgICAgIC8vIGNvbm5lY3RPcHRpb25zID0gWzAsIDEsIDEsIDFdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEtlZXAgYSBsaXN0IG9mIGFsbCBhZGRlZCBoYW5kbGVzLlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5wdXNoKGFkZE9yaWdpbihiYXNlLCBpKSk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzW2ldID0gaTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbaSArIDFdKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6ZSBhIHNpbmdsZSBzbGlkZXIuXG4gICAgZnVuY3Rpb24gYWRkU2xpZGVyKGFkZFRhcmdldCkge1xuICAgICAgICAvLyBBcHBseSBjbGFzc2VzIGFuZCBkYXRhIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcmdldCk7XG4gICAgICAgIGlmIChvcHRpb25zLmRpciA9PT0gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMubHRyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnJ0bCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMub3J0ID09PSAwKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ob3Jpem9udGFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZlcnRpY2FsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGV4dERpcmVjdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoYWRkVGFyZ2V0KS5kaXJlY3Rpb247XG4gICAgICAgIGlmICh0ZXh0RGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uUnRsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25MdHIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuYmFzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFRvb2x0aXAoaGFuZGxlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLnRvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGhhbmRsZS5maXJzdENoaWxkLCBvcHRpb25zLmNzc0NsYXNzZXMudG9vbHRpcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU2xpZGVyRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiBzY29wZV9UYXJnZXQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICAgIC8vIERpc2FibGUgdGhlIHNsaWRlciBkcmFnZ2luZyBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgZnVuY3Rpb24gaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZU9yaWdpbi5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzYWJsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgaWYgKGhhbmRsZU51bWJlciAhPT0gbnVsbCAmJiBoYW5kbGVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLmhhbmRsZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjb3BlX1RhcmdldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmhhbmRsZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVuYWJsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgaWYgKGhhbmRsZU51bWJlciAhPT0gbnVsbCAmJiBoYW5kbGVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLmhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICBzY29wZV9Ub29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCh0b29sdGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGUgdG9vbHRpcHMgb3B0aW9uIGlzIGEgc2hvcnRoYW5kIGZvciB1c2luZyB0aGUgJ3VwZGF0ZScgZXZlbnQuXG4gICAgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XG4gICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgIC8vIFRvb2x0aXBzIGFyZSBhZGRlZCB3aXRoIG9wdGlvbnMudG9vbHRpcHMgaW4gb3JpZ2luYWwgb3JkZXIuXG4gICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gc2NvcGVfSGFuZGxlcy5tYXAoYWRkVG9vbHRpcCk7XG4gICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkKSB7XG4gICAgICAgICAgICBpZiAoIXNjb3BlX1Rvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0udG8odW5lbmNvZGVkW2hhbmRsZU51bWJlcl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFyaWEoKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCwgdGFwLCBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBBcmlhIFZhbHVlcyBmb3IgYWxsIGhhbmRsZXMsIGFzIGEgY2hhbmdlIGluIG9uZSBjaGFuZ2VzIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgdGhlIG5leHQuXG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBtYXggPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDEwMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgLy8gRm9ybWF0dGVkIHZhbHVlIGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBTdHJpbmcob3B0aW9ucy5hcmlhRm9ybWF0LnRvKHVuZW5jb2RlZFtpbmRleF0pKTtcbiAgICAgICAgICAgICAgICAvLyBNYXAgdG8gc2xpZGVyIHJhbmdlIHZhbHVlc1xuICAgICAgICAgICAgICAgIG1pbiA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtaW4pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgbWF4ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1heCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICBub3cgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobm93KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWluXCIsIG1pbik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIiwgbWF4KTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW5vd1wiLCBub3cpO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0R3JvdXAocGlwcykge1xuICAgICAgICAvLyBVc2UgdGhlIHJhbmdlLlxuICAgICAgICBpZiAocGlwcy5tb2RlID09PSBQaXBzTW9kZS5SYW5nZSB8fCBwaXBzLm1vZGUgPT09IFBpcHNNb2RlLlN0ZXBzKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0ueFZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGlwcy5tb2RlID09PSBQaXBzTW9kZS5Db3VudCkge1xuICAgICAgICAgICAgaWYgKHBpcHMudmFsdWVzIDwgMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd2YWx1ZXMnICg+PSAyKSByZXF1aXJlZCBmb3IgbW9kZSAnY291bnQnLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERpdmlkZSAwIC0gMTAwIGluICdjb3VudCcgcGFydHMuXG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBwaXBzLnZhbHVlcyAtIDE7XG4gICAgICAgICAgICB2YXIgc3ByZWFkID0gMTAwIC8gaW50ZXJ2YWw7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgICAgICAvLyBMaXN0IHRoZXNlIHBhcnRzIGFuZCBoYXZlIHRoZW0gaGFuZGxlZCBhcyAncG9zaXRpb25zJy5cbiAgICAgICAgICAgIHdoaWxlIChpbnRlcnZhbC0tKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2ludGVydmFsXSA9IGludGVydmFsICogc3ByZWFkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVzLnB1c2goMTAwKTtcbiAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGlwcy5tb2RlID09PSBQaXBzTW9kZS5Qb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIE1hcCBhbGwgcGVyY2VudGFnZXMgdG8gb24tcmFuZ2UgdmFsdWVzLlxuICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UocGlwcy52YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gUGlwc01vZGUuVmFsdWVzKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgbXVzdCBiZSBzdGVwcGVkLCBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwZXJjZW50YWdlIGZpcnN0LlxuICAgICAgICAgICAgaWYgKHBpcHMuc3RlcHBlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gcGVyY2VudGFnZSwgYXBwbHkgc3RlcCwgcmV0dXJuIHRvIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAoc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh2YWx1ZSkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2FuIHNpbXBseSB1c2UgdGhlIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107IC8vIHBpcHMubW9kZSA9IG5ldmVyXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hcFRvUmFuZ2UodmFsdWVzLCBzdGVwcGVkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzdGVwcGVkID8gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNwcmVhZChwaXBzKSB7XG4gICAgICAgIGZ1bmN0aW9uIHNhZmVJbmNyZW1lbnQodmFsdWUsIGluY3JlbWVudCkge1xuICAgICAgICAgICAgLy8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgdmFyaWFuY2UgYnkgZHJvcHBpbmcgdGhlIHNtYWxsZXN0IGRlY2ltYWwgcGxhY2VzLlxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcigodmFsdWUgKyBpbmNyZW1lbnQpLnRvRml4ZWQoNykpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBncm91cCA9IGdldEdyb3VwKHBpcHMpO1xuICAgICAgICB2YXIgaW5kZXhlcyA9IHt9O1xuICAgICAgICB2YXIgZmlyc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgdmFyIGxhc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFtzY29wZV9TcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaWdub3JlRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlnbm9yZUxhc3QgPSBmYWxzZTtcbiAgICAgICAgdmFyIHByZXZQY3QgPSAwO1xuICAgICAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBncm91cCwgc29ydCBpdCBhbmQgZmlsdGVyIGF3YXkgYWxsIGR1cGxpY2F0ZXMuXG4gICAgICAgIGdyb3VwID0gdW5pcXVlKGdyb3VwLnNsaWNlKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KSk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmFuZ2Ugc3RhcnRzIHdpdGggdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgIGlmIChncm91cFswXSAhPT0gZmlyc3RJblJhbmdlKSB7XG4gICAgICAgICAgICBncm91cC51bnNoaWZ0KGZpcnN0SW5SYW5nZSk7XG4gICAgICAgICAgICBpZ25vcmVGaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGlrZXdpc2UgZm9yIHRoZSBsYXN0IG9uZS5cbiAgICAgICAgaWYgKGdyb3VwW2dyb3VwLmxlbmd0aCAtIDFdICE9PSBsYXN0SW5SYW5nZSkge1xuICAgICAgICAgICAgZ3JvdXAucHVzaChsYXN0SW5SYW5nZSk7XG4gICAgICAgICAgICBpZ25vcmVMYXN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50LCBpbmRleCkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBsb3dlciArIHVwcGVyIHBvc2l0aW9ucy5cbiAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgcTtcbiAgICAgICAgICAgIHZhciBsb3cgPSBjdXJyZW50O1xuICAgICAgICAgICAgdmFyIGhpZ2ggPSBncm91cFtpbmRleCArIDFdO1xuICAgICAgICAgICAgdmFyIG5ld1BjdDtcbiAgICAgICAgICAgIHZhciBwY3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgdmFyIHBjdFBvcztcbiAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICAgICAgdmFyIHJlYWxTdGVwcztcbiAgICAgICAgICAgIHZhciBzdGVwU2l6ZTtcbiAgICAgICAgICAgIHZhciBpc1N0ZXBzID0gcGlwcy5tb2RlID09PSBQaXBzTW9kZS5TdGVwcztcbiAgICAgICAgICAgIC8vIFdoZW4gdXNpbmcgJ3N0ZXBzJyBtb2RlLCB1c2UgdGhlIHByb3ZpZGVkIHN0ZXBzLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdsbCBzdGVwIG9uIHRvIHRoZSBuZXh0IHN1YnJhbmdlLlxuICAgICAgICAgICAgaWYgKGlzU3RlcHMpIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0ueE51bVN0ZXBzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSAnZnVsbCcgc3RlcC5cbiAgICAgICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgICAgIHN0ZXAgPSBoaWdoIC0gbG93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgaGlnaCBpcyB1bmRlZmluZWQgd2UgYXJlIGF0IHRoZSBsYXN0IHN1YnJhbmdlLiBNYWtlIHN1cmUgaXQgaXRlcmF0ZXMgb25jZSAoIzEwODgpXG4gICAgICAgICAgICBpZiAoaGlnaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaGlnaCA9IGxvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBzdGVwIGlzbid0IDAsIHdoaWNoIHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AgKCM2NTQpXG4gICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgIC8vIEZpbmQgYWxsIHN0ZXBzIGluIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpID0gc2FmZUluY3JlbWVudChpLCBzdGVwKSkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcGVyY2VudGFnZSB2YWx1ZSBmb3IgdGhlIGN1cnJlbnQgc3RlcCxcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNpemUgZm9yIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBuZXdQY3QgPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKGkpO1xuICAgICAgICAgICAgICAgIHBjdERpZmZlcmVuY2UgPSBuZXdQY3QgLSBwcmV2UGN0O1xuICAgICAgICAgICAgICAgIHN0ZXBzID0gcGN0RGlmZmVyZW5jZSAvIChwaXBzLmRlbnNpdHkgfHwgMSk7XG4gICAgICAgICAgICAgICAgcmVhbFN0ZXBzID0gTWF0aC5yb3VuZChzdGVwcyk7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyByYXRpbyByZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgcGVyY2VudGFnZS1zcGFjZSBhIHBvaW50IGluZGljYXRlcy5cbiAgICAgICAgICAgICAgICAvLyBGb3IgYSBkZW5zaXR5IDEgdGhlIHBvaW50cy9wZXJjZW50YWdlID0gMS4gRm9yIGRlbnNpdHkgMiwgdGhhdCBwZXJjZW50YWdlIG5lZWRzIHRvIGJlIHJlLWRpdmlkZWQuXG4gICAgICAgICAgICAgICAgLy8gUm91bmQgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IHRvIGFuIGV2ZW4gbnVtYmVyLCB0aGVuIGRpdmlkZSBieSB0d29cbiAgICAgICAgICAgICAgICAvLyB0byBzcHJlYWQgdGhlIG9mZnNldCBvbiBib3RoIHNpZGVzIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICAgICAgICBzdGVwU2l6ZSA9IHBjdERpZmZlcmVuY2UgLyByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgLy8gRGl2aWRlIGFsbCBwb2ludHMgZXZlbmx5LCBhZGRpbmcgdGhlIGNvcnJlY3QgbnVtYmVyIHRvIHRoaXMgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgLy8gUnVuIHVwIHRvIDw9IHNvIHRoYXQgMTAwJSBnZXRzIGEgcG9pbnQsIGV2ZW50IGlmIGlnbm9yZUxhc3QgaXMgc2V0LlxuICAgICAgICAgICAgICAgIGZvciAocSA9IDE7IHEgPD0gcmVhbFN0ZXBzOyBxICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJhdGlvIGJldHdlZW4gdGhlIHJvdW5kZWQgdmFsdWUgYW5kIHRoZSBhY3R1YWwgc2l6ZSBtaWdodCBiZSB+MSUgb2ZmLlxuICAgICAgICAgICAgICAgICAgICAvLyBDb3JyZWN0IHRoZSBwZXJjZW50YWdlIG9mZnNldCBieSB0aGUgbnVtYmVyIG9mIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAvLyBwZXIgc3VicmFuZ2UuIGRlbnNpdHkgPSAxIHdpbGwgcmVzdWx0IGluIDEwMCBwb2ludHMgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGZ1bGwgcmFuZ2UsIDIgZm9yIDUwLCA0IGZvciAyNSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICBwY3RQb3MgPSBwcmV2UGN0ICsgcSAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgICAgICBpbmRleGVzW3BjdFBvcy50b0ZpeGVkKDUpXSA9IFtzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcocGN0UG9zKSwgMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB0aGUgcG9pbnQgdHlwZS5cbiAgICAgICAgICAgICAgICB0eXBlID0gZ3JvdXAuaW5kZXhPZihpKSA+IC0xID8gUGlwc1R5cGUuTGFyZ2VWYWx1ZSA6IGlzU3RlcHMgPyBQaXBzVHlwZS5TbWFsbFZhbHVlIDogUGlwc1R5cGUuTm9WYWx1ZTtcbiAgICAgICAgICAgICAgICAvLyBFbmZvcmNlIHRoZSAnaWdub3JlRmlyc3QnIG9wdGlvbiBieSBvdmVyd3JpdGluZyB0aGUgdHlwZSBmb3IgMC5cbiAgICAgICAgICAgICAgICBpZiAoIWluZGV4ICYmIGlnbm9yZUZpcnN0ICYmIGkgIT09IGhpZ2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghKGkgPT09IGhpZ2ggJiYgaWdub3JlTGFzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgJ3R5cGUnIG9mIHRoaXMgcG9pbnQuIDAgPSBwbGFpbiwgMSA9IHJlYWwgdmFsdWUsIDIgPSBzdGVwIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICBpbmRleGVzW25ld1BjdC50b0ZpeGVkKDUpXSA9IFtpLCB0eXBlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvdW50LlxuICAgICAgICAgICAgICAgIHByZXZQY3QgPSBuZXdQY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlckZ1bmMsIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciB2YWx1ZVNpemVDbGFzc2VzID0gKF9hID0ge30sXG4gICAgICAgICAgICBfYVtQaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICBfYVtQaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxcbiAgICAgICAgICAgIF9hW1BpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTGFyZ2UsXG4gICAgICAgICAgICBfYVtQaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVN1YixcbiAgICAgICAgICAgIF9hKTtcbiAgICAgICAgdmFyIG1hcmtlclNpemVDbGFzc2VzID0gKF9iID0ge30sXG4gICAgICAgICAgICBfYltQaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICBfYltQaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJOb3JtYWwsXG4gICAgICAgICAgICBfYltQaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJMYXJnZSxcbiAgICAgICAgICAgIF9iW1BpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclN1YixcbiAgICAgICAgICAgIF9iKTtcbiAgICAgICAgdmFyIHZhbHVlT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVZlcnRpY2FsXTtcbiAgICAgICAgdmFyIG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMubWFya2VySG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclZlcnRpY2FsXTtcbiAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHMpO1xuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLm9ydCA9PT0gMCA/IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzSG9yaXpvbnRhbCA6IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzVmVydGljYWwpO1xuICAgICAgICBmdW5jdGlvbiBnZXRDbGFzc2VzKHR5cGUsIHNvdXJjZSkge1xuICAgICAgICAgICAgdmFyIGEgPSBzb3VyY2UgPT09IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZTtcbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbkNsYXNzZXMgPSBhID8gdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgOiBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXM7XG4gICAgICAgICAgICB2YXIgc2l6ZUNsYXNzZXMgPSBhID8gdmFsdWVTaXplQ2xhc3NlcyA6IG1hcmtlclNpemVDbGFzc2VzO1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIFwiIFwiICsgb3JpZW50YXRpb25DbGFzc2VzW29wdGlvbnMub3J0XSArIFwiIFwiICsgc2l6ZUNsYXNzZXNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkU3ByZWFkKG9mZnNldCwgdmFsdWUsIHR5cGUpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgZnVuY3Rpb24sIGlmIGl0IGlzIHNldC5cbiAgICAgICAgICAgIHR5cGUgPSBmaWx0ZXJGdW5jID8gZmlsdGVyRnVuYyh2YWx1ZSwgdHlwZSkgOiB0eXBlO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFBpcHNUeXBlLk5vbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgYSBtYXJrZXIgZm9yIGV2ZXJ5IHBvaW50XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlcik7XG4gICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAvLyBWYWx1ZXMgYXJlIG9ubHkgYXBwZW5kZWQgZm9yIHBvaW50cyBtYXJrZWQgJzEnIG9yICcyJy5cbiAgICAgICAgICAgIGlmICh0eXBlID4gUGlwc1R5cGUuTm9WYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoZm9ybWF0dGVyLnRvKHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGFsbCBwb2ludHMuXG4gICAgICAgIE9iamVjdC5rZXlzKHNwcmVhZCkuZm9yRWFjaChmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICBhZGRTcHJlYWQob2Zmc2V0LCBzcHJlYWRbb2Zmc2V0XVswXSwgc3ByZWFkW29mZnNldF1bMV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVBpcHMoKSB7XG4gICAgICAgIGlmIChzY29wZV9QaXBzKSB7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50KHNjb3BlX1BpcHMpO1xuICAgICAgICAgICAgc2NvcGVfUGlwcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGlwcyhwaXBzKSB7XG4gICAgICAgIC8vIEZpeCAjNjY5XG4gICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgdmFyIHNwcmVhZCA9IGdlbmVyYXRlU3ByZWFkKHBpcHMpO1xuICAgICAgICB2YXIgZmlsdGVyID0gcGlwcy5maWx0ZXI7XG4gICAgICAgIHZhciBmb3JtYXQgPSBwaXBzLmZvcm1hdCB8fCB7XG4gICAgICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhNYXRoLnJvdW5kKHZhbHVlKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBzY29wZV9QaXBzID0gc2NvcGVfVGFyZ2V0LmFwcGVuZENoaWxkKGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXIsIGZvcm1hdCkpO1xuICAgICAgICByZXR1cm4gc2NvcGVfUGlwcztcbiAgICB9XG4gICAgLy8gU2hvcnRoYW5kIGZvciBiYXNlIGRpbWVuc2lvbnMuXG4gICAgZnVuY3Rpb24gYmFzZVNpemUoKSB7XG4gICAgICAgIHZhciByZWN0ID0gc2NvcGVfQmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGFsdCA9IChcIm9mZnNldFwiICsgW1wiV2lkdGhcIiwgXCJIZWlnaHRcIl1bb3B0aW9ucy5vcnRdKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMub3J0ID09PSAwID8gcmVjdC53aWR0aCB8fCBzY29wZV9CYXNlW2FsdF0gOiByZWN0LmhlaWdodCB8fCBzY29wZV9CYXNlW2FsdF07XG4gICAgfVxuICAgIC8vIEhhbmRsZXIgZm9yIGF0dGFjaGluZyBldmVudHMgdHJvdWdoIGEgcHJveHkuXG4gICAgZnVuY3Rpb24gYXR0YWNoRXZlbnQoZXZlbnRzLCBlbGVtZW50LCBjYWxsYmFjaywgZGF0YSkge1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvICdmaWx0ZXInIGV2ZW50cyB0byB0aGUgc2xpZGVyLlxuICAgICAgICAvLyBlbGVtZW50IGlzIGEgbm9kZSwgbm90IGEgbm9kZUxpc3RcbiAgICAgICAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGUgPSBmaXhFdmVudChldmVudCwgZGF0YS5wYWdlT2Zmc2V0LCBkYXRhLnRhcmdldCB8fCBlbGVtZW50KTtcbiAgICAgICAgICAgIC8vIGZpeEV2ZW50IHJldHVybnMgZmFsc2UgaWYgdGhpcyBldmVudCBoYXMgYSBkaWZmZXJlbnQgdGFyZ2V0XG4gICAgICAgICAgICAvLyB3aGVuIGhhbmRsaW5nIChtdWx0aS0pIHRvdWNoIGV2ZW50cztcbiAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRvTm90UmVqZWN0IGlzIHBhc3NlZCBieSBhbGwgZW5kIGV2ZW50cyB0byBtYWtlIHN1cmUgcmVsZWFzZWQgdG91Y2hlc1xuICAgICAgICAgICAgLy8gYXJlIG5vdCByZWplY3RlZCwgbGVhdmluZyB0aGUgc2xpZGVyIFwic3R1Y2tcIiB0byB0aGUgY3Vyc29yO1xuICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3AgaWYgYW4gYWN0aXZlICd0YXAnIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLlxuICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICBpZiAoZXZlbnRzID09PSBhY3Rpb25zLnN0YXJ0ICYmIGUuYnV0dG9ucyAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9ucyA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICBpZiAoZGF0YS5ob3ZlciAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAnc3VwcG9ydHNQYXNzaXZlJyBpcyBvbmx5IHRydWUgaWYgYSBicm93c2VyIGFsc28gc3VwcG9ydHMgdG91Y2gtYWN0aW9uOiBub25lIGluIENTUy5cbiAgICAgICAgICAgIC8vIGlPUyBzYWZhcmkgZG9lcyBub3QsIHNvIGl0IGRvZXNuJ3QgZ2V0IHRvIGJlbmVmaXQgZnJvbSBwYXNzaXZlIHNjcm9sbGluZy4gaU9TIGRvZXMgc3VwcG9ydFxuICAgICAgICAgICAgLy8gdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb24sIGJ1dCB0aGF0IGFsbG93cyBwYW5uaW5nLCB3aGljaCBicmVha3NcbiAgICAgICAgICAgIC8vIHNsaWRlcnMgYWZ0ZXIgem9vbWluZy9vbiBub24tcmVzcG9uc2l2ZSBwYWdlcy5cbiAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzMzExMlxuICAgICAgICAgICAgaWYgKCFzdXBwb3J0c1Bhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLmNhbGNQb2ludCA9IGUucG9pbnRzW29wdGlvbnMub3J0XTtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgZXZlbnQgWyBhbmQgYWRkaXRpb25hbCBkYXRhIF0uXG4gICAgICAgICAgICBjYWxsYmFjayhlLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1ldGhvZHMgPSBbXTtcbiAgICAgICAgLy8gQmluZCBhIGNsb3N1cmUgb24gdGhlIHRhcmdldCBmb3IgZXZlcnkgZXZlbnQgdHlwZS5cbiAgICAgICAgZXZlbnRzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG1ldGhvZCwgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XG4gICAgICAgICAgICBtZXRob2RzLnB1c2goW2V2ZW50TmFtZSwgbWV0aG9kXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWV0aG9kcztcbiAgICB9XG4gICAgLy8gUHJvdmlkZSBhIGNsZWFuIGV2ZW50IHdpdGggc3RhbmRhcmRpemVkIG9mZnNldCB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gZml4RXZlbnQoZSwgcGFnZU9mZnNldCwgZXZlbnRUYXJnZXQpIHtcbiAgICAgICAgLy8gRmlsdGVyIHRoZSBldmVudCB0byByZWdpc3RlciB0aGUgdHlwZSwgd2hpY2ggY2FuIGJlXG4gICAgICAgIC8vIHRvdWNoLCBtb3VzZSBvciBwb2ludGVyLiBPZmZzZXQgY2hhbmdlcyBuZWVkIHRvIGJlXG4gICAgICAgIC8vIG1hZGUgb24gYW4gZXZlbnQgc3BlY2lmaWMgYmFzaXMuXG4gICAgICAgIHZhciB0b3VjaCA9IGUudHlwZS5pbmRleE9mKFwidG91Y2hcIikgPT09IDA7XG4gICAgICAgIHZhciBtb3VzZSA9IGUudHlwZS5pbmRleE9mKFwibW91c2VcIikgPT09IDA7XG4gICAgICAgIHZhciBwb2ludGVyID0gZS50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpID09PSAwO1xuICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgLy8gSUUxMCBpbXBsZW1lbnRlZCBwb2ludGVyIGV2ZW50cyB3aXRoIGEgcHJlZml4O1xuICAgICAgICBpZiAoZS50eXBlLmluZGV4T2YoXCJNU1BvaW50ZXJcIikgPT09IDApIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVycm9uZW91cyBldmVudHMgc2VlbSB0byBiZSBwYXNzZWQgaW4gb2NjYXNpb25hbGx5IG9uIGlPUy9pUGFkT1MgYWZ0ZXIgdXNlciBmaW5pc2hlcyBpbnRlcmFjdGluZyB3aXRoXG4gICAgICAgIC8vIHRoZSBzbGlkZXIuIFRoZXkgYXBwZWFyIHRvIGJlIG9mIHR5cGUgTW91c2VFdmVudCwgeWV0IHRoZXkgZG9uJ3QgaGF2ZSB1c3VhbCBwcm9wZXJ0aWVzIHNldC4gSWdub3JlXG4gICAgICAgIC8vIGV2ZW50cyB0aGF0IGhhdmUgbm8gdG91Y2hlcyBvciBidXR0b25zIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiAoIzEwNTcsICMxMDc5LCAjMTA5NSlcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiAmJiAhZS5idXR0b25zICYmICFlLnRvdWNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgb25seSB0aGluZyBvbmUgaGFuZGxlIHNob3VsZCBiZSBjb25jZXJuZWQgYWJvdXQgaXMgdGhlIHRvdWNoZXMgdGhhdCBvcmlnaW5hdGVkIG9uIHRvcCBvZiBpdC5cbiAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgYSB0b3VjaCBvcmlnaW5hdGVkIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICB2YXIgaXNUb3VjaE9uVGFyZ2V0ID0gZnVuY3Rpb24gKGNoZWNrVG91Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gY2hlY2tUb3VjaC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0YXJnZXQgPT09IGV2ZW50VGFyZ2V0IHx8XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmNvbnRhaW5zKHRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGUuY29tcG9zZWQgJiYgZS5jb21wb3NlZFBhdGgoKS5zaGlmdCgpID09PSBldmVudFRhcmdldCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIEluIHRoZSBjYXNlIG9mIHRvdWNoc3RhcnQgZXZlbnRzLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBzdGlsbCBubyBtb3JlIHRoYW4gb25lXG4gICAgICAgICAgICAvLyB0b3VjaCBvbiB0aGUgdGFyZ2V0IHNvIHdlIGxvb2sgYW1vbmdzdCBhbGwgdG91Y2hlcy5cbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZS50b3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdCBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgdG91Y2ggcGVyIGhhbmRsZS5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgb3RoZXIgY2FzZXMsIGZpbmQgb24gY2hhbmdlZFRvdWNoZXMgaXMgZW5vdWdoLlxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaCA9IEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAvLyBDYW5jZWwgaWYgdGhlIHRhcmdldCB0b3VjaCBoYXMgbm90IG1vdmVkLlxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0VG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2gucGFnZVg7XG4gICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0IHx8IGdldFBhZ2VPZmZzZXQoc2NvcGVfRG9jdW1lbnQpO1xuICAgICAgICBpZiAobW91c2UgfHwgcG9pbnRlcikge1xuICAgICAgICAgICAgeCA9IGUuY2xpZW50WCArIHBhZ2VPZmZzZXQueDtcbiAgICAgICAgICAgIHkgPSBlLmNsaWVudFkgKyBwYWdlT2Zmc2V0Lnk7XG4gICAgICAgIH1cbiAgICAgICAgZS5wYWdlT2Zmc2V0ID0gcGFnZU9mZnNldDtcbiAgICAgICAgZS5wb2ludHMgPSBbeCwgeV07XG4gICAgICAgIGUuY3Vyc29yID0gbW91c2UgfHwgcG9pbnRlcjsgLy8gRml4ICM0MzVcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIC8vIFRyYW5zbGF0ZSBhIGNvb3JkaW5hdGUgaW4gdGhlIGRvY3VtZW50IHRvIGEgcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgZnVuY3Rpb24gY2FsY1BvaW50VG9QZXJjZW50YWdlKGNhbGNQb2ludCkge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBjYWxjUG9pbnQgLSBvZmZzZXQoc2NvcGVfQmFzZSwgb3B0aW9ucy5vcnQpO1xuICAgICAgICB2YXIgcHJvcG9zYWwgPSAobG9jYXRpb24gKiAxMDApIC8gYmFzZVNpemUoKTtcbiAgICAgICAgLy8gQ2xhbXAgcHJvcG9zYWwgYmV0d2VlbiAwJSBhbmQgMTAwJVxuICAgICAgICAvLyBPdXQtb2YtYm91bmQgY29vcmRpbmF0ZXMgbWF5IG9jY3VyIHdoZW4gLm5vVWktYmFzZSBwc2V1ZG8tZWxlbWVudHNcbiAgICAgICAgLy8gYXJlIHVzZWQgKGUuZy4gY29udGFpbmVkIGhhbmRsZXMgZmVhdHVyZSlcbiAgICAgICAgcHJvcG9zYWwgPSBsaW1pdChwcm9wb3NhbCk7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIHByb3Bvc2FsIDogcHJvcG9zYWw7XG4gICAgfVxuICAgIC8vIEZpbmQgaGFuZGxlIGNsb3Nlc3QgdG8gYSBjZXJ0YWluIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RIYW5kbGUoY2xpY2tlZFBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBzbWFsbGVzdERpZmZlcmVuY2UgPSAxMDA7XG4gICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBmYWxzZTtcbiAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAvLyBEaXNhYmxlZCBoYW5kbGVzIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICBpZiAoaXNIYW5kbGVEaXNhYmxlZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9IE1hdGguYWJzKGhhbmRsZVBvc2l0aW9uIC0gY2xpY2tlZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIC8vIEluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgIHZhciBjbGlja0F0RWRnZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9PT0gMTAwICYmIHNtYWxsZXN0RGlmZmVyZW5jZSA9PT0gMTAwO1xuICAgICAgICAgICAgLy8gRGlmZmVyZW5jZSB3aXRoIHRoaXMgaGFuZGxlIGlzIHNtYWxsZXIgdGhhbiB0aGUgcHJldmlvdXNseSBjaGVja2VkIGhhbmRsZVxuICAgICAgICAgICAgdmFyIGlzQ2xvc2VyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDwgc21hbGxlc3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgdmFyIGlzQ2xvc2VyQWZ0ZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPD0gc21hbGxlc3REaWZmZXJlbmNlICYmIGNsaWNrZWRQb3NpdGlvbiA+IGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGlzQ2xvc2VyIHx8IGlzQ2xvc2VyQWZ0ZXIgfHwgY2xpY2tBdEVkZ2UpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgICBzbWFsbGVzdERpZmZlcmVuY2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlTnVtYmVyO1xuICAgIH1cbiAgICAvLyBGaXJlICdlbmQnIHdoZW4gYSBtb3VzZSBvciBwZW4gbGVhdmVzIHRoZSBkb2N1bWVudC5cbiAgICBmdW5jdGlvbiBkb2N1bWVudExlYXZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3V0XCIgJiZcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJIVE1MXCIgJiZcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGUgbW92ZW1lbnQgb24gZG9jdW1lbnQgZm9yIGhhbmRsZSBhbmQgcmFuZ2UgZHJhZy5cbiAgICBmdW5jdGlvbiBldmVudE1vdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgLy8gRml4ICM0OThcbiAgICAgICAgLy8gQ2hlY2sgdmFsdWUgb2YgLmJ1dHRvbnMgaW4gJ3N0YXJ0JyB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpbiBJRTEwIG1vYmlsZSAoZGF0YS5idXR0b25zUHJvcGVydHkpLlxuICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzkyNzAwNS9tb2JpbGUtaWUxMC13aW5kb3dzLXBob25lLWJ1dHRvbnMtcHJvcGVydHktb2YtcG9pbnRlcm1vdmUtZXZlbnQtYWx3YXlzLXplcm9cbiAgICAgICAgLy8gSUU5IGhhcyAuYnV0dG9ucyBhbmQgLndoaWNoIHplcm8gb24gbW91c2Vtb3ZlLlxuICAgICAgICAvLyBGaXJlZm94IGJyZWFrcyB0aGUgc3BlYyBNRE4gZGVmaW5lcy5cbiAgICAgICAgaWYgKG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDlcIikgPT09IC0xICYmIGV2ZW50LmJ1dHRvbnMgPT09IDAgJiYgZGF0YS5idXR0b25zUHJvcGVydHkgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIG1vdmluZyB1cCBvciBkb3duXG4gICAgICAgIHZhciBtb3ZlbWVudCA9IChvcHRpb25zLmRpciA/IC0xIDogMSkgKiAoZXZlbnQuY2FsY1BvaW50IC0gZGF0YS5zdGFydENhbGNQb2ludCk7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIG1vdmVtZW50IGludG8gYSBwZXJjZW50YWdlIG9mIHRoZSBzbGlkZXIgd2lkdGgvaGVpZ2h0XG4gICAgICAgIHZhciBwcm9wb3NhbCA9IChtb3ZlbWVudCAqIDEwMCkgLyBkYXRhLmJhc2VTaXplO1xuICAgICAgICBtb3ZlSGFuZGxlcyhtb3ZlbWVudCA+IDAsIHByb3Bvc2FsLCBkYXRhLmxvY2F0aW9ucywgZGF0YS5oYW5kbGVOdW1iZXJzLCBkYXRhLmNvbm5lY3QpO1xuICAgIH1cbiAgICAvLyBVbmJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQsIGNhbGwgY2FsbGJhY2tzLlxuICAgIGZ1bmN0aW9uIGV2ZW50RW5kKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIC8vIFRoZSBoYW5kbGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSwgc28gcmVtb3ZlIHRoZSBjbGFzcy5cbiAgICAgICAgaWYgKGRhdGEuaGFuZGxlKSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhkYXRhLmhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmJpbmQgdGhlIG1vdmUgYW5kIGVuZCBldmVudHMsIHdoaWNoIGFyZSBhZGRlZCBvbiAnc3RhcnQnLlxuICAgICAgICBkYXRhLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBzY29wZV9Eb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjWzBdLCBjWzFdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgY3Vyc29yIHN0eWxlcyBhbmQgdGV4dC1zZWxlY3Rpb24gZXZlbnRzIGJvdW5kIHRvIHRoZSBib2R5LlxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZXZlbnRzLnNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJlbmRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQuXG4gICAgZnVuY3Rpb24gZXZlbnRTdGFydChldmVudCwgZGF0YSkge1xuICAgICAgICAvLyBJZ25vcmUgZXZlbnQgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLnNvbWUoaXNIYW5kbGVEaXNhYmxlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbZGF0YS5oYW5kbGVOdW1iZXJzWzBdXTtcbiAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZU9yaWdpbi5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCArPSAxO1xuICAgICAgICAgICAgLy8gTWFyayB0aGUgaGFuZGxlIGFzICdhY3RpdmUnIHNvIGl0IGNhbiBiZSBzdHlsZWQuXG4gICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEEgZHJhZyBzaG91bGQgbmV2ZXIgcHJvcGFnYXRlIHVwIHRvIHRoZSAndGFwJyBldmVudC5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIFJlY29yZCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cy5cbiAgICAgICAgdmFyIG1vdmVFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudE1vdmUsIHtcbiAgICAgICAgICAgIC8vIFRoZSBldmVudCB0YXJnZXQgaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwcm9wYWdhdGUgdGhlIG9yaWdpbmFsIG9uZSBzbyB0aGF0IHdlIGtlZXBcbiAgICAgICAgICAgIC8vIHJlbHlpbmcgb24gaXQgdG8gZXh0cmFjdCB0YXJnZXQgdG91Y2hlcy5cbiAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICBjb25uZWN0OiBkYXRhLmNvbm5lY3QsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgIHN0YXJ0Q2FsY1BvaW50OiBldmVudC5jYWxjUG9pbnQsXG4gICAgICAgICAgICBiYXNlU2l6ZTogYmFzZVNpemUoKSxcbiAgICAgICAgICAgIHBhZ2VPZmZzZXQ6IGV2ZW50LnBhZ2VPZmZzZXQsXG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICBidXR0b25zUHJvcGVydHk6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICBsb2NhdGlvbnM6IHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGVuZEV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5lbmQsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRFbmQsIHtcbiAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG91dEV2ZW50ID0gYXR0YWNoRXZlbnQoXCJtb3VzZW91dFwiLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50TGVhdmUsIHtcbiAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgcHVzaGVkIHRoZSBsaXN0ZW5lcnMgaW4gdGhlIGxpc3RlbmVyIGxpc3QgcmF0aGVyIHRoYW4gY3JlYXRpbmdcbiAgICAgICAgLy8gYSBuZXcgb25lIGFzIGl0IGhhcyBhbHJlYWR5IGJlZW4gcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cbiAgICAgICAgbGlzdGVuZXJzLnB1c2guYXBwbHkobGlzdGVuZXJzLCBtb3ZlRXZlbnQuY29uY2F0KGVuZEV2ZW50LCBvdXRFdmVudCkpO1xuICAgICAgICAvLyBUZXh0IHNlbGVjdGlvbiBpc24ndCBhbiBpc3N1ZSBvbiB0b3VjaCBkZXZpY2VzLFxuICAgICAgICAvLyBzbyBhZGRpbmcgY3Vyc29yIHN0eWxlcyBjYW4gYmUgc2tpcHBlZC5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgJ0knIGN1cnNvciBhbmQgZXh0ZW5kIHRoZSByYW5nZS1kcmFnIGN1cnNvci5cbiAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvcjtcbiAgICAgICAgICAgIC8vIE1hcmsgdGhlIHRhcmdldCB3aXRoIGEgZHJhZ2dpbmcgc3RhdGUuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmV2ZW50IHRleHQgc2VsZWN0aW9uIHdoZW4gZHJhZ2dpbmcgdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICAvLyBJbiBub1VpU2xpZGVyIDw9IDkuMi4wLCB0aGlzIHdhcyBoYW5kbGVkIGJ5IGNhbGxpbmcgcHJldmVudERlZmF1bHQgb24gbW91c2UvdG91Y2ggc3RhcnQvbW92ZSxcbiAgICAgICAgICAgIC8vIHdoaWNoIGlzIHNjcm9sbCBibG9ja2luZy4gVGhlIHNlbGVjdHN0YXJ0IGV2ZW50IGlzIHN1cHBvcnRlZCBieSBGaXJlRm94IHN0YXJ0aW5nIGZyb20gdmVyc2lvbiA1MixcbiAgICAgICAgICAgIC8vIG1lYW5pbmcgdGhlIG9ubHkgaG9sZG91dCBpcyBpT1MgU2FmYXJpLiBUaGlzIGRvZXNuJ3QgbWF0dGVyOiB0ZXh0IHNlbGVjdGlvbiBpc24ndCB0cmlnZ2VyZWQgdGhlcmUuXG4gICAgICAgICAgICAvLyBUaGUgJ2N1cnNvcicgZmxhZyBpcyBmYWxzZS5cbiAgICAgICAgICAgIC8vIFNlZTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2VsZWN0c3RhcnRcbiAgICAgICAgICAgIHNjb3BlX0JvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic3RhcnRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE1vdmUgY2xvc2VzdCBoYW5kbGUgdG8gdGFwcGVkIGxvY2F0aW9uLlxuICAgIGZ1bmN0aW9uIGV2ZW50VGFwKGV2ZW50KSB7XG4gICAgICAgIC8vIFRoZSB0YXAgZXZlbnQgc2hvdWxkbid0IHByb3BhZ2F0ZSB1cFxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBnZXRDbG9zZXN0SGFuZGxlKHByb3Bvc2FsKTtcbiAgICAgICAgLy8gVGFja2xlIHRoZSBjYXNlIHRoYXQgYWxsIGhhbmRsZXMgYXJlICdkaXNhYmxlZCcuXG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmxhZyB0aGUgc2xpZGVyIGFzIGl0IGlzIG5vdyBpbiBhIHRyYW5zaXRpb25hbCBzdGF0ZS5cbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0YWtlcyBhIGNvbmZpZ3VyYWJsZSBhbW91bnQgb2YgbXMgKGRlZmF1bHQgMzAwKS4gUmUtZW5hYmxlIHRoZSBzbGlkZXIgYWZ0ZXIgdGhhdC5cbiAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHByb3Bvc2FsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudFN0YXJ0KGV2ZW50LCB7IGhhbmRsZU51bWJlcnM6IFtoYW5kbGVOdW1iZXJdIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEZpcmVzIGEgJ2hvdmVyJyBldmVudCBmb3IgYSBob3ZlcmVkIG1vdXNlL3BlbiBwb3NpdGlvbi5cbiAgICBmdW5jdGlvbiBldmVudEhvdmVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICB2YXIgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHByb3Bvc2FsKTtcbiAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgaWYgKFwiaG92ZXJcIiA9PT0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlX1NlbGYsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEhhbmRsZXMga2V5ZG93biBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAvLyBEb24ndCBtb3ZlIHRoZSBkb2N1bWVudCB3aGVuIHByZXNzaW5nIGFycm93IGtleXMgb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgZnVuY3Rpb24gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSB8fCBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaG9yaXpvbnRhbEtleXMgPSBbXCJMZWZ0XCIsIFwiUmlnaHRcIl07XG4gICAgICAgIHZhciB2ZXJ0aWNhbEtleXMgPSBbXCJEb3duXCIsIFwiVXBcIl07XG4gICAgICAgIHZhciBsYXJnZVN0ZXBLZXlzID0gW1wiUGFnZURvd25cIiwgXCJQYWdlVXBcIl07XG4gICAgICAgIHZhciBlZGdlS2V5cyA9IFtcIkhvbWVcIiwgXCJFbmRcIl07XG4gICAgICAgIGlmIChvcHRpb25zLmRpciAmJiAhb3B0aW9ucy5vcnQpIHtcbiAgICAgICAgICAgIC8vIE9uIGFuIHJpZ2h0LXRvLWxlZnQgc2xpZGVyLCB0aGUgbGVmdCBhbmQgcmlnaHQga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgIGhvcml6b250YWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLm9ydCAmJiAhb3B0aW9ucy5kaXIpIHtcbiAgICAgICAgICAgIC8vIE9uIGEgdG9wLXRvLWJvdHRvbSBzbGlkZXIsIHRoZSB1cCBhbmQgZG93biBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgdmVydGljYWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIGxhcmdlU3RlcEtleXMucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0cmlwIFwiQXJyb3dcIiBmb3IgSUUgY29tcGF0aWJpbGl0eS4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXkucmVwbGFjZShcIkFycm93XCIsIFwiXCIpO1xuICAgICAgICB2YXIgaXNMYXJnZURvd24gPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMF07XG4gICAgICAgIHZhciBpc0xhcmdlVXAgPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMV07XG4gICAgICAgIHZhciBpc0Rvd24gPSBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdIHx8IGlzTGFyZ2VEb3duO1xuICAgICAgICB2YXIgaXNVcCA9IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gfHwgaXNMYXJnZVVwO1xuICAgICAgICB2YXIgaXNNaW4gPSBrZXkgPT09IGVkZ2VLZXlzWzBdO1xuICAgICAgICB2YXIgaXNNYXggPSBrZXkgPT09IGVkZ2VLZXlzWzFdO1xuICAgICAgICBpZiAoIWlzRG93biAmJiAhaXNVcCAmJiAhaXNNaW4gJiYgIWlzTWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdG87XG4gICAgICAgIGlmIChpc1VwIHx8IGlzRG93bikge1xuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRG93biA/IDAgOiAxO1xuICAgICAgICAgICAgdmFyIHN0ZXBzID0gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IHN0ZXBzW2RpcmVjdGlvbl07XG4gICAgICAgICAgICAvLyBBdCB0aGUgZWRnZSBvZiBhIHNsaWRlciwgZG8gbm90aGluZ1xuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBObyBzdGVwIHNldCwgdXNlIHRoZSBkZWZhdWx0IG9mIDEwJSBvZiB0aGUgc3ViLXJhbmdlXG4gICAgICAgICAgICBpZiAoc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0uZ2V0RGVmYXVsdFN0ZXAoc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIGlzRG93biwgb3B0aW9ucy5rZXlib2FyZERlZmF1bHRTdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xhcmdlVXAgfHwgaXNMYXJnZURvd24pIHtcbiAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRQYWdlTXVsdGlwbGllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgLy8gRGVjcmVtZW50IGZvciBkb3duIHN0ZXBzXG4gICAgICAgICAgICBzdGVwID0gKGlzRG93biA/IC0xIDogMSkgKiBzdGVwO1xuICAgICAgICAgICAgdG8gPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSArIHN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNNYXgpIHtcbiAgICAgICAgICAgIC8vIEVuZCBrZXlcbiAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsW29wdGlvbnMuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhvbWUga2V5XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgfVxuICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQXR0YWNoIGV2ZW50cyB0byBzZXZlcmFsIHNsaWRlciBwYXJ0cy5cbiAgICBmdW5jdGlvbiBiaW5kU2xpZGVyRXZlbnRzKGJlaGF2aW91cikge1xuICAgICAgICAvLyBBdHRhY2ggdGhlIHN0YW5kYXJkIGRyYWcgZXZlbnQgdG8gdGhlIGhhbmRsZXMuXG4gICAgICAgIGlmICghYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBldmVudHMgYXJlIG9ubHkgYm91bmQgdG8gdGhlIHZpc3VhbCBoYW5kbGVcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50LCBub3QgdGhlICdyZWFsJyBvcmlnaW4gZWxlbWVudC5cbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBoYW5kbGUuY2hpbGRyZW5bMF0sIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogW2luZGV4XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgdGFwIGV2ZW50IHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgaWYgKGJlaGF2aW91ci50YXApIHtcbiAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIHNjb3BlX0Jhc2UsIGV2ZW50VGFwLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZSBob3ZlciBldmVudHNcbiAgICAgICAgaWYgKGJlaGF2aW91ci5ob3Zlcikge1xuICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9CYXNlLCBldmVudEhvdmVyLCB7XG4gICAgICAgICAgICAgICAgaG92ZXI6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNYWtlIHRoZSByYW5nZSBkcmFnZ2FibGUuXG4gICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZykge1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMuZm9yRWFjaChmdW5jdGlvbiAoY29ubmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCA9PT0gZmFsc2UgfHwgaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQmVmb3JlID0gc2NvcGVfSGFuZGxlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVBZnRlciA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBldmVudEhvbGRlcnMgPSBbY29ubmVjdF07XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXNUb0RyYWcgPSBbaGFuZGxlQmVmb3JlLCBoYW5kbGVBZnRlcl07XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBbaW5kZXggLSAxLCBpbmRleF07XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoY29ubmVjdCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWdnYWJsZSk7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgcmFuZ2UgaXMgZml4ZWQsIHRoZSBlbnRpcmUgcmFuZ2UgY2FuXG4gICAgICAgICAgICAgICAgLy8gYmUgZHJhZ2dlZCBieSB0aGUgaGFuZGxlcy4gVGhlIGhhbmRsZSBpbiB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBvcmlnaW4gd2lsbCBwcm9wYWdhdGUgdGhlIHN0YXJ0IGV2ZW50IHVwd2FyZCxcbiAgICAgICAgICAgICAgICAvLyBidXQgaXQgbmVlZHMgdG8gYmUgYm91bmQgbWFudWFsbHkgb24gdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQmVmb3JlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQWZ0ZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlc1RvRHJhZyA9IHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBzY29wZV9IYW5kbGVOdW1iZXJzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgZXZlbnRIb2xkZXIsIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXM6IGhhbmRsZXNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBoYW5kbGVOdW1iZXJzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBdHRhY2ggYW4gZXZlbnQgdG8gdGhpcyBzbGlkZXIsIHBvc3NpYmx5IGluY2x1ZGluZyBhIG5hbWVzcGFjZVxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudChuYW1lc3BhY2VkRXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdID0gc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gfHwgW107XG4gICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAvLyBJZiB0aGUgZXZlbnQgYm91bmQgaXMgJ3VwZGF0ZSwnIGZpcmUgaXQgaW1tZWRpYXRlbHkgZm9yIGFsbCBoYW5kbGVzLlxuICAgICAgICBpZiAobmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc0ludGVybmFsTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhIHx8IG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHM7XG4gICAgfVxuICAgIC8vIFVuZG8gYXR0YWNobWVudCBvZiBldmVudFxuICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5hbWVzcGFjZWRFdmVudCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBuYW1lc3BhY2VkRXZlbnQgJiYgbmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50ID8gbmFtZXNwYWNlZEV2ZW50LnN1YnN0cmluZyhldmVudC5sZW5ndGgpIDogbmFtZXNwYWNlZEV2ZW50O1xuICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgICAgIHZhciB0RXZlbnQgPSBiaW5kLnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgIHZhciB0TmFtZXNwYWNlID0gYmluZC5zdWJzdHJpbmcodEV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoKCFldmVudCB8fCBldmVudCA9PT0gdEV2ZW50KSAmJiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSBkZWxldGUgcHJvdGVjdGVkIGludGVybmFsIGV2ZW50IGlmIGludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZXNwYWNlKHROYW1lc3BhY2UpIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGVfRXZlbnRzW2JpbmRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEV4dGVybmFsIGV2ZW50IGhhbmRsaW5nXG4gICAgZnVuY3Rpb24gZmlyZUV2ZW50KGV2ZW50TmFtZSwgaGFuZGxlTnVtYmVyLCB0YXApIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBzbGlkZXIgcHVibGljIEFQSSBhcyB0aGUgc2NvcGUgKCd0aGlzJylcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZiwgXG4gICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZXMgYXMgYXJyYXksIHNvIGFyZ18xW2FyZ18yXSBpcyBhbHdheXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGluZGV4LCAwIG9yIDFcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gVW4tZm9ybWF0dGVkIHNsaWRlciB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAvLyBFdmVudCBpcyBmaXJlZCBieSB0YXAsIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFwIHx8IGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gTGVmdCBvZmZzZXQgb2YgdGhlIGhhbmRsZSwgaW4gcmVsYXRpb24gdG8gdGhlIHNsaWRlclxuICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgdG8gYW4gYWNjZXNzaWJsZSBwYXJhbWV0ZXIgd2hlbiB0aGlzIGlzIHVuYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gU3BsaXQgb3V0IHRoZSBoYW5kbGUgcG9zaXRpb25pbmcgbG9naWMgc28gdGhlIE1vdmUgZXZlbnQgY2FuIHVzZSBpdCwgdG9vXG4gICAgZnVuY3Rpb24gY2hlY2tIYW5kbGVQb3NpdGlvbihyZWZlcmVuY2UsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGdldFZhbHVlLCBzbW9vdGhTdGVwcykge1xuICAgICAgICB2YXIgZGlzdGFuY2U7XG4gICAgICAgIC8vIEZvciBzbGlkZXJzIHdpdGggbXVsdGlwbGUgaGFuZGxlcywgbGltaXQgbW92ZW1lbnQgdG8gdGhlIG90aGVyIGhhbmRsZS5cbiAgICAgICAgLy8gQXBwbHkgdGhlIG1hcmdpbiBvcHRpb24gYnkgYWRkaW5nIGl0IHRvIHRoZSBoYW5kbGUgcG9zaXRpb25zLlxuICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmICFvcHRpb25zLmV2ZW50cy51bmNvbnN0cmFpbmVkKSB7XG4gICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLm1hcmdpbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLm1hcmdpbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBsaW1pdCBvcHRpb24gaGFzIHRoZSBvcHBvc2l0ZSBlZmZlY3QsIGxpbWl0aW5nIGhhbmRsZXMgdG8gYVxuICAgICAgICAvLyBtYXhpbXVtIGRpc3RhbmNlIGZyb20gYW5vdGhlci4gTGltaXQgbXVzdCBiZSA+IDAsIGFzIG90aGVyd2lzZVxuICAgICAgICAvLyBoYW5kbGVzIHdvdWxkIGJlIHVubW92YWJsZS5cbiAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLmxpbWl0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubGltaXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgcGFkZGluZyBvcHRpb24ga2VlcHMgdGhlIGhhbmRsZXMgYSBjZXJ0YWluIGRpc3RhbmNlIGZyb20gdGhlXG4gICAgICAgIC8vIGVkZ2VzIG9mIHRoZSBzbGlkZXIuIFBhZGRpbmcgbXVzdCBiZSA+IDAuXG4gICAgICAgIGlmIChvcHRpb25zLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMCwgb3B0aW9ucy5wYWRkaW5nWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDEwMCwgb3B0aW9ucy5wYWRkaW5nWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHRvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMaW1pdCBwZXJjZW50YWdlIHRvIHRoZSAwIC0gMTAwIHJhbmdlXG4gICAgICAgIHRvID0gbGltaXQodG8pO1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgaGFuZGxlIGNhbid0IG1vdmVcbiAgICAgICAgaWYgKHRvID09PSByZWZlcmVuY2VbaGFuZGxlTnVtYmVyXSAmJiAhZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG87XG4gICAgfVxuICAgIC8vIFVzZXMgc2xpZGVyIG9yaWVudGF0aW9uIHRvIGNyZWF0ZSBDU1MgcnVsZXMuIGEgPSBiYXNlIHZhbHVlO1xuICAgIGZ1bmN0aW9uIGluUnVsZU9yZGVyKHYsIGEpIHtcbiAgICAgICAgdmFyIG8gPSBvcHRpb25zLm9ydDtcbiAgICAgICAgcmV0dXJuIChvID8gYSA6IHYpICsgXCIsIFwiICsgKG8gPyB2IDogYSk7XG4gICAgfVxuICAgIC8vIE1vdmVzIGhhbmRsZShzKSBieSBhIHBlcmNlbnRhZ2VcbiAgICAvLyAoYm9vbCwgJSB0byBtb3ZlLCBbJSB3aGVyZSBoYW5kbGUgc3RhcnRlZCwgLi4uXSwgW2luZGV4IGluIHNjb3BlX0hhbmRsZXMsIC4uLl0pXG4gICAgZnVuY3Rpb24gbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgbG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzLCBjb25uZWN0KSB7XG4gICAgICAgIHZhciBwcm9wb3NhbHMgPSBsb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgLy8gU3RvcmUgZmlyc3QgaGFuZGxlIG5vdywgc28gd2Ugc3RpbGwgaGF2ZSBpdCBpbiBjYXNlIGhhbmRsZU51bWJlcnMgaXMgcmV2ZXJzZWRcbiAgICAgICAgdmFyIGZpcnN0SGFuZGxlID0gaGFuZGxlTnVtYmVyc1swXTtcbiAgICAgICAgdmFyIHNtb290aFN0ZXBzID0gb3B0aW9ucy5ldmVudHMuc21vb3RoU3RlcHM7XG4gICAgICAgIHZhciBiID0gWyF1cHdhcmQsIHVwd2FyZF07XG4gICAgICAgIHZhciBmID0gW3Vwd2FyZCwgIXVwd2FyZF07XG4gICAgICAgIC8vIENvcHkgaGFuZGxlTnVtYmVycyBzbyB3ZSBkb24ndCBjaGFuZ2UgdGhlIGRhdGFzZXRcbiAgICAgICAgaGFuZGxlTnVtYmVycyA9IGhhbmRsZU51bWJlcnMuc2xpY2UoKTtcbiAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIHdoaWNoIGhhbmRsZSBpcyAnbGVhZGluZycuXG4gICAgICAgIC8vIElmIHRoYXQgb25lIGNhbid0IG1vdmUgdGhlIHNlY29uZCBjYW4ndCBlaXRoZXIuXG4gICAgICAgIGlmICh1cHdhcmQpIHtcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0ZXAgMTogZ2V0IHRoZSBtYXhpbXVtIHBlcmNlbnRhZ2UgdGhhdCBhbnkgb2YgdGhlIGhhbmRsZXMgY2FuIG1vdmVcbiAgICAgICAgaWYgKGhhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHByb3Bvc2FscywgaGFuZGxlTnVtYmVyLCBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgb25lIG9mIHRoZSBoYW5kbGVzIGNhbid0IG1vdmUuXG4gICAgICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IHRvIC0gcHJvcG9zYWxzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgICAgIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdXNpbmcgb25lIGhhbmRsZSwgY2hlY2sgYmFja3dhcmQgQU5EIGZvcndhcmRcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiID0gZiA9IFt0cnVlXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgLy8gU3RlcCAyOiBUcnkgdG8gc2V0IHRoZSBoYW5kbGVzIHdpdGggdGhlIGZvdW5kIHBlcmNlbnRhZ2VcbiAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgIHN0YXRlID1cbiAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBsb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSwgc21vb3RoU3RlcHMpIHx8IHN0YXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU3RlcCAzOiBJZiBhIGhhbmRsZSBtb3ZlZCwgZmlyZSBldmVudHNcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGNvbm5lY3QsIHRoZW4gZmlyZSBkcmFnIGV2ZW50XG4gICAgICAgICAgICBpZiAoY29ubmVjdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJkcmFnXCIsIGZpcnN0SGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUYWtlcyBhIGJhc2UgdmFsdWUgYW5kIGFuIG9mZnNldC4gVGhpcyBvZmZzZXQgaXMgdXNlZCBmb3IgdGhlIGNvbm5lY3QgYmFyIHNpemUuXG4gICAgLy8gSW4gdGhlIGluaXRpYWwgZGVzaWduIGZvciB0aGlzIGZlYXR1cmUsIHRoZSBvcmlnaW4gZWxlbWVudCB3YXMgMSUgd2lkZS5cbiAgICAvLyBVbmZvcnR1bmF0ZWx5LCBhIHJvdW5kaW5nIGJ1ZyBpbiBDaHJvbWUgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBpbXBsZW1lbnQgdGhpcyBmZWF0dXJlXG4gICAgLy8gaW4gdGhpcyBtYW5uZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5ODIyM1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIGEgLSBiIDogYTtcbiAgICB9XG4gICAgLy8gVXBkYXRlcyBzY29wZV9Mb2NhdGlvbnMgYW5kIHNjb3BlX1ZhbHVlcywgdXBkYXRlcyB2aXN1YWwgc3RhdGVcbiAgICBmdW5jdGlvbiB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvbnMuXG4gICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIHRoZSBzbGlkZXIgc3RlcHBpbmcvcmFuZ2UuXG4gICAgICAgIHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0aW9uID0gdHJhbnNmb3JtRGlyZWN0aW9uKHRvLCAwKSAtIHNjb3BlX0Rpck9mZnNldDtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zbGF0aW9uICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9IHRyYW5zbGF0ZVJ1bGU7XG4gICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIgKyAxKTtcbiAgICB9XG4gICAgLy8gSGFuZGxlcyBiZWZvcmUgdGhlIHNsaWRlciBtaWRkbGUgYXJlIHN0YWNrZWQgbGF0ZXIgPSBoaWdoZXIsXG4gICAgLy8gSGFuZGxlcyBhZnRlciB0aGUgbWlkZGxlIGxhdGVyIGlzIGxvd2VyXG4gICAgLy8gW1s3XSBbOF0gLi4uLi4uLi4uLiB8IC4uLi4uLi4uLi4gWzVdIFs0XVxuICAgIGZ1bmN0aW9uIHNldFppbmRleCgpIHtcbiAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBkaXIgPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA+IDUwID8gLTEgOiAxO1xuICAgICAgICAgICAgdmFyIHpJbmRleCA9IDMgKyAoc2NvcGVfSGFuZGxlcy5sZW5ndGggKyBkaXIgKiBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlLnpJbmRleCA9IFN0cmluZyh6SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXG4gICAgLy8gaWYgZXhhY3RJbnB1dCBpcyB0cnVlLCBkb24ndCBydW4gY2hlY2tIYW5kbGVQb3NpdGlvbiwgdGhlbiB0aGUgaGFuZGxlIGNhbiBiZSBwbGFjZWQgaW4gYmV0d2VlbiBzdGVwcyAoIzQzNilcbiAgICBmdW5jdGlvbiBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZXhhY3RJbnB1dCwgc21vb3RoU3RlcHMpIHtcbiAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAvLyBTa2lwIGNvbm5lY3RzIHNldCB0byBmYWxzZVxuICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgdmFyIGggPSAxMDA7XG4gICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgbCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCAhPT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgaCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgdXNlIHR3byBydWxlczpcbiAgICAgICAgLy8gJ3RyYW5zbGF0ZScgdG8gY2hhbmdlIHRoZSBsZWZ0L3RvcCBvZmZzZXQ7XG4gICAgICAgIC8vICdzY2FsZScgdG8gY2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudDtcbiAgICAgICAgLy8gQXMgdGhlIGVsZW1lbnQgaGFzIGEgd2lkdGggb2YgMTAwJSwgYSB0cmFuc2xhdGlvbiBvZiAxMDAlIGlzIGVxdWFsIHRvIDEwMCUgb2YgdGhlIHBhcmVudCAoLm5vVWktYmFzZSlcbiAgICAgICAgdmFyIGNvbm5lY3RXaWR0aCA9IGggLSBsO1xuICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNmb3JtRGlyZWN0aW9uKGwsIGNvbm5lY3RXaWR0aCkgKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgIHZhciBzY2FsZVJ1bGUgPSBcInNjYWxlKFwiICsgaW5SdWxlT3JkZXIoY29ubmVjdFdpZHRoIC8gMTAwLCBcIjFcIikgKyBcIilcIjtcbiAgICAgICAgc2NvcGVfQ29ubmVjdHNbaW5kZXhdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPVxuICAgICAgICAgICAgdHJhbnNsYXRlUnVsZSArIFwiIFwiICsgc2NhbGVSdWxlO1xuICAgIH1cbiAgICAvLyBQYXJzZXMgdmFsdWUgcGFzc2VkIHRvIC5zZXQgbWV0aG9kLiBSZXR1cm5zIGN1cnJlbnQgdmFsdWUgaWYgbm90IHBhcnNlLWFibGUuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVRvVmFsdWUodG8sIGhhbmRsZU51bWJlcikge1xuICAgICAgICAvLyBTZXR0aW5nIHdpdGggbnVsbCBpbmRpY2F0ZXMgYW4gJ2lnbm9yZScuXG4gICAgICAgIC8vIElucHV0dGluZyAnZmFsc2UnIGlzIGludmFsaWQuXG4gICAgICAgIGlmICh0byA9PT0gbnVsbCB8fCB0byA9PT0gZmFsc2UgfHwgdG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgZm9ybWF0dGVkIG51bWJlciB3YXMgcGFzc2VkLCBhdHRlbXB0IHRvIGRlY29kZSBpdC5cbiAgICAgICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdG8gPSBTdHJpbmcodG8pO1xuICAgICAgICB9XG4gICAgICAgIHRvID0gb3B0aW9ucy5mb3JtYXQuZnJvbSh0byk7XG4gICAgICAgIGlmICh0byAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgcGFyc2luZyB0aGUgbnVtYmVyIGZhaWxlZCwgdXNlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IGlzTmFOKHRvKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bztcbiAgICB9XG4gICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgZnVuY3Rpb24gdmFsdWVTZXQoaW5wdXQsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gYXNBcnJheShpbnB1dCk7XG4gICAgICAgIHZhciBpc0luaXQgPSBzY29wZV9Mb2NhdGlvbnNbMF0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gRXZlbnQgZmlyZXMgYnkgZGVmYXVsdFxuICAgICAgICBmaXJlU2V0RXZlbnQgPSBmaXJlU2V0RXZlbnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaXJlU2V0RXZlbnQ7XG4gICAgICAgIC8vIEFuaW1hdGlvbiBpcyBvcHRpb25hbC5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbml0aWFsIHZhbHVlcyB3ZXJlIHNldCBiZWZvcmUgdXNpbmcgYW5pbWF0ZWQgcGxhY2VtZW50LlxuICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlICYmICFpc0luaXQpIHtcbiAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3QgcGFzcywgd2l0aG91dCBsb29rQWhlYWQgYnV0IHdpdGggbG9va0JhY2t3YXJkLiBWYWx1ZXMgYXJlIHNldCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZXNbaGFuZGxlTnVtYmVyXSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgZmFsc2UsIGV4YWN0SW5wdXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGkgPSBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAvLyBTcHJlYWQgaGFuZGxlcyBldmVubHkgYWNyb3NzIHRoZSBzbGlkZXIgaWYgdGhlIHJhbmdlIGhhcyBubyBzaXplIChtaW49bWF4KVxuICAgICAgICBpZiAoaXNJbml0ICYmIHNjb3BlX1NwZWN0cnVtLmhhc05vU2l6ZSgpKSB7XG4gICAgICAgICAgICBleGFjdElucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1swXSA9IDA7XG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwYWNlXzEgPSAxMDAgLyAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IGhhbmRsZU51bWJlciAqIHNwYWNlXzE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2Vjb25kYXJ5IHBhc3Nlcy4gTm93IHRoYXQgYWxsIGJhc2UgdmFsdWVzIGFyZSBzZXQsIGFwcGx5IGNvbnN0cmFpbnRzLlxuICAgICAgICAvLyBJdGVyYXRlIGFsbCBoYW5kbGVzIHRvIGVuc3VyZSBjb25zdHJhaW50cyBhcmUgYXBwbGllZCBmb3IgdGhlIGVudGlyZSBzbGlkZXIgKElzc3VlICMxMDA5KVxuICAgICAgICBmb3IgKDsgaSA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIC8vIEZpcmUgdGhlIGV2ZW50IG9ubHkgZm9yIGhhbmRsZXMgdGhhdCByZWNlaXZlZCBhIG5ldyB2YWx1ZSwgYXMgcGVyICM1NzlcbiAgICAgICAgICAgIGlmICh2YWx1ZXNbaGFuZGxlTnVtYmVyXSAhPT0gbnVsbCAmJiBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFJlc2V0IHNsaWRlciB0byBpbml0aWFsIHZhbHVlc1xuICAgIGZ1bmN0aW9uIHZhbHVlUmVzZXQoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQsIGZpcmVTZXRFdmVudCk7XG4gICAgfVxuICAgIC8vIFNldCB2YWx1ZSBmb3IgYSBzaW5nbGUgaGFuZGxlXG4gICAgZnVuY3Rpb24gdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB2YWx1ZSwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgIC8vIEVuc3VyZSBudW1lcmljIGlucHV0XG4gICAgICAgIGhhbmRsZU51bWJlciA9IE51bWJlcihoYW5kbGVOdW1iZXIpO1xuICAgICAgICBpZiAoIShoYW5kbGVOdW1iZXIgPj0gMCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIiArIGhhbmRsZU51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9vayBib3RoIGJhY2t3YXJkIGFuZCBmb3J3YXJkLCBzaW5jZSB3ZSBkb24ndCB3YW50IHRoaXMgaGFuZGxlIHRvIFwicHVzaFwiIG90aGVyIGhhbmRsZXMgKCM5NjApO1xuICAgICAgICAvLyBUaGUgZXhhY3RJbnB1dCBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBpZ25vcmUgc2xpZGVyIHN0ZXBwaW5nICgjNDM2KVxuICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgdHJ1ZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICBpZiAoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBHZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICBmdW5jdGlvbiB2YWx1ZUdldCh1bmVuY29kZWQpIHtcbiAgICAgICAgaWYgKHVuZW5jb2RlZCA9PT0gdm9pZCAwKSB7IHVuZW5jb2RlZCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBhIGNvcHkgb2YgdGhlIHJhdyB2YWx1ZXNcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9WYWx1ZXMubGVuZ3RoID09PSAxID8gc2NvcGVfVmFsdWVzWzBdIDogc2NvcGVfVmFsdWVzLnNsaWNlKDApO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKTtcbiAgICAgICAgLy8gSWYgb25seSBvbmUgaGFuZGxlIGlzIHVzZWQsIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG4gICAgLy8gUmVtb3ZlcyBjbGFzc2VzIGZyb20gdGhlIHJvb3QgYW5kIGVtcHRpZXMgaXQuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHByb3RlY3RlZCBpbnRlcm5hbCBsaXN0ZW5lcnNcbiAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5jc3NDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQ2hpbGQoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzY29wZV9UYXJnZXQubm9VaVNsaWRlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcikge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgdmFyIG5lYXJieVN0ZXBzID0gc2NvcGVfU3BlY3RydW0uZ2V0TmVhcmJ5U3RlcHMobG9jYXRpb24pO1xuICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgdmFyIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgIHZhciBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAvLyBJZiBzbmFwcGVkLCBkaXJlY3RseSB1c2UgZGVmaW5lZCBzdGVwIHZhbHVlXG4gICAgICAgIGlmIChvcHRpb25zLnNuYXApIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0YXJ0VmFsdWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBuZXh0IHZhbHVlIGluIHRoaXMgc3RlcCBtb3ZlcyBpbnRvIHRoZSBuZXh0IHN0ZXAsXG4gICAgICAgIC8vIHRoZSBpbmNyZW1lbnQgaXMgdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IHN0ZXAgLSB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICsgaW5jcmVtZW50ID4gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBiZXlvbmQgdGhlIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgIGlmICh2YWx1ZSA+IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVjcmVtZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYSBoYW5kbGUgaXMgYXQgdGhlIHN0YXJ0IG9mIGEgc3RlcCwgaXQgYWx3YXlzIHN0ZXBzIGJhY2sgaW50byB0aGUgcHJldmlvdXMgc3RlcCBmaXJzdFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5oaWdoZXN0U3RlcDtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3csIGlmIGF0IHRoZSBzbGlkZXIgZWRnZXMsIHRoZXJlIGlzIG5vIGluL2RlY3JlbWVudFxuICAgICAgICBpZiAobG9jYXRpb24gPT09IDEwMCkge1xuICAgICAgICAgICAgaW5jcmVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcyBwZXIgIzM5MSwgdGhlIGNvbXBhcmlzb24gZm9yIHRoZSBkZWNyZW1lbnQgc3RlcCBjYW4gaGF2ZSBzb21lIHJvdW5kaW5nIGlzc3Vlcy5cbiAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHNjb3BlX1NwZWN0cnVtLmNvdW50U3RlcERlY2ltYWxzKCk7XG4gICAgICAgIC8vIFJvdW5kIHBlciAjMzkxXG4gICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwgJiYgaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaW5jcmVtZW50ID0gTnVtYmVyKGluY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWNyZW1lbnQgIT09IG51bGwgJiYgZGVjcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVjcmVtZW50ID0gTnVtYmVyKGRlY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZGVjcmVtZW50LCBpbmNyZW1lbnRdO1xuICAgIH1cbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBzaXplIGZvciB0aGUgc2xpZGVyLlxuICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwcygpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZU51bWJlcnMubWFwKGdldE5leHRTdGVwc0ZvckhhbmRsZSk7XG4gICAgfVxuICAgIC8vIFVwZGF0YWJsZTogbWFyZ2luLCBsaW1pdCwgcGFkZGluZywgc3RlcCwgcmFuZ2UsIGFuaW1hdGUsIHNuYXBcbiAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdGlvbnNUb1VwZGF0ZSwgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgIC8vIFNwZWN0cnVtIGlzIGNyZWF0ZWQgdXNpbmcgdGhlIHJhbmdlLCBzbmFwLCBkaXJlY3Rpb24gYW5kIHN0ZXAgb3B0aW9ucy5cbiAgICAgICAgLy8gJ3NuYXAnIGFuZCAnc3RlcCcgY2FuIGJlIHVwZGF0ZWQuXG4gICAgICAgIC8vIElmICdzbmFwJyBhbmQgJ3N0ZXAnIGFyZSBub3QgcGFzc2VkLCB0aGV5IHNob3VsZCByZW1haW4gdW5jaGFuZ2VkLlxuICAgICAgICB2YXIgdiA9IHZhbHVlR2V0KCk7XG4gICAgICAgIHZhciB1cGRhdGVBYmxlID0gW1xuICAgICAgICAgICAgXCJtYXJnaW5cIixcbiAgICAgICAgICAgIFwibGltaXRcIixcbiAgICAgICAgICAgIFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgXCJyYW5nZVwiLFxuICAgICAgICAgICAgXCJhbmltYXRlXCIsXG4gICAgICAgICAgICBcInNuYXBcIixcbiAgICAgICAgICAgIFwic3RlcFwiLFxuICAgICAgICAgICAgXCJmb3JtYXRcIixcbiAgICAgICAgICAgIFwicGlwc1wiLFxuICAgICAgICAgICAgXCJ0b29sdGlwc1wiLFxuICAgICAgICBdO1xuICAgICAgICAvLyBPbmx5IGNoYW5nZSBvcHRpb25zIHRoYXQgd2UncmUgYWN0dWFsbHkgcGFzc2VkIHRvIHVwZGF0ZS5cbiAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxPcHRpb25zW25hbWVdID0gb3B0aW9uc1RvVXBkYXRlW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG5ld09wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAvLyBMaW1pdCwgbWFyZ2luIGFuZCBwYWRkaW5nIGRlcGVuZCBvbiB0aGUgc3BlY3RydW0gYnV0IGFyZSBzdG9yZWQgb3V0c2lkZSBvZiBpdC4gKCM2NzcpXG4gICAgICAgIG9wdGlvbnMubWFyZ2luID0gbmV3T3B0aW9ucy5tYXJnaW47XG4gICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSBuZXdPcHRpb25zLnBhZGRpbmc7XG4gICAgICAgIC8vIFVwZGF0ZSBwaXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW52YWxpZGF0ZSB0aGUgY3VycmVudCBwb3NpdGlvbmluZyBzbyB2YWx1ZVNldCBmb3JjZXMgYW4gdXBkYXRlLlxuICAgICAgICBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemF0aW9uIHN0ZXBzXG4gICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBlbGVtZW50LCBpbml0aWFsaXplIEhUTUwgYW5kIHNldCBjbGFzc2VzLlxuICAgICAgICAvLyBBZGQgaGFuZGxlcyBhbmQgY29ubmVjdCBlbGVtZW50cy5cbiAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xuICAgICAgICBhZGRFbGVtZW50cyhvcHRpb25zLmNvbm5lY3QsIHNjb3BlX0Jhc2UpO1xuICAgICAgICAvLyBBdHRhY2ggdXNlciBldmVudHMuXG4gICAgICAgIGJpbmRTbGlkZXJFdmVudHMob3B0aW9ucy5ldmVudHMpO1xuICAgICAgICAvLyBVc2UgdGhlIHB1YmxpYyB2YWx1ZSBtZXRob2QgdG8gc2V0IHRoZSBzdGFydCB2YWx1ZXMuXG4gICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQpO1xuICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYXJpYSgpO1xuICAgIH1cbiAgICBzZXR1cFNsaWRlcigpO1xuICAgIHZhciBzY29wZV9TZWxmID0ge1xuICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICBzdGVwczogZ2V0TmV4dFN0ZXBzLFxuICAgICAgICBvbjogYmluZEV2ZW50LFxuICAgICAgICBvZmY6IHJlbW92ZUV2ZW50LFxuICAgICAgICBnZXQ6IHZhbHVlR2V0LFxuICAgICAgICBzZXQ6IHZhbHVlU2V0LFxuICAgICAgICBzZXRIYW5kbGU6IHZhbHVlU2V0SGFuZGxlLFxuICAgICAgICByZXNldDogdmFsdWVSZXNldCxcbiAgICAgICAgZGlzYWJsZTogZGlzYWJsZSxcbiAgICAgICAgZW5hYmxlOiBlbmFibGUsXG4gICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgX19tb3ZlSGFuZGxlczogZnVuY3Rpb24gKHVwd2FyZCwgcHJvcG9zYWwsIGhhbmRsZU51bWJlcnMpIHtcbiAgICAgICAgICAgIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVycyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgICAgdXBkYXRlT3B0aW9uczogdXBkYXRlT3B0aW9ucyxcbiAgICAgICAgdGFyZ2V0OiBzY29wZV9UYXJnZXQsXG4gICAgICAgIHJlbW92ZVBpcHM6IHJlbW92ZVBpcHMsXG4gICAgICAgIHJlbW92ZVRvb2x0aXBzOiByZW1vdmVUb29sdGlwcyxcbiAgICAgICAgZ2V0UG9zaXRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRvb2x0aXBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE9yaWdpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVzO1xuICAgICAgICB9LFxuICAgICAgICBwaXBzOiBwaXBzLCAvLyBJc3N1ZSAjNTk0XG4gICAgfTtcbiAgICByZXR1cm4gc2NvcGVfU2VsZjtcbn1cbi8vIFJ1biB0aGUgc3RhbmRhcmQgaW5pdGlhbGl6ZXJcbmZ1bmN0aW9uIGluaXRpYWxpemUodGFyZ2V0LCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Lm5vZGVOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGNyZWF0ZSByZXF1aXJlcyBhIHNpbmdsZSBlbGVtZW50LCBnb3Q6IFwiICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIHNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICBpZiAodGFyZ2V0Lm5vVWlTbGlkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogU2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICB9XG4gICAgLy8gVGVzdCB0aGUgb3B0aW9ucyBhbmQgY3JlYXRlIHRoZSBzbGlkZXIgZW52aXJvbm1lbnQ7XG4gICAgdmFyIG9wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgIHZhciBhcGkgPSBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgdGFyZ2V0Lm5vVWlTbGlkZXIgPSBhcGk7XG4gICAgcmV0dXJuIGFwaTtcbn1cbmV4cG9ydCB7IGluaXRpYWxpemUgYXMgY3JlYXRlIH07XG5leHBvcnQgeyBjc3NDbGFzc2VzIH07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgIF9fc3BlY3RydW06IFNwZWN0cnVtLFxuICAgIC8vIEEgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IGNsYXNzZXMsIGFsbG93cyBnbG9iYWwgY2hhbmdlcy5cbiAgICAvLyBVc2UgdGhlIGNzc0NsYXNzZXMgb3B0aW9uIGZvciBjaGFuZ2VzIHRvIG9uZSBzbGlkZXIuXG4gICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICBjcmVhdGU6IGluaXRpYWxpemUsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi91dGlscy5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzc1wiO1xuaW1wb3J0IHsgaW5pdFNsaWRlciB9IGZyb20gXCIuL3NsaWRlclwiO1xuaW1wb3J0IHsgdG9UaXRsZUNhc2UgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dC10by10aXRsZS1jYXNlXCI7XG5pbXBvcnQgeyBkZWZhdWx0QWNjZW50SFVFcywgZGVmYXVsdFNldHRpbmdzLCByYWRpaVNpemVOYW1lLCBzcGFjaW5nU2l6ZU5hbWUsIHN5c3RlbUFjY2VudExpc3QsIHR5cG9ncmFwaHlTaXplVmFsdWVzIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcmV2aWV3LCBnZXRGb3JtRGF0YSwgbG9hZFNldHRpbmdzIH0gZnJvbSBcIi4uL3V0aWxzL2ltcG9ydC11dGlsc1wiO1xuLypcbiAgICBVSSBJTklUSUFMSVpBVElPTlxuKi9cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5jb25zdCBjb2xvclByZXZpZXdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yLXByZXZpZXcnKTtcbmNvbnN0IGFjY2VudFNsaWRlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZW50Q29sb3JzU2xpZGVycycpO1xubGV0IGltcG9ydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRWYXJpYWJsZXNCdXR0b24nKTtcbmxldCByZXNldERlZmF1bHRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0RGVmYXVsdHNCdXR0b24nKTtcbmxldCBzbGlkZXJzID0ge307XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb21tYW5kPVwicmVuZGVyQWNjZW50c1wiXScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBnZXRGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUkVOREVSX0FDQ0VOVFMnLFxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFwiKlwiKTtcbiAgICB9KTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29tbWFuZD1cInJlbmRlck5ldXRyYWxzXCJdJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGdldEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdSRU5ERVJfTkVVVFJBTFMnLFxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFwiKlwiKTtcbiAgICB9KTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsSUQgPSBlbC5kYXRhc2V0Lm1vZGFsO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxJRCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1leHBhbmRlcl1bZGF0YS1yb2xlPVwidHJpZ2dlclwiXScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAobmV4dC5kYXRhc2V0LnJvbGUgPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbmV4dC5zdHlsZS5kaXNwbGF5ID0gbmV4dC5zdHlsZS5kaXNwbGF5ID09ICdub25lJyA/ICdpbmhlcml0JyA6ICdub25lJztcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1leHBhbmRlZCcsIG5leHQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgPyAnbm8nIDogJ3llcycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGZpbmQgY29udGFpbmVyIHRvIGV4cGFuZCcpO1xuICAgIH1cbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xpZGVyXScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgdmFsdWVNYXBzID0ge1xuICAgICAgICAnc2VtYW50aWNzJzogc3lzdGVtQWNjZW50TGlzdCxcbiAgICAgICAgJ3R5cG9ncmFwaHknOiB0eXBvZ3JhcGh5U2l6ZVZhbHVlcyxcbiAgICAgICAgJ3JhZGlpJzogcmFkaWlTaXplTmFtZSxcbiAgICAgICAgJ3NwYWNpbmcnOiBzcGFjaW5nU2l6ZU5hbWVcbiAgICB9O1xuICAgIGNvbnN0IHR5cGUgPSBlbC5kYXRhc2V0LnR5cGU7XG4gICAgY29uc3Qgc2xpZGVyQ29tcG9uZW50ID0gaW5pdFNsaWRlcihlbCwgeyB2YWx1ZU1hcDogdmFsdWVNYXBzW3R5cGVdIHx8IG51bGwgfSk7XG4gICAgc2xpZGVyc1tzbGlkZXJDb21wb25lbnQucGFyYW1zLm5hbWVdID0gc2xpZGVyQ29tcG9uZW50O1xufSk7XG5PYmplY3QuZW50cmllcyhkZWZhdWx0QWNjZW50SFVFcykuZm9yRWFjaCgoW25hbWUsIGh1ZV0pID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0geyBcImxhYmVsXCI6IHRvVGl0bGVDYXNlKG5hbWUpLCBcIm5hbWVcIjogbmFtZSwgXCJtaW5cIjogMCwgXCJtYXhcIjogMzYwLCBcInN0ZXBcIjogMSwgXCJ2YWx1ZVwiOiBodWUsIHN5bmNWYWx1ZTogdHJ1ZSB9O1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNsaWRlckNvbXBvZW50ID0gaW5pdFNsaWRlcihlbCwgb3B0aW9ucyk7XG4gICAgYWNjZW50U2xpZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG4gICAgc2xpZGVyc1tuYW1lXSA9IHNsaWRlckNvbXBvZW50O1xufSk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgZ2VuZXJhdGVQcmV2aWV3KGZvcm0sIGNvbG9yUHJldmlld0NhcmQsIHNsaWRlcnMpO1xufSwgMTApKTtcbnJlc2V0RGVmYXVsdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2FkU2V0dGluZ3MoZm9ybSwgZGVmYXVsdFNldHRpbmdzKTtcbn0pO1xuaW1wb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6IFwiSU1QT1JUXCIsXG4gICAgICAgIHBhcmFtczogZ2V0Rm9ybURhdGEoZm9ybSlcbiAgICB9O1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IG1lc3NhZ2UgfSwgXCIqXCIpO1xufSk7XG5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgIHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ0xPQURFRCcgfVxufSwgXCIqXCIpO1xuZ2VuZXJhdGVQcmV2aWV3KGZvcm0sIGNvbG9yUHJldmlld0NhcmQsIHNsaWRlcnMpO1xub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJnb3QgdGhpcyBmcm9tIHRoZSBwbHVnaW4gY29kZVwiLCBldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2UpO1xuICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2U7XG4gICAgLy8gY29udmVydCBzdHJpbmcgdmFsdWVzIGludG8gbnVtYmVycyBmb3Igc2xpZGVyc1xuICAgIGxvYWRTZXR0aW5ncyhmb3JtLCBkYXRhKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=