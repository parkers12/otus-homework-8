/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _mobileToggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobileToggleMenu */ \"./src/js/mobileToggleMenu.js\");\n/* harmony import */ var _slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider/slider */ \"./src/js/slider/slider.js\");\n\n\n\n\nfunction startFunction() {\n  (0,_mobileToggleMenu__WEBPACK_IMPORTED_MODULE_1__.mobileToggleMenu)();\n  (0,_slider_slider__WEBPACK_IMPORTED_MODULE_2__.sliderJS)();\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", startFunction());\n\n//# sourceURL=webpack://otus-homework-8/./src/js/index.js?");

/***/ }),

/***/ "./src/js/mobileToggleMenu.js":
/*!************************************!*\
  !*** ./src/js/mobileToggleMenu.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mobileToggleMenu\": function() { return /* binding */ mobileToggleMenu; }\n/* harmony export */ });\nfunction mobileToggleMenu() {\n  var mobileMenu = document.getElementById(\"mobileMenu\");\n  var menuToggle = document.getElementById(\"menuToggle\");\n  menuToggle.addEventListener(\"click\", function () {\n    mobileMenu.classList.toggle(\"mobile-menu_show\");\n    menuToggle.classList.toggle(\"header__nav-toggle_show\");\n  });\n}\n\n//# sourceURL=webpack://otus-homework-8/./src/js/mobileToggleMenu.js?");

/***/ }),

/***/ "./src/js/slider/config.js":
/*!*********************************!*\
  !*** ./src/js/slider/config.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// settings\nvar config = {\n  sliderId: \"sliderJS\",\n  slideAnimationTime: 1,\n  // Sec\n  activeSlideClass: \"active\",\n  nextSlideClass: \"next\",\n  prevSlideClass: \"prev\",\n  backBullitClass: \"back\",\n  stopSlider: \"stop\",\n  slideChangeInterval: 5000,\n  isBullit: true,\n  // show / hide bullits\n  sliderBullit: \"sliderBullit\" // arrows: true    // show / hide arrows\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack://otus-homework-8/./src/js/slider/config.js?");

/***/ }),

/***/ "./src/js/slider/extraFunctions.js":
/*!*****************************************!*\
  !*** ./src/js/slider/extraFunctions.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addClassesActive\": function() { return /* binding */ addClassesActive; },\n/* harmony export */   \"classDelete\": function() { return /* binding */ classDelete; },\n/* harmony export */   \"getBullitActive\": function() { return /* binding */ getBullitActive; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\nfunction addClassesActive(numderActiveSlide, nextElem, classesAdd, classes, arr) {\n  var _activeSlide$classLis, _nextSlide$classList;\n\n  var activeSlide = arr[numderActiveSlide];\n  var nextSlide = arr[nextElem];\n\n  (_activeSlide$classLis = activeSlide.classList).add.apply(_activeSlide$classLis, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(classes));\n\n  (_nextSlide$classList = nextSlide.classList).add.apply(_nextSlide$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(classesAdd));\n}\nfunction classDelete(classesAll, classesDel, activeSlide, nextElem, arr) {\n  for (var j = 0; j < arr.length; j += 1) {\n    if (j !== nextElem) {\n      var _arr$j$classList;\n\n      (_arr$j$classList = arr[j].classList).remove.apply(_arr$j$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(classesAll));\n    }\n  }\n\n  if (typeof classesDel === \"string\") {\n    arr[activeSlide === arr.length - 1 ? 0 : nextElem].classList.remove(classesDel);\n  } else {\n    var _arr$classList;\n\n    (_arr$classList = arr[activeSlide === arr.length - 1 ? 0 : nextElem].classList).remove.apply(_arr$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(classesDel));\n  }\n}\nfunction getBullitActive(sliderBullit, nextElem) {\n  var positionLeft = -3;\n\n  for (var i = 0; i < nextElem; i += 1) {\n    positionLeft += 28;\n  }\n\n  var activeBullit = sliderBullit.getElementsByClassName(\"slider__bullit-list-item_active\");\n  activeBullit[0].setAttribute(\"style\", \"left: \".concat(positionLeft, \"px\"));\n}\n\n//# sourceURL=webpack://otus-homework-8/./src/js/slider/extraFunctions.js?");

/***/ }),

