/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/EntryPoint.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n/* ==========================================================================\r\n   HTML5 display definitions\r\n   ========================================================================== */\n* {\n  box-sizing: border-box; }\n\n/**\r\n * Reset browser margins and padding\r\n */\nhtml, body, div, section, article, aside, header, hgroup, footer, nav, h1, h2, h3, h4, h5, h6, p, blockquote,\naddress, time, span, em, strong, img, ol, ul, li, figure, canvas, video, th, td, tr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit; }\n\n/**\r\n * Correct `block` display not defined in IE 8/9.\r\n */\narticle, aside, details, figcaption, figure, footer,\nheader, hgroup, main, nav, section, summary {\n  display: block; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 8/9.\r\n */\naudio, canvas, video {\n  display: inline-block; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9.\r\n * Hide the `template` element in IE, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* ==========================================================================\r\n   Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background: transparent;\n  text-decoration: none;\n  color: inherit; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:link, a:visited, a:hover, a:active {\n  text-decoration: none;\n  outline: 0; }\n\na:hover {\n  cursor: pointer; }\n\n/* ==========================================================================\r\n   Typography\r\n   ========================================================================== */\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari 5 and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\nem {\n  font-style: italic; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/* ==========================================================================\r\n   Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow displayed oddly in IE 9.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/**\r\n * 1. Correct font family not being inherited in all browsers.\r\n * 2. Correct font size not being inherited in all browsers.\r\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\r\n */\nbutton, input, select, textarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  resize: none; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton, input {\n  line-height: normal;\n  outline: none; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton, select {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\ninput[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/** TODO Hide checkbox input */\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style: none; }\n\n/* ==========================================================================\r\n   Clearfix\r\n   ========================================================================== */\n/* For modern browsers */\n.clearfix::before, .clearfix::after {\n  content: \"\";\n  display: block; }\n\n.clearfix::after {\n  clear: both;\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \".\";\n  height: 0; }\n\n/* For IE 6/7 (trigger hasLayout) */\n.clearfix {\n  zoom: 1; }\n\n/* ==========================================================================\r\n   Inputs and buttons\r\n   ========================================================================== */\ninput, textarea {\n  color: #6A7187;\n  background-color: #FFFFFF; }\n\ninput, textarea, button {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\n/* Remove background highlight on touch from mobile devices */\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\ninput:focus, textarea:focus {\n  outline: none; }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #A6A9B4;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #A6A9B4; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #A6A9B4; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\nhtml, body {\n  height: 100%;\n  position: relative;\n  overflow: hidden; }\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  background-color: #F3F2FC;\n  color: #242246; }\n\n.checkbox-input {\n  cursor: pointer;\n  padding-left: 30px;\n  position: relative;\n  color: #6A7187;\n  font-size: 0.85em;\n  text-transform: none; }\n  .checkbox-input:before {\n    content: \"\";\n    top: -2px;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    display: block;\n    position: absolute;\n    border: 1px solid #d6e3eb; }\n\nlabel, input {\n  display: block;\n  width: 100%;\n  font-size: 0.85em; }\n\nlabel {\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #80879B; }\n\ninput:not([type='checkbox']) {\n  border: 1px solid #d6e3eb;\n  padding: 18px 20px;\n  height: 50px; }\n\ninput.invalid {\n  border-bottom: 1px solid #f967be; }\n\n.button-primary, .button-secondary {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border: none;\n  text-transform: uppercase;\n  font-size: 1.1em; }\n\n.button-primary {\n  border-radius: 10px;\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  -moz-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  background: #7985ff;\n  /* Old browsers */\n  background: -moz-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #6cb7ff 0%, #7985ff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n  /* IE6-9 */ }\n\n.button-secondary {\n  color: #8dacff;\n  background: transparent; }\n\nspan {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */ }\n\n#content-container {\n  position: absolute;\n  width: 80%;\n  height: 200%;\n  top: -105%;\n  z-index: 2;\n  border-radius: 5px;\n  background-color: #FFFFFF;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n  -webkit-box-shadow: 0 28px 37px 0 rgba(74, 144, 226, 0.1);\n  -moz-box-shadow: 0 28px 37px 0 rgba(74, 144, 226, 0.1);\n  box-shadow: 0 28px 37px 0 rgba(74, 144, 226, 0.1); }\n\n.button-primary, .button-secondary {\n  height: 50px;\n  text-transform: uppercase;\n  font-size: 1.1em;\n  position: relative;\n  cursor: pointer; }\n  .button-primary span, .button-secondary span {\n    position: absolute;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n\n.button-primary {\n  border-radius: 10px;\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  -moz-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  background: #7985ff;\n  /* Old browsers */\n  background: -moz-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #6cb7ff 0%, #7985ff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n  /* IE6-9 */\n  transition: box-shadow 0.3s ease-in-out; }\n  .button-primary:hover {\n    -webkit-box-shadow: 0 23px 15px -15px rgba(118, 115, 255, 0.5);\n    -moz-box-shadow: 0 23px 15px -15px rgba(118, 115, 255, 0.5);\n    box-shadow: 0 23px 15px -15px rgba(118, 115, 255, 0.5); }\n\n.button-secondary {\n  color: #8dacff; }\n\n.authentication-wrapper {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50%; }\n\n#authentication-container {\n  position: absolute;\n  width: 350px;\n  margin-top: -85px;\n  top: calc( 50% + 60px);\n  opacity: 0;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n  #authentication-container .authentication-header {\n    top: 90px;\n    height: 85px;\n    text-align: center;\n    margin-bottom: 35px;\n    position: relative; }\n    #authentication-container .authentication-header .authentication-header-login, #authentication-container .authentication-header .authentication-header-signup {\n      position: absolute; }\n    #authentication-container .authentication-header .authentication-header-title {\n      font-size: 1.8em;\n      font-weight: bold;\n      color: #6A7187;\n      margin-bottom: 10px; }\n    #authentication-container .authentication-header .authentication-header-subtitle {\n      font-size: 1em;\n      line-height: 1.45em;\n      color: #80879B;\n      padding: 0 5px; }\n  #authentication-container .authentication-footer {\n    margin-top: 25px;\n    position: fixed;\n    width: 100%; }\n    #authentication-container .authentication-footer .primary-btn-loading {\n      color: transparent;\n      box-shadow: none;\n      background: #8dacff;\n      /* Old browsers */\n      background: -moz-linear-gradient(left, #8dacff 0%, #8dacff 100%);\n      /* FF3.6-15 */\n      background: -webkit-linear-gradient(left, #8dacff 0%, #8dacff 100%);\n      /* Chrome10-25,Safari5.1-6 */\n      background: linear-gradient(to right, #8dacff 0%, #8dacff 100%);\n      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n      /* IE6-9 */ }\n    #authentication-container .authentication-footer .primary-btn-loading-animation {\n      background: #8dacff url(" + escape(__webpack_require__(/*! ../img/auth-loader-animation.gif */ "./src/_style/img/auth-loader-animation.gif")) + ") no-repeat center;\n      background-size: 35px; }\n    #authentication-container .authentication-footer .secondary-btn-loading {\n      color: transparent; }\n  #authentication-container .input-row {\n    margin-bottom: 15px; }\n  #authentication-container .input-name-wrapper .input-row {\n    width: 50%; }\n    #authentication-container .input-name-wrapper .input-row:first-child {\n      float: left; }\n    #authentication-container .input-name-wrapper .input-row:last-child {\n      float: right; }\n      #authentication-container .input-name-wrapper .input-row:last-child input {\n        border-left: none; }\n  #authentication-container .checkbox-wrapper {\n    height: 20px;\n    position: relative; }\n    #authentication-container .checkbox-wrapper label {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      -moz-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      -o-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%); }\n    #authentication-container .checkbox-wrapper a {\n      position: absolute;\n      right: 0;\n      top: 50%;\n      transform: translateY(-50%);\n      color: #7985ff;\n      font-size: 0.85em; }\n  #authentication-container .button-secondary {\n    margin-top: 10px; }\n\n@media screen and (max-width: 800px) {\n  #content-container {\n    width: 85%; } }\n\n@media screen and (max-width: 480px) {\n  #content-container {\n    width: calc( 100% - 20px);\n    margin: 0 auto; }\n  #authentication-container {\n    width: calc(100% - 55px); } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/blockers.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/blockers.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\nhtml, body {\n  height: 100%;\n  position: relative;\n  overflow: hidden; }\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  background-color: #F3F2FC;\n  color: #242246; }\n\n.checkbox-input {\n  cursor: pointer;\n  padding-left: 30px;\n  position: relative;\n  color: #6A7187;\n  font-size: 0.85em;\n  text-transform: none; }\n  .checkbox-input:before {\n    content: \"\";\n    top: -2px;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    display: block;\n    position: absolute;\n    border: 1px solid #d6e3eb; }\n\nlabel, input {\n  display: block;\n  width: 100%;\n  font-size: 0.85em; }\n\nlabel {\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #80879B; }\n\ninput:not([type='checkbox']) {\n  border: 1px solid #d6e3eb;\n  padding: 18px 20px;\n  height: 50px; }\n\ninput.invalid {\n  border-bottom: 1px solid #f967be; }\n\n.button-primary, .button-secondary {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border: none;\n  text-transform: uppercase;\n  font-size: 1.1em; }\n\n.button-primary {\n  border-radius: 10px;\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  -moz-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  background: #7985ff;\n  /* Old browsers */\n  background: -moz-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #6cb7ff 0%, #7985ff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n  /* IE6-9 */ }\n\n.button-secondary {\n  color: #8dacff;\n  background: transparent; }\n\nspan {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */ }\n\n#blockers-view-container {\n  padding: 30px 20px 0 20px; }\n\nul.list-clear {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.blocker-item {\n  display: flex;\n  position: relative;\n  margin: 5px auto; }\n  .blocker-item label {\n    text-transform: none;\n    line-height: 20px; }\n\n/* Input style */\n.blocker-item-input {\n  margin-left: 20px; }\n  .blocker-item-input input[type=\"checkbox\"] {\n    display: none; }\n\n.blocker-item-input input[type=\"checkbox\"] ~ .blocker-item-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  background-color: #FFFFFF;\n  border: 1px solid #D0DDE5;\n  cursor: pointer; }\n\n.blocker-item-input input[type=\"checkbox\"]:checked ~ .blocker-item-checkmark {\n  border: 1px solid #9679FF; }\n\n.blocker-item-input input[type=\"checkbox\"] ~ .blocker-item-checkmark:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  background: #9679FF;\n  transform: translate(4px, 8px) rotate(45deg);\n  transform-origin: left;\n  transition: all 150ms;\n  transition-delay: 150ms; }\n\n.blocker-item-input input[type=\"checkbox\"] ~ .blocker-item-checkmark:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  background: #9679FF;\n  transform: translate(7px, 12px) rotate(-45deg);\n  transform-origin: left;\n  transition: all 150ms;\n  transition-delay: 0ms; }\n\n.blocker-item-input input[type=\"checkbox\"]:checked ~ .blocker-item-checkmark:before {\n  width: 4px;\n  transition-delay: 0ms; }\n\n.blocker-item-input input[type=\"checkbox\"]:checked ~ .blocker-item-checkmark:after {\n  width: 12px;\n  transition-delay: 150ms; }\n\n/* Label style */\n.blocker-item-text {\n  padding: 0 10px; }\n\n.blocker-item-text label {\n  cursor: pointer;\n  color: #242246; }\n\n.blocker-item.ready .blocker-item-text label {\n  text-decoration: line-through;\n  color: #736f86; }\n\n/* User style */\n.blocker-item span.user {\n  display: inline-table;\n  font-size: 0.65em;\n  background-color: #f4f3f6;\n  color: #80879B;\n  border-radius: 5px;\n  padding: 4px 7px; }\n\n#unsolved-blockers-container {\n  opacity: 0;\n  min-height: 50px; }\n\n#solved-blockers-container {\n  opacity: 0; }\n\n.toggle-solved-blockers-visibility-btn {\n  display: block;\n  margin: 25px 0;\n  background: #efeafe;\n  color: #242246;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.75em;\n  padding: 7px 15px;\n  opacity: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/dialog.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/dialog.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n/* ==========================================================================\r\n   HTML5 display definitions\r\n   ========================================================================== */\n* {\n  box-sizing: border-box; }\n\n/**\r\n * Reset browser margins and padding\r\n */\nhtml, body, div, section, article, aside, header, hgroup, footer, nav, h1, h2, h3, h4, h5, h6, p, blockquote,\naddress, time, span, em, strong, img, ol, ul, li, figure, canvas, video, th, td, tr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit; }\n\n/**\r\n * Correct `block` display not defined in IE 8/9.\r\n */\narticle, aside, details, figcaption, figure, footer,\nheader, hgroup, main, nav, section, summary {\n  display: block; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 8/9.\r\n */\naudio, canvas, video {\n  display: inline-block; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9.\r\n * Hide the `template` element in IE, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* ==========================================================================\r\n   Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background: transparent;\n  text-decoration: none;\n  color: inherit; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:link, a:visited, a:hover, a:active {\n  text-decoration: none;\n  outline: 0; }\n\na:hover {\n  cursor: pointer; }\n\n/* ==========================================================================\r\n   Typography\r\n   ========================================================================== */\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari 5 and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\nem {\n  font-style: italic; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/* ==========================================================================\r\n   Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow displayed oddly in IE 9.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/**\r\n * 1. Correct font family not being inherited in all browsers.\r\n * 2. Correct font size not being inherited in all browsers.\r\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\r\n */\nbutton, input, select, textarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  resize: none; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton, input {\n  line-height: normal;\n  outline: none; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton, select {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\ninput[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/** TODO Hide checkbox input */\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style: none; }\n\n/* ==========================================================================\r\n   Clearfix\r\n   ========================================================================== */\n/* For modern browsers */\n.clearfix::before, .clearfix::after {\n  content: \"\";\n  display: block; }\n\n.clearfix::after {\n  clear: both;\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \".\";\n  height: 0; }\n\n/* For IE 6/7 (trigger hasLayout) */\n.clearfix {\n  zoom: 1; }\n\n/* ==========================================================================\r\n   Inputs and buttons\r\n   ========================================================================== */\ninput, textarea {\n  color: #6A7187;\n  background-color: #FFFFFF; }\n\ninput, textarea, button {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\n/* Remove background highlight on touch from mobile devices */\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\ninput:focus, textarea:focus {\n  outline: none; }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #A6A9B4;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #A6A9B4; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #A6A9B4; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\nhtml, body {\n  height: 100%;\n  position: relative;\n  overflow: hidden; }\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  background-color: #F3F2FC;\n  color: #242246; }\n\n.checkbox-input {\n  cursor: pointer;\n  padding-left: 30px;\n  position: relative;\n  color: #6A7187;\n  font-size: 0.85em;\n  text-transform: none; }\n  .checkbox-input:before {\n    content: \"\";\n    top: -2px;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    display: block;\n    position: absolute;\n    border: 1px solid #d6e3eb; }\n\nlabel, input {\n  display: block;\n  width: 100%;\n  font-size: 0.85em; }\n\nlabel {\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #80879B; }\n\ninput:not([type='checkbox']) {\n  border: 1px solid #d6e3eb;\n  padding: 18px 20px;\n  height: 50px; }\n\ninput.invalid {\n  border-bottom: 1px solid #f967be; }\n\n.button-primary, .button-secondary {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border: none;\n  text-transform: uppercase;\n  font-size: 1.1em; }\n\n.button-primary {\n  border-radius: 10px;\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  -moz-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  background: #7985ff;\n  /* Old browsers */\n  background: -moz-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #6cb7ff 0%, #7985ff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n  /* IE6-9 */ }\n\n.button-secondary {\n  color: #8dacff;\n  background: transparent; }\n\nspan {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */ }\n\n#content-container {\n  position: absolute;\n  width: 80%;\n  height: 200%;\n  top: -105%;\n  z-index: 2;\n  border-radius: 5px;\n  background-color: #FFFFFF;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n  -webkit-box-shadow: 0 28px 37px 0 rgba(74, 144, 226, 0.1);\n  -moz-box-shadow: 0 28px 37px 0 rgba(74, 144, 226, 0.1);\n  box-shadow: 0 28px 37px 0 rgba(74, 144, 226, 0.1); }\n\n.button-primary, .button-secondary {\n  height: 50px;\n  text-transform: uppercase;\n  font-size: 1.1em;\n  position: relative;\n  cursor: pointer; }\n  .button-primary span, .button-secondary span {\n    position: absolute;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n\n.button-primary {\n  border-radius: 10px;\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  -moz-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  background: #7985ff;\n  /* Old browsers */\n  background: -moz-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #6cb7ff 0%, #7985ff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n  /* IE6-9 */\n  transition: box-shadow 0.3s ease-in-out; }\n  .button-primary:hover {\n    -webkit-box-shadow: 0 23px 15px -15px rgba(118, 115, 255, 0.5);\n    -moz-box-shadow: 0 23px 15px -15px rgba(118, 115, 255, 0.5);\n    box-shadow: 0 23px 15px -15px rgba(118, 115, 255, 0.5); }\n\n.button-secondary {\n  color: #8dacff; }\n\n.authentication-wrapper {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50%; }\n\n#authentication-container {\n  position: absolute;\n  width: 350px;\n  margin-top: -85px;\n  top: calc( 50% + 60px);\n  opacity: 0;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n  #authentication-container .authentication-header {\n    top: 90px;\n    height: 85px;\n    text-align: center;\n    margin-bottom: 35px;\n    position: relative; }\n    #authentication-container .authentication-header .authentication-header-login, #authentication-container .authentication-header .authentication-header-signup {\n      position: absolute; }\n    #authentication-container .authentication-header .authentication-header-title {\n      font-size: 1.8em;\n      font-weight: bold;\n      color: #6A7187;\n      margin-bottom: 10px; }\n    #authentication-container .authentication-header .authentication-header-subtitle {\n      font-size: 1em;\n      line-height: 1.45em;\n      color: #80879B;\n      padding: 0 5px; }\n  #authentication-container .authentication-footer {\n    margin-top: 25px;\n    position: fixed;\n    width: 100%; }\n    #authentication-container .authentication-footer .primary-btn-loading {\n      color: transparent;\n      box-shadow: none;\n      background: #8dacff;\n      /* Old browsers */\n      background: -moz-linear-gradient(left, #8dacff 0%, #8dacff 100%);\n      /* FF3.6-15 */\n      background: -webkit-linear-gradient(left, #8dacff 0%, #8dacff 100%);\n      /* Chrome10-25,Safari5.1-6 */\n      background: linear-gradient(to right, #8dacff 0%, #8dacff 100%);\n      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n      /* IE6-9 */ }\n    #authentication-container .authentication-footer .primary-btn-loading-animation {\n      background: #8dacff url(" + escape(__webpack_require__(/*! ../img/auth-loader-animation.gif */ "./src/_style/img/auth-loader-animation.gif")) + ") no-repeat center;\n      background-size: 35px; }\n    #authentication-container .authentication-footer .secondary-btn-loading {\n      color: transparent; }\n  #authentication-container .input-row {\n    margin-bottom: 15px; }\n  #authentication-container .input-name-wrapper .input-row {\n    width: 50%; }\n    #authentication-container .input-name-wrapper .input-row:first-child {\n      float: left; }\n    #authentication-container .input-name-wrapper .input-row:last-child {\n      float: right; }\n      #authentication-container .input-name-wrapper .input-row:last-child input {\n        border-left: none; }\n  #authentication-container .checkbox-wrapper {\n    height: 20px;\n    position: relative; }\n    #authentication-container .checkbox-wrapper label {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      -moz-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      -o-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%); }\n    #authentication-container .checkbox-wrapper a {\n      position: absolute;\n      right: 0;\n      top: 50%;\n      transform: translateY(-50%);\n      color: #7985ff;\n      font-size: 0.85em; }\n  #authentication-container .button-secondary {\n    margin-top: 10px; }\n\n@media screen and (max-width: 800px) {\n  #content-container {\n    width: 85%; } }\n\n@media screen and (max-width: 480px) {\n  #content-container {\n    width: calc( 100% - 20px);\n    margin: 0 auto; }\n  #authentication-container {\n    width: calc(100% - 55px); } }\n\n#dialog-container {\n  width: 455px;\n  height: 360px;\n  background-color: #FFFFFF;\n  margin: 30% auto auto;\n  position: absolute;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n  border-radius: 5px;\n  -webkit-box-shadow: 0 15px 65px 0 #dedde6;\n  -moz-box-shadow: 0 15px 65px 0 #dedde6;\n  box-shadow: 0 15px 65px 0 #dedde6;\n  opacity: 0; }\n  #dialog-container .close-dialog {\n    height: 14px;\n    width: 14px;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    background: url(" + escape(__webpack_require__(/*! ../img/icons/cancel-icon.svg */ "./src/_style/img/icons/cancel-icon.svg")) + ") no-repeat 40% 40%;\n    cursor: pointer; }\n  #dialog-container .dialog-title {\n    text-align: center;\n    font-weight: bold;\n    font-size: 1.3em;\n    color: #3c444e;\n    overflow: hidden;\n    max-height: 3.9em;\n    margin: 75px auto auto;\n    text-overflow: ellipsis;\n    max-width: 425px;\n    letter-spacing: 0.02em; }\n  #dialog-container .dialog-message {\n    color: #9da1a6;\n    text-align: center;\n    margin: 17px auto auto;\n    max-width: 300px;\n    font-size: 1em;\n    max-height: 2.7em;\n    overflow: hidden; }\n  #dialog-container .dialog-button-container {\n    display: inline-block;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    -moz-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n    -o-transform: translateX(-50%);\n    transform: translateX(-50%);\n    bottom: 30px; }\n  #dialog-container .dialog-submit-button {\n    width: 345px;\n    height: 50px;\n    font-size: 1.1em;\n    line-height: 50px;\n    text-overflow: ellipsis; }\n  #dialog-container .dialog-cancel-button {\n    height: 50px;\n    margin-top: 25px;\n    font-size: 1.1em;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    transition: all 0.5s ease-in-out; }\n    #dialog-container .dialog-cancel-button:hover {\n      border-color: #8dacff; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/forgot-password.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/forgot-password.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n/* ==========================================================================\r\n   HTML5 display definitions\r\n   ========================================================================== */\n* {\n  box-sizing: border-box; }\n\n/**\r\n * Reset browser margins and padding\r\n */\nhtml, body, div, section, article, aside, header, hgroup, footer, nav, h1, h2, h3, h4, h5, h6, p, blockquote,\naddress, time, span, em, strong, img, ol, ul, li, figure, canvas, video, th, td, tr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit; }\n\n/**\r\n * Correct `block` display not defined in IE 8/9.\r\n */\narticle, aside, details, figcaption, figure, footer,\nheader, hgroup, main, nav, section, summary {\n  display: block; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 8/9.\r\n */\naudio, canvas, video {\n  display: inline-block; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9.\r\n * Hide the `template` element in IE, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* ==========================================================================\r\n   Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background: transparent;\n  text-decoration: none;\n  color: inherit; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:link, a:visited, a:hover, a:active {\n  text-decoration: none;\n  outline: 0; }\n\na:hover {\n  cursor: pointer; }\n\n/* ==========================================================================\r\n   Typography\r\n   ========================================================================== */\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari 5 and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\nem {\n  font-style: italic; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/* ==========================================================================\r\n   Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow displayed oddly in IE 9.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/**\r\n * 1. Correct font family not being inherited in all browsers.\r\n * 2. Correct font size not being inherited in all browsers.\r\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\r\n */\nbutton, input, select, textarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  resize: none; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton, input {\n  line-height: normal;\n  outline: none; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton, select {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\ninput[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/** TODO Hide checkbox input */\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style: none; }\n\n/* ==========================================================================\r\n   Clearfix\r\n   ========================================================================== */\n/* For modern browsers */\n.clearfix::before, .clearfix::after {\n  content: \"\";\n  display: block; }\n\n.clearfix::after {\n  clear: both;\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \".\";\n  height: 0; }\n\n/* For IE 6/7 (trigger hasLayout) */\n.clearfix {\n  zoom: 1; }\n\n/* ==========================================================================\r\n   Inputs and buttons\r\n   ========================================================================== */\ninput, textarea {\n  color: #6A7187;\n  background-color: #FFFFFF; }\n\ninput, textarea, button {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\n/* Remove background highlight on touch from mobile devices */\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\ninput:focus, textarea:focus {\n  outline: none; }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #A6A9B4;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #A6A9B4; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #A6A9B4; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\nhtml, body {\n  height: 100%;\n  position: relative;\n  overflow: hidden; }\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  background-color: #F3F2FC;\n  color: #242246; }\n\n.checkbox-input {\n  cursor: pointer;\n  padding-left: 30px;\n  position: relative;\n  color: #6A7187;\n  font-size: 0.85em;\n  text-transform: none; }\n  .checkbox-input:before {\n    content: \"\";\n    top: -2px;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    display: block;\n    position: absolute;\n    border: 1px solid #d6e3eb; }\n\nlabel, input {\n  display: block;\n  width: 100%;\n  font-size: 0.85em; }\n\nlabel {\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #80879B; }\n\ninput:not([type='checkbox']) {\n  border: 1px solid #d6e3eb;\n  padding: 18px 20px;\n  height: 50px; }\n\ninput.invalid {\n  border-bottom: 1px solid #f967be; }\n\n.button-primary, .button-secondary {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border: none;\n  text-transform: uppercase;\n  font-size: 1.1em; }\n\n.button-primary {\n  border-radius: 10px;\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  -moz-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  background: #7985ff;\n  /* Old browsers */\n  background: -moz-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #6cb7ff 0%, #7985ff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n  /* IE6-9 */ }\n\n.button-secondary {\n  color: #8dacff;\n  background: transparent; }\n\nspan {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */ }\n\n#authentication-forgot-password-wrapper {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50%; }\n\n#authentication-forgot-password-container {\n  position: absolute;\n  width: 350px;\n  margin-top: -85px;\n  top: calc( 50% + 60px);\n  opacity: 0;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n  #authentication-forgot-password-container p {\n    text-align: center; }\n  #authentication-forgot-password-container #authentication-forgot-password-logo {\n    width: 170px;\n    height: 40px;\n    margin: auto auto 25px;\n    background: url(" + escape(__webpack_require__(/*! ../img/scrumbs-logo-test.png */ "./src/_style/img/scrumbs-logo-test.png")) + ") no-repeat;\n    background-size: 100%; }\n  #authentication-forgot-password-container #authentication-forgot-password-title {\n    font-size: 1em;\n    color: #80879B;\n    padding: 0 5px;\n    margin-bottom: 25px;\n    text-align: center;\n    line-height: 20px; }\n  #authentication-forgot-password-container #authentication-forgot-password-email-input {\n    margin-bottom: 5px; }\n    #authentication-forgot-password-container #authentication-forgot-password-email-input .invalid {\n      border-bottom: 1px solid #F55623; }\n  #authentication-forgot-password-container #authentication-forgot-password-error {\n    color: #F55623;\n    opacity: 0;\n    text-align: left; }\n  #authentication-forgot-password-container #authentication-forgot-password-button-send-instructions {\n    margin: 10px 0 25px;\n    text-align: center; }\n  #authentication-forgot-password-container .loading {\n    color: transparent;\n    box-shadow: none;\n    background: #8dacff;\n    /* Old browsers */\n    background: -moz-linear-gradient(left, #8dacff 0%, #8dacff 100%);\n    /* FF3.6-15 */\n    background: -webkit-linear-gradient(left, #8dacff 0%, #8dacff 100%);\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to right, #8dacff 0%, #8dacff 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n    /* IE6-9 */ }\n  #authentication-forgot-password-container .loading-animation {\n    background: #8dacff url(" + escape(__webpack_require__(/*! ../img/auth-loader-animation.gif */ "./src/_style/img/auth-loader-animation.gif")) + ") no-repeat center;\n    background-size: 35px; }\n  #authentication-forgot-password-container #authentication-forgot-password-button-back-to-login {\n    display: none; }\n  #authentication-forgot-password-container #authentication-forgot-password-remember {\n    font-size: 1em;\n    color: #80879B;\n    padding: 0 5px;\n    text-align: center;\n    display: inline; }\n  #authentication-forgot-password-container #authentication-forgot-password-try-logging-in {\n    color: #7985ff;\n    text-decoration: underline;\n    cursor: pointer; }\n\n@media screen and (max-width: 480px) {\n  #authentication-forgot-password-container {\n    width: calc(100% - 55px); }\n  #authentication-forgot-password-button-send-instructions {\n    font-size: 0.95em; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/header.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/header.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n/* ==========================================================================\r\n   HTML5 display definitions\r\n   ========================================================================== */\n* {\n  box-sizing: border-box; }\n\n/**\r\n * Reset browser margins and padding\r\n */\nhtml, body, div, section, article, aside, header, hgroup, footer, nav, h1, h2, h3, h4, h5, h6, p, blockquote,\naddress, time, span, em, strong, img, ol, ul, li, figure, canvas, video, th, td, tr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit; }\n\n/**\r\n * Correct `block` display not defined in IE 8/9.\r\n */\narticle, aside, details, figcaption, figure, footer,\nheader, hgroup, main, nav, section, summary {\n  display: block; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 8/9.\r\n */\naudio, canvas, video {\n  display: inline-block; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9.\r\n * Hide the `template` element in IE, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* ==========================================================================\r\n   Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background: transparent;\n  text-decoration: none;\n  color: inherit; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:link, a:visited, a:hover, a:active {\n  text-decoration: none;\n  outline: 0; }\n\na:hover {\n  cursor: pointer; }\n\n/* ==========================================================================\r\n   Typography\r\n   ========================================================================== */\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari 5 and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\nem {\n  font-style: italic; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/* ==========================================================================\r\n   Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow displayed oddly in IE 9.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/**\r\n * 1. Correct font family not being inherited in all browsers.\r\n * 2. Correct font size not being inherited in all browsers.\r\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\r\n */\nbutton, input, select, textarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  resize: none; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton, input {\n  line-height: normal;\n  outline: none; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton, select {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\ninput[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/** TODO Hide checkbox input */\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style: none; }\n\n/* ==========================================================================\r\n   Clearfix\r\n   ========================================================================== */\n/* For modern browsers */\n.clearfix::before, .clearfix::after {\n  content: \"\";\n  display: block; }\n\n.clearfix::after {\n  clear: both;\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \".\";\n  height: 0; }\n\n/* For IE 6/7 (trigger hasLayout) */\n.clearfix {\n  zoom: 1; }\n\n/* ==========================================================================\r\n   Inputs and buttons\r\n   ========================================================================== */\ninput, textarea {\n  color: #6A7187;\n  background-color: #FFFFFF; }\n\ninput, textarea, button {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\n/* Remove background highlight on touch from mobile devices */\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\ninput:focus, textarea:focus {\n  outline: none; }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #A6A9B4;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #A6A9B4; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #A6A9B4; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\nhtml, body {\n  height: 100%;\n  position: relative;\n  overflow: hidden; }\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  background-color: #F3F2FC;\n  color: #242246; }\n\n.checkbox-input {\n  cursor: pointer;\n  padding-left: 30px;\n  position: relative;\n  color: #6A7187;\n  font-size: 0.85em;\n  text-transform: none; }\n  .checkbox-input:before {\n    content: \"\";\n    top: -2px;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    display: block;\n    position: absolute;\n    border: 1px solid #d6e3eb; }\n\nlabel, input {\n  display: block;\n  width: 100%;\n  font-size: 0.85em; }\n\nlabel {\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #80879B; }\n\ninput:not([type='checkbox']) {\n  border: 1px solid #d6e3eb;\n  padding: 18px 20px;\n  height: 50px; }\n\ninput.invalid {\n  border-bottom: 1px solid #f967be; }\n\n.button-primary, .button-secondary {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border: none;\n  text-transform: uppercase;\n  font-size: 1.1em; }\n\n.button-primary {\n  border-radius: 10px;\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  -moz-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  background: #7985ff;\n  /* Old browsers */\n  background: -moz-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #6cb7ff 0%, #7985ff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n  /* IE6-9 */ }\n\n.button-secondary {\n  color: #8dacff;\n  background: transparent; }\n\nspan {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */ }\n\n#heading-container {\n  padding: 0 15px;\n  background-color: #FFFFFF;\n  position: relative;\n  z-index: 1000; }\n\n#header-container {\n  height: 50px;\n  position: relative; }\n  #header-container #app-logo {\n    width: 105px;\n    height: 26px;\n    left: 1%;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -o-transform: translateY(-50%);\n    transform: translateY(-50%);\n    background: url(" + escape(__webpack_require__(/*! ../img/scrumbs-logo-test.png */ "./src/_style/img/scrumbs-logo-test.png")) + ") no-repeat;\n    background-size: 100%; }\n  #header-container .header-buttons-container {\n    width: 180px;\n    height: 26px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n    #header-container .header-buttons-container button {\n      font-size: 0.79em;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      -moz-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n      -o-transform: translateY(-50%);\n      transform: translateY(-50%);\n      width: 100px;\n      height: 100%;\n      color: #80879B;\n      background: transparent;\n      border: none;\n      border-radius: 5px;\n      text-transform: uppercase;\n      transition: all 0.1s ease-in-out; }\n      #header-container .header-buttons-container button:last-child {\n        left: 105px; }\n      #header-container .header-buttons-container button:not(.active) {\n        border: 1px solid transparent; }\n        #header-container .header-buttons-container button:not(.active):hover {\n          border-color: #A6A9B4; }\n      #header-container .header-buttons-container button.active {\n        -webkit-box-shadow: 0 8px 10px -5px rgba(118, 115, 255, 0.5);\n        -moz-box-shadow: 0 8px 10px -5px rgba(118, 115, 255, 0.5);\n        box-shadow: 0 8px 10px -5px rgba(118, 115, 255, 0.5);\n        background: #7985ff;\n        /* Old browsers */\n        background: -moz-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n        /* FF3.6-15 */\n        background: -webkit-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n        /* Chrome10-25,Safari5.1-6 */\n        background: linear-gradient(to right, #6cb7ff 0%, #7985ff 100%);\n        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n        /* IE6-9 */\n        color: #FFFFFF; }\n        #header-container .header-buttons-container button.active:hover {\n          -webkit-box-shadow: 0 10px 10px -5px rgba(118, 115, 255, 0.5);\n          -moz-box-shadow: 0 10px 10px -5px rgba(118, 115, 255, 0.5);\n          box-shadow: 0 10px 10px -5px rgba(118, 115, 255, 0.5); }\n  #header-container .profile-wrapper {\n    right: 0;\n    width: 95px;\n    height: 30px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -o-transform: translateY(-50%);\n    transform: translateY(-50%); }\n    #header-container .profile-wrapper #header-button-add-record, #header-container .profile-wrapper #profile-container {\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      -moz-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n      -o-transform: translateY(-50%);\n      transform: translateY(-50%); }\n    #header-container .profile-wrapper #header-button-add-record {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      border: none;\n      background: #7ED321 url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MCAoNTQ5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkY0NDFCREJFLUIzREUtNDg5MS04NjNDLURBQ0I1NkJERTNEMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iVGVhbS1Ob3Rlcy05NTBweCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg1NS4wMDAwMDAsIC0yMC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iTmF2YmFyIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04NjQuNTIzODA5LDI0LjUyMzgwODYgTDg2MC40NzYxOTEsMjQuNTIzODA4NiBMODYwLjQ3NjE5MSwyMC40NzYxOTE0IEM4NjAuNDc2MTkxLDIwLjIxMzMzOTggODYwLjI2MzM0LDIwIDg2MCwyMCBDODU5LjczNjY2LDIwIDg1OS41MjM4MDksMjAuMjEzMzM5OCA4NTkuNTIzODA5LDIwLjQ3NjE5MTQgTDg1OS41MjM4MDksMjQuNTIzODA4NiBMODU1LjQ3NjE5MSwyNC41MjM4MDg2IEM4NTUuMjEyODUyLDI0LjUyMzgwODYgODU1LDI0LjczNzE0ODQgODU1LDI1IEM4NTUsMjUuMjYyODUxNiA4NTUuMjEyODUyLDI1LjQ3NjE5MTQgODU1LjQ3NjE5MSwyNS40NzYxOTE0IEw4NTkuNTIzODA5LDI1LjQ3NjE5MTQgTDg1OS41MjM4MDksMjkuNTIzODA4NiBDODU5LjUyMzgwOSwyOS43ODY2NjAyIDg1OS43MzY2NiwzMCA4NjAsMzAgQzg2MC4yNjMzNCwzMCA4NjAuNDc2MTkxLDI5Ljc4NjY2MDIgODYwLjQ3NjE5MSwyOS41MjM4MDg2IEw4NjAuNDc2MTkxLDI1LjQ3NjE5MTQgTDg2NC41MjM4MDksMjUuNDc2MTkxNCBDODY0Ljc4NzE0OCwyNS40NzYxOTE0IDg2NSwyNS4yNjI4NTE2IDg2NSwyNSBDODY1LDI0LjczNzE0ODQgODY0Ljc4NzE0OCwyNC41MjM4MDg2IDg2NC41MjM4MDksMjQuNTIzODA4NiBaIiBpZD0iYWRkLWljb24iPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\") no-repeat center;\n      -webkit-box-shadow: 0 7px 7px -2px rgba(126, 211, 33, 0.5);\n      -moz-box-shadow: 0 7px 7px -2px rgba(126, 211, 33, 0.5);\n      box-shadow: 0 7px 7px -2px rgba(126, 211, 33, 0.5);\n      margin-right: 15px; }\n    #header-container .profile-wrapper #profile-container, #header-container .profile-wrapper .profile-image {\n      display: inline-block; }\n    #header-container .profile-wrapper #profile-container {\n      right: 0;\n      cursor: pointer; }\n    #header-container .profile-wrapper .profile-image {\n      width: 30px;\n      height: 30px;\n      text-transform: uppercase;\n      font-weight: bold;\n      color: #605E77;\n      background: #FBFBFB;\n      border: none;\n      border-radius: 50%;\n      font-size: 0.85em;\n      -webkit-box-shadow: 0 0 0 1px rgba(178, 176, 196, 0.27);\n      -moz-box-shadow: 0 0 0 1px rgba(178, 176, 196, 0.27);\n      box-shadow: 0 0 0 1px rgba(178, 176, 196, 0.27);\n      margin-right: 3px; }\n    #header-container .profile-wrapper .profile-dropdown-icon {\n      width: 6px;\n      height: 10px;\n      border: none;\n      background: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI2cHgiIHZpZXdCb3g9IjAgMCAxMCA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgNTAgKDU0OTgzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5CMUM3MUUxQS0zRTAyLTQ4NkQtOEQ5OS0xNDY5NjVDQTFBRkE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlRlYW0tTm90ZXMtOTUwcHgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MjUuMDAwMDAwLCAtMjIuMDAwMDAwKSIgZmlsbD0iIzk2NzlGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ik5hdmJhciI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTMyLjU3Nzg5NiwyNS4yNzI4MjkyIEw5MjguMzg3MjkxLDI5LjU3MjUzNjggQzkyOC4xMjA3MTgsMjkuODQ2MTkxNCA5MjcuNjg4NTE1LDI5Ljg0NjE5MTQgOTI3LjQyMjA3MSwyOS41NzI1MzY4IEM5MjcuMTU1NjA2LDI5LjI5OTEyNTcgOTI3LjE1NTYwNiwyOC44NTU2NzkxIDkyNy40MjIwNzEsMjguNTgyMjkwMSBMOTMxLjEzMDExLDI0Ljc3NzcwNTkgTDkyNy40MjIxNzksMjAuOTczMjU0MyBDOTI3LjE1NTcxNCwyMC42OTk3MzI2IDkyNy4xNTU3MTQsMjAuMjU2MzMwMyA5MjcuNDIyMTc5LDE5Ljk4MjkxOTEgQzkyNy42ODg2NDQsMTkuNzA5Mzk3MyA5MjguMTIwODI1LDE5LjcwOTM5NzMgOTI4LjM4NzM5OSwxOS45ODI5MTkxIEw5MzIuNTc4MDA0LDI0LjI4MjY5MzIgQzkzMi43MTEyMzcsMjQuNDE5NDY1MSA5MzIuNzc3Nzc4LDI0LjU5ODUzMDIgOTMyLjc3Nzc3OCwyNC43Nzc2ODM3IEM5MzIuNzc3Nzc4LDI0Ljk1NjkyNTggOTMyLjcxMTEwOCwyNS4xMzYxMjM2IDkzMi41Nzc4OTYsMjUuMjcyODI5MiBaIiBpZD0iZGQtYXJyb3ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkzMC4wMDAwMDAsIDI0Ljc3Nzc3OCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTkzMC4wMDAwMDAsIC0yNC43Nzc3NzgpICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\") no-repeat center;\n      background-size: contain; }\n  #header-container #header-dropdown {\n    width: 125px;\n    position: absolute;\n    right: 5px;\n    top: 55px;\n    box-shadow: 0 5px 25px 0 rgba(107, 163, 254, 0.2);\n    z-index: 100;\n    display: none; }\n    #header-container #header-dropdown ul {\n      width: 100%;\n      height: 100%;\n      padding: 15px 0;\n      background-color: #FFFFFF;\n      border-radius: 5px; }\n      #header-container #header-dropdown ul li {\n        padding-left: 40px;\n        height: 25px;\n        background-color: #FFFFFF;\n        line-height: 30px;\n        cursor: pointer; }\n    #header-container #header-dropdown #header-dropdown-about {\n      background: url(" + escape(__webpack_require__(/*! ../img/icons/about-icon.svg */ "./src/_style/img/icons/about-icon.svg")) + ") no-repeat 17px 8px; }\n    #header-container #header-dropdown #header-dropdown-settings {\n      background: url(" + escape(__webpack_require__(/*! ../img/icons/settings-icon.svg */ "./src/_style/img/icons/settings-icon.svg")) + ") no-repeat 17px 8px; }\n    #header-container #header-dropdown #header-dropdown-sign-out {\n      background: url(" + escape(__webpack_require__(/*! ../img/icons/sign-out-icon.svg */ "./src/_style/img/icons/sign-out-icon.svg")) + ") no-repeat 17px 8px; }\n    #header-container #header-dropdown #header-dropdown-arrow {\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 6px 7px 7px;\n      border-color: transparent transparent #FFFFFF transparent;\n      position: absolute;\n      top: -5px;\n      right: 20px; }\n\n@media screen and (max-width: 480px) {\n  #header-container .header-buttons-container {\n    position: relative;\n    top: 80px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/prompt.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/prompt.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n#prompt-view-container {\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n  position: absolute;\n  top: 0; }\n\n#prompt-view-background {\n  width: 100%;\n  height: 100%;\n  background-color: #FBFBFB;\n  position: absolute;\n  opacity: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/records.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/records.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/_style/fonts/Lato-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/_style/fonts/Lato-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n/** Colors */\n/** Support colors (for gradients) */\n/** Complementary colors */\n/** Accents  */\n/** Text Colors */\n/**  Drop Shadows */\n/** Highlights */\nhtml, body {\n  height: 100%;\n  position: relative;\n  overflow: hidden; }\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  background-color: #F3F2FC;\n  color: #242246; }\n\n.checkbox-input {\n  cursor: pointer;\n  padding-left: 30px;\n  position: relative;\n  color: #6A7187;\n  font-size: 0.85em;\n  text-transform: none; }\n  .checkbox-input:before {\n    content: \"\";\n    top: -2px;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    display: block;\n    position: absolute;\n    border: 1px solid #d6e3eb; }\n\nlabel, input {\n  display: block;\n  width: 100%;\n  font-size: 0.85em; }\n\nlabel {\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #80879B; }\n\ninput:not([type='checkbox']) {\n  border: 1px solid #d6e3eb;\n  padding: 18px 20px;\n  height: 50px; }\n\ninput.invalid {\n  border-bottom: 1px solid #f967be; }\n\n.button-primary, .button-secondary {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border: none;\n  text-transform: uppercase;\n  font-size: 1.1em; }\n\n.button-primary {\n  border-radius: 10px;\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  -moz-box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  box-shadow: 0 20px 15px -15px rgba(118, 115, 255, 0.5);\n  background: #7985ff;\n  /* Old browsers */\n  background: -moz-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(left, #6cb7ff 0%, #7985ff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #6cb7ff 0%, #7985ff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$support-color, endColorstr=$color, GradientType=1 );\n  /* IE6-9 */ }\n\n.button-secondary {\n  color: #8dacff;\n  background: transparent; }\n\nspan {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */ }\n\n#records-view-container {\n  padding: 20px 17px; }\n\n.record-container {\n  border-bottom: 1px solid #e7e5ff; }\n  .record-container .record-header {\n    height: 50px;\n    cursor: pointer;\n    font-weight: bold;\n    font-size: 1em;\n    position: relative; }\n    .record-container .record-header.active {\n      font-size: 1.2em; }\n      .record-container .record-header.active .record-name {\n        color: #242246; }\n    .record-container .record-header .record-name, .record-container .record-header .record-dropdown-icon {\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      -moz-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n      -o-transform: translateY(-50%);\n      transform: translateY(-50%); }\n    .record-container .record-header .record-name {\n      position: absolute; }\n    .record-container .record-header .record-dropdown-icon {\n      right: 10px;\n      width: 10px;\n      height: 10px;\n      background: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI2cHgiIHZpZXdCb3g9IjAgMCAxMCA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgNTAgKDU0OTgzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5CMUM3MUUxQS0zRTAyLTQ4NkQtOEQ5OS0xNDY5NjVDQTFBRkE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlRlYW0tTm90ZXMtOTUwcHgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MjUuMDAwMDAwLCAtMjIuMDAwMDAwKSIgZmlsbD0iIzk2NzlGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ik5hdmJhciI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTMyLjU3Nzg5NiwyNS4yNzI4MjkyIEw5MjguMzg3MjkxLDI5LjU3MjUzNjggQzkyOC4xMjA3MTgsMjkuODQ2MTkxNCA5MjcuNjg4NTE1LDI5Ljg0NjE5MTQgOTI3LjQyMjA3MSwyOS41NzI1MzY4IEM5MjcuMTU1NjA2LDI5LjI5OTEyNTcgOTI3LjE1NTYwNiwyOC44NTU2NzkxIDkyNy40MjIwNzEsMjguNTgyMjkwMSBMOTMxLjEzMDExLDI0Ljc3NzcwNTkgTDkyNy40MjIxNzksMjAuOTczMjU0MyBDOTI3LjE1NTcxNCwyMC42OTk3MzI2IDkyNy4xNTU3MTQsMjAuMjU2MzMwMyA5MjcuNDIyMTc5LDE5Ljk4MjkxOTEgQzkyNy42ODg2NDQsMTkuNzA5Mzk3MyA5MjguMTIwODI1LDE5LjcwOTM5NzMgOTI4LjM4NzM5OSwxOS45ODI5MTkxIEw5MzIuNTc4MDA0LDI0LjI4MjY5MzIgQzkzMi43MTEyMzcsMjQuNDE5NDY1MSA5MzIuNzc3Nzc4LDI0LjU5ODUzMDIgOTMyLjc3Nzc3OCwyNC43Nzc2ODM3IEM5MzIuNzc3Nzc4LDI0Ljk1NjkyNTggOTMyLjcxMTEwOCwyNS4xMzYxMjM2IDkzMi41Nzc4OTYsMjUuMjcyODI5MiBaIiBpZD0iZGQtYXJyb3ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkzMC4wMDAwMDAsIDI0Ljc3Nzc3OCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTkzMC4wMDAwMDAsIC0yNC43Nzc3NzgpICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\") no-repeat center;\n      background-size: contain; }\n    .record-container .record-header .record-options-wrapper {\n      position: absolute;\n      top: 0;\n      right: -17px;\n      width: 33px;\n      height: 65px; }\n      .record-container .record-header .record-options-wrapper:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: white; }\n    .record-container .record-header .record-options-container {\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n      border-radius: 0 5px 5px 0;\n      overflow: hidden; }\n      .record-container .record-header .record-options-container button {\n        position: absolute;\n        left: 0;\n        width: 100%;\n        height: 32px;\n        background-color: #7985ff;\n        border: none; }\n      .record-container .record-header .record-options-container .button-delete-record {\n        bottom: 0; }\n    .record-container .record-header .edit-record-input {\n      border: 0;\n      padding-left: 0;\n      font-weight: bold;\n      font-size: 1.03em; }\n  .record-container .record-body {\n    position: relative;\n    background-color: #FFFFFF; }\n    .record-container .record-body:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      pointer-events: none;\n      box-shadow: inset 0 90px 50px -50px #FFFFFF;\n      opacity: 0;\n      transition: opacity 0.5s; }\n    .record-container .record-body.scrolled:after {\n      opacity: 1; }\n    .record-container .record-body .log-wrapper {\n      max-height: 382px;\n      padding: 10px 15px 0 5px;\n      overflow: auto; }\n      .record-container .record-body .log-wrapper::-webkit-scrollbar {\n        width: 7px;\n        background-color: #FFFFFF; }\n      .record-container .record-body .log-wrapper::-webkit-scrollbar-track {\n        border-radius: 10px;\n        background: #FFFFFF; }\n      .record-container .record-body .log-wrapper::-webkit-scrollbar-thumb {\n        border-radius: 10px;\n        background: #F3F2FC;\n        -webkit-transition: background 1s; }\n      .record-container .record-body .log-wrapper .log-scroll-cover {\n        height: calc(100% - 80px);\n        width: 10px;\n        background-color: #FFFFFF;\n        position: absolute;\n        top: 0;\n        right: 0; }\n    .record-container .record-body .log-header {\n      display: inline-block;\n      margin-bottom: 10px;\n      padding: 3px 10px;\n      color: #FFFFFF;\n      font-size: 0.715em;\n      border-radius: 5px; }\n    .record-container .record-body .log-body .note {\n      font-size: 0.88em;\n      line-height: 17px;\n      margin-bottom: 10px; }\n    .record-container .record-body .record-footer {\n      margin: 15px 0;\n      padding: 0 5px; }\n      .record-container .record-body .record-footer .note-input {\n        width: 100%;\n        min-height: 65px;\n        border: none;\n        padding: 15px;\n        background: #F6F6F8;\n        border-radius: 5px;\n        font-size: 0.85em; }\n\n.active-record {\n  border-bottom: 1px solid #e7e5ff; }\n\n.active-line-color-01 {\n  border-bottom: 1px solid rgba(255, 197, 0, 0.25); }\n\n.active-line-color-02 {\n  border-bottom: 1px solid rgba(231, 158, 7, 0.25); }\n\n.active-line-color-03 {\n  border-bottom: 1px solid rgba(245, 86, 35, 0.25); }\n\n.active-line-color-04 {\n  border-bottom: 1px solid rgba(208, 2, 27, 0.25); }\n\n.active-line-color-05 {\n  border-bottom: 1px solid rgba(247, 95, 163, 0.25); }\n\n.active-line-color-06 {\n  border-bottom: 1px solid rgba(144, 19, 254, 0.25); }\n\n.active-line-color-07 {\n  border-bottom: 1px solid rgba(47, 133, 234, 0.25); }\n\n.active-line-color-08 {\n  border-bottom: 1px solid rgba(0, 179, 208, 0.25); }\n\n.active-line-color-09 {\n  border-bottom: 1px solid rgba(0, 208, 18, 0.25); }\n\n.active-line-color-10 {\n  border-bottom: 1px solid rgba(145, 185, 27, 0.25); }\n\n.primary-highlight {\n  background-color: #FFC500; }\n\n.secondary-highlight {\n  background-color: #E79E07; }\n\n.tertiary-highlight {\n  background-color: #F55623; }\n\n.quaternary-highlight {\n  background-color: #D0021B; }\n\n.quinary-highlight {\n  background-color: #F75FA3; }\n\n.senary-highlight {\n  background-color: #9013FE; }\n\n.septenary-highlight {\n  background-color: #2F85EA; }\n\n.octonary-highlight {\n  background-color: #00B3D0; }\n\n.nonary-highlight {\n  background-color: #00D012; }\n\n.denary-highlight {\n  background-color: #91B91B; }\n\n.record-options {\n  width: 60px;\n  height: 80px;\n  top: 80px;\n  position: absolute;\n  background-color: #7985ff;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  z-index: 1; }\n  .record-options .record-option-segment {\n    height: 50%;\n    cursor: pointer; }\n\n#edit-record-btn {\n  border-top-right-radius: 8px;\n  background: url(" + escape(__webpack_require__(/*! ../img/icons/edit-icon.svg */ "./src/_style/img/icons/edit-icon.svg")) + ") no-repeat 75% 50%; }\n  #edit-record-btn:hover {\n    background-color: #8597ff; }\n\n#delete-record-btn {\n  background: url(" + escape(__webpack_require__(/*! ../img/icons/delete-icon.svg */ "./src/_style/img/icons/delete-icon.svg")) + ") no-repeat 70% 50%;\n  border-bottom-right-radius: 8px; }\n  #delete-record-btn:hover {\n    background-color: #8597ff; }\n\n@media screen and (max-width: 480px) {\n  .record-options {\n    top: 110px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./src/EntryPoint.ts":
/*!***************************!*\
  !*** ./src/EntryPoint.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ViewManager_1 = __webpack_require__(/*! ./core/ViewManager */ "./src/core/ViewManager.ts");
window.onload = function () {
    new ViewManager_1.ViewManager();
};


/***/ }),

/***/ "./src/_style/fonts/Lato-Bold.ttf":
/*!****************************************!*\
  !*** ./src/_style/fonts/Lato-Bold.ttf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fonts/Lato-Bold.ttf";

/***/ }),

/***/ "./src/_style/fonts/Lato-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/_style/fonts/Lato-Regular.ttf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fonts/Lato-Regular.ttf";

/***/ }),

