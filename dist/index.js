/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes
// } from "../../../util/helpers";

var _window$EBButtonGroup = window.EBButtonGroup,
  generateDimensionsAttributes = _window$EBButtonGroup.generateDimensionsAttributes,
  generateTypographyAttributes = _window$EBButtonGroup.generateTypographyAttributes,
  generateBackgroundAttributes = _window$EBButtonGroup.generateBackgroundAttributes,
  generateBorderShadowAttributes = _window$EBButtonGroup.generateBorderShadowAttributes,
  generateResponsiveRangeAttributes = _window$EBButtonGroup.generateResponsiveRangeAttributes;

var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  blockMeta: {
    type: "object"
  },
  preset: {
    type: "string",
    "default": "button-1"
  },
  contentPosition: {
    type: "string",
    "default": "center"
  },
  buttonWidth: {
    type: "number",
    "default": "auto"
  },
  buttonTextOne: {
    type: "string",
    "default": "Button One"
  },
  buttonTextTwo: {
    type: "string",
    "default": "Button Two"
  },
  textOneColor: {
    type: "string",
    "default": "#fff"
  },
  hoverTextOneColor: {
    type: "string"
  },
  buttonTwoColor: {
    type: "string",
    "default": "#309bff"
  },
  hoverButtonTwoColor: {
    type: "string",
    "default": "#2587e2"
  },
  textTwoColor: {
    type: "string",
    "default": "#fff"
  },
  hoverTextTwoColor: {
    type: "string"
  },
  buttonURLOne: {
    type: "string",
    "default": "#"
  },
  buttonURLTwo: {
    type: "string",
    "default": "#"
  },
  buttonTextAlign: {
    type: "string",
    "default": "center"
  },
  isHoverOne: {
    type: "boolean",
    "default": false
  },
  isHoverTwo: {
    type: "boolean",
    "default": false
  },
  innerButtonText: {
    type: "string",
    "default": "OR"
  },
  innerButtonColor: {
    type: "string",
    "default": "#fff"
  },
  innerButtonTextColor: {
    type: "string",
    "default": "#000"
  },
  innerButtonIcon: {
    type: "string",
    "default": "fas fa-arrows-alt-h"
  },
  showConnector: {
    type: "boolean",
    "default": true
  },
  connectorType: {
    type: "string",
    "default": "text"
  },
  borderType: {
    type: "string",
    "default": "normal"
  },
  buttonsColorType: {
    type: "string",
    "default": "normal"
  },
  buttonsWidthType: {
    type: "string",
    "default": "custom"
  },
  buttonOneNewWindow: {
    type: "boolean",
    "default": false
  },
  buttonTwoNewWindow: {
    type: "boolean",
    "default": false
  }
}, generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__))), generateDimensionsAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_MARGIN)), generateDimensionsAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_MARGIN)), generateDimensionsAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_PADDING, {
  top: 10,
  bottom: 10,
  right: 25,
  left: 25,
  isLinked: false
})), generateBorderShadowAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_ONE_BORDER_SHADOW, {
  bdrDefaults: {
    top: 2,
    bottom: 2,
    right: 2,
    left: 2
  },
  rdsDefaults: {
    top: 20,
    bottom: 0,
    right: 0,
    left: 20,
    isLinked: false
  }
  // noShadow: true,
  // noBorder: true,
})), generateBorderShadowAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_TWO_BORDER_SHADOW, {
  bdrDefaults: {
    top: 2,
    bottom: 2,
    right: 2,
    left: 2
  },
  rdsDefaults: {
    top: 0,
    bottom: 20,
    right: 20,
    left: 0,
    isLinked: false
  }
  // noShadow: true,
})), generateBackgroundAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_ONE_BG, {
  defaultFillColor: "#3074ff",
  defaultBgGradient: "linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)"
})), generateBackgroundAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_TWO_BG, {
  defaultFillColor: "#3074ff"
})), generateResponsiveRangeAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_WIDTH, {
  defaultRange: 200
})), generateResponsiveRangeAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_GAP, {
  defaultRange: 0
})), generateResponsiveRangeAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_CONNECTOR_SIZE, {
  defaultRange: 30
})), generateResponsiveRangeAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_CONNECTOR_ICON_SIZE, {
  defaultRange: 16
})), generateBackgroundAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_ONE_BACKGROUND, {
  noOverlay: true,
  noMainBgi: true,
  defaultFillColor: "#475467",
  defaultHovFillColor: "#101828",
  defaultBgGradient: "linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(233, 233, 233) 49%, rgb(244, 243, 243) 100%)"
})), generateBackgroundAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_TWO_BACKGROUND, {
  noOverlay: true,
  noMainBgi: true,
  defaultFillColor: "#98A2B3",
  defaultHovFillColor: "#101828",
  defaultBgGradient: "linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(233, 233, 233) 49%, rgb(244, 243, 243) 100%)"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUTTONS_CONNECTOR_ICON_SIZE: () => (/* binding */ BUTTONS_CONNECTOR_ICON_SIZE),
/* harmony export */   BUTTONS_CONNECTOR_SIZE: () => (/* binding */ BUTTONS_CONNECTOR_SIZE),
/* harmony export */   BUTTONS_GAP: () => (/* binding */ BUTTONS_GAP),
/* harmony export */   BUTTONS_MARGIN: () => (/* binding */ BUTTONS_MARGIN),
/* harmony export */   BUTTONS_PADDING: () => (/* binding */ BUTTONS_PADDING),
/* harmony export */   BUTTONS_WIDTH: () => (/* binding */ BUTTONS_WIDTH),
/* harmony export */   BUTTON_ONE_BACKGROUND: () => (/* binding */ BUTTON_ONE_BACKGROUND),
/* harmony export */   BUTTON_ONE_BG: () => (/* binding */ BUTTON_ONE_BG),
/* harmony export */   BUTTON_ONE_BORDER_SHADOW: () => (/* binding */ BUTTON_ONE_BORDER_SHADOW),
/* harmony export */   BUTTON_STYLES: () => (/* binding */ BUTTON_STYLES),
/* harmony export */   BUTTON_TWO_BACKGROUND: () => (/* binding */ BUTTON_TWO_BACKGROUND),
/* harmony export */   BUTTON_TWO_BG: () => (/* binding */ BUTTON_TWO_BG),
/* harmony export */   BUTTON_TWO_BORDER_SHADOW: () => (/* binding */ BUTTON_TWO_BORDER_SHADOW),
/* harmony export */   BUTTON_WIDTH_TYPE: () => (/* binding */ BUTTON_WIDTH_TYPE),
/* harmony export */   CONNECTOR_TYPE: () => (/* binding */ CONNECTOR_TYPE),
/* harmony export */   CONTENT_POSITION: () => (/* binding */ CONTENT_POSITION),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   TEXT_ALIGN: () => (/* binding */ TEXT_ALIGN),
/* harmony export */   UNIT_TYPES: () => (/* binding */ UNIT_TYPES),
/* harmony export */   WRAPPER_MARGIN: () => (/* binding */ WRAPPER_MARGIN)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



// the consts defined here should be unique from one another
var WRAPPER_MARGIN = "wrpMargin";
var BUTTONS_MARGIN = "buttonsMargin";
var BUTTONS_PADDING = "buttonsPadding";
var BUTTON_ONE_BACKGROUND = "Btn1Bg";
var BUTTON_TWO_BACKGROUND = "Btn2Bg";
var BUTTON_ONE_BORDER_SHADOW = "buttonOneBorderShadow";
var BUTTON_TWO_BORDER_SHADOW = "buttonTwoBorderShadow";
var BUTTON_ONE_BG = "button1Bg";
var BUTTON_TWO_BG = "button2Bg";
var BUTTONS_WIDTH = "buttonsWidth";
var BUTTONS_GAP = "buttonsGap";
var BUTTONS_CONNECTOR_SIZE = "buttonsConnectorSize";
var BUTTONS_CONNECTOR_ICON_SIZE = "buttonsConnectorIconSize";
var BUTTON_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill", "essential-blocks"),
  value: "fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outline", "essential-blocks"),
  value: "outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text", "essential-blocks"),
  value: "text"
}];
var UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];
var NORMAL_HOVER = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
var BUTTON_WIDTH_TYPE = [{
  label: "Custom Width",
  value: "custom"
}, {
  label: "Auto",
  value: "auto"
}];
var CONNECTOR_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text", "essential-blocks"),
  value: "text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon", "essential-blocks"),
  value: "icon"
}];
var PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 1", "essential-blocks"),
  value: "preset-1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 2", "essential-blocks"),
  value: "preset-2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 3", "essential-blocks"),
  value: "preset-3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 4", "essential-blocks"),
  value: "preset-4"
}];
var TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "right"
}];
var CONTENT_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "flex-end"
}];

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUTTONS_CONNECTOR_TYPOGRAPHY: () => (/* binding */ BUTTONS_CONNECTOR_TYPOGRAPHY),
/* harmony export */   BUTTONS_TYPOGRAPHY: () => (/* binding */ BUTTONS_TYPOGRAPHY)
/* harmony export */ });
// the consts defined here should be unique from one another
var BUTTONS_TYPOGRAPHY = "button";
var BUTTONS_CONNECTOR_TYPOGRAPHY = "button_connector";

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * WordPress dependencies
 */