/***/ "./src/js/slider/functions.js":
/*!************************************!*\
  !*** ./src/js/slider/functions.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getArraySlides\": function() { return /* binding */ getArraySlides; },\n/* harmony export */   \"addFirstSlideActive\": function() { return /* binding */ addFirstSlideActive; },\n/* harmony export */   \"getNumberActive\": function() { return /* binding */ getNumberActive; },\n/* harmony export */   \"getNextSlide\": function() { return /* binding */ getNextSlide; },\n/* harmony export */   \"getPrevSlide\": function() { return /* binding */ getPrevSlide; },\n/* harmony export */   \"getBullitList\": function() { return /* binding */ getBullitList; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _extraFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extraFunctions */ \"./src/js/slider/extraFunctions.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/js/slider/config.js\");\n\n\n\nvar activeSldCls = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].activeSlideClass;\nvar prevSldCls = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prevSlideClass;\nvar nextSldCls = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nextSlideClass;\nvar backBltCls = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].backBullitClass;\nvar sliderBullitId = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sliderBullit;\nfunction getArraySlides(slider) {\n  var items = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slider.querySelectorAll(\"li\"));\n\n  return items;\n}\nfunction addFirstSlideActive(firstItem) {\n  return firstItem.classList.add(activeSldCls);\n}\nfunction getNumberActive(arr) {\n  var actElem = -1;\n\n  for (var i = 0; i < arr.length; i += 1) {\n    var elem = arr[i].className;\n\n    if (elem !== \"\" && elem.indexOf(activeSldCls) > 0) {\n      actElem = i;\n      break;\n    }\n  }\n\n  return actElem;\n}\nfunction getNextSlide(numderActiveSlide, arr, sliderBullit, targetSlide) {\n  var nextElem;\n\n  if (numderActiveSlide === arr.length - 1 && targetSlide === \"\") {\n    nextElem = 0;\n  } else if (targetSlide === \"\") {\n    nextElem = numderActiveSlide + 1;\n  } else {\n    nextElem = targetSlide;\n  }\n\n  var numAct = getNumberActive(arr);\n  var currentItem = arr[numAct];\n\n  if (!currentItem.classList.contains(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nextSlideClass) && !currentItem.classList.contains(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prevSlideClass)) {\n    var classesAdd = \"\".concat(activeSldCls, \" \").concat(nextSldCls).split(\" \");\n    var classes = \"\".concat(activeSldCls, \" \").concat(prevSldCls).split(\" \");\n    (0,_extraFunctions__WEBPACK_IMPORTED_MODULE_1__.addClassesActive)(numderActiveSlide, nextElem, classesAdd, classes, arr);\n    var classesAll = \"\".concat(activeSldCls, \" \").concat(prevSldCls, \" \").concat(nextSldCls).split(\" \");\n    setTimeout(_extraFunctions__WEBPACK_IMPORTED_MODULE_1__.classDelete, _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].slideAnimationTime * 1000 + 100, classesAll, nextSldCls, arr[numderActiveSlide], nextElem, arr);\n\n    if (sliderBullit !== \"\") {\n      (0,_extraFunctions__WEBPACK_IMPORTED_MODULE_1__.getBullitActive)(sliderBullit, nextElem);\n    }\n\n    return true;\n  }\n\n  return false;\n}\nfunction getPrevSlide(numderActiveSlide, arr, sliderBullit, targetSlide) {\n  var nextElem;\n\n  if (numderActiveSlide === 0 && targetSlide === \"\") {\n    nextElem = arr.length - 1;\n  } else if (targetSlide === \"\") {\n    nextElem = numderActiveSlide - 1;\n  } else {\n    nextElem = targetSlide;\n  }\n\n  var currentItem = arr[getNumberActive(arr)];\n\n  if (!currentItem.classList.contains(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nextSlideClass) && !currentItem.classList.contains(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prevSlideClass)) {\n    var classesAdd = \"\".concat(activeSldCls, \" \").concat(nextSldCls, \" \").concat(backBltCls).split(\" \");\n    var classes = \"\".concat(backBltCls, \" \").concat(prevSldCls).split(\" \");\n    (0,_extraFunctions__WEBPACK_IMPORTED_MODULE_1__.addClassesActive)(numderActiveSlide, nextElem, classesAdd, classes, arr);\n    var classesAll = \"\".concat(activeSldCls, \" \").concat(prevSldCls, \" \").concat(nextSldCls, \" \").concat(backBltCls).split(\" \");\n    var classesDel = \"\".concat(prevSldCls, \" \").concat(nextSldCls, \" \").concat(backBltCls).split(\" \");\n    setTimeout(_extraFunctions__WEBPACK_IMPORTED_MODULE_1__.classDelete, _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].slideAnimationTime * 1000 + 100, classesAll, classesDel, arr[numderActiveSlide], nextElem, arr);\n\n    if (sliderBullit !== \"\") {\n      (0,_extraFunctions__WEBPACK_IMPORTED_MODULE_1__.getBullitActive)(sliderBullit, nextElem);\n    }\n\n    return true;\n  }\n\n  return false;\n}\nfunction getBullitList(num, slider) {\n  var bullitElem = document.createElement(\"div\");\n  var bullitList = slider.parentNode.appendChild(bullitElem);\n  bullitList.setAttribute(\"id\", sliderBullitId);\n  bullitList.setAttribute(\"class\", \"slider__bullit-list\");\n\n  if (num > 1) {\n    for (var i = 0; i < num; i += 1) {\n      var _bullitItem = document.createElement(\"div\");\n\n      bullitList.appendChild(_bullitItem);\n      var item = \"bullit-\".concat(i);\n\n      _bullitItem.setAttribute(\"id\", item);\n\n      _bullitItem.setAttribute(\"class\", \"slider__bullit-list-item\");\n    }\n\n    var bullitItem = document.createElement(\"div\");\n    bullitList.appendChild(bullitItem);\n    bullitItem.setAttribute(\"class\", \"slider__bullit-list-item_active\");\n  }\n}\n\n//# sourceURL=webpack://otus-homework-8/./src/js/slider/functions.js?");