/***/ "./src/_style/img/auth-loader-animation.gif":
/*!**************************************************!*\
  !*** ./src/_style/img/auth-loader-animation.gif ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/auth-loader-animation.gif";

/***/ }),

/***/ "./src/_style/img/icons/about-icon.svg":
/*!*********************************************!*\
  !*** ./src/_style/img/icons/about-icon.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/about-icon.svg";

/***/ }),

/***/ "./src/_style/img/icons/cancel-icon.svg":
/*!**********************************************!*\
  !*** ./src/_style/img/icons/cancel-icon.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/cancel-icon.svg";

/***/ }),

/***/ "./src/_style/img/icons/delete-icon.svg":
/*!**********************************************!*\
  !*** ./src/_style/img/icons/delete-icon.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/delete-icon.svg";

/***/ }),

/***/ "./src/_style/img/icons/edit-icon.svg":
/*!********************************************!*\
  !*** ./src/_style/img/icons/edit-icon.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/edit-icon.svg";

/***/ }),

/***/ "./src/_style/img/icons/settings-icon.svg":
/*!************************************************!*\
  !*** ./src/_style/img/icons/settings-icon.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/settings-icon.svg";

/***/ }),

/***/ "./src/_style/img/icons/sign-out-icon.svg":
/*!************************************************!*\
  !*** ./src/_style/img/icons/sign-out-icon.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/sign-out-icon.svg";

/***/ }),