var deprecated = [{
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var blockId = attributes.blockId,
      preset = attributes.preset,
      buttonTextOne = attributes.buttonTextOne,
      buttonTextTwo = attributes.buttonTextTwo,
      buttonURLOne = attributes.buttonURLOne,
      buttonURLTwo = attributes.buttonURLTwo,
      innerButtonText = attributes.innerButtonText,
      innerButtonIcon = attributes.innerButtonIcon,
      showConnector = attributes.showConnector,
      connectorType = attributes.connectorType,
      classHook = attributes.classHook,
      buttonOneNewWindow = attributes.buttonOneNewWindow,
      buttonTwoNewWindow = attributes.buttonTwoNewWindow;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-button-group-wrapper ".concat(blockId, " ").concat(preset),
      "data-id": blockId
    }, /*#__PURE__*/React.createElement("a", _extends({
      className: "eb-button-parent eb-button-one",
      href: buttonURLOne
    }, buttonOneNewWindow && {
      target: "_blank"
    }, {
      rel: "noopener"
    }), /*#__PURE__*/React.createElement("div", {
      className: "eb-button-text eb-button-one-text"
    }, buttonTextOne)), showConnector && /*#__PURE__*/React.createElement("div", {
      className: "eb-button-group__midldeInner"
    }, connectorType === "icon" && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(EBDisplayIcon, {
      icon: innerButtonIcon
    })), connectorType === "text" && /*#__PURE__*/React.createElement("span", null, innerButtonText)), /*#__PURE__*/React.createElement("a", _extends({
      className: "eb-button-parent eb-button-two",
      href: buttonURLTwo
    }, buttonTwoNewWindow && {
      target: "_blank"
    }, {
      rel: "noopener"
    }), /*#__PURE__*/React.createElement("div", {
      className: "eb-button-text eb-button-two-text"
    }, buttonTextTwo)))));
  }
}, {
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]),
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var blockId = attributes.blockId,
      preset = attributes.preset,
      buttonTextOne = attributes.buttonTextOne,
      buttonTextTwo = attributes.buttonTextTwo,
      buttonURLOne = attributes.buttonURLOne,
      buttonURLTwo = attributes.buttonURLTwo,
      innerButtonText = attributes.innerButtonText,
      innerButtonIcon = attributes.innerButtonIcon,
      showConnector = attributes.showConnector,
      connectorType = attributes.connectorType,
      classHook = attributes.classHook,
      buttonOneNewWindow = attributes.buttonOneNewWindow,
      buttonTwoNewWindow = attributes.buttonTwoNewWindow;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-button-group-wrapper ".concat(blockId, " ").concat(preset),
      "data-id": blockId
    }, /*#__PURE__*/React.createElement("a", _extends({
      className: "eb-button-parent eb-button-one",
      href: buttonURLOne
    }, buttonOneNewWindow && {
      target: "_blank"
    }, {
      rel: "noopener"
    }), /*#__PURE__*/React.createElement("div", {
      className: "eb-button-text eb-button-one-text"
    }, buttonTextOne)), showConnector && /*#__PURE__*/React.createElement("div", {
      className: "eb-button-group__midldeInner"
    }, connectorType === "icon" && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "".concat(innerButtonIcon ? innerButtonIcon : "fas fa-arrows-alt-h")
    })), connectorType === "text" && /*#__PURE__*/React.createElement("span", null, innerButtonText)), /*#__PURE__*/React.createElement("a", _extends({
      className: "eb-button-parent eb-button-two",
      href: buttonURLTwo
    }, buttonTwoNewWindow && {
      target: "_blank"
    }, {
      rel: "noopener"
    }), /*#__PURE__*/React.createElement("div", {
      className: "eb-button-text eb-button-two-text"
    }, buttonTextTwo)))));
  }
}, {
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]),
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var blockId = attributes.blockId,
      preset = attributes.preset,
      buttonTextOne = attributes.buttonTextOne,
      buttonTextTwo = attributes.buttonTextTwo,
      buttonURLOne = attributes.buttonURLOne,
      buttonURLTwo = attributes.buttonURLTwo,
      innerButtonText = attributes.innerButtonText,
      innerButtonIcon = attributes.innerButtonIcon,
      showConnector = attributes.showConnector,
      connectorType = attributes.connectorType;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-button-group-wrapper ".concat(blockId, " ").concat(preset),
      "data-id": blockId
    }, /*#__PURE__*/React.createElement("a", {
      className: "eb-button-parent eb-button-one",
      href: buttonURLOne
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-button-text eb-button-one-text"
    }, buttonTextOne)), showConnector && /*#__PURE__*/React.createElement("div", {
      className: "eb-button-group__midldeInner"
    }, connectorType === 'icon' && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "".concat(innerButtonIcon ? innerButtonIcon : "fas fa-arrows-alt-h")
    })), connectorType === 'text' && /*#__PURE__*/React.createElement("span", null, innerButtonText)), /*#__PURE__*/React.createElement("a", {
      className: "eb-button-parent eb-button-two",
      href: buttonURLTwo
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-button-text eb-button-two-text"
    }, buttonTextTwo))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/style.js");
