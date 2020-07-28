(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  var className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: className
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Group – hello from the editor!', 'create-block'));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "256",
    height: "156",
    viewBox: "0 0 256 156",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "eb-button",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M15.5151515,0 C6.98484752,0 0,6.98484752 0,15.5151515 L0,124.121212 C0,132.651516 6.98484752,139.636364 15.5151515,139.636364 C15.5151515,141.772726 17.2575767,143.515152 19.3939394,143.515152 C21.5303021,143.515152 23.2727273,141.772726 23.2727273,139.636364 L31.030303,139.636364 C31.030303,141.772726 32.7727282,143.515152 34.9090909,143.515152 C37.0454536,143.515152 38.7878788,141.772726 38.7878788,139.636364 L46.5454545,139.636364 C46.5454545,141.772726 48.2878798,143.515152 50.4242424,143.515152 C52.5606051,143.515152 54.3030303,141.772726 54.3030303,139.636364 L62.0606061,139.636364 C62.0606061,141.772726 63.8030313,143.515152 65.9393939,143.515152 C68.0757566,143.515152 69.8181818,141.772726 69.8181818,139.636364 L77.5757576,139.636364 C77.5757576,141.772726 79.3181828,143.515152 81.4545455,143.515152 C83.5909081,143.515152 85.3333333,141.772726 85.3333333,139.636364 L93.0909091,139.636364 C93.0909091,141.772726 94.8333343,143.515152 96.969697,143.515152 C99.1060596,143.515152 100.848485,141.772726 100.848485,139.636364 L108.606061,139.636364 C108.606061,141.772726 110.348486,143.515152 112.484848,143.515152 C114.621211,143.515152 116.363636,141.772726 116.363636,139.636364 L124.121212,139.636364 C124.121212,141.772726 125.863637,143.515152 128,143.515152 C130.136363,143.515152 131.878788,141.772726 131.878788,139.636364 L139.636364,139.636364 C139.636364,141.772726 141.378789,143.515152 143.515152,143.515152 C145.651514,143.515152 147.393939,141.772726 147.393939,139.636364 L155.151515,139.636364 C155.151515,141.772726 156.89394,143.515152 159.030303,143.515152 C161.166666,143.515152 162.909091,141.772726 162.909091,139.636364 L170.666667,139.636364 C170.666667,141.772726 172.409092,143.515152 174.545455,143.515152 C176.681817,143.515152 178.424242,141.772726 178.424242,139.636364 L186.181818,139.636364 C186.181818,141.772726 187.924243,143.515152 190.060606,143.515152 C192.196969,143.515152 193.939394,141.772726 193.939394,139.636364 L201.69697,139.636364 C201.69697,141.772726 203.439395,143.515152 205.575758,143.515152 C207.71212,143.515152 209.454545,141.772726 209.454545,139.636364 L217.212121,139.636364 C217.212121,141.772726 218.954546,143.515152 221.090909,143.515152 C223.227272,143.515152 224.969697,141.772726 224.969697,139.636364 L232.727273,139.636364 C232.727273,141.772726 234.469698,143.515152 236.606061,143.515152 C238.742423,143.515152 240.484848,141.772726 240.484848,139.636364 C249.015152,139.636364 256,132.651516 256,124.121212 L256,15.5151515 C256,6.98484752 249.015152,0 240.484848,0 L15.5151515,0 Z M15.5151515,7.75757576 L240.484848,7.75757576 C244.818184,7.75757576 248.242424,11.1818201 248.242424,15.5151515 L248.242424,124.121212 C248.242424,128.454547 244.818184,131.878788 240.484848,131.878788 L15.5151515,131.878788 C11.1818201,131.878788 7.75757576,128.454547 7.75757576,124.121212 L7.75757576,15.5151515 C7.75757576,11.1818201 11.1818201,7.75757576 15.5151515,7.75757576 Z M42.6666667,19.3939394 C40.530304,19.3939394 38.7878788,21.1363646 38.7878788,23.2727273 C38.7878788,25.4090899 40.530304,27.1515152 42.6666667,27.1515152 C44.8030293,27.1515152 46.5454545,25.4090899 46.5454545,23.2727273 C46.5454545,21.1363646 44.8030293,19.3939394 42.6666667,19.3939394 Z M58.1818182,19.3939394 C56.0454555,19.3939394 54.3030303,21.1363646 54.3030303,23.2727273 C54.3030303,25.4090899 56.0454555,27.1515152 58.1818182,27.1515152 C60.3181808,27.1515152 62.0606061,25.4090899 62.0606061,23.2727273 C62.0606061,21.1363646 60.3181808,19.3939394 58.1818182,19.3939394 Z M73.6969697,19.3939394 C71.560607,19.3939394 69.8181818,21.1363646 69.8181818,23.2727273 C69.8181818,25.4090899 71.560607,27.1515152 73.6969697,27.1515152 C75.8333324,27.1515152 77.5757576,25.4090899 77.5757576,23.2727273 C77.5757576,21.1363646 75.8333324,19.3939394 73.6969697,19.3939394 Z M89.2121212,19.3939394 C87.0757585,19.3939394 85.3333333,21.1363646 85.3333333,23.2727273 C85.3333333,25.4090899 87.0757585,27.1515152 89.2121212,27.1515152 C91.3484839,27.1515152 93.0909091,25.4090899 93.0909091,23.2727273 C93.0909091,21.1363646 91.3484839,19.3939394 89.2121212,19.3939394 Z M104.727273,19.3939394 C102.59091,19.3939394 100.848485,21.1363646 100.848485,23.2727273 C100.848485,25.4090899 102.59091,27.1515152 104.727273,27.1515152 C106.863635,27.1515152 108.606061,25.4090899 108.606061,23.2727273 C108.606061,21.1363646 106.863635,19.3939394 104.727273,19.3939394 Z M120.242424,19.3939394 C118.106062,19.3939394 116.363636,21.1363646 116.363636,23.2727273 C116.363636,25.4090899 118.106062,27.1515152 120.242424,27.1515152 C122.378787,27.1515152 124.121212,25.4090899 124.121212,23.2727273 C124.121212,21.1363646 122.378787,19.3939394 120.242424,19.3939394 Z M135.757576,19.3939394 C133.621213,19.3939394 131.878788,21.1363646 131.878788,23.2727273 C131.878788,25.4090899 133.621213,27.1515152 135.757576,27.1515152 C137.893938,27.1515152 139.636364,25.4090899 139.636364,23.2727273 C139.636364,21.1363646 137.893938,19.3939394 135.757576,19.3939394 Z M151.272727,19.3939394 C149.136365,19.3939394 147.393939,21.1363646 147.393939,23.2727273 C147.393939,25.4090899 149.136365,27.1515152 151.272727,27.1515152 C153.40909,27.1515152 155.151515,25.4090899 155.151515,23.2727273 C155.151515,21.1363646 153.40909,19.3939394 151.272727,19.3939394 Z M166.787879,19.3939394 C164.651516,19.3939394 162.909091,21.1363646 162.909091,23.2727273 C162.909091,25.4090899 164.651516,27.1515152 166.787879,27.1515152 C168.924241,27.1515152 170.666667,25.4090899 170.666667,23.2727273 C170.666667,21.1363646 168.924241,19.3939394 166.787879,19.3939394 Z M182.30303,19.3939394 C180.166668,19.3939394 178.424242,21.1363646 178.424242,23.2727273 C178.424242,25.4090899 180.166668,27.1515152 182.30303,27.1515152 C184.439393,27.1515152 186.181818,25.4090899 186.181818,23.2727273 C186.181818,21.1363646 184.439393,19.3939394 182.30303,19.3939394 Z M197.818182,19.3939394 C195.681819,19.3939394 193.939394,21.1363646 193.939394,23.2727273 C193.939394,25.4090899 195.681819,27.1515152 197.818182,27.1515152 C199.954544,27.1515152 201.69697,25.4090899 201.69697,23.2727273 C201.69697,21.1363646 199.954544,19.3939394 197.818182,19.3939394 Z M213.333333,19.3939394 C211.196971,19.3939394 209.454545,21.1363646 209.454545,23.2727273 C209.454545,25.4090899 211.196971,27.1515152 213.333333,27.1515152 C215.469696,27.1515152 217.212121,25.4090899 217.212121,23.2727273 C217.212121,21.1363646 215.469696,19.3939394 213.333333,19.3939394 Z M170.30303,55.4090899 C162.106062,55.4090899 156.818184,60.9242415 156.818184,69.8181818 C156.818184,78.7121222 162.045456,84.2272737 170.30303,84.2272737 C178.515153,84.2272737 183.757576,78.7121222 183.757576,69.8181818 C183.757576,60.9242415 178.515153,55.4090899 170.30303,55.4090899 Z M41.2727273,56.1515171 L41.2727273,83.4848504 L54.4090919,83.4848504 C60.2575748,83.4848504 63.9393939,80.3939413 63.9393939,75.6060625 C63.9393939,72.1212121 61.1818201,69.3333333 57.6060625,69.1515152 L57.6060625,68.7878788 C60.499999,68.3939413 62.6969716,65.9090928 62.6969716,62.969697 C62.6969716,58.7272727 59.469696,56.1515171 54.0151505,56.1515171 L41.2727273,56.1515171 Z M70.8636354,56.1515171 L70.8636354,74.0606061 C70.8636354,80.1818182 75.5454565,84.2272737 82.6515161,84.2272737 C89.7424252,84.2272737 94.4090919,80.1818182 94.4090919,74.0606061 L94.4090919,56.1515171 L87.4545455,56.1515171 L87.4545455,73.3181828 C87.4545455,76.499999 85.7272747,78.3636364 82.6515161,78.3636364 C79.560607,78.3636364 77.8181818,76.4848485 77.8181818,73.3181828 L77.8181818,56.1515171 L70.8636354,56.1515171 Z M190.848485,56.1515171 L190.848485,83.4848504 L197.439395,83.4848504 L197.439395,67.9545445 L197.803031,67.9545445 L209.212121,83.4848504 L214.727273,83.4848504 L214.727273,56.1515171 L208.136363,56.1515171 L208.136363,71.5303021 L207.772726,71.5303021 L196.393941,56.1515171 L190.848485,56.1515171 Z M101.318183,56.1666676 L101.318183,61.7424252 L109.196971,61.7424252 L109.196971,83.4848504 L116.121212,83.4848504 L116.121212,61.7424252 L124.015151,61.7424252 L124.015151,56.1666676 L101.318183,56.1666676 Z M129.40909,56.1666676 L129.40909,61.7424252 L137.287878,61.7424252 L137.287878,83.4848504 L144.227274,83.4848504 L144.227274,61.7424252 L152.121212,61.7424252 L152.121212,56.1666676 L129.40909,56.1666676 Z M48.2272737,61.0454536 L52.1666676,61.0454536 C54.530304,61.0454536 55.9242434,62.2272737 55.9242434,64.1818182 C55.9242434,66.1060616 54.439393,67.2878778 51.8939384,67.2878778 L48.2272737,67.2878778 L48.2272737,61.0454536 Z M170.30303,61.1666657 C174.136363,61.1666657 176.681817,64.5454545 176.681817,69.8181818 C176.681817,75.0909091 174.151517,78.4696979 170.30303,78.4696979 C166.424242,78.4696979 163.893938,75.0909091 163.893938,69.8181818 C163.893938,64.5454545 166.454547,61.1666657 170.30303,61.1666657 Z M48.2272737,71.5151515 L52.3939413,71.5151515 C55.2727273,71.5151515 56.8787898,72.7727282 56.8787898,75.0000019 C56.8787898,77.3181828 55.3030322,78.5757595 52.4242424,78.5757595 L48.2272737,78.5757595 L48.2272737,71.5151515 Z M42.6666667,112.484848 C40.530304,112.484848 38.7878788,114.227274 38.7878788,116.363636 C38.7878788,118.499999 40.530304,120.242424 42.6666667,120.242424 C44.8030293,120.242424 46.5454545,118.499999 46.5454545,116.363636 C46.5454545,114.227274 44.8030293,112.484848 42.6666667,112.484848 Z M58.1818182,112.484848 C56.0454555,112.484848 54.3030303,114.227274 54.3030303,116.363636 C54.3030303,118.499999 56.0454555,120.242424 58.1818182,120.242424 C60.3181808,120.242424 62.0606061,118.499999 62.0606061,116.363636 C62.0606061,114.227274 60.3181808,112.484848 58.1818182,112.484848 Z M73.6969697,112.484848 C71.560607,112.484848 69.8181818,114.227274 69.8181818,116.363636 C69.8181818,118.499999 71.560607,120.242424 73.6969697,120.242424 C75.8333324,120.242424 77.5757576,118.499999 77.5757576,116.363636 C77.5757576,114.227274 75.8333324,112.484848 73.6969697,112.484848 Z M89.2121212,112.484848 C87.0757585,112.484848 85.3333333,114.227274 85.3333333,116.363636 C85.3333333,118.499999 87.0757585,120.242424 89.2121212,120.242424 C91.3484839,120.242424 93.0909091,118.499999 93.0909091,116.363636 C93.0909091,114.227274 91.3484839,112.484848 89.2121212,112.484848 Z M104.727273,112.484848 C102.59091,112.484848 100.848485,114.227274 100.848485,116.363636 C100.848485,118.499999 102.59091,120.242424 104.727273,120.242424 C106.863635,120.242424 108.606061,118.499999 108.606061,116.363636 C108.606061,114.227274 106.863635,112.484848 104.727273,112.484848 Z M120.242424,112.484848 C118.106062,112.484848 116.363636,114.227274 116.363636,116.363636 C116.363636,118.499999 118.106062,120.242424 120.242424,120.242424 C122.378787,120.242424 124.121212,118.499999 124.121212,116.363636 C124.121212,114.227274 122.378787,112.484848 120.242424,112.484848 Z M135.757576,112.484848 C133.621213,112.484848 131.878788,114.227274 131.878788,116.363636 C131.878788,118.499999 133.621213,120.242424 135.757576,120.242424 C137.893938,120.242424 139.636364,118.499999 139.636364,116.363636 C139.636364,114.227274 137.893938,112.484848 135.757576,112.484848 Z M151.272727,112.484848 C149.136365,112.484848 147.393939,114.227274 147.393939,116.363636 C147.393939,118.499999 149.136365,120.242424 151.272727,120.242424 C153.40909,120.242424 155.151515,118.499999 155.151515,116.363636 C155.151515,114.227274 153.40909,112.484848 151.272727,112.484848 Z M166.787879,112.484848 C164.651516,112.484848 162.909091,114.227274 162.909091,116.363636 C162.909091,118.499999 164.651516,120.242424 166.787879,120.242424 C168.924241,120.242424 170.666667,118.499999 170.666667,116.363636 C170.666667,114.227274 168.924241,112.484848 166.787879,112.484848 Z M182.30303,112.484848 C180.166668,112.484848 178.424242,114.227274 178.424242,116.363636 C178.424242,118.499999 180.166668,120.242424 182.30303,120.242424 C184.439393,120.242424 186.181818,118.499999 186.181818,116.363636 C186.181818,114.227274 184.439393,112.484848 182.30303,112.484848 Z M197.818182,112.484848 C195.681819,112.484848 193.939394,114.227274 193.939394,116.363636 C193.939394,118.499999 195.681819,120.242424 197.818182,120.242424 C199.954544,120.242424 201.69697,118.499999 201.69697,116.363636 C201.69697,114.227274 199.954544,112.484848 197.818182,112.484848 Z M213.333333,112.484848 C211.196971,112.484848 209.454545,114.227274 209.454545,116.363636 C209.454545,118.499999 211.196971,120.242424 213.333333,120.242424 C215.469696,120.242424 217.212121,118.499999 217.212121,116.363636 C217.212121,114.227274 215.469696,112.484848 213.333333,112.484848 Z M27.1515152,147.393939 C25.0151525,147.393939 23.2727273,149.136365 23.2727273,151.272727 C23.2727273,153.40909 25.0151525,155.151515 27.1515152,155.151515 C29.2878778,155.151515 31.030303,153.40909 31.030303,151.272727 C31.030303,149.136365 29.2878778,147.393939 27.1515152,147.393939 Z M42.6666667,147.393939 C40.530304,147.393939 38.7878788,149.136365 38.7878788,151.272727 C38.7878788,153.40909 40.530304,155.151515 42.6666667,155.151515 C44.8030293,155.151515 46.5454545,153.40909 46.5454545,151.272727 C46.5454545,149.136365 44.8030293,147.393939 42.6666667,147.393939 Z M58.1818182,147.393939 C56.0454555,147.393939 54.3030303,149.136365 54.3030303,151.272727 C54.3030303,153.40909 56.0454555,155.151515 58.1818182,155.151515 C60.3181808,155.151515 62.0606061,153.40909 62.0606061,151.272727 C62.0606061,149.136365 60.3181808,147.393939 58.1818182,147.393939 Z M73.6969697,147.393939 C71.560607,147.393939 69.8181818,149.136365 69.8181818,151.272727 C69.8181818,153.40909 71.560607,155.151515 73.6969697,155.151515 C75.8333324,155.151515 77.5757576,153.40909 77.5757576,151.272727 C77.5757576,149.136365 75.8333324,147.393939 73.6969697,147.393939 Z M89.2121212,147.393939 C87.0757585,147.393939 85.3333333,149.136365 85.3333333,151.272727 C85.3333333,153.40909 87.0757585,155.151515 89.2121212,155.151515 C91.3484839,155.151515 93.0909091,153.40909 93.0909091,151.272727 C93.0909091,149.136365 91.3484839,147.393939 89.2121212,147.393939 Z M104.727273,147.393939 C102.59091,147.393939 100.848485,149.136365 100.848485,151.272727 C100.848485,153.40909 102.59091,155.151515 104.727273,155.151515 C106.863635,155.151515 108.606061,153.40909 108.606061,151.272727 C108.606061,149.136365 106.863635,147.393939 104.727273,147.393939 Z M120.242424,147.393939 C118.106062,147.393939 116.363636,149.136365 116.363636,151.272727 C116.363636,153.40909 118.106062,155.151515 120.242424,155.151515 C122.378787,155.151515 124.121212,153.40909 124.121212,151.272727 C124.121212,149.136365 122.378787,147.393939 120.242424,147.393939 Z M135.757576,147.393939 C133.621213,147.393939 131.878788,149.136365 131.878788,151.272727 C131.878788,153.40909 133.621213,155.151515 135.757576,155.151515 C137.893938,155.151515 139.636364,153.40909 139.636364,151.272727 C139.636364,149.136365 137.893938,147.393939 135.757576,147.393939 Z M151.272727,147.393939 C149.136365,147.393939 147.393939,149.136365 147.393939,151.272727 C147.393939,153.40909 149.136365,155.151515 151.272727,155.151515 C153.40909,155.151515 155.151515,153.40909 155.151515,151.272727 C155.151515,149.136365 153.40909,147.393939 151.272727,147.393939 Z M166.787879,147.393939 C164.651516,147.393939 162.909091,149.136365 162.909091,151.272727 C162.909091,153.40909 164.651516,155.151515 166.787879,155.151515 C168.924241,155.151515 170.666667,153.40909 170.666667,151.272727 C170.666667,149.136365 168.924241,147.393939 166.787879,147.393939 Z M182.30303,147.393939 C180.166668,147.393939 178.424242,149.136365 178.424242,151.272727 C178.424242,153.40909 180.166668,155.151515 182.30303,155.151515 C184.439393,155.151515 186.181818,153.40909 186.181818,151.272727 C186.181818,149.136365 184.439393,147.393939 182.30303,147.393939 Z M197.818182,147.393939 C195.681819,147.393939 193.939394,149.136365 193.939394,151.272727 C193.939394,153.40909 195.681819,155.151515 197.818182,155.151515 C199.954544,155.151515 201.69697,153.40909 201.69697,151.272727 C201.69697,149.136365 199.954544,147.393939 197.818182,147.393939 Z M213.333333,147.393939 C211.196971,147.393939 209.454545,149.136365 209.454545,151.272727 C209.454545,153.40909 211.196971,155.151515 213.333333,155.151515 C215.469696,155.151515 217.212121,153.40909 217.212121,151.272727 C217.212121,149.136365 215.469696,147.393939 213.333333,147.393939 Z M228.848485,147.393939 C226.712122,147.393939 224.969697,149.136365 224.969697,151.272727 C224.969697,153.40909 226.712122,155.151515 228.848485,155.151515 C230.984848,155.151515 232.727273,153.40909 232.727273,151.272727 C232.727273,149.136365 230.984848,147.393939 228.848485,147.393939 Z",
    id: "Shape"
  }))));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("block/button-group", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button Group", "button-group"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Create A Series of Buttons To Be Stacked Together ", "button-group"),
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  category: "widgets",
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Group – hello from the saved content!', 'create-block'));
}

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map