/***/ "./src/_style/img/scrumbs-logo-test.png":
/*!**********************************************!*\
  !*** ./src/_style/img/scrumbs-logo-test.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/scrumbs-logo-test.png";

/***/ }),

/***/ "./src/_style/style-sheets/authentication.scss":
/*!*****************************************************!*\
  !*** ./src/_style/style-sheets/authentication.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./authentication.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/blockers.scss":
/*!***********************************************!*\
  !*** ./src/_style/style-sheets/blockers.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./blockers.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/blockers.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/dialog.scss":
/*!*********************************************!*\
  !*** ./src/_style/style-sheets/dialog.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./dialog.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/dialog.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/forgot-password.scss":
/*!******************************************************!*\
  !*** ./src/_style/style-sheets/forgot-password.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./forgot-password.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/forgot-password.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/header.scss":
/*!*********************************************!*\
  !*** ./src/_style/style-sheets/header.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./header.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/header.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/prompt.scss":
/*!*********************************************!*\
  !*** ./src/_style/style-sheets/prompt.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./prompt.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/prompt.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/records.scss":
/*!**********************************************!*\
  !*** ./src/_style/style-sheets/records.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./records.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/records.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_view-templates/authentication.html":
/*!*************************************************!*\
  !*** ./src/_view-templates/authentication.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"authentication-wrapper\">\r\n\r\n    <div id=\"authentication-container\">\r\n\r\n\r\n        <div class=\"authentication-header\">\r\n\r\n            <div id=\"authentication-header-login\" class=\"authentication-header-login\">\r\n\r\n                <h1 id=\"authentication-login-title\" class=\"authentication-header-title\">Welcome Back!</h1>\r\n\r\n                <p id=\"authentication-login-subtitle\" class=\"authentication-header-subtitle\">Enter your email and password below and you'll be on your way.</p>\r\n\r\n            </div>\r\n\r\n\r\n            <div id=\"authentication-header-signup\" class=\"authentication-header-signup\">\r\n\r\n                <h1 id=\"authentication-signup-title\" class=\"authentication-header-title\">Create your Account!</h1>\r\n\r\n                <p id=\"authentication-signup-subtitle\" class=\"authentication-header-subtitle\">Semper mollis urna velit nulla, nec a viverra pellentesque hendrerit, class euismod nibh sed, torquent rhoncus wisi ea dictum.</p>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- .authentication-group-notes -->\r\n\r\n\r\n\r\n        <div id=\"authentication-body\" class=\"authentication-body\">\r\n\r\n            <div class=\"input-wrapper\">\r\n\r\n                <div id=\"input-name-wrapper\" class=\"input-name-wrapper clearfix\">\r\n\r\n                    <div class=\"input-row\">\r\n                        <label id=\"authentication-first-name-label\" for=\"authentication-first-name\">first name</label>\r\n                        <input id=\"authentication-first-name\" type=\"text\" placeholder=\"Enter your first name\">\r\n                    </div>\r\n\r\n                    <div class=\"input-row\">\r\n                        <label id=\"authentication-last-name-label\" for=\"authentication-last-name\">last name</label>\r\n                        <input id=\"authentication-last-name\" type=\"text\" placeholder=\"Enter your last name\">\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- .input-name-wrapper -->\r\n\r\n\r\n                <div class=\"input-row\">\r\n                    <label id=\"authentication-email-label\" for=\"authentication-email\">email</label>\r\n                    <input id=\"authentication-email\" type=\"email\" placeholder=\"Enter your email\" value=\"andrei@ildiesign.com\">\r\n                </div>\r\n                <!-- email -->\r\n\r\n\r\n                <div class=\"input-row\">\r\n                    <label id=\"authentication-password-label\" for=\"authentication-password\">password</label>\r\n                    <input id=\"authentication-password\" type=\"password\" placeholder=\"Enter your password\" value=\"asd123\">\r\n                </div>\r\n                <!-- passowrd -->\r\n\r\n\r\n            </div>\r\n            <!-- .input-wrapper -->\r\n\r\n\r\n            <div id=\"checkbox-wrapper\" class=\"checkbox-wrapper\">\r\n\r\n                <input type=\"checkbox\" id=\"authentication-remember-me\">\r\n                <label id=\"authentication-remember-me-label\" class=\"checkbox-input\" for=\"authentication-remember-me\">Remember Me</label>\r\n\r\n                <a href=\"#\" id=\"authentication-forgot-password\">Forgot Password?</a>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- .authentication-body -->\r\n\r\n\r\n        <div id=\"authentication-footer\" class=\"authentication-footer\">\r\n\r\n            <div id=\"authentication-button-action\" class=\"button-primary\">\r\n\r\n                <span id=\"action-span\">login</span>\r\n\r\n            </div>\r\n\r\n            <div id=\"authentication-button-switch\" class=\"button-secondary\">\r\n\r\n                <span id=\"switch-span\">sign up</span>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";

/***/ }),

/***/ "./src/_view-templates/dialog.html":
/*!*****************************************!*\
  !*** ./src/_view-templates/dialog.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span id=\"close-dialog\" class=\"close-dialog\"></span>\r\n\r\n<p id=\"dialog-title\" class=\"dialog-title\"></p>\r\n\r\n<p id=\"dialog-message\" class=\"dialog-message\"></p>\r\n\r\n<div id=\"dialog-button-container\" class=\"dialog-button-container\" >\r\n\r\n    <button id=\"dialog-submit-button\" class=\"button-primary dialog-submit-button\"></button>\r\n    <button id=\"dialog-cancel-button\" class=\"button-secondary dialog-cancel-button\"></button>\r\n\r\n</div>\r\n";

/***/ }),

/***/ "./src/_view-templates/forgot-password.html":
/*!**************************************************!*\
  !*** ./src/_view-templates/forgot-password.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div id=\"authentication-forgot-password-wrapper\">\r\n\r\n\r\n    <div id=\"authentication-forgot-password-container\">\r\n\r\n        <div id=\"authentication-forgot-password-logo\"></div>\r\n\r\n        <p id=\"authentication-forgot-password-title\">Forgot Your Password? Don't worry, we got your back.</p>\r\n\r\n\r\n        <div class=\"input-row\" id=\"authentication-forgot-password-email-input-container\">\r\n            <label id=\"authentication-forgot-password-email-label\" for=\"authentication-forgot-password-email-input\">email</label>\r\n            <input id=\"authentication-forgot-password-email-input\" type=\"email\" placeholder=\"Enter your email\" value=\"andrei@ildiesign.com\">\r\n        </div>\r\n        <!-- email -->\r\n\r\n        <p id=\"authentication-forgot-password-error\">Email input validation.</p>\r\n\r\n\r\n\r\n        <div id=\"authentication-forgot-password-footer\" class=\"authentication-footer\">\r\n\r\n            <div id=\"authentication-forgot-password-button-send-instructions\" class=\"button-primary\">\r\n\r\n                <span id=\"authentication-forgot-password-send-instructions-span\">Send Instructions</span>\r\n\r\n            </div>\r\n\r\n            <div id=\"authentication-forgot-password-button-back-to-login\" class=\"button-primary\">\r\n\r\n                <span id=\"authentication-forgot-password-back-to-login-span\">Back to Login</span>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <p id=\"authentication-forgot-password-footer-text\"><span id=\"authentication-forgot-password-remember\">Did you remember your password? </span><span id=\"authentication-forgot-password-try-logging-in\">Try logging in</span></p>\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ "./src/_view-templates/header.html":
/*!*****************************************!*\
  !*** ./src/_view-templates/header.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"header-container\">\r\n\r\n\r\n    <a href=\"#\" id=\"app-logo\"></a>\r\n\r\n    <div id=\"header-buttons-container\" class=\"header-buttons-container\">\r\n\r\n        <button id=\"records-button\" class=\"active\">scrum</button>\r\n        <button id=\"blockers-button\">blockers</button>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"profile-wrapper clearfix\">\r\n\r\n        <button id=\"header-button-add-record\"></button>\r\n\r\n        <div id=\"profile-container\">\r\n\r\n            <button id=\"profile-image\" class=\"profile-image\">XX</button>\r\n            <button id=\"profile-dropdown-icon\" class=\"profile-dropdown-icon\"></button>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"header-dropdown\">\r\n\r\n\r\n        <ul id=\"header-dropdown-list\">\r\n\r\n            <li id=\"header-dropdown-about\" class=\"header-dropdown-list-item\">About</li>\r\n            <li id=\"header-dropdown-settings\" class=\"header-dropdown-list-item\">Settings</li>\r\n            <li id=\"header-dropdown-sign-out\" class=\"header-dropdown-list-item\">Sign Out</li>\r\n\r\n        </ul>\r\n\r\n        <div id=\"header-dropdown-arrow\"></div>\r\n\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ "./src/_view-templates/record-options.html":
/*!*************************************************!*\
  !*** ./src/_view-templates/record-options.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div id=\"edit-record-btn\" class=\"record-option-segment\" ></div>\r\n<div id=\"delete-record-btn\" class=\"record-option-segment\" ></div>";

/***/ }),

/***/ "./src/authentication/Authentication.ts":
/*!**********************************************!*\
  !*** ./src/authentication/Authentication.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AuthenticationNotifications_1 = __webpack_require__(/*! ./AuthenticationNotifications */ "./src/authentication/AuthenticationNotifications.ts");