/**
 * WordPress dependencies
 */





/**
 * Internal depencencies
 */



var _window$EBButtonGroup = window.EBButtonGroup,
  duplicateBlockIdFix = _window$EBButtonGroup.duplicateBlockIdFix,
  DynamicInputValueHandler = _window$EBButtonGroup.DynamicInputValueHandler,
  EBDisplayIcon = _window$EBButtonGroup.EBDisplayIcon;
function Edit(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    className = props.className,
    clientId = props.clientId,
    isSelected = props.isSelected,
    name = props.name;
  var blockId = attributes.blockId,
    preset = attributes.preset,
    buttonTextOne = attributes.buttonTextOne,
    buttonTextTwo = attributes.buttonTextTwo,
    innerButtonText = attributes.innerButtonText,
    innerButtonIcon = attributes.innerButtonIcon,
    showConnector = attributes.showConnector,
    connectorType = attributes.connectorType,
    classHook = attributes.classHook;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var BLOCK_PREFIX = "eb-button-group";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select,
      clientId: clientId
    });
  }, []);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, "eb-guten-block-main-parent-wrapper")
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], props), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["default"], props), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-button-group-wrapper ".concat(blockId, " ").concat(preset),
    "data-id": blockId
  }, /*#__PURE__*/React.createElement("a", {
    className: "eb-button-parent eb-button-one"
    // style={buttonStyleOne}
    ,
    onMouseEnter: function onMouseEnter() {
      return setAttributes({
        isHoverOne: true
      });
    },
    onMouseLeave: function onMouseLeave() {
      return setAttributes({
        isHoverOne: false
      });
    }
  }, /*#__PURE__*/React.createElement(DynamicInputValueHandler
  // style={textStylesOne}
  , {
    className: "eb-button-text eb-button-one-text",
    placeholder: "Add Text..",
    value: buttonTextOne,
    onChange: function onChange(newText) {
      return setAttributes({
        buttonTextOne: newText
      });
    },
    allowedFormats: ["core/bold", "core/italic", "core/link", "core/strikethrough", "core/underline", "core/text-color"]
  })), showConnector && /*#__PURE__*/React.createElement("div", {
    className: "eb-button-group__midldeInner"
    // style={buttonMiddleInnerStyles}
  }, connectorType === "icon" && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(EBDisplayIcon, {
    icon: innerButtonIcon
  })), connectorType === "text" && /*#__PURE__*/React.createElement("span", null, innerButtonText)), /*#__PURE__*/React.createElement("a", {
    className: "eb-button-parent eb-button-two"
    // style={buttonStyleTwo}
    ,
    onMouseEnter: function onMouseEnter() {
      return setAttributes({
        isHoverTwo: true
      });
    },
    onMouseLeave: function onMouseLeave() {
      return setAttributes({
        isHoverTwo: false
      });
    }
  }, /*#__PURE__*/React.createElement(DynamicInputValueHandler
  // style={textStylesTwo}
  , {
    className: "eb-button-text eb-button-two-text",
    placeholder: "Add Text..",
    value: buttonTextTwo,
    onChange: function onChange(newText) {
      return setAttributes({
        buttonTextTwo: newText
      });
    },
    allowedFormats: ["core/bold", "core/italic", "core/link", "core/strikethrough", "core/underline", "core/text-color"]
  }))))));
}

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Example = {
  attributes: {
    showConnector: "true",
    buttonOneBorderShadowRds_Top: 20,
    buttonOneBorderShadowRds_Bottom: 0,
    buttonOneBorderShadowRds_Left: 20,
    buttonOneBorderShadowRds_Right: 0,
    buttonTwoBorderShadowRds_Top: 0,
    buttonTwoBorderShadowRds_Bottom: 20,
    buttonTwoBorderShadowRds_Left: 0,
    buttonTwoBorderShadowRds_Right: 20,
    buttonsGapRange: 0
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DualButtonIcon: () => (/* binding */ DualButtonIcon)
/* harmony export */ });
var DualButtonIcon = function DualButtonIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "66",
    height: "70",
    fill: "none",
    viewBox: "0 0 66 70"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "#6C3BFF",
    clipPath: "url(#clip0_2_22640)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M33.3 22.4H4.7C2.1 22.4 0 24.6 0 27v14.3c0 2.6 2.2 4.6 4.6 4.6H33c2.6 0 4.6-2.2 4.6-4.6V27c.3-2.6-1.9-4.6-4.3-4.6zm1.8 18.9c0 1.2-1 2-2 2H4.7c-1.2 0-2-1-2-2V27c0-1.2 1-2 2-2h28.4c1.2 0 2 1 2 2v14.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M61.7 22.4H39.8c-2.6 0-4.7 2.2-4.7 4.6v14.3c0 2.6 2.2 4.6 4.6 4.6h21.7c2.6 0 4.6-2.2 4.6-4.6V27c.3-2.6-1.9-4.6-4.3-4.6zm1.8 18.9c0 1.2-1 2-2 2H39.8c-1.2 0-2-1-2-2V27c0-1.2 1-2 2-2h21.7c1.2 0 2 1 2 2v14.3zM25.6 35.8H11.8c-.7 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4h13.8c.7 0 1.4.6 1.4 1.4-.1.8-.7 1.4-1.4 1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M54.5 35.5H44.3c-.7 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4h10.2c.7 0 1.4.6 1.4 1.4-.1.8-.7 1.4-1.4 1.4z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_2_22640"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0H66V70H0z"
  }))));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/**
 * WordPress dependeincies
 */


