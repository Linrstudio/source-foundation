/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/color-generators/accent-palette-generator.ts":
/*!**********************************************************!*\
  !*** ./src/color-generators/accent-palette-generator.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAccentColors: () => (/* reexport safe */ _defaults__WEBPACK_IMPORTED_MODULE_2__.defaultAccentHUEs),
/* harmony export */   generateGlobalAccentPalette: () => (/* binding */ generateGlobalAccentPalette),
/* harmony export */   generateSystemAccentPalette: () => (/* binding */ generateSystemAccentPalette),
/* harmony export */   getGlobalAccent: () => (/* binding */ getGlobalAccent),
/* harmony export */   getShadesTemplate: () => (/* binding */ getShadesTemplate)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/token-references */ "./src/utils/token-references.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");



function getShadesTemplate(theme, colorName) {
    if (theme == 'light') {
        return {
            "100": {
                "$value": "rgba({200}, 0.125)",
                "$type": "color",
                "description": `Subtle semitransparent accent`
            },
            "200": {
                "$value": "rgba({200}, 0.33)",
                "$type": "color",
                "description": `Light semitransparent accent`
            },
            "300": {
                "$value": "{300}",
                "$type": "color",
                "description": `Non textual elements`
            },
            "400": {
                "$value": "{400}",
                "$type": "color",
                "description": `Base background color`
            },
            "500": {
                "$value": "{500}",
                "$type": "color",
                "description": `Text on light surface`
            },
            "600": {
                "$value": "{100}",
                "$type": "color",
                "description": `Text on dark surface`
            }
        };
    }
    if (theme == 'dark') {
        return {
            "100": {
                "$value": "rgba({200}, 0.20)",
                "$type": "color",
                "description": `Subtle semitransparent accent`
            },
            "200": {
                "$value": "rgba({200}, 0.45)",
                "$type": "color",
                "description": `Light semitransparent accent`
            },
            "300": {
                "$value": "{300}",
                "$type": "color",
                "description": `Non textual elements`
            },
            "400": {
                "$value": "{400}",
                "$type": "color",
                "description": `Base background color`
            },
            "500": {
                "$value": "{100}",
                "$type": "color",
                "description": `Text on light surface`
            },
            "600": {
                "$value": "{100}",
                "$type": "color",
                "description": `Text on dark surface`
            }
        };
    }
    throw new Error(`Theme: ${theme} is invalid`);
}
function getColorParams(theme, params) {
    let colorParams = {
        saturation: params.accentSaturation,
        minLuminance: params.accentMinLuminance,
        midLuminance: params.accentMidLuminance,
        maxLuminance: params.accentMaxLuminance,
    };
    if (theme == 'dark') {
        colorParams.saturation = params.accentSaturation * 0.85;
        // colorParams.maxLuminance = params.accentMaxLuminance * 0.85;
    }
    return colorParams;
}
function generateSystemAccentPalette(theme, params) {
    const { saturation, minLuminance, midLuminance, maxLuminance } = getColorParams(theme, params);
    let accents = {
        red: getShadesTemplate(theme, 'red'),
        amber: getShadesTemplate(theme, 'amber'),
        brown: getShadesTemplate(theme, 'brown'),
        green: getShadesTemplate(theme, 'green'),
        teal: getShadesTemplate(theme, 'teal'),
        blue: getShadesTemplate(theme, 'blue'),
        indigo: getShadesTemplate(theme, 'indigo'),
        violet: getShadesTemplate(theme, 'violet'),
        purple: getShadesTemplate(theme, 'purple'),
        pink: getShadesTemplate(theme, 'pink')
    };
    for (const [name, scale] of Object.entries(accents)) {
        const hue = params[name];
        const shades = getGlobalAccent(hue, saturation, minLuminance, midLuminance, maxLuminance);
        accents[name] = getThemeScale(scale, shades);
    }
    return accents;
}
function generateGlobalAccentPalette(theme, params) {
    const { saturation, minLuminance, midLuminance, maxLuminance } = getColorParams(theme, params);
    let accents = {};
    _defaults__WEBPACK_IMPORTED_MODULE_2__.systemAccentList.forEach(name => {
        const hue = params[name];
        accents[name] = getGlobalAccent(hue, saturation, minLuminance, midLuminance, maxLuminance);
    });
    return accents;
}
function getGlobalAccent(hue, saturation, minLuminance, midLiminance, maxLuminance, steps = 7) {
    const range = getRangeOfThree({
        hue,
        saturation,
        minLuminance,
        midLiminance,
        maxLuminance
    });
    const shades = getScale(range, steps);
    return shades;
}
function getThemeScale(input, dictionary) {
    let output = {};
    Object.entries(input).forEach(([shadeNumber, token]) => {
        token.$value = (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_1__.parseReferenceGlobal)(token.$value, dictionary);
        output[shadeNumber] = token;
    });
    return output;
}
/*
    colors: getRangeOfThree()
*/
function getScale(colors, count = 9) {
    let tokens = {};
    // chroma scale returns array of hex values
    const scale = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().scale(colors).colors(count, 'hex');
    scale.forEach((color, index) => {
        tokens[`${index + 1}00`] = {
            $value: color,
            $type: 'color',
            private: true
        };
    });
    return tokens;
}
function getRangeOfThree({ hue, saturation, minLuminance = 0.1, midLiminance = 0.18, maxLuminance = 0.29 }) {
    let color1 = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl([hue * 0.96, saturation * 0.95, 0.5])
        .luminance(maxLuminance);
    // this one always 4.5 : 1 contrast ratio
    let color2 = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl([hue, saturation * 1, 0.5])
        .luminance(midLiminance);
    let color3 = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl([hue * 1.04, saturation * 0.95, 0.5])
        .luminance(minLuminance);
    return [color1, color2, color3];
}



/***/ }),

/***/ "./src/color-generators/neutrals-palette-generator.ts":
/*!************************************************************!*\
  !*** ./src/color-generators/neutrals-palette-generator.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateNeutrals: () => (/* binding */ generateNeutrals),
/* harmony export */   renderNeutrals: () => (/* binding */ renderNeutrals)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swatches_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swatches-generator */ "./src/color-generators/swatches-generator.ts");


function getSaturationModifier(lightness) {
    // visual representation
    // https://www.desmos.com/calculator/02ufrfsuzy
    const offset = 50; // ligthness range is [0, 100], for saturation we need to offset the curve to make [-50, 50] range 
    const magnitude = 70; // sets how much to modify, higher values outputs smaller modifier
    const saturationModifier = 1 + (Math.pow(lightness - offset, 2) / magnitude - Math.pow(offset, 2) / magnitude) / 100;
    return saturationModifier;
}
function generateNeutrals(params) {
    const { hue = 200, saturation = 0.1, min = 4, max = 100, distance } = params || {};
    let tokens = {};
    let value = min;
    while (value <= max) {
        const sMod = 1 / Math.pow(1.3, (max - value) / 100);
        const color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl(hue, saturation * getSaturationModifier(value), value / 100);
        tokens[`grey-${value}`] = {
            '$value': color.hex(),
            '$type': 'color',
            'private': true
        };
        value++;
    }
    tokens["grey-100"] = {
        "$value": "#FFFFFF",
        '$type': 'color',
        'private': true
    };
    return tokens;
}
function renderNeutrals(colors, name) {
    const existingNode = figma.currentPage.findChild((node) => node.name.startsWith('Global Neutrals'));
    existingNode === null || existingNode === void 0 ? void 0 : existingNode.remove();
    let frame = figma.createFrame();
    frame.layoutMode = 'HORIZONTAL';
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.itemSpacing = 0;
    frame.name = name || 'Global Neutrals';
    frame.x = 0;
    frame.y = -156;
    for (const [name, color] of Object.entries(colors)) {
        (0,_swatches_generator__WEBPACK_IMPORTED_MODULE_1__.renderColor)(frame, name, color, colors);
    }
    return frame;
}


/***/ }),

/***/ "./src/color-generators/render-accents.ts":
/*!************************************************!*\
  !*** ./src/color-generators/render-accents.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAccents: () => (/* binding */ renderAccents)
/* harmony export */ });
/* harmony import */ var _swatches_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swatches-generator */ "./src/color-generators/swatches-generator.ts");

function renderAccents(colors, name) {
    const existingNode = figma.currentPage.findChild((node) => node.name == (name || 'Accent Colours'));
    existingNode === null || existingNode === void 0 ? void 0 : existingNode.remove();
    let frame = figma.createFrame();
    frame.layoutMode = 'HORIZONTAL';
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.itemSpacing = 16;
    frame.fills = [];
    frame.name = name || 'Accent Colours';
    frame.x = 0;
    frame.y = 0;
    for (const [name, shades] of Object.entries(colors)) {
        (0,_swatches_generator__WEBPACK_IMPORTED_MODULE_0__.renderShades)(frame, name, shades, colors);
    }
    return frame;
}


/***/ }),

/***/ "./src/color-generators/swatches-generator.ts":
/*!****************************************************!*\
  !*** ./src/color-generators/swatches-generator.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outputHSL: () => (/* binding */ outputHSL),
/* harmony export */   renderColor: () => (/* binding */ renderColor),
/* harmony export */   renderShades: () => (/* binding */ renderShades)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/round-two-digits */ "./src/utils/round-two-digits.ts");
/* harmony import */ var _utils_figma_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/figma-colors */ "./src/utils/figma-colors.ts");



function getBoundVariables(node) {
    const boundVariables = Object.entries(node.boundVariables);
    for (const [propName, propValue] of boundVariables) {
        const isArray = Array.isArray(propValue);
        if (isArray) {
            propValue.forEach((alias, i) => {
                processBoundVariable(figma.variables.getVariableById(alias.id));
            });
        }
        else {
            let varId = propValue.id;
            if (typeof varId != 'string') { // it is 
                varId = varId.id;
            }
            processBoundVariable(figma.variables.getVariableById(varId));
        }
    }
}
function processBoundVariable(variable) {
}
function renderShades(parentNode, name, shades, colors) {
    let frame = figma.createFrame();
    frame.resizeWithoutConstraints(320, frame.height);
    frame.layoutMode = "VERTICAL";
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.name = name;
    frame.fills = [];
    getBoundVariables(frame);
    for (const [shadeName, color] of Object.entries(shades)) {
        renderColor(frame, `accent/${name}/${shadeName}`, color, colors);
    }
    parentNode.appendChild(frame);
    return parentNode;
}
function renderColor(parentNode, name, color, colors) {
    let frame = figma.createFrame();
    frame.layoutMode = "VERTICAL";
    frame.layoutAlign = 'STRETCH';
    frame.itemSpacing = 4;
    frame.name = name;
    frame.verticalPadding = 16;
    frame.horizontalPadding = 20;
    const { r, g, b, a } = (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_2__.parseColorToken)(color, colors);
    const chromaColor = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().gl(r, g, b, a);
    frame.fills = [{ type: 'SOLID', color: { r, g, b }, opacity: a }];
    const opaqueColor = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().gl(r, g, b, 1);
    const mixedColor = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().mix(opaqueColor, "white", 1 - a);
    console.log(name, mixedColor.rgba());
    let contrast = [
        chroma_js__WEBPACK_IMPORTED_MODULE_0___default().contrast("white", mixedColor),
        chroma_js__WEBPACK_IMPORTED_MODULE_0___default().contrast(chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl([0, 0, 0.22]), mixedColor)
    ];
    let nameRow = getRow(frame, contrast[0] > 2.5);
    let contrastWhiteRow = getRow(frame, contrast[0] > 2.5);
    let contrastBlackRow = getRow(frame, contrast[0] > 2.5);
    let hslRow = getRow(frame, contrast[0] > 2.5);
    let luminanceRow = getRow(frame, contrast[0] > 2.5);
    // await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    nameRow.root.name = "nameRow";
    contrastWhiteRow.root.name = "contrastWhiteRow";
    contrastBlackRow.root.name = "contrastBlackRow";
    hslRow.root.name = "hslRow";
    luminanceRow.root.name = "luminanceRow";
    contrastWhiteRow.labelNode.characters = "vs white";
    contrastWhiteRow.valueNode.characters = `${(0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(contrast[0])}`;
    contrastBlackRow.labelNode.characters = "vs black";
    contrastBlackRow.valueNode.characters = `${(0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(contrast[1])}`;
    nameRow.labelNode.characters = `{global.${name.replace(/\//g, ".")}}`;
    nameRow.valueNode.characters = ` `;
    hslRow.labelNode.characters = "hsl";
    hslRow.valueNode.characters = `${outputHSL(chromaColor).join(" ")}`;
    luminanceRow.labelNode.characters = "luminance";
    luminanceRow.valueNode.characters = `${Math.round((0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(chromaColor.luminance()) * 100)}%`;
    parentNode.appendChild(frame);
    frame.resize(240, frame.height);
    return parentNode;
}
function getRow(parentNode, isWhite) {
    const textNode = figma.createText();
    const frame = figma.createFrame();
    frame.name = "row";
    frame.layoutMode = "HORIZONTAL";
    frame.layoutAlign = "STRETCH";
    frame.primaryAxisSizingMode = "FIXED";
    frame.primaryAxisAlignItems = "SPACE_BETWEEN";
    frame.counterAxisSizingMode = "AUTO";
    frame.fills = [];
    textNode.name = "label";
    const valueLabel = textNode.clone();
    valueLabel.name = "value-label";
    frame.appendChild(textNode);
    frame.appendChild(valueLabel);
    const color = isWhite ? {
        r: 1, g: 1, b: 1
    } : {
        r: 0, g: 0, b: 0
    };
    textNode.fills = [{ type: 'SOLID', color, opacity: 0.8 }];
    valueLabel.fills = [{ type: 'SOLID', color }];
    parentNode.appendChild(frame);
    return {
        labelNode: textNode, valueNode: valueLabel, root: frame
    };
}
function outputHSL(chromaColor) {
    const [h, s, l] = chromaColor.hsl();
    return [`${Math.round(h) || 0}deg`, `${Math.round((0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(s) * 100)}%`, `${Math.round((0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(l) * 100)}%`];
}


/***/ }),

/***/ "./src/color-tokens.ts":
/*!*****************************!*\
  !*** ./src/color-tokens.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBrandColors: () => (/* binding */ getBrandColors),
/* harmony export */   getComponentColors: () => (/* binding */ getComponentColors),
/* harmony export */   getGlobalNeutrals: () => (/* binding */ getGlobalNeutrals),
/* harmony export */   getSemanticAccentSettings: () => (/* binding */ getSemanticAccentSettings),
/* harmony export */   getThemeColors: () => (/* binding */ getThemeColors)
/* harmony export */ });
/* harmony import */ var _tokens_colors_components_component_tokens_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/colors/components/component-tokens.json */ "./src/tokens/colors/components/component-tokens.json");
/* harmony import */ var _tokens_colors_system_light_common_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/colors/system/light-common.json */ "./src/tokens/colors/system/light-common.json");
/* harmony import */ var _tokens_colors_system_light_2_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/colors/system/light-2.json */ "./src/tokens/colors/system/light-2.json");
/* harmony import */ var _tokens_colors_system_light_3_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/colors/system/light-3.json */ "./src/tokens/colors/system/light-3.json");
/* harmony import */ var _tokens_colors_system_light_4_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokens/colors/system/light-4.json */ "./src/tokens/colors/system/light-4.json");
/* harmony import */ var _tokens_colors_system_dark_common_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens/colors/system/dark-common.json */ "./src/tokens/colors/system/dark-common.json");
/* harmony import */ var _tokens_colors_system_dark_elevated_2_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokens/colors/system/dark-elevated-2.json */ "./src/tokens/colors/system/dark-elevated-2.json");
/* harmony import */ var _tokens_colors_system_dark_elevated_3_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokens/colors/system/dark-elevated-3.json */ "./src/tokens/colors/system/dark-elevated-3.json");
/* harmony import */ var _tokens_colors_system_dark_elevated_4_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokens/colors/system/dark-elevated-4.json */ "./src/tokens/colors/system/dark-elevated-4.json");
/* harmony import */ var _tokens_colors_system_dark_base_2_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tokens/colors/system/dark-base-2.json */ "./src/tokens/colors/system/dark-base-2.json");
/* harmony import */ var _tokens_colors_system_dark_base_3_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tokens/colors/system/dark-base-3.json */ "./src/tokens/colors/system/dark-base-3.json");
/* harmony import */ var _tokens_colors_system_dark_base_4_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tokens/colors/system/dark-base-4.json */ "./src/tokens/colors/system/dark-base-4.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");
/* harmony import */ var _color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./color-generators/accent-palette-generator */ "./src/color-generators/accent-palette-generator.ts");
/* harmony import */ var _color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./color-generators/neutrals-palette-generator */ "./src/color-generators/neutrals-palette-generator.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
















let GlobalNeutrals;
function getSemanticAccentSettings() {
    return _defaults__WEBPACK_IMPORTED_MODULE_15__.defaultSemanticAccents;
}
function getGlobalNeutrals() {
    return GlobalNeutrals;
}
function getComponentColors() {
    return (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_components_component_tokens_json__WEBPACK_IMPORTED_MODULE_0__);
}
function getBrandColors(name, accentShades, flat) {
    const palette = {
        primary: generateSemanticShades(name, accentShades)
    };
    return flat ? (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(palette) : palette;
}
function getThemeColors(theme, formData) {
    let params = Object.assign({}, formData);
    GlobalNeutrals = (0,_color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__.generateNeutrals)({
        hue: params.hue,
        saturation: params.saturation,
        distance: params.distance
    });
    const semanticAccents = {
        primary: params.primary,
        info: params.info,
        success: params.success,
        warning: params.warning,
        danger: params.danger,
    };
    let lightAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.generateSystemAccentPalette)('light', params);
    let darkAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.generateSystemAccentPalette)('dark', params);
    const lightSemanticTokens = generateSemanticPalette(semanticAccents, lightAccentTokens);
    const darkSemanticTokens = generateSemanticPalette(semanticAccents, darkAccentTokens);
    const lightCommonTokens = Object.assign(Object.assign({ accent: lightAccentTokens }, _tokens_colors_system_light_common_json__WEBPACK_IMPORTED_MODULE_1__), lightSemanticTokens);
    const darkCommonTokens = Object.assign(Object.assign({ accent: darkAccentTokens }, _tokens_colors_system_dark_common_json__WEBPACK_IMPORTED_MODULE_5__), darkSemanticTokens);
    let commonColors = {};
    let themeColors = {};
    if (theme === "lightBase") {
        commonColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(lightCommonTokens);
        if (params.distance === 0.02) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_light_2_json__WEBPACK_IMPORTED_MODULE_2__);
        }
        if (params.distance === 0.03) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_light_3_json__WEBPACK_IMPORTED_MODULE_3__);
        }
        if (params.distance === 0.04) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_light_4_json__WEBPACK_IMPORTED_MODULE_4__);
        }
    }
    if (theme === "darkElevated") {
        commonColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(darkCommonTokens);
        if (params.distance === 0.02) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_elevated_2_json__WEBPACK_IMPORTED_MODULE_6__);
        }
        if (params.distance === 0.03) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_elevated_3_json__WEBPACK_IMPORTED_MODULE_7__);
        }
        if (params.distance === 0.04) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_elevated_4_json__WEBPACK_IMPORTED_MODULE_8__);
        }
    }
    if (theme === "darkBase") {
        commonColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(darkCommonTokens);
        if (params.distance === 0.02) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_base_2_json__WEBPACK_IMPORTED_MODULE_9__);
        }
        if (params.distance === 0.03) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_base_3_json__WEBPACK_IMPORTED_MODULE_10__);
        }
        if (params.distance === 0.04) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_base_4_json__WEBPACK_IMPORTED_MODULE_11__);
        }
    }
    return Object.assign(Object.assign({}, commonColors), themeColors);
}
function generateSemanticShades(aliasName, accentShades) {
    let output = {};
    for (var a = 1, b = 7; a < b; a++) {
        output[`${a}00`] = {
            "$value": `{accent.${aliasName}.${a}00}`,
            "$type": "color",
            "description": accentShades[`${a}00`].description
        };
    }
    return output;
}
function generateSemanticPalette(accents, palette) {
    let result = {};
    Object.entries(accents).forEach(([name, alias]) => {
        result[name] = generateSemanticShades(alias, palette[alias]);
    });
    return result;
}


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
/* harmony export */   themes: () => (/* binding */ themes),
/* harmony export */   typographySizeName: () => (/* binding */ typographySizeName),
/* harmony export */   typographySizeValues: () => (/* binding */ typographySizeValues)
/* harmony export */ });
const themes = [
    'lightBase',
    'darkBase',
    'darkElevated'
];
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
    "blue": 210,
    "indigo": 240,
    "violet": 260,
    "purple": 280,
    "pink": 340
};
const defaultSettings = {
    type: 'IMPORT',
    theme: 'light',
    hue: 190,
    saturation: 0.2,
    distance: 0.02,
    primary: 'blue',
    info: 'teal',
    success: 'green',
    warning: 'amber',
    danger: 'red',
    red: 4,
    amber: 25,
    brown: 33,
    green: 150,
    teal: 185,
    blue: 210,
    indigo: 240,
    violet: 260,
    purple: 280,
    pink: 340,
    baseFontSize: 'base',
    typeScale: 'minorThird',
    createStyles: true,
    accentSaturation: 0.9,
    accentMaxLuminance: 0.45,
    accentMidLuminance: 0.18,
    accentMinLuminance: 0.10,
    radii: 'base',
    spacing: 'base',
    singleCollection: false
};
const defaultSemanticAccents = {
    primary: 'blue',
    info: 'teal',
    success: 'green',
    warning: 'amber',
    danger: 'red'
};


/***/ }),

/***/ "./src/effect-tokens.ts":
/*!******************************!*\
  !*** ./src/effect-tokens.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elevation: () => (/* binding */ elevation),
/* harmony export */   getElevationTokens: () => (/* binding */ getElevationTokens)
/* harmony export */ });
/* harmony import */ var _tokens_effects_elevation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/effects/elevation.json */ "./src/tokens/effects/elevation.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");


const elevation = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_1__.flattenObject)(_tokens_effects_elevation_json__WEBPACK_IMPORTED_MODULE_0__);
function getElevationTokens() {
    return _tokens_effects_elevation_json__WEBPACK_IMPORTED_MODULE_0__;
}


/***/ }),

/***/ "./src/fix-layers.ts":
/*!***************************!*\
  !*** ./src/fix-layers.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processComponents: () => (/* binding */ processComponents)
/* harmony export */ });
/* harmony import */ var _utils_delay_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/delay-async */ "./src/utils/delay-async.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function processComponents() {
    return __awaiter(this, void 0, void 0, function* () {
        figma.skipInvisibleInstanceChildren = true;
        let pageComponents = [];
        debugger;
        if (figma.currentPage.selection.length) {
            figma.currentPage.selection.forEach((node) => {
                if (node.type == 'COMPONENT') {
                    pageComponents = pageComponents.concat(node);
                }
                else if (node.findAllWithCriteria) {
                    const components = node.findAllWithCriteria({ types: ['COMPONENT'] });
                    pageComponents = pageComponents.concat(components);
                }
            });
        }
        else {
            pageComponents = figma.currentPage.findAllWithCriteria({ types: ['COMPONENT'] });
        }
        const size = pageComponents.length;
        let count = 0;
        while (pageComponents.length) {
            const componentFrame = pageComponents.shift();
            if (componentFrame.name == 'state=:focus, style=default, selected=false') {
                debugger;
            }
            figma.skipInvisibleInstanceChildren = false;
            const children = componentFrame.findAll((n) => {
                if (n.layoutPositioning == 'ABSOLUTE' && !n.constraints)
                    debugger;
                return n.layoutPositioning == 'ABSOLUTE'
                    && n.width > 0
                    && n.height > 0
                    && n.constraints.horizontal === 'STRETCH'
                    && n.constraints.vertical === 'STRETCH';
            });
            yield fixLayers(children, componentFrame);
            console.log(`%cComponent ${count++} / ${size}`, `color: #0773DF; font-weight: bold;`);
        }
    });
}
function fixLayers(nodes, component) {
    return __awaiter(this, void 0, void 0, function* () {
        let node, parent, offsetX, offsetY, height, width;
        let updated = 0, skipped = 0, failed = 0;
        console.log(`Working on ${component.name}`);
        try {
            while (nodes.length) {
                console.log(`Remaining nodes: ${nodes.length}`);
                node = nodes.shift();
                if (checkInstance(node, component)) {
                    skipped++;
                    continue;
                }
                parent = node.parent;
                offsetX = node.x;
                offsetY = node.y;
                height = parent.height - 2 * offsetY;
                width = parent.width - 2 * offsetX;
                node.resize(width * 0.8, height * 0.8);
                yield (0,_utils_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(10);
                node.resize(width, height);
                updated++;
                yield (0,_utils_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(50);
            }
            console.log(`Resized: ${updated}, Skipped: ${skipped}`);
        }
        catch (e) {
            failed++;
            debugger;
        }
    });
}
function checkInstance(targetFrame, componentFrame) {
    let node = targetFrame.parent;
    while (node != componentFrame) {
        if (node.type == 'INSTANCE') {
            return true;
        }
        node = node.parent;
    }
    return false;
}


/***/ }),

/***/ "./src/opacity-tokens.ts":
/*!*******************************!*\
  !*** ./src/opacity-tokens.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   opacity: () => (/* binding */ opacity)
/* harmony export */ });
/* harmony import */ var _tokens_opacity_opacity_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/opacity/opacity.json */ "./src/tokens/opacity/opacity.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");


const opacity = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_1__.flattenObject)(_tokens_opacity_opacity_json__WEBPACK_IMPORTED_MODULE_0__);


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

/***/ "./src/sizing-tokens.ts":
/*!******************************!*\
  !*** ./src/sizing-tokens.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   touch: () => (/* binding */ touch)
/* harmony export */ });
/* harmony import */ var _tokens_sizing_base_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/sizing/base.json */ "./src/tokens/sizing/base.json");
/* harmony import */ var _tokens_sizing_touch_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/sizing/touch.json */ "./src/tokens/sizing/touch.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");



const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_2__.flattenObject)(_tokens_sizing_base_json__WEBPACK_IMPORTED_MODULE_0__);
const touch = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_2__.flattenObject)(_tokens_sizing_touch_json__WEBPACK_IMPORTED_MODULE_1__);


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
/* harmony import */ var _tokens_typography_major_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/typography/major-third/typescale-base.json */ "./src/tokens/typography/major-third/typescale-base.json");
/* harmony import */ var _tokens_typography_major_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/typography/major-third/typescale-compact.json */ "./src/tokens/typography/major-third/typescale-compact.json");
/* harmony import */ var _tokens_typography_major_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokens/typography/major-third/typescale-large.json */ "./src/tokens/typography/major-third/typescale-large.json");
/* harmony import */ var _tokens_typography_minor_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens/typography/minor-third/typescale-base.json */ "./src/tokens/typography/minor-third/typescale-base.json");
/* harmony import */ var _tokens_typography_minor_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokens/typography/minor-third/typescale-compact.json */ "./src/tokens/typography/minor-third/typescale-compact.json");
/* harmony import */ var _tokens_typography_minor_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokens/typography/minor-third/typescale-large.json */ "./src/tokens/typography/minor-third/typescale-large.json");
/* harmony import */ var _tokens_typography_major_second_typescale_base_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokens/typography/major-second/typescale-base.json */ "./src/tokens/typography/major-second/typescale-base.json");
/* harmony import */ var _tokens_typography_major_second_typescale_compact_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tokens/typography/major-second/typescale-compact.json */ "./src/tokens/typography/major-second/typescale-compact.json");
/* harmony import */ var _tokens_typography_major_second_typescale_large_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tokens/typography/major-second/typescale-large.json */ "./src/tokens/typography/major-second/typescale-large.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");












const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_5__);
const compact = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_6__);
const large = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_7__);
const styles = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_styles_json__WEBPACK_IMPORTED_MODULE_0__);
const tokens = {
    majorThird: {
        base: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__),
        compact: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__),
        large: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__),
    },
    minorThird: {
        base: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_5__),
        compact: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_6__),
        large: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_7__),
    },
    majorSecond: {
        base: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_second_typescale_base_json__WEBPACK_IMPORTED_MODULE_8__),
        compact: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_second_typescale_compact_json__WEBPACK_IMPORTED_MODULE_9__),
        large: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_second_typescale_large_json__WEBPACK_IMPORTED_MODULE_10__),
    },
};
function getTypograohyTokens(size, scale = "minorThird") {
    let scaleTokens = tokens[scale][size];
    return Object.assign(Object.assign(Object.assign({}, (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__)), scaleTokens), styles);
}
function getFontDetails() {
    let names = [];
    const tokens = _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__;
    const family = _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__["font-family"].primary.$value;
    for (let [name, fontWeight] of Object.entries(_tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__["font-weight"])) {
        names.push({ family, style: fontWeight.$value });
    }
    return names;
}


/***/ }),

/***/ "./src/utils/clone.ts":
/*!****************************!*\
  !*** ./src/utils/clone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _clone: () => (/* binding */ _clone)
/* harmony export */ });
function _clone(val) {
    const type = typeof val;
    if (val === null) {
        return null;
    }
    else if (type === 'undefined' || type === 'number' ||
        type === 'string' || type === 'boolean') {
        return val;
    }
    else if (type === 'object') {
        if (val instanceof Array) {
            return val.map(x => _clone(x));
        }
        else if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        }
        else {
            let o = {};
            for (const key in val) {
                o[key] = _clone(val[key]);
            }
            return o;
        }
    }
    throw 'unknown';
}


/***/ }),

/***/ "./src/utils/delay-async.ts":
/*!**********************************!*\
  !*** ./src/utils/delay-async.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delayAsync: () => (/* binding */ delayAsync)
/* harmony export */ });
function delayAsync(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


/***/ }),

/***/ "./src/utils/export-style-templates.ts":
/*!*********************************************!*\
  !*** ./src/utils/export-style-templates.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportStyleTemplates: () => (/* binding */ exportStyleTemplates)
/* harmony export */ });
/* harmony import */ var _delay_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delay-async */ "./src/utils/delay-async.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;
function exportStyleTemplates() {
    return __awaiter(this, void 0, void 0, function* () {
        totalLayersCount = 0;
        reboundLayersCount = 0;
        skippedLayersCount = 0;
        let _nodes = [];
        figma.skipInvisibleInstanceChildren = false;
        if (figma.currentPage.selection.length == 0) {
            figma.notify("Select at least one layer and try again");
            return false;
        }
        figma.currentPage.selection.forEach((node) => {
            if (node.type == "COMPONENT") {
                _nodes.push(node);
                return;
            }
            if ('findAllWithCriteria' in node) {
                const componentNodes = node.findAllWithCriteria({ types: ["COMPONENT"] });
                _nodes = _nodes.concat(componentNodes);
            }
        });
        const containerFrame = createFrameNode();
        containerFrame.fills = [
            figma.variables.setBoundVariableForPaint({ type: "SOLID", color: { r: 1, g: 1, b: 1 } }, "color", figma.variables.getLocalVariables().find(n => n.name == 'fill/base/300'))
        ];
        containerFrame.layoutMode = 'VERTICAL';
        containerFrame.layoutSizingHorizontal = 'HUG';
        containerFrame.layoutSizingVertical = 'HUG';
        containerFrame.paddingBottom = 80;
        containerFrame.paddingLeft = 96;
        containerFrame.paddingRight = 96;
        containerFrame.paddingTop = 0;
        containerFrame.setBoundVariable('topLeftRadius', figma.variables.getLocalVariables().find(n => n.name == 'radii/xl2').id);
        containerFrame.setBoundVariable('topRightRadius', figma.variables.getLocalVariables().find(n => n.name == 'radii/xl2').id);
        containerFrame.setBoundVariable('bottomLeftRadius', figma.variables.getLocalVariables().find(n => n.name == 'radii/xl2').id);
        containerFrame.setBoundVariable('bottomRightRadius', figma.variables.getLocalVariables().find(n => n.name == 'radii/xl2').id);
        console.log(_nodes);
        const total = _nodes.length;
        totalLayersCount = total;
        while (_nodes.length) {
            const componentNode = _nodes.shift();
            // (70 - 44) / 70
            const percent = Math.round(((total - _nodes.length) / total) * 100);
            const msg = `${percent}% done. Working on layer ${total - _nodes.length} out of ${total}`;
            console.log(msg);
            containerFrame.appendChild(checkNode(componentNode));
            yield (0,_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(10);
        }
        figma.currentPage.selection = [containerFrame];
        return total;
    });
}
function checkNode(node) {
    let parent;
    if (node.parent.type == 'COMPONENT_SET') {
        parent = getFrame(node.parent);
    }
    const frame = processComponentNode(node);
    if (parent) {
        parent.appendChild(frame);
        frame.x = node.x;
        frame.y = node.y;
        return parent;
    }
    return frame;
}
function processComponentNode(node) {
    const instance = node.createInstance();
    const frame = instance.detachInstance();
    frame.name = node.name;
    const instances = frame.findAllWithCriteria({ types: ['INSTANCE'] });
    instances.forEach(i => {
        i.mainComponent.name;
    });
    return frame;
}
const componentSetFramesCache = new Map();
function getFrame(cmpSet) {
    const chachedFrame = componentSetFramesCache.get(cmpSet.name);
    if (chachedFrame) {
        return chachedFrame;
    }
    const frame = createFrameNode();
    frame.name = cmpSet.name;
    frame.resize(cmpSet.width, cmpSet.height);
    componentSetFramesCache.set(cmpSet.name, frame);
    figma.currentPage.selection = [frame];
    return frame;
}
function createFrameNode() {
    const frame = figma.createFrame();
    frame.fills = [
        figma.variables.setBoundVariableForPaint({ type: "SOLID", color: { r: 1, g: 1, b: 1 } }, "color", figma.variables.getLocalVariables().find(n => n.name == 'card/bg/primary'))
    ];
    frame.strokes = [
        figma.variables.setBoundVariableForPaint({ type: "SOLID", color: { r: 1, g: 1, b: 1 } }, "color", figma.variables.getLocalVariables().find(n => n.name == 'card/border/outer'))
    ];
    frame.setBoundVariable('topLeftRadius', figma.variables.getLocalVariables().find(n => n.name == 'radii/xl').id);
    frame.setBoundVariable('topRightRadius', figma.variables.getLocalVariables().find(n => n.name == 'radii/xl').id);
    frame.setBoundVariable('bottomLeftRadius', figma.variables.getLocalVariables().find(n => n.name == 'radii/xl').id);
    frame.setBoundVariable('bottomRightRadius', figma.variables.getLocalVariables().find(n => n.name == 'radii/xl').id);
    frame.x = -10000;
    frame.y = -10000;
    return frame;
}


/***/ }),

/***/ "./src/utils/figma-colors.ts":
/*!***********************************!*\
  !*** ./src/utils/figma-colors.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFigmaColorToRgb: () => (/* binding */ convertFigmaColorToRgb),
/* harmony export */   parseColorToken: () => (/* binding */ parseColorToken),
/* harmony export */   parseColorValue: () => (/* binding */ parseColorValue)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _token_references__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-references */ "./src/utils/token-references.ts");


const hexColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
function convertFigmaColorToRgb(input, format) {
    const { r, g, b, a } = input;
    //figma uses float 0...1 vs standard 0...255
    const figmaColorTransformed = {
        r: input.r * 255,
        g: input.g * 255,
        b: input.b * 255,
        a: input.a
    };
    let color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().gl(r, g, b, a);
    debugger;
    switch (format) {
        case 'hex': {
            return color.hex();
        }
        case 'hsl': {
            return color.css('hsl');
        }
        default: {
            return color.css();
        }
    }
}
function parseColorValue(input, adjustments) {
    let color;
    try {
        if (input.startsWith('rgb')) {
            const rgbValues = input.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
            if (hexColorRegex.test(rgbValues[0])) {
                color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(rgbValues[0]); // hexToFigmaRGB(rgbValues[0]);
                const alpha = parseFloat(rgbValues[1]);
                color = color.alpha(alpha);
            }
            else {
                color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(input);
            }
        }
        else {
            color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(input);
        }
    }
    catch (e) {
        console.error(e);
        debugger;
        return null;
    }
    if (adjustments) {
        if (adjustments.h) {
            color = color.set('hsl.h', `${adjustments.h}`);
        }
        if (adjustments.s) {
            color = color.set('hsl.s', `${adjustments.s}`);
        }
        if (adjustments.l) {
            color = color.set('hsl.l', `${adjustments.l}`);
        }
        if (adjustments.a) {
            color = color.set('hsl.a', `${adjustments.a}`);
        }
    }
    const [r, g, b, a] = color.gl();
    return {
        gl: { r, g, b, a },
        rgb: color.css(),
        hsl: color.css('hsl'),
        hex: color.hex()
    };
}
function parseColorToken(token, dictionary, output = 'gl') {
    let color = token.$value;
    color = (0,_token_references__WEBPACK_IMPORTED_MODULE_1__.parseReferenceGlobal)(color.trim(), dictionary);
    const result = parseColorValue(color, token.adjustments);
    if (result) {
        return result[output];
    }
    else {
        debugger;
        throw new Error("Invalid color format");
    }
}


/***/ }),

/***/ "./src/utils/figma-effect-styles.ts":
/*!******************************************!*\
  !*** ./src/utils/figma-effect-styles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importEffectStyles: () => (/* binding */ importEffectStyles)
/* harmony export */ });
/* harmony import */ var _token_references__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-references */ "./src/utils/token-references.ts");

/*
    This method reads shadow color values directly from Figma Variables
*/
function importEffectStyles(tokens) {
    Object.entries(tokens).forEach(([name, tokenData]) => {
        let token = tokenData;
        if (token.$type == 'boxShadow') {
            let figmaStyle = getStyleByName(name) || figma.createEffectStyle();
            const values = token.$value;
            const effects = values.map(value => {
                const figmaVariable = (0,_token_references__WEBPACK_IMPORTED_MODULE_0__.findVariableByReferences)(value.color);
                const collectionID = figmaVariable.variableCollectionId;
                const collection = figma.variables.getVariableCollectionById(collectionID);
                const defaultMode = collection.modes[0].modeId;
                const figmaEffect = Object.assign({}, value, {
                    color: figmaVariable.valuesByMode[defaultMode]
                });
                const effect = convertEffectStyleToFigma(figmaEffect);
                const effectVar = figma.variables.setBoundVariableForEffect(effect, 'color', figmaVariable);
                effectVar.spread = effect.spread;
                return effectVar;
            });
            figmaStyle.name = name;
            figmaStyle.effects = effects;
            figmaStyle.description = token.description || figmaStyle.description;
            // figmaStyle.documentationLinks = token.documentationLink ? [token.documentationLink] : figmaStyle.documentationLinks;
        }
    });
}
function getLocalStyles() {
    return figma.getLocalEffectStyles();
}
;
function getStyleByName(name) {
    const stylesByType = getLocalStyles();
    const match = stylesByType.find((style) => style.name === name);
    if (match) {
        return match;
    }
    else {
        return null;
    }
}
;
function parseBoolean(val) {
    return val !== "false";
}
function convertEffectStyleToFigma(value) {
    return {
        type: "DROP_SHADOW",
        color: value.color,
        offset: {
            x: parseFloat(value.x),
            y: parseFloat(value.y)
        },
        radius: parseFloat(value.blur),
        spread: parseFloat(value.spread),
        visible: true,
        blendMode: "NORMAL",
        showShadowBehindNode: parseBoolean(value.showShadowBehindNode)
    };
}


/***/ }),

/***/ "./src/utils/figma-text-styles.ts":
/*!****************************************!*\
  !*** ./src/utils/figma-text-styles.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTextStyleToFigma: () => (/* binding */ convertTextStyleToFigma),
/* harmony export */   importTextStyles: () => (/* binding */ importTextStyles)
/* harmony export */ });
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ "./src/utils/clone.ts");
/* harmony import */ var _token_references__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-references */ "./src/utils/token-references.ts");


function importTextStyles(tokens) {
    Object.entries(tokens).forEach(([name, token]) => {
        if (token.$type == 'typography') {
            let textStyle = getStyleByName(name);
            let newStyle = false;
            if (!textStyle) {
                textStyle = figma.createTextStyle();
                newStyle = true;
            }
            const resolved = parseValues(token.$value, tokens);
            const normalized = convertTextStyleToFigma(name, resolved);
            if (!newStyle) {
                normalized.fontName = (0,_clone__WEBPACK_IMPORTED_MODULE_0__._clone)(textStyle.fontName);
            }
            Object.keys(normalized).forEach(key => {
                textStyle[key] = normalized[key];
            });
        }
    });
}
function parseValues(value, dictionary) {
    let output = {};
    Object.entries(value).forEach(([key, value]) => {
        const resolvedValue = (0,_token_references__WEBPACK_IMPORTED_MODULE_1__.parseReferenceGlobal)(value, dictionary);
        output[key] = resolvedValue;
    });
    return output;
}
function getLocalStyles() {
    return figma.getLocalTextStyles();
}
;
function getStyleByName(name) {
    const stylesByType = getLocalStyles();
    const match = stylesByType.find((style) => style.name === name);
    if (match) {
        return match;
    }
    else {
        return null;
    }
}
;
function convertTextCaseToFigma(value) {
    switch (value.toLowerCase()) {
        case 'uppercase':
        case 'upper':
            return 'UPPER';
        case 'lowercase':
        case 'lower':
            return 'LOWER';
        case 'capitalize':
        case 'title':
            return 'TITLE';
        case 'small-caps':
        case 'small_caps':
            return 'SMALL_CAPS';
        case 'all-small-caps':
        case 'small_caps_forced':
            return 'SMALL_CAPS_FORCED';
        default:
            return 'ORIGINAL';
    }
}
function convertTextDecorationToFigma(value) {
    switch (value.toLowerCase()) {
        case 'underline':
            return 'UNDERLINE';
        case 'line-through':
        case 'strikethrough':
            return 'STRIKETHROUGH';
        default:
            return 'NONE';
    }
}
function convertTextStyleToFigma(name, values) {
    let textStyle = {
        'name': name,
        'fontSize': parseFloat(values.fontSize),
        'textDecoration': convertTextDecorationToFigma(values.textDecoration),
        'fontName': {
            family: values.fontFamily,
            style: values.fontWeight
        },
        'letterSpacing': {
            unit: values.letterSpacing.includes('%') ? "PERCENT" : "PIXELS",
            value: parseInt(values.letterSpacing)
        },
        'lineHeight': {
            unit: values.lineHeight.includes('%') ? "PERCENT" : "PIXELS",
            value: parseFloat(values.lineHeight)
        },
        leadingTrim: "NONE",
        paragraphIndent: 0,
        'paragraphSpacing': parseInt(values.paragraphSpacing),
        listSpacing: 0,
        hangingPunctuation: false,
        hangingList: false,
        'textCase': convertTextCaseToFigma(values.textCase)
    };
    return textStyle;
}


/***/ }),

/***/ "./src/utils/figma-variables.ts":
/*!**************************************!*\
  !*** ./src/utils/figma-variables.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findFigmaVariableByName: () => (/* binding */ findFigmaVariableByName),
/* harmony export */   getFigmaCollection: () => (/* binding */ getFigmaCollection),
/* harmony export */   resolveVariableType: () => (/* binding */ resolveVariableType),
/* harmony export */   setFigmaVariable: () => (/* binding */ setFigmaVariable)
/* harmony export */ });
function findVariableInCollection(variableName, collectionName) {
    const figmaCollections = figma.variables.getLocalVariableCollections();
    const collection = figmaCollections.find(collection => collection.name === collectionName);
    let figmaVirable;
    if (collection) {
        collection.variableIds.forEach(id => {
            const figmaVariableInColleciton = figma.variables.getVariableById(id);
            const match = figmaVariableInColleciton.name === variableName;
            if (match) {
                figmaVirable = figmaVariableInColleciton;
                return true;
            }
            return false;
        });
    }
    return figmaVirable;
}
function findFigmaVariableByName(variableName, collectionName) {
    if (collectionName) {
        return findVariableInCollection(variableName, collectionName);
    }
    else {
        const figmaVariables = figma.variables.getLocalVariables();
        return figmaVariables.find(variable => variable.name === variableName);
    }
}
function getFigmaCollection(name) {
    const figmaCollections = figma.variables.getLocalVariableCollections();
    let isNew = false;
    let collection = figmaCollections.find(collection => collection.name === name);
    if (!collection) {
        isNew = true;
        collection = figma.variables.createVariableCollection(name);
    }
    return { collection, isNew };
}
function resolveVariableType(typeName) {
    switch (typeName) {
        case 'color': return 'COLOR';
        case 'boolean': return 'BOOLEAN';
        case 'number': return 'FLOAT';
        default: return 'STRING';
    }
}
function setFigmaVariable(collection, modeId, type, variableName, value = null, scopes = ['ALL_SCOPES'], description = null) {
    let figmaVariable = findFigmaVariableByName(variableName, collection.name);
    if (!figmaVariable) {
        try {
            figmaVariable = figma.variables.createVariable(variableName, collection.id, type);
        }
        catch (e) {
            debugger;
        }
    }
    if (type != figmaVariable.resolvedType) {
        debugger;
    }
    if (value) {
        figmaVariable.setValueForMode(modeId, value);
    }
    figmaVariable.scopes = scopes;
    if (description != null) {
        figmaVariable.description = description;
    }
    return figmaVariable;
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

/***/ "./src/utils/import-style-templates.ts":
/*!*********************************************!*\
  !*** ./src/utils/import-style-templates.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importStyleTemplates: () => (/* binding */ importStyleTemplates)
/* harmony export */ });
/* harmony import */ var _delay_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delay-async */ "./src/utils/delay-async.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/utils/clone.ts");
/* harmony import */ var _swap_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap-variables */ "./src/utils/swap-variables.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;
//cache all component sets to speed up the process
let componentSets;
function getComponentSets() {
    if (!componentSets) {
        console.log(`First time look up, running slow...`);
        figma.skipInvisibleInstanceChildren = true;
        componentSets = figma.currentPage.findAllWithCriteria({
            types: ['COMPONENT', 'COMPONENT_SET']
        });
    }
    return componentSets;
}
function findComponent(cmpName) {
    let masterComponent = getComponentSets().find(item => item.name === cmpName);
    return masterComponent || null;
}
function importStyleTemplates() {
    return __awaiter(this, void 0, void 0, function* () {
        totalLayersCount = 0;
        reboundLayersCount = 0;
        skippedLayersCount = 0;
        let _nodes = [];
        if (figma.currentPage.selection.length == 0) {
            figma.notify("Select at least one layer and try again");
            return false;
        }
        figma.currentPage.selection.forEach((node) => {
            if ('children' in node) {
                _nodes = _nodes.concat(node.children);
            }
        });
        console.log(_nodes);
        let matches = [];
        _nodes.forEach(node => {
            if (node.type != 'FRAME' || node.visible != true) {
                return; // skip everyting that is not a regular frame
            }
            const componentNode = findComponent(node.name);
            if (componentNode) {
                matches.push({
                    source: node,
                    target: componentNode
                });
            }
        });
        const total = matches.length;
        totalLayersCount = total;
        while (matches.length) {
            const matchData = matches.shift();
            const percent = Math.round(((total - matches.length) / total) * 100);
            const msg = `${percent}% done. Working on layer ${total - matches.length} out of ${total}`;
            console.log(msg);
            if (matchData.target.type == 'COMPONENT_SET') {
                matchData.source.children.forEach((sourceFrame) => __awaiter(this, void 0, void 0, function* () {
                    const target = matchData.target.findChild(n => n.name === sourceFrame.name);
                    if ((target === null || target === void 0 ? void 0 : target.type) == 'COMPONENT' && sourceFrame.type == 'FRAME') {
                        yield processNode(sourceFrame, target);
                    }
                }));
            }
            else {
                yield processNode(matchData.source, matchData.target);
            }
        }
        return total;
    });
}
function processNode(sourceFrame, targetComponent) {
    return __awaiter(this, void 0, void 0, function* () {
        let targetFrames = [];
        copyStyles(sourceFrame, targetComponent);
        bindVairables(sourceFrame, targetComponent);
        sourceFrame.children.forEach((sourceNode, index) => {
            figma.skipInvisibleInstanceChildren = false;
            let targetNode = targetComponent.findOne(n => n.name === sourceNode.name);
            if (!targetNode) {
                // copy a component and insert it into the same position as it is in sourceFrame
                const clone = sourceNode.clone();
                targetComponent.insertChild(index, clone);
                return;
            }
            resizeAndReposition(sourceNode, targetNode);
            if (sourceNode.type == 'INSTANCE' && targetNode.type == 'INSTANCE') {
                copyOverrides(sourceNode, targetNode, targetComponent);
            }
            if (sourceNode.type == 'FRAME' && targetNode.type == 'FRAME' ||
                sourceNode.type == 'INSTANCE' && targetNode.type == 'INSTANCE' ||
                sourceNode.type == 'BOOLEAN_OPERATION' && targetNode.type == 'BOOLEAN_OPERATION') {
                targetFrames.push({ sourceNode, targetNode });
            }
        });
        targetFrames.forEach(data => {
            copyNodeProps(data.sourceNode, data.targetNode);
        });
        yield (0,_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(10);
    });
}
function copyNodeProps(sourceNode, targetNode) {
    targetNode.fills = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.fills);
    targetNode.effects = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.effects);
    targetNode.strokes = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokes);
    targetNode.opacity = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.opacity);
    targetNode.visible = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.visible);
    targetNode.isMask = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.isMask);
    targetNode.strokeAlign = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeAlign);
    targetNode.strokeAlign = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeAlign);
    targetNode.strokeCap = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeCap);
    targetNode.strokeJoin = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeJoin);
    targetNode.strokeMiterLimit = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeMiterLimit);
    targetNode.strokeStyleId = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeStyleId);
    targetNode.strokeWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeWeight);
    if (sourceNode.type == 'FRAME' && targetNode.type == 'FRAME') {
        targetNode.constraints = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.constraints);
        targetNode.layoutGrids = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.layoutGrids);
        targetNode.strokeBottomWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeBottomWeight);
        targetNode.strokeLeftWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeLeftWeight);
        targetNode.strokeRightWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeRightWeight);
        targetNode.strokeTopWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeTopWeight);
    }
    copyStyles(sourceNode, targetNode);
    bindVairables(sourceNode, targetNode);
}
function bindVairables(sourceFrame, targetComponent) {
    const boundVairables = Object.entries(sourceFrame.boundVariables);
    boundVairables.forEach(([propName, varBinding]) => {
        bindVariable(sourceFrame, targetComponent, propName, varBinding);
    });
}
function resizeAndReposition(sourceNode, targetNode) {
    if (targetNode == null) {
        return;
    }
    if (sourceNode.type == 'BOOLEAN_OPERATION') {
        sourceNode.children.forEach(source => {
            if ('findOne' in targetNode) {
                const target = targetNode.findOne(n => n.name === source.name);
                resizeAndReposition(source, target);
            }
        });
    }
    else {
        targetNode.x = sourceNode.x;
        targetNode.y = sourceNode.y;
        if ('resize' in targetNode) {
            targetNode.resize(sourceNode.width, sourceNode.height);
        }
    }
}
function copyComponentProps(source, target) {
    // COPY COMPONENT PROPS ----------------
    const sourceComponentProps = source.componentProperties;
    const propsCopy = {};
    Object.keys(sourceComponentProps).forEach(key => {
        propsCopy[key] = sourceComponentProps[key].value;
    });
    target.setProperties(propsCopy);
}
function copyOverrides(sourceNode, targetNode, targetComponent) {
    if (targetNode.type == 'INSTANCE') {
        // SWAP INSTANCES ---------------------
        const doSwap = sourceNode.mainComponent.id !== targetNode.mainComponent.id;
        if (doSwap) {
            targetNode.swapComponent(sourceNode.mainComponent);
        }
        copyComponentProps(sourceNode, targetNode);
    }
    sourceNode.overrides.forEach(prop => {
        const type = targetNode.type;
        if (type != 'FRAME' &&
            type != 'BOOLEAN_OPERATION' &&
            type != 'COMPONENT_SET' &&
            type != 'COMPONENT' &&
            type != 'INSTANCE' &&
            type != 'GROUP' &&
            type != 'SECTION') {
            return;
        }
        const source = figma.getNodeById(prop.id);
        const fields = prop.overriddenFields;
        const target = /*source.name == targetNode.name ? targetNode :*/ targetNode.findOne(n => n.name === source.name);
        if (target != null) {
            fields.forEach(field => {
                let propName = field;
                if (field == 'stokeTopWeight') {
                    propName = 'strokeTopWeight';
                }
                if (field == 'componentProperties' && source.type == 'INSTANCE' && target.type == 'INSTANCE') {
                    copyComponentProps(source, target);
                }
                else if (propName != 'componentPropertyDefinitions' &&
                    propName != 'height' &&
                    propName != 'overlayBackground' &&
                    propName != 'overlayBackgroundInteraction' &&
                    propName != 'overlayPositionType' &&
                    propName != 'parent' &&
                    propName != 'type' &&
                    propName != 'width' &&
                    propName != 'boundVariables') {
                    console.log(`applying ${propName}:${source[propName]} to ${source.name}`);
                    target[propName] = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(source[propName]);
                }
            });
            bindVairables(source, target);
        }
    });
}
function copyStyles(sourceFrame, targetComponent) {
    if ('effectStyleId' in sourceFrame && 'effectStyleId' in targetComponent) {
        targetComponent.effectStyleId = sourceFrame.effectStyleId;
    }
    if ('gridStyleId' in sourceFrame && 'gridStyleId' in targetComponent) {
        targetComponent.gridStyleId = sourceFrame.gridStyleId;
    }
    if ('fillStyleId' in sourceFrame && 'fillStyleId' in targetComponent) {
        targetComponent.fillStyleId = sourceFrame.fillStyleId;
    }
    if ('strokeStyleId' in sourceFrame && 'strokeStyleId' in targetComponent) {
        targetComponent.strokeStyleId = sourceFrame.strokeStyleId;
    }
}
function bindVariable(sourceFrame, targetComponent, propName, variableBinding) {
    if (propName == 'fills' && 'fills' in sourceFrame && 'fills' in targetComponent && !targetComponent['fillStyleId']) {
        targetComponent.fills = (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.bindPropertyVariables)(sourceFrame.fills, figma.variables.setBoundVariableForPaint);
    }
    else if (propName == 'strokes' && 'strokes' in sourceFrame && 'strokes' in targetComponent && !targetComponent['strokeStyleId']) {
        targetComponent.strokes = (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.bindPropertyVariables)(sourceFrame.strokes, figma.variables.setBoundVariableForPaint);
    }
    else if (propName == 'effects' && 'effects' in sourceFrame && 'effects' in targetComponent && !targetComponent['effectStyleId']) {
        targetComponent.effects = (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.bindPropertyVariables)(sourceFrame.effects, figma.variables.setBoundVariableForEffect);
    }
    else if (propName == 'layoutGrids' && 'layoutGrids' in sourceFrame && 'layoutGrids' in targetComponent) {
        targetComponent.layoutGrids = (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.bindPropertyVariables)(sourceFrame.layoutGrids, figma.variables.setBoundVariableForLayoutGrid);
    }
    else if (propName == 'componentProperties' || propName == 'textRangeFills') {
        console.warn(`Swap does not work for ${propName}, skipping node`);
    }
    else {
        const variable = (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.findVariableMatch)(variableBinding.id);
        if (variable) {
            targetComponent.setBoundVariable(propName, null);
            targetComponent.setBoundVariable(propName, variable.id);
        }
    }
    return targetComponent;
}


/***/ }),

/***/ "./src/utils/round-two-digits.ts":
/*!***************************************!*\
  !*** ./src/utils/round-two-digits.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roundTwoDigits: () => (/* binding */ roundTwoDigits)
/* harmony export */ });
function roundTwoDigits(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}


/***/ }),

/***/ "./src/utils/sort-tokens.ts":
/*!**********************************!*\
  !*** ./src/utils/sort-tokens.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColorTokensSortFn: () => (/* binding */ getColorTokensSortFn),
/* harmony export */   getOpacityTokensSortFn: () => (/* binding */ getOpacityTokensSortFn),
/* harmony export */   getSizeTokensSortFn: () => (/* binding */ getSizeTokensSortFn)
/* harmony export */ });
const sizeValuesOrder = [
    'none',
    'xs5',
    'xs5',
    'xs3',
    'xs2',
    'xs',
    'sm',
    'base',
    'md',
    'lg',
    'xl',
    'xl2',
    'xl3',
    'xl4',
    'xl5',
    'xl6',
    'xl7',
    'round'
];
const opacityValuesOrder = [
    "opacity-0",
    "opacity-5",
    "opacity-10",
    "opacity-15",
    "opacity-20",
    "opacity-25",
    "opacity-30",
    "opacity-35",
    "opacity-40",
    "opacity-45",
    "opacity-50",
    "opacity-55",
    "opacity-60",
    "opacity-65",
    "opacity-70",
    "opacity-75",
    "opacity-80",
    "opacity-85",
    "opacity-90",
    "opacity-95",
    "opacity-100",
];
const colorNamesOrder = [
    'primary',
    'brand',
    'fill/base',
    'fill/contrast',
    'text/base/600',
    'text/base/500',
    'text/base/400',
    'text/base/action',
    'text/base/info',
    'text/base/success',
    'text/base/warning',
    'text/base/danger',
    'text/contrast/600',
    'text/contrast/500',
    'text/contrast/400',
    'text/contrast/action',
    'text/contrast/info',
    'text/contrast/success',
    'text/contrast/warning',
    'text/contrast/danger',
    'stroke/base',
    'stroke/contrast',
    'info',
    'success',
    'warning',
    'danger',
    'alt/base',
    'alt/contrast',
    'utility',
    'accent/red',
    'accent/amber',
    'accent/brown',
    'accent/green',
    'accent/teal',
    'accent/cyan',
    'accent/blue',
    'accent/indigo',
    'accent/violet',
    'accent/purple',
    'accent/pink',
    'ui-element/bg/rest',
    'ui-element/bg/hover',
    'ui-element/bg/active',
    'ui-element/bg/selected',
    'ui-element/bg/disabled',
    'ui-element/border/rest',
    'ui-element/border/hover',
    'ui-element/border/active',
    'ui-element/border/selected',
    'ui-element/border/disabled',
    'ui-element/text',
    'button/bg/rest',
    'button/bg/hover',
    'button/bg/active',
    'button/primary',
    'button/success',
    'button/danger',
    'button/border/rest',
    'button/border/hover',
    'button/border/active',
    'form-element/bg/rest',
    'form-element/bg/readonly',
    'form-element/bg/hover',
    'form-element/border/rest',
    'form-element/border/readonly',
    'form-element/border/hover',
    'card/bg/primary',
    'card/bg/secondary',
    'card/border/inner',
    'card/border/outer',
    'overlay/bg',
    'overlay/border',
];
function getColorTokensSortFn() {
    return getSortFn(colorNamesOrder);
}
function getSizeTokensSortFn() {
    return getSortFn(sizeValuesOrder);
}
function getOpacityTokensSortFn() {
    return getSortFn(opacityValuesOrder);
}
function getSortFn(dataSet) {
    return function (firstEl, secondEl) {
        var resultFirst = dataSet.findIndex(item => {
            return firstEl.name.endsWith(item);
        });
        var resultSecond = dataSet.findIndex(item => {
            return secondEl.name.endsWith(item);
        });
        if (resultFirst < resultSecond) {
            return -1; // firstEl goes first
        }
        if (resultFirst > resultSecond) {
            return 1; // secondEl goes first
        }
        if (resultFirst === resultSecond) {
            let name1 = firstEl.name;
            let name2 = secondEl.name;
            if (name1 < name2) {
                return -1; // firstEl goes first
            }
            if (name1 > name2) {
                return 1; // secondEl goes first
            }
            return 0;
        }
        return 0; // keep original order    
    };
}


/***/ }),

/***/ "./src/utils/swap-variables.ts":
/*!*************************************!*\
  !*** ./src/utils/swap-variables.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindPropertyVariables: () => (/* binding */ bindPropertyVariables),
/* harmony export */   findVariableMatch: () => (/* binding */ findVariableMatch),
/* harmony export */   swapVariables: () => (/* binding */ swapVariables)
/* harmony export */ });
/* harmony import */ var _delay_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delay-async */ "./src/utils/delay-async.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/utils/clone.ts");
/* harmony import */ var _figma_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./figma-variables */ "./src/utils/figma-variables.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;
function swapVariables() {
    return __awaiter(this, void 0, void 0, function* () {
        totalLayersCount = 0;
        reboundLayersCount = 0;
        skippedLayersCount = 0;
        let _nodes = [];
        figma.skipInvisibleInstanceChildren = false;
        if (figma.currentPage.selection.length == 0) {
            figma.notify("Select at least one layer and try again");
            return false;
        }
        figma.currentPage.selection.forEach((node) => {
            if ('boundVariables' in node && Object.keys(node.boundVariables).length > 0) {
                _nodes.push(node);
            }
            if ('findAll' in node) {
                const nodes = node.findAll((n) => {
                    if ('boundVariables' in n) {
                        return Object.keys(n.boundVariables).length > 0;
                    }
                    else {
                        return false;
                    }
                });
                _nodes = _nodes.concat(nodes);
            }
        });
        console.log(_nodes);
        const total = _nodes.length;
        totalLayersCount = total;
        while (_nodes.length) {
            const node = _nodes.shift();
            // (70 - 44) / 70
            const percent = Math.round(((total - _nodes.length) / total) * 100);
            const msg = `${percent}% done. Working on layer ${total - _nodes.length} out of ${total}`;
            console.log(msg);
            yield processLayer(node).catch(err => {
                throw (err);
            });
        }
        return total;
    });
}
function traverse(node) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Node: ${node.name}`);
        debugger;
        yield processLayer(node);
        if ("children" in node && node.children.length) {
            console.log(`Traversing "${node.name}" children`);
            for (const child of node.children) {
                yield traverse(child);
            }
        }
    });
}
function getVariableName(variable) {
    const name = variable.name;
    return name.replaceAll('sx', 'spacing').replaceAll('sy', 'spacing/minor');
}
function findVariableMatch(varId) {
    const variable = figma.variables.getVariableById(varId);
    if (!variable) {
        return null;
    }
    let collectionId = null;
    let collection = null;
    collectionId = variable.variableCollectionId;
    collection = figma.variables.getVariableCollectionById(collectionId);
    const name = getVariableName(variable);
    const targetVariable = (0,_figma_variables__WEBPACK_IMPORTED_MODULE_2__.findFigmaVariableByName)(name, collection.name);
    if (!targetVariable) {
        console.warn(`Cannot find ${collection.name} > ${variable.name}`);
        return null;
    }
    ;
    if (targetVariable.id == variable.id) {
        console.warn(`${variable.name} is a local variable`);
        skippedLayersCount++;
        return null;
    }
    return targetVariable;
}
function processLayer(node) {
    return __awaiter(this, void 0, void 0, function* () {
        const boundVairables = Object.entries(node.boundVariables);
        boundVairables.forEach(([propName, boundVar]) => {
            bindVariable(node, propName, boundVar);
        });
        yield (0,_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(2);
    });
}
function bindPropertyVariables(props, figmaFn) {
    const propsCopy = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(props).map(prop => {
        Object.keys(prop.boundVariables).forEach((field) => {
            const alias = prop.boundVariables[field];
            const variable = findVariableMatch(alias.id);
            const spread = prop['spread']; //workaround Figma bug. It resets spread after calling figma.variables.setBoundVariableForEffect
            if (variable) {
                // prop.boundVariables = {};
                prop = figmaFn(prop, field, null);
                prop = figmaFn(prop, field, variable);
            }
            if (typeof spread != 'undefined') {
                prop['spread'] = spread;
            }
        });
        return prop;
    });
    return propsCopy;
}
function bindEffectVariables(props, figmaFn) {
}
function bindVariable(node, propName, variableBinding) {
    if (node.type == 'TEXT') {
        const textStyle = figma.getStyleById(node.textStyleId);
        if (textStyle) {
            const localTextStyle = figma.getLocalTextStyles().find(style => style.name === textStyle.name);
            if (localTextStyle) {
                node.textStyleId = localTextStyle.id;
            }
        }
    }
    if (propName == 'fills' && 'fills' in node) {
        node.fills = bindPropertyVariables(node.fills, figma.variables.setBoundVariableForPaint);
    }
    else if (propName == 'strokes' && 'strokes' in node) {
        node.strokes = bindPropertyVariables(node.strokes, figma.variables.setBoundVariableForPaint);
    }
    else if (propName == 'effects' && 'effects' in node) {
        if (node.effectStyleId !== '') {
            const style = figma.getStyleById(node.effectStyleId);
            const styleName = style.name;
            const localStyle = figma.getLocalEffectStyles().find(style => {
                return style.name === styleName;
            });
            node.effects = [];
            node.effectStyleId = "";
            node.effectStyleId = localStyle ? localStyle.id : "";
            return node;
        }
        node.effects = bindPropertyVariables(node.effects, figma.variables.setBoundVariableForEffect);
    }
    else if (propName == 'layoutGrids' && 'layoutGrids' in node) {
        node.layoutGrids = bindPropertyVariables(node.layoutGrids, figma.variables.setBoundVariableForLayoutGrid);
    }
    else if (propName == 'componentProperties' || propName == 'textRangeFills') {
        console.warn(`Swap does not work for ${propName}, skipping node`);
    }
    else {
        const variable = findVariableMatch(variableBinding.id);
        if (variable) {
            node.setBoundVariable(propName, null);
            node.setBoundVariable(propName, variable.id);
        }
    }
    return node;
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

/***/ "./src/utils/token-references.ts":
/*!***************************************!*\
  !*** ./src/utils/token-references.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findTokenReferences: () => (/* binding */ findTokenReferences),
/* harmony export */   findVariableByReferences: () => (/* binding */ findVariableByReferences),
/* harmony export */   getReferenceName: () => (/* binding */ getReferenceName),
/* harmony export */   parseReferenceGlobal: () => (/* binding */ parseReferenceGlobal)
/* harmony export */ });
/* harmony import */ var _figma_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figma-variables */ "./src/utils/figma-variables.ts");

const aliasRegex = /\{(.+?)(.+?)\}/g;
function findTokenReferences(tokenValue) {
    return tokenValue === null || tokenValue === void 0 ? void 0 : tokenValue.toString().match(aliasRegex);
}
;
function getReferenceName(reference) {
    let name = reference.replace(/{/g, "");
    name = name.replace(/}/g, "");
    return name;
}
function findVariableByReferences(value) {
    let references = findTokenReferences(value);
    let results = [];
    references === null || references === void 0 ? void 0 : references.forEach(reference => {
        let name = getReferenceName(reference);
        name = name.replace(/\./g, "/");
        const figmaVariable = (0,_figma_variables__WEBPACK_IMPORTED_MODULE_0__.findFigmaVariableByName)(name);
        if (figmaVariable) {
            results.push(figmaVariable);
        }
        else {
            console.warn(`findVariableByReferences() call failed -> cannot find value for ${reference}`);
        }
    });
    return results[0];
}
function findGlobalTokenByName(name, dictionary) {
    name = name.replace(/\./g, "/");
    const token = dictionary[name];
    if (!token)
        debugger;
    return token;
}
function parseReferenceGlobal(value, dictionary) {
    let references = findTokenReferences(value);
    let result = value;
    references === null || references === void 0 ? void 0 : references.forEach(reference => {
        let name = getReferenceName(reference);
        const globalToken = findGlobalTokenByName(name, dictionary);
        if (globalToken) {
            result = result.replace(reference, globalToken.$value);
        }
        else {
            debugger;
            console.warn(`parseReferenceGlobal() call failed -> cannot find reference for ${value}`);
        }
    });
    const check = findTokenReferences(result);
    if (check != null) {
        return parseReferenceGlobal(result, dictionary);
    }
    else {
        return result;
    }
}


/***/ }),

/***/ "./src/utils/update-elevation-components.ts":
/*!**************************************************!*\
  !*** ./src/utils/update-elevation-components.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateElevationComponents: () => (/* binding */ updateElevationComponents)
/* harmony export */ });
function updateElevationComponents(tokens) {
    figma.skipInvisibleInstanceChildren = true;
    const pageComponents = figma.currentPage.findAllWithCriteria({ types: ['COMPONENT'] });
    const elevationComponents = pageComponents.filter(node => {
        const name = node.name.toLocaleLowerCase();
        return name.startsWith('shadow');
    });
    if (elevationComponents.length == 0) {
        return console.warn('No elevation components has been found');
    }
    Object.keys(tokens).forEach(name => {
        const variants = tokens[name];
        const [shade, token] = Object.entries(variants)[0];
        const settings = token['$value'];
        const elevationComponent = elevationComponents.find(node => {
            const nameNormalized = name.toLocaleLowerCase().replace(/-/g, " ");
            const nodeNameNormalized = node.name.toLocaleLowerCase().replace(/-/g, " ");
            console.log(nameNormalized, nodeNameNormalized);
            return nodeNameNormalized.indexOf(nameNormalized) > -1;
        });
        processComponent(settings, elevationComponent);
    });
}
function clone(val) {
    const type = typeof val;
    if (val === null) {
        return null;
    }
    else if (type === 'undefined' || type === 'number' ||
        type === 'string' || type === 'boolean') {
        return val;
    }
    else if (type === 'object') {
        if (val instanceof Array) {
            return val.map(x => clone(x));
        }
        else if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        }
        else {
            let o = {};
            for (const key in val) {
                o[key] = clone(val[key]);
            }
            return o;
        }
    }
    throw 'unknown';
}
function processComponent(effects, component) {
    if (!component) {
        throw ('Elevation component was not found');
    }
    const shadowLayers = component.findChildren(node => {
        const name = node.name.toLocaleLowerCase();
        return name.startsWith('shadow');
    });
    const maskLayer = component.findChild(node => {
        return node.name.toLocaleLowerCase() === 'mask';
    });
    maskLayer.visible = false;
    debugger;
    effects.forEach((shadowSettings, index) => {
        const shadowLayer = shadowLayers[index];
        const x = parseFloat(shadowSettings.x);
        const y = parseFloat(shadowSettings.y);
        const radius = parseFloat(shadowSettings.blur);
        const spread = parseFloat(shadowSettings.spread);
        const width = component.width + (2 * spread);
        const height = component.height + (2 * spread);
        const left = x - spread;
        const top = y - spread;
        const blur = {
            type: "LAYER_BLUR",
            radius: radius,
            visible: true
        };
        shadowLayer.effects = [blur];
        shadowLayer.resize(width, height);
        shadowLayer.x = left;
        shadowLayer.y = top;
    });
    const absoluteBoundingBox = component.absoluteBoundingBox;
    const absoluteRenderBounds = component.absoluteRenderBounds;
    const maskWidth = absoluteRenderBounds.width;
    const maskHeight = absoluteRenderBounds.height;
    const maskLeft = (absoluteRenderBounds.x - absoluteBoundingBox.x);
    const maskTop = (absoluteRenderBounds.y - absoluteBoundingBox.y);
    const innerLayer = maskLayer.findChild(node => node.name === 'inner');
    const outerLayer = maskLayer.findChild(node => node.name === 'outer');
    outerLayer.resize(maskWidth, maskHeight);
    outerLayer.x = maskLeft;
    outerLayer.y = maskTop;
    innerLayer.resize(component.width, component.height);
    innerLayer.x = 0;
    innerLayer.y = 0;
    maskLayer.visible = true;
}


/***/ }),

/***/ "./src/utils/variables-to-styles.ts":
/*!******************************************!*\
  !*** ./src/utils/variables-to-styles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindVariablesAndStyles: () => (/* binding */ bindVariablesAndStyles)
/* harmony export */ });
console.clear();
const styles = figma.getLocalPaintStyles();
const variables = figma.variables.getLocalVariables();
let count = 0;
function getStyleByName(name) {
    return styles.find((style) => style.name === name);
}
;
function getFigmaColor() {
    return {
        type: "SOLID",
        visible: true,
        blendMode: "NORMAL",
        color: {
            r: 1,
            g: 1,
            b: 1
        },
        opacity: 1
    };
}
;
function bindVariablesAndStyles() {
    count = 0;
    variables.forEach(variable => {
        const name = variable.name;
        let style = getStyleByName(name);
        if (variable.resolvedType !== 'COLOR') {
            return;
        }
        if (!style) {
            count++;
            style = figma.createPaintStyle();
            style.name = name;
            style.paints = [
                getFigmaColor()
            ];
        }
        let newPaints = style.paints.map((paint) => {
            return figma.variables.setBoundVariableForPaint(paint, 'color', variable);
        });
        style.paints = newPaints;
    });
    figma.notify(`✅ Variables and styles are now connected. ${count} styles created`);
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

/***/ "./src/tokens/colors/components/component-tokens.json":
/*!************************************************************!*\
  !*** ./src/tokens/colors/components/component-tokens.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"button":{"bg":{"rest":{"$value":"{utility.tint.300}","$type":"color"},"hover":{"$value":"{alt.base.100}","$type":"color"},"active":{"$value":"{utility.tint.200}","$type":"color"}},"border":{"rest":{"$value":"{stroke.base.400}","$type":"color"},"hover":{"$value":"{stroke.base.500}","$type":"color"},"active":{"$value":"{stroke.base.400}","$type":"color"}}},"ui-element":{"bg":{"rest":{"$value":"{utility.transparent}","$type":"color"},"hover":{"$value":"{alt.base.100}","$type":"color"},"active":{"$value":"{alt.base.200}","$type":"color"},"selected":{"$value":"{primary.400}","$type":"color"},"disabled":{"$value":"{alt.base.600}","$type":"color"}},"border":{"rest":{"$value":"{alt.base.100}","$type":"color"},"hover":{"$value":"{alt.base.200}","$type":"color"},"active":{"$value":"{alt.base.300}","$type":"color"},"selected":{"$value":"{primary.500}","$type":"color"},"disabled":{"$value":"{alt.base.600}","$type":"color"}}},"form-element":{"bg":{"rest":{"$value":"{fill.base.100}","$type":"color"},"hover":{"$value":"{fill.base.100}","$type":"color"},"readonly":{"$value":"{fill.base.200}","$type":"color"}},"border":{"rest":{"$value":"{stroke.base.400}","$type":"color"},"hover":{"$value":"{primary.300}","$type":"color"},"readonly":{"$value":"{stroke.base.400}","$type":"color"}}},"card":{"bg":{"primary":{"$value":"{fill.base.100}","$type":"color"},"secondary":{"$value":"{fill.base.200}","$type":"color"}},"border":{"inner":{"$value":"{stroke.base.100}","$type":"color"},"outer":{"$value":"{stroke.base.200}","$type":"color"}}},"overlay":{"bg":{"$value":"{card.bg.primary}","$type":"color"},"border":{"$value":"{alt.base.400}","$type":"color"}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-base-2.json":
/*!***************************************************!*\
  !*** ./src/tokens/colors/system/dark-base-2.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-6}","$type":"color"},"200":{"$value":"{grey-8}","$type":"color"},"300":{"$value":"{grey-10}","$type":"color"},"400":{"$value":"{grey-12}","$type":"color"},"500":{"$value":"{grey-14}","$type":"color"},"600":{"$value":"{grey-16}","$type":"color"}},"contrast":{"100":{"$value":"{grey-16}","$type":"color"},"200":{"$value":"{grey-18}","$type":"color"},"300":{"$value":"{grey-20}","$type":"color"},"400":{"$value":"{grey-22}","$type":"color"},"500":{"$value":"{grey-24}","$type":"color"},"600":{"$value":"{grey-26}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-16}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-20}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-24}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-26}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-38}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-44}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-50}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-base-3.json":
/*!***************************************************!*\
  !*** ./src/tokens/colors/system/dark-base-3.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-6}","$type":"color"},"200":{"$value":"{grey-9}","$type":"color"},"300":{"$value":"{grey-12}","$type":"color"},"400":{"$value":"{grey-15}","$type":"color"},"500":{"$value":"{grey-18}","$type":"color"},"600":{"$value":"{grey-21}","$type":"color"}},"contrast":{"100":{"$value":"{grey-16}","$type":"color"},"200":{"$value":"{grey-19}","$type":"color"},"300":{"$value":"{grey-22}","$type":"color"},"400":{"$value":"{grey-25}","$type":"color"},"500":{"$value":"{grey-28}","$type":"color"},"600":{"$value":"{grey-31}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-16}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-21}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-26}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-31}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-37}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-43}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-26}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-31}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-41}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-47}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-53}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-base-4.json":
/*!***************************************************!*\
  !*** ./src/tokens/colors/system/dark-base-4.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-6}","$type":"color"},"200":{"$value":"{grey-10}","$type":"color"},"300":{"$value":"{grey-14}","$type":"color"},"400":{"$value":"{grey-18}","$type":"color"},"500":{"$value":"{grey-22}","$type":"color"},"600":{"$value":"{grey-26}","$type":"color"}},"contrast":{"100":{"$value":"{grey-16}","$type":"color"},"200":{"$value":"{grey-20}","$type":"color"},"300":{"$value":"{grey-24}","$type":"color"},"400":{"$value":"{grey-28}","$type":"color"},"500":{"$value":"{grey-32}","$type":"color"},"600":{"$value":"{grey-36}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-16}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-22}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-46}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-32}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-48}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-56}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-common.json":
/*!***************************************************!*\
  !*** ./src/tokens/colors/system/dark-common.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"text":{"base":{"400":{"$value":"rgba(#FFFFFF, 0.45)","$type":"color"},"500":{"$value":"rgba(#FFFFFF, 0.70)","$type":"color"},"600":{"$value":"#FFFFFF","$type":"color"},"action":{"$value":"{primary.500}","$type":"color"},"info":{"$value":"{info.500}","$type":"color"},"success":{"$value":"{success.500}","$type":"color"},"warning":{"$value":"{warning.500}","$type":"color"},"danger":{"$value":"{danger.500}","$type":"color"}},"contrast":{"400":{"$value":"rgba(#FFFFFF, 0.45)","$type":"color"},"500":{"$value":"rgba(#FFFFFF, 0.70)","$type":"color"},"600":{"$value":"#FFFFFF","$type":"color"},"action":{"$value":"{primary.600}","$type":"color"},"info":{"$value":"{info.600}","$type":"color"},"success":{"$value":"{success.600}","$type":"color"},"warning":{"$value":"{warning.600}","$type":"color"},"danger":{"$value":"{danger.600}","$type":"color"}}},"alt":{"base":{"100":{"$value":"rgba({grey-78}, 0.08)","$type":"color","adjustments":{"s":"*2"}},"200":{"$value":"rgba({grey-78}, 0.12)","$type":"color","adjustments":{"s":"*2"}},"300":{"$value":"rgba({grey-78}, 0.16)","$type":"color","adjustments":{"s":"*2"}},"400":{"$value":"rgba({grey-78}, 0.24)","$type":"color","adjustments":{"s":"*2"}},"500":{"$value":"rgba({grey-78}, 0.32)","$type":"color","adjustments":{"s":"*2"}},"600":{"$value":"rgba({grey-78}, 0.44)","$type":"color","adjustments":{"s":"*2"}}},"contrast":{"100":{"$value":"rgba({grey-78}, 0.08)","$type":"color","adjustments":{"s":"*2"}},"200":{"$value":"rgba({grey-78}, 0.12)","$type":"color","adjustments":{"s":"*2"}},"300":{"$value":"rgba({grey-78}, 0.16)","$type":"color","adjustments":{"s":"*2"}},"400":{"$value":"rgba({grey-78}, 0.24)","$type":"color","adjustments":{"s":"*2"}},"500":{"$value":"rgba({grey-78}, 0.32)","$type":"color","adjustments":{"s":"*2"}},"600":{"$value":"rgba({grey-78}, 0.44)","$type":"color","adjustments":{"s":"*2"}}}},"utility":{"white":{"$value":"{grey-100}","$type":"color"},"black":{"$value":"{grey-4}","$type":"color"},"transparent":{"$value":"rgba(0, 0, 0, 0)","$type":"color"},"shade":{"100":{"$value":"rgba(#000000, 0.10)","$type":"color"},"200":{"$value":"rgba(#000000, 0.20)","$type":"color"},"300":{"$value":"rgba(#000000, 0.30)","$type":"color"},"400":{"$value":"rgba(#000000, 0.40)","$type":"color"},"500":{"$value":"rgba(#000000, 0.50)","$type":"color"},"600":{"$value":"rgba(#000000, 0.60)","$type":"color"}},"tint":{"100":{"$value":"rgba({grey-78}, 0.08)","$type":"color","adjustments":{"s":"*2"}},"200":{"$value":"rgba({grey-78}, 0.12)","$type":"color","adjustments":{"s":"*2"}},"300":{"$value":"rgba({grey-78}, 0.16)","$type":"color","adjustments":{"s":"*2"}},"400":{"$value":"rgba({grey-78}, 0.24)","$type":"color","adjustments":{"s":"*2"}},"500":{"$value":"rgba({grey-78}, 0.32)","$type":"color","adjustments":{"s":"*2"}},"600":{"$value":"rgba({grey-78}, 0.44)","$type":"color","adjustments":{"s":"*2"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-elevated-2.json":
/*!*******************************************************!*\
  !*** ./src/tokens/colors/system/dark-elevated-2.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-14}","$type":"color"},"200":{"$value":"{grey-12}","$type":"color"},"300":{"$value":"{grey-10}","$type":"color"},"400":{"$value":"{grey-8}","$type":"color"},"500":{"$value":"{grey-6}","$type":"color"},"600":{"$value":"{grey-4}","$type":"color"}},"contrast":{"100":{"$value":"{grey-24}","$type":"color"},"200":{"$value":"{grey-22}","$type":"color"},"300":{"$value":"{grey-20}","$type":"color"},"400":{"$value":"{grey-18}","$type":"color"},"500":{"$value":"{grey-16}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-22}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-25}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-29}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-47}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-33}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-elevated-3.json":
/*!*******************************************************!*\
  !*** ./src/tokens/colors/system/dark-elevated-3.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-19}","$type":"color"},"200":{"$value":"{grey-16}","$type":"color"},"300":{"$value":"{grey-13}","$type":"color"},"400":{"$value":"{grey-10}","$type":"color"},"500":{"$value":"{grey-7}","$type":"color"},"600":{"$value":"{grey-4}","$type":"color"}},"contrast":{"100":{"$value":"{grey-29}","$type":"color"},"200":{"$value":"{grey-26}","$type":"color"},"300":{"$value":"{grey-23}","$type":"color"},"400":{"$value":"{grey-20}","$type":"color"},"500":{"$value":"{grey-17}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-29}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-32}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-41}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-49}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-42}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-46}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-51}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-61}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-elevated-4.json":
/*!*******************************************************!*\
  !*** ./src/tokens/colors/system/dark-elevated-4.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-24}","$type":"color"},"200":{"$value":"{grey-20}","$type":"color"},"300":{"$value":"{grey-16}","$type":"color"},"400":{"$value":"{grey-12}","$type":"color"},"500":{"$value":"{grey-8}","$type":"color"},"600":{"$value":"{grey-4}","$type":"color"}},"contrast":{"100":{"$value":"{grey-34}","$type":"color"},"200":{"$value":"{grey-30}","$type":"color"},"300":{"$value":"{grey-26}","$type":"color"},"400":{"$value":"{grey-22}","$type":"color"},"500":{"$value":"{grey-18}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-35}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-38}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-42}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-47}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-55}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-44}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-48}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-52}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-57}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-65}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-2.json":
/*!***********************************************!*\
  !*** ./src/tokens/colors/system/light-2.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-100}","$type":"color"},"200":{"$value":"{grey-98}","$type":"color"},"300":{"$value":"{grey-96}","$type":"color"},"400":{"$value":"{grey-94}","$type":"color"},"500":{"$value":"{grey-92}","$type":"color"},"600":{"$value":"{grey-88}","$type":"color"}},"contrast":{"100":{"$value":"{grey-24}","$type":"color"},"200":{"$value":"{grey-22}","$type":"color"},"300":{"$value":"{grey-20}","$type":"color"},"400":{"$value":"{grey-18}","$type":"color"},"500":{"$value":"{grey-16}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-93}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-88}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-85}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-80}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-70}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-54}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-33}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-3.json":
/*!***********************************************!*\
  !*** ./src/tokens/colors/system/light-3.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-100}","$type":"color"},"200":{"$value":"{grey-97}","$type":"color"},"300":{"$value":"{grey-94}","$type":"color"},"400":{"$value":"{grey-91}","$type":"color"},"500":{"$value":"{grey-88}","$type":"color"},"600":{"$value":"{grey-84}","$type":"color"}},"contrast":{"100":{"$value":"{grey-29}","$type":"color"},"200":{"$value":"{grey-26}","$type":"color"},"300":{"$value":"{grey-23}","$type":"color"},"400":{"$value":"{grey-20}","$type":"color"},"500":{"$value":"{grey-17}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-92}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-87}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-83}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-79}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-67}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-55}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-42}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-46}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-51}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-61}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-4.json":
/*!***********************************************!*\
  !*** ./src/tokens/colors/system/light-4.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-100}","$type":"color"},"200":{"$value":"{grey-96}","$type":"color"},"300":{"$value":"{grey-92}","$type":"color"},"400":{"$value":"{grey-88}","$type":"color"},"500":{"$value":"{grey-84}","$type":"color"},"600":{"$value":"{grey-80}","$type":"color"}},"contrast":{"100":{"$value":"{grey-34}","$type":"color"},"200":{"$value":"{grey-30}","$type":"color"},"300":{"$value":"{grey-26}","$type":"color"},"400":{"$value":"{grey-22}","$type":"color"},"500":{"$value":"{grey-18}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-91}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-86}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-81}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-76}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-64}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-54}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-44}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-48}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-52}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-57}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-65}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-common.json":
/*!****************************************************!*\
  !*** ./src/tokens/colors/system/light-common.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"text":{"base":{"400":{"$value":"rgba({grey-6}, 0.45)","$type":"color"},"500":{"$value":"rgba({grey-6}, 0.65)","$type":"color"},"600":{"$value":"{grey-6}","$type":"color"},"action":{"$value":"{primary.500}","$type":"color"},"info":{"$value":"{info.500}","$type":"color"},"success":{"$value":"{success.500}","$type":"color"},"warning":{"$value":"{warning.500}","$type":"color"},"danger":{"$value":"{danger.500}","$type":"color"}},"contrast":{"400":{"$value":"rgba(#FFFFFF, 0.45)","$type":"color"},"500":{"$value":"rgba(255, 255, 255, 0.70)","$type":"color"},"600":{"$value":"#ffffff","$type":"color"},"action":{"$value":"{primary.600}","$type":"color"},"info":{"$value":"{info.600}","$type":"color"},"success":{"$value":"{success.600}","$type":"color"},"warning":{"$value":"{warning.600}","$type":"color"},"danger":{"$value":"{danger.600}","$type":"color"}}},"alt":{"base":{"100":{"$value":"rgba({grey-14}, 0.04)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-14}, 0.08)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-14}, 0.16)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-14}, 0.24)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-14}, 0.32)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-14}, 0.44)","$type":"color","adjustments":{"s":"1"}}},"contrast":{"100":{"$value":"rgba(#FFFFFF, 0.04)","$type":"color"},"200":{"$value":"rgba(#FFFFFF, 0.08)","$type":"color"},"300":{"$value":"rgba(#FFFFFF, 0.12)","$type":"color"},"400":{"$value":"rgba(#FFFFFF, 0.16)","$type":"color"},"500":{"$value":"rgba(#FFFFFF, 0.24)","$type":"color"},"600":{"$value":"rgba(#FFFFFF, 0.32)","$type":"color"}}},"utility":{"white":{"$value":"{grey-100}","$type":"color"},"black":{"$value":"{grey-4}","$type":"color"},"transparent":{"$value":"rgba(255, 255, 255, 0)","$type":"color"},"shade":{"100":{"$value":"rgba({grey-8}, 0.04)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-8}, 0.08)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-8}, 0.16)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-8}, 0.24)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-8}, 0.32)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-8}, 0.44)","$type":"color","adjustments":{"s":"1"}}},"tint":{"100":{"$value":"rgba({grey-100}, 0.5)","$type":"color"},"200":{"$value":"rgba({grey-100}, 0.6)","$type":"color"},"300":{"$value":"rgba({grey-100}, 0.7)","$type":"color"},"400":{"$value":"rgba({grey-100}, 0.8)","$type":"color"},"500":{"$value":"rgba({grey-100}, 0.9)","$type":"color"},"600":{"$value":"{grey-100}","$type":"color"}}}}');

/***/ }),

/***/ "./src/tokens/effects/elevation.json":
/*!*******************************************!*\
  !*** ./src/tokens/effects/elevation.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"shadow-1":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-1 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-1 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-1 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow- shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-1 shadow-utility-shade-500"}},"shadow-2":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-500"}},"shadow-3":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-500"}},"shadow-4":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-500"}},"shadow-5":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-500"}},"shadow-6":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-500"}}}');

/***/ }),

/***/ "./src/tokens/opacity/opacity.json":
/*!*****************************************!*\
  !*** ./src/tokens/opacity/opacity.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"opacity-0":{"$value":0,"$type":"number","scopes":["OPACITY"]},"opacity-5":{"$value":5,"$type":"number","scopes":["OPACITY"]},"opacity-10":{"$value":10,"$type":"number","scopes":["OPACITY"]},"opacity-15":{"$value":15,"$type":"number","scopes":["OPACITY"]},"opacity-20":{"$value":20,"$type":"number","scopes":["OPACITY"]},"opacity-25":{"$value":25,"$type":"number","scopes":["OPACITY"]},"opacity-30":{"$value":30,"$type":"number","scopes":["OPACITY"]},"opacity-35":{"$value":35,"$type":"number","scopes":["OPACITY"]},"opacity-40":{"$value":40,"$type":"number","scopes":["OPACITY"]},"opacity-45":{"$value":45,"$type":"number","scopes":["OPACITY"]},"opacity-50":{"$value":50,"$type":"number","scopes":["OPACITY"]},"opacity-55":{"$value":55,"$type":"number","scopes":["OPACITY"]},"opacity-60":{"$value":60,"$type":"number","scopes":["OPACITY"]},"opacity-65":{"$value":65,"$type":"number","scopes":["OPACITY"]},"opacity-70":{"$value":70,"$type":"number","scopes":["OPACITY"]},"opacity-75":{"$value":75,"$type":"number","scopes":["OPACITY"]},"opacity-80":{"$value":80,"$type":"number","scopes":["OPACITY"]},"opacity-85":{"$value":85,"$type":"number","scopes":["OPACITY"]},"opacity-90":{"$value":90,"$type":"number","scopes":["OPACITY"]},"opacity-95":{"$value":95,"$type":"number","scopes":["OPACITY"]},"opacity-100":{"$value":100,"$type":"number","scopes":["OPACITY"]}}');

/***/ }),

/***/ "./src/tokens/radii/base.json":
/*!************************************!*\
  !*** ./src/tokens/radii/base.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"4.5","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl2":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/radii/compact.json":
/*!***************************************!*\
  !*** ./src/tokens/radii/compact.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"3","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl2":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/radii/large.json":
/*!*************************************!*\
  !*** ./src/tokens/radii/large.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/sizing/base.json":
/*!*************************************!*\
  !*** ./src/tokens/sizing/base.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"icon-size":{"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"128","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"256","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}}}');

/***/ }),

/***/ "./src/tokens/sizing/touch.json":
/*!**************************************!*\
  !*** ./src/tokens/sizing/touch.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"icon-size":{"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"128","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"256","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"512","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}}}');

/***/ }),

/***/ "./src/tokens/spacing/base.json":
/*!**************************************!*\
  !*** ./src/tokens/spacing/base.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"spacing":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"68","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/spacing/compact.json":
/*!*****************************************!*\
  !*** ./src/tokens/spacing/compact.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"spacing":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"1","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/spacing/large.json":
/*!***************************************!*\
  !*** ./src/tokens/spacing/large.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"spacing":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/spacing/touch.json":
/*!***************************************!*\
  !*** ./src/tokens/spacing/touch.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"spacing":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-base.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-base.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"21","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"30","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"43","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"42","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-compact.json":
/*!*******************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-compact.json ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"21","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"30","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"33","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"26","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"46","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-large.json":
/*!*****************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-large.json ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"31","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"39","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"49","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"62","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"68","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-third/typescale-base.json":
/*!***************************************************************!*\
  !*** ./src/tokens/typography/major-third/typescale-base.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"23","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"29","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"37","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"46","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"57","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"89","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"112","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"80","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"100","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"124","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-third/typescale-compact.json":
/*!******************************************************************!*\
  !*** ./src/tokens/typography/major-third/typescale-compact.json ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"25","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"50","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"62","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"77","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"97","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"84","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"106","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-third/typescale-large.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/major-third/typescale-large.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"21","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"33","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"42","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"65","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"81","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"101","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"127","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"88","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"112","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"140","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-base.json":
/*!***************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-base.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"18","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"26","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"31","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"37","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"45","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"54","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"77","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"86","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

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
module.exports = JSON.parse('{"body":{"base":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"medium":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"small":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"x-small":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"x-small2":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"large":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","base":"[object Object]","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}}},"paragraph":{"base":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"medium":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"small":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"x-small":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"x-small2":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"large":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}}},"heading":{"h1":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xl3}","fontSize":"{font-size.xl3}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl3}","fontSize":"{font-size.xl3}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h2":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xl2}","fontSize":"{font-size.xl2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl2}","fontSize":"{font-size.xl2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h3":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xl}","fontSize":"{font-size.xl}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl}","fontSize":"{font-size.xl}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h4":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h5":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h6":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}}},"display":{"d4":{"light":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.light}","lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"d3":{"light":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.light}","lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"d2":{"light":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.light}","lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"d1":{"light":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.light}","lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}}}}');

/***/ }),

/***/ "./src/tokens/typography/typeface.json":
/*!*********************************************!*\
  !*** ./src/tokens/typography/typeface.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-family":{"primary":{"$value":"Inter","$type":"fontFamilies"}},"font-weight":{"regular":{"$value":"Regular","$type":"fontWeights"},"bold":{"$value":"Bold","$type":"fontWeights"},"semibold":{"$value":"Semi Bold","$type":"fontWeights"},"light":{"$value":"Light","$type":"fontWeights"},"italic":{"$value":"Italic","$type":"fontWeights"}},"text-case":{"none":{"$value":"none","$type":"textCase"},"uppercase":{"$value":"uppercase","$type":"textCase"}},"text-decoration":{"none":{"$value":"none","$type":"textDecoration"},"underline":{"$value":"underline","$type":"textDecoration"}}}');

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_figma_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/figma-colors */ "./src/utils/figma-colors.ts");
/* harmony import */ var _color_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-tokens */ "./src/color-tokens.ts");
/* harmony import */ var _utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/figma-variables */ "./src/utils/figma-variables.ts");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _spacing_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spacing-tokens */ "./src/spacing-tokens.ts");
/* harmony import */ var _radii_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radii-tokens */ "./src/radii-tokens.ts");
/* harmony import */ var _typescale_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typescale-tokens */ "./src/typescale-tokens.ts");
/* harmony import */ var _sizing_tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sizing-tokens */ "./src/sizing-tokens.ts");
/* harmony import */ var _effect_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effect-tokens */ "./src/effect-tokens.ts");
/* harmony import */ var _opacity_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./opacity-tokens */ "./src/opacity-tokens.ts");
/* harmony import */ var _utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/sort-tokens */ "./src/utils/sort-tokens.ts");
/* harmony import */ var _utils_figma_text_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/figma-text-styles */ "./src/utils/figma-text-styles.ts");
/* harmony import */ var _color_generators_render_accents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./color-generators/render-accents */ "./src/color-generators/render-accents.ts");
/* harmony import */ var _color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./color-generators/accent-palette-generator */ "./src/color-generators/accent-palette-generator.ts");
/* harmony import */ var _color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./color-generators/neutrals-palette-generator */ "./src/color-generators/neutrals-palette-generator.ts");
/* harmony import */ var _utils_variables_to_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/variables-to-styles */ "./src/utils/variables-to-styles.ts");
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/token-references */ "./src/utils/token-references.ts");
/* harmony import */ var _utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/text-to-title-case */ "./src/utils/text-to-title-case.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
/* harmony import */ var _fix_layers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fix-layers */ "./src/fix-layers.ts");
/* harmony import */ var _utils_figma_effect_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/figma-effect-styles */ "./src/utils/figma-effect-styles.ts");
/* harmony import */ var _utils_update_elevation_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/update-elevation-components */ "./src/utils/update-elevation-components.ts");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");
/* harmony import */ var _utils_round_two_digits__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/round-two-digits */ "./src/utils/round-two-digits.ts");
/* harmony import */ var _utils_swap_variables__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/swap-variables */ "./src/utils/swap-variables.ts");
/* harmony import */ var _utils_export_style_templates__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/export-style-templates */ "./src/utils/export-style-templates.ts");
/* harmony import */ var _utils_import_style_templates__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/import-style-templates */ "./src/utils/import-style-templates.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



























console.clear();
let globalTokens;
const collectionNames = new Map([
    ["brandColors", "Color Theme" /*"Brand Color"*/],
    ["themeColors", "Color Theme"],
    ["componentColors", "Component Tokens"],
    ["spacing", "Spacing"],
    ["opacity", "Opacity"],
    ["radii", "Radii"],
    ["iconScale", "Icon Scale"],
]);
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield Promise.all(_typescale_tokens__WEBPACK_IMPORTED_MODULE_6__.getFontDetails().map((item) => __awaiter(void 0, void 0, void 0, function* () { return yield figma.loadFontAsync(item); })));
    if (figma.command === "import") {
        figma.showUI(__uiFiles__["import"], {
            width: 560,
            height: 720,
            themeColors: true,
        });
    }
    if (figma.command === "export") {
        figma.showUI(__uiFiles__["export"], {
            width: 500,
            height: 500,
            themeColors: true,
        });
    }
    if (figma.command == "bindToStyles") {
        (0,_utils_variables_to_styles__WEBPACK_IMPORTED_MODULE_15__.bindVariablesAndStyles)();
        figma.closePlugin();
    }
    if (figma.command == "updateElevationComponents") {
        (0,_utils_update_elevation_components__WEBPACK_IMPORTED_MODULE_21__.updateElevationComponents)(_effect_tokens__WEBPACK_IMPORTED_MODULE_8__.getElevationTokens());
        figma.closePlugin();
    }
    if (figma.command == "setPlayground") {
        const isPlayground = figma.root.getPluginData('SDSPlayground') !== '';
        figma.root.setPluginData('SDSPlayground', isPlayground ? '' : 'true');
        figma.notify(`${isPlayground ? '❎' : '✅'} Playground is ${isPlayground ? 'disabled' : 'enabled'}`);
        figma.closePlugin();
    }
    if (figma.command == "fixLayers") {
        yield (0,_fix_layers__WEBPACK_IMPORTED_MODULE_19__.processComponents)();
        figma.closePlugin();
    }
    if (figma.command == "exportStyleTemplates") {
        yield (0,_utils_export_style_templates__WEBPACK_IMPORTED_MODULE_25__.exportStyleTemplates)();
        figma.closePlugin('Style templates exported');
    }
    if (figma.command == "importStyleTemplates") {
        yield (0,_utils_import_style_templates__WEBPACK_IMPORTED_MODULE_26__.importStyleTemplates)();
        figma.closePlugin('Style templates imported');
    }
    if (figma.command == "swapVariables") {
        const layersCount = yield (0,_utils_swap_variables__WEBPACK_IMPORTED_MODULE_24__.swapVariables)().catch(err => {
            console.error(err);
            figma.notify(err, { error: true });
            throw err;
        });
        figma.closePlugin(`${layersCount} layer(s) processed. `);
    }
}))();
figma.ui.onmessage = (eventData) => {
    console.log("code received message", eventData);
    const params = eventData.params;
    if (eventData.type === "IMPORT") {
        initiateImport(params);
        importAllTokens(params);
    }
    else if (eventData.type === "EXPORT") {
        // exportToJSON(eventData.format);
    }
    else if (eventData.type === "ALERT") {
        figma.notify(`${eventData.params}`);
    }
    else if (eventData.type === "RENDER_ACCENTS") {
        const lightAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.generateGlobalAccentPalette)('light', params);
        const darkAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.generateGlobalAccentPalette)('dark', params);
        const frameLightPalette = (0,_color_generators_render_accents__WEBPACK_IMPORTED_MODULE_12__.renderAccents)(lightAccentTokens, 'Light Mode Accents');
        const frameDarkPalette = (0,_color_generators_render_accents__WEBPACK_IMPORTED_MODULE_12__.renderAccents)(darkAccentTokens, 'Dark Mode Accents');
        frameDarkPalette.y = frameLightPalette.height + 64;
    }
    else if (eventData.type === "RENDER_NEUTRALS") {
        const neutralTokens = (0,_color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__.generateNeutrals)(params);
        (0,_color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__.renderNeutrals)(neutralTokens, `Global Neutrals`);
    }
    else if (eventData.type === "LOADED") {
        try {
            const pluginData = figma.root.getPluginData('SDS');
            const data = JSON.parse(pluginData);
            figma.ui.postMessage(data);
        }
        catch (e) {
            console.warn('failed to read plugin data', e);
        }
    }
    else if (eventData.type == 'RESIZE') {
        switch (params.baseFontSize) {
            default: {
                figma.ui.resize(500, 800);
                break;
            }
            case 'large': {
                figma.ui.resize(560, 800);
                break;
            }
        }
    }
};
function initiateImport(params) {
    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('componentColors'),
        modeName: "Default",
        data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getComponentColors)(),
        sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getColorTokensSortFn)()
    });
    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Light Base",
        data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getThemeColors)('lightBase', params),
        sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getColorTokensSortFn)()
    });
    // getCollectionAndPrepareTokens({
    //     collectionName: collectionNames.get('brandColors'),
    //     modeName: toTitleCase(params.primary),
    //     data: getBrandColors(params.primary),
    //     sortFn: getColorTokensSortFn()
    // });
    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('spacing'),
        modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)(params.spacing),
        data: _spacing_tokens__WEBPACK_IMPORTED_MODULE_4__[params.spacing],
        sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getSizeTokensSortFn)(),
    });
    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('radii'),
        modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)(params.radii),
        data: _radii_tokens__WEBPACK_IMPORTED_MODULE_5__[params.radii],
        sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getSizeTokensSortFn)(),
    });
    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('iconScale'),
        modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)("base"),
        data: _sizing_tokens__WEBPACK_IMPORTED_MODULE_7__.base,
        sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getSizeTokensSortFn)(),
    });
    getCollectionAndPrepareTokens({
        collectionName: collectionNames.get('opacity'),
        modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)("default"),
        data: _opacity_tokens__WEBPACK_IMPORTED_MODULE_9__.opacity,
        sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getOpacityTokensSortFn)(),
    });
}
function generateVariablesForPlayground(data, isPlayground = false) {
    if (isPlayground === false) {
        return;
    }
    ;
    const contrastRatios = {};
    const primaryColorHUE = data.primary;
    const shades = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.getGlobalAccent)(data[primaryColorHUE], data.accentSaturation, data.accentMinLuminance, data.accentMidLuminance, data.accentMaxLuminance);
    Object.entries(shades).forEach(([name, token]) => {
        token.scopes = [];
        let chromaColor = chroma_js__WEBPACK_IMPORTED_MODULE_3___default()(token.$value);
        const contrast1 = (0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_23__.roundTwoDigits)(chroma_js__WEBPACK_IMPORTED_MODULE_3___default().contrast(chroma_js__WEBPACK_IMPORTED_MODULE_3___default().hsl([0, 0, 1]), chromaColor));
        const contrast2 = (0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_23__.roundTwoDigits)(chroma_js__WEBPACK_IMPORTED_MODULE_3___default().contrast(chroma_js__WEBPACK_IMPORTED_MODULE_3___default().hsl([0, 0, 0.22]), chromaColor));
        contrastRatios[`_accent_${name}_vs_light`] = {
            "$value": contrast1.toString(),
            "$type": "string",
            "scopes": []
        };
        contrastRatios[`_accent_${name}_vs_dark`] = {
            "$value": contrast2.toString(),
            "$type": "string",
            "scopes": []
        };
    });
    importVariables({
        collectionName: "_Playground",
        modeName: "Default",
        data: Object.assign(Object.assign(Object.assign({}, (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_22__.flattenObject)({ '_global-accent': shades })), contrastRatios), { '_primary-color-hue': {
                "$value": data[data.primary].toString(),
                "$type": "string",
                "scopes": []
            }, '_primary-color': {
                "$value": data.primary,
                "$type": "string",
                "scopes": []
            }, '_success-color': {
                "$value": data.success,
                "$type": "string",
                "scopes": []
            }, '_warning-color': {
                "$value": data.warning,
                "$type": "string",
                "scopes": []
            }, '_danger-color': {
                "$value": data.danger,
                "$type": "string",
                "scopes": []
            }, '_info-color': {
                "$value": data.info,
                "$type": "string",
                "scopes": []
            } })
    });
}
function importAllTokens(params) {
    figma.root.setPluginData('SDS', JSON.stringify(params));
    const isPlayground = figma.root.getPluginData('SDSPlayground') !== '';
    generateVariablesForPlayground(params, isPlayground);
    importColorTheme(params);
    // importVariables({
    //     collectionName: collectionNames.get('brandColors'),
    //     modeName: toTitleCase(params.primary),
    //     data: getBrandColors(params.primary)
    // });
    importVariables({
        collectionName: collectionNames.get('componentColors'),
        modeName: "Default",
        data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getComponentColors)()
    });
    importSizeTokens({
        type: 'spacing',
        collectionName: collectionNames.get('spacing'),
        params: params,
        defaultMode: params.spacing,
        defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_18__.spacingSizeName,
        tokens: _spacing_tokens__WEBPACK_IMPORTED_MODULE_4__
    });
    importSizeTokens({
        type: 'radii',
        collectionName: collectionNames.get('radii'),
        params: params,
        defaultMode: params.radii,
        defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_18__.radiiSizeName,
        tokens: _radii_tokens__WEBPACK_IMPORTED_MODULE_5__
    });
    importSizeTokens({
        type: 'typeScale',
        collectionName: 'Type Scale',
        params: params,
        defaultMode: params.baseFontSize,
        defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_18__.typographySizeName,
        tokens: _typescale_tokens__WEBPACK_IMPORTED_MODULE_6__,
        isSingleMode: true
    });
    // ICONS SCALE
    importSizeTokens({
        type: 'iconScale',
        collectionName: collectionNames.get('iconScale'),
        params: params,
        defaultMode: 'base',
        defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_18__.iconSizeName,
        tokens: _sizing_tokens__WEBPACK_IMPORTED_MODULE_7__
    });
    importVariables({
        collectionName: collectionNames.get('opacity'),
        modeName: "Default",
        data: _opacity_tokens__WEBPACK_IMPORTED_MODULE_9__.opacity
    });
    globalTokens = Object.assign(Object.assign({}, globalTokens), _typescale_tokens__WEBPACK_IMPORTED_MODULE_6__.getTypograohyTokens(params.baseFontSize, params.typeScale));
    (0,_utils_figma_text_styles__WEBPACK_IMPORTED_MODULE_11__.importTextStyles)(_typescale_tokens__WEBPACK_IMPORTED_MODULE_6__.getTypograohyTokens(params.baseFontSize, params.typeScale));
    importEffects();
    figma.notify("Figma variables has been imported");
    figma.ui.postMessage("importCompleted");
}
function importEffects() {
    // import effects for default theme which is light one
    (0,_utils_figma_effect_styles__WEBPACK_IMPORTED_MODULE_20__.importEffectStyles)(_effect_tokens__WEBPACK_IMPORTED_MODULE_8__.elevation);
    (0,_utils_update_elevation_components__WEBPACK_IMPORTED_MODULE_21__.updateElevationComponents)(_effect_tokens__WEBPACK_IMPORTED_MODULE_8__.getElevationTokens());
}
function importColorTheme(params) {
    let themeColors = (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getThemeColors)('lightBase', params);
    globalTokens = Object.assign(Object.assign(Object.assign({}, (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getGlobalNeutrals)()), (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getComponentColors)()), themeColors);
    console.log('Importing Light Base', themeColors);
    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Light Base",
        data: themeColors,
        sortFn: _utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getColorTokensSortFn
    });
    themeColors = (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getThemeColors)('darkBase', params);
    globalTokens = Object.assign(globalTokens, themeColors);
    console.log('Importing Dark Base', themeColors);
    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Dark Base",
        data: themeColors
    });
    themeColors = (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getThemeColors)('darkElevated', params);
    globalTokens = Object.assign(globalTokens, themeColors);
    console.log('Importing Dark Elevated', themeColors);
    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Dark Elevated",
        data: themeColors
    });
}
function importSizeTokens(data) {
    const tokens = data.tokens;
    const isSingleMode = data.isSingleMode || false;
    const singleCollection = data.params.singleCollection;
    const defaultMode = data.defaultMode;
    const defaultOrder = data.defaultOrder.filter(item => item != defaultMode);
    defaultOrder.splice(0, 0, defaultMode);
    defaultOrder.length = isSingleMode ? 1 : defaultOrder.length;
    defaultOrder.forEach((modeName, index) => {
        importVariables({
            collectionName: singleCollection ? "UI Scale" : data.collectionName,
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)(modeName),
            modeIndex: index,
            data: tokens[modeName],
            isSingleMode: isSingleMode
        });
    });
}
function getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
    let modeId;
    const { collection, isNew } = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.getFigmaCollection)(collectionName);
    if (isNew || isSingleMode) {
        modeId = collection.modes[0].modeId;
        collection.renameMode(modeId, modeName);
    }
    else {
        const mode = modeIndex < 0 ? collection.modes.find(mode => mode.name === modeName) : collection.modes[modeIndex];
        if (!mode) {
            try {
                modeId = collection.addMode(modeName);
            }
            catch (e) {
                figma.notify("Cannot create more than one mode. Is your file under Pro team or org plan?");
                console.error(e);
                figma.closePlugin();
            }
        }
        else {
            modeId = mode.modeId;
            collection.renameMode(modeId, modeName);
        }
    }
    let transformedTokens = Object.entries(data).map(([key, object]) => {
        return Object.assign({ name: key }, object);
    });
    let sortedTokens = transformedTokens;
    if (sortFn != null) {
        sortedTokens = transformedTokens.sort(sortFn);
    }
    if (isNew) {
        // create variables straight away so there is a way to make 
        // references / aliases without additional pass
        sortedTokens.forEach(token => {
            const type = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.resolveVariableType)(token.$type);
            (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.setFigmaVariable)(collection, modeId, type, token.name);
        });
    }
    return {
        tokens: sortedTokens,
        collection,
        modeId,
        type: data.$type
    };
}
function importVariables({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
    const { tokens, collection, modeId, type } = getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex, data, sortFn, isSingleMode });
    return tokens.map((token) => {
        return processToken({
            collection,
            modeId,
            type: token.$type,
            variableName: token.name,
            token: token
        });
    });
}
function processToken({ collection, modeId, type, variableName, token }) {
    type = type || token.$type;
    // if key is a meta field, move on
    if (variableName.charAt(0) === "$") {
        return;
    }
    if (token.$value !== undefined) {
        if (type === "color") {
            let colorValue = (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_0__.parseColorToken)(token, globalTokens);
            let referenceVar = (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_16__.findVariableByReferences)(token.$value.trim());
            if (referenceVar) {
                colorValue = {
                    type: "VARIABLE_ALIAS",
                    id: referenceVar.id,
                };
            }
            return (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.setFigmaVariable)(collection, modeId, "COLOR", variableName, colorValue, token.scopes || ['ALL_SCOPES'], token.description || null);
        }
        if (type === "number") {
            return (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.setFigmaVariable)(collection, modeId, "FLOAT", variableName, parseInt(token.$value), token.scopes, token.description || null);
        }
        try {
            return (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.setFigmaVariable)(collection, modeId, "STRING", variableName, (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_16__.parseReferenceGlobal)(token.$value, globalTokens), token.scopes, token.description || null);
        }
        catch (e) {
            console.error("unsupported type", type, token);
        }
    }
    else {
        console.warn('recursion in ', token);
    }
}
function exportToJSON(colorFormat) {
    const collections = figma.variables.getLocalVariableCollections();
    const files = [];
    collections.forEach((collection) => files.push(...exportCollection(collection, colorFormat)));
    figma.ui.postMessage({ type: "EXPORT_RESULT", files });
}
function exportCollection({ name, modes, variableIds }, colorFormat) {
    const files = [];
    modes.forEach((mode) => {
        const file = { fileName: `${name}.${mode.name}.tokens.json`, body: {} };
        variableIds.sort().forEach((variableId) => {
            const { name, resolvedType, valuesByMode } = figma.variables.getVariableById(variableId);
            console.log(name);
            const value = valuesByMode[mode.modeId];
            if (value !== undefined && ["COLOR", "FLOAT"].includes(resolvedType)) {
                let obj = file.body;
                name.split("/").forEach((groupName) => {
                    obj[groupName] = obj[groupName] || {};
                    obj = obj[groupName];
                });
                obj.$type = resolvedType === "COLOR" ? "color" : "number";
                if (value.type === "VARIABLE_ALIAS") {
                    obj.$value = `{${figma.variables
                        .getVariableById(value.id)
                        .name.replace(/\//g, ".")}}`;
                }
                else {
                    obj.$value = resolvedType === "COLOR" ? (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_0__.convertFigmaColorToRgb)(value, colorFormat) : value;
                }
            }
        });
        files.push(file);
    });
    return files;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEaUM7QUFDeUI7QUFDbkQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhDQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1RUFBb0I7QUFDbEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFFQUFxRTtBQUNyRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlDQUF5QztBQUN6Qyx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9ELGlCQUFpQjtBQUNyRTs7QUFFQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkJBQTZCLGlFQUFpRTtBQUM5RiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsaUJBQWlCO0FBQ3RFOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItZ2VuZXJhdG9ycy9hY2NlbnQtcGFsZXR0ZS1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9jb2xvci1nZW5lcmF0b3JzL25ldXRyYWxzLXBhbGV0dGUtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItZ2VuZXJhdG9ycy9yZW5kZXItYWNjZW50cy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2NvbG9yLWdlbmVyYXRvcnMvc3dhdGNoZXMtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9lZmZlY3QtdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvZml4LWxheWVycy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL29wYWNpdHktdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvcmFkaWktdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvc2l6aW5nLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3NwYWNpbmctdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdHlwZXNjYWxlLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2Nsb25lLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZGVsYXktYXN5bmMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9leHBvcnQtc3R5bGUtdGVtcGxhdGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtY29sb3JzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtZWZmZWN0LXN0eWxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2ZpZ21hLXRleHQtc3R5bGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtdmFyaWFibGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmxhdHRlbi1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9pbXBvcnQtc3R5bGUtdGVtcGxhdGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvcm91bmQtdHdvLWRpZ2l0cy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL3NvcnQtdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvc3dhcC12YXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy90ZXh0LXRvLXRpdGxlLWNhc2UudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy90b2tlbi1yZWZlcmVuY2VzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvdXBkYXRlLWVsZXZhdGlvbi1jb21wb25lbnRzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvdmFyaWFibGVzLXRvLXN0eWxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9jaHJvbWEuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaHJvbWEgZnJvbSBcImNocm9tYS1qc1wiO1xuaW1wb3J0IHsgcGFyc2VSZWZlcmVuY2VHbG9iYWwgfSBmcm9tIFwiLi4vdXRpbHMvdG9rZW4tcmVmZXJlbmNlc1wiO1xuaW1wb3J0IHsgZGVmYXVsdEFjY2VudEhVRXMsIHN5c3RlbUFjY2VudExpc3QgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGFkZXNUZW1wbGF0ZSh0aGVtZSwgY29sb3JOYW1lKSB7XG4gICAgaWYgKHRoZW1lID09ICdsaWdodCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwiMTAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuMTI1KVwiLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYFN1YnRsZSBzZW1pdHJhbnNwYXJlbnQgYWNjZW50YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMjAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuMzMpXCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgTGlnaHQgc2VtaXRyYW5zcGFyZW50IGFjY2VudGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjMwMFwiOiB7XG4gICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJ7MzAwfVwiLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYE5vbiB0ZXh0dWFsIGVsZW1lbnRzYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiNDAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcIns0MDB9XCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgQmFzZSBiYWNrZ3JvdW5kIGNvbG9yYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiNTAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcIns1MDB9XCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgVGV4dCBvbiBsaWdodCBzdXJmYWNlYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiNjAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInsxMDB9XCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgVGV4dCBvbiBkYXJrIHN1cmZhY2VgXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0aGVtZSA9PSAnZGFyaycpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwiMTAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuMjApXCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgU3VidGxlIHNlbWl0cmFuc3BhcmVudCBhY2NlbnRgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIyMDBcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwicmdiYSh7MjAwfSwgMC40NSlcIixcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBMaWdodCBzZW1pdHJhbnNwYXJlbnQgYWNjZW50YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMzAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInszMDB9XCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgTm9uIHRleHR1YWwgZWxlbWVudHNgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI0MDBcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezQwMH1cIixcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBCYXNlIGJhY2tncm91bmQgY29sb3JgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI1MDBcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezEwMH1cIixcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBUZXh0IG9uIGxpZ2h0IHN1cmZhY2VgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI2MDBcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezEwMH1cIixcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBUZXh0IG9uIGRhcmsgc3VyZmFjZWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGVtZTogJHt0aGVtZX0gaXMgaW52YWxpZGApO1xufVxuZnVuY3Rpb24gZ2V0Q29sb3JQYXJhbXModGhlbWUsIHBhcmFtcykge1xuICAgIGxldCBjb2xvclBhcmFtcyA9IHtcbiAgICAgICAgc2F0dXJhdGlvbjogcGFyYW1zLmFjY2VudFNhdHVyYXRpb24sXG4gICAgICAgIG1pbkx1bWluYW5jZTogcGFyYW1zLmFjY2VudE1pbkx1bWluYW5jZSxcbiAgICAgICAgbWlkTHVtaW5hbmNlOiBwYXJhbXMuYWNjZW50TWlkTHVtaW5hbmNlLFxuICAgICAgICBtYXhMdW1pbmFuY2U6IHBhcmFtcy5hY2NlbnRNYXhMdW1pbmFuY2UsXG4gICAgfTtcbiAgICBpZiAodGhlbWUgPT0gJ2RhcmsnKSB7XG4gICAgICAgIGNvbG9yUGFyYW1zLnNhdHVyYXRpb24gPSBwYXJhbXMuYWNjZW50U2F0dXJhdGlvbiAqIDAuODU7XG4gICAgICAgIC8vIGNvbG9yUGFyYW1zLm1heEx1bWluYW5jZSA9IHBhcmFtcy5hY2NlbnRNYXhMdW1pbmFuY2UgKiAwLjg1O1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JQYXJhbXM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTeXN0ZW1BY2NlbnRQYWxldHRlKHRoZW1lLCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSwgbWlkTHVtaW5hbmNlLCBtYXhMdW1pbmFuY2UgfSA9IGdldENvbG9yUGFyYW1zKHRoZW1lLCBwYXJhbXMpO1xuICAgIGxldCBhY2NlbnRzID0ge1xuICAgICAgICByZWQ6IGdldFNoYWRlc1RlbXBsYXRlKHRoZW1lLCAncmVkJyksXG4gICAgICAgIGFtYmVyOiBnZXRTaGFkZXNUZW1wbGF0ZSh0aGVtZSwgJ2FtYmVyJyksXG4gICAgICAgIGJyb3duOiBnZXRTaGFkZXNUZW1wbGF0ZSh0aGVtZSwgJ2Jyb3duJyksXG4gICAgICAgIGdyZWVuOiBnZXRTaGFkZXNUZW1wbGF0ZSh0aGVtZSwgJ2dyZWVuJyksXG4gICAgICAgIHRlYWw6IGdldFNoYWRlc1RlbXBsYXRlKHRoZW1lLCAndGVhbCcpLFxuICAgICAgICBibHVlOiBnZXRTaGFkZXNUZW1wbGF0ZSh0aGVtZSwgJ2JsdWUnKSxcbiAgICAgICAgaW5kaWdvOiBnZXRTaGFkZXNUZW1wbGF0ZSh0aGVtZSwgJ2luZGlnbycpLFxuICAgICAgICB2aW9sZXQ6IGdldFNoYWRlc1RlbXBsYXRlKHRoZW1lLCAndmlvbGV0JyksXG4gICAgICAgIHB1cnBsZTogZ2V0U2hhZGVzVGVtcGxhdGUodGhlbWUsICdwdXJwbGUnKSxcbiAgICAgICAgcGluazogZ2V0U2hhZGVzVGVtcGxhdGUodGhlbWUsICdwaW5rJylcbiAgICB9O1xuICAgIGZvciAoY29uc3QgW25hbWUsIHNjYWxlXSBvZiBPYmplY3QuZW50cmllcyhhY2NlbnRzKSkge1xuICAgICAgICBjb25zdCBodWUgPSBwYXJhbXNbbmFtZV07XG4gICAgICAgIGNvbnN0IHNoYWRlcyA9IGdldEdsb2JhbEFjY2VudChodWUsIHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSwgbWlkTHVtaW5hbmNlLCBtYXhMdW1pbmFuY2UpO1xuICAgICAgICBhY2NlbnRzW25hbWVdID0gZ2V0VGhlbWVTY2FsZShzY2FsZSwgc2hhZGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY2VudHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHbG9iYWxBY2NlbnRQYWxldHRlKHRoZW1lLCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSwgbWlkTHVtaW5hbmNlLCBtYXhMdW1pbmFuY2UgfSA9IGdldENvbG9yUGFyYW1zKHRoZW1lLCBwYXJhbXMpO1xuICAgIGxldCBhY2NlbnRzID0ge307XG4gICAgc3lzdGVtQWNjZW50TGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCBodWUgPSBwYXJhbXNbbmFtZV07XG4gICAgICAgIGFjY2VudHNbbmFtZV0gPSBnZXRHbG9iYWxBY2NlbnQoaHVlLCBzYXR1cmF0aW9uLCBtaW5MdW1pbmFuY2UsIG1pZEx1bWluYW5jZSwgbWF4THVtaW5hbmNlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjZW50cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxBY2NlbnQoaHVlLCBzYXR1cmF0aW9uLCBtaW5MdW1pbmFuY2UsIG1pZExpbWluYW5jZSwgbWF4THVtaW5hbmNlLCBzdGVwcyA9IDcpIHtcbiAgICBjb25zdCByYW5nZSA9IGdldFJhbmdlT2ZUaHJlZSh7XG4gICAgICAgIGh1ZSxcbiAgICAgICAgc2F0dXJhdGlvbixcbiAgICAgICAgbWluTHVtaW5hbmNlLFxuICAgICAgICBtaWRMaW1pbmFuY2UsXG4gICAgICAgIG1heEx1bWluYW5jZVxuICAgIH0pO1xuICAgIGNvbnN0IHNoYWRlcyA9IGdldFNjYWxlKHJhbmdlLCBzdGVwcyk7XG4gICAgcmV0dXJuIHNoYWRlcztcbn1cbmZ1bmN0aW9uIGdldFRoZW1lU2NhbGUoaW5wdXQsIGRpY3Rpb25hcnkpIHtcbiAgICBsZXQgb3V0cHV0ID0ge307XG4gICAgT2JqZWN0LmVudHJpZXMoaW5wdXQpLmZvckVhY2goKFtzaGFkZU51bWJlciwgdG9rZW5dKSA9PiB7XG4gICAgICAgIHRva2VuLiR2YWx1ZSA9IHBhcnNlUmVmZXJlbmNlR2xvYmFsKHRva2VuLiR2YWx1ZSwgZGljdGlvbmFyeSk7XG4gICAgICAgIG91dHB1dFtzaGFkZU51bWJlcl0gPSB0b2tlbjtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAgICBjb2xvcnM6IGdldFJhbmdlT2ZUaHJlZSgpXG4qL1xuZnVuY3Rpb24gZ2V0U2NhbGUoY29sb3JzLCBjb3VudCA9IDkpIHtcbiAgICBsZXQgdG9rZW5zID0ge307XG4gICAgLy8gY2hyb21hIHNjYWxlIHJldHVybnMgYXJyYXkgb2YgaGV4IHZhbHVlc1xuICAgIGNvbnN0IHNjYWxlID0gY2hyb21hLnNjYWxlKGNvbG9ycykuY29sb3JzKGNvdW50LCAnaGV4Jyk7XG4gICAgc2NhbGUuZm9yRWFjaCgoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgICAgIHRva2Vuc1tgJHtpbmRleCArIDF9MDBgXSA9IHtcbiAgICAgICAgICAgICR2YWx1ZTogY29sb3IsXG4gICAgICAgICAgICAkdHlwZTogJ2NvbG9yJyxcbiAgICAgICAgICAgIHByaXZhdGU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuZnVuY3Rpb24gZ2V0UmFuZ2VPZlRocmVlKHsgaHVlLCBzYXR1cmF0aW9uLCBtaW5MdW1pbmFuY2UgPSAwLjEsIG1pZExpbWluYW5jZSA9IDAuMTgsIG1heEx1bWluYW5jZSA9IDAuMjkgfSkge1xuICAgIGxldCBjb2xvcjEgPSBjaHJvbWEuaHNsKFtodWUgKiAwLjk2LCBzYXR1cmF0aW9uICogMC45NSwgMC41XSlcbiAgICAgICAgLmx1bWluYW5jZShtYXhMdW1pbmFuY2UpO1xuICAgIC8vIHRoaXMgb25lIGFsd2F5cyA0LjUgOiAxIGNvbnRyYXN0IHJhdGlvXG4gICAgbGV0IGNvbG9yMiA9IGNocm9tYS5oc2woW2h1ZSwgc2F0dXJhdGlvbiAqIDEsIDAuNV0pXG4gICAgICAgIC5sdW1pbmFuY2UobWlkTGltaW5hbmNlKTtcbiAgICBsZXQgY29sb3IzID0gY2hyb21hLmhzbChbaHVlICogMS4wNCwgc2F0dXJhdGlvbiAqIDAuOTUsIDAuNV0pXG4gICAgICAgIC5sdW1pbmFuY2UobWluTHVtaW5hbmNlKTtcbiAgICByZXR1cm4gW2NvbG9yMSwgY29sb3IyLCBjb2xvcjNdO1xufVxuZXhwb3J0IHsgZGVmYXVsdEFjY2VudEhVRXMgYXMgZGVmYXVsdEFjY2VudENvbG9ycyB9O1xuIiwiaW1wb3J0IGNocm9tYSBmcm9tIFwiY2hyb21hLWpzXCI7XG5pbXBvcnQgeyByZW5kZXJDb2xvciB9IGZyb20gXCIuL3N3YXRjaGVzLWdlbmVyYXRvclwiO1xuZnVuY3Rpb24gZ2V0U2F0dXJhdGlvbk1vZGlmaWVyKGxpZ2h0bmVzcykge1xuICAgIC8vIHZpc3VhbCByZXByZXNlbnRhdGlvblxuICAgIC8vIGh0dHBzOi8vd3d3LmRlc21vcy5jb20vY2FsY3VsYXRvci8wMnVmcmZzdXp5XG4gICAgY29uc3Qgb2Zmc2V0ID0gNTA7IC8vIGxpZ3RobmVzcyByYW5nZSBpcyBbMCwgMTAwXSwgZm9yIHNhdHVyYXRpb24gd2UgbmVlZCB0byBvZmZzZXQgdGhlIGN1cnZlIHRvIG1ha2UgWy01MCwgNTBdIHJhbmdlIFxuICAgIGNvbnN0IG1hZ25pdHVkZSA9IDcwOyAvLyBzZXRzIGhvdyBtdWNoIHRvIG1vZGlmeSwgaGlnaGVyIHZhbHVlcyBvdXRwdXRzIHNtYWxsZXIgbW9kaWZpZXJcbiAgICBjb25zdCBzYXR1cmF0aW9uTW9kaWZpZXIgPSAxICsgKE1hdGgucG93KGxpZ2h0bmVzcyAtIG9mZnNldCwgMikgLyBtYWduaXR1ZGUgLSBNYXRoLnBvdyhvZmZzZXQsIDIpIC8gbWFnbml0dWRlKSAvIDEwMDtcbiAgICByZXR1cm4gc2F0dXJhdGlvbk1vZGlmaWVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTmV1dHJhbHMocGFyYW1zKSB7XG4gICAgY29uc3QgeyBodWUgPSAyMDAsIHNhdHVyYXRpb24gPSAwLjEsIG1pbiA9IDQsIG1heCA9IDEwMCwgZGlzdGFuY2UgfSA9IHBhcmFtcyB8fCB7fTtcbiAgICBsZXQgdG9rZW5zID0ge307XG4gICAgbGV0IHZhbHVlID0gbWluO1xuICAgIHdoaWxlICh2YWx1ZSA8PSBtYXgpIHtcbiAgICAgICAgY29uc3Qgc01vZCA9IDEgLyBNYXRoLnBvdygxLjMsIChtYXggLSB2YWx1ZSkgLyAxMDApO1xuICAgICAgICBjb25zdCBjb2xvciA9IGNocm9tYS5oc2woaHVlLCBzYXR1cmF0aW9uICogZ2V0U2F0dXJhdGlvbk1vZGlmaWVyKHZhbHVlKSwgdmFsdWUgLyAxMDApO1xuICAgICAgICB0b2tlbnNbYGdyZXktJHt2YWx1ZX1gXSA9IHtcbiAgICAgICAgICAgICckdmFsdWUnOiBjb2xvci5oZXgoKSxcbiAgICAgICAgICAgICckdHlwZSc6ICdjb2xvcicsXG4gICAgICAgICAgICAncHJpdmF0ZSc6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdmFsdWUrKztcbiAgICB9XG4gICAgdG9rZW5zW1wiZ3JleS0xMDBcIl0gPSB7XG4gICAgICAgIFwiJHZhbHVlXCI6IFwiI0ZGRkZGRlwiLFxuICAgICAgICAnJHR5cGUnOiAnY29sb3InLFxuICAgICAgICAncHJpdmF0ZSc6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiB0b2tlbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmV1dHJhbHMoY29sb3JzLCBuYW1lKSB7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZENoaWxkKChub2RlKSA9PiBub2RlLm5hbWUuc3RhcnRzV2l0aCgnR2xvYmFsIE5ldXRyYWxzJykpO1xuICAgIGV4aXN0aW5nTm9kZSA9PT0gbnVsbCB8fCBleGlzdGluZ05vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV4aXN0aW5nTm9kZS5yZW1vdmUoKTtcbiAgICBsZXQgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGZyYW1lLmxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCc7XG4gICAgZnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgZnJhbWUuaXRlbVNwYWNpbmcgPSAwO1xuICAgIGZyYW1lLm5hbWUgPSBuYW1lIHx8ICdHbG9iYWwgTmV1dHJhbHMnO1xuICAgIGZyYW1lLnggPSAwO1xuICAgIGZyYW1lLnkgPSAtMTU2O1xuICAgIGZvciAoY29uc3QgW25hbWUsIGNvbG9yXSBvZiBPYmplY3QuZW50cmllcyhjb2xvcnMpKSB7XG4gICAgICAgIHJlbmRlckNvbG9yKGZyYW1lLCBuYW1lLCBjb2xvciwgY29sb3JzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYW1lO1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyU2hhZGVzIH0gZnJvbSBcIi4vc3dhdGNoZXMtZ2VuZXJhdG9yXCI7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWNjZW50cyhjb2xvcnMsIG5hbWUpIHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQ2hpbGQoKG5vZGUpID0+IG5vZGUubmFtZSA9PSAobmFtZSB8fCAnQWNjZW50IENvbG91cnMnKSk7XG4gICAgZXhpc3RpbmdOb2RlID09PSBudWxsIHx8IGV4aXN0aW5nTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhpc3RpbmdOb2RlLnJlbW92ZSgpO1xuICAgIGxldCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJztcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5pdGVtU3BhY2luZyA9IDE2O1xuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgZnJhbWUubmFtZSA9IG5hbWUgfHwgJ0FjY2VudCBDb2xvdXJzJztcbiAgICBmcmFtZS54ID0gMDtcbiAgICBmcmFtZS55ID0gMDtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBzaGFkZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbG9ycykpIHtcbiAgICAgICAgcmVuZGVyU2hhZGVzKGZyYW1lLCBuYW1lLCBzaGFkZXMsIGNvbG9ycyk7XG4gICAgfVxuICAgIHJldHVybiBmcmFtZTtcbn1cbiIsImltcG9ydCBjaHJvbWEgZnJvbSBcImNocm9tYS1qc1wiO1xuaW1wb3J0IHsgcm91bmRUd29EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMvcm91bmQtdHdvLWRpZ2l0c1wiO1xuaW1wb3J0IHsgcGFyc2VDb2xvclRva2VuIH0gZnJvbSBcIi4uL3V0aWxzL2ZpZ21hLWNvbG9yc1wiO1xuZnVuY3Rpb24gZ2V0Qm91bmRWYXJpYWJsZXMobm9kZSkge1xuICAgIGNvbnN0IGJvdW5kVmFyaWFibGVzID0gT2JqZWN0LmVudHJpZXMobm9kZS5ib3VuZFZhcmlhYmxlcyk7XG4gICAgZm9yIChjb25zdCBbcHJvcE5hbWUsIHByb3BWYWx1ZV0gb2YgYm91bmRWYXJpYWJsZXMpIHtcbiAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgIHByb3BWYWx1ZS5mb3JFYWNoKChhbGlhcywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NCb3VuZFZhcmlhYmxlKGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWQoYWxpYXMuaWQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHZhcklkID0gcHJvcFZhbHVlLmlkO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YXJJZCAhPSAnc3RyaW5nJykgeyAvLyBpdCBpcyBcbiAgICAgICAgICAgICAgICB2YXJJZCA9IHZhcklkLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvY2Vzc0JvdW5kVmFyaWFibGUoZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZCh2YXJJZCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc0JvdW5kVmFyaWFibGUodmFyaWFibGUpIHtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaGFkZXMocGFyZW50Tm9kZSwgbmFtZSwgc2hhZGVzLCBjb2xvcnMpIHtcbiAgICBsZXQgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cygzMjAsIGZyYW1lLmhlaWdodCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5uYW1lID0gbmFtZTtcbiAgICBmcmFtZS5maWxscyA9IFtdO1xuICAgIGdldEJvdW5kVmFyaWFibGVzKGZyYW1lKTtcbiAgICBmb3IgKGNvbnN0IFtzaGFkZU5hbWUsIGNvbG9yXSBvZiBPYmplY3QuZW50cmllcyhzaGFkZXMpKSB7XG4gICAgICAgIHJlbmRlckNvbG9yKGZyYW1lLCBgYWNjZW50LyR7bmFtZX0vJHtzaGFkZU5hbWV9YCwgY29sb3IsIGNvbG9ycyk7XG4gICAgfVxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIHJldHVybiBwYXJlbnROb2RlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbG9yKHBhcmVudE5vZGUsIG5hbWUsIGNvbG9yLCBjb2xvcnMpIHtcbiAgICBsZXQgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgZnJhbWUubGF5b3V0QWxpZ24gPSAnU1RSRVRDSCc7XG4gICAgZnJhbWUuaXRlbVNwYWNpbmcgPSA0O1xuICAgIGZyYW1lLm5hbWUgPSBuYW1lO1xuICAgIGZyYW1lLnZlcnRpY2FsUGFkZGluZyA9IDE2O1xuICAgIGZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gMjA7XG4gICAgY29uc3QgeyByLCBnLCBiLCBhIH0gPSBwYXJzZUNvbG9yVG9rZW4oY29sb3IsIGNvbG9ycyk7XG4gICAgY29uc3QgY2hyb21hQ29sb3IgPSBjaHJvbWEuZ2wociwgZywgYiwgYSk7XG4gICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByLCBnLCBiIH0sIG9wYWNpdHk6IGEgfV07XG4gICAgY29uc3Qgb3BhcXVlQ29sb3IgPSBjaHJvbWEuZ2wociwgZywgYiwgMSk7XG4gICAgY29uc3QgbWl4ZWRDb2xvciA9IGNocm9tYS5taXgob3BhcXVlQ29sb3IsIFwid2hpdGVcIiwgMSAtIGEpO1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIG1peGVkQ29sb3IucmdiYSgpKTtcbiAgICBsZXQgY29udHJhc3QgPSBbXG4gICAgICAgIGNocm9tYS5jb250cmFzdChcIndoaXRlXCIsIG1peGVkQ29sb3IpLFxuICAgICAgICBjaHJvbWEuY29udHJhc3QoY2hyb21hLmhzbChbMCwgMCwgMC4yMl0pLCBtaXhlZENvbG9yKVxuICAgIF07XG4gICAgbGV0IG5hbWVSb3cgPSBnZXRSb3coZnJhbWUsIGNvbnRyYXN0WzBdID4gMi41KTtcbiAgICBsZXQgY29udHJhc3RXaGl0ZVJvdyA9IGdldFJvdyhmcmFtZSwgY29udHJhc3RbMF0gPiAyLjUpO1xuICAgIGxldCBjb250cmFzdEJsYWNrUm93ID0gZ2V0Um93KGZyYW1lLCBjb250cmFzdFswXSA+IDIuNSk7XG4gICAgbGV0IGhzbFJvdyA9IGdldFJvdyhmcmFtZSwgY29udHJhc3RbMF0gPiAyLjUpO1xuICAgIGxldCBsdW1pbmFuY2VSb3cgPSBnZXRSb3coZnJhbWUsIGNvbnRyYXN0WzBdID4gMi41KTtcbiAgICAvLyBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICBuYW1lUm93LnJvb3QubmFtZSA9IFwibmFtZVJvd1wiO1xuICAgIGNvbnRyYXN0V2hpdGVSb3cucm9vdC5uYW1lID0gXCJjb250cmFzdFdoaXRlUm93XCI7XG4gICAgY29udHJhc3RCbGFja1Jvdy5yb290Lm5hbWUgPSBcImNvbnRyYXN0QmxhY2tSb3dcIjtcbiAgICBoc2xSb3cucm9vdC5uYW1lID0gXCJoc2xSb3dcIjtcbiAgICBsdW1pbmFuY2VSb3cucm9vdC5uYW1lID0gXCJsdW1pbmFuY2VSb3dcIjtcbiAgICBjb250cmFzdFdoaXRlUm93LmxhYmVsTm9kZS5jaGFyYWN0ZXJzID0gXCJ2cyB3aGl0ZVwiO1xuICAgIGNvbnRyYXN0V2hpdGVSb3cudmFsdWVOb2RlLmNoYXJhY3RlcnMgPSBgJHtyb3VuZFR3b0RpZ2l0cyhjb250cmFzdFswXSl9YDtcbiAgICBjb250cmFzdEJsYWNrUm93LmxhYmVsTm9kZS5jaGFyYWN0ZXJzID0gXCJ2cyBibGFja1wiO1xuICAgIGNvbnRyYXN0QmxhY2tSb3cudmFsdWVOb2RlLmNoYXJhY3RlcnMgPSBgJHtyb3VuZFR3b0RpZ2l0cyhjb250cmFzdFsxXSl9YDtcbiAgICBuYW1lUm93LmxhYmVsTm9kZS5jaGFyYWN0ZXJzID0gYHtnbG9iYWwuJHtuYW1lLnJlcGxhY2UoL1xcLy9nLCBcIi5cIil9fWA7XG4gICAgbmFtZVJvdy52YWx1ZU5vZGUuY2hhcmFjdGVycyA9IGAgYDtcbiAgICBoc2xSb3cubGFiZWxOb2RlLmNoYXJhY3RlcnMgPSBcImhzbFwiO1xuICAgIGhzbFJvdy52YWx1ZU5vZGUuY2hhcmFjdGVycyA9IGAke291dHB1dEhTTChjaHJvbWFDb2xvcikuam9pbihcIiBcIil9YDtcbiAgICBsdW1pbmFuY2VSb3cubGFiZWxOb2RlLmNoYXJhY3RlcnMgPSBcImx1bWluYW5jZVwiO1xuICAgIGx1bWluYW5jZVJvdy52YWx1ZU5vZGUuY2hhcmFjdGVycyA9IGAke01hdGgucm91bmQocm91bmRUd29EaWdpdHMoY2hyb21hQ29sb3IubHVtaW5hbmNlKCkpICogMTAwKX0lYDtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICBmcmFtZS5yZXNpemUoMjQwLCBmcmFtZS5oZWlnaHQpO1xuICAgIHJldHVybiBwYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gZ2V0Um93KHBhcmVudE5vZGUsIGlzV2hpdGUpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubmFtZSA9IFwicm93XCI7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgIGZyYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiU1BBQ0VfQkVUV0VFTlwiO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgdGV4dE5vZGUubmFtZSA9IFwibGFiZWxcIjtcbiAgICBjb25zdCB2YWx1ZUxhYmVsID0gdGV4dE5vZGUuY2xvbmUoKTtcbiAgICB2YWx1ZUxhYmVsLm5hbWUgPSBcInZhbHVlLWxhYmVsXCI7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHZhbHVlTGFiZWwpO1xuICAgIGNvbnN0IGNvbG9yID0gaXNXaGl0ZSA/IHtcbiAgICAgICAgcjogMSwgZzogMSwgYjogMVxuICAgIH0gOiB7XG4gICAgICAgIHI6IDAsIGc6IDAsIGI6IDBcbiAgICB9O1xuICAgIHRleHROb2RlLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3IsIG9wYWNpdHk6IDAuOCB9XTtcbiAgICB2YWx1ZUxhYmVsLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3IgfV07XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWxOb2RlOiB0ZXh0Tm9kZSwgdmFsdWVOb2RlOiB2YWx1ZUxhYmVsLCByb290OiBmcmFtZVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gb3V0cHV0SFNMKGNocm9tYUNvbG9yKSB7XG4gICAgY29uc3QgW2gsIHMsIGxdID0gY2hyb21hQ29sb3IuaHNsKCk7XG4gICAgcmV0dXJuIFtgJHtNYXRoLnJvdW5kKGgpIHx8IDB9ZGVnYCwgYCR7TWF0aC5yb3VuZChyb3VuZFR3b0RpZ2l0cyhzKSAqIDEwMCl9JWAsIGAke01hdGgucm91bmQocm91bmRUd29EaWdpdHMobCkgKiAxMDApfSVgXTtcbn1cbiIsImltcG9ydCBjb21wb25lbnRUb2tlbnMgZnJvbSAnLi90b2tlbnMvY29sb3JzL2NvbXBvbmVudHMvY29tcG9uZW50LXRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlTGlnaHRDb21tb24gZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9saWdodC1jb21tb24uanNvbic7XG5pbXBvcnQgcGFsZXR0ZUxpZ2h0MiBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2xpZ2h0LTIuanNvbic7XG5pbXBvcnQgcGFsZXR0ZUxpZ2h0MyBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2xpZ2h0LTMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZUxpZ2h0NCBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2xpZ2h0LTQuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtDb21tb24gZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWNvbW1vbi5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0VsZXZhdGVkMiBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstZWxldmF0ZWQtMi5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0VsZXZhdGVkMyBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstZWxldmF0ZWQtMy5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0VsZXZhdGVkNCBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstZWxldmF0ZWQtNC5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0Jhc2UyIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay1iYXNlLTIuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtCYXNlMyBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstYmFzZS0zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVEYXJrQmFzZTQgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWJhc2UtNC5qc29uJztcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tICcuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0JztcbmltcG9ydCB7IGdlbmVyYXRlU3lzdGVtQWNjZW50UGFsZXR0ZSB9IGZyb20gJy4vY29sb3ItZ2VuZXJhdG9ycy9hY2NlbnQtcGFsZXR0ZS1nZW5lcmF0b3InO1xuaW1wb3J0IHsgZ2VuZXJhdGVOZXV0cmFscyB9IGZyb20gJy4vY29sb3ItZ2VuZXJhdG9ycy9uZXV0cmFscy1wYWxldHRlLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0U2VtYW50aWNBY2NlbnRzIH0gZnJvbSAnLi9kZWZhdWx0cyc7XG5sZXQgR2xvYmFsTmV1dHJhbHM7XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VtYW50aWNBY2NlbnRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gZGVmYXVsdFNlbWFudGljQWNjZW50cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxOZXV0cmFscygpIHtcbiAgICByZXR1cm4gR2xvYmFsTmV1dHJhbHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29sb3JzKCkge1xuICAgIHJldHVybiBmbGF0dGVuT2JqZWN0KGNvbXBvbmVudFRva2Vucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJhbmRDb2xvcnMobmFtZSwgYWNjZW50U2hhZGVzLCBmbGF0KSB7XG4gICAgY29uc3QgcGFsZXR0ZSA9IHtcbiAgICAgICAgcHJpbWFyeTogZ2VuZXJhdGVTZW1hbnRpY1NoYWRlcyhuYW1lLCBhY2NlbnRTaGFkZXMpXG4gICAgfTtcbiAgICByZXR1cm4gZmxhdCA/IGZsYXR0ZW5PYmplY3QocGFsZXR0ZSkgOiBwYWxldHRlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lQ29sb3JzKHRoZW1lLCBmb3JtRGF0YSkge1xuICAgIGxldCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBmb3JtRGF0YSk7XG4gICAgR2xvYmFsTmV1dHJhbHMgPSBnZW5lcmF0ZU5ldXRyYWxzKHtcbiAgICAgICAgaHVlOiBwYXJhbXMuaHVlLFxuICAgICAgICBzYXR1cmF0aW9uOiBwYXJhbXMuc2F0dXJhdGlvbixcbiAgICAgICAgZGlzdGFuY2U6IHBhcmFtcy5kaXN0YW5jZVxuICAgIH0pO1xuICAgIGNvbnN0IHNlbWFudGljQWNjZW50cyA9IHtcbiAgICAgICAgcHJpbWFyeTogcGFyYW1zLnByaW1hcnksXG4gICAgICAgIGluZm86IHBhcmFtcy5pbmZvLFxuICAgICAgICBzdWNjZXNzOiBwYXJhbXMuc3VjY2VzcyxcbiAgICAgICAgd2FybmluZzogcGFyYW1zLndhcm5pbmcsXG4gICAgICAgIGRhbmdlcjogcGFyYW1zLmRhbmdlcixcbiAgICB9O1xuICAgIGxldCBsaWdodEFjY2VudFRva2VucyA9IGdlbmVyYXRlU3lzdGVtQWNjZW50UGFsZXR0ZSgnbGlnaHQnLCBwYXJhbXMpO1xuICAgIGxldCBkYXJrQWNjZW50VG9rZW5zID0gZ2VuZXJhdGVTeXN0ZW1BY2NlbnRQYWxldHRlKCdkYXJrJywgcGFyYW1zKTtcbiAgICBjb25zdCBsaWdodFNlbWFudGljVG9rZW5zID0gZ2VuZXJhdGVTZW1hbnRpY1BhbGV0dGUoc2VtYW50aWNBY2NlbnRzLCBsaWdodEFjY2VudFRva2Vucyk7XG4gICAgY29uc3QgZGFya1NlbWFudGljVG9rZW5zID0gZ2VuZXJhdGVTZW1hbnRpY1BhbGV0dGUoc2VtYW50aWNBY2NlbnRzLCBkYXJrQWNjZW50VG9rZW5zKTtcbiAgICBjb25zdCBsaWdodENvbW1vblRva2VucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IGFjY2VudDogbGlnaHRBY2NlbnRUb2tlbnMgfSwgcGFsZXR0ZUxpZ2h0Q29tbW9uKSwgbGlnaHRTZW1hbnRpY1Rva2Vucyk7XG4gICAgY29uc3QgZGFya0NvbW1vblRva2VucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IGFjY2VudDogZGFya0FjY2VudFRva2VucyB9LCBwYWxldHRlRGFya0NvbW1vbiksIGRhcmtTZW1hbnRpY1Rva2Vucyk7XG4gICAgbGV0IGNvbW1vbkNvbG9ycyA9IHt9O1xuICAgIGxldCB0aGVtZUNvbG9ycyA9IHt9O1xuICAgIGlmICh0aGVtZSA9PT0gXCJsaWdodEJhc2VcIikge1xuICAgICAgICBjb21tb25Db2xvcnMgPSBmbGF0dGVuT2JqZWN0KGxpZ2h0Q29tbW9uVG9rZW5zKTtcbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wMikge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVMaWdodDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDMpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlTGlnaHQzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjA0KSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZUxpZ2h0NCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoZW1lID09PSBcImRhcmtFbGV2YXRlZFwiKSB7XG4gICAgICAgIGNvbW1vbkNvbG9ycyA9IGZsYXR0ZW5PYmplY3QoZGFya0NvbW1vblRva2Vucyk7XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDIpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlRGFya0VsZXZhdGVkMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wMykge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVEYXJrRWxldmF0ZWQzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjA0KSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZURhcmtFbGV2YXRlZDQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0aGVtZSA9PT0gXCJkYXJrQmFzZVwiKSB7XG4gICAgICAgIGNvbW1vbkNvbG9ycyA9IGZsYXR0ZW5PYmplY3QoZGFya0NvbW1vblRva2Vucyk7XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDIpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlRGFya0Jhc2UyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjAzKSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZURhcmtCYXNlMyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wNCkge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVEYXJrQmFzZTQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vbkNvbG9ycyksIHRoZW1lQ29sb3JzKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlU2VtYW50aWNTaGFkZXMoYWxpYXNOYW1lLCBhY2NlbnRTaGFkZXMpIHtcbiAgICBsZXQgb3V0cHV0ID0ge307XG4gICAgZm9yICh2YXIgYSA9IDEsIGIgPSA3OyBhIDwgYjsgYSsrKSB7XG4gICAgICAgIG91dHB1dFtgJHthfTAwYF0gPSB7XG4gICAgICAgICAgICBcIiR2YWx1ZVwiOiBge2FjY2VudC4ke2FsaWFzTmFtZX0uJHthfTAwfWAsXG4gICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYWNjZW50U2hhZGVzW2Ake2F9MDBgXS5kZXNjcmlwdGlvblxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVTZW1hbnRpY1BhbGV0dGUoYWNjZW50cywgcGFsZXR0ZSkge1xuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyhhY2NlbnRzKS5mb3JFYWNoKChbbmFtZSwgYWxpYXNdKSA9PiB7XG4gICAgICAgIHJlc3VsdFtuYW1lXSA9IGdlbmVyYXRlU2VtYW50aWNTaGFkZXMoYWxpYXMsIHBhbGV0dGVbYWxpYXNdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiZXhwb3J0IGNvbnN0IHRoZW1lcyA9IFtcbiAgICAnbGlnaHRCYXNlJyxcbiAgICAnZGFya0Jhc2UnLFxuICAgICdkYXJrRWxldmF0ZWQnXG5dO1xuZXhwb3J0IGNvbnN0IHJhZGlpU2l6ZU5hbWUgPSBbXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJsYXJnZVwiLFxuXTtcbmV4cG9ydCBjb25zdCByYWRpaVNpemVWYWx1ZXMgPSBbXG4gICAgNCxcbiAgICA2LFxuICAgIDgsXG5dO1xuZXhwb3J0IGNvbnN0IHNwYWNpbmdTaXplTmFtZSA9IFtcbiAgICBcImNvbXBhY3RcIixcbiAgICBcImJhc2VcIixcbiAgICBcImxhcmdlXCIsXG4gICAgXCJ0b3VjaFwiLFxuXTtcbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5U2l6ZU5hbWUgPSBbXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJsYXJnZVwiLFxuXTtcbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5U2l6ZVZhbHVlcyA9IFtcbiAgICBcIjEzLzE2XCIsXG4gICAgXCIxNS8yMFwiLFxuICAgIFwiMTcvMjRcIixcbl07XG5leHBvcnQgY29uc3QgaWNvblNpemVOYW1lID0gW1xuICAgIFwiYmFzZVwiLFxuICAgIFwidG91Y2hcIlxuXTtcbmV4cG9ydCBjb25zdCBpY29uU2l6ZVZhbHVlcyA9IFtcbiAgICBcIjE2XCIsXG4gICAgXCIyNFwiLFxuXTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BY2NlbnRMaXN0ID0gW1xuICAgIFwicmVkXCIsXG4gICAgXCJhbWJlclwiLFxuICAgIFwiYnJvd25cIixcbiAgICBcImdyZWVuXCIsXG4gICAgXCJ0ZWFsXCIsXG4gICAgXCJibHVlXCIsXG4gICAgXCJpbmRpZ29cIixcbiAgICBcInZpb2xldFwiLFxuICAgIFwicHVycGxlXCIsXG4gICAgXCJwaW5rXCJcbl07XG5leHBvcnQgY29uc3QgZGVmYXVsdEFjY2VudEhVRXMgPSB7XG4gICAgXCJyZWRcIjogNCxcbiAgICBcImFtYmVyXCI6IDI1LFxuICAgIFwiYnJvd25cIjogMzMsXG4gICAgXCJncmVlblwiOiAxNTAsXG4gICAgXCJ0ZWFsXCI6IDE4MCxcbiAgICBcImJsdWVcIjogMjEwLFxuICAgIFwiaW5kaWdvXCI6IDI0MCxcbiAgICBcInZpb2xldFwiOiAyNjAsXG4gICAgXCJwdXJwbGVcIjogMjgwLFxuICAgIFwicGlua1wiOiAzNDBcbn07XG5leHBvcnQgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgIHR5cGU6ICdJTVBPUlQnLFxuICAgIHRoZW1lOiAnbGlnaHQnLFxuICAgIGh1ZTogMTkwLFxuICAgIHNhdHVyYXRpb246IDAuMixcbiAgICBkaXN0YW5jZTogMC4wMixcbiAgICBwcmltYXJ5OiAnYmx1ZScsXG4gICAgaW5mbzogJ3RlYWwnLFxuICAgIHN1Y2Nlc3M6ICdncmVlbicsXG4gICAgd2FybmluZzogJ2FtYmVyJyxcbiAgICBkYW5nZXI6ICdyZWQnLFxuICAgIHJlZDogNCxcbiAgICBhbWJlcjogMjUsXG4gICAgYnJvd246IDMzLFxuICAgIGdyZWVuOiAxNTAsXG4gICAgdGVhbDogMTg1LFxuICAgIGJsdWU6IDIxMCxcbiAgICBpbmRpZ286IDI0MCxcbiAgICB2aW9sZXQ6IDI2MCxcbiAgICBwdXJwbGU6IDI4MCxcbiAgICBwaW5rOiAzNDAsXG4gICAgYmFzZUZvbnRTaXplOiAnYmFzZScsXG4gICAgdHlwZVNjYWxlOiAnbWlub3JUaGlyZCcsXG4gICAgY3JlYXRlU3R5bGVzOiB0cnVlLFxuICAgIGFjY2VudFNhdHVyYXRpb246IDAuOSxcbiAgICBhY2NlbnRNYXhMdW1pbmFuY2U6IDAuNDUsXG4gICAgYWNjZW50TWlkTHVtaW5hbmNlOiAwLjE4LFxuICAgIGFjY2VudE1pbkx1bWluYW5jZTogMC4xMCxcbiAgICByYWRpaTogJ2Jhc2UnLFxuICAgIHNwYWNpbmc6ICdiYXNlJyxcbiAgICBzaW5nbGVDb2xsZWN0aW9uOiBmYWxzZVxufTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2VtYW50aWNBY2NlbnRzID0ge1xuICAgIHByaW1hcnk6ICdibHVlJyxcbiAgICBpbmZvOiAndGVhbCcsXG4gICAgc3VjY2VzczogJ2dyZWVuJyxcbiAgICB3YXJuaW5nOiAnYW1iZXInLFxuICAgIGRhbmdlcjogJ3JlZCdcbn07XG4iLCJpbXBvcnQgZWxldmF0aW9uVG9rZW5zIGZyb20gJy4vdG9rZW5zL2VmZmVjdHMvZWxldmF0aW9uLmpzb24nO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgZWxldmF0aW9uID0gZmxhdHRlbk9iamVjdChlbGV2YXRpb25Ub2tlbnMpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZXZhdGlvblRva2VucygpIHtcbiAgICByZXR1cm4gZWxldmF0aW9uVG9rZW5zO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBkZWxheUFzeW5jIH0gZnJvbSBcIi4vdXRpbHMvZGVsYXktYXN5bmNcIjtcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50cygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBmaWdtYS5za2lwSW52aXNpYmxlSW5zdGFuY2VDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIGxldCBwYWdlQ29tcG9uZW50cyA9IFtdO1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgICAgICAgICBwYWdlQ29tcG9uZW50cyA9IHBhZ2VDb21wb25lbnRzLmNvbmNhdChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5maW5kQWxsV2l0aENyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBub2RlLmZpbmRBbGxXaXRoQ3JpdGVyaWEoeyB0eXBlczogWydDT01QT05FTlQnXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvbXBvbmVudHMgPSBwYWdlQ29tcG9uZW50cy5jb25jYXQoY29tcG9uZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYWdlQ29tcG9uZW50cyA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGxXaXRoQ3JpdGVyaWEoeyB0eXBlczogWydDT01QT05FTlQnXSB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaXplID0gcGFnZUNvbXBvbmVudHMubGVuZ3RoO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICB3aGlsZSAocGFnZUNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRGcmFtZSA9IHBhZ2VDb21wb25lbnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50RnJhbWUubmFtZSA9PSAnc3RhdGU9OmZvY3VzLCBzdHlsZT1kZWZhdWx0LCBzZWxlY3RlZD1mYWxzZScpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGNvbXBvbmVudEZyYW1lLmZpbmRBbGwoKG4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobi5sYXlvdXRQb3NpdGlvbmluZyA9PSAnQUJTT0xVVEUnICYmICFuLmNvbnN0cmFpbnRzKVxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbi5sYXlvdXRQb3NpdGlvbmluZyA9PSAnQUJTT0xVVEUnXG4gICAgICAgICAgICAgICAgICAgICYmIG4ud2lkdGggPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIG4uaGVpZ2h0ID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBuLmNvbnN0cmFpbnRzLmhvcml6b250YWwgPT09ICdTVFJFVENIJ1xuICAgICAgICAgICAgICAgICAgICAmJiBuLmNvbnN0cmFpbnRzLnZlcnRpY2FsID09PSAnU1RSRVRDSCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlpZWxkIGZpeExheWVycyhjaGlsZHJlbiwgY29tcG9uZW50RnJhbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjQ29tcG9uZW50ICR7Y291bnQrK30gLyAke3NpemV9YCwgYGNvbG9yOiAjMDc3M0RGOyBmb250LXdlaWdodDogYm9sZDtgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4TGF5ZXJzKG5vZGVzLCBjb21wb25lbnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgbm9kZSwgcGFyZW50LCBvZmZzZXRYLCBvZmZzZXRZLCBoZWlnaHQsIHdpZHRoO1xuICAgICAgICBsZXQgdXBkYXRlZCA9IDAsIHNraXBwZWQgPSAwLCBmYWlsZWQgPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhgV29ya2luZyBvbiAke2NvbXBvbmVudC5uYW1lfWApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2hpbGUgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1haW5pbmcgbm9kZXM6ICR7bm9kZXMubGVuZ3RofWApO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2Rlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0luc3RhbmNlKG5vZGUsIGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2tpcHBlZCsrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gbm9kZS55O1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IHBhcmVudC5oZWlnaHQgLSAyICogb2Zmc2V0WTtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHBhcmVudC53aWR0aCAtIDIgKiBvZmZzZXRYO1xuICAgICAgICAgICAgICAgIG5vZGUucmVzaXplKHdpZHRoICogMC44LCBoZWlnaHQgKiAwLjgpO1xuICAgICAgICAgICAgICAgIHlpZWxkIGRlbGF5QXN5bmMoMTApO1xuICAgICAgICAgICAgICAgIG5vZGUucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZWQrKztcbiAgICAgICAgICAgICAgICB5aWVsZCBkZWxheUFzeW5jKDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZXNpemVkOiAke3VwZGF0ZWR9LCBTa2lwcGVkOiAke3NraXBwZWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGZhaWxlZCsrO1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNoZWNrSW5zdGFuY2UodGFyZ2V0RnJhbWUsIGNvbXBvbmVudEZyYW1lKSB7XG4gICAgbGV0IG5vZGUgPSB0YXJnZXRGcmFtZS5wYXJlbnQ7XG4gICAgd2hpbGUgKG5vZGUgIT0gY29tcG9uZW50RnJhbWUpIHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvcGFjaXR5VG9rZW5zIGZyb20gXCIuL3Rva2Vucy9vcGFjaXR5L29wYWNpdHkuanNvblwiO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5leHBvcnQgY29uc3Qgb3BhY2l0eSA9IGZsYXR0ZW5PYmplY3Qob3BhY2l0eVRva2Vucyk7XG4iLCJpbXBvcnQgYmFzZVJhZGlpVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9yYWRpaS9iYXNlLmpzb25cIjtcbmltcG9ydCBjb21wYWN0UmFkaWlUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3JhZGlpL2NvbXBhY3QuanNvblwiO1xuaW1wb3J0IGxhcmdlUmFkaWlUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3JhZGlpL2xhcmdlLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IGJhc2UgPSBmbGF0dGVuT2JqZWN0KGJhc2VSYWRpaVRva2Vucyk7XG5leHBvcnQgY29uc3QgY29tcGFjdCA9IGZsYXR0ZW5PYmplY3QoY29tcGFjdFJhZGlpVG9rZW5zKTtcbmV4cG9ydCBjb25zdCBsYXJnZSA9IGZsYXR0ZW5PYmplY3QobGFyZ2VSYWRpaVRva2Vucyk7XG4iLCJpbXBvcnQgYmFzZVNpemluZ1Rva2VucyBmcm9tIFwiLi90b2tlbnMvc2l6aW5nL2Jhc2UuanNvblwiO1xuaW1wb3J0IHRvdWNoU2l6aW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zaXppbmcvdG91Y2guanNvblwiO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgYmFzZSA9IGZsYXR0ZW5PYmplY3QoYmFzZVNpemluZ1Rva2Vucyk7XG5leHBvcnQgY29uc3QgdG91Y2ggPSBmbGF0dGVuT2JqZWN0KHRvdWNoU2l6aW5nVG9rZW5zKTtcbiIsImltcG9ydCBiYXNlU3BhY2luZ1Rva2VucyBmcm9tIFwiLi90b2tlbnMvc3BhY2luZy9iYXNlLmpzb25cIjtcbmltcG9ydCBjb21wYWN0U3BhY2luZ1Rva2VucyBmcm9tIFwiLi90b2tlbnMvc3BhY2luZy9jb21wYWN0Lmpzb25cIjtcbmltcG9ydCBsYXJnZVNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvbGFyZ2UuanNvblwiO1xuaW1wb3J0IHRvdWNoU3BhY2luZ1Rva2VucyBmcm9tIFwiLi90b2tlbnMvc3BhY2luZy90b3VjaC5qc29uXCI7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZmxhdHRlbi1vYmplY3RcIjtcbmV4cG9ydCBjb25zdCBiYXNlID0gZmxhdHRlbk9iamVjdChiYXNlU3BhY2luZ1Rva2Vucyk7XG5leHBvcnQgY29uc3QgY29tcGFjdCA9IGZsYXR0ZW5PYmplY3QoY29tcGFjdFNwYWNpbmdUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IGxhcmdlID0gZmxhdHRlbk9iamVjdChsYXJnZVNwYWNpbmdUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IHRvdWNoID0gZmxhdHRlbk9iamVjdCh0b3VjaFNwYWNpbmdUb2tlbnMpO1xuIiwiaW1wb3J0IHRleHRTdHlsZVRva2VucyBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9zdHlsZXMuanNvblwiO1xuaW1wb3J0IHR5cGVGYWNlVG9rZW5zIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L3R5cGVmYWNlLmpzb25cIjtcbmltcG9ydCBiYXNlTWFqb3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci10aGlyZC90eXBlc2NhbGUtYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdE1ham9yVGhpcmQgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvbWFqb3ItdGhpcmQvdHlwZXNjYWxlLWNvbXBhY3QuanNvblwiO1xuaW1wb3J0IGxhcmdlTWFqb3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci10aGlyZC90eXBlc2NhbGUtbGFyZ2UuanNvblwiO1xuaW1wb3J0IGJhc2VNaW5vclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21pbm9yLXRoaXJkL3R5cGVzY2FsZS1iYXNlLmpzb25cIjtcbmltcG9ydCBjb21wYWN0TWlub3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9taW5vci10aGlyZC90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VNaW5vclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21pbm9yLXRoaXJkL3R5cGVzY2FsZS1sYXJnZS5qc29uXCI7XG5pbXBvcnQgYmFzZU1ham9yU2Vjb25kIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXNlY29uZC90eXBlc2NhbGUtYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdE1ham9yU2Vjb25kIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXNlY29uZC90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VNYWpvclNlY29uZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci1zZWNvbmQvdHlwZXNjYWxlLWxhcmdlLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IGJhc2UgPSBmbGF0dGVuT2JqZWN0KGJhc2VNaW5vclRoaXJkKTtcbmV4cG9ydCBjb25zdCBjb21wYWN0ID0gZmxhdHRlbk9iamVjdChjb21wYWN0TWlub3JUaGlyZCk7XG5leHBvcnQgY29uc3QgbGFyZ2UgPSBmbGF0dGVuT2JqZWN0KGxhcmdlTWlub3JUaGlyZCk7XG5jb25zdCBzdHlsZXMgPSBmbGF0dGVuT2JqZWN0KHRleHRTdHlsZVRva2Vucyk7XG5jb25zdCB0b2tlbnMgPSB7XG4gICAgbWFqb3JUaGlyZDoge1xuICAgICAgICBiYXNlOiBmbGF0dGVuT2JqZWN0KGJhc2VNYWpvclRoaXJkKSxcbiAgICAgICAgY29tcGFjdDogZmxhdHRlbk9iamVjdChjb21wYWN0TWFqb3JUaGlyZCksXG4gICAgICAgIGxhcmdlOiBmbGF0dGVuT2JqZWN0KGxhcmdlTWFqb3JUaGlyZCksXG4gICAgfSxcbiAgICBtaW5vclRoaXJkOiB7XG4gICAgICAgIGJhc2U6IGZsYXR0ZW5PYmplY3QoYmFzZU1pbm9yVGhpcmQpLFxuICAgICAgICBjb21wYWN0OiBmbGF0dGVuT2JqZWN0KGNvbXBhY3RNaW5vclRoaXJkKSxcbiAgICAgICAgbGFyZ2U6IGZsYXR0ZW5PYmplY3QobGFyZ2VNaW5vclRoaXJkKSxcbiAgICB9LFxuICAgIG1ham9yU2Vjb25kOiB7XG4gICAgICAgIGJhc2U6IGZsYXR0ZW5PYmplY3QoYmFzZU1ham9yU2Vjb25kKSxcbiAgICAgICAgY29tcGFjdDogZmxhdHRlbk9iamVjdChjb21wYWN0TWFqb3JTZWNvbmQpLFxuICAgICAgICBsYXJnZTogZmxhdHRlbk9iamVjdChsYXJnZU1ham9yU2Vjb25kKSxcbiAgICB9LFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBvZ3Jhb2h5VG9rZW5zKHNpemUsIHNjYWxlID0gXCJtaW5vclRoaXJkXCIpIHtcbiAgICBsZXQgc2NhbGVUb2tlbnMgPSB0b2tlbnNbc2NhbGVdW3NpemVdO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmxhdHRlbk9iamVjdCh0eXBlRmFjZVRva2VucykpLCBzY2FsZVRva2VucyksIHN0eWxlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9udERldGFpbHMoKSB7XG4gICAgbGV0IG5hbWVzID0gW107XG4gICAgY29uc3QgdG9rZW5zID0gdHlwZUZhY2VUb2tlbnM7XG4gICAgY29uc3QgZmFtaWx5ID0gdHlwZUZhY2VUb2tlbnNbXCJmb250LWZhbWlseVwiXS5wcmltYXJ5LiR2YWx1ZTtcbiAgICBmb3IgKGxldCBbbmFtZSwgZm9udFdlaWdodF0gb2YgT2JqZWN0LmVudHJpZXModHlwZUZhY2VUb2tlbnNbXCJmb250LXdlaWdodFwiXSkpIHtcbiAgICAgICAgbmFtZXMucHVzaCh7IGZhbWlseSwgc3R5bGU6IGZvbnRXZWlnaHQuJHZhbHVlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gX2Nsb25lKHZhbCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwubWFwKHggPT4gX2Nsb25lKHgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBfY2xvbmUodmFsW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgJ3Vua25vd24nO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlbGF5QXN5bmModGltZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGRlbGF5QXN5bmMgfSBmcm9tIFwiLi9kZWxheS1hc3luY1wiO1xubGV0IHRvdGFsTGF5ZXJzQ291bnQgPSAwO1xubGV0IHJlYm91bmRMYXllcnNDb3VudCA9IDA7XG5sZXQgc2tpcHBlZExheWVyc0NvdW50ID0gMDtcbmxldCBtaXNzaW5nTGF5ZXJzQ291bnQgPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFN0eWxlVGVtcGxhdGVzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRvdGFsTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICByZWJvdW5kTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICBza2lwcGVkTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICBsZXQgX25vZGVzID0gW107XG4gICAgICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIlNlbGVjdCBhdCBsZWFzdCBvbmUgbGF5ZXIgYW5kIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PSBcIkNPTVBPTkVOVFwiKSB7XG4gICAgICAgICAgICAgICAgX25vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdmaW5kQWxsV2l0aENyaXRlcmlhJyBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Tm9kZXMgPSBub2RlLmZpbmRBbGxXaXRoQ3JpdGVyaWEoeyB0eXBlczogW1wiQ09NUE9ORU5UXCJdIH0pO1xuICAgICAgICAgICAgICAgIF9ub2RlcyA9IF9ub2Rlcy5jb25jYXQoY29tcG9uZW50Tm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRnJhbWUgPSBjcmVhdGVGcmFtZU5vZGUoKTtcbiAgICAgICAgY29udGFpbmVyRnJhbWUuZmlsbHMgPSBbXG4gICAgICAgICAgICBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvclBhaW50KHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfSwgXCJjb2xvclwiLCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZXMoKS5maW5kKG4gPT4gbi5uYW1lID09ICdmaWxsL2Jhc2UvMzAwJykpXG4gICAgICAgIF07XG4gICAgICAgIGNvbnRhaW5lckZyYW1lLmxheW91dE1vZGUgPSAnVkVSVElDQUwnO1xuICAgICAgICBjb250YWluZXJGcmFtZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gJ0hVRyc7XG4gICAgICAgIGNvbnRhaW5lckZyYW1lLmxheW91dFNpemluZ1ZlcnRpY2FsID0gJ0hVRyc7XG4gICAgICAgIGNvbnRhaW5lckZyYW1lLnBhZGRpbmdCb3R0b20gPSA4MDtcbiAgICAgICAgY29udGFpbmVyRnJhbWUucGFkZGluZ0xlZnQgPSA5NjtcbiAgICAgICAgY29udGFpbmVyRnJhbWUucGFkZGluZ1JpZ2h0ID0gOTY7XG4gICAgICAgIGNvbnRhaW5lckZyYW1lLnBhZGRpbmdUb3AgPSAwO1xuICAgICAgICBjb250YWluZXJGcmFtZS5zZXRCb3VuZFZhcmlhYmxlKCd0b3BMZWZ0UmFkaXVzJywgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVzKCkuZmluZChuID0+IG4ubmFtZSA9PSAncmFkaWkveGwyJykuaWQpO1xuICAgICAgICBjb250YWluZXJGcmFtZS5zZXRCb3VuZFZhcmlhYmxlKCd0b3BSaWdodFJhZGl1cycsIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlcygpLmZpbmQobiA9PiBuLm5hbWUgPT0gJ3JhZGlpL3hsMicpLmlkKTtcbiAgICAgICAgY29udGFpbmVyRnJhbWUuc2V0Qm91bmRWYXJpYWJsZSgnYm90dG9tTGVmdFJhZGl1cycsIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlcygpLmZpbmQobiA9PiBuLm5hbWUgPT0gJ3JhZGlpL3hsMicpLmlkKTtcbiAgICAgICAgY29udGFpbmVyRnJhbWUuc2V0Qm91bmRWYXJpYWJsZSgnYm90dG9tUmlnaHRSYWRpdXMnLCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZXMoKS5maW5kKG4gPT4gbi5uYW1lID09ICdyYWRpaS94bDInKS5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ub2Rlcyk7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gX25vZGVzLmxlbmd0aDtcbiAgICAgICAgdG90YWxMYXllcnNDb3VudCA9IHRvdGFsO1xuICAgICAgICB3aGlsZSAoX25vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Tm9kZSA9IF9ub2Rlcy5zaGlmdCgpO1xuICAgICAgICAgICAgLy8gKDcwIC0gNDQpIC8gNzBcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKCgodG90YWwgLSBfbm9kZXMubGVuZ3RoKSAvIHRvdGFsKSAqIDEwMCk7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgJHtwZXJjZW50fSUgZG9uZS4gV29ya2luZyBvbiBsYXllciAke3RvdGFsIC0gX25vZGVzLmxlbmd0aH0gb3V0IG9mICR7dG90YWx9YDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICBjb250YWluZXJGcmFtZS5hcHBlbmRDaGlsZChjaGVja05vZGUoY29tcG9uZW50Tm9kZSkpO1xuICAgICAgICAgICAgeWllbGQgZGVsYXlBc3luYygxMCk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2NvbnRhaW5lckZyYW1lXTtcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hlY2tOb2RlKG5vZGUpIHtcbiAgICBsZXQgcGFyZW50O1xuICAgIGlmIChub2RlLnBhcmVudC50eXBlID09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICBwYXJlbnQgPSBnZXRGcmFtZShub2RlLnBhcmVudCk7XG4gICAgfVxuICAgIGNvbnN0IGZyYW1lID0gcHJvY2Vzc0NvbXBvbmVudE5vZGUobm9kZSk7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgICAgICBmcmFtZS54ID0gbm9kZS54O1xuICAgICAgICBmcmFtZS55ID0gbm9kZS55O1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gZnJhbWU7XG59XG5mdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50Tm9kZShub2RlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBub2RlLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgY29uc3QgZnJhbWUgPSBpbnN0YW5jZS5kZXRhY2hJbnN0YW5jZSgpO1xuICAgIGZyYW1lLm5hbWUgPSBub2RlLm5hbWU7XG4gICAgY29uc3QgaW5zdGFuY2VzID0gZnJhbWUuZmluZEFsbFdpdGhDcml0ZXJpYSh7IHR5cGVzOiBbJ0lOU1RBTkNFJ10gfSk7XG4gICAgaW5zdGFuY2VzLmZvckVhY2goaSA9PiB7XG4gICAgICAgIGkubWFpbkNvbXBvbmVudC5uYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiBmcmFtZTtcbn1cbmNvbnN0IGNvbXBvbmVudFNldEZyYW1lc0NhY2hlID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0RnJhbWUoY21wU2V0KSB7XG4gICAgY29uc3QgY2hhY2hlZEZyYW1lID0gY29tcG9uZW50U2V0RnJhbWVzQ2FjaGUuZ2V0KGNtcFNldC5uYW1lKTtcbiAgICBpZiAoY2hhY2hlZEZyYW1lKSB7XG4gICAgICAgIHJldHVybiBjaGFjaGVkRnJhbWU7XG4gICAgfVxuICAgIGNvbnN0IGZyYW1lID0gY3JlYXRlRnJhbWVOb2RlKCk7XG4gICAgZnJhbWUubmFtZSA9IGNtcFNldC5uYW1lO1xuICAgIGZyYW1lLnJlc2l6ZShjbXBTZXQud2lkdGgsIGNtcFNldC5oZWlnaHQpO1xuICAgIGNvbXBvbmVudFNldEZyYW1lc0NhY2hlLnNldChjbXBTZXQubmFtZSwgZnJhbWUpO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtmcmFtZV07XG4gICAgcmV0dXJuIGZyYW1lO1xufVxuZnVuY3Rpb24gY3JlYXRlRnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBmcmFtZS5maWxscyA9IFtcbiAgICAgICAgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludCh7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH0sIFwiY29sb3JcIiwgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVzKCkuZmluZChuID0+IG4ubmFtZSA9PSAnY2FyZC9iZy9wcmltYXJ5JykpXG4gICAgXTtcbiAgICBmcmFtZS5zdHJva2VzID0gW1xuICAgICAgICBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvclBhaW50KHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfSwgXCJjb2xvclwiLCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZXMoKS5maW5kKG4gPT4gbi5uYW1lID09ICdjYXJkL2JvcmRlci9vdXRlcicpKVxuICAgIF07XG4gICAgZnJhbWUuc2V0Qm91bmRWYXJpYWJsZSgndG9wTGVmdFJhZGl1cycsIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlcygpLmZpbmQobiA9PiBuLm5hbWUgPT0gJ3JhZGlpL3hsJykuaWQpO1xuICAgIGZyYW1lLnNldEJvdW5kVmFyaWFibGUoJ3RvcFJpZ2h0UmFkaXVzJywgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVzKCkuZmluZChuID0+IG4ubmFtZSA9PSAncmFkaWkveGwnKS5pZCk7XG4gICAgZnJhbWUuc2V0Qm91bmRWYXJpYWJsZSgnYm90dG9tTGVmdFJhZGl1cycsIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlcygpLmZpbmQobiA9PiBuLm5hbWUgPT0gJ3JhZGlpL3hsJykuaWQpO1xuICAgIGZyYW1lLnNldEJvdW5kVmFyaWFibGUoJ2JvdHRvbVJpZ2h0UmFkaXVzJywgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVzKCkuZmluZChuID0+IG4ubmFtZSA9PSAncmFkaWkveGwnKS5pZCk7XG4gICAgZnJhbWUueCA9IC0xMDAwMDtcbiAgICBmcmFtZS55ID0gLTEwMDAwO1xuICAgIHJldHVybiBmcmFtZTtcbn1cbiIsImltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmltcG9ydCB7IHBhcnNlUmVmZXJlbmNlR2xvYmFsIH0gZnJvbSAnLi90b2tlbi1yZWZlcmVuY2VzJztcbmNvbnN0IGhleENvbG9yUmVnZXggPSAvXiMoWzAtOWEtZl17M318WzAtOWEtZl17Nn0pJC9pO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRGaWdtYUNvbG9yVG9SZ2IoaW5wdXQsIGZvcm1hdCkge1xuICAgIGNvbnN0IHsgciwgZywgYiwgYSB9ID0gaW5wdXQ7XG4gICAgLy9maWdtYSB1c2VzIGZsb2F0IDAuLi4xIHZzIHN0YW5kYXJkIDAuLi4yNTVcbiAgICBjb25zdCBmaWdtYUNvbG9yVHJhbnNmb3JtZWQgPSB7XG4gICAgICAgIHI6IGlucHV0LnIgKiAyNTUsXG4gICAgICAgIGc6IGlucHV0LmcgKiAyNTUsXG4gICAgICAgIGI6IGlucHV0LmIgKiAyNTUsXG4gICAgICAgIGE6IGlucHV0LmFcbiAgICB9O1xuICAgIGxldCBjb2xvciA9IGNocm9tYS5nbChyLCBnLCBiLCBhKTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICBjYXNlICdoZXgnOiB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IuaGV4KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnaHNsJzoge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNzcygnaHNsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNzcygpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3JWYWx1ZShpbnB1dCwgYWRqdXN0bWVudHMpIHtcbiAgICBsZXQgY29sb3I7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGlucHV0LnN0YXJ0c1dpdGgoJ3JnYicpKSB7XG4gICAgICAgICAgICBjb25zdCByZ2JWYWx1ZXMgPSBpbnB1dC5yZXBsYWNlKC9ecmdiYT9cXCh8XFxzK3xcXCkkL2csICcnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgaWYgKGhleENvbG9yUmVnZXgudGVzdChyZ2JWYWx1ZXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBjaHJvbWEocmdiVmFsdWVzWzBdKTsgLy8gaGV4VG9GaWdtYVJHQihyZ2JWYWx1ZXNbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFscGhhID0gcGFyc2VGbG9hdChyZ2JWYWx1ZXNbMV0pO1xuICAgICAgICAgICAgICAgIGNvbG9yID0gY29sb3IuYWxwaGEoYWxwaGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBjaHJvbWEoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sb3IgPSBjaHJvbWEoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGFkanVzdG1lbnRzKSB7XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5oKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLmgnLCBgJHthZGp1c3RtZW50cy5ofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5zKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLnMnLCBgJHthZGp1c3RtZW50cy5zfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5sKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLmwnLCBgJHthZGp1c3RtZW50cy5sfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5hKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLmEnLCBgJHthZGp1c3RtZW50cy5hfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtyLCBnLCBiLCBhXSA9IGNvbG9yLmdsKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2w6IHsgciwgZywgYiwgYSB9LFxuICAgICAgICByZ2I6IGNvbG9yLmNzcygpLFxuICAgICAgICBoc2w6IGNvbG9yLmNzcygnaHNsJyksXG4gICAgICAgIGhleDogY29sb3IuaGV4KClcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3JUb2tlbih0b2tlbiwgZGljdGlvbmFyeSwgb3V0cHV0ID0gJ2dsJykge1xuICAgIGxldCBjb2xvciA9IHRva2VuLiR2YWx1ZTtcbiAgICBjb2xvciA9IHBhcnNlUmVmZXJlbmNlR2xvYmFsKGNvbG9yLnRyaW0oKSwgZGljdGlvbmFyeSk7XG4gICAgY29uc3QgcmVzdWx0ID0gcGFyc2VDb2xvclZhbHVlKGNvbG9yLCB0b2tlbi5hZGp1c3RtZW50cyk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0W291dHB1dF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBmb3JtYXRcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzIH0gZnJvbSBcIi4vdG9rZW4tcmVmZXJlbmNlc1wiO1xuLypcbiAgICBUaGlzIG1ldGhvZCByZWFkcyBzaGFkb3cgY29sb3IgdmFsdWVzIGRpcmVjdGx5IGZyb20gRmlnbWEgVmFyaWFibGVzXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEVmZmVjdFN0eWxlcyh0b2tlbnMpIHtcbiAgICBPYmplY3QuZW50cmllcyh0b2tlbnMpLmZvckVhY2goKFtuYW1lLCB0b2tlbkRhdGFdKSA9PiB7XG4gICAgICAgIGxldCB0b2tlbiA9IHRva2VuRGF0YTtcbiAgICAgICAgaWYgKHRva2VuLiR0eXBlID09ICdib3hTaGFkb3cnKSB7XG4gICAgICAgICAgICBsZXQgZmlnbWFTdHlsZSA9IGdldFN0eWxlQnlOYW1lKG5hbWUpIHx8IGZpZ21hLmNyZWF0ZUVmZmVjdFN0eWxlKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0b2tlbi4kdmFsdWU7XG4gICAgICAgICAgICBjb25zdCBlZmZlY3RzID0gdmFsdWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlnbWFWYXJpYWJsZSA9IGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyh2YWx1ZS5jb2xvcik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbklEID0gZmlnbWFWYXJpYWJsZS52YXJpYWJsZUNvbGxlY3Rpb25JZDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQ29sbGVjdGlvbkJ5SWQoY29sbGVjdGlvbklEKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0TW9kZSA9IGNvbGxlY3Rpb24ubW9kZXNbMF0ubW9kZUlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZ21hRWZmZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGZpZ21hVmFyaWFibGUudmFsdWVzQnlNb2RlW2RlZmF1bHRNb2RlXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVmZmVjdCA9IGNvbnZlcnRFZmZlY3RTdHlsZVRvRmlnbWEoZmlnbWFFZmZlY3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVmZmVjdFZhciA9IGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yRWZmZWN0KGVmZmVjdCwgJ2NvbG9yJywgZmlnbWFWYXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgZWZmZWN0VmFyLnNwcmVhZCA9IGVmZmVjdC5zcHJlYWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVmZmVjdFZhcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmlnbWFTdHlsZS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGZpZ21hU3R5bGUuZWZmZWN0cyA9IGVmZmVjdHM7XG4gICAgICAgICAgICBmaWdtYVN0eWxlLmRlc2NyaXB0aW9uID0gdG9rZW4uZGVzY3JpcHRpb24gfHwgZmlnbWFTdHlsZS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIC8vIGZpZ21hU3R5bGUuZG9jdW1lbnRhdGlvbkxpbmtzID0gdG9rZW4uZG9jdW1lbnRhdGlvbkxpbmsgPyBbdG9rZW4uZG9jdW1lbnRhdGlvbkxpbmtdIDogZmlnbWFTdHlsZS5kb2N1bWVudGF0aW9uTGlua3M7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldExvY2FsU3R5bGVzKCkge1xuICAgIHJldHVybiBmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlcygpO1xufVxuO1xuZnVuY3Rpb24gZ2V0U3R5bGVCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHN0eWxlc0J5VHlwZSA9IGdldExvY2FsU3R5bGVzKCk7XG4gICAgY29uc3QgbWF0Y2ggPSBzdHlsZXNCeVR5cGUuZmluZCgoc3R5bGUpID0+IHN0eWxlLm5hbWUgPT09IG5hbWUpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG47XG5mdW5jdGlvbiBwYXJzZUJvb2xlYW4odmFsKSB7XG4gICAgcmV0dXJuIHZhbCAhPT0gXCJmYWxzZVwiO1xufVxuZnVuY3Rpb24gY29udmVydEVmZmVjdFN0eWxlVG9GaWdtYSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiRFJPUF9TSEFET1dcIixcbiAgICAgICAgY29sb3I6IHZhbHVlLmNvbG9yLFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHg6IHBhcnNlRmxvYXQodmFsdWUueCksXG4gICAgICAgICAgICB5OiBwYXJzZUZsb2F0KHZhbHVlLnkpXG4gICAgICAgIH0sXG4gICAgICAgIHJhZGl1czogcGFyc2VGbG9hdCh2YWx1ZS5ibHVyKSxcbiAgICAgICAgc3ByZWFkOiBwYXJzZUZsb2F0KHZhbHVlLnNwcmVhZCksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgICAgc2hvd1NoYWRvd0JlaGluZE5vZGU6IHBhcnNlQm9vbGVhbih2YWx1ZS5zaG93U2hhZG93QmVoaW5kTm9kZSlcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgX2Nsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmltcG9ydCB7IHBhcnNlUmVmZXJlbmNlR2xvYmFsIH0gZnJvbSBcIi4vdG9rZW4tcmVmZXJlbmNlc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydFRleHRTdHlsZXModG9rZW5zKSB7XG4gICAgT2JqZWN0LmVudHJpZXModG9rZW5zKS5mb3JFYWNoKChbbmFtZSwgdG9rZW5dKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbi4kdHlwZSA9PSAndHlwb2dyYXBoeScpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0U3R5bGUgPSBnZXRTdHlsZUJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgIGxldCBuZXdTdHlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCF0ZXh0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGUgPSBmaWdtYS5jcmVhdGVUZXh0U3R5bGUoKTtcbiAgICAgICAgICAgICAgICBuZXdTdHlsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IHBhcnNlVmFsdWVzKHRva2VuLiR2YWx1ZSwgdG9rZW5zKTtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBjb252ZXJ0VGV4dFN0eWxlVG9GaWdtYShuYW1lLCByZXNvbHZlZCk7XG4gICAgICAgICAgICBpZiAoIW5ld1N0eWxlKSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZC5mb250TmFtZSA9IF9jbG9uZSh0ZXh0U3R5bGUuZm9udE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobm9ybWFsaXplZCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRleHRTdHlsZVtrZXldID0gbm9ybWFsaXplZFtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHBhcnNlVmFsdWVzKHZhbHVlLCBkaWN0aW9uYXJ5KSB7XG4gICAgbGV0IG91dHB1dCA9IHt9O1xuICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRWYWx1ZSA9IHBhcnNlUmVmZXJlbmNlR2xvYmFsKHZhbHVlLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgb3V0cHV0W2tleV0gPSByZXNvbHZlZFZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBnZXRMb2NhbFN0eWxlcygpIHtcbiAgICByZXR1cm4gZmlnbWEuZ2V0TG9jYWxUZXh0U3R5bGVzKCk7XG59XG47XG5mdW5jdGlvbiBnZXRTdHlsZUJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3Qgc3R5bGVzQnlUeXBlID0gZ2V0TG9jYWxTdHlsZXMoKTtcbiAgICBjb25zdCBtYXRjaCA9IHN0eWxlc0J5VHlwZS5maW5kKChzdHlsZSkgPT4gc3R5bGUubmFtZSA9PT0gbmFtZSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbjtcbmZ1bmN0aW9uIGNvbnZlcnRUZXh0Q2FzZVRvRmlnbWEodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAndXBwZXJjYXNlJzpcbiAgICAgICAgY2FzZSAndXBwZXInOlxuICAgICAgICAgICAgcmV0dXJuICdVUFBFUic7XG4gICAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6XG4gICAgICAgIGNhc2UgJ2xvd2VyJzpcbiAgICAgICAgICAgIHJldHVybiAnTE9XRVInO1xuICAgICAgICBjYXNlICdjYXBpdGFsaXplJzpcbiAgICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICAgICAgcmV0dXJuICdUSVRMRSc7XG4gICAgICAgIGNhc2UgJ3NtYWxsLWNhcHMnOlxuICAgICAgICBjYXNlICdzbWFsbF9jYXBzJzpcbiAgICAgICAgICAgIHJldHVybiAnU01BTExfQ0FQUyc7XG4gICAgICAgIGNhc2UgJ2FsbC1zbWFsbC1jYXBzJzpcbiAgICAgICAgY2FzZSAnc21hbGxfY2Fwc19mb3JjZWQnOlxuICAgICAgICAgICAgcmV0dXJuICdTTUFMTF9DQVBTX0ZPUkNFRCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ09SSUdJTkFMJztcbiAgICB9XG59XG5mdW5jdGlvbiBjb252ZXJ0VGV4dERlY29yYXRpb25Ub0ZpZ21hKHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ3VuZGVybGluZSc6XG4gICAgICAgICAgICByZXR1cm4gJ1VOREVSTElORSc7XG4gICAgICAgIGNhc2UgJ2xpbmUtdGhyb3VnaCc6XG4gICAgICAgIGNhc2UgJ3N0cmlrZXRocm91Z2gnOlxuICAgICAgICAgICAgcmV0dXJuICdTVFJJS0VUSFJPVUdIJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnTk9ORSc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUZXh0U3R5bGVUb0ZpZ21hKG5hbWUsIHZhbHVlcykge1xuICAgIGxldCB0ZXh0U3R5bGUgPSB7XG4gICAgICAgICduYW1lJzogbmFtZSxcbiAgICAgICAgJ2ZvbnRTaXplJzogcGFyc2VGbG9hdCh2YWx1ZXMuZm9udFNpemUpLFxuICAgICAgICAndGV4dERlY29yYXRpb24nOiBjb252ZXJ0VGV4dERlY29yYXRpb25Ub0ZpZ21hKHZhbHVlcy50ZXh0RGVjb3JhdGlvbiksXG4gICAgICAgICdmb250TmFtZSc6IHtcbiAgICAgICAgICAgIGZhbWlseTogdmFsdWVzLmZvbnRGYW1pbHksXG4gICAgICAgICAgICBzdHlsZTogdmFsdWVzLmZvbnRXZWlnaHRcbiAgICAgICAgfSxcbiAgICAgICAgJ2xldHRlclNwYWNpbmcnOiB7XG4gICAgICAgICAgICB1bml0OiB2YWx1ZXMubGV0dGVyU3BhY2luZy5pbmNsdWRlcygnJScpID8gXCJQRVJDRU5UXCIgOiBcIlBJWEVMU1wiLFxuICAgICAgICAgICAgdmFsdWU6IHBhcnNlSW50KHZhbHVlcy5sZXR0ZXJTcGFjaW5nKVxuICAgICAgICB9LFxuICAgICAgICAnbGluZUhlaWdodCc6IHtcbiAgICAgICAgICAgIHVuaXQ6IHZhbHVlcy5saW5lSGVpZ2h0LmluY2x1ZGVzKCclJykgPyBcIlBFUkNFTlRcIiA6IFwiUElYRUxTXCIsXG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdCh2YWx1ZXMubGluZUhlaWdodClcbiAgICAgICAgfSxcbiAgICAgICAgbGVhZGluZ1RyaW06IFwiTk9ORVwiLFxuICAgICAgICBwYXJhZ3JhcGhJbmRlbnQ6IDAsXG4gICAgICAgICdwYXJhZ3JhcGhTcGFjaW5nJzogcGFyc2VJbnQodmFsdWVzLnBhcmFncmFwaFNwYWNpbmcpLFxuICAgICAgICBsaXN0U3BhY2luZzogMCxcbiAgICAgICAgaGFuZ2luZ1B1bmN0dWF0aW9uOiBmYWxzZSxcbiAgICAgICAgaGFuZ2luZ0xpc3Q6IGZhbHNlLFxuICAgICAgICAndGV4dENhc2UnOiBjb252ZXJ0VGV4dENhc2VUb0ZpZ21hKHZhbHVlcy50ZXh0Q2FzZSlcbiAgICB9O1xuICAgIHJldHVybiB0ZXh0U3R5bGU7XG59XG4iLCJmdW5jdGlvbiBmaW5kVmFyaWFibGVJbkNvbGxlY3Rpb24odmFyaWFibGVOYW1lLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGZpZ21hQ29sbGVjdGlvbnMgPSBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZUNvbGxlY3Rpb25zKCk7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGZpZ21hQ29sbGVjdGlvbnMuZmluZChjb2xsZWN0aW9uID0+IGNvbGxlY3Rpb24ubmFtZSA9PT0gY29sbGVjdGlvbk5hbWUpO1xuICAgIGxldCBmaWdtYVZpcmFibGU7XG4gICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgY29sbGVjdGlvbi52YXJpYWJsZUlkcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZ21hVmFyaWFibGVJbkNvbGxlY2l0b24gPSBmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVCeUlkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gZmlnbWFWYXJpYWJsZUluQ29sbGVjaXRvbi5uYW1lID09PSB2YXJpYWJsZU5hbWU7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBmaWdtYVZpcmFibGUgPSBmaWdtYVZhcmlhYmxlSW5Db2xsZWNpdG9uO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZpZ21hVmlyYWJsZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlnbWFWYXJpYWJsZUJ5TmFtZSh2YXJpYWJsZU5hbWUsIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgaWYgKGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgICAgIHJldHVybiBmaW5kVmFyaWFibGVJbkNvbGxlY3Rpb24odmFyaWFibGVOYW1lLCBjb2xsZWN0aW9uTmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmaWdtYVZhcmlhYmxlcyA9IGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlcygpO1xuICAgICAgICByZXR1cm4gZmlnbWFWYXJpYWJsZXMuZmluZCh2YXJpYWJsZSA9PiB2YXJpYWJsZS5uYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWdtYUNvbGxlY3Rpb24obmFtZSkge1xuICAgIGNvbnN0IGZpZ21hQ29sbGVjdGlvbnMgPSBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZUNvbGxlY3Rpb25zKCk7XG4gICAgbGV0IGlzTmV3ID0gZmFsc2U7XG4gICAgbGV0IGNvbGxlY3Rpb24gPSBmaWdtYUNvbGxlY3Rpb25zLmZpbmQoY29sbGVjdGlvbiA9PiBjb2xsZWN0aW9uLm5hbWUgPT09IG5hbWUpO1xuICAgIGlmICghY29sbGVjdGlvbikge1xuICAgICAgICBpc05ldyA9IHRydWU7XG4gICAgICAgIGNvbGxlY3Rpb24gPSBmaWdtYS52YXJpYWJsZXMuY3JlYXRlVmFyaWFibGVDb2xsZWN0aW9uKG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4geyBjb2xsZWN0aW9uLCBpc05ldyB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVWYXJpYWJsZVR5cGUodHlwZU5hbWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVOYW1lKSB7XG4gICAgICAgIGNhc2UgJ2NvbG9yJzogcmV0dXJuICdDT0xPUic7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOiByZXR1cm4gJ0JPT0xFQU4nO1xuICAgICAgICBjYXNlICdudW1iZXInOiByZXR1cm4gJ0ZMT0FUJztcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICdTVFJJTkcnO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWdtYVZhcmlhYmxlKGNvbGxlY3Rpb24sIG1vZGVJZCwgdHlwZSwgdmFyaWFibGVOYW1lLCB2YWx1ZSA9IG51bGwsIHNjb3BlcyA9IFsnQUxMX1NDT1BFUyddLCBkZXNjcmlwdGlvbiA9IG51bGwpIHtcbiAgICBsZXQgZmlnbWFWYXJpYWJsZSA9IGZpbmRGaWdtYVZhcmlhYmxlQnlOYW1lKHZhcmlhYmxlTmFtZSwgY29sbGVjdGlvbi5uYW1lKTtcbiAgICBpZiAoIWZpZ21hVmFyaWFibGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpZ21hVmFyaWFibGUgPSBmaWdtYS52YXJpYWJsZXMuY3JlYXRlVmFyaWFibGUodmFyaWFibGVOYW1lLCBjb2xsZWN0aW9uLmlkLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgIT0gZmlnbWFWYXJpYWJsZS5yZXNvbHZlZFR5cGUpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBmaWdtYVZhcmlhYmxlLnNldFZhbHVlRm9yTW9kZShtb2RlSWQsIHZhbHVlKTtcbiAgICB9XG4gICAgZmlnbWFWYXJpYWJsZS5zY29wZXMgPSBzY29wZXM7XG4gICAgaWYgKGRlc2NyaXB0aW9uICE9IG51bGwpIHtcbiAgICAgICAgZmlnbWFWYXJpYWJsZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZmlnbWFWYXJpYWJsZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuT2JqZWN0KGRhdGEpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCBvYmplY3RdKSA9PiB7XG4gICAgICAgIHRyYXZlcnNlVG9rZW4oe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuZnVuY3Rpb24gdHJhdmVyc2VUb2tlbih7IGtleSwgb2JqZWN0LCB0b2tlbnMsIH0pIHtcbiAgICBpZiAoIW9iamVjdClcbiAgICAgICAgZGVidWdnZXI7XG4gICAgLy8gaWYga2V5IGlzIGEgbWV0YSBmaWVsZCwgbW92ZSBvblxuICAgIGlmIChrZXkuY2hhckF0KDApID09PSBcIiRcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvYmplY3QuJHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdG9rZW5zW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBvYmplY3QpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqZWN0KS5mb3JFYWNoKChba2V5Miwgb2JqZWN0Ml0pID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkyLmNoYXJBdCgwKSAhPT0gXCIkXCIpIHtcbiAgICAgICAgICAgICAgICB0cmF2ZXJzZVRva2VuKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBgJHtrZXl9LyR7a2V5Mn1gLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IG9iamVjdDIsXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGRlbGF5QXN5bmMgfSBmcm9tIFwiLi9kZWxheS1hc3luY1wiO1xuaW1wb3J0IHsgX2Nsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmltcG9ydCB7IGJpbmRQcm9wZXJ0eVZhcmlhYmxlcywgZmluZFZhcmlhYmxlTWF0Y2ggfSBmcm9tIFwiLi9zd2FwLXZhcmlhYmxlc1wiO1xubGV0IHRvdGFsTGF5ZXJzQ291bnQgPSAwO1xubGV0IHJlYm91bmRMYXllcnNDb3VudCA9IDA7XG5sZXQgc2tpcHBlZExheWVyc0NvdW50ID0gMDtcbmxldCBtaXNzaW5nTGF5ZXJzQ291bnQgPSAwO1xuLy9jYWNoZSBhbGwgY29tcG9uZW50IHNldHMgdG8gc3BlZWQgdXAgdGhlIHByb2Nlc3NcbmxldCBjb21wb25lbnRTZXRzO1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50U2V0cygpIHtcbiAgICBpZiAoIWNvbXBvbmVudFNldHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEZpcnN0IHRpbWUgbG9vayB1cCwgcnVubmluZyBzbG93Li4uYCk7XG4gICAgICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50U2V0cyA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGxXaXRoQ3JpdGVyaWEoe1xuICAgICAgICAgICAgdHlwZXM6IFsnQ09NUE9ORU5UJywgJ0NPTVBPTkVOVF9TRVQnXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudFNldHM7XG59XG5mdW5jdGlvbiBmaW5kQ29tcG9uZW50KGNtcE5hbWUpIHtcbiAgICBsZXQgbWFzdGVyQ29tcG9uZW50ID0gZ2V0Q29tcG9uZW50U2V0cygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGNtcE5hbWUpO1xuICAgIHJldHVybiBtYXN0ZXJDb21wb25lbnQgfHwgbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRTdHlsZVRlbXBsYXRlcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0b3RhbExheWVyc0NvdW50ID0gMDtcbiAgICAgICAgcmVib3VuZExheWVyc0NvdW50ID0gMDtcbiAgICAgICAgc2tpcHBlZExheWVyc0NvdW50ID0gMDtcbiAgICAgICAgbGV0IF9ub2RlcyA9IFtdO1xuICAgICAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJTZWxlY3QgYXQgbGVhc3Qgb25lIGxheWVyIGFuZCB0cnkgYWdhaW5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICgnY2hpbGRyZW4nIGluIG5vZGUpIHtcbiAgICAgICAgICAgICAgICBfbm9kZXMgPSBfbm9kZXMuY29uY2F0KG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coX25vZGVzKTtcbiAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcbiAgICAgICAgX25vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlICE9ICdGUkFNRScgfHwgbm9kZS52aXNpYmxlICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIHNraXAgZXZlcnl0aW5nIHRoYXQgaXMgbm90IGEgcmVndWxhciBmcmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Tm9kZSA9IGZpbmRDb21wb25lbnQobm9kZS5uYW1lKTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGNvbXBvbmVudE5vZGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIHRvdGFsTGF5ZXJzQ291bnQgPSB0b3RhbDtcbiAgICAgICAgd2hpbGUgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaERhdGEgPSBtYXRjaGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgoKHRvdGFsIC0gbWF0Y2hlcy5sZW5ndGgpIC8gdG90YWwpICogMTAwKTtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGAke3BlcmNlbnR9JSBkb25lLiBXb3JraW5nIG9uIGxheWVyICR7dG90YWwgLSBtYXRjaGVzLmxlbmd0aH0gb3V0IG9mICR7dG90YWx9YDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICBpZiAobWF0Y2hEYXRhLnRhcmdldC50eXBlID09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgICAgIG1hdGNoRGF0YS5zb3VyY2UuY2hpbGRyZW4uZm9yRWFjaCgoc291cmNlRnJhbWUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbWF0Y2hEYXRhLnRhcmdldC5maW5kQ2hpbGQobiA9PiBuLm5hbWUgPT09IHNvdXJjZUZyYW1lLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC50eXBlKSA9PSAnQ09NUE9ORU5UJyAmJiBzb3VyY2VGcmFtZS50eXBlID09ICdGUkFNRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHByb2Nlc3NOb2RlKHNvdXJjZUZyYW1lLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgcHJvY2Vzc05vZGUobWF0Y2hEYXRhLnNvdXJjZSwgbWF0Y2hEYXRhLnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc05vZGUoc291cmNlRnJhbWUsIHRhcmdldENvbXBvbmVudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCB0YXJnZXRGcmFtZXMgPSBbXTtcbiAgICAgICAgY29weVN0eWxlcyhzb3VyY2VGcmFtZSwgdGFyZ2V0Q29tcG9uZW50KTtcbiAgICAgICAgYmluZFZhaXJhYmxlcyhzb3VyY2VGcmFtZSwgdGFyZ2V0Q29tcG9uZW50KTtcbiAgICAgICAgc291cmNlRnJhbWUuY2hpbGRyZW4uZm9yRWFjaCgoc291cmNlTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IHRhcmdldENvbXBvbmVudC5maW5kT25lKG4gPT4gbi5uYW1lID09PSBzb3VyY2VOb2RlLm5hbWUpO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gY29weSBhIGNvbXBvbmVudCBhbmQgaW5zZXJ0IGl0IGludG8gdGhlIHNhbWUgcG9zaXRpb24gYXMgaXQgaXMgaW4gc291cmNlRnJhbWVcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZSA9IHNvdXJjZU5vZGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRDb21wb25lbnQuaW5zZXJ0Q2hpbGQoaW5kZXgsIGNsb25lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNpemVBbmRSZXBvc2l0aW9uKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZU5vZGUudHlwZSA9PSAnSU5TVEFOQ0UnICYmIHRhcmdldE5vZGUudHlwZSA9PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICAgICAgY29weU92ZXJyaWRlcyhzb3VyY2VOb2RlLCB0YXJnZXROb2RlLCB0YXJnZXRDb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvdXJjZU5vZGUudHlwZSA9PSAnRlJBTUUnICYmIHRhcmdldE5vZGUudHlwZSA9PSAnRlJBTUUnIHx8XG4gICAgICAgICAgICAgICAgc291cmNlTm9kZS50eXBlID09ICdJTlNUQU5DRScgJiYgdGFyZ2V0Tm9kZS50eXBlID09ICdJTlNUQU5DRScgfHxcbiAgICAgICAgICAgICAgICBzb3VyY2VOb2RlLnR5cGUgPT0gJ0JPT0xFQU5fT1BFUkFUSU9OJyAmJiB0YXJnZXROb2RlLnR5cGUgPT0gJ0JPT0xFQU5fT1BFUkFUSU9OJykge1xuICAgICAgICAgICAgICAgIHRhcmdldEZyYW1lcy5wdXNoKHsgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRhcmdldEZyYW1lcy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29weU5vZGVQcm9wcyhkYXRhLnNvdXJjZU5vZGUsIGRhdGEudGFyZ2V0Tm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBkZWxheUFzeW5jKDEwKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNvcHlOb2RlUHJvcHMoc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSkge1xuICAgIHRhcmdldE5vZGUuZmlsbHMgPSBfY2xvbmUoc291cmNlTm9kZS5maWxscyk7XG4gICAgdGFyZ2V0Tm9kZS5lZmZlY3RzID0gX2Nsb25lKHNvdXJjZU5vZGUuZWZmZWN0cyk7XG4gICAgdGFyZ2V0Tm9kZS5zdHJva2VzID0gX2Nsb25lKHNvdXJjZU5vZGUuc3Ryb2tlcyk7XG4gICAgdGFyZ2V0Tm9kZS5vcGFjaXR5ID0gX2Nsb25lKHNvdXJjZU5vZGUub3BhY2l0eSk7XG4gICAgdGFyZ2V0Tm9kZS52aXNpYmxlID0gX2Nsb25lKHNvdXJjZU5vZGUudmlzaWJsZSk7XG4gICAgdGFyZ2V0Tm9kZS5pc01hc2sgPSBfY2xvbmUoc291cmNlTm9kZS5pc01hc2spO1xuICAgIHRhcmdldE5vZGUuc3Ryb2tlQWxpZ24gPSBfY2xvbmUoc291cmNlTm9kZS5zdHJva2VBbGlnbik7XG4gICAgdGFyZ2V0Tm9kZS5zdHJva2VBbGlnbiA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZUFsaWduKTtcbiAgICB0YXJnZXROb2RlLnN0cm9rZUNhcCA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZUNhcCk7XG4gICAgdGFyZ2V0Tm9kZS5zdHJva2VKb2luID0gX2Nsb25lKHNvdXJjZU5vZGUuc3Ryb2tlSm9pbik7XG4gICAgdGFyZ2V0Tm9kZS5zdHJva2VNaXRlckxpbWl0ID0gX2Nsb25lKHNvdXJjZU5vZGUuc3Ryb2tlTWl0ZXJMaW1pdCk7XG4gICAgdGFyZ2V0Tm9kZS5zdHJva2VTdHlsZUlkID0gX2Nsb25lKHNvdXJjZU5vZGUuc3Ryb2tlU3R5bGVJZCk7XG4gICAgdGFyZ2V0Tm9kZS5zdHJva2VXZWlnaHQgPSBfY2xvbmUoc291cmNlTm9kZS5zdHJva2VXZWlnaHQpO1xuICAgIGlmIChzb3VyY2VOb2RlLnR5cGUgPT0gJ0ZSQU1FJyAmJiB0YXJnZXROb2RlLnR5cGUgPT0gJ0ZSQU1FJykge1xuICAgICAgICB0YXJnZXROb2RlLmNvbnN0cmFpbnRzID0gX2Nsb25lKHNvdXJjZU5vZGUuY29uc3RyYWludHMpO1xuICAgICAgICB0YXJnZXROb2RlLmxheW91dEdyaWRzID0gX2Nsb25lKHNvdXJjZU5vZGUubGF5b3V0R3JpZHMpO1xuICAgICAgICB0YXJnZXROb2RlLnN0cm9rZUJvdHRvbVdlaWdodCA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZUJvdHRvbVdlaWdodCk7XG4gICAgICAgIHRhcmdldE5vZGUuc3Ryb2tlTGVmdFdlaWdodCA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZUxlZnRXZWlnaHQpO1xuICAgICAgICB0YXJnZXROb2RlLnN0cm9rZVJpZ2h0V2VpZ2h0ID0gX2Nsb25lKHNvdXJjZU5vZGUuc3Ryb2tlUmlnaHRXZWlnaHQpO1xuICAgICAgICB0YXJnZXROb2RlLnN0cm9rZVRvcFdlaWdodCA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZVRvcFdlaWdodCk7XG4gICAgfVxuICAgIGNvcHlTdHlsZXMoc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgYmluZFZhaXJhYmxlcyhzb3VyY2VOb2RlLCB0YXJnZXROb2RlKTtcbn1cbmZ1bmN0aW9uIGJpbmRWYWlyYWJsZXMoc291cmNlRnJhbWUsIHRhcmdldENvbXBvbmVudCkge1xuICAgIGNvbnN0IGJvdW5kVmFpcmFibGVzID0gT2JqZWN0LmVudHJpZXMoc291cmNlRnJhbWUuYm91bmRWYXJpYWJsZXMpO1xuICAgIGJvdW5kVmFpcmFibGVzLmZvckVhY2goKFtwcm9wTmFtZSwgdmFyQmluZGluZ10pID0+IHtcbiAgICAgICAgYmluZFZhcmlhYmxlKHNvdXJjZUZyYW1lLCB0YXJnZXRDb21wb25lbnQsIHByb3BOYW1lLCB2YXJCaW5kaW5nKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlc2l6ZUFuZFJlcG9zaXRpb24oc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSkge1xuICAgIGlmICh0YXJnZXROb2RlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc291cmNlTm9kZS50eXBlID09ICdCT09MRUFOX09QRVJBVElPTicpIHtcbiAgICAgICAgc291cmNlTm9kZS5jaGlsZHJlbi5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICAgICAgICBpZiAoJ2ZpbmRPbmUnIGluIHRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXROb2RlLmZpbmRPbmUobiA9PiBuLm5hbWUgPT09IHNvdXJjZS5uYW1lKTtcbiAgICAgICAgICAgICAgICByZXNpemVBbmRSZXBvc2l0aW9uKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YXJnZXROb2RlLnggPSBzb3VyY2VOb2RlLng7XG4gICAgICAgIHRhcmdldE5vZGUueSA9IHNvdXJjZU5vZGUueTtcbiAgICAgICAgaWYgKCdyZXNpemUnIGluIHRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGUucmVzaXplKHNvdXJjZU5vZGUud2lkdGgsIHNvdXJjZU5vZGUuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNvcHlDb21wb25lbnRQcm9wcyhzb3VyY2UsIHRhcmdldCkge1xuICAgIC8vIENPUFkgQ09NUE9ORU5UIFBST1BTIC0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdCBzb3VyY2VDb21wb25lbnRQcm9wcyA9IHNvdXJjZS5jb21wb25lbnRQcm9wZXJ0aWVzO1xuICAgIGNvbnN0IHByb3BzQ29weSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZUNvbXBvbmVudFByb3BzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIHByb3BzQ29weVtrZXldID0gc291cmNlQ29tcG9uZW50UHJvcHNba2V5XS52YWx1ZTtcbiAgICB9KTtcbiAgICB0YXJnZXQuc2V0UHJvcGVydGllcyhwcm9wc0NvcHkpO1xufVxuZnVuY3Rpb24gY29weU92ZXJyaWRlcyhzb3VyY2VOb2RlLCB0YXJnZXROb2RlLCB0YXJnZXRDb21wb25lbnQpIHtcbiAgICBpZiAodGFyZ2V0Tm9kZS50eXBlID09ICdJTlNUQU5DRScpIHtcbiAgICAgICAgLy8gU1dBUCBJTlNUQU5DRVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGNvbnN0IGRvU3dhcCA9IHNvdXJjZU5vZGUubWFpbkNvbXBvbmVudC5pZCAhPT0gdGFyZ2V0Tm9kZS5tYWluQ29tcG9uZW50LmlkO1xuICAgICAgICBpZiAoZG9Td2FwKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlLnN3YXBDb21wb25lbnQoc291cmNlTm9kZS5tYWluQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb3B5Q29tcG9uZW50UHJvcHMoc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgfVxuICAgIHNvdXJjZU5vZGUub3ZlcnJpZGVzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0YXJnZXROb2RlLnR5cGU7XG4gICAgICAgIGlmICh0eXBlICE9ICdGUkFNRScgJiZcbiAgICAgICAgICAgIHR5cGUgIT0gJ0JPT0xFQU5fT1BFUkFUSU9OJyAmJlxuICAgICAgICAgICAgdHlwZSAhPSAnQ09NUE9ORU5UX1NFVCcgJiZcbiAgICAgICAgICAgIHR5cGUgIT0gJ0NPTVBPTkVOVCcgJiZcbiAgICAgICAgICAgIHR5cGUgIT0gJ0lOU1RBTkNFJyAmJlxuICAgICAgICAgICAgdHlwZSAhPSAnR1JPVVAnICYmXG4gICAgICAgICAgICB0eXBlICE9ICdTRUNUSU9OJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGZpZ21hLmdldE5vZGVCeUlkKHByb3AuaWQpO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBwcm9wLm92ZXJyaWRkZW5GaWVsZHM7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IC8qc291cmNlLm5hbWUgPT0gdGFyZ2V0Tm9kZS5uYW1lID8gdGFyZ2V0Tm9kZSA6Ki8gdGFyZ2V0Tm9kZS5maW5kT25lKG4gPT4gbi5uYW1lID09PSBzb3VyY2UubmFtZSk7XG4gICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwcm9wTmFtZSA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZCA9PSAnc3Rva2VUb3BXZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BOYW1lID0gJ3N0cm9rZVRvcFdlaWdodCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCA9PSAnY29tcG9uZW50UHJvcGVydGllcycgJiYgc291cmNlLnR5cGUgPT0gJ0lOU1RBTkNFJyAmJiB0YXJnZXQudHlwZSA9PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvcHlDb21wb25lbnRQcm9wcyhzb3VyY2UsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BOYW1lICE9ICdjb21wb25lbnRQcm9wZXJ0eURlZmluaXRpb25zJyAmJlxuICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZSAhPSAnaGVpZ2h0JyAmJlxuICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZSAhPSAnb3ZlcmxheUJhY2tncm91bmQnICYmXG4gICAgICAgICAgICAgICAgICAgIHByb3BOYW1lICE9ICdvdmVybGF5QmFja2dyb3VuZEludGVyYWN0aW9uJyAmJlxuICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZSAhPSAnb3ZlcmxheVBvc2l0aW9uVHlwZScgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWUgIT0gJ3BhcmVudCcgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWUgIT0gJ3R5cGUnICYmXG4gICAgICAgICAgICAgICAgICAgIHByb3BOYW1lICE9ICd3aWR0aCcgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWUgIT0gJ2JvdW5kVmFyaWFibGVzJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgYXBwbHlpbmcgJHtwcm9wTmFtZX06JHtzb3VyY2VbcHJvcE5hbWVdfSB0byAke3NvdXJjZS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gX2Nsb25lKHNvdXJjZVtwcm9wTmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYmluZFZhaXJhYmxlcyhzb3VyY2UsIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlRnJhbWUsIHRhcmdldENvbXBvbmVudCkge1xuICAgIGlmICgnZWZmZWN0U3R5bGVJZCcgaW4gc291cmNlRnJhbWUgJiYgJ2VmZmVjdFN0eWxlSWQnIGluIHRhcmdldENvbXBvbmVudCkge1xuICAgICAgICB0YXJnZXRDb21wb25lbnQuZWZmZWN0U3R5bGVJZCA9IHNvdXJjZUZyYW1lLmVmZmVjdFN0eWxlSWQ7XG4gICAgfVxuICAgIGlmICgnZ3JpZFN0eWxlSWQnIGluIHNvdXJjZUZyYW1lICYmICdncmlkU3R5bGVJZCcgaW4gdGFyZ2V0Q29tcG9uZW50KSB7XG4gICAgICAgIHRhcmdldENvbXBvbmVudC5ncmlkU3R5bGVJZCA9IHNvdXJjZUZyYW1lLmdyaWRTdHlsZUlkO1xuICAgIH1cbiAgICBpZiAoJ2ZpbGxTdHlsZUlkJyBpbiBzb3VyY2VGcmFtZSAmJiAnZmlsbFN0eWxlSWQnIGluIHRhcmdldENvbXBvbmVudCkge1xuICAgICAgICB0YXJnZXRDb21wb25lbnQuZmlsbFN0eWxlSWQgPSBzb3VyY2VGcmFtZS5maWxsU3R5bGVJZDtcbiAgICB9XG4gICAgaWYgKCdzdHJva2VTdHlsZUlkJyBpbiBzb3VyY2VGcmFtZSAmJiAnc3Ryb2tlU3R5bGVJZCcgaW4gdGFyZ2V0Q29tcG9uZW50KSB7XG4gICAgICAgIHRhcmdldENvbXBvbmVudC5zdHJva2VTdHlsZUlkID0gc291cmNlRnJhbWUuc3Ryb2tlU3R5bGVJZDtcbiAgICB9XG59XG5mdW5jdGlvbiBiaW5kVmFyaWFibGUoc291cmNlRnJhbWUsIHRhcmdldENvbXBvbmVudCwgcHJvcE5hbWUsIHZhcmlhYmxlQmluZGluZykge1xuICAgIGlmIChwcm9wTmFtZSA9PSAnZmlsbHMnICYmICdmaWxscycgaW4gc291cmNlRnJhbWUgJiYgJ2ZpbGxzJyBpbiB0YXJnZXRDb21wb25lbnQgJiYgIXRhcmdldENvbXBvbmVudFsnZmlsbFN0eWxlSWQnXSkge1xuICAgICAgICB0YXJnZXRDb21wb25lbnQuZmlsbHMgPSBiaW5kUHJvcGVydHlWYXJpYWJsZXMoc291cmNlRnJhbWUuZmlsbHMsIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yUGFpbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wTmFtZSA9PSAnc3Ryb2tlcycgJiYgJ3N0cm9rZXMnIGluIHNvdXJjZUZyYW1lICYmICdzdHJva2VzJyBpbiB0YXJnZXRDb21wb25lbnQgJiYgIXRhcmdldENvbXBvbmVudFsnc3Ryb2tlU3R5bGVJZCddKSB7XG4gICAgICAgIHRhcmdldENvbXBvbmVudC5zdHJva2VzID0gYmluZFByb3BlcnR5VmFyaWFibGVzKHNvdXJjZUZyYW1lLnN0cm9rZXMsIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yUGFpbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wTmFtZSA9PSAnZWZmZWN0cycgJiYgJ2VmZmVjdHMnIGluIHNvdXJjZUZyYW1lICYmICdlZmZlY3RzJyBpbiB0YXJnZXRDb21wb25lbnQgJiYgIXRhcmdldENvbXBvbmVudFsnZWZmZWN0U3R5bGVJZCddKSB7XG4gICAgICAgIHRhcmdldENvbXBvbmVudC5lZmZlY3RzID0gYmluZFByb3BlcnR5VmFyaWFibGVzKHNvdXJjZUZyYW1lLmVmZmVjdHMsIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yRWZmZWN0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ2xheW91dEdyaWRzJyAmJiAnbGF5b3V0R3JpZHMnIGluIHNvdXJjZUZyYW1lICYmICdsYXlvdXRHcmlkcycgaW4gdGFyZ2V0Q29tcG9uZW50KSB7XG4gICAgICAgIHRhcmdldENvbXBvbmVudC5sYXlvdXRHcmlkcyA9IGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhzb3VyY2VGcmFtZS5sYXlvdXRHcmlkcywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JMYXlvdXRHcmlkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ2NvbXBvbmVudFByb3BlcnRpZXMnIHx8IHByb3BOYW1lID09ICd0ZXh0UmFuZ2VGaWxscycpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBTd2FwIGRvZXMgbm90IHdvcmsgZm9yICR7cHJvcE5hbWV9LCBza2lwcGluZyBub2RlYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGZpbmRWYXJpYWJsZU1hdGNoKHZhcmlhYmxlQmluZGluZy5pZCk7XG4gICAgICAgIGlmICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgdGFyZ2V0Q29tcG9uZW50LnNldEJvdW5kVmFyaWFibGUocHJvcE5hbWUsIG51bGwpO1xuICAgICAgICAgICAgdGFyZ2V0Q29tcG9uZW50LnNldEJvdW5kVmFyaWFibGUocHJvcE5hbWUsIHZhcmlhYmxlLmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVHdvRGlnaXRzKG51bSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChudW0gKyBOdW1iZXIuRVBTSUxPTikgKiAxMDApIC8gMTAwO1xufVxuIiwiY29uc3Qgc2l6ZVZhbHVlc09yZGVyID0gW1xuICAgICdub25lJyxcbiAgICAneHM1JyxcbiAgICAneHM1JyxcbiAgICAneHMzJyxcbiAgICAneHMyJyxcbiAgICAneHMnLFxuICAgICdzbScsXG4gICAgJ2Jhc2UnLFxuICAgICdtZCcsXG4gICAgJ2xnJyxcbiAgICAneGwnLFxuICAgICd4bDInLFxuICAgICd4bDMnLFxuICAgICd4bDQnLFxuICAgICd4bDUnLFxuICAgICd4bDYnLFxuICAgICd4bDcnLFxuICAgICdyb3VuZCdcbl07XG5jb25zdCBvcGFjaXR5VmFsdWVzT3JkZXIgPSBbXG4gICAgXCJvcGFjaXR5LTBcIixcbiAgICBcIm9wYWNpdHktNVwiLFxuICAgIFwib3BhY2l0eS0xMFwiLFxuICAgIFwib3BhY2l0eS0xNVwiLFxuICAgIFwib3BhY2l0eS0yMFwiLFxuICAgIFwib3BhY2l0eS0yNVwiLFxuICAgIFwib3BhY2l0eS0zMFwiLFxuICAgIFwib3BhY2l0eS0zNVwiLFxuICAgIFwib3BhY2l0eS00MFwiLFxuICAgIFwib3BhY2l0eS00NVwiLFxuICAgIFwib3BhY2l0eS01MFwiLFxuICAgIFwib3BhY2l0eS01NVwiLFxuICAgIFwib3BhY2l0eS02MFwiLFxuICAgIFwib3BhY2l0eS02NVwiLFxuICAgIFwib3BhY2l0eS03MFwiLFxuICAgIFwib3BhY2l0eS03NVwiLFxuICAgIFwib3BhY2l0eS04MFwiLFxuICAgIFwib3BhY2l0eS04NVwiLFxuICAgIFwib3BhY2l0eS05MFwiLFxuICAgIFwib3BhY2l0eS05NVwiLFxuICAgIFwib3BhY2l0eS0xMDBcIixcbl07XG5jb25zdCBjb2xvck5hbWVzT3JkZXIgPSBbXG4gICAgJ3ByaW1hcnknLFxuICAgICdicmFuZCcsXG4gICAgJ2ZpbGwvYmFzZScsXG4gICAgJ2ZpbGwvY29udHJhc3QnLFxuICAgICd0ZXh0L2Jhc2UvNjAwJyxcbiAgICAndGV4dC9iYXNlLzUwMCcsXG4gICAgJ3RleHQvYmFzZS80MDAnLFxuICAgICd0ZXh0L2Jhc2UvYWN0aW9uJyxcbiAgICAndGV4dC9iYXNlL2luZm8nLFxuICAgICd0ZXh0L2Jhc2Uvc3VjY2VzcycsXG4gICAgJ3RleHQvYmFzZS93YXJuaW5nJyxcbiAgICAndGV4dC9iYXNlL2RhbmdlcicsXG4gICAgJ3RleHQvY29udHJhc3QvNjAwJyxcbiAgICAndGV4dC9jb250cmFzdC81MDAnLFxuICAgICd0ZXh0L2NvbnRyYXN0LzQwMCcsXG4gICAgJ3RleHQvY29udHJhc3QvYWN0aW9uJyxcbiAgICAndGV4dC9jb250cmFzdC9pbmZvJyxcbiAgICAndGV4dC9jb250cmFzdC9zdWNjZXNzJyxcbiAgICAndGV4dC9jb250cmFzdC93YXJuaW5nJyxcbiAgICAndGV4dC9jb250cmFzdC9kYW5nZXInLFxuICAgICdzdHJva2UvYmFzZScsXG4gICAgJ3N0cm9rZS9jb250cmFzdCcsXG4gICAgJ2luZm8nLFxuICAgICdzdWNjZXNzJyxcbiAgICAnd2FybmluZycsXG4gICAgJ2RhbmdlcicsXG4gICAgJ2FsdC9iYXNlJyxcbiAgICAnYWx0L2NvbnRyYXN0JyxcbiAgICAndXRpbGl0eScsXG4gICAgJ2FjY2VudC9yZWQnLFxuICAgICdhY2NlbnQvYW1iZXInLFxuICAgICdhY2NlbnQvYnJvd24nLFxuICAgICdhY2NlbnQvZ3JlZW4nLFxuICAgICdhY2NlbnQvdGVhbCcsXG4gICAgJ2FjY2VudC9jeWFuJyxcbiAgICAnYWNjZW50L2JsdWUnLFxuICAgICdhY2NlbnQvaW5kaWdvJyxcbiAgICAnYWNjZW50L3Zpb2xldCcsXG4gICAgJ2FjY2VudC9wdXJwbGUnLFxuICAgICdhY2NlbnQvcGluaycsXG4gICAgJ3VpLWVsZW1lbnQvYmcvcmVzdCcsXG4gICAgJ3VpLWVsZW1lbnQvYmcvaG92ZXInLFxuICAgICd1aS1lbGVtZW50L2JnL2FjdGl2ZScsXG4gICAgJ3VpLWVsZW1lbnQvYmcvc2VsZWN0ZWQnLFxuICAgICd1aS1lbGVtZW50L2JnL2Rpc2FibGVkJyxcbiAgICAndWktZWxlbWVudC9ib3JkZXIvcmVzdCcsXG4gICAgJ3VpLWVsZW1lbnQvYm9yZGVyL2hvdmVyJyxcbiAgICAndWktZWxlbWVudC9ib3JkZXIvYWN0aXZlJyxcbiAgICAndWktZWxlbWVudC9ib3JkZXIvc2VsZWN0ZWQnLFxuICAgICd1aS1lbGVtZW50L2JvcmRlci9kaXNhYmxlZCcsXG4gICAgJ3VpLWVsZW1lbnQvdGV4dCcsXG4gICAgJ2J1dHRvbi9iZy9yZXN0JyxcbiAgICAnYnV0dG9uL2JnL2hvdmVyJyxcbiAgICAnYnV0dG9uL2JnL2FjdGl2ZScsXG4gICAgJ2J1dHRvbi9wcmltYXJ5JyxcbiAgICAnYnV0dG9uL3N1Y2Nlc3MnLFxuICAgICdidXR0b24vZGFuZ2VyJyxcbiAgICAnYnV0dG9uL2JvcmRlci9yZXN0JyxcbiAgICAnYnV0dG9uL2JvcmRlci9ob3ZlcicsXG4gICAgJ2J1dHRvbi9ib3JkZXIvYWN0aXZlJyxcbiAgICAnZm9ybS1lbGVtZW50L2JnL3Jlc3QnLFxuICAgICdmb3JtLWVsZW1lbnQvYmcvcmVhZG9ubHknLFxuICAgICdmb3JtLWVsZW1lbnQvYmcvaG92ZXInLFxuICAgICdmb3JtLWVsZW1lbnQvYm9yZGVyL3Jlc3QnLFxuICAgICdmb3JtLWVsZW1lbnQvYm9yZGVyL3JlYWRvbmx5JyxcbiAgICAnZm9ybS1lbGVtZW50L2JvcmRlci9ob3ZlcicsXG4gICAgJ2NhcmQvYmcvcHJpbWFyeScsXG4gICAgJ2NhcmQvYmcvc2Vjb25kYXJ5JyxcbiAgICAnY2FyZC9ib3JkZXIvaW5uZXInLFxuICAgICdjYXJkL2JvcmRlci9vdXRlcicsXG4gICAgJ292ZXJsYXkvYmcnLFxuICAgICdvdmVybGF5L2JvcmRlcicsXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yVG9rZW5zU29ydEZuKCkge1xuICAgIHJldHVybiBnZXRTb3J0Rm4oY29sb3JOYW1lc09yZGVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplVG9rZW5zU29ydEZuKCkge1xuICAgIHJldHVybiBnZXRTb3J0Rm4oc2l6ZVZhbHVlc09yZGVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcGFjaXR5VG9rZW5zU29ydEZuKCkge1xuICAgIHJldHVybiBnZXRTb3J0Rm4ob3BhY2l0eVZhbHVlc09yZGVyKTtcbn1cbmZ1bmN0aW9uIGdldFNvcnRGbihkYXRhU2V0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmaXJzdEVsLCBzZWNvbmRFbCkge1xuICAgICAgICB2YXIgcmVzdWx0Rmlyc3QgPSBkYXRhU2V0LmZpbmRJbmRleChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdEVsLm5hbWUuZW5kc1dpdGgoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVzdWx0U2Vjb25kID0gZGF0YVNldC5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2Vjb25kRWwubmFtZS5lbmRzV2l0aChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHRGaXJzdCA8IHJlc3VsdFNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xOyAvLyBmaXJzdEVsIGdvZXMgZmlyc3RcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Rmlyc3QgPiByZXN1bHRTZWNvbmQpIHtcbiAgICAgICAgICAgIHJldHVybiAxOyAvLyBzZWNvbmRFbCBnb2VzIGZpcnN0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdEZpcnN0ID09PSByZXN1bHRTZWNvbmQpIHtcbiAgICAgICAgICAgIGxldCBuYW1lMSA9IGZpcnN0RWwubmFtZTtcbiAgICAgICAgICAgIGxldCBuYW1lMiA9IHNlY29uZEVsLm5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZTEgPCBuYW1lMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTsgLy8gZmlyc3RFbCBnb2VzIGZpcnN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmFtZTEgPiBuYW1lMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAxOyAvLyBzZWNvbmRFbCBnb2VzIGZpcnN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDsgLy8ga2VlcCBvcmlnaW5hbCBvcmRlciAgICBcbiAgICB9O1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBkZWxheUFzeW5jIH0gZnJvbSBcIi4vZGVsYXktYXN5bmNcIjtcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5pbXBvcnQgeyBmaW5kRmlnbWFWYXJpYWJsZUJ5TmFtZSB9IGZyb20gXCIuL2ZpZ21hLXZhcmlhYmxlc1wiO1xubGV0IHRvdGFsTGF5ZXJzQ291bnQgPSAwO1xubGV0IHJlYm91bmRMYXllcnNDb3VudCA9IDA7XG5sZXQgc2tpcHBlZExheWVyc0NvdW50ID0gMDtcbmxldCBtaXNzaW5nTGF5ZXJzQ291bnQgPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIHN3YXBWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdG90YWxMYXllcnNDb3VudCA9IDA7XG4gICAgICAgIHJlYm91bmRMYXllcnNDb3VudCA9IDA7XG4gICAgICAgIHNraXBwZWRMYXllcnNDb3VudCA9IDA7XG4gICAgICAgIGxldCBfbm9kZXMgPSBbXTtcbiAgICAgICAgZmlnbWEuc2tpcEludmlzaWJsZUluc3RhbmNlQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBsYXllciBhbmQgdHJ5IGFnYWluXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ2JvdW5kVmFyaWFibGVzJyBpbiBub2RlICYmIE9iamVjdC5rZXlzKG5vZGUuYm91bmRWYXJpYWJsZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnZmluZEFsbCcgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gbm9kZS5maW5kQWxsKChuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgnYm91bmRWYXJpYWJsZXMnIGluIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhuLmJvdW5kVmFyaWFibGVzKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX25vZGVzID0gX25vZGVzLmNvbmNhdChub2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhfbm9kZXMpO1xuICAgICAgICBjb25zdCB0b3RhbCA9IF9ub2Rlcy5sZW5ndGg7XG4gICAgICAgIHRvdGFsTGF5ZXJzQ291bnQgPSB0b3RhbDtcbiAgICAgICAgd2hpbGUgKF9ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBfbm9kZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIC8vICg3MCAtIDQ0KSAvIDcwXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgoKHRvdGFsIC0gX25vZGVzLmxlbmd0aCkgLyB0b3RhbCkgKiAxMDApO1xuICAgICAgICAgICAgY29uc3QgbXNnID0gYCR7cGVyY2VudH0lIGRvbmUuIFdvcmtpbmcgb24gbGF5ZXIgJHt0b3RhbCAtIF9ub2Rlcy5sZW5ndGh9IG91dCBvZiAke3RvdGFsfWA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgeWllbGQgcHJvY2Vzc0xheWVyKG5vZGUpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0cmF2ZXJzZShub2RlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYE5vZGU6ICR7bm9kZS5uYW1lfWApO1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgeWllbGQgcHJvY2Vzc0xheWVyKG5vZGUpO1xuICAgICAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUgJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmF2ZXJzaW5nIFwiJHtub2RlLm5hbWV9XCIgY2hpbGRyZW5gKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRyYXZlcnNlKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0VmFyaWFibGVOYW1lKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlLm5hbWU7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZUFsbCgnc3gnLCAnc3BhY2luZycpLnJlcGxhY2VBbGwoJ3N5JywgJ3NwYWNpbmcvbWlub3InKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVmFyaWFibGVNYXRjaCh2YXJJZCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZCh2YXJJZCk7XG4gICAgaWYgKCF2YXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IGNvbGxlY3Rpb25JZCA9IG51bGw7XG4gICAgbGV0IGNvbGxlY3Rpb24gPSBudWxsO1xuICAgIGNvbGxlY3Rpb25JZCA9IHZhcmlhYmxlLnZhcmlhYmxlQ29sbGVjdGlvbklkO1xuICAgIGNvbGxlY3Rpb24gPSBmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVDb2xsZWN0aW9uQnlJZChjb2xsZWN0aW9uSWQpO1xuICAgIGNvbnN0IG5hbWUgPSBnZXRWYXJpYWJsZU5hbWUodmFyaWFibGUpO1xuICAgIGNvbnN0IHRhcmdldFZhcmlhYmxlID0gZmluZEZpZ21hVmFyaWFibGVCeU5hbWUobmFtZSwgY29sbGVjdGlvbi5uYW1lKTtcbiAgICBpZiAoIXRhcmdldFZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgQ2Fubm90IGZpbmQgJHtjb2xsZWN0aW9uLm5hbWV9ID4gJHt2YXJpYWJsZS5uYW1lfWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgO1xuICAgIGlmICh0YXJnZXRWYXJpYWJsZS5pZCA9PSB2YXJpYWJsZS5pZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7dmFyaWFibGUubmFtZX0gaXMgYSBsb2NhbCB2YXJpYWJsZWApO1xuICAgICAgICBza2lwcGVkTGF5ZXJzQ291bnQrKztcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRWYXJpYWJsZTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NMYXllcihub2RlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYm91bmRWYWlyYWJsZXMgPSBPYmplY3QuZW50cmllcyhub2RlLmJvdW5kVmFyaWFibGVzKTtcbiAgICAgICAgYm91bmRWYWlyYWJsZXMuZm9yRWFjaCgoW3Byb3BOYW1lLCBib3VuZFZhcl0pID0+IHtcbiAgICAgICAgICAgIGJpbmRWYXJpYWJsZShub2RlLCBwcm9wTmFtZSwgYm91bmRWYXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgZGVsYXlBc3luYygyKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBiaW5kUHJvcGVydHlWYXJpYWJsZXMocHJvcHMsIGZpZ21hRm4pIHtcbiAgICBjb25zdCBwcm9wc0NvcHkgPSBfY2xvbmUocHJvcHMpLm1hcChwcm9wID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcC5ib3VuZFZhcmlhYmxlcykuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzID0gcHJvcC5ib3VuZFZhcmlhYmxlc1tmaWVsZF07XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGZpbmRWYXJpYWJsZU1hdGNoKGFsaWFzLmlkKTtcbiAgICAgICAgICAgIGNvbnN0IHNwcmVhZCA9IHByb3BbJ3NwcmVhZCddOyAvL3dvcmthcm91bmQgRmlnbWEgYnVnLiBJdCByZXNldHMgc3ByZWFkIGFmdGVyIGNhbGxpbmcgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JFZmZlY3RcbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIHByb3AuYm91bmRWYXJpYWJsZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBwcm9wID0gZmlnbWFGbihwcm9wLCBmaWVsZCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgcHJvcCA9IGZpZ21hRm4ocHJvcCwgZmllbGQsIHZhcmlhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3ByZWFkICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcHJvcFsnc3ByZWFkJ10gPSBzcHJlYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvcDtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvcHNDb3B5O1xufVxuZnVuY3Rpb24gYmluZEVmZmVjdFZhcmlhYmxlcyhwcm9wcywgZmlnbWFGbikge1xufVxuZnVuY3Rpb24gYmluZFZhcmlhYmxlKG5vZGUsIHByb3BOYW1lLCB2YXJpYWJsZUJpbmRpbmcpIHtcbiAgICBpZiAobm9kZS50eXBlID09ICdURVhUJykge1xuICAgICAgICBjb25zdCB0ZXh0U3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQobm9kZS50ZXh0U3R5bGVJZCk7XG4gICAgICAgIGlmICh0ZXh0U3R5bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVGV4dFN0eWxlID0gZmlnbWEuZ2V0TG9jYWxUZXh0U3R5bGVzKCkuZmluZChzdHlsZSA9PiBzdHlsZS5uYW1lID09PSB0ZXh0U3R5bGUubmFtZSk7XG4gICAgICAgICAgICBpZiAobG9jYWxUZXh0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnRleHRTdHlsZUlkID0gbG9jYWxUZXh0U3R5bGUuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BOYW1lID09ICdmaWxscycgJiYgJ2ZpbGxzJyBpbiBub2RlKSB7XG4gICAgICAgIG5vZGUuZmlsbHMgPSBiaW5kUHJvcGVydHlWYXJpYWJsZXMobm9kZS5maWxscywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BOYW1lID09ICdzdHJva2VzJyAmJiAnc3Ryb2tlcycgaW4gbm9kZSkge1xuICAgICAgICBub2RlLnN0cm9rZXMgPSBiaW5kUHJvcGVydHlWYXJpYWJsZXMobm9kZS5zdHJva2VzLCBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvclBhaW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ2VmZmVjdHMnICYmICdlZmZlY3RzJyBpbiBub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmVmZmVjdFN0eWxlSWQgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlLmVmZmVjdFN0eWxlSWQpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVOYW1lID0gc3R5bGUubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsU3R5bGUgPSBmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlcygpLmZpbmQoc3R5bGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZS5uYW1lID09PSBzdHlsZU5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vZGUuZWZmZWN0cyA9IFtdO1xuICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gXCJcIjtcbiAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IGxvY2FsU3R5bGUgPyBsb2NhbFN0eWxlLmlkIDogXCJcIjtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuZWZmZWN0cyA9IGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhub2RlLmVmZmVjdHMsIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yRWZmZWN0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ2xheW91dEdyaWRzJyAmJiAnbGF5b3V0R3JpZHMnIGluIG5vZGUpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhub2RlLmxheW91dEdyaWRzLCBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvckxheW91dEdyaWQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wTmFtZSA9PSAnY29tcG9uZW50UHJvcGVydGllcycgfHwgcHJvcE5hbWUgPT0gJ3RleHRSYW5nZUZpbGxzJykge1xuICAgICAgICBjb25zb2xlLndhcm4oYFN3YXAgZG9lcyBub3Qgd29yayBmb3IgJHtwcm9wTmFtZX0sIHNraXBwaW5nIG5vZGVgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gZmluZFZhcmlhYmxlTWF0Y2godmFyaWFibGVCaW5kaW5nLmlkKTtcbiAgICAgICAgaWYgKHZhcmlhYmxlKSB7XG4gICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUocHJvcE5hbWUsIG51bGwpO1xuICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKHByb3BOYW1lLCB2YXJpYWJsZS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uICh0eHQpIHtcbiAgICAgICAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvVGl0bGUoY2FtZWxDYXNlKSB7XG4gICAgLy8gbm8gc2lkZS1lZmZlY3RzXG4gICAgcmV0dXJuIGNhbWVsQ2FzZVxuICAgICAgICAvLyBpbmplY3Qgc3BhY2UgYmVmb3JlIHRoZSB1cHBlciBjYXNlIGxldHRlcnNcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBcIiBcIiArIG1hdGNoO1xuICAgIH0pXG4gICAgICAgIC8vIHJlcGxhY2UgZmlyc3QgY2hhciB3aXRoIHVwcGVyIGNhc2VcbiAgICAgICAgLnJlcGxhY2UoL14uLywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBtYXRjaC50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgZmluZEZpZ21hVmFyaWFibGVCeU5hbWUgfSBmcm9tIFwiLi9maWdtYS12YXJpYWJsZXNcIjtcbmNvbnN0IGFsaWFzUmVnZXggPSAvXFx7KC4rPykoLis/KVxcfS9nO1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUb2tlblJlZmVyZW5jZXModG9rZW5WYWx1ZSkge1xuICAgIHJldHVybiB0b2tlblZhbHVlID09PSBudWxsIHx8IHRva2VuVmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuVmFsdWUudG9TdHJpbmcoKS5tYXRjaChhbGlhc1JlZ2V4KTtcbn1cbjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZSkge1xuICAgIGxldCBuYW1lID0gcmVmZXJlbmNlLnJlcGxhY2UoL3svZywgXCJcIik7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvfS9nLCBcIlwiKTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVmFyaWFibGVCeVJlZmVyZW5jZXModmFsdWUpIHtcbiAgICBsZXQgcmVmZXJlbmNlcyA9IGZpbmRUb2tlblJlZmVyZW5jZXModmFsdWUpO1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgcmVmZXJlbmNlcyA9PT0gbnVsbCB8fCByZWZlcmVuY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWZlcmVuY2VzLmZvckVhY2gocmVmZXJlbmNlID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBnZXRSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZSk7XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcLi9nLCBcIi9cIik7XG4gICAgICAgIGNvbnN0IGZpZ21hVmFyaWFibGUgPSBmaW5kRmlnbWFWYXJpYWJsZUJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKGZpZ21hVmFyaWFibGUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChmaWdtYVZhcmlhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzKCkgY2FsbCBmYWlsZWQgLT4gY2Fubm90IGZpbmQgdmFsdWUgZm9yICR7cmVmZXJlbmNlfWApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHNbMF07XG59XG5mdW5jdGlvbiBmaW5kR2xvYmFsVG9rZW5CeU5hbWUobmFtZSwgZGljdGlvbmFyeSkge1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcLi9nLCBcIi9cIik7XG4gICAgY29uc3QgdG9rZW4gPSBkaWN0aW9uYXJ5W25hbWVdO1xuICAgIGlmICghdG9rZW4pXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgIHJldHVybiB0b2tlbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlZmVyZW5jZUdsb2JhbCh2YWx1ZSwgZGljdGlvbmFyeSkge1xuICAgIGxldCByZWZlcmVuY2VzID0gZmluZFRva2VuUmVmZXJlbmNlcyh2YWx1ZSk7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xuICAgIHJlZmVyZW5jZXMgPT09IG51bGwgfHwgcmVmZXJlbmNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmZXJlbmNlcy5mb3JFYWNoKHJlZmVyZW5jZSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZ2V0UmVmZXJlbmNlTmFtZShyZWZlcmVuY2UpO1xuICAgICAgICBjb25zdCBnbG9iYWxUb2tlbiA9IGZpbmRHbG9iYWxUb2tlbkJ5TmFtZShuYW1lLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgaWYgKGdsb2JhbFRva2VuKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShyZWZlcmVuY2UsIGdsb2JhbFRva2VuLiR2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgcGFyc2VSZWZlcmVuY2VHbG9iYWwoKSBjYWxsIGZhaWxlZCAtPiBjYW5ub3QgZmluZCByZWZlcmVuY2UgZm9yICR7dmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjaGVjayA9IGZpbmRUb2tlblJlZmVyZW5jZXMocmVzdWx0KTtcbiAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcGFyc2VSZWZlcmVuY2VHbG9iYWwocmVzdWx0LCBkaWN0aW9uYXJ5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZXZhdGlvbkNvbXBvbmVudHModG9rZW5zKSB7XG4gICAgZmlnbWEuc2tpcEludmlzaWJsZUluc3RhbmNlQ2hpbGRyZW4gPSB0cnVlO1xuICAgIGNvbnN0IHBhZ2VDb21wb25lbnRzID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbFdpdGhDcml0ZXJpYSh7IHR5cGVzOiBbJ0NPTVBPTkVOVCddIH0pO1xuICAgIGNvbnN0IGVsZXZhdGlvbkNvbXBvbmVudHMgPSBwYWdlQ29tcG9uZW50cy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBub2RlLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIG5hbWUuc3RhcnRzV2l0aCgnc2hhZG93Jyk7XG4gICAgfSk7XG4gICAgaWYgKGVsZXZhdGlvbkNvbXBvbmVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybignTm8gZWxldmF0aW9uIGNvbXBvbmVudHMgaGFzIGJlZW4gZm91bmQnKTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXModG9rZW5zKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYW50cyA9IHRva2Vuc1tuYW1lXTtcbiAgICAgICAgY29uc3QgW3NoYWRlLCB0b2tlbl0gPSBPYmplY3QuZW50cmllcyh2YXJpYW50cylbMF07XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdG9rZW5bJyR2YWx1ZSddO1xuICAgICAgICBjb25zdCBlbGV2YXRpb25Db21wb25lbnQgPSBlbGV2YXRpb25Db21wb25lbnRzLmZpbmQobm9kZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTm9ybWFsaXplZCA9IG5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC8tL2csIFwiIFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVOYW1lTm9ybWFsaXplZCA9IG5vZGUubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZU5vcm1hbGl6ZWQsIG5vZGVOYW1lTm9ybWFsaXplZCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZU5hbWVOb3JtYWxpemVkLmluZGV4T2YobmFtZU5vcm1hbGl6ZWQpID4gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9jZXNzQ29tcG9uZW50KHNldHRpbmdzLCBlbGV2YXRpb25Db21wb25lbnQpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoeCA9PiBjbG9uZSh4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgJ3Vua25vd24nO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChlZmZlY3RzLCBjb21wb25lbnQpIHtcbiAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICB0aHJvdyAoJ0VsZXZhdGlvbiBjb21wb25lbnQgd2FzIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICBjb25zdCBzaGFkb3dMYXllcnMgPSBjb21wb25lbnQuZmluZENoaWxkcmVuKG5vZGUgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gbm9kZS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBuYW1lLnN0YXJ0c1dpdGgoJ3NoYWRvdycpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tMYXllciA9IGNvbXBvbmVudC5maW5kQ2hpbGQobm9kZSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ21hc2snO1xuICAgIH0pO1xuICAgIG1hc2tMYXllci52aXNpYmxlID0gZmFsc2U7XG4gICAgZGVidWdnZXI7XG4gICAgZWZmZWN0cy5mb3JFYWNoKChzaGFkb3dTZXR0aW5ncywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hhZG93TGF5ZXIgPSBzaGFkb3dMYXllcnNbaW5kZXhdO1xuICAgICAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChzaGFkb3dTZXR0aW5ncy54KTtcbiAgICAgICAgY29uc3QgeSA9IHBhcnNlRmxvYXQoc2hhZG93U2V0dGluZ3MueSk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IHBhcnNlRmxvYXQoc2hhZG93U2V0dGluZ3MuYmx1cik7XG4gICAgICAgIGNvbnN0IHNwcmVhZCA9IHBhcnNlRmxvYXQoc2hhZG93U2V0dGluZ3Muc3ByZWFkKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjb21wb25lbnQud2lkdGggKyAoMiAqIHNwcmVhZCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGNvbXBvbmVudC5oZWlnaHQgKyAoMiAqIHNwcmVhZCk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB4IC0gc3ByZWFkO1xuICAgICAgICBjb25zdCB0b3AgPSB5IC0gc3ByZWFkO1xuICAgICAgICBjb25zdCBibHVyID0ge1xuICAgICAgICAgICAgdHlwZTogXCJMQVlFUl9CTFVSXCIsXG4gICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgc2hhZG93TGF5ZXIuZWZmZWN0cyA9IFtibHVyXTtcbiAgICAgICAgc2hhZG93TGF5ZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBzaGFkb3dMYXllci54ID0gbGVmdDtcbiAgICAgICAgc2hhZG93TGF5ZXIueSA9IHRvcDtcbiAgICB9KTtcbiAgICBjb25zdCBhYnNvbHV0ZUJvdW5kaW5nQm94ID0gY29tcG9uZW50LmFic29sdXRlQm91bmRpbmdCb3g7XG4gICAgY29uc3QgYWJzb2x1dGVSZW5kZXJCb3VuZHMgPSBjb21wb25lbnQuYWJzb2x1dGVSZW5kZXJCb3VuZHM7XG4gICAgY29uc3QgbWFza1dpZHRoID0gYWJzb2x1dGVSZW5kZXJCb3VuZHMud2lkdGg7XG4gICAgY29uc3QgbWFza0hlaWdodCA9IGFic29sdXRlUmVuZGVyQm91bmRzLmhlaWdodDtcbiAgICBjb25zdCBtYXNrTGVmdCA9IChhYnNvbHV0ZVJlbmRlckJvdW5kcy54IC0gYWJzb2x1dGVCb3VuZGluZ0JveC54KTtcbiAgICBjb25zdCBtYXNrVG9wID0gKGFic29sdXRlUmVuZGVyQm91bmRzLnkgLSBhYnNvbHV0ZUJvdW5kaW5nQm94LnkpO1xuICAgIGNvbnN0IGlubmVyTGF5ZXIgPSBtYXNrTGF5ZXIuZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09PSAnaW5uZXInKTtcbiAgICBjb25zdCBvdXRlckxheWVyID0gbWFza0xheWVyLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PT0gJ291dGVyJyk7XG4gICAgb3V0ZXJMYXllci5yZXNpemUobWFza1dpZHRoLCBtYXNrSGVpZ2h0KTtcbiAgICBvdXRlckxheWVyLnggPSBtYXNrTGVmdDtcbiAgICBvdXRlckxheWVyLnkgPSBtYXNrVG9wO1xuICAgIGlubmVyTGF5ZXIucmVzaXplKGNvbXBvbmVudC53aWR0aCwgY29tcG9uZW50LmhlaWdodCk7XG4gICAgaW5uZXJMYXllci54ID0gMDtcbiAgICBpbm5lckxheWVyLnkgPSAwO1xuICAgIG1hc2tMYXllci52aXNpYmxlID0gdHJ1ZTtcbn1cbiIsImNvbnNvbGUuY2xlYXIoKTtcbmNvbnN0IHN0eWxlcyA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKTtcbmNvbnN0IHZhcmlhYmxlcyA9IGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlcygpO1xubGV0IGNvdW50ID0gMDtcbmZ1bmN0aW9uIGdldFN0eWxlQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gc3R5bGVzLmZpbmQoKHN0eWxlKSA9PiBzdHlsZS5uYW1lID09PSBuYW1lKTtcbn1cbjtcbmZ1bmN0aW9uIGdldEZpZ21hQ29sb3IoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICByOiAxLFxuICAgICAgICAgICAgZzogMSxcbiAgICAgICAgICAgIGI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH07XG59XG47XG5leHBvcnQgZnVuY3Rpb24gYmluZFZhcmlhYmxlc0FuZFN0eWxlcygpIHtcbiAgICBjb3VudCA9IDA7XG4gICAgdmFyaWFibGVzLmZvckVhY2godmFyaWFibGUgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGUubmFtZTtcbiAgICAgICAgbGV0IHN0eWxlID0gZ2V0U3R5bGVCeU5hbWUobmFtZSk7XG4gICAgICAgIGlmICh2YXJpYWJsZS5yZXNvbHZlZFR5cGUgIT09ICdDT0xPUicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0eWxlKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgc3R5bGUgPSBmaWdtYS5jcmVhdGVQYWludFN0eWxlKCk7XG4gICAgICAgICAgICBzdHlsZS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHN0eWxlLnBhaW50cyA9IFtcbiAgICAgICAgICAgICAgICBnZXRGaWdtYUNvbG9yKClcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld1BhaW50cyA9IHN0eWxlLnBhaW50cy5tYXAoKHBhaW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludChwYWludCwgJ2NvbG9yJywgdmFyaWFibGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3R5bGUucGFpbnRzID0gbmV3UGFpbnRzO1xuICAgIH0pO1xuICAgIGZpZ21hLm5vdGlmeShg4pyFIFZhcmlhYmxlcyBhbmQgc3R5bGVzIGFyZSBub3cgY29ubmVjdGVkLiAke2NvdW50fSBzdHlsZXMgY3JlYXRlZGApO1xufVxuIiwiLyoqXG4gKiBjaHJvbWEuanMgLSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGNvbG9yIGNvbnZlcnNpb25zXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDExLTIwMTksIEdyZWdvciBBaXNjaFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKlxuICogMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuICogYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKlxuICogMy4gVGhlIG5hbWUgR3JlZ29yIEFpc2NoIG1heSBub3QgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHNcbiAqIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4gKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkVcbiAqIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIEdSRUdPUiBBSVNDSCBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsXG4gKiBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWVxuICogT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcbiAqIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSxcbiAqIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIGNocm9tYS5qcyBpbmNsdWRlcyBjb2xvcnMgZnJvbSBjb2xvcmJyZXdlcjIub3JnLCB3aGljaCBhcmUgcmVsZWFzZWQgdW5kZXJcbiAqIHRoZSBmb2xsb3dpbmcgbGljZW5zZTpcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDIgQ3ludGhpYSBCcmV3ZXIsIE1hcmsgSGFycm93ZXIsXG4gKiBhbmQgVGhlIFBlbm5zeWx2YW5pYSBTdGF0ZSBVbml2ZXJzaXR5LlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuICogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWNcbiAqIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogTmFtZWQgY29sb3JzIGFyZSB0YWtlbiBmcm9tIFgxMSBDb2xvciBOYW1lcy5cbiAqIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvclxuICpcbiAqIEBwcmVzZXJ2ZVxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmNocm9tYSA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbGltaXQkMiA9IGZ1bmN0aW9uICh4LCBtaW4sIG1heCkge1xuICAgICAgICBpZiAoIG1pbiA9PT0gdm9pZCAwICkgbWluPTA7XG4gICAgICAgIGlmICggbWF4ID09PSB2b2lkIDAgKSBtYXg9MTtcblxuICAgICAgICByZXR1cm4geCA8IG1pbiA/IG1pbiA6IHggPiBtYXggPyBtYXggOiB4O1xuICAgIH07XG5cbiAgICB2YXIgbGltaXQkMSA9IGxpbWl0JDI7XG5cbiAgICB2YXIgY2xpcF9yZ2IkMyA9IGZ1bmN0aW9uIChyZ2IpIHtcbiAgICAgICAgcmdiLl9jbGlwcGVkID0gZmFsc2U7XG4gICAgICAgIHJnYi5fdW5jbGlwcGVkID0gcmdiLnNsaWNlKDApO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8PTM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJnYltpXSA8IDAgfHwgcmdiW2ldID4gMjU1KSB7IHJnYi5fY2xpcHBlZCA9IHRydWU7IH1cbiAgICAgICAgICAgICAgICByZ2JbaV0gPSBsaW1pdCQxKHJnYltpXSwgMCwgMjU1KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJnYltpXSA9IGxpbWl0JDEocmdiW2ldLCAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH07XG5cbiAgICAvLyBwb3J0ZWQgZnJvbSBqUXVlcnkncyAkLnR5cGVcbiAgICB2YXIgY2xhc3NUb1R5cGUgPSB7fTtcbiAgICBmb3IgKHZhciBpJDEgPSAwLCBsaXN0JDEgPSBbJ0Jvb2xlYW4nLCAnTnVtYmVyJywgJ1N0cmluZycsICdGdW5jdGlvbicsICdBcnJheScsICdEYXRlJywgJ1JlZ0V4cCcsICdVbmRlZmluZWQnLCAnTnVsbCddOyBpJDEgPCBsaXN0JDEubGVuZ3RoOyBpJDEgKz0gMSkge1xuICAgICAgICB2YXIgbmFtZSA9IGxpc3QkMVtpJDFdO1xuXG4gICAgICAgIGNsYXNzVG9UeXBlWyhcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIpXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgdmFyIHR5cGUkcCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gY2xhc3NUb1R5cGVbT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaildIHx8IFwib2JqZWN0XCI7XG4gICAgfTtcblxuICAgIHZhciB0eXBlJG8gPSB0eXBlJHA7XG5cbiAgICB2YXIgdW5wYWNrJEIgPSBmdW5jdGlvbiAoYXJncywga2V5T3JkZXIpIHtcbiAgICAgICAgaWYgKCBrZXlPcmRlciA9PT0gdm9pZCAwICkga2V5T3JkZXI9bnVsbDtcblxuICAgIFx0Ly8gaWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIDMgYXJndW1lbnRzLCB3ZSByZXR1cm4gdGhlIGFyZ3VtZW50c1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPj0gMykgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7IH1cbiAgICAgICAgLy8gd2l0aCBsZXNzIHRoYW4gMyBhcmdzIHdlIGNoZWNrIGlmIGZpcnN0IGFyZyBpcyBvYmplY3RcbiAgICAgICAgLy8gYW5kIHVzZSB0aGUga2V5T3JkZXIgc3RyaW5nIHRvIGV4dHJhY3QgYW5kIHNvcnQgcHJvcGVydGllc1xuICAgIFx0aWYgKHR5cGUkbyhhcmdzWzBdKSA9PSAnb2JqZWN0JyAmJiBrZXlPcmRlcikge1xuICAgIFx0XHRyZXR1cm4ga2V5T3JkZXIuc3BsaXQoJycpXG4gICAgXHRcdFx0LmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gYXJnc1swXVtrXSAhPT0gdW5kZWZpbmVkOyB9KVxuICAgIFx0XHRcdC5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGFyZ3NbMF1ba107IH0pO1xuICAgIFx0fVxuICAgIFx0Ly8gb3RoZXJ3aXNlIHdlIGp1c3QgcmV0dXJuIHRoZSBmaXJzdCBhcmd1bWVudFxuICAgIFx0Ly8gKHdoaWNoIHdlIHN1cHBvc2UgaXMgYW4gYXJyYXkgb2YgYXJncylcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcblxuICAgIHZhciB0eXBlJG4gPSB0eXBlJHA7XG5cbiAgICB2YXIgbGFzdCQ0ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICB2YXIgbCA9IGFyZ3MubGVuZ3RoLTE7XG4gICAgICAgIGlmICh0eXBlJG4oYXJnc1tsXSkgPT0gJ3N0cmluZycpIHsgcmV0dXJuIGFyZ3NbbF0udG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIFBJJDIgPSBNYXRoLlBJO1xuXG4gICAgdmFyIHV0aWxzID0ge1xuICAgIFx0Y2xpcF9yZ2I6IGNsaXBfcmdiJDMsXG4gICAgXHRsaW1pdDogbGltaXQkMixcbiAgICBcdHR5cGU6IHR5cGUkcCxcbiAgICBcdHVucGFjazogdW5wYWNrJEIsXG4gICAgXHRsYXN0OiBsYXN0JDQsXG4gICAgXHRQSTogUEkkMixcbiAgICBcdFRXT1BJOiBQSSQyKjIsXG4gICAgXHRQSVRISVJEOiBQSSQyLzMsXG4gICAgXHRERUcyUkFEOiBQSSQyIC8gMTgwLFxuICAgIFx0UkFEMkRFRzogMTgwIC8gUEkkMlxuICAgIH07XG5cbiAgICB2YXIgaW5wdXQkaCA9IHtcbiAgICBcdGZvcm1hdDoge30sXG4gICAgXHRhdXRvZGV0ZWN0OiBbXVxuICAgIH07XG5cbiAgICB2YXIgbGFzdCQzID0gdXRpbHMubGFzdDtcbiAgICB2YXIgY2xpcF9yZ2IkMiA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciB0eXBlJG0gPSB1dGlscy50eXBlO1xuICAgIHZhciBfaW5wdXQgPSBpbnB1dCRoO1xuXG4gICAgdmFyIENvbG9yJEQgPSBmdW5jdGlvbiBDb2xvcigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZSRtKGFyZ3NbMF0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgYXJnc1swXS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgYXJnc1swXS5jb25zdHJ1Y3RvciA9PT0gdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgLy8gdGhlIGFyZ3VtZW50IGlzIGFscmVhZHkgYSBDb2xvciBpbnN0YW5jZVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsYXN0IGFyZ3VtZW50IGNvdWxkIGJlIHRoZSBtb2RlXG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQzKGFyZ3MpO1xuICAgICAgICB2YXIgYXV0b2RldGVjdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghbW9kZSkge1xuICAgICAgICAgICAgYXV0b2RldGVjdCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIV9pbnB1dC5zb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBfaW5wdXQuYXV0b2RldGVjdCA9IF9pbnB1dC5hdXRvZGV0ZWN0LnNvcnQoZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYi5wIC0gYS5wOyB9KTtcbiAgICAgICAgICAgICAgICBfaW5wdXQuc29ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGF1dG8tZGV0ZWN0IGZvcm1hdFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBfaW5wdXQuYXV0b2RldGVjdDsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hrID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgICAgIG1vZGUgPSBjaGsudGVzdC5hcHBseShjaGssIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2lucHV0LmZvcm1hdFttb2RlXSkge1xuICAgICAgICAgICAgdmFyIHJnYiA9IF9pbnB1dC5mb3JtYXRbbW9kZV0uYXBwbHkobnVsbCwgYXV0b2RldGVjdCA/IGFyZ3MgOiBhcmdzLnNsaWNlKDAsLTEpKTtcbiAgICAgICAgICAgIG1lLl9yZ2IgPSBjbGlwX3JnYiQyKHJnYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gZm9ybWF0OiAnK2FyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGFscGhhIGNoYW5uZWxcbiAgICAgICAgaWYgKG1lLl9yZ2IubGVuZ3RoID09PSAzKSB7IG1lLl9yZ2IucHVzaCgxKTsgfVxuICAgIH07XG5cbiAgICBDb2xvciRELnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICAgICAgaWYgKHR5cGUkbSh0aGlzLmhleCkgPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gdGhpcy5oZXgoKTsgfVxuICAgICAgICByZXR1cm4gKFwiW1wiICsgKHRoaXMuX3JnYi5qb2luKCcsJykpICsgXCJdXCIpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3JfMSA9IENvbG9yJEQ7XG5cbiAgICB2YXIgY2hyb21hJGsgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHR2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIFx0d2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIFx0cmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIGNocm9tYSRrLkNvbG9yLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MpICkpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkay5Db2xvciA9IENvbG9yXzE7XG4gICAgY2hyb21hJGsudmVyc2lvbiA9ICcyLjQuMic7XG5cbiAgICB2YXIgY2hyb21hXzEgPSBjaHJvbWEkaztcblxuICAgIHZhciB1bnBhY2skQSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbWF4JDIgPSBNYXRoLm1heDtcblxuICAgIHZhciByZ2IyY215ayQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skQShhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHIgPSByIC8gMjU1O1xuICAgICAgICBnID0gZyAvIDI1NTtcbiAgICAgICAgYiA9IGIgLyAyNTU7XG4gICAgICAgIHZhciBrID0gMSAtIG1heCQyKHIsbWF4JDIoZyxiKSk7XG4gICAgICAgIHZhciBmID0gayA8IDEgPyAxIC8gKDEtaykgOiAwO1xuICAgICAgICB2YXIgYyA9ICgxLXItaykgKiBmO1xuICAgICAgICB2YXIgbSA9ICgxLWctaykgKiBmO1xuICAgICAgICB2YXIgeSA9ICgxLWItaykgKiBmO1xuICAgICAgICByZXR1cm4gW2MsbSx5LGtdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmNteWtfMSA9IHJnYjJjbXlrJDE7XG5cbiAgICB2YXIgdW5wYWNrJHogPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgY215azJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayR6KGFyZ3MsICdjbXlrJyk7XG4gICAgICAgIHZhciBjID0gYXJnc1swXTtcbiAgICAgICAgdmFyIG0gPSBhcmdzWzFdO1xuICAgICAgICB2YXIgeSA9IGFyZ3NbMl07XG4gICAgICAgIHZhciBrID0gYXJnc1szXTtcbiAgICAgICAgdmFyIGFscGhhID0gYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IDE7XG4gICAgICAgIGlmIChrID09PSAxKSB7IHJldHVybiBbMCwwLDAsYWxwaGFdOyB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBjID49IDEgPyAwIDogMjU1ICogKDEtYykgKiAoMS1rKSwgLy8gclxuICAgICAgICAgICAgbSA+PSAxID8gMCA6IDI1NSAqICgxLW0pICogKDEtayksIC8vIGdcbiAgICAgICAgICAgIHkgPj0gMSA/IDAgOiAyNTUgKiAoMS15KSAqICgxLWspLCAvLyBiXG4gICAgICAgICAgICBhbHBoYVxuICAgICAgICBdO1xuICAgIH07XG5cbiAgICB2YXIgY215azJyZ2JfMSA9IGNteWsycmdiO1xuXG4gICAgdmFyIGNocm9tYSRqID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJEMgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRnID0gaW5wdXQkaDtcbiAgICB2YXIgdW5wYWNrJHkgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkbCA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcmdiMmNteWsgPSByZ2IyY215a18xO1xuXG4gICAgQ29sb3IkQy5wcm90b3R5cGUuY215ayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmNteWsodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGouY215ayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkQywgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2NteWsnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGcuZm9ybWF0LmNteWsgPSBjbXlrMnJnYl8xO1xuXG4gICAgaW5wdXQkZy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayR5KGFyZ3MsICdjbXlrJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRsKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjbXlrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayR4ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsYXN0JDIgPSB1dGlscy5sYXN0O1xuICAgIHZhciBybmQgPSBmdW5jdGlvbiAoYSkgeyByZXR1cm4gTWF0aC5yb3VuZChhKjEwMCkvMTAwOyB9O1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gaHNsMmNzcyhoLHMsbClcbiAgICAgKiAtIGhzbDJjc3MoaCxzLGwsYSlcbiAgICAgKiAtIGhzbDJjc3MoW2gscyxsXSwgbW9kZSlcbiAgICAgKiAtIGhzbDJjc3MoW2gscyxsLGFdLCBtb2RlKVxuICAgICAqIC0gaHNsMmNzcyh7aCxzLGwsYX0sIG1vZGUpXG4gICAgICovXG4gICAgdmFyIGhzbDJjc3MkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgaHNsYSA9IHVucGFjayR4KGFyZ3MsICdoc2xhJyk7XG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQyKGFyZ3MpIHx8ICdsc2EnO1xuICAgICAgICBoc2xhWzBdID0gcm5kKGhzbGFbMF0gfHwgMCk7XG4gICAgICAgIGhzbGFbMV0gPSBybmQoaHNsYVsxXSoxMDApICsgJyUnO1xuICAgICAgICBoc2xhWzJdID0gcm5kKGhzbGFbMl0qMTAwKSArICclJztcbiAgICAgICAgaWYgKG1vZGUgPT09ICdoc2xhJyB8fCAoaHNsYS5sZW5ndGggPiAzICYmIGhzbGFbM108MSkpIHtcbiAgICAgICAgICAgIGhzbGFbM10gPSBoc2xhLmxlbmd0aCA+IDMgPyBoc2xhWzNdIDogMTtcbiAgICAgICAgICAgIG1vZGUgPSAnaHNsYSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoc2xhLmxlbmd0aCA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChtb2RlICsgXCIoXCIgKyAoaHNsYS5qb2luKCcsJykpICsgXCIpXCIpO1xuICAgIH07XG5cbiAgICB2YXIgaHNsMmNzc18xID0gaHNsMmNzcyQxO1xuXG4gICAgdmFyIHVucGFjayR3ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gcmdiMmhzbChyLGcsYilcbiAgICAgKiAtIHJnYjJoc2wocixnLGIsYSlcbiAgICAgKiAtIHJnYjJoc2woW3IsZyxiXSlcbiAgICAgKiAtIHJnYjJoc2woW3IsZyxiLGFdKVxuICAgICAqIC0gcmdiMmhzbCh7cixnLGIsYX0pXG4gICAgICovXG4gICAgdmFyIHJnYjJoc2wkMyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJHcoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgdmFyIHIgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgZyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcblxuICAgICAgICByIC89IDI1NTtcbiAgICAgICAgZyAvPSAyNTU7XG4gICAgICAgIGIgLz0gMjU1O1xuXG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXG4gICAgICAgIHZhciBsID0gKG1heCArIG1pbikgLyAyO1xuICAgICAgICB2YXIgcywgaDtcblxuICAgICAgICBpZiAobWF4ID09PSBtaW4pe1xuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICBoID0gTnVtYmVyLk5hTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMgPSBsIDwgMC41ID8gKG1heCAtIG1pbikgLyAobWF4ICsgbWluKSA6IChtYXggLSBtaW4pIC8gKDIgLSBtYXggLSBtaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHIgPT0gbWF4KSB7IGggPSAoZyAtIGIpIC8gKG1heCAtIG1pbik7IH1cbiAgICAgICAgZWxzZSBpZiAoZyA9PSBtYXgpIHsgaCA9IDIgKyAoYiAtIHIpIC8gKG1heCAtIG1pbik7IH1cbiAgICAgICAgZWxzZSBpZiAoYiA9PSBtYXgpIHsgaCA9IDQgKyAociAtIGcpIC8gKG1heCAtIG1pbik7IH1cblxuICAgICAgICBoICo9IDYwO1xuICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoPjMgJiYgYXJnc1szXSE9PXVuZGVmaW5lZCkgeyByZXR1cm4gW2gscyxsLGFyZ3NbM11dOyB9XG4gICAgICAgIHJldHVybiBbaCxzLGxdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhzbF8xID0gcmdiMmhzbCQzO1xuXG4gICAgdmFyIHVucGFjayR2ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsYXN0JDEgPSB1dGlscy5sYXN0O1xuICAgIHZhciBoc2wyY3NzID0gaHNsMmNzc18xO1xuICAgIHZhciByZ2IyaHNsJDIgPSByZ2IyaHNsXzE7XG4gICAgdmFyIHJvdW5kJDYgPSBNYXRoLnJvdW5kO1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gcmdiMmNzcyhyLGcsYilcbiAgICAgKiAtIHJnYjJjc3MocixnLGIsYSlcbiAgICAgKiAtIHJnYjJjc3MoW3IsZyxiXSwgbW9kZSlcbiAgICAgKiAtIHJnYjJjc3MoW3IsZyxiLGFdLCBtb2RlKVxuICAgICAqIC0gcmdiMmNzcyh7cixnLGIsYX0sIG1vZGUpXG4gICAgICovXG4gICAgdmFyIHJnYjJjc3MkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiYSA9IHVucGFjayR2KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQxKGFyZ3MpIHx8ICdyZ2InO1xuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwzKSA9PSAnaHNsJykge1xuICAgICAgICAgICAgcmV0dXJuIGhzbDJjc3MocmdiMmhzbCQyKHJnYmEpLCBtb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZ2JhWzBdID0gcm91bmQkNihyZ2JhWzBdKTtcbiAgICAgICAgcmdiYVsxXSA9IHJvdW5kJDYocmdiYVsxXSk7XG4gICAgICAgIHJnYmFbMl0gPSByb3VuZCQ2KHJnYmFbMl0pO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ3JnYmEnIHx8IChyZ2JhLmxlbmd0aCA+IDMgJiYgcmdiYVszXTwxKSkge1xuICAgICAgICAgICAgcmdiYVszXSA9IHJnYmEubGVuZ3RoID4gMyA/IHJnYmFbM10gOiAxO1xuICAgICAgICAgICAgbW9kZSA9ICdyZ2JhJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG1vZGUgKyBcIihcIiArIChyZ2JhLnNsaWNlKDAsbW9kZT09PSdyZ2InPzM6NCkuam9pbignLCcpKSArIFwiKVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJjc3NfMSA9IHJnYjJjc3MkMTtcblxuICAgIHZhciB1bnBhY2skdSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcm91bmQkNSA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgaHNsMnJnYiQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduO1xuXG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgICAgIGFyZ3MgPSB1bnBhY2skdShhcmdzLCAnaHNsJyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIHMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IGwqMjU1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHQzID0gWzAsMCwwXTtcbiAgICAgICAgICAgIHZhciBjID0gWzAsMCwwXTtcbiAgICAgICAgICAgIHZhciB0MiA9IGwgPCAwLjUgPyBsICogKDErcykgOiBsK3MtbCpzO1xuICAgICAgICAgICAgdmFyIHQxID0gMiAqIGwgLSB0MjtcbiAgICAgICAgICAgIHZhciBoXyA9IGggLyAzNjA7XG4gICAgICAgICAgICB0M1swXSA9IGhfICsgMS8zO1xuICAgICAgICAgICAgdDNbMV0gPSBoXztcbiAgICAgICAgICAgIHQzWzJdID0gaF8gLSAxLzM7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQzW2ldIDwgMCkgeyB0M1tpXSArPSAxOyB9XG4gICAgICAgICAgICAgICAgaWYgKHQzW2ldID4gMSkgeyB0M1tpXSAtPSAxOyB9XG4gICAgICAgICAgICAgICAgaWYgKDYgKiB0M1tpXSA8IDEpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzW2ldOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoMiAqIHQzW2ldIDwgMSlcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDI7IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgzICogdDNbaV0gPCAyKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MSArICh0MiAtIHQxKSAqICgoMiAvIDMpIC0gdDNbaV0pICogNjsgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDE7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChhc3NpZ24gPSBbcm91bmQkNShjWzBdKjI1NSkscm91bmQkNShjWzFdKjI1NSkscm91bmQkNShjWzJdKjI1NSldLCByID0gYXNzaWduWzBdLCBnID0gYXNzaWduWzFdLCBiID0gYXNzaWduWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAvLyBrZWVwIGFscGhhIGNoYW5uZWxcbiAgICAgICAgICAgIHJldHVybiBbcixnLGIsYXJnc1szXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhzbDJyZ2JfMSA9IGhzbDJyZ2IkMTtcblxuICAgIHZhciBoc2wycmdiID0gaHNsMnJnYl8xO1xuICAgIHZhciBpbnB1dCRmID0gaW5wdXQkaDtcblxuICAgIHZhciBSRV9SR0IgPSAvXnJnYlxcKFxccyooLT9cXGQrKSxcXHMqKC0/XFxkKylcXHMqLFxccyooLT9cXGQrKVxccypcXCkkLztcbiAgICB2YXIgUkVfUkdCQSA9IC9ecmdiYVxcKFxccyooLT9cXGQrKSxcXHMqKC0/XFxkKylcXHMqLFxccyooLT9cXGQrKVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcbiAgICB2YXIgUkVfUkdCX1BDVCA9IC9ecmdiXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKlxcKSQvO1xuICAgIHZhciBSRV9SR0JBX1BDVCA9IC9ecmdiYVxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSUsXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcbiAgICB2YXIgUkVfSFNMID0gL15oc2xcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyksXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccypcXCkkLztcbiAgICB2YXIgUkVfSFNMQSA9IC9eaHNsYVxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKFswMV18WzAxXT9cXC5cXGQrKVxcKSQvO1xuXG4gICAgdmFyIHJvdW5kJDQgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGNzczJyZ2IkMSA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICAgICAgY3NzID0gY3NzLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICB2YXIgbTtcblxuICAgICAgICBpZiAoaW5wdXQkZi5mb3JtYXQubmFtZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0JGYuZm9ybWF0Lm5hbWVkKGNzcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2IoMjUwLDIwLDApXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0IpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZ2JbaV0gPSArcmdiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiWzNdID0gMTsgIC8vIGRlZmF1bHQgYWxwaGFcbiAgICAgICAgICAgIHJldHVybiByZ2I7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2JhKDI1MCwyMCwwLDAuNClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQkEpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQxID0gbS5zbGljZSgxLDUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxPTA7IGkkMTw0OyBpJDErKykge1xuICAgICAgICAgICAgICAgIHJnYiQxW2kkMV0gPSArcmdiJDFbaSQxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZ2IkMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYigxMDAlLDAlLDAlKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCX1BDVCkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDIgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDI9MDsgaSQyPDM7IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDJbaSQyXSA9IHJvdW5kJDQocmdiJDJbaSQyXSAqIDIuNTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiJDJbM10gPSAxOyAgLy8gZGVmYXVsdCBhbHBoYVxuICAgICAgICAgICAgcmV0dXJuIHJnYiQyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiYSgxMDAlLDAlLDAlLDAuNClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQkFfUENUKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMyA9IG0uc2xpY2UoMSw1KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMz0wOyBpJDM8MzsgaSQzKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkM1tpJDNdID0gcm91bmQkNChyZ2IkM1tpJDNdICogMi41NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2IkM1szXSA9ICtyZ2IkM1szXTtcbiAgICAgICAgICAgIHJldHVybiByZ2IkMztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhzbCgwLDEwMCUsNTAlKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfSFNMKSkpIHtcbiAgICAgICAgICAgIHZhciBoc2wgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBoc2xbMV0gKj0gMC4wMTtcbiAgICAgICAgICAgIGhzbFsyXSAqPSAwLjAxO1xuICAgICAgICAgICAgdmFyIHJnYiQ0ID0gaHNsMnJnYihoc2wpO1xuICAgICAgICAgICAgcmdiJDRbM10gPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJnYiQ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHNsYSgwLDEwMCUsNTAlLDAuNSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0hTTEEpKSkge1xuICAgICAgICAgICAgdmFyIGhzbCQxID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgaHNsJDFbMV0gKj0gMC4wMTtcbiAgICAgICAgICAgIGhzbCQxWzJdICo9IDAuMDE7XG4gICAgICAgICAgICB2YXIgcmdiJDUgPSBoc2wycmdiKGhzbCQxKTtcbiAgICAgICAgICAgIHJnYiQ1WzNdID0gK21bNF07ICAvLyBkZWZhdWx0IGFscGhhID0gMVxuICAgICAgICAgICAgcmV0dXJuIHJnYiQ1O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNzczJyZ2IkMS50ZXN0ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIFJFX1JHQi50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JBLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQl9QQ1QudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCQV9QQ1QudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfSFNMLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX0hTTEEudGVzdChzKTtcbiAgICB9O1xuXG4gICAgdmFyIGNzczJyZ2JfMSA9IGNzczJyZ2IkMTtcblxuICAgIHZhciBjaHJvbWEkaSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRCID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkZSA9IGlucHV0JGg7XG4gICAgdmFyIHR5cGUkayA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcmdiMmNzcyA9IHJnYjJjc3NfMTtcbiAgICB2YXIgY3NzMnJnYiA9IGNzczJyZ2JfMTtcblxuICAgIENvbG9yJEIucHJvdG90eXBlLmNzcyA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJjc3ModGhpcy5fcmdiLCBtb2RlKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGkuY3NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRCLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnY3NzJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRlLmZvcm1hdC5jc3MgPSBjc3MycmdiO1xuXG4gICAgaW5wdXQkZS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA1LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICAgICAgICAgIGlmICghcmVzdC5sZW5ndGggJiYgdHlwZSRrKGgpID09PSAnc3RyaW5nJyAmJiBjc3MycmdiLnRlc3QoaCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nzcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb2xvciRBID0gQ29sb3JfMTtcbiAgICB2YXIgY2hyb21hJGggPSBjaHJvbWFfMTtcbiAgICB2YXIgaW5wdXQkZCA9IGlucHV0JGg7XG4gICAgdmFyIHVucGFjayR0ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgaW5wdXQkZC5mb3JtYXQuZ2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYiA9IHVucGFjayR0KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHJnYlswXSAqPSAyNTU7XG4gICAgICAgIHJnYlsxXSAqPSAyNTU7XG4gICAgICAgIHJnYlsyXSAqPSAyNTU7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfTtcblxuICAgIGNocm9tYSRoLmdsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRBLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnZ2wnXSkgKSk7XG4gICAgfTtcblxuICAgIENvbG9yJEEucHJvdG90eXBlLmdsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgICAgIHJldHVybiBbcmdiWzBdLzI1NSwgcmdiWzFdLzI1NSwgcmdiWzJdLzI1NSwgcmdiWzNdXTtcbiAgICB9O1xuXG4gICAgdmFyIHVucGFjayRzID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIHJnYjJoY2ckMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJHMoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICAgICAgICB2YXIgYyA9IGRlbHRhICogMTAwIC8gMjU1O1xuICAgICAgICB2YXIgX2cgPSBtaW4gLyAoMjU1IC0gZGVsdGEpICogMTAwO1xuICAgICAgICB2YXIgaDtcbiAgICAgICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICAgICAgICBoID0gTnVtYmVyLk5hTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyID09PSBtYXgpIHsgaCA9IChnIC0gYikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGcgPT09IG1heCkgeyBoID0gMisoYiAtIHIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChiID09PSBtYXgpIHsgaCA9IDQrKHIgLSBnKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBoICo9IDYwO1xuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtoLCBjLCBfZ107XG4gICAgfTtcblxuICAgIHZhciByZ2IyaGNnXzEgPSByZ2IyaGNnJDE7XG5cbiAgICB2YXIgdW5wYWNrJHIgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGZsb29yJDMgPSBNYXRoLmZsb29yO1xuXG4gICAgLypcbiAgICAgKiB0aGlzIGlzIGJhc2ljYWxseSBqdXN0IEhTViB3aXRoIHNvbWUgbWlub3IgdHdlYWtzXG4gICAgICpcbiAgICAgKiBodWUuLiBbMC4uMzYwXVxuICAgICAqIGNocm9tYSAuLiBbMC4uMV1cbiAgICAgKiBncmF5bmVzcyAuLiBbMC4uMV1cbiAgICAgKi9cblxuICAgIHZhciBoY2cycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDIsIGFzc2lnbiQzLCBhc3NpZ24kNCwgYXNzaWduJDU7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayRyKGFyZ3MsICdoY2cnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBfZyA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgX2cgPSBfZyAqIDI1NTtcbiAgICAgICAgdmFyIF9jID0gYyAqIDI1NTtcbiAgICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IF9nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGggPT09IDM2MCkgeyBoID0gMDsgfVxuICAgICAgICAgICAgaWYgKGggPiAzNjApIHsgaCAtPSAzNjA7IH1cbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICAgICAgaCAvPSA2MDtcbiAgICAgICAgICAgIHZhciBpID0gZmxvb3IkMyhoKTtcbiAgICAgICAgICAgIHZhciBmID0gaCAtIGk7XG4gICAgICAgICAgICB2YXIgcCA9IF9nICogKDEgLSBjKTtcbiAgICAgICAgICAgIHZhciBxID0gcCArIF9jICogKDEgLSBmKTtcbiAgICAgICAgICAgIHZhciB0ID0gcCArIF9jICogZjtcbiAgICAgICAgICAgIHZhciB2ID0gcCArIF9jO1xuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiAoYXNzaWduID0gW3YsIHQsIHBdLCByID0gYXNzaWduWzBdLCBnID0gYXNzaWduWzFdLCBiID0gYXNzaWduWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IChhc3NpZ24kMSA9IFtxLCB2LCBwXSwgciA9IGFzc2lnbiQxWzBdLCBnID0gYXNzaWduJDFbMV0sIGIgPSBhc3NpZ24kMVsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAyOiAoYXNzaWduJDIgPSBbcCwgdiwgdF0sIHIgPSBhc3NpZ24kMlswXSwgZyA9IGFzc2lnbiQyWzFdLCBiID0gYXNzaWduJDJbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzogKGFzc2lnbiQzID0gW3AsIHEsIHZdLCByID0gYXNzaWduJDNbMF0sIGcgPSBhc3NpZ24kM1sxXSwgYiA9IGFzc2lnbiQzWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IChhc3NpZ24kNCA9IFt0LCBwLCB2XSwgciA9IGFzc2lnbiQ0WzBdLCBnID0gYXNzaWduJDRbMV0sIGIgPSBhc3NpZ24kNFsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA1OiAoYXNzaWduJDUgPSBbdiwgcCwgcV0sIHIgPSBhc3NpZ24kNVswXSwgZyA9IGFzc2lnbiQ1WzFdLCBiID0gYXNzaWduJDVbMl0pOyBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgaGNnMnJnYl8xID0gaGNnMnJnYjtcblxuICAgIHZhciB1bnBhY2skcSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRqID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGcgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkeiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JGMgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoY2cgPSByZ2IyaGNnXzE7XG5cbiAgICBDb2xvciR6LnByb3RvdHlwZS5oY2cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoY2codGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGcuaGNnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR6LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGNnJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRjLmZvcm1hdC5oY2cgPSBoY2cycmdiXzE7XG5cbiAgICBpbnB1dCRjLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDEsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJHEoYXJncywgJ2hjZycpO1xuICAgICAgICAgICAgaWYgKHR5cGUkaihhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaGNnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRwID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsYXN0ID0gdXRpbHMubGFzdDtcbiAgICB2YXIgcm91bmQkMyA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgcmdiMmhleCQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skcChhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgYSA9IHJlZlszXTtcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0KGFyZ3MpIHx8ICdhdXRvJztcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgeyBhID0gMTsgfVxuICAgICAgICBpZiAobW9kZSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICBtb2RlID0gYSA8IDEgPyAncmdiYScgOiAncmdiJztcbiAgICAgICAgfVxuICAgICAgICByID0gcm91bmQkMyhyKTtcbiAgICAgICAgZyA9IHJvdW5kJDMoZyk7XG4gICAgICAgIGIgPSByb3VuZCQzKGIpO1xuICAgICAgICB2YXIgdSA9IHIgPDwgMTYgfCBnIDw8IDggfCBiO1xuICAgICAgICB2YXIgc3RyID0gXCIwMDAwMDBcIiArIHUudG9TdHJpbmcoMTYpOyAvLyMudG9VcHBlckNhc2UoKTtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gNik7XG4gICAgICAgIHZhciBoeGEgPSAnMCcgKyByb3VuZCQzKGEgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaHhhID0gaHhhLnN1YnN0cihoeGEubGVuZ3RoIC0gMik7XG4gICAgICAgIHN3aXRjaCAobW9kZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlICdyZ2JhJzogcmV0dXJuIChcIiNcIiArIHN0ciArIGh4YSk7XG4gICAgICAgICAgICBjYXNlICdhcmdiJzogcmV0dXJuIChcIiNcIiArIGh4YSArIHN0cik7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gKFwiI1wiICsgc3RyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmdiMmhleF8xID0gcmdiMmhleCQyO1xuXG4gICAgdmFyIFJFX0hFWCA9IC9eIz8oW0EtRmEtZjAtOV17Nn18W0EtRmEtZjAtOV17M30pJC87XG4gICAgdmFyIFJFX0hFWEEgPSAvXiM/KFtBLUZhLWYwLTldezh9fFtBLUZhLWYwLTldezR9KSQvO1xuXG4gICAgdmFyIGhleDJyZ2IkMSA9IGZ1bmN0aW9uIChoZXgpIHtcbiAgICAgICAgaWYgKGhleC5tYXRjaChSRV9IRVgpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyAjXG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCB8fCBoZXgubGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV4cGFuZCBzaG9ydC1ub3RhdGlvbiB0byBmdWxsIHNpeC1kaWdpdFxuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGhleCA9IGhleFswXStoZXhbMF0raGV4WzFdK2hleFsxXStoZXhbMl0raGV4WzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICAgIHZhciByID0gdSA+PiAxNjtcbiAgICAgICAgICAgIHZhciBnID0gdSA+PiA4ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiID0gdSAmIDB4RkY7XG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWF0Y2ggcmdiYSBoZXggZm9ybWF0LCBlZyAjRkYwMDAwNzdcbiAgICAgICAgaWYgKGhleC5tYXRjaChSRV9IRVhBKSkge1xuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDUgfHwgaGV4Lmxlbmd0aCA9PT0gOSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25hbCBsZWFkaW5nICNcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXhwYW5kIHNob3J0LW5vdGF0aW9uIHRvIGZ1bGwgZWlnaHQtZGlnaXRcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXhbMF0raGV4WzBdK2hleFsxXStoZXhbMV0raGV4WzJdK2hleFsyXStoZXhbM10raGV4WzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUkMSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgICAgdmFyIHIkMSA9IHUkMSA+PiAyNCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgZyQxID0gdSQxID4+IDE2ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiJDEgPSB1JDEgPj4gOCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYSA9IE1hdGgucm91bmQoKHUkMSAmIDB4RkYpIC8gMHhGRiAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICByZXR1cm4gW3IkMSxnJDEsYiQxLGFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2UgdXNlZCB0byBjaGVjayBmb3IgY3NzIGNvbG9ycyBoZXJlXG4gICAgICAgIC8vIGlmIF9pbnB1dC5jc3M/IGFuZCByZ2IgPSBfaW5wdXQuY3NzIGhleFxuICAgICAgICAvLyAgICAgcmV0dXJuIHJnYlxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGhleCBjb2xvcjogXCIgKyBoZXgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGhleDJyZ2JfMSA9IGhleDJyZ2IkMTtcblxuICAgIHZhciBjaHJvbWEkZiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR5ID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSRpID0gdXRpbHMudHlwZTtcbiAgICB2YXIgaW5wdXQkYiA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhleCQxID0gcmdiMmhleF8xO1xuXG4gICAgQ29sb3IkeS5wcm90b3R5cGUuaGV4ID0gZnVuY3Rpb24obW9kZSkge1xuICAgICAgICByZXR1cm4gcmdiMmhleCQxKHRoaXMuX3JnYiwgbW9kZSk7XG4gICAgfTtcblxuICAgIGNocm9tYSRmLmhleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkeSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hleCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkYi5mb3JtYXQuaGV4ID0gaGV4MnJnYl8xO1xuICAgIGlucHV0JGIuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNCxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkaShoKSA9PT0gJ3N0cmluZycgJiYgWzMsNCw1LDYsNyw4LDldLmluZGV4T2YoaC5sZW5ndGgpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skbyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgVFdPUEkkMiA9IHV0aWxzLlRXT1BJO1xuICAgIHZhciBtaW4kMiA9IE1hdGgubWluO1xuICAgIHZhciBzcXJ0JDQgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIGFjb3MgPSBNYXRoLmFjb3M7XG5cbiAgICB2YXIgcmdiMmhzaSQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGJvcnJvd2VkIGZyb20gaGVyZTpcbiAgICAgICAgaHR0cDovL2h1bW1lci5zdGFuZm9yZC5lZHUvbXVzZWluZm8vZG9jL2V4YW1wbGVzL2h1bWRydW0va2V5c2NhcGUyL3JnYjJoc2kuY3BwXG4gICAgICAgICovXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skbyhhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHIgLz0gMjU1O1xuICAgICAgICBnIC89IDI1NTtcbiAgICAgICAgYiAvPSAyNTU7XG4gICAgICAgIHZhciBoO1xuICAgICAgICB2YXIgbWluXyA9IG1pbiQyKHIsZyxiKTtcbiAgICAgICAgdmFyIGkgPSAocitnK2IpIC8gMztcbiAgICAgICAgdmFyIHMgPSBpID4gMCA/IDEgLSBtaW5fL2kgOiAwO1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE5hTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGggPSAoKHItZykrKHItYikpIC8gMjtcbiAgICAgICAgICAgIGggLz0gc3FydCQ0KChyLWcpKihyLWcpICsgKHItYikqKGctYikpO1xuICAgICAgICAgICAgaCA9IGFjb3MoaCk7XG4gICAgICAgICAgICBpZiAoYiA+IGcpIHtcbiAgICAgICAgICAgICAgICBoID0gVFdPUEkkMiAtIGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoIC89IFRXT1BJJDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtoKjM2MCxzLGldO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhzaV8xID0gcmdiMmhzaSQxO1xuXG4gICAgdmFyIHVucGFjayRuID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsaW1pdCA9IHV0aWxzLmxpbWl0O1xuICAgIHZhciBUV09QSSQxID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIFBJVEhJUkQgPSB1dGlscy5QSVRISVJEO1xuICAgIHZhciBjb3MkNCA9IE1hdGguY29zO1xuXG4gICAgLypcbiAgICAgKiBodWUgWzAuLjM2MF1cbiAgICAgKiBzYXR1cmF0aW9uIFswLi4xXVxuICAgICAqIGludGVuc2l0eSBbMC4uMV1cbiAgICAgKi9cbiAgICB2YXIgaHNpMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9oc2kycmdiLmNwcFxuICAgICAgICAqL1xuICAgICAgICBhcmdzID0gdW5wYWNrJG4oYXJncywgJ2hzaScpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGkgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG5cbiAgICAgICAgaWYgKGlzTmFOKGgpKSB7IGggPSAwOyB9XG4gICAgICAgIGlmIChpc05hTihzKSkgeyBzID0gMDsgfVxuICAgICAgICAvLyBub3JtYWxpemUgaHVlXG4gICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICBoIC89IDM2MDtcbiAgICAgICAgaWYgKGggPCAxLzMpIHtcbiAgICAgICAgICAgIGIgPSAoMS1zKS8zO1xuICAgICAgICAgICAgciA9ICgxK3MqY29zJDQoVFdPUEkkMSpoKS9jb3MkNChQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICBnID0gMSAtIChiK3IpO1xuICAgICAgICB9IGVsc2UgaWYgKGggPCAyLzMpIHtcbiAgICAgICAgICAgIGggLT0gMS8zO1xuICAgICAgICAgICAgciA9ICgxLXMpLzM7XG4gICAgICAgICAgICBnID0gKDErcypjb3MkNChUV09QSSQxKmgpL2NvcyQ0KFBJVEhJUkQtVFdPUEkkMSpoKSkvMztcbiAgICAgICAgICAgIGIgPSAxIC0gKHIrZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoIC09IDIvMztcbiAgICAgICAgICAgIGcgPSAoMS1zKS8zO1xuICAgICAgICAgICAgYiA9ICgxK3MqY29zJDQoVFdPUEkkMSpoKS9jb3MkNChQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICByID0gMSAtIChnK2IpO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBsaW1pdChpKnIqMyk7XG4gICAgICAgIGcgPSBsaW1pdChpKmcqMyk7XG4gICAgICAgIGIgPSBsaW1pdChpKmIqMyk7XG4gICAgICAgIHJldHVybiBbcioyNTUsIGcqMjU1LCBiKjI1NSwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgaHNpMnJnYl8xID0gaHNpMnJnYjtcblxuICAgIHZhciB1bnBhY2skbSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRoID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGUgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkeCA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JGEgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoc2kgPSByZ2IyaHNpXzE7XG5cbiAgICBDb2xvciR4LnByb3RvdHlwZS5oc2kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc2kodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGUuaHNpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR4LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHNpJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRhLmZvcm1hdC5oc2kgPSBoc2kycmdiXzE7XG5cbiAgICBpbnB1dCRhLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJG0oYXJncywgJ2hzaScpO1xuICAgICAgICAgICAgaWYgKHR5cGUkaChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaHNpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRsID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGcgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkZCA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR3ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkOSA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhzbCQxID0gcmdiMmhzbF8xO1xuXG4gICAgQ29sb3Ikdy5wcm90b3R5cGUuaHNsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaHNsJDEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGQuaHNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR3LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHNsJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ5LmZvcm1hdC5oc2wgPSBoc2wycmdiXzE7XG5cbiAgICBpbnB1dCQ5LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJGwoYXJncywgJ2hzbCcpO1xuICAgICAgICAgICAgaWYgKHR5cGUkZyhhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaHNsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRrID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBtaW4kMSA9IE1hdGgubWluO1xuICAgIHZhciBtYXgkMSA9IE1hdGgubWF4O1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gcmdiMmhzdihyLGcsYilcbiAgICAgKiAtIHJnYjJoc3YoW3IsZyxiXSlcbiAgICAgKiAtIHJnYjJoc3Yoe3IsZyxifSlcbiAgICAgKi9cbiAgICB2YXIgcmdiMmhzbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGsoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBnID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgbWluXyA9IG1pbiQxKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4XyA9IG1heCQxKHIsIGcsIGIpO1xuICAgICAgICB2YXIgZGVsdGEgPSBtYXhfIC0gbWluXztcbiAgICAgICAgdmFyIGgscyx2O1xuICAgICAgICB2ID0gbWF4XyAvIDI1NS4wO1xuICAgICAgICBpZiAobWF4XyA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMgPSBkZWx0YSAvIG1heF87XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4XykgeyBoID0gKGcgLSBiKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoZyA9PT0gbWF4XykgeyBoID0gMisoYiAtIHIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChiID09PSBtYXhfKSB7IGggPSA0KyhyIC0gZykgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCwgcywgdl1cbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc3YkMSA9IHJnYjJoc2w7XG5cbiAgICB2YXIgdW5wYWNrJGogPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGZsb29yJDIgPSBNYXRoLmZsb29yO1xuXG4gICAgdmFyIGhzdjJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMiwgYXNzaWduJDMsIGFzc2lnbiQ0LCBhc3NpZ24kNTtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgICAgICBhcmdzID0gdW5wYWNrJGooYXJncywgJ2hzdicpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIHYgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIHYgKj0gMjU1O1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoID09PSAzNjApIHsgaCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgICAgIGggLz0gNjA7XG5cbiAgICAgICAgICAgIHZhciBpID0gZmxvb3IkMihoKTtcbiAgICAgICAgICAgIHZhciBmID0gaCAtIGk7XG4gICAgICAgICAgICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICAgICAgICAgICAgdmFyIHEgPSB2ICogKDEgLSBzICogZik7XG4gICAgICAgICAgICB2YXIgdCA9IHYgKiAoMSAtIHMgKiAoMSAtIGYpKTtcblxuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiAoYXNzaWduID0gW3YsIHQsIHBdLCByID0gYXNzaWduWzBdLCBnID0gYXNzaWduWzFdLCBiID0gYXNzaWduWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IChhc3NpZ24kMSA9IFtxLCB2LCBwXSwgciA9IGFzc2lnbiQxWzBdLCBnID0gYXNzaWduJDFbMV0sIGIgPSBhc3NpZ24kMVsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAyOiAoYXNzaWduJDIgPSBbcCwgdiwgdF0sIHIgPSBhc3NpZ24kMlswXSwgZyA9IGFzc2lnbiQyWzFdLCBiID0gYXNzaWduJDJbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzogKGFzc2lnbiQzID0gW3AsIHEsIHZdLCByID0gYXNzaWduJDNbMF0sIGcgPSBhc3NpZ24kM1sxXSwgYiA9IGFzc2lnbiQzWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IChhc3NpZ24kNCA9IFt0LCBwLCB2XSwgciA9IGFzc2lnbiQ0WzBdLCBnID0gYXNzaWduJDRbMV0sIGIgPSBhc3NpZ24kNFsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA1OiAoYXNzaWduJDUgPSBbdiwgcCwgcV0sIHIgPSBhc3NpZ24kNVswXSwgZyA9IGFzc2lnbiQ1WzFdLCBiID0gYXNzaWduJDVbMl0pOyBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsYXJncy5sZW5ndGggPiAzP2FyZ3NbM106MV07XG4gICAgfTtcblxuICAgIHZhciBoc3YycmdiXzEgPSBoc3YycmdiO1xuXG4gICAgdmFyIHVucGFjayRpID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGYgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkYyA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR2ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkOCA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmhzdiA9IHJnYjJoc3YkMTtcblxuICAgIENvbG9yJHYucHJvdG90eXBlLmhzdiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhzdih0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkYy5oc3YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHYsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc3YnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDguZm9ybWF0LmhzdiA9IGhzdjJyZ2JfMTtcblxuICAgIGlucHV0JDguYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skaShhcmdzLCAnaHN2Jyk7XG4gICAgICAgICAgICBpZiAodHlwZSRmKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoc3YnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbGFiQ29uc3RhbnRzID0ge1xuICAgICAgICAvLyBDb3JyZXNwb25kcyByb3VnaGx5IHRvIFJHQiBicmlnaHRlci9kYXJrZXJcbiAgICAgICAgS246IDE4LFxuXG4gICAgICAgIC8vIEQ2NSBzdGFuZGFyZCByZWZlcmVudFxuICAgICAgICBYbjogMC45NTA0NzAsXG4gICAgICAgIFluOiAxLFxuICAgICAgICBabjogMS4wODg4MzAsXG5cbiAgICAgICAgdDA6IDAuMTM3OTMxMDM0LCAgLy8gNCAvIDI5XG4gICAgICAgIHQxOiAwLjIwNjg5NjU1MiwgIC8vIDYgLyAyOVxuICAgICAgICB0MjogMC4xMjg0MTg1NSwgICAvLyAzICogdDEgKiB0MVxuICAgICAgICB0MzogMC4wMDg4NTY0NTIsICAvLyB0MSAqIHQxICogdDFcbiAgICB9O1xuXG4gICAgdmFyIExBQl9DT05TVEFOVFMkMyA9IGxhYkNvbnN0YW50cztcbiAgICB2YXIgdW5wYWNrJGggPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyRhID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgcmdiMmxhYiQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skaChhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IHJnYjJ4eXoocixnLGIpO1xuICAgICAgICB2YXIgeCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgeSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgeiA9IHJlZiQxWzJdO1xuICAgICAgICB2YXIgbCA9IDExNiAqIHkgLSAxNjtcbiAgICAgICAgcmV0dXJuIFtsIDwgMCA/IDAgOiBsLCA1MDAgKiAoeCAtIHkpLCAyMDAgKiAoeSAtIHopXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYl94eXogPSBmdW5jdGlvbiAocikge1xuICAgICAgICBpZiAoKHIgLz0gMjU1KSA8PSAwLjA0MDQ1KSB7IHJldHVybiByIC8gMTIuOTI7IH1cbiAgICAgICAgcmV0dXJuIHBvdyRhKChyICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfTtcblxuICAgIHZhciB4eXpfbGFiID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgPiBMQUJfQ09OU1RBTlRTJDMudDMpIHsgcmV0dXJuIHBvdyRhKHQsIDEgLyAzKTsgfVxuICAgICAgICByZXR1cm4gdCAvIExBQl9DT05TVEFOVFMkMy50MiArIExBQl9DT05TVEFOVFMkMy50MDtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJ4eXogPSBmdW5jdGlvbiAocixnLGIpIHtcbiAgICAgICAgciA9IHJnYl94eXoocik7XG4gICAgICAgIGcgPSByZ2JfeHl6KGcpO1xuICAgICAgICBiID0gcmdiX3h5eihiKTtcbiAgICAgICAgdmFyIHggPSB4eXpfbGFiKCgwLjQxMjQ1NjQgKiByICsgMC4zNTc1NzYxICogZyArIDAuMTgwNDM3NSAqIGIpIC8gTEFCX0NPTlNUQU5UUyQzLlhuKTtcbiAgICAgICAgdmFyIHkgPSB4eXpfbGFiKCgwLjIxMjY3MjkgKiByICsgMC43MTUxNTIyICogZyArIDAuMDcyMTc1MCAqIGIpIC8gTEFCX0NPTlNUQU5UUyQzLlluKTtcbiAgICAgICAgdmFyIHogPSB4eXpfbGFiKCgwLjAxOTMzMzkgKiByICsgMC4xMTkxOTIwICogZyArIDAuOTUwMzA0MSAqIGIpIC8gTEFCX0NPTlNUQU5UUyQzLlpuKTtcbiAgICAgICAgcmV0dXJuIFt4LHksel07XG4gICAgfTtcblxuICAgIHZhciByZ2IybGFiXzEgPSByZ2IybGFiJDI7XG5cbiAgICB2YXIgTEFCX0NPTlNUQU5UUyQyID0gbGFiQ29uc3RhbnRzO1xuICAgIHZhciB1bnBhY2skZyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcG93JDkgPSBNYXRoLnBvdztcblxuICAgIC8qXG4gICAgICogTCogWzAuLjEwMF1cbiAgICAgKiBhIFstMTAwLi4xMDBdXG4gICAgICogYiBbLTEwMC4uMTAwXVxuICAgICAqL1xuICAgIHZhciBsYWIycmdiJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayRnKGFyZ3MsICdsYWInKTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYSA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHgseSx6LCByLGcsYl87XG5cbiAgICAgICAgeSA9IChsICsgMTYpIC8gMTE2O1xuICAgICAgICB4ID0gaXNOYU4oYSkgPyB5IDogeSArIGEgLyA1MDA7XG4gICAgICAgIHogPSBpc05hTihiKSA/IHkgOiB5IC0gYiAvIDIwMDtcblxuICAgICAgICB5ID0gTEFCX0NPTlNUQU5UUyQyLlluICogbGFiX3h5eih5KTtcbiAgICAgICAgeCA9IExBQl9DT05TVEFOVFMkMi5YbiAqIGxhYl94eXooeCk7XG4gICAgICAgIHogPSBMQUJfQ09OU1RBTlRTJDIuWm4gKiBsYWJfeHl6KHopO1xuXG4gICAgICAgIHIgPSB4eXpfcmdiKDMuMjQwNDU0MiAqIHggLSAxLjUzNzEzODUgKiB5IC0gMC40OTg1MzE0ICogeik7ICAvLyBENjUgLT4gc1JHQlxuICAgICAgICBnID0geHl6X3JnYigtMC45NjkyNjYwICogeCArIDEuODc2MDEwOCAqIHkgKyAwLjA0MTU1NjAgKiB6KTtcbiAgICAgICAgYl8gPSB4eXpfcmdiKDAuMDU1NjQzNCAqIHggLSAwLjIwNDAyNTkgKiB5ICsgMS4wNTcyMjUyICogeik7XG5cbiAgICAgICAgcmV0dXJuIFtyLGcsYl8sYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgeHl6X3JnYiA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHJldHVybiAyNTUgKiAociA8PSAwLjAwMzA0ID8gMTIuOTIgKiByIDogMS4wNTUgKiBwb3ckOShyLCAxIC8gMi40KSAtIDAuMDU1KVxuICAgIH07XG5cbiAgICB2YXIgbGFiX3h5eiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ID4gTEFCX0NPTlNUQU5UUyQyLnQxID8gdCAqIHQgKiB0IDogTEFCX0NPTlNUQU5UUyQyLnQyICogKHQgLSBMQUJfQ09OU1RBTlRTJDIudDApXG4gICAgfTtcblxuICAgIHZhciBsYWIycmdiXzEgPSBsYWIycmdiJDE7XG5cbiAgICB2YXIgdW5wYWNrJGYgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkZSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRiID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHUgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ3ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IybGFiJDEgPSByZ2IybGFiXzE7XG5cbiAgICBDb2xvciR1LnByb3RvdHlwZS5sYWIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJsYWIkMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkYi5sYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHUsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydsYWInXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDcuZm9ybWF0LmxhYiA9IGxhYjJyZ2JfMTtcblxuICAgIGlucHV0JDcuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skZihhcmdzLCAnbGFiJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRlKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdsYWInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGUgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIFJBRDJERUcgPSB1dGlscy5SQUQyREVHO1xuICAgIHZhciBzcXJ0JDMgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIGF0YW4yJDIgPSBNYXRoLmF0YW4yO1xuICAgIHZhciByb3VuZCQyID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBsYWIybGNoJDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRlKGFyZ3MsICdsYWInKTtcbiAgICAgICAgdmFyIGwgPSByZWZbMF07XG4gICAgICAgIHZhciBhID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIGMgPSBzcXJ0JDMoYSAqIGEgKyBiICogYik7XG4gICAgICAgIHZhciBoID0gKGF0YW4yJDIoYiwgYSkgKiBSQUQyREVHICsgMzYwKSAlIDM2MDtcbiAgICAgICAgaWYgKHJvdW5kJDIoYyoxMDAwMCkgPT09IDApIHsgaCA9IE51bWJlci5OYU47IH1cbiAgICAgICAgcmV0dXJuIFtsLCBjLCBoXTtcbiAgICB9O1xuXG4gICAgdmFyIGxhYjJsY2hfMSA9IGxhYjJsY2gkMjtcblxuICAgIHZhciB1bnBhY2skZCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcmdiMmxhYiA9IHJnYjJsYWJfMTtcbiAgICB2YXIgbGFiMmxjaCQxID0gbGFiMmxjaF8xO1xuXG4gICAgdmFyIHJnYjJsY2gkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGQoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSByZ2IybGFiKHIsZyxiKTtcbiAgICAgICAgdmFyIGwgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGEgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBsYWIybGNoJDEobCxhLGJfKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJsY2hfMSA9IHJnYjJsY2gkMTtcblxuICAgIHZhciB1bnBhY2skYyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgREVHMlJBRCA9IHV0aWxzLkRFRzJSQUQ7XG4gICAgdmFyIHNpbiQzID0gTWF0aC5zaW47XG4gICAgdmFyIGNvcyQzID0gTWF0aC5jb3M7XG5cbiAgICB2YXIgbGNoMmxhYiQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8qXG4gICAgICAgIENvbnZlcnQgZnJvbSBhIHF1YWxpdGF0aXZlIHBhcmFtZXRlciBoIGFuZCBhIHF1YW50aXRhdGl2ZSBwYXJhbWV0ZXIgbCB0byBhIDI0LWJpdCBwaXhlbC5cbiAgICAgICAgVGhlc2UgZm9ybXVsYXMgd2VyZSBpbnZlbnRlZCBieSBEYXZpZCBEYWxyeW1wbGUgdG8gb2J0YWluIG1heGltdW0gY29udHJhc3Qgd2l0aG91dCBnb2luZ1xuICAgICAgICBvdXQgb2YgZ2FtdXQgaWYgdGhlIHBhcmFtZXRlcnMgYXJlIGluIHRoZSByYW5nZSAwLTEuXG5cbiAgICAgICAgQSBzYXR1cmF0aW9uIG11bHRpcGxpZXIgd2FzIGFkZGVkIGJ5IEdyZWdvciBBaXNjaFxuICAgICAgICAqL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGMoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGMgPSByZWZbMV07XG4gICAgICAgIHZhciBoID0gcmVmWzJdO1xuICAgICAgICBpZiAoaXNOYU4oaCkpIHsgaCA9IDA7IH1cbiAgICAgICAgaCA9IGggKiBERUcyUkFEO1xuICAgICAgICByZXR1cm4gW2wsIGNvcyQzKGgpICogYywgc2luJDMoaCkgKiBjXVxuICAgIH07XG5cbiAgICB2YXIgbGNoMmxhYl8xID0gbGNoMmxhYiQyO1xuXG4gICAgdmFyIHVucGFjayRiID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsY2gybGFiJDEgPSBsY2gybGFiXzE7XG4gICAgdmFyIGxhYjJyZ2IgPSBsYWIycmdiXzE7XG5cbiAgICB2YXIgbGNoMnJnYiQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skYihhcmdzLCAnbGNoJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByZWYgPSBsY2gybGFiJDEgKGwsYyxoKTtcbiAgICAgICAgdmFyIEwgPSByZWZbMF07XG4gICAgICAgIHZhciBhID0gcmVmWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IGxhYjJyZ2IgKEwsYSxiXyk7XG4gICAgICAgIHZhciByID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBnID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgbGNoMnJnYl8xID0gbGNoMnJnYiQxO1xuXG4gICAgdmFyIHVucGFjayRhID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsY2gycmdiID0gbGNoMnJnYl8xO1xuXG4gICAgdmFyIGhjbDJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIGhjbCA9IHVucGFjayRhKGFyZ3MsICdoY2wnKS5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiBsY2gycmdiLmFwcGx5KHZvaWQgMCwgaGNsKTtcbiAgICB9O1xuXG4gICAgdmFyIGhjbDJyZ2JfMSA9IGhjbDJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJDkgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkZCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRhID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHQgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ2ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IybGNoID0gcmdiMmxjaF8xO1xuXG4gICAgQ29sb3IkdC5wcm90b3R5cGUubGNoID0gZnVuY3Rpb24oKSB7IHJldHVybiByZ2IybGNoKHRoaXMuX3JnYik7IH07XG4gICAgQ29sb3IkdC5wcm90b3R5cGUuaGNsID0gZnVuY3Rpb24oKSB7IHJldHVybiByZ2IybGNoKHRoaXMuX3JnYikucmV2ZXJzZSgpOyB9O1xuXG4gICAgY2hyb21hJGEubGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR0LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbGNoJ10pICkpO1xuICAgIH07XG4gICAgY2hyb21hJGEuaGNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR0LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGNsJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ2LmZvcm1hdC5sY2ggPSBsY2gycmdiXzE7XG4gICAgaW5wdXQkNi5mb3JtYXQuaGNsID0gaGNsMnJnYl8xO1xuXG4gICAgWydsY2gnLCdoY2wnXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7IHJldHVybiBpbnB1dCQ2LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJDkoYXJncywgbSk7XG4gICAgICAgICAgICBpZiAodHlwZSRkKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTsgfSk7XG5cbiAgICAvKipcbiAgICBcdFgxMSBjb2xvciBuYW1lc1xuXG4gICAgXHRodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbiAgICAqL1xuXG4gICAgdmFyIHczY3gxMSQxID0ge1xuICAgICAgICBhbGljZWJsdWU6ICcjZjBmOGZmJyxcbiAgICAgICAgYW50aXF1ZXdoaXRlOiAnI2ZhZWJkNycsXG4gICAgICAgIGFxdWE6ICcjMDBmZmZmJyxcbiAgICAgICAgYXF1YW1hcmluZTogJyM3ZmZmZDQnLFxuICAgICAgICBhenVyZTogJyNmMGZmZmYnLFxuICAgICAgICBiZWlnZTogJyNmNWY1ZGMnLFxuICAgICAgICBiaXNxdWU6ICcjZmZlNGM0JyxcbiAgICAgICAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgICAgICAgYmxhbmNoZWRhbG1vbmQ6ICcjZmZlYmNkJyxcbiAgICAgICAgYmx1ZTogJyMwMDAwZmYnLFxuICAgICAgICBibHVldmlvbGV0OiAnIzhhMmJlMicsXG4gICAgICAgIGJyb3duOiAnI2E1MmEyYScsXG4gICAgICAgIGJ1cmx5d29vZDogJyNkZWI4ODcnLFxuICAgICAgICBjYWRldGJsdWU6ICcjNWY5ZWEwJyxcbiAgICAgICAgY2hhcnRyZXVzZTogJyM3ZmZmMDAnLFxuICAgICAgICBjaG9jb2xhdGU6ICcjZDI2OTFlJyxcbiAgICAgICAgY29yYWw6ICcjZmY3ZjUwJyxcbiAgICAgICAgY29ybmZsb3dlcjogJyM2NDk1ZWQnLFxuICAgICAgICBjb3JuZmxvd2VyYmx1ZTogJyM2NDk1ZWQnLFxuICAgICAgICBjb3Juc2lsazogJyNmZmY4ZGMnLFxuICAgICAgICBjcmltc29uOiAnI2RjMTQzYycsXG4gICAgICAgIGN5YW46ICcjMDBmZmZmJyxcbiAgICAgICAgZGFya2JsdWU6ICcjMDAwMDhiJyxcbiAgICAgICAgZGFya2N5YW46ICcjMDA4YjhiJyxcbiAgICAgICAgZGFya2dvbGRlbnJvZDogJyNiODg2MGInLFxuICAgICAgICBkYXJrZ3JheTogJyNhOWE5YTknLFxuICAgICAgICBkYXJrZ3JlZW46ICcjMDA2NDAwJyxcbiAgICAgICAgZGFya2dyZXk6ICcjYTlhOWE5JyxcbiAgICAgICAgZGFya2toYWtpOiAnI2JkYjc2YicsXG4gICAgICAgIGRhcmttYWdlbnRhOiAnIzhiMDA4YicsXG4gICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAnIzU1NmIyZicsXG4gICAgICAgIGRhcmtvcmFuZ2U6ICcjZmY4YzAwJyxcbiAgICAgICAgZGFya29yY2hpZDogJyM5OTMyY2MnLFxuICAgICAgICBkYXJrcmVkOiAnIzhiMDAwMCcsXG4gICAgICAgIGRhcmtzYWxtb246ICcjZTk5NjdhJyxcbiAgICAgICAgZGFya3NlYWdyZWVuOiAnIzhmYmM4ZicsXG4gICAgICAgIGRhcmtzbGF0ZWJsdWU6ICcjNDgzZDhiJyxcbiAgICAgICAgZGFya3NsYXRlZ3JheTogJyMyZjRmNGYnLFxuICAgICAgICBkYXJrc2xhdGVncmV5OiAnIzJmNGY0ZicsXG4gICAgICAgIGRhcmt0dXJxdW9pc2U6ICcjMDBjZWQxJyxcbiAgICAgICAgZGFya3Zpb2xldDogJyM5NDAwZDMnLFxuICAgICAgICBkZWVwcGluazogJyNmZjE0OTMnLFxuICAgICAgICBkZWVwc2t5Ymx1ZTogJyMwMGJmZmYnLFxuICAgICAgICBkaW1ncmF5OiAnIzY5Njk2OScsXG4gICAgICAgIGRpbWdyZXk6ICcjNjk2OTY5JyxcbiAgICAgICAgZG9kZ2VyYmx1ZTogJyMxZTkwZmYnLFxuICAgICAgICBmaXJlYnJpY2s6ICcjYjIyMjIyJyxcbiAgICAgICAgZmxvcmFsd2hpdGU6ICcjZmZmYWYwJyxcbiAgICAgICAgZm9yZXN0Z3JlZW46ICcjMjI4YjIyJyxcbiAgICAgICAgZnVjaHNpYTogJyNmZjAwZmYnLFxuICAgICAgICBnYWluc2Jvcm86ICcjZGNkY2RjJyxcbiAgICAgICAgZ2hvc3R3aGl0ZTogJyNmOGY4ZmYnLFxuICAgICAgICBnb2xkOiAnI2ZmZDcwMCcsXG4gICAgICAgIGdvbGRlbnJvZDogJyNkYWE1MjAnLFxuICAgICAgICBncmF5OiAnIzgwODA4MCcsXG4gICAgICAgIGdyZWVuOiAnIzAwODAwMCcsXG4gICAgICAgIGdyZWVueWVsbG93OiAnI2FkZmYyZicsXG4gICAgICAgIGdyZXk6ICcjODA4MDgwJyxcbiAgICAgICAgaG9uZXlkZXc6ICcjZjBmZmYwJyxcbiAgICAgICAgaG90cGluazogJyNmZjY5YjQnLFxuICAgICAgICBpbmRpYW5yZWQ6ICcjY2Q1YzVjJyxcbiAgICAgICAgaW5kaWdvOiAnIzRiMDA4MicsXG4gICAgICAgIGl2b3J5OiAnI2ZmZmZmMCcsXG4gICAgICAgIGtoYWtpOiAnI2YwZTY4YycsXG4gICAgICAgIGxhc2VybGVtb246ICcjZmZmZjU0JyxcbiAgICAgICAgbGF2ZW5kZXI6ICcjZTZlNmZhJyxcbiAgICAgICAgbGF2ZW5kZXJibHVzaDogJyNmZmYwZjUnLFxuICAgICAgICBsYXduZ3JlZW46ICcjN2NmYzAwJyxcbiAgICAgICAgbGVtb25jaGlmZm9uOiAnI2ZmZmFjZCcsXG4gICAgICAgIGxpZ2h0Ymx1ZTogJyNhZGQ4ZTYnLFxuICAgICAgICBsaWdodGNvcmFsOiAnI2YwODA4MCcsXG4gICAgICAgIGxpZ2h0Y3lhbjogJyNlMGZmZmYnLFxuICAgICAgICBsaWdodGdvbGRlbnJvZDogJyNmYWZhZDInLFxuICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogJyNmYWZhZDInLFxuICAgICAgICBsaWdodGdyYXk6ICcjZDNkM2QzJyxcbiAgICAgICAgbGlnaHRncmVlbjogJyM5MGVlOTAnLFxuICAgICAgICBsaWdodGdyZXk6ICcjZDNkM2QzJyxcbiAgICAgICAgbGlnaHRwaW5rOiAnI2ZmYjZjMScsXG4gICAgICAgIGxpZ2h0c2FsbW9uOiAnI2ZmYTA3YScsXG4gICAgICAgIGxpZ2h0c2VhZ3JlZW46ICcjMjBiMmFhJyxcbiAgICAgICAgbGlnaHRza3libHVlOiAnIzg3Y2VmYScsXG4gICAgICAgIGxpZ2h0c2xhdGVncmF5OiAnIzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c2xhdGVncmV5OiAnIzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c3RlZWxibHVlOiAnI2IwYzRkZScsXG4gICAgICAgIGxpZ2h0eWVsbG93OiAnI2ZmZmZlMCcsXG4gICAgICAgIGxpbWU6ICcjMDBmZjAwJyxcbiAgICAgICAgbGltZWdyZWVuOiAnIzMyY2QzMicsXG4gICAgICAgIGxpbmVuOiAnI2ZhZjBlNicsXG4gICAgICAgIG1hZ2VudGE6ICcjZmYwMGZmJyxcbiAgICAgICAgbWFyb29uOiAnIzgwMDAwMCcsXG4gICAgICAgIG1hcm9vbjI6ICcjN2YwMDAwJyxcbiAgICAgICAgbWFyb29uMzogJyNiMDMwNjAnLFxuICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAnIzY2Y2RhYScsXG4gICAgICAgIG1lZGl1bWJsdWU6ICcjMDAwMGNkJyxcbiAgICAgICAgbWVkaXVtb3JjaGlkOiAnI2JhNTVkMycsXG4gICAgICAgIG1lZGl1bXB1cnBsZTogJyM5MzcwZGInLFxuICAgICAgICBtZWRpdW1zZWFncmVlbjogJyMzY2IzNzEnLFxuICAgICAgICBtZWRpdW1zbGF0ZWJsdWU6ICcjN2I2OGVlJyxcbiAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46ICcjMDBmYTlhJyxcbiAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAnIzQ4ZDFjYycsXG4gICAgICAgIG1lZGl1bXZpb2xldHJlZDogJyNjNzE1ODUnLFxuICAgICAgICBtaWRuaWdodGJsdWU6ICcjMTkxOTcwJyxcbiAgICAgICAgbWludGNyZWFtOiAnI2Y1ZmZmYScsXG4gICAgICAgIG1pc3R5cm9zZTogJyNmZmU0ZTEnLFxuICAgICAgICBtb2NjYXNpbjogJyNmZmU0YjUnLFxuICAgICAgICBuYXZham93aGl0ZTogJyNmZmRlYWQnLFxuICAgICAgICBuYXZ5OiAnIzAwMDA4MCcsXG4gICAgICAgIG9sZGxhY2U6ICcjZmRmNWU2JyxcbiAgICAgICAgb2xpdmU6ICcjODA4MDAwJyxcbiAgICAgICAgb2xpdmVkcmFiOiAnIzZiOGUyMycsXG4gICAgICAgIG9yYW5nZTogJyNmZmE1MDAnLFxuICAgICAgICBvcmFuZ2VyZWQ6ICcjZmY0NTAwJyxcbiAgICAgICAgb3JjaGlkOiAnI2RhNzBkNicsXG4gICAgICAgIHBhbGVnb2xkZW5yb2Q6ICcjZWVlOGFhJyxcbiAgICAgICAgcGFsZWdyZWVuOiAnIzk4ZmI5OCcsXG4gICAgICAgIHBhbGV0dXJxdW9pc2U6ICcjYWZlZWVlJyxcbiAgICAgICAgcGFsZXZpb2xldHJlZDogJyNkYjcwOTMnLFxuICAgICAgICBwYXBheWF3aGlwOiAnI2ZmZWZkNScsXG4gICAgICAgIHBlYWNocHVmZjogJyNmZmRhYjknLFxuICAgICAgICBwZXJ1OiAnI2NkODUzZicsXG4gICAgICAgIHBpbms6ICcjZmZjMGNiJyxcbiAgICAgICAgcGx1bTogJyNkZGEwZGQnLFxuICAgICAgICBwb3dkZXJibHVlOiAnI2IwZTBlNicsXG4gICAgICAgIHB1cnBsZTogJyM4MDAwODAnLFxuICAgICAgICBwdXJwbGUyOiAnIzdmMDA3ZicsXG4gICAgICAgIHB1cnBsZTM6ICcjYTAyMGYwJyxcbiAgICAgICAgcmViZWNjYXB1cnBsZTogJyM2NjMzOTknLFxuICAgICAgICByZWQ6ICcjZmYwMDAwJyxcbiAgICAgICAgcm9zeWJyb3duOiAnI2JjOGY4ZicsXG4gICAgICAgIHJveWFsYmx1ZTogJyM0MTY5ZTEnLFxuICAgICAgICBzYWRkbGVicm93bjogJyM4YjQ1MTMnLFxuICAgICAgICBzYWxtb246ICcjZmE4MDcyJyxcbiAgICAgICAgc2FuZHlicm93bjogJyNmNGE0NjAnLFxuICAgICAgICBzZWFncmVlbjogJyMyZThiNTcnLFxuICAgICAgICBzZWFzaGVsbDogJyNmZmY1ZWUnLFxuICAgICAgICBzaWVubmE6ICcjYTA1MjJkJyxcbiAgICAgICAgc2lsdmVyOiAnI2MwYzBjMCcsXG4gICAgICAgIHNreWJsdWU6ICcjODdjZWViJyxcbiAgICAgICAgc2xhdGVibHVlOiAnIzZhNWFjZCcsXG4gICAgICAgIHNsYXRlZ3JheTogJyM3MDgwOTAnLFxuICAgICAgICBzbGF0ZWdyZXk6ICcjNzA4MDkwJyxcbiAgICAgICAgc25vdzogJyNmZmZhZmEnLFxuICAgICAgICBzcHJpbmdncmVlbjogJyMwMGZmN2YnLFxuICAgICAgICBzdGVlbGJsdWU6ICcjNDY4MmI0JyxcbiAgICAgICAgdGFuOiAnI2QyYjQ4YycsXG4gICAgICAgIHRlYWw6ICcjMDA4MDgwJyxcbiAgICAgICAgdGhpc3RsZTogJyNkOGJmZDgnLFxuICAgICAgICB0b21hdG86ICcjZmY2MzQ3JyxcbiAgICAgICAgdHVycXVvaXNlOiAnIzQwZTBkMCcsXG4gICAgICAgIHZpb2xldDogJyNlZTgyZWUnLFxuICAgICAgICB3aGVhdDogJyNmNWRlYjMnLFxuICAgICAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgICAgICB3aGl0ZXNtb2tlOiAnI2Y1ZjVmNScsXG4gICAgICAgIHllbGxvdzogJyNmZmZmMDAnLFxuICAgICAgICB5ZWxsb3dncmVlbjogJyM5YWNkMzInXG4gICAgfTtcblxuICAgIHZhciB3M2N4MTFfMSA9IHczY3gxMSQxO1xuXG4gICAgdmFyIENvbG9yJHMgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ1ID0gaW5wdXQkaDtcbiAgICB2YXIgdHlwZSRjID0gdXRpbHMudHlwZTtcblxuICAgIHZhciB3M2N4MTEgPSB3M2N4MTFfMTtcbiAgICB2YXIgaGV4MnJnYiA9IGhleDJyZ2JfMTtcbiAgICB2YXIgcmdiMmhleCA9IHJnYjJoZXhfMTtcblxuICAgIENvbG9yJHMucHJvdG90eXBlLm5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhleCA9IHJnYjJoZXgodGhpcy5fcmdiLCAncmdiJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gT2JqZWN0LmtleXModzNjeDExKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBuID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgaWYgKHczY3gxMVtuXSA9PT0gaGV4KSB7IHJldHVybiBuLnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGV4O1xuICAgIH07XG5cbiAgICBpbnB1dCQ1LmZvcm1hdC5uYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh3M2N4MTFbbmFtZV0pIHsgcmV0dXJuIGhleDJyZ2IodzNjeDExW25hbWVdKTsgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gY29sb3IgbmFtZTogJytuYW1lKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkNS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA1LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICAgICAgICAgIGlmICghcmVzdC5sZW5ndGggJiYgdHlwZSRjKGgpID09PSAnc3RyaW5nJyAmJiB3M2N4MTFbaC50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbmFtZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJDggPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgcmdiMm51bSQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skOChhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHJldHVybiAociA8PCAxNikgKyAoZyA8PCA4KSArIGI7XG4gICAgfTtcblxuICAgIHZhciByZ2IybnVtXzEgPSByZ2IybnVtJDE7XG5cbiAgICB2YXIgdHlwZSRiID0gdXRpbHMudHlwZTtcblxuICAgIHZhciBudW0ycmdiID0gZnVuY3Rpb24gKG51bSkge1xuICAgICAgICBpZiAodHlwZSRiKG51bSkgPT0gXCJudW1iZXJcIiAmJiBudW0gPj0gMCAmJiBudW0gPD0gMHhGRkZGRkYpIHtcbiAgICAgICAgICAgIHZhciByID0gbnVtID4+IDE2O1xuICAgICAgICAgICAgdmFyIGcgPSAobnVtID4+IDgpICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiID0gbnVtICYgMHhGRjtcbiAgICAgICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBudW0gY29sb3I6IFwiK251bSk7XG4gICAgfTtcblxuICAgIHZhciBudW0ycmdiXzEgPSBudW0ycmdiO1xuXG4gICAgdmFyIGNocm9tYSQ5ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHIgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQ0ID0gaW5wdXQkaDtcbiAgICB2YXIgdHlwZSRhID0gdXRpbHMudHlwZTtcblxuICAgIHZhciByZ2IybnVtID0gcmdiMm51bV8xO1xuXG4gICAgQ29sb3Ikci5wcm90b3R5cGUubnVtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IybnVtKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSQ5Lm51bSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkciwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ251bSddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkNC5mb3JtYXQubnVtID0gbnVtMnJnYl8xO1xuXG4gICAgaW5wdXQkNC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA1LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGUkYShhcmdzWzBdKSA9PT0gJ251bWJlcicgJiYgYXJnc1swXSA+PSAwICYmIGFyZ3NbMF0gPD0gMHhGRkZGRkYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjaHJvbWEkOCA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRxID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkMyA9IGlucHV0JGg7XG4gICAgdmFyIHVucGFjayQ3ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDkgPSB1dGlscy50eXBlO1xuICAgIHZhciByb3VuZCQxID0gTWF0aC5yb3VuZDtcblxuICAgIENvbG9yJHEucHJvdG90eXBlLnJnYiA9IGZ1bmN0aW9uKHJuZCkge1xuICAgICAgICBpZiAoIHJuZCA9PT0gdm9pZCAwICkgcm5kPXRydWU7XG5cbiAgICAgICAgaWYgKHJuZCA9PT0gZmFsc2UpIHsgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLDMpOyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCwzKS5tYXAocm91bmQkMSk7XG4gICAgfTtcblxuICAgIENvbG9yJHEucHJvdG90eXBlLnJnYmEgPSBmdW5jdGlvbihybmQpIHtcbiAgICAgICAgaWYgKCBybmQgPT09IHZvaWQgMCApIHJuZD10cnVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCw0KS5tYXAoZnVuY3Rpb24gKHYsaSkge1xuICAgICAgICAgICAgcmV0dXJuIGk8MyA/IChybmQgPT09IGZhbHNlID8gdiA6IHJvdW5kJDEodikpIDogdjtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNocm9tYSQ4LnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkcSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ3JnYiddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkMy5mb3JtYXQucmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2JhID0gdW5wYWNrJDcoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgaWYgKHJnYmFbM10gPT09IHVuZGVmaW5lZCkgeyByZ2JhWzNdID0gMTsgfVxuICAgICAgICByZXR1cm4gcmdiYTtcbiAgICB9O1xuXG4gICAgaW5wdXQkMy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAzLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayQ3KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ5KGFyZ3MpID09PSAnYXJyYXknICYmIChhcmdzLmxlbmd0aCA9PT0gMyB8fFxuICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGUkOShhcmdzWzNdKSA9PSAnbnVtYmVyJyAmJiBhcmdzWzNdID49IDAgJiYgYXJnc1szXSA8PSAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAncmdiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLypcbiAgICAgKiBCYXNlZCBvbiBpbXBsZW1lbnRhdGlvbiBieSBOZWlsIEJhcnRsZXR0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL25laWxiYXJ0bGV0dC9jb2xvci10ZW1wZXJhdHVyZVxuICAgICAqL1xuXG4gICAgdmFyIGxvZyQxID0gTWF0aC5sb2c7XG5cbiAgICB2YXIgdGVtcGVyYXR1cmUycmdiJDEgPSBmdW5jdGlvbiAoa2VsdmluKSB7XG4gICAgICAgIHZhciB0ZW1wID0ga2VsdmluIC8gMTAwO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIGlmICh0ZW1wIDwgNjYpIHtcbiAgICAgICAgICAgIHIgPSAyNTU7XG4gICAgICAgICAgICBnID0gdGVtcCA8IDYgPyAwIDogLTE1NS4yNTQ4NTU2MjcwOTE3OSAtIDAuNDQ1OTY5NTA0Njk1NzkxMzMgKiAoZyA9IHRlbXAtMikgKyAxMDQuNDkyMTYxOTkzOTM4ODggKiBsb2ckMShnKTtcbiAgICAgICAgICAgIGIgPSB0ZW1wIDwgMjAgPyAwIDogLTI1NC43NjkzNTE4NDEyMDkwMiArIDAuODI3NDA5NjA2NDAwNzM5NSAqIChiID0gdGVtcC0xMCkgKyAxMTUuNjc5OTQ0MDEwNjYxNDcgKiBsb2ckMShiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSAzNTEuOTc2OTA1NjY4MDU2OTMgKyAwLjExNDIwNjQ1Mzc4NDE2NSAqIChyID0gdGVtcC01NSkgLSA0MC4yNTM2NjMwOTMzMjEyNyAqIGxvZyQxKHIpO1xuICAgICAgICAgICAgZyA9IDMyNS40NDk0MTI1NzExOTc0ICsgMC4wNzk0MzQ1NjUzNjY2MjM0MiAqIChnID0gdGVtcC01MCkgLSAyOC4wODUyOTYzNTA3OTU3ICogbG9nJDEoZyk7XG4gICAgICAgICAgICBiID0gMjU1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgfTtcblxuICAgIHZhciB0ZW1wZXJhdHVyZTJyZ2JfMSA9IHRlbXBlcmF0dXJlMnJnYiQxO1xuXG4gICAgLypcbiAgICAgKiBCYXNlZCBvbiBpbXBsZW1lbnRhdGlvbiBieSBOZWlsIEJhcnRsZXR0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL25laWxiYXJ0bGV0dC9jb2xvci10ZW1wZXJhdHVyZVxuICAgICAqKi9cblxuICAgIHZhciB0ZW1wZXJhdHVyZTJyZ2IgPSB0ZW1wZXJhdHVyZTJyZ2JfMTtcbiAgICB2YXIgdW5wYWNrJDYgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciByZ2IydGVtcGVyYXR1cmUkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiID0gdW5wYWNrJDYoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJnYlswXSwgYiA9IHJnYlsyXTtcbiAgICAgICAgdmFyIG1pblRlbXAgPSAxMDAwO1xuICAgICAgICB2YXIgbWF4VGVtcCA9IDQwMDAwO1xuICAgICAgICB2YXIgZXBzID0gMC40O1xuICAgICAgICB2YXIgdGVtcDtcbiAgICAgICAgd2hpbGUgKG1heFRlbXAgLSBtaW5UZW1wID4gZXBzKSB7XG4gICAgICAgICAgICB0ZW1wID0gKG1heFRlbXAgKyBtaW5UZW1wKSAqIDAuNTtcbiAgICAgICAgICAgIHZhciByZ2IkMSA9IHRlbXBlcmF0dXJlMnJnYih0ZW1wKTtcbiAgICAgICAgICAgIGlmICgocmdiJDFbMl0gLyByZ2IkMVswXSkgPj0gKGIgLyByKSkge1xuICAgICAgICAgICAgICAgIG1heFRlbXAgPSB0ZW1wO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaW5UZW1wID0gdGVtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91bmQodGVtcCk7XG4gICAgfTtcblxuICAgIHZhciByZ2IydGVtcGVyYXR1cmVfMSA9IHJnYjJ0ZW1wZXJhdHVyZSQxO1xuXG4gICAgdmFyIGNocm9tYSQ3ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHAgPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCQyID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IydGVtcGVyYXR1cmUgPSByZ2IydGVtcGVyYXR1cmVfMTtcblxuICAgIENvbG9yJHAucHJvdG90eXBlLnRlbXAgPVxuICAgIENvbG9yJHAucHJvdG90eXBlLmtlbHZpbiA9XG4gICAgQ29sb3IkcC5wcm90b3R5cGUudGVtcGVyYXR1cmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJ0ZW1wZXJhdHVyZSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkNy50ZW1wID1cbiAgICBjaHJvbWEkNy5rZWx2aW4gPVxuICAgIGNocm9tYSQ3LnRlbXBlcmF0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRwLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsndGVtcCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkMi5mb3JtYXQudGVtcCA9XG4gICAgaW5wdXQkMi5mb3JtYXQua2VsdmluID1cbiAgICBpbnB1dCQyLmZvcm1hdC50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlMnJnYl8xO1xuXG4gICAgdmFyIHVucGFjayQ1ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBjYnJ0ID0gTWF0aC5jYnJ0O1xuICAgIHZhciBwb3ckOCA9IE1hdGgucG93O1xuICAgIHZhciBzaWduJDEgPSBNYXRoLnNpZ247XG5cbiAgICB2YXIgcmdiMm9rbGFiJDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLy8gT0tMYWIgY29sb3Igc3BhY2UgaW1wbGVtZW50YXRpb24gdGFrZW4gZnJvbVxuICAgICAgICAvLyBodHRwczovL2JvdHRvc3Nvbi5naXRodWIuaW8vcG9zdHMvb2tsYWIvXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skNShhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IFtyZ2IybHJnYihyIC8gMjU1KSwgcmdiMmxyZ2IoZyAvIDI1NSksIHJnYjJscmdiKGIgLyAyNTUpXTtcbiAgICAgICAgdmFyIGxyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBsZyA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgbGIgPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGwgPSBjYnJ0KDAuNDEyMjIxNDcwOCAqIGxyICsgMC41MzYzMzI1MzYzICogbGcgKyAwLjA1MTQ0NTk5MjkgKiBsYik7XG4gICAgICAgIHZhciBtID0gY2JydCgwLjIxMTkwMzQ5ODIgKiBsciArIDAuNjgwNjk5NTQ1MSAqIGxnICsgMC4xMDczOTY5NTY2ICogbGIpO1xuICAgICAgICB2YXIgcyA9IGNicnQoMC4wODgzMDI0NjE5ICogbHIgKyAwLjI4MTcxODgzNzYgKiBsZyArIDAuNjI5OTc4NzAwNSAqIGxiKTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgMC4yMTA0NTQyNTUzICogbCArIDAuNzkzNjE3Nzg1ICogbSAtIDAuMDA0MDcyMDQ2OCAqIHMsXG4gICAgICAgICAgICAxLjk3Nzk5ODQ5NTEgKiBsIC0gMi40Mjg1OTIyMDUgKiBtICsgMC40NTA1OTM3MDk5ICogcyxcbiAgICAgICAgICAgIDAuMDI1OTA0MDM3MSAqIGwgKyAwLjc4Mjc3MTc2NjIgKiBtIC0gMC44MDg2NzU3NjYgKiBzXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHZhciByZ2Iyb2tsYWJfMSA9IHJnYjJva2xhYiQyO1xuXG4gICAgZnVuY3Rpb24gcmdiMmxyZ2IoYykge1xuICAgICAgICB2YXIgYWJzID0gTWF0aC5hYnMoYyk7XG4gICAgICAgIGlmIChhYnMgPCAwLjA0MDQ1KSB7XG4gICAgICAgICAgICByZXR1cm4gYyAvIDEyLjkyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoc2lnbiQxKGMpIHx8IDEpICogcG93JDgoKGFicyArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH1cblxuICAgIHZhciB1bnBhY2skNCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcG93JDcgPSBNYXRoLnBvdztcbiAgICB2YXIgc2lnbiA9IE1hdGguc2lnbjtcblxuICAgIC8qXG4gICAgICogTCogWzAuLjEwMF1cbiAgICAgKiBhIFstMTAwLi4xMDBdXG4gICAgICogYiBbLTEwMC4uMTAwXVxuICAgICAqL1xuICAgIHZhciBva2xhYjJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJDQoYXJncywgJ2xhYicpO1xuICAgICAgICB2YXIgTCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBhID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuXG4gICAgICAgIHZhciBsID0gcG93JDcoTCArIDAuMzk2MzM3Nzc3NCAqIGEgKyAwLjIxNTgwMzc1NzMgKiBiLCAzKTtcbiAgICAgICAgdmFyIG0gPSBwb3ckNyhMIC0gMC4xMDU1NjEzNDU4ICogYSAtIDAuMDYzODU0MTcyOCAqIGIsIDMpO1xuICAgICAgICB2YXIgcyA9IHBvdyQ3KEwgLSAwLjA4OTQ4NDE3NzUgKiBhIC0gMS4yOTE0ODU1NDggKiBiLCAzKTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgMjU1ICogbHJnYjJyZ2IoKzQuMDc2NzQxNjYyMSAqIGwgLSAzLjMwNzcxMTU5MTMgKiBtICsgMC4yMzA5Njk5MjkyICogcyksXG4gICAgICAgICAgICAyNTUgKiBscmdiMnJnYigtMS4yNjg0MzgwMDQ2ICogbCArIDIuNjA5NzU3NDAxMSAqIG0gLSAwLjM0MTMxOTM5NjUgKiBzKSxcbiAgICAgICAgICAgIDI1NSAqIGxyZ2IycmdiKC0wLjAwNDE5NjA4NjMgKiBsIC0gMC43MDM0MTg2MTQ3ICogbSArIDEuNzA3NjE0NzAxICogcyksXG4gICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMVxuICAgICAgICBdO1xuICAgIH07XG5cbiAgICB2YXIgb2tsYWIycmdiXzEgPSBva2xhYjJyZ2IkMTtcblxuICAgIGZ1bmN0aW9uIGxyZ2IycmdiKGMpIHtcbiAgICAgICAgdmFyIGFicyA9IE1hdGguYWJzKGMpO1xuICAgICAgICBpZiAoYWJzID4gMC4wMDMxMzA4KSB7XG4gICAgICAgICAgICByZXR1cm4gKHNpZ24oYykgfHwgMSkgKiAoMS4wNTUgKiBwb3ckNyhhYnMsIDEgLyAyLjQpIC0gMC4wNTUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjICogMTIuOTI7XG4gICAgfVxuXG4gICAgdmFyIHVucGFjayQzID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDggPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkNiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRvID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkMSA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMm9rbGFiJDEgPSByZ2Iyb2tsYWJfMTtcblxuICAgIENvbG9yJG8ucHJvdG90eXBlLm9rbGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmdiMm9rbGFiJDEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDYub2tsYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJG8sIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydva2xhYiddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkMS5mb3JtYXQub2tsYWIgPSBva2xhYjJyZ2JfMTtcblxuICAgIGlucHV0JDEuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMyxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skMyhhcmdzLCAnb2tsYWInKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDgoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29rbGFiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayQyID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByZ2Iyb2tsYWIgPSByZ2Iyb2tsYWJfMTtcbiAgICB2YXIgbGFiMmxjaCA9IGxhYjJsY2hfMTtcblxuICAgIHZhciByZ2Iyb2tsY2gkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJDIoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSByZ2Iyb2tsYWIociwgZywgYik7XG4gICAgICAgIHZhciBsID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gbGFiMmxjaChsLCBhLCBiXyk7XG4gICAgfTtcblxuICAgIHZhciByZ2Iyb2tsY2hfMSA9IHJnYjJva2xjaCQxO1xuXG4gICAgdmFyIHVucGFjayQxID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsY2gybGFiID0gbGNoMmxhYl8xO1xuICAgIHZhciBva2xhYjJyZ2IgPSBva2xhYjJyZ2JfMTtcblxuICAgIHZhciBva2xjaDJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayQxKGFyZ3MsICdsY2gnKTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBoID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHJlZiA9IGxjaDJsYWIobCwgYywgaCk7XG4gICAgICAgIHZhciBMID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBva2xhYjJyZ2IoTCwgYSwgYl8pO1xuICAgICAgICB2YXIgciA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIG9rbGNoMnJnYl8xID0gb2tsY2gycmdiO1xuXG4gICAgdmFyIHVucGFjayA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ3ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJDUgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkbiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0ID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2Iyb2tsY2ggPSByZ2Iyb2tsY2hfMTtcblxuICAgIENvbG9yJG4ucHJvdG90eXBlLm9rbGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmdiMm9rbGNoKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSQ1Lm9rbGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRuLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnb2tsY2gnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5va2xjaCA9IG9rbGNoMnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMyxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ29rbGNoJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ3KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdva2xjaCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb2xvciRtID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSQ2ID0gdXRpbHMudHlwZTtcblxuICAgIENvbG9yJG0ucHJvdG90eXBlLmFscGhhID0gZnVuY3Rpb24oYSwgbXV0YXRlKSB7XG4gICAgICAgIGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGU9ZmFsc2U7XG5cbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCAmJiB0eXBlJDYoYSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAobXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmdiWzNdID0gYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkbShbdGhpcy5fcmdiWzBdLCB0aGlzLl9yZ2JbMV0sIHRoaXMuX3JnYlsyXSwgYV0sICdyZ2InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiWzNdO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkbCA9IENvbG9yXzE7XG5cbiAgICBDb2xvciRsLnByb3RvdHlwZS5jbGlwcGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2IuX2NsaXBwZWQgfHwgZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRrID0gQ29sb3JfMTtcbiAgICB2YXIgTEFCX0NPTlNUQU5UUyQxID0gbGFiQ29uc3RhbnRzO1xuXG4gICAgQ29sb3Ikay5wcm90b3R5cGUuZGFya2VuID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHZhciBtZSA9IHRoaXM7XG4gICAgXHR2YXIgbGFiID0gbWUubGFiKCk7XG4gICAgXHRsYWJbMF0gLT0gTEFCX0NPTlNUQU5UUyQxLktuICogYW1vdW50O1xuICAgIFx0cmV0dXJuIG5ldyBDb2xvciRrKGxhYiwgJ2xhYicpLmFscGhhKG1lLmFscGhhKCksIHRydWUpO1xuICAgIH07XG5cbiAgICBDb2xvciRrLnByb3RvdHlwZS5icmlnaHRlbiA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHRyZXR1cm4gdGhpcy5kYXJrZW4oLWFtb3VudCk7XG4gICAgfTtcblxuICAgIENvbG9yJGsucHJvdG90eXBlLmRhcmtlciA9IENvbG9yJGsucHJvdG90eXBlLmRhcmtlbjtcbiAgICBDb2xvciRrLnByb3RvdHlwZS5icmlnaHRlciA9IENvbG9yJGsucHJvdG90eXBlLmJyaWdodGVuO1xuXG4gICAgdmFyIENvbG9yJGogPSBDb2xvcl8xO1xuXG4gICAgQ29sb3Ikai5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG1jKSB7XG4gICAgICAgIHZhciByZWYgPSBtYy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSByZWZbMV07XG4gICAgICAgIHZhciBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKSAtIChtb2RlLnN1YnN0cigwLCAyKSA9PT0gJ29rJyA/IDIgOiAwKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHsgcmV0dXJuIHNyY1tpXTsgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gY2hhbm5lbCBcIiArIGNoYW5uZWwgKyBcIiBpbiBtb2RlIFwiICsgbW9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkaSA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkNSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIHBvdyQ2ID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgRVBTID0gMWUtNztcbiAgICB2YXIgTUFYX0lURVIgPSAyMDtcblxuICAgIENvbG9yJGkucHJvdG90eXBlLmx1bWluYW5jZSA9IGZ1bmN0aW9uKGx1bSkge1xuICAgICAgICBpZiAobHVtICE9PSB1bmRlZmluZWQgJiYgdHlwZSQ1KGx1bSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAobHVtID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHB1cmUgYmxhY2tcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJGkoWzAsMCwwLHRoaXMuX3JnYlszXV0sICdyZ2InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsdW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcHVyZSB3aGl0ZVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkaShbMjU1LDI1NSwyNTUsdGhpcy5fcmdiWzNdXSwgJ3JnYicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29tcHV0ZSBuZXcgY29sb3IgdXNpbmcuLi5cbiAgICAgICAgICAgIHZhciBjdXJfbHVtID0gdGhpcy5sdW1pbmFuY2UoKTtcbiAgICAgICAgICAgIHZhciBtb2RlID0gJ3JnYic7XG4gICAgICAgICAgICB2YXIgbWF4X2l0ZXIgPSBNQVhfSVRFUjtcblxuICAgICAgICAgICAgdmFyIHRlc3QgPSBmdW5jdGlvbiAobG93LCBoaWdoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pZCA9IGxvdy5pbnRlcnBvbGF0ZShoaWdoLCAwLjUsIG1vZGUpO1xuICAgICAgICAgICAgICAgIHZhciBsbSA9IG1pZC5sdW1pbmFuY2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMobHVtIC0gbG0pIDwgRVBTIHx8ICFtYXhfaXRlci0tKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3NlIGVub3VnaFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbG0gPiBsdW0gPyB0ZXN0KGxvdywgbWlkKSA6IHRlc3QobWlkLCBoaWdoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciByZ2IgPSAoY3VyX2x1bSA+IGx1bSA/IHRlc3QobmV3IENvbG9yJGkoWzAsMCwwXSksIHRoaXMpIDogdGVzdCh0aGlzLCBuZXcgQ29sb3IkaShbMjU1LDI1NSwyNTVdKSkpLnJnYigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRpKHJnYi5jb25jYXQoIFt0aGlzLl9yZ2JbM11dKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJnYjJsdW1pbmFuY2UuYXBwbHkodm9pZCAwLCAodGhpcy5fcmdiKS5zbGljZSgwLDMpKTtcbiAgICB9O1xuXG5cbiAgICB2YXIgcmdiMmx1bWluYW5jZSA9IGZ1bmN0aW9uIChyLGcsYikge1xuICAgICAgICAvLyByZWxhdGl2ZSBsdW1pbmFuY2VcbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcbiAgICAgICAgciA9IGx1bWluYW5jZV94KHIpO1xuICAgICAgICBnID0gbHVtaW5hbmNlX3goZyk7XG4gICAgICAgIGIgPSBsdW1pbmFuY2VfeChiKTtcbiAgICAgICAgcmV0dXJuIDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYjtcbiAgICB9O1xuXG4gICAgdmFyIGx1bWluYW5jZV94ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgeCAvPSAyNTU7XG4gICAgICAgIHJldHVybiB4IDw9IDAuMDM5MjggPyB4LzEyLjkyIDogcG93JDYoKHgrMC4wNTUpLzEuMDU1LCAyLjQpO1xuICAgIH07XG5cbiAgICB2YXIgaW50ZXJwb2xhdG9yJDEgPSB7fTtcblxuICAgIHZhciBDb2xvciRoID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSQ0ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgaW50ZXJwb2xhdG9yID0gaW50ZXJwb2xhdG9yJDE7XG5cbiAgICB2YXIgbWl4JDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICBpZiAoIGYgPT09IHZvaWQgMCApIGY9MC41O1xuICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMztcbiAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMyBdO1xuXG4gICAgICAgIHZhciBtb2RlID0gcmVzdFswXSB8fCAnbHJnYic7XG4gICAgICAgIGlmICghaW50ZXJwb2xhdG9yW21vZGVdICYmICFyZXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gZmFsbCBiYWNrIHRvIHRoZSBmaXJzdCBzdXBwb3J0ZWQgbW9kZVxuICAgICAgICAgICAgbW9kZSA9IE9iamVjdC5rZXlzKGludGVycG9sYXRvcilbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpbnRlcnBvbGF0b3JbbW9kZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJpbnRlcnBvbGF0aW9uIG1vZGUgXCIgKyBtb2RlICsgXCIgaXMgbm90IGRlZmluZWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlJDQoY29sMSkgIT09ICdvYmplY3QnKSB7IGNvbDEgPSBuZXcgQ29sb3IkaChjb2wxKTsgfVxuICAgICAgICBpZiAodHlwZSQ0KGNvbDIpICE9PSAnb2JqZWN0JykgeyBjb2wyID0gbmV3IENvbG9yJGgoY29sMik7IH1cbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRvclttb2RlXShjb2wxLCBjb2wyLCBmKVxuICAgICAgICAgICAgLmFscGhhKGNvbDEuYWxwaGEoKSArIGYgKiAoY29sMi5hbHBoYSgpIC0gY29sMS5hbHBoYSgpKSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRnID0gQ29sb3JfMTtcbiAgICB2YXIgbWl4ID0gbWl4JDE7XG5cbiAgICBDb2xvciRnLnByb3RvdHlwZS5taXggPVxuICAgIENvbG9yJGcucHJvdG90eXBlLmludGVycG9sYXRlID0gZnVuY3Rpb24oY29sMiwgZikge1xuICAgIFx0aWYgKCBmID09PSB2b2lkIDAgKSBmPTAuNTtcbiAgICBcdHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgIFx0d2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gICAgXHRyZXR1cm4gbWl4LmFwcGx5KHZvaWQgMCwgWyB0aGlzLCBjb2wyLCBmIF0uY29uY2F0KCByZXN0ICkpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZiA9IENvbG9yXzE7XG5cbiAgICBDb2xvciRmLnByb3RvdHlwZS5wcmVtdWx0aXBseSA9IGZ1bmN0aW9uKG11dGF0ZSkge1xuICAgIFx0aWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZT1mYWxzZTtcblxuICAgIFx0dmFyIHJnYiA9IHRoaXMuX3JnYjtcbiAgICBcdHZhciBhID0gcmdiWzNdO1xuICAgIFx0aWYgKG11dGF0ZSkge1xuICAgIFx0XHR0aGlzLl9yZ2IgPSBbcmdiWzBdKmEsIHJnYlsxXSphLCByZ2JbMl0qYSwgYV07XG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fSBlbHNlIHtcbiAgICBcdFx0cmV0dXJuIG5ldyBDb2xvciRmKFtyZ2JbMF0qYSwgcmdiWzFdKmEsIHJnYlsyXSphLCBhXSwgJ3JnYicpO1xuICAgIFx0fVxuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZSA9IENvbG9yXzE7XG4gICAgdmFyIExBQl9DT05TVEFOVFMgPSBsYWJDb25zdGFudHM7XG5cbiAgICBDb2xvciRlLnByb3RvdHlwZS5zYXR1cmF0ZSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHR2YXIgbWUgPSB0aGlzO1xuICAgIFx0dmFyIGxjaCA9IG1lLmxjaCgpO1xuICAgIFx0bGNoWzFdICs9IExBQl9DT05TVEFOVFMuS24gKiBhbW91bnQ7XG4gICAgXHRpZiAobGNoWzFdIDwgMCkgeyBsY2hbMV0gPSAwOyB9XG4gICAgXHRyZXR1cm4gbmV3IENvbG9yJGUobGNoLCAnbGNoJykuYWxwaGEobWUuYWxwaGEoKSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIENvbG9yJGUucHJvdG90eXBlLmRlc2F0dXJhdGUgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0cmV0dXJuIHRoaXMuc2F0dXJhdGUoLWFtb3VudCk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRkID0gQ29sb3JfMTtcbiAgICB2YXIgdHlwZSQzID0gdXRpbHMudHlwZTtcblxuICAgIENvbG9yJGQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChtYywgdmFsdWUsIG11dGF0ZSkge1xuICAgICAgICBpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHJlZiA9IG1jLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBtb2RlID0gcmVmWzBdO1xuICAgICAgICB2YXIgY2hhbm5lbCA9IHJlZlsxXTtcbiAgICAgICAgdmFyIHNyYyA9IHRoaXNbbW9kZV0oKTtcbiAgICAgICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHZhciBpID0gbW9kZS5pbmRleE9mKGNoYW5uZWwpIC0gKG1vZGUuc3Vic3RyKDAsIDIpID09PSAnb2snID8gMiA6IDApO1xuICAgICAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDModmFsdWUpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gKz0gK3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldICs9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSAqPSArdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldIC89ICt2YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSA9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSQzKHZhbHVlKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5zdXBwb3J0ZWQgdmFsdWUgZm9yIENvbG9yLnNldFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG91dCA9IG5ldyBDb2xvciRkKHNyYywgbW9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKG11dGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZ2IgPSBvdXQuX3JnYjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwidW5rbm93biBjaGFubmVsIFwiICsgY2hhbm5lbCArIFwiIGluIG1vZGUgXCIgKyBtb2RlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBDb2xvciRjID0gQ29sb3JfMTtcblxuICAgIHZhciByZ2IgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgeHl6MCA9IGNvbDEuX3JnYjtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLl9yZ2I7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkYyhcbiAgICAgICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0teHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdLXh5ejBbMV0pLFxuICAgICAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXS14eXowWzJdKSxcbiAgICAgICAgICAgICdyZ2InXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEucmdiID0gcmdiO1xuXG4gICAgdmFyIENvbG9yJGIgPSBDb2xvcl8xO1xuICAgIHZhciBzcXJ0JDIgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIHBvdyQ1ID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgbHJnYiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciByZWYgPSBjb2wxLl9yZ2I7XG4gICAgICAgIHZhciB4MSA9IHJlZlswXTtcbiAgICAgICAgdmFyIHkxID0gcmVmWzFdO1xuICAgICAgICB2YXIgejEgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IGNvbDIuX3JnYjtcbiAgICAgICAgdmFyIHgyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciB5MiA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgejIgPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRiKFxuICAgICAgICAgICAgc3FydCQyKHBvdyQ1KHgxLDIpICogKDEtZikgKyBwb3ckNSh4MiwyKSAqIGYpLFxuICAgICAgICAgICAgc3FydCQyKHBvdyQ1KHkxLDIpICogKDEtZikgKyBwb3ckNSh5MiwyKSAqIGYpLFxuICAgICAgICAgICAgc3FydCQyKHBvdyQ1KHoxLDIpICogKDEtZikgKyBwb3ckNSh6MiwyKSAqIGYpLFxuICAgICAgICAgICAgJ3JnYidcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5scmdiID0gbHJnYjtcblxuICAgIHZhciBDb2xvciRhID0gQ29sb3JfMTtcblxuICAgIHZhciBsYWIgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgeHl6MCA9IGNvbDEubGFiKCk7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5sYWIoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRhKFxuICAgICAgICAgICAgeHl6MFswXSArIGYgKiAoeHl6MVswXS14eXowWzBdKSxcbiAgICAgICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0teHl6MFsxXSksXG4gICAgICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdLXh5ejBbMl0pLFxuICAgICAgICAgICAgJ2xhYidcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5sYWIgPSBsYWI7XG5cbiAgICB2YXIgQ29sb3IkOSA9IENvbG9yXzE7XG5cbiAgICB2YXIgX2hzeCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmLCBtKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxO1xuXG4gICAgICAgIHZhciB4eXowLCB4eXoxO1xuICAgICAgICBpZiAobSA9PT0gJ2hzbCcpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhzbCgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaHNsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hzdicpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhzdigpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaHN2KCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hjZycpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhjZygpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaGNnKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hzaScpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhzaSgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaHNpKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2xjaCcgfHwgbSA9PT0gJ2hjbCcpIHtcbiAgICAgICAgICAgIG0gPSAnaGNsJztcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhjbCgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaGNsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ29rbGNoJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEub2tsY2goKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5va2xjaCgpLnJldmVyc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBodWUwLCBodWUxLCBzYXQwLCBzYXQxLCBsYnYwLCBsYnYxO1xuICAgICAgICBpZiAobS5zdWJzdHIoMCwgMSkgPT09ICdoJyB8fCBtID09PSAnb2tsY2gnKSB7XG4gICAgICAgICAgICAoYXNzaWduID0geHl6MCwgaHVlMCA9IGFzc2lnblswXSwgc2F0MCA9IGFzc2lnblsxXSwgbGJ2MCA9IGFzc2lnblsyXSk7XG4gICAgICAgICAgICAoYXNzaWduJDEgPSB4eXoxLCBodWUxID0gYXNzaWduJDFbMF0sIHNhdDEgPSBhc3NpZ24kMVsxXSwgbGJ2MSA9IGFzc2lnbiQxWzJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzYXQsIGh1ZSwgbGJ2LCBkaDtcblxuICAgICAgICBpZiAoIWlzTmFOKGh1ZTApICYmICFpc05hTihodWUxKSkge1xuICAgICAgICAgICAgLy8gYm90aCBjb2xvcnMgaGF2ZSBodWVcbiAgICAgICAgICAgIGlmIChodWUxID4gaHVlMCAmJiBodWUxIC0gaHVlMCA+IDE4MCkge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlMSAtIChodWUwICsgMzYwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaHVlMSA8IGh1ZTAgJiYgaHVlMCAtIGh1ZTEgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTEgKyAzNjAgLSBodWUwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTEgLSBodWUwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHVlID0gaHVlMCArIGYgKiBkaDtcbiAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oaHVlMCkpIHtcbiAgICAgICAgICAgIGh1ZSA9IGh1ZTA7XG4gICAgICAgICAgICBpZiAoKGxidjEgPT0gMSB8fCBsYnYxID09IDApICYmIG0gIT0gJ2hzdicpIHsgc2F0ID0gc2F0MDsgfVxuICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihodWUxKSkge1xuICAgICAgICAgICAgaHVlID0gaHVlMTtcbiAgICAgICAgICAgIGlmICgobGJ2MCA9PSAxIHx8IGxidjAgPT0gMCkgJiYgbSAhPSAnaHN2JykgeyBzYXQgPSBzYXQxOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodWUgPSBOdW1iZXIuTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhdCA9PT0gdW5kZWZpbmVkKSB7IHNhdCA9IHNhdDAgKyBmICogKHNhdDEgLSBzYXQwKTsgfVxuICAgICAgICBsYnYgPSBsYnYwICsgZiAqIChsYnYxIC0gbGJ2MCk7XG4gICAgICAgIHJldHVybiBtID09PSAnb2tsY2gnID8gbmV3IENvbG9yJDkoW2xidiwgc2F0LCBodWVdLCBtKSA6IG5ldyBDb2xvciQ5KFtodWUsIHNhdCwgbGJ2XSwgbSk7XG4gICAgfTtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3gkNSA9IF9oc3g7XG5cbiAgICB2YXIgbGNoID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICBcdHJldHVybiBpbnRlcnBvbGF0ZV9oc3gkNShjb2wxLCBjb2wyLCBmLCAnbGNoJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLmxjaCA9IGxjaDtcbiAgICBpbnRlcnBvbGF0b3IkMS5oY2wgPSBsY2g7XG5cbiAgICB2YXIgQ29sb3IkOCA9IENvbG9yXzE7XG5cbiAgICB2YXIgbnVtID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIGMxID0gY29sMS5udW0oKTtcbiAgICAgICAgdmFyIGMyID0gY29sMi5udW0oKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ4KGMxICsgZiAqIChjMi1jMSksICdudW0nKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5udW0gPSBudW07XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDQgPSBfaHN4O1xuXG4gICAgdmFyIGhjZyA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDQoY29sMSwgY29sMiwgZiwgJ2hjZycpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5oY2cgPSBoY2c7XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDMgPSBfaHN4O1xuXG4gICAgdmFyIGhzaSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDMoY29sMSwgY29sMiwgZiwgJ2hzaScpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5oc2kgPSBoc2k7XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDIgPSBfaHN4O1xuXG4gICAgdmFyIGhzbCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDIoY29sMSwgY29sMiwgZiwgJ2hzbCcpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5oc2wgPSBoc2w7XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDEgPSBfaHN4O1xuXG4gICAgdmFyIGhzdiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDEoY29sMSwgY29sMiwgZiwgJ2hzdicpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5oc3YgPSBoc3Y7XG5cbiAgICB2YXIgQ29sb3IkNyA9IENvbG9yXzE7XG5cbiAgICB2YXIgb2tsYWIgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgeHl6MCA9IGNvbDEub2tsYWIoKTtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLm9rbGFiKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkNyhcbiAgICAgICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0gLSB4eXowWzBdKSxcbiAgICAgICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0gLSB4eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0gLSB4eXowWzJdKSxcbiAgICAgICAgICAgICdva2xhYidcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEub2tsYWIgPSBva2xhYjtcblxuICAgIHZhciBpbnRlcnBvbGF0ZV9oc3ggPSBfaHN4O1xuXG4gICAgdmFyIG9rbGNoID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlX2hzeChjb2wxLCBjb2wyLCBmLCAnb2tsY2gnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEub2tsY2ggPSBva2xjaDtcblxuICAgIHZhciBDb2xvciQ2ID0gQ29sb3JfMTtcbiAgICB2YXIgY2xpcF9yZ2IkMSA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciBwb3ckNCA9IE1hdGgucG93O1xuICAgIHZhciBzcXJ0JDEgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIFBJJDEgPSBNYXRoLlBJO1xuICAgIHZhciBjb3MkMiA9IE1hdGguY29zO1xuICAgIHZhciBzaW4kMiA9IE1hdGguc2luO1xuICAgIHZhciBhdGFuMiQxID0gTWF0aC5hdGFuMjtcblxuICAgIHZhciBhdmVyYWdlID0gZnVuY3Rpb24gKGNvbG9ycywgbW9kZSwgd2VpZ2h0cykge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2xyZ2InO1xuICAgICAgICBpZiAoIHdlaWdodHMgPT09IHZvaWQgMCApIHdlaWdodHM9bnVsbDtcblxuICAgICAgICB2YXIgbCA9IGNvbG9ycy5sZW5ndGg7XG4gICAgICAgIGlmICghd2VpZ2h0cykgeyB3ZWlnaHRzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkobCkpLm1hcChmdW5jdGlvbiAoKSB7IHJldHVybiAxOyB9KTsgfVxuICAgICAgICAvLyBub3JtYWxpemUgd2VpZ2h0c1xuICAgICAgICB2YXIgayA9IGwgLyB3ZWlnaHRzLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICsgYjsgfSk7XG4gICAgICAgIHdlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAodyxpKSB7IHdlaWdodHNbaV0gKj0gazsgfSk7XG4gICAgICAgIC8vIGNvbnZlcnQgY29sb3JzIHRvIENvbG9yIG9iamVjdHNcbiAgICAgICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gbmV3IENvbG9yJDYoYyk7IH0pO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ2xyZ2InKSB7XG4gICAgICAgICAgICByZXR1cm4gX2F2ZXJhZ2VfbHJnYihjb2xvcnMsIHdlaWdodHMpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpcnN0ID0gY29sb3JzLnNoaWZ0KCk7XG4gICAgICAgIHZhciB4eXogPSBmaXJzdC5nZXQobW9kZSk7XG4gICAgICAgIHZhciBjbnQgPSBbXTtcbiAgICAgICAgdmFyIGR4ID0gMDtcbiAgICAgICAgdmFyIGR5ID0gMDtcbiAgICAgICAgLy8gaW5pdGlhbCBjb2xvclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8eHl6Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB4eXpbaV0gPSAoeHl6W2ldIHx8IDApICogd2VpZ2h0c1swXTtcbiAgICAgICAgICAgIGNudC5wdXNoKGlzTmFOKHh5eltpXSkgPyAwIDogd2VpZ2h0c1swXSk7XG4gICAgICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSkgPT09ICdoJyAmJiAhaXNOYU4oeHl6W2ldKSkge1xuICAgICAgICAgICAgICAgIHZhciBBID0geHl6W2ldIC8gMTgwICogUEkkMTtcbiAgICAgICAgICAgICAgICBkeCArPSBjb3MkMihBKSAqIHdlaWdodHNbMF07XG4gICAgICAgICAgICAgICAgZHkgKz0gc2luJDIoQSkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFscGhhID0gZmlyc3QuYWxwaGEoKSAqIHdlaWdodHNbMF07XG4gICAgICAgIGNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjLGNpKSB7XG4gICAgICAgICAgICB2YXIgeHl6MiA9IGMuZ2V0KG1vZGUpO1xuICAgICAgICAgICAgYWxwaGEgKz0gYy5hbHBoYSgpICogd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTx4eXoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHh5ejJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNudFtpXSArPSB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSkgPT09ICdoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSB4eXoyW2ldIC8gMTgwICogUEkkMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR4ICs9IGNvcyQyKEEpICogd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5ICs9IHNpbiQyKEEpICogd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHh5eltpXSArPSB4eXoyW2ldICogd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSQxPTA7IGkkMTx4eXoubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkkMSkgPT09ICdoJykge1xuICAgICAgICAgICAgICAgIHZhciBBJDEgPSBhdGFuMiQxKGR5IC8gY250W2kkMV0sIGR4IC8gY250W2kkMV0pIC8gUEkkMSAqIDE4MDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoQSQxIDwgMCkgeyBBJDEgKz0gMzYwOyB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKEEkMSA+PSAzNjApIHsgQSQxIC09IDM2MDsgfVxuICAgICAgICAgICAgICAgIHh5eltpJDFdID0gQSQxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4eXpbaSQxXSA9IHh5eltpJDFdL2NudFtpJDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFscGhhIC89IGw7XG4gICAgICAgIHJldHVybiAobmV3IENvbG9yJDYoeHl6LCBtb2RlKSkuYWxwaGEoYWxwaGEgPiAwLjk5OTk5ID8gMSA6IGFscGhhLCB0cnVlKTtcbiAgICB9O1xuXG5cbiAgICB2YXIgX2F2ZXJhZ2VfbHJnYiA9IGZ1bmN0aW9uIChjb2xvcnMsIHdlaWdodHMpIHtcbiAgICAgICAgdmFyIGwgPSBjb2xvcnMubGVuZ3RoO1xuICAgICAgICB2YXIgeHl6ID0gWzAsMCwwLDBdO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb2wgPSBjb2xvcnNbaV07XG4gICAgICAgICAgICB2YXIgZiA9IHdlaWdodHNbaV0gLyBsO1xuICAgICAgICAgICAgdmFyIHJnYiA9IGNvbC5fcmdiO1xuICAgICAgICAgICAgeHl6WzBdICs9IHBvdyQ0KHJnYlswXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbMV0gKz0gcG93JDQocmdiWzFdLDIpICogZjtcbiAgICAgICAgICAgIHh5elsyXSArPSBwb3ckNChyZ2JbMl0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzNdICs9IHJnYlszXSAqIGY7XG4gICAgICAgIH1cbiAgICAgICAgeHl6WzBdID0gc3FydCQxKHh5elswXSk7XG4gICAgICAgIHh5elsxXSA9IHNxcnQkMSh4eXpbMV0pO1xuICAgICAgICB4eXpbMl0gPSBzcXJ0JDEoeHl6WzJdKTtcbiAgICAgICAgaWYgKHh5elszXSA+IDAuOTk5OTk5OSkgeyB4eXpbM10gPSAxOyB9XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkNihjbGlwX3JnYiQxKHh5eikpO1xuICAgIH07XG5cbiAgICAvLyBtaW5pbWFsIG11bHRpLXB1cnBvc2UgaW50ZXJmYWNlXG5cbiAgICAvLyBAcmVxdWlyZXMgdXRpbHMgY29sb3IgYW5hbHl6ZVxuXG4gICAgdmFyIGNocm9tYSQ0ID0gY2hyb21hXzE7XG4gICAgdmFyIHR5cGUkMiA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcG93JDMgPSBNYXRoLnBvdztcblxuICAgIHZhciBzY2FsZSQyID0gZnVuY3Rpb24oY29sb3JzKSB7XG5cbiAgICAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgdmFyIF9tb2RlID0gJ3JnYic7XG4gICAgICAgIHZhciBfbmFjb2wgPSBjaHJvbWEkNCgnI2NjYycpO1xuICAgICAgICB2YXIgX3NwcmVhZCA9IDA7XG4gICAgICAgIC8vIGNvbnN0IF9maXhlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgX2RvbWFpbiA9IFswLCAxXTtcbiAgICAgICAgdmFyIF9wb3MgPSBbXTtcbiAgICAgICAgdmFyIF9wYWRkaW5nID0gWzAsMF07XG4gICAgICAgIHZhciBfY2xhc3NlcyA9IGZhbHNlO1xuICAgICAgICB2YXIgX2NvbG9ycyA9IFtdO1xuICAgICAgICB2YXIgX291dCA9IGZhbHNlO1xuICAgICAgICB2YXIgX21pbiA9IDA7XG4gICAgICAgIHZhciBfbWF4ID0gMTtcbiAgICAgICAgdmFyIF9jb3JyZWN0TGlnaHRuZXNzID0gZmFsc2U7XG4gICAgICAgIHZhciBfY29sb3JDYWNoZSA9IHt9O1xuICAgICAgICB2YXIgX3VzZUNhY2hlID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9nYW1tYSA9IDE7XG5cbiAgICAgICAgLy8gcHJpdmF0ZSBtZXRob2RzXG5cbiAgICAgICAgdmFyIHNldENvbG9ycyA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICAgICAgICAgICAgY29sb3JzID0gY29sb3JzIHx8IFsnI2ZmZicsICcjMDAwJ107XG4gICAgICAgICAgICBpZiAoY29sb3JzICYmIHR5cGUkMihjb2xvcnMpID09PSAnc3RyaW5nJyAmJiBjaHJvbWEkNC5icmV3ZXIgJiZcbiAgICAgICAgICAgICAgICBjaHJvbWEkNC5icmV3ZXJbY29sb3JzLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgY29sb3JzID0gY2hyb21hJDQuYnJld2VyW2NvbG9ycy50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlJDIoY29sb3JzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBzaW5nbGUgY29sb3JcbiAgICAgICAgICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSBbY29sb3JzWzBdLCBjb2xvcnNbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBtYWtlIGEgY29weSBvZiB0aGUgY29sb3JzXG4gICAgICAgICAgICAgICAgY29sb3JzID0gY29sb3JzLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8gY2hyb21hIGNsYXNzZXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8Y29sb3JzLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yc1tjXSA9IGNocm9tYSQ0KGNvbG9yc1tjXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGF1dG8tZmlsbCBjb2xvciBwb3NpdGlvblxuICAgICAgICAgICAgICAgIF9wb3MubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjJDE9MDsgYyQxPGNvbG9ycy5sZW5ndGg7IGMkMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wb3MucHVzaChjJDEvKGNvbG9ycy5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgICAgIHJldHVybiBfY29sb3JzID0gY29sb3JzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBnZXRDbGFzcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoX2NsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gX2NsYXNzZXMubGVuZ3RoLTE7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgbiAmJiB2YWx1ZSA+PSBfY2xhc3Nlc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdE1hcExpZ2h0bmVzcyA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9O1xuICAgICAgICB2YXIgdE1hcERvbWFpbiA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9O1xuXG4gICAgICAgIC8vIGNvbnN0IGNsYXNzaWZ5VmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyAgICAgbGV0IHZhbCA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgaWYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBuID0gX2NsYXNzZXMubGVuZ3RoLTE7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgaSA9IGdldENsYXNzKHZhbHVlKTtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBtaW5jID0gX2NsYXNzZXNbMF0gKyAoKF9jbGFzc2VzWzFdLV9jbGFzc2VzWzBdKSAqICgwICsgKF9zcHJlYWQgKiAwLjUpKSk7ICAvLyBjZW50ZXIgb2YgMXN0IGNsYXNzXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbWF4YyA9IF9jbGFzc2VzW24tMV0gKyAoKF9jbGFzc2VzW25dLV9jbGFzc2VzW24tMV0pICogKDEgLSAoX3NwcmVhZCAqIDAuNSkpKTsgIC8vIGNlbnRlciBvZiBsYXN0IGNsYXNzXG4gICAgICAgIC8vICAgICAgICAgdmFsID0gX21pbiArICgoKChfY2xhc3Nlc1tpXSArICgoX2NsYXNzZXNbaSsxXSAtIF9jbGFzc2VzW2ldKSAqIDAuNSkpIC0gbWluYykgLyAobWF4Yy1taW5jKSkgKiAoX21heCAtIF9taW4pKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHJldHVybiB2YWw7XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgdmFyIGdldENvbG9yID0gZnVuY3Rpb24odmFsLCBieXBhc3NNYXApIHtcbiAgICAgICAgICAgIHZhciBjb2wsIHQ7XG4gICAgICAgICAgICBpZiAoYnlwYXNzTWFwID09IG51bGwpIHsgYnlwYXNzTWFwID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmIChpc05hTih2YWwpIHx8ICh2YWwgPT09IG51bGwpKSB7IHJldHVybiBfbmFjb2w7IH1cbiAgICAgICAgICAgIGlmICghYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jbGFzc2VzICYmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBjbGFzc1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGdldENsYXNzKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBjIC8gKF9jbGFzc2VzLmxlbmd0aC0yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9tYXggIT09IF9taW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdCBpbnRlcnBvbGF0ZSBiZXR3ZWVuIG1pbi9tYXhcbiAgICAgICAgICAgICAgICAgICAgdCA9ICh2YWwgLSBfbWluKSAvIChfbWF4IC0gX21pbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gdmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkb21haW4gbWFwXG4gICAgICAgICAgICB0ID0gdE1hcERvbWFpbih0KTtcblxuICAgICAgICAgICAgaWYgKCFieXBhc3NNYXApIHtcbiAgICAgICAgICAgICAgICB0ID0gdE1hcExpZ2h0bmVzcyh0KTsgIC8vIGxpZ2h0bmVzcyBjb3JyZWN0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfZ2FtbWEgIT09IDEpIHsgdCA9IHBvdyQzKHQsIF9nYW1tYSk7IH1cblxuICAgICAgICAgICAgdCA9IF9wYWRkaW5nWzBdICsgKHQgKiAoMSAtIF9wYWRkaW5nWzBdIC0gX3BhZGRpbmdbMV0pKTtcblxuICAgICAgICAgICAgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHQpKTtcblxuICAgICAgICAgICAgdmFyIGsgPSBNYXRoLmZsb29yKHQgKiAxMDAwMCk7XG5cbiAgICAgICAgICAgIGlmIChfdXNlQ2FjaGUgJiYgX2NvbG9yQ2FjaGVba10pIHtcbiAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JDYWNoZVtrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkMihfY29sb3JzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICAvL2ZvciBpIGluIFswLi5fcG9zLmxlbmd0aC0xXVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8X3Bvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBfcG9zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPD0gcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHQgPj0gcCkgJiYgKGkgPT09IChfcG9zLmxlbmd0aC0xKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPiBwICYmIHQgPCBfcG9zW2krMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKHQtcCkvKF9wb3NbaSsxXS1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBjaHJvbWEkNC5pbnRlcnBvbGF0ZShfY29sb3JzW2ldLCBfY29sb3JzW2krMV0sIHQsIF9tb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSQyKF9jb2xvcnMpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnModCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfdXNlQ2FjaGUpIHsgX2NvbG9yQ2FjaGVba10gPSBjb2w7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlc2V0Q2FjaGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfY29sb3JDYWNoZSA9IHt9OyB9O1xuXG4gICAgICAgIHNldENvbG9ycyhjb2xvcnMpO1xuXG4gICAgICAgIC8vIHB1YmxpYyBpbnRlcmZhY2VcblxuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHZhciBjID0gY2hyb21hJDQoZ2V0Q29sb3IodikpO1xuICAgICAgICAgICAgaWYgKF9vdXQgJiYgY1tfb3V0XSkgeyByZXR1cm4gY1tfb3V0XSgpOyB9IGVsc2UgeyByZXR1cm4gYzsgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuY2xhc3NlcyA9IGZ1bmN0aW9uKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSQyKGNsYXNzZXMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gY2xhc3NlcztcbiAgICAgICAgICAgICAgICAgICAgX2RvbWFpbiA9IFtjbGFzc2VzWzBdLCBjbGFzc2VzW2NsYXNzZXMubGVuZ3RoLTFdXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGNocm9tYSQ0LmFuYWx5emUoX2RvbWFpbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IFtkLm1pbiwgZC5tYXhdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBjaHJvbWEkNC5saW1pdHMoZCwgJ2UnLCBjbGFzc2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfY2xhc3NlcztcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGYuZG9tYWluID0gZnVuY3Rpb24oZG9tYWluKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2RvbWFpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9taW4gPSBkb21haW5bMF07XG4gICAgICAgICAgICBfbWF4ID0gZG9tYWluW2RvbWFpbi5sZW5ndGgtMV07XG4gICAgICAgICAgICBfcG9zID0gW107XG4gICAgICAgICAgICB2YXIgayA9IF9jb2xvcnMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKChkb21haW4ubGVuZ3RoID09PSBrKSAmJiAoX21pbiAhPT0gX21heCkpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBBcnJheS5mcm9tKGRvbWFpbik7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgICAgICAgX3Bvcy5wdXNoKChkLV9taW4pIC8gKF9tYXgtX21pbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPGs7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBfcG9zLnB1c2goYy8oay0xKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkb21haW4ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgZG9tYWluIG1hcFxuICAgICAgICAgICAgICAgICAgICB2YXIgdE91dCA9IGRvbWFpbi5tYXAoZnVuY3Rpb24gKGQsaSkgeyByZXR1cm4gaS8oZG9tYWluLmxlbmd0aC0xKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0QnJlYWtzID0gZG9tYWluLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gKGQgLSBfbWluKSAvIChfbWF4IC0gX21pbik7IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRCcmVha3MuZXZlcnkoZnVuY3Rpb24gKHZhbCwgaSkgeyByZXR1cm4gdE91dFtpXSA9PT0gdmFsOyB9KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdE1hcERvbWFpbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPD0gMCB8fCB0ID49IDEpIHsgcmV0dXJuIHQ7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHQgPj0gdEJyZWFrc1tpKzFdKSB7IGkrKzsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gKHQgLSB0QnJlYWtzW2ldKSAvICh0QnJlYWtzW2krMV0gLSB0QnJlYWtzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3V0ID0gdE91dFtpXSArIGYgKiAodE91dFtpKzFdIC0gdE91dFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9kb21haW4gPSBbX21pbiwgX21heF07XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLm1vZGUgPSBmdW5jdGlvbihfbSkge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9tb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX21vZGUgPSBfbTtcbiAgICAgICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucmFuZ2UgPSBmdW5jdGlvbihjb2xvcnMsIF9wb3MpIHtcbiAgICAgICAgICAgIHNldENvbG9ycyhjb2xvcnMpO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5vdXQgPSBmdW5jdGlvbihfbykge1xuICAgICAgICAgICAgX291dCA9IF9vO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zcHJlYWQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfc3ByZWFkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3NwcmVhZCA9IHZhbDtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuY29ycmVjdExpZ2h0bmVzcyA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIGlmICh2ID09IG51bGwpIHsgdiA9IHRydWU7IH1cbiAgICAgICAgICAgIF9jb3JyZWN0TGlnaHRuZXNzID0gdjtcbiAgICAgICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgICAgIGlmIChfY29ycmVjdExpZ2h0bmVzcykge1xuICAgICAgICAgICAgICAgIHRNYXBMaWdodG5lc3MgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBMMCA9IGdldENvbG9yKDAsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTDEgPSBnZXRDb2xvcigxLCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvbCA9IEwwID4gTDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2FjdHVhbCA9IGdldENvbG9yKHQsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTF9pZGVhbCA9IEwwICsgKChMMSAtIEwwKSAqIHQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTF9kaWZmID0gTF9hY3R1YWwgLSBMX2lkZWFsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdDAgPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdDEgPSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4X2l0ZXIgPSAyMDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChNYXRoLmFicyhMX2RpZmYpID4gMWUtMikgJiYgKG1heF9pdGVyLS0gPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2wpIHsgTF9kaWZmICo9IC0xOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKExfZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9ICh0MSAtIHQpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCArPSAodDAgLSB0KSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTF9hY3R1YWwgPSBnZXRDb2xvcih0LCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTF9kaWZmID0gTF9hY3R1YWwgLSBMX2lkZWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0TWFwTGlnaHRuZXNzID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnBhZGRpbmcgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICBpZiAocCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkMihwKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IFtwLHBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfcGFkZGluZyA9IHA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcGFkZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLmNvbG9ycyA9IGZ1bmN0aW9uKG51bUNvbG9ycywgb3V0KSB7XG4gICAgICAgICAgICAvLyBJZiBubyBhcmd1bWVudHMgYXJlIGdpdmVuLCByZXR1cm4gdGhlIG9yaWdpbmFsIGNvbG9ycyB0aGF0IHdlcmUgcHJvdmlkZWRcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgeyBvdXQgPSAnaGV4JzsgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9jb2xvcnMuc2xpY2UoMCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtQ29sb3JzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW2YoMC41KV07XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtQ29sb3JzID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBkbSA9IF9kb21haW5bMF07XG4gICAgICAgICAgICAgICAgdmFyIGRkID0gX2RvbWFpblsxXSAtIGRtO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9fcmFuZ2VfXygwLCBudW1Db2xvcnMsIGZhbHNlKS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGYoIGRtICsgKChpLyhudW1Db2xvcnMtMSkpICogZGQpICk7IH0pO1xuXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyByZXR1cm5zIGFsbCBjb2xvcnMgYmFzZWQgb24gdGhlIGRlZmluZWQgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBzYW1wbGVzID0gW107XG4gICAgICAgICAgICAgICAgaWYgKF9jbGFzc2VzICYmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMSwgZW5kID0gX2NsYXNzZXMubGVuZ3RoLCBhc2MgPSAxIDw9IGVuZDsgYXNjID8gaSA8IGVuZCA6IGkgPiBlbmQ7IGFzYyA/IGkrKyA6IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcy5wdXNoKChfY2xhc3Nlc1tpLTFdK19jbGFzc2VzW2ldKSowLjUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlcyA9IF9kb21haW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNhbXBsZXMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBmKHYpOyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNocm9tYSQ0W291dF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjW291dF0oKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuY2FjaGUgPSBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICBpZiAoYyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX3VzZUNhY2hlID0gYztcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF91c2VDYWNoZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLmdhbW1hID0gZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgaWYgKGcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF9nYW1tYSA9IGc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZ2FtbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5ub2RhdGEgPSBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBpZiAoZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX25hY29sID0gY2hyb21hJDQoZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbmFjb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9fcmFuZ2VfXyhsZWZ0LCByaWdodCwgaW5jbHVzaXZlKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBbXTtcbiAgICAgIHZhciBhc2NlbmRpbmcgPSBsZWZ0IDwgcmlnaHQ7XG4gICAgICB2YXIgZW5kID0gIWluY2x1c2l2ZSA/IHJpZ2h0IDogYXNjZW5kaW5nID8gcmlnaHQgKyAxIDogcmlnaHQgLSAxO1xuICAgICAgZm9yICh2YXIgaSA9IGxlZnQ7IGFzY2VuZGluZyA/IGkgPCBlbmQgOiBpID4gZW5kOyBhc2NlbmRpbmcgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgcmFuZ2UucHVzaChpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByYW5nZTtcbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIGludGVycG9sYXRlcyBiZXR3ZWVuIGEgc2V0IG9mIGNvbG9ycyB1emluZyBhIGJlemllciBzcGxpbmVcbiAgICAvL1xuXG4gICAgLy8gQHJlcXVpcmVzIHV0aWxzIGxhYlxuICAgIHZhciBDb2xvciQ1ID0gQ29sb3JfMTtcblxuICAgIHZhciBzY2FsZSQxID0gc2NhbGUkMjtcblxuICAgIC8vIG50aCByb3cgb2YgdGhlIHBhc2NhbCB0cmlhbmdsZVxuICAgIHZhciBiaW5vbV9yb3cgPSBmdW5jdGlvbihuKSB7XG4gICAgICAgIHZhciByb3cgPSBbMSwgMV07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV3cm93ID0gWzFdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPD0gcm93Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbmV3cm93W2pdID0gKHJvd1tqXSB8fCAwKSArIHJvd1tqIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3cgPSBuZXdyb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9O1xuXG4gICAgdmFyIGJlemllciA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDI7XG5cbiAgICAgICAgdmFyIEksIGxhYjAsIGxhYjEsIGxhYjI7XG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG5ldyBDb2xvciQ1KGMpOyB9KTtcbiAgICAgICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICAoYXNzaWduID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSksIGxhYjAgPSBhc3NpZ25bMF0sIGxhYjEgPSBhc3NpZ25bMV0pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGxhYjBbaV0gKyAodCAqIChsYWIxW2ldIC0gbGFiMFtpXSkpOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ1KGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAvLyBxdWFkcmF0aWMgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIChhc3NpZ24kMSA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduJDFbMF0sIGxhYjEgPSBhc3NpZ24kMVsxXSwgbGFiMiA9IGFzc2lnbiQxWzJdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiAoKDEtdCkqKDEtdCkgKiBsYWIwW2ldKSArICgyICogKDEtdCkgKiB0ICogbGFiMVtpXSkgKyAodCAqIHQgKiBsYWIyW2ldKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgLy8gY3ViaWMgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIHZhciBsYWIzO1xuICAgICAgICAgICAgKGFzc2lnbiQyID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSksIGxhYjAgPSBhc3NpZ24kMlswXSwgbGFiMSA9IGFzc2lnbiQyWzFdLCBsYWIyID0gYXNzaWduJDJbMl0sIGxhYjMgPSBhc3NpZ24kMlszXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKCgxLXQpKigxLXQpKigxLXQpICogbGFiMFtpXSkgKyAoMyAqICgxLXQpICogKDEtdCkgKiB0ICogbGFiMVtpXSkgKyAoMyAqICgxLXQpICogdCAqIHQgKiBsYWIyW2ldKSArICh0KnQqdCAqIGxhYjNbaV0pOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciQ1KGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYWwgY2FzZSAoZGVncmVlIG4gYmV6aWVyKVxuICAgICAgICAgICAgdmFyIGxhYnMsIHJvdywgbjtcbiAgICAgICAgICAgIGxhYnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KTtcbiAgICAgICAgICAgIG4gPSBjb2xvcnMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJvdyA9IGJpbm9tX3JvdyhuKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciB1ID0gMSAtIHQ7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBsYWJzLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBlbCwgaikgeyByZXR1cm4gKHN1bSArIHJvd1tqXSAqIE1hdGgucG93KCB1LCAobiAtIGopICkgKiBNYXRoLnBvdyggdCwgaiApICogZWxbaV0pOyB9LCAwKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk5vIHBvaW50IGluIHJ1bm5pbmcgYmV6aWVyIHdpdGggb25seSBvbmUgY29sb3IuXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEk7XG4gICAgfTtcblxuICAgIHZhciBiZXppZXJfMSA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgICAgICAgdmFyIGYgPSBiZXppZXIoY29sb3JzKTtcbiAgICAgICAgZi5zY2FsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjYWxlJDEoZik7IH07XG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIGludGVycG9sYXRlcyBiZXR3ZWVuIGEgc2V0IG9mIGNvbG9ycyB1emluZyBhIGJlemllciBzcGxpbmVcbiAgICAgKiBibGVuZCBtb2RlIGZvcm11bGFzIHRha2VuIGZyb20gaHR0cDovL3d3dy52ZW50dXJlLXdhcmUuY29tL2tldmluL2NvZGluZy9sZXRzLWxlYXJuLW1hdGgtcGhvdG9zaG9wLWJsZW5kLW1vZGVzL1xuICAgICAqL1xuXG4gICAgdmFyIGNocm9tYSQzID0gY2hyb21hXzE7XG5cbiAgICB2YXIgYmxlbmQgPSBmdW5jdGlvbiAoYm90dG9tLCB0b3AsIG1vZGUpIHtcbiAgICAgICAgaWYgKCFibGVuZFttb2RlXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGJsZW5kIG1vZGUgJyArIG1vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibGVuZFttb2RlXShib3R0b20sIHRvcCk7XG4gICAgfTtcblxuICAgIHZhciBibGVuZF9mID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGZ1bmN0aW9uIChib3R0b20sdG9wKSB7XG4gICAgICAgICAgICB2YXIgYzAgPSBjaHJvbWEkMyh0b3ApLnJnYigpO1xuICAgICAgICAgICAgdmFyIGMxID0gY2hyb21hJDMoYm90dG9tKS5yZ2IoKTtcbiAgICAgICAgICAgIHJldHVybiBjaHJvbWEkMy5yZ2IoZihjMCwgYzEpKTtcbiAgICAgICAgfTsgfTtcblxuICAgIHZhciBlYWNoID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGZ1bmN0aW9uIChjMCwgYzEpIHtcbiAgICAgICAgICAgIHZhciBvdXQgPSBbXTtcbiAgICAgICAgICAgIG91dFswXSA9IGYoYzBbMF0sIGMxWzBdKTtcbiAgICAgICAgICAgIG91dFsxXSA9IGYoYzBbMV0sIGMxWzFdKTtcbiAgICAgICAgICAgIG91dFsyXSA9IGYoYzBbMl0sIGMxWzJdKTtcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH07IH07XG5cbiAgICB2YXIgbm9ybWFsID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGE7IH07XG4gICAgdmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYSAqIGIgLyAyNTU7IH07XG4gICAgdmFyIGRhcmtlbiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEgPiBiID8gYiA6IGE7IH07XG4gICAgdmFyIGxpZ2h0ZW4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhID4gYiA/IGEgOiBiOyB9O1xuICAgIHZhciBzY3JlZW4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiAyNTUgKiAoMSAtICgxLWEvMjU1KSAqICgxLWIvMjU1KSk7IH07XG4gICAgdmFyIG92ZXJsYXkgPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBiIDwgMTI4ID8gMiAqIGEgKiBiIC8gMjU1IDogMjU1ICogKDEgLSAyICogKDEgLSBhIC8gMjU1ICkgKiAoIDEgLSBiIC8gMjU1ICkpOyB9O1xuICAgIHZhciBidXJuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gMjU1ICogKDEgLSAoMSAtIGIgLyAyNTUpIC8gKGEvMjU1KSk7IH07XG4gICAgdmFyIGRvZGdlID0gZnVuY3Rpb24gKGEsYikge1xuICAgICAgICBpZiAoYSA9PT0gMjU1KSB7IHJldHVybiAyNTU7IH1cbiAgICAgICAgYSA9IDI1NSAqIChiIC8gMjU1KSAvICgxIC0gYSAvIDI1NSk7XG4gICAgICAgIHJldHVybiBhID4gMjU1ID8gMjU1IDogYVxuICAgIH07XG5cbiAgICAvLyAjIGFkZCA9IChhLGIpIC0+XG4gICAgLy8gIyAgICAgaWYgKGEgKyBiID4gMjU1KSB0aGVuIDI1NSBlbHNlIGEgKyBiXG5cbiAgICBibGVuZC5ub3JtYWwgPSBibGVuZF9mKGVhY2gobm9ybWFsKSk7XG4gICAgYmxlbmQubXVsdGlwbHkgPSBibGVuZF9mKGVhY2gobXVsdGlwbHkpKTtcbiAgICBibGVuZC5zY3JlZW4gPSBibGVuZF9mKGVhY2goc2NyZWVuKSk7XG4gICAgYmxlbmQub3ZlcmxheSA9IGJsZW5kX2YoZWFjaChvdmVybGF5KSk7XG4gICAgYmxlbmQuZGFya2VuID0gYmxlbmRfZihlYWNoKGRhcmtlbikpO1xuICAgIGJsZW5kLmxpZ2h0ZW4gPSBibGVuZF9mKGVhY2gobGlnaHRlbikpO1xuICAgIGJsZW5kLmRvZGdlID0gYmxlbmRfZihlYWNoKGRvZGdlKSk7XG4gICAgYmxlbmQuYnVybiA9IGJsZW5kX2YoZWFjaChidXJuKSk7XG4gICAgLy8gYmxlbmQuYWRkID0gYmxlbmRfZihlYWNoKGFkZCkpO1xuXG4gICAgdmFyIGJsZW5kXzEgPSBibGVuZDtcblxuICAgIC8vIGN1YmVoZWxpeCBpbnRlcnBvbGF0aW9uXG4gICAgLy8gYmFzZWQgb24gRC5BLiBHcmVlbiBcIkEgY29sb3VyIHNjaGVtZSBmb3IgdGhlIGRpc3BsYXkgb2YgYXN0cm9ub21pY2FsIGludGVuc2l0eSBpbWFnZXNcIlxuICAgIC8vIGh0dHA6Ly9hc3Ryb24tc29jLmluL2J1bGxldGluLzExSnVuZS8yODkzOTIwMTEucGRmXG5cbiAgICB2YXIgdHlwZSQxID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2xpcF9yZ2IgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgVFdPUEkgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgcG93JDIgPSBNYXRoLnBvdztcbiAgICB2YXIgc2luJDEgPSBNYXRoLnNpbjtcbiAgICB2YXIgY29zJDEgPSBNYXRoLmNvcztcbiAgICB2YXIgY2hyb21hJDIgPSBjaHJvbWFfMTtcblxuICAgIHZhciBjdWJlaGVsaXggPSBmdW5jdGlvbihzdGFydCwgcm90YXRpb25zLCBodWUsIGdhbW1hLCBsaWdodG5lc3MpIHtcbiAgICAgICAgaWYgKCBzdGFydCA9PT0gdm9pZCAwICkgc3RhcnQ9MzAwO1xuICAgICAgICBpZiAoIHJvdGF0aW9ucyA9PT0gdm9pZCAwICkgcm90YXRpb25zPS0xLjU7XG4gICAgICAgIGlmICggaHVlID09PSB2b2lkIDAgKSBodWU9MTtcbiAgICAgICAgaWYgKCBnYW1tYSA9PT0gdm9pZCAwICkgZ2FtbWE9MTtcbiAgICAgICAgaWYgKCBsaWdodG5lc3MgPT09IHZvaWQgMCApIGxpZ2h0bmVzcz1bMCwxXTtcblxuICAgICAgICB2YXIgZGggPSAwLCBkbDtcbiAgICAgICAgaWYgKHR5cGUkMShsaWdodG5lc3MpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBkbCA9IGxpZ2h0bmVzc1sxXSAtIGxpZ2h0bmVzc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRsID0gMDtcbiAgICAgICAgICAgIGxpZ2h0bmVzcyA9IFtsaWdodG5lc3MsIGxpZ2h0bmVzc107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uKGZyYWN0KSB7XG4gICAgICAgICAgICB2YXIgYSA9IFRXT1BJICogKCgoc3RhcnQrMTIwKS8zNjApICsgKHJvdGF0aW9ucyAqIGZyYWN0KSk7XG4gICAgICAgICAgICB2YXIgbCA9IHBvdyQyKGxpZ2h0bmVzc1swXSArIChkbCAqIGZyYWN0KSwgZ2FtbWEpO1xuICAgICAgICAgICAgdmFyIGggPSBkaCAhPT0gMCA/IGh1ZVswXSArIChmcmFjdCAqIGRoKSA6IGh1ZTtcbiAgICAgICAgICAgIHZhciBhbXAgPSAoaCAqIGwgKiAoMS1sKSkgLyAyO1xuICAgICAgICAgICAgdmFyIGNvc19hID0gY29zJDEoYSk7XG4gICAgICAgICAgICB2YXIgc2luX2EgPSBzaW4kMShhKTtcbiAgICAgICAgICAgIHZhciByID0gbCArIChhbXAgKiAoKC0wLjE0ODYxICogY29zX2EpICsgKDEuNzgyNzcqIHNpbl9hKSkpO1xuICAgICAgICAgICAgdmFyIGcgPSBsICsgKGFtcCAqICgoLTAuMjkyMjcgKiBjb3NfYSkgLSAoMC45MDY0OSogc2luX2EpKSk7XG4gICAgICAgICAgICB2YXIgYiA9IGwgKyAoYW1wICogKCsxLjk3Mjk0ICogY29zX2EpKTtcbiAgICAgICAgICAgIHJldHVybiBjaHJvbWEkMihjbGlwX3JnYihbcioyNTUsZyoyNTUsYioyNTUsMV0pKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnN0YXJ0ID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgaWYgKChzID09IG51bGwpKSB7IHJldHVybiBzdGFydDsgfVxuICAgICAgICAgICAgc3RhcnQgPSBzO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5yb3RhdGlvbnMgPSBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICBpZiAoKHIgPT0gbnVsbCkpIHsgcmV0dXJuIHJvdGF0aW9uczsgfVxuICAgICAgICAgICAgcm90YXRpb25zID0gcjtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuZ2FtbWEgPSBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICBpZiAoKGcgPT0gbnVsbCkpIHsgcmV0dXJuIGdhbW1hOyB9XG4gICAgICAgICAgICBnYW1tYSA9IGc7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmh1ZSA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgIGlmICgoaCA9PSBudWxsKSkgeyByZXR1cm4gaHVlOyB9XG4gICAgICAgICAgICBodWUgPSBoO1xuICAgICAgICAgICAgaWYgKHR5cGUkMShodWUpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWVbMV0gLSBodWVbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRoID09PSAwKSB7IGh1ZSA9IGh1ZVsxXTsgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmxpZ2h0bmVzcyA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgIGlmICgoaCA9PSBudWxsKSkgeyByZXR1cm4gbGlnaHRuZXNzOyB9XG4gICAgICAgICAgICBpZiAodHlwZSQxKGgpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgbGlnaHRuZXNzID0gaDtcbiAgICAgICAgICAgICAgICBkbCA9IGhbMV0gLSBoWzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaWdodG5lc3MgPSBbaCxoXTtcbiAgICAgICAgICAgICAgICBkbCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnNjYWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hyb21hJDIuc2NhbGUoZik7IH07XG5cbiAgICAgICAgZi5odWUoaHVlKTtcblxuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJDQgPSBDb2xvcl8xO1xuICAgIHZhciBkaWdpdHMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgICB2YXIgZmxvb3IkMSA9IE1hdGguZmxvb3I7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG4gICAgdmFyIHJhbmRvbV8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29kZSA9ICcjJztcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPDY7IGkrKykge1xuICAgICAgICAgICAgY29kZSArPSBkaWdpdHMuY2hhckF0KGZsb29yJDEocmFuZG9tKCkgKiAxNikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkNChjb2RlLCAnaGV4Jyk7XG4gICAgfTtcblxuICAgIHZhciB0eXBlID0gdHlwZSRwO1xuICAgIHZhciBsb2cgPSBNYXRoLmxvZztcbiAgICB2YXIgcG93JDEgPSBNYXRoLnBvdztcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIHZhciBhYnMkMSA9IE1hdGguYWJzO1xuXG5cbiAgICB2YXIgYW5hbHl6ZSA9IGZ1bmN0aW9uIChkYXRhLCBrZXkpIHtcbiAgICAgICAgaWYgKCBrZXkgPT09IHZvaWQgMCApIGtleT1udWxsO1xuXG4gICAgICAgIHZhciByID0ge1xuICAgICAgICAgICAgbWluOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFKi0xLFxuICAgICAgICAgICAgc3VtOiAwLFxuICAgICAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgICAgIGNvdW50OiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlKGRhdGEpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZGF0YSA9IE9iamVjdC52YWx1ZXMoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGlmIChrZXkgJiYgdHlwZSh2YWwpID09PSAnb2JqZWN0JykgeyB2YWwgPSB2YWxba2V5XTsgfVxuICAgICAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiAhaXNOYU4odmFsKSkge1xuICAgICAgICAgICAgICAgIHIudmFsdWVzLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICByLnN1bSArPSB2YWw7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA8IHIubWluKSB7IHIubWluID0gdmFsOyB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA+IHIubWF4KSB7IHIubWF4ID0gdmFsOyB9XG4gICAgICAgICAgICAgICAgci5jb3VudCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByLmRvbWFpbiA9IFtyLm1pbiwgci5tYXhdO1xuXG4gICAgICAgIHIubGltaXRzID0gZnVuY3Rpb24gKG1vZGUsIG51bSkgeyByZXR1cm4gbGltaXRzKHIsIG1vZGUsIG51bSk7IH07XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcblxuXG4gICAgdmFyIGxpbWl0cyA9IGZ1bmN0aW9uIChkYXRhLCBtb2RlLCBudW0pIHtcbiAgICAgICAgaWYgKCBtb2RlID09PSB2b2lkIDAgKSBtb2RlPSdlcXVhbCc7XG4gICAgICAgIGlmICggbnVtID09PSB2b2lkIDAgKSBudW09NztcblxuICAgICAgICBpZiAodHlwZShkYXRhKSA9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBkYXRhID0gYW5hbHl6ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWluID0gZGF0YS5taW47XG4gICAgICAgIHZhciBtYXggPSBkYXRhLm1heDtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGRhdGEudmFsdWVzLnNvcnQoZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYS1iOyB9KTtcblxuICAgICAgICBpZiAobnVtID09PSAxKSB7IHJldHVybiBbbWluLG1heF07IH1cblxuICAgICAgICB2YXIgbGltaXRzID0gW107XG5cbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdjJykgeyAvLyBjb250aW51b3VzXG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnZScpIHsgLy8gZXF1YWwgaW50ZXJ2YWxcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTE7IGk8bnVtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW1pdHMucHVzaChtaW4rKChpL251bSkqKG1heC1taW4pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2wnKSB7IC8vIGxvZyBzY2FsZVxuICAgICAgICAgICAgaWYgKG1pbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2dhcml0aG1pYyBzY2FsZXMgYXJlIG9ubHkgcG9zc2libGUgZm9yIHZhbHVlcyA+IDAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtaW5fbG9nID0gTWF0aC5MT0cxMEUgKiBsb2cobWluKTtcbiAgICAgICAgICAgIHZhciBtYXhfbG9nID0gTWF0aC5MT0cxMEUgKiBsb2cobWF4KTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDE9MTsgaSQxPG51bTsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICBsaW1pdHMucHVzaChwb3ckMSgxMCwgbWluX2xvZyArICgoaSQxL251bSkgKiAobWF4X2xvZyAtIG1pbl9sb2cpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdxJykgeyAvLyBxdWFudGlsZSBzY2FsZVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMj0xOyBpJDI8bnVtOyBpJDIrKykge1xuICAgICAgICAgICAgICAgIHZhciBwID0gKCh2YWx1ZXMubGVuZ3RoLTEpICogaSQyKS9udW07XG4gICAgICAgICAgICAgICAgdmFyIHBiID0gZmxvb3IocCk7XG4gICAgICAgICAgICAgICAgaWYgKHBiID09PSBwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHZhbHVlc1twYl0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIHAgPiBwYlxuICAgICAgICAgICAgICAgICAgICB2YXIgcHIgPSBwIC0gcGI7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKCh2YWx1ZXNbcGJdKigxLXByKSkgKyAodmFsdWVzW3BiKzFdKnByKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2snKSB7IC8vIGstbWVhbnMgY2x1c3RlcmluZ1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uXG4gICAgICAgICAgICBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvZmlndWUvc291cmNlL2Jyb3dzZS90cnVuay9maWd1ZS5qcyMzMzZcbiAgICAgICAgICAgIHNpbXBsaWZpZWQgZm9yIDEtZCBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgY2x1c3RlcjtcbiAgICAgICAgICAgIHZhciBuID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBhc3NpZ25tZW50cyA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgICAgIHZhciBjbHVzdGVyU2l6ZXMgPSBuZXcgQXJyYXkobnVtKTtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG5iX2l0ZXJzID0gMDtcbiAgICAgICAgICAgIHZhciBjZW50cm9pZHMgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBnZXQgc2VlZCB2YWx1ZXNcbiAgICAgICAgICAgIGNlbnRyb2lkcyA9IFtdO1xuICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMz0xOyBpJDM8bnVtOyBpJDMrKykge1xuICAgICAgICAgICAgICAgIGNlbnRyb2lkcy5wdXNoKG1pbiArICgoaSQzL251bSkgKiAobWF4LW1pbikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbnRyb2lkcy5wdXNoKG1heCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50IHN0ZXBcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8bnVtOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlclNpemVzW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSQ0PTA7IGkkNDxuOyBpJDQrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbaSQ0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbmRpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmVzdCA9ICh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDE9MDsgaiQxPG51bTsgaiQxKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXN0ID0gYWJzJDEoY2VudHJvaWRzW2okMV0tdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBtaW5kaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluZGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdCA9IGokMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tiZXN0XSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHNbaSQ0XSA9IGJlc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2VudHJvaWRzIHN0ZXBcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2VudHJvaWRzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQyPTA7IGokMjxudW07IGokMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqJDJdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSQ1PTA7IGkkNTxuOyBpJDUrKykge1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyID0gYXNzaWdubWVudHNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NlbnRyb2lkc1tjbHVzdGVyXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2NsdXN0ZXJdID0gdmFsdWVzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbY2x1c3Rlcl0gKz0gdmFsdWVzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQzPTA7IGokMzxudW07IGokMysrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqJDNdICo9IDEvY2x1c3RlclNpemVzW2okM107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgY29udmVyZ2VuY2VcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDQ9MDsgaiQ0PG51bTsgaiQ0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NlbnRyb2lkc1tqJDRdICE9PSBjZW50cm9pZHNbaiQ0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VudHJvaWRzID0gbmV3Q2VudHJvaWRzO1xuICAgICAgICAgICAgICAgIG5iX2l0ZXJzKys7XG5cbiAgICAgICAgICAgICAgICBpZiAobmJfaXRlcnMgPiAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaW5pc2hlZCBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgICAgIC8vIHRoZSBuZXh0IHBhcnQgaXMgYm9ycm93ZWQgZnJvbSBnYWJyaWVsZmxvci5pdFxuICAgICAgICAgICAgdmFyIGtDbHVzdGVycyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaiQ1PTA7IGokNTxudW07IGokNSsrKSB7XG4gICAgICAgICAgICAgICAga0NsdXN0ZXJzW2okNV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkkNj0wOyBpJDY8bjsgaSQ2KyspIHtcbiAgICAgICAgICAgICAgICBjbHVzdGVyID0gYXNzaWdubWVudHNbaSQ2XTtcbiAgICAgICAgICAgICAgICBrQ2x1c3RlcnNbY2x1c3Rlcl0ucHVzaCh2YWx1ZXNbaSQ2XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdG1wS01lYW5zQnJlYWtzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqJDY9MDsgaiQ2PG51bTsgaiQ2KyspIHtcbiAgICAgICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MucHVzaChrQ2x1c3RlcnNbaiQ2XVswXSk7XG4gICAgICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzLnB1c2goa0NsdXN0ZXJzW2okNl1ba0NsdXN0ZXJzW2okNl0ubGVuZ3RoLTFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcyA9IHRtcEtNZWFuc0JyZWFrcy5zb3J0KGZ1bmN0aW9uIChhLGIpeyByZXR1cm4gYS1iOyB9KTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKHRtcEtNZWFuc0JyZWFrc1swXSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDc9MTsgaSQ3IDwgdG1wS01lYW5zQnJlYWtzLmxlbmd0aDsgaSQ3Kz0gMikge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdG1wS01lYW5zQnJlYWtzW2kkN107XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2KSAmJiAobGltaXRzLmluZGV4T2YodikgPT09IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbWl0cztcbiAgICB9O1xuXG4gICAgdmFyIGFuYWx5emVfMSA9IHthbmFseXplOiBhbmFseXplLCBsaW1pdHM6IGxpbWl0c307XG5cbiAgICB2YXIgQ29sb3IkMyA9IENvbG9yXzE7XG5cblxuICAgIHZhciBjb250cmFzdCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIC8vIFdDQUcgY29udHJhc3QgcmF0aW9cbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jY29udHJhc3QtcmF0aW9kZWZcbiAgICAgICAgYSA9IG5ldyBDb2xvciQzKGEpO1xuICAgICAgICBiID0gbmV3IENvbG9yJDMoYik7XG4gICAgICAgIHZhciBsMSA9IGEubHVtaW5hbmNlKCk7XG4gICAgICAgIHZhciBsMiA9IGIubHVtaW5hbmNlKCk7XG4gICAgICAgIHJldHVybiBsMSA+IGwyID8gKGwxICsgMC4wNSkgLyAobDIgKyAwLjA1KSA6IChsMiArIDAuMDUpIC8gKGwxICsgMC4wNSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciQyID0gQ29sb3JfMTtcbiAgICB2YXIgc3FydCA9IE1hdGguc3FydDtcbiAgICB2YXIgcG93ID0gTWF0aC5wb3c7XG4gICAgdmFyIG1pbiA9IE1hdGgubWluO1xuICAgIHZhciBtYXggPSBNYXRoLm1heDtcbiAgICB2YXIgYXRhbjIgPSBNYXRoLmF0YW4yO1xuICAgIHZhciBhYnMgPSBNYXRoLmFicztcbiAgICB2YXIgY29zID0gTWF0aC5jb3M7XG4gICAgdmFyIHNpbiA9IE1hdGguc2luO1xuICAgIHZhciBleHAgPSBNYXRoLmV4cDtcbiAgICB2YXIgUEkgPSBNYXRoLlBJO1xuXG4gICAgdmFyIGRlbHRhRSA9IGZ1bmN0aW9uKGEsIGIsIEtsLCBLYywgS2gpIHtcbiAgICAgICAgaWYgKCBLbCA9PT0gdm9pZCAwICkgS2w9MTtcbiAgICAgICAgaWYgKCBLYyA9PT0gdm9pZCAwICkgS2M9MTtcbiAgICAgICAgaWYgKCBLaCA9PT0gdm9pZCAwICkgS2g9MTtcblxuICAgICAgICAvLyBEZWx0YSBFIChDSUUgMjAwMClcbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cuYnJ1Y2VsaW5kYmxvb20uY29tL2luZGV4Lmh0bWw/RXFuX0RlbHRhRV9DSUUyMDAwLmh0bWxcbiAgICAgICAgdmFyIHJhZDJkZWcgPSBmdW5jdGlvbihyYWQpIHtcbiAgICAgICAgICAgIHJldHVybiAzNjAgKiByYWQgLyAoMiAqIFBJKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRlZzJyYWQgPSBmdW5jdGlvbihkZWcpIHtcbiAgICAgICAgICAgIHJldHVybiAoMiAqIFBJICogZGVnKSAvIDM2MDtcbiAgICAgICAgfTtcbiAgICAgICAgYSA9IG5ldyBDb2xvciQyKGEpO1xuICAgICAgICBiID0gbmV3IENvbG9yJDIoYik7XG4gICAgICAgIHZhciByZWYgPSBBcnJheS5mcm9tKGEubGFiKCkpO1xuICAgICAgICB2YXIgTDEgPSByZWZbMF07XG4gICAgICAgIHZhciBhMSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIxID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBBcnJheS5mcm9tKGIubGFiKCkpO1xuICAgICAgICB2YXIgTDIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGEyID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiMiA9IHJlZiQxWzJdO1xuICAgICAgICB2YXIgYXZnTCA9IChMMSArIEwyKS8yO1xuICAgICAgICB2YXIgQzEgPSBzcXJ0KHBvdyhhMSwgMikgKyBwb3coYjEsIDIpKTtcbiAgICAgICAgdmFyIEMyID0gc3FydChwb3coYTIsIDIpICsgcG93KGIyLCAyKSk7XG4gICAgICAgIHZhciBhdmdDID0gKEMxICsgQzIpLzI7XG4gICAgICAgIHZhciBHID0gMC41KigxLXNxcnQocG93KGF2Z0MsIDcpLyhwb3coYXZnQywgNykgKyBwb3coMjUsIDcpKSkpO1xuICAgICAgICB2YXIgYTFwID0gYTEqKDErRyk7XG4gICAgICAgIHZhciBhMnAgPSBhMiooMStHKTtcbiAgICAgICAgdmFyIEMxcCA9IHNxcnQocG93KGExcCwgMikgKyBwb3coYjEsIDIpKTtcbiAgICAgICAgdmFyIEMycCA9IHNxcnQocG93KGEycCwgMikgKyBwb3coYjIsIDIpKTtcbiAgICAgICAgdmFyIGF2Z0NwID0gKEMxcCArIEMycCkvMjtcbiAgICAgICAgdmFyIGFyY3RhbjEgPSByYWQyZGVnKGF0YW4yKGIxLCBhMXApKTtcbiAgICAgICAgdmFyIGFyY3RhbjIgPSByYWQyZGVnKGF0YW4yKGIyLCBhMnApKTtcbiAgICAgICAgdmFyIGgxcCA9IGFyY3RhbjEgPj0gMCA/IGFyY3RhbjEgOiBhcmN0YW4xICsgMzYwO1xuICAgICAgICB2YXIgaDJwID0gYXJjdGFuMiA+PSAwID8gYXJjdGFuMiA6IGFyY3RhbjIgKyAzNjA7XG4gICAgICAgIHZhciBhdmdIcCA9IGFicyhoMXAgLSBoMnApID4gMTgwID8gKGgxcCArIGgycCArIDM2MCkvMiA6IChoMXAgKyBoMnApLzI7XG4gICAgICAgIHZhciBUID0gMSAtIDAuMTcqY29zKGRlZzJyYWQoYXZnSHAgLSAzMCkpICsgMC4yNCpjb3MoZGVnMnJhZCgyKmF2Z0hwKSkgKyAwLjMyKmNvcyhkZWcycmFkKDMqYXZnSHAgKyA2KSkgLSAwLjIqY29zKGRlZzJyYWQoNCphdmdIcCAtIDYzKSk7XG4gICAgICAgIHZhciBkZWx0YUhwID0gaDJwIC0gaDFwO1xuICAgICAgICBkZWx0YUhwID0gYWJzKGRlbHRhSHApIDw9IDE4MCA/IGRlbHRhSHAgOiBoMnAgPD0gaDFwID8gZGVsdGFIcCArIDM2MCA6IGRlbHRhSHAgLSAzNjA7XG4gICAgICAgIGRlbHRhSHAgPSAyKnNxcnQoQzFwKkMycCkqc2luKGRlZzJyYWQoZGVsdGFIcCkvMik7XG4gICAgICAgIHZhciBkZWx0YUwgPSBMMiAtIEwxO1xuICAgICAgICB2YXIgZGVsdGFDcCA9IEMycCAtIEMxcDsgICAgXG4gICAgICAgIHZhciBzbCA9IDEgKyAoMC4wMTUqcG93KGF2Z0wgLSA1MCwgMikpL3NxcnQoMjAgKyBwb3coYXZnTCAtIDUwLCAyKSk7XG4gICAgICAgIHZhciBzYyA9IDEgKyAwLjA0NSphdmdDcDtcbiAgICAgICAgdmFyIHNoID0gMSArIDAuMDE1KmF2Z0NwKlQ7XG4gICAgICAgIHZhciBkZWx0YVRoZXRhID0gMzAqZXhwKC1wb3coKGF2Z0hwIC0gMjc1KS8yNSwgMikpO1xuICAgICAgICB2YXIgUmMgPSAyKnNxcnQocG93KGF2Z0NwLCA3KS8ocG93KGF2Z0NwLCA3KSArIHBvdygyNSwgNykpKTtcbiAgICAgICAgdmFyIFJ0ID0gLVJjKnNpbigyKmRlZzJyYWQoZGVsdGFUaGV0YSkpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3FydChwb3coZGVsdGFMLyhLbCpzbCksIDIpICsgcG93KGRlbHRhQ3AvKEtjKnNjKSwgMikgKyBwb3coZGVsdGFIcC8oS2gqc2gpLCAyKSArIFJ0KihkZWx0YUNwLyhLYypzYykpKihkZWx0YUhwLyhLaCpzaCkpKTtcbiAgICAgICAgcmV0dXJuIG1heCgwLCBtaW4oMTAwLCByZXN1bHQpKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJDEgPSBDb2xvcl8xO1xuXG4gICAgLy8gc2ltcGxlIEV1Y2xpZGVhbiBkaXN0YW5jZVxuICAgIHZhciBkaXN0YW5jZSA9IGZ1bmN0aW9uKGEsIGIsIG1vZGUpIHtcbiAgICAgICAgaWYgKCBtb2RlID09PSB2b2lkIDAgKSBtb2RlPSdsYWInO1xuXG4gICAgICAgIC8vIERlbHRhIEUgKENJRSAxOTc2KVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcXVhdGlvbnMuaHRtbFxuICAgICAgICBhID0gbmV3IENvbG9yJDEoYSk7XG4gICAgICAgIGIgPSBuZXcgQ29sb3IkMShiKTtcbiAgICAgICAgdmFyIGwxID0gYS5nZXQobW9kZSk7XG4gICAgICAgIHZhciBsMiA9IGIuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgc3VtX3NxID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBsMSkge1xuICAgICAgICAgICAgdmFyIGQgPSAobDFbaV0gfHwgMCkgLSAobDJbaV0gfHwgMCk7XG4gICAgICAgICAgICBzdW1fc3EgKz0gZCpkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtX3NxKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yID0gQ29sb3JfMTtcblxuICAgIHZhciB2YWxpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IsIFsgbnVsbCBdLmNvbmNhdCggYXJncykgKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHNvbWUgcHJlLWRlZmluZWQgY29sb3Igc2NhbGVzOlxuICAgIHZhciBjaHJvbWEkMSA9IGNocm9tYV8xO1xuXG4gICAgdmFyIHNjYWxlID0gc2NhbGUkMjtcblxuICAgIHZhciBzY2FsZXMgPSB7XG4gICAgXHRjb29sOiBmdW5jdGlvbiBjb29sKCkgeyByZXR1cm4gc2NhbGUoW2Nocm9tYSQxLmhzbCgxODAsMSwuOSksIGNocm9tYSQxLmhzbCgyNTAsLjcsLjQpXSkgfSxcbiAgICBcdGhvdDogZnVuY3Rpb24gaG90KCkgeyByZXR1cm4gc2NhbGUoWycjMDAwJywnI2YwMCcsJyNmZjAnLCcjZmZmJ10pLm1vZGUoJ3JnYicpIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICAgIENvbG9yQnJld2VyIGNvbG9ycyBmb3IgY2hyb21hLmpzXG5cbiAgICAgICAgQ29weXJpZ2h0IChjKSAyMDAyIEN5bnRoaWEgQnJld2VyLCBNYXJrIEhhcnJvd2VyLCBhbmQgVGhlXG4gICAgICAgIFBlbm5zeWx2YW5pYSBTdGF0ZSBVbml2ZXJzaXR5LlxuXG4gICAgICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAgICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICAgICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWRcbiAgICAgICAgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1JcbiAgICAgICAgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAgICAgICAgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAgICAqL1xuXG4gICAgdmFyIGNvbG9yYnJld2VyID0ge1xuICAgICAgICAvLyBzZXF1ZW50aWFsXG4gICAgICAgIE9yUmQ6IFsnI2ZmZjdlYycsICcjZmVlOGM4JywgJyNmZGQ0OWUnLCAnI2ZkYmI4NCcsICcjZmM4ZDU5JywgJyNlZjY1NDgnLCAnI2Q3MzAxZicsICcjYjMwMDAwJywgJyM3ZjAwMDAnXSxcbiAgICAgICAgUHVCdTogWycjZmZmN2ZiJywgJyNlY2U3ZjInLCAnI2QwZDFlNicsICcjYTZiZGRiJywgJyM3NGE5Y2YnLCAnIzM2OTBjMCcsICcjMDU3MGIwJywgJyMwNDVhOGQnLCAnIzAyMzg1OCddLFxuICAgICAgICBCdVB1OiBbJyNmN2ZjZmQnLCAnI2UwZWNmNCcsICcjYmZkM2U2JywgJyM5ZWJjZGEnLCAnIzhjOTZjNicsICcjOGM2YmIxJywgJyM4ODQxOWQnLCAnIzgxMGY3YycsICcjNGQwMDRiJ10sXG4gICAgICAgIE9yYW5nZXM6IFsnI2ZmZjVlYicsICcjZmVlNmNlJywgJyNmZGQwYTInLCAnI2ZkYWU2YicsICcjZmQ4ZDNjJywgJyNmMTY5MTMnLCAnI2Q5NDgwMScsICcjYTYzNjAzJywgJyM3ZjI3MDQnXSxcbiAgICAgICAgQnVHbjogWycjZjdmY2ZkJywgJyNlNWY1ZjknLCAnI2NjZWNlNicsICcjOTlkOGM5JywgJyM2NmMyYTQnLCAnIzQxYWU3NicsICcjMjM4YjQ1JywgJyMwMDZkMmMnLCAnIzAwNDQxYiddLFxuICAgICAgICBZbE9yQnI6IFsnI2ZmZmZlNScsICcjZmZmN2JjJywgJyNmZWUzOTEnLCAnI2ZlYzQ0ZicsICcjZmU5OTI5JywgJyNlYzcwMTQnLCAnI2NjNGMwMicsICcjOTkzNDA0JywgJyM2NjI1MDYnXSxcbiAgICAgICAgWWxHbjogWycjZmZmZmU1JywgJyNmN2ZjYjknLCAnI2Q5ZjBhMycsICcjYWRkZDhlJywgJyM3OGM2NzknLCAnIzQxYWI1ZCcsICcjMjM4NDQzJywgJyMwMDY4MzcnLCAnIzAwNDUyOSddLFxuICAgICAgICBSZWRzOiBbJyNmZmY1ZjAnLCAnI2ZlZTBkMicsICcjZmNiYmExJywgJyNmYzkyNzInLCAnI2ZiNmE0YScsICcjZWYzYjJjJywgJyNjYjE4MWQnLCAnI2E1MGYxNScsICcjNjcwMDBkJ10sXG4gICAgICAgIFJkUHU6IFsnI2ZmZjdmMycsICcjZmRlMGRkJywgJyNmY2M1YzAnLCAnI2ZhOWZiNScsICcjZjc2OGExJywgJyNkZDM0OTcnLCAnI2FlMDE3ZScsICcjN2EwMTc3JywgJyM0OTAwNmEnXSxcbiAgICAgICAgR3JlZW5zOiBbJyNmN2ZjZjUnLCAnI2U1ZjVlMCcsICcjYzdlOWMwJywgJyNhMWQ5OWInLCAnIzc0YzQ3NicsICcjNDFhYjVkJywgJyMyMzhiNDUnLCAnIzAwNmQyYycsICcjMDA0NDFiJ10sXG4gICAgICAgIFlsR25CdTogWycjZmZmZmQ5JywgJyNlZGY4YjEnLCAnI2M3ZTliNCcsICcjN2ZjZGJiJywgJyM0MWI2YzQnLCAnIzFkOTFjMCcsICcjMjI1ZWE4JywgJyMyNTM0OTQnLCAnIzA4MWQ1OCddLFxuICAgICAgICBQdXJwbGVzOiBbJyNmY2ZiZmQnLCAnI2VmZWRmNScsICcjZGFkYWViJywgJyNiY2JkZGMnLCAnIzllOWFjOCcsICcjODA3ZGJhJywgJyM2YTUxYTMnLCAnIzU0Mjc4ZicsICcjM2YwMDdkJ10sXG4gICAgICAgIEduQnU6IFsnI2Y3ZmNmMCcsICcjZTBmM2RiJywgJyNjY2ViYzUnLCAnI2E4ZGRiNScsICcjN2JjY2M0JywgJyM0ZWIzZDMnLCAnIzJiOGNiZScsICcjMDg2OGFjJywgJyMwODQwODEnXSxcbiAgICAgICAgR3JleXM6IFsnI2ZmZmZmZicsICcjZjBmMGYwJywgJyNkOWQ5ZDknLCAnI2JkYmRiZCcsICcjOTY5Njk2JywgJyM3MzczNzMnLCAnIzUyNTI1MicsICcjMjUyNTI1JywgJyMwMDAwMDAnXSxcbiAgICAgICAgWWxPclJkOiBbJyNmZmZmY2MnLCAnI2ZmZWRhMCcsICcjZmVkOTc2JywgJyNmZWIyNGMnLCAnI2ZkOGQzYycsICcjZmM0ZTJhJywgJyNlMzFhMWMnLCAnI2JkMDAyNicsICcjODAwMDI2J10sXG4gICAgICAgIFB1UmQ6IFsnI2Y3ZjRmOScsICcjZTdlMWVmJywgJyNkNGI5ZGEnLCAnI2M5OTRjNycsICcjZGY2NWIwJywgJyNlNzI5OGEnLCAnI2NlMTI1NicsICcjOTgwMDQzJywgJyM2NzAwMWYnXSxcbiAgICAgICAgQmx1ZXM6IFsnI2Y3ZmJmZicsICcjZGVlYmY3JywgJyNjNmRiZWYnLCAnIzllY2FlMScsICcjNmJhZWQ2JywgJyM0MjkyYzYnLCAnIzIxNzFiNScsICcjMDg1MTljJywgJyMwODMwNmInXSxcbiAgICAgICAgUHVCdUduOiBbJyNmZmY3ZmInLCAnI2VjZTJmMCcsICcjZDBkMWU2JywgJyNhNmJkZGInLCAnIzY3YTljZicsICcjMzY5MGMwJywgJyMwMjgxOGEnLCAnIzAxNmM1OScsICcjMDE0NjM2J10sXG4gICAgICAgIFZpcmlkaXM6IFsnIzQ0MDE1NCcsICcjNDgyNzc3JywgJyMzZjRhOGEnLCAnIzMxNjc4ZScsICcjMjY4MzhmJywgJyMxZjlkOGEnLCAnIzZjY2U1YScsICcjYjZkZTJiJywgJyNmZWU4MjUnXSxcblxuICAgICAgICAvLyBkaXZlcmdpbmdcblxuICAgICAgICBTcGVjdHJhbDogWycjOWUwMTQyJywgJyNkNTNlNGYnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOGInLCAnI2ZmZmZiZicsICcjZTZmNTk4JywgJyNhYmRkYTQnLCAnIzY2YzJhNScsICcjMzI4OGJkJywgJyM1ZTRmYTInXSxcbiAgICAgICAgUmRZbEduOiBbJyNhNTAwMjYnLCAnI2Q3MzAyNycsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA4YicsICcjZmZmZmJmJywgJyNkOWVmOGInLCAnI2E2ZDk2YScsICcjNjZiZDYzJywgJyMxYTk4NTAnLCAnIzAwNjgzNyddLFxuICAgICAgICBSZEJ1OiBbJyM2NzAwMWYnLCAnI2IyMTgyYicsICcjZDY2MDRkJywgJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZjdmN2Y3JywgJyNkMWU1ZjAnLCAnIzkyYzVkZScsICcjNDM5M2MzJywgJyMyMTY2YWMnLCAnIzA1MzA2MSddLFxuICAgICAgICBQaVlHOiBbJyM4ZTAxNTInLCAnI2M1MWI3ZCcsICcjZGU3N2FlJywgJyNmMWI2ZGEnLCAnI2ZkZTBlZicsICcjZjdmN2Y3JywgJyNlNmY1ZDAnLCAnI2I4ZTE4NicsICcjN2ZiYzQxJywgJyM0ZDkyMjEnLCAnIzI3NjQxOSddLFxuICAgICAgICBQUkduOiBbJyM0MDAwNGInLCAnIzc2MmE4MycsICcjOTk3MGFiJywgJyNjMmE1Y2YnLCAnI2U3ZDRlOCcsICcjZjdmN2Y3JywgJyNkOWYwZDMnLCAnI2E2ZGJhMCcsICcjNWFhZTYxJywgJyMxYjc4MzcnLCAnIzAwNDQxYiddLFxuICAgICAgICBSZFlsQnU6IFsnI2E1MDAyNicsICcjZDczMDI3JywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDkwJywgJyNmZmZmYmYnLCAnI2UwZjNmOCcsICcjYWJkOWU5JywgJyM3NGFkZDEnLCAnIzQ1NzViNCcsICcjMzEzNjk1J10sXG4gICAgICAgIEJyQkc6IFsnIzU0MzAwNScsICcjOGM1MTBhJywgJyNiZjgxMmQnLCAnI2RmYzI3ZCcsICcjZjZlOGMzJywgJyNmNWY1ZjUnLCAnI2M3ZWFlNScsICcjODBjZGMxJywgJyMzNTk3OGYnLCAnIzAxNjY1ZScsICcjMDAzYzMwJ10sXG4gICAgICAgIFJkR3k6IFsnIzY3MDAxZicsICcjYjIxODJiJywgJyNkNjYwNGQnLCAnI2Y0YTU4MicsICcjZmRkYmM3JywgJyNmZmZmZmYnLCAnI2UwZTBlMCcsICcjYmFiYWJhJywgJyM4Nzg3ODcnLCAnIzRkNGQ0ZCcsICcjMWExYTFhJ10sXG4gICAgICAgIFB1T3I6IFsnIzdmM2IwOCcsICcjYjM1ODA2JywgJyNlMDgyMTQnLCAnI2ZkYjg2MycsICcjZmVlMGI2JywgJyNmN2Y3ZjcnLCAnI2Q4ZGFlYicsICcjYjJhYmQyJywgJyM4MDczYWMnLCAnIzU0Mjc4OCcsICcjMmQwMDRiJ10sXG5cbiAgICAgICAgLy8gcXVhbGl0YXRpdmVcblxuICAgICAgICBTZXQyOiBbJyM2NmMyYTUnLCAnI2ZjOGQ2MicsICcjOGRhMGNiJywgJyNlNzhhYzMnLCAnI2E2ZDg1NCcsICcjZmZkOTJmJywgJyNlNWM0OTQnLCAnI2IzYjNiMyddLFxuICAgICAgICBBY2NlbnQ6IFsnIzdmYzk3ZicsICcjYmVhZWQ0JywgJyNmZGMwODYnLCAnI2ZmZmY5OScsICcjMzg2Y2IwJywgJyNmMDAyN2YnLCAnI2JmNWIxNycsICcjNjY2NjY2J10sXG4gICAgICAgIFNldDE6IFsnI2U0MWExYycsICcjMzc3ZWI4JywgJyM0ZGFmNGEnLCAnIzk4NGVhMycsICcjZmY3ZjAwJywgJyNmZmZmMzMnLCAnI2E2NTYyOCcsICcjZjc4MWJmJywgJyM5OTk5OTknXSxcbiAgICAgICAgU2V0MzogWycjOGRkM2M3JywgJyNmZmZmYjMnLCAnI2JlYmFkYScsICcjZmI4MDcyJywgJyM4MGIxZDMnLCAnI2ZkYjQ2MicsICcjYjNkZTY5JywgJyNmY2NkZTUnLCAnI2Q5ZDlkOScsICcjYmM4MGJkJywgJyNjY2ViYzUnLCAnI2ZmZWQ2ZiddLFxuICAgICAgICBEYXJrMjogWycjMWI5ZTc3JywgJyNkOTVmMDInLCAnIzc1NzBiMycsICcjZTcyOThhJywgJyM2NmE2MWUnLCAnI2U2YWIwMicsICcjYTY3NjFkJywgJyM2NjY2NjYnXSxcbiAgICAgICAgUGFpcmVkOiBbJyNhNmNlZTMnLCAnIzFmNzhiNCcsICcjYjJkZjhhJywgJyMzM2EwMmMnLCAnI2ZiOWE5OScsICcjZTMxYTFjJywgJyNmZGJmNmYnLCAnI2ZmN2YwMCcsICcjY2FiMmQ2JywgJyM2YTNkOWEnLCAnI2ZmZmY5OScsICcjYjE1OTI4J10sXG4gICAgICAgIFBhc3RlbDI6IFsnI2IzZTJjZCcsICcjZmRjZGFjJywgJyNjYmQ1ZTgnLCAnI2Y0Y2FlNCcsICcjZTZmNWM5JywgJyNmZmYyYWUnLCAnI2YxZTJjYycsICcjY2NjY2NjJ10sXG4gICAgICAgIFBhc3RlbDE6IFsnI2ZiYjRhZScsICcjYjNjZGUzJywgJyNjY2ViYzUnLCAnI2RlY2JlNCcsICcjZmVkOWE2JywgJyNmZmZmY2MnLCAnI2U1ZDhiZCcsICcjZmRkYWVjJywgJyNmMmYyZjInXSxcbiAgICB9O1xuXG4gICAgLy8gYWRkIGxvd2VyY2FzZSBhbGlhc2VzIGZvciBjYXNlLWluc2Vuc2l0aXZlIG1hdGNoZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IE9iamVjdC5rZXlzKGNvbG9yYnJld2VyKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGtleSA9IGxpc3RbaV07XG5cbiAgICAgICAgY29sb3JicmV3ZXJba2V5LnRvTG93ZXJDYXNlKCldID0gY29sb3JicmV3ZXJba2V5XTtcbiAgICB9XG5cbiAgICB2YXIgY29sb3JicmV3ZXJfMSA9IGNvbG9yYnJld2VyO1xuXG4gICAgdmFyIGNocm9tYSA9IGNocm9tYV8xO1xuXG4gICAgLy8gZmVlbCBmcmVlIHRvIGNvbW1lbnQgb3V0IGFueXRoaW5nIHRvIHJvbGx1cFxuICAgIC8vIGEgc21hbGxlciBjaHJvbWEuanMgYnVpbHRcblxuICAgIC8vIGlvIC0tPiBjb252ZXJ0IGNvbG9yc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBvcGVyYXRvcnMgLS0+IG1vZGlmeSBleGlzdGluZyBDb2xvcnNcblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIGludGVycG9sYXRvcnNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBnZW5lcmF0b3JzIC0tID4gY3JlYXRlIG5ldyBjb2xvcnNcbiAgICBjaHJvbWEuYXZlcmFnZSA9IGF2ZXJhZ2U7XG4gICAgY2hyb21hLmJlemllciA9IGJlemllcl8xO1xuICAgIGNocm9tYS5ibGVuZCA9IGJsZW5kXzE7XG4gICAgY2hyb21hLmN1YmVoZWxpeCA9IGN1YmVoZWxpeDtcbiAgICBjaHJvbWEubWl4ID0gY2hyb21hLmludGVycG9sYXRlID0gbWl4JDE7XG4gICAgY2hyb21hLnJhbmRvbSA9IHJhbmRvbV8xO1xuICAgIGNocm9tYS5zY2FsZSA9IHNjYWxlJDI7XG5cbiAgICAvLyBvdGhlciB1dGlsaXR5IG1ldGhvZHNcbiAgICBjaHJvbWEuYW5hbHl6ZSA9IGFuYWx5emVfMS5hbmFseXplO1xuICAgIGNocm9tYS5jb250cmFzdCA9IGNvbnRyYXN0O1xuICAgIGNocm9tYS5kZWx0YUUgPSBkZWx0YUU7XG4gICAgY2hyb21hLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgY2hyb21hLmxpbWl0cyA9IGFuYWx5emVfMS5saW1pdHM7XG4gICAgY2hyb21hLnZhbGlkID0gdmFsaWQ7XG5cbiAgICAvLyBzY2FsZVxuICAgIGNocm9tYS5zY2FsZXMgPSBzY2FsZXM7XG5cbiAgICAvLyBjb2xvcnNcbiAgICBjaHJvbWEuY29sb3JzID0gdzNjeDExXzE7XG4gICAgY2hyb21hLmJyZXdlciA9IGNvbG9yYnJld2VyXzE7XG5cbiAgICB2YXIgY2hyb21hX2pzID0gY2hyb21hO1xuXG4gICAgcmV0dXJuIGNocm9tYV9qcztcblxufSkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgY29udmVydEZpZ21hQ29sb3JUb1JnYiwgcGFyc2VDb2xvclRva2VuIH0gZnJvbSAnLi91dGlscy9maWdtYS1jb2xvcnMnO1xuaW1wb3J0IHsgZ2V0Q29tcG9uZW50Q29sb3JzLCBnZXRHbG9iYWxOZXV0cmFscywgZ2V0VGhlbWVDb2xvcnMgfSBmcm9tICcuL2NvbG9yLXRva2Vucyc7XG5pbXBvcnQgeyBnZXRGaWdtYUNvbGxlY3Rpb24sIHJlc29sdmVWYXJpYWJsZVR5cGUsIHNldEZpZ21hVmFyaWFibGUgfSBmcm9tIFwiLi91dGlscy9maWdtYS12YXJpYWJsZXNcIjtcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmltcG9ydCAqIGFzIHNwYWNpbmdUb2tlbnMgZnJvbSAnLi9zcGFjaW5nLXRva2Vucyc7XG5pbXBvcnQgKiBhcyByYWRpaVRva2VucyBmcm9tICcuL3JhZGlpLXRva2Vucyc7XG5pbXBvcnQgKiBhcyB0eXBlc2NhbGVUb2tlbnMgZnJvbSAnLi90eXBlc2NhbGUtdG9rZW5zJztcbmltcG9ydCAqIGFzIHNpemluZ1Rva2VucyBmcm9tICcuL3NpemluZy10b2tlbnMnO1xuaW1wb3J0ICogYXMgZWZmZWN0c1Rva2VucyBmcm9tICcuL2VmZmVjdC10b2tlbnMnO1xuaW1wb3J0ICogYXMgb3BhY2l0eVRva2VucyBmcm9tICcuL29wYWNpdHktdG9rZW5zJztcbmltcG9ydCB7IGdldFNpemVUb2tlbnNTb3J0Rm4sIGdldENvbG9yVG9rZW5zU29ydEZuLCBnZXRPcGFjaXR5VG9rZW5zU29ydEZuIH0gZnJvbSAnLi91dGlscy9zb3J0LXRva2Vucyc7XG5pbXBvcnQgeyBpbXBvcnRUZXh0U3R5bGVzIH0gZnJvbSAnLi91dGlscy9maWdtYS10ZXh0LXN0eWxlcyc7XG5pbXBvcnQgeyByZW5kZXJBY2NlbnRzIH0gZnJvbSBcIi4vY29sb3ItZ2VuZXJhdG9ycy9yZW5kZXItYWNjZW50c1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVHbG9iYWxBY2NlbnRQYWxldHRlLCBnZXRHbG9iYWxBY2NlbnQgfSBmcm9tICcuL2NvbG9yLWdlbmVyYXRvcnMvYWNjZW50LXBhbGV0dGUtZ2VuZXJhdG9yJztcbmltcG9ydCB7IGdlbmVyYXRlTmV1dHJhbHMsIHJlbmRlck5ldXRyYWxzIH0gZnJvbSAnLi9jb2xvci1nZW5lcmF0b3JzL25ldXRyYWxzLXBhbGV0dGUtZ2VuZXJhdG9yJztcbmltcG9ydCB7IGJpbmRWYXJpYWJsZXNBbmRTdHlsZXMgfSBmcm9tICcuL3V0aWxzL3ZhcmlhYmxlcy10by1zdHlsZXMnO1xuaW1wb3J0IHsgcGFyc2VSZWZlcmVuY2VHbG9iYWwsIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyB9IGZyb20gJy4vdXRpbHMvdG9rZW4tcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyB0b1RpdGxlQ2FzZSB9IGZyb20gJy4vdXRpbHMvdGV4dC10by10aXRsZS1jYXNlJztcbmltcG9ydCB7IGljb25TaXplTmFtZSwgcmFkaWlTaXplTmFtZSwgc3BhY2luZ1NpemVOYW1lLCB0eXBvZ3JhcGh5U2l6ZU5hbWUgfSBmcm9tICcuL2RlZmF1bHRzJztcbmltcG9ydCB7IHByb2Nlc3NDb21wb25lbnRzIH0gZnJvbSAnLi9maXgtbGF5ZXJzJztcbmltcG9ydCB7IGltcG9ydEVmZmVjdFN0eWxlcyB9IGZyb20gJy4vdXRpbHMvZmlnbWEtZWZmZWN0LXN0eWxlcyc7XG5pbXBvcnQgeyB1cGRhdGVFbGV2YXRpb25Db21wb25lbnRzIH0gZnJvbSAnLi91dGlscy91cGRhdGUtZWxldmF0aW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gJy4vdXRpbHMvZmxhdHRlbi1vYmplY3QnO1xuaW1wb3J0IHsgcm91bmRUd29EaWdpdHMgfSBmcm9tICcuL3V0aWxzL3JvdW5kLXR3by1kaWdpdHMnO1xuaW1wb3J0IHsgc3dhcFZhcmlhYmxlcyB9IGZyb20gJy4vdXRpbHMvc3dhcC12YXJpYWJsZXMnO1xuaW1wb3J0IHsgZXhwb3J0U3R5bGVUZW1wbGF0ZXMgfSBmcm9tICcuL3V0aWxzL2V4cG9ydC1zdHlsZS10ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgaW1wb3J0U3R5bGVUZW1wbGF0ZXMgfSBmcm9tICcuL3V0aWxzL2ltcG9ydC1zdHlsZS10ZW1wbGF0ZXMnO1xuY29uc29sZS5jbGVhcigpO1xubGV0IGdsb2JhbFRva2VucztcbmNvbnN0IGNvbGxlY3Rpb25OYW1lcyA9IG5ldyBNYXAoW1xuICAgIFtcImJyYW5kQ29sb3JzXCIsIFwiQ29sb3IgVGhlbWVcIiAvKlwiQnJhbmQgQ29sb3JcIiovXSxcbiAgICBbXCJ0aGVtZUNvbG9yc1wiLCBcIkNvbG9yIFRoZW1lXCJdLFxuICAgIFtcImNvbXBvbmVudENvbG9yc1wiLCBcIkNvbXBvbmVudCBUb2tlbnNcIl0sXG4gICAgW1wic3BhY2luZ1wiLCBcIlNwYWNpbmdcIl0sXG4gICAgW1wib3BhY2l0eVwiLCBcIk9wYWNpdHlcIl0sXG4gICAgW1wicmFkaWlcIiwgXCJSYWRpaVwiXSxcbiAgICBbXCJpY29uU2NhbGVcIiwgXCJJY29uIFNjYWxlXCJdLFxuXSk7XG4oKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgeWllbGQgUHJvbWlzZS5hbGwodHlwZXNjYWxlVG9rZW5zLmdldEZvbnREZXRhaWxzKCkubWFwKChpdGVtKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoaXRlbSk7IH0pKSk7XG4gICAgaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiaW1wb3J0XCIpIHtcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9fdWlGaWxlc19fW1wiaW1wb3J0XCJdLCB7XG4gICAgICAgICAgICB3aWR0aDogNTYwLFxuICAgICAgICAgICAgaGVpZ2h0OiA3MjAsXG4gICAgICAgICAgICB0aGVtZUNvbG9yczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmaWdtYS5jb21tYW5kID09PSBcImV4cG9ydFwiKSB7XG4gICAgICAgIGZpZ21hLnNob3dVSShfX3VpRmlsZXNfX1tcImV4cG9ydFwiXSwge1xuICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICAgICAgdGhlbWVDb2xvcnM6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZmlnbWEuY29tbWFuZCA9PSBcImJpbmRUb1N0eWxlc1wiKSB7XG4gICAgICAgIGJpbmRWYXJpYWJsZXNBbmRTdHlsZXMoKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKGZpZ21hLmNvbW1hbmQgPT0gXCJ1cGRhdGVFbGV2YXRpb25Db21wb25lbnRzXCIpIHtcbiAgICAgICAgdXBkYXRlRWxldmF0aW9uQ29tcG9uZW50cyhlZmZlY3RzVG9rZW5zLmdldEVsZXZhdGlvblRva2VucygpKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKGZpZ21hLmNvbW1hbmQgPT0gXCJzZXRQbGF5Z3JvdW5kXCIpIHtcbiAgICAgICAgY29uc3QgaXNQbGF5Z3JvdW5kID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKCdTRFNQbGF5Z3JvdW5kJykgIT09ICcnO1xuICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoJ1NEU1BsYXlncm91bmQnLCBpc1BsYXlncm91bmQgPyAnJyA6ICd0cnVlJyk7XG4gICAgICAgIGZpZ21hLm5vdGlmeShgJHtpc1BsYXlncm91bmQgPyAn4p2OJyA6ICfinIUnfSBQbGF5Z3JvdW5kIGlzICR7aXNQbGF5Z3JvdW5kID8gJ2Rpc2FibGVkJyA6ICdlbmFibGVkJ31gKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKGZpZ21hLmNvbW1hbmQgPT0gXCJmaXhMYXllcnNcIikge1xuICAgICAgICB5aWVsZCBwcm9jZXNzQ29tcG9uZW50cygpO1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH1cbiAgICBpZiAoZmlnbWEuY29tbWFuZCA9PSBcImV4cG9ydFN0eWxlVGVtcGxhdGVzXCIpIHtcbiAgICAgICAgeWllbGQgZXhwb3J0U3R5bGVUZW1wbGF0ZXMoKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oJ1N0eWxlIHRlbXBsYXRlcyBleHBvcnRlZCcpO1xuICAgIH1cbiAgICBpZiAoZmlnbWEuY29tbWFuZCA9PSBcImltcG9ydFN0eWxlVGVtcGxhdGVzXCIpIHtcbiAgICAgICAgeWllbGQgaW1wb3J0U3R5bGVUZW1wbGF0ZXMoKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oJ1N0eWxlIHRlbXBsYXRlcyBpbXBvcnRlZCcpO1xuICAgIH1cbiAgICBpZiAoZmlnbWEuY29tbWFuZCA9PSBcInN3YXBWYXJpYWJsZXNcIikge1xuICAgICAgICBjb25zdCBsYXllcnNDb3VudCA9IHlpZWxkIHN3YXBWYXJpYWJsZXMoKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGVyciwgeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKGAke2xheWVyc0NvdW50fSBsYXllcihzKSBwcm9jZXNzZWQuIGApO1xuICAgIH1cbn0pKSgpO1xuZmlnbWEudWkub25tZXNzYWdlID0gKGV2ZW50RGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY29kZSByZWNlaXZlZCBtZXNzYWdlXCIsIGV2ZW50RGF0YSk7XG4gICAgY29uc3QgcGFyYW1zID0gZXZlbnREYXRhLnBhcmFtcztcbiAgICBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiSU1QT1JUXCIpIHtcbiAgICAgICAgaW5pdGlhdGVJbXBvcnQocGFyYW1zKTtcbiAgICAgICAgaW1wb3J0QWxsVG9rZW5zKHBhcmFtcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIkVYUE9SVFwiKSB7XG4gICAgICAgIC8vIGV4cG9ydFRvSlNPTihldmVudERhdGEuZm9ybWF0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiQUxFUlRcIikge1xuICAgICAgICBmaWdtYS5ub3RpZnkoYCR7ZXZlbnREYXRhLnBhcmFtc31gKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiUkVOREVSX0FDQ0VOVFNcIikge1xuICAgICAgICBjb25zdCBsaWdodEFjY2VudFRva2VucyA9IGdlbmVyYXRlR2xvYmFsQWNjZW50UGFsZXR0ZSgnbGlnaHQnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBkYXJrQWNjZW50VG9rZW5zID0gZ2VuZXJhdGVHbG9iYWxBY2NlbnRQYWxldHRlKCdkYXJrJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgZnJhbWVMaWdodFBhbGV0dGUgPSByZW5kZXJBY2NlbnRzKGxpZ2h0QWNjZW50VG9rZW5zLCAnTGlnaHQgTW9kZSBBY2NlbnRzJyk7XG4gICAgICAgIGNvbnN0IGZyYW1lRGFya1BhbGV0dGUgPSByZW5kZXJBY2NlbnRzKGRhcmtBY2NlbnRUb2tlbnMsICdEYXJrIE1vZGUgQWNjZW50cycpO1xuICAgICAgICBmcmFtZURhcmtQYWxldHRlLnkgPSBmcmFtZUxpZ2h0UGFsZXR0ZS5oZWlnaHQgKyA2NDtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiUkVOREVSX05FVVRSQUxTXCIpIHtcbiAgICAgICAgY29uc3QgbmV1dHJhbFRva2VucyA9IGdlbmVyYXRlTmV1dHJhbHMocGFyYW1zKTtcbiAgICAgICAgcmVuZGVyTmV1dHJhbHMobmV1dHJhbFRva2VucywgYEdsb2JhbCBOZXV0cmFsc2ApO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJMT0FERURcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luRGF0YSA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YSgnU0RTJyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShwbHVnaW5EYXRhKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2ZhaWxlZCB0byByZWFkIHBsdWdpbiBkYXRhJywgZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT0gJ1JFU0laRScpIHtcbiAgICAgICAgc3dpdGNoIChwYXJhbXMuYmFzZUZvbnRTaXplKSB7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKDUwMCwgODAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2xhcmdlJzoge1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSg1NjAsIDgwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuZnVuY3Rpb24gaW5pdGlhdGVJbXBvcnQocGFyYW1zKSB7XG4gICAgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnY29tcG9uZW50Q29sb3JzJyksXG4gICAgICAgIG1vZGVOYW1lOiBcIkRlZmF1bHRcIixcbiAgICAgICAgZGF0YTogZ2V0Q29tcG9uZW50Q29sb3JzKCksXG4gICAgICAgIHNvcnRGbjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm4oKVxuICAgIH0pO1xuICAgIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3RoZW1lQ29sb3JzJyksXG4gICAgICAgIG1vZGVOYW1lOiBcIkxpZ2h0IEJhc2VcIixcbiAgICAgICAgZGF0YTogZ2V0VGhlbWVDb2xvcnMoJ2xpZ2h0QmFzZScsIHBhcmFtcyksXG4gICAgICAgIHNvcnRGbjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm4oKVxuICAgIH0pO1xuICAgIC8vIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAvLyAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ2JyYW5kQ29sb3JzJyksXG4gICAgLy8gICAgIG1vZGVOYW1lOiB0b1RpdGxlQ2FzZShwYXJhbXMucHJpbWFyeSksXG4gICAgLy8gICAgIGRhdGE6IGdldEJyYW5kQ29sb3JzKHBhcmFtcy5wcmltYXJ5KSxcbiAgICAvLyAgICAgc29ydEZuOiBnZXRDb2xvclRva2Vuc1NvcnRGbigpXG4gICAgLy8gfSk7XG4gICAgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnc3BhY2luZycpLFxuICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UocGFyYW1zLnNwYWNpbmcpLFxuICAgICAgICBkYXRhOiBzcGFjaW5nVG9rZW5zW3BhcmFtcy5zcGFjaW5nXSxcbiAgICAgICAgc29ydEZuOiBnZXRTaXplVG9rZW5zU29ydEZuKCksXG4gICAgfSk7XG4gICAgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgncmFkaWknKSxcbiAgICAgICAgbW9kZU5hbWU6IHRvVGl0bGVDYXNlKHBhcmFtcy5yYWRpaSksXG4gICAgICAgIGRhdGE6IHJhZGlpVG9rZW5zW3BhcmFtcy5yYWRpaV0sXG4gICAgICAgIHNvcnRGbjogZ2V0U2l6ZVRva2Vuc1NvcnRGbigpLFxuICAgIH0pO1xuICAgIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ2ljb25TY2FsZScpLFxuICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UoXCJiYXNlXCIpLFxuICAgICAgICBkYXRhOiBzaXppbmdUb2tlbnMuYmFzZSxcbiAgICAgICAgc29ydEZuOiBnZXRTaXplVG9rZW5zU29ydEZuKCksXG4gICAgfSk7XG4gICAgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnb3BhY2l0eScpLFxuICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UoXCJkZWZhdWx0XCIpLFxuICAgICAgICBkYXRhOiBvcGFjaXR5VG9rZW5zLm9wYWNpdHksXG4gICAgICAgIHNvcnRGbjogZ2V0T3BhY2l0eVRva2Vuc1NvcnRGbigpLFxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVWYXJpYWJsZXNGb3JQbGF5Z3JvdW5kKGRhdGEsIGlzUGxheWdyb3VuZCA9IGZhbHNlKSB7XG4gICAgaWYgKGlzUGxheWdyb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICA7XG4gICAgY29uc3QgY29udHJhc3RSYXRpb3MgPSB7fTtcbiAgICBjb25zdCBwcmltYXJ5Q29sb3JIVUUgPSBkYXRhLnByaW1hcnk7XG4gICAgY29uc3Qgc2hhZGVzID0gZ2V0R2xvYmFsQWNjZW50KGRhdGFbcHJpbWFyeUNvbG9ySFVFXSwgZGF0YS5hY2NlbnRTYXR1cmF0aW9uLCBkYXRhLmFjY2VudE1pbkx1bWluYW5jZSwgZGF0YS5hY2NlbnRNaWRMdW1pbmFuY2UsIGRhdGEuYWNjZW50TWF4THVtaW5hbmNlKTtcbiAgICBPYmplY3QuZW50cmllcyhzaGFkZXMpLmZvckVhY2goKFtuYW1lLCB0b2tlbl0pID0+IHtcbiAgICAgICAgdG9rZW4uc2NvcGVzID0gW107XG4gICAgICAgIGxldCBjaHJvbWFDb2xvciA9IGNocm9tYSh0b2tlbi4kdmFsdWUpO1xuICAgICAgICBjb25zdCBjb250cmFzdDEgPSByb3VuZFR3b0RpZ2l0cyhjaHJvbWEuY29udHJhc3QoY2hyb21hLmhzbChbMCwgMCwgMV0pLCBjaHJvbWFDb2xvcikpO1xuICAgICAgICBjb25zdCBjb250cmFzdDIgPSByb3VuZFR3b0RpZ2l0cyhjaHJvbWEuY29udHJhc3QoY2hyb21hLmhzbChbMCwgMCwgMC4yMl0pLCBjaHJvbWFDb2xvcikpO1xuICAgICAgICBjb250cmFzdFJhdGlvc1tgX2FjY2VudF8ke25hbWV9X3ZzX2xpZ2h0YF0gPSB7XG4gICAgICAgICAgICBcIiR2YWx1ZVwiOiBjb250cmFzdDEudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwic2NvcGVzXCI6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnRyYXN0UmF0aW9zW2BfYWNjZW50XyR7bmFtZX1fdnNfZGFya2BdID0ge1xuICAgICAgICAgICAgXCIkdmFsdWVcIjogY29udHJhc3QyLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgIGNvbGxlY3Rpb25OYW1lOiBcIl9QbGF5Z3JvdW5kXCIsXG4gICAgICAgIG1vZGVOYW1lOiBcIkRlZmF1bHRcIixcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZsYXR0ZW5PYmplY3QoeyAnX2dsb2JhbC1hY2NlbnQnOiBzaGFkZXMgfSkpLCBjb250cmFzdFJhdGlvcyksIHsgJ19wcmltYXJ5LWNvbG9yLWh1ZSc6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBkYXRhW2RhdGEucHJpbWFyeV0udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0sICdfcHJpbWFyeS1jb2xvcic6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBkYXRhLnByaW1hcnksXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwic2NvcGVzXCI6IFtdXG4gICAgICAgICAgICB9LCAnX3N1Y2Nlc3MtY29sb3InOiB7XG4gICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogZGF0YS5zdWNjZXNzLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICAgICAgfSwgJ193YXJuaW5nLWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEud2FybmluZyxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0sICdfZGFuZ2VyLWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEuZGFuZ2VyLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICAgICAgfSwgJ19pbmZvLWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEuaW5mbyxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0gfSlcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGltcG9ydEFsbFRva2VucyhwYXJhbXMpIHtcbiAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoJ1NEUycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIGNvbnN0IGlzUGxheWdyb3VuZCA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YSgnU0RTUGxheWdyb3VuZCcpICE9PSAnJztcbiAgICBnZW5lcmF0ZVZhcmlhYmxlc0ZvclBsYXlncm91bmQocGFyYW1zLCBpc1BsYXlncm91bmQpO1xuICAgIGltcG9ydENvbG9yVGhlbWUocGFyYW1zKTtcbiAgICAvLyBpbXBvcnRWYXJpYWJsZXMoe1xuICAgIC8vICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnYnJhbmRDb2xvcnMnKSxcbiAgICAvLyAgICAgbW9kZU5hbWU6IHRvVGl0bGVDYXNlKHBhcmFtcy5wcmltYXJ5KSxcbiAgICAvLyAgICAgZGF0YTogZ2V0QnJhbmRDb2xvcnMocGFyYW1zLnByaW1hcnkpXG4gICAgLy8gfSk7XG4gICAgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ2NvbXBvbmVudENvbG9ycycpLFxuICAgICAgICBtb2RlTmFtZTogXCJEZWZhdWx0XCIsXG4gICAgICAgIGRhdGE6IGdldENvbXBvbmVudENvbG9ycygpXG4gICAgfSk7XG4gICAgaW1wb3J0U2l6ZVRva2Vucyh7XG4gICAgICAgIHR5cGU6ICdzcGFjaW5nJyxcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3NwYWNpbmcnKSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIGRlZmF1bHRNb2RlOiBwYXJhbXMuc3BhY2luZyxcbiAgICAgICAgZGVmYXVsdE9yZGVyOiBzcGFjaW5nU2l6ZU5hbWUsXG4gICAgICAgIHRva2Vuczogc3BhY2luZ1Rva2Vuc1xuICAgIH0pO1xuICAgIGltcG9ydFNpemVUb2tlbnMoe1xuICAgICAgICB0eXBlOiAncmFkaWknLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgncmFkaWknKSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIGRlZmF1bHRNb2RlOiBwYXJhbXMucmFkaWksXG4gICAgICAgIGRlZmF1bHRPcmRlcjogcmFkaWlTaXplTmFtZSxcbiAgICAgICAgdG9rZW5zOiByYWRpaVRva2Vuc1xuICAgIH0pO1xuICAgIGltcG9ydFNpemVUb2tlbnMoe1xuICAgICAgICB0eXBlOiAndHlwZVNjYWxlJyxcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6ICdUeXBlIFNjYWxlJyxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIGRlZmF1bHRNb2RlOiBwYXJhbXMuYmFzZUZvbnRTaXplLFxuICAgICAgICBkZWZhdWx0T3JkZXI6IHR5cG9ncmFwaHlTaXplTmFtZSxcbiAgICAgICAgdG9rZW5zOiB0eXBlc2NhbGVUb2tlbnMsXG4gICAgICAgIGlzU2luZ2xlTW9kZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIElDT05TIFNDQUxFXG4gICAgaW1wb3J0U2l6ZVRva2Vucyh7XG4gICAgICAgIHR5cGU6ICdpY29uU2NhbGUnLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnaWNvblNjYWxlJyksXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBkZWZhdWx0TW9kZTogJ2Jhc2UnLFxuICAgICAgICBkZWZhdWx0T3JkZXI6IGljb25TaXplTmFtZSxcbiAgICAgICAgdG9rZW5zOiBzaXppbmdUb2tlbnNcbiAgICB9KTtcbiAgICBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnb3BhY2l0eScpLFxuICAgICAgICBtb2RlTmFtZTogXCJEZWZhdWx0XCIsXG4gICAgICAgIGRhdGE6IG9wYWNpdHlUb2tlbnMub3BhY2l0eVxuICAgIH0pO1xuICAgIGdsb2JhbFRva2VucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsVG9rZW5zKSwgdHlwZXNjYWxlVG9rZW5zLmdldFR5cG9ncmFvaHlUb2tlbnMocGFyYW1zLmJhc2VGb250U2l6ZSwgcGFyYW1zLnR5cGVTY2FsZSkpO1xuICAgIGltcG9ydFRleHRTdHlsZXModHlwZXNjYWxlVG9rZW5zLmdldFR5cG9ncmFvaHlUb2tlbnMocGFyYW1zLmJhc2VGb250U2l6ZSwgcGFyYW1zLnR5cGVTY2FsZSkpO1xuICAgIGltcG9ydEVmZmVjdHMoKTtcbiAgICBmaWdtYS5ub3RpZnkoXCJGaWdtYSB2YXJpYWJsZXMgaGFzIGJlZW4gaW1wb3J0ZWRcIik7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJpbXBvcnRDb21wbGV0ZWRcIik7XG59XG5mdW5jdGlvbiBpbXBvcnRFZmZlY3RzKCkge1xuICAgIC8vIGltcG9ydCBlZmZlY3RzIGZvciBkZWZhdWx0IHRoZW1lIHdoaWNoIGlzIGxpZ2h0IG9uZVxuICAgIGltcG9ydEVmZmVjdFN0eWxlcyhlZmZlY3RzVG9rZW5zLmVsZXZhdGlvbik7XG4gICAgdXBkYXRlRWxldmF0aW9uQ29tcG9uZW50cyhlZmZlY3RzVG9rZW5zLmdldEVsZXZhdGlvblRva2VucygpKTtcbn1cbmZ1bmN0aW9uIGltcG9ydENvbG9yVGhlbWUocGFyYW1zKSB7XG4gICAgbGV0IHRoZW1lQ29sb3JzID0gZ2V0VGhlbWVDb2xvcnMoJ2xpZ2h0QmFzZScsIHBhcmFtcyk7XG4gICAgZ2xvYmFsVG9rZW5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldEdsb2JhbE5ldXRyYWxzKCkpLCBnZXRDb21wb25lbnRDb2xvcnMoKSksIHRoZW1lQ29sb3JzKTtcbiAgICBjb25zb2xlLmxvZygnSW1wb3J0aW5nIExpZ2h0IEJhc2UnLCB0aGVtZUNvbG9ycyk7XG4gICAgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3RoZW1lQ29sb3JzJyksXG4gICAgICAgIG1vZGVOYW1lOiBcIkxpZ2h0IEJhc2VcIixcbiAgICAgICAgZGF0YTogdGhlbWVDb2xvcnMsXG4gICAgICAgIHNvcnRGbjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm5cbiAgICB9KTtcbiAgICB0aGVtZUNvbG9ycyA9IGdldFRoZW1lQ29sb3JzKCdkYXJrQmFzZScsIHBhcmFtcyk7XG4gICAgZ2xvYmFsVG9rZW5zID0gT2JqZWN0LmFzc2lnbihnbG9iYWxUb2tlbnMsIHRoZW1lQ29sb3JzKTtcbiAgICBjb25zb2xlLmxvZygnSW1wb3J0aW5nIERhcmsgQmFzZScsIHRoZW1lQ29sb3JzKTtcbiAgICBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgbW9kZU5hbWU6IFwiRGFyayBCYXNlXCIsXG4gICAgICAgIGRhdGE6IHRoZW1lQ29sb3JzXG4gICAgfSk7XG4gICAgdGhlbWVDb2xvcnMgPSBnZXRUaGVtZUNvbG9ycygnZGFya0VsZXZhdGVkJywgcGFyYW1zKTtcbiAgICBnbG9iYWxUb2tlbnMgPSBPYmplY3QuYXNzaWduKGdsb2JhbFRva2VucywgdGhlbWVDb2xvcnMpO1xuICAgIGNvbnNvbGUubG9nKCdJbXBvcnRpbmcgRGFyayBFbGV2YXRlZCcsIHRoZW1lQ29sb3JzKTtcbiAgICBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgbW9kZU5hbWU6IFwiRGFyayBFbGV2YXRlZFwiLFxuICAgICAgICBkYXRhOiB0aGVtZUNvbG9yc1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaW1wb3J0U2l6ZVRva2VucyhkYXRhKSB7XG4gICAgY29uc3QgdG9rZW5zID0gZGF0YS50b2tlbnM7XG4gICAgY29uc3QgaXNTaW5nbGVNb2RlID0gZGF0YS5pc1NpbmdsZU1vZGUgfHwgZmFsc2U7XG4gICAgY29uc3Qgc2luZ2xlQ29sbGVjdGlvbiA9IGRhdGEucGFyYW1zLnNpbmdsZUNvbGxlY3Rpb247XG4gICAgY29uc3QgZGVmYXVsdE1vZGUgPSBkYXRhLmRlZmF1bHRNb2RlO1xuICAgIGNvbnN0IGRlZmF1bHRPcmRlciA9IGRhdGEuZGVmYXVsdE9yZGVyLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gZGVmYXVsdE1vZGUpO1xuICAgIGRlZmF1bHRPcmRlci5zcGxpY2UoMCwgMCwgZGVmYXVsdE1vZGUpO1xuICAgIGRlZmF1bHRPcmRlci5sZW5ndGggPSBpc1NpbmdsZU1vZGUgPyAxIDogZGVmYXVsdE9yZGVyLmxlbmd0aDtcbiAgICBkZWZhdWx0T3JkZXIuZm9yRWFjaCgobW9kZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogc2luZ2xlQ29sbGVjdGlvbiA/IFwiVUkgU2NhbGVcIiA6IGRhdGEuY29sbGVjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UobW9kZU5hbWUpLFxuICAgICAgICAgICAgbW9kZUluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGRhdGE6IHRva2Vuc1ttb2RlTmFtZV0sXG4gICAgICAgICAgICBpc1NpbmdsZU1vZGU6IGlzU2luZ2xlTW9kZVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHsgY29sbGVjdGlvbk5hbWUsIG1vZGVOYW1lLCBtb2RlSW5kZXggPSAtMSwgZGF0YSwgc29ydEZuID0gbnVsbCwgaXNTaW5nbGVNb2RlID0gZmFsc2UgfSkge1xuICAgIGxldCBtb2RlSWQ7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9uLCBpc05ldyB9ID0gZ2V0RmlnbWFDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgICBpZiAoaXNOZXcgfHwgaXNTaW5nbGVNb2RlKSB7XG4gICAgICAgIG1vZGVJZCA9IGNvbGxlY3Rpb24ubW9kZXNbMF0ubW9kZUlkO1xuICAgICAgICBjb2xsZWN0aW9uLnJlbmFtZU1vZGUobW9kZUlkLCBtb2RlTmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtb2RlID0gbW9kZUluZGV4IDwgMCA/IGNvbGxlY3Rpb24ubW9kZXMuZmluZChtb2RlID0+IG1vZGUubmFtZSA9PT0gbW9kZU5hbWUpIDogY29sbGVjdGlvbi5tb2Rlc1ttb2RlSW5kZXhdO1xuICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbW9kZUlkID0gY29sbGVjdGlvbi5hZGRNb2RlKG1vZGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiQ2Fubm90IGNyZWF0ZSBtb3JlIHRoYW4gb25lIG1vZGUuIElzIHlvdXIgZmlsZSB1bmRlciBQcm8gdGVhbSBvciBvcmcgcGxhbj9cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kZUlkID0gbW9kZS5tb2RlSWQ7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLnJlbmFtZU1vZGUobW9kZUlkLCBtb2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRyYW5zZm9ybWVkVG9rZW5zID0gT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCBvYmplY3RdKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgbmFtZToga2V5IH0sIG9iamVjdCk7XG4gICAgfSk7XG4gICAgbGV0IHNvcnRlZFRva2VucyA9IHRyYW5zZm9ybWVkVG9rZW5zO1xuICAgIGlmIChzb3J0Rm4gIT0gbnVsbCkge1xuICAgICAgICBzb3J0ZWRUb2tlbnMgPSB0cmFuc2Zvcm1lZFRva2Vucy5zb3J0KHNvcnRGbik7XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgICAvLyBjcmVhdGUgdmFyaWFibGVzIHN0cmFpZ2h0IGF3YXkgc28gdGhlcmUgaXMgYSB3YXkgdG8gbWFrZSBcbiAgICAgICAgLy8gcmVmZXJlbmNlcyAvIGFsaWFzZXMgd2l0aG91dCBhZGRpdGlvbmFsIHBhc3NcbiAgICAgICAgc29ydGVkVG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHJlc29sdmVWYXJpYWJsZVR5cGUodG9rZW4uJHR5cGUpO1xuICAgICAgICAgICAgc2V0RmlnbWFWYXJpYWJsZShjb2xsZWN0aW9uLCBtb2RlSWQsIHR5cGUsIHRva2VuLm5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9rZW5zOiBzb3J0ZWRUb2tlbnMsXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIG1vZGVJZCxcbiAgICAgICAgdHlwZTogZGF0YS4kdHlwZVxuICAgIH07XG59XG5mdW5jdGlvbiBpbXBvcnRWYXJpYWJsZXMoeyBjb2xsZWN0aW9uTmFtZSwgbW9kZU5hbWUsIG1vZGVJbmRleCA9IC0xLCBkYXRhLCBzb3J0Rm4gPSBudWxsLCBpc1NpbmdsZU1vZGUgPSBmYWxzZSB9KSB7XG4gICAgY29uc3QgeyB0b2tlbnMsIGNvbGxlY3Rpb24sIG1vZGVJZCwgdHlwZSB9ID0gZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoeyBjb2xsZWN0aW9uTmFtZSwgbW9kZU5hbWUsIG1vZGVJbmRleCwgZGF0YSwgc29ydEZuLCBpc1NpbmdsZU1vZGUgfSk7XG4gICAgcmV0dXJuIHRva2Vucy5tYXAoKHRva2VuKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzVG9rZW4oe1xuICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgIG1vZGVJZCxcbiAgICAgICAgICAgIHR5cGU6IHRva2VuLiR0eXBlLFxuICAgICAgICAgICAgdmFyaWFibGVOYW1lOiB0b2tlbi5uYW1lLFxuICAgICAgICAgICAgdG9rZW46IHRva2VuXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc1Rva2VuKHsgY29sbGVjdGlvbiwgbW9kZUlkLCB0eXBlLCB2YXJpYWJsZU5hbWUsIHRva2VuIH0pIHtcbiAgICB0eXBlID0gdHlwZSB8fCB0b2tlbi4kdHlwZTtcbiAgICAvLyBpZiBrZXkgaXMgYSBtZXRhIGZpZWxkLCBtb3ZlIG9uXG4gICAgaWYgKHZhcmlhYmxlTmFtZS5jaGFyQXQoMCkgPT09IFwiJFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRva2VuLiR2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgIGxldCBjb2xvclZhbHVlID0gcGFyc2VDb2xvclRva2VuKHRva2VuLCBnbG9iYWxUb2tlbnMpO1xuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZVZhciA9IGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyh0b2tlbi4kdmFsdWUudHJpbSgpKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VWYXIpIHtcbiAgICAgICAgICAgICAgICBjb2xvclZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlZBUklBQkxFX0FMSUFTXCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiByZWZlcmVuY2VWYXIuaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZXRGaWdtYVZhcmlhYmxlKGNvbGxlY3Rpb24sIG1vZGVJZCwgXCJDT0xPUlwiLCB2YXJpYWJsZU5hbWUsIGNvbG9yVmFsdWUsIHRva2VuLnNjb3BlcyB8fCBbJ0FMTF9TQ09QRVMnXSwgdG9rZW4uZGVzY3JpcHRpb24gfHwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRGaWdtYVZhcmlhYmxlKGNvbGxlY3Rpb24sIG1vZGVJZCwgXCJGTE9BVFwiLCB2YXJpYWJsZU5hbWUsIHBhcnNlSW50KHRva2VuLiR2YWx1ZSksIHRva2VuLnNjb3BlcywgdG9rZW4uZGVzY3JpcHRpb24gfHwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBzZXRGaWdtYVZhcmlhYmxlKGNvbGxlY3Rpb24sIG1vZGVJZCwgXCJTVFJJTkdcIiwgdmFyaWFibGVOYW1lLCBwYXJzZVJlZmVyZW5jZUdsb2JhbCh0b2tlbi4kdmFsdWUsIGdsb2JhbFRva2VucyksIHRva2VuLnNjb3BlcywgdG9rZW4uZGVzY3JpcHRpb24gfHwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1bnN1cHBvcnRlZCB0eXBlXCIsIHR5cGUsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdyZWN1cnNpb24gaW4gJywgdG9rZW4pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGV4cG9ydFRvSlNPTihjb2xvckZvcm1hdCkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVDb2xsZWN0aW9ucygpO1xuICAgIGNvbnN0IGZpbGVzID0gW107XG4gICAgY29sbGVjdGlvbnMuZm9yRWFjaCgoY29sbGVjdGlvbikgPT4gZmlsZXMucHVzaCguLi5leHBvcnRDb2xsZWN0aW9uKGNvbGxlY3Rpb24sIGNvbG9yRm9ybWF0KSkpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJFWFBPUlRfUkVTVUxUXCIsIGZpbGVzIH0pO1xufVxuZnVuY3Rpb24gZXhwb3J0Q29sbGVjdGlvbih7IG5hbWUsIG1vZGVzLCB2YXJpYWJsZUlkcyB9LCBjb2xvckZvcm1hdCkge1xuICAgIGNvbnN0IGZpbGVzID0gW107XG4gICAgbW9kZXMuZm9yRWFjaCgobW9kZSkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0geyBmaWxlTmFtZTogYCR7bmFtZX0uJHttb2RlLm5hbWV9LnRva2Vucy5qc29uYCwgYm9keToge30gfTtcbiAgICAgICAgdmFyaWFibGVJZHMuc29ydCgpLmZvckVhY2goKHZhcmlhYmxlSWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgcmVzb2x2ZWRUeXBlLCB2YWx1ZXNCeU1vZGUgfSA9IGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWQodmFyaWFibGVJZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzQnlNb2RlW21vZGUubW9kZUlkXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIFtcIkNPTE9SXCIsIFwiRkxPQVRcIl0uaW5jbHVkZXMocmVzb2x2ZWRUeXBlKSkge1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSBmaWxlLmJvZHk7XG4gICAgICAgICAgICAgICAgbmFtZS5zcGxpdChcIi9cIikuZm9yRWFjaCgoZ3JvdXBOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtncm91cE5hbWVdID0gb2JqW2dyb3VwTmFtZV0gfHwge307XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9ialtncm91cE5hbWVdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9iai4kdHlwZSA9IHJlc29sdmVkVHlwZSA9PT0gXCJDT0xPUlwiID8gXCJjb2xvclwiIDogXCJudW1iZXJcIjtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudHlwZSA9PT0gXCJWQVJJQUJMRV9BTElBU1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai4kdmFsdWUgPSBgeyR7ZmlnbWEudmFyaWFibGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VmFyaWFibGVCeUlkKHZhbHVlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWUucmVwbGFjZSgvXFwvL2csIFwiLlwiKX19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai4kdmFsdWUgPSByZXNvbHZlZFR5cGUgPT09IFwiQ09MT1JcIiA/IGNvbnZlcnRGaWdtYUNvbG9yVG9SZ2IodmFsdWUsIGNvbG9yRm9ybWF0KSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbGVzO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9