var ValidationHelper_1 = __webpack_require__(/*! ../helpers/ValidationHelper */ "./src/helpers/ValidationHelper.ts");
var SignUpModel_1 = __webpack_require__(/*! ../connection/models/SignUpModel */ "./src/connection/models/SignUpModel.ts");
var LoginModel_1 = __webpack_require__(/*! ../connection/models/LoginModel */ "./src/connection/models/LoginModel.ts");
var StringPointers_1 = __webpack_require__(/*! ../languages/StringPointers */ "./src/languages/StringPointers.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ../core/ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var ViewComponent_1 = __webpack_require__(/*! ../core/ViewComponent */ "./src/core/ViewComponent.ts");
var HTMLHelper_1 = __webpack_require__(/*! ../helpers/HTMLHelper */ "./src/helpers/HTMLHelper.ts");
var Language_1 = __webpack_require__(/*! ../languages/Language */ "./src/languages/Language.ts");
var TweenLite = gsap.TweenLite;
var Power1 = gsap.Power1;
var Power0 = gsap.Power0;
var Back = gsap.Back;
//CSS
__webpack_require__(/*! ../_style/style-sheets/authentication.scss */ "./src/_style/style-sheets/authentication.scss");
//HTML template
var template = __webpack_require__(/*! ../_view-templates/authentication.html */ "./src/_view-templates/authentication.html");
var Authentication = /** @class */ (function (_super) {
    __extends(Authentication, _super);
    function Authentication(view, container) {
        var _this = _super.call(this, view, container) || this;
        console.info("Authentication view component initiated!");
        _this.screenWidth = window.innerWidth;
        _this.screenHeight = window.innerHeight;
        _this.contentContainerOffset = _this.screenWidth > 480 ? "75px" : "110px";
        _this.authStateLogin = true;
        _this.container.innerHTML = template;
        _this.authenticationContainer = document.getElementById("authentication-container");
        _this.contentContainer = document.getElementById("content-container");
        _this.authLoginHeader = document.getElementById("authentication-header-login");
        _this.authSignUpHeader = document.getElementById("authentication-header-signup");
        _this.authenticationBody = document.getElementById("authentication-body");
        _this.nameInputWrapper = document.getElementById("input-name-wrapper");
        _this.firstNameInput = document.getElementById("authentication-first-name");
        _this.lastNameInput = document.getElementById("authentication-last-name");
        _this.emailInput = document.getElementById("authentication-email");
        _this.passwordInput = document.getElementById("authentication-password");
        _this.checkboxSection = document.getElementById("checkbox-wrapper");
        _this.rememberMe = document.getElementById("authentication-remember-me");
        _this.forgotPassword = document.getElementById("authentication-forgot-password");
        _this.authFooter = document.getElementById("authentication-footer");
        _this.actionBtn = document.getElementById("authentication-button-action");
        _this.actionBtnContent = document.getElementById("action-span");
        _this.switchBtn = document.getElementById("authentication-button-switch");
        _this.switchBtnContent = document.getElementById("switch-span");
        _this.translateComponent();
        _this.authSignUpHeader.style.opacity = "0";
        _this.nameInputWrapper.style.opacity = "0";
        _this.container.style.display = "block";
        /** Bind "this" to handlers */
        _this.actionBtnHandler = _this.actionBtnHandler.bind(_this);
        _this.switchBtnHandler = _this.switchBtnHandler.bind(_this);
        _this.firstNameInputHandler = _this.firstNameInputHandler.bind(_this);
        _this.lastNameInputHandler = _this.lastNameInputHandler.bind(_this);
        _this.emailInputHandler = _this.emailInputHandler.bind(_this);
        _this.passwordInputHandler = _this.passwordInputHandler.bind(_this);
        _this.submitFormHandler = _this.submitFormHandler.bind(_this);
        _this.mobileInputFocusHandler = _this.mobileInputFocusHandler.bind(_this);
        _this.mobileInputBlurHandler = _this.mobileInputBlurHandler.bind(_this);
        _this.forgotPasswordHandler = _this.forgotPasswordHandler.bind(_this);
        _this.enterScene();
        return _this;
    }
    Authentication.prototype.registerEventListeners = function () {
        this.actionBtn.addEventListener("click", this.actionBtnHandler, true);
        this.switchBtn.addEventListener("click", this.switchBtnHandler, true);
        this.firstNameInput.addEventListener("click", this.firstNameInputHandler, true);
        this.lastNameInput.addEventListener("click", this.lastNameInputHandler, true);
        this.emailInput.addEventListener("click", this.emailInputHandler, true);
        this.passwordInput.addEventListener("click", this.passwordInputHandler, true);
        this.forgotPassword.addEventListener("click", this.forgotPasswordHandler);
        document.addEventListener("keypress", this.submitFormHandler, true);
    };
    Authentication.prototype.unregisterEventListeners = function () {
        console.log("Trying to remove event listeners");
        this.actionBtn.removeEventListener("click", this.actionBtnHandler, true);
        this.switchBtn.removeEventListener("click", this.switchBtnHandler, true);
        this.firstNameInput.removeEventListener("click", this.firstNameInputHandler, true);
        this.lastNameInput.removeEventListener("click", this.lastNameInputHandler, true);
        this.emailInput.removeEventListener("click", this.emailInputHandler, true);
        this.passwordInput.removeEventListener("click", this.passwordInputHandler, true);
        this.forgotPassword.removeEventListener("click", this.forgotPasswordHandler);
        document.removeEventListener("keypress", this.submitFormHandler, true);
    };
    Authentication.prototype.actionBtnHandler = function () {
        var _this = this;
        this.animateButtonClick();
        if (this.loadingState)
            return;
        if (this.authStateLogin && this.validateForLogin()) {
            this.setButtonsLoadingState();
            this.connection.login(new LoginModel_1.LoginModel(this.emailInput.value, this.passwordInput.value), function (data) {
                _this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.LOGIN_SUCCESS, data);
                _this.removeButtonsLoadingState();
            }, function (message) {
                _this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.LOGIN_FAILURE, message);
                _this.removeButtonsLoadingState();
            });
        }
        else if (!this.authStateLogin && this.validateForSignUp()) {
            this.setButtonsLoadingState();
            this.connection.signUp(new SignUpModel_1.SignUpModel(this.firstNameInput.value, this.lastNameInput.value, this.emailInput.value, this.passwordInput.value), function (data) {
                _this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.SIGN_UP_SUCCESS, data);
                _this.removeButtonsLoadingState();
            }, function (message) {
                _this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.SIGN_UP_FAILURE, message);
                _this.removeButtonsLoadingState();
            });
        }
        else {
            console.warn("Invalid input configuration for action button.");
        }
    };
    Authentication.prototype.switchBtnHandler = function () {
        if (this.loadingState)
            return;
        if (this.authStateLogin) {
            this.switchToSignUpState();
        }
        else {
            this.switchToLoginState();
        }
    };
    Authentication.prototype.firstNameInputHandler = function () {
        TweenLite.to(this.firstNameInput, 0.3, { css: { className: "-=invalid" }, ease: Power1.easeOut });
    };
    Authentication.prototype.lastNameInputHandler = function () {
        TweenLite.to(this.lastNameInput, 0.3, { css: { className: "-=invalid" }, ease: Power1.easeOut });
    };
    Authentication.prototype.emailInputHandler = function () {
        TweenLite.to(this.emailInput, 0.3, { css: { className: "-=invalid" }, ease: Power1.easeOut });
    };
    Authentication.prototype.passwordInputHandler = function () {
        TweenLite.to(this.passwordInput, 0.3, { css: { className: "-=invalid" }, ease: Power1.easeOut });
    };
    Authentication.prototype.submitFormHandler = function (e) {
        var key = e.which || e.keyCode;
        if (key === 13)
            this.actionBtnHandler();
    };
    Authentication.prototype.mobileInputFocusHandler = function (e) {
        var corrector = 200;
        var elementDistance = HTMLHelper_1.HTMLHelper.getPosition(e.target);
        var inputDistanceTop = elementDistance.y - corrector;
        var windowHeight = document.body.scrollHeight;
        var halfScreen = windowHeight / 2;
        var elementHeight = e.target.offsetHeight;
        var distance = inputDistanceTop + elementHeight;
        console.log("total distance: " + distance);
        console.log("is over the top? : " + (distance > halfScreen));
        if (distance > halfScreen) {
            TweenLite.to(this.contentContainer, 0.2, { top: "-=" + (distance - halfScreen), ease: Power1.easeOut });
        }
    };
    Authentication.prototype.mobileInputBlurHandler = function (e) {
        TweenLite.to(this.contentContainer, 0.2, { top: "-105%", ease: Power1.easeOut });
    };
    Authentication.prototype.forgotPasswordHandler = function (e) {
        this.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH);
    };
    Authentication.prototype.translateComponent = function () {
        document.getElementById("authentication-login-title").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_TITLE_LOGIN);
        document.getElementById("authentication-login-subtitle").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_SUBTITLE_LOGIN);
        document.getElementById("authentication-signup-title").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_TITLE_SIGN_UP);
        document.getElementById("authentication-signup-subtitle").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_SUBTITLE_SIGN_UP);
        document.getElementById("authentication-first-name-label").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_FIRST_NAME_LABEL);
        document.getElementById("authentication-first-name").placeholder = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_FIRST_NAME_PLACEHOLDER);
        document.getElementById("authentication-last-name-label").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_LAST_NAME_LABEL);
        document.getElementById("authentication-last-name").placeholder = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_LAST_NAME_PLACEHOLDER);
        document.getElementById("authentication-email-label").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_EMAIL_LABEL);
        document.getElementById("authentication-email").placeholder = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_EMAIL_PLACEHOLDER);
        document.getElementById("authentication-password-label").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_PASSWORD_LABEL);
        document.getElementById("authentication-password").placeholder = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_PASSWORD_PLACEHOLDER);
        document.getElementById("authentication-remember-me-label").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_REMEMBER_ME);
        document.getElementById("authentication-forgot-password").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_FORGOT_PASSWORD);
        document.getElementById("action-span").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_LOGIN);
        document.getElementById("switch-span").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_SIGN_UP);
    };
    Authentication.prototype.enterScene = function (enterType) {
        TweenLite.to(this.authenticationContainer, 0.4, { css: { opacity: 1, top: "calc(50% + 50px)" } });
        if (enterType !== ViewExitTypes_1.ViewExitTypes.SWITCH) {
            this.registerEventListeners();
            this.switchToLoginState();
            this.container.style.display = "block";
        }
    };
    Authentication.prototype.exitScene = function (exitType) {
        if (exitType === ViewExitTypes_1.ViewExitTypes.SWITCH) {
            var self_1 = this;
            TweenLite.to(this.authenticationContainer, 0.25, { opacity: 0 });
            TweenLite.to(this.authenticationContainer, 0.5, { css: { top: "calc(50% + 60px)" }, onComplete: function () {
                    self_1.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.FORGOT_PASSWORD);
                } });
        }
        else {
            _super.prototype.exitScene.call(this, exitType);
            this.unregisterEventListeners();
            var self_2 = this;
            TweenLite.to(this.contentContainer, 0.4, { css: { top: this.contentContainerOffset }, ease: Back.easeOut.config(0.25), onComplete: function () {
                    self_2.container.style.display = "none";
                    self_2.view.componentExited(self_2.name);
                } });
        }
    };
    Authentication.prototype.switchToSignUpState = function () {
        var _this = this;
        this.authStateLogin = false;
        TweenLite.to(this.actionBtnContent, 0.15, { opacity: 0, onComplete: function () {
                _this.actionBtnContent.innerText = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_SIGN_UP);
            } });
        TweenLite.to(this.actionBtnContent, 0.3, { opacity: 1, delay: 0.2 });
        TweenLite.to(this.switchBtnContent, 0.15, { opacity: 0, onComplete: function () {
                _this.switchBtnContent.innerText = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_LOGIN);
            } });
        TweenLite.to(this.switchBtnContent, 0.3, { opacity: 1, delay: 0.2 });
        TweenLite.to(this.authenticationBody, 0.5, { y: 100 });
        TweenLite.to(this.authFooter, 0.5, { y: 50 });
        TweenLite.to(this.checkboxSection, 0.5, { opacity: 0 });
        TweenLite.to(this.nameInputWrapper, 0.5, { opacity: 1 });
        TweenLite.to(this.authLoginHeader, 0.15, { opacity: 0, y: -15 });
        TweenLite.to(this.authSignUpHeader, 0.5, { opacity: 1, y: 0 });
    };
    Authentication.prototype.switchToLoginState = function () {
        var _this = this;
        this.authStateLogin = true;
        TweenLite.to(this.actionBtnContent, 0.15, { opacity: 0, onComplete: function () {
                _this.actionBtnContent.innerText = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_LOGIN);
            } });
        TweenLite.to(this.actionBtnContent, 0.3, { opacity: 1, delay: 0.2 });
        TweenLite.to(this.switchBtnContent, 0.15, { opacity: 0, onComplete: function () {
                _this.switchBtnContent.innerText = Language_1.Language.getTranslation(StringPointers_1.StringPointers.AUTH_SIGN_UP);
            } });
        TweenLite.to(this.switchBtnContent, 0.3, { opacity: 1, delay: 0.2 });
        TweenLite.to(this.authenticationBody, 0.5, { y: 0 });
        TweenLite.to(this.authFooter, 0.5, { y: 0 });
        TweenLite.to(this.checkboxSection, 0.5, { opacity: 1 });
        TweenLite.to(this.nameInputWrapper, 0.3, { opacity: 0 });
        TweenLite.to(this.authLoginHeader, 0.5, { opacity: 1, y: 0 });
        TweenLite.to(this.authSignUpHeader, 0.15, { opacity: 0, y: -15 });
    };
    Authentication.prototype.validateForLogin = function () {
        var email = this.emailInput.value;
        var isEmailValid = ValidationHelper_1.ValidationHelper.validateEmail(email);
        var password = this.passwordInput.value;
        if (!isEmailValid)
            TweenLite.to(this.emailInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        if (!password)
            TweenLite.to(this.passwordInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        return isEmailValid && password !== "";
    };
    Authentication.prototype.validateForSignUp = function () {
        var firstName = this.firstNameInput.value;
        var lastName = this.lastNameInput.value;
        var email = this.emailInput.value;
        var isEmailValid = ValidationHelper_1.ValidationHelper.validateEmail(email);
        var password = this.passwordInput.value;
        if (!firstName)
            TweenLite.to(this.firstNameInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        if (!lastName)
            TweenLite.to(this.lastNameInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        if (!isEmailValid)
            TweenLite.to(this.emailInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        if (!password)
            TweenLite.to(this.passwordInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        return firstName !== "" && lastName !== "" && isEmailValid && password !== "";
    };
    Authentication.prototype.animateButtonClick = function () {
        TweenLite.to(this.actionBtn, 0.05, { scale: 0.98, ease: Power0.easeIn });
        TweenLite.to(this.actionBtn, 0.1, { scale: 1, delay: 0.05, ease: Back.easeIn });
    };
    Authentication.prototype.setButtonsLoadingState = function () {
        TweenLite.to(this.actionBtn, 0.5, { delay: 0.7, color: "transparent", ease: Power1.easeOut });
        TweenLite.to(this.actionBtn, 0.9, { delay: 1, css: { className: "+=primary-btn-loading" }, ease: Power1.easeOut });
        TweenLite.to(this.actionBtn, 0, { delay: 2.5, css: { className: "+=primary-btn-loading-animation" }, ease: Power1.easeOut });
        TweenLite.to(this.switchBtn, 0.5, { delay: 0.7, css: { className: "+=secondary-btn-loading" }, ease: Power1.easeOut });
    };
    Authentication.prototype.removeButtonsLoadingState = function () {
        this.actionBtn.style.removeProperty("color");
        this.actionBtn.classList.remove("primary-btn-loading");
        this.actionBtn.classList.remove("primary-btn-loading-animation");
        this.switchBtn.classList.remove("secondary-btn-loading");
    };
    Authentication.prototype.setLoadingState = function (value) {
        this.loadingState = value;
    };
    return Authentication;
}(ViewComponent_1.ViewComponent));
exports.Authentication = Authentication;


/***/ }),

/***/ "./src/authentication/AuthenticationNotifications.ts":
/*!***********************************************************!*\
  !*** ./src/authentication/AuthenticationNotifications.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var AuthenticationNotifications = /** @class */ (function () {
    function AuthenticationNotifications() {
    }
    AuthenticationNotifications.EXIT_FINISHED = "AUTH_EXIT_FINISHED";
    AuthenticationNotifications.LOGIN_SUCCESS = "LOGIN_SUCCESS";
    AuthenticationNotifications.LOGIN_FAILURE = "LOGIN_FAILURE";
    AuthenticationNotifications.SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
    AuthenticationNotifications.SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
    AuthenticationNotifications.USER_AUTHENTICATED = "USER_AUTHENTICATED";
    AuthenticationNotifications.USER_SIGNED_UP = "USER_SIGNED_UP";
    AuthenticationNotifications.FORGOT_PASSWORD = "FORGOT_PASSWORD";
    AuthenticationNotifications.TRY_LOGGING_IN = "TRY_LOGGING_IN";
    return AuthenticationNotifications;
}());
exports.AuthenticationNotifications = AuthenticationNotifications;


/***/ }),

/***/ "./src/authentication/AuthenticationView.ts":
/*!**************************************************!*\
  !*** ./src/authentication/AuthenticationView.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AuthenticationNotifications_1 = __webpack_require__(/*! ./AuthenticationNotifications */ "./src/authentication/AuthenticationNotifications.ts");
var SystemConstants_1 = __webpack_require__(/*! ../core/SystemConstants */ "./src/core/SystemConstants.ts");
var Authentication_1 = __webpack_require__(/*! ./Authentication */ "./src/authentication/Authentication.ts");
var View_1 = __webpack_require__(/*! ../core/View */ "./src/core/View.ts");
var ForgotPassword_1 = __webpack_require__(/*! ./ForgotPassword */ "./src/authentication/ForgotPassword.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ../core/ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var AuthenticationView = /** @class */ (function (_super) {
    __extends(AuthenticationView, _super);
    function AuthenticationView() {
        var _this = _super.call(this, "AuthenticationView") || this;
        _this.container = document.createElement("div");
        _this.container.id = "authentication-view-container";
        document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER).appendChild(_this.container);
        _this.authenticationContainer = document.createElement("div");
        _this.forgotPasswordContainer = document.createElement("div");
        _this.forgotPasswordContainer.style.display = "none";
        _this.container.appendChild(_this.authenticationContainer);
        _this.container.appendChild(_this.forgotPasswordContainer);
        _this.authentication = new Authentication_1.Authentication(_this, _this.authenticationContainer);
        _this.forgotPassword = new ForgotPassword_1.ForgotPassword(_this, _this.forgotPasswordContainer);
        return _this;
    }
    AuthenticationView.prototype.enterScene = function () {
    };
    AuthenticationView.prototype.exitScene = function (exitType, callback) {
        this.exitCallback = callback;
        this.authentication.exitScene(exitType);
        this.forgotPassword.exitScene(exitType);
    };
    AuthenticationView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        // notifications.push( NOTIFICATION_NAME );
        return notifications;
    };
    AuthenticationView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            default:
                break;
        }
    };
    AuthenticationView.prototype.handleSignal = function (signal) {
        console.log("signal received in " + this.NAME + ": " + signal.name);
        switch (signal.name) {
            case AuthenticationNotifications_1.AuthenticationNotifications.LOGIN_SUCCESS:
                this.sendNotification(AuthenticationNotifications_1.AuthenticationNotifications.USER_AUTHENTICATED, signal.data);
                break;
            case AuthenticationNotifications_1.AuthenticationNotifications.SIGN_UP_SUCCESS:
                this.sendNotification(AuthenticationNotifications_1.AuthenticationNotifications.USER_SIGNED_UP, signal.data);
                break;
            case AuthenticationNotifications_1.AuthenticationNotifications.FORGOT_PASSWORD:
                this.authenticationContainer.style.display = "none";
                this.forgotPasswordContainer.style.display = "block";
                this.forgotPassword.enterScene(ViewExitTypes_1.ViewExitTypes.SWITCH);
                break;
            case AuthenticationNotifications_1.AuthenticationNotifications.TRY_LOGGING_IN:
                this.authenticationContainer.style.display = "block";
                this.forgotPasswordContainer.style.display = "none";
                this.authentication.enterScene(ViewExitTypes_1.ViewExitTypes.SWITCH);
                break;
            default:
                break;
        }
    };
    return AuthenticationView;
}(View_1.View));
exports.AuthenticationView = AuthenticationView;


/***/ }),

/***/ "./src/authentication/ForgotPassword.ts":
/*!**********************************************!*\
  !*** ./src/authentication/ForgotPassword.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AuthenticationNotifications_1 = __webpack_require__(/*! ./AuthenticationNotifications */ "./src/authentication/AuthenticationNotifications.ts");
var ValidationHelper_1 = __webpack_require__(/*! ../helpers/ValidationHelper */ "./src/helpers/ValidationHelper.ts");
var StringPointers_1 = __webpack_require__(/*! ../languages/StringPointers */ "./src/languages/StringPointers.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ../core/ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var ViewComponent_1 = __webpack_require__(/*! ../core/ViewComponent */ "./src/core/ViewComponent.ts");
var Language_1 = __webpack_require__(/*! ../languages/Language */ "./src/languages/Language.ts");
var TweenLite = gsap.TweenLite;
var Power1 = gsap.Power1;
//CSS
__webpack_require__(/*! ../_style/style-sheets/forgot-password.scss */ "./src/_style/style-sheets/forgot-password.scss");
//HTML template
var template = __webpack_require__(/*! ../_view-templates/forgot-password.html */ "./src/_view-templates/forgot-password.html");
var ForgotPassword = /** @class */ (function (_super) {
    __extends(ForgotPassword, _super);
    function ForgotPassword(view, container) {
        var _this = _super.call(this, view, container) || this;
        console.info("ForgotPassword view component initiated!");
        _this.container.innerHTML = template;
        _this.forgotPasswordContainer = document.getElementById("authentication-forgot-password-container");
        _this.scrumbsLogo = document.getElementById("authentication-forgot-password-logo");
        _this.emailInput = document.getElementById("authentication-forgot-password-email-input");
        _this.emailInputContainer = document.getElementById("authentication-forgot-password-email-input-container");
        _this.titleElement = document.getElementById("authentication-forgot-password-title");
        _this.tryLoggingInBtn = document.getElementById("authentication-forgot-password-try-logging-in");
        _this.sendInstructionsBtn = document.getElementById("authentication-forgot-password-button-send-instructions");
        _this.backToLoginBtn = document.getElementById("authentication-forgot-password-button-back-to-login");
        _this.errorText = document.getElementById("authentication-forgot-password-error");
        _this.footerText = document.getElementById("authentication-forgot-password-footer-text");
        _this.translateComponent();
        _this.tryLoggingInHandler = _this.tryLoggingInHandler.bind(_this);
        _this.sendInstructionsHandler = _this.sendInstructionsHandler.bind(_this);
        _this.emailInputHandler = _this.emailInputHandler.bind(_this);
        _this.backToLoginBtnHandler = _this.backToLoginBtnHandler.bind(_this);
        _this.registerEventListeners();
        return _this;
    }
    ForgotPassword.prototype.registerEventListeners = function () {
        this.emailInput.addEventListener("focus", this.emailInputHandler);
        this.tryLoggingInBtn.addEventListener("click", this.tryLoggingInHandler);
        this.backToLoginBtn.addEventListener("click", this.backToLoginBtnHandler);
        this.sendInstructionsBtn.addEventListener("click", this.sendInstructionsHandler);
    };
    ForgotPassword.prototype.unregisterEventListeners = function () {
        this.emailInput.removeEventListener("focus", this.emailInputHandler);
        this.tryLoggingInBtn.removeEventListener("click", this.tryLoggingInHandler);
        this.backToLoginBtn.removeEventListener("click", this.backToLoginBtnHandler);
        this.sendInstructionsBtn.removeEventListener("click", this.sendInstructionsHandler);
    };
    ForgotPassword.prototype.tryLoggingInHandler = function (e) {
        this.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH);
    };
    ForgotPassword.prototype.sendInstructionsHandler = function (e) {
        var _this = this;
        var email = this.emailInput.value;
        if (!email) {
            this.errorText.innerHTML = "Please enter an email address.";
            TweenLite.to(this.errorText, 0.3, { opacity: 1 });
            TweenLite.to(this.emailInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        }
        else if (!ValidationHelper_1.ValidationHelper.validateEmail(email)) {
            this.errorText.innerHTML = "Invalid email address.";
            TweenLite.to(this.errorText, 0.3, { opacity: 1 });
            TweenLite.to(this.emailInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        }
        else {
            this.enterLoadingState();
            this.connection.forgotPassword(email, function (response) {
                console.log(response);
                _this.enterSuccessState(response.message);
            }, function (message) {
                console.error(message);
                _this.errorText.innerHTML = message;
                TweenLite.to(_this.errorText, 0.3, { opacity: 1 });
                TweenLite.to(_this.emailInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
                _this.exitLoadingState();
            });
        }
    };
    ForgotPassword.prototype.emailInputHandler = function (e) {
        TweenLite.to(this.errorText, 0.3, { opacity: 0 });
        TweenLite.to(this.emailInput, 0.3, { css: { className: "-=invalid" }, ease: Power1.easeOut });
    };
    ForgotPassword.prototype.backToLoginBtnHandler = function (e) {
        this.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH);
    };
    ForgotPassword.prototype.translateComponent = function () {
        document.getElementById("authentication-forgot-password-title").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.FORGOT_PW_TITLE);
        document.getElementById("authentication-forgot-password-email-label").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.FORGOT_PW_EMAIL_LABEL);
        document.getElementById("authentication-forgot-password-email-input").placeholder = Language_1.Language.getTranslation(StringPointers_1.StringPointers.FORGOT_PW_EMAIL_PLACEHOLDER);
        document.getElementById("authentication-forgot-password-send-instructions-span").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.FORGOT_PW_SEND_INSTRUCTIONS);
        document.getElementById("authentication-forgot-password-remember").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.FORGOT_PW_REMEMBERED_PASSWORD);
        document.getElementById("authentication-forgot-password-try-logging-in").innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.FORGOT_PW_TRY_LOGGING_IN);
    };
    ForgotPassword.prototype.enterScene = function (enterType) {
        if (enterType === ViewExitTypes_1.ViewExitTypes.SWITCH) {
            TweenLite.to(this.forgotPasswordContainer, 0.4, { css: { opacity: 1, top: "calc(50% + 50px)" } });
        }
    };
    ForgotPassword.prototype.exitScene = function (exitType) {
        if (exitType === ViewExitTypes_1.ViewExitTypes.SWITCH) {
            var self_1 = this;
            TweenLite.to(this.forgotPasswordContainer, 0.25, { opacity: 0 });
            TweenLite.to(this.forgotPasswordContainer, 0.5, { css: { top: "calc(50% + 60px)" }, onComplete: function () {
                    self_1.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.TRY_LOGGING_IN);
                    self_1.resetComponent();
                } });
        }
        else {
            _super.prototype.exitScene.call(this, exitType);
            this.unregisterEventListeners();
            this.view.componentExited(this.name);
        }
    };
    ForgotPassword.prototype.enterLoadingState = function () {
        this.emailInput.disabled = true;
        TweenLite.to(this.sendInstructionsBtn, 0.2, { color: "transparent", ease: Power1.easeOut });
        TweenLite.to(this.sendInstructionsBtn, 0.3, { delay: 0.1, css: { className: "+=loading" }, ease: Power1.easeOut });
        TweenLite.to(this.sendInstructionsBtn, 0, { delay: 0.3, css: { className: "+=loading-animation" }, ease: Power1.easeOut });
    };
    ForgotPassword.prototype.exitLoadingState = function () {
        TweenLite.killTweensOf(this.sendInstructionsBtn);
        this.emailInput.disabled = false;
        this.sendInstructionsBtn.style.removeProperty("color");
        this.sendInstructionsBtn.classList.remove("loading");
        this.sendInstructionsBtn.classList.remove("loading-animation");
    };
    ForgotPassword.prototype.enterSuccessState = function (message) {
        var self = this;
        TweenLite.to(this.scrumbsLogo, 0.25, { opacity: 0, ease: Power1.easeOut });
        TweenLite.to(this.titleElement, 0.25, { opacity: 0, ease: Power1.easeOut });
        TweenLite.to(this.footerText, 0.3, { opacity: 0, ease: Power1.easeOut });
        TweenLite.to(this.sendInstructionsBtn, 0.3, { opacity: 0, ease: Power1.easeOut });
        TweenLite.to(this.emailInputContainer, 0.35, { opacity: 0, ease: Power1.easeOut, onComplete: function () {
                self.titleElement.innerHTML = message;
                self.emailInputContainer.style.display = "none";
                self.sendInstructionsBtn.style.display = "none";
                self.footerText.style.display = "none";
                self.backToLoginBtn.style.opacity = "0";
                self.backToLoginBtn.style.display = "block";
                TweenLite.to(self.scrumbsLogo, 0.25, { opacity: 1, ease: Power1.easeOut });
                TweenLite.to(self.titleElement, 0.3, { delay: 0.1, opacity: 1, ease: Power1.easeOut });
                TweenLite.to(self.backToLoginBtn, 0.35, { delay: 0.2, opacity: 1, ease: Power1.easeOut });
            } });
    };
    ForgotPassword.prototype.resetComponent = function () {
        this.exitLoadingState();
        this.scrumbsLogo.style.opacity = "1";
        this.titleElement.innerHTML = Language_1.Language.getTranslation(StringPointers_1.StringPointers.FORGOT_PW_TITLE);
        this.titleElement.style.opacity = "1";
        this.sendInstructionsBtn.style.display = "block";
        this.sendInstructionsBtn.style.opacity = "1";
        this.backToLoginBtn.style.display = "none";
        this.emailInputContainer.style.display = "block";
        this.emailInputContainer.style.opacity = "1";
        this.errorText.style.opacity = "0";
        this.footerText.style.display = "block";
        this.footerText.style.opacity = "1";
        this.emailInput.classList.remove("invalid");
    };
    return ForgotPassword;
}(ViewComponent_1.ViewComponent));
exports.ForgotPassword = ForgotPassword;