/**
 * Internal dependencies
 */








var _EBButtonGroup = EBButtonGroup,
  ebConditionalRegisterBlockType = _EBButtonGroup.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("buttons", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("grouped button", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Group", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("dual", "essential-blocks")],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_7__.DualButtonIcon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_5__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/**
 * WordPress dependencies
 */




/**
 * Internal depencencies
 */




var _window$EBButtonGroup = window.EBButtonGroup,
  ColorControl = _window$EBButtonGroup.ColorControl,
  ResponsiveDimensionsControl = _window$EBButtonGroup.ResponsiveDimensionsControl,
  TypographyDropdown = _window$EBButtonGroup.TypographyDropdown,
  BorderShadowControl = _window$EBButtonGroup.BorderShadowControl,
  ResponsiveRangeController = _window$EBButtonGroup.ResponsiveRangeController,
  BackgroundControl = _window$EBButtonGroup.BackgroundControl,
  AdvancedControls = _window$EBButtonGroup.AdvancedControls,
  DynamicInputControl = _window$EBButtonGroup.DynamicInputControl,
  EBIconPicker = _window$EBButtonGroup.EBIconPicker;
function Inspector(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  var resOption = attributes.resOption,
    preset = attributes.preset,
    contentPosition = attributes.contentPosition,
    textOneColor = attributes.textOneColor,
    hoverTextOneColor = attributes.hoverTextOneColor,
    textTwoColor = attributes.textTwoColor,
    hoverTextTwoColor = attributes.hoverTextTwoColor,
    buttonTextOne = attributes.buttonTextOne,
    buttonURLOne = attributes.buttonURLOne,
    buttonTextTwo = attributes.buttonTextTwo,
    buttonURLTwo = attributes.buttonURLTwo,
    innerButtonText = attributes.innerButtonText,
    innerButtonColor = attributes.innerButtonColor,
    innerButtonTextColor = attributes.innerButtonTextColor,
    innerButtonIcon = attributes.innerButtonIcon,
    showConnector = attributes.showConnector,
    connectorType = attributes.connectorType,
    buttonsColorType = attributes.buttonsColorType,
    buttonTextAlign = attributes.buttonTextAlign,
    buttonsWidthType = attributes.buttonsWidthType,
    buttonOneNewWindow = attributes.buttonOneNewWindow,
    buttonTwoNewWindow = attributes.buttonTwoNewWindow;
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  var changePreset = function changePreset(selected) {
    setAttributes({
      preset: selected
    });
    switch (selected) {
      case "preset-1":
        setAttributes({
          showConnector: true,
          buttonOneBorderShadowRds_Top: "20",
          buttonOneBorderShadowRds_Bottom: "0",
          buttonOneBorderShadowRds_Left: "20",
          buttonOneBorderShadowRds_Right: "0",
          buttonTwoBorderShadowRds_Top: "0",
          buttonTwoBorderShadowRds_Bottom: "20",
          buttonTwoBorderShadowRds_Left: "0",
          buttonTwoBorderShadowRds_Right: "20",
          buttonsGapRange: 0
        });
        break;
      case "preset-2":
        setAttributes({
          showConnector: false,
          buttonOneBorderShadowRds_Top: "30",
          buttonOneBorderShadowRds_Bottom: "30",
          buttonOneBorderShadowRds_Left: "30",
          buttonOneBorderShadowRds_Right: "30",
          buttonTwoBorderShadowRds_Top: "30",
          buttonTwoBorderShadowRds_Bottom: "30",
          buttonTwoBorderShadowRds_Left: "30",
          buttonTwoBorderShadowRds_Right: "30",
          buttonsGapRange: 20
        });
        break;
      case "preset-3":
        setAttributes({
          showConnector: false,
          buttonOneBorderShadowRds_Top: "0",
          buttonOneBorderShadowRds_Bottom: "0",
          buttonOneBorderShadowRds_Left: "15",
          buttonOneBorderShadowRds_Right: "15",
          buttonTwoBorderShadowRds_Top: "15",
          buttonTwoBorderShadowRds_Bottom: "15",
          buttonTwoBorderShadowRds_Left: "0",
          buttonTwoBorderShadowRds_Right: "0",
          buttonsGapRange: 20
        });
        break;
      case "preset-4":
        setAttributes({
          showConnector: false,
          buttonOneBorderShadowRds_Top: "30",
          buttonOneBorderShadowRds_Bottom: "30",
          buttonOneBorderShadowRds_Left: "30",
          buttonOneBorderShadowRds_Right: "30",
          buttonTwoBorderShadowRds_Top: "30",
          buttonTwoBorderShadowRds_Bottom: "30",
          buttonTwoBorderShadowRds_Left: "30",
          buttonTwoBorderShadowRds_Right: "30",
          buttonsGapRange: 10
        });
        break;
      default:
        return false;
    }
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab"
    // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "essential-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset Designs", "essential-blocks"),
      value: preset,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.PRESETS,
      onChange: function onChange(selected) {
        return changePreset(selected);
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "essential-blocks"),
      id: "eb-button-group-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      id: "eb-button-group-alignment"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONTENT_POSITION.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: index,
        isPrimary: contentPosition === item.value,
        isSecondary: contentPosition !== item.value,
        onClick: function onClick() {
          return setAttributes({
            contentPosition: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(DynamicInputControl, {
      label: "Button One Text",
      attrName: "buttonTextOne",
      inputValue: buttonTextOne,
      setAttributes: setAttributes,
      onChange: function onChange(text) {
        return setAttributes({
          buttonTextOne: text
        });
      }
    }), /*#__PURE__*/React.createElement(DynamicInputControl, {
      label: "Button One Link",
      attrName: "buttonURLOne",
      inputValue: buttonURLOne,
      setAttributes: setAttributes,
      onChange: function onChange(text) {
        return setAttributes({
          buttonURLOne: text
        });
      }
    }), buttonURLOne && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open in New Tab", "essential-blocks"),
      checked: buttonOneNewWindow,
      onChange: function onChange() {
        return setAttributes({
          buttonOneNewWindow: !buttonOneNewWindow
        });
      }
    }), /*#__PURE__*/React.createElement(DynamicInputControl, {
      label: "Button Two Text",
      attrName: "buttonTextTwo",
      inputValue: buttonTextTwo,
      setAttributes: setAttributes,
      onChange: function onChange(text) {
        return setAttributes({
          buttonTextTwo: text
        });
      }
    }), /*#__PURE__*/React.createElement(DynamicInputControl, {
      label: "Button Two Link",
      attrName: "buttonURLTwo",
      inputValue: buttonURLTwo,
      setAttributes: setAttributes,
      onChange: function onChange(text) {
        return setAttributes({
          buttonURLTwo: text
        });
      }
    }), buttonURLTwo && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open in New Tab", "essential-blocks"),
      checked: buttonTwoNewWindow,
      onChange: function onChange() {
        return setAttributes({
          buttonTwoNewWindow: !buttonTwoNewWindow
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buttons", "essential-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Width Type", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: buttonsWidthType,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTON_WIDTH_TYPE,
      onChange: function onChange(value) {
        setAttributes({
          buttonsWidthType: value
        });
      }
    })), buttonsWidthType === "custom" && /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buttons Width", "essential-blocks"),
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTONS_WIDTH,
      resRequiredProps: resRequiredProps,
      units: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES,
      min: 0,
      max: 500,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buttons Gap", "essential-blocks"),
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTONS_GAP,
      resRequiredProps: resRequiredProps,
      units: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES,
      min: 0,
      max: 100,
      step: 1
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Align", "essential-blocks"),
      id: "eb-button-group-text-align"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      id: "eb-button-group-text-align"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TEXT_ALIGN.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: index,
        isPrimary: buttonTextAlign === item.value,
        isSecondary: buttonTextAlign !== item.value,
        onClick: function onClick() {
          return setAttributes({
            buttonTextAlign: item.value
          });
        }
      }, item.label);
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Connector", "essential-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Connector?"),
      checked: showConnector,
      onChange: function onChange() {
        setAttributes({
          showConnector: !showConnector
        });
      }
    }), showConnector && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Connector Type", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      id: "eb-button-group-connector-type"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONNECTOR_TYPE.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: index,
        isPrimary: connectorType === item.value,
        isSecondary: connectorType !== item.value,
        onClick: function onClick() {
          return setAttributes({
            connectorType: item.value
          });
        }
      }, item.label);
    }))), connectorType === "icon" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Settings", "essential-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(EBIconPicker, {
      value: innerButtonIcon,
      onChange: function onChange(innerButtonIcon) {
        return setAttributes({
          innerButtonIcon: innerButtonIcon
        });
      },
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon", "essential-blocks")
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Size", "essential-blocks"),
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTONS_CONNECTOR_ICON_SIZE,
      resRequiredProps: resRequiredProps,
      units: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES,
      min: 0,
      max: 100,
      step: 1
    })), connectorType === "text" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text", "essential-blocks"),
      value: innerButtonText,
      onChange: function onChange(text) {
        return setAttributes({
          innerButtonText: text
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Connector Size", "essential-blocks"),
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTONS_CONNECTOR_SIZE,
      resRequiredProps: resRequiredProps,
      units: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES,
      min: 0,
      max: 100,
      step: 1
    })))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buttons", "essential-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "essential-blocks"),
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__.BUTTONS_TYPOGRAPHY,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button One Background", "essential-blocks"))), /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTON_ONE_BACKGROUND,
      resRequiredProps: resRequiredProps,
      noOverlay: true,
      noMainBgi: true
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Two Background", "essential-blocks"))), /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTON_TWO_BACKGROUND,
      resRequiredProps: resRequiredProps,
      noOverlay: true,
      noMainBgi: true
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "essential-blocks"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "eb-inspector-btn-group"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.NORMAL_HOVER.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: index,
        isPrimary: buttonsColorType === item.value,
        isSecondary: buttonsColorType !== item.value,
        onClick: function onClick() {
          return setAttributes({
            buttonsColorType: item.value
          });
        }
      }, item.label);
    })), buttonsColorType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button One", "essential-blocks"),
      color: textOneColor,
      onChange: function onChange(textOneColor) {
        return setAttributes({
          textOneColor: textOneColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Two", "essential-blocks"),
      color: textTwoColor,
      onChange: function onChange(textTwoColor) {
        return setAttributes({
          textTwoColor: textTwoColor
        });
      }
    })), buttonsColorType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button One Hover", "essential-blocks"),
      color: hoverTextOneColor,
      onChange: function onChange(hoverTextOneColor) {
        return setAttributes({
          hoverTextOneColor: hoverTextOneColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Two Hover", "essential-blocks"),
      color: hoverTextTwoColor,
      onChange: function onChange(hoverTextTwoColor) {
        return setAttributes({
          hoverTextTwoColor: hoverTextTwoColor
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      className: "eb-subpanel",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button One Border", "essential-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTON_ONE_BORDER_SHADOW,
      resRequiredProps: resRequiredProps,
      noShadow: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      className: "eb-subpanel",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Two Border", "essential-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTON_TWO_BORDER_SHADOW,
      resRequiredProps: resRequiredProps,
      noShadow: true
    })), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BUTTONS_PADDING,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Connector", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "essential-blocks"),
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__.BUTTONS_CONNECTOR_TYPOGRAPHY,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "essential-blocks"),
      color: innerButtonColor,
      onChange: function onChange(innerButtonColor) {
        return setAttributes({
          innerButtonColor: innerButtonColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text/ Icon Color"),
      color: innerButtonTextColor,
      onChange: function onChange(innerButtonTextColor) {
        return setAttributes({
          innerButtonTextColor: innerButtonTextColor
        });
      }
    }))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.WRAPPER_MARGIN,
      baseLabel: "Margin"
    })), /*#__PURE__*/React.createElement(AdvancedControls, {
      attributes: attributes,
      setAttributes: setAttributes
    })));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var EBDisplayIcon = window.EBButtonGroup.EBDisplayIcon;
