/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.m-0 {\n  margin: 0px;\n}\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-4 {\n  margin-right: 1rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.block {\n  display: block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.resize {\n  resize: both;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.items-baseline {\n  align-items: baseline;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-0 {\n  gap: 0px;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-none {\n  border-radius: 0px;\n}\n.rounded-l {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.border {\n  border-width: 1px;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.text-right {\n  text-align: right;\n}\n.align-baseline {\n  vertical-align: baseline;\n}\n.align-top {\n  vertical-align: top;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.italic {\n  font-style: italic;\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.opacity-70 {\n  opacity: 0.7;\n}\n.opacity-75 {\n  opacity: 0.75;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n:root {\n    --spacing: 0.5rem 1rem;\n    --slider-thumb-size: 1.5rem;\n    --slider-track-size: 0.25rem;\n\n    --primary: #0C75D0;\n    --info: #078380;\n    --success: #078650;\n    --warning: #C15600;\n    --danger: #E81B00;\n\n    --font-size-base: 12px;\n    --line-height-base: 16px;\n\n    --font-size-md: 14px;\n    --line-height-md: 20px;\n    --font-size-lg: 16px;\n    --line-height-lg: 24px;\n\n    --radii-base: 4px;\n    --radii-md: calc(var(--radii-base) + 2px);\n    --radii-md: calc(var(--radii-base) + 4px);\n\n    --sx-xs4: 2px;\n    --sx-xs3: 4px;\n    --sx-xs2: 6px;\n    --sx-xs: 8px;\n    --sx-sm: 12px;\n    --sx-base: 16px;\n    --sx-md: 20px;\n    --sx-lg: 24px;\n    --sx-xl: 28px;\n    --sx-xl2: 32px;\n    --sx-xl3: 40px;\n\n    --sy-xs4: 1px;\n    --sy-xs3: 2px;\n    --sy-xs2: 4px;\n    --sy-xs: 6px;\n    --sy-sm: 8px;\n    --sy-base: 12px;\n    --sy-md: 16px;\n    --sy-lg: 20px;\n    --sy-xl: 24px;\n    --sy-xl2: 28px;\n    --sy-xl3: 32px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    background-color: var(--figma-color-bg-secondary);\n    font-size: 12px;\n    font-size: var(--font-size-base);\n    line-height: 16px;\n    line-height: var(--line-height-base);\n    color: var(--figma-color-text);\n    margin: 0;\n    overflow: hidden;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\na {\n    color: #0C75D0;\n    color: var(--primary);\n}\n\na:hover {\n    -webkit-text-decoration: underline;\n    text-decoration: underline;\n}\n\n.figma-bg-secondary {\n    background-color: var(--figma-color-bg-secondary);\n}\n\n.card {\n    --light-1: #f8fafc;\n    --light-2: #e1e7ea;\n    --light-3: #e7ecee;\n    --light-4: #edf1f3;\n    --light-5: #f2f6f7;\n\n    --dark-1: #121516;\n    --dark-2: #171a1c;\n    --dark-3: #1c2022;\n    --dark-4: #202527;\n    --dark-5: #252a2d;\n\n    background-color: var(--figma-color-bg);\n    border-radius: calc(4px + 4px);\n    border-radius: var(--radii-md);\n    padding: 12px 16px;\n    padding: var(--sy-base) var(--sx-base) ;\n    gap: 12px;\n    gap: var(--sy-base);\n    display: flex;\n    flex-direction: column;\n}\n\n.card-stiky {\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    margin: 0px;\n    border-radius: 0px;\n    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\n.color-box {\n    min-height: 2rem;\n    ;\n    padding: 0.5rem;\n    color: white;\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.color-box.l-1 {\n    background-color: var(--light-1);\n}\n\n.color-box.l-2 {\n    background-color: var(--light-2);\n}\n\n.color-box.l-3 {\n    background-color: var(--light-3);\n}\n\n.color-box.l-4 {\n    background-color: var(--light-4);\n}\n\n.color-box.l-5 {\n    background-color: var(--light-5);\n}\n\n.color-box.d-1 {\n    background-color: var(--dark-1);\n}\n\n.color-box.d-2 {\n    background-color: var(--dark-2);\n}\n\n.color-box.d-3 {\n    background-color: var(--dark-3);\n}\n\n.color-box.d-4 {\n    background-color: var(--dark-4);\n}\n\n.color-box.d-5 {\n    background-color: var(--dark-5);\n}\n\n.color-box.a-primary {\n    background-color: #0C75D0;\n    background-color: var(--primary);\n}\n\n.color-box.a-info {\n    background-color: #078380;\n    background-color: var(--info);\n}\n\n.color-box.a-success {\n    background-color: #078650;\n    background-color: var(--success);\n}\n\n.color-box.a-warning {\n    background-color: #C15600;\n    background-color: var(--warning);\n}\n\n.color-box.a-danger {\n    background-color: #E81B00;\n    background-color: var(--danger);\n}\n\n.color-box .token-value {\n    display: block;\n    opacity: 0.7;\n    font-size: var(--font-size-xs);\n    line-height: var(--line-height-xs);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: auto;\n    margin: 0;\n}\n\nbutton {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border-radius: 4px;\n    border-radius: var(--radii-base);\n    padding: 6px 12px;\n    padding: var(--sy-xs) var(--sx-sm);\n}\n\ninput,\ntextarea {\n    padding: 6px 12px;\n    padding: var(--sy-xs) var(--sx-sm);\n}\n\nform>* {\n    display: block;\n    width: 100%;\n}\n\nbutton.primary {\n    background-color: #0C75D0;\n    background-color: var(--primary);\n    border: none;\n    color: var(--figma-color-text-onbrand);\n}\n\ninput,\ntextarea {\n    background-color: var(--figma-color-bg-secondary);\n    color: var(--figma-color-text);\n    border: 2px solid var(--figma-color-border);\n}\n\ninput[type=radio] {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    padding: 0;\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n}\n\ninput[type=radio]:checked {\n    background-color: white;\n    ;\n    border: 5px solid #0C75D0;\n    ;\n    border: 5px solid var(--primary);\n}\n\n.radiogroup {\n    background-color: var(--figma-color-bg-secondary);\n    padding: 2px;\n    gap: 1px;\n    display: flex;\n    flex-direction: row;\n    border-radius: 0.25rem;\n}\n\n.radiogroup input[type=radio] {\n    background-color: #0C75D0;\n    background-color: var(--primary);\n    border: 0 none;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n    opacity: 0.5;\n    border-radius: 0px;\n}\n\n.radiogroup input[type=radio]:checked {\n    opacity: 1;\n    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow)}\n\ninput:focus,\ntextarea:focus {\n    border-color: var(--figma-color-border-selected);\n    outline: none;\n}\n\ntextarea {\n    flex: 1;\n    white-space: pre;\n}\n\nfieldset {\n    border-style: solid;\n    border-color: var(--figma-color-border);\n    border-radius: calc(4px + 4px);\n    border-radius: var(--radii-md);\n    border-width: 1px;\n}\n\n.sliders label {\n    display: flex;\n    align-items: center;\n}\n\n.sliders .text-label {\n    flex: 1;\n}\n\n.sliders input[type=range] {\n    flex: 3;\n}\n\n.sliders input[type=text] {\n    width: 6rem;\n    border: 0 none;\n    background: transparent;\n    text-align: right;\n}\n\n\n[data-semantics] .sliders input[type=text] {\n    font-size: 0.9rem;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    gap: var(--sy-base);\n    height: 100%;\n}\n\n\n#export {\n    background-color: var(--figma-color-bg-component);\n}\n\n/********** Range Input Styles **********/\n/*Range Reset*/\ninput[type=\"range\"] {\n    --thumb-color: var(--primary);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n         appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 15rem;\n    border: 0 none;\n    padding: 0;\n}\n\n/* Removes default focus */\ninput[type=\"range\"]:focus {\n    outline: none;\n}\n\n/***** Chrome, Safari, Opera and Edge Chromium styles *****/\n/* slider track */\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n    background-color: var(--figma-color-border);\n    border-radius: 0.5rem;\n    height: 0.25rem;\n    height: var(--slider-track-size);\n}\n\n/* slider thumb */\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    /* Override default look */\n    appearance: none;\n    margin-top: calc((1.5rem - 0.25rem) / -2);\n    margin-top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n\n    /*custom styles*/\n    background-color: var(--thumb-color);\n    height: 1.5rem;\n    height: var(--slider-thumb-size);\n    width: 1.5rem;\n    width: var(--slider-thumb-size);\n    border-radius: 1.5rem;\n    border-radius: var(--slider-thumb-size);\n}\n\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    border: 1px solid #053a5f;\n    outline: 3px solid #053a5f;\n\n    outline-color: color-mix(in srgb, var(--thumb-color), transparent 20%);\n    outline-offset: 0.125rem;\n}\n\nhr {\n    border-color: var(--figma-color-border);\n}\n\na[data-expander]::after {\n    content: '';\n    display: inline-block;\n    width: 7.29px;\n    height: 7.29px;\n    border: solid #0C75D0;\n    border: solid var(--primary);\n    border-width: 0 1px 1px 0;\n    transform: rotate(-45deg) translate(2px, 0px);\n    margin-left: 4px;\n}\n\na[data-expanded=yes]::after {\n    transform: rotate(45deg) translate(0px, -5px);\n}\n\n.font-preview-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 3rem;\n    background-color: var(--figma-color-bg-secondary);\n}\n\n.font-preview-box .base {\n    font-size: 12px;\n    font-size: var(--font-size-base);\n}\n\n.font-preview-box .md {\n    font-size: 14px;\n    font-size: var(--font-size-md);\n}\n\n.font-preview-box .lg {\n    font-size: 16px;\n    font-size: var(--font-size-lg);\n}\n\n.checkbox {\n    display: flex;\n}\n\n.checkbox:hover input[type=checkbox] {\n    border-color: var(--figma-color-border-selected);\n}\n\n.checkbox input[type=\"checkbox\"] {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    width: 16px;\n    width: var(--line-height-base);\n    height: 16px;\n    height: var(--line-height-base);\n    padding: 0;\n    border-radius: 4px;\n    flex: 0 0 auto;\n    \n}\n\n.checkbox input[type=\"checkbox\"]:checked {\n    border-color: #0C75D0;\n    border-color: var(--primary);\n    background-color: #0C75D0;\n    background-color: var(--primary);\n    position: relative;\n}\n\n.checkbox input[type=\"checkbox\"]:checked::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    border: 2px solid white;\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg) translate(1px, -3px);\n    width: 0.4rem;\n    height: 0.7rem;\n}\n\n\n.action-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.action-list li {\n    display: block;\n    border-bottom: 1px solid var(--figma-color-border);\n}\n\n.action-list li:last-child {\n    border-width: 0;\n}\n\n.action-list li a {\n    color: var(--figma-color-text);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 12px 0;\n    padding: var(--sy-base) 0;\n}\n\n.action-list li a:hover {\n    color: #0C75D0;\n    color: var(--primary);\n    -webkit-text-decoration: none;\n    text-decoration: none;\n}\n\n.action-list span[data-value]::after {\n    content: '';\n    display: inline-block;\n    width: 7.29px;\n    height: 7.29px;\n    border: solid #0C75D0;\n    border: solid var(--primary);\n    border-width: 0 1px 1px 0;\n    transform: rotate(-45deg) translate(2px, 0px);\n    margin-left: 12px;\n    margin-left: var(--sx-sm);\n}\n\ndialog {\n    color: var(--figma-color-text);\n    background-color: var(--figma-color-bg);\n    border-radius: var(--radii-lg);\n    padding: 20px 24px;\n    padding: var(--sy-lg) var(--sx-lg) ;\n    outline: 1px solid color-mix(in srgb, var(--figma-color-text), transparent 85%);\n    box-shadow: 0px 12px 20px -6px rgba(14, 16, 17, 0.10), 0px 30px 48px -8px rgba(14, 16, 17, 0.15);\n}\n\ndialog button.close {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n}\n\n.close-icon-bar {\n    width: 1px;\n    height: 10px;\n}\n\nbutton.close {\n    color: currentColor;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0 none;\n    background: transparent;\n    border-radius: 4px;\n    border-radius: var(--radii-base);\n    width: 1.5rem;\n    height: 1.5rem;\n    opacity: 0.6;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton.close svg {\n    color: var(--figma-color-text);\n}\n\nbutton.close:hover {\n    opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/ui/styles.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n    --spacing: 0.5rem 1rem;\n    --slider-thumb-size: 1.5rem;\n    --slider-track-size: 0.25rem;\n\n    --primary: #0C75D0;\n    --info: #078380;\n    --success: #078650;\n    --warning: #C15600;\n    --danger: #E81B00;\n\n    --font-size-base: 12px;\n    --line-height-base: 16px;\n\n    --font-size-md: 14px;\n    --line-height-md: 20px;\n    --font-size-lg: 16px;\n    --line-height-lg: 24px;\n\n    --radii-base: 4px;\n    --radii-md: calc(var(--radii-base) + 2px);\n    --radii-md: calc(var(--radii-base) + 4px);\n\n    --sx-xs4: 2px;\n    --sx-xs3: 4px;\n    --sx-xs2: 6px;\n    --sx-xs: 8px;\n    --sx-sm: 12px;\n    --sx-base: 16px;\n    --sx-md: 20px;\n    --sx-lg: 24px;\n    --sx-xl: 28px;\n    --sx-xl2: 32px;\n    --sx-xl3: 40px;\n\n    --sy-xs4: 1px;\n    --sy-xs3: 2px;\n    --sy-xs2: 4px;\n    --sy-xs: 6px;\n    --sy-sm: 8px;\n    --sy-base: 12px;\n    --sy-md: 16px;\n    --sy-lg: 20px;\n    --sy-xl: 24px;\n    --sy-xl2: 28px;\n    --sy-xl3: 32px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    background-color: var(--figma-color-bg-secondary);\n    font-size: var(--font-size-base);\n    line-height: var(--line-height-base);\n    color: var(--figma-color-text);\n    margin: 0;\n    overflow: hidden;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\na {\n    color: var(--primary);\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.figma-bg-secondary {\n    background-color: var(--figma-color-bg-secondary);\n}\n\n.card {\n    --light-1: #f8fafc;\n    --light-2: #e1e7ea;\n    --light-3: #e7ecee;\n    --light-4: #edf1f3;\n    --light-5: #f2f6f7;\n\n    --dark-1: #121516;\n    --dark-2: #171a1c;\n    --dark-3: #1c2022;\n    --dark-4: #202527;\n    --dark-5: #252a2d;\n\n    background-color: var(--figma-color-bg);\n    border-radius: var(--radii-md);\n    padding: var(--sy-base) var(--sx-base) ;\n    gap: var(--sy-base);\n\n    @apply flex flex-col;\n}\n\n.card-stiky {\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    @apply rounded-none m-0 shadow-md;\n}\n\n.color-box {\n    min-height: 2rem;\n    ;\n    padding: 0.5rem;\n    color: white;\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.color-box.l-1 {\n    background-color: var(--light-1);\n}\n\n.color-box.l-2 {\n    background-color: var(--light-2);\n}\n\n.color-box.l-3 {\n    background-color: var(--light-3);\n}\n\n.color-box.l-4 {\n    background-color: var(--light-4);\n}\n\n.color-box.l-5 {\n    background-color: var(--light-5);\n}\n\n.color-box.d-1 {\n    background-color: var(--dark-1);\n}\n\n.color-box.d-2 {\n    background-color: var(--dark-2);\n}\n\n.color-box.d-3 {\n    background-color: var(--dark-3);\n}\n\n.color-box.d-4 {\n    background-color: var(--dark-4);\n}\n\n.color-box.d-5 {\n    background-color: var(--dark-5);\n}\n\n.color-box.a-primary {\n    background-color: var(--primary);\n}\n\n.color-box.a-info {\n    background-color: var(--info);\n}\n\n.color-box.a-success {\n    background-color: var(--success);\n}\n\n.color-box.a-warning {\n    background-color: var(--warning);\n}\n\n.color-box.a-danger {\n    background-color: var(--danger);\n}\n\n.color-box .token-value {\n    display: block;\n    opacity: 0.7;\n    font-size: var(--font-size-xs);\n    line-height: var(--line-height-xs);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: auto;\n    margin: 0;\n}\n\nbutton {\n    appearance: none;\n    border-radius: var(--radii-base);\n    padding: var(--sy-xs) var(--sx-sm);\n}\n\ninput,\ntextarea {\n    padding: var(--sy-xs) var(--sx-sm);\n}\n\nform>* {\n    display: block;\n    width: 100%;\n}\n\nbutton.primary {\n    background-color: var(--primary);\n    border: none;\n    color: var(--figma-color-text-onbrand);\n}\n\ninput,\ntextarea {\n    background-color: var(--figma-color-bg-secondary);\n    color: var(--figma-color-text);\n    border: 2px solid var(--figma-color-border);\n}\n\ninput[type=radio] {\n    appearance: none;\n    padding: 0;\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n}\n\ninput[type=radio]:checked {\n    background-color: white;\n    ;\n    border: 5px solid var(--primary);\n}\n\n.radiogroup {\n    background-color: var(--figma-color-bg-secondary);\n    padding: 2px;\n    gap: 1px;\n    @apply flex flex-row rounded;\n}\n\n.radiogroup input[type=radio] {\n    background-color: var(--primary);\n    border: 0 none;\n    appearance: none;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n    opacity: 0.5;\n\n    @apply rounded-none;\n}\n\n.radiogroup input[type=radio]:checked {\n    opacity: 1;\n    @apply shadow\n}\n\ninput:focus,\ntextarea:focus {\n    border-color: var(--figma-color-border-selected);\n    outline: none;\n}\n\ntextarea {\n    flex: 1;\n    white-space: pre;\n}\n\nfieldset {\n    border-style: solid;\n    border-color: var(--figma-color-border);\n    border-radius: var(--radii-md);\n    border-width: 1px;\n}\n\n.sliders label {\n    display: flex;\n    align-items: center;\n}\n\n.sliders .text-label {\n    flex: 1;\n}\n\n.sliders input[type=range] {\n    flex: 3;\n}\n\n.sliders input[type=text] {\n    width: 6rem;\n    border: 0 none;\n    background: transparent;\n    text-align: right;\n}\n\n\n[data-semantics] .sliders input[type=text] {\n    font-size: 0.9rem;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: var(--sy-base);\n    height: 100%;\n}\n\n\n#export {\n    background-color: var(--figma-color-bg-component);\n}\n\n/********** Range Input Styles **********/\n/*Range Reset*/\ninput[type=\"range\"] {\n    --thumb-color: var(--primary);\n    -webkit-appearance: none;\n    appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 15rem;\n    border: 0 none;\n    padding: 0;\n}\n\n/* Removes default focus */\ninput[type=\"range\"]:focus {\n    outline: none;\n}\n\n/***** Chrome, Safari, Opera and Edge Chromium styles *****/\n/* slider track */\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n    background-color: var(--figma-color-border);\n    border-radius: 0.5rem;\n    height: var(--slider-track-size);\n}\n\n/* slider thumb */\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    /* Override default look */\n    appearance: none;\n    margin-top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n\n    /*custom styles*/\n    background-color: var(--thumb-color);\n    height: var(--slider-thumb-size);\n    width: var(--slider-thumb-size);\n    border-radius: var(--slider-thumb-size);\n}\n\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    border: 1px solid #053a5f;\n    outline: 3px solid #053a5f;\n\n    outline-color: color-mix(in srgb, var(--thumb-color), transparent 20%);\n    outline-offset: 0.125rem;\n}\n\nhr {\n    border-color: var(--figma-color-border);\n}\n\na[data-expander]::after {\n    content: '';\n    display: inline-block;\n    width: 7.29px;\n    height: 7.29px;\n    border: solid var(--primary);\n    border-width: 0 1px 1px 0;\n    transform: rotate(-45deg) translate(2px, 0px);\n    margin-left: 4px;\n}\n\na[data-expanded=yes]::after {\n    transform: rotate(45deg) translate(0px, -5px);\n}\n\n.font-preview-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 3rem;\n    background-color: var(--figma-color-bg-secondary);\n}\n\n.font-preview-box .base {\n    font-size: var(--font-size-base);\n}\n\n.font-preview-box .md {\n    font-size: var(--font-size-md);\n}\n\n.font-preview-box .lg {\n    font-size: var(--font-size-lg);\n}\n\n.checkbox {\n    display: flex;\n}\n\n.checkbox:hover input[type=checkbox] {\n    border-color: var(--figma-color-border-selected);\n}\n\n.checkbox input[type=\"checkbox\"] {\n    appearance: none;\n    width: var(--line-height-base);\n    height: var(--line-height-base);\n    padding: 0;\n    border-radius: 4px;\n    flex: 0 0 auto;\n    \n}\n\n.checkbox input[type=\"checkbox\"]:checked {\n    border-color: var(--primary);\n    background-color: var(--primary);\n    position: relative;\n}\n\n.checkbox input[type=\"checkbox\"]:checked::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    border: 2px solid white;\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg) translate(1px, -3px);\n    width: 0.4rem;\n    height: 0.7rem;\n}\n\n\n.action-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.action-list li {\n    display: block;\n    border-bottom: 1px solid var(--figma-color-border);\n}\n\n.action-list li:last-child {\n    border-width: 0;\n}\n\n.action-list li a {\n    color: var(--figma-color-text);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: var(--sy-base) 0;\n}\n\n.action-list li a:hover {\n    color: var(--primary);\n    text-decoration: none;\n}\n\n.action-list span[data-value]::after {\n    content: '';\n    display: inline-block;\n    width: 7.29px;\n    height: 7.29px;\n    border: solid var(--primary);\n    border-width: 0 1px 1px 0;\n    transform: rotate(-45deg) translate(2px, 0px);\n    margin-left: var(--sx-sm);\n}\n\ndialog {\n    color: var(--figma-color-text);\n    background-color: var(--figma-color-bg);\n    border-radius: var(--radii-lg);\n    padding: var(--sy-lg) var(--sx-lg) ;\n    outline: 1px solid color-mix(in srgb, var(--figma-color-text), transparent 85%);\n    box-shadow: 0px 12px 20px -6px rgba(14, 16, 17, 0.10), 0px 30px 48px -8px rgba(14, 16, 17, 0.15);\n}\n\ndialog button.close {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n}\n\n.close-icon-bar {\n    width: 1px;\n    height: 10px;\n}\n\nbutton.close {\n    color: currentColor;\n    appearance: none;\n    border: 0 none;\n    background: transparent;\n    border-radius: var(--radii-base);\n    width: 1.5rem;\n    height: 1.5rem;\n    opacity: 0.6;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton.close svg {\n    color: var(--figma-color-text);\n}\n\nbutton.close:hover {\n    opacity: 1;\n}\n"],"sourceRoot":""}]);
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
    "12/16",
    "14/20",
    "16/24",
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
/* harmony export */   large: () => (/* binding */ large),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _tokens_typography_styles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/typography/styles.json */ "./src/tokens/typography/styles.json");
/* harmony import */ var _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/typography/typeface.json */ "./src/tokens/typography/typeface.json");
/* harmony import */ var _tokens_typography_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/typography/typescale-base.json */ "./src/tokens/typography/typescale-base.json");
/* harmony import */ var _tokens_typography_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/typography/typescale-compact.json */ "./src/tokens/typography/typescale-compact.json");
/* harmony import */ var _tokens_typography_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokens/typography/typescale-large.json */ "./src/tokens/typography/typescale-large.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");






const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(_tokens_typography_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__);
const compact = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(_tokens_typography_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__);
const large = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(_tokens_typography_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__);
const styles = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(_tokens_typography_styles_json__WEBPACK_IMPORTED_MODULE_0__);
function getTypograohyTokens(size) {
    let scaleTokens;
    switch (size) {
        case "compact": {
            scaleTokens = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(_tokens_typography_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__);
            break;
        }
        case "large": {
            scaleTokens = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(_tokens_typography_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__);
            break;
        }
        case "base": {
            scaleTokens = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(_tokens_typography_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__);
        }
    }
    return Object.assign(Object.assign(Object.assign({}, (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(_tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__)), scaleTokens), styles);
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
        <input data-range type="range" name="${name}" min="${min}" max="${max}" step="${step}" value="${value}">
        <input data-value type="text" onfocus="this.select();" value="${value}">
      </label>    
    `;
}
function processComponent(el, options) {
    el.innerHTML = getMarkup(options);
    const valueInput = el.querySelector(`input[data-value]`);
    const sliderElement = el.querySelector(`input[data-range]`);
    if (options.syncValue === true) {
        syncValues({ sliderElement, valueInput });
    }
    return { el, sliderElement, valueInput };
}
function syncValues({ sliderElement, valueInput }) {
    sliderElement.addEventListener("input", (event) => {
        valueInput.value = sliderElement.value;
    });
    valueInput.addEventListener("input", (event) => {
        sliderElement.value = valueInput.value;
    });
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

/***/ "./src/utils/text-to-title-case.ts":
/*!*****************************************!*\
  !*** ./src/utils/text-to-title-case.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toTitleCase: () => (/* binding */ toTitleCase)
/* harmony export */ });
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
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

/***/ }),

/***/ "./src/tokens/typography/typescale-base.json":
/*!***************************************************!*\
  !*** ./src/tokens/typography/typescale-base.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"25","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"29","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"33","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"49","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"65","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"81","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"89","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"88","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/typescale-compact.json":
/*!******************************************************!*\
  !*** ./src/tokens/typography/typescale-compact.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"23","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"29","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"33","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"49","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"65","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"81","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"88","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/typescale-large.json":
/*!****************************************************!*\
  !*** ./src/tokens/typography/typescale-large.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"21","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"25","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"29","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"33","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"37","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"49","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"65","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"81","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"88","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

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
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./src/ui/slider.ts");
/* harmony import */ var _utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/text-to-title-case */ "./src/utils/text-to-title-case.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");
/* harmony import */ var _radii_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../radii-tokens */ "./src/radii-tokens.ts");
/* harmony import */ var _typescale_tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../typescale-tokens */ "./src/typescale-tokens.ts");
/* harmony import */ var _spacing_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../spacing-tokens */ "./src/spacing-tokens.ts");









const form = document.querySelector('form');
const card = document.querySelector('.color-preview');
const accentSlidersContainer = document.getElementById('accentColorsSliders');
let importButton = document.getElementById('importVariablesButton');
let resetDefaultsButton = document.getElementById('resetDefaultsButton');
let sliders = {};
let defaultData;
document.querySelectorAll('[data-command="renderAccents"]').forEach((el) => {
    el.addEventListener('click', (e) => {
        const params = getFormData();
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
        const params = getFormData();
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
function closeModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.close();
    return false;
}
document.querySelectorAll('[data-expander][data-role="trigger"]').forEach((el) => {
    const next = el.nextElementSibling;
    if (next.dataset.role == 'container') {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            next.style.display = next.style.display == 'none' ? 'block' : 'none';
            el.setAttribute('data-expanded', next.style.display == 'none' ? 'no' : 'yes');
        });
    }
    else {
        console.warn('Cannot find container to expand');
    }
});
function transformValue(type, value) {
    const valueMaps = {
        'semantics': _defaults__WEBPACK_IMPORTED_MODULE_5__.systemAccentList,
        'typography': _defaults__WEBPACK_IMPORTED_MODULE_5__.typographySizeValues,
        'radii': _defaults__WEBPACK_IMPORTED_MODULE_5__.radiiSizeName,
        'spacing': _defaults__WEBPACK_IMPORTED_MODULE_5__.spacingSizeName
    };
    const values = valueMaps[type];
    const resolvedValue = values[value];
    return (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_4__.toTitleCase)(resolvedValue || value);
}
document.querySelectorAll('[data-slider]').forEach((el) => {
    const sliderCompoent = (0,_slider__WEBPACK_IMPORTED_MODULE_3__.initSlider)(el, { syncValue: el.dataset.type == null });
    sliders[sliderCompoent.params.name] = sliderCompoent;
    if (el.dataset.type != null) {
        sliderCompoent.sliderElement.setAttribute('readonly', 'true');
        sliderCompoent.sliderElement.addEventListener('input', (e) => {
            sliderCompoent.valueInput.value = transformValue(el.dataset.type, sliderCompoent.sliderElement.value);
        });
        sliderCompoent.valueInput.value = transformValue(el.dataset.type, sliderCompoent.sliderElement.value);
    }
});
Object.entries(_defaults__WEBPACK_IMPORTED_MODULE_5__.defaultAccentHUEs).forEach(([name, hue]) => {
    const options = { "label": (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_4__.toTitleCase)(name), "name": name, "min": 0, "max": 360, "step": 1, "value": hue, syncValue: true };
    let el = document.createElement('div');
    const sliderCompoent = (0,_slider__WEBPACK_IMPORTED_MODULE_3__.initSlider)(el, options);
    accentSlidersContainer.appendChild(el);
    sliders[name] = sliderCompoent;
});
form.addEventListener("input", (e) => {
    generatePreview();
});
resetDefaultsButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    generatePreview();
});
importButton.addEventListener('click', (e) => {
    e.preventDefault();
    let message = {
        type: "IMPORT",
        params: getFormData()
    };
    parent.postMessage({ pluginMessage: message }, "*");
});
generatePreview();
function getCheckboxValue(propName, formData) {
    let radii = [];
    formData.forEach((value) => {
        if (value[propName]) {
            radii.push(value.radii);
        }
    });
    return radii;
}
function getFormData() {
    const formEntries = new FormData(form).entries();
    const entries = Array.from(formEntries, ([x, y]) => ({ [x]: y }));
    const accentList = _defaults__WEBPACK_IMPORTED_MODULE_5__.systemAccentList;
    let rawValues;
    entries.forEach(val => {
        rawValues = Object.assign(rawValues || {}, val);
    });
    return {
        type: 'IMPORT',
        singleCollection: rawValues.singleCollection && rawValues.singleCollection === 'true',
        hue: parseInt(rawValues.hue),
        saturation: parseInt(rawValues.saturation) / 100,
        distance: parseInt(rawValues.distance) / 100,
        primary: accentList[rawValues.primary],
        info: accentList[rawValues.info],
        success: accentList[rawValues.success],
        warning: accentList[rawValues.warning],
        danger: accentList[rawValues.danger],
        red: parseInt(rawValues.red),
        amber: parseInt(rawValues.amber),
        brown: parseInt(rawValues.brown),
        green: parseInt(rawValues.green),
        teal: parseInt(rawValues.teal),
        cyan: parseInt(rawValues.cyan),
        blue: parseInt(rawValues.blue),
        indigo: parseInt(rawValues.indigo),
        violet: parseInt(rawValues.violet),
        purple: parseInt(rawValues.purple),
        pink: parseInt(rawValues.pink),
        typeScale: _defaults__WEBPACK_IMPORTED_MODULE_5__.typographySizeName[rawValues.fontSize],
        createStyles: false,
        accentSaturation: parseInt(rawValues.accentSaturation) / 100,
        radii: _defaults__WEBPACK_IMPORTED_MODULE_5__.radiiSizeName[rawValues.radii],
        spacing: _defaults__WEBPACK_IMPORTED_MODULE_5__.spacingSizeName[rawValues.spacing]
    };
}
function generatePreview() {
    let data = getFormData();
    for (var a = 1, b = 7; a < b; a++) {
        const colorLight = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hsl(data.hue, data.saturation, 1 - data.distance * a);
        const colorDark = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hsl(data.hue, data.saturation, 0.2 + data.distance * a);
        card.style.setProperty(`--light-${a}`, colorLight.hex());
        card.style.setProperty(`--dark-${a}`, colorDark.hex());
    }
    sliders['hue'].sliderElement.style.setProperty('--thumb-color', chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hsl(data.hue, data.accentSaturation, 0.5).hex());
    sliders['saturation'].sliderElement.style.setProperty('--thumb-color', chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hsl(data.hue, data.saturation, 0.5).hex());
    const semanticSlidersUpdateMap = [
        ["primary", data.primary],
        ["info", data.info],
        ["success", data.success],
        ["warning", data.warning],
        ["danger", data.danger],
    ];
    Object.entries(_defaults__WEBPACK_IMPORTED_MODULE_5__.defaultAccentHUEs).forEach(([name, hue]) => {
        const sliderValue = data[name];
        const accentColor = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hsl([sliderValue, data.accentSaturation, 0.5]).luminance(0.18);
        sliders[name].sliderElement.style.setProperty('--thumb-color', accentColor.hex());
    });
    semanticSlidersUpdateMap.forEach(([sliderName, sliderValue]) => {
        const sliderAccentColor = sliders[sliderValue].sliderElement.style.getPropertyValue('--thumb-color');
        sliders[sliderName].sliderElement.style.setProperty('--thumb-color', sliderAccentColor);
        document.documentElement.style.setProperty(`--${sliderName}`, sliderAccentColor);
        const valueEl = document.querySelector(`.color-box.a-${sliderName} > .token-value`);
        if (valueEl) {
            valueEl.innerHTML = sliderValue;
        }
    });
    generateCSSVars(_radii_tokens__WEBPACK_IMPORTED_MODULE_6__[data.radii]);
    generateCSSVars(_typescale_tokens__WEBPACK_IMPORTED_MODULE_7__[data.typeScale]);
    generateCSSVars(_spacing_tokens__WEBPACK_IMPORTED_MODULE_8__[data.spacing]);
    updateValuesDisplay(data);
}
function updateValuesDisplay(data) {
    Object.entries(data).forEach(([key, value]) => {
        document.querySelectorAll(`[data-value=${key}]`).forEach((el) => {
            el.innerHTML = transformValue(el.dataset.type, value);
        });
    });
}
function generateCSSVars(tokens = {}) {
    Object.entries(tokens).forEach(([name, value]) => {
        const varName = `--${name.replace(/\//g, "-")}`;
        const varValue = parseInt(value["$value"]);
        if (varValue != null) {
            document.documentElement.style.setProperty(varName, `${varValue}px`);
        }
        else {
            console.error(`Variable ${varName} value is not an integer`);
        }
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLFlBQVksV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsT0FBTyxZQUFZLGFBQWEsTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsYUFBYSxPQUFPLEtBQUssV0FBVyxhQUFhLE9BQU8sS0FBSyxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFB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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUNBQXlDO0FBQ3pDLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsaUJBQWlCO0FBQ3JFOztBQUVBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw2QkFBNkIsaUVBQWlFO0FBQzlGLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxpQkFBaUI7QUFDdEU7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5L0dEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0M7QUFDUztBQUNPO0FBQ29CO0FBQ2tGO0FBQ25HO0FBQ1E7QUFDSjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxxQkFBcUIsdURBQWdCO0FBQ3JDLHNCQUFzQiwyREFBb0I7QUFDMUMsaUJBQWlCLG9EQUFhO0FBQzlCLG1CQUFtQixzREFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxXQUFXLHNFQUFXO0FBQ3RCO0FBQ0E7QUFDQSwyQkFBMkIsbURBQVUsT0FBTyxvQ0FBb0M7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNELGVBQWUsd0RBQWlCO0FBQ2hDLHNCQUFzQixTQUFTLHNFQUFXO0FBQzFDO0FBQ0EsMkJBQTJCLG1EQUFVO0FBQ3JDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxRQUFRO0FBQ25FLHVCQUF1Qix1REFBZ0I7QUFDdkM7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseURBQWtCO0FBQ3JDO0FBQ0E7QUFDQSxlQUFlLG9EQUFhO0FBQzVCLGlCQUFpQixzREFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLDJCQUEyQixvREFBVTtBQUNyQywwQkFBMEIsb0RBQVU7QUFDcEMsMENBQTBDLEVBQUU7QUFDNUMseUNBQXlDLEVBQUU7QUFDM0M7QUFDQSxvRUFBb0Usb0RBQVU7QUFDOUUsMkVBQTJFLG9EQUFVO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFpQjtBQUNwQztBQUNBLDRCQUE0QixvREFBVTtBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsV0FBVztBQUNuRSwrREFBK0QsWUFBWTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLDBDQUFLO0FBQ3pCLG9CQUFvQiw4Q0FBUztBQUM3QixvQkFBb0IsNENBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsSUFBSTtBQUNyRDtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSw2QkFBNkIseUJBQXlCO0FBQ3REO0FBQ0E7QUFDQSxtRUFBbUUsU0FBUztBQUM1RTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91aS91dGlscy5jc3MiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvc3R5bGVzLmNzcz9jZWM4Iiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvdXRpbHMuY3NzPzRmZGIiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2RlZmF1bHRzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvcmFkaWktdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvc3BhY2luZy10b2tlbnMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy90eXBlc2NhbGUtdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvc2xpZGVyLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmxhdHRlbi1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy90ZXh0LXRvLXRpdGxlLWNhc2UudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvY2hyb21hLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvaW1wb3J0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjMuMiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNzY4cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTI4MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxNTM2cHg7XFxuICB9XFxufVxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5jb2xsYXBzZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnN0aWNreSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG4uYm90dG9tLTAge1xcbiAgYm90dG9tOiAwcHg7XFxufVxcbi5sZWZ0LTAge1xcbiAgbGVmdDogMHB4O1xcbn1cXG4ucmlnaHQtMCB7XFxuICByaWdodDogMHB4O1xcbn1cXG4ubS0wIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG4ubXgtMyB7XFxuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuLm14LTQge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5tYi0zIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcbi5tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcbi5tci0xIHtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLm1yLTQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4ubXQtMyB7XFxuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xcbn1cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5pbmxpbmUge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGFibGUge1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5jb250ZW50cyB7XFxuICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZmxleC0xIHtcXG4gIGZsZXg6IDEgMSAwJTtcXG59XFxuLmJvcmRlci1jb2xsYXBzZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG4udHJhbnNmb3JtIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXG4ucmVzaXplIHtcXG4gIHJlc2l6ZTogYm90aDtcXG59XFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaXRlbXMtc3RhcnQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLml0ZW1zLWJhc2VsaW5lIHtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5nYXAtMCB7XFxuICBnYXA6IDBweDtcXG59XFxuLmdhcC0xIHtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuLmdhcC0yIHtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4uZ2FwLTMge1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG4uZ2FwLTQge1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4ub3ZlcmZsb3ctaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbi5yb3VuZGVkLW1kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbn1cXG4ucm91bmRlZC1ub25lIHtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLnJvdW5kZWQtbCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTtcXG59XFxuLmJvcmRlciB7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLmJnLXdoaXRlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLnAtNCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucHgtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4ucHktMyB7XFxuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmFsaWduLWJhc2VsaW5lIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLmFsaWduLXRvcCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4udGV4dC1sZyB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi50ZXh0LXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxufVxcbi5jYXBpdGFsaXplIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4uaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLnVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbn1cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XFxufVxcbi5vcGFjaXR5LTcwIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuLm9wYWNpdHktNzUge1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuLnNoYWRvdyB7XFxuICAtLXR3LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAzcHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDFweCAycHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4ub3V0bGluZSB7XFxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG59XFxuLmJsdXIge1xcbiAgLS10dy1ibHVyOiBibHVyKDhweCk7XFxuICBmaWx0ZXI6IGJsdXIoOHB4KSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbn1cXG4uZmlsdGVyIHtcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNwYWNpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICAtLXNsaWRlci10aHVtYi1zaXplOiAxLjVyZW07XFxuICAgIC0tc2xpZGVyLXRyYWNrLXNpemU6IDAuMjVyZW07XFxuXFxuICAgIC0tcHJpbWFyeTogIzBDNzVEMDtcXG4gICAgLS1pbmZvOiAjMDc4MzgwO1xcbiAgICAtLXN1Y2Nlc3M6ICMwNzg2NTA7XFxuICAgIC0td2FybmluZzogI0MxNTYwMDtcXG4gICAgLS1kYW5nZXI6ICNFODFCMDA7XFxuXFxuICAgIC0tZm9udC1zaXplLWJhc2U6IDEycHg7XFxuICAgIC0tbGluZS1oZWlnaHQtYmFzZTogMTZweDtcXG5cXG4gICAgLS1mb250LXNpemUtbWQ6IDE0cHg7XFxuICAgIC0tbGluZS1oZWlnaHQtbWQ6IDIwcHg7XFxuICAgIC0tZm9udC1zaXplLWxnOiAxNnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LWxnOiAyNHB4O1xcblxcbiAgICAtLXJhZGlpLWJhc2U6IDRweDtcXG4gICAgLS1yYWRpaS1tZDogY2FsYyh2YXIoLS1yYWRpaS1iYXNlKSArIDJweCk7XFxuICAgIC0tcmFkaWktbWQ6IGNhbGModmFyKC0tcmFkaWktYmFzZSkgKyA0cHgpO1xcblxcbiAgICAtLXN4LXhzNDogMnB4O1xcbiAgICAtLXN4LXhzMzogNHB4O1xcbiAgICAtLXN4LXhzMjogNnB4O1xcbiAgICAtLXN4LXhzOiA4cHg7XFxuICAgIC0tc3gtc206IDEycHg7XFxuICAgIC0tc3gtYmFzZTogMTZweDtcXG4gICAgLS1zeC1tZDogMjBweDtcXG4gICAgLS1zeC1sZzogMjRweDtcXG4gICAgLS1zeC14bDogMjhweDtcXG4gICAgLS1zeC14bDI6IDMycHg7XFxuICAgIC0tc3gteGwzOiA0MHB4O1xcblxcbiAgICAtLXN5LXhzNDogMXB4O1xcbiAgICAtLXN5LXhzMzogMnB4O1xcbiAgICAtLXN5LXhzMjogNHB4O1xcbiAgICAtLXN5LXhzOiA2cHg7XFxuICAgIC0tc3ktc206IDhweDtcXG4gICAgLS1zeS1iYXNlOiAxMnB4O1xcbiAgICAtLXN5LW1kOiAxNnB4O1xcbiAgICAtLXN5LWxnOiAyMHB4O1xcbiAgICAtLXN5LXhsOiAyNHB4O1xcbiAgICAtLXN5LXhsMjogMjhweDtcXG4gICAgLS1zeS14bDM6IDMycHg7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiAjMEM3NUQwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmZpZ21hLWJnLXNlY29uZGFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLXNlY29uZGFyeSk7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgLS1saWdodC0xOiAjZjhmYWZjO1xcbiAgICAtLWxpZ2h0LTI6ICNlMWU3ZWE7XFxuICAgIC0tbGlnaHQtMzogI2U3ZWNlZTtcXG4gICAgLS1saWdodC00OiAjZWRmMWYzO1xcbiAgICAtLWxpZ2h0LTU6ICNmMmY2Zjc7XFxuXFxuICAgIC0tZGFyay0xOiAjMTIxNTE2O1xcbiAgICAtLWRhcmstMjogIzE3MWExYztcXG4gICAgLS1kYXJrLTM6ICMxYzIwMjI7XFxuICAgIC0tZGFyay00OiAjMjAyNTI3O1xcbiAgICAtLWRhcmstNTogIzI1MmEyZDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKDRweCArIDRweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLW1kKTtcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zeS1iYXNlKSB2YXIoLS1zeC1iYXNlKSA7XFxuICAgIGdhcDogMTJweDtcXG4gICAgZ2FwOiB2YXIoLS1zeS1iYXNlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtc3Rpa3kge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAtLXR3LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgNHB4IDZweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG5cXG4uY29sb3ItYm94IHtcXG4gICAgbWluLWhlaWdodDogMnJlbTtcXG4gICAgO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtc20pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb2xvci1ib3gubC0xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtMSk7XFxufVxcblxcbi5jb2xvci1ib3gubC0yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtMik7XFxufVxcblxcbi5jb2xvci1ib3gubC0zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtMyk7XFxufVxcblxcbi5jb2xvci1ib3gubC00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtNCk7XFxufVxcblxcbi5jb2xvci1ib3gubC01IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtNSk7XFxufVxcblxcbi5jb2xvci1ib3guZC0xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0xKTtcXG59XFxuXFxuLmNvbG9yLWJveC5kLTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTIpO1xcbn1cXG5cXG4uY29sb3ItYm94LmQtMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstMyk7XFxufVxcblxcbi5jb2xvci1ib3guZC00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay00KTtcXG59XFxuXFxuLmNvbG9yLWJveC5kLTUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTUpO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtcHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQzc1RDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzgzODA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZm8pO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtc3VjY2VzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzg2NTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtd2FybmluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMTU2MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xcbn1cXG5cXG4uY29sb3ItYm94LmEtZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUIwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG59XFxuXFxuLmNvbG9yLWJveCAudG9rZW4tdmFsdWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC14cyk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zeS14cykgdmFyKC0tc3gtc20pO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zeS14cykgdmFyKC0tc3gtc20pO1xcbn1cXG5cXG5mb3JtPioge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDNzVEMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25icmFuZCk7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMEM3NUQwO1xcbiAgICA7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ucmFkaW9ncm91cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5yYWRpb2dyb3VwIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDNzVEMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG5cXG4ucmFkaW9ncm91cCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLS10dy1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAzcHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDFweCAycHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KX1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLXNlbGVjdGVkKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyg0cHggKyA0cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1tZCk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4uc2xpZGVycyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zbGlkZXJzIC50ZXh0LWxhYmVsIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnNsaWRlcnMgaW5wdXRbdHlwZT1yYW5nZV0ge1xcbiAgICBmbGV4OiAzO1xcbn1cXG5cXG4uc2xpZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcblxcbltkYXRhLXNlbWFudGljc10gLnNsaWRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBnYXA6IHZhcigtLXN5LWJhc2UpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbiNleHBvcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1jb21wb25lbnQpO1xcbn1cXG5cXG4vKioqKioqKioqKiBSYW5nZSBJbnB1dCBTdHlsZXMgKioqKioqKioqKi9cXG4vKlJhbmdlIFJlc2V0Ki9cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFJlbW92ZXMgZGVmYXVsdCBmb2N1cyAqL1xcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKioqKiogQ2hyb21lLCBTYWZhcmksIE9wZXJhIGFuZCBFZGdlIENocm9taXVtIHN0eWxlcyAqKioqKi9cXG4vKiBzbGlkZXIgdHJhY2sgKi9cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAwLjI1cmVtO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNsaWRlci10cmFjay1zaXplKTtcXG59XFxuXFxuLyogc2xpZGVyIHRodW1iICovXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCgxLjVyZW0gLSAwLjI1cmVtKSAvIC0yKTtcXG4gICAgbWFyZ2luLXRvcDogY2FsYygodmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC0gdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpKSAvIC0yKTtcXG5cXG4gICAgLypjdXN0b20gc3R5bGVzKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWItY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIHdpZHRoOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNTNhNWY7XFxuICAgIG91dGxpbmU6IDNweCBzb2xpZCAjMDUzYTVmO1xcblxcbiAgICBvdXRsaW5lLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdGh1bWItY29sb3IpLCB0cmFuc3BhcmVudCAyMCUpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMC4xMjVyZW07XFxufVxcblxcbmhyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xcbn1cXG5cXG5hW2RhdGEtZXhwYW5kZXJdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA3LjI5cHg7XFxuICAgIGhlaWdodDogNy4yOXB4O1xcbiAgICBib3JkZXI6IHNvbGlkICMwQzc1RDA7XFxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDJweCwgMHB4KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuYVtkYXRhLWV4cGFuZGVkPXllc106OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgwcHgsIC01cHgpO1xcbn1cXG5cXG4uZm9udC1wcmV2aWV3LWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLXNlY29uZGFyeSk7XFxufVxcblxcbi5mb250LXByZXZpZXctYm94IC5iYXNlIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcXG59XFxuXFxuLmZvbnQtcHJldmlldy1ib3ggLm1kIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5mb250LXByZXZpZXctYm94IC5sZyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXIgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1zZWxlY3RlZCk7XFxufVxcblxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIHdpZHRoOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBcXG59XFxuXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzBDNzVEMDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDNzVEMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDFweCwgLTNweCk7XFxuICAgIHdpZHRoOiAwLjRyZW07XFxuICAgIGhlaWdodDogMC43cmVtO1xcbn1cXG5cXG5cXG4uYWN0aW9uLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWN0aW9uLWxpc3QgbGkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxufVxcblxcbi5hY3Rpb24tbGlzdCBsaTpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG5cXG4uYWN0aW9uLWxpc3QgbGkgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMnB4IDA7XFxuICAgIHBhZGRpbmc6IHZhcigtLXN5LWJhc2UpIDA7XFxufVxcblxcbi5hY3Rpb24tbGlzdCBsaSBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwQzc1RDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmFjdGlvbi1saXN0IHNwYW5bZGF0YS12YWx1ZV06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDcuMjlweDtcXG4gICAgaGVpZ2h0OiA3LjI5cHg7XFxuICAgIGJvcmRlcjogc29saWQgIzBDNzVEMDtcXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMnB4LCAwcHgpO1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXN4LXNtKTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWxnKTtcXG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zeS1sZykgdmFyKC0tc3gtbGcpIDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1maWdtYS1jb2xvci10ZXh0KSwgdHJhbnNwYXJlbnQgODUlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCAtNnB4IHJnYmEoMTQsIDE2LCAxNywgMC4xMCksIDBweCAzMHB4IDQ4cHggLThweCByZ2JhKDE0LCAxNiwgMTcsIDAuMTUpO1xcbn1cXG5cXG5kaWFsb2cgYnV0dG9uLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG4gICAgcmlnaHQ6IDhweDtcXG59XFxuXFxuLmNsb3NlLWljb24tYmFyIHtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG5idXR0b24uY2xvc2Uge1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24uY2xvc2Ugc3ZnIHtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbn1cXG5cXG5idXR0b24uY2xvc2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCx3UkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYztFQUFkLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7O0NBQWM7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7Ozs7OztFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQs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QUF5QjtJQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixrQkFBbUM7SUFBbkMsbUNBQW1DO0lBQ25DLCtFQUErRTtJQUMvRSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUFnQjtPQUFoQixxQkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWdDO0lBQWhDLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG46cm9vdCB7XFxuICAgIC0tc3BhY2luZzogMC41cmVtIDFyZW07XFxuICAgIC0tc2xpZGVyLXRodW1iLXNpemU6IDEuNXJlbTtcXG4gICAgLS1zbGlkZXItdHJhY2stc2l6ZTogMC4yNXJlbTtcXG5cXG4gICAgLS1wcmltYXJ5OiAjMEM3NUQwO1xcbiAgICAtLWluZm86ICMwNzgzODA7XFxuICAgIC0tc3VjY2VzczogIzA3ODY1MDtcXG4gICAgLS13YXJuaW5nOiAjQzE1NjAwO1xcbiAgICAtLWRhbmdlcjogI0U4MUIwMDtcXG5cXG4gICAgLS1mb250LXNpemUtYmFzZTogMTJweDtcXG4gICAgLS1saW5lLWhlaWdodC1iYXNlOiAxNnB4O1xcblxcbiAgICAtLWZvbnQtc2l6ZS1tZDogMTRweDtcXG4gICAgLS1saW5lLWhlaWdodC1tZDogMjBweDtcXG4gICAgLS1mb250LXNpemUtbGc6IDE2cHg7XFxuICAgIC0tbGluZS1oZWlnaHQtbGc6IDI0cHg7XFxuXFxuICAgIC0tcmFkaWktYmFzZTogNHB4O1xcbiAgICAtLXJhZGlpLW1kOiBjYWxjKHZhcigtLXJhZGlpLWJhc2UpICsgMnB4KTtcXG4gICAgLS1yYWRpaS1tZDogY2FsYyh2YXIoLS1yYWRpaS1iYXNlKSArIDRweCk7XFxuXFxuICAgIC0tc3gteHM0OiAycHg7XFxuICAgIC0tc3gteHMzOiA0cHg7XFxuICAgIC0tc3gteHMyOiA2cHg7XFxuICAgIC0tc3gteHM6IDhweDtcXG4gICAgLS1zeC1zbTogMTJweDtcXG4gICAgLS1zeC1iYXNlOiAxNnB4O1xcbiAgICAtLXN4LW1kOiAyMHB4O1xcbiAgICAtLXN4LWxnOiAyNHB4O1xcbiAgICAtLXN4LXhsOiAyOHB4O1xcbiAgICAtLXN4LXhsMjogMzJweDtcXG4gICAgLS1zeC14bDM6IDQwcHg7XFxuXFxuICAgIC0tc3kteHM0OiAxcHg7XFxuICAgIC0tc3kteHMzOiAycHg7XFxuICAgIC0tc3kteHMyOiA0cHg7XFxuICAgIC0tc3kteHM6IDZweDtcXG4gICAgLS1zeS1zbTogOHB4O1xcbiAgICAtLXN5LWJhc2U6IDEycHg7XFxuICAgIC0tc3ktbWQ6IDE2cHg7XFxuICAgIC0tc3ktbGc6IDIwcHg7XFxuICAgIC0tc3kteGw6IDI0cHg7XFxuICAgIC0tc3kteGwyOiAyOHB4O1xcbiAgICAtLXN5LXhsMzogMzJweDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5maWdtYS1iZy1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIC0tbGlnaHQtMTogI2Y4ZmFmYztcXG4gICAgLS1saWdodC0yOiAjZTFlN2VhO1xcbiAgICAtLWxpZ2h0LTM6ICNlN2VjZWU7XFxuICAgIC0tbGlnaHQtNDogI2VkZjFmMztcXG4gICAgLS1saWdodC01OiAjZjJmNmY3O1xcblxcbiAgICAtLWRhcmstMTogIzEyMTUxNjtcXG4gICAgLS1kYXJrLTI6ICMxNzFhMWM7XFxuICAgIC0tZGFyay0zOiAjMWMyMDIyO1xcbiAgICAtLWRhcmstNDogIzIwMjUyNztcXG4gICAgLS1kYXJrLTU6ICMyNTJhMmQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktbWQpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zeS1iYXNlKSB2YXIoLS1zeC1iYXNlKSA7XFxuICAgIGdhcDogdmFyKC0tc3ktYmFzZSk7XFxuXFxuICAgIEBhcHBseSBmbGV4IGZsZXgtY29sO1xcbn1cXG5cXG4uY2FyZC1zdGlreSB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIEBhcHBseSByb3VuZGVkLW5vbmUgbS0wIHNoYWRvdy1tZDtcXG59XFxuXFxuLmNvbG9yLWJveCB7XFxuICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxuICAgIDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXNtKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29sb3ItYm94LmwtMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LTEpO1xcbn1cXG5cXG4uY29sb3ItYm94LmwtMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LTIpO1xcbn1cXG5cXG4uY29sb3ItYm94LmwtMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LTMpO1xcbn1cXG5cXG4uY29sb3ItYm94LmwtNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LTQpO1xcbn1cXG5cXG4uY29sb3ItYm94LmwtNSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LTUpO1xcbn1cXG5cXG4uY29sb3ItYm94LmQtMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstMSk7XFxufVxcblxcbi5jb2xvci1ib3guZC0yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0yKTtcXG59XFxuXFxuLmNvbG9yLWJveC5kLTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbn1cXG5cXG4uY29sb3ItYm94LmQtNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstNCk7XFxufVxcblxcbi5jb2xvci1ib3guZC01IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay01KTtcXG59XFxuXFxuLmNvbG9yLWJveC5hLXByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLmNvbG9yLWJveC5hLWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmZvKTtcXG59XFxuXFxuLmNvbG9yLWJveC5hLXN1Y2Nlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcXG59XFxuXFxuLmNvbG9yLWJveC5hLXdhcm5pbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nKTtcXG59XFxuXFxuLmNvbG9yLWJveC5hLWRhbmdlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XFxufVxcblxcbi5jb2xvci1ib3ggLnRva2VuLXZhbHVlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQteHMpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3kteHMpIHZhcigtLXN4LXNtKTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zeS14cykgdmFyKC0tc3gtc20pO1xcbn1cXG5cXG5mb3JtPioge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25icmFuZCk7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnJhZGlvZ3JvdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1zZWNvbmRhcnkpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGdhcDogMXB4O1xcbiAgICBAYXBwbHkgZmxleCBmbGV4LXJvdyByb3VuZGVkO1xcbn1cXG5cXG4ucmFkaW9ncm91cCBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuXFxuICAgIEBhcHBseSByb3VuZGVkLW5vbmU7XFxufVxcblxcbi5yYWRpb2dyb3VwIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBAYXBwbHkgc2hhZG93XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc2VsZWN0ZWQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1tZCk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4uc2xpZGVycyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zbGlkZXJzIC50ZXh0LWxhYmVsIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnNsaWRlcnMgaW5wdXRbdHlwZT1yYW5nZV0ge1xcbiAgICBmbGV4OiAzO1xcbn1cXG5cXG4uc2xpZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcblxcbltkYXRhLXNlbWFudGljc10gLnNsaWRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zeS1iYXNlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4jZXhwb3J0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctY29tcG9uZW50KTtcXG59XFxuXFxuLyoqKioqKioqKiogUmFuZ2UgSW5wdXQgU3R5bGVzICoqKioqKioqKiovXFxuLypSYW5nZSBSZXNldCovXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFJlbW92ZXMgZGVmYXVsdCBmb2N1cyAqL1xcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKioqKiogQ2hyb21lLCBTYWZhcmksIE9wZXJhIGFuZCBFZGdlIENocm9taXVtIHN0eWxlcyAqKioqKi9cXG4vKiBzbGlkZXIgdHJhY2sgKi9cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSk7XFxufVxcblxcbi8qIHNsaWRlciB0aHVtYiAqL1xcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGxvb2sgKi9cXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogY2FsYygodmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC0gdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpKSAvIC0yKTtcXG5cXG4gICAgLypjdXN0b20gc3R5bGVzKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWItY29sb3IpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcXG4gICAgd2lkdGg6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNTNhNWY7XFxuICAgIG91dGxpbmU6IDNweCBzb2xpZCAjMDUzYTVmO1xcblxcbiAgICBvdXRsaW5lLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdGh1bWItY29sb3IpLCB0cmFuc3BhcmVudCAyMCUpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMC4xMjVyZW07XFxufVxcblxcbmhyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xcbn1cXG5cXG5hW2RhdGEtZXhwYW5kZXJdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA3LjI5cHg7XFxuICAgIGhlaWdodDogNy4yOXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgycHgsIDBweCk7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcbmFbZGF0YS1leHBhbmRlZD15ZXNdOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoMHB4LCAtNXB4KTtcXG59XFxuXFxuLmZvbnQtcHJldmlldy1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uZm9udC1wcmV2aWV3LWJveCAuYmFzZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xcbn1cXG5cXG4uZm9udC1wcmV2aWV3LWJveCAubWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5mb250LXByZXZpZXctYm94IC5sZyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc2VsZWN0ZWQpO1xcbn1cXG5cXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgXFxufVxcblxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoMXB4LCAtM3B4KTtcXG4gICAgd2lkdGg6IDAuNHJlbTtcXG4gICAgaGVpZ2h0OiAwLjdyZW07XFxufVxcblxcblxcbi5hY3Rpb24tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hY3Rpb24tbGlzdCBsaSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcXG59XFxuXFxuLmFjdGlvbi1saXN0IGxpOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXItd2lkdGg6IDA7XFxufVxcblxcbi5hY3Rpb24tbGlzdCBsaSBhIHtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IHZhcigtLXN5LWJhc2UpIDA7XFxufVxcblxcbi5hY3Rpb24tbGlzdCBsaSBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5hY3Rpb24tbGlzdCBzcGFuW2RhdGEtdmFsdWVdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA3LjI5cHg7XFxuICAgIGhlaWdodDogNy4yOXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgycHgsIDBweCk7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zeC1zbSk7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1sZyk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXN5LWxnKSB2YXIoLS1zeC1sZykgO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZpZ21hLWNvbG9yLXRleHQpLCB0cmFuc3BhcmVudCA4NSUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IC02cHggcmdiYSgxNCwgMTYsIDE3LCAwLjEwKSwgMHB4IDMwcHggNDhweCAtOHB4IHJnYmEoMTQsIDE2LCAxNywgMC4xNSk7XFxufVxcblxcbmRpYWxvZyBidXR0b24uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbiAgICByaWdodDogOHB4O1xcbn1cXG5cXG4uY2xvc2UtaWNvbi1iYXIge1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5jbG9zZSB7XFxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24uY2xvc2Ugc3ZnIHtcXG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbn1cXG5cXG5idXR0b24uY2xvc2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGV4dC1zaXplLXhzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQteHMpO1xcbn1cXG5cXG4udGV4dC1zaXplLXNtIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtc20pO1xcbn1cXG5cXG4udGV4dC1zaXplLWJhc2Uge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbn1cXG5cXG4udGV4dC1zaXplLW1kIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbWQpO1xcbn1cXG5cXG4udGV4dC1zaXplLWxnIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbGcpO1xcbn1cXG5cXG4ucmFkaWktYmFzZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xcbn1cXG5cXG4ucmFkaWktYmFzZS1sIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSkgMCAwIHZhcigtLXJhZGlpLWJhc2UpO1xcbn1cXG5cXG4ucmFkaWktbWQge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1tZCk7XFxufVxcblxcbi5weC14czQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LXhzNCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXhzNCk7XFxufVxcbi5weC14czMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LXhzMyk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXhzMyk7XFxufVxcbi5weC14czIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LXhzMik7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXhzMik7XFxufVxcbi5weC14cyB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteHMpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC14cyk7XFxufVxcbi5weC1zbSB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gtc20pO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC1zbSk7XFxufVxcbi5weC1iYXNlIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC1iYXNlKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gtYmFzZSk7XFxufVxcbi5weC1tZCB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gtbWQpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC1tZCk7XFxufVxcbi5weC1sZyB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gtbGcpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC1sZyk7XFxufVxcbi5weC14bCB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteGwpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC14bCk7XFxufVxcbi5weC14bDIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LXhsMik7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXhsMik7XFxufVxcbi5weC14bDMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LXhsMyk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXhsMyk7XFxufVxcblxcbi5weS14czQge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3kteHM0KTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXhzNCk7XFxufVxcbi5weS14czMge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3kteHMzKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXhzMyk7XFxufVxcbi5weS14czIge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3kteHMyKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXhzMik7XFxufVxcbi5weS14cyB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14cyk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS14cyk7XFxufVxcbi5weS1zbSB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS1zbSk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS1zbSk7XFxufVxcbi5weS1iYXNlIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LWJhc2UpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3ktYmFzZSk7XFxufVxcbi5weS1tZCB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS1tZCk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS1tZCk7XFxufVxcbi5weS1sZyB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS1sZyk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS1sZyk7XFxufVxcbi5weS14bCB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14bCk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS14bCk7XFxufVxcbi5weS14bDIge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3kteGwyKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXhsMik7XFxufVxcbi5weS14bDMge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3kteGwzKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXhsMyk7XFxufVxcblxcblxcbi5nYXAtc3kteHM0IHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14czQpO1xcbn1cXG4uZ2FwLXN5LXhzMyB7XFxuICAgIGdhcDogdmFyKC0tc3kteHMzKTtcXG59XFxuLmdhcC1zeS14czIge1xcbiAgICBnYXA6IHZhcigtLXN5LXhzMik7XFxufVxcbi5nYXAtc3kteHMge1xcbiAgICBnYXA6IHZhcigtLXN5LXhzKTtcXG59XFxuLmdhcC1zeS1zbSB7XFxuICAgIGdhcDogdmFyKC0tc3ktc20pO1xcbn1cXG4uZ2FwLXN5LWJhc2Uge1xcbiAgICBnYXA6IHZhcigtLXN5LWJhc2UpO1xcbn1cXG4uZ2FwLXN5LW1kIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS1tZCk7XFxufVxcbi5nYXAtc3ktbGcge1xcbiAgICBnYXA6IHZhcigtLXN5LWxnKTtcXG59XFxuLmdhcC1zeS14bCB7XFxuICAgIGdhcDogdmFyKC0tc3kteGwpO1xcbn1cXG4uZ2FwLXN5LXhsMiB7XFxuICAgIGdhcDogdmFyKC0tc3kteGwyKTtcXG59XFxuLmdhcC1zeS14bDMge1xcbiAgICBnYXA6IHZhcigtLXN5LXhsMyk7XFxufVxcblxcbi5nYXAtc3gteHM0IHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14czQpO1xcbn1cXG4uZ2FwLXN4LXhzMyB7XFxuICAgIGdhcDogdmFyKC0tc3gteHMzKTtcXG59XFxuLmdhcC1zeC14czIge1xcbiAgICBnYXA6IHZhcigtLXN4LXhzMik7XFxufVxcbi5nYXAtc3gteHMge1xcbiAgICBnYXA6IHZhcigtLXN4LXhzKTtcXG59XFxuLmdhcC1zeC1zbSB7XFxuICAgIGdhcDogdmFyKC0tc3gtc20pO1xcbn1cXG4uZ2FwLXN4LWJhc2Uge1xcbiAgICBnYXA6IHZhcigtLXN4LWJhc2UpO1xcbn1cXG4uZ2FwLXN4LW1kIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC1tZCk7XFxufVxcbi5nYXAtc3gtbGcge1xcbiAgICBnYXA6IHZhcigtLXN4LWxnKTtcXG59XFxuLmdhcC1zeC14bCB7XFxuICAgIGdhcDogdmFyKC0tc3gteGwpO1xcbn1cXG4uZ2FwLXN4LXhsMiB7XFxuICAgIGdhcDogdmFyKC0tc3gteGwyKTtcXG59XFxuLmdhcC1zeC14bDMge1xcbiAgICBnYXA6IHZhcigtLXN4LXhsMyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS91dGlscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi50ZXh0LXNpemUteHMge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC14cyk7XFxufVxcblxcbi50ZXh0LXNpemUtc20ge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1zbSk7XFxufVxcblxcbi50ZXh0LXNpemUtYmFzZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxufVxcblxcbi50ZXh0LXNpemUtbWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1tZCk7XFxufVxcblxcbi50ZXh0LXNpemUtbGcge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1sZyk7XFxufVxcblxcbi5yYWRpaS1iYXNlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxufVxcblxcbi5yYWRpaS1iYXNlLWwge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKSAwIDAgdmFyKC0tcmFkaWktYmFzZSk7XFxufVxcblxcbi5yYWRpaS1tZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLW1kKTtcXG59XFxuXFxuLnB4LXhzNCB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteHM0KTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteHM0KTtcXG59XFxuLnB4LXhzMyB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteHMzKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteHMzKTtcXG59XFxuLnB4LXhzMiB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteHMyKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteHMyKTtcXG59XFxuLnB4LXhzIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC14cyk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXhzKTtcXG59XFxuLnB4LXNtIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC1zbSk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXNtKTtcXG59XFxuLnB4LWJhc2Uge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXN4LWJhc2UpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zeC1iYXNlKTtcXG59XFxuLnB4LW1kIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC1tZCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LW1kKTtcXG59XFxuLnB4LWxnIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC1sZyk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LWxnKTtcXG59XFxuLnB4LXhsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zeC14bCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN4LXhsKTtcXG59XFxuLnB4LXhsMiB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteGwyKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteGwyKTtcXG59XFxuLnB4LXhsMyB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3gteGwzKTtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3gteGwzKTtcXG59XFxuXFxuLnB5LXhzNCB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14czQpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteHM0KTtcXG59XFxuLnB5LXhzMyB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14czMpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteHMzKTtcXG59XFxuLnB5LXhzMiB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14czIpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteHMyKTtcXG59XFxuLnB5LXhzIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXhzKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXhzKTtcXG59XFxuLnB5LXNtIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXNtKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXNtKTtcXG59XFxuLnB5LWJhc2Uge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3ktYmFzZSk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zeS1iYXNlKTtcXG59XFxuLnB5LW1kIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LW1kKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LW1kKTtcXG59XFxuLnB5LWxnIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LWxnKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LWxnKTtcXG59XFxuLnB5LXhsIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXN5LXhsKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXN5LXhsKTtcXG59XFxuLnB5LXhsMiB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14bDIpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteGwyKTtcXG59XFxuLnB5LXhsMyB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zeS14bDMpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3kteGwzKTtcXG59XFxuXFxuXFxuLmdhcC1zeS14czQge1xcbiAgICBnYXA6IHZhcigtLXN5LXhzNCk7XFxufVxcbi5nYXAtc3kteHMzIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14czMpO1xcbn1cXG4uZ2FwLXN5LXhzMiB7XFxuICAgIGdhcDogdmFyKC0tc3kteHMyKTtcXG59XFxuLmdhcC1zeS14cyB7XFxuICAgIGdhcDogdmFyKC0tc3kteHMpO1xcbn1cXG4uZ2FwLXN5LXNtIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS1zbSk7XFxufVxcbi5nYXAtc3ktYmFzZSB7XFxuICAgIGdhcDogdmFyKC0tc3ktYmFzZSk7XFxufVxcbi5nYXAtc3ktbWQge1xcbiAgICBnYXA6IHZhcigtLXN5LW1kKTtcXG59XFxuLmdhcC1zeS1sZyB7XFxuICAgIGdhcDogdmFyKC0tc3ktbGcpO1xcbn1cXG4uZ2FwLXN5LXhsIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14bCk7XFxufVxcbi5nYXAtc3kteGwyIHtcXG4gICAgZ2FwOiB2YXIoLS1zeS14bDIpO1xcbn1cXG4uZ2FwLXN5LXhsMyB7XFxuICAgIGdhcDogdmFyKC0tc3kteGwzKTtcXG59XFxuXFxuLmdhcC1zeC14czQge1xcbiAgICBnYXA6IHZhcigtLXN4LXhzNCk7XFxufVxcbi5nYXAtc3gteHMzIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14czMpO1xcbn1cXG4uZ2FwLXN4LXhzMiB7XFxuICAgIGdhcDogdmFyKC0tc3gteHMyKTtcXG59XFxuLmdhcC1zeC14cyB7XFxuICAgIGdhcDogdmFyKC0tc3gteHMpO1xcbn1cXG4uZ2FwLXN4LXNtIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC1zbSk7XFxufVxcbi5nYXAtc3gtYmFzZSB7XFxuICAgIGdhcDogdmFyKC0tc3gtYmFzZSk7XFxufVxcbi5nYXAtc3gtbWQge1xcbiAgICBnYXA6IHZhcigtLXN4LW1kKTtcXG59XFxuLmdhcC1zeC1sZyB7XFxuICAgIGdhcDogdmFyKC0tc3gtbGcpO1xcbn1cXG4uZ2FwLXN4LXhsIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14bCk7XFxufVxcbi5nYXAtc3gteGwyIHtcXG4gICAgZ2FwOiB2YXIoLS1zeC14bDIpO1xcbn1cXG4uZ2FwLXN4LXhsMyB7XFxuICAgIGdhcDogdmFyKC0tc3gteGwzKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3V0aWxzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3V0aWxzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IHJhZGlpU2l6ZU5hbWUgPSBbXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJsYXJnZVwiLFxuXTtcbmV4cG9ydCBjb25zdCByYWRpaVNpemVWYWx1ZXMgPSBbXG4gICAgNCxcbiAgICA2LFxuICAgIDgsXG5dO1xuZXhwb3J0IGNvbnN0IHNwYWNpbmdTaXplTmFtZSA9IFtcbiAgICBcImNvbXBhY3RcIixcbiAgICBcImJhc2VcIixcbiAgICBcImxhcmdlXCIsXG4gICAgXCJ0b3VjaFwiLFxuXTtcbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5U2l6ZU5hbWUgPSBbXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJsYXJnZVwiLFxuXTtcbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5U2l6ZVZhbHVlcyA9IFtcbiAgICBcIjEyLzE2XCIsXG4gICAgXCIxNC8yMFwiLFxuICAgIFwiMTYvMjRcIixcbl07XG5leHBvcnQgY29uc3QgaWNvblNpemVOYW1lID0gW1xuICAgIFwiYmFzZVwiLFxuICAgIFwidG91Y2hcIlxuXTtcbmV4cG9ydCBjb25zdCBpY29uU2l6ZVZhbHVlcyA9IFtcbiAgICBcIjE2XCIsXG4gICAgXCIyNFwiLFxuXTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BY2NlbnRMaXN0ID0gW1xuICAgIFwicmVkXCIsXG4gICAgXCJhbWJlclwiLFxuICAgIFwiYnJvd25cIixcbiAgICBcImdyZWVuXCIsXG4gICAgXCJ0ZWFsXCIsXG4gICAgXCJjeWFuXCIsXG4gICAgXCJibHVlXCIsXG4gICAgXCJpbmRpZ29cIixcbiAgICBcInZpb2xldFwiLFxuICAgIFwicHVycGxlXCIsXG4gICAgXCJwaW5rXCJcbl07XG5leHBvcnQgY29uc3QgZGVmYXVsdEFjY2VudEhVRXMgPSB7XG4gICAgXCJyZWRcIjogNCxcbiAgICBcImFtYmVyXCI6IDI1LFxuICAgIFwiYnJvd25cIjogMzMsXG4gICAgXCJncmVlblwiOiAxNTAsXG4gICAgXCJ0ZWFsXCI6IDE4MCxcbiAgICBcImN5YW5cIjogMjAwLFxuICAgIFwiYmx1ZVwiOiAyMTAsXG4gICAgXCJpbmRpZ29cIjogMjQwLFxuICAgIFwidmlvbGV0XCI6IDI2MCxcbiAgICBcInB1cnBsZVwiOiAyODAsXG4gICAgXCJwaW5rXCI6IDM0MFxufTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2VtYW50aWNBY2NlbnRzID0ge1xuICAgIHByaW1hcnk6ICdibHVlJyxcbiAgICBpbmZvOiAnY3lhbicsXG4gICAgc3VjY2VzczogJ2dyZWVuJyxcbiAgICB3YXJuaW5nOiAnYW1iZXInLFxuICAgIGRhbmdlcjogJ3JlZCdcbn07XG4iLCJpbXBvcnQgYmFzZVJhZGlpVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9yYWRpaS9iYXNlLmpzb25cIjtcbmltcG9ydCBjb21wYWN0UmFkaWlUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3JhZGlpL2NvbXBhY3QuanNvblwiO1xuaW1wb3J0IGxhcmdlUmFkaWlUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3JhZGlpL2xhcmdlLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IGJhc2UgPSBmbGF0dGVuT2JqZWN0KGJhc2VSYWRpaVRva2Vucyk7XG5leHBvcnQgY29uc3QgY29tcGFjdCA9IGZsYXR0ZW5PYmplY3QoY29tcGFjdFJhZGlpVG9rZW5zKTtcbmV4cG9ydCBjb25zdCBsYXJnZSA9IGZsYXR0ZW5PYmplY3QobGFyZ2VSYWRpaVRva2Vucyk7XG4iLCJpbXBvcnQgYmFzZVNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdFNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VTcGFjaW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zcGFjaW5nL2xhcmdlLmpzb25cIjtcbmltcG9ydCB0b3VjaFNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvdG91Y2guanNvblwiO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgYmFzZSA9IGZsYXR0ZW5PYmplY3QoYmFzZVNwYWNpbmdUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSBmbGF0dGVuT2JqZWN0KGNvbXBhY3RTcGFjaW5nVG9rZW5zKTtcbmV4cG9ydCBjb25zdCBsYXJnZSA9IGZsYXR0ZW5PYmplY3QobGFyZ2VTcGFjaW5nVG9rZW5zKTtcbmV4cG9ydCBjb25zdCB0b3VjaCA9IGZsYXR0ZW5PYmplY3QodG91Y2hTcGFjaW5nVG9rZW5zKTtcbiIsImltcG9ydCB0ZXh0U3R5bGVUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvc3R5bGVzLmpzb25cIjtcbmltcG9ydCB0eXBlRmFjZVRva2VucyBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS90eXBlZmFjZS5qc29uXCI7XG5pbXBvcnQgYmFzZVR5cGVTY2FsZVRva2VucyBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS90eXBlc2NhbGUtYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdFR5cGVTY2FsZVRva2VucyBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VUeXBlU2NhbGVUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvdHlwZXNjYWxlLWxhcmdlLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IGJhc2UgPSBmbGF0dGVuT2JqZWN0KGJhc2VUeXBlU2NhbGVUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSBmbGF0dGVuT2JqZWN0KGNvbXBhY3RUeXBlU2NhbGVUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IGxhcmdlID0gZmxhdHRlbk9iamVjdChsYXJnZVR5cGVTY2FsZVRva2Vucyk7XG5leHBvcnQgY29uc3Qgc3R5bGVzID0gZmxhdHRlbk9iamVjdCh0ZXh0U3R5bGVUb2tlbnMpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cG9ncmFvaHlUb2tlbnMoc2l6ZSkge1xuICAgIGxldCBzY2FsZVRva2VucztcbiAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgICAgY2FzZSBcImNvbXBhY3RcIjoge1xuICAgICAgICAgICAgc2NhbGVUb2tlbnMgPSBmbGF0dGVuT2JqZWN0KGNvbXBhY3RUeXBlU2NhbGVUb2tlbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImxhcmdlXCI6IHtcbiAgICAgICAgICAgIHNjYWxlVG9rZW5zID0gZmxhdHRlbk9iamVjdChsYXJnZVR5cGVTY2FsZVRva2Vucyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiYmFzZVwiOiB7XG4gICAgICAgICAgICBzY2FsZVRva2VucyA9IGZsYXR0ZW5PYmplY3QoYmFzZVR5cGVTY2FsZVRva2Vucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmbGF0dGVuT2JqZWN0KHR5cGVGYWNlVG9rZW5zKSksIHNjYWxlVG9rZW5zKSwgc3R5bGVzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb250RGV0YWlscygpIHtcbiAgICBsZXQgbmFtZXMgPSBbXTtcbiAgICBjb25zdCB0b2tlbnMgPSB0eXBlRmFjZVRva2VucztcbiAgICBjb25zdCBmYW1pbHkgPSB0eXBlRmFjZVRva2Vuc1tcImZvbnQtZmFtaWxpZXNcIl0ucHJpbWFyeS4kdmFsdWU7XG4gICAgZm9yIChsZXQgW25hbWUsIGZvbnRXZWlnaHRdIG9mIE9iamVjdC5lbnRyaWVzKHR5cGVGYWNlVG9rZW5zW1wiZm9udC13ZWlnaHRzXCJdKSkge1xuICAgICAgICBuYW1lcy5wdXNoKHsgZmFtaWx5LCBzdHlsZTogZm9udFdlaWdodC4kdmFsdWUgfSk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lcztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpbml0U2xpZGVyKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF0YSA9IGVsLmRhdGFzZXQuc2xpZGVyIHx8ICd7fSc7XG4gICAgbGV0IHBhcmFtcyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgcGFyYW1zID0gT2JqZWN0LmFzc2lnbihwYXJhbXMsIG9wdGlvbnMgfHwge30pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcm9vdEVsZW1lbnQ6IGVsLCBwYXJhbXMgfSwgcHJvY2Vzc0NvbXBvbmVudChlbCwgcGFyYW1zKSk7XG59XG5mdW5jdGlvbiBnZXRNYXJrdXAoeyBsYWJlbCwgbmFtZSwgbWluLCBtYXgsIHN0ZXAsIHZhbHVlIH0pIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGxhYmVsIGNsYXNzPVwic2xpZGVycyBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbGFiZWxcIj4ke2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgPGlucHV0IGRhdGEtcmFuZ2UgdHlwZT1cInJhbmdlXCIgbmFtZT1cIiR7bmFtZX1cIiBtaW49XCIke21pbn1cIiBtYXg9XCIke21heH1cIiBzdGVwPVwiJHtzdGVwfVwiIHZhbHVlPVwiJHt2YWx1ZX1cIj5cbiAgICAgICAgPGlucHV0IGRhdGEtdmFsdWUgdHlwZT1cInRleHRcIiBvbmZvY3VzPVwidGhpcy5zZWxlY3QoKTtcIiB2YWx1ZT1cIiR7dmFsdWV9XCI+XG4gICAgICA8L2xhYmVsPiAgICBcbiAgICBgO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChlbCwgb3B0aW9ucykge1xuICAgIGVsLmlubmVySFRNTCA9IGdldE1hcmt1cChvcHRpb25zKTtcbiAgICBjb25zdCB2YWx1ZUlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihgaW5wdXRbZGF0YS12YWx1ZV1gKTtcbiAgICBjb25zdCBzbGlkZXJFbGVtZW50ID0gZWwucXVlcnlTZWxlY3RvcihgaW5wdXRbZGF0YS1yYW5nZV1gKTtcbiAgICBpZiAob3B0aW9ucy5zeW5jVmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgc3luY1ZhbHVlcyh7IHNsaWRlckVsZW1lbnQsIHZhbHVlSW5wdXQgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IGVsLCBzbGlkZXJFbGVtZW50LCB2YWx1ZUlucHV0IH07XG59XG5mdW5jdGlvbiBzeW5jVmFsdWVzKHsgc2xpZGVyRWxlbWVudCwgdmFsdWVJbnB1dCB9KSB7XG4gICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHZhbHVlSW5wdXQudmFsdWUgPSBzbGlkZXJFbGVtZW50LnZhbHVlO1xuICAgIH0pO1xuICAgIHZhbHVlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgICAgICBzbGlkZXJFbGVtZW50LnZhbHVlID0gdmFsdWVJbnB1dC52YWx1ZTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuT2JqZWN0KGRhdGEpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCBvYmplY3RdKSA9PiB7XG4gICAgICAgIHRyYXZlcnNlVG9rZW4oe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuZnVuY3Rpb24gdHJhdmVyc2VUb2tlbih7IGtleSwgb2JqZWN0LCB0b2tlbnMsIH0pIHtcbiAgICBpZiAoIW9iamVjdClcbiAgICAgICAgZGVidWdnZXI7XG4gICAgLy8gaWYga2V5IGlzIGEgbWV0YSBmaWVsZCwgbW92ZSBvblxuICAgIGlmIChrZXkuY2hhckF0KDApID09PSBcIiRcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvYmplY3QuJHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdG9rZW5zW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBvYmplY3QpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqZWN0KS5mb3JFYWNoKChba2V5Miwgb2JqZWN0Ml0pID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkyLmNoYXJBdCgwKSAhPT0gXCIkXCIpIHtcbiAgICAgICAgICAgICAgICB0cmF2ZXJzZVRva2VuKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBgJHtrZXl9LyR7a2V5Mn1gLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IG9iamVjdDIsXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uICh0eHQpIHtcbiAgICAgICAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbn1cbiIsIi8qKlxuICogY2hyb21hLmpzIC0gSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBjb2xvciBjb252ZXJzaW9uc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDE5LCBHcmVnb3IgQWlzY2hcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICpcbiAqIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAqIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIDMuIFRoZSBuYW1lIEdyZWdvciBBaXNjaCBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXG4gKiBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuICogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG4gKiBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBHUkVHT1IgQUlTQ0ggT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLFxuICogQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUllcbiAqIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gKiBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsXG4gKiBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBjaHJvbWEuanMgaW5jbHVkZXMgY29sb3JzIGZyb20gY29sb3JicmV3ZXIyLm9yZywgd2hpY2ggYXJlIHJlbGVhc2VkIHVuZGVyXG4gKiB0aGUgZm9sbG93aW5nIGxpY2Vuc2U6XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDAyIEN5bnRoaWEgQnJld2VyLCBNYXJrIEhhcnJvd2VyLFxuICogYW5kIFRoZSBQZW5uc3lsdmFuaWEgU3RhdGUgVW5pdmVyc2l0eS5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiAqIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljXG4gKiBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIE5hbWVkIGNvbG9ycyBhcmUgdGFrZW4gZnJvbSBYMTEgQ29sb3IgTmFtZXMuXG4gKiBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbiAqXG4gKiBAcHJlc2VydmVcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5jaHJvbWEgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGxpbWl0JDIgPSBmdW5jdGlvbiAoeCwgbWluLCBtYXgpIHtcbiAgICAgICAgaWYgKCBtaW4gPT09IHZvaWQgMCApIG1pbj0wO1xuICAgICAgICBpZiAoIG1heCA9PT0gdm9pZCAwICkgbWF4PTE7XG5cbiAgICAgICAgcmV0dXJuIHggPCBtaW4gPyBtaW4gOiB4ID4gbWF4ID8gbWF4IDogeDtcbiAgICB9O1xuXG4gICAgdmFyIGxpbWl0JDEgPSBsaW1pdCQyO1xuXG4gICAgdmFyIGNsaXBfcmdiJDMgPSBmdW5jdGlvbiAocmdiKSB7XG4gICAgICAgIHJnYi5fY2xpcHBlZCA9IGZhbHNlO1xuICAgICAgICByZ2IuX3VuY2xpcHBlZCA9IHJnYi5zbGljZSgwKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPD0zOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgICAgIGlmIChyZ2JbaV0gPCAwIHx8IHJnYltpXSA+IDI1NSkgeyByZ2IuX2NsaXBwZWQgPSB0cnVlOyB9XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gbGltaXQkMShyZ2JbaV0sIDAsIDI1NSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZ2JbaV0gPSBsaW1pdCQxKHJnYltpXSwgMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9O1xuXG4gICAgLy8gcG9ydGVkIGZyb20galF1ZXJ5J3MgJC50eXBlXG4gICAgdmFyIGNsYXNzVG9UeXBlID0ge307XG4gICAgZm9yICh2YXIgaSQxID0gMCwgbGlzdCQxID0gWydCb29sZWFuJywgJ051bWJlcicsICdTdHJpbmcnLCAnRnVuY3Rpb24nLCAnQXJyYXknLCAnRGF0ZScsICdSZWdFeHAnLCAnVW5kZWZpbmVkJywgJ051bGwnXTsgaSQxIDwgbGlzdCQxLmxlbmd0aDsgaSQxICs9IDEpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBsaXN0JDFbaSQxXTtcblxuICAgICAgICBjbGFzc1RvVHlwZVsoXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiKV0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHZhciB0eXBlJHAgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzVG9UeXBlW09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXSB8fCBcIm9iamVjdFwiO1xuICAgIH07XG5cbiAgICB2YXIgdHlwZSRvID0gdHlwZSRwO1xuXG4gICAgdmFyIHVucGFjayRCID0gZnVuY3Rpb24gKGFyZ3MsIGtleU9yZGVyKSB7XG4gICAgICAgIGlmICgga2V5T3JkZXIgPT09IHZvaWQgMCApIGtleU9yZGVyPW51bGw7XG5cbiAgICBcdC8vIGlmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiAzIGFyZ3VtZW50cywgd2UgcmV0dXJuIHRoZSBhcmd1bWVudHNcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHsgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpOyB9XG4gICAgICAgIC8vIHdpdGggbGVzcyB0aGFuIDMgYXJncyB3ZSBjaGVjayBpZiBmaXJzdCBhcmcgaXMgb2JqZWN0XG4gICAgICAgIC8vIGFuZCB1c2UgdGhlIGtleU9yZGVyIHN0cmluZyB0byBleHRyYWN0IGFuZCBzb3J0IHByb3BlcnRpZXNcbiAgICBcdGlmICh0eXBlJG8oYXJnc1swXSkgPT0gJ29iamVjdCcgJiYga2V5T3JkZXIpIHtcbiAgICBcdFx0cmV0dXJuIGtleU9yZGVyLnNwbGl0KCcnKVxuICAgIFx0XHRcdC5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGFyZ3NbMF1ba10gIT09IHVuZGVmaW5lZDsgfSlcbiAgICBcdFx0XHQubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBhcmdzWzBdW2tdOyB9KTtcbiAgICBcdH1cbiAgICBcdC8vIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiB0aGUgZmlyc3QgYXJndW1lbnRcbiAgICBcdC8vICh3aGljaCB3ZSBzdXBwb3NlIGlzIGFuIGFycmF5IG9mIGFyZ3MpXG4gICAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgIH07XG5cbiAgICB2YXIgdHlwZSRuID0gdHlwZSRwO1xuXG4gICAgdmFyIGxhc3QkNCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgdmFyIGwgPSBhcmdzLmxlbmd0aC0xO1xuICAgICAgICBpZiAodHlwZSRuKGFyZ3NbbF0pID09ICdzdHJpbmcnKSB7IHJldHVybiBhcmdzW2xdLnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBQSSQyID0gTWF0aC5QSTtcblxuICAgIHZhciB1dGlscyA9IHtcbiAgICBcdGNsaXBfcmdiOiBjbGlwX3JnYiQzLFxuICAgIFx0bGltaXQ6IGxpbWl0JDIsXG4gICAgXHR0eXBlOiB0eXBlJHAsXG4gICAgXHR1bnBhY2s6IHVucGFjayRCLFxuICAgIFx0bGFzdDogbGFzdCQ0LFxuICAgIFx0UEk6IFBJJDIsXG4gICAgXHRUV09QSTogUEkkMioyLFxuICAgIFx0UElUSElSRDogUEkkMi8zLFxuICAgIFx0REVHMlJBRDogUEkkMiAvIDE4MCxcbiAgICBcdFJBRDJERUc6IDE4MCAvIFBJJDJcbiAgICB9O1xuXG4gICAgdmFyIGlucHV0JGggPSB7XG4gICAgXHRmb3JtYXQ6IHt9LFxuICAgIFx0YXV0b2RldGVjdDogW11cbiAgICB9O1xuXG4gICAgdmFyIGxhc3QkMyA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIGNsaXBfcmdiJDIgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgdHlwZSRtID0gdXRpbHMudHlwZTtcbiAgICB2YXIgX2lucHV0ID0gaW5wdXQkaDtcblxuICAgIHZhciBDb2xvciREID0gZnVuY3Rpb24gQ29sb3IoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGUkbShhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgPT09IHRoaXMuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIC8vIHRoZSBhcmd1bWVudCBpcyBhbHJlYWR5IGEgQ29sb3IgaW5zdGFuY2VcbiAgICAgICAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGFzdCBhcmd1bWVudCBjb3VsZCBiZSB0aGUgbW9kZVxuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMyhhcmdzKTtcbiAgICAgICAgdmFyIGF1dG9kZXRlY3QgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgIGF1dG9kZXRlY3QgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFfaW5wdXQuc29ydGVkKSB7XG4gICAgICAgICAgICAgICAgX2lucHV0LmF1dG9kZXRlY3QgPSBfaW5wdXQuYXV0b2RldGVjdC5zb3J0KGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGIucCAtIGEucDsgfSk7XG4gICAgICAgICAgICAgICAgX2lucHV0LnNvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhdXRvLWRldGVjdCBmb3JtYXRcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gX2lucHV0LmF1dG9kZXRlY3Q7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoayA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICBtb2RlID0gY2hrLnRlc3QuYXBwbHkoY2hrLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSkgeyBicmVhazsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pbnB1dC5mb3JtYXRbbW9kZV0pIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBfaW5wdXQuZm9ybWF0W21vZGVdLmFwcGx5KG51bGwsIGF1dG9kZXRlY3QgPyBhcmdzIDogYXJncy5zbGljZSgwLC0xKSk7XG4gICAgICAgICAgICBtZS5fcmdiID0gY2xpcF9yZ2IkMihyZ2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGZvcm1hdDogJythcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBhbHBoYSBjaGFubmVsXG4gICAgICAgIGlmIChtZS5fcmdiLmxlbmd0aCA9PT0gMykgeyBtZS5fcmdiLnB1c2goMSk7IH1cbiAgICB9O1xuXG4gICAgQ29sb3IkRC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgICAgIGlmICh0eXBlJG0odGhpcy5oZXgpID09ICdmdW5jdGlvbicpIHsgcmV0dXJuIHRoaXMuaGV4KCk7IH1cbiAgICAgICAgcmV0dXJuIChcIltcIiArICh0aGlzLl9yZ2Iuam9pbignLCcpKSArIFwiXVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yXzEgPSBDb2xvciREO1xuXG4gICAgdmFyIGNocm9tYSRrID0gZnVuY3Rpb24gKCkge1xuICAgIFx0dmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBcdHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICBcdHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBjaHJvbWEkay5Db2xvciwgWyBudWxsIF0uY29uY2F0KCBhcmdzKSApKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGsuQ29sb3IgPSBDb2xvcl8xO1xuICAgIGNocm9tYSRrLnZlcnNpb24gPSAnMi40LjInO1xuXG4gICAgdmFyIGNocm9tYV8xID0gY2hyb21hJGs7XG5cbiAgICB2YXIgdW5wYWNrJEEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIG1heCQyID0gTWF0aC5tYXg7XG5cbiAgICB2YXIgcmdiMmNteWskMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJEEoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByID0gciAvIDI1NTtcbiAgICAgICAgZyA9IGcgLyAyNTU7XG4gICAgICAgIGIgPSBiIC8gMjU1O1xuICAgICAgICB2YXIgayA9IDEgLSBtYXgkMihyLG1heCQyKGcsYikpO1xuICAgICAgICB2YXIgZiA9IGsgPCAxID8gMSAvICgxLWspIDogMDtcbiAgICAgICAgdmFyIGMgPSAoMS1yLWspICogZjtcbiAgICAgICAgdmFyIG0gPSAoMS1nLWspICogZjtcbiAgICAgICAgdmFyIHkgPSAoMS1iLWspICogZjtcbiAgICAgICAgcmV0dXJuIFtjLG0seSxrXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJjbXlrXzEgPSByZ2IyY215ayQxO1xuXG4gICAgdmFyIHVucGFjayR6ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIGNteWsycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skeihhcmdzLCAnY215aycpO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBtID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIHkgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgayA9IGFyZ3NbM107XG4gICAgICAgIHZhciBhbHBoYSA9IGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiAxO1xuICAgICAgICBpZiAoayA9PT0gMSkgeyByZXR1cm4gWzAsMCwwLGFscGhhXTsgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgYyA+PSAxID8gMCA6IDI1NSAqICgxLWMpICogKDEtayksIC8vIHJcbiAgICAgICAgICAgIG0gPj0gMSA/IDAgOiAyNTUgKiAoMS1tKSAqICgxLWspLCAvLyBnXG4gICAgICAgICAgICB5ID49IDEgPyAwIDogMjU1ICogKDEteSkgKiAoMS1rKSwgLy8gYlxuICAgICAgICAgICAgYWxwaGFcbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgdmFyIGNteWsycmdiXzEgPSBjbXlrMnJnYjtcblxuICAgIHZhciBjaHJvbWEkaiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRDID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkZyA9IGlucHV0JGg7XG4gICAgdmFyIHVucGFjayR5ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGwgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHJnYjJjbXlrID0gcmdiMmNteWtfMTtcblxuICAgIENvbG9yJEMucHJvdG90eXBlLmNteWsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJjbXlrKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRqLmNteWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJEMsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydjbXlrJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRnLmZvcm1hdC5jbXlrID0gY215azJyZ2JfMTtcblxuICAgIGlucHV0JGcuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skeShhcmdzLCAnY215aycpO1xuICAgICAgICAgICAgaWYgKHR5cGUkbChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnY215ayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skeCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCQyID0gdXRpbHMubGFzdDtcbiAgICB2YXIgcm5kID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIE1hdGgucm91bmQoYSoxMDApLzEwMDsgfTtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIGhzbDJjc3MoaCxzLGwpXG4gICAgICogLSBoc2wyY3NzKGgscyxsLGEpXG4gICAgICogLSBoc2wyY3NzKFtoLHMsbF0sIG1vZGUpXG4gICAgICogLSBoc2wyY3NzKFtoLHMsbCxhXSwgbW9kZSlcbiAgICAgKiAtIGhzbDJjc3Moe2gscyxsLGF9LCBtb2RlKVxuICAgICAqL1xuICAgIHZhciBoc2wyY3NzJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIGhzbGEgPSB1bnBhY2skeChhcmdzLCAnaHNsYScpO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMihhcmdzKSB8fCAnbHNhJztcbiAgICAgICAgaHNsYVswXSA9IHJuZChoc2xhWzBdIHx8IDApO1xuICAgICAgICBoc2xhWzFdID0gcm5kKGhzbGFbMV0qMTAwKSArICclJztcbiAgICAgICAgaHNsYVsyXSA9IHJuZChoc2xhWzJdKjEwMCkgKyAnJSc7XG4gICAgICAgIGlmIChtb2RlID09PSAnaHNsYScgfHwgKGhzbGEubGVuZ3RoID4gMyAmJiBoc2xhWzNdPDEpKSB7XG4gICAgICAgICAgICBoc2xhWzNdID0gaHNsYS5sZW5ndGggPiAzID8gaHNsYVszXSA6IDE7XG4gICAgICAgICAgICBtb2RlID0gJ2hzbGEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHNsYS5sZW5ndGggPSAzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobW9kZSArIFwiKFwiICsgKGhzbGEuam9pbignLCcpKSArIFwiKVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIGhzbDJjc3NfMSA9IGhzbDJjc3MkMTtcblxuICAgIHZhciB1bnBhY2skdyA9IHV0aWxzLnVucGFjaztcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc2wocixnLGIpXG4gICAgICogLSByZ2IyaHNsKHIsZyxiLGEpXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYixhXSlcbiAgICAgKiAtIHJnYjJoc2woe3IsZyxiLGF9KVxuICAgICAqL1xuICAgIHZhciByZ2IyaHNsJDMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayR3KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciByID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGcgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG5cbiAgICAgICAgciAvPSAyNTU7XG4gICAgICAgIGcgLz0gMjU1O1xuICAgICAgICBiIC89IDI1NTtcblxuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblxuICAgICAgICB2YXIgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgICAgICAgdmFyIHMsIGg7XG5cbiAgICAgICAgaWYgKG1heCA9PT0gbWluKXtcbiAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gbCA8IDAuNSA/IChtYXggLSBtaW4pIC8gKG1heCArIG1pbikgOiAobWF4IC0gbWluKSAvICgyIC0gbWF4IC0gbWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyID09IG1heCkgeyBoID0gKGcgLSBiKSAvIChtYXggLSBtaW4pOyB9XG4gICAgICAgIGVsc2UgaWYgKGcgPT0gbWF4KSB7IGggPSAyICsgKGIgLSByKSAvIChtYXggLSBtaW4pOyB9XG4gICAgICAgIGVsc2UgaWYgKGIgPT0gbWF4KSB7IGggPSA0ICsgKHIgLSBnKSAvIChtYXggLSBtaW4pOyB9XG5cbiAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aD4zICYmIGFyZ3NbM10hPT11bmRlZmluZWQpIHsgcmV0dXJuIFtoLHMsbCxhcmdzWzNdXTsgfVxuICAgICAgICByZXR1cm4gW2gscyxsXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc2xfMSA9IHJnYjJoc2wkMztcblxuICAgIHZhciB1bnBhY2skdiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCQxID0gdXRpbHMubGFzdDtcbiAgICB2YXIgaHNsMmNzcyA9IGhzbDJjc3NfMTtcbiAgICB2YXIgcmdiMmhzbCQyID0gcmdiMmhzbF8xO1xuICAgIHZhciByb3VuZCQ2ID0gTWF0aC5yb3VuZDtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJjc3MocixnLGIpXG4gICAgICogLSByZ2IyY3NzKHIsZyxiLGEpXG4gICAgICogLSByZ2IyY3NzKFtyLGcsYl0sIG1vZGUpXG4gICAgICogLSByZ2IyY3NzKFtyLGcsYixhXSwgbW9kZSlcbiAgICAgKiAtIHJnYjJjc3Moe3IsZyxiLGF9LCBtb2RlKVxuICAgICAqL1xuICAgIHZhciByZ2IyY3NzJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYmEgPSB1bnBhY2skdihhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMShhcmdzKSB8fCAncmdiJztcbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMykgPT0gJ2hzbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBoc2wyY3NzKHJnYjJoc2wkMihyZ2JhKSwgbW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmdiYVswXSA9IHJvdW5kJDYocmdiYVswXSk7XG4gICAgICAgIHJnYmFbMV0gPSByb3VuZCQ2KHJnYmFbMV0pO1xuICAgICAgICByZ2JhWzJdID0gcm91bmQkNihyZ2JhWzJdKTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZ2JhJyB8fCAocmdiYS5sZW5ndGggPiAzICYmIHJnYmFbM108MSkpIHtcbiAgICAgICAgICAgIHJnYmFbM10gPSByZ2JhLmxlbmd0aCA+IDMgPyByZ2JhWzNdIDogMTtcbiAgICAgICAgICAgIG1vZGUgPSAncmdiYSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChtb2RlICsgXCIoXCIgKyAocmdiYS5zbGljZSgwLG1vZGU9PT0ncmdiJz8zOjQpLmpvaW4oJywnKSkgKyBcIilcIik7XG4gICAgfTtcblxuICAgIHZhciByZ2IyY3NzXzEgPSByZ2IyY3NzJDE7XG5cbiAgICB2YXIgdW5wYWNrJHUgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJvdW5kJDUgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGhzbDJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2lnbjtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgICAgICBhcmdzID0gdW5wYWNrJHUoYXJncywgJ2hzbCcpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICByID0gZyA9IGIgPSBsKjI1NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0MyA9IFswLDAsMF07XG4gICAgICAgICAgICB2YXIgYyA9IFswLDAsMF07XG4gICAgICAgICAgICB2YXIgdDIgPSBsIDwgMC41ID8gbCAqICgxK3MpIDogbCtzLWwqcztcbiAgICAgICAgICAgIHZhciB0MSA9IDIgKiBsIC0gdDI7XG4gICAgICAgICAgICB2YXIgaF8gPSBoIC8gMzYwO1xuICAgICAgICAgICAgdDNbMF0gPSBoXyArIDEvMztcbiAgICAgICAgICAgIHQzWzFdID0gaF87XG4gICAgICAgICAgICB0M1syXSA9IGhfIC0gMS8zO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0M1tpXSA8IDApIHsgdDNbaV0gKz0gMTsgfVxuICAgICAgICAgICAgICAgIGlmICh0M1tpXSA+IDEpIHsgdDNbaV0gLT0gMTsgfVxuICAgICAgICAgICAgICAgIGlmICg2ICogdDNbaV0gPCAxKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0M1tpXTsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDIgKiB0M1tpXSA8IDEpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQyOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoMyAqIHQzW2ldIDwgMilcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiAoKDIgLyAzKSAtIHQzW2ldKSAqIDY7IH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXNzaWduID0gW3JvdW5kJDUoY1swXSoyNTUpLHJvdW5kJDUoY1sxXSoyNTUpLHJvdW5kJDUoY1syXSoyNTUpXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgLy8ga2VlcCBhbHBoYSBjaGFubmVsXG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLGFyZ3NbM11dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgfTtcblxuICAgIHZhciBoc2wycmdiXzEgPSBoc2wycmdiJDE7XG5cbiAgICB2YXIgaHNsMnJnYiA9IGhzbDJyZ2JfMTtcbiAgICB2YXIgaW5wdXQkZiA9IGlucHV0JGg7XG5cbiAgICB2YXIgUkVfUkdCID0gL15yZ2JcXChcXHMqKC0/XFxkKyksXFxzKigtP1xcZCspXFxzKixcXHMqKC0/XFxkKylcXHMqXFwpJC87XG4gICAgdmFyIFJFX1JHQkEgPSAvXnJnYmFcXChcXHMqKC0/XFxkKyksXFxzKigtP1xcZCspXFxzKixcXHMqKC0/XFxkKylcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG4gICAgdmFyIFJFX1JHQl9QQ1QgPSAvXnJnYlxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSUsXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccypcXCkkLztcbiAgICB2YXIgUkVfUkdCQV9QQ1QgPSAvXnJnYmFcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG4gICAgdmFyIFJFX0hTTCA9IC9eaHNsXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqXFwpJC87XG4gICAgdmFyIFJFX0hTTEEgPSAvXmhzbGFcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyksXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcblxuICAgIHZhciByb3VuZCQ0ID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBjc3MycmdiJDEgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgICAgIGNzcyA9IGNzcy50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgdmFyIG07XG5cbiAgICAgICAgaWYgKGlucHV0JGYuZm9ybWF0Lm5hbWVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dCRmLmZvcm1hdC5uYW1lZChjc3MpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiKDI1MCwyMCwwKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gK3JnYltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYlszXSA9IDE7ICAvLyBkZWZhdWx0IGFscGhhXG4gICAgICAgICAgICByZXR1cm4gcmdiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiYSgyNTAsMjAsMCwwLjQpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JBKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMSA9IG0uc2xpY2UoMSw1KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMT0wOyBpJDE8NDsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkMVtpJDFdID0gK3JnYiQxW2kkMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmdiJDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2IoMTAwJSwwJSwwJSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQl9QQ1QpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQyID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQyPTA7IGkkMjwzOyBpJDIrKykge1xuICAgICAgICAgICAgICAgIHJnYiQyW2kkMl0gPSByb3VuZCQ0KHJnYiQyW2kkMl0gKiAyLjU1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYiQyWzNdID0gMTsgIC8vIGRlZmF1bHQgYWxwaGFcbiAgICAgICAgICAgIHJldHVybiByZ2IkMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYmEoMTAwJSwwJSwwJSwwLjQpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JBX1BDVCkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDMgPSBtLnNsaWNlKDEsNSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDM9MDsgaSQzPDM7IGkkMysrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDNbaSQzXSA9IHJvdW5kJDQocmdiJDNbaSQzXSAqIDIuNTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiJDNbM10gPSArcmdiJDNbM107XG4gICAgICAgICAgICByZXR1cm4gcmdiJDM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoc2woMCwxMDAlLDUwJSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0hTTCkpKSB7XG4gICAgICAgICAgICB2YXIgaHNsID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgaHNsWzFdICo9IDAuMDE7XG4gICAgICAgICAgICBoc2xbMl0gKj0gMC4wMTtcbiAgICAgICAgICAgIHZhciByZ2IkNCA9IGhzbDJyZ2IoaHNsKTtcbiAgICAgICAgICAgIHJnYiQ0WzNdID0gMTtcbiAgICAgICAgICAgIHJldHVybiByZ2IkNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhzbGEoMCwxMDAlLDUwJSwwLjUpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9IU0xBKSkpIHtcbiAgICAgICAgICAgIHZhciBoc2wkMSA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGhzbCQxWzFdICo9IDAuMDE7XG4gICAgICAgICAgICBoc2wkMVsyXSAqPSAwLjAxO1xuICAgICAgICAgICAgdmFyIHJnYiQ1ID0gaHNsMnJnYihoc2wkMSk7XG4gICAgICAgICAgICByZ2IkNVszXSA9ICttWzRdOyAgLy8gZGVmYXVsdCBhbHBoYSA9IDFcbiAgICAgICAgICAgIHJldHVybiByZ2IkNTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjc3MycmdiJDEudGVzdCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBSRV9SR0IudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCQS50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JfUENULnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQkFfUENULnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX0hTTC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9IU0xBLnRlc3Qocyk7XG4gICAgfTtcblxuICAgIHZhciBjc3MycmdiXzEgPSBjc3MycmdiJDE7XG5cbiAgICB2YXIgY2hyb21hJGkgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkQiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JGUgPSBpbnB1dCRoO1xuICAgIHZhciB0eXBlJGsgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHJnYjJjc3MgPSByZ2IyY3NzXzE7XG4gICAgdmFyIGNzczJyZ2IgPSBjc3MycmdiXzE7XG5cbiAgICBDb2xvciRCLnByb3RvdHlwZS5jc3MgPSBmdW5jdGlvbihtb2RlKSB7XG4gICAgICAgIHJldHVybiByZ2IyY3NzKHRoaXMuX3JnYiwgbW9kZSk7XG4gICAgfTtcblxuICAgIGNocm9tYSRpLmNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkQiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2NzcyddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkZS5mb3JtYXQuY3NzID0gY3NzMnJnYjtcblxuICAgIGlucHV0JGUuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkayhoKSA9PT0gJ3N0cmluZycgJiYgY3NzMnJnYi50ZXN0KGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjc3MnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29sb3IkQSA9IENvbG9yXzE7XG4gICAgdmFyIGNocm9tYSRoID0gY2hyb21hXzE7XG4gICAgdmFyIGlucHV0JGQgPSBpbnB1dCRoO1xuICAgIHZhciB1bnBhY2skdCA9IHV0aWxzLnVucGFjaztcblxuICAgIGlucHV0JGQuZm9ybWF0LmdsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2IgPSB1bnBhY2skdChhcmdzLCAncmdiYScpO1xuICAgICAgICByZ2JbMF0gKj0gMjU1O1xuICAgICAgICByZ2JbMV0gKj0gMjU1O1xuICAgICAgICByZ2JbMl0gKj0gMjU1O1xuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH07XG5cbiAgICBjaHJvbWEkaC5nbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkQSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2dsJ10pICkpO1xuICAgIH07XG5cbiAgICBDb2xvciRBLnByb3RvdHlwZS5nbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmdiID0gdGhpcy5fcmdiO1xuICAgICAgICByZXR1cm4gW3JnYlswXS8yNTUsIHJnYlsxXS8yNTUsIHJnYlsyXS8yNTUsIHJnYlszXV07XG4gICAgfTtcblxuICAgIHZhciB1bnBhY2skcyA9IHV0aWxzLnVucGFjaztcblxuICAgIHZhciByZ2IyaGNnJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRzKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICAgICAgdmFyIGMgPSBkZWx0YSAqIDEwMCAvIDI1NTtcbiAgICAgICAgdmFyIF9nID0gbWluIC8gKDI1NSAtIGRlbHRhKSAqIDEwMDtcbiAgICAgICAgdmFyIGg7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4KSB7IGggPSAoZyAtIGIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChnID09PSBtYXgpIHsgaCA9IDIrKGIgLSByKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoYiA9PT0gbWF4KSB7IGggPSA0KyhyIC0gZykgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCwgYywgX2ddO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhjZ18xID0gcmdiMmhjZyQxO1xuXG4gICAgdmFyIHVucGFjayRyID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBmbG9vciQzID0gTWF0aC5mbG9vcjtcblxuICAgIC8qXG4gICAgICogdGhpcyBpcyBiYXNpY2FsbHkganVzdCBIU1Ygd2l0aCBzb21lIG1pbm9yIHR3ZWFrc1xuICAgICAqXG4gICAgICogaHVlLi4gWzAuLjM2MF1cbiAgICAgKiBjaHJvbWEgLi4gWzAuLjFdXG4gICAgICogZ3JheW5lc3MgLi4gWzAuLjFdXG4gICAgICovXG5cbiAgICB2YXIgaGNnMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyLCBhc3NpZ24kMywgYXNzaWduJDQsIGFzc2lnbiQ1O1xuXG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgICAgIGFyZ3MgPSB1bnBhY2skcihhcmdzLCAnaGNnJyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgX2cgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIF9nID0gX2cgKiAyNTU7XG4gICAgICAgIHZhciBfYyA9IGMgKiAyNTU7XG4gICAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgICAgICByID0gZyA9IGIgPSBfZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoID09PSAzNjApIHsgaCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgICAgIGggLz0gNjA7XG4gICAgICAgICAgICB2YXIgaSA9IGZsb29yJDMoaCk7XG4gICAgICAgICAgICB2YXIgZiA9IGggLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSBfZyAqICgxIC0gYyk7XG4gICAgICAgICAgICB2YXIgcSA9IHAgKyBfYyAqICgxIC0gZik7XG4gICAgICAgICAgICB2YXIgdCA9IHAgKyBfYyAqIGY7XG4gICAgICAgICAgICB2YXIgdiA9IHAgKyBfYztcbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogKGFzc2lnbiA9IFt2LCB0LCBwXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAoYXNzaWduJDEgPSBbcSwgdiwgcF0sIHIgPSBhc3NpZ24kMVswXSwgZyA9IGFzc2lnbiQxWzFdLCBiID0gYXNzaWduJDFbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMjogKGFzc2lnbiQyID0gW3AsIHYsIHRdLCByID0gYXNzaWduJDJbMF0sIGcgPSBhc3NpZ24kMlsxXSwgYiA9IGFzc2lnbiQyWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IChhc3NpZ24kMyA9IFtwLCBxLCB2XSwgciA9IGFzc2lnbiQzWzBdLCBnID0gYXNzaWduJDNbMV0sIGIgPSBhc3NpZ24kM1syXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0OiAoYXNzaWduJDQgPSBbdCwgcCwgdl0sIHIgPSBhc3NpZ24kNFswXSwgZyA9IGFzc2lnbiQ0WzFdLCBiID0gYXNzaWduJDRbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNTogKGFzc2lnbiQ1ID0gW3YsIHAsIHFdLCByID0gYXNzaWduJDVbMF0sIGcgPSBhc3NpZ24kNVsxXSwgYiA9IGFzc2lnbiQ1WzJdKTsgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhjZzJyZ2JfMSA9IGhjZzJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJHEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkaiA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRnID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHogPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRjID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaGNnID0gcmdiMmhjZ18xO1xuXG4gICAgQ29sb3Ikei5wcm90b3R5cGUuaGNnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaGNnKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRnLmhjZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkeiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hjZyddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkYy5mb3JtYXQuaGNnID0gaGNnMnJnYl8xO1xuXG4gICAgaW5wdXQkYy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAxLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRxKGFyZ3MsICdoY2cnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGooYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hjZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skcCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIHJvdW5kJDMgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIHJnYjJoZXgkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJHAoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIGEgPSByZWZbM107XG4gICAgICAgIHZhciBtb2RlID0gbGFzdChhcmdzKSB8fCAnYXV0byc7XG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHsgYSA9IDE7IH1cbiAgICAgICAgaWYgKG1vZGUgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgbW9kZSA9IGEgPCAxID8gJ3JnYmEnIDogJ3JnYic7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHJvdW5kJDMocik7XG4gICAgICAgIGcgPSByb3VuZCQzKGcpO1xuICAgICAgICBiID0gcm91bmQkMyhiKTtcbiAgICAgICAgdmFyIHUgPSByIDw8IDE2IHwgZyA8PCA4IHwgYjtcbiAgICAgICAgdmFyIHN0ciA9IFwiMDAwMDAwXCIgKyB1LnRvU3RyaW5nKDE2KTsgLy8jLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDYpO1xuICAgICAgICB2YXIgaHhhID0gJzAnICsgcm91bmQkMyhhICogMjU1KS50b1N0cmluZygxNik7XG4gICAgICAgIGh4YSA9IGh4YS5zdWJzdHIoaHhhLmxlbmd0aCAtIDIpO1xuICAgICAgICBzd2l0Y2ggKG1vZGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAncmdiYSc6IHJldHVybiAoXCIjXCIgKyBzdHIgKyBoeGEpO1xuICAgICAgICAgICAgY2FzZSAnYXJnYic6IHJldHVybiAoXCIjXCIgKyBoeGEgKyBzdHIpO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIChcIiNcIiArIHN0cik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoZXhfMSA9IHJnYjJoZXgkMjtcblxuICAgIHZhciBSRV9IRVggPSAvXiM/KFtBLUZhLWYwLTldezZ9fFtBLUZhLWYwLTldezN9KSQvO1xuICAgIHZhciBSRV9IRVhBID0gL14jPyhbQS1GYS1mMC05XXs4fXxbQS1GYS1mMC05XXs0fSkkLztcblxuICAgIHZhciBoZXgycmdiJDEgPSBmdW5jdGlvbiAoaGV4KSB7XG4gICAgICAgIGlmIChoZXgubWF0Y2goUkVfSEVYKSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbmFsIGxlYWRpbmcgI1xuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDQgfHwgaGV4Lmxlbmd0aCA9PT0gNykge1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBleHBhbmQgc2hvcnQtbm90YXRpb24gdG8gZnVsbCBzaXgtZGlnaXRcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXhbMF0raGV4WzBdK2hleFsxXStoZXhbMV0raGV4WzJdK2hleFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgICAgICB2YXIgciA9IHUgPj4gMTY7XG4gICAgICAgICAgICB2YXIgZyA9IHUgPj4gOCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiA9IHUgJiAweEZGO1xuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIHJnYmEgaGV4IGZvcm1hdCwgZWcgI0ZGMDAwMDc3XG4gICAgICAgIGlmIChoZXgubWF0Y2goUkVfSEVYQSkpIHtcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA1IHx8IGhleC5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyAjXG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV4cGFuZCBzaG9ydC1ub3RhdGlvbiB0byBmdWxsIGVpZ2h0LWRpZ2l0XG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4WzBdK2hleFswXStoZXhbMV0raGV4WzFdK2hleFsyXStoZXhbMl0raGV4WzNdK2hleFszXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1JDEgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICAgIHZhciByJDEgPSB1JDEgPj4gMjQgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGckMSA9IHUkMSA+PiAxNiAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiQxID0gdSQxID4+IDggJiAweEZGO1xuICAgICAgICAgICAgdmFyIGEgPSBNYXRoLnJvdW5kKCh1JDEgJiAweEZGKSAvIDB4RkYgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIFtyJDEsZyQxLGIkMSxhXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIHVzZWQgdG8gY2hlY2sgZm9yIGNzcyBjb2xvcnMgaGVyZVxuICAgICAgICAvLyBpZiBfaW5wdXQuY3NzPyBhbmQgcmdiID0gX2lucHV0LmNzcyBoZXhcbiAgICAgICAgLy8gICAgIHJldHVybiByZ2JcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwidW5rbm93biBoZXggY29sb3I6IFwiICsgaGV4KSk7XG4gICAgfTtcblxuICAgIHZhciBoZXgycmdiXzEgPSBoZXgycmdiJDE7XG5cbiAgICB2YXIgY2hyb21hJGYgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkeSA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkaSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGlucHV0JGIgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoZXgkMSA9IHJnYjJoZXhfMTtcblxuICAgIENvbG9yJHkucHJvdG90eXBlLmhleCA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoZXgkMSh0aGlzLl9yZ2IsIG1vZGUpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkZi5oZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHksIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoZXgnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGIuZm9ybWF0LmhleCA9IGhleDJyZ2JfMTtcbiAgICBpbnB1dCRiLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDQsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJGkoaCkgPT09ICdzdHJpbmcnICYmIFszLDQsNSw2LDcsOCw5XS5pbmRleE9mKGgubGVuZ3RoKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoZXgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJG8gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIFRXT1BJJDIgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgbWluJDIgPSBNYXRoLm1pbjtcbiAgICB2YXIgc3FydCQ0ID0gTWF0aC5zcXJ0O1xuICAgIHZhciBhY29zID0gTWF0aC5hY29zO1xuXG4gICAgdmFyIHJnYjJoc2kkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9yZ2IyaHNpLmNwcFxuICAgICAgICAqL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJG8oYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByIC89IDI1NTtcbiAgICAgICAgZyAvPSAyNTU7XG4gICAgICAgIGIgLz0gMjU1O1xuICAgICAgICB2YXIgaDtcbiAgICAgICAgdmFyIG1pbl8gPSBtaW4kMihyLGcsYik7XG4gICAgICAgIHZhciBpID0gKHIrZytiKSAvIDM7XG4gICAgICAgIHZhciBzID0gaSA+IDAgPyAxIC0gbWluXy9pIDogMDtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoID0gKChyLWcpKyhyLWIpKSAvIDI7XG4gICAgICAgICAgICBoIC89IHNxcnQkNCgoci1nKSooci1nKSArIChyLWIpKihnLWIpKTtcbiAgICAgICAgICAgIGggPSBhY29zKGgpO1xuICAgICAgICAgICAgaWYgKGIgPiBnKSB7XG4gICAgICAgICAgICAgICAgaCA9IFRXT1BJJDIgLSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaCAvPSBUV09QSSQyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCozNjAscyxpXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc2lfMSA9IHJnYjJoc2kkMTtcblxuICAgIHZhciB1bnBhY2skbiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGltaXQgPSB1dGlscy5saW1pdDtcbiAgICB2YXIgVFdPUEkkMSA9IHV0aWxzLlRXT1BJO1xuICAgIHZhciBQSVRISVJEID0gdXRpbHMuUElUSElSRDtcbiAgICB2YXIgY29zJDQgPSBNYXRoLmNvcztcblxuICAgIC8qXG4gICAgICogaHVlIFswLi4zNjBdXG4gICAgICogc2F0dXJhdGlvbiBbMC4uMV1cbiAgICAgKiBpbnRlbnNpdHkgWzAuLjFdXG4gICAgICovXG4gICAgdmFyIGhzaTJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgYm9ycm93ZWQgZnJvbSBoZXJlOlxuICAgICAgICBodHRwOi8vaHVtbWVyLnN0YW5mb3JkLmVkdS9tdXNlaW5mby9kb2MvZXhhbXBsZXMvaHVtZHJ1bS9rZXlzY2FwZTIvaHNpMnJnYi5jcHBcbiAgICAgICAgKi9cbiAgICAgICAgYXJncyA9IHVucGFjayRuKGFyZ3MsICdoc2knKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBpID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuXG4gICAgICAgIGlmIChpc05hTihoKSkgeyBoID0gMDsgfVxuICAgICAgICBpZiAoaXNOYU4ocykpIHsgcyA9IDA7IH1cbiAgICAgICAgLy8gbm9ybWFsaXplIGh1ZVxuICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgaCAvPSAzNjA7XG4gICAgICAgIGlmIChoIDwgMS8zKSB7XG4gICAgICAgICAgICBiID0gKDEtcykvMztcbiAgICAgICAgICAgIHIgPSAoMStzKmNvcyQ0KFRXT1BJJDEqaCkvY29zJDQoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgZyA9IDEgLSAoYityKTtcbiAgICAgICAgfSBlbHNlIGlmIChoIDwgMi8zKSB7XG4gICAgICAgICAgICBoIC09IDEvMztcbiAgICAgICAgICAgIHIgPSAoMS1zKS8zO1xuICAgICAgICAgICAgZyA9ICgxK3MqY29zJDQoVFdPUEkkMSpoKS9jb3MkNChQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICBiID0gMSAtIChyK2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaCAtPSAyLzM7XG4gICAgICAgICAgICBnID0gKDEtcykvMztcbiAgICAgICAgICAgIGIgPSAoMStzKmNvcyQ0KFRXT1BJJDEqaCkvY29zJDQoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgciA9IDEgLSAoZytiKTtcbiAgICAgICAgfVxuICAgICAgICByID0gbGltaXQoaSpyKjMpO1xuICAgICAgICBnID0gbGltaXQoaSpnKjMpO1xuICAgICAgICBiID0gbGltaXQoaSpiKjMpO1xuICAgICAgICByZXR1cm4gW3IqMjU1LCBnKjI1NSwgYioyNTUsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhzaTJyZ2JfMSA9IGhzaTJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJG0gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkaCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRlID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHggPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRhID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaHNpID0gcmdiMmhzaV8xO1xuXG4gICAgQ29sb3IkeC5wcm90b3R5cGUuaHNpID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaHNpKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRlLmhzaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkeCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hzaSddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkYS5mb3JtYXQuaHNpID0gaHNpMnJnYl8xO1xuXG4gICAgaW5wdXQkYS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRtKGFyZ3MsICdoc2knKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGgoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skbCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRnID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGQgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDkgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoc2wkMSA9IHJnYjJoc2xfMTtcblxuICAgIENvbG9yJHcucHJvdG90eXBlLmhzbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhzbCQxKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRkLmhzbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdywgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hzbCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkOS5mb3JtYXQuaHNsID0gaHNsMnJnYl8xO1xuXG4gICAgaW5wdXQkOS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRsKGFyZ3MsICdoc2wnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGcoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skayA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbWluJDEgPSBNYXRoLm1pbjtcbiAgICB2YXIgbWF4JDEgPSBNYXRoLm1heDtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc3YocixnLGIpXG4gICAgICogLSByZ2IyaHN2KFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHN2KHtyLGcsYn0pXG4gICAgICovXG4gICAgdmFyIHJnYjJoc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayRrKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgZyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcbiAgICAgICAgdmFyIG1pbl8gPSBtaW4kMShyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1heF8gPSBtYXgkMShyLCBnLCBiKTtcbiAgICAgICAgdmFyIGRlbHRhID0gbWF4XyAtIG1pbl87XG4gICAgICAgIHZhciBoLHMsdjtcbiAgICAgICAgdiA9IG1heF8gLyAyNTUuMDtcbiAgICAgICAgaWYgKG1heF8gPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gZGVsdGEgLyBtYXhfO1xuICAgICAgICAgICAgaWYgKHIgPT09IG1heF8pIHsgaCA9IChnIC0gYikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGcgPT09IG1heF8pIHsgaCA9IDIrKGIgLSByKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoYiA9PT0gbWF4XykgeyBoID0gNCsociAtIGcpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGggKj0gNjA7XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gsIHMsIHZdXG4gICAgfTtcblxuICAgIHZhciByZ2IyaHN2JDEgPSByZ2IyaHNsO1xuXG4gICAgdmFyIHVucGFjayRqID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBmbG9vciQyID0gTWF0aC5mbG9vcjtcblxuICAgIHZhciBoc3YycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDIsIGFzc2lnbiQzLCBhc3NpZ24kNCwgYXNzaWduJDU7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayRqKGFyZ3MsICdoc3YnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciB2ID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICB2ICo9IDI1NTtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IHY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaCA9PT0gMzYwKSB7IGggPSAwOyB9XG4gICAgICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgICAgICBoIC89IDYwO1xuXG4gICAgICAgICAgICB2YXIgaSA9IGZsb29yJDIoaCk7XG4gICAgICAgICAgICB2YXIgZiA9IGggLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICAgICAgICAgIHZhciBxID0gdiAqICgxIC0gcyAqIGYpO1xuICAgICAgICAgICAgdmFyIHQgPSB2ICogKDEgLSBzICogKDEgLSBmKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogKGFzc2lnbiA9IFt2LCB0LCBwXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAoYXNzaWduJDEgPSBbcSwgdiwgcF0sIHIgPSBhc3NpZ24kMVswXSwgZyA9IGFzc2lnbiQxWzFdLCBiID0gYXNzaWduJDFbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMjogKGFzc2lnbiQyID0gW3AsIHYsIHRdLCByID0gYXNzaWduJDJbMF0sIGcgPSBhc3NpZ24kMlsxXSwgYiA9IGFzc2lnbiQyWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IChhc3NpZ24kMyA9IFtwLCBxLCB2XSwgciA9IGFzc2lnbiQzWzBdLCBnID0gYXNzaWduJDNbMV0sIGIgPSBhc3NpZ24kM1syXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0OiAoYXNzaWduJDQgPSBbdCwgcCwgdl0sIHIgPSBhc3NpZ24kNFswXSwgZyA9IGFzc2lnbiQ0WzFdLCBiID0gYXNzaWduJDRbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNTogKGFzc2lnbiQ1ID0gW3YsIHAsIHFdLCByID0gYXNzaWduJDVbMF0sIGcgPSBhc3NpZ24kNVsxXSwgYiA9IGFzc2lnbiQ1WzJdKTsgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLGFyZ3MubGVuZ3RoID4gMz9hcmdzWzNdOjFdO1xuICAgIH07XG5cbiAgICB2YXIgaHN2MnJnYl8xID0gaHN2MnJnYjtcblxuICAgIHZhciB1bnBhY2skaSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRmID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGMgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDggPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoc3YgPSByZ2IyaHN2JDE7XG5cbiAgICBDb2xvciR2LnByb3RvdHlwZS5oc3YgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc3YodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGMuaHN2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR2LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHN2J10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ4LmZvcm1hdC5oc3YgPSBoc3YycmdiXzE7XG5cbiAgICBpbnB1dCQ4LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJGkoYXJncywgJ2hzdicpO1xuICAgICAgICAgICAgaWYgKHR5cGUkZihhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaHN2JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGxhYkNvbnN0YW50cyA9IHtcbiAgICAgICAgLy8gQ29ycmVzcG9uZHMgcm91Z2hseSB0byBSR0IgYnJpZ2h0ZXIvZGFya2VyXG4gICAgICAgIEtuOiAxOCxcblxuICAgICAgICAvLyBENjUgc3RhbmRhcmQgcmVmZXJlbnRcbiAgICAgICAgWG46IDAuOTUwNDcwLFxuICAgICAgICBZbjogMSxcbiAgICAgICAgWm46IDEuMDg4ODMwLFxuXG4gICAgICAgIHQwOiAwLjEzNzkzMTAzNCwgIC8vIDQgLyAyOVxuICAgICAgICB0MTogMC4yMDY4OTY1NTIsICAvLyA2IC8gMjlcbiAgICAgICAgdDI6IDAuMTI4NDE4NTUsICAgLy8gMyAqIHQxICogdDFcbiAgICAgICAgdDM6IDAuMDA4ODU2NDUyLCAgLy8gdDEgKiB0MSAqIHQxXG4gICAgfTtcblxuICAgIHZhciBMQUJfQ09OU1RBTlRTJDMgPSBsYWJDb25zdGFudHM7XG4gICAgdmFyIHVucGFjayRoID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBwb3ckYSA9IE1hdGgucG93O1xuXG4gICAgdmFyIHJnYjJsYWIkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGgoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSByZ2IyeHl6KHIsZyxiKTtcbiAgICAgICAgdmFyIHggPSByZWYkMVswXTtcbiAgICAgICAgdmFyIHkgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIHogPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGwgPSAxMTYgKiB5IC0gMTY7XG4gICAgICAgIHJldHVybiBbbCA8IDAgPyAwIDogbCwgNTAwICogKHggLSB5KSwgMjAwICogKHkgLSB6KV07XG4gICAgfTtcblxuICAgIHZhciByZ2JfeHl6ID0gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgaWYgKChyIC89IDI1NSkgPD0gMC4wNDA0NSkgeyByZXR1cm4gciAvIDEyLjkyOyB9XG4gICAgICAgIHJldHVybiBwb3ckYSgociArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH07XG5cbiAgICB2YXIgeHl6X2xhYiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ID4gTEFCX0NPTlNUQU5UUyQzLnQzKSB7IHJldHVybiBwb3ckYSh0LCAxIC8gMyk7IH1cbiAgICAgICAgcmV0dXJuIHQgLyBMQUJfQ09OU1RBTlRTJDMudDIgKyBMQUJfQ09OU1RBTlRTJDMudDA7XG4gICAgfTtcblxuICAgIHZhciByZ2IyeHl6ID0gZnVuY3Rpb24gKHIsZyxiKSB7XG4gICAgICAgIHIgPSByZ2JfeHl6KHIpO1xuICAgICAgICBnID0gcmdiX3h5eihnKTtcbiAgICAgICAgYiA9IHJnYl94eXooYik7XG4gICAgICAgIHZhciB4ID0geHl6X2xhYigoMC40MTI0NTY0ICogciArIDAuMzU3NTc2MSAqIGcgKyAwLjE4MDQzNzUgKiBiKSAvIExBQl9DT05TVEFOVFMkMy5Ybik7XG4gICAgICAgIHZhciB5ID0geHl6X2xhYigoMC4yMTI2NzI5ICogciArIDAuNzE1MTUyMiAqIGcgKyAwLjA3MjE3NTAgKiBiKSAvIExBQl9DT05TVEFOVFMkMy5Zbik7XG4gICAgICAgIHZhciB6ID0geHl6X2xhYigoMC4wMTkzMzM5ICogciArIDAuMTE5MTkyMCAqIGcgKyAwLjk1MDMwNDEgKiBiKSAvIExBQl9DT05TVEFOVFMkMy5abik7XG4gICAgICAgIHJldHVybiBbeCx5LHpdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmxhYl8xID0gcmdiMmxhYiQyO1xuXG4gICAgdmFyIExBQl9DT05TVEFOVFMkMiA9IGxhYkNvbnN0YW50cztcbiAgICB2YXIgdW5wYWNrJGcgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyQ5ID0gTWF0aC5wb3c7XG5cbiAgICAvKlxuICAgICAqIEwqIFswLi4xMDBdXG4gICAgICogYSBbLTEwMC4uMTAwXVxuICAgICAqIGIgWy0xMDAuLjEwMF1cbiAgICAgKi9cbiAgICB2YXIgbGFiMnJnYiQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skZyhhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGEgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG4gICAgICAgIHZhciB4LHkseiwgcixnLGJfO1xuXG4gICAgICAgIHkgPSAobCArIDE2KSAvIDExNjtcbiAgICAgICAgeCA9IGlzTmFOKGEpID8geSA6IHkgKyBhIC8gNTAwO1xuICAgICAgICB6ID0gaXNOYU4oYikgPyB5IDogeSAtIGIgLyAyMDA7XG5cbiAgICAgICAgeSA9IExBQl9DT05TVEFOVFMkMi5ZbiAqIGxhYl94eXooeSk7XG4gICAgICAgIHggPSBMQUJfQ09OU1RBTlRTJDIuWG4gKiBsYWJfeHl6KHgpO1xuICAgICAgICB6ID0gTEFCX0NPTlNUQU5UUyQyLlpuICogbGFiX3h5eih6KTtcblxuICAgICAgICByID0geHl6X3JnYigzLjI0MDQ1NDIgKiB4IC0gMS41MzcxMzg1ICogeSAtIDAuNDk4NTMxNCAqIHopOyAgLy8gRDY1IC0+IHNSR0JcbiAgICAgICAgZyA9IHh5el9yZ2IoLTAuOTY5MjY2MCAqIHggKyAxLjg3NjAxMDggKiB5ICsgMC4wNDE1NTYwICogeik7XG4gICAgICAgIGJfID0geHl6X3JnYigwLjA1NTY0MzQgKiB4IC0gMC4yMDQwMjU5ICogeSArIDEuMDU3MjI1MiAqIHopO1xuXG4gICAgICAgIHJldHVybiBbcixnLGJfLGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIHh5el9yZ2IgPSBmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gMjU1ICogKHIgPD0gMC4wMDMwNCA/IDEyLjkyICogciA6IDEuMDU1ICogcG93JDkociwgMSAvIDIuNCkgLSAwLjA1NSlcbiAgICB9O1xuXG4gICAgdmFyIGxhYl94eXogPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCA+IExBQl9DT05TVEFOVFMkMi50MSA/IHQgKiB0ICogdCA6IExBQl9DT05TVEFOVFMkMi50MiAqICh0IC0gTEFCX0NPTlNUQU5UUyQyLnQwKVxuICAgIH07XG5cbiAgICB2YXIgbGFiMnJnYl8xID0gbGFiMnJnYiQxO1xuXG4gICAgdmFyIHVucGFjayRmID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGUgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkYiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR1ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNyA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmxhYiQxID0gcmdiMmxhYl8xO1xuXG4gICAgQ29sb3IkdS5wcm90b3R5cGUubGFiID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IybGFiJDEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGIubGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR1LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbGFiJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ3LmZvcm1hdC5sYWIgPSBsYWIycmdiXzE7XG5cbiAgICBpbnB1dCQ3LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJGYoYXJncywgJ2xhYicpO1xuICAgICAgICAgICAgaWYgKHR5cGUkZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbGFiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRlID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBSQUQyREVHID0gdXRpbHMuUkFEMkRFRztcbiAgICB2YXIgc3FydCQzID0gTWF0aC5zcXJ0O1xuICAgIHZhciBhdGFuMiQyID0gTWF0aC5hdGFuMjtcbiAgICB2YXIgcm91bmQkMiA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgbGFiMmxjaCQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skZShhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBjID0gc3FydCQzKGEgKiBhICsgYiAqIGIpO1xuICAgICAgICB2YXIgaCA9IChhdGFuMiQyKGIsIGEpICogUkFEMkRFRyArIDM2MCkgJSAzNjA7XG4gICAgICAgIGlmIChyb3VuZCQyKGMqMTAwMDApID09PSAwKSB7IGggPSBOdW1iZXIuTmFOOyB9XG4gICAgICAgIHJldHVybiBbbCwgYywgaF07XG4gICAgfTtcblxuICAgIHZhciBsYWIybGNoXzEgPSBsYWIybGNoJDI7XG5cbiAgICB2YXIgdW5wYWNrJGQgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJnYjJsYWIgPSByZ2IybGFiXzE7XG4gICAgdmFyIGxhYjJsY2gkMSA9IGxhYjJsY2hfMTtcblxuICAgIHZhciByZ2IybGNoJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRkKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMmxhYihyLGcsYik7XG4gICAgICAgIHZhciBsID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gbGFiMmxjaCQxKGwsYSxiXyk7XG4gICAgfTtcblxuICAgIHZhciByZ2IybGNoXzEgPSByZ2IybGNoJDE7XG5cbiAgICB2YXIgdW5wYWNrJGMgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIERFRzJSQUQgPSB1dGlscy5ERUcyUkFEO1xuICAgIHZhciBzaW4kMyA9IE1hdGguc2luO1xuICAgIHZhciBjb3MkMyA9IE1hdGguY29zO1xuXG4gICAgdmFyIGxjaDJsYWIkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBDb252ZXJ0IGZyb20gYSBxdWFsaXRhdGl2ZSBwYXJhbWV0ZXIgaCBhbmQgYSBxdWFudGl0YXRpdmUgcGFyYW1ldGVyIGwgdG8gYSAyNC1iaXQgcGl4ZWwuXG4gICAgICAgIFRoZXNlIGZvcm11bGFzIHdlcmUgaW52ZW50ZWQgYnkgRGF2aWQgRGFscnltcGxlIHRvIG9idGFpbiBtYXhpbXVtIGNvbnRyYXN0IHdpdGhvdXQgZ29pbmdcbiAgICAgICAgb3V0IG9mIGdhbXV0IGlmIHRoZSBwYXJhbWV0ZXJzIGFyZSBpbiB0aGUgcmFuZ2UgMC0xLlxuXG4gICAgICAgIEEgc2F0dXJhdGlvbiBtdWx0aXBsaWVyIHdhcyBhZGRlZCBieSBHcmVnb3IgQWlzY2hcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRjKGFyZ3MsICdsY2gnKTtcbiAgICAgICAgdmFyIGwgPSByZWZbMF07XG4gICAgICAgIHZhciBjID0gcmVmWzFdO1xuICAgICAgICB2YXIgaCA9IHJlZlsyXTtcbiAgICAgICAgaWYgKGlzTmFOKGgpKSB7IGggPSAwOyB9XG4gICAgICAgIGggPSBoICogREVHMlJBRDtcbiAgICAgICAgcmV0dXJuIFtsLCBjb3MkMyhoKSAqIGMsIHNpbiQzKGgpICogY11cbiAgICB9O1xuXG4gICAgdmFyIGxjaDJsYWJfMSA9IGxjaDJsYWIkMjtcblxuICAgIHZhciB1bnBhY2skYiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGNoMmxhYiQxID0gbGNoMmxhYl8xO1xuICAgIHZhciBsYWIycmdiID0gbGFiMnJnYl8xO1xuXG4gICAgdmFyIGxjaDJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGIoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBjID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcmVmID0gbGNoMmxhYiQxIChsLGMsaCk7XG4gICAgICAgIHZhciBMID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBsYWIycmdiIChMLGEsYl8pO1xuICAgICAgICB2YXIgciA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGxjaDJyZ2JfMSA9IGxjaDJyZ2IkMTtcblxuICAgIHZhciB1bnBhY2skYSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGNoMnJnYiA9IGxjaDJyZ2JfMTtcblxuICAgIHZhciBoY2wycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciBoY2wgPSB1bnBhY2skYShhcmdzLCAnaGNsJykucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gbGNoMnJnYi5hcHBseSh2b2lkIDAsIGhjbCk7XG4gICAgfTtcblxuICAgIHZhciBoY2wycmdiXzEgPSBoY2wycmdiO1xuXG4gICAgdmFyIHVucGFjayQ5ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGQgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkYSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR0ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNiA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmxjaCA9IHJnYjJsY2hfMTtcblxuICAgIENvbG9yJHQucHJvdG90eXBlLmxjaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcmdiMmxjaCh0aGlzLl9yZ2IpOyB9O1xuICAgIENvbG9yJHQucHJvdG90eXBlLmhjbCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcmdiMmxjaCh0aGlzLl9yZ2IpLnJldmVyc2UoKTsgfTtcblxuICAgIGNocm9tYSRhLmxjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2xjaCddKSApKTtcbiAgICB9O1xuICAgIGNocm9tYSRhLmhjbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hjbCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkNi5mb3JtYXQubGNoID0gbGNoMnJnYl8xO1xuICAgIGlucHV0JDYuZm9ybWF0LmhjbCA9IGhjbDJyZ2JfMTtcblxuICAgIFsnbGNoJywnaGNsJ10uZm9yRWFjaChmdW5jdGlvbiAobSkgeyByZXR1cm4gaW5wdXQkNi5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayQ5KGFyZ3MsIG0pO1xuICAgICAgICAgICAgaWYgKHR5cGUkZChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7IH0pO1xuXG4gICAgLyoqXG4gICAgXHRYMTEgY29sb3IgbmFtZXNcblxuICAgIFx0aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yXG4gICAgKi9cblxuICAgIHZhciB3M2N4MTEkMSA9IHtcbiAgICAgICAgYWxpY2VibHVlOiAnI2YwZjhmZicsXG4gICAgICAgIGFudGlxdWV3aGl0ZTogJyNmYWViZDcnLFxuICAgICAgICBhcXVhOiAnIzAwZmZmZicsXG4gICAgICAgIGFxdWFtYXJpbmU6ICcjN2ZmZmQ0JyxcbiAgICAgICAgYXp1cmU6ICcjZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICcjZjVmNWRjJyxcbiAgICAgICAgYmlzcXVlOiAnI2ZmZTRjNCcsXG4gICAgICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnI2ZmZWJjZCcsXG4gICAgICAgIGJsdWU6ICcjMDAwMGZmJyxcbiAgICAgICAgYmx1ZXZpb2xldDogJyM4YTJiZTInLFxuICAgICAgICBicm93bjogJyNhNTJhMmEnLFxuICAgICAgICBidXJseXdvb2Q6ICcjZGViODg3JyxcbiAgICAgICAgY2FkZXRibHVlOiAnIzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICcjN2ZmZjAwJyxcbiAgICAgICAgY2hvY29sYXRlOiAnI2QyNjkxZScsXG4gICAgICAgIGNvcmFsOiAnI2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXI6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybmZsb3dlcmJsdWU6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICcjZmZmOGRjJyxcbiAgICAgICAgY3JpbXNvbjogJyNkYzE0M2MnLFxuICAgICAgICBjeWFuOiAnIzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnIzAwMDA4YicsXG4gICAgICAgIGRhcmtjeWFuOiAnIzAwOGI4YicsXG4gICAgICAgIGRhcmtnb2xkZW5yb2Q6ICcjYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICcjYTlhOWE5JyxcbiAgICAgICAgZGFya2dyZWVuOiAnIzAwNjQwMCcsXG4gICAgICAgIGRhcmtncmV5OiAnI2E5YTlhOScsXG4gICAgICAgIGRhcmtraGFraTogJyNiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJyM4YjAwOGInLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogJyM1NTZiMmYnLFxuICAgICAgICBkYXJrb3JhbmdlOiAnI2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICcjOTkzMmNjJyxcbiAgICAgICAgZGFya3JlZDogJyM4YjAwMDAnLFxuICAgICAgICBkYXJrc2FsbW9uOiAnI2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJyM4ZmJjOGYnLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAnIzQ4M2Q4YicsXG4gICAgICAgIGRhcmtzbGF0ZWdyYXk6ICcjMmY0ZjRmJyxcbiAgICAgICAgZGFya3NsYXRlZ3JleTogJyMyZjRmNGYnLFxuICAgICAgICBkYXJrdHVycXVvaXNlOiAnIzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICcjOTQwMGQzJyxcbiAgICAgICAgZGVlcHBpbms6ICcjZmYxNDkzJyxcbiAgICAgICAgZGVlcHNreWJsdWU6ICcjMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJyM2OTY5NjknLFxuICAgICAgICBkaW1ncmV5OiAnIzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcjMWU5MGZmJyxcbiAgICAgICAgZmlyZWJyaWNrOiAnI2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnI2ZmZmFmMCcsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAnIzIyOGIyMicsXG4gICAgICAgIGZ1Y2hzaWE6ICcjZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnI2RjZGNkYycsXG4gICAgICAgIGdob3N0d2hpdGU6ICcjZjhmOGZmJyxcbiAgICAgICAgZ29sZDogJyNmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICcjZGFhNTIwJyxcbiAgICAgICAgZ3JheTogJyM4MDgwODAnLFxuICAgICAgICBncmVlbjogJyMwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJyNhZGZmMmYnLFxuICAgICAgICBncmV5OiAnIzgwODA4MCcsXG4gICAgICAgIGhvbmV5ZGV3OiAnI2YwZmZmMCcsXG4gICAgICAgIGhvdHBpbms6ICcjZmY2OWI0JyxcbiAgICAgICAgaW5kaWFucmVkOiAnI2NkNWM1YycsXG4gICAgICAgIGluZGlnbzogJyM0YjAwODInLFxuICAgICAgICBpdm9yeTogJyNmZmZmZjAnLFxuICAgICAgICBraGFraTogJyNmMGU2OGMnLFxuICAgICAgICBsYXNlcmxlbW9uOiAnI2ZmZmY1NCcsXG4gICAgICAgIGxhdmVuZGVyOiAnI2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICcjZmZmMGY1JyxcbiAgICAgICAgbGF3bmdyZWVuOiAnIzdjZmMwMCcsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogJyNmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICcjYWRkOGU2JyxcbiAgICAgICAgbGlnaHRjb3JhbDogJyNmMDgwODAnLFxuICAgICAgICBsaWdodGN5YW46ICcjZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2Q6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRncmF5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0Z3JlZW46ICcjOTBlZTkwJyxcbiAgICAgICAgbGlnaHRncmV5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0cGluazogJyNmZmI2YzEnLFxuICAgICAgICBsaWdodHNhbG1vbjogJyNmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnIzIwYjJhYScsXG4gICAgICAgIGxpZ2h0c2t5Ymx1ZTogJyM4N2NlZmEnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHNsYXRlZ3JleTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHN0ZWVsYmx1ZTogJyNiMGM0ZGUnLFxuICAgICAgICBsaWdodHllbGxvdzogJyNmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnIzAwZmYwMCcsXG4gICAgICAgIGxpbWVncmVlbjogJyMzMmNkMzInLFxuICAgICAgICBsaW5lbjogJyNmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnI2ZmMDBmZicsXG4gICAgICAgIG1hcm9vbjogJyM4MDAwMDAnLFxuICAgICAgICBtYXJvb24yOiAnIzdmMDAwMCcsXG4gICAgICAgIG1hcm9vbjM6ICcjYjAzMDYwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJyM2NmNkYWEnLFxuICAgICAgICBtZWRpdW1ibHVlOiAnIzAwMDBjZCcsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJyNiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICcjOTM3MGRiJyxcbiAgICAgICAgbWVkaXVtc2VhZ3JlZW46ICcjM2NiMzcxJyxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnIzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnIzAwZmE5YScsXG4gICAgICAgIG1lZGl1bXR1cnF1b2lzZTogJyM0OGQxY2MnLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICcjYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnIzE5MTk3MCcsXG4gICAgICAgIG1pbnRjcmVhbTogJyNmNWZmZmEnLFxuICAgICAgICBtaXN0eXJvc2U6ICcjZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICcjZmZlNGI1JyxcbiAgICAgICAgbmF2YWpvd2hpdGU6ICcjZmZkZWFkJyxcbiAgICAgICAgbmF2eTogJyMwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnI2ZkZjVlNicsXG4gICAgICAgIG9saXZlOiAnIzgwODAwMCcsXG4gICAgICAgIG9saXZlZHJhYjogJyM2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICcjZmZhNTAwJyxcbiAgICAgICAgb3JhbmdlcmVkOiAnI2ZmNDUwMCcsXG4gICAgICAgIG9yY2hpZDogJyNkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnI2VlZThhYScsXG4gICAgICAgIHBhbGVncmVlbjogJyM5OGZiOTgnLFxuICAgICAgICBwYWxldHVycXVvaXNlOiAnI2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICcjZGI3MDkzJyxcbiAgICAgICAgcGFwYXlhd2hpcDogJyNmZmVmZDUnLFxuICAgICAgICBwZWFjaHB1ZmY6ICcjZmZkYWI5JyxcbiAgICAgICAgcGVydTogJyNjZDg1M2YnLFxuICAgICAgICBwaW5rOiAnI2ZmYzBjYicsXG4gICAgICAgIHBsdW06ICcjZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJyNiMGUwZTYnLFxuICAgICAgICBwdXJwbGU6ICcjODAwMDgwJyxcbiAgICAgICAgcHVycGxlMjogJyM3ZjAwN2YnLFxuICAgICAgICBwdXJwbGUzOiAnI2EwMjBmMCcsXG4gICAgICAgIHJlYmVjY2FwdXJwbGU6ICcjNjYzMzk5JyxcbiAgICAgICAgcmVkOiAnI2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJyNiYzhmOGYnLFxuICAgICAgICByb3lhbGJsdWU6ICcjNDE2OWUxJyxcbiAgICAgICAgc2FkZGxlYnJvd246ICcjOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnI2ZhODA3MicsXG4gICAgICAgIHNhbmR5YnJvd246ICcjZjRhNDYwJyxcbiAgICAgICAgc2VhZ3JlZW46ICcjMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICcjZmZmNWVlJyxcbiAgICAgICAgc2llbm5hOiAnI2EwNTIyZCcsXG4gICAgICAgIHNpbHZlcjogJyNjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnIzg3Y2VlYicsXG4gICAgICAgIHNsYXRlYmx1ZTogJyM2YTVhY2QnLFxuICAgICAgICBzbGF0ZWdyYXk6ICcjNzA4MDkwJyxcbiAgICAgICAgc2xhdGVncmV5OiAnIzcwODA5MCcsXG4gICAgICAgIHNub3c6ICcjZmZmYWZhJyxcbiAgICAgICAgc3ByaW5nZ3JlZW46ICcjMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnIzQ2ODJiNCcsXG4gICAgICAgIHRhbjogJyNkMmI0OGMnLFxuICAgICAgICB0ZWFsOiAnIzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICcjZDhiZmQ4JyxcbiAgICAgICAgdG9tYXRvOiAnI2ZmNjM0NycsXG4gICAgICAgIHR1cnF1b2lzZTogJyM0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICcjZWU4MmVlJyxcbiAgICAgICAgd2hlYXQ6ICcjZjVkZWIzJyxcbiAgICAgICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJyNmNWY1ZjUnLFxuICAgICAgICB5ZWxsb3c6ICcjZmZmZjAwJyxcbiAgICAgICAgeWVsbG93Z3JlZW46ICcjOWFjZDMyJ1xuICAgIH07XG5cbiAgICB2YXIgdzNjeDExXzEgPSB3M2N4MTEkMTtcblxuICAgIHZhciBDb2xvciRzID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNSA9IGlucHV0JGg7XG4gICAgdmFyIHR5cGUkYyA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgdzNjeDExID0gdzNjeDExXzE7XG4gICAgdmFyIGhleDJyZ2IgPSBoZXgycmdiXzE7XG4gICAgdmFyIHJnYjJoZXggPSByZ2IyaGV4XzE7XG5cbiAgICBDb2xvciRzLnByb3RvdHlwZS5uYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoZXggPSByZ2IyaGV4KHRoaXMuX3JnYiwgJ3JnYicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IE9iamVjdC5rZXlzKHczY3gxMSk7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgIGlmICh3M2N4MTFbbl0gPT09IGhleCkgeyByZXR1cm4gbi50b0xvd2VyQ2FzZSgpOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhleDtcbiAgICB9O1xuXG4gICAgaW5wdXQkNS5mb3JtYXQubmFtZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodzNjeDExW25hbWVdKSB7IHJldHVybiBoZXgycmdiKHczY3gxMVtuYW1lXSk7IH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGNvbG9yIG5hbWU6ICcrbmFtZSk7XG4gICAgfTtcblxuICAgIGlucHV0JDUuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkYyhoKSA9PT0gJ3N0cmluZycgJiYgdzNjeDExW2gudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25hbWVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayQ4ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIHJnYjJudW0kMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJDgoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByZXR1cm4gKHIgPDwgMTYpICsgKGcgPDwgOCkgKyBiO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm51bV8xID0gcmdiMm51bSQxO1xuXG4gICAgdmFyIHR5cGUkYiA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgbnVtMnJnYiA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgaWYgKHR5cGUkYihudW0pID09IFwibnVtYmVyXCIgJiYgbnVtID49IDAgJiYgbnVtIDw9IDB4RkZGRkZGKSB7XG4gICAgICAgICAgICB2YXIgciA9IG51bSA+PiAxNjtcbiAgICAgICAgICAgIHZhciBnID0gKG51bSA+PiA4KSAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiA9IG51bSAmIDB4RkY7XG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gbnVtIGNvbG9yOiBcIitudW0pO1xuICAgIH07XG5cbiAgICB2YXIgbnVtMnJnYl8xID0gbnVtMnJnYjtcblxuICAgIHZhciBjaHJvbWEkOSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRyID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNCA9IGlucHV0JGg7XG4gICAgdmFyIHR5cGUkYSA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcmdiMm51bSA9IHJnYjJudW1fMTtcblxuICAgIENvbG9yJHIucHJvdG90eXBlLm51bSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMm51bSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkOS5udW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHIsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydudW0nXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDQuZm9ybWF0Lm51bSA9IG51bTJyZ2JfMTtcblxuICAgIGlucHV0JDQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlJGEoYXJnc1swXSkgPT09ICdudW1iZXInICYmIGFyZ3NbMF0gPj0gMCAmJiBhcmdzWzBdIDw9IDB4RkZGRkZGKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdudW0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgY2hyb21hJDggPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkcSA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDMgPSBpbnB1dCRoO1xuICAgIHZhciB1bnBhY2skNyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ5ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgcm91bmQkMSA9IE1hdGgucm91bmQ7XG5cbiAgICBDb2xvciRxLnByb3RvdHlwZS5yZ2IgPSBmdW5jdGlvbihybmQpIHtcbiAgICAgICAgaWYgKCBybmQgPT09IHZvaWQgMCApIHJuZD10cnVlO1xuXG4gICAgICAgIGlmIChybmQgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCwzKTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsMykubWFwKHJvdW5kJDEpO1xuICAgIH07XG5cbiAgICBDb2xvciRxLnByb3RvdHlwZS5yZ2JhID0gZnVuY3Rpb24ocm5kKSB7XG4gICAgICAgIGlmICggcm5kID09PSB2b2lkIDAgKSBybmQ9dHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsNCkubWFwKGZ1bmN0aW9uICh2LGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpPDMgPyAocm5kID09PSBmYWxzZSA/IHYgOiByb3VuZCQxKHYpKSA6IHY7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjaHJvbWEkOC5yZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydyZ2InXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDMuZm9ybWF0LnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiYSA9IHVucGFjayQ3KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIGlmIChyZ2JhWzNdID09PSB1bmRlZmluZWQpIHsgcmdiYVszXSA9IDE7IH1cbiAgICAgICAgcmV0dXJuIHJnYmE7XG4gICAgfTtcblxuICAgIGlucHV0JDMuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMyxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skNyhhcmdzLCAncmdiYScpO1xuICAgICAgICAgICAgaWYgKHR5cGUkOShhcmdzKSA9PT0gJ2FycmF5JyAmJiAoYXJncy5sZW5ndGggPT09IDMgfHxcbiAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA9PT0gNCAmJiB0eXBlJDkoYXJnc1szXSkgPT0gJ251bWJlcicgJiYgYXJnc1szXSA+PSAwICYmIGFyZ3NbM10gPD0gMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3JnYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qXG4gICAgICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAgICAgKi9cblxuICAgIHZhciBsb2ckMSA9IE1hdGgubG9nO1xuXG4gICAgdmFyIHRlbXBlcmF0dXJlMnJnYiQxID0gZnVuY3Rpb24gKGtlbHZpbikge1xuICAgICAgICB2YXIgdGVtcCA9IGtlbHZpbiAvIDEwMDtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICBpZiAodGVtcCA8IDY2KSB7XG4gICAgICAgICAgICByID0gMjU1O1xuICAgICAgICAgICAgZyA9IHRlbXAgPCA2ID8gMCA6IC0xNTUuMjU0ODU1NjI3MDkxNzkgLSAwLjQ0NTk2OTUwNDY5NTc5MTMzICogKGcgPSB0ZW1wLTIpICsgMTA0LjQ5MjE2MTk5MzkzODg4ICogbG9nJDEoZyk7XG4gICAgICAgICAgICBiID0gdGVtcCA8IDIwID8gMCA6IC0yNTQuNzY5MzUxODQxMjA5MDIgKyAwLjgyNzQwOTYwNjQwMDczOTUgKiAoYiA9IHRlbXAtMTApICsgMTE1LjY3OTk0NDAxMDY2MTQ3ICogbG9nJDEoYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gMzUxLjk3NjkwNTY2ODA1NjkzICsgMC4xMTQyMDY0NTM3ODQxNjUgKiAociA9IHRlbXAtNTUpIC0gNDAuMjUzNjYzMDkzMzIxMjcgKiBsb2ckMShyKTtcbiAgICAgICAgICAgIGcgPSAzMjUuNDQ5NDEyNTcxMTk3NCArIDAuMDc5NDM0NTY1MzY2NjIzNDIgKiAoZyA9IHRlbXAtNTApIC0gMjguMDg1Mjk2MzUwNzk1NyAqIGxvZyQxKGcpO1xuICAgICAgICAgICAgYiA9IDI1NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgIH07XG5cbiAgICB2YXIgdGVtcGVyYXR1cmUycmdiXzEgPSB0ZW1wZXJhdHVyZTJyZ2IkMTtcblxuICAgIC8qXG4gICAgICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAgICAgKiovXG5cbiAgICB2YXIgdGVtcGVyYXR1cmUycmdiID0gdGVtcGVyYXR1cmUycmdiXzE7XG4gICAgdmFyIHVucGFjayQ2ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYiA9IHVucGFjayQ2KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZ2JbMF0sIGIgPSByZ2JbMl07XG4gICAgICAgIHZhciBtaW5UZW1wID0gMTAwMDtcbiAgICAgICAgdmFyIG1heFRlbXAgPSA0MDAwMDtcbiAgICAgICAgdmFyIGVwcyA9IDAuNDtcbiAgICAgICAgdmFyIHRlbXA7XG4gICAgICAgIHdoaWxlIChtYXhUZW1wIC0gbWluVGVtcCA+IGVwcykge1xuICAgICAgICAgICAgdGVtcCA9IChtYXhUZW1wICsgbWluVGVtcCkgKiAwLjU7XG4gICAgICAgICAgICB2YXIgcmdiJDEgPSB0ZW1wZXJhdHVyZTJyZ2IodGVtcCk7XG4gICAgICAgICAgICBpZiAoKHJnYiQxWzJdIC8gcmdiJDFbMF0pID49IChiIC8gcikpIHtcbiAgICAgICAgICAgICAgICBtYXhUZW1wID0gdGVtcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWluVGVtcCA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdW5kKHRlbXApO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlXzEgPSByZ2IydGVtcGVyYXR1cmUkMTtcblxuICAgIHZhciBjaHJvbWEkNyA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRwID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkMiA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlID0gcmdiMnRlbXBlcmF0dXJlXzE7XG5cbiAgICBDb2xvciRwLnByb3RvdHlwZS50ZW1wID1cbiAgICBDb2xvciRwLnByb3RvdHlwZS5rZWx2aW4gPVxuICAgIENvbG9yJHAucHJvdG90eXBlLnRlbXBlcmF0dXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IydGVtcGVyYXR1cmUodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDcudGVtcCA9XG4gICAgY2hyb21hJDcua2VsdmluID1cbiAgICBjaHJvbWEkNy50ZW1wZXJhdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkcCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ3RlbXAnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDIuZm9ybWF0LnRlbXAgPVxuICAgIGlucHV0JDIuZm9ybWF0LmtlbHZpbiA9XG4gICAgaW5wdXQkMi5mb3JtYXQudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTJyZ2JfMTtcblxuICAgIHZhciB1bnBhY2skNSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgY2JydCA9IE1hdGguY2JydDtcbiAgICB2YXIgcG93JDggPSBNYXRoLnBvdztcbiAgICB2YXIgc2lnbiQxID0gTWF0aC5zaWduO1xuXG4gICAgdmFyIHJnYjJva2xhYiQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8vIE9LTGFiIGNvbG9yIHNwYWNlIGltcGxlbWVudGF0aW9uIHRha2VuIGZyb21cbiAgICAgICAgLy8gaHR0cHM6Ly9ib3R0b3Nzb24uZ2l0aHViLmlvL3Bvc3RzL29rbGFiL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJDUoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBbcmdiMmxyZ2IociAvIDI1NSksIHJnYjJscmdiKGcgLyAyNTUpLCByZ2IybHJnYihiIC8gMjU1KV07XG4gICAgICAgIHZhciBsciA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgbGcgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGxiID0gcmVmJDFbMl07XG4gICAgICAgIHZhciBsID0gY2JydCgwLjQxMjIyMTQ3MDggKiBsciArIDAuNTM2MzMyNTM2MyAqIGxnICsgMC4wNTE0NDU5OTI5ICogbGIpO1xuICAgICAgICB2YXIgbSA9IGNicnQoMC4yMTE5MDM0OTgyICogbHIgKyAwLjY4MDY5OTU0NTEgKiBsZyArIDAuMTA3Mzk2OTU2NiAqIGxiKTtcbiAgICAgICAgdmFyIHMgPSBjYnJ0KDAuMDg4MzAyNDYxOSAqIGxyICsgMC4yODE3MTg4Mzc2ICogbGcgKyAwLjYyOTk3ODcwMDUgKiBsYik7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIDAuMjEwNDU0MjU1MyAqIGwgKyAwLjc5MzYxNzc4NSAqIG0gLSAwLjAwNDA3MjA0NjggKiBzLFxuICAgICAgICAgICAgMS45Nzc5OTg0OTUxICogbCAtIDIuNDI4NTkyMjA1ICogbSArIDAuNDUwNTkzNzA5OSAqIHMsXG4gICAgICAgICAgICAwLjAyNTkwNDAzNzEgKiBsICsgMC43ODI3NzE3NjYyICogbSAtIDAuODA4Njc1NzY2ICogc1xuICAgICAgICBdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm9rbGFiXzEgPSByZ2Iyb2tsYWIkMjtcblxuICAgIGZ1bmN0aW9uIHJnYjJscmdiKGMpIHtcbiAgICAgICAgdmFyIGFicyA9IE1hdGguYWJzKGMpO1xuICAgICAgICBpZiAoYWJzIDwgMC4wNDA0NSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgLyAxMi45MjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHNpZ24kMShjKSB8fCAxKSAqIHBvdyQ4KChhYnMgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICB9XG5cbiAgICB2YXIgdW5wYWNrJDQgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyQ3ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpZ24gPSBNYXRoLnNpZ247XG5cbiAgICAvKlxuICAgICAqIEwqIFswLi4xMDBdXG4gICAgICogYSBbLTEwMC4uMTAwXVxuICAgICAqIGIgWy0xMDAuLjEwMF1cbiAgICAgKi9cbiAgICB2YXIgb2tsYWIycmdiJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayQ0KGFyZ3MsICdsYWInKTtcbiAgICAgICAgdmFyIEwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYSA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcblxuICAgICAgICB2YXIgbCA9IHBvdyQ3KEwgKyAwLjM5NjMzNzc3NzQgKiBhICsgMC4yMTU4MDM3NTczICogYiwgMyk7XG4gICAgICAgIHZhciBtID0gcG93JDcoTCAtIDAuMTA1NTYxMzQ1OCAqIGEgLSAwLjA2Mzg1NDE3MjggKiBiLCAzKTtcbiAgICAgICAgdmFyIHMgPSBwb3ckNyhMIC0gMC4wODk0ODQxNzc1ICogYSAtIDEuMjkxNDg1NTQ4ICogYiwgMyk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIDI1NSAqIGxyZ2IycmdiKCs0LjA3Njc0MTY2MjEgKiBsIC0gMy4zMDc3MTE1OTEzICogbSArIDAuMjMwOTY5OTI5MiAqIHMpLFxuICAgICAgICAgICAgMjU1ICogbHJnYjJyZ2IoLTEuMjY4NDM4MDA0NiAqIGwgKyAyLjYwOTc1NzQwMTEgKiBtIC0gMC4zNDEzMTkzOTY1ICogcyksXG4gICAgICAgICAgICAyNTUgKiBscmdiMnJnYigtMC4wMDQxOTYwODYzICogbCAtIDAuNzAzNDE4NjE0NyAqIG0gKyAxLjcwNzYxNDcwMSAqIHMpLFxuICAgICAgICAgICAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFcbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgdmFyIG9rbGFiMnJnYl8xID0gb2tsYWIycmdiJDE7XG5cbiAgICBmdW5jdGlvbiBscmdiMnJnYihjKSB7XG4gICAgICAgIHZhciBhYnMgPSBNYXRoLmFicyhjKTtcbiAgICAgICAgaWYgKGFicyA+IDAuMDAzMTMwOCkge1xuICAgICAgICAgICAgcmV0dXJuIChzaWduKGMpIHx8IDEpICogKDEuMDU1ICogcG93JDcoYWJzLCAxIC8gMi40KSAtIDAuMDU1KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYyAqIDEyLjkyO1xuICAgIH1cblxuICAgIHZhciB1bnBhY2skMyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ4ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJDYgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkbyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDEgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJva2xhYiQxID0gcmdiMm9rbGFiXzE7XG5cbiAgICBDb2xvciRvLnByb3RvdHlwZS5va2xhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJva2xhYiQxKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSQ2Lm9rbGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRvLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnb2tsYWInXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDEuZm9ybWF0Lm9rbGFiID0gb2tsYWIycmdiXzE7XG5cbiAgICBpbnB1dCQxLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDMsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJDMoYXJncywgJ29rbGFiJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ4KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdva2xhYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skMiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcmdiMm9rbGFiID0gcmdiMm9rbGFiXzE7XG4gICAgdmFyIGxhYjJsY2ggPSBsYWIybGNoXzE7XG5cbiAgICB2YXIgcmdiMm9rbGNoJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQyKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMm9rbGFiKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIGxhYjJsY2gobCwgYSwgYl8pO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm9rbGNoXzEgPSByZ2Iyb2tsY2gkMTtcblxuICAgIHZhciB1bnBhY2skMSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGNoMmxhYiA9IGxjaDJsYWJfMTtcbiAgICB2YXIgb2tsYWIycmdiID0gb2tsYWIycmdiXzE7XG5cbiAgICB2YXIgb2tsY2gycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skMShhcmdzLCAnbGNoJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByZWYgPSBsY2gybGFiKGwsIGMsIGgpO1xuICAgICAgICB2YXIgTCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGEgPSByZWZbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gb2tsYWIycmdiKEwsIGEsIGJfKTtcbiAgICAgICAgdmFyIHIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGcgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGIgPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBva2xjaDJyZ2JfMSA9IG9rbGNoMnJnYjtcblxuICAgIHZhciB1bnBhY2sgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkNyA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSQ1ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJG4gPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMm9rbGNoID0gcmdiMm9rbGNoXzE7XG5cbiAgICBDb2xvciRuLnByb3RvdHlwZS5va2xjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJva2xjaCh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkNS5va2xjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkbiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ29rbGNoJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQub2tsY2ggPSBva2xjaDJyZ2JfMTtcblxuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDMsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdva2xjaCcpO1xuICAgICAgICAgICAgaWYgKHR5cGUkNyhhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnb2tsY2gnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29sb3IkbSA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkNiA9IHV0aWxzLnR5cGU7XG5cbiAgICBDb2xvciRtLnByb3RvdHlwZS5hbHBoYSA9IGZ1bmN0aW9uKGEsIG11dGF0ZSkge1xuICAgICAgICBpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlPWZhbHNlO1xuXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQgJiYgdHlwZSQ2KGEpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKG11dGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JnYlszXSA9IGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJG0oW3RoaXMuX3JnYlswXSwgdGhpcy5fcmdiWzFdLCB0aGlzLl9yZ2JbMl0sIGFdLCAncmdiJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYlszXTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGwgPSBDb2xvcl8xO1xuXG4gICAgQ29sb3IkbC5wcm90b3R5cGUuY2xpcHBlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLl9jbGlwcGVkIHx8IGZhbHNlO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkayA9IENvbG9yXzE7XG4gICAgdmFyIExBQl9DT05TVEFOVFMkMSA9IGxhYkNvbnN0YW50cztcblxuICAgIENvbG9yJGsucHJvdG90eXBlLmRhcmtlbiA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHR2YXIgbWUgPSB0aGlzO1xuICAgIFx0dmFyIGxhYiA9IG1lLmxhYigpO1xuICAgIFx0bGFiWzBdIC09IExBQl9DT05TVEFOVFMkMS5LbiAqIGFtb3VudDtcbiAgICBcdHJldHVybiBuZXcgQ29sb3IkayhsYWIsICdsYWInKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgQ29sb3Ikay5wcm90b3R5cGUuYnJpZ2h0ZW4gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0cmV0dXJuIHRoaXMuZGFya2VuKC1hbW91bnQpO1xuICAgIH07XG5cbiAgICBDb2xvciRrLnByb3RvdHlwZS5kYXJrZXIgPSBDb2xvciRrLnByb3RvdHlwZS5kYXJrZW47XG4gICAgQ29sb3Ikay5wcm90b3R5cGUuYnJpZ2h0ZXIgPSBDb2xvciRrLnByb3RvdHlwZS5icmlnaHRlbjtcblxuICAgIHZhciBDb2xvciRqID0gQ29sb3JfMTtcblxuICAgIENvbG9yJGoucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChtYykge1xuICAgICAgICB2YXIgcmVmID0gbWMuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG1vZGUgPSByZWZbMF07XG4gICAgICAgIHZhciBjaGFubmVsID0gcmVmWzFdO1xuICAgICAgICB2YXIgc3JjID0gdGhpc1ttb2RlXSgpO1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgdmFyIGkgPSBtb2RlLmluZGV4T2YoY2hhbm5lbCkgLSAobW9kZS5zdWJzdHIoMCwgMikgPT09ICdvaycgPyAyIDogMCk7XG4gICAgICAgICAgICBpZiAoaSA+IC0xKSB7IHJldHVybiBzcmNbaV07IH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGNoYW5uZWwgXCIgKyBjaGFubmVsICsgXCIgaW4gbW9kZSBcIiArIG1vZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGkgPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJDUgPSB1dGlscy50eXBlO1xuICAgIHZhciBwb3ckNiA9IE1hdGgucG93O1xuXG4gICAgdmFyIEVQUyA9IDFlLTc7XG4gICAgdmFyIE1BWF9JVEVSID0gMjA7XG5cbiAgICBDb2xvciRpLnByb3RvdHlwZS5sdW1pbmFuY2UgPSBmdW5jdGlvbihsdW0pIHtcbiAgICAgICAgaWYgKGx1bSAhPT0gdW5kZWZpbmVkICYmIHR5cGUkNShsdW0pID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGx1bSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBwdXJlIGJsYWNrXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRpKFswLDAsMCx0aGlzLl9yZ2JbM11dLCAncmdiJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobHVtID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHB1cmUgd2hpdGVcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJGkoWzI1NSwyNTUsMjU1LHRoaXMuX3JnYlszXV0sICdyZ2InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbXB1dGUgbmV3IGNvbG9yIHVzaW5nLi4uXG4gICAgICAgICAgICB2YXIgY3VyX2x1bSA9IHRoaXMubHVtaW5hbmNlKCk7XG4gICAgICAgICAgICB2YXIgbW9kZSA9ICdyZ2InO1xuICAgICAgICAgICAgdmFyIG1heF9pdGVyID0gTUFYX0lURVI7XG5cbiAgICAgICAgICAgIHZhciB0ZXN0ID0gZnVuY3Rpb24gKGxvdywgaGlnaCkge1xuICAgICAgICAgICAgICAgIHZhciBtaWQgPSBsb3cuaW50ZXJwb2xhdGUoaGlnaCwgMC41LCBtb2RlKTtcbiAgICAgICAgICAgICAgICB2YXIgbG0gPSBtaWQubHVtaW5hbmNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGx1bSAtIGxtKSA8IEVQUyB8fCAhbWF4X2l0ZXItLSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZSBlbm91Z2hcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxtID4gbHVtID8gdGVzdChsb3csIG1pZCkgOiB0ZXN0KG1pZCwgaGlnaCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgcmdiID0gKGN1cl9sdW0gPiBsdW0gPyB0ZXN0KG5ldyBDb2xvciRpKFswLDAsMF0pLCB0aGlzKSA6IHRlc3QodGhpcywgbmV3IENvbG9yJGkoWzI1NSwyNTUsMjU1XSkpKS5yZ2IoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkaShyZ2IuY29uY2F0KCBbdGhpcy5fcmdiWzNdXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2IybHVtaW5hbmNlLmFwcGx5KHZvaWQgMCwgKHRoaXMuX3JnYikuc2xpY2UoMCwzKSk7XG4gICAgfTtcblxuXG4gICAgdmFyIHJnYjJsdW1pbmFuY2UgPSBmdW5jdGlvbiAocixnLGIpIHtcbiAgICAgICAgLy8gcmVsYXRpdmUgbHVtaW5hbmNlXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAgICAgIHIgPSBsdW1pbmFuY2VfeChyKTtcbiAgICAgICAgZyA9IGx1bWluYW5jZV94KGcpO1xuICAgICAgICBiID0gbHVtaW5hbmNlX3goYik7XG4gICAgICAgIHJldHVybiAwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGI7XG4gICAgfTtcblxuICAgIHZhciBsdW1pbmFuY2VfeCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHggLz0gMjU1O1xuICAgICAgICByZXR1cm4geCA8PSAwLjAzOTI4ID8geC8xMi45MiA6IHBvdyQ2KCh4KzAuMDU1KS8xLjA1NSwgMi40KTtcbiAgICB9O1xuXG4gICAgdmFyIGludGVycG9sYXRvciQxID0ge307XG5cbiAgICB2YXIgQ29sb3IkaCA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkNCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGludGVycG9sYXRvciA9IGludGVycG9sYXRvciQxO1xuXG4gICAgdmFyIG1peCQxID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgaWYgKCBmID09PSB2b2lkIDAgKSBmPTAuNTtcbiAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDM7XG4gICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDMgXTtcblxuICAgICAgICB2YXIgbW9kZSA9IHJlc3RbMF0gfHwgJ2xyZ2InO1xuICAgICAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSAmJiAhcmVzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGZhbGwgYmFjayB0byB0aGUgZmlyc3Qgc3VwcG9ydGVkIG1vZGVcbiAgICAgICAgICAgIG1vZGUgPSBPYmplY3Qua2V5cyhpbnRlcnBvbGF0b3IpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW50ZXJwb2xhdG9yW21vZGVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiaW50ZXJwb2xhdGlvbiBtb2RlIFwiICsgbW9kZSArIFwiIGlzIG5vdCBkZWZpbmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSQ0KGNvbDEpICE9PSAnb2JqZWN0JykgeyBjb2wxID0gbmV3IENvbG9yJGgoY29sMSk7IH1cbiAgICAgICAgaWYgKHR5cGUkNChjb2wyKSAhPT0gJ29iamVjdCcpIHsgY29sMiA9IG5ldyBDb2xvciRoKGNvbDIpOyB9XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0b3JbbW9kZV0oY29sMSwgY29sMiwgZilcbiAgICAgICAgICAgIC5hbHBoYShjb2wxLmFscGhhKCkgKyBmICogKGNvbDIuYWxwaGEoKSAtIGNvbDEuYWxwaGEoKSkpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZyA9IENvbG9yXzE7XG4gICAgdmFyIG1peCA9IG1peCQxO1xuXG4gICAgQ29sb3IkZy5wcm90b3R5cGUubWl4ID1cbiAgICBDb2xvciRnLnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKGNvbDIsIGYpIHtcbiAgICBcdGlmICggZiA9PT0gdm9pZCAwICkgZj0wLjU7XG4gICAgXHR2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICBcdHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDIgXTtcblxuICAgIFx0cmV0dXJuIG1peC5hcHBseSh2b2lkIDAsIFsgdGhpcywgY29sMiwgZiBdLmNvbmNhdCggcmVzdCApKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGYgPSBDb2xvcl8xO1xuXG4gICAgQ29sb3IkZi5wcm90b3R5cGUucHJlbXVsdGlwbHkgPSBmdW5jdGlvbihtdXRhdGUpIHtcbiAgICBcdGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGU9ZmFsc2U7XG5cbiAgICBcdHZhciByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgXHR2YXIgYSA9IHJnYlszXTtcbiAgICBcdGlmIChtdXRhdGUpIHtcbiAgICBcdFx0dGhpcy5fcmdiID0gW3JnYlswXSphLCByZ2JbMV0qYSwgcmdiWzJdKmEsIGFdO1xuICAgIFx0XHRyZXR1cm4gdGhpcztcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHJldHVybiBuZXcgQ29sb3IkZihbcmdiWzBdKmEsIHJnYlsxXSphLCByZ2JbMl0qYSwgYV0sICdyZ2InKTtcbiAgICBcdH1cbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGUgPSBDb2xvcl8xO1xuICAgIHZhciBMQUJfQ09OU1RBTlRTID0gbGFiQ29uc3RhbnRzO1xuXG4gICAgQ29sb3IkZS5wcm90b3R5cGUuc2F0dXJhdGUgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0dmFyIG1lID0gdGhpcztcbiAgICBcdHZhciBsY2ggPSBtZS5sY2goKTtcbiAgICBcdGxjaFsxXSArPSBMQUJfQ09OU1RBTlRTLktuICogYW1vdW50O1xuICAgIFx0aWYgKGxjaFsxXSA8IDApIHsgbGNoWzFdID0gMDsgfVxuICAgIFx0cmV0dXJuIG5ldyBDb2xvciRlKGxjaCwgJ2xjaCcpLmFscGhhKG1lLmFscGhhKCksIHRydWUpO1xuICAgIH07XG5cbiAgICBDb2xvciRlLnByb3RvdHlwZS5kZXNhdHVyYXRlID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHJldHVybiB0aGlzLnNhdHVyYXRlKC1hbW91bnQpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZCA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkMyA9IHV0aWxzLnR5cGU7XG5cbiAgICBDb2xvciRkLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobWMsIHZhbHVlLCBtdXRhdGUpIHtcbiAgICAgICAgaWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHZhciByZWYgPSBtYy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSByZWZbMV07XG4gICAgICAgIHZhciBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKSAtIChtb2RlLnN1YnN0cigwLCAyKSA9PT0gJ29rJyA/IDIgOiAwKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSQzKHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldICs9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSArPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gKj0gK3ZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSAvPSArdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUkMyh2YWx1ZSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyY1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuc3VwcG9ydGVkIHZhbHVlIGZvciBDb2xvci5zZXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBvdXQgPSBuZXcgQ29sb3IkZChzcmMsIG1vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmdiID0gb3V0Ll9yZ2I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gY2hhbm5lbCBcIiArIGNoYW5uZWwgKyBcIiBpbiBtb2RlIFwiICsgbW9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkYyA9IENvbG9yXzE7XG5cbiAgICB2YXIgcmdiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLl9yZ2I7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5fcmdiO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJGMoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdLXh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXS14eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0teHl6MFsyXSksXG4gICAgICAgICAgICAncmdiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLnJnYiA9IHJnYjtcblxuICAgIHZhciBDb2xvciRiID0gQ29sb3JfMTtcbiAgICB2YXIgc3FydCQyID0gTWF0aC5zcXJ0O1xuICAgIHZhciBwb3ckNSA9IE1hdGgucG93O1xuXG4gICAgdmFyIGxyZ2IgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgcmVmID0gY29sMS5fcmdiO1xuICAgICAgICB2YXIgeDEgPSByZWZbMF07XG4gICAgICAgIHZhciB5MSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIHoxID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBjb2wyLl9yZ2I7XG4gICAgICAgIHZhciB4MiA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgeTIgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIHoyID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkYihcbiAgICAgICAgICAgIHNxcnQkMihwb3ckNSh4MSwyKSAqICgxLWYpICsgcG93JDUoeDIsMikgKiBmKSxcbiAgICAgICAgICAgIHNxcnQkMihwb3ckNSh5MSwyKSAqICgxLWYpICsgcG93JDUoeTIsMikgKiBmKSxcbiAgICAgICAgICAgIHNxcnQkMihwb3ckNSh6MSwyKSAqICgxLWYpICsgcG93JDUoejIsMikgKiBmKSxcbiAgICAgICAgICAgICdyZ2InXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubHJnYiA9IGxyZ2I7XG5cbiAgICB2YXIgQ29sb3IkYSA9IENvbG9yXzE7XG5cbiAgICB2YXIgbGFiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLmxhYigpO1xuICAgICAgICB2YXIgeHl6MSA9IGNvbDIubGFiKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkYShcbiAgICAgICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0teHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdLXh5ejBbMV0pLFxuICAgICAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXS14eXowWzJdKSxcbiAgICAgICAgICAgICdsYWInXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubGFiID0gbGFiO1xuXG4gICAgdmFyIENvbG9yJDkgPSBDb2xvcl8xO1xuXG4gICAgdmFyIF9oc3ggPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZiwgbSkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMTtcblxuICAgICAgICB2YXIgeHl6MCwgeHl6MTtcbiAgICAgICAgaWYgKG0gPT09ICdoc2wnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oc2woKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhzbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdoc3YnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oc3YoKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhzdigpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdoY2cnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oY2coKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhjZygpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdoc2knKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oc2koKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhzaSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdsY2gnIHx8IG0gPT09ICdoY2wnKSB7XG4gICAgICAgICAgICBtID0gJ2hjbCc7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oY2woKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhjbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdva2xjaCcpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLm9rbGNoKCkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIub2tsY2goKS5yZXZlcnNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaHVlMCwgaHVlMSwgc2F0MCwgc2F0MSwgbGJ2MCwgbGJ2MTtcbiAgICAgICAgaWYgKG0uc3Vic3RyKDAsIDEpID09PSAnaCcgfHwgbSA9PT0gJ29rbGNoJykge1xuICAgICAgICAgICAgKGFzc2lnbiA9IHh5ejAsIGh1ZTAgPSBhc3NpZ25bMF0sIHNhdDAgPSBhc3NpZ25bMV0sIGxidjAgPSBhc3NpZ25bMl0pO1xuICAgICAgICAgICAgKGFzc2lnbiQxID0geHl6MSwgaHVlMSA9IGFzc2lnbiQxWzBdLCBzYXQxID0gYXNzaWduJDFbMV0sIGxidjEgPSBhc3NpZ24kMVsyXSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2F0LCBodWUsIGxidiwgZGg7XG5cbiAgICAgICAgaWYgKCFpc05hTihodWUwKSAmJiAhaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIC8vIGJvdGggY29sb3JzIGhhdmUgaHVlXG4gICAgICAgICAgICBpZiAoaHVlMSA+IGh1ZTAgJiYgaHVlMSAtIGh1ZTAgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTEgLSAoaHVlMCArIDM2MCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGh1ZTEgPCBodWUwICYmIGh1ZTAgLSBodWUxID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxICsgMzYwIC0gaHVlMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxIC0gaHVlMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh1ZSA9IGh1ZTAgKyBmICogZGg7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKGh1ZTApKSB7XG4gICAgICAgICAgICBodWUgPSBodWUwO1xuICAgICAgICAgICAgaWYgKChsYnYxID09IDEgfHwgbGJ2MSA9PSAwKSAmJiBtICE9ICdoc3YnKSB7IHNhdCA9IHNhdDA7IH1cbiAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIGh1ZSA9IGh1ZTE7XG4gICAgICAgICAgICBpZiAoKGxidjAgPT0gMSB8fCBsYnYwID09IDApICYmIG0gIT0gJ2hzdicpIHsgc2F0ID0gc2F0MTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHVlID0gTnVtYmVyLk5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYXQgPT09IHVuZGVmaW5lZCkgeyBzYXQgPSBzYXQwICsgZiAqIChzYXQxIC0gc2F0MCk7IH1cbiAgICAgICAgbGJ2ID0gbGJ2MCArIGYgKiAobGJ2MSAtIGxidjApO1xuICAgICAgICByZXR1cm4gbSA9PT0gJ29rbGNoJyA/IG5ldyBDb2xvciQ5KFtsYnYsIHNhdCwgaHVlXSwgbSkgOiBuZXcgQ29sb3IkOShbaHVlLCBzYXQsIGxidl0sIG0pO1xuICAgIH07XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDUgPSBfaHN4O1xuXG4gICAgdmFyIGxjaCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDUoY29sMSwgY29sMiwgZiwgJ2xjaCcpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5sY2ggPSBsY2g7XG4gICAgaW50ZXJwb2xhdG9yJDEuaGNsID0gbGNoO1xuXG4gICAgdmFyIENvbG9yJDggPSBDb2xvcl8xO1xuXG4gICAgdmFyIG51bSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciBjMSA9IGNvbDEubnVtKCk7XG4gICAgICAgIHZhciBjMiA9IGNvbDIubnVtKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkOChjMSArIGYgKiAoYzItYzEpLCAnbnVtJylcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubnVtID0gbnVtO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQ0ID0gX2hzeDtcblxuICAgIHZhciBoY2cgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQ0KGNvbDEsIGNvbDIsIGYsICdoY2cnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaGNnID0gaGNnO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQzID0gX2hzeDtcblxuICAgIHZhciBoc2kgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQzKGNvbDEsIGNvbDIsIGYsICdoc2knKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaHNpID0gaHNpO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQyID0gX2hzeDtcblxuICAgIHZhciBoc2wgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQyKGNvbDEsIGNvbDIsIGYsICdoc2wnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaHNsID0gaHNsO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQxID0gX2hzeDtcblxuICAgIHZhciBoc3YgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQxKGNvbDEsIGNvbDIsIGYsICdoc3YnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaHN2ID0gaHN2O1xuXG4gICAgdmFyIENvbG9yJDcgPSBDb2xvcl8xO1xuXG4gICAgdmFyIG9rbGFiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLm9rbGFiKCk7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5va2xhYigpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDcoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdIC0geHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdIC0geHl6MFsxXSksXG4gICAgICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdIC0geHl6MFsyXSksXG4gICAgICAgICAgICAnb2tsYWInXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLm9rbGFiID0gb2tsYWI7XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4ID0gX2hzeDtcblxuICAgIHZhciBva2xjaCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZV9oc3goY29sMSwgY29sMiwgZiwgJ29rbGNoJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLm9rbGNoID0gb2tsY2g7XG5cbiAgICB2YXIgQ29sb3IkNiA9IENvbG9yXzE7XG4gICAgdmFyIGNsaXBfcmdiJDEgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgcG93JDQgPSBNYXRoLnBvdztcbiAgICB2YXIgc3FydCQxID0gTWF0aC5zcXJ0O1xuICAgIHZhciBQSSQxID0gTWF0aC5QSTtcbiAgICB2YXIgY29zJDIgPSBNYXRoLmNvcztcbiAgICB2YXIgc2luJDIgPSBNYXRoLnNpbjtcbiAgICB2YXIgYXRhbjIkMSA9IE1hdGguYXRhbjI7XG5cbiAgICB2YXIgYXZlcmFnZSA9IGZ1bmN0aW9uIChjb2xvcnMsIG1vZGUsIHdlaWdodHMpIHtcbiAgICAgICAgaWYgKCBtb2RlID09PSB2b2lkIDAgKSBtb2RlPSdscmdiJztcbiAgICAgICAgaWYgKCB3ZWlnaHRzID09PSB2b2lkIDAgKSB3ZWlnaHRzPW51bGw7XG5cbiAgICAgICAgdmFyIGwgPSBjb2xvcnMubGVuZ3RoO1xuICAgICAgICBpZiAoIXdlaWdodHMpIHsgd2VpZ2h0cyA9IEFycmF5LmZyb20obmV3IEFycmF5KGwpKS5tYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSk7IH1cbiAgICAgICAgLy8gbm9ybWFsaXplIHdlaWdodHNcbiAgICAgICAgdmFyIGsgPSBsIC8gd2VpZ2h0cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSArIGI7IH0pO1xuICAgICAgICB3ZWlnaHRzLmZvckVhY2goZnVuY3Rpb24gKHcsaSkgeyB3ZWlnaHRzW2ldICo9IGs7IH0pO1xuICAgICAgICAvLyBjb252ZXJ0IGNvbG9ycyB0byBDb2xvciBvYmplY3RzXG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG5ldyBDb2xvciQ2KGMpOyB9KTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdscmdiJykge1xuICAgICAgICAgICAgcmV0dXJuIF9hdmVyYWdlX2xyZ2IoY29sb3JzLCB3ZWlnaHRzKVxuICAgICAgICB9XG4gICAgICAgIHZhciBmaXJzdCA9IGNvbG9ycy5zaGlmdCgpO1xuICAgICAgICB2YXIgeHl6ID0gZmlyc3QuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgY250ID0gW107XG4gICAgICAgIHZhciBkeCA9IDA7XG4gICAgICAgIHZhciBkeSA9IDA7XG4gICAgICAgIC8vIGluaXRpYWwgY29sb3JcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHh5ei5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeHl6W2ldID0gKHh5eltpXSB8fCAwKSAqIHdlaWdodHNbMF07XG4gICAgICAgICAgICBjbnQucHVzaChpc05hTih4eXpbaV0pID8gMCA6IHdlaWdodHNbMF0pO1xuICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcgJiYgIWlzTmFOKHh5eltpXSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgQSA9IHh5eltpXSAvIDE4MCAqIFBJJDE7XG4gICAgICAgICAgICAgICAgZHggKz0gY29zJDIoQSkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICAgICAgICAgIGR5ICs9IHNpbiQyKEEpICogd2VpZ2h0c1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhbHBoYSA9IGZpcnN0LmFscGhhKCkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICBjb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoYyxjaSkge1xuICAgICAgICAgICAgdmFyIHh5ejIgPSBjLmdldChtb2RlKTtcbiAgICAgICAgICAgIGFscGhhICs9IGMuYWxwaGEoKSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8eHl6Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih4eXoyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBjbnRbaV0gKz0gd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0geHl6MltpXSAvIDE4MCAqIFBJJDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkeCArPSBjb3MkMihBKSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkeSArPSBzaW4kMihBKSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4eXpbaV0gKz0geHl6MltpXSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkkMT0wOyBpJDE8eHl6Lmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpJDEpID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgQSQxID0gYXRhbjIkMShkeSAvIGNudFtpJDFdLCBkeCAvIGNudFtpJDFdKSAvIFBJJDEgKiAxODA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKEEkMSA8IDApIHsgQSQxICs9IDM2MDsgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChBJDEgPj0gMzYwKSB7IEEkMSAtPSAzNjA7IH1cbiAgICAgICAgICAgICAgICB4eXpbaSQxXSA9IEEkMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeHl6W2kkMV0gPSB4eXpbaSQxXS9jbnRbaSQxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhbHBoYSAvPSBsO1xuICAgICAgICByZXR1cm4gKG5ldyBDb2xvciQ2KHh5eiwgbW9kZSkpLmFscGhhKGFscGhhID4gMC45OTk5OSA/IDEgOiBhbHBoYSwgdHJ1ZSk7XG4gICAgfTtcblxuXG4gICAgdmFyIF9hdmVyYWdlX2xyZ2IgPSBmdW5jdGlvbiAoY29sb3JzLCB3ZWlnaHRzKSB7XG4gICAgICAgIHZhciBsID0gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgdmFyIHh5eiA9IFswLDAsMCwwXTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29sID0gY29sb3JzW2ldO1xuICAgICAgICAgICAgdmFyIGYgPSB3ZWlnaHRzW2ldIC8gbDtcbiAgICAgICAgICAgIHZhciByZ2IgPSBjb2wuX3JnYjtcbiAgICAgICAgICAgIHh5elswXSArPSBwb3ckNChyZ2JbMF0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzFdICs9IHBvdyQ0KHJnYlsxXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbMl0gKz0gcG93JDQocmdiWzJdLDIpICogZjtcbiAgICAgICAgICAgIHh5elszXSArPSByZ2JbM10gKiBmO1xuICAgICAgICB9XG4gICAgICAgIHh5elswXSA9IHNxcnQkMSh4eXpbMF0pO1xuICAgICAgICB4eXpbMV0gPSBzcXJ0JDEoeHl6WzFdKTtcbiAgICAgICAgeHl6WzJdID0gc3FydCQxKHh5elsyXSk7XG4gICAgICAgIGlmICh4eXpbM10gPiAwLjk5OTk5OTkpIHsgeHl6WzNdID0gMTsgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDYoY2xpcF9yZ2IkMSh4eXopKTtcbiAgICB9O1xuXG4gICAgLy8gbWluaW1hbCBtdWx0aS1wdXJwb3NlIGludGVyZmFjZVxuXG4gICAgLy8gQHJlcXVpcmVzIHV0aWxzIGNvbG9yIGFuYWx5emVcblxuICAgIHZhciBjaHJvbWEkNCA9IGNocm9tYV8xO1xuICAgIHZhciB0eXBlJDIgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHBvdyQzID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgc2NhbGUkMiA9IGZ1bmN0aW9uKGNvbG9ycykge1xuXG4gICAgICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgIHZhciBfbW9kZSA9ICdyZ2InO1xuICAgICAgICB2YXIgX25hY29sID0gY2hyb21hJDQoJyNjY2MnKTtcbiAgICAgICAgdmFyIF9zcHJlYWQgPSAwO1xuICAgICAgICAvLyBjb25zdCBfZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9kb21haW4gPSBbMCwgMV07XG4gICAgICAgIHZhciBfcG9zID0gW107XG4gICAgICAgIHZhciBfcGFkZGluZyA9IFswLDBdO1xuICAgICAgICB2YXIgX2NsYXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9jb2xvcnMgPSBbXTtcbiAgICAgICAgdmFyIF9vdXQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9taW4gPSAwO1xuICAgICAgICB2YXIgX21heCA9IDE7XG4gICAgICAgIHZhciBfY29ycmVjdExpZ2h0bmVzcyA9IGZhbHNlO1xuICAgICAgICB2YXIgX2NvbG9yQ2FjaGUgPSB7fTtcbiAgICAgICAgdmFyIF91c2VDYWNoZSA9IHRydWU7XG4gICAgICAgIHZhciBfZ2FtbWEgPSAxO1xuXG4gICAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuXG4gICAgICAgIHZhciBzZXRDb2xvcnMgPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICAgICAgICAgIGNvbG9ycyA9IGNvbG9ycyB8fCBbJyNmZmYnLCAnIzAwMCddO1xuICAgICAgICAgICAgaWYgKGNvbG9ycyAmJiB0eXBlJDIoY29sb3JzKSA9PT0gJ3N0cmluZycgJiYgY2hyb21hJDQuYnJld2VyICYmXG4gICAgICAgICAgICAgICAgY2hyb21hJDQuYnJld2VyW2NvbG9ycy50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IGNocm9tYSQ0LmJyZXdlcltjb2xvcnMudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSQyKGNvbG9ycykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc2luZ2xlIGNvbG9yXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzID0gW2NvbG9yc1swXSwgY29sb3JzWzBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBhIGNvcHkgb2YgdGhlIGNvbG9yc1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IGNvbG9ycy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHRvIGNocm9tYSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPGNvbG9ycy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnNbY10gPSBjaHJvbWEkNChjb2xvcnNbY10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhdXRvLWZpbGwgY29sb3IgcG9zaXRpb25cbiAgICAgICAgICAgICAgICBfcG9zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyQxPTA7IGMkMTxjb2xvcnMubGVuZ3RoOyBjJDErKykge1xuICAgICAgICAgICAgICAgICAgICBfcG9zLnB1c2goYyQxLyhjb2xvcnMubGVuZ3RoLTEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbG9ycyA9IGNvbG9ycztcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZ2V0Q2xhc3MgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKF9jbGFzc2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IF9jbGFzc2VzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IG4gJiYgdmFsdWUgPj0gX2NsYXNzZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaS0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRNYXBMaWdodG5lc3MgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcbiAgICAgICAgdmFyIHRNYXBEb21haW4gPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcblxuICAgICAgICAvLyBjb25zdCBjbGFzc2lmeVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gICAgIGxldCB2YWwgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIGlmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbiA9IF9jbGFzc2VzLmxlbmd0aC0xO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGkgPSBnZXRDbGFzcyh2YWx1ZSk7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbWluYyA9IF9jbGFzc2VzWzBdICsgKChfY2xhc3Nlc1sxXS1fY2xhc3Nlc1swXSkgKiAoMCArIChfc3ByZWFkICogMC41KSkpOyAgLy8gY2VudGVyIG9mIDFzdCBjbGFzc1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1heGMgPSBfY2xhc3Nlc1tuLTFdICsgKChfY2xhc3Nlc1tuXS1fY2xhc3Nlc1tuLTFdKSAqICgxIC0gKF9zcHJlYWQgKiAwLjUpKSk7ICAvLyBjZW50ZXIgb2YgbGFzdCBjbGFzc1xuICAgICAgICAvLyAgICAgICAgIHZhbCA9IF9taW4gKyAoKCgoX2NsYXNzZXNbaV0gKyAoKF9jbGFzc2VzW2krMV0gLSBfY2xhc3Nlc1tpXSkgKiAwLjUpKSAtIG1pbmMpIC8gKG1heGMtbWluYykpICogKF9tYXggLSBfbWluKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gdmFsO1xuICAgICAgICAvLyB9O1xuXG4gICAgICAgIHZhciBnZXRDb2xvciA9IGZ1bmN0aW9uKHZhbCwgYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICB2YXIgY29sLCB0O1xuICAgICAgICAgICAgaWYgKGJ5cGFzc01hcCA9PSBudWxsKSB7IGJ5cGFzc01hcCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCAodmFsID09PSBudWxsKSkgeyByZXR1cm4gX25hY29sOyB9XG4gICAgICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgICAgIGlmIChfY2xhc3NlcyAmJiAoX2NsYXNzZXMubGVuZ3RoID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBnZXRDbGFzcyh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB0ID0gYyAvIChfY2xhc3Nlcy5sZW5ndGgtMik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfbWF4ICE9PSBfbWluKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGp1c3QgaW50ZXJwb2xhdGUgYmV0d2VlbiBtaW4vbWF4XG4gICAgICAgICAgICAgICAgICAgIHQgPSAodmFsIC0gX21pbikgLyAoX21heCAtIF9taW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdCA9IHZhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZG9tYWluIG1hcFxuICAgICAgICAgICAgdCA9IHRNYXBEb21haW4odCk7XG5cbiAgICAgICAgICAgIGlmICghYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICAgICAgdCA9IHRNYXBMaWdodG5lc3ModCk7ICAvLyBsaWdodG5lc3MgY29ycmVjdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX2dhbW1hICE9PSAxKSB7IHQgPSBwb3ckMyh0LCBfZ2FtbWEpOyB9XG5cbiAgICAgICAgICAgIHQgPSBfcGFkZGluZ1swXSArICh0ICogKDEgLSBfcGFkZGluZ1swXSAtIF9wYWRkaW5nWzFdKSk7XG5cbiAgICAgICAgICAgIHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB0KSk7XG5cbiAgICAgICAgICAgIHZhciBrID0gTWF0aC5mbG9vcih0ICogMTAwMDApO1xuXG4gICAgICAgICAgICBpZiAoX3VzZUNhY2hlICYmIF9jb2xvckNhY2hlW2tdKSB7XG4gICAgICAgICAgICAgICAgY29sID0gX2NvbG9yQ2FjaGVba107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDIoX2NvbG9ycykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9mb3IgaSBpbiBbMC4uX3Bvcy5sZW5ndGgtMV1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPF9wb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gX3Bvc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0IDw9IHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0ID49IHApICYmIChpID09PSAoX3Bvcy5sZW5ndGgtMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID4gcCAmJiB0IDwgX3Bvc1tpKzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICh0LXApLyhfcG9zW2krMV0tcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gY2hyb21hJDQuaW50ZXJwb2xhdGUoX2NvbG9yc1tpXSwgX2NvbG9yc1tpKzFdLCB0LCBfbW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUkMihfY29sb3JzKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzKHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX3VzZUNhY2hlKSB7IF9jb2xvckNhY2hlW2tdID0gY29sOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZXNldENhY2hlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX2NvbG9yQ2FjaGUgPSB7fTsgfTtcblxuICAgICAgICBzZXRDb2xvcnMoY29sb3JzKTtcblxuICAgICAgICAvLyBwdWJsaWMgaW50ZXJmYWNlXG5cbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICB2YXIgYyA9IGNocm9tYSQ0KGdldENvbG9yKHYpKTtcbiAgICAgICAgICAgIGlmIChfb3V0ICYmIGNbX291dF0pIHsgcmV0dXJuIGNbX291dF0oKTsgfSBlbHNlIHsgcmV0dXJuIGM7IH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLmNsYXNzZXMgPSBmdW5jdGlvbihjbGFzc2VzKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkMihjbGFzc2VzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IGNsYXNzZXM7XG4gICAgICAgICAgICAgICAgICAgIF9kb21haW4gPSBbY2xhc3Nlc1swXSwgY2xhc3Nlc1tjbGFzc2VzLmxlbmd0aC0xXV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBjaHJvbWEkNC5hbmFseXplKF9kb21haW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBbZC5taW4sIGQubWF4XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gY2hyb21hJDQubGltaXRzKGQsICdlJywgY2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX2NsYXNzZXM7XG4gICAgICAgIH07XG5cblxuICAgICAgICBmLmRvbWFpbiA9IGZ1bmN0aW9uKGRvbWFpbikge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9kb21haW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbWluID0gZG9tYWluWzBdO1xuICAgICAgICAgICAgX21heCA9IGRvbWFpbltkb21haW4ubGVuZ3RoLTFdO1xuICAgICAgICAgICAgX3BvcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGsgPSBfY29sb3JzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICgoZG9tYWluLmxlbmd0aCA9PT0gaykgJiYgKF9taW4gIT09IF9tYXgpKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gQXJyYXkuZnJvbShkb21haW4pOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICAgIF9wb3MucHVzaCgoZC1fbWluKSAvIChfbWF4LV9taW4pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzxrOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX3Bvcy5wdXNoKGMvKGstMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9tYWluLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGRvbWFpbiBtYXBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRPdXQgPSBkb21haW4ubWFwKGZ1bmN0aW9uIChkLGkpIHsgcmV0dXJuIGkvKGRvbWFpbi5sZW5ndGgtMSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdEJyZWFrcyA9IGRvbWFpbi5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChkIC0gX21pbikgLyAoX21heCAtIF9taW4pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0QnJlYWtzLmV2ZXJ5KGZ1bmN0aW9uICh2YWwsIGkpIHsgcmV0dXJuIHRPdXRbaV0gPT09IHZhbDsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRNYXBEb21haW4gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0IDw9IDAgfHwgdCA+PSAxKSB7IHJldHVybiB0OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ID49IHRCcmVha3NbaSsxXSkgeyBpKys7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9ICh0IC0gdEJyZWFrc1tpXSkgLyAodEJyZWFrc1tpKzFdIC0gdEJyZWFrc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG91dCA9IHRPdXRbaV0gKyBmICogKHRPdXRbaSsxXSAtIHRPdXRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZG9tYWluID0gW19taW4sIF9tYXhdO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5tb2RlID0gZnVuY3Rpb24oX20pIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9tb2RlID0gX207XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnJhbmdlID0gZnVuY3Rpb24oY29sb3JzLCBfcG9zKSB7XG4gICAgICAgICAgICBzZXRDb2xvcnMoY29sb3JzKTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYub3V0ID0gZnVuY3Rpb24oX28pIHtcbiAgICAgICAgICAgIF9vdXQgPSBfbztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuc3ByZWFkID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NwcmVhZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zcHJlYWQgPSB2YWw7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmNvcnJlY3RMaWdodG5lc3MgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICBpZiAodiA9PSBudWxsKSB7IHYgPSB0cnVlOyB9XG4gICAgICAgICAgICBfY29ycmVjdExpZ2h0bmVzcyA9IHY7XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICBpZiAoX2NvcnJlY3RMaWdodG5lc3MpIHtcbiAgICAgICAgICAgICAgICB0TWFwTGlnaHRuZXNzID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgTDAgPSBnZXRDb2xvcigwLCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEwxID0gZ2V0Q29sb3IoMSwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb2wgPSBMMCA+IEwxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTF9hY3R1YWwgPSBnZXRDb2xvcih0LCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfaWRlYWwgPSBMMCArICgoTDEgLSBMMCkgKiB0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfZGlmZiA9IExfYWN0dWFsIC0gTF9pZGVhbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQwID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQxID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heF9pdGVyID0gMjA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoTWF0aC5hYnMoTF9kaWZmKSA+IDFlLTIpICYmIChtYXhfaXRlci0tID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9sKSB7IExfZGlmZiAqPSAtMTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChMX2RpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCArPSAodDEgLSB0KSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQwIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExfYWN0dWFsID0gZ2V0Q29sb3IodCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExfZGlmZiA9IExfYWN0dWFsIC0gTF9pZGVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdE1hcExpZ2h0bmVzcyA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5wYWRkaW5nID0gZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDIocCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBbcCxwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3BhZGRpbmcgPSBwO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3BhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jb2xvcnMgPSBmdW5jdGlvbihudW1Db2xvcnMsIG91dCkge1xuICAgICAgICAgICAgLy8gSWYgbm8gYXJndW1lbnRzIGFyZSBnaXZlbiwgcmV0dXJuIHRoZSBvcmlnaW5hbCBjb2xvcnMgdGhhdCB3ZXJlIHByb3ZpZGVkXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHsgb3V0ID0gJ2hleCc7IH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfY29sb3JzLnNsaWNlKDApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bUNvbG9ycyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtmKDAuNSldO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bUNvbG9ycyA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZG0gPSBfZG9tYWluWzBdO1xuICAgICAgICAgICAgICAgIHZhciBkZCA9IF9kb21haW5bMV0gLSBkbTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfX3JhbmdlX18oMCwgbnVtQ29sb3JzLCBmYWxzZSkubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBmKCBkbSArICgoaS8obnVtQ29sb3JzLTEpKSAqIGRkKSApOyB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gcmV0dXJucyBhbGwgY29sb3JzIGJhc2VkIG9uIHRoZSBkZWZpbmVkIGNsYXNzZXNcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgc2FtcGxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChfY2xhc3NlcyAmJiAoX2NsYXNzZXMubGVuZ3RoID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDEsIGVuZCA9IF9jbGFzc2VzLmxlbmd0aCwgYXNjID0gMSA8PSBlbmQ7IGFzYyA/IGkgPCBlbmQgOiBpID4gZW5kOyBhc2MgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXMucHVzaCgoX2NsYXNzZXNbaS0xXStfY2xhc3Nlc1tpXSkqMC41KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXMgPSBfZG9tYWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzYW1wbGVzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZih2KTsgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaHJvbWEkNFtvdXRdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gY1tvdXRdKCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmNhY2hlID0gZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgaWYgKGMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF91c2VDYWNoZSA9IGM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdXNlQ2FjaGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5nYW1tYSA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgIGlmIChnICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfZ2FtbWEgPSBnO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2dhbW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYubm9kYXRhID0gZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgaWYgKGQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF9uYWNvbCA9IGNocm9tYSQ0KGQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX25hY29sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfX3JhbmdlX18obGVmdCwgcmlnaHQsIGluY2x1c2l2ZSkge1xuICAgICAgdmFyIHJhbmdlID0gW107XG4gICAgICB2YXIgYXNjZW5kaW5nID0gbGVmdCA8IHJpZ2h0O1xuICAgICAgdmFyIGVuZCA9ICFpbmNsdXNpdmUgPyByaWdodCA6IGFzY2VuZGluZyA/IHJpZ2h0ICsgMSA6IHJpZ2h0IC0gMTtcbiAgICAgIGZvciAodmFyIGkgPSBsZWZ0OyBhc2NlbmRpbmcgPyBpIDwgZW5kIDogaSA+IGVuZDsgYXNjZW5kaW5nID8gaSsrIDogaS0tKSB7XG4gICAgICAgIHJhbmdlLnB1c2goaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4gICAgLy9cblxuICAgIC8vIEByZXF1aXJlcyB1dGlscyBsYWJcbiAgICB2YXIgQ29sb3IkNSA9IENvbG9yXzE7XG5cbiAgICB2YXIgc2NhbGUkMSA9IHNjYWxlJDI7XG5cbiAgICAvLyBudGggcm93IG9mIHRoZSBwYXNjYWwgdHJpYW5nbGVcbiAgICB2YXIgYmlub21fcm93ID0gZnVuY3Rpb24obikge1xuICAgICAgICB2YXIgcm93ID0gWzEsIDFdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgdmFyIG5ld3JvdyA9IFsxXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDw9IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG5ld3Jvd1tqXSA9IChyb3dbal0gfHwgMCkgKyByb3dbaiAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93ID0gbmV3cm93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfTtcblxuICAgIHZhciBiZXppZXIgPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyO1xuXG4gICAgICAgIHZhciBJLCBsYWIwLCBsYWIxLCBsYWIyO1xuICAgICAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZXcgQ29sb3IkNShjKTsgfSk7XG4gICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgKGFzc2lnbiA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduWzBdLCBsYWIxID0gYXNzaWduWzFdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBsYWIwW2ldICsgKHQgKiAobGFiMVtpXSAtIGxhYjBbaV0pKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgLy8gcXVhZHJhdGljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICAoYXNzaWduJDEgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnbiQxWzBdLCBsYWIxID0gYXNzaWduJDFbMV0sIGxhYjIgPSBhc3NpZ24kMVsyXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKCgxLXQpKigxLXQpICogbGFiMFtpXSkgKyAoMiAqICgxLXQpICogdCAqIGxhYjFbaV0pICsgKHQgKiB0ICogbGFiMltpXSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIC8vIGN1YmljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICB2YXIgbGFiMztcbiAgICAgICAgICAgIChhc3NpZ24kMiA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduJDJbMF0sIGxhYjEgPSBhc3NpZ24kMlsxXSwgbGFiMiA9IGFzc2lnbiQyWzJdLCBsYWIzID0gYXNzaWduJDJbM10pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICgoMS10KSooMS10KSooMS10KSAqIGxhYjBbaV0pICsgKDMgKiAoMS10KSAqICgxLXQpICogdCAqIGxhYjFbaV0pICsgKDMgKiAoMS10KSAqIHQgKiB0ICogbGFiMltpXSkgKyAodCp0KnQgKiBsYWIzW2ldKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICAvLyBnZW5lcmFsIGNhc2UgKGRlZ3JlZSBuIGJlemllcilcbiAgICAgICAgICAgIHZhciBsYWJzLCByb3csIG47XG4gICAgICAgICAgICBsYWJzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSk7XG4gICAgICAgICAgICBuID0gY29sb3JzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByb3cgPSBiaW5vbV9yb3cobik7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdSA9IDEgLSB0O1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gbGFicy5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgZWwsIGopIHsgcmV0dXJuIChzdW0gKyByb3dbal0gKiBNYXRoLnBvdyggdSwgKG4gLSBqKSApICogTWF0aC5wb3coIHQsIGogKSAqIGVsW2ldKTsgfSwgMCk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJObyBwb2ludCBpbiBydW5uaW5nIGJlemllciB3aXRoIG9ubHkgb25lIGNvbG9yLlwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBJO1xuICAgIH07XG5cbiAgICB2YXIgYmV6aWVyXzEgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gICAgICAgIHZhciBmID0gYmV6aWVyKGNvbG9ycyk7XG4gICAgICAgIGYuc2NhbGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzY2FsZSQxKGYpOyB9O1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4gICAgICogYmxlbmQgbW9kZSBmb3JtdWxhcyB0YWtlbiBmcm9tIGh0dHA6Ly93d3cudmVudHVyZS13YXJlLmNvbS9rZXZpbi9jb2RpbmcvbGV0cy1sZWFybi1tYXRoLXBob3Rvc2hvcC1ibGVuZC1tb2Rlcy9cbiAgICAgKi9cblxuICAgIHZhciBjaHJvbWEkMyA9IGNocm9tYV8xO1xuXG4gICAgdmFyIGJsZW5kID0gZnVuY3Rpb24gKGJvdHRvbSwgdG9wLCBtb2RlKSB7XG4gICAgICAgIGlmICghYmxlbmRbbW9kZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBibGVuZCBtb2RlICcgKyBtb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxlbmRbbW9kZV0oYm90dG9tLCB0b3ApO1xuICAgIH07XG5cbiAgICB2YXIgYmxlbmRfZiA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmdW5jdGlvbiAoYm90dG9tLHRvcCkge1xuICAgICAgICAgICAgdmFyIGMwID0gY2hyb21hJDModG9wKS5yZ2IoKTtcbiAgICAgICAgICAgIHZhciBjMSA9IGNocm9tYSQzKGJvdHRvbSkucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gY2hyb21hJDMucmdiKGYoYzAsIGMxKSk7XG4gICAgICAgIH07IH07XG5cbiAgICB2YXIgZWFjaCA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmdW5jdGlvbiAoYzAsIGMxKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgICAgICBvdXRbMF0gPSBmKGMwWzBdLCBjMVswXSk7XG4gICAgICAgICAgICBvdXRbMV0gPSBmKGMwWzFdLCBjMVsxXSk7XG4gICAgICAgICAgICBvdXRbMl0gPSBmKGMwWzJdLCBjMVsyXSk7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9OyB9O1xuXG4gICAgdmFyIG5vcm1hbCA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhOyB9O1xuICAgIHZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEgKiBiIC8gMjU1OyB9O1xuICAgIHZhciBkYXJrZW4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhID4gYiA/IGIgOiBhOyB9O1xuICAgIHZhciBsaWdodGVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYSA+IGIgPyBhIDogYjsgfTtcbiAgICB2YXIgc2NyZWVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gMjU1ICogKDEgLSAoMS1hLzI1NSkgKiAoMS1iLzI1NSkpOyB9O1xuICAgIHZhciBvdmVybGF5ID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYiA8IDEyOCA/IDIgKiBhICogYiAvIDI1NSA6IDI1NSAqICgxIC0gMiAqICgxIC0gYSAvIDI1NSApICogKCAxIC0gYiAvIDI1NSApKTsgfTtcbiAgICB2YXIgYnVybiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIDI1NSAqICgxIC0gKDEgLSBiIC8gMjU1KSAvIChhLzI1NSkpOyB9O1xuICAgIHZhciBkb2RnZSA9IGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgaWYgKGEgPT09IDI1NSkgeyByZXR1cm4gMjU1OyB9XG4gICAgICAgIGEgPSAyNTUgKiAoYiAvIDI1NSkgLyAoMSAtIGEgLyAyNTUpO1xuICAgICAgICByZXR1cm4gYSA+IDI1NSA/IDI1NSA6IGFcbiAgICB9O1xuXG4gICAgLy8gIyBhZGQgPSAoYSxiKSAtPlxuICAgIC8vICMgICAgIGlmIChhICsgYiA+IDI1NSkgdGhlbiAyNTUgZWxzZSBhICsgYlxuXG4gICAgYmxlbmQubm9ybWFsID0gYmxlbmRfZihlYWNoKG5vcm1hbCkpO1xuICAgIGJsZW5kLm11bHRpcGx5ID0gYmxlbmRfZihlYWNoKG11bHRpcGx5KSk7XG4gICAgYmxlbmQuc2NyZWVuID0gYmxlbmRfZihlYWNoKHNjcmVlbikpO1xuICAgIGJsZW5kLm92ZXJsYXkgPSBibGVuZF9mKGVhY2gob3ZlcmxheSkpO1xuICAgIGJsZW5kLmRhcmtlbiA9IGJsZW5kX2YoZWFjaChkYXJrZW4pKTtcbiAgICBibGVuZC5saWdodGVuID0gYmxlbmRfZihlYWNoKGxpZ2h0ZW4pKTtcbiAgICBibGVuZC5kb2RnZSA9IGJsZW5kX2YoZWFjaChkb2RnZSkpO1xuICAgIGJsZW5kLmJ1cm4gPSBibGVuZF9mKGVhY2goYnVybikpO1xuICAgIC8vIGJsZW5kLmFkZCA9IGJsZW5kX2YoZWFjaChhZGQpKTtcblxuICAgIHZhciBibGVuZF8xID0gYmxlbmQ7XG5cbiAgICAvLyBjdWJlaGVsaXggaW50ZXJwb2xhdGlvblxuICAgIC8vIGJhc2VkIG9uIEQuQS4gR3JlZW4gXCJBIGNvbG91ciBzY2hlbWUgZm9yIHRoZSBkaXNwbGF5IG9mIGFzdHJvbm9taWNhbCBpbnRlbnNpdHkgaW1hZ2VzXCJcbiAgICAvLyBodHRwOi8vYXN0cm9uLXNvYy5pbi9idWxsZXRpbi8xMUp1bmUvMjg5MzkyMDExLnBkZlxuXG4gICAgdmFyIHR5cGUkMSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNsaXBfcmdiID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIFRXT1BJID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIHBvdyQyID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpbiQxID0gTWF0aC5zaW47XG4gICAgdmFyIGNvcyQxID0gTWF0aC5jb3M7XG4gICAgdmFyIGNocm9tYSQyID0gY2hyb21hXzE7XG5cbiAgICB2YXIgY3ViZWhlbGl4ID0gZnVuY3Rpb24oc3RhcnQsIHJvdGF0aW9ucywgaHVlLCBnYW1tYSwgbGlnaHRuZXNzKSB7XG4gICAgICAgIGlmICggc3RhcnQgPT09IHZvaWQgMCApIHN0YXJ0PTMwMDtcbiAgICAgICAgaWYgKCByb3RhdGlvbnMgPT09IHZvaWQgMCApIHJvdGF0aW9ucz0tMS41O1xuICAgICAgICBpZiAoIGh1ZSA9PT0gdm9pZCAwICkgaHVlPTE7XG4gICAgICAgIGlmICggZ2FtbWEgPT09IHZvaWQgMCApIGdhbW1hPTE7XG4gICAgICAgIGlmICggbGlnaHRuZXNzID09PSB2b2lkIDAgKSBsaWdodG5lc3M9WzAsMV07XG5cbiAgICAgICAgdmFyIGRoID0gMCwgZGw7XG4gICAgICAgIGlmICh0eXBlJDEobGlnaHRuZXNzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgZGwgPSBsaWdodG5lc3NbMV0gLSBsaWdodG5lc3NbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkbCA9IDA7XG4gICAgICAgICAgICBsaWdodG5lc3MgPSBbbGlnaHRuZXNzLCBsaWdodG5lc3NdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbihmcmFjdCkge1xuICAgICAgICAgICAgdmFyIGEgPSBUV09QSSAqICgoKHN0YXJ0KzEyMCkvMzYwKSArIChyb3RhdGlvbnMgKiBmcmFjdCkpO1xuICAgICAgICAgICAgdmFyIGwgPSBwb3ckMihsaWdodG5lc3NbMF0gKyAoZGwgKiBmcmFjdCksIGdhbW1hKTtcbiAgICAgICAgICAgIHZhciBoID0gZGggIT09IDAgPyBodWVbMF0gKyAoZnJhY3QgKiBkaCkgOiBodWU7XG4gICAgICAgICAgICB2YXIgYW1wID0gKGggKiBsICogKDEtbCkpIC8gMjtcbiAgICAgICAgICAgIHZhciBjb3NfYSA9IGNvcyQxKGEpO1xuICAgICAgICAgICAgdmFyIHNpbl9hID0gc2luJDEoYSk7XG4gICAgICAgICAgICB2YXIgciA9IGwgKyAoYW1wICogKCgtMC4xNDg2MSAqIGNvc19hKSArICgxLjc4Mjc3KiBzaW5fYSkpKTtcbiAgICAgICAgICAgIHZhciBnID0gbCArIChhbXAgKiAoKC0wLjI5MjI3ICogY29zX2EpIC0gKDAuOTA2NDkqIHNpbl9hKSkpO1xuICAgICAgICAgICAgdmFyIGIgPSBsICsgKGFtcCAqICgrMS45NzI5NCAqIGNvc19hKSk7XG4gICAgICAgICAgICByZXR1cm4gY2hyb21hJDIoY2xpcF9yZ2IoW3IqMjU1LGcqMjU1LGIqMjU1LDFdKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zdGFydCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGlmICgocyA9PSBudWxsKSkgeyByZXR1cm4gc3RhcnQ7IH1cbiAgICAgICAgICAgIHN0YXJ0ID0gcztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucm90YXRpb25zID0gZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgaWYgKChyID09IG51bGwpKSB7IHJldHVybiByb3RhdGlvbnM7IH1cbiAgICAgICAgICAgIHJvdGF0aW9ucyA9IHI7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmdhbW1hID0gZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgaWYgKChnID09IG51bGwpKSB7IHJldHVybiBnYW1tYTsgfVxuICAgICAgICAgICAgZ2FtbWEgPSBnO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5odWUgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGh1ZTsgfVxuICAgICAgICAgICAgaHVlID0gaDtcbiAgICAgICAgICAgIGlmICh0eXBlJDEoaHVlKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlWzFdIC0gaHVlWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkaCA9PT0gMCkgeyBodWUgPSBodWVbMV07IH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5saWdodG5lc3MgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGxpZ2h0bmVzczsgfVxuICAgICAgICAgICAgaWYgKHR5cGUkMShoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGxpZ2h0bmVzcyA9IGg7XG4gICAgICAgICAgICAgICAgZGwgPSBoWzFdIC0gaFswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlnaHRuZXNzID0gW2gsaF07XG4gICAgICAgICAgICAgICAgZGwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zY2FsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNocm9tYSQyLnNjYWxlKGYpOyB9O1xuXG4gICAgICAgIGYuaHVlKGh1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciQ0ID0gQ29sb3JfMTtcbiAgICB2YXIgZGlnaXRzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gICAgdmFyIGZsb29yJDEgPSBNYXRoLmZsb29yO1xuICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuICAgIHZhciByYW5kb21fMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvZGUgPSAnIyc7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTw2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgKz0gZGlnaXRzLmNoYXJBdChmbG9vciQxKHJhbmRvbSgpICogMTYpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDQoY29kZSwgJ2hleCcpO1xuICAgIH07XG5cbiAgICB2YXIgdHlwZSA9IHR5cGUkcDtcbiAgICB2YXIgbG9nID0gTWF0aC5sb2c7XG4gICAgdmFyIHBvdyQxID0gTWF0aC5wb3c7XG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgYWJzJDEgPSBNYXRoLmFicztcblxuXG4gICAgdmFyIGFuYWx5emUgPSBmdW5jdGlvbiAoZGF0YSwga2V5KSB7XG4gICAgICAgIGlmICgga2V5ID09PSB2b2lkIDAgKSBrZXk9bnVsbDtcblxuICAgICAgICB2YXIgciA9IHtcbiAgICAgICAgICAgIG1pbjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9WQUxVRSotMSxcbiAgICAgICAgICAgIHN1bTogMCxcbiAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgICAgICBjb3VudDogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZShkYXRhKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICYmIHR5cGUodmFsKSA9PT0gJ29iamVjdCcpIHsgdmFsID0gdmFsW2tleV07IH1cbiAgICAgICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgIWlzTmFOKHZhbCkpIHtcbiAgICAgICAgICAgICAgICByLnZhbHVlcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgci5zdW0gKz0gdmFsO1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPCByLm1pbikgeyByLm1pbiA9IHZhbDsgfVxuICAgICAgICAgICAgICAgIGlmICh2YWwgPiByLm1heCkgeyByLm1heCA9IHZhbDsgfVxuICAgICAgICAgICAgICAgIHIuY291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgci5kb21haW4gPSBbci5taW4sIHIubWF4XTtcblxuICAgICAgICByLmxpbWl0cyA9IGZ1bmN0aW9uIChtb2RlLCBudW0pIHsgcmV0dXJuIGxpbWl0cyhyLCBtb2RlLCBudW0pOyB9O1xuXG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG5cblxuICAgIHZhciBsaW1pdHMgPSBmdW5jdGlvbiAoZGF0YSwgbW9kZSwgbnVtKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nZXF1YWwnO1xuICAgICAgICBpZiAoIG51bSA9PT0gdm9pZCAwICkgbnVtPTc7XG5cbiAgICAgICAgaWYgKHR5cGUoZGF0YSkgPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgZGF0YSA9IGFuYWx5emUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbiA9IGRhdGEubWluO1xuICAgICAgICB2YXIgbWF4ID0gZGF0YS5tYXg7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBkYXRhLnZhbHVlcy5zb3J0KGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEtYjsgfSk7XG5cbiAgICAgICAgaWYgKG51bSA9PT0gMSkgeyByZXR1cm4gW21pbixtYXhdOyB9XG5cbiAgICAgICAgdmFyIGxpbWl0cyA9IFtdO1xuXG4gICAgICAgIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnYycpIHsgLy8gY29udGludW91c1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2UnKSB7IC8vIGVxdWFsIGludGVydmFsXG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0xOyBpPG51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKygoaS9udW0pKihtYXgtbWluKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdsJykgeyAvLyBsb2cgc2NhbGVcbiAgICAgICAgICAgIGlmIChtaW4gPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTG9nYXJpdGhtaWMgc2NhbGVzIGFyZSBvbmx5IHBvc3NpYmxlIGZvciB2YWx1ZXMgPiAwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWluX2xvZyA9IE1hdGguTE9HMTBFICogbG9nKG1pbik7XG4gICAgICAgICAgICB2YXIgbWF4X2xvZyA9IE1hdGguTE9HMTBFICogbG9nKG1heCk7XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxPTE7IGkkMTxudW07IGkkMSsrKSB7XG4gICAgICAgICAgICAgICAgbGltaXRzLnB1c2gocG93JDEoMTAsIG1pbl9sb2cgKyAoKGkkMS9udW0pICogKG1heF9sb2cgLSBtaW5fbG9nKSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAncScpIHsgLy8gcXVhbnRpbGUgc2NhbGVcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDI9MTsgaSQyPG51bTsgaSQyKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9ICgodmFsdWVzLmxlbmd0aC0xKSAqIGkkMikvbnVtO1xuICAgICAgICAgICAgICAgIHZhciBwYiA9IGZsb29yKHApO1xuICAgICAgICAgICAgICAgIGlmIChwYiA9PT0gcCkge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2YWx1ZXNbcGJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBwID4gcGJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByID0gcCAtIHBiO1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCgodmFsdWVzW3BiXSooMS1wcikpICsgKHZhbHVlc1twYisxXSpwcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdrJykgeyAvLyBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvblxuICAgICAgICAgICAgaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2ZpZ3VlL3NvdXJjZS9icm93c2UvdHJ1bmsvZmlndWUuanMjMzM2XG4gICAgICAgICAgICBzaW1wbGlmaWVkIGZvciAxLWQgaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGNsdXN0ZXI7XG4gICAgICAgICAgICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYXNzaWdubWVudHMgPSBuZXcgQXJyYXkobik7XG4gICAgICAgICAgICB2YXIgY2x1c3RlclNpemVzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBuYl9pdGVycyA9IDA7XG4gICAgICAgICAgICB2YXIgY2VudHJvaWRzID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gZ2V0IHNlZWQgdmFsdWVzXG4gICAgICAgICAgICBjZW50cm9pZHMgPSBbXTtcbiAgICAgICAgICAgIGNlbnRyb2lkcy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDM9MTsgaSQzPG51bTsgaSQzKyspIHtcbiAgICAgICAgICAgICAgICBjZW50cm9pZHMucHVzaChtaW4gKyAoKGkkMy9udW0pICogKG1heC1taW4pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZW50cm9pZHMucHVzaChtYXgpO1xuXG4gICAgICAgICAgICB3aGlsZSAocmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudCBzdGVwXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPG51bTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkND0wOyBpJDQ8bjsgaSQ0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2kkNF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5kaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJlc3QgPSAodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiQxPTA7IGokMTxudW07IGokMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdCA9IGFicyQxKGNlbnRyb2lkc1tqJDFdLXZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgbWluZGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmRpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3QgPSBqJDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHVzdGVyU2l6ZXNbYmVzdF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzW2kkNF0gPSBiZXN0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNlbnRyb2lkcyBzdGVwXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NlbnRyb2lkcyA9IG5ldyBBcnJheShudW0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGokMj0wOyBqJDI8bnVtOyBqJDIrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbaiQyXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkNT0wOyBpJDU8bjsgaSQ1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlciA9IGFzc2lnbm1lbnRzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdDZW50cm9pZHNbY2x1c3Rlcl0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tjbHVzdGVyXSA9IHZhbHVlc1tpJDVdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2NsdXN0ZXJdICs9IHZhbHVlc1tpJDVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGokMz0wOyBqJDM8bnVtOyBqJDMrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbaiQzXSAqPSAxL2NsdXN0ZXJTaXplc1tqJDNdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGNvbnZlcmdlbmNlXG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQ0PTA7IGokNDxudW07IGokNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdDZW50cm9pZHNbaiQ0XSAhPT0gY2VudHJvaWRzW2okNF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbnRyb2lkcyA9IG5ld0NlbnRyb2lkcztcbiAgICAgICAgICAgICAgICBuYl9pdGVycysrO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5iX2l0ZXJzID4gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmluaXNoZWQgay1tZWFucyBjbHVzdGVyaW5nXG4gICAgICAgICAgICAvLyB0aGUgbmV4dCBwYXJ0IGlzIGJvcnJvd2VkIGZyb20gZ2FicmllbGZsb3IuaXRcbiAgICAgICAgICAgIHZhciBrQ2x1c3RlcnMgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGokNT0wOyBqJDU8bnVtOyBqJDUrKykge1xuICAgICAgICAgICAgICAgIGtDbHVzdGVyc1tqJDVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpJDY9MDsgaSQ2PG47IGkkNisrKSB7XG4gICAgICAgICAgICAgICAgY2x1c3RlciA9IGFzc2lnbm1lbnRzW2kkNl07XG4gICAgICAgICAgICAgICAga0NsdXN0ZXJzW2NsdXN0ZXJdLnB1c2godmFsdWVzW2kkNl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRtcEtNZWFuc0JyZWFrcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiQ2PTA7IGokNjxudW07IGokNisrKSB7XG4gICAgICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzLnB1c2goa0NsdXN0ZXJzW2okNl1bMF0pO1xuICAgICAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcy5wdXNoKGtDbHVzdGVyc1tqJDZdW2tDbHVzdGVyc1tqJDZdLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MgPSB0bXBLTWVhbnNCcmVha3Muc29ydChmdW5jdGlvbiAoYSxiKXsgcmV0dXJuIGEtYjsgfSk7XG4gICAgICAgICAgICBsaW1pdHMucHVzaCh0bXBLTWVhbnNCcmVha3NbMF0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQ3PTE7IGkkNyA8IHRtcEtNZWFuc0JyZWFrcy5sZW5ndGg7IGkkNys9IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRtcEtNZWFuc0JyZWFrc1tpJDddO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odikgJiYgKGxpbWl0cy5pbmRleE9mKHYpID09PSAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2godik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW1pdHM7XG4gICAgfTtcblxuICAgIHZhciBhbmFseXplXzEgPSB7YW5hbHl6ZTogYW5hbHl6ZSwgbGltaXRzOiBsaW1pdHN9O1xuXG4gICAgdmFyIENvbG9yJDMgPSBDb2xvcl8xO1xuXG5cbiAgICB2YXIgY29udHJhc3QgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyBXQ0FHIGNvbnRyYXN0IHJhdGlvXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI2NvbnRyYXN0LXJhdGlvZGVmXG4gICAgICAgIGEgPSBuZXcgQ29sb3IkMyhhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvciQzKGIpO1xuICAgICAgICB2YXIgbDEgPSBhLmx1bWluYW5jZSgpO1xuICAgICAgICB2YXIgbDIgPSBiLmx1bWluYW5jZSgpO1xuICAgICAgICByZXR1cm4gbDEgPiBsMiA/IChsMSArIDAuMDUpIC8gKGwyICsgMC4wNSkgOiAobDIgKyAwLjA1KSAvIChsMSArIDAuMDUpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkMiA9IENvbG9yXzE7XG4gICAgdmFyIHNxcnQgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIHBvdyA9IE1hdGgucG93O1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbjtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gICAgdmFyIGF0YW4yID0gTWF0aC5hdGFuMjtcbiAgICB2YXIgYWJzID0gTWF0aC5hYnM7XG4gICAgdmFyIGNvcyA9IE1hdGguY29zO1xuICAgIHZhciBzaW4gPSBNYXRoLnNpbjtcbiAgICB2YXIgZXhwID0gTWF0aC5leHA7XG4gICAgdmFyIFBJID0gTWF0aC5QSTtcblxuICAgIHZhciBkZWx0YUUgPSBmdW5jdGlvbihhLCBiLCBLbCwgS2MsIEtoKSB7XG4gICAgICAgIGlmICggS2wgPT09IHZvaWQgMCApIEtsPTE7XG4gICAgICAgIGlmICggS2MgPT09IHZvaWQgMCApIEtjPTE7XG4gICAgICAgIGlmICggS2ggPT09IHZvaWQgMCApIEtoPTE7XG5cbiAgICAgICAgLy8gRGVsdGEgRSAoQ0lFIDIwMDApXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LmJydWNlbGluZGJsb29tLmNvbS9pbmRleC5odG1sP0Vxbl9EZWx0YUVfQ0lFMjAwMC5odG1sXG4gICAgICAgIHZhciByYWQyZGVnID0gZnVuY3Rpb24ocmFkKSB7XG4gICAgICAgICAgICByZXR1cm4gMzYwICogcmFkIC8gKDIgKiBQSSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWcycmFkID0gZnVuY3Rpb24oZGVnKSB7XG4gICAgICAgICAgICByZXR1cm4gKDIgKiBQSSAqIGRlZykgLyAzNjA7XG4gICAgICAgIH07XG4gICAgICAgIGEgPSBuZXcgQ29sb3IkMihhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvciQyKGIpO1xuICAgICAgICB2YXIgcmVmID0gQXJyYXkuZnJvbShhLmxhYigpKTtcbiAgICAgICAgdmFyIEwxID0gcmVmWzBdO1xuICAgICAgICB2YXIgYTEgPSByZWZbMV07XG4gICAgICAgIHZhciBiMSA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gQXJyYXkuZnJvbShiLmxhYigpKTtcbiAgICAgICAgdmFyIEwyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhMiA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYjIgPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGF2Z0wgPSAoTDEgKyBMMikvMjtcbiAgICAgICAgdmFyIEMxID0gc3FydChwb3coYTEsIDIpICsgcG93KGIxLCAyKSk7XG4gICAgICAgIHZhciBDMiA9IHNxcnQocG93KGEyLCAyKSArIHBvdyhiMiwgMikpO1xuICAgICAgICB2YXIgYXZnQyA9IChDMSArIEMyKS8yO1xuICAgICAgICB2YXIgRyA9IDAuNSooMS1zcXJ0KHBvdyhhdmdDLCA3KS8ocG93KGF2Z0MsIDcpICsgcG93KDI1LCA3KSkpKTtcbiAgICAgICAgdmFyIGExcCA9IGExKigxK0cpO1xuICAgICAgICB2YXIgYTJwID0gYTIqKDErRyk7XG4gICAgICAgIHZhciBDMXAgPSBzcXJ0KHBvdyhhMXAsIDIpICsgcG93KGIxLCAyKSk7XG4gICAgICAgIHZhciBDMnAgPSBzcXJ0KHBvdyhhMnAsIDIpICsgcG93KGIyLCAyKSk7XG4gICAgICAgIHZhciBhdmdDcCA9IChDMXAgKyBDMnApLzI7XG4gICAgICAgIHZhciBhcmN0YW4xID0gcmFkMmRlZyhhdGFuMihiMSwgYTFwKSk7XG4gICAgICAgIHZhciBhcmN0YW4yID0gcmFkMmRlZyhhdGFuMihiMiwgYTJwKSk7XG4gICAgICAgIHZhciBoMXAgPSBhcmN0YW4xID49IDAgPyBhcmN0YW4xIDogYXJjdGFuMSArIDM2MDtcbiAgICAgICAgdmFyIGgycCA9IGFyY3RhbjIgPj0gMCA/IGFyY3RhbjIgOiBhcmN0YW4yICsgMzYwO1xuICAgICAgICB2YXIgYXZnSHAgPSBhYnMoaDFwIC0gaDJwKSA+IDE4MCA/IChoMXAgKyBoMnAgKyAzNjApLzIgOiAoaDFwICsgaDJwKS8yO1xuICAgICAgICB2YXIgVCA9IDEgLSAwLjE3KmNvcyhkZWcycmFkKGF2Z0hwIC0gMzApKSArIDAuMjQqY29zKGRlZzJyYWQoMiphdmdIcCkpICsgMC4zMipjb3MoZGVnMnJhZCgzKmF2Z0hwICsgNikpIC0gMC4yKmNvcyhkZWcycmFkKDQqYXZnSHAgLSA2MykpO1xuICAgICAgICB2YXIgZGVsdGFIcCA9IGgycCAtIGgxcDtcbiAgICAgICAgZGVsdGFIcCA9IGFicyhkZWx0YUhwKSA8PSAxODAgPyBkZWx0YUhwIDogaDJwIDw9IGgxcCA/IGRlbHRhSHAgKyAzNjAgOiBkZWx0YUhwIC0gMzYwO1xuICAgICAgICBkZWx0YUhwID0gMipzcXJ0KEMxcCpDMnApKnNpbihkZWcycmFkKGRlbHRhSHApLzIpO1xuICAgICAgICB2YXIgZGVsdGFMID0gTDIgLSBMMTtcbiAgICAgICAgdmFyIGRlbHRhQ3AgPSBDMnAgLSBDMXA7ICAgIFxuICAgICAgICB2YXIgc2wgPSAxICsgKDAuMDE1KnBvdyhhdmdMIC0gNTAsIDIpKS9zcXJ0KDIwICsgcG93KGF2Z0wgLSA1MCwgMikpO1xuICAgICAgICB2YXIgc2MgPSAxICsgMC4wNDUqYXZnQ3A7XG4gICAgICAgIHZhciBzaCA9IDEgKyAwLjAxNSphdmdDcCpUO1xuICAgICAgICB2YXIgZGVsdGFUaGV0YSA9IDMwKmV4cCgtcG93KChhdmdIcCAtIDI3NSkvMjUsIDIpKTtcbiAgICAgICAgdmFyIFJjID0gMipzcXJ0KHBvdyhhdmdDcCwgNykvKHBvdyhhdmdDcCwgNykgKyBwb3coMjUsIDcpKSk7XG4gICAgICAgIHZhciBSdCA9IC1SYypzaW4oMipkZWcycmFkKGRlbHRhVGhldGEpKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHNxcnQocG93KGRlbHRhTC8oS2wqc2wpLCAyKSArIHBvdyhkZWx0YUNwLyhLYypzYyksIDIpICsgcG93KGRlbHRhSHAvKEtoKnNoKSwgMikgKyBSdCooZGVsdGFDcC8oS2Mqc2MpKSooZGVsdGFIcC8oS2gqc2gpKSk7XG4gICAgICAgIHJldHVybiBtYXgoMCwgbWluKDEwMCwgcmVzdWx0KSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciQxID0gQ29sb3JfMTtcblxuICAgIC8vIHNpbXBsZSBFdWNsaWRlYW4gZGlzdGFuY2VcbiAgICB2YXIgZGlzdGFuY2UgPSBmdW5jdGlvbihhLCBiLCBtb2RlKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nbGFiJztcblxuICAgICAgICAvLyBEZWx0YSBFIChDSUUgMTk3NilcbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cuYnJ1Y2VsaW5kYmxvb20uY29tL2luZGV4Lmh0bWw/RXF1YXRpb25zLmh0bWxcbiAgICAgICAgYSA9IG5ldyBDb2xvciQxKGEpO1xuICAgICAgICBiID0gbmV3IENvbG9yJDEoYik7XG4gICAgICAgIHZhciBsMSA9IGEuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgbDIgPSBiLmdldChtb2RlKTtcbiAgICAgICAgdmFyIHN1bV9zcSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgaW4gbDEpIHtcbiAgICAgICAgICAgIHZhciBkID0gKGwxW2ldIHx8IDApIC0gKGwyW2ldIHx8IDApO1xuICAgICAgICAgICAgc3VtX3NxICs9IGQqZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bV9zcSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciA9IENvbG9yXzE7XG5cbiAgICB2YXIgdmFsaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MpICkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzb21lIHByZS1kZWZpbmVkIGNvbG9yIHNjYWxlczpcbiAgICB2YXIgY2hyb21hJDEgPSBjaHJvbWFfMTtcblxuICAgIHZhciBzY2FsZSA9IHNjYWxlJDI7XG5cbiAgICB2YXIgc2NhbGVzID0ge1xuICAgIFx0Y29vbDogZnVuY3Rpb24gY29vbCgpIHsgcmV0dXJuIHNjYWxlKFtjaHJvbWEkMS5oc2woMTgwLDEsLjkpLCBjaHJvbWEkMS5oc2woMjUwLC43LC40KV0pIH0sXG4gICAgXHRob3Q6IGZ1bmN0aW9uIGhvdCgpIHsgcmV0dXJuIHNjYWxlKFsnIzAwMCcsJyNmMDAnLCcjZmYwJywnI2ZmZiddKS5tb2RlKCdyZ2InKSB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgICBDb2xvckJyZXdlciBjb2xvcnMgZm9yIGNocm9tYS5qc1xuXG4gICAgICAgIENvcHlyaWdodCAoYykgMjAwMiBDeW50aGlhIEJyZXdlciwgTWFyayBIYXJyb3dlciwgYW5kIFRoZVxuICAgICAgICBQZW5uc3lsdmFuaWEgU3RhdGUgVW5pdmVyc2l0eS5cblxuICAgICAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICAgICAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgICAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkXG4gICAgICAgIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SXG4gICAgICAgIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gICAgICAgIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICAgKi9cblxuICAgIHZhciBjb2xvcmJyZXdlciA9IHtcbiAgICAgICAgLy8gc2VxdWVudGlhbFxuICAgICAgICBPclJkOiBbJyNmZmY3ZWMnLCAnI2ZlZThjOCcsICcjZmRkNDllJywgJyNmZGJiODQnLCAnI2ZjOGQ1OScsICcjZWY2NTQ4JywgJyNkNzMwMWYnLCAnI2IzMDAwMCcsICcjN2YwMDAwJ10sXG4gICAgICAgIFB1QnU6IFsnI2ZmZjdmYicsICcjZWNlN2YyJywgJyNkMGQxZTYnLCAnI2E2YmRkYicsICcjNzRhOWNmJywgJyMzNjkwYzAnLCAnIzA1NzBiMCcsICcjMDQ1YThkJywgJyMwMjM4NTgnXSxcbiAgICAgICAgQnVQdTogWycjZjdmY2ZkJywgJyNlMGVjZjQnLCAnI2JmZDNlNicsICcjOWViY2RhJywgJyM4Yzk2YzYnLCAnIzhjNmJiMScsICcjODg0MTlkJywgJyM4MTBmN2MnLCAnIzRkMDA0YiddLFxuICAgICAgICBPcmFuZ2VzOiBbJyNmZmY1ZWInLCAnI2ZlZTZjZScsICcjZmRkMGEyJywgJyNmZGFlNmInLCAnI2ZkOGQzYycsICcjZjE2OTEzJywgJyNkOTQ4MDEnLCAnI2E2MzYwMycsICcjN2YyNzA0J10sXG4gICAgICAgIEJ1R246IFsnI2Y3ZmNmZCcsICcjZTVmNWY5JywgJyNjY2VjZTYnLCAnIzk5ZDhjOScsICcjNjZjMmE0JywgJyM0MWFlNzYnLCAnIzIzOGI0NScsICcjMDA2ZDJjJywgJyMwMDQ0MWInXSxcbiAgICAgICAgWWxPckJyOiBbJyNmZmZmZTUnLCAnI2ZmZjdiYycsICcjZmVlMzkxJywgJyNmZWM0NGYnLCAnI2ZlOTkyOScsICcjZWM3MDE0JywgJyNjYzRjMDInLCAnIzk5MzQwNCcsICcjNjYyNTA2J10sXG4gICAgICAgIFlsR246IFsnI2ZmZmZlNScsICcjZjdmY2I5JywgJyNkOWYwYTMnLCAnI2FkZGQ4ZScsICcjNzhjNjc5JywgJyM0MWFiNWQnLCAnIzIzODQ0MycsICcjMDA2ODM3JywgJyMwMDQ1MjknXSxcbiAgICAgICAgUmVkczogWycjZmZmNWYwJywgJyNmZWUwZDInLCAnI2ZjYmJhMScsICcjZmM5MjcyJywgJyNmYjZhNGEnLCAnI2VmM2IyYycsICcjY2IxODFkJywgJyNhNTBmMTUnLCAnIzY3MDAwZCddLFxuICAgICAgICBSZFB1OiBbJyNmZmY3ZjMnLCAnI2ZkZTBkZCcsICcjZmNjNWMwJywgJyNmYTlmYjUnLCAnI2Y3NjhhMScsICcjZGQzNDk3JywgJyNhZTAxN2UnLCAnIzdhMDE3NycsICcjNDkwMDZhJ10sXG4gICAgICAgIEdyZWVuczogWycjZjdmY2Y1JywgJyNlNWY1ZTAnLCAnI2M3ZTljMCcsICcjYTFkOTliJywgJyM3NGM0NzYnLCAnIzQxYWI1ZCcsICcjMjM4YjQ1JywgJyMwMDZkMmMnLCAnIzAwNDQxYiddLFxuICAgICAgICBZbEduQnU6IFsnI2ZmZmZkOScsICcjZWRmOGIxJywgJyNjN2U5YjQnLCAnIzdmY2RiYicsICcjNDFiNmM0JywgJyMxZDkxYzAnLCAnIzIyNWVhOCcsICcjMjUzNDk0JywgJyMwODFkNTgnXSxcbiAgICAgICAgUHVycGxlczogWycjZmNmYmZkJywgJyNlZmVkZjUnLCAnI2RhZGFlYicsICcjYmNiZGRjJywgJyM5ZTlhYzgnLCAnIzgwN2RiYScsICcjNmE1MWEzJywgJyM1NDI3OGYnLCAnIzNmMDA3ZCddLFxuICAgICAgICBHbkJ1OiBbJyNmN2ZjZjAnLCAnI2UwZjNkYicsICcjY2NlYmM1JywgJyNhOGRkYjUnLCAnIzdiY2NjNCcsICcjNGViM2QzJywgJyMyYjhjYmUnLCAnIzA4NjhhYycsICcjMDg0MDgxJ10sXG4gICAgICAgIEdyZXlzOiBbJyNmZmZmZmYnLCAnI2YwZjBmMCcsICcjZDlkOWQ5JywgJyNiZGJkYmQnLCAnIzk2OTY5NicsICcjNzM3MzczJywgJyM1MjUyNTInLCAnIzI1MjUyNScsICcjMDAwMDAwJ10sXG4gICAgICAgIFlsT3JSZDogWycjZmZmZmNjJywgJyNmZmVkYTAnLCAnI2ZlZDk3NicsICcjZmViMjRjJywgJyNmZDhkM2MnLCAnI2ZjNGUyYScsICcjZTMxYTFjJywgJyNiZDAwMjYnLCAnIzgwMDAyNiddLFxuICAgICAgICBQdVJkOiBbJyNmN2Y0ZjknLCAnI2U3ZTFlZicsICcjZDRiOWRhJywgJyNjOTk0YzcnLCAnI2RmNjViMCcsICcjZTcyOThhJywgJyNjZTEyNTYnLCAnIzk4MDA0MycsICcjNjcwMDFmJ10sXG4gICAgICAgIEJsdWVzOiBbJyNmN2ZiZmYnLCAnI2RlZWJmNycsICcjYzZkYmVmJywgJyM5ZWNhZTEnLCAnIzZiYWVkNicsICcjNDI5MmM2JywgJyMyMTcxYjUnLCAnIzA4NTE5YycsICcjMDgzMDZiJ10sXG4gICAgICAgIFB1QnVHbjogWycjZmZmN2ZiJywgJyNlY2UyZjAnLCAnI2QwZDFlNicsICcjYTZiZGRiJywgJyM2N2E5Y2YnLCAnIzM2OTBjMCcsICcjMDI4MThhJywgJyMwMTZjNTknLCAnIzAxNDYzNiddLFxuICAgICAgICBWaXJpZGlzOiBbJyM0NDAxNTQnLCAnIzQ4Mjc3NycsICcjM2Y0YThhJywgJyMzMTY3OGUnLCAnIzI2ODM4ZicsICcjMWY5ZDhhJywgJyM2Y2NlNWEnLCAnI2I2ZGUyYicsICcjZmVlODI1J10sXG5cbiAgICAgICAgLy8gZGl2ZXJnaW5nXG5cbiAgICAgICAgU3BlY3RyYWw6IFsnIzllMDE0MicsICcjZDUzZTRmJywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDhiJywgJyNmZmZmYmYnLCAnI2U2ZjU5OCcsICcjYWJkZGE0JywgJyM2NmMyYTUnLCAnIzMyODhiZCcsICcjNWU0ZmEyJ10sXG4gICAgICAgIFJkWWxHbjogWycjYTUwMDI2JywgJyNkNzMwMjcnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOGInLCAnI2ZmZmZiZicsICcjZDllZjhiJywgJyNhNmQ5NmEnLCAnIzY2YmQ2MycsICcjMWE5ODUwJywgJyMwMDY4MzcnXSxcbiAgICAgICAgUmRCdTogWycjNjcwMDFmJywgJyNiMjE4MmInLCAnI2Q2NjA0ZCcsICcjZjRhNTgyJywgJyNmZGRiYzcnLCAnI2Y3ZjdmNycsICcjZDFlNWYwJywgJyM5MmM1ZGUnLCAnIzQzOTNjMycsICcjMjE2NmFjJywgJyMwNTMwNjEnXSxcbiAgICAgICAgUGlZRzogWycjOGUwMTUyJywgJyNjNTFiN2QnLCAnI2RlNzdhZScsICcjZjFiNmRhJywgJyNmZGUwZWYnLCAnI2Y3ZjdmNycsICcjZTZmNWQwJywgJyNiOGUxODYnLCAnIzdmYmM0MScsICcjNGQ5MjIxJywgJyMyNzY0MTknXSxcbiAgICAgICAgUFJHbjogWycjNDAwMDRiJywgJyM3NjJhODMnLCAnIzk5NzBhYicsICcjYzJhNWNmJywgJyNlN2Q0ZTgnLCAnI2Y3ZjdmNycsICcjZDlmMGQzJywgJyNhNmRiYTAnLCAnIzVhYWU2MScsICcjMWI3ODM3JywgJyMwMDQ0MWInXSxcbiAgICAgICAgUmRZbEJ1OiBbJyNhNTAwMjYnLCAnI2Q3MzAyNycsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA5MCcsICcjZmZmZmJmJywgJyNlMGYzZjgnLCAnI2FiZDllOScsICcjNzRhZGQxJywgJyM0NTc1YjQnLCAnIzMxMzY5NSddLFxuICAgICAgICBCckJHOiBbJyM1NDMwMDUnLCAnIzhjNTEwYScsICcjYmY4MTJkJywgJyNkZmMyN2QnLCAnI2Y2ZThjMycsICcjZjVmNWY1JywgJyNjN2VhZTUnLCAnIzgwY2RjMScsICcjMzU5NzhmJywgJyMwMTY2NWUnLCAnIzAwM2MzMCddLFxuICAgICAgICBSZEd5OiBbJyM2NzAwMWYnLCAnI2IyMTgyYicsICcjZDY2MDRkJywgJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZmZmZmZmJywgJyNlMGUwZTAnLCAnI2JhYmFiYScsICcjODc4Nzg3JywgJyM0ZDRkNGQnLCAnIzFhMWExYSddLFxuICAgICAgICBQdU9yOiBbJyM3ZjNiMDgnLCAnI2IzNTgwNicsICcjZTA4MjE0JywgJyNmZGI4NjMnLCAnI2ZlZTBiNicsICcjZjdmN2Y3JywgJyNkOGRhZWInLCAnI2IyYWJkMicsICcjODA3M2FjJywgJyM1NDI3ODgnLCAnIzJkMDA0YiddLFxuXG4gICAgICAgIC8vIHF1YWxpdGF0aXZlXG5cbiAgICAgICAgU2V0MjogWycjNjZjMmE1JywgJyNmYzhkNjInLCAnIzhkYTBjYicsICcjZTc4YWMzJywgJyNhNmQ4NTQnLCAnI2ZmZDkyZicsICcjZTVjNDk0JywgJyNiM2IzYjMnXSxcbiAgICAgICAgQWNjZW50OiBbJyM3ZmM5N2YnLCAnI2JlYWVkNCcsICcjZmRjMDg2JywgJyNmZmZmOTknLCAnIzM4NmNiMCcsICcjZjAwMjdmJywgJyNiZjViMTcnLCAnIzY2NjY2NiddLFxuICAgICAgICBTZXQxOiBbJyNlNDFhMWMnLCAnIzM3N2ViOCcsICcjNGRhZjRhJywgJyM5ODRlYTMnLCAnI2ZmN2YwMCcsICcjZmZmZjMzJywgJyNhNjU2MjgnLCAnI2Y3ODFiZicsICcjOTk5OTk5J10sXG4gICAgICAgIFNldDM6IFsnIzhkZDNjNycsICcjZmZmZmIzJywgJyNiZWJhZGEnLCAnI2ZiODA3MicsICcjODBiMWQzJywgJyNmZGI0NjInLCAnI2IzZGU2OScsICcjZmNjZGU1JywgJyNkOWQ5ZDknLCAnI2JjODBiZCcsICcjY2NlYmM1JywgJyNmZmVkNmYnXSxcbiAgICAgICAgRGFyazI6IFsnIzFiOWU3NycsICcjZDk1ZjAyJywgJyM3NTcwYjMnLCAnI2U3Mjk4YScsICcjNjZhNjFlJywgJyNlNmFiMDInLCAnI2E2NzYxZCcsICcjNjY2NjY2J10sXG4gICAgICAgIFBhaXJlZDogWycjYTZjZWUzJywgJyMxZjc4YjQnLCAnI2IyZGY4YScsICcjMzNhMDJjJywgJyNmYjlhOTknLCAnI2UzMWExYycsICcjZmRiZjZmJywgJyNmZjdmMDAnLCAnI2NhYjJkNicsICcjNmEzZDlhJywgJyNmZmZmOTknLCAnI2IxNTkyOCddLFxuICAgICAgICBQYXN0ZWwyOiBbJyNiM2UyY2QnLCAnI2ZkY2RhYycsICcjY2JkNWU4JywgJyNmNGNhZTQnLCAnI2U2ZjVjOScsICcjZmZmMmFlJywgJyNmMWUyY2MnLCAnI2NjY2NjYyddLFxuICAgICAgICBQYXN0ZWwxOiBbJyNmYmI0YWUnLCAnI2IzY2RlMycsICcjY2NlYmM1JywgJyNkZWNiZTQnLCAnI2ZlZDlhNicsICcjZmZmZmNjJywgJyNlNWQ4YmQnLCAnI2ZkZGFlYycsICcjZjJmMmYyJ10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBsb3dlcmNhc2UgYWxpYXNlcyBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBtYXRjaGVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBPYmplY3Qua2V5cyhjb2xvcmJyZXdlcik7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBrZXkgPSBsaXN0W2ldO1xuXG4gICAgICAgIGNvbG9yYnJld2VyW2tleS50b0xvd2VyQ2FzZSgpXSA9IGNvbG9yYnJld2VyW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGNvbG9yYnJld2VyXzEgPSBjb2xvcmJyZXdlcjtcblxuICAgIHZhciBjaHJvbWEgPSBjaHJvbWFfMTtcblxuICAgIC8vIGZlZWwgZnJlZSB0byBjb21tZW50IG91dCBhbnl0aGluZyB0byByb2xsdXBcbiAgICAvLyBhIHNtYWxsZXIgY2hyb21hLmpzIGJ1aWx0XG5cbiAgICAvLyBpbyAtLT4gY29udmVydCBjb2xvcnNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gb3BlcmF0b3JzIC0tPiBtb2RpZnkgZXhpc3RpbmcgQ29sb3JzXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBpbnRlcnBvbGF0b3JzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gZ2VuZXJhdG9ycyAtLSA+IGNyZWF0ZSBuZXcgY29sb3JzXG4gICAgY2hyb21hLmF2ZXJhZ2UgPSBhdmVyYWdlO1xuICAgIGNocm9tYS5iZXppZXIgPSBiZXppZXJfMTtcbiAgICBjaHJvbWEuYmxlbmQgPSBibGVuZF8xO1xuICAgIGNocm9tYS5jdWJlaGVsaXggPSBjdWJlaGVsaXg7XG4gICAgY2hyb21hLm1peCA9IGNocm9tYS5pbnRlcnBvbGF0ZSA9IG1peCQxO1xuICAgIGNocm9tYS5yYW5kb20gPSByYW5kb21fMTtcbiAgICBjaHJvbWEuc2NhbGUgPSBzY2FsZSQyO1xuXG4gICAgLy8gb3RoZXIgdXRpbGl0eSBtZXRob2RzXG4gICAgY2hyb21hLmFuYWx5emUgPSBhbmFseXplXzEuYW5hbHl6ZTtcbiAgICBjaHJvbWEuY29udHJhc3QgPSBjb250cmFzdDtcbiAgICBjaHJvbWEuZGVsdGFFID0gZGVsdGFFO1xuICAgIGNocm9tYS5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGNocm9tYS5saW1pdHMgPSBhbmFseXplXzEubGltaXRzO1xuICAgIGNocm9tYS52YWxpZCA9IHZhbGlkO1xuXG4gICAgLy8gc2NhbGVcbiAgICBjaHJvbWEuc2NhbGVzID0gc2NhbGVzO1xuXG4gICAgLy8gY29sb3JzXG4gICAgY2hyb21hLmNvbG9ycyA9IHczY3gxMV8xO1xuICAgIGNocm9tYS5icmV3ZXIgPSBjb2xvcmJyZXdlcl8xO1xuXG4gICAgdmFyIGNocm9tYV9qcyA9IGNocm9tYTtcblxuICAgIHJldHVybiBjaHJvbWFfanM7XG5cbn0pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vdXRpbHMuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmltcG9ydCB7IGluaXRTbGlkZXIgfSBmcm9tIFwiLi9zbGlkZXJcIjtcbmltcG9ydCB7IHRvVGl0bGVDYXNlIH0gZnJvbSBcIi4uL3V0aWxzL3RleHQtdG8tdGl0bGUtY2FzZVwiO1xuaW1wb3J0IHsgZGVmYXVsdEFjY2VudEhVRXMsIHJhZGlpU2l6ZU5hbWUsIHNwYWNpbmdTaXplTmFtZSwgc3lzdGVtQWNjZW50TGlzdCwgdHlwb2dyYXBoeVNpemVOYW1lLCB0eXBvZ3JhcGh5U2l6ZVZhbHVlcyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0ICogYXMgcmFkaWkgZnJvbSBcIi4uL3JhZGlpLXRva2Vuc1wiO1xuaW1wb3J0ICogYXMgdHlwZXNjYWxlIGZyb20gXCIuLi90eXBlc2NhbGUtdG9rZW5zXCI7XG5pbXBvcnQgKiBhcyBzcGFjaW5nIGZyb20gXCIuLi9zcGFjaW5nLXRva2Vuc1wiO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItcHJldmlldycpO1xuY29uc3QgYWNjZW50U2xpZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlbnRDb2xvcnNTbGlkZXJzJyk7XG5sZXQgaW1wb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydFZhcmlhYmxlc0J1dHRvbicpO1xubGV0IHJlc2V0RGVmYXVsdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXREZWZhdWx0c0J1dHRvbicpO1xubGV0IHNsaWRlcnMgPSB7fTtcbmxldCBkZWZhdWx0RGF0YTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbW1hbmQ9XCJyZW5kZXJBY2NlbnRzXCJdJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGdldEZvcm1EYXRhKCk7XG4gICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1JFTkRFUl9BQ0NFTlRTJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBcIipcIik7XG4gICAgfSk7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbW1hbmQ9XCJyZW5kZXJOZXV0cmFsc1wiXScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBnZXRGb3JtRGF0YSgpO1xuICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdSRU5ERVJfTkVVVFJBTFMnLFxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFwiKlwiKTtcbiAgICB9KTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsSUQgPSBlbC5kYXRhc2V0Lm1vZGFsO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxJRCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsSUQpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSUQpO1xuICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZXhwYW5kZXJdW2RhdGEtcm9sZT1cInRyaWdnZXJcIl0nKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKG5leHQuZGF0YXNldC5yb2xlID09ICdjb250YWluZXInKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG5leHQuc3R5bGUuZGlzcGxheSA9IG5leHQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWV4cGFuZGVkJywgbmV4dC5zdHlsZS5kaXNwbGF5ID09ICdub25lJyA/ICdubycgOiAneWVzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgZmluZCBjb250YWluZXIgdG8gZXhwYW5kJyk7XG4gICAgfVxufSk7XG5mdW5jdGlvbiB0cmFuc2Zvcm1WYWx1ZSh0eXBlLCB2YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlTWFwcyA9IHtcbiAgICAgICAgJ3NlbWFudGljcyc6IHN5c3RlbUFjY2VudExpc3QsXG4gICAgICAgICd0eXBvZ3JhcGh5JzogdHlwb2dyYXBoeVNpemVWYWx1ZXMsXG4gICAgICAgICdyYWRpaSc6IHJhZGlpU2l6ZU5hbWUsXG4gICAgICAgICdzcGFjaW5nJzogc3BhY2luZ1NpemVOYW1lXG4gICAgfTtcbiAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZU1hcHNbdHlwZV07XG4gICAgY29uc3QgcmVzb2x2ZWRWYWx1ZSA9IHZhbHVlc1t2YWx1ZV07XG4gICAgcmV0dXJuIHRvVGl0bGVDYXNlKHJlc29sdmVkVmFsdWUgfHwgdmFsdWUpO1xufVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xpZGVyXScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyQ29tcG9lbnQgPSBpbml0U2xpZGVyKGVsLCB7IHN5bmNWYWx1ZTogZWwuZGF0YXNldC50eXBlID09IG51bGwgfSk7XG4gICAgc2xpZGVyc1tzbGlkZXJDb21wb2VudC5wYXJhbXMubmFtZV0gPSBzbGlkZXJDb21wb2VudDtcbiAgICBpZiAoZWwuZGF0YXNldC50eXBlICE9IG51bGwpIHtcbiAgICAgICAgc2xpZGVyQ29tcG9lbnQuc2xpZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcbiAgICAgICAgc2xpZGVyQ29tcG9lbnQuc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICBzbGlkZXJDb21wb2VudC52YWx1ZUlucHV0LnZhbHVlID0gdHJhbnNmb3JtVmFsdWUoZWwuZGF0YXNldC50eXBlLCBzbGlkZXJDb21wb2VudC5zbGlkZXJFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNsaWRlckNvbXBvZW50LnZhbHVlSW5wdXQudmFsdWUgPSB0cmFuc2Zvcm1WYWx1ZShlbC5kYXRhc2V0LnR5cGUsIHNsaWRlckNvbXBvZW50LnNsaWRlckVsZW1lbnQudmFsdWUpO1xuICAgIH1cbn0pO1xuT2JqZWN0LmVudHJpZXMoZGVmYXVsdEFjY2VudEhVRXMpLmZvckVhY2goKFtuYW1lLCBodWVdKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgXCJsYWJlbFwiOiB0b1RpdGxlQ2FzZShuYW1lKSwgXCJuYW1lXCI6IG5hbWUsIFwibWluXCI6IDAsIFwibWF4XCI6IDM2MCwgXCJzdGVwXCI6IDEsIFwidmFsdWVcIjogaHVlLCBzeW5jVmFsdWU6IHRydWUgfTtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzbGlkZXJDb21wb2VudCA9IGluaXRTbGlkZXIoZWwsIG9wdGlvbnMpO1xuICAgIGFjY2VudFNsaWRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIHNsaWRlcnNbbmFtZV0gPSBzbGlkZXJDb21wb2VudDtcbn0pO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBnZW5lcmF0ZVByZXZpZXcoKTtcbn0pO1xucmVzZXREZWZhdWx0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBnZW5lcmF0ZVByZXZpZXcoKTtcbn0pO1xuaW1wb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6IFwiSU1QT1JUXCIsXG4gICAgICAgIHBhcmFtczogZ2V0Rm9ybURhdGEoKVxuICAgIH07XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogbWVzc2FnZSB9LCBcIipcIik7XG59KTtcbmdlbmVyYXRlUHJldmlldygpO1xuZnVuY3Rpb24gZ2V0Q2hlY2tib3hWYWx1ZShwcm9wTmFtZSwgZm9ybURhdGEpIHtcbiAgICBsZXQgcmFkaWkgPSBbXTtcbiAgICBmb3JtRGF0YS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWVbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgICByYWRpaS5wdXNoKHZhbHVlLnJhZGlpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByYWRpaTtcbn1cbmZ1bmN0aW9uIGdldEZvcm1EYXRhKCkge1xuICAgIGNvbnN0IGZvcm1FbnRyaWVzID0gbmV3IEZvcm1EYXRhKGZvcm0pLmVudHJpZXMoKTtcbiAgICBjb25zdCBlbnRyaWVzID0gQXJyYXkuZnJvbShmb3JtRW50cmllcywgKFt4LCB5XSkgPT4gKHsgW3hdOiB5IH0pKTtcbiAgICBjb25zdCBhY2NlbnRMaXN0ID0gc3lzdGVtQWNjZW50TGlzdDtcbiAgICBsZXQgcmF3VmFsdWVzO1xuICAgIGVudHJpZXMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICByYXdWYWx1ZXMgPSBPYmplY3QuYXNzaWduKHJhd1ZhbHVlcyB8fCB7fSwgdmFsKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnSU1QT1JUJyxcbiAgICAgICAgc2luZ2xlQ29sbGVjdGlvbjogcmF3VmFsdWVzLnNpbmdsZUNvbGxlY3Rpb24gJiYgcmF3VmFsdWVzLnNpbmdsZUNvbGxlY3Rpb24gPT09ICd0cnVlJyxcbiAgICAgICAgaHVlOiBwYXJzZUludChyYXdWYWx1ZXMuaHVlKSxcbiAgICAgICAgc2F0dXJhdGlvbjogcGFyc2VJbnQocmF3VmFsdWVzLnNhdHVyYXRpb24pIC8gMTAwLFxuICAgICAgICBkaXN0YW5jZTogcGFyc2VJbnQocmF3VmFsdWVzLmRpc3RhbmNlKSAvIDEwMCxcbiAgICAgICAgcHJpbWFyeTogYWNjZW50TGlzdFtyYXdWYWx1ZXMucHJpbWFyeV0sXG4gICAgICAgIGluZm86IGFjY2VudExpc3RbcmF3VmFsdWVzLmluZm9dLFxuICAgICAgICBzdWNjZXNzOiBhY2NlbnRMaXN0W3Jhd1ZhbHVlcy5zdWNjZXNzXSxcbiAgICAgICAgd2FybmluZzogYWNjZW50TGlzdFtyYXdWYWx1ZXMud2FybmluZ10sXG4gICAgICAgIGRhbmdlcjogYWNjZW50TGlzdFtyYXdWYWx1ZXMuZGFuZ2VyXSxcbiAgICAgICAgcmVkOiBwYXJzZUludChyYXdWYWx1ZXMucmVkKSxcbiAgICAgICAgYW1iZXI6IHBhcnNlSW50KHJhd1ZhbHVlcy5hbWJlciksXG4gICAgICAgIGJyb3duOiBwYXJzZUludChyYXdWYWx1ZXMuYnJvd24pLFxuICAgICAgICBncmVlbjogcGFyc2VJbnQocmF3VmFsdWVzLmdyZWVuKSxcbiAgICAgICAgdGVhbDogcGFyc2VJbnQocmF3VmFsdWVzLnRlYWwpLFxuICAgICAgICBjeWFuOiBwYXJzZUludChyYXdWYWx1ZXMuY3lhbiksXG4gICAgICAgIGJsdWU6IHBhcnNlSW50KHJhd1ZhbHVlcy5ibHVlKSxcbiAgICAgICAgaW5kaWdvOiBwYXJzZUludChyYXdWYWx1ZXMuaW5kaWdvKSxcbiAgICAgICAgdmlvbGV0OiBwYXJzZUludChyYXdWYWx1ZXMudmlvbGV0KSxcbiAgICAgICAgcHVycGxlOiBwYXJzZUludChyYXdWYWx1ZXMucHVycGxlKSxcbiAgICAgICAgcGluazogcGFyc2VJbnQocmF3VmFsdWVzLnBpbmspLFxuICAgICAgICB0eXBlU2NhbGU6IHR5cG9ncmFwaHlTaXplTmFtZVtyYXdWYWx1ZXMuZm9udFNpemVdLFxuICAgICAgICBjcmVhdGVTdHlsZXM6IGZhbHNlLFxuICAgICAgICBhY2NlbnRTYXR1cmF0aW9uOiBwYXJzZUludChyYXdWYWx1ZXMuYWNjZW50U2F0dXJhdGlvbikgLyAxMDAsXG4gICAgICAgIHJhZGlpOiByYWRpaVNpemVOYW1lW3Jhd1ZhbHVlcy5yYWRpaV0sXG4gICAgICAgIHNwYWNpbmc6IHNwYWNpbmdTaXplTmFtZVtyYXdWYWx1ZXMuc3BhY2luZ11cbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVQcmV2aWV3KCkge1xuICAgIGxldCBkYXRhID0gZ2V0Rm9ybURhdGEoKTtcbiAgICBmb3IgKHZhciBhID0gMSwgYiA9IDc7IGEgPCBiOyBhKyspIHtcbiAgICAgICAgY29uc3QgY29sb3JMaWdodCA9IGNocm9tYS5oc2woZGF0YS5odWUsIGRhdGEuc2F0dXJhdGlvbiwgMSAtIGRhdGEuZGlzdGFuY2UgKiBhKTtcbiAgICAgICAgY29uc3QgY29sb3JEYXJrID0gY2hyb21hLmhzbChkYXRhLmh1ZSwgZGF0YS5zYXR1cmF0aW9uLCAwLjIgKyBkYXRhLmRpc3RhbmNlICogYSk7XG4gICAgICAgIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoYC0tbGlnaHQtJHthfWAsIGNvbG9yTGlnaHQuaGV4KCkpO1xuICAgICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KGAtLWRhcmstJHthfWAsIGNvbG9yRGFyay5oZXgoKSk7XG4gICAgfVxuICAgIHNsaWRlcnNbJ2h1ZSddLnNsaWRlckVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGh1bWItY29sb3InLCBjaHJvbWEuaHNsKGRhdGEuaHVlLCBkYXRhLmFjY2VudFNhdHVyYXRpb24sIDAuNSkuaGV4KCkpO1xuICAgIHNsaWRlcnNbJ3NhdHVyYXRpb24nXS5zbGlkZXJFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRodW1iLWNvbG9yJywgY2hyb21hLmhzbChkYXRhLmh1ZSwgZGF0YS5zYXR1cmF0aW9uLCAwLjUpLmhleCgpKTtcbiAgICBjb25zdCBzZW1hbnRpY1NsaWRlcnNVcGRhdGVNYXAgPSBbXG4gICAgICAgIFtcInByaW1hcnlcIiwgZGF0YS5wcmltYXJ5XSxcbiAgICAgICAgW1wiaW5mb1wiLCBkYXRhLmluZm9dLFxuICAgICAgICBbXCJzdWNjZXNzXCIsIGRhdGEuc3VjY2Vzc10sXG4gICAgICAgIFtcIndhcm5pbmdcIiwgZGF0YS53YXJuaW5nXSxcbiAgICAgICAgW1wiZGFuZ2VyXCIsIGRhdGEuZGFuZ2VyXSxcbiAgICBdO1xuICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRBY2NlbnRIVUVzKS5mb3JFYWNoKChbbmFtZSwgaHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBzbGlkZXJWYWx1ZSA9IGRhdGFbbmFtZV07XG4gICAgICAgIGNvbnN0IGFjY2VudENvbG9yID0gY2hyb21hLmhzbChbc2xpZGVyVmFsdWUsIGRhdGEuYWNjZW50U2F0dXJhdGlvbiwgMC41XSkubHVtaW5hbmNlKDAuMTgpO1xuICAgICAgICBzbGlkZXJzW25hbWVdLnNsaWRlckVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGh1bWItY29sb3InLCBhY2NlbnRDb2xvci5oZXgoKSk7XG4gICAgfSk7XG4gICAgc2VtYW50aWNTbGlkZXJzVXBkYXRlTWFwLmZvckVhY2goKFtzbGlkZXJOYW1lLCBzbGlkZXJWYWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3Qgc2xpZGVyQWNjZW50Q29sb3IgPSBzbGlkZXJzW3NsaWRlclZhbHVlXS5zbGlkZXJFbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tdGh1bWItY29sb3InKTtcbiAgICAgICAgc2xpZGVyc1tzbGlkZXJOYW1lXS5zbGlkZXJFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRodW1iLWNvbG9yJywgc2xpZGVyQWNjZW50Q29sb3IpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtzbGlkZXJOYW1lfWAsIHNsaWRlckFjY2VudENvbG9yKTtcbiAgICAgICAgY29uc3QgdmFsdWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb2xvci1ib3guYS0ke3NsaWRlck5hbWV9ID4gLnRva2VuLXZhbHVlYCk7XG4gICAgICAgIGlmICh2YWx1ZUVsKSB7XG4gICAgICAgICAgICB2YWx1ZUVsLmlubmVySFRNTCA9IHNsaWRlclZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZ2VuZXJhdGVDU1NWYXJzKHJhZGlpW2RhdGEucmFkaWldKTtcbiAgICBnZW5lcmF0ZUNTU1ZhcnModHlwZXNjYWxlW2RhdGEudHlwZVNjYWxlXSk7XG4gICAgZ2VuZXJhdGVDU1NWYXJzKHNwYWNpbmdbZGF0YS5zcGFjaW5nXSk7XG4gICAgdXBkYXRlVmFsdWVzRGlzcGxheShkYXRhKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVZhbHVlc0Rpc3BsYXkoZGF0YSkge1xuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS12YWx1ZT0ke2tleX1dYCkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHRyYW5zZm9ybVZhbHVlKGVsLmRhdGFzZXQudHlwZSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQ1NTVmFycyh0b2tlbnMgPSB7fSkge1xuICAgIE9iamVjdC5lbnRyaWVzKHRva2VucykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCB2YXJOYW1lID0gYC0tJHtuYW1lLnJlcGxhY2UoL1xcLy9nLCBcIi1cIil9YDtcbiAgICAgICAgY29uc3QgdmFyVmFsdWUgPSBwYXJzZUludCh2YWx1ZVtcIiR2YWx1ZVwiXSk7XG4gICAgICAgIGlmICh2YXJWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgYCR7dmFyVmFsdWV9cHhgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFZhcmlhYmxlICR7dmFyTmFtZX0gdmFsdWUgaXMgbm90IGFuIGludGVnZXJgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9