/***/ }),

/***/ "./src/blockers/Blocker.ts":
/*!*********************************!*\
  !*** ./src/blockers/Blocker.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ConnectionProxy_1 = __webpack_require__(/*! ../connection/ConnectionProxy */ "./src/connection/ConnectionProxy.ts");
var TweenLite = gsap.TweenLite;
//CSS
__webpack_require__(/*! ../_style/style-sheets/blockers.scss */ "./src/_style/style-sheets/blockers.scss");
var Blocker = /** @class */ (function () {
    function Blocker(parent, data, mainContainer, isSolved) {
        this.parent = parent;
        this.content = data.content;
        this.id = data._id;
        this.label = data.label;
        this.mainContainer = mainContainer;
        this.container = document.createElement("li");
        this.container.id = this.id;
        this.container.className = "blocker-item";
        this.checkboxContainer = document.createElement("div");
        this.checkboxContainer.className = "blocker-item-input";
        this.checkbox = document.createElement("input");
        this.checkbox.setAttribute("type", "checkbox");
        this.checkbox.id = "checkbox" + this.id;
        if (isSolved) {
            this.checkbox.checked = true;
            this.container.classList.add("ready");
        }
        this.checkMark = document.createElement("span");
        this.checkMark.className = "blocker-item-checkmark";
        this.checkboxContainer.appendChild(this.checkbox);
        this.checkboxContainer.appendChild(this.checkMark);
        this.textContainer = document.createElement("div");
        this.textContainer.className = "blocker-item-text";
        this.text = document.createElement("label");
        this.text.innerHTML = this.content;
        this.text.className = "inline";
        this.textContainer.appendChild(this.text);
        this.recordOwner = document.createElement("span");
        this.recordOwner.innerHTML = this.label;
        this.recordOwner.className = "user";
        this.container.appendChild(this.checkboxContainer);
        this.container.appendChild(this.textContainer);
        this.container.appendChild(this.recordOwner);
        if (this.mainContainer.firstChild && this.mainContainer.firstChild.nodeName !== "INPUT") {
            this.mainContainer.insertBefore(this.container, this.mainContainer.firstChild);
        }
        else {
            this.mainContainer.insertBefore(this.container, this.mainContainer.children[1]);
        }
        this.registerEventListeners();
    }
    Blocker.prototype.registerEventListeners = function () {
        var _this = this;
        this.container.addEventListener("click", function () {
            if (_this.checkbox.checked) {
                _this.checkbox.checked = false;
                _this.container.classList.remove("ready");
                TweenLite.to(_this.container, 0.5, { opacity: 0, onComplete: function () {
                        var proxy = new ConnectionProxy_1.ConnectionProxy("BlockerProxy");
                        var self = _this;
                        proxy.unsolveBlocker(_this.id, function () {
                            self.parent.unsolvedBlockersContainer.appendChild(self.container);
                            self.parent.toggleSolvedBlockersVisibilityButton();
                            self.container.style.opacity = "1";
                        }, function (message) {
                            console.warn(message);
                        });
                    } });
            }
            else {
                _this.checkbox.checked = true;
                _this.container.classList.add("ready");
                TweenLite.to(_this.container, 0.5, { opacity: 0, onComplete: function () {
                        var proxy = new ConnectionProxy_1.ConnectionProxy("BlockerProxy");
                        var self = _this;
                        proxy.solveBlocker(_this.id, function () {
                            self.parent.solvedBlockersContainer.appendChild(self.container);
                            self.parent.toggleSolvedBlockersVisibilityButton();
                            self.container.style.opacity = "1";
                        }, function (message) {
                            console.warn(message);
                        });
                    } });
            }
        });
    };
    Blocker.prototype.unregisterEventListeners = function () {
    };
    return Blocker;
}());
exports.Blocker = Blocker;


/***/ }),

/***/ "./src/blockers/Blockers.ts":
/*!**********************************!*\
  !*** ./src/blockers/Blockers.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var SystemConstants_1 = __webpack_require__(/*! ../core/SystemConstants */ "./src/core/SystemConstants.ts");
var ViewComponent_1 = __webpack_require__(/*! ../core/ViewComponent */ "./src/core/ViewComponent.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ../core/ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var Blocker_1 = __webpack_require__(/*! ./Blocker */ "./src/blockers/Blocker.ts");
var TweenLite = gsap.TweenLite;
var Power1 = gsap.Power1;
var Back = gsap.Back;
//CSS
__webpack_require__(/*! ../_style/style-sheets/blockers.scss */ "./src/_style/style-sheets/blockers.scss");
var Blockers = /** @class */ (function (_super) {
    __extends(Blockers, _super);
    function Blockers(view, container) {
        var _this = _super.call(this, view, container) || this;
        console.info("Blockers view component initiated!");
        _this.contentContainer = document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER);
        _this.unsolvedBlockersContainer = document.createElement("div");
        _this.unsolvedBlockersContainer.id = "unsolved-blockers-container";
        _this.unsolvedBlockersContainer.className = "list-clear";
        _this.solvedBlockersContainer = document.createElement("div");
        _this.solvedBlockersContainer.id = "solved-blockers-container";
        _this.solvedBlockersContainer.className = "list-clear solved-blockers-container";
        _this.isSolvedBlockerVisible = false;
        _this.toggleSolvedBlockersVisibility = document.createElement("button");
        _this.toggleSolvedBlockersVisibility.innerText = "Show solved blockers";
        _this.toggleSolvedBlockersVisibility.className = "toggle-solved-blockers-visibility-btn";
        _this.container.appendChild(_this.unsolvedBlockersContainer);
        _this.container.appendChild(_this.toggleSolvedBlockersVisibility);
        _this.container.appendChild(_this.solvedBlockersContainer);
        _this.connection.getBlockers(_this.populate.bind(_this), function (message) { return console.log(message); });
        _this.createBlockerInput = document.createElement("input");
        _this.createBlockerInput.setAttribute("style", "border: 0; padding-left: 0; font-weight: bold;");
        _this.solvedBlockersVisibilityBtnClickHandler = _this.solvedBlockersVisibilityBtnClickHandler.bind(_this);
        _this.createBlockerKeyPressHandler = _this.createBlockerKeyPressHandler.bind(_this);
        _this.createBlockerBlurHandler = _this.createBlockerBlurHandler.bind(_this);
        _this.documentKeyPressHandler = _this.documentKeyPressHandler.bind(_this);
        return _this;
    }
    Blockers.prototype.registerEventListeners = function () {
        this.toggleSolvedBlockersVisibility.addEventListener("click", this.solvedBlockersVisibilityBtnClickHandler);
        this.createBlockerInput.addEventListener("keypress", this.createBlockerKeyPressHandler);
        this.createBlockerInput.addEventListener("blur", this.createBlockerBlurHandler);
        document.addEventListener("keypress", this.documentKeyPressHandler);
    };
    Blockers.prototype.unregisterEventListeners = function () {
        this.toggleSolvedBlockersVisibility.removeEventListener("click", this.solvedBlockersVisibilityBtnClickHandler);
        this.createBlockerInput.removeEventListener("keypress", this.createBlockerKeyPressHandler);
        this.createBlockerInput.removeEventListener("blur", this.createBlockerBlurHandler);
        document.removeEventListener("keypress", this.documentKeyPressHandler);
    };
    Blockers.prototype.solvedBlockersVisibilityBtnClickHandler = function (e) {
        if (this.isSolvedBlockerVisible) {
            this.toggleSolvedBlockersVisibility.innerText = "Show solved blockers";
            TweenLite.to(this.solvedBlockersContainer, 0.3, { opacity: 0, ease: Power1.easeOut });
            this.isSolvedBlockerVisible = false;
        }
        else {
            this.toggleSolvedBlockersVisibility.innerText = "Hide solved blockers";
            TweenLite.to(this.solvedBlockersContainer, 0.3, { opacity: 1, ease: Power1.easeOut });
            this.isSolvedBlockerVisible = true;
        }
    };
    Blockers.prototype.documentKeyPressHandler = function (e) {
        if (e.ctrlKey && e.keyCode === 14) { // N
            this.initializeBlockerInput();
            e.preventDefault();
        }
    };
    Blockers.prototype.createBlockerKeyPressHandler = function (e) {
        var key = e.which || e.keyCode;
        console.log("key: " + key);
        if (key === 13 || e.ctrlKey && e.keyCode === 14) {
            this.createBlocker();
        }
    };
    Blockers.prototype.createBlockerBlurHandler = function (e) {
        this.createBlocker();
    };
    Blockers.prototype.enterScene = function () {
        this.registerEventListeners();
        TweenLite.to(this.unsolvedBlockersContainer, 0.2, { opacity: 1, ease: Power1.easeOut });
        this.toggleSolvedBlockersVisibilityButton();
    };
    Blockers.prototype.exitScene = function (exitType) {
        var _this = this;
        _super.prototype.exitScene.call(this, exitType);
        this.unregisterEventListeners();
        switch (exitType) {
            case ViewExitTypes_1.ViewExitTypes.SWITCH:
                this.view.componentExited(this.name);
                break;
            case ViewExitTypes_1.ViewExitTypes.DEFAULT:
                TweenLite.to(this.container, 0.15, { opacity: 0, ease: Power1.easeOut });
                TweenLite.to(this.contentContainer, 0.4, { css: { top: "-105%" }, onComplete: function () {
                        _this.view.componentExited(_this.name);
                    }, ease: Back.easeOut.config(0.25) });
                break;
            default:
                console.warn("Invalid exit type provided in blockers view component.");
                break;
        }
    };
    Blockers.prototype.populate = function (data) {
        var solved = data.solved;
        var unsolved = data.unsolved;
        for (var i = 0; i < unsolved.length; i++) {
            new Blocker_1.Blocker(this, unsolved[i], this.unsolvedBlockersContainer, false);
        }
        for (var i = 0; i < solved.length; i++) {
            new Blocker_1.Blocker(this, solved[i], this.solvedBlockersContainer, true);
        }
        this.enterScene();
    };
    Blockers.prototype.initializeBlockerInput = function () {
        this.container.insertBefore(this.createBlockerInput, this.container.firstChild);
        this.createBlockerInput.focus();
        this.isBlockerCreationInProgress = true;
    };
    Blockers.prototype.createBlocker = function () {
        if (!this.isBlockerCreationInProgress)
            return;
        this.isBlockerCreationInProgress = false;
        var content = this.createBlockerInput.value;
        this.createBlockerInput.value = "";
        this.createBlockerInput.parentNode.removeChild(this.createBlockerInput);
        if (!content)
            return;
        var self = this;
        this.connection.createBlocker(content, function (blocker) {
            new Blocker_1.Blocker(self, blocker, self.unsolvedBlockersContainer, false);
        }, function (message) {
            console.warn(message);
        });
    };
    Blockers.prototype.toggleSolvedBlockersVisibilityButton = function () {
        if (this.solvedBlockersContainer.hasChildNodes()) {
            TweenLite.to(this.toggleSolvedBlockersVisibility, 0.15, { opacity: 1, delay: 0.2, ease: Power1.easeOut });
        }
        else {
            TweenLite.to(this.toggleSolvedBlockersVisibility, 0.15, { opacity: 0, delay: 0.25, ease: Power1.easeOut });
        }
    };
    return Blockers;
}(ViewComponent_1.ViewComponent));
exports.Blockers = Blockers;


/***/ }),

/***/ "./src/blockers/BlockersView.ts":
/*!**************************************!*\
  !*** ./src/blockers/BlockersView.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var HeaderNotifications_1 = __webpack_require__(/*! ../header/HeaderNotifications */ "./src/header/HeaderNotifications.ts");
var SystemConstants_1 = __webpack_require__(/*! ../core/SystemConstants */ "./src/core/SystemConstants.ts");
var Blockers_1 = __webpack_require__(/*! ./Blockers */ "./src/blockers/Blockers.ts");
var View_1 = __webpack_require__(/*! ../core/View */ "./src/core/View.ts");
var BlockersView = /** @class */ (function (_super) {
    __extends(BlockersView, _super);
    function BlockersView() {
        var _this = _super.call(this, "BlockersView") || this;
        _this.container = document.createElement("div");
        _this.container.id = "blockers-view-container";
        document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER).appendChild(_this.container);
        _this.blockersContainer = document.createElement("div");
        _this.blockersContainer.id = "blockers-container";
        _this.container.appendChild(_this.blockersContainer);
        _this.blockers = new Blockers_1.Blockers(_this, _this.blockersContainer);
        return _this;
    }
    BlockersView.prototype.enterScene = function () {
    };
    BlockersView.prototype.exitScene = function (exitType, callback) {
        this.exitCallback = callback;
        this.blockers.exitScene(exitType);
    };
    BlockersView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push(HeaderNotifications_1.HeaderNotifications.ADD_ITEM);
        return notifications;
    };
    BlockersView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            case HeaderNotifications_1.HeaderNotifications.ADD_ITEM:
                this.blockers.initializeBlockerInput();
                break;
            default:
                break;
        }
    };
    BlockersView.prototype.handleSignal = function (signal) {
        switch (signal.name) {
            default:
                break;
        }
    };
    return BlockersView;
}(View_1.View));
exports.BlockersView = BlockersView;


/***/ }),

/***/ "./src/connection/ConnectionProxy.ts":
/*!*******************************************!*\
  !*** ./src/connection/ConnectionProxy.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var HTTPMethods_1 = __webpack_require__(/*! ../core/HTTPMethods */ "./src/core/HTTPMethods.ts");
var Proxy_1 = __webpack_require__(/*! ../core/Proxy */ "./src/core/Proxy.ts");
var UserVO_1 = __webpack_require__(/*! ./UserVO */ "./src/connection/UserVO.ts");
var ConnectionProxy = /** @class */ (function (_super) {
    __extends(ConnectionProxy, _super);
    function ConnectionProxy(proxyName) {
        return _super.call(this, proxyName, "http://192.168.99.100:4200/api/v1") || this;
    }
    ConnectionProxy.prototype.login = function (data, success, failure) {
        var _this = this;
        console.info("Proxy login executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.POST, "/authentication/login", data, function (response) {
            console.log("login data");
            console.log(response);
            Proxy_1.Proxy.token = response.tokenData.token;
            Proxy_1.Proxy.tokenExpires = new Date(response.tokenData.expires);
            var _a = response.userData, user = _a.user, email = _a.email, firstName = _a.firstName, lastName = _a.lastName;
            var userVO = new UserVO_1.UserVO(user, email, firstName, lastName);
            _this.setVO(userVO);
            success(response);
        }, failure);
    };
    ConnectionProxy.prototype.signUp = function (data, success, failure) {
        console.info("Proxy sign up executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.POST, "/authentication/sign-up", data, function (response) {
            Proxy_1.Proxy.token = response.token;
            success(response);
        }, failure);
    };
    ConnectionProxy.prototype.createRecord = function (name, success, failure) {
        console.info("Proxy create record executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.POST, "/records/create", { name: name }, success, failure);
    };
    ConnectionProxy.prototype.getRecords = function (success, failure) {
        console.info("Proxy get records executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.GET, "/records", null, success, failure);
    };
    ConnectionProxy.prototype.deleteRecord = function (recordId, success, failure) {
        console.info("Proxy delete record executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.DELETE, "/records/" + recordId, null, success, failure);
    };
    ConnectionProxy.prototype.addNote = function (data, success, failure) {
        console.info("Proxy create note executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.POST, "/notes/create", data, success, failure);
    };
    ConnectionProxy.prototype.createBlocker = function (content, success, failure) {
        console.info("Proxy create blocker executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.POST, "/blockers/create", { content: content }, success, failure);
    };
    ConnectionProxy.prototype.getBlockers = function (success, failure) {
        console.info("Proxy get blockers executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.GET, "/blockers", null, success, failure);
    };
    ConnectionProxy.prototype.solveBlocker = function (blockerId, success, failure) {
        console.info("Proxy solve blocker executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.PUT, "/blockers/solve/" + blockerId, null, success, failure);
    };
    ConnectionProxy.prototype.unsolveBlocker = function (blockerId, success, failure) {
        console.info("Proxy unsolve blocker executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.PUT, "/blockers/unsolve/" + blockerId, null, success, failure);
    };
    ConnectionProxy.prototype.editRecord = function (data, success, failure) {
        console.info("Proxy edit record executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.PUT, "/records/edit", data, success, failure);
    };
    ConnectionProxy.prototype.forgotPassword = function (email, success, failure) {
        console.info("Proxy forgot password executed");
        this.httpRequest(HTTPMethods_1.HTTPMethods.POST, "/authentication/forgot", { email: email }, success, failure);
    };
    return ConnectionProxy;
}(Proxy_1.Proxy));
exports.ConnectionProxy = ConnectionProxy;


/***/ }),

/***/ "./src/connection/UserVO.ts":
/*!**********************************!*\
  !*** ./src/connection/UserVO.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var UserVO = /** @class */ (function () {
    function UserVO(user, email, firstName, lastName) {
        this.user = user;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return UserVO;
}());
exports.UserVO = UserVO;


/***/ }),

/***/ "./src/connection/models/AddNoteModel.ts":
/*!***********************************************!*\
  !*** ./src/connection/models/AddNoteModel.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var AddNoteModel = /** @class */ (function () {
    function AddNoteModel(recordId, content, isBlocker) {
        this.recordId = recordId;
        this.content = content;
        this.isBlocker = isBlocker;
    }
    return AddNoteModel;
}());
exports.AddNoteModel = AddNoteModel;


/***/ }),

/***/ "./src/connection/models/EditRecordModel.ts":
/*!**************************************************!*\
  !*** ./src/connection/models/EditRecordModel.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var EditRecordModel = /** @class */ (function () {
    function EditRecordModel(recordId, name) {
        this.recordId = recordId;
        this.name = name;
    }
    return EditRecordModel;
}());
exports.EditRecordModel = EditRecordModel;


/***/ }),

/***/ "./src/connection/models/LoginModel.ts":
/*!*********************************************!*\
  !*** ./src/connection/models/LoginModel.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var LoginModel = /** @class */ (function () {
    function LoginModel(email, password) {
        this.email = email;
        this.password = password;
    }
    return LoginModel;
}());
exports.LoginModel = LoginModel;


/***/ }),

/***/ "./src/connection/models/SignUpModel.ts":
/*!**********************************************!*\
  !*** ./src/connection/models/SignUpModel.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SignUpModel = /** @class */ (function () {
    function SignUpModel(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    return SignUpModel;
}());
exports.SignUpModel = SignUpModel;


/***/ }),

/***/ "./src/core/CoreEntity.ts":
/*!********************************!*\
  !*** ./src/core/CoreEntity.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var EventManager_1 = __webpack_require__(/*! ./EventManager */ "./src/core/EventManager.ts");
var CoreEntity = /** @class */ (function () {
    function CoreEntity(entityName) {
        this.NAME = entityName;
        this.eventManager = EventManager_1.EventManager._instance;
        this.register();
    }
    CoreEntity.prototype.register = function () {
        this.eventManager.registerEntity(this.NAME, this);
    };
    CoreEntity.prototype.onRegister = function () {
    };
    CoreEntity.prototype.unregister = function () {
        this.eventManager.unregirsterEntity(this.NAME);
    };
    CoreEntity.prototype.onUnregister = function () {
    };
    CoreEntity.prototype.sendNotification = function (notificationName, body) {
        this.eventManager.sendNotification(notificationName, body);
    };
    CoreEntity.prototype.listNotificationInterests = function () {
        return [];
    };
    CoreEntity.prototype.handleNotification = function (notification) {
    };
    return CoreEntity;
}());
exports.CoreEntity = CoreEntity;


/***/ }),

/***/ "./src/core/EventManager.ts":
/*!**********************************!*\
  !*** ./src/core/EventManager.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.notifications = {};
        this.entities = {};
        if (EventManager._instance) {
            throw new Error("Error: Instantiation failed! Use EventManager.getInstance() instead of new.");
        }
        EventManager._instance = this;
    }
    EventManager.prototype.getInstance = function () {
        return EventManager._instance;
    };
    EventManager.prototype.registerNotification = function (notificationName) {
        if (!this.notifications[notificationName])
            this.notifications[notificationName] = new Array();
    };
    EventManager.prototype.unregisterNotification = function (notificationName) {
        delete this.notifications[notificationName];
    };
    EventManager.prototype.registerEntity = function (entityName, entity) {
        if (!this.entities[entityName]) {
            this.entities[entityName] = entity;
            entity.onRegister();
            var notificationInterests = entity.listNotificationInterests();
            for (var i = 0; i < notificationInterests.length; i++) {
                this.registerNotification(notificationInterests[i]);
                this.notifications[notificationInterests[i]].push(entity);
            }
        }
    };
    EventManager.prototype.unregirsterEntity = function (entityName) {
        var targetEntity = this.entities[entityName];
        var notificationInterests = targetEntity.listNotificationInterests();
        for (var i = 0; i < notificationInterests.length; i++) {
            var listeningEntities = this.notifications[notificationInterests[i]];
            for (var j = 0; j < listeningEntities.length; j++) {
                if (listeningEntities[j] === targetEntity) {
                    listeningEntities.splice(j, 1);
                }
            }
        }
        targetEntity.onUnregister();
        delete this.entities[entityName];
    };
    EventManager.prototype.sendNotification = function (notificationName, data) {
        if (this.notifications[notificationName]) {
            var entities = this.notifications[notificationName];
            for (var i = 0; i < entities.length; i++) {
                entities[i].handleNotification({ name: notificationName, data: data });
            }
        }
    };
    EventManager._instance = new EventManager();
    return EventManager;
}());
exports.EventManager = EventManager;


/***/ }),

/***/ "./src/core/HTTPMethods.ts":
/*!*********************************!*\
  !*** ./src/core/HTTPMethods.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var HTTPMethods = /** @class */ (function () {
    function HTTPMethods() {
    }
    HTTPMethods.GET = "GET";
    HTTPMethods.HEAD = "HEAD";
    HTTPMethods.POST = "POST";
    HTTPMethods.PUT = "PUT";
    HTTPMethods.DELETE = "DELETE";
    HTTPMethods.TRACE = "TRACE";
    HTTPMethods.OPTIONS = "OPTIONS";
    HTTPMethods.CONNECT = "CONNECT";
    HTTPMethods.PATCH = "PATCH";
    return HTTPMethods;
}());
exports.HTTPMethods = HTTPMethods;


/***/ }),