var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
    preset = attributes.preset,
    buttonTextOne = attributes.buttonTextOne,
    buttonTextTwo = attributes.buttonTextTwo,
    buttonURLOne = attributes.buttonURLOne,
    buttonURLTwo = attributes.buttonURLTwo,
    innerButtonText = attributes.innerButtonText,
    innerButtonIcon = attributes.innerButtonIcon,
    showConnector = attributes.showConnector,
    connectorType = attributes.connectorType,
    classHook = attributes.classHook,
    buttonOneNewWindow = attributes.buttonOneNewWindow,
    buttonTwoNewWindow = attributes.buttonTwoNewWindow;
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-button-group-wrapper ".concat(blockId, " ").concat(preset),
    "data-id": blockId
  }, /*#__PURE__*/React.createElement("a", _extends({
    className: "eb-button-parent eb-button-one",
    href: buttonURLOne === '#' ? '' : buttonURLOne
  }, buttonOneNewWindow && {
    target: "_blank"
  }, {
    rel: "noopener"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eb-button-text eb-button-one-text"
  }, buttonTextOne)), showConnector && /*#__PURE__*/React.createElement("div", {
    className: "eb-button-group__midldeInner"
  }, connectorType === "icon" && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(EBDisplayIcon, {
    icon: innerButtonIcon
  })), connectorType === "text" && /*#__PURE__*/React.createElement("span", null, innerButtonText)), /*#__PURE__*/React.createElement("a", _extends({
    className: "eb-button-parent eb-button-two",
    href: buttonURLTwo === '#' ? '' : buttonURLTwo
  }, buttonTwoNewWindow && {
    target: "_blank"
  }, {
    rel: "noopener"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eb-button-text eb-button-two-text"
  }, buttonTextTwo)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");


var _window$EBButtonGroup = window.EBButtonGroup,
  softMinifyCssStrings = _window$EBButtonGroup.softMinifyCssStrings,
  generateTypographyStyles = _window$EBButtonGroup.generateTypographyStyles,
  generateDimensionsControlStyles = _window$EBButtonGroup.generateDimensionsControlStyles,
  generateBorderShadowStyles = _window$EBButtonGroup.generateBorderShadowStyles,
  generateResponsiveRangeStyles = _window$EBButtonGroup.generateResponsiveRangeStyles,
  generateBackgroundControlStyles = _window$EBButtonGroup.generateBackgroundControlStyles,
  StyleComponent = _window$EBButtonGroup.StyleComponent;
function Style(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    name = props.name;
  var blockId = attributes.blockId,
    blockMeta = attributes.blockMeta,
    resOption = attributes.resOption,
    preset = attributes.preset,
    contentPosition = attributes.contentPosition,
    buttonTextOne = attributes.buttonTextOne,
    buttonTextTwo = attributes.buttonTextTwo,
    textOneColor = attributes.textOneColor,
    hoverTextOneColor = attributes.hoverTextOneColor,
    textTwoColor = attributes.textTwoColor,
    hoverTextTwoColor = attributes.hoverTextTwoColor,
    innerButtonText = attributes.innerButtonText,
    innerButtonColor = attributes.innerButtonColor,
    innerButtonTextColor = attributes.innerButtonTextColor,
    innerButtonIcon = attributes.innerButtonIcon,
    showConnector = attributes.showConnector,
    connectorType = attributes.connectorType,
    buttonTextAlign = attributes.buttonTextAlign,
    classHook = attributes.classHook,
    buttonsWidthType = attributes.buttonsWidthType;

  //
  // CSS/styling Codes Starts from Here

  var _generateTypographySt = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__.BUTTONS_TYPOGRAPHY,
      defaultFontSize: 16
    }),
    buttonsTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
    buttonsTypoStylesTab = _generateTypographySt.typoStylesTab,
    buttonsTypoStylesMobile = _generateTypographySt.typoStylesMobile;
  var _generateTypographySt2 = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__.BUTTONS_CONNECTOR_TYPOGRAPHY,
      defaultFontSize: 14
    }),
    connectorTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
    connectorTypoStylesTab = _generateTypographySt2.typoStylesTab,
    connectorTypoStylesMobile = _generateTypographySt2.typoStylesMobile;
  var _generateDimensionsCo = generateDimensionsControlStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_MARGIN,
      styleFor: "margin",
      attributes: attributes
    }),
    wrapperMarginStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
    wrapperMarginStylesTab = _generateDimensionsCo.dimensionStylesTab,
    wrapperMarginStylesMobile = _generateDimensionsCo.dimensionStylesMobile;
  var _generateDimensionsCo2 = generateDimensionsControlStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_PADDING,
      styleFor: "padding",
      attributes: attributes
    }),
    buttonsPaddingStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
    buttonsPaddingStylesTab = _generateDimensionsCo2.dimensionStylesTab,
    buttonsPaddingStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;
  var _generateBorderShadow = generateBorderShadowStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_ONE_BORDER_SHADOW,
      attributes: attributes,
      noShadow: true
    }),
    buttonOneBDShadowDesktop = _generateBorderShadow.styesDesktop,
    buttonOneBDShadowTab = _generateBorderShadow.styesTab,
    buttonOneBDShadowMobile = _generateBorderShadow.styesMobile,
    buttonOneBDShadowHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
    buttonOneBDShadowHoverTab = _generateBorderShadow.stylesHoverTab,
    buttonOneBDShadowHoverMobile = _generateBorderShadow.stylesHoverMobile,
    buttonOneBDShadowtransitionStyle = _generateBorderShadow.transitionStyle;
  var _generateBorderShadow2 = generateBorderShadowStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_TWO_BORDER_SHADOW,
      attributes: attributes,
      noShadow: true
    }),
    buttonTwoBDShadowDesktop = _generateBorderShadow2.styesDesktop,
    buttonTwoBDShadowTab = _generateBorderShadow2.styesTab,
    buttonTwoBDShadowMobile = _generateBorderShadow2.styesMobile,
    buttonTwoBDShadowHoverDesktop = _generateBorderShadow2.stylesHoverDesktop,
    buttonTwoBDShadowHoverTab = _generateBorderShadow2.stylesHoverTab,
    buttonTwoBDShadowHoverMobile = _generateBorderShadow2.stylesHoverMobile,
    buttonTwoBDShadowtransitionStyle = _generateBorderShadow2.transitionStyle;

  // responsive range controller
  var _generateResponsiveRa = generateResponsiveRangeStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_WIDTH,
      property: "width",
      attributes: attributes
    }),
    buttonWidthStyleDesktop = _generateResponsiveRa.rangeStylesDesktop,
    buttonWidthStyleTab = _generateResponsiveRa.rangeStylesTab,
    buttonWidthStyleMobile = _generateResponsiveRa.rangeStylesMobile;
  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_GAP,
      property: "margin",
      attributes: attributes
    }),
    buttonGapDesktop = _generateResponsiveRa2.rangeStylesDesktop,
    buttonGapTab = _generateResponsiveRa2.rangeStylesTab,
    buttonGapMobile = _generateResponsiveRa2.rangeStylesMobile;
  var _generateResponsiveRa3 = generateResponsiveRangeStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_CONNECTOR_SIZE,
      property: "height",
      attributes: attributes
    }),
    buttonConnectorHeightDesktop = _generateResponsiveRa3.rangeStylesDesktop,
    buttonConnectorHeightTab = _generateResponsiveRa3.rangeStylesTab,
    buttonConnectorHeightMobile = _generateResponsiveRa3.rangeStylesMobile;
  var _generateResponsiveRa4 = generateResponsiveRangeStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_CONNECTOR_SIZE,
      property: "width",
      attributes: attributes
    }),
    buttonConnectorWidthDesktop = _generateResponsiveRa4.rangeStylesDesktop,
    buttonConnectorWidthTab = _generateResponsiveRa4.rangeStylesTab,
    buttonConnectorWidthMobile = _generateResponsiveRa4.rangeStylesMobile;
  var _generateResponsiveRa5 = generateResponsiveRangeStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_CONNECTOR_SIZE,
      property: "line-height",
      attributes: attributes
    }),
    buttonConnectorLineHeightDesktop = _generateResponsiveRa5.rangeStylesDesktop,
    buttonConnectorLineHeightTab = _generateResponsiveRa5.rangeStylesTab,
    buttonConnectorLineHeightMobile = _generateResponsiveRa5.rangeStylesMobile;
  var _generateResponsiveRa6 = generateResponsiveRangeStyles({
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTONS_CONNECTOR_ICON_SIZE,
      property: "font-size",
      attributes: attributes
    }),
    buttonConnectorIconSizeDesktop = _generateResponsiveRa6.rangeStylesDesktop,
    buttonConnectorIconSizeTab = _generateResponsiveRa6.rangeStylesTab,
    buttonConnectorIconSizeMobile = _generateResponsiveRa6.rangeStylesMobile;

  // button background styles
  var _generateBackgroundCo = generateBackgroundControlStyles({
      attributes: attributes,
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_ONE_BACKGROUND
    }),
    btnOneBg = _generateBackgroundCo.backgroundStylesDesktop,
    btnOneHoverBg = _generateBackgroundCo.hoverBackgroundStylesDesktop,
    btnOneBgTransition = _generateBackgroundCo.bgTransitionStyle;
  var _generateBackgroundCo2 = generateBackgroundControlStyles({
      attributes: attributes,
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_TWO_BACKGROUND
    }),
    btnTwoBg = _generateBackgroundCo2.backgroundStylesDesktop,
    btnTwoHoverBg = _generateBackgroundCo2.hoverBackgroundStylesDesktop,
    btnTwoBgTransition = _generateBackgroundCo2.bgTransitionStyle;

  // wrapper styles css in strings ⬇
  var wrapperStylesDesktop = "\n\t\t.eb-button-group-wrapper.".concat(blockId, "{\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\talign-items: ").concat(contentPosition, ";\n\t\t\tjustify-content: ").concat(contentPosition, ";\n\t\t\tposition: relative;\n\t\t\t").concat(wrapperMarginStylesDesktop, "\n\t\t}\n\t");
  var wrapperStylesTab = "\n\t\t.eb-button-group-wrapper.".concat(blockId, "{\n\t\t\t").concat(wrapperMarginStylesTab, "\n\n\t\t}\n\t");
  var wrapperStylesMobile = "\n\t\t.eb-button-group-wrapper.".concat(blockId, "{\n\t\t\t").concat(wrapperMarginStylesMobile, "\n\n\t\t}\n\t");

  // Buttons Common styles css in strings ⬇
  var buttonsCommonStyleDesktop = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-parent {\n\t\t\t").concat(buttonsPaddingStylesDesktop, "\n\t\t\t").concat(buttonsWidthType === "custom" ? buttonWidthStyleDesktop : "width: auto;", "\n\t\t\t").concat(buttonGapDesktop, "\n\t\t\ttext-align: ").concat(buttonTextAlign, ";\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent .eb-button-text {\n\t\t\t").concat(buttonsTypoStylesDesktop, "\n\t\t}\n\n\t\t.eb-button-group-wrapper.").concat(blockId, ".preset-4 {\n\t\t\twidth: fit-content;\n\t\t\tmargin: ").concat(contentPosition === "center" ? "0 auto;" : contentPosition === "flex-end" ? "0 0 0 auto;" : "auto 0;", "\n\t\t}\n\t");
  var buttonsCommonStyleTab = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-parent {\n\t\t\t").concat(buttonsPaddingStylesTab, "\n\t\t\t").concat(buttonsWidthType === "custom" ? buttonWidthStyleTab : "width: auto;", "\n\t\t\t").concat(buttonGapTab, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent .eb-button-text {\n\t\t\t").concat(buttonsTypoStylesTab, "\n\t\t}\n\t");
  var buttonsCommonStyleMobile = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-parent {\n\t\t\t").concat(buttonsPaddingStylesMobile, "\n\t\t\t").concat(buttonsWidthType === "custom" ? buttonWidthStyleMobile : "width: auto;", "\n\t\t\t").concat(buttonGapMobile, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent .eb-button-text {\n\t\t\t").concat(buttonsTypoStylesMobile, "\n\t\t}\n\t");

  // Buttons One styles css in strings ⬇
  var buttonOneStyleDesktop = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-parent.eb-button-one {\n\t\t\t").concat(buttonOneBDShadowDesktop, "\n\t\t\ttransition:").concat(buttonOneBDShadowtransitionStyle, ";\n\t\t\t").concat(btnOneBg, "\n\t\t\ttransition: ").concat(btnOneBgTransition.replace(/[^0-9.]/g, ""), "s;\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-one:hover,\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-one:focus {\n\t\t\t").concat(buttonOneBDShadowHoverDesktop, "\n\t\t\t").concat(btnOneHoverBg, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-one .eb-button-one-text {\n\t\t\tcolor: ").concat(textOneColor, ";\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-one:hover .eb-button-one-text {\n\t\t\tcolor: ").concat(hoverTextOneColor, ";\n\t\t}\n\t");
  var buttonOneStyleTab = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-parent.eb-button-one {\n\t\t\t").concat(buttonOneBDShadowTab, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-one:hover {\n\t\t\t").concat(buttonOneBDShadowHoverTab, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-one .eb-button-one-text {\n\n\t\t}\n\t");
  var buttonOneStyleMobile = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-parent.eb-button-one {\n\t\t\t").concat(buttonOneBDShadowMobile, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-one:hover {\n\t\t\t").concat(buttonOneBDShadowHoverMobile, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-one .eb-button-one-text {\n\n\t\t}\n\t");

  // Buttons Two styles css in strings ⬇
  var buttonTwoStyleDesktop = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-parent.eb-button-two {\n\t\t\t").concat(buttonTwoBDShadowDesktop, "\n\t\t\t").concat(buttonGapDesktop, "\n\t\t\ttransition:").concat(buttonTwoBDShadowtransitionStyle, ";\n\t\t\t").concat(btnTwoBg, "\n\t\t\ttransition: ").concat(btnOneBgTransition.replace(/[^0-9.]/g, ""), "s;\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-two:hover,\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-two:focus {\n\t\t\t").concat(buttonTwoBDShadowHoverDesktop, "\n\t\t\t").concat(btnTwoHoverBg, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-two .eb-button-two-text {\n\t\t\tcolor: ").concat(textTwoColor, ";\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-two:hover .eb-button-two-text {\n\t\t\tcolor: ").concat(hoverTextTwoColor, ";\n\t\t}\n\t");
  var buttonTwoStyleTab = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-parent.eb-button-two {\n\t\t\t").concat(buttonTwoBDShadowTab, "\n\t\t\t").concat(buttonGapTab, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-two:hover {\n\t\t\t").concat(buttonTwoBDShadowHoverTab, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-two .eb-button-two-text {\n\n\t\t}\n\t");
  var buttonTwoStyleMobile = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-parent.eb-button-two {\n\t\t\t").concat(buttonTwoBDShadowMobile, "\n\t\t\t").concat(buttonGapMobile, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-two:hover {\n\t\t\t").concat(buttonTwoBDShadowHoverMobile, "\n\t\t}\n\t\t.eb-button-group-wrapper.").concat(blockId, " .eb-button-parent.eb-button-two .eb-button-two-text {\n\n\t\t}\n\t");

  // Connector styles css in strings ⬇
  var connectorStylesDesktop = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-group__midldeInner span {\n\t\t\t").concat(connectorType === "text" ? connectorTypoStylesDesktop : buttonConnectorIconSizeDesktop, "\n\t\t\t").concat(buttonConnectorHeightDesktop, "\n\t\t\t").concat(buttonConnectorWidthDesktop, "\n\t\t\t").concat(buttonConnectorLineHeightDesktop, "\n\t\t\tbackground: ").concat(innerButtonColor, ";\n\t\t\tcolor: ").concat(innerButtonTextColor, ";\n\t\t}\n\t");
  var connectorStylesTab = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-group__midldeInner span {\n\t\t\t").concat(connectorType === "text" ? connectorTypoStylesTab : buttonConnectorIconSizeTab, "\n\t\t\t").concat(buttonConnectorHeightTab, "\n\t\t\t").concat(buttonConnectorWidthTab, "\n\t\t\t").concat(buttonConnectorLineHeightTab, "\n\t\t}\n\t");
  var connectorStylesMobile = "\n\t\t.eb-button-group-wrapper.".concat(blockId, " .eb-button-group__midldeInner span {\n\t\t\t").concat(connectorType === "text" ? connectorTypoStylesMobile : buttonConnectorIconSizeMobile, "\n\t\t\t").concat(buttonConnectorHeightMobile, "\n\t\t\t").concat(buttonConnectorWidthMobile, "\n\t\t\t").concat(buttonConnectorLineHeightMobile, "\n\t\t}\n\t");

  // all css styles for large screen width (desktop/laptop) in strings ⬇
  var desktopAllStyles = softMinifyCssStrings("\n\t\t\t".concat(wrapperStylesDesktop, "\n\t\t\t").concat(buttonsCommonStyleDesktop, "\n\t\t\t").concat(buttonOneStyleDesktop, "\n\t\t\t").concat(buttonTwoStyleDesktop, "\n\t\t\t").concat(connectorStylesDesktop, "\n\t\t"));

  // all css styles for Tab in strings ⬇
  var tabAllStyles = softMinifyCssStrings("\n\t\t\t".concat(wrapperStylesTab, "\n\t\t\t").concat(buttonsCommonStyleTab, "\n\t\t\t").concat(buttonOneStyleTab, "\n\t\t\t").concat(buttonTwoStyleTab, "\n\t\t\t").concat(connectorStylesTab, "\n\t\t"));

  // all css styles for Mobile in strings ⬇
  var mobileAllStyles = softMinifyCssStrings("\n\t\t\t".concat(wrapperStylesMobile, "\n\t\t\t").concat(buttonsCommonStyleMobile, "\n\t\t\t").concat(buttonOneStyleMobile, "\n\t\t\t").concat(buttonTwoStyleMobile, "\n\t\t\t").concat(connectorStylesMobile, "\n\t\t"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyleComponent, {
    attributes: attributes,
    setAttributes: setAttributes,
    desktopAllStyles: desktopAllStyles,
    tabAllStyles: tabAllStyles,
    mobileAllStyles: mobileAllStyles,
    blockName: name
  }));
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"button-group/button-group","title":"Button Group","category":"widgets","description":"Create Two Buttons To Be Stacked Together","textdomain":"button-group"}');

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkbutton_group"] = globalThis["webpackChunkbutton_group"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map