/***/ }),

/***/ "./src/js/slider/launcher.js":
/*!***********************************!*\
  !*** ./src/js/slider/launcher.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"launchSlider\": function() { return /* binding */ launchSlider; }\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/js/slider/functions.js\");\n\nfunction launchSlider(bullit, isBack, itemsSlider) {\n  var actNum = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getNumberActive)(itemsSlider);\n\n  if (actNum >= 0) {\n    if (isBack) {\n      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getPrevSlide)(actNum, itemsSlider, bullit, \"\");\n    } else {\n      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getNextSlide)(actNum, itemsSlider, bullit, \"\");\n    }\n  } else {\n    console.log(\"Error: without active slide\");\n  }\n}\n\n//# sourceURL=webpack://otus-homework-8/./src/js/slider/launcher.js?");

/***/ }),

/***/ "./src/js/slider/slider.js":
/*!*********************************!*\
  !*** ./src/js/slider/slider.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderJS\": function() { return /* binding */ sliderJS; }\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/slider/config.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/js/slider/functions.js\");\n/* harmony import */ var _launcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./launcher */ \"./src/js/slider/launcher.js\");\n\n\n\nfunction sliderJS() {\n  var slider = document.getElementById(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sliderId);\n  var items = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getArraySlides)(slider);\n  console.log(items);\n  var sliderBullit = \"\";\n  var launcher;\n\n  function starterSlider(bullit, isBack, itemsSl) {\n    (0,_launcher__WEBPACK_IMPORTED_MODULE_2__.launchSlider)(bullit, isBack, itemsSl);\n  }\n\n  if (slider !== null && items.length > 0) {\n    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addFirstSlideActive)(items[0]);\n\n    if (items.length > 1) {\n      if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isBullit) {\n        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getBullitList)(items.length, slider);\n        sliderBullit = document.getElementById(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sliderBullit);\n        launcher = setTimeout(starterSlider, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].slideChangeInterval, sliderBullit, false, items);\n      } else {\n        launcher = setTimeout(starterSlider, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].slideChangeInterval, \"\", false, items);\n      }\n    }\n  } else {\n    var body = document.getElementsByTagName(\"body\")[0];\n    var messageIdNotFound = document.createElement(\"div\");\n    body.appendChild(messageIdNotFound).setAttribute(\"class\", \"message\");\n    messageIdNotFound.innerHTML = \"The slider ID was not found on the \" + \"page or the list of images is missing\";\n  }\n\n  var arrows = document.getElementById(\"arrows\");\n\n  arrows.onclick = function (e) {\n    var button = e.target.getAttribute(\"id\");\n\n    if (button === \"arrowsLeft\") {\n      starterSlider(sliderBullit, true, items);\n      clearTimeout(launcher);\n    } else if (button === \"arrowsRight\") {\n      starterSlider(sliderBullit, false, items);\n      clearTimeout(launcher);\n    } else {\n      var buttonElement = document.getElementById(button);\n      var buttonElemSlasses = buttonElement.classList;\n      var isPause = buttonElement.classList.contains(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopSlider);\n\n      if (isPause) {\n        buttonElemSlasses.remove(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopSlider);\n        launcher = setTimeout(starterSlider, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].slideChangeInterval, sliderBullit, false, items);\n      } else {\n        buttonElemSlasses.add(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopSlider);\n        clearTimeout(launcher);\n      }\n    }\n  };\n\n  var bullitList = document.getElementById(\"sliderBullit\");\n\n  bullitList.onclick = function (e) {\n    var targetSlide = e.target.getAttribute(\"id\");\n\n    if (targetSlide !== \"sliderBullit\") {\n      sliderBullit = document.getElementById(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sliderBullit);\n      var idTargetSlide = Number(targetSlide.split(\"-\")[1]);\n      clearTimeout(launcher);\n      var actNum2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getNumberActive)(items);\n\n      if (actNum2 >= 0) {\n        if (actNum2 < idTargetSlide) {\n          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getNextSlide)(actNum2, items, sliderBullit, idTargetSlide);\n        } else {\n          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getPrevSlide)(actNum2, items, sliderBullit, idTargetSlide);\n        }\n      } else {\n        console.log(\"Error: without active slide\");\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack://otus-homework-8/./src/js/slider/slider.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://otus-homework-8/./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _arrayLikeToArray; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://otus-homework-8/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _arrayWithoutHoles; }\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://otus-homework-8/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _iterableToArray; }\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://otus-homework-8/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _nonIterableSpread; }\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://otus-homework-8/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _toConsumableArray; }\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://otus-homework-8/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _unsupportedIterableToArray; }\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://otus-homework-8/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;