/***/ "./src/core/Proxy.ts":
/*!***************************!*\
  !*** ./src/core/Proxy.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CoreEntity_1 = __webpack_require__(/*! ./CoreEntity */ "./src/core/CoreEntity.ts");
var Proxy = /** @class */ (function (_super) {
    __extends(Proxy, _super);
    function Proxy(proxyName, address) {
        var _this = _super.call(this, proxyName) || this;
        _this.address = address;
        return _this;
    }
    Proxy.prototype.getVO = function () {
        return Proxy.VO;
    };
    Proxy.prototype.setVO = function (vo) {
        Proxy.VO = vo;
    };
    Proxy.prototype.httpRequest = function (method, endpoint, data, success, failure) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, this.address + endpoint, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        if (Proxy.token)
            xhr.setRequestHeader('Authorization', Proxy.token);
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                if (success)
                    success(response);
            }
            else {
                if (failure)
                    failure(response.message);
            }
        };
        if (data) {
            xhr.send(JSON.stringify(data));
        }
        else {
            xhr.send();
        }
        return xhr;
    };
    return Proxy;
}(CoreEntity_1.CoreEntity));
exports.Proxy = Proxy;


/***/ }),

/***/ "./src/core/SystemConstants.ts":
/*!*************************************!*\
  !*** ./src/core/SystemConstants.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SystemConstants = /** @class */ (function () {
    function SystemConstants() {
    }
    SystemConstants.ENV_MOBILE = "ENV_MOBILE";
    SystemConstants.ENV_DESKTOP = "ENV_DESKTOP";
    SystemConstants.ENV_WEB = "ENV_WEB";
    SystemConstants.MAIN_CONTAINER = "content-container";
    SystemConstants.HEADING_CONTAINER = "heading-container";
    return SystemConstants;
}());
exports.SystemConstants = SystemConstants;


/***/ }),

/***/ "./src/core/View.ts":
/*!**************************!*\
  !*** ./src/core/View.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CoreEntity_1 = __webpack_require__(/*! ./CoreEntity */ "./src/core/CoreEntity.ts");
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(viewName) {
        var _this = _super.call(this, viewName) || this;
        _this.NAME = viewName;
        _this.viewComponentExitCount = {};
        return _this;
    }
    View.prototype.handleSignal = function (signal) {
    };
    View.prototype.enterScene = function (callback) {
    };
    View.prototype.exitScene = function (exitType, callback) {
    };
    View.prototype.componentExited = function (componentName) {
        this.viewComponentExitCount[componentName] = true;
        for (var key in this.viewComponentExitCount) {
            if (this.viewComponentExitCount.hasOwnProperty(key)) {
                if (!this.viewComponentExitCount[key]) {
                    console.warn("Not all view components finished exiting, aborting.");
                    return;
                }
            }
        }
        if (this.exitCallback) {
            this.container.parentNode.removeChild(this.container);
            this.unregister();
            this.exitCallback();
        }
        else {
            this.container.parentNode.removeChild(this.container);
            console.warn("No exit callback available on view!");
        }
    };
    return View;
}(CoreEntity_1.CoreEntity));
exports.View = View;


/***/ }),

/***/ "./src/core/ViewComponent.ts":
/*!***********************************!*\
  !*** ./src/core/ViewComponent.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ConnectionProxy_1 = __webpack_require__(/*! ../connection/ConnectionProxy */ "./src/connection/ConnectionProxy.ts");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(view, container) {
        this.view = view;
        this.container = container;
        this.name = this.constructor.name;
        this.connection = new ConnectionProxy_1.ConnectionProxy(this.name + "Proxy");
        this.view.viewComponentExitCount[this.name] = null;
    }
    ViewComponent.prototype.sendSignal = function (name, data, sender) {
        this.view.handleSignal({ name: name, data: data, sender: sender });
    };
    ViewComponent.prototype.enterScene = function () {
    };
    ViewComponent.prototype.exitScene = function (exitType) {
        if (this.connection)
            this.connection.unregister();
    };
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;


/***/ }),

/***/ "./src/core/ViewExitTypes.ts":
/*!***********************************!*\
  !*** ./src/core/ViewExitTypes.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ViewExitTypes = /** @class */ (function () {
    function ViewExitTypes() {
    }
    ViewExitTypes.DEFAULT = "DEFAULT";
    ViewExitTypes.SWITCH = "SWITCH";
    return ViewExitTypes;
}());
exports.ViewExitTypes = ViewExitTypes;


/***/ }),

/***/ "./src/core/ViewManager.ts":
/*!*********************************!*\
  !*** ./src/core/ViewManager.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AuthenticationNotifications_1 = __webpack_require__(/*! ../authentication/AuthenticationNotifications */ "./src/authentication/AuthenticationNotifications.ts");
var AuthenticationView_1 = __webpack_require__(/*! ../authentication/AuthenticationView */ "./src/authentication/AuthenticationView.ts");
var HeaderNotifications_1 = __webpack_require__(/*! ../header/HeaderNotifications */ "./src/header/HeaderNotifications.ts");
var BlockersView_1 = __webpack_require__(/*! ../blockers/BlockersView */ "./src/blockers/BlockersView.ts");
var RecordsView_1 = __webpack_require__(/*! ../records/RecordsView */ "./src/records/RecordsView.ts");
var HeaderView_1 = __webpack_require__(/*! ../header/HeaderView */ "./src/header/HeaderView.ts");
var PromptView_1 = __webpack_require__(/*! ../prompt/PromptView */ "./src/prompt/PromptView.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ./ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var CoreEntity_1 = __webpack_require__(/*! ./CoreEntity */ "./src/core/CoreEntity.ts");
var ViewManager = /** @class */ (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super.call(this, "ViewManager") || this;
        _this.initView();
        return _this;
    }
    ViewManager.prototype.initView = function () {
        new PromptView_1.PromptView();
        this.headerView = new HeaderView_1.HeaderView();
        this.currentView = new AuthenticationView_1.AuthenticationView();
    };
    ViewManager.prototype.switchView = function (view, exitType, callback) {
        var _this = this;
        if (!exitType)
            exitType = ViewExitTypes_1.ViewExitTypes.DEFAULT;
        this.currentView.exitScene(exitType, function () {
            _this.currentView = new view();
            if (callback)
                callback();
        });
    };
    ViewManager.prototype.listNotificationInterests = function () {
        var notifications = [];
        notifications.push(AuthenticationNotifications_1.AuthenticationNotifications.USER_AUTHENTICATED);
        notifications.push(AuthenticationNotifications_1.AuthenticationNotifications.USER_SIGNED_UP);
        notifications.push(HeaderNotifications_1.HeaderNotifications.SIGN_OUT);
        notifications.push(HeaderNotifications_1.HeaderNotifications.BLOCKERS_BTN_PRESSED);
        notifications.push(HeaderNotifications_1.HeaderNotifications.SCRUM_BTN_PRESSED);
        return notifications;
    };
    ViewManager.prototype.handleNotification = function (notification) {
        var _this = this;
        switch (notification.name) {
            case AuthenticationNotifications_1.AuthenticationNotifications.USER_AUTHENTICATED:
                this.switchView(RecordsView_1.RecordsView, null, function () {
                    _this.headerView.enterScene();
                });
                break;
            case AuthenticationNotifications_1.AuthenticationNotifications.USER_SIGNED_UP:
                this.switchView(RecordsView_1.RecordsView, null, function () {
                    _this.headerView.enterScene();
                });
                break;
            case HeaderNotifications_1.HeaderNotifications.SIGN_OUT:
                this.headerView.exitScene(ViewExitTypes_1.ViewExitTypes.DEFAULT);
                this.switchView(AuthenticationView_1.AuthenticationView);
                break;
            case HeaderNotifications_1.HeaderNotifications.BLOCKERS_BTN_PRESSED:
                this.switchView(BlockersView_1.BlockersView, ViewExitTypes_1.ViewExitTypes.SWITCH);
                break;
            case HeaderNotifications_1.HeaderNotifications.SCRUM_BTN_PRESSED:
                this.switchView(RecordsView_1.RecordsView, ViewExitTypes_1.ViewExitTypes.SWITCH);
                break;
            default:
                break;
        }
    };
    return ViewManager;
}(CoreEntity_1.CoreEntity));
exports.ViewManager = ViewManager;


/***/ }),

/***/ "./src/header/HeaderNotifications.ts":
/*!*******************************************!*\
  !*** ./src/header/HeaderNotifications.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var HeaderNotifications = /** @class */ (function () {
    function HeaderNotifications() {
    }
    HeaderNotifications.SIGN_OUT = "SIGN_OUT";
    HeaderNotifications.ADD_ITEM = "ADD_ITEM";
    HeaderNotifications.SCRUM_BTN_PRESSED = "SCRUM_BTN_PRESSED";
    HeaderNotifications.BLOCKERS_BTN_PRESSED = "BLOCKERS_BTN_PRESSED";
    return HeaderNotifications;
}());
exports.HeaderNotifications = HeaderNotifications;


/***/ }),

/***/ "./src/header/HeaderView.ts":
/*!**********************************!*\
  !*** ./src/header/HeaderView.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RecordNotifications_1 = __webpack_require__(/*! ../records/RecordNotifications */ "./src/records/RecordNotifications.ts");
var HeaderNotifications_1 = __webpack_require__(/*! ./HeaderNotifications */ "./src/header/HeaderNotifications.ts");
var SystemConstants_1 = __webpack_require__(/*! ../core/SystemConstants */ "./src/core/SystemConstants.ts");
var View_1 = __webpack_require__(/*! ../core/View */ "./src/core/View.ts");
var TweenLite = gsap.TweenLite;
var Power0 = gsap.Power0;
var Back = gsap.Back;
//CSS
__webpack_require__(/*! ../_style/style-sheets/header.scss */ "./src/_style/style-sheets/header.scss");
//HTML template
var template = __webpack_require__(/*! ../_view-templates/header.html */ "./src/_view-templates/header.html");
var HeaderView = /** @class */ (function (_super) {
    __extends(HeaderView, _super);
    function HeaderView() {
        var _this = _super.call(this, "HeaderView") || this;
        console.info("Header view initiated!");
        _this.screenWidth = window.innerWidth;
        _this.screenHeight = window.innerHeight;
        _this.headingOffset = _this.screenWidth > 480 ? "-50px" : "-130px";
        _this.container = document.getElementById(SystemConstants_1.SystemConstants.HEADING_CONTAINER);
        _this.headingContainer = document.getElementById("heading-container");
        _this.headingContainer.style.top = _this.headingOffset;
        _this.container.innerHTML = template;
        _this.profileImage = document.getElementById("profile-image");
        _this.profileMenuToggle = document.getElementById("profile-dropdown-icon");
        _this.addRecordBtn = document.getElementById("header-button-add-record");
        _this.headerButtonsContainer = document.getElementById("header-buttons-container");
        _this.scrumBtn = document.getElementById("records-button");
        _this.blockersBtn = document.getElementById("blockers-button");
        _this.dropdown = document.getElementById("header-dropdown");
        _this.about = document.getElementById("header-dropdown-about");
        _this.settings = document.getElementById("header-dropdown-settings");
        _this.signOut = document.getElementById("header-dropdown-sign-out");
        _this.profileMenuToggleClickHandler = _this.profileMenuToggleClickHandler.bind(_this);
        _this.setActiveMenuBtnClickHandler = _this.setActiveMenuBtnClickHandler.bind(_this);
        _this.addRecordBtnMouseOverHandler = _this.addRecordBtnMouseOverHandler.bind(_this);
        _this.addRecordBtnMouseOutHandler = _this.addRecordBtnMouseOutHandler.bind(_this);
        _this.documentClickHandler = _this.documentClickHandler.bind(_this);
        _this.blockersBtnHandler = _this.blockersBtnHandler.bind(_this);
        _this.addRecordHandler = _this.addRecordHandler.bind(_this);
        _this.scrumBtnHandler = _this.scrumBtnHandler.bind(_this);
        _this.keyPressHandler = _this.keyPressHandler.bind(_this);
        _this.signOutHandler = _this.signOutHandler.bind(_this);
        return _this;
    }
    HeaderView.prototype.registerEventListeners = function () {
        this.addRecordBtn.addEventListener("click", this.addRecordHandler);
        this.addRecordBtn.addEventListener("mouseover", this.addRecordBtnMouseOverHandler);
        this.addRecordBtn.addEventListener("mouseout", this.addRecordBtnMouseOutHandler);
        this.profileMenuToggle.addEventListener("click", this.profileMenuToggleClickHandler);
        this.scrumBtn.addEventListener("click", this.setActiveMenuBtnClickHandler);
        this.scrumBtn.addEventListener("click", this.scrumBtnHandler);
        this.blockersBtn.addEventListener("click", this.setActiveMenuBtnClickHandler);
        this.blockersBtn.addEventListener("click", this.blockersBtnHandler);
        this.signOut.addEventListener("click", this.signOutHandler);
        document.addEventListener("keypress", this.keyPressHandler);
        document.addEventListener("click", this.documentClickHandler);
    };
    HeaderView.prototype.unregisterEventListeners = function () {
        this.addRecordBtn.removeEventListener("click", this.addRecordHandler);
        this.addRecordBtn.removeEventListener("mouseover", this.addRecordBtnMouseOverHandler);
        this.addRecordBtn.removeEventListener("mouseout", this.addRecordBtnMouseOutHandler);
        this.profileMenuToggle.removeEventListener("click", this.profileMenuToggleClickHandler);
        this.blockersBtn.removeEventListener("click", this.setActiveMenuBtnClickHandler);
        this.scrumBtn.removeEventListener("click", this.scrumBtnHandler);
        this.blockersBtn.removeEventListener("click", this.setActiveMenuBtnClickHandler);
        this.blockersBtn.removeEventListener("click", this.blockersBtnHandler);
        this.signOut.removeEventListener("click", this.signOutHandler);
        document.removeEventListener("keypress", this.keyPressHandler);
        document.removeEventListener("click", this.documentClickHandler);
    };
    HeaderView.prototype.addRecordBtnAnimation = function () {
        TweenLite.to(this.addRecordBtn, 0.15, { scale: 0.5, ease: Power0.easeOut });
        TweenLite.to(this.addRecordBtn, 0.10, { delay: 0.15, scale: 1, ease: Back.easeOut.config(0.25) });
    };
    HeaderView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push(HeaderNotifications_1.HeaderNotifications.SIGN_OUT);
        notifications.push(RecordNotifications_1.RecordNotifications.RECORD_ADDED);
        return notifications;
    };
    HeaderView.prototype.addRecordHandler = function () {
        this.addRecordBtnAnimation();
        this.sendNotification(HeaderNotifications_1.HeaderNotifications.ADD_ITEM);
    };
    HeaderView.prototype.addRecordBtnMouseOverHandler = function () {
        TweenLite.to(this.addRecordBtn, 0.15, { scale: 1.05, ease: Power0.easeOut });
    };
    HeaderView.prototype.addRecordBtnMouseOutHandler = function () {
        TweenLite.to(this.addRecordBtn, 0.2, { scale: 1, ease: Power0.easeOut });
    };
    HeaderView.prototype.profileMenuToggleClickHandler = function () {
        this.dropdown.style.display = this.dropdown.style.display === "none" ? "block" : "none";
    };
    HeaderView.prototype.scrumBtnHandler = function () {
        this.sendNotification(HeaderNotifications_1.HeaderNotifications.SCRUM_BTN_PRESSED);
    };
    HeaderView.prototype.blockersBtnHandler = function () {
        this.sendNotification(HeaderNotifications_1.HeaderNotifications.BLOCKERS_BTN_PRESSED);
    };
    HeaderView.prototype.keyPressHandler = function (e) {
        if (e.ctrlKey && e.keyCode === 17) {
            this.sendNotification(HeaderNotifications_1.HeaderNotifications.SIGN_OUT);
        }
    };
    HeaderView.prototype.setActiveMenuBtnClickHandler = function (e) {
        this.setActiveMenuBtn(e.target);
    };
    HeaderView.prototype.signOutHandler = function (e) {
        this.dropdown.style.display = "none";
        this.sendNotification(HeaderNotifications_1.HeaderNotifications.SIGN_OUT);
    };
    HeaderView.prototype.documentClickHandler = function (e) {
        if (e.target !== this.dropdown && e.target !== this.profileMenuToggle) {
            if (this.dropdown.style.display === "block")
                this.dropdown.style.display = "none";
        }
    };
    HeaderView.prototype.setActiveMenuBtn = function (btn) {
        var buttons = this.headerButtonsContainer.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        btn.classList.add("active");
    };
    HeaderView.prototype.enterScene = function () {
        this.registerEventListeners();
        TweenLite.to(this.headingContainer, 0.2, { css: { top: 0 }, ease: Back.easeOut.config(0.2) });
    };
    HeaderView.prototype.exitScene = function (exitType) {
        var _this = this;
        this.unregisterEventListeners();
        TweenLite.to(this.headingContainer, 0.2, {
            css: { top: this.headingOffset },
            onComplete: function () { return _this.setActiveMenuBtn(_this.scrumBtn); },
            ease: Back.easeOut.config(0.2)
        });
    };
    HeaderView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            case RecordNotifications_1.RecordNotifications.RECORD_ADDED:
                this.addRecordBtnAnimation();
                break;
            default:
                break;
        }
    };
    return HeaderView;
}(View_1.View));
exports.HeaderView = HeaderView;


/***/ }),

/***/ "./src/helpers/HTMLHelper.ts":
/*!***********************************!*\
  !*** ./src/helpers/HTMLHelper.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var HTMLHelper = /** @class */ (function () {
    function HTMLHelper() {
    }
    /**
     * Calculates an element position in relation to the window
     * @param element - HTMLElement/Element
     * @return {object} { x: value, y: value }
     */
    HTMLHelper.getPosition = function (element) {
        var xPosition = 0;
        var yPosition = 0;
        while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
        return { x: xPosition, y: yPosition };
    };
    ;
    /**
     * Calculates the absolute height of a specified HTML element
     * @param {HTMLElement} el
     * @return {number}
     */
    HTMLHelper.getAbsoluteHeight = function (el) {
        // Get the DOM Node if a string was provided
        el = (typeof el === "string") ? document.querySelector(el) : el;
        var styles = window.getComputedStyle(el);
        var margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
        return Math.ceil(el.offsetHeight + margin);
    };
    /**
     * Returns the index of the specified element
     * @param {Element} elem
     * @return {number}
     */
    HTMLHelper.getElementIndex = function (elem) {
        var i = 0;
        while ((elem = elem.previousElementSibling) != null)
            ++i;
        return i;
    };
    /**
     * Checks if the element is visible in the container
     * @param {HTMLElement} container
     * @param {HTMLElement} element
     * @param {boolean} partial
     * @return {boolean}
     */
    HTMLHelper.checkInView = function (container, element, partial) {
        // Get container properties
        var cTop = container.scrollTop;
        var cBottom = cTop + container.clientHeight;
        // Get element properties
        var eTop = element.offsetTop;
        var eBottom = eTop + element.clientHeight;
        // Check
        var isTotal = (eTop >= cTop && eBottom <= cBottom);
        var isPartial = partial && ((eTop < cTop && eBottom > cTop) ||
            (eBottom > cBottom && eTop < cBottom));
        // Return the result
        return (isTotal || isPartial);
    };
    /**
     * Returns a boolean value, specifying if the element is partially in the viewport
     * NOTE: Accepts both HTML and jQuery elements
     * @param el - DOM/jQuery element
     * @returns {boolean}
     */
    HTMLHelper.isElementPartiallyInViewport = function (el) {
        // if ( typeof jQuery !== 'undefined' && el instanceof jQuery ) el = el[0];
        var rect = el.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        return (vertInView && horInView);
    };
    ;
    /**
     * Returns a boolean value, specifying if the element is in the viewport
     * NOTE: Accepts both HTML and jQuery elements
     * @param el - DOM/jQuery element
     * @returns {boolean}
     */
    HTMLHelper.isElementInViewport = function (el) {
        // if ( typeof jQuery !== 'undefined' && el instanceof jQuery ) el = el[0];
        var rect = el.getBoundingClientRect();
        return rect.bottom > 0 &&
            rect.right > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
    };
    ;
    return HTMLHelper;
}());
exports.HTMLHelper = HTMLHelper;


/***/ }),

/***/ "./src/helpers/ValidationHelper.ts":
/*!*****************************************!*\
  !*** ./src/helpers/ValidationHelper.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ValidationHelper = /** @class */ (function () {
    function ValidationHelper() {
    }
    /**
     * Validates the email address provided
     * @param {string} email address
     * @return {boolean} - is valid?
     */
    ValidationHelper.validateEmail = function (email) {
        var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return regex.test(String(email).toLocaleLowerCase());
    };
    return ValidationHelper;
}());
exports.ValidationHelper = ValidationHelper;


/***/ }),

/***/ "./src/languages/Language.ts":
/*!***********************************!*\
  !*** ./src/languages/Language.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Hungarian_1 = __webpack_require__(/*! ./translations/Hungarian */ "./src/languages/translations/Hungarian.ts");
var English_1 = __webpack_require__(/*! ./translations/English */ "./src/languages/translations/English.ts");
var Languages_1 = __webpack_require__(/*! ./Languages */ "./src/languages/Languages.ts");
var Language = /** @class */ (function () {
    function Language() {
    }
    Language.getTranslation = function (stringPointer) {
        if (!Language.languages || Language.currentLanguage == null) {
            console.warn("Language component has not yet been initated!");
            return;
        }
        if (!Language.languages[Language.currentLanguage]) {
            console.warn("Language is missing!");
            return;
        }
        if (!Language.languages[Language.currentLanguage][stringPointer]) {
            console.warn("The current language does not contain the specified pointer!");
            return;
        }
        return Language.languages[Language.currentLanguage][stringPointer];
    };
    Language.getLanguagesObject = function () {
        var languages = {};
        languages[Languages_1.Languages.ENGLISH] = English_1.English;
        languages[Languages_1.Languages.HUNGARIAN] = Hungarian_1.Hungarian;
        return languages;
    };
    Language.currentLanguage = Languages_1.Languages.ENGLISH;
    Language.languages = Language.getLanguagesObject();
    return Language;
}());
exports.Language = Language;


/***/ }),

/***/ "./src/languages/Languages.ts":
/*!************************************!*\
  !*** ./src/languages/Languages.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Languages = /** @class */ (function () {
    function Languages() {
    }
    Languages.ENGLISH = 0;
    Languages.HUNGARIAN = 1;
    Languages.ROMANIAN = 2;
    Languages.SPANISH = 3;
    Languages.GERMAN = 4;
    return Languages;
}());
exports.Languages = Languages;


/***/ }),

/***/ "./src/languages/StringPointers.ts":
/*!*****************************************!*\
  !*** ./src/languages/StringPointers.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var StringPointers = /** @class */ (function () {
    function StringPointers() {
    }
    /** AUTHENTICATION VIEW COMPONENT */
    StringPointers.AUTH_TITLE_LOGIN = "AUTH_TITLE_LOGIN";
    StringPointers.AUTH_SUBTITLE_LOGIN = "AUTH_SUBTITLE_LOGIN";
    StringPointers.AUTH_TITLE_SIGN_UP = "AUTH_TITLE_SIGN_UP";
    StringPointers.AUTH_SUBTITLE_SIGN_UP = "AUTH_SUBTITLE_SIGN_UP";
    StringPointers.AUTH_EMAIL_LABEL = "AUTH_EMAIL_LABEL";
    StringPointers.AUTH_EMAIL_PLACEHOLDER = "AUTH_EMAIL_PLACEHOLDER";
    StringPointers.AUTH_PASSWORD_LABEL = "AUTH_PASSWORD_LABEL";
    StringPointers.AUTH_PASSWORD_PLACEHOLDER = "AUTH_PASSWORD_PLACEHOLDER";
    StringPointers.AUTH_FIRST_NAME_LABEL = "AUTH_FIRST_NAME_LABEL";
    StringPointers.AUTH_FIRST_NAME_PLACEHOLDER = "AUTH_FIRST_NAME_PLACEHOLDER";
    StringPointers.AUTH_LAST_NAME_LABEL = "AUTH_LAST_NAME_LABEL";
    StringPointers.AUTH_LAST_NAME_PLACEHOLDER = "AUTH_LAST_NAME_PLACEHOLDER";
    StringPointers.AUTH_REMEMBER_ME = "AUTH_REMEMBER_ME";
    StringPointers.AUTH_FORGOT_PASSWORD = "AUTH_FORGOT_PASSWORD";
    StringPointers.AUTH_LOGIN = "AUTH_LOGIN";
    StringPointers.AUTH_SIGN_UP = "AUTH_SIGN_UP";
    /** FORGOT PASSWORD VIEW COMPONENT */
    StringPointers.FORGOT_PW_TITLE = "FORGOT_PW_TITLE";
    StringPointers.FORGOT_PW_EMAIL_LABEL = "FORGOT_PW_EMAIL_LABEL";
    StringPointers.FORGOT_PW_EMAIL_PLACEHOLDER = "FORGOT_PW_EMAIL_PLACEHOLDER";
    StringPointers.FORGOT_PW_SEND_INSTRUCTIONS = "FORGOT_PW_SEND_INSTRUCTIONS";
    StringPointers.FORGOT_PW_REMEMBERED_PASSWORD = "FORGOT_PW_REMEMBERED_PASSWORD";
    StringPointers.FORGOT_PW_TRY_LOGGING_IN = "FORGOT_PW_TRY_LOGGING_IN";
    return StringPointers;
}());
exports.StringPointers = StringPointers;


/***/ }),

/***/ "./src/languages/translations/English.ts":
/*!***********************************************!*\
  !*** ./src/languages/translations/English.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var English = /** @class */ (function () {
    function English() {
    }
    /** AUTHENTICATION VIEW COMPONENT */
    English.AUTH_TITLE_LOGIN = "Welcome Back!";
    English.AUTH_SUBTITLE_LOGIN = "Enter your email and password below and you'll be on your way.";
    English.AUTH_TITLE_SIGN_UP = "Create your Account!";
    English.AUTH_SUBTITLE_SIGN_UP = "Scrumbs is a lightweight agile management tool, which allows you to effortlessly track the development process, and highlight blockers.";
    English.AUTH_EMAIL_LABEL = "email";
    English.AUTH_EMAIL_PLACEHOLDER = "Enter your email";
    English.AUTH_PASSWORD_LABEL = "password";
    English.AUTH_PASSWORD_PLACEHOLDER = "Enter your password";
    English.AUTH_FIRST_NAME_LABEL = "first name";
    English.AUTH_FIRST_NAME_PLACEHOLDER = "Enter your first name";
    English.AUTH_LAST_NAME_LABEL = "last name";
    English.AUTH_LAST_NAME_PLACEHOLDER = "Enter your last name";
    English.AUTH_REMEMBER_ME = "Remember Me";
    English.AUTH_FORGOT_PASSWORD = "Forgot Password?";
    English.AUTH_LOGIN = "login";
    English.AUTH_SIGN_UP = "sign up";
    /** FORGOT PASSWORD VIEW COMPONENT */
    English.FORGOT_PW_TITLE = "Forgot Your Password? Don't worry, we got your back.";
    English.FORGOT_PW_EMAIL_LABEL = "email";
    English.FORGOT_PW_EMAIL_PLACEHOLDER = "Enter your email";
    English.FORGOT_PW_SEND_INSTRUCTIONS = "Send Instructions";
    English.FORGOT_PW_REMEMBERED_PASSWORD = "Did you remember your password?";
    English.FORGOT_PW_TRY_LOGGING_IN = "Try logging in";
    return English;
}());
exports.English = English;


/***/ }),

/***/ "./src/languages/translations/Hungarian.ts":
/*!*************************************************!*\
  !*** ./src/languages/translations/Hungarian.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Hungarian = /** @class */ (function () {
    function Hungarian() {
    }
    /** AUTHENTICATION VIEW COMPONENT */
    Hungarian.AUTH_TITLE_LOGIN = "Üdvözöljük!";
    Hungarian.AUTH_SUBTITLE_LOGIN = "Írja be az alábbi e-mail címét és jelszavát, és az úton lesz.";
    Hungarian.AUTH_TITLE_SIGN_UP = "Hozd létre fiókodat!";
    Hungarian.AUTH_SUBTITLE_SIGN_UP = "Scrumbs egy kisméretű, agilis kezelőeszköz, amely lehetővé teszi a fejlesztési folyamat könnyű nyomon követését és a blokkolók kiemelését.";
    Hungarian.AUTH_EMAIL_LABEL = "email";
    Hungarian.AUTH_EMAIL_PLACEHOLDER = "Ird be az emailed";
    Hungarian.AUTH_PASSWORD_LABEL = "jelszo";
    Hungarian.AUTH_PASSWORD_PLACEHOLDER = "Ird be a jelszavad";
    Hungarian.AUTH_FIRST_NAME_LABEL = "kereszt nev";
    Hungarian.AUTH_FIRST_NAME_PLACEHOLDER = "Ird be a kereszt neved";
    Hungarian.AUTH_LAST_NAME_LABEL = "csalad nev";
    Hungarian.AUTH_LAST_NAME_PLACEHOLDER = "Ird be a csalad neved";
    Hungarian.AUTH_REMEMBER_ME = "Tarts eszbe";
    Hungarian.AUTH_FORGOT_PASSWORD = "El felejtetted a jelszavad?";
    Hungarian.AUTH_LOGIN = "jelentkezz be";
    Hungarian.AUTH_SIGN_UP = "iratkozz fel";
    /** FORGOT PASSWORD VIEW COMPONENT */
    Hungarian.FORGOT_PW_TITLE = "Elfelejtette a jelszavát? Aggodalomra semmi ok.";
    Hungarian.FORGOT_PW_EMAIL_LABEL = "email";
    Hungarian.FORGOT_PW_EMAIL_PLACEHOLDER = "Ird be az emailed";
    Hungarian.FORGOT_PW_SEND_INSTRUCTIONS = "Küldj útmutatót";
    Hungarian.FORGOT_PW_REMEMBERED_PASSWORD = "Emlékszel a jelszóra?";
    Hungarian.FORGOT_PW_TRY_LOGGING_IN = "Próbálj be bejelentkezni";
    return Hungarian;
}());
exports.Hungarian = Hungarian;


/***/ }),

/***/ "./src/prompt/Dialog.ts":
/*!******************************!*\
  !*** ./src/prompt/Dialog.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ViewComponent_1 = __webpack_require__(/*! ../core/ViewComponent */ "./src/core/ViewComponent.ts");
var TweenLite = gsap.TweenLite;
var Power0 = gsap.Power0;
var Back = gsap.Back;
// CSS
__webpack_require__(/*! ../_style/style-sheets/dialog.scss */ "./src/_style/style-sheets/dialog.scss");
//HTML template
var template = __webpack_require__(/*! ../_view-templates/dialog.html */ "./src/_view-templates/dialog.html");
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(view, container, confirmSignal, title, message, submitBtnText, cancelBtnText) {
        var _this = _super.call(this, view, container) || this;
        console.info("Dialog view component initialized.");
        _this.container.innerHTML = template;
        _this.confirmSignal = confirmSignal;
        _this.title = document.getElementById("dialog-title");
        _this.message = document.getElementById("dialog-message");
        _this.submitButton = document.getElementById("dialog-submit-button");
        _this.cancelButton = document.getElementById("dialog-cancel-button");
        _this.closeButton = document.getElementById("close-dialog");
        if (title.length > 100)
            title = title.substr(0, 99) + " ...?";
        _this.title.innerHTML = title;
        if (message.length > 100)
            throw new Error("Dialog message length cannot exceed 100 characters!");
        if (message)
            _this.message.innerHTML = message;
        submitBtnText ? _this.submitButton.innerText = submitBtnText : _this.submitButton.innerText = "OK";
        cancelBtnText ? _this.cancelButton.innerHTML = cancelBtnText : _this.cancelButton.innerText = "Cancel";
        _this.confirmBtnClickHandler = _this.confirmBtnClickHandler.bind(_this);
        _this.exitScene = _this.exitScene.bind(_this);
        _this.enterScene();
        return _this;
    }
    Dialog.prototype.registerEventListeners = function () {
        this.closeButton.addEventListener("click", this.exitScene);
        this.cancelButton.addEventListener("click", this.exitScene);
        this.submitButton.addEventListener("click", this.confirmBtnClickHandler);
    };
    Dialog.prototype.unregisterEventListeners = function () {
        this.closeButton.removeEventListener("click", this.exitScene);
        this.cancelButton.removeEventListener("click", this.exitScene);
        this.submitButton.removeEventListener("click", this.confirmBtnClickHandler);
    };
    Dialog.prototype.confirmBtnClickHandler = function (e) {
        this.sendSignal(this.confirmSignal);
        this.exitScene();
    };
    Dialog.prototype.enterScene = function () {
        this.registerEventListeners();
        TweenLite.to(this.container, 0.3, { css: { "margin-top": "15%", opacity: 1 }, ease: Back.easeOut.config(0.7) });
    };
    Dialog.prototype.exitScene = function () {
        var _this = this;
        this.unregisterEventListeners();
        TweenLite.to(this.view.background, 0.1, { opacity: 0, delay: 0.05 });
        TweenLite.to(this.container, 0.15, { css: { "margin-top": "30%", opacity: 0 }, onComplete: function () {
                _this.view.componentExited(_this.name);
            }, ease: Power0.easeOut });
    };
    return Dialog;
}(ViewComponent_1.ViewComponent));
exports.Dialog = Dialog;


/***/ }),

/***/ "./src/prompt/PromptNotifications.ts":
/*!*******************************************!*\
  !*** ./src/prompt/PromptNotifications.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var PromptNotifications = /** @class */ (function () {
    function PromptNotifications() {
    }
    PromptNotifications.DELETE_RECORD = "PROMPT_DELETE_RECORD";
    return PromptNotifications;
}());
exports.PromptNotifications = PromptNotifications;


/***/ }),

/***/ "./src/prompt/PromptView.ts":
/*!**********************************!*\
  !*** ./src/prompt/PromptView.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RecordNotifications_1 = __webpack_require__(/*! ../records/RecordNotifications */ "./src/records/RecordNotifications.ts");
var PromptNotifications_1 = __webpack_require__(/*! ./PromptNotifications */ "./src/prompt/PromptNotifications.ts");
var View_1 = __webpack_require__(/*! ../core/View */ "./src/core/View.ts");
var Dialog_1 = __webpack_require__(/*! ./Dialog */ "./src/prompt/Dialog.ts");
var TweenLite = gsap.TweenLite;
var Power1 = gsap.Power1;
// CSS
__webpack_require__(/*! ../_style/style-sheets/prompt.scss */ "./src/_style/style-sheets/prompt.scss");
var PromptView = /** @class */ (function (_super) {
    __extends(PromptView, _super);
    function PromptView() {
        var _this = _super.call(this, "PromptView") || this;
        _this.container = document.createElement("div");
        _this.container.id = "prompt-view-container";
        _this.background = document.createElement("div");
        _this.background.id = "prompt-view-background";
        _this.container.appendChild(_this.background);
        _this.dialogContainer = document.createElement("div");
        _this.dialogContainer.id = "dialog-container";
        _this.container.appendChild(_this.dialogContainer);
        _this.registerEventListeners();
        return _this;
    }
    PromptView.prototype.registerEventListeners = function () {
        var _this = this;
        this.background.addEventListener("click", function () {
            _this.exitScene();
        });
    };
    PromptView.prototype.enterScene = function () {
        document.body.appendChild(this.container);
        TweenLite.to(this.background, 0.2, { opacity: 0.65, ease: Power1.easeOut });
    };
    PromptView.prototype.exitScene = function () {
        this.dialog.exitScene();
    };
    PromptView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push(RecordNotifications_1.RecordNotifications.DELETE_RECORD);
        return notifications;
    };
    PromptView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            case RecordNotifications_1.RecordNotifications.DELETE_RECORD:
                this.enterScene();
                this.dialog = new Dialog_1.Dialog(this, this.dialogContainer, PromptNotifications_1.PromptNotifications.DELETE_RECORD, "Do you want to delete " + notification.data.recordName + '?', "Once you delete this record you won't be able to undo this action.", "Yes, delete " + notification.data.recordName + '.', "Cancel, keep the record");
                break;
            default:
                break;
        }
    };
    PromptView.prototype.handleSignal = function (signal) {
        switch (signal.name) {
            case PromptNotifications_1.PromptNotifications.DELETE_RECORD:
                this.sendNotification(PromptNotifications_1.PromptNotifications.DELETE_RECORD);
                break;
            default:
                break;
        }
    };
    return PromptView;
}(View_1.View));
exports.PromptView = PromptView;


/***/ }),

/***/ "./src/records/Record.ts":
/*!*******************************!*\
  !*** ./src/records/Record.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ConnectionProxy_1 = __webpack_require__(/*! ../connection/ConnectionProxy */ "./src/connection/ConnectionProxy.ts");
var HTMLHelper_1 = __webpack_require__(/*! ../helpers/HTMLHelper */ "./src/helpers/HTMLHelper.ts");
var TweenLite = gsap.TweenLite;
var Power1 = gsap.Power1;
var AddNoteModel_1 = __webpack_require__(/*! ../connection/models/AddNoteModel */ "./src/connection/models/AddNoteModel.ts");
var EditRecordModel_1 = __webpack_require__(/*! ../connection/models/EditRecordModel */ "./src/connection/models/EditRecordModel.ts");
var Record = /** @class */ (function () {
    function Record(parent, data, mainContainer, colorData, recordIndex) {
        this.parent = parent;
        this.name = data.record.name;
        this.id = data.record._id;
        this.created = data.record.created;
        this.moderators = data.record.moderators;
        this.ownerId = data.record.owner;
        this.logs = data.logs;
        this.colorData = colorData;
        this.recordIndex = recordIndex;
        this.recordOpen = false;
        this.contentContainer = document.getElementById("content-container");
        this.mainContainer = mainContainer;
        this.container = document.createElement("div");
        this.container.id = "record_" + this.id;
        this.container.className = "record-container";
        this.recordBody = document.createElement("div");
        this.recordBody.className = "record-body";
        this.recordBody.style.opacity = "0";
        this.recordBody.style.height = "0px";
        this.logWrapper = document.createElement("div");
        this.logWrapper.id = this.id + "-wrapper";
        this.logWrapper.className = "log-wrapper";
        this.logWrapper.style.opacity = "0";
        this.logScrollCover = document.createElement("div");
        this.logScrollCover.className = "log-scroll-cover";
        this.logScrollCover.id = this.id + "scroll-cover";
        this.logWrapper.appendChild(this.logScrollCover);
        this.recordFooter = document.createElement("div");
        this.recordFooter.className = "record-footer";
        this.noteInput = document.createElement("textarea");
        this.noteInput.className = "note-input";
        this.noteInput.placeholder = "Enter your notes";
        this.recordFooter.appendChild(this.noteInput);
        this.generateRecordHeader();
        this.generateRecordContent();
        if (!this.mainContainer.firstChild) {
            this.mainContainer.appendChild(this.container);
        }
        if (this.mainContainer.firstChild && this.mainContainer.firstChild.nodeName !== "INPUT") {
            this.mainContainer.insertBefore(this.container, this.mainContainer.firstChild);
        }
        else {
            this.mainContainer.insertBefore(this.container, this.mainContainer.children[1]);
        }
        this.editRecordInput = document.createElement("input");
        this.editRecordInput.className = "edit-record-input";
        this.editRecordInput.value = this.name;
        this.editRecordKeydownHandler = this.editRecordKeydownHandler.bind(this);
        this.editRecordBlurHandler = this.editRecordBlurHandler.bind(this);
        this.recordBodyClickHandler = this.recordBodyClickHandler.bind(this);
        this.registerEventListeners();
    }
    Record.prototype.registerEventListeners = function () {
        var _this = this;
        this.recordHeader.addEventListener("click", function (e) {
            console.log(e.target.id);
            if (e.target.classList.contains(_this.editRecordInput.className))
                return;
            _this.toggleRecord();
        });
        this.noteInput.addEventListener("keydown", function (e) {
            var key = e.which || e.keyCode;
            var self = _this;
            if (key === 13) {
                e.preventDefault();
                var p = new ConnectionProxy_1.ConnectionProxy("RecordProxy");
                var content_1 = _this.noteInput.value;
                var isBlocker = false;
                if (content_1.toLowerCase().substring(0, 3) === "b**") {
                    isBlocker = true;
                    content_1 = content_1.substring(3, content_1.length);
                }
                console.info("is blocker: " + isBlocker);
                console.info("content: " + content_1);
                var addNoteModel = new AddNoteModel_1.AddNoteModel(_this.id, content_1, isBlocker);
                p.addNote(addNoteModel, function (log) {
                    console.log("Log id received from server" + log);
                    var logElement = document.getElementById(log._id);
                    var p = document.createElement("p");
                    p.className = "note";
                    p.innerHTML = content_1;
                    self.noteInput.value = "";
                    console.log(logElement);
                    if (!logElement) {
                        var logContainer = document.createElement("div");
                        logContainer.id = log._id + "-container";
                        logContainer.className = "log-container";
                        var logHeader = document.createElement("p");
                        logHeader.className = "log-header";
                        logHeader.classList.add(self.colorData.main);
                        logHeader.innerHTML = self.parseDateFormat(log.created);
                        logContainer.appendChild(logHeader);
                        var logBody = document.createElement("div");
                        logBody.id = log._id;
                        logBody.className = "log-body";
                        logContainer.appendChild(logBody);
                        logBody.appendChild(p);
                        self.logWrapper.appendChild(logContainer);
                        self.logWrapper.scrollTop = self.logWrapper.scrollHeight;
                    }
                    else {
                        logElement.appendChild(p);
                        self.logWrapper.appendChild(logElement);
                        self.logWrapper.scrollTop = self.logWrapper.scrollHeight;
                    }
                    self.adjustForHiddenScrollbar();
                }, function (message) {
                    console.error(message);
                });
            }
        });
        this.recordBody.addEventListener("click", this.recordBodyClickHandler);
        this.logWrapper.addEventListener("scroll", function () {
            if (_this.logWrapper.scrollTop == 0) {
                _this.recordBody.classList.remove("scrolled");
            }
            else {
                _this.recordBody.classList.add("scrolled");
            }
        });
        this.logWrapper.addEventListener("mouseover", function (e) {
            TweenLite.to(_this.logScrollCover, 0.3, { opacity: 0 });
        });
        this.logWrapper.addEventListener("mouseout", function (e) {
            TweenLite.to(_this.logScrollCover, 0.3, { opacity: 1 });
        });
        this.editRecordInput.addEventListener("keydown", this.editRecordKeydownHandler);
        this.editRecordInput.addEventListener("blur", this.editRecordBlurHandler);
    };
    Record.prototype.recordBodyClickHandler = function (e) {
        this.focusRecord();
    };
    Record.prototype.toggleRecord = function () {
        var self = this;
        var calculatedMinHeight = HTMLHelper_1.HTMLHelper.getAbsoluteHeight(this.logWrapper) + HTMLHelper_1.HTMLHelper.getAbsoluteHeight(this.recordFooter);
        this.mainContainer.style.right = "0";
        this.mainContainer.style.overflow = "hidden";
        if (!this.recordOpen) {
            this.container.classList.add("open-record");
            this.recordBody.style.display = "block";
            this.focusRecord();
            this.recordHeader.classList.add("active");
            this.logWrapper.scrollTop = this.logWrapper.scrollHeight;
            TweenLite.to(this.recordArrowIcon, 0.3, { rotation: "180_cw" });
            TweenLite.to(this.recordBody, 0.5, { css: { "min-height": calculatedMinHeight + "px", height: "100%" }, onComplete: function () {
                    self.adjustForHiddenScrollbar();
                    self.mainContainer.style.overflow = "auto";
                } });
            TweenLite.to(this.recordBody, 1.5, { css: { opacity: 1 } });
            TweenLite.to(this.logWrapper, 1, { opacity: 1, delay: 0.5, onComplete: function () {
                    if (self.logWrapper.scrollTop != 0)
                        self.recordBody.classList.add("scrolled");
                } });
            this.recordOpen = true;
            this.noteInput.focus();
        }
        else {
            this.parent.hideRecordOptions();
            this.container.classList.remove("open-record");
            if (!this.isActiveRecord) {
                this.recordHeader.classList.remove("active");
            }
            TweenLite.to(this.recordArrowIcon, 0.3, { rotation: "-=180_cw" });
            this.recordBody.style.display = "none";
            this.logWrapper.style.opacity = "0";
            this.recordOpen = false;
            this.noteInput.value = "";
            this.adjustForHiddenScrollbar();
            this.mainContainer.style.overflow = "auto";
        }
    };
    Record.prototype.focusRecord = function () {
        var self = this;
        TweenLite.to(this.mainContainer, 0.3, { scrollTop: this.getScrollTopDistance(), onComplete: function () {
                var distance = HTMLHelper_1.HTMLHelper.getPosition(self.container);
                self.parent.displayOptionsForRecord(distance.y, self);
                self.parent.setActiveRecord(self);
                self.recordHeader.classList.add("active");
                self.container.classList.add("active-record");
                self.container.classList.add(self.colorData.line);
            } });
    };
    Record.prototype.generateRecordHeader = function () {
        this.recordHeader = document.createElement("div");
        this.recordHeader.className = "record-header";
        this.recordName = document.createElement("p");
        this.recordName.className = "record-name";
        this.recordName.innerHTML = this.name;
        this.recordArrowIcon = document.createElement("span");
        this.recordArrowIcon.className = "record-dropdown-icon";
        this.recordHeader.appendChild(this.recordName);
        this.recordHeader.appendChild(this.recordArrowIcon);
        this.recordHeader.style.opacity = "0";
        this.container.appendChild(this.recordHeader);
        var delay = 0;
        if (this.recordIndex) {
            if (this.recordIndex > 10) {
                delay = 2.5;
            }
            else {
                delay = this.recordIndex * 0.25;
            }
        }
        TweenLite.to(this.recordHeader, 0.2, { opacity: 1, ease: Power1.easeOut, delay: delay });
    };
    Record.prototype.generateRecordContent = function () {
        for (var i = 0; i < this.logs.length; i++) {
            var logContainer = document.createElement("div");
            logContainer.id = this.logs[i]._id + "-container";
            logContainer.className = "log-container";
            var logHeader = document.createElement("p");
            logHeader.className = "log-header";
            logHeader.classList.add(this.colorData.main);
            logHeader.innerHTML = this.parseDateFormat(this.logs[i].created);
            logContainer.appendChild(logHeader);
            var logBody = document.createElement("div");
            logBody.id = this.logs[i]._id;
            logBody.className = "log-body";
            logContainer.appendChild(logBody);
            for (var j = 0; j < this.logs[i].notes.length; j++) {
                var note = this.logs[i].notes[j];
                var p = document.createElement("p");
                p.className = "note";
                p.id = note._id;
                p.innerHTML = note.content;
                if (note.blocker)
                    p.style.backgroundColor = "#fff5f5";
                logBody.appendChild(p);
            }
            this.logWrapper.appendChild(logContainer);
        }
        this.recordBody.appendChild(this.logWrapper);
        this.recordBody.appendChild(this.recordFooter);
        this.container.appendChild(this.recordBody);
        this.recordBody.style.display = "none";
    };
    Record.prototype.enterScene = function () {
    };
    Record.prototype.exitScene = function () {
    };
    Record.prototype.activateRecord = function () {
        this.recordHeader.classList.add("active");
        this.container.classList.add("active-record");
        console.log("checkInView: " + HTMLHelper_1.HTMLHelper.checkInView(this.mainContainer, this.container, false));
        var cTop = this.mainContainer.scrollTop;
        var cBottom = cTop + this.mainContainer.clientHeight;
        var eTop = this.container.offsetTop;
        var eBottom = eTop + this.container.clientHeight;
        if (!HTMLHelper_1.HTMLHelper.checkInView(this.mainContainer, this.container, false)) {
            if (this.mainContainer.firstElementChild.id === this.container.id ||
                this.mainContainer.lastElementChild.id === this.container.id) {
                TweenLite.to(this.mainContainer, 0.2, { scrollTo: "#" + this.container.id });
            }
            else {
                if (eTop < cTop) {
                    TweenLite.to(this.mainContainer, 0.2, { scrollTop: "-=" + HTMLHelper_1.HTMLHelper.getAbsoluteHeight(this.container) });
                }
                else if (eBottom > cBottom) {
                    TweenLite.to(this.mainContainer, 0.2, { scrollTop: "+=" + HTMLHelper_1.HTMLHelper.getAbsoluteHeight(this.container) });
                }
            }
        }
        this.container.classList.add(this.colorData.line);
        this.isActiveRecord = true;
    };
    Record.prototype.passivateRecord = function () {
        this.recordHeader.classList.remove("active");
        this.container.classList.remove("active-record");
        this.container.classList.remove("active-line-color-01", "active-line-color-02", "active-line-color-03", "active-line-color-04", "active-line-color-05", "active-line-color-06", "active-line-color-07", "active-line-color-08", "active-line-color-09", "active-line-color-10");
        this.isActiveRecord = false;
    };
    Record.prototype.displayEditRecordInput = function () {
        this.hideHeaderContent();
        this.isEditModeActive = true;
        this.recordHeader.insertBefore(this.editRecordInput, this.recordHeader.firstChild);
        this.editRecordInput.focus();
    };
    Record.prototype.editRecordKeydownHandler = function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            e.stopPropagation();
            e.preventDefault();
            if (!this.isEditModeActive)
                return;
            this.isEditModeActive = false;
            this.editRecord();
        }
    };
    Record.prototype.editRecordBlurHandler = function (e) {
        if (!this.isEditModeActive)
            return;
        this.isEditModeActive = false;
        this.editRecord();
    };
    Record.prototype.editRecord = function () {
        var editedName = this.editRecordInput.value;
        if (editedName === this.name) {
            this.showHeaderContent();
            return;
        }
        this.showHeaderContent(editedName);
        var proxy = new ConnectionProxy_1.ConnectionProxy("RecordProxy");
        var editRecordModel = new EditRecordModel_1.EditRecordModel(this.id, editedName);
        proxy.editRecord(editRecordModel, function (response) {
        }, function (message) {
            console.error(message);
        });
    };
    Record.prototype.hideHeaderContent = function () {
        this.recordName.style.display = "none";
        this.recordArrowIcon.style.display = "none";
    };
    Record.prototype.showHeaderContent = function (name) {
        if (this.recordHeader.contains(this.editRecordInput))
            this.recordHeader.removeChild(this.editRecordInput);
        if (name) {
            this.name = name;
            this.recordName.innerHTML = name;
        }
        this.recordName.style.display = "block";
        this.recordArrowIcon.style.display = "block";
    };
    Record.prototype.parseDateFormat = function (date) {
        var d = new Date(date);
        var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
            "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
        ];
        var year = d.getFullYear();
        var month = monthNames[d.getMonth()];
        var day = d.getDate();
        return day + " " + month + " " + year;
    };
    Record.prototype.getScrollTopDistance = function () {
        var index = HTMLHelper_1.HTMLHelper.getElementIndex(this.container);
        var openRecords = document.getElementsByClassName("open-record");
        var recordHeight = 51;
        var substract = 20;
        var openRecordHeights = [];
        for (var i = 0; i < openRecords.length; i++) {
            var openRecordIndex = HTMLHelper_1.HTMLHelper.getElementIndex(openRecords[i]);
            if (openRecordIndex < index) {
                openRecordHeights.push(HTMLHelper_1.HTMLHelper.getAbsoluteHeight(openRecords[i]));
            }
        }
        var totalHeightOpenRecords = 0;
        for (var i = 0; i < openRecordHeights.length; i++) {
            totalHeightOpenRecords += openRecordHeights[i];
        }
        return recordHeight * (index - openRecordHeights.length) + totalHeightOpenRecords + substract;
    };
    Record.prototype.adjustForHiddenScrollbar = function () {
        if (this.isRecordsContainerScrollable()) {
            this.mainContainer.style.right = "-20px";
        }
        else {
            this.mainContainer.style.right = "0";
        }
    };
    Record.prototype.isRecordsContainerScrollable = function () {
        return this.mainContainer.scrollHeight > this.mainContainer.clientHeight;
    };
    return Record;
}());
exports.Record = Record;


/***/ }),

/***/ "./src/records/RecordNotifications.ts":
/*!********************************************!*\
  !*** ./src/records/RecordNotifications.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var RecordNotifications = /** @class */ (function () {
    function RecordNotifications() {
    }
    RecordNotifications.RECORD_ADDED = "RECORD_ADDED";
    RecordNotifications.EXIT_FINISHED = "EXIT_FINISHED";
    RecordNotifications.POPULATE = "POPULATE";
    RecordNotifications.DISPLAY_RECORD_OPTIONS = "DISPLAY_RECORD_OPTIONS";
    RecordNotifications.HIDE_RECORD_OPTIONS = "HIDE_RECORD_OPTIONS";
    RecordNotifications.DELETE_RECORD = "DELETE_RECORD";
    return RecordNotifications;
}());
exports.RecordNotifications = RecordNotifications;


/***/ }),

/***/ "./src/records/Records.ts":
/*!********************************!*\
  !*** ./src/records/Records.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RecordNotifications_1 = __webpack_require__(/*! ./RecordNotifications */ "./src/records/RecordNotifications.ts");
var SystemConstants_1 = __webpack_require__(/*! ../core/SystemConstants */ "./src/core/SystemConstants.ts");
var ViewComponent_1 = __webpack_require__(/*! ../core/ViewComponent */ "./src/core/ViewComponent.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ../core/ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var Record_1 = __webpack_require__(/*! ./Record */ "./src/records/Record.ts");
var TweenLite = gsap.TweenLite;
var Power1 = gsap.Power1;
var Back = gsap.Back;
// CSS
__webpack_require__(/*! ../_style/style-sheets/records.scss */ "./src/_style/style-sheets/records.scss");
// HTML template
var optionsTemplate = __webpack_require__(/*! ../_view-templates/record-options.html */ "./src/_view-templates/record-options.html");
var Records = /** @class */ (function (_super) {
    __extends(Records, _super);
    function Records(view, container) {
        var _this = _super.call(this, view, container) || this;
        console.info("Records view component initiated!");
        _this.records = [];
        _this.activeRecordIndex = -1;
        _this.colors = _this.generateRecordsPrimaryColors();
        _this.contentContainer = document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER);
        _this.keyPressHandler = _this.keyPressHandler.bind(_this);
        _this.keyUpHandler = _this.keyUpHandler.bind(_this);
        _this.keyDownHandler = _this.keyDownHandler.bind(_this);
        _this.resizeHandler = _this.resizeHandler.bind(_this);
        _this.scrollHandler = _this.scrollHandler.bind(_this);
        _this.editRecordHandler = _this.editRecordHandler.bind(_this);
        _this.deleteRecordHandler = _this.deleteRecordHandler.bind(_this);
        _this.createRecordKeyPressHandler = _this.createRecordKeyPressHandler.bind(_this);
        _this.createRecordBlurHandler = _this.createRecordBlurHandler.bind(_this);
        _this.createRecordInput = document.createElement("input");
        _this.createRecordInput.setAttribute("style", "border: 0; padding-left: 0; font-weight: bold;");
        _this.isRecordCreationInProgress = false;
        _this.recordOptions = document.createElement("div");
        _this.recordOptions.className = "record-options";
        _this.recordOptions.style.left = _this.contentContainer.offsetWidth / 2 + "px";
        _this.recordOptions.innerHTML = optionsTemplate;
        document.body.appendChild(_this.recordOptions);
        _this.editRecord = document.getElementById("edit-record-btn");
        _this.deleteRecord = document.getElementById("delete-record-btn");
        _this.enterScene();
        return _this;
    }
    Records.prototype.registerEventListeners = function () {
        document.addEventListener("keypress", this.keyPressHandler, true);
        document.addEventListener("keyup", this.keyUpHandler, true);
        document.addEventListener("keydown", this.keyDownHandler, true);
        window.addEventListener("resize", this.resizeHandler, true);
        this.container.addEventListener("scroll", this.scrollHandler, true);
        this.editRecord.addEventListener("click", this.editRecordHandler, true);
        this.deleteRecord.addEventListener("click", this.deleteRecordHandler, true);
        this.createRecordInput.addEventListener("keypress", this.createRecordKeyPressHandler, true);
        this.createRecordInput.addEventListener("blur", this.createRecordBlurHandler, true);
    };
    Records.prototype.unregisterEventListeners = function () {
        document.removeEventListener("keypress", this.keyPressHandler, true);
        document.removeEventListener("keyup", this.keyUpHandler, true);
        document.removeEventListener("keydown", this.keyDownHandler, true);
        window.removeEventListener("resize", this.resizeHandler, true);
        this.container.removeEventListener("scroll", this.scrollHandler, true);
        this.editRecord.removeEventListener("click", this.editRecordHandler, true);
        this.deleteRecord.removeEventListener("click", this.deleteRecordHandler, true);
        this.createRecordInput.removeEventListener("keypress", this.createRecordKeyPressHandler, true);
        this.createRecordInput.removeEventListener("blur", this.createRecordBlurHandler, true);
    };
    Records.prototype.keyPressHandler = function (e) {
        console.log(e.ctrlKey);
        console.log(e.keyCode);
        if (e.ctrlKey && e.keyCode === 14) { // N
            this.initializeRecordInput();
            this.sendSignal(RecordNotifications_1.RecordNotifications.RECORD_ADDED);
            e.preventDefault();
        }
        if (e.ctrlKey && e.keyCode === 15) { // O
            if (this.container.firstChild && this.container.firstChild.nodeName === "INPUT") {
                this.container.removeChild(this.container.firstChild);
            }
            if (this.activeRecord)
                this.activeRecord.toggleRecord();
            e.preventDefault();
        }
    };
    Records.prototype.keyUpHandler = function (e) {
        if (e.ctrlKey && e.keyCode === 9) {
            this.hideRecordOptions();
            if (!e.shiftKey) {
                this.setNextActiveRecord();
            }
            else {
                this.setNextActiveRecord(true);
            }
            e.preventDefault();
        }
    };
    Records.prototype.keyDownHandler = function (e) {
        if (e.keyCode == 27) { // ESC
            if (this.activeRecord) {
                this.activeRecord.passivateRecord();
                this.activeRecordIndex = -1;
            }
            this.isRecordCreationInProgress = false;
            if (this.container.firstChild && this.container.firstChild.nodeName === "INPUT") {
                this.container.removeChild(this.container.firstChild);
            }
            e.preventDefault();
        }
    };
    Records.prototype.resizeHandler = function (e) {
        var now = new Date();
        var delay = now - this.resizeTimer;
        if (delay < 50)
            return;
        this.resizeTimer = new Date();
        this.adjustViewHeight();
    };
    Records.prototype.scrollHandler = function (e) {
        if (e.target.className !== "log-wrapper")
            this.hideRecordOptions();
    };
    Records.prototype.editRecordHandler = function (e) {
        console.info("Edit record btn pressed");
        this.optionsActiveRecord.displayEditRecordInput();
    };
    Records.prototype.deleteRecordHandler = function (e) {
        this.sendSignal(RecordNotifications_1.RecordNotifications.DELETE_RECORD, { recordName: this.activeRecord.name });
    };
    Records.prototype.enterScene = function () {
        this.registerEventListeners();
        this.container.setAttribute("style", "display: block; padding: 20px; position: absolute; top: 0px; bottom: 0px; left: 0px; right: -20px; overflow: auto;");
        this.contentContainer.style.overflow = "hidden";
        this.adjustViewHeight();
        this.populate();
    };
    Records.prototype.exitScene = function (exitType) {
        var _this = this;
        _super.prototype.exitScene.call(this, exitType);
        this.unregisterEventListeners();
        this.hideRecordOptions();
        switch (exitType) {
            case ViewExitTypes_1.ViewExitTypes.SWITCH:
                console.log("records container right: " + this.container.style.right);
                //TODO: Calculate speed based on the number of records?
                /** If there are no records, exit right away */
                if (!this.records.length) {
                    this.view.componentExited(this.name);
                    return;
                }
                this.container.style.overflow = "hidden";
                var start_1 = new Date().getTime();
                var delay = 0;
                for (var i = this.records.length - 1; i >= 0; i--) {
                    delay += 0.02;
                    TweenLite.to(this.records[i].container, 0.2, { delay: delay, "margin-top": "15%", ease: Power1.easeOut });
                    TweenLite.to(this.records[i].container, 0.15, { delay: delay, opacity: 0.1, ease: Power1.easeOut });
                    if (i === 0) {
                        setTimeout(function () {
                            console.log("Record exit finished in " + (new Date().getTime() - start_1) + " ms.");
                            _this.recordOptions.parentNode.removeChild(_this.recordOptions);
                            _this.view.componentExited(_this.name);
                        }, (150 + delay * 1000));
                    }
                }
                break;
            case ViewExitTypes_1.ViewExitTypes.DEFAULT:
                this.records = [];
                TweenLite.to(this.container, 0.15, { opacity: 0, ease: Power1.easeOut });
                TweenLite.to(this.contentContainer, 0.4, { css: { top: "-105%" }, onComplete: function () {
                        _this.recordOptions.parentNode.removeChild(_this.recordOptions);
                        _this.view.componentExited(_this.name);
                    }, ease: Back.easeOut.config(0.25) });
                break;
            default:
                console.warn("Invalid exit type provided in records view component.");
        }
    };
    Records.prototype.populate = function () {
        var _this = this;
        this.connection.getRecords(function (response) {
            var records = response.records;
            for (var i = 0; i < records.length; i++) {
                _this.lastRecord = new Record_1.Record(_this, records[i], _this.container, _this.colors[i % _this.colors.length], 0);
                _this.records.unshift(_this.lastRecord);
            }
        }, function (message) {
            console.error(message);
        });
    };
    Records.prototype.initializeRecordInput = function () {
        if (this.activeRecord) {
            this.activeRecord.passivateRecord();
            this.activeRecordIndex = -1;
        }
        this.container.insertBefore(this.createRecordInput, this.container.firstChild);
        this.createRecordInput.focus();
        this.isRecordCreationInProgress = true;
    };
    Records.prototype.createRecordKeyPressHandler = function (e) {
        var key = e.which || e.keyCode;
        console.log("key: " + key);
        if (key === 13 || e.ctrlKey && e.keyCode === 14) {
            this.createRecord();
        }
    };
    Records.prototype.createRecordBlurHandler = function (e) {
        this.createRecord();
    };
    Records.prototype.createRecord = function () {
        var _this = this;
        if (!this.isRecordCreationInProgress)
            return;
        this.isRecordCreationInProgress = false;
        var recordName = this.createRecordInput.value;
        this.createRecordInput.value = "";
        if (!recordName) {
            this.createRecordInput.parentNode.removeChild(this.createRecordInput);
        }
        else {
            this.createRecordInput.parentNode.removeChild(this.createRecordInput);
            this.connection.createRecord(recordName, function (response) {
                var record = response.record;
                _this.lastRecord = new Record_1.Record(_this, { record: record, logs: [] }, _this.container, _this.colors[Math.floor(Math.random() * (_this.colors.length - 1))]);
                _this.records.unshift(_this.lastRecord);
                _this.activeRecordIndex = -1;
                _this.setNextActiveRecord();
            }, function (message) {
                console.error(message);
            });
        }
    };
    Records.prototype.generateRecordsPrimaryColors = function () {
        var colorsArray = [
            {
                main: "primary-highlight",
                line: "active-line-color-01"
            },
            {
                main: "secondary-highlight",
                line: "active-line-color-02"
            },
            {
                main: "tertiary-highlight",
                line: "active-line-color-03"
            },
            {
                main: "quaternary-highlight",
                line: "active-line-color-04"
            },
            {
                main: "quinary-highlight",
                line: "active-line-color-05"
            },
            {
                main: "senary-highlight",
                line: "active-line-color-06"
            },
            {
                main: "septenary-highlight",
                line: "active-line-color-07"
            },
            {
                main: "octonary-highlight",
                line: "active-line-color-08"
            },
            {
                main: "nonary-highlight",
                line: "active-line-color-09"
            },
            {
                main: "denary-highlight",
                line: "active-line-color-10"
            }
        ];
        for (var i = colorsArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [colorsArray[j], colorsArray[i]], colorsArray[i] = _a[0], colorsArray[j] = _a[1];
        }
        return colorsArray;
        var _a;
    };
    Records.prototype.setNextActiveRecord = function (reverse) {
        if (!this.records.length)
            return;
        if (this.activeRecordIndex >= this.records.length - 1 && !reverse)
            this.activeRecordIndex = -1;
        if (this.activeRecordIndex <= 0 && reverse)
            this.activeRecordIndex = this.records.length;
        if (!reverse) {
            this.activeRecordIndex++;
        }
        else {
            if (this.activeRecordIndex < 1) {
                this.activeRecordIndex = 0;
            }
            else {
                this.activeRecordIndex--;
            }
        }
        if (this.activeRecord)
            this.activeRecord.passivateRecord();
        this.activeRecord = this.records[this.activeRecordIndex];
        this.activeRecord.activateRecord();
    };
    Records.prototype.setActiveRecord = function (record) {
        if (this.activeRecord)
            this.activeRecord.passivateRecord();
        this.activeRecord = record;
        this.activeRecordIndex = this.records.map(function (r) { return r.id; }).indexOf(record.id);
    };
    Records.prototype.displayOptionsForRecord = function (distanceTop, record) {
        if (this.optionsActiveRecord && this.optionsActiveRecord.id === record.id)
            return;
        var self = this;
        var offset = 10;
        var contentContainerHalf = this.contentContainer.offsetWidth / 2;
        TweenLite.to(this.recordOptions, 0.3, { left: contentContainerHalf + (contentContainerHalf / 2) });
        setTimeout(function () {
            self.recordOptions.style.top = (distanceTop + offset) + "px";
        }, 300);
        var moveTo = window.innerWidth / 2 + (this.contentContainer.offsetWidth / 2 - this.recordOptions.offsetWidth / 2) + offset;
        TweenLite.to(this.recordOptions, 0.25, { delay: 0.4, left: moveTo });
        this.optionsActiveRecord = record;
        console.log("Options active for record: " + this.optionsActiveRecord.name);
    };
    Records.prototype.hideRecordOptions = function () {
        TweenLite.to(this.recordOptions, 0.5, { left: this.contentContainer.offsetWidth / 2 });
    };
    Records.prototype.adjustViewHeight = function () {
        console.info("adjust view height executed");
        this.container.style.maxHeight = (window.innerHeight - this.contentContainer.offsetTop) + "px";
        this.adjustForHiddenScrollbar();
    };
    Records.prototype.adjustForHiddenScrollbar = function () {
        if (this.isRecordsContainerScrollable()) {
            this.container.style.right = "-20px";
        }
        else {
            this.container.style.right = "0";
        }
    };
    Records.prototype.isRecordsContainerScrollable = function () {
        return this.container.scrollHeight > this.container.clientHeight;
    };
    Records.prototype.deleteActiveRecord = function () {
        this.hideRecordOptions();
        this.activeRecord.passivateRecord();
        this.records.splice(this.activeRecordIndex, 1);
        this.activeRecord.container.parentNode.removeChild(this.activeRecord.container);
        this.connection.deleteRecord(this.activeRecord.id, function (response) { return console.info(response); }, function (message) { return console.warn(message); });
        this.activeRecord = null;
    };
    return Records;
}(ViewComponent_1.ViewComponent));
exports.Records = Records;


/***/ }),

/***/ "./src/records/RecordsView.ts":
/*!************************************!*\
  !*** ./src/records/RecordsView.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var HeaderNotifications_1 = __webpack_require__(/*! ../header/HeaderNotifications */ "./src/header/HeaderNotifications.ts");
var PromptNotifications_1 = __webpack_require__(/*! ../prompt/PromptNotifications */ "./src/prompt/PromptNotifications.ts");
var RecordNotifications_1 = __webpack_require__(/*! ./RecordNotifications */ "./src/records/RecordNotifications.ts");
var SystemConstants_1 = __webpack_require__(/*! ../core/SystemConstants */ "./src/core/SystemConstants.ts");
var Records_1 = __webpack_require__(/*! ./Records */ "./src/records/Records.ts");
var View_1 = __webpack_require__(/*! ../core/View */ "./src/core/View.ts");
var RecordsView = /** @class */ (function (_super) {
    __extends(RecordsView, _super);
    function RecordsView() {
        var _this = _super.call(this, "RecordsView") || this;
        console.info("Records view initiated.");
        _this.container = document.createElement("div");
        _this.container.id = "records-view-container";
        _this.contentContainer = document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER);
        _this.contentContainer.appendChild(_this.container);
        _this.records = new Records_1.Records(_this, _this.container);
        return _this;
    }
    RecordsView.prototype.enterScene = function (callback) {
    };
    RecordsView.prototype.exitScene = function (exitType, callback) {
        this.exitCallback = callback;
        this.records.exitScene(exitType);
    };
    RecordsView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push(HeaderNotifications_1.HeaderNotifications.ADD_ITEM);
        notifications.push(PromptNotifications_1.PromptNotifications.DELETE_RECORD);
        return notifications;
    };
    RecordsView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            case HeaderNotifications_1.HeaderNotifications.ADD_ITEM:
                this.records.initializeRecordInput();
                break;
            case PromptNotifications_1.PromptNotifications.DELETE_RECORD:
                this.records.deleteActiveRecord();
                break;
            default:
                break;
        }
    };
    RecordsView.prototype.handleSignal = function (signal) {
        console.info("signal received: " + signal.name);
        switch (signal.name) {
            case RecordNotifications_1.RecordNotifications.RECORD_ADDED:
                this.sendNotification(RecordNotifications_1.RecordNotifications.RECORD_ADDED);
                break;
            case RecordNotifications_1.RecordNotifications.DELETE_RECORD:
                this.sendNotification(RecordNotifications_1.RecordNotifications.DELETE_RECORD, signal.data);
                break;
            default:
                break;
        }
    };
    return RecordsView;
}(View_1.View));
exports.RecordsView = RecordsView;


/***/ })

/******/ });
//# sourceMappingURL=output.js.map