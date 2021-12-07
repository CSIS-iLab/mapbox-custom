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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: createColorScale, lineWeights, lineDashArrays, externalLink, remove, convertType, capitalize, load, makeDropdownOptions */
/*! exports used: capitalize, convertType, createColorScale, externalLink, lineDashArrays, lineWeights, load, makeDropdownOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return lineWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lineDashArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return externalLink; });
/* unused harmony export remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return makeDropdownOptions; });
/* harmony import */ var _styleKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleKey.js */ 1);

function createColorScale(count, index) {
  var scaleOne = chroma.cubehelix().hue(0.5).lightness([0.4, 0.6]).scale().colors(count * 2);
  var scaleTwo = chroma.cubehelix().hue(1).gamma(0.5).scale().colors(count * 2).reverse();
  var scale = [];

  for (var i = 0; i < count; i++) {
    var color = i % 2 === 0 ? scaleOne[i * 2] : scaleTwo[i * 2];
    color = chroma(color).saturate().hex();
    scale.push(color);
  }

  return scale;
}
var lineWeights = [[3, 3], [5, 2], [4, 3.5], [7, 3], [4, 4]];
var lineDashArrays = [[null, '6,9'], [null, null], [null, '6,12'], [null, null], ['18,24', '18,24']];
var externalLink = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path d="M7.49,0V1.67H1.68V13.32H13.32V7.52H15v5.72a1.76,1.76,0,0,1-.42,1.19,1.64,1.64,0,0,1-1.13.56H1.74a1.67,1.67,0,0,1-1.16-.41A1.61,1.61,0,0,1,0,13.48v-.27C0,9.4,0,5.6,0,1.8A1.83,1.83,0,0,1,.58.4a1.53,1.53,0,0,1,1-.39h6Z" transform="translate(0 0)"/><path d="M9.17,1.67V0H15V5.84H13.34v-3h0c-.05.05-.11.1-.16.16l-.45.46-1.3,1.29-.84.84-.89.9-.88.87-.89.9c-.28.29-.57.57-.86.86L6.16,10l-.88.87a1.83,1.83,0,0,1-.13.16L4,9.86l0,0L5.36,8.47l.95-1,.75-.75,1-1L8.87,5l1-.94.85-.86.92-.91.56-.58Z" transform="translate(0 0)"/></svg>';
var remove = '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M2.592.044l18.364 18.364-2.548 2.548L.044 2.592z"/><path d="M0 18.364L18.364 0l2.548 2.548L2.548 20.912z"/></g></svg>';
function convertType(value) {
  var v = Number(value);
  return !isNaN(v) ? v : value.toLowerCase() === 'undefined' ? undefined : value.toLowerCase() === 'null' ? null : value.toLowerCase() === 'true' ? true : value.toLowerCase() === 'false' ? false : value;
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function load(url, element) {
  var req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
}
function makeDropdownOptions(options, x) {
  var groups = options.widgets[x].keys.groupBy('group');
  var choices = Object.keys(groups).map(function (g, z) {
    return {
      id: z,
      label: g.trim() && Number.isNaN(parseInt(g, 10)) ? g : '',
      disabled: false,
      choices: groups[g]
    };
  });
  return {
    choices: choices,
    removeItemButton: true,
    maxItemCount: options.widgets[x].maximum,
    callbackOnCreateTemplates: function callbackOnCreateTemplates(template) {
      var _this = this;

      return {
        item: function item(classNames, data) {
          var key = options.widgets[x].keys.find(function (v) {
            return v.value.toLowerCase() === data.value.toLowerCase();
          });
          var keyStyle;

          switch (options.widgets[x].type) {
            case 'form':
              var forms = options.widgets[x].keys.map(function (k) {
                return k.value.toLowerCase();
              });
              var i = forms.indexOf(key.value.toLowerCase());
              var styleOptions = {
                key: key,
                index: i,
                forms: forms,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;
          }

          var markup = '<div style="border-color:' + key.color + '" class="' + classNames.item + '" data-item data-id="' + data.id + '" data-value="' + data.value + '" ' + (data.active ? 'aria-selected="true"' : '') + ' ' + (data.disabled ? 'aria-disabled="true"' : '') + '><span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span> ' + capitalize(data.label) + '<button style="border-left: 1px solid ' + key.color + '; background-image: url(\'data:image/svg+xml;base64,' + window.btoa(remove) + '\')" type="button" class="choices__button" data-button="" aria-label="Remove item">Remove item</button></div>';
          return template(markup);
        },
        choice: function choice(classNames, data) {
          var key = options.widgets[x].keys.find(function (v) {
            return v.value.toLowerCase() === data.value.toLowerCase();
          });
          var keyStyle;

          switch (options.widgets[x].type) {
            case 'form':
              var forms = options.widgets[x].keys.map(function (k) {
                return k.value.toLowerCase();
              });
              var styleOptions = {
                key: key,
                index: i,
                forms: forms,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;
          }

          var markup = ' <div class="' + classNames.item + ' ' + classNames.itemChoice + ' ' + (data.disabled ? classNames.itemDisabled : classNames.itemSelectable) + '" data-select-text="' + _this.config.itemSelectText + '" data-choice ' + (data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + ' data-id="' + data.id + '" data-value="' + data.value + '" ' + (data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '> <span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span> ' + capitalize(data.label) + ' </div> ';
          return template(markup);
        }
      };
    }
  };
}

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/js/styleKey.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styleKey; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ 0);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function styleKey(options) {
  var map = options.map,
      feature = options.feature,
      group = options.group,
      key = options.key,
      index = options.index,
      forms = options.forms,
      iconSize = map.iconsize,
      dividers = iconSize.map(function (size) {
    return size / 12;
  });
  var colors, keyColor;
  var key = group ? group[0] : key;

  var _iterator = _createForOfIteratorHelper(map.widgets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var w = _step.value;
      var formKeyWidget = w.type === 'form' ? w : null;
      var colorKeyWidget = w.type === 'color' ? w : null;

      if (feature) {
        var colorKey = colorKeyWidget ? colorKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
        }) : null;
        var formKey = formKeyWidget ? formKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[formKeyWidget.field].toLowerCase();
        }) : null;
        keyColor = colorKey ? colorKey.color : formKey ? formKey.color : null;
        iconSize = iconSize.map(function (size) {
          return size / 1;
        });
      } else {
        iconSize = iconSize.map(function (size, i) {
          return size / dividers[i];
        });
      }

      key.color = group && group.every(function (g) {
        return g.color;
      }) ? chroma.average(group.map(function (g) {
        return g.color;
      })) : key.color;

      switch (key.form) {
        case 'line':
          keyColor = key.color ? key.color : options.map.oceancolor ? options.map.oceancolor : null;

          if (forms && forms.length) {
            var svg;

            switch (index) {
              case 0:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), keyColor ? keyColor : chroma(defaultColor).darken()];
                break;

              case 1:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), '#ffffff'];
                break;

              case 2:
                colors = ['#000000', keyColor ? keyColor : defaultColor];
                break;

              case 3:
                colors = ['#ffffff', keyColor ? keyColor : chroma(defaultColor).darken()];
                break;

              default:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), keyColor ? keyColor : chroma(defaultColor).darken()];
                break;
            }

            svg = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 48 12\'><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + colors[0] + '\' stroke-width=\'' + _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineWeights */ "f"][index][0] + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + (index === 4 ? '18,12' : _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineDashArrays */ "e"][index][0]) + '\'/><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + colors[1] + '\' stroke-width=\'' + _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineWeights */ "f"][index][1] + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + (index === 4 ? '18,12' : _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineDashArrays */ "e"][index][1]) + '\'/></svg>';
          } else {
            svg = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 48 12\'><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + keyColor + '\' stroke-width=\'' + 3 + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + '3,7' + '\'/></svg>';
          }

          return {
            svg: 'data:image/svg+xml;base64,' + window.btoa(svg),
            class: 'line'
          };

        case 'icon':
          if (key.icon) {
            var slug = key.value.replace(/ /g, '-');
            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* load */ "g"])(key.icon, document.querySelector('.hidden'));
            var svgContent = document.querySelector('.hidden').innerHTML;

            if (colorKeyWidget && keyColor) {
              svgContent = svgContent.replace(/((\bfill="#)(([0-a-fA-F]{2}){3}|([0-9a-fA-F]){3})")/gi, '');
              svgContent = svgContent.replace(/(<circle |<rectangle |<ellipse |<polygon |<path )/g, function (match, p1, p2, p3) {
                return match.replace(match, match + 'fill="' + keyColor + '" ');
              });
            }

            svg = 'data:image/svg+xml;base64,' + window.btoa(svgContent);
          } else {
            svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="' + iconSize[0] / 2 + '" cy="' + iconSize[1] / 2 + '" r="' + (iconSize[0] + iconSize[1]) / 4 + '" fill="' + (keyColor || key.color) + '"/></svg>');
          }

          return {
            svg: svg,
            class: key.icon ? 'icon' : 'color'
          };

        case 'pattern':
          keyColor = key.color;
          var svg;

          switch (true) {
            case key.pattern[0].indexOf('stripe') > -1:
              var colorTwo = key.pattern[1];
              var colorOne = key.pattern[key.pattern.length - 1];
              svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polygon points="5.73 0 4.67 0 0 4.66 0 5.71 5.73 0" fill="' + colorOne + '"/><polygon points="2.28 0 1.22 0 0 1.22 0 2.27 2.28 0" fill="' + colorTwo + '"/><polygon points="8.85 0 7.79 0 0 7.77 0 8.82 8.85 0" fill="' + colorTwo + '"/><polygon points="12 0 11.24 0 0 11.2 0 12 0.26 12 12 0.3 12 0" fill="' + colorOne + '"/><polygon points="12 10.12 12 9.06 9.05 12 10.11 12 12 10.12" fill="' + colorTwo + '"/><polygon points="12 3.52 12 2.46 2.43 12 3.49 12 12 3.52" fill="' + colorTwo + '"/><polygon points="12 6.96 12 5.9 5.88 12 6.94 12 12 6.96" fill="' + colorOne + '"/></svg>');
              break;

            case key.pattern[0].indexOf('dot') > -1:
              svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="13.06" height="15.1" viewBox="0 0 12 12"><title>stripes</title><path d="M5.49,1A1.16,1.16,0,1,1,4.33-.16,1.16,1.16,0,0,1,5.49,1ZM4.33,3.77A1.16,1.16,0,1,0,5.49,4.93,1.15,1.15,0,0,0,4.33,3.77Zm0,3.93A1.16,1.16,0,1,0,5.49,8.86,1.15,1.15,0,0,0,4.33,7.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.15,1.15,0,0,0,4.33,11.63ZM11.5-.16A1.16,1.16,0,1,0,12.66,1,1.16,1.16,0,0,0,11.5-.16Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,3.77Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,7.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,11.63ZM7.92-1.16A1.16,1.16,0,0,0,6.76,0,1.16,1.16,0,0,0,7.92,1.16,1.16,1.16,0,0,0,9.07,0,1.16,1.16,0,0,0,7.92-1.16Zm0,3.93A1.16,1.16,0,1,0,9.07,3.93,1.16,1.16,0,0,0,7.92,2.77Zm0,3.93A1.16,1.16,0,1,0,9.07,7.86,1.16,1.16,0,0,0,7.92,6.7Zm0,3.93a1.16,1.16,0,1,0,1.15,1.16A1.16,1.16,0,0,0,7.92,10.63ZM.75-1.16A1.16,1.16,0,0,0-.41,0,1.16,1.16,0,0,0,.75,1.16,1.16,1.16,0,0,0,1.91,0,1.16,1.16,0,0,0,.75-1.16Zm0,3.93A1.16,1.16,0,1,0,1.91,3.93,1.16,1.16,0,0,0,.75,2.77Zm0,3.93A1.16,1.16,0,0,0-.41,7.86,1.15,1.15,0,0,0,.75,9,1.15,1.15,0,0,0,1.91,7.86,1.16,1.16,0,0,0,.75,6.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,.75,10.63Z" transform="translate(0.7 2)" fill="' + colorOne + '"/></svg>');
              break;

            default:
              svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" fill="' + keyColor + '"/></svg>');
          }

          return {
            svg: svg,
            class: key.pattern ? 'pattern' : 'color'
          };

        case 'shape':
          if (feature) {
            var colorKeyWidget = map.widgets.find(function (w) {
              return w.type === 'color';
            });
            var colorKey = colorKeyWidget.keys.find(function (k) {
              return k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
            });
            keyColor = colorKey ? colorKey.color : keyColor ? keyColor : null;
          }

          var svg;

          switch (index) {
            case 0:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow"  y1="4.5" x2="9" y2="4.5" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.5 -4.5) rotate(135)"><stop offset="0" stop-color="#7f3c8d"/><stop offset="0.325" stop-color="#e73f74"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.675" stop-color="#11a579"/><stop offset="1" stop-color="#3969ac"/></linearGradient></defs><rect x="3.25" y="1.75" width="9" height="9" transform="translate(4.5 -4.5) rotate(45)" ' + (keyColor ? 'paint-order="stroke" stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '" /></svg>';
              break;

            case 1:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.25" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.75" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><rect width="10" height="10" ' + (keyColor ? 'stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '"/></svg>';
              break;

            case 2:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.325" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.675" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><polygon points="6 10.39 0 10.39 3 5.2 6 0 9 5.2 12 10.39 6 10.39" ' + (keyColor ? 'paint-order="stroke" stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '" /></svg>';
              break;

            default:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.25" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.75" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><circle cx="6" cy="6" r="5" ' + (keyColor ? 'stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '"/></svg>';
          }

          return {
            svg: 'data:image/svg+xml;base64,' + window.btoa(svg),
            class: 'shape'
          };

        default:
          keyColor = key.color;
          svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="' + iconSize[0] / 2 + '" cy="' + iconSize[1] / 2 + '" r="' + (iconSize[0] + iconSize[1]) / 4 + '" fill="' + (keyColor || key.color) + '"/></svg>');
          return {
            svg: svg,
            class: 'color'
          };
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./src/js/makeLayers.js + 4 modules ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/styleKey.js because of ./src/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ makeLayers; });

// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/handleFeatureEvents.js

function handleFeatureEvents(feature, layer, map) {
  var eventOptions = map.oneachfeature ? map.oneachfeature : {
    click: function click() {
      handleLayerClick(feature, layer, map.leaflet);
    }
  };
  Object.keys(eventOptions).forEach(function (listener) {
    layer.on(listener, eventOptions[listener]);
  });
  var popupContent = typeof map.formatpopupcontent === 'function' ? map.formatpopupcontent(feature, map) : formatPopupContent(feature, map);
  layer.bindPopup(popupContent);
}

function formatPopupContent(feature, map) {
  var content;
  content = Object.keys(feature.properties).map(function (p) {
    if (feature.properties[p]) {
      if (map.popupheaders.length && map.popupcontent.length) {
        return map.popupheaders.indexOf(p) > -1 && map.popupcontent.indexOf(p) > -1 ? '<div class="popupHeaderStyle">' + p.toUpperCase().replace(/_/g, ' ') + '</div><div class="popupEntryStyle">' + feature.properties[p] + '</div>' : map.popupcontent.indexOf(p) > -1 ? '<div class="popupEntryStyle">' + feature.properties[p] + '</div>' : '';
      } else if (map.popupheaders.length) {
        return map.popupheaders.indexOf(p) > -1 ? '<div class="popupHeaderStyle">' + p.toUpperCase().replace(/_/g, ' ') + '</div><div class="popupEntryStyle">' + feature.properties[p] + '</div>' : '';
      } else if (map.popupcontent.length) {
        return map.popupcontent.indexOf(p) > -1 ? '<div class="popupEntryStyle">' + feature.properties[p] + '</div>' : '';
      } else {
        return '<div class="popupHeaderStyle">' + p.toUpperCase().replace(/_/g, ' ') + '</div><div class="popupEntryStyle">' + feature.properties[p] + '</div>';
      }
    }
  }).filter(function (p) {
    return p;
  }).join('');
  var link = feature.properties.hyperlink || feature.properties.link;
  var externalLinkContent = link && link.trim() ? '<div class="separator"></div><div class="hyperlink popupEntryStyle"><a class="translate" href=' + link.trim() + ' target="_blank">' + map.externallinktext + '</a>' + helpers["d" /* externalLink */] + '</div>' : '';
  content += externalLinkContent;

  if (lang) {
    var translatableStrings = Object.keys(map.translations).sort(function (a, b) {
      return b.length - a.length;
    });
    translatableStrings.forEach(function (t) {
      var re = new RegExp('\\b(' + RegExp.escape(t) + ')', 'gi');
      content = content.replace(re, map.translations[t]);
    });
  }

  return content;
}

function handleLayerClick(feature, layer, leaflet) {
  var isSpiderfied = false;

  if (!layer._preSpiderfyLatlng) {
    Object.keys(leaflet._layers).forEach(function (l, i) {
      if (leaflet._layers[l].unspiderfy) leaflet._layers[l].unspiderfy();
    });

    if (layer.__parent) {
      Object.values(layer.__parent._group._featureGroup._layers).forEach(function (v) {
        if (v._group && v._group._spiderfied) isSpiderfied = true;
      });
      Array.from(document.querySelectorAll('div.leaflet-marker-icon')).forEach(function (d) {
        return d.style.opacity = isSpiderfied ? 0.33 : 1;
      });
      Array.from(document.querySelectorAll('img.leaflet-marker-icon')).forEach(function (d) {
        return d.style.opacity = isSpiderfied ? 0.33 : 1;
      });
    }
  }
}

window.handleLayerClick = handleLayerClick;
// EXTERNAL MODULE: ./src/js/styleKey.js
var styleKey = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/stylePoint.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function stylePoint(feature, latlng, map) {
  var pointStyle, key, styleOptions;
  var CustomIcon = L.Icon.extend({
    options: {
      iconSize: map.iconsize || [20, 20],
      iconAnchor: map.iconsize ? map.iconsize / 4 : map.iconanchor ? map.iconanchor : [5, 5]
    }
  });
  var nonPointStyle, key, divIcon;
  var colorKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'color';
  });
  var formKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'form';
  });

  var _iterator = _createForOfIteratorHelper(map.widgets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var w = _step.value;
      var thisFormKeyWidget = w.type === 'form' ? w : formKeyWidget;
      var thisColorKeyWidget = w.type === 'color' ? w : null;
      var colorKey = thisColorKeyWidget ? thisColorKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[thisColorKeyWidget.field].toLowerCase();
      }) : null;
      var formKey = thisFormKeyWidget ? thisFormKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[thisFormKeyWidget.field].toLowerCase();
      }) : null;
      var color = colorKey ? colorKey.color : formKey ? formKey.color : null;

      if (thisFormKeyWidget && feature.properties[thisFormKeyWidget.field]) {
        var forms = thisFormKeyWidget.keys.map(function (k) {
          return k.value.toLowerCase();
        });
        var i = forms.indexOf(feature.properties[thisFormKeyWidget.field].toLowerCase());
        key = thisFormKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[thisFormKeyWidget.field].toLowerCase();
        });
        if (!key) break;
        var styleOptions = {
          key: formKey,
          index: i,
          forms: forms,
          color: color,
          map: map,
          feature: feature
        };

        if (key.form === 'div') {
          var value = feature.properties[thisFormKeyWidget.field];
          var count = value ? value.split('~').length : 0;
          divIcon = L.divIcon({
            className: 'icon-div',
            html: '<span class="text" style="background-color:' + color + '">' + count + '</span>'
          });
        }

        pointStyle = divIcon ? divIcon : Object(styleKey["a" /* default */])(styleOptions);
      } else if (thisColorKeyWidget && feature.properties[thisColorKeyWidget.field]) {
        key = thisColorKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[thisColorKeyWidget.field].toLowerCase();
        });
        if (!key) break;
        var styleOptions = {
          key: colorKey,
          color: colorKey.color,
          map: map,
          feature: feature
        };
        pointStyle = Object(styleKey["a" /* default */])(styleOptions);
      } else {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" fill="' + color + '"/></svg>';
        pointStyle = {
          class: 'default',
          svg: encodeURI('data:image/svg+xml;base64,' + window.btoa(svg))
        };
      }

      var iconUrl = pointStyle.svg;
      var icon = new CustomIcon({
        iconUrl: iconUrl
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return L.marker(latlng, {
    icon: divIcon ? divIcon : icon
  });
}
// CONCATENATED MODULE: ./src/js/styleNonPoint.js
function styleNonPoint_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = styleNonPoint_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function styleNonPoint_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return styleNonPoint_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return styleNonPoint_arrayLikeToArray(o, minLen); }

function styleNonPoint_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function styleNonPoint(feature, map, index) {
  var nonPointStyle,
      colors = [],
      forms = [],
      sort = ['form', 'color'];
  var colorKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'color';
  });
  var formKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'form';
  });

  var _iterator = styleNonPoint_createForOfIteratorHelper(map.widgets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var w = _step.value;
      var colorKey = colorKeyWidget ? colorKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
      }) : null;
      var formKey = formKeyWidget ? formKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[formKeyWidget.field].toLowerCase();
      }) : null;
      var color = colorKey ? colorKey.color : formKey ? formKey.color : null;
      var formKeyForm = formKeyWidget ? formKeyWidget.keys.reduce(function (a, c) {
        return c.form;
      }) : null;
      var colorKeyForm = colorKeyWidget ? colorKeyWidget.keys.reduce(function (a, c) {
        return c.form;
      }) : null;
      var form = formKeyWidget ? formKeyWidget.keys.reduce(function (a, c) {
        return c.form;
      }) : null;

      if (formKeyWidget && form === 'line') {
        forms = formKeyWidget.keys.map(function (f) {
          return f.value;
        });
        forms.forEach(function (f, i) {
          switch (i) {
            case 0:
              colors.push(['transparent', null]);
              break;

            case 1:
              colors.push([null, defaultColor]);
              break;

            case 2:
              colors.push(['#000000', null]);
              break;

            case 3:
              colors.push(['#ffffff', null]);
              break;

            default:
              colors.push([null, null]);
              break;
          }
        });
      }

      if (forms.length && formKeyForm === 'line' || forms.length && colorKeyForm === 'line') {
        if (formKeyWidget) {
          var i = forms.indexOf(feature.properties[formKeyWidget.field]);

          if (i > -1) {
            nonPointStyle = {
              color: colors[i][index] === undefined ? '#cad2d3' : colors[i][index] !== null ? colors[i][index] : color,
              weight: helpers["f" /* lineWeights */][i][index],
              lineCap: 'square',
              dashArray: helpers["e" /* lineDashArrays */][i] ? helpers["e" /* lineDashArrays */][i][index] : null
            };
          }
        }
      } else if (formKeyForm === 'line' || colorKeyForm === 'line') {
        nonPointStyle = {
          color: color,
          weight: 2,
          lineCap: 'square',
          dashArray: '3,7'
        };
      } else if (colorKey && colorKey.form === 'pattern') {
        var pattern;

        switch (true) {
          case colorKey.pattern[0].indexOf('stripe') > -1:
            var patternOptions = {
              weight: 3,
              spaceWeight: 3,
              color: colorKey.pattern[1],
              spaceColor: colorKey.pattern[colorKey.pattern.length - 1],
              spaceOpacity: 1,
              angle: 45
            };
            pattern = new L.StripePattern(patternOptions);
            break;

          case colorKey.pattern[0].indexOf('dot') > -1:
            var shapeOptions = {
              x: 4,
              y: 4,
              radius: 2,
              fill: true,
              stroke: false,
              fillColor: colorKey.pattern[colorKey.pattern.length - 1],
              fillOpacity: 1
            };
            var shape = new L.PatternCircle(shapeOptions);
            var patternOptions = {
              width: 8,
              height: 8
            };
            pattern = new L.Pattern(patternOptions);
            pattern.addShape(shape);
            break;
        }

        pattern.addTo(map.leaflet);
        nonPointStyle = {
          fillPattern: pattern ? pattern : null,
          fillColor: color,
          color: defaultColor,
          fillOpacity: 0.7,
          opacity: 0.5,
          weight: 2,
          lineCap: 'square'
        };
      } else {
        var lineColor;
        var lineWeight;
        var lineOpacity;

        switch (true) {
          case feature.geometry.type.toLowerCase().indexOf('line') > -1:
            lineColor = color ? chroma(color).brighten().hex() : null;
            lineOpacity = 1;
            lineWeight = 4;
            break;

          case feature.geometry.type.toLowerCase().indexOf('polygon') > -1:
            lineColor = defaultColor;
            lineOpacity = 0.5;
            lineWeight = 2;
            break;
        }

        nonPointStyle = {
          fillPattern: pattern,
          fillColor: color,
          color: lineColor,
          fillOpacity: 0.7,
          opacity: lineOpacity,
          weight: lineWeight
        };
      }

      if (nonPointStyle) return nonPointStyle;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
// CONCATENATED MODULE: ./src/js/makeGeoJsonOptions.js



window.handleFeatureEvents = handleFeatureEvents;
window.stylePoint = stylePoint;
window.styleNonPoint = styleNonPoint;
function makeGeoJsonOptions(map, colorKeyWidgets, formKeyWidgets) {
  function filter(feature) {
    return map.filters.map(function (f) {
      return f(feature);
    }).every(function (f) {
      return f !== false;
    });
  }

  function onEachFeature(feature, layer) {
    handleFeatureEvents(feature, layer, map);
  }

  var backgroundOptions = {
    filter: filter,
    onEachFeature: onEachFeature,
    pointToLayer: map.pointStyle || function (feature, latlng) {
      return stylePoint(feature, latlng, map);
    },
    style: map.nonPointStyle || function (feature) {
      return styleNonPoint(feature, map, 0);
    }
  };
  var foregroundOptions = {
    filter: filter,
    onEachFeature: onEachFeature,
    pointToLayer: map.pointStyle || function (feature, latlng) {
      return stylePoint(feature, latlng, map);
    },
    style: map.nonPointStyle || function (feature) {
      return styleNonPoint(feature, map, 1);
    }
  };
  return [backgroundOptions, foregroundOptions];
}
// CONCATENATED MODULE: ./src/js/makeLayers.js

function makeLayers(map) {
  var colorKeyWidgets = [],
      formKeyWidgets = [];

  if (map.widgets) {
    colorKeyWidgets = map.widgets.filter(function (w) {
      return w.type === 'color';
    });
    formKeyWidgets = map.widgets.filter(function (w) {
      return w.type === 'form';
    });
  }

  var geoJsonOptions = map.geojsonoptions ? map.geojsonoptions(map) : makeGeoJsonOptions(map);
  map.json.forEach(function (json, i) {
    var clusterColor, colorKeyWidget;

    if (colorKeyWidgets.length) {
      var colorKeys = colorKeyWidgets.map(function (widget) {
        var collectionName = json.features[0].properties[widget.field];
        var key = widget.keys.find(function (key) {
          return key.value.toLowerCase() === collectionName.toLowerCase();
        });

        if (key) {
          colorKeyWidget = widget;
        }

        return key;
      }).filter(function (colorKey) {
        return colorKey;
      });
      clusterColor = colorKeys[0] ? colorKeys[0].color : '#000000';
    } else {
      clusterColor = '#000000';
    }

    var allPoints = json.features.every(function (feature) {
      return feature.geometry && feature.geometry.type.toLowerCase() === 'point';
    });
    map.groups.push(new L.MarkerClusterGroup({
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      maxClusterRadius: allPoints && map.clusterdistance ? map.clusterdistance : NaN,
      iconCreateFunction: function iconCreateFunction(cluster) {
        return L.divIcon({
          className: 'icon-group',
          html: '<span class="text" style="border: 2px solid' + clusterColor + '; color:' + clusterColor + '">' + cluster.getChildCount() + '</span>'
        });
      }
    }));
    var hasLineFeatures = json.features.some(function (feature) {
      return feature.geometry && feature.geometry.type.toLowerCase().indexOf('line') > -1;
    });
    geoJsonOptions.forEach(function (option, index) {
      if (colorKeyWidget) {
        json.features = json.features.sort(function (a, b) {
          return b.properties[colorKeyWidget.field].localeCompare(a.properties[colorKeyWidget.field]);
        });
      }

      var geoJson = L.geoJson(json, option);

      if (!hasLineFeatures && index % 2 === 0 || hasLineFeatures || map.geojsonoptions) {
        map.groups[i].addLayer(geoJson);
      }
    });

    if (map.groups[i].getLayers().length) {
      map.leaflet.addLayer(map.groups[i]);
      map.groups[i].on('clusterclick', function (e) {
        handleClusterClick(e, map, i);
      });
    }
  });
}

function handleClusterClick(e, map, i) {
  map.leaflet._layers[e.layer._leaflet_id].spiderfy();

  Object.keys(map.leaflet._layers).forEach(function (layer, i) {
    if (parseInt(layer, 10) !== e.layer._leaflet_id) {
      if (map.leaflet._layers[layer].unspiderfy) map.leaflet._layers[layer].unspiderfy();
    }
  });
  var isSpiderfied = false;
  Object.values(map.groups[i]._featureGroup._layers).forEach(function (v) {
    if (v._group && v._group._spiderfied) isSpiderfied = true;
  });
  Array.from(document.querySelectorAll('div.leaflet-marker-icon')).forEach(function (d) {
    return d.style.opacity = isSpiderfied ? 0.33 : 1;
  });
  Array.from(document.querySelectorAll('img.leaflet-marker-icon')).forEach(function (d) {
    return d.style.opacity = isSpiderfied ? 0.33 : 1;
  });
  Object.values(map.groups[i]._featureGroup._layers).filter(function (v) {
    e.layer.getAllChildMarkers().map(function (m) {
      return m.getElement();
    }).filter(function (m) {
      return m;
    }).forEach(function (m) {
      return m.style.opacity = 1;
    });
  });
}

/***/ }),
/* 3 */
/*!***************************!*\
  !*** ./src/js/parsers.js ***!
  \***************************/
/*! exports provided: parseLanguageData, parseLegendData, parseMetaData, parseWidgetData */
/*! exports used: parseLanguageData, parseLegendData, parseMetaData, parseWidgetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseLanguageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseLegendData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseMetaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parseWidgetData; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ 0);

function parseLanguageData(data) {
  var languageData = {};
  data.forEach(function (row) {
    var key;
    Object.keys(row).forEach(function (column, i) {
      if (column.indexOf('gsx$') > -1) {
        var columnName = column.replace('gsx$', '');

        if (columnName === 'en') {
          key = row[column]['$t'];
          languageData[key] = {};
        }

        if (columnName === lang) {
          languageData[key] = row[column]['$t'];
        }
      }
    });
  });
  return languageData;
}
function parseLegendData(options, json, style) {
  var colorScale = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* createColorScale */ "c"])(json.length);
  var legendItems = [];
  json.forEach(function (row, x) {
    var data = {};
    Object.keys(row).forEach(function (column, y) {
      if (column.indexOf('gsx$') > -1) {
        var columnName = column.replace('gsx$', '');

        if (columnName === 'label') {
          var key = row[column]['$t'].toLowerCase();
          data.key = key;
          data.label = row[Object.keys(row)[y + 0]]['$t'];
          data.value = row[Object.keys(row)[y + 1]]['$t'];
          data.group = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 2]]['$t']);
          data.selected = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 3]]['$t']);
          var colorVal = row[Object.keys(row)[y + 4]]['$t'];
          data.form = row[Object.keys(row)[y + 5]]['$t'];
          data.color = colorVal ? colorVal : data.form === 'line' ? defaultColor : colorScale[x];
          data.icon = row[Object.keys(row)[y + 6]]['$t'];
          data.pattern = row[Object.keys(row)[y + 7]]['$t'].split(',');

          if (options.translations) {
            data.label = options.translations[data.label];
            data.group = options.translations[data.group];
          }

          legendItems.push(data);
        }
      }
    });
  });
  return legendItems;
}
function parseMetaData(json) {
  var data = {};
  json.forEach(function (row, x) {
    Object.keys(row).forEach(function (column, y) {
      if (column.indexOf('gsx$') > -1) {
        var columnName = column.replace('gsx$', '');

        if (columnName === 'property') {
          var key = row[column]['$t'].toLowerCase().replace(/ /g, '');
          data[key] = data[key] || {};
          data[key] = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 1]]['$t']);
        }
      }
    });
  });
  return data;
}
function parseWidgetData(metaData) {
  var widgets = [];

  function process(k, index, property) {
    if (k.toLowerCase().indexOf(property) > -1) widgets[index - 1][property] = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(metaData[k]);
  }

  var properties = ['input', 'field', 'grouping', 'instructions', 'maximum', 'type', 'reference', 'style'];
  Object.keys(metaData).filter(function (k) {
    return k.toLowerCase().indexOf('widget') > -1;
  }).forEach(function (k) {
    var index = k.match(/\d+/)[0];
    widgets[index - 1] = widgets[index - 1] || {};
    properties.forEach(function (property) {
      process(k, index, property);
    });
  });
  widgets.forEach(function (w, i) {
    w.field = w.field.replace(/ /g, '_');
    w.id = i;
  });
  return widgets;
}

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** ./src/js/CustomMap.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMap; });
var mapId = 0;
function CustomMap(container, properties) {
  this.id = mapId++;
  this.filters = [];
  this.groups = [];
  this.json = [];
  this.leaflet;

  var _this = this;

  Object.keys(properties).forEach(function (property) {
    _this[property.toLowerCase().replace(/ /g, '')] = properties[property];
  });

  if (_this.translations) {
    window.translations = _this.translations;
  }

  _this.popupcontent = _this.popupcontent && typeof _this.popupcontent === 'string' ? _this.popupcontent.split(',') : _this.popupcontent && this.popupcontent === 'object' ? _this.popupcontent : [];
  _this.popupheaders = _this.popupheaders && typeof _this.popupheaders === 'string' ? _this.popupheaders.split(',') : _this.popupheaders && _this.popupheaders === 'object' ? _this.popupheaders : [];
  CustomMap.all = CustomMap.all || [];
  CustomMap.all.push(this);

  _this.resetFilters = function () {
    _this.filters = [];
  };

  _this.removeGroups = function () {
    _this.groups.forEach(function (group) {
      _this.leaflet.removeLayer(group);
    });

    _this.groups = [];
  };

  this.render = function () {
    _this.leaflet = L.map(container, {
      minZoom: _this.minzoom || null,
      maxZoom: _this.maxzoom || 20,
      maxBounds: _this.maxbounds || [_this.swbounds, _this.nebounds],
      scrollWheelZoom: window.innerWidth < 768 ? false : true,
      zoomControl: !_this.hasOwnProperty('zoomslider') || _this.zoomslider ? false : true,
      attributionControl: false
    });
    if (_this.loadevent) _this.leaflet.on('load', _this.loadevent);
    if (_this.addevent) _this.leaflet.on('layeradd', _this.addevent);
    this.leaflet.setView(_this.center, _this.zoom || 2);
    L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/' + _this.mapboxstyle + '/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {}).addTo(_this.leaflet);

    if (!_this.hasOwnProperty('zoomslider') || _this.zoomslider) {
      L.control.zoomslider().addTo(_this.leaflet);
    }

    if (_this.fullscreen) {
      window.fullscreen = new L.Control.Fullscreen();

      _this.leaflet.addControl(window.fullscreen);
    }

    L.control.attribution({
      position: 'bottomleft'
    }).setPrefix(_this.attribution).addTo(_this.leaflet);

    _this.resetFilters();

    return _this;
  };
}

/***/ }),
/* 5 */
/*!*************************************!*\
  !*** ./src/js/makeDocumentNodes.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeDocumentNodes; });
function makeDocumentNodes(options) {
  var newSectionHTML = '';
  newSectionHTML += '<section id="' + options.slug + '">';
  newSectionHTML += '<div id="' + options.slug + '__map" class="map"></div>';
  newSectionHTML += '<aside class="toolbox">';
  newSectionHTML += options.title ? '<input type="checkbox" checked class="ui mobile-only"><div class="hamburger mobile-only"><div class="icon"> <span></span> <span></span> <span></span></div><div class="menu translate"></div></div>' : '';
  newSectionHTML += '<div class="box">';
  newSectionHTML += options.title || options.logo || options.description ? '<header  class="translate"> <h1><a target="_blank" id="logo"></a></h1>  <p class="translate"></p></header>' : '';
  newSectionHTML += (options.instructions ? '<p class="translate">' + options.instructions + '</p>' : '') + '<div id="controls"><div class="loader"></div></div><footer><div class="hidden"></div></footer></div></aside>';
  newSectionHTML += options.titlecardcontent ? '<button id="' + options.slug + '__about" class="about-trigger translate">ABOUT THIS MAP</button>' : '';
  newSectionHTML += '</section>';
  document.body.innerHTML += newSectionHTML;
  var translatableStrings;

  if (lang) {
    translatableStrings = Object.keys(options.translations).sort(function (a, b) {
      return b.length - a.length;
    });
  }

  if (options.titlecardcontent) {
    var newDialogHTML = '';
    newDialogHTML += '<div class="dialog" id="' + options.slug + '__dialog">';
    newDialogHTML += '<div class="dialog-overlay" tabindex="-1" data-a11y-dialog-hide></div>';
    newDialogHTML += '<dialog class="dialog-content" aria-labelledby="dialogTitle" aria-describedby="dialogContent">';
    newDialogHTML += '<button data-a11y-dialog-hide class="dialog-close" aria-label="Close this dialog window">&times;</button>';
    newDialogHTML += options.titlecardtitle ? '<h1 id="dialogTitle">' + options.titlecardtitle + '</h1>' : '';
    newDialogHTML += '<div id="dialogContent">' + options.titlecardcontent + '</div>';
    newDialogHTML += '</dialog>';
    newDialogHTML += '</div>';

    if (lang) {
      translatableStrings.forEach(function (t) {
        var re = new RegExp('\\b(' + RegExp.escape(t) + ')', 'gi');
        newDialogHTML = newDialogHTML.replace(re, options.translations[t]);
      });
    }

    document.body.innerHTML += newDialogHTML;
    document.body.style.overflow = 'hidden';
    var dialogEl = document.getElementById(options.slug + '__dialog');
    var mainEl = document.getElementById('options.slug');
    var dialogTrigger = document.getElementById(options.slug + '__about');
    var dialogBox = new A11yDialog(dialogEl, mainEl);
    var dialog = dialogBox.dialog;
    dialogBox.show();
    dialogBox.on('hide', function (dialogEl) {
      dialogTrigger.style.display = 'block';
    });
    dialogBox.on('show', function (dialogEl) {
      dialogTrigger.style.display = 'none';
    });
    dialogTrigger.addEventListener('click', function () {
      dialogBox.show();
    });
  }

  document.title = options.title + ' | CSIS ' + options.program;
  var metaLocaleOG = document.createElement('meta');
  metaLocaleOG.setAttribute('property', 'og:locale');
  metaLocaleOG.setAttribute('content', 'en_US');
  document.head.appendChild(metaLocaleOG);
  var metaTypeOG = document.createElement('meta');
  metaTypeOG.setAttribute('property', 'og:type');
  metaTypeOG.setAttribute('content', 'article');
  document.head.appendChild(metaTypeOG);
  var metaWidthOG = document.createElement('meta');
  metaWidthOG.setAttribute('property', 'og:image:width');
  metaWidthOG.setAttribute('content', '2000');
  document.head.appendChild(metaWidthOG);
  var metaHeightOG = document.createElement('meta');
  metaHeightOG.setAttribute('property', 'og:image:height');
  metaHeightOG.setAttribute('content', '1333');
  document.head.appendChild(metaHeightOG);
  var metaTwitterCardOG = document.createElement('meta');
  metaTwitterCardOG.setAttribute('property', 'twitter:card');
  metaTwitterCardOG.setAttribute('content', 'summary');
  document.head.appendChild(metaTwitterCardOG);
  var metaTitleOG = document.createElement('meta');
  metaTitleOG.setAttribute('property', 'og:title');
  metaTitleOG.setAttribute('content', options.title + ' | CSIS ' + options.program);
  document.head.appendChild(metaTitleOG);
  var metaTitleTwitter = document.createElement('meta');
  metaTitleTwitter.setAttribute('property', 'twitter:title');
  metaTitleTwitter.setAttribute('content', options.title + ' | CSIS ' + options.program);
  document.head.appendChild(metaTitleTwitter);
  var metaDescriptionOG = document.createElement('meta');
  metaDescriptionOG.setAttribute('property', 'og:description');
  metaDescriptionOG.setAttribute('content', options.description);
  document.head.appendChild(metaDescriptionOG);
  var metaDescriptionTwitter = document.createElement('meta');
  metaDescriptionTwitter.setAttribute('property', 'twitter:description');
  metaDescriptionTwitter.setAttribute('content', options.description);
  document.head.appendChild(metaDescriptionTwitter);
  var metaImageOG = document.createElement('meta');
  metaImageOG.setAttribute('property', 'og:image');
  metaImageOG.setAttribute('content', options.screenshot);
  document.head.appendChild(metaImageOG);
  var metaImageTwitter = document.createElement('meta');
  metaImageTwitter.setAttribute('property', 'twitter:image');
  metaImageTwitter.setAttribute('content', options.screenshot);
  document.head.appendChild(metaImageTwitter);

  if (document.querySelector('#' + options.slug + ' header')) {
    document.querySelector('#' + options.slug + ' .menu').innerText = options.title;
    document.querySelector('#' + options.slug + ' header h1').innerHTML += options.title;
    document.querySelector('#' + options.slug + ' header a').style.backgroundImage = options.logo ? 'url(' + options.logo + ')' : '';
    document.querySelector('#' + options.slug + ' header a').href = options.website ? options.website : '';
    document.querySelector('#' + options.slug + ' header p').innerText = options.description ? options.description : '';
  }
}

/***/ }),
/* 6 */
/*!*******************************************!*\
  !*** ./src/js/makeWidgets.js + 1 modules ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/CustomMap.js because of ./src/js/initWithoutSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/makeLayers.js because of ./src/js/initWithoutSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/parsers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/styleKey.js because of ./src/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ makeWidgets; });

// EXTERNAL MODULE: ./src/js/styleKey.js
var styleKey = __webpack_require__(1);

// EXTERNAL MODULE: ./src/js/CustomMap.js
var CustomMap = __webpack_require__(4);

// EXTERNAL MODULE: ./src/js/makeLayers.js + 4 modules
var makeLayers = __webpack_require__(2);

// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/mapWidgetsToState.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function mapWidgetsToState(_x, _x2) {
  return _mapWidgetsToState.apply(this, arguments);
}

function _mapWidgetsToState() {
  _mapWidgetsToState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options, widgetContent) {
    var container, map;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            container = document.querySelector('#' + options.slug + ' .map');
            map = new CustomMap["a" /* default */](container, options).render();
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var tables = Object.keys(options).filter(function (k) {
                return k.toLowerCase().indexOf('table') > -1;
              });
              Promise.all(tables.map(function (table) {
                return fetch('https://csis.carto.com/api/v2/sql?api_key=' + map.apikey + '&format=geojson&q=SELECT%20*%20FROM%20' + options[table]);
              })).then(function (responses) {
                return Promise.all(responses.map(function (response) {
                  return response.json();
                }));
              }).then(function (jsons) {
                var json = jsons.reduce(function (a, b) {
                  return {
                    type: 'FeatureCollection',
                    features: a.features.concat(b.features)
                  };
                });
                var colorKeyWidget = map.widgets.find(function (w) {
                  return w.type === 'color';
                });
                map.json = [json];

                if (colorKeyWidget) {
                  map.json = [];
                  var featureGroups = json.features.groupBy(colorKeyWidget.field, 'properties');
                  Object.keys(featureGroups).sort(function (a, b) {
                    return featureGroups[b][0].properties[colorKeyWidget.field].localeCompare(featureGroups[a][0].properties[colorKeyWidget.field]);
                  }).map(function (feature) {
                    map.json.push({
                      type: 'FeatureCollection',
                      features: featureGroups[feature]
                    });
                  });
                }

                if (!options.widgets.length) {
                  Object(makeLayers["a" /* default */])(map);
                  var box = document.querySelector('#' + options.slug + ' #controls');
                  box.innerHTML = '';
                }

                var initialized = 0;
                options.widgets.forEach(function (w, x) {
                  var element = document.querySelector('#' + options.slug + ' .widget.' + options.widgets[x].field);

                  if (element.querySelector('select') && widgetContent[x].options) {
                    new Choices(element.querySelector('select'), widgetContent[x].options);
                  }

                  if (element.querySelector('input[id^=\'search\']')) {
                    element.querySelector('#resetButton').addEventListener('click', function () {
                      handleReset(element, map, x);
                    });
                  }

                  var selects = Array.from(element.querySelectorAll('select'));
                  var checks = Array.from(element.querySelectorAll('input[type=\'checkbox\']'));
                  var search = Array.from(element.querySelectorAll('input[type=\'text\']:not(.choices__input)'));
                  var toggle = Array.from(element.querySelectorAll('input[type=\'radio\']'));
                  var inputs = selects.concat(checks).concat(search).concat(toggle);

                  if (!inputs.length) {
                    if (!initialized) {
                      Object(makeLayers["a" /* default */])(map);
                    }

                    initialized++;
                  }

                  var count = inputs.length;
                  inputs.forEach(function (input) {
                    if (input.type === 'text') {
                      input.addEventListener('keyup', function () {
                        handleChange(map, element, options.widgets, x, count, ++initialized);
                      });
                    } else {
                      input.addEventListener('change', function () {
                        handleChange(map, element, options.widgets, x, count, ++initialized);
                      });
                    }

                    if ('createEvent' in document) {
                      var evt = document.createEvent('HTMLEvents');
                      evt.initEvent('change', false, true);
                      input.dispatchEvent(evt);
                    } else {
                      input.fireEvent('onchange');
                    }

                    w.map_id = map.id;
                  });
                });

                if (map.translations) {
                  var translatableNodes = Array.from(document.querySelectorAll('.translate'));
                  var translatableStrings = Object.keys(map.translations).sort(function (a, b) {
                    return b.length - a.length;
                  });
                  translatableNodes.forEach(function (el, i) {
                    translatableStrings.forEach(function (t) {
                      if (Object.keys(map.translations[t]).length) {
                        var re = new RegExp('\\b(' + RegExp.escape(t) + ')', 'gi');
                        el.innerHTML = el.innerHTML.replace(re, map.translations[t]);
                      }
                    });
                  });
                }

                resolve(map);
              });
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _mapWidgetsToState.apply(this, arguments);
}

function handleReset(element, map, x) {
  element.querySelector('input[type=\'text\']').value = '';
  if (map.groups.length) map.removeGroups();

  map.filters[x] = function () {
    return true;
  };

  Object(makeLayers["a" /* default */])(map);
}

function handleChange(map, element, widgets, x, count, initialized) {
  var keylessWidgets = ['toggle', 'search'];
  var options = element.querySelector('select') ? Array.from(element.querySelector('select').options) : element.querySelector('input[type=\'text\']') ? Array.from(element.querySelectorAll('input[type=\'text\']')) : Array.from(element.querySelectorAll('input'));
  var selections = element.querySelector('select') ? Array.from(element.querySelector('select').options) : element.querySelector('input[type=\'text\']') ? Array.from(element.querySelectorAll('input[type=\'text\']')) : Array.from(element.querySelectorAll('input:checked'));
  var possibleChecks = Array.from(element.querySelectorAll('input')).map(function (o) {
    return o.name.toLowerCase();
  });
  var possibleOptions, possibleQueries;

  if (keylessWidgets.indexOf(widgets[x].input) < 0) {
    possibleOptions = widgets[x].keys.map(function (key) {
      return key.value.toLowerCase();
    });
    possibleQueries = possibleChecks.concat(possibleOptions);
  }

  var query = Array.from(selections).map(function (o) {
    return element.querySelector('input[type=\'checkbox\']') ? o.name.toLowerCase() : o.value.toLowerCase();
  });
  map.filters[widgets[x].id] = widgets[x].input === 'toggle' ? function (feature) {
    var bool = true;

    if (feature.properties.toggle) {
      bool = Object(helpers["b" /* convertType */])(query[0]) ? true : false;
    } else {
      bool = true;
    }

    return bool;
  } : widgets[x].field === 'all' ? function (feature) {
    var bool = true;
    var withDiacritics = Object.values(feature.properties).join('').toLowerCase();
    var withoutDiacritics = Object.values(feature.properties).join('').toLowerCase().latinise();

    if (withDiacritics.indexOf(query[0]) < 0 && withoutDiacritics.indexOf(query[0]) < 0) {
      bool = false;
    }

    return bool;
  } : function (feature, layers) {
    var bool = true;
    var field = widgets[x].grouping ? widgets[x].grouping : widgets[x].field;

    if (possibleQueries.indexOf(feature.properties[field].toLowerCase()) > -1 && query.indexOf(feature.properties[field].toLowerCase()) < 0) {
      bool = false;
    }

    return bool;
  };
  if (initialized >= count) map.removeGroups();
  if (widgets.length >= x + 1 && initialized >= count) Object(makeLayers["a" /* default */])(map);
}
// EXTERNAL MODULE: ./src/js/parsers.js
var parsers = __webpack_require__(3);

// CONCATENATED MODULE: ./src/js/makeWidgets.js
function makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function makeWidgets_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





window.styleKey = styleKey["a" /* default */];
function makeWidgets(_x, _x2, _x3) {
  return _makeWidgets.apply(this, arguments);
}

function _makeWidgets() {
  _makeWidgets = makeWidgets_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(jsons, options, boxContent) {
    var widgetContent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            widgetContent = [];
            options.widgets.forEach(function (w, x) {
              if (!w.hasOwnProperty('id')) w.id = x;
              var legendData = w.reference ? Object(parsers["b" /* parseLegendData */])(options, jsons[x].feed.entry, w.type) : w.keys;
              options.widgets[x].keys = legendData;
              widgetContent.push(formatWidgets(options, x));
              boxContent += '<section class="widget ' + options.widgets[x].field + '"><h3 class="translate">' + widgetContent[x].title + '</h3>';
              boxContent += widgetContent[x].nodes;
              boxContent += '</section>';
              var box = document.querySelector('#' + options.slug + ' #controls');
              box.innerHTML = boxContent;
              var labelText = document.querySelectorAll('#' + options.slug + ' .itemText');
              Array.from(labelText).forEach(function (itemText) {
                var height = itemText.offsetHeight;
                var fontSize = window.getComputedStyle(itemText)['font-size'];
                var offset = height / parseInt(fontSize.replace('px', ''), 10);
                itemText.style.transform = 'translateY(' + offset * 10 + '%)';
              });
            });
            _context.next = 4;
            return mapWidgetsToState(options, widgetContent);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _makeWidgets.apply(this, arguments);
}

function formatWidgets(options, x) {
  var widgetNodes = '';
  var dropdownOptions;

  switch (options.widgets[x].input) {
    case 'toggle':
      widgetNodes += '<label for="toggle_' + options.widgets[x].field + '" class="translate"><input type="radio" name="' + options.widgets[x].field + '" id="toggle_' + options.widgets[x].field + '"  value="1" checked>Show</label>';
      widgetNodes += '<label for="$toggle_' + options.widgets[x].field + '" class="translate"><input type="radio" name="' + options.widgets[x].field + '" id="toggle_' + options.widgets[x].field + '" value="0" >Hide</label>';
      break;

    case 'search':
      widgetNodes += '<input type="text" id="search_' + options.widgets[x].field + '" placeholder="' + options.widgets[x].instructions + '" size="10" />';
      widgetNodes += '<button type="button" id="resetButton" class="translate">Reset</button>';
      break;

    case 'dropdown':
      widgetNodes += '<select id="dropdown_' + options.widgets[x].field + '" placeholder="' + options.widgets[x].instructions + '" multiple=""></select>';
      dropdownOptions = Object(helpers["h" /* makeDropdownOptions */])(options, x);
      break;

    case 'checkbox':
      widgetNodes += '<ul>';
      var keyStyle;
      var legendItems = options.widgets[x].grouping ? options.widgets[x].keys.groupBy('group') : options.widgets[x].keys.groupBy('label');
      Object.keys(legendItems).forEach(function (group, i) {
        switch (options.widgets[x].type) {
          case 'form':
            var forms = options.widgets[x].keys.map(function (f) {
              return f.value;
            });
            var styleOptions = {
              group: legendItems[group],
              index: i,
              forms: forms,
              map: options
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;

          case 'color':
            var styleOptions = {
              map: options,
              group: legendItems[group]
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;
        }

        widgetNodes += '<li><label for="' + group + '"><input class="widget ' + options.widgets[x].input + '" type="checkbox" name="' + (options.widgets[x].grouping ? group : legendItems[group][0].value) + '" id="' + group + '" ' + (legendItems[group][0].selected ? 'checked' : '') + ' ><span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span><span class="itemText">' + Object(helpers["a" /* capitalize */])(group) + '</span></label></li>';
      });
      widgetNodes += '</ul>';
      break;

    default:
      widgetNodes += '<ul>';
      var keyStyle;
      var legendItems = options.widgets[x].grouping ? options.widgets[x].keys.groupBy('group') : options.widgets[x].keys.groupBy('label');
      Object.keys(legendItems).forEach(function (group, i) {
        switch (options.widgets[x].type) {
          case 'form':
            var forms = options.widgets[x].keys.map(function (f) {
              return f.value;
            });
            var styleOptions = {
              group: legendItems[group],
              index: i,
              forms: forms,
              map: options
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;

          case 'color':
            var styleOptions = {
              map: options,
              group: legendItems[group]
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;
        }

        widgetNodes += '<li><span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span><span class="itemText">' + Object(helpers["a" /* capitalize */])(group) + '</span></li>';
      });
      widgetNodes += '</ul>';
      break;
  }

  var widgetTitle = options.widgets[x].field === 'all' ? 'Search' : options.widgets[x].field.replace(/_/g, ' ');
  return {
    nodes: widgetNodes,
    title: widgetTitle,
    options: dropdownOptions
  };
}

/***/ }),
/* 7 */
/*!***************************************!*\
  !*** ./src/js/initWithSpreadsheet.js ***!
  \***************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/makeMap.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initWithSpreadsheet; });
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers.js */ 3);
/* harmony import */ var _makeWidgets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeWidgets.js */ 6);
/* harmony import */ var _makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeDocumentNodes.js */ 5);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function initWithSpreadsheet(_x, _x2, _x3) {
  return _initWithSpreadsheet.apply(this, arguments);
}

function _initWithSpreadsheet() {
  _initWithSpreadsheet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dataURL, options, translations) {
    var map;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch(dataURL + options.googleSheet + '/' + 2 + '/public/values?alt=json').then(function (response) {
                return response.json();
              }).then(function (json) {
                var metaData = Object(_parsers_js__WEBPACK_IMPORTED_MODULE_0__[/* parseMetaData */ "c"])(json.feed.entry);
                var widgets = Object(_parsers_js__WEBPACK_IMPORTED_MODULE_0__[/* parseWidgetData */ "d"])(metaData);
                var properties = {};
                Object.keys(metaData).forEach(function (data) {
                  properties[data] = metaData[data];
                });
                Object.keys(options).forEach(function (data) {
                  properties[data] = options[data];
                });
                var twoD_properites = [{
                  name: 'center',
                  default: [0, 0]
                }, {
                  name: 'iconsize',
                  default: [20, 20]
                }, {
                  name: 'iconanchor',
                  default: [5, 5]
                }, {
                  name: 'swbounds',
                  default: [-90, -180]
                }, {
                  name: 'nebounds',
                  default: [90, 180]
                }];
                twoD_properites.forEach(function (property) {
                  properties[property.name] = typeof properties[property.name] === 'string' ? properties[property.name].split(',').map(function (v) {
                    return parseInt(v, 10);
                  }) : properties[property.name] ? properties[property.name] : property.default;
                });
                properties.slug = properties.mapID.toLowerCase().replace(/ /g, '-');
                properties.translations = translations;
                properties.widgets = widgets;
                Object(_makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(properties);
                var referenceSheets = widgets.filter(function (w) {
                  return w.reference;
                });

                if (referenceSheets) {
                  var boxContent = '';
                  var referenceSheetURLS = widgets.map(function (w) {
                    if (w.reference) {
                      return dataURL + options.googleSheet + '/' + w.reference + '/public/values?alt=json';
                    }
                  }).filter(function (u) {
                    return u;
                  });
                  Promise.all(referenceSheetURLS.map(function (url) {
                    return fetch(url);
                  })).then(function (responses) {
                    return Promise.all(responses.map(function (response) {
                      return response.json();
                    }));
                  }).then( /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(jsons) {
                      var footerNode, penUltimateNode;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return Object(_makeWidgets_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(jsons, properties, boxContent);

                            case 2:
                              map = _context.sent;

                              if (properties.footer && properties.footer.trim()) {
                                footerNode = document.createElement('footer');
                                footerNode.innerHTML = properties.footer + '  <div class="hidden"></div>';
                                penUltimateNode = document.querySelector('#' + properties.slug + ' #controls') || document.querySelector('#' + properties.slug + 'header');
                                penUltimateNode.parentNode.insertBefore(footerNode, penUltimateNode.nextSibling);
                              }

                              resolve(map);

                            case 5:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x4) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                } else {
                  var map = new CustomMap(container, options).render();
                  makeLayers(map);
                  var box = document.querySelector('#' + options.slug + ' #controls');
                }

                if (properties.footer && properties.footer.trim()) {
                  var footerNode = document.createElement('footer');
                  footerNode.innerHTML = properties.footer + '  <div class="hidden"></div>';
                  var penUltimateNode = document.querySelector('#' + properties.slug + ' #controls') || document.querySelector('#' + properties.slug + 'header');
                  penUltimateNode.parentNode.insertBefore(footerNode, penUltimateNode.nextSibling);
                }
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initWithSpreadsheet.apply(this, arguments);
}

/***/ }),
/* 8 */
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader??ref--5-2!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--5-4!./main.scss */ 9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 10)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--5-2!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js??ref--5-4!./src/scss/main.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 12 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),
/* 13 */
/*!******************************************!*\
  !*** ./src/js/initWithoutSpreadsheet.js ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/makeMap.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initWithoutSpreadsheet; });
/* harmony import */ var _makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeDocumentNodes.js */ 5);
/* harmony import */ var _makeLayers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeLayers.js */ 2);
/* harmony import */ var _makeWidgets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeWidgets.js */ 6);
/* harmony import */ var _CustomMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomMap.js */ 4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





window.makeLayers = _makeLayers_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
function initWithoutSpreadsheet(_x, _x2) {
  return _initWithoutSpreadsheet.apply(this, arguments);
}

function _initWithoutSpreadsheet() {
  _initWithoutSpreadsheet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options, translations) {
    var twoD_properites, container, map;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            twoD_properites = [{
              name: 'center',
              default: [0, 0]
            }, {
              name: 'iconsize',
              default: [20, 20]
            }, {
              name: 'iconanchor',
              default: [5, 5]
            }, {
              name: 'swbounds',
              default: [-90, -180]
            }, {
              name: 'nebounds',
              default: [90, 180]
            }];
            twoD_properites.forEach(function (property) {
              options[property.name] = typeof options[property.name] === 'string' ? options[property.name].split(',').map(function (v) {
                return parseInt(v, 10);
              }) : options[property.name] ? options[property.name] : property.default;
            });
            options.slug = options.mapID.toLowerCase().replace(/ /g, '-');
            options.translations = translations;
            Object(_makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(options);
            container = document.querySelector('#' + options.slug + '__map.map');

            if (!options.formatToolbox) {
              _context2.next = 11;
              break;
            }

            map = new _CustomMap_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](container, options).render();
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch('https://csis.carto.com/api/v2/sql?api_key=' + map.apikey + '&format=geojson&q=SELECT%20*%20FROM%20' + map.table).then(function (resp) {
                return resp.json();
              }).then(function (json) {
                map.json = [json];
                var box = document.querySelector('#' + options.slug + ' #controls');
                map.formattoolbox(box);
                Object(_makeLayers_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(map);
                resolve(map);
              });
            }));

          case 11:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch('https://csis.carto.com/api/v2/sql?api_key=' + (options.apikey || options.apiKey || options['api key']) + '&format=geojson&q=SELECT%20*%20FROM%20' + options.table).then(function (resp) {
                return resp.json();
              }).then( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(json) {
                  var box, boxContent, map, footerNode, penUltimateNode;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          options.json = [json];
                          box = document.querySelector('#' + options.slug + ' #controls');
                          boxContent = '';

                          if (!options.widgets) {
                            _context.next = 9;
                            break;
                          }

                          _context.next = 6;
                          return Object(_makeWidgets_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(options.json, options, boxContent);

                        case 6:
                          map = _context.sent;
                          _context.next = 12;
                          break;

                        case 9:
                          map = new _CustomMap_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](container, options).render();
                          Object(_makeLayers_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(map);
                          box = document.querySelector('#' + options.slug + ' #controls');

                        case 12:
                          if (options.footer && options.footer.trim()) {
                            footerNode = document.createElement('footer');
                            footerNode.innerHTML = options.footer + '  <div class="hidden"></div>';
                            penUltimateNode = document.querySelector('#' + options.slug + ' #controls') || document.querySelector('#' + options.slug + 'header');
                            penUltimateNode.parentNode.insertBefore(footerNode, penUltimateNode.nextSibling);
                          }

                          resolve(map);

                        case 14:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }());
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initWithoutSpreadsheet.apply(this, arguments);
}

/***/ }),
/* 14 */
/*!**********************************!*\
  !*** ./src/index.js + 2 modules ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/js/initWithoutSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/parsers.js because of ./src/js/initWithSpreadsheet.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(12);

// EXTERNAL MODULE: ./src/js/parsers.js
var parsers = __webpack_require__(3);

// CONCATENATED MODULE: ./src/js/makeMap.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var url = window.location != window.parent.location ? document.referrer : document.location.href;
var href = /lang=([^&]+)/.exec(url);
window.lang = href ? href[1] : null;
var leafletLoaded = 0;
var primaryJsFiles = ['https://unpkg.com/leaflet@1.3.1/dist/leaflet.js', 'https://unpkg.com/whatwg-fetch@3.0.0/dist/fetch.umd.js'];
var secondaryJsFiles = ['https://unpkg.com/leaflet.zoomslider@0.7.1/src/L.Control.Zoomslider.js', 'https://unpkg.com/leaflet-fullscreen@1.0.2/dist/Leaflet.fullscreen.min.js', 'https://unpkg.com/chroma-js@2.0.3/chroma.min.js', 'https://csis-ilab.github.io/map-templates/dist/js/vendor/A11y-Dialog.js', 'https://unpkg.com/choices.js@7.0.0/public/assets/scripts/choices.min.js', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js', 'https://csis-ilab.github.io/map-templates/dist/js/vendor/patterns.js', 'https://csis-ilab.github.io/map-templates/dist/js/vendor/latinize.js'];

function handleLoadLeaflet() {
  return new Promise(function (resolve, reject) {
    secondaryJsFiles.forEach(function (file) {
      var head = document.head;
      var jsLink = document.createElement('script');
      jsLink.src = file;
      head.appendChild(jsLink);

      jsLink.onload = function () {
        leafletLoaded++;

        if (leafletLoaded === secondaryJsFiles.length + primaryJsFiles.length) {
          resolve(leafletLoaded);
          return leafletLoaded;
        }
      };
    });
  });
}

function importFiles() {
  return _importFiles.apply(this, arguments);
}

function _importFiles() {
  _importFiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              primaryJsFiles.forEach(function (file) {
                var head = document.head;
                var jsLink = document.createElement('script');
                jsLink.src = file;

                jsLink.onload = function () {
                  leafletLoaded++;

                  if (leafletLoaded === primaryJsFiles.length) {
                    handleLoadLeaflet();
                    resolve(leafletLoaded);
                    return leafletLoaded;
                  }
                };

                head.appendChild(jsLink);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _importFiles.apply(this, arguments);
}

function makeMap_makeMap(_x) {
  return _makeMap.apply(this, arguments);
}

function _makeMap() {
  _makeMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (leafletLoaded) {
              _context3.next = 6;
              break;
            }

            _context3.next = 3;
            return importFiles().then( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(scriptsLoaded) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return init(options);

                      case 2:
                        return _context2.abrupt("return", _context2.sent);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }());

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.next = 8;
            return init(options);

          case 8:
            return _context3.abrupt("return", _context3.sent);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _makeMap.apply(this, arguments);
}

function init(_x2) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(options) {
    var dataURL, translations, initWithSpreadsheet, initWithoutSpreadsheet;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dataURL = 'https://spreadsheets.google.com/feeds/list/';
            window.defaultColor = options.oceancolor || options.oceanColor || options['ocean color'];

            if (!lang) {
              _context5.next = 6;
              break;
            }

            fetch(dataURL + options.googleSheet + '/' + 3 + '/public/values?alt=json').then(function (response) {
              return response.json();
            }).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(json) {
                var initWithSpreadsheet;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        translations = Object(parsers["a" /* parseLanguageData */])(json.feed.entry);
                        initWithSpreadsheet = __webpack_require__(/*! ./initWithSpreadsheet.js */ 7).default;
                        _context4.next = 4;
                        return initWithSpreadsheet(dataURL, options, translations);

                      case 4:
                        return _context4.abrupt("return", _context4.sent);

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context5.next = 17;
            break;

          case 6:
            if (!options.googleSheet) {
              _context5.next = 13;
              break;
            }

            initWithSpreadsheet = __webpack_require__(/*! ./initWithSpreadsheet.js */ 7).default;
            _context5.next = 10;
            return initWithSpreadsheet(dataURL, options);

          case 10:
            return _context5.abrupt("return", _context5.sent);

          case 13:
            initWithoutSpreadsheet = __webpack_require__(/*! ./initWithoutSpreadsheet.js */ 13).default;
            _context5.next = 16;
            return initWithoutSpreadsheet(options);

          case 16:
            return _context5.abrupt("return", _context5.sent);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _init.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/africa-ports.js
function africa_ports_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function africa_ports_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { africa_ports_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { africa_ports_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function africaPorts() {
  return _africaPorts.apply(this, arguments);
}

function _africaPorts() {
  _africaPorts = africa_ports_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var map;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return makeMap({
              mapID: 'africa',
              center: [-5, 40],
              fullscreen: true,
              zoom: 4,
              maxZoom: 6,
              minZoom: 3,
              clusterDistance: 15,
              Attribution: 'Data by <a href="https://www.csis.org/programs/africa-program" target="_blank">CSIS Africa Program</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
              table: 'africa_ports',
              apiKey: 'ED7zNVPForUJEfIMdXnZyQ',
              program: 'Africa Program',
              website: 'https://www.csis.org/programs/africa-program',
              title: 'Chinese Port Investments in Africa',
              description: 'The CSIS Africa Program identified sub-Saharan African ports with financial, construction, and or operational involvement by Chinese entities.  While the expansion of ports is key to economic development, these investments also provide China with access to achieve varying strategic objectives. Mapping the spread and scope of Chinese port projects provides clarity on which investments are the most susceptible to Chinese influence, as well as their geostrategic and commercial importance.',
              mapboxStyle: "cjvii04q60c881cpj9iph9ibw",
              'ocean color': '#b7c7d1',
              formatPopupContent: function formatPopupContent(feature, map) {
                var description = feature.properties.description ? feature.properties.description + (feature.properties.link ? ' <a target="_blank" rel="noreferrer noopener" href="' + feature.properties.link + '"</a>' + feature.properties.link_title + externalLink + '</a>' : '') : '';
                return '<div class="popupTitleStyle">' + feature.properties.port + '</div><div class="popupEntryStyle">' + feature.properties.port_city + ', ' + feature.properties.port_country + '</div><div class="popupHeaderStyle">Investment Type</div><ul class="popupEntryStyle">' + feature.properties.investment_type.split(',').map(function (r) {
                  return '<li>' + capitalize(r) + '</li>';
                }).join('') + '</ul>' + '<p>' + description + '</p>';
              },
              zoomSlider: false,
              widgets: [{
                id: '1',
                field: "maritime_routes",
                input: "checkbox",
                type: "color",
                keys: [{
                  color: '#000',
                  value: "major",
                  label: 'Major',
                  selected: true,
                  form: 'line'
                }, {
                  color: '#ddd',
                  value: "other",
                  label: 'Other',
                  selected: true,
                  form: 'line'
                }, {
                  color: '#39a4ac',
                  value: 'Maritime Silk Road',
                  label: 'Maritime Silk Road',
                  selected: true,
                  form: 'line'
                }]
              }, {
                id: '0',
                field: "investment_type",
                input: "checkbox",
                type: "form",
                keys: [{
                  value: 'builder',
                  label: 'Builder',
                  selected: true,
                  form: 'icon',
                  icon: 'icons/building.svg'
                }, {
                  value: 'operator',
                  label: 'Operator',
                  selected: true,
                  form: 'icon',
                  icon: 'icons/operating.svg'
                }, {
                  value: 'funder',
                  label: 'Funder',
                  selected: true,
                  form: 'icon',
                  icon: 'icons/funding.svg'
                }, {
                  value: 'builder,operator',
                  label: 'Builder and Operator',
                  selected: true,
                  form: 'icon',
                  icon: 'icons/BuildingOperating.svg'
                }, {
                  value: 'operator,funder',
                  label: 'Operator and Funder',
                  selected: true,
                  form: 'icon',
                  icon: 'icons/FundingOperating.svg'
                }, {
                  value: 'funder,builder',
                  label: 'Funder and Builder',
                  selected: true,
                  form: 'icon',
                  icon: 'icons/FundingBuilding.svg'
                }, {
                  value: 'funder,builder,operator',
                  label: 'Funder, Builder and Operator',
                  selected: true,
                  form: 'icon',
                  icon: 'icons/FundingBuildingOperating.svg'
                }]
              }]
            });

          case 2:
            map = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _africaPorts.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/index.js





window.makeMap = makeMap_makeMap;
window.externalLink = helpers["d" /* externalLink */];
window.capitalize = helpers["a" /* capitalize */];

africaPorts(); // setTimeout(async () => {
//   if (map.mapID === 'africa') {
//     var newMap = await makeMap(map)
//     var chokepoint = L.divIcon({
//       className: 'chokepoint-label',
//       html: '<span>choke point</span>',
//       iconAnchor: [-75, 7.5],
//       iconSize: [20, 20]
//     })
//     new L.marker([12.586732432464062, 43.341064453125], {
//       icon: chokepoint
//     }).addTo(newMap.leaflet)
//     document
//       .querySelector('.toolbox input.ui[type=\'checkbox\']')
//       .removeAttribute('checked')
//     console.log('africa')
//   } else {
//     makeMap(map)
//     console.log(map.mapID)
//   }
// }, 2000 * i)

window.convertType = function (value) {
  var v = Number(value);
  return !isNaN(v) ? v : value.toLowerCase() === 'undefined' ? undefined : value.toLowerCase() === 'null' ? null : value.toLowerCase() === 'true' ? true : value.toLowerCase() === 'false' ? false : value;
};

if (typeof window.CustomEvent !== 'function') {
  var CustomEvent = function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}

Array.prototype.groupBy = function (property1, property2) {
  return property2 ? this.reduce(function (groups, item) {
    var val = item[property2][property1];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {}) : this.reduce(function (groups, item) {
    var val = item[property1];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};

RegExp.escape = function (s) {
  return s.replace(/[\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oYW5kbGVGZWF0dXJlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdHlsZVBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdHlsZU5vblBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlR2VvSnNvbk9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VMYXllcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0N1c3RvbU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZURvY3VtZW50Tm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcFdpZGdldHNUb1N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlV2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/N2VlNSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhvdXRTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWZyaWNhLXBvcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVDb2xvclNjYWxlIiwiY291bnQiLCJpbmRleCIsInNjYWxlT25lIiwiY2hyb21hIiwiY3ViZWhlbGl4IiwiaHVlIiwibGlnaHRuZXNzIiwic2NhbGUiLCJjb2xvcnMiLCJzY2FsZVR3byIsImdhbW1hIiwicmV2ZXJzZSIsImkiLCJjb2xvciIsInNhdHVyYXRlIiwiaGV4IiwicHVzaCIsImxpbmVXZWlnaHRzIiwibGluZURhc2hBcnJheXMiLCJleHRlcm5hbExpbmsiLCJyZW1vdmUiLCJjb252ZXJ0VHlwZSIsInZhbHVlIiwidiIsIk51bWJlciIsImlzTmFOIiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJjYXBpdGFsaXplIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImxvYWQiLCJ1cmwiLCJlbGVtZW50IiwicmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2VuZCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsIm1ha2VEcm9wZG93bk9wdGlvbnMiLCJvcHRpb25zIiwieCIsImdyb3VwcyIsIndpZGdldHMiLCJrZXlzIiwiZ3JvdXBCeSIsImNob2ljZXMiLCJPYmplY3QiLCJtYXAiLCJnIiwieiIsImlkIiwibGFiZWwiLCJ0cmltIiwicGFyc2VJbnQiLCJkaXNhYmxlZCIsInJlbW92ZUl0ZW1CdXR0b24iLCJtYXhJdGVtQ291bnQiLCJtYXhpbXVtIiwiY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcyIsInRlbXBsYXRlIiwiX3RoaXMiLCJpdGVtIiwiY2xhc3NOYW1lcyIsImRhdGEiLCJrZXkiLCJmaW5kIiwia2V5U3R5bGUiLCJ0eXBlIiwiZm9ybXMiLCJrIiwiaW5kZXhPZiIsInN0eWxlT3B0aW9ucyIsInN0eWxlS2V5IiwibWFya3VwIiwiYWN0aXZlIiwiY2xhc3MiLCJzdmciLCJ3aW5kb3ciLCJidG9hIiwiY2hvaWNlIiwiaXRlbUNob2ljZSIsIml0ZW1EaXNhYmxlZCIsIml0ZW1TZWxlY3RhYmxlIiwiY29uZmlnIiwiaXRlbVNlbGVjdFRleHQiLCJncm91cElkIiwiZmVhdHVyZSIsImdyb3VwIiwiaWNvblNpemUiLCJpY29uc2l6ZSIsImRpdmlkZXJzIiwic2l6ZSIsImtleUNvbG9yIiwidyIsImZvcm1LZXlXaWRnZXQiLCJjb2xvcktleVdpZGdldCIsImNvbG9yS2V5IiwicHJvcGVydGllcyIsImZpZWxkIiwiZm9ybUtleSIsImV2ZXJ5IiwiYXZlcmFnZSIsImZvcm0iLCJvY2VhbmNvbG9yIiwibGVuZ3RoIiwiZGVmYXVsdENvbG9yIiwiZGFya2VuIiwiaWNvbiIsInNsdWciLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3ZnQ29udGVudCIsIm1hdGNoIiwicDEiLCJwMiIsInAzIiwicGF0dGVybiIsImNvbG9yVHdvIiwiY29sb3JPbmUiLCJoYW5kbGVGZWF0dXJlRXZlbnRzIiwibGF5ZXIiLCJldmVudE9wdGlvbnMiLCJvbmVhY2hmZWF0dXJlIiwiY2xpY2siLCJoYW5kbGVMYXllckNsaWNrIiwibGVhZmxldCIsImZvckVhY2giLCJsaXN0ZW5lciIsIm9uIiwicG9wdXBDb250ZW50IiwiZm9ybWF0cG9wdXBjb250ZW50IiwiZm9ybWF0UG9wdXBDb250ZW50IiwiYmluZFBvcHVwIiwiY29udGVudCIsInAiLCJwb3B1cGhlYWRlcnMiLCJwb3B1cGNvbnRlbnQiLCJmaWx0ZXIiLCJqb2luIiwibGluayIsImh5cGVybGluayIsImV4dGVybmFsTGlua0NvbnRlbnQiLCJleHRlcm5hbGxpbmt0ZXh0IiwibGFuZyIsInRyYW5zbGF0YWJsZVN0cmluZ3MiLCJ0cmFuc2xhdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJ0IiwicmUiLCJSZWdFeHAiLCJlc2NhcGUiLCJpc1NwaWRlcmZpZWQiLCJfcHJlU3BpZGVyZnlMYXRsbmciLCJfbGF5ZXJzIiwibCIsInVuc3BpZGVyZnkiLCJfX3BhcmVudCIsInZhbHVlcyIsIl9ncm91cCIsIl9mZWF0dXJlR3JvdXAiLCJfc3BpZGVyZmllZCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkIiwic3R5bGUiLCJvcGFjaXR5Iiwic3R5bGVQb2ludCIsImxhdGxuZyIsInBvaW50U3R5bGUiLCJDdXN0b21JY29uIiwiTCIsIkljb24iLCJleHRlbmQiLCJpY29uQW5jaG9yIiwiaWNvbmFuY2hvciIsIm5vblBvaW50U3R5bGUiLCJkaXZJY29uIiwidGhpc0Zvcm1LZXlXaWRnZXQiLCJ0aGlzQ29sb3JLZXlXaWRnZXQiLCJzcGxpdCIsImNsYXNzTmFtZSIsImh0bWwiLCJlbmNvZGVVUkkiLCJpY29uVXJsIiwibWFya2VyIiwic3R5bGVOb25Qb2ludCIsImZvcm1LZXlGb3JtIiwicmVkdWNlIiwiYyIsImNvbG9yS2V5Rm9ybSIsImYiLCJ3ZWlnaHQiLCJsaW5lQ2FwIiwiZGFzaEFycmF5IiwicGF0dGVybk9wdGlvbnMiLCJzcGFjZVdlaWdodCIsInNwYWNlQ29sb3IiLCJzcGFjZU9wYWNpdHkiLCJhbmdsZSIsIlN0cmlwZVBhdHRlcm4iLCJzaGFwZU9wdGlvbnMiLCJ5IiwicmFkaXVzIiwiZmlsbCIsInN0cm9rZSIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5Iiwic2hhcGUiLCJQYXR0ZXJuQ2lyY2xlIiwid2lkdGgiLCJoZWlnaHQiLCJQYXR0ZXJuIiwiYWRkU2hhcGUiLCJhZGRUbyIsImZpbGxQYXR0ZXJuIiwibGluZUNvbG9yIiwibGluZVdlaWdodCIsImxpbmVPcGFjaXR5IiwiZ2VvbWV0cnkiLCJicmlnaHRlbiIsIm1ha2VHZW9Kc29uT3B0aW9ucyIsImNvbG9yS2V5V2lkZ2V0cyIsImZvcm1LZXlXaWRnZXRzIiwiZmlsdGVycyIsIm9uRWFjaEZlYXR1cmUiLCJiYWNrZ3JvdW5kT3B0aW9ucyIsInBvaW50VG9MYXllciIsImZvcmVncm91bmRPcHRpb25zIiwibWFrZUxheWVycyIsImdlb0pzb25PcHRpb25zIiwiZ2VvanNvbm9wdGlvbnMiLCJqc29uIiwiY2x1c3RlckNvbG9yIiwiY29sb3JLZXlzIiwid2lkZ2V0IiwiY29sbGVjdGlvbk5hbWUiLCJmZWF0dXJlcyIsImFsbFBvaW50cyIsIk1hcmtlckNsdXN0ZXJHcm91cCIsInNob3dDb3ZlcmFnZU9uSG92ZXIiLCJ6b29tVG9Cb3VuZHNPbkNsaWNrIiwibWF4Q2x1c3RlclJhZGl1cyIsImNsdXN0ZXJkaXN0YW5jZSIsIk5hTiIsImljb25DcmVhdGVGdW5jdGlvbiIsImNsdXN0ZXIiLCJnZXRDaGlsZENvdW50IiwiaGFzTGluZUZlYXR1cmVzIiwic29tZSIsIm9wdGlvbiIsImxvY2FsZUNvbXBhcmUiLCJnZW9Kc29uIiwiYWRkTGF5ZXIiLCJnZXRMYXllcnMiLCJlIiwiaGFuZGxlQ2x1c3RlckNsaWNrIiwiX2xlYWZsZXRfaWQiLCJzcGlkZXJmeSIsImdldEFsbENoaWxkTWFya2VycyIsIm0iLCJnZXRFbGVtZW50IiwicGFyc2VMYW5ndWFnZURhdGEiLCJsYW5ndWFnZURhdGEiLCJyb3ciLCJjb2x1bW4iLCJjb2x1bW5OYW1lIiwicGFyc2VMZWdlbmREYXRhIiwiY29sb3JTY2FsZSIsImxlZ2VuZEl0ZW1zIiwic2VsZWN0ZWQiLCJjb2xvclZhbCIsInBhcnNlTWV0YURhdGEiLCJwYXJzZVdpZGdldERhdGEiLCJtZXRhRGF0YSIsInByb2Nlc3MiLCJwcm9wZXJ0eSIsIm1hcElkIiwiQ3VzdG9tTWFwIiwiY29udGFpbmVyIiwiYWxsIiwicmVzZXRGaWx0ZXJzIiwicmVtb3ZlR3JvdXBzIiwicmVtb3ZlTGF5ZXIiLCJyZW5kZXIiLCJtaW5ab29tIiwibWluem9vbSIsIm1heFpvb20iLCJtYXh6b29tIiwibWF4Qm91bmRzIiwibWF4Ym91bmRzIiwic3dib3VuZHMiLCJuZWJvdW5kcyIsInNjcm9sbFdoZWVsWm9vbSIsImlubmVyV2lkdGgiLCJ6b29tQ29udHJvbCIsImhhc093blByb3BlcnR5Iiwiem9vbXNsaWRlciIsImF0dHJpYnV0aW9uQ29udHJvbCIsImxvYWRldmVudCIsImFkZGV2ZW50Iiwic2V0VmlldyIsImNlbnRlciIsInpvb20iLCJ0aWxlTGF5ZXIiLCJtYXBib3hzdHlsZSIsImNvbnRyb2wiLCJmdWxsc2NyZWVuIiwiQ29udHJvbCIsIkZ1bGxzY3JlZW4iLCJhZGRDb250cm9sIiwiYXR0cmlidXRpb24iLCJwb3NpdGlvbiIsInNldFByZWZpeCIsIm1ha2VEb2N1bWVudE5vZGVzIiwibmV3U2VjdGlvbkhUTUwiLCJ0aXRsZSIsImxvZ28iLCJkZXNjcmlwdGlvbiIsImluc3RydWN0aW9ucyIsInRpdGxlY2FyZGNvbnRlbnQiLCJib2R5IiwibmV3RGlhbG9nSFRNTCIsInRpdGxlY2FyZHRpdGxlIiwib3ZlcmZsb3ciLCJkaWFsb2dFbCIsImdldEVsZW1lbnRCeUlkIiwibWFpbkVsIiwiZGlhbG9nVHJpZ2dlciIsImRpYWxvZ0JveCIsIkExMXlEaWFsb2ciLCJkaWFsb2ciLCJzaG93IiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9ncmFtIiwibWV0YUxvY2FsZU9HIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm1ldGFUeXBlT0ciLCJtZXRhV2lkdGhPRyIsIm1ldGFIZWlnaHRPRyIsIm1ldGFUd2l0dGVyQ2FyZE9HIiwibWV0YVRpdGxlT0ciLCJtZXRhVGl0bGVUd2l0dGVyIiwibWV0YURlc2NyaXB0aW9uT0ciLCJtZXRhRGVzY3JpcHRpb25Ud2l0dGVyIiwibWV0YUltYWdlT0ciLCJzY3JlZW5zaG90IiwibWV0YUltYWdlVHdpdHRlciIsImlubmVyVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImhyZWYiLCJ3ZWJzaXRlIiwibWFwV2lkZ2V0c1RvU3RhdGUiLCJ3aWRnZXRDb250ZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0YWJsZXMiLCJ0YWJsZSIsImZldGNoIiwiYXBpa2V5IiwidGhlbiIsInJlc3BvbnNlcyIsInJlc3BvbnNlIiwianNvbnMiLCJjb25jYXQiLCJmZWF0dXJlR3JvdXBzIiwiYm94IiwiaW5pdGlhbGl6ZWQiLCJDaG9pY2VzIiwiaGFuZGxlUmVzZXQiLCJzZWxlY3RzIiwiY2hlY2tzIiwic2VhcmNoIiwidG9nZ2xlIiwiaW5wdXRzIiwiaW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJmaXJlRXZlbnQiLCJtYXBfaWQiLCJ0cmFuc2xhdGFibGVOb2RlcyIsImVsIiwia2V5bGVzc1dpZGdldHMiLCJzZWxlY3Rpb25zIiwicG9zc2libGVDaGVja3MiLCJvIiwibmFtZSIsInBvc3NpYmxlT3B0aW9ucyIsInBvc3NpYmxlUXVlcmllcyIsInF1ZXJ5IiwiYm9vbCIsIndpdGhEaWFjcml0aWNzIiwid2l0aG91dERpYWNyaXRpY3MiLCJsYXRpbmlzZSIsImxheWVycyIsImdyb3VwaW5nIiwibWFrZVdpZGdldHMiLCJib3hDb250ZW50IiwibGVnZW5kRGF0YSIsInJlZmVyZW5jZSIsImZlZWQiLCJlbnRyeSIsImZvcm1hdFdpZGdldHMiLCJub2RlcyIsImxhYmVsVGV4dCIsIml0ZW1UZXh0Iiwib2Zmc2V0SGVpZ2h0IiwiZm9udFNpemUiLCJnZXRDb21wdXRlZFN0eWxlIiwib2Zmc2V0IiwidHJhbnNmb3JtIiwid2lkZ2V0Tm9kZXMiLCJkcm9wZG93bk9wdGlvbnMiLCJ3aWRnZXRUaXRsZSIsImluaXRXaXRoU3ByZWFkc2hlZXQiLCJkYXRhVVJMIiwiZ29vZ2xlU2hlZXQiLCJ0d29EX3Byb3Blcml0ZXMiLCJkZWZhdWx0IiwibWFwSUQiLCJyZWZlcmVuY2VTaGVldHMiLCJyZWZlcmVuY2VTaGVldFVSTFMiLCJ1IiwiZm9vdGVyIiwiZm9vdGVyTm9kZSIsInBlblVsdGltYXRlTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImluaXRXaXRob3V0U3ByZWFkc2hlZXQiLCJmb3JtYXRUb29sYm94IiwicmVzcCIsImZvcm1hdHRvb2xib3giLCJhcGlLZXkiLCJsb2NhdGlvbiIsInBhcmVudCIsInJlZmVycmVyIiwiZXhlYyIsImxlYWZsZXRMb2FkZWQiLCJwcmltYXJ5SnNGaWxlcyIsInNlY29uZGFyeUpzRmlsZXMiLCJoYW5kbGVMb2FkTGVhZmxldCIsImZpbGUiLCJqc0xpbmsiLCJzcmMiLCJvbmxvYWQiLCJpbXBvcnRGaWxlcyIsIm1ha2VNYXAiLCJzY3JpcHRzTG9hZGVkIiwiaW5pdCIsIm9jZWFuQ29sb3IiLCJyZXF1aXJlIiwiYWZyaWNhUG9ydHMiLCJjbHVzdGVyRGlzdGFuY2UiLCJBdHRyaWJ1dGlvbiIsIm1hcGJveFN0eWxlIiwibGlua190aXRsZSIsInBvcnQiLCJwb3J0X2NpdHkiLCJwb3J0X2NvdW50cnkiLCJpbnZlc3RtZW50X3R5cGUiLCJyIiwiem9vbVNsaWRlciIsIkN1c3RvbUV2ZW50IiwiZXZlbnQiLCJwYXJhbXMiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImluaXRDdXN0b21FdmVudCIsInByb3RvdHlwZSIsIkV2ZW50IiwicHJvcGVydHkxIiwicHJvcGVydHkyIiwidmFsIiwicyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FB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O0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RDs7QUFFRHRULEtBQUssQ0FBQzZULFNBQU4sQ0FBZ0JyYixPQUFoQixHQUEwQixVQUFTdWIsU0FBVCxFQUFvQkMsU0FBcEIsRUFBK0I7QUFDdkQsU0FBT0EsU0FBUyxHQUNaLEtBQUtyUyxNQUFMLENBQVksVUFBU3RKLE1BQVQsRUFBaUJvQixJQUFqQixFQUF1QjtBQUNuQyxRQUFJd2EsR0FBRyxHQUFHeGEsSUFBSSxDQUFDdWEsU0FBRCxDQUFKLENBQWdCRCxTQUFoQixDQUFWO0FBQ0ExYixVQUFNLENBQUM0YixHQUFELENBQU4sR0FBYzViLE1BQU0sQ0FBQzRiLEdBQUQsQ0FBTixJQUFlLEVBQTdCO0FBQ0E1YixVQUFNLENBQUM0YixHQUFELENBQU4sQ0FBWXpkLElBQVosQ0FBaUJpRCxJQUFqQjtBQUNBLFdBQU9wQixNQUFQO0FBQ0QsR0FMQyxFQUtDLEVBTEQsQ0FEWSxHQU9aLEtBQUtzSixNQUFMLENBQVksVUFBU3RKLE1BQVQsRUFBaUJvQixJQUFqQixFQUF1QjtBQUNuQyxRQUFJd2EsR0FBRyxHQUFHeGEsSUFBSSxDQUFDc2EsU0FBRCxDQUFkO0FBQ0ExYixVQUFNLENBQUM0YixHQUFELENBQU4sR0FBYzViLE1BQU0sQ0FBQzRiLEdBQUQsQ0FBTixJQUFlLEVBQTdCO0FBQ0E1YixVQUFNLENBQUM0YixHQUFELENBQU4sQ0FBWXpkLElBQVosQ0FBaUJpRCxJQUFqQjtBQUNBLFdBQU9wQixNQUFQO0FBQ0QsR0FMQyxFQUtDLEVBTEQsQ0FQSjtBQWFELENBZEQ7O0FBZ0JBK0csTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFVBQVM2VSxDQUFULEVBQVk7QUFDMUIsU0FBT0EsQ0FBQyxDQUFDelgsT0FBRixDQUFVLHVCQUFWLEVBQW1DLE1BQW5DLENBQVA7QUFDRCxDQUZELEMiLCJmaWxlIjoibWFrZU1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG4iLCJpbXBvcnQgc3R5bGVLZXkgZnJvbSAnLi9zdHlsZUtleS5qcydcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclNjYWxlKGNvdW50LCBpbmRleCkge1xuICB2YXIgc2NhbGVPbmUgPSBjaHJvbWFcbiAgICAuY3ViZWhlbGl4KClcbiAgICAuaHVlKDAuNSlcbiAgICAubGlnaHRuZXNzKFswLjQsIDAuNl0pXG4gICAgLnNjYWxlKClcbiAgICAuY29sb3JzKGNvdW50ICogMilcbiAgdmFyIHNjYWxlVHdvID0gY2hyb21hXG4gICAgLmN1YmVoZWxpeCgpXG4gICAgLmh1ZSgxKVxuICAgIC5nYW1tYSgwLjUpXG4gICAgLnNjYWxlKClcbiAgICAuY29sb3JzKGNvdW50ICogMilcbiAgICAucmV2ZXJzZSgpXG4gIHZhciBzY2FsZSA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgdmFyIGNvbG9yID0gaSAlIDIgPT09IDAgPyBzY2FsZU9uZVtpICogMl0gOiBzY2FsZVR3b1tpICogMl1cbiAgICBjb2xvciA9IGNocm9tYShjb2xvcilcbiAgICAgIC5zYXR1cmF0ZSgpXG4gICAgICAuaGV4KClcbiAgICBzY2FsZS5wdXNoKGNvbG9yKVxuICB9XG5cbiAgcmV0dXJuIHNjYWxlXG59XG5cbmV4cG9ydCB2YXIgbGluZVdlaWdodHMgPSBbWzMsIDNdLCBbNSwgMl0sIFs0LCAzLjVdLCBbNywgM10sIFs0LCA0XV1cbmV4cG9ydCB2YXIgbGluZURhc2hBcnJheXMgPSBbXG4gIFtudWxsLCAnNiw5J10sXG4gIFtudWxsLCBudWxsXSxcbiAgW251bGwsICc2LDEyJ10sXG4gIFtudWxsLCBudWxsXSxcbiAgWycxOCwyNCcsICcxOCwyNCddXG5dXG5leHBvcnQgdmFyIGV4dGVybmFsTGluayA9XG4gICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDE1IDE1XCI+PHBhdGggZD1cIk03LjQ5LDBWMS42N0gxLjY4VjEzLjMySDEzLjMyVjcuNTJIMTV2NS43MmExLjc2LDEuNzYsMCwwLDEtLjQyLDEuMTksMS42NCwxLjY0LDAsMCwxLTEuMTMuNTZIMS43NGExLjY3LDEuNjcsMCwwLDEtMS4xNi0uNDFBMS42MSwxLjYxLDAsMCwxLDAsMTMuNDh2LS4yN0MwLDkuNCwwLDUuNiwwLDEuOEExLjgzLDEuODMsMCwwLDEsLjU4LjRhMS41MywxLjUzLDAsMCwxLDEtLjM5aDZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIi8+PHBhdGggZD1cIk05LjE3LDEuNjdWMEgxNVY1Ljg0SDEzLjM0di0zaDBjLS4wNS4wNS0uMTEuMS0uMTYuMTZsLS40NS40Ni0xLjMsMS4yOS0uODQuODQtLjg5LjktLjg4Ljg3LS44OS45Yy0uMjguMjktLjU3LjU3LS44Ni44Nkw2LjE2LDEwbC0uODguODdhMS44MywxLjgzLDAsMCwxLS4xMy4xNkw0LDkuODZsMCwwTDUuMzYsOC40N2wuOTUtMSwuNzUtLjc1LDEtMUw4Ljg3LDVsMS0uOTQuODUtLjg2LjkyLS45MS41Ni0uNThaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIi8+PC9zdmc+J1xuZXhwb3J0IHZhciByZW1vdmUgPVxuICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDIxIDIxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGZpbGw9XCIjMDAwXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNMi41OTIuMDQ0bDE4LjM2NCAxOC4zNjQtMi41NDggMi41NDhMLjA0NCAyLjU5MnpcIi8+PHBhdGggZD1cIk0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6XCIvPjwvZz48L3N2Zz4nXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VHlwZSh2YWx1ZSkge1xuICB2YXIgdiA9IE51bWJlcih2YWx1ZSlcbiAgcmV0dXJuICFpc05hTih2KVxuICAgID8gdlxuICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdudWxsJ1xuICAgICAgICA/IG51bGxcbiAgICAgICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSdcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdmYWxzZSdcbiAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgIDogdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWQodXJsLCBlbGVtZW50KSB7XG4gIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICByZXEub3BlbignR0VUJywgdXJsLCBmYWxzZSlcbiAgcmVxLnNlbmQobnVsbClcbiAgZWxlbWVudC5pbm5lckhUTUwgPSByZXEucmVzcG9uc2VUZXh0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRHJvcGRvd25PcHRpb25zKG9wdGlvbnMsIHgpIHtcbiAgdmFyIGdyb3VwcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2dyb3VwJylcbiAgdmFyIGNob2ljZXMgPSBPYmplY3Qua2V5cyhncm91cHMpLm1hcChmdW5jdGlvbihnLCB6KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB6LFxuICAgICAgbGFiZWw6IGcudHJpbSgpICYmIE51bWJlci5pc05hTihwYXJzZUludChnLCAxMCkpID8gZyA6ICcnLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgY2hvaWNlczogZ3JvdXBzW2ddXG4gICAgfVxuICB9KVxuICByZXR1cm4ge1xuICAgIGNob2ljZXM6IGNob2ljZXMsXG4gICAgcmVtb3ZlSXRlbUJ1dHRvbjogdHJ1ZSxcbiAgICBtYXhJdGVtQ291bnQ6IG9wdGlvbnMud2lkZ2V0c1t4XS5tYXhpbXVtLFxuICAgIGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXM6IGZ1bmN0aW9uIGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXModGVtcGxhdGUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXNcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbTogZnVuY3Rpb24gaXRlbShjbGFzc05hbWVzLCBkYXRhKSB7XG4gICAgICAgICAgdmFyIGtleSA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmZpbmQoZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHYudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZGF0YS52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICB2YXIga2V5U3R5bGVcblxuICAgICAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgICAgIHZhciBmb3JtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICAgIHJldHVybiBrLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHZhciBpID0gZm9ybXMuaW5kZXhPZihrZXkudmFsdWUudG9Mb3dlckNhc2UoKSlcblxuICAgICAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtYXJrdXAgPVxuICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJib3JkZXItY29sb3I6JyArXG4gICAgICAgICAgICBrZXkuY29sb3IgK1xuICAgICAgICAgICAgJ1wiIGNsYXNzPVwiJyArXG4gICAgICAgICAgICBjbGFzc05hbWVzLml0ZW0gK1xuICAgICAgICAgICAgJ1wiIGRhdGEtaXRlbSBkYXRhLWlkPVwiJyArXG4gICAgICAgICAgICBkYXRhLmlkICtcbiAgICAgICAgICAgICdcIiBkYXRhLXZhbHVlPVwiJyArXG4gICAgICAgICAgICBkYXRhLnZhbHVlICtcbiAgICAgICAgICAgICdcIiAnICtcbiAgICAgICAgICAgIChkYXRhLmFjdGl2ZSA/ICdhcmlhLXNlbGVjdGVkPVwidHJ1ZVwiJyA6ICcnKSArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgKGRhdGEuZGlzYWJsZWQgPyAnYXJpYS1kaXNhYmxlZD1cInRydWVcIicgOiAnJykgK1xuICAgICAgICAgICAgJz48c3BhbiBjbGFzcz1cIicgK1xuICAgICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICAgJ0tleVwiICcgK1xuICAgICAgICAgICAgJ3N0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJycgK1xuICAgICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAgICdcIik+PC9zcGFuPiAnICtcbiAgICAgICAgICAgIGNhcGl0YWxpemUoZGF0YS5sYWJlbCkgK1xuICAgICAgICAgICAgJzxidXR0b24gc3R5bGU9XCJib3JkZXItbGVmdDogMXB4IHNvbGlkICcgK1xuICAgICAgICAgICAga2V5LmNvbG9yICtcbiAgICAgICAgICAgICc7IGJhY2tncm91bmQtaW1hZ2U6IHVybChcXCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgK1xuICAgICAgICAgICAgd2luZG93LmJ0b2EocmVtb3ZlKSArXG4gICAgICAgICAgICAnXFwnKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNob2ljZXNfX2J1dHRvblwiIGRhdGEtYnV0dG9uPVwiXCIgYXJpYS1sYWJlbD1cIlJlbW92ZSBpdGVtXCI+UmVtb3ZlIGl0ZW08L2J1dHRvbj48L2Rpdj4nXG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKG1hcmt1cClcbiAgICAgICAgfSxcbiAgICAgICAgY2hvaWNlOiBmdW5jdGlvbiBjaG9pY2UoY2xhc3NOYW1lcywgZGF0YSkge1xuICAgICAgICAgIHZhciBrZXkgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5maW5kKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB2LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGRhdGEudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdmFyIGtleVN0eWxlXG5cbiAgICAgICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgICByZXR1cm4gay52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtYXJrdXAgPVxuICAgICAgICAgICAgJyA8ZGl2IGNsYXNzPVwiJyArXG4gICAgICAgICAgICBjbGFzc05hbWVzLml0ZW0gK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuaXRlbUNob2ljZSArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgKGRhdGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgPyBjbGFzc05hbWVzLml0ZW1EaXNhYmxlZFxuICAgICAgICAgICAgICA6IGNsYXNzTmFtZXMuaXRlbVNlbGVjdGFibGUpICtcbiAgICAgICAgICAgICdcIiBkYXRhLXNlbGVjdC10ZXh0PVwiJyArXG4gICAgICAgICAgICBfdGhpcy5jb25maWcuaXRlbVNlbGVjdFRleHQgK1xuICAgICAgICAgICAgJ1wiIGRhdGEtY2hvaWNlICcgK1xuICAgICAgICAgICAgKGRhdGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgPyAnZGF0YS1jaG9pY2UtZGlzYWJsZWQgYXJpYS1kaXNhYmxlZD1cInRydWVcIidcbiAgICAgICAgICAgICAgOiAnZGF0YS1jaG9pY2Utc2VsZWN0YWJsZScpICtcbiAgICAgICAgICAgICcgZGF0YS1pZD1cIicgK1xuICAgICAgICAgICAgZGF0YS5pZCArXG4gICAgICAgICAgICAnXCIgZGF0YS12YWx1ZT1cIicgK1xuICAgICAgICAgICAgZGF0YS52YWx1ZSArXG4gICAgICAgICAgICAnXCIgJyArXG4gICAgICAgICAgICAoZGF0YS5ncm91cElkID4gMCA/ICdyb2xlPVwidHJlZWl0ZW1cIicgOiAncm9sZT1cIm9wdGlvblwiJykgK1xuICAgICAgICAgICAgJz4gPHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgICAgIGtleVN0eWxlLmNsYXNzICtcbiAgICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAgICdzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICtcbiAgICAgICAgICAgIGtleVN0eWxlLnN2ZyArXG4gICAgICAgICAgICAnXCIpPjwvc3Bhbj4gJyArXG4gICAgICAgICAgICBjYXBpdGFsaXplKGRhdGEubGFiZWwpICtcbiAgICAgICAgICAgICcgPC9kaXY+ICdcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGUobWFya3VwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjYXBpdGFsaXplLCBsb2FkLCBsaW5lV2VpZ2h0cywgbGluZURhc2hBcnJheXMgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlS2V5KG9wdGlvbnMpIHtcbiAgdmFyIG1hcCA9IG9wdGlvbnMubWFwLFxuICAgIGZlYXR1cmUgPSBvcHRpb25zLmZlYXR1cmUsXG4gICAgZ3JvdXAgPSBvcHRpb25zLmdyb3VwLFxuICAgIGtleSA9IG9wdGlvbnMua2V5LFxuICAgIGluZGV4ID0gb3B0aW9ucy5pbmRleCxcbiAgICBmb3JtcyA9IG9wdGlvbnMuZm9ybXMsXG4gICAgaWNvblNpemUgPSBtYXAuaWNvbnNpemUsXG4gICAgZGl2aWRlcnMgPSBpY29uU2l6ZS5tYXAoc2l6ZSA9PiBzaXplIC8gMTIpXG5cbiAgdmFyIGNvbG9ycywga2V5Q29sb3JcbiAgdmFyIGtleSA9IGdyb3VwID8gZ3JvdXBbMF0gOiBrZXlcblxuICBmb3IgKGxldCB3IG9mIG1hcC53aWRnZXRzKSB7XG4gICAgdmFyIGZvcm1LZXlXaWRnZXQgPSB3LnR5cGUgPT09ICdmb3JtJyA/IHcgOiBudWxsXG4gICAgdmFyIGNvbG9yS2V5V2lkZ2V0ID0gdy50eXBlID09PSAnY29sb3InID8gdyA6IG51bGxcblxuICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICB2YXIgY29sb3JLZXkgPSBjb2xvcktleVdpZGdldFxuICAgICAgICA/IGNvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICB2YXIgZm9ybUtleSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgICAgPyBmb3JtS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSlcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGtleUNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGZvcm1LZXkgPyBmb3JtS2V5LmNvbG9yIDogbnVsbFxuXG4gICAgICBpY29uU2l6ZSA9IGljb25TaXplLm1hcChzaXplID0+IHNpemUgLyAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBpY29uU2l6ZSA9IGljb25TaXplLm1hcCgoc2l6ZSwgaSkgPT4gc2l6ZSAvIGRpdmlkZXJzW2ldKVxuICAgIH1cblxuICAgIGtleS5jb2xvciA9XG4gICAgICBncm91cCAmJlxuICAgICAgZ3JvdXAuZXZlcnkoZnVuY3Rpb24oZykge1xuICAgICAgICByZXR1cm4gZy5jb2xvclxuICAgICAgfSlcbiAgICAgICAgPyBjaHJvbWEuYXZlcmFnZShcbiAgICAgICAgICBncm91cC5tYXAoZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgcmV0dXJuIGcuY29sb3JcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIDoga2V5LmNvbG9yXG5cbiAgICBzd2l0Y2ggKGtleS5mb3JtKSB7XG4gICAgY2FzZSAnbGluZSc6XG4gICAgICBrZXlDb2xvciA9IGtleS5jb2xvclxuICAgICAgICA/IGtleS5jb2xvclxuICAgICAgICA6IG9wdGlvbnMubWFwLm9jZWFuY29sb3JcbiAgICAgICAgICA/IG9wdGlvbnMubWFwLm9jZWFuY29sb3JcbiAgICAgICAgICA6IG51bGxcblxuICAgICAgaWYgKGZvcm1zICYmIGZvcm1zLmxlbmd0aCkge1xuICAgICAgICB2YXIgc3ZnXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKVxuICAgICAgICAgIF1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKCksXG4gICAgICAgICAgICAnI2ZmZmZmZidcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29sb3JzID0gWycjMDAwMDAwJywga2V5Q29sb3IgPyBrZXlDb2xvciA6IGRlZmF1bHRDb2xvcl1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICAnI2ZmZmZmZicsXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKClcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKVxuICAgICAgICAgIF1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVxcJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFwnIHZpZXdCb3g9XFwnMCAwIDQ4IDEyXFwnPjxsaW5lIHgxPVxcJzBcXCcgeDI9XFwnNDhcXCcgeTE9XFwnNTAlXFwnIHkyPVxcJzUwJVxcJyBzdHJva2U9XFwnJyArXG4gICAgICAgICAgICBjb2xvcnNbMF0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2Utd2lkdGg9XFwnJyArXG4gICAgICAgICAgICBsaW5lV2VpZ2h0c1tpbmRleF1bMF0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2UtbGluZWNhcD1cXCdzcXVhcmVcXCcgc3Ryb2tlLWRhc2hhcnJheT1cXCcnICtcbiAgICAgICAgICAgIChpbmRleCA9PT0gNCA/ICcxOCwxMicgOiBsaW5lRGFzaEFycmF5c1tpbmRleF1bMF0pICtcbiAgICAgICAgICAgICdcXCcvPjxsaW5lIHgxPVxcJzBcXCcgeDI9XFwnNDhcXCcgeTE9XFwnNTAlXFwnIHkyPVxcJzUwJVxcJyBzdHJva2U9XFwnJyArXG4gICAgICAgICAgICBjb2xvcnNbMV0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2Utd2lkdGg9XFwnJyArXG4gICAgICAgICAgICBsaW5lV2VpZ2h0c1tpbmRleF1bMV0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2UtbGluZWNhcD1cXCdzcXVhcmVcXCcgc3Ryb2tlLWRhc2hhcnJheT1cXCcnICtcbiAgICAgICAgICAgIChpbmRleCA9PT0gNCA/ICcxOCwxMicgOiBsaW5lRGFzaEFycmF5c1tpbmRleF1bMV0pICtcbiAgICAgICAgICAgICdcXCcvPjwvc3ZnPidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAnPHN2ZyB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJyB2aWV3Qm94PVxcJzAgMCA0OCAxMlxcJz48bGluZSB4MT1cXCcwXFwnIHgyPVxcJzQ4XFwnIHkxPVxcJzUwJVxcJyB5Mj1cXCc1MCVcXCcgc3Ryb2tlPVxcJycgK1xuICAgICAgICAgICAga2V5Q29sb3IgK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2Utd2lkdGg9XFwnJyArXG4gICAgICAgICAgICAzICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLWxpbmVjYXA9XFwnc3F1YXJlXFwnIHN0cm9rZS1kYXNoYXJyYXk9XFwnJyArXG4gICAgICAgICAgICAnMyw3JyArXG4gICAgICAgICAgICAnXFwnLz48L3N2Zz4nXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2ZzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHN2ZyksXG4gICAgICAgIGNsYXNzOiAnbGluZSdcbiAgICAgIH1cblxuICAgIGNhc2UgJ2ljb24nOlxuICAgICAgaWYgKGtleS5pY29uKSB7XG4gICAgICAgIHZhciBzbHVnID0ga2V5LnZhbHVlLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgICBsb2FkKGtleS5pY29uLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuJykpXG4gICAgICAgIHZhciBzdmdDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGRlbicpLmlubmVySFRNTFxuXG4gICAgICAgIGlmIChjb2xvcktleVdpZGdldCAmJiBrZXlDb2xvcikge1xuICAgICAgICAgIHN2Z0NvbnRlbnQgPSBzdmdDb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAvKChcXGJmaWxsPVwiIykoKFswLWEtZkEtRl17Mn0pezN9fChbMC05YS1mQS1GXSl7M30pXCIpL2dpLFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApXG4gICAgICAgICAgc3ZnQ29udGVudCA9IHN2Z0NvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgIC8oPGNpcmNsZSB8PHJlY3RhbmdsZSB8PGVsbGlwc2UgfDxwb2x5Z29uIHw8cGF0aCApL2csXG4gICAgICAgICAgICBmdW5jdGlvbihtYXRjaCwgcDEsIHAyLCBwMykge1xuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2gucmVwbGFjZShtYXRjaCwgbWF0Y2ggKyAnZmlsbD1cIicgKyBrZXlDb2xvciArICdcIiAnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmdDb250ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgK1xuICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiJyArXG4gICAgICAgICAgICAgICAgaWNvblNpemVbMF0gLyAyICtcbiAgICAgICAgICAgICAgICAnXCIgY3k9XCInICtcbiAgICAgICAgICAgICAgICBpY29uU2l6ZVsxXSAvIDIgK1xuICAgICAgICAgICAgICAgICdcIiByPVwiJyArXG4gICAgICAgICAgICAgICAgKGljb25TaXplWzBdICsgaWNvblNpemVbMV0pIC8gNCArXG4gICAgICAgICAgICAgICAgJ1wiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAoa2V5Q29sb3IgfHwga2V5LmNvbG9yKSArXG4gICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICBjbGFzczoga2V5Lmljb24gPyAnaWNvbicgOiAnY29sb3InXG4gICAgICB9XG5cbiAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGtleUNvbG9yID0ga2V5LmNvbG9yXG4gICAgICB2YXIgc3ZnXG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBrZXkucGF0dGVyblswXS5pbmRleE9mKCdzdHJpcGUnKSA+IC0xOlxuICAgICAgICB2YXIgY29sb3JUd28gPSBrZXkucGF0dGVyblsxXVxuICAgICAgICB2YXIgY29sb3JPbmUgPSBrZXkucGF0dGVybltrZXkucGF0dGVybi5sZW5ndGggLSAxXVxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIj48cG9seWdvbiBwb2ludHM9XCI1LjczIDAgNC42NyAwIDAgNC42NiAwIDUuNzEgNS43MyAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIyLjI4IDAgMS4yMiAwIDAgMS4yMiAwIDIuMjcgMi4yOCAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCI4Ljg1IDAgNy43OSAwIDAgNy43NyAwIDguODIgOC44NSAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiAwIDExLjI0IDAgMCAxMS4yIDAgMTIgMC4yNiAxMiAxMiAwLjMgMTIgMFwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yT25lICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTIgMTAuMTIgMTIgOS4wNiA5LjA1IDEyIDEwLjExIDEyIDEyIDEwLjEyXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiAzLjUyIDEyIDIuNDYgMi40MyAxMiAzLjQ5IDEyIDEyIDMuNTJcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvclR3byArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEyIDYuOTYgMTIgNS45IDUuODggMTIgNi45NCAxMiAxMiA2Ljk2XCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBrZXkucGF0dGVyblswXS5pbmRleE9mKCdkb3QnKSA+IC0xOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTMuMDZcIiBoZWlnaHQ9XCIxNS4xXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiPjx0aXRsZT5zdHJpcGVzPC90aXRsZT48cGF0aCBkPVwiTTUuNDksMUExLjE2LDEuMTYsMCwxLDEsNC4zMy0uMTYsMS4xNiwxLjE2LDAsMCwxLDUuNDksMVpNNC4zMywzLjc3QTEuMTYsMS4xNiwwLDEsMCw1LjQ5LDQuOTMsMS4xNSwxLjE1LDAsMCwwLDQuMzMsMy43N1ptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCw1LjQ5LDguODYsMS4xNSwxLjE1LDAsMCwwLDQuMzMsNy43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE1LDEuMTUsMCwwLDAsNC4zMywxMS42M1pNMTEuNS0uMTZBMS4xNiwxLjE2LDAsMSwwLDEyLjY2LDEsMS4xNiwxLjE2LDAsMCwwLDExLjUtLjE2Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsMTEuNSwzLjc3Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsMTEuNSw3LjdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTYsMS4xNiwwLDAsMCwxMS41LDExLjYzWk03LjkyLTEuMTZBMS4xNiwxLjE2LDAsMCwwLDYuNzYsMCwxLjE2LDEuMTYsMCwwLDAsNy45MiwxLjE2LDEuMTYsMS4xNiwwLDAsMCw5LjA3LDAsMS4xNiwxLjE2LDAsMCwwLDcuOTItMS4xNlptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCw5LjA3LDMuOTMsMS4xNiwxLjE2LDAsMCwwLDcuOTIsMi43N1ptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCw5LjA3LDcuODYsMS4xNiwxLjE2LDAsMCwwLDcuOTIsNi43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTUsMS4xNkExLjE2LDEuMTYsMCwwLDAsNy45MiwxMC42M1pNLjc1LTEuMTZBMS4xNiwxLjE2LDAsMCwwLS40MSwwLDEuMTYsMS4xNiwwLDAsMCwuNzUsMS4xNiwxLjE2LDEuMTYsMCwwLDAsMS45MSwwLDEuMTYsMS4xNiwwLDAsMCwuNzUtMS4xNlptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCwxLjkxLDMuOTMsMS4xNiwxLjE2LDAsMCwwLC43NSwyLjc3Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMCwwLS40MSw3Ljg2LDEuMTUsMS4xNSwwLDAsMCwuNzUsOSwxLjE1LDEuMTUsMCwwLDAsMS45MSw3Ljg2LDEuMTYsMS4xNiwwLDAsMCwuNzUsNi43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsLjc1LDEwLjYzWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjcgMilcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvck9uZSArXG4gICAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgKVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBrZXlDb2xvciArXG4gICAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgY2xhc3M6IGtleS5wYXR0ZXJuID8gJ3BhdHRlcm4nIDogJ2NvbG9yJ1xuICAgICAgfVxuXG4gICAgY2FzZSAnc2hhcGUnOlxuICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGNvbG9yS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICAgICAgICB9KVxuICAgICAgICB2YXIgY29sb3JLZXkgPSBjb2xvcktleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAga2V5Q29sb3IgPSBjb2xvcktleSA/IGNvbG9yS2V5LmNvbG9yIDoga2V5Q29sb3IgPyBrZXlDb2xvciA6IG51bGxcbiAgICAgIH1cblxuICAgICAgdmFyIHN2Z1xuXG4gICAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgIHkxPVwiNC41XCIgeDI9XCI5XCIgeTI9XCI0LjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjUgLTQuNSkgcm90YXRlKDEzNSlcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PHN0b3Agb2Zmc2V0PVwiMC4zMjVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjY3NVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PVwiMy4yNVwiIHk9XCIxLjc1XCIgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiOVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjUgLTQuNSkgcm90YXRlKDQ1KVwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAncGFpbnQtb3JkZXI9XCJzdHJva2VcIiBzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIiAvPjwvc3ZnPidcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwicmFpbmJvd1wiIHkxPVwiNVwiIHgyPVwiMTBcIiB5Mj1cIjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMzOTY5YWNcIi8+PHN0b3Agb2Zmc2V0PVwiMC4yNVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNzVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/ICdzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgeTE9XCI1XCIgeDI9XCIxMFwiIHkyPVwiNVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48c3RvcCBvZmZzZXQ9XCIwLjMyNVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwb2x5Z29uIHBvaW50cz1cIjYgMTAuMzkgMCAxMC4zOSAzIDUuMiA2IDAgOSA1LjIgMTIgMTAuMzkgNiAxMC4zOVwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAncGFpbnQtb3JkZXI9XCJzdHJva2VcIiBzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIiAvPjwvc3ZnPidcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cInJhaW5ib3dcIiB5MT1cIjVcIiB4Mj1cIjEwXCIgeTI9XCI1XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjMzk2OWFjXCIvPjxzdG9wIG9mZnNldD1cIjAuMjVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiAnICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8gJ3N0cm9rZT1cIiNmZmZmZmZcIicgOiAnJykgK1xuICAgICAgICAgICAgICAnIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8ga2V5Q29sb3IgOiAndXJsKCNyYWluYm93KScpICtcbiAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2ZzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHN2ZyksXG4gICAgICAgIGNsYXNzOiAnc2hhcGUnXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAga2V5Q29sb3IgPSBrZXkuY29sb3JcblxuICAgICAgc3ZnID1cbiAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiJyArXG4gICAgICAgICAgICAgIGljb25TaXplWzBdIC8gMiArXG4gICAgICAgICAgICAgICdcIiBjeT1cIicgK1xuICAgICAgICAgICAgICBpY29uU2l6ZVsxXSAvIDIgK1xuICAgICAgICAgICAgICAnXCIgcj1cIicgK1xuICAgICAgICAgICAgICAoaWNvblNpemVbMF0gKyBpY29uU2l6ZVsxXSkgLyA0ICtcbiAgICAgICAgICAgICAgJ1wiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yIHx8IGtleS5jb2xvcikgK1xuICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICApXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgY2xhc3M6ICdjb2xvcidcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGV4dGVybmFsTGluayB9IGZyb20gJy4vaGVscGVycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRmVhdHVyZUV2ZW50cyhmZWF0dXJlLCBsYXllciwgbWFwKSB7XG4gIHZhciBldmVudE9wdGlvbnMgPSBtYXAub25lYWNoZmVhdHVyZVxuICAgID8gbWFwLm9uZWFjaGZlYXR1cmVcbiAgICA6IHtcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljaygpIHtcbiAgICAgICAgaGFuZGxlTGF5ZXJDbGljayhmZWF0dXJlLCBsYXllciwgbWFwLmxlYWZsZXQpXG4gICAgICB9XG4gICAgfVxuXG4gIE9iamVjdC5rZXlzKGV2ZW50T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIGxheWVyLm9uKGxpc3RlbmVyLCBldmVudE9wdGlvbnNbbGlzdGVuZXJdKVxuICB9KVxuICB2YXIgcG9wdXBDb250ZW50ID1cbiAgICB0eXBlb2YgbWFwLmZvcm1hdHBvcHVwY29udGVudCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBtYXAuZm9ybWF0cG9wdXBjb250ZW50KGZlYXR1cmUsIG1hcClcbiAgICAgIDogZm9ybWF0UG9wdXBDb250ZW50KGZlYXR1cmUsIG1hcClcbiAgbGF5ZXIuYmluZFBvcHVwKHBvcHVwQ29udGVudClcbn1cblxuZnVuY3Rpb24gZm9ybWF0UG9wdXBDb250ZW50KGZlYXR1cmUsIG1hcCkge1xuICB2YXIgY29udGVudFxuICBjb250ZW50ID0gT2JqZWN0LmtleXMoZmVhdHVyZS5wcm9wZXJ0aWVzKVxuICAgIC5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllc1twXSkge1xuICAgICAgICBpZiAobWFwLnBvcHVwaGVhZGVycy5sZW5ndGggJiYgbWFwLnBvcHVwY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwLnBvcHVwaGVhZGVycy5pbmRleE9mKHApID4gLTEgJiZcbiAgICAgICAgICAgIG1hcC5wb3B1cGNvbnRlbnQuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIHAudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgOiBtYXAucG9wdXBjb250ZW50LmluZGV4T2YocCkgPiAtMVxuICAgICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSBpZiAobWFwLnBvcHVwaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwLnBvcHVwaGVhZGVycy5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgID8gJzxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgcC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbcF0gK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSBpZiAobWFwLnBvcHVwY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwLnBvcHVwY29udGVudC5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgID8gJzxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICsgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICsgJzwvZGl2PidcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+JyArXG4gICAgICAgICAgICBwLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnICcpICtcbiAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbcF0gK1xuICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgcmV0dXJuIHBcbiAgICB9KVxuICAgIC5qb2luKCcnKVxuICB2YXIgbGluayA9IGZlYXR1cmUucHJvcGVydGllcy5oeXBlcmxpbmsgfHwgZmVhdHVyZS5wcm9wZXJ0aWVzLmxpbmtcbiAgdmFyIGV4dGVybmFsTGlua0NvbnRlbnQgPVxuICAgIGxpbmsgJiYgbGluay50cmltKClcbiAgICAgID8gJzxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj48ZGl2IGNsYXNzPVwiaHlwZXJsaW5rIHBvcHVwRW50cnlTdHlsZVwiPjxhIGNsYXNzPVwidHJhbnNsYXRlXCIgaHJlZj0nICtcbiAgICAgICAgbGluay50cmltKCkgK1xuICAgICAgICAnIHRhcmdldD1cIl9ibGFua1wiPicgK1xuICAgICAgICBtYXAuZXh0ZXJuYWxsaW5rdGV4dCArXG4gICAgICAgICc8L2E+JyArXG4gICAgICAgIGV4dGVybmFsTGluayArXG4gICAgICAgICc8L2Rpdj4nXG4gICAgICA6ICcnXG4gIGNvbnRlbnQgKz0gZXh0ZXJuYWxMaW5rQ29udGVudFxuXG4gIGlmIChsYW5nKSB7XG4gICAgdmFyIHRyYW5zbGF0YWJsZVN0cmluZ3MgPSBPYmplY3Qua2V5cyhtYXAudHJhbnNsYXRpb25zKS5zb3J0KGZ1bmN0aW9uKFxuICAgICAgYSxcbiAgICAgIGJcbiAgICApIHtcbiAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoXG4gICAgfSlcbiAgICB0cmFuc2xhdGFibGVTdHJpbmdzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnXFxcXGIoJyArIFJlZ0V4cC5lc2NhcGUodCkgKyAnKScsICdnaScpXG4gICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlLCBtYXAudHJhbnNsYXRpb25zW3RdKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY29udGVudFxufVxuXG5mdW5jdGlvbiBoYW5kbGVMYXllckNsaWNrKGZlYXR1cmUsIGxheWVyLCBsZWFmbGV0KSB7XG4gIHZhciBpc1NwaWRlcmZpZWQgPSBmYWxzZVxuXG4gIGlmICghbGF5ZXIuX3ByZVNwaWRlcmZ5TGF0bG5nKSB7XG4gICAgT2JqZWN0LmtleXMobGVhZmxldC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGwsIGkpIHtcbiAgICAgIGlmIChsZWFmbGV0Ll9sYXllcnNbbF0udW5zcGlkZXJmeSkgbGVhZmxldC5fbGF5ZXJzW2xdLnVuc3BpZGVyZnkoKVxuICAgIH0pXG5cbiAgICBpZiAobGF5ZXIuX19wYXJlbnQpIHtcbiAgICAgIE9iamVjdC52YWx1ZXMobGF5ZXIuX19wYXJlbnQuX2dyb3VwLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24odikge1xuICAgICAgICAgIGlmICh2Ll9ncm91cCAmJiB2Ll9ncm91cC5fc3BpZGVyZmllZCkgaXNTcGlkZXJmaWVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5oYW5kbGVMYXllckNsaWNrID0gaGFuZGxlTGF5ZXJDbGlja1xuIiwiaW1wb3J0IHN0eWxlS2V5IGZyb20gJy4vc3R5bGVLZXkuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApIHtcbiAgdmFyIHBvaW50U3R5bGUsIGtleSwgc3R5bGVPcHRpb25zXG5cbiAgdmFyIEN1c3RvbUljb24gPSBMLkljb24uZXh0ZW5kKHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBpY29uU2l6ZTogbWFwLmljb25zaXplIHx8IFsyMCwgMjBdLFxuICAgICAgaWNvbkFuY2hvcjogbWFwLmljb25zaXplXG4gICAgICAgID8gbWFwLmljb25zaXplIC8gNFxuICAgICAgICA6IG1hcC5pY29uYW5jaG9yXG4gICAgICAgICAgPyBtYXAuaWNvbmFuY2hvclxuICAgICAgICAgIDogWzUsIDVdXG4gICAgfVxuICB9KVxuXG4gIHZhciBub25Qb2ludFN0eWxlLCBrZXksIGRpdkljb25cblxuICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICBpZiAoIXcua2V5cykgcmV0dXJuXG4gICAgdmFyIGtleSA9IHcua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZlYXR1cmUucHJvcGVydGllc1t3LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICB9KVxuXG4gIHZhciBmb3JtS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVyblxuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBmZWF0dXJlLnByb3BlcnRpZXNbdy5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgIH0pXG5cbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2Zvcm0nXG4gIH0pXG5cbiAgZm9yIChsZXQgdyBvZiBtYXAud2lkZ2V0cykge1xuICAgIHZhciB0aGlzRm9ybUtleVdpZGdldCA9IHcudHlwZSA9PT0gJ2Zvcm0nID8gdyA6IGZvcm1LZXlXaWRnZXRcbiAgICB2YXIgdGhpc0NvbG9yS2V5V2lkZ2V0ID0gdy50eXBlID09PSAnY29sb3InID8gdyA6IG51bGxcblxuICAgIHZhciBjb2xvcktleSA9IHRoaXNDb2xvcktleVdpZGdldFxuICAgICAgPyB0aGlzQ29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXNDb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGZvcm1LZXkgPSB0aGlzRm9ybUtleVdpZGdldFxuICAgICAgPyB0aGlzRm9ybUtleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBjb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBmb3JtS2V5ID8gZm9ybUtleS5jb2xvciA6IG51bGxcblxuICAgIGlmICh0aGlzRm9ybUtleVdpZGdldCAmJiBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdKSB7XG4gICAgICB2YXIgZm9ybXMgPSB0aGlzRm9ybUtleVdpZGdldC5rZXlzLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiBrLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICB2YXIgaSA9IGZvcm1zLmluZGV4T2YoXG4gICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzRm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgKVxuICAgICAga2V5ID0gdGhpc0Zvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzRm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcblxuICAgICAgaWYgKCFrZXkpIGJyZWFrXG5cbiAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgIGtleTogZm9ybUtleSxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgZmVhdHVyZTogZmVhdHVyZVxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5LmZvcm0gPT09ICdkaXYnKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGZlYXR1cmUucHJvcGVydGllc1t0aGlzRm9ybUtleVdpZGdldC5maWVsZF1cbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWUgPyB2YWx1ZS5zcGxpdCgnficpLmxlbmd0aCA6IDBcblxuICAgICAgICBkaXZJY29uID0gTC5kaXZJY29uKHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdpY29uLWRpdicsXG4gICAgICAgICAgaHRtbDpcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JyArXG4gICAgICAgICAgICBjb2xvciArXG4gICAgICAgICAgICAnXCI+JyArXG4gICAgICAgICAgICBjb3VudCArXG4gICAgICAgICAgICAnPC9zcGFuPidcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcG9pbnRTdHlsZSA9IGRpdkljb24gPyBkaXZJY29uIDogc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzQ29sb3JLZXlXaWRnZXQgJiZcbiAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzQ29sb3JLZXlXaWRnZXQuZmllbGRdXG4gICAgKSB7XG4gICAgICBrZXkgPSB0aGlzQ29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzQ29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG5cbiAgICAgIGlmICgha2V5KSBicmVha1xuXG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICBrZXk6IGNvbG9yS2V5LFxuICAgICAgICBjb2xvcjogY29sb3JLZXkuY29sb3IsXG4gICAgICAgIG1hcDogbWFwLFxuICAgICAgICBmZWF0dXJlOiBmZWF0dXJlXG4gICAgICB9XG5cbiAgICAgIHBvaW50U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdmcgPVxuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjZcIiBjeT1cIjZcIiByPVwiNVwiIGZpbGw9XCInICtcbiAgICAgICAgY29sb3IgK1xuICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgIHBvaW50U3R5bGUgPSB7XG4gICAgICAgIGNsYXNzOiAnZGVmYXVsdCcsXG4gICAgICAgIHN2ZzogZW5jb2RlVVJJKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmcpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpY29uVXJsID0gcG9pbnRTdHlsZS5zdmdcbiAgICB2YXIgaWNvbiA9IG5ldyBDdXN0b21JY29uKHtcbiAgICAgIGljb25Vcmw6IGljb25VcmxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIEwubWFya2VyKGxhdGxuZywge1xuICAgIGljb246IGRpdkljb24gPyBkaXZJY29uIDogaWNvblxuICB9KVxufVxuIiwiaW1wb3J0IHN0eWxlS2V5IGZyb20gJy4vc3R5bGVLZXkuanMnXG5pbXBvcnQgeyBsaW5lV2VpZ2h0cywgbGluZURhc2hBcnJheXMgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgbWFwLCBpbmRleCkge1xuICB2YXIgbm9uUG9pbnRTdHlsZSxcbiAgICBjb2xvcnMgPSBbXSxcbiAgICBmb3JtcyA9IFtdLFxuICAgIHNvcnQgPSBbJ2Zvcm0nLCAnY29sb3InXVxuXG4gIHZhciBjb2xvcktleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgIGlmICghdy5rZXlzKSByZXR1cm5cbiAgICB2YXIga2V5ID0gdy5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSAnY29sb3InXG4gIH0pXG5cbiAgdmFyIGZvcm1LZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICBpZiAoIXcua2V5cykgcmV0dXJuXG4gICAgdmFyIGtleSA9IHcua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZlYXR1cmUucHJvcGVydGllc1t3LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcblxuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSAnZm9ybSdcbiAgfSlcblxuICBmb3IgKGxldCB3IG9mIG1hcC53aWRnZXRzKSB7XG4gICAgdmFyIGNvbG9yS2V5ID0gY29sb3JLZXlXaWRnZXRcbiAgICAgID8gY29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICB2YXIgZm9ybUtleSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgID8gZm9ybUtleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGZvcm1LZXkgPyBmb3JtS2V5LmNvbG9yIDogbnVsbFxuXG4gICAgdmFyIGZvcm1LZXlGb3JtID0gZm9ybUtleVdpZGdldFxuICAgICAgPyBmb3JtS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGNvbG9yS2V5Rm9ybSA9IGNvbG9yS2V5V2lkZ2V0XG4gICAgICA/IGNvbG9yS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGZvcm0gPSBmb3JtS2V5V2lkZ2V0XG4gICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYykge1xuICAgICAgICByZXR1cm4gYy5mb3JtXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAoZm9ybUtleVdpZGdldCAmJiBmb3JtID09PSAnbGluZScpIHtcbiAgICAgIGZvcm1zID0gZm9ybUtleVdpZGdldC5rZXlzLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICB9KVxuICAgICAgZm9ybXMuZm9yRWFjaChmdW5jdGlvbihmLCBpKSB7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgY29sb3JzLnB1c2goWyd0cmFuc3BhcmVudCcsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFtudWxsLCBkZWZhdWx0Q29sb3JdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsnIzAwMDAwMCcsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsnI2ZmZmZmZicsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xvcnMucHVzaChbbnVsbCwgbnVsbF0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoZm9ybXMubGVuZ3RoICYmIGZvcm1LZXlGb3JtID09PSAnbGluZScpIHx8XG4gICAgICAoZm9ybXMubGVuZ3RoICYmIGNvbG9yS2V5Rm9ybSA9PT0gJ2xpbmUnKVxuICAgICkge1xuICAgICAgaWYgKGZvcm1LZXlXaWRnZXQpIHtcbiAgICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllc1tmb3JtS2V5V2lkZ2V0LmZpZWxkXSlcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgY29sb3JzW2ldW2luZGV4XSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyAnI2NhZDJkMydcbiAgICAgICAgICAgICAgICA6IGNvbG9yc1tpXVtpbmRleF0gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gY29sb3JzW2ldW2luZGV4XVxuICAgICAgICAgICAgICAgICAgOiBjb2xvcixcbiAgICAgICAgICAgIHdlaWdodDogbGluZVdlaWdodHNbaV1baW5kZXhdLFxuICAgICAgICAgICAgbGluZUNhcDogJ3NxdWFyZScsXG4gICAgICAgICAgICBkYXNoQXJyYXk6IGxpbmVEYXNoQXJyYXlzW2ldID8gbGluZURhc2hBcnJheXNbaV1baW5kZXhdIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm9ybUtleUZvcm0gPT09ICdsaW5lJyB8fCBjb2xvcktleUZvcm0gPT09ICdsaW5lJykge1xuICAgICAgbm9uUG9pbnRTdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB3ZWlnaHQ6IDIsXG4gICAgICAgIGxpbmVDYXA6ICdzcXVhcmUnLFxuICAgICAgICBkYXNoQXJyYXk6ICczLDcnXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2xvcktleSAmJiBjb2xvcktleS5mb3JtID09PSAncGF0dGVybicpIHtcbiAgICAgIHZhciBwYXR0ZXJuXG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBjb2xvcktleS5wYXR0ZXJuWzBdLmluZGV4T2YoJ3N0cmlwZScpID4gLTE6XG4gICAgICAgIHZhciBwYXR0ZXJuT3B0aW9ucyA9IHtcbiAgICAgICAgICB3ZWlnaHQ6IDMsXG4gICAgICAgICAgc3BhY2VXZWlnaHQ6IDMsXG4gICAgICAgICAgY29sb3I6IGNvbG9yS2V5LnBhdHRlcm5bMV0sXG4gICAgICAgICAgc3BhY2VDb2xvcjogY29sb3JLZXkucGF0dGVybltjb2xvcktleS5wYXR0ZXJuLmxlbmd0aCAtIDFdLFxuICAgICAgICAgIHNwYWNlT3BhY2l0eTogMSxcbiAgICAgICAgICBhbmdsZTogNDVcbiAgICAgICAgfVxuICAgICAgICBwYXR0ZXJuID0gbmV3IEwuU3RyaXBlUGF0dGVybihwYXR0ZXJuT3B0aW9ucylcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBjb2xvcktleS5wYXR0ZXJuWzBdLmluZGV4T2YoJ2RvdCcpID4gLTE6XG4gICAgICAgIHZhciBzaGFwZU9wdGlvbnMgPSB7XG4gICAgICAgICAgeDogNCxcbiAgICAgICAgICB5OiA0LFxuICAgICAgICAgIHJhZGl1czogMixcbiAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgIHN0cm9rZTogZmFsc2UsXG4gICAgICAgICAgZmlsbENvbG9yOiBjb2xvcktleS5wYXR0ZXJuW2NvbG9yS2V5LnBhdHRlcm4ubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgZmlsbE9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2hhcGUgPSBuZXcgTC5QYXR0ZXJuQ2lyY2xlKHNoYXBlT3B0aW9ucylcbiAgICAgICAgdmFyIHBhdHRlcm5PcHRpb25zID0ge1xuICAgICAgICAgIHdpZHRoOiA4LFxuICAgICAgICAgIGhlaWdodDogOFxuICAgICAgICB9XG4gICAgICAgIHBhdHRlcm4gPSBuZXcgTC5QYXR0ZXJuKHBhdHRlcm5PcHRpb25zKVxuICAgICAgICBwYXR0ZXJuLmFkZFNoYXBlKHNoYXBlKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBwYXR0ZXJuLmFkZFRvKG1hcC5sZWFmbGV0KVxuICAgICAgbm9uUG9pbnRTdHlsZSA9IHtcbiAgICAgICAgZmlsbFBhdHRlcm46IHBhdHRlcm4gPyBwYXR0ZXJuIDogbnVsbCxcbiAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcbiAgICAgICAgY29sb3I6IGRlZmF1bHRDb2xvcixcbiAgICAgICAgZmlsbE9wYWNpdHk6IDAuNyxcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICB3ZWlnaHQ6IDIsXG4gICAgICAgIGxpbmVDYXA6ICdzcXVhcmUnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsaW5lQ29sb3JcbiAgICAgIHZhciBsaW5lV2VpZ2h0XG4gICAgICB2YXIgbGluZU9wYWNpdHlcblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xpbmUnKSA+IC0xOlxuICAgICAgICBsaW5lQ29sb3IgPSBjb2xvclxuICAgICAgICAgID8gY2hyb21hKGNvbG9yKVxuICAgICAgICAgICAgLmJyaWdodGVuKClcbiAgICAgICAgICAgIC5oZXgoKVxuICAgICAgICAgIDogbnVsbFxuICAgICAgICBsaW5lT3BhY2l0eSA9IDFcbiAgICAgICAgbGluZVdlaWdodCA9IDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdwb2x5Z29uJykgPiAtMTpcbiAgICAgICAgbGluZUNvbG9yID0gZGVmYXVsdENvbG9yXG4gICAgICAgIGxpbmVPcGFjaXR5ID0gMC41XG4gICAgICAgIGxpbmVXZWlnaHQgPSAyXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgIGZpbGxQYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICBmaWxsQ29sb3I6IGNvbG9yLFxuICAgICAgICBjb2xvcjogbGluZUNvbG9yLFxuICAgICAgICBmaWxsT3BhY2l0eTogMC43LFxuICAgICAgICBvcGFjaXR5OiBsaW5lT3BhY2l0eSxcbiAgICAgICAgd2VpZ2h0OiBsaW5lV2VpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vblBvaW50U3R5bGUpIHJldHVybiBub25Qb2ludFN0eWxlXG4gIH1cbn1cbiIsImltcG9ydCBoYW5kbGVGZWF0dXJlRXZlbnRzIGZyb20gJy4vaGFuZGxlRmVhdHVyZUV2ZW50cy5qcydcbmltcG9ydCBzdHlsZVBvaW50IGZyb20gJy4vc3R5bGVQb2ludC5qcydcbmltcG9ydCBzdHlsZU5vblBvaW50IGZyb20gJy4vc3R5bGVOb25Qb2ludC5qcydcbndpbmRvdy5oYW5kbGVGZWF0dXJlRXZlbnRzID0gaGFuZGxlRmVhdHVyZUV2ZW50c1xud2luZG93LnN0eWxlUG9pbnQgPSBzdHlsZVBvaW50XG53aW5kb3cuc3R5bGVOb25Qb2ludCA9IHN0eWxlTm9uUG9pbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUdlb0pzb25PcHRpb25zKFxuICBtYXAsXG4gIGNvbG9yS2V5V2lkZ2V0cyxcbiAgZm9ybUtleVdpZGdldHNcbikge1xuICBmdW5jdGlvbiBmaWx0ZXIoZmVhdHVyZSkge1xuICAgIHJldHVybiBtYXAuZmlsdGVyc1xuICAgICAgLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmKGZlYXR1cmUpXG4gICAgICB9KVxuICAgICAgLmV2ZXJ5KGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgcmV0dXJuIGYgIT09IGZhbHNlXG4gICAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gb25FYWNoRmVhdHVyZShmZWF0dXJlLCBsYXllcikge1xuICAgIGhhbmRsZUZlYXR1cmVFdmVudHMoZmVhdHVyZSwgbGF5ZXIsIG1hcClcbiAgfVxuXG4gIHZhciBiYWNrZ3JvdW5kT3B0aW9ucyA9IHtcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICBvbkVhY2hGZWF0dXJlOiBvbkVhY2hGZWF0dXJlLFxuICAgIHBvaW50VG9MYXllcjpcbiAgICAgIG1hcC5wb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlLCBsYXRsbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApXG4gICAgICB9LFxuICAgIHN0eWxlOlxuICAgICAgbWFwLm5vblBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgbWFwLCAwKVxuICAgICAgfVxuICB9XG4gIHZhciBmb3JlZ3JvdW5kT3B0aW9ucyA9IHtcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICBvbkVhY2hGZWF0dXJlOiBvbkVhY2hGZWF0dXJlLFxuICAgIHBvaW50VG9MYXllcjpcbiAgICAgIG1hcC5wb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlLCBsYXRsbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApXG4gICAgICB9LFxuICAgIHN0eWxlOlxuICAgICAgbWFwLm5vblBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgbWFwLCAxKVxuICAgICAgfVxuICB9XG5cbiAgcmV0dXJuIFtiYWNrZ3JvdW5kT3B0aW9ucywgZm9yZWdyb3VuZE9wdGlvbnNdXG59XG4iLCJpbXBvcnQgbWFrZUdlb0pzb25PcHRpb25zIGZyb20gJy4vbWFrZUdlb0pzb25PcHRpb25zLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlTGF5ZXJzKG1hcCkge1xuICB2YXIgY29sb3JLZXlXaWRnZXRzID0gW10sXG4gICAgZm9ybUtleVdpZGdldHMgPSBbXVxuXG4gIGlmIChtYXAud2lkZ2V0cykge1xuICAgIGNvbG9yS2V5V2lkZ2V0cyA9IG1hcC53aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICByZXR1cm4gdy50eXBlID09PSAnY29sb3InXG4gICAgfSlcbiAgICBmb3JtS2V5V2lkZ2V0cyA9IG1hcC53aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICByZXR1cm4gdy50eXBlID09PSAnZm9ybSdcbiAgICB9KVxuICB9XG5cbiAgdmFyIGdlb0pzb25PcHRpb25zID0gbWFwLmdlb2pzb25vcHRpb25zXG4gICAgPyBtYXAuZ2VvanNvbm9wdGlvbnMobWFwKVxuICAgIDogbWFrZUdlb0pzb25PcHRpb25zKG1hcClcbiAgbWFwLmpzb24uZm9yRWFjaChmdW5jdGlvbihqc29uLCBpKSB7XG4gICAgdmFyIGNsdXN0ZXJDb2xvciwgY29sb3JLZXlXaWRnZXRcblxuICAgIGlmIChjb2xvcktleVdpZGdldHMubGVuZ3RoKSB7XG4gICAgICB2YXIgY29sb3JLZXlzID0gY29sb3JLZXlXaWRnZXRzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24od2lkZ2V0KSB7XG4gICAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0ganNvbi5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzW3dpZGdldC5maWVsZF1cblxuICAgICAgICAgIHZhciBrZXkgPSB3aWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBjb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGNvbG9yS2V5V2lkZ2V0ID0gd2lkZ2V0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBrZXlcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihjb2xvcktleSkge1xuICAgICAgICAgIHJldHVybiBjb2xvcktleVxuICAgICAgICB9KVxuXG4gICAgICBjbHVzdGVyQ29sb3IgPSBjb2xvcktleXNbMF0gPyBjb2xvcktleXNbMF0uY29sb3IgOiAnIzAwMDAwMCdcbiAgICB9IGVsc2Uge1xuICAgICAgY2x1c3RlckNvbG9yID0gJyMwMDAwMDAnXG4gICAgfVxuXG4gICAgdmFyIGFsbFBvaW50cyA9IGpzb24uZmVhdHVyZXMuZXZlcnkoZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgcmV0dXJuIGZlYXR1cmUuZ2VvbWV0cnkgJiYgZmVhdHVyZS5nZW9tZXRyeS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2ludCdcbiAgICB9KVxuXG4gICAgbWFwLmdyb3Vwcy5wdXNoKFxuICAgICAgbmV3IEwuTWFya2VyQ2x1c3Rlckdyb3VwKHtcbiAgICAgICAgc2hvd0NvdmVyYWdlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgIHpvb21Ub0JvdW5kc09uQ2xpY2s6IGZhbHNlLFxuICAgICAgICBtYXhDbHVzdGVyUmFkaXVzOlxuICAgICAgICAgIGFsbFBvaW50cyAmJiBtYXAuY2x1c3RlcmRpc3RhbmNlID8gbWFwLmNsdXN0ZXJkaXN0YW5jZSA6IE5hTixcbiAgICAgICAgaWNvbkNyZWF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiBpY29uQ3JlYXRlRnVuY3Rpb24oY2x1c3Rlcikge1xuICAgICAgICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnaWNvbi1ncm91cCcsXG4gICAgICAgICAgICBodG1sOlxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCcgK1xuICAgICAgICAgICAgICBjbHVzdGVyQ29sb3IgK1xuICAgICAgICAgICAgICAnOyBjb2xvcjonICtcbiAgICAgICAgICAgICAgY2x1c3RlckNvbG9yICtcbiAgICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgICBjbHVzdGVyLmdldENoaWxkQ291bnQoKSArXG4gICAgICAgICAgICAgICc8L3NwYW4+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuXG4gICAgdmFyIGhhc0xpbmVGZWF0dXJlcyA9IGpzb24uZmVhdHVyZXMuc29tZShmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBmZWF0dXJlLmdlb21ldHJ5ICYmXG4gICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xpbmUnKSA+IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGdlb0pzb25PcHRpb25zLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgICAgaWYgKGNvbG9yS2V5V2lkZ2V0KSB7XG4gICAgICAgIGpzb24uZmVhdHVyZXMgPSBqc29uLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiBiLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdLmxvY2FsZUNvbXBhcmUoXG4gICAgICAgICAgICBhLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB2YXIgZ2VvSnNvbiA9IEwuZ2VvSnNvbihqc29uLCBvcHRpb24pXG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFoYXNMaW5lRmVhdHVyZXMgJiYgaW5kZXggJSAyID09PSAwKSB8fFxuICAgICAgICBoYXNMaW5lRmVhdHVyZXMgfHxcbiAgICAgICAgbWFwLmdlb2pzb25vcHRpb25zXG4gICAgICApIHtcbiAgICAgICAgbWFwLmdyb3Vwc1tpXS5hZGRMYXllcihnZW9Kc29uKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAobWFwLmdyb3Vwc1tpXS5nZXRMYXllcnMoKS5sZW5ndGgpIHtcbiAgICAgIG1hcC5sZWFmbGV0LmFkZExheWVyKG1hcC5ncm91cHNbaV0pXG4gICAgICBtYXAuZ3JvdXBzW2ldLm9uKCdjbHVzdGVyY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGhhbmRsZUNsdXN0ZXJDbGljayhlLCBtYXAsIGkpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2x1c3RlckNsaWNrKGUsIG1hcCwgaSkge1xuICBtYXAubGVhZmxldC5fbGF5ZXJzW2UubGF5ZXIuX2xlYWZsZXRfaWRdLnNwaWRlcmZ5KClcblxuICBPYmplY3Qua2V5cyhtYXAubGVhZmxldC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGxheWVyLCBpKSB7XG4gICAgaWYgKHBhcnNlSW50KGxheWVyLCAxMCkgIT09IGUubGF5ZXIuX2xlYWZsZXRfaWQpIHtcbiAgICAgIGlmIChtYXAubGVhZmxldC5fbGF5ZXJzW2xheWVyXS51bnNwaWRlcmZ5KVxuICAgICAgICBtYXAubGVhZmxldC5fbGF5ZXJzW2xheWVyXS51bnNwaWRlcmZ5KClcbiAgICB9XG4gIH0pXG4gIHZhciBpc1NwaWRlcmZpZWQgPSBmYWxzZVxuICBPYmplY3QudmFsdWVzKG1hcC5ncm91cHNbaV0uX2ZlYXR1cmVHcm91cC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICBpZiAodi5fZ3JvdXAgJiYgdi5fZ3JvdXAuX3NwaWRlcmZpZWQpIGlzU3BpZGVyZmllZCA9IHRydWVcbiAgfSlcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubGVhZmxldC1tYXJrZXItaWNvbicpKS5mb3JFYWNoKFxuICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiAoZC5zdHlsZS5vcGFjaXR5ID0gaXNTcGlkZXJmaWVkID8gMC4zMyA6IDEpXG4gICAgfVxuICApXG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmxlYWZsZXQtbWFya2VyLWljb24nKSkuZm9yRWFjaChcbiAgICBmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgIH1cbiAgKVxuICBPYmplY3QudmFsdWVzKG1hcC5ncm91cHNbaV0uX2ZlYXR1cmVHcm91cC5fbGF5ZXJzKS5maWx0ZXIoZnVuY3Rpb24odikge1xuICAgIGUubGF5ZXJcbiAgICAgIC5nZXRBbGxDaGlsZE1hcmtlcnMoKVxuICAgICAgLm1hcChmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiBtLmdldEVsZW1lbnQoKVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gbVxuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIChtLnN0eWxlLm9wYWNpdHkgPSAxKVxuICAgICAgfSlcbiAgfSlcbn1cbiIsImltcG9ydCB7IGNvbnZlcnRUeXBlLCBjcmVhdGVDb2xvclNjYWxlIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW5ndWFnZURhdGEoZGF0YSkge1xuICB2YXIgbGFuZ3VhZ2VEYXRhID0ge31cbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgIHZhciBrZXlcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCBpKSB7XG4gICAgICBpZiAoY29sdW1uLmluZGV4T2YoJ2dzeCQnKSA+IC0xKSB7XG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnJlcGxhY2UoJ2dzeCQnLCAnJylcblxuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gJ2VuJykge1xuICAgICAgICAgIGtleSA9IHJvd1tjb2x1bW5dWyckdCddXG4gICAgICAgICAgbGFuZ3VhZ2VEYXRhW2tleV0gPSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09IGxhbmcpIHtcbiAgICAgICAgICBsYW5ndWFnZURhdGFba2V5XSA9IHJvd1tjb2x1bW5dWyckdCddXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICByZXR1cm4gbGFuZ3VhZ2VEYXRhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxlZ2VuZERhdGEob3B0aW9ucywganNvbiwgc3R5bGUpIHtcbiAgdmFyIGNvbG9yU2NhbGUgPSBjcmVhdGVDb2xvclNjYWxlKGpzb24ubGVuZ3RoKVxuICB2YXIgbGVnZW5kSXRlbXMgPSBbXVxuICBqc29uLmZvckVhY2goZnVuY3Rpb24ocm93LCB4KSB7XG4gICAgdmFyIGRhdGEgPSB7fVxuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2x1bW4sIHkpIHtcbiAgICAgIGlmIChjb2x1bW4uaW5kZXhPZignZ3N4JCcpID4gLTEpIHtcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4ucmVwbGFjZSgnZ3N4JCcsICcnKVxuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSAnbGFiZWwnKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHJvd1tjb2x1bW5dWyckdCddLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICBkYXRhLmtleSA9IGtleVxuICAgICAgICAgIGRhdGEubGFiZWwgPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgMF1dWyckdCddXG4gICAgICAgICAgZGF0YS52YWx1ZSA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAxXV1bJyR0J11cbiAgICAgICAgICBkYXRhLmdyb3VwID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDJdXVsnJHQnXSlcbiAgICAgICAgICBkYXRhLnNlbGVjdGVkID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDNdXVsnJHQnXSlcbiAgICAgICAgICB2YXIgY29sb3JWYWwgPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNF1dWyckdCddXG4gICAgICAgICAgZGF0YS5mb3JtID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDVdXVsnJHQnXVxuICAgICAgICAgIGRhdGEuY29sb3IgPSBjb2xvclZhbFxuICAgICAgICAgICAgPyBjb2xvclZhbFxuICAgICAgICAgICAgOiBkYXRhLmZvcm0gPT09ICdsaW5lJ1xuICAgICAgICAgICAgICA/IGRlZmF1bHRDb2xvclxuICAgICAgICAgICAgICA6IGNvbG9yU2NhbGVbeF1cbiAgICAgICAgICBkYXRhLmljb24gPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNl1dWyckdCddXG4gICAgICAgICAgZGF0YS5wYXR0ZXJuID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDddXVsnJHQnXS5zcGxpdCgnLCcpXG5cbiAgICAgICAgICBpZiAob3B0aW9ucy50cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIGRhdGEubGFiZWwgPSBvcHRpb25zLnRyYW5zbGF0aW9uc1tkYXRhLmxhYmVsXVxuICAgICAgICAgICAgZGF0YS5ncm91cCA9IG9wdGlvbnMudHJhbnNsYXRpb25zW2RhdGEuZ3JvdXBdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVnZW5kSXRlbXMucHVzaChkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIGxlZ2VuZEl0ZW1zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1ldGFEYXRhKGpzb24pIHtcbiAgdmFyIGRhdGEgPSB7fVxuICBqc29uLmZvckVhY2goZnVuY3Rpb24ocm93LCB4KSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgeSkge1xuICAgICAgaWYgKGNvbHVtbi5pbmRleE9mKCdnc3gkJykgPiAtMSkge1xuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5yZXBsYWNlKCdnc3gkJywgJycpXG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgICB2YXIga2V5ID0gcm93W2NvbHVtbl1bJyR0J10udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKVxuICAgICAgICAgIGRhdGFba2V5XSA9IGRhdGFba2V5XSB8fCB7fVxuICAgICAgICAgIGRhdGFba2V5XSA9IGNvbnZlcnRUeXBlKHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAxXV1bJyR0J10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VXaWRnZXREYXRhKG1ldGFEYXRhKSB7XG4gIHZhciB3aWRnZXRzID0gW11cblxuICBmdW5jdGlvbiBwcm9jZXNzKGssIGluZGV4LCBwcm9wZXJ0eSkge1xuICAgIGlmIChrLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwcm9wZXJ0eSkgPiAtMSlcbiAgICAgIHdpZGdldHNbaW5kZXggLSAxXVtwcm9wZXJ0eV0gPSBjb252ZXJ0VHlwZShtZXRhRGF0YVtrXSlcbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0gW1xuICAgICdpbnB1dCcsXG4gICAgJ2ZpZWxkJyxcbiAgICAnZ3JvdXBpbmcnLFxuICAgICdpbnN0cnVjdGlvbnMnLFxuICAgICdtYXhpbXVtJyxcbiAgICAndHlwZScsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3N0eWxlJ1xuICBdXG4gIE9iamVjdC5rZXlzKG1ldGFEYXRhKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuIGsudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aWRnZXQnKSA+IC0xXG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIgaW5kZXggPSBrLm1hdGNoKC9cXGQrLylbMF1cbiAgICAgIHdpZGdldHNbaW5kZXggLSAxXSA9IHdpZGdldHNbaW5kZXggLSAxXSB8fCB7fVxuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgICAgIHByb2Nlc3MoaywgaW5kZXgsIHByb3BlcnR5KVxuICAgICAgfSlcbiAgICB9KVxuICB3aWRnZXRzLmZvckVhY2goZnVuY3Rpb24odywgaSkge1xuICAgIHcuZmllbGQgPSB3LmZpZWxkLnJlcGxhY2UoLyAvZywgJ18nKVxuICAgIHcuaWQgPSBpXG4gIH0pXG4gIHJldHVybiB3aWRnZXRzXG59XG4iLCJ2YXIgbWFwSWQgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbU1hcChjb250YWluZXIsIHByb3BlcnRpZXMpIHtcbiAgdGhpcy5pZCA9IG1hcElkKytcbiAgdGhpcy5maWx0ZXJzID0gW11cbiAgdGhpcy5ncm91cHMgPSBbXVxuICB0aGlzLmpzb24gPSBbXVxuICB0aGlzLmxlYWZsZXRcblxuICB2YXIgX3RoaXMgPSB0aGlzXG5cbiAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIF90aGlzW3Byb3BlcnR5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnJyldID0gcHJvcGVydGllc1twcm9wZXJ0eV1cbiAgfSlcblxuICBpZiAoX3RoaXMudHJhbnNsYXRpb25zKSB7XG4gICAgd2luZG93LnRyYW5zbGF0aW9ucyA9IF90aGlzLnRyYW5zbGF0aW9uc1xuICB9XG5cbiAgX3RoaXMucG9wdXBjb250ZW50ID1cbiAgICBfdGhpcy5wb3B1cGNvbnRlbnQgJiYgdHlwZW9mIF90aGlzLnBvcHVwY29udGVudCA9PT0gJ3N0cmluZydcbiAgICAgID8gX3RoaXMucG9wdXBjb250ZW50LnNwbGl0KCcsJylcbiAgICAgIDogX3RoaXMucG9wdXBjb250ZW50ICYmIHRoaXMucG9wdXBjb250ZW50ID09PSAnb2JqZWN0J1xuICAgICAgICA/IF90aGlzLnBvcHVwY29udGVudFxuICAgICAgICA6IFtdXG4gIF90aGlzLnBvcHVwaGVhZGVycyA9XG4gICAgX3RoaXMucG9wdXBoZWFkZXJzICYmIHR5cGVvZiBfdGhpcy5wb3B1cGhlYWRlcnMgPT09ICdzdHJpbmcnXG4gICAgICA/IF90aGlzLnBvcHVwaGVhZGVycy5zcGxpdCgnLCcpXG4gICAgICA6IF90aGlzLnBvcHVwaGVhZGVycyAmJiBfdGhpcy5wb3B1cGhlYWRlcnMgPT09ICdvYmplY3QnXG4gICAgICAgID8gX3RoaXMucG9wdXBoZWFkZXJzXG4gICAgICAgIDogW11cbiAgQ3VzdG9tTWFwLmFsbCA9IEN1c3RvbU1hcC5hbGwgfHwgW11cbiAgQ3VzdG9tTWFwLmFsbC5wdXNoKHRoaXMpXG5cbiAgX3RoaXMucmVzZXRGaWx0ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMuZmlsdGVycyA9IFtdXG4gIH1cblxuICBfdGhpcy5yZW1vdmVHcm91cHMgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcy5ncm91cHMuZm9yRWFjaChmdW5jdGlvbihncm91cCkge1xuICAgICAgX3RoaXMubGVhZmxldC5yZW1vdmVMYXllcihncm91cClcbiAgICB9KVxuXG4gICAgX3RoaXMuZ3JvdXBzID0gW11cbiAgfVxuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMubGVhZmxldCA9IEwubWFwKGNvbnRhaW5lciwge1xuICAgICAgbWluWm9vbTogX3RoaXMubWluem9vbSB8fCBudWxsLFxuICAgICAgbWF4Wm9vbTogX3RoaXMubWF4em9vbSB8fCAyMCxcbiAgICAgIG1heEJvdW5kczogX3RoaXMubWF4Ym91bmRzIHx8IFtfdGhpcy5zd2JvdW5kcywgX3RoaXMubmVib3VuZHNdLFxuICAgICAgc2Nyb2xsV2hlZWxab29tOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgIHpvb21Db250cm9sOlxuICAgICAgICAhX3RoaXMuaGFzT3duUHJvcGVydHkoJ3pvb21zbGlkZXInKSB8fCBfdGhpcy56b29tc2xpZGVyID8gZmFsc2UgOiB0cnVlLFxuICAgICAgYXR0cmlidXRpb25Db250cm9sOiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAoX3RoaXMubG9hZGV2ZW50KSBfdGhpcy5sZWFmbGV0Lm9uKCdsb2FkJywgX3RoaXMubG9hZGV2ZW50KVxuICAgIGlmIChfdGhpcy5hZGRldmVudCkgX3RoaXMubGVhZmxldC5vbignbGF5ZXJhZGQnLCBfdGhpcy5hZGRldmVudClcbiAgICB0aGlzLmxlYWZsZXQuc2V0VmlldyhfdGhpcy5jZW50ZXIsIF90aGlzLnpvb20gfHwgMilcbiAgICBMLnRpbGVMYXllcihcbiAgICAgICdodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9pbGFibWVkaWEvJyArXG4gICAgICAgIF90aGlzLm1hcGJveHN0eWxlICtcbiAgICAgICAgJy90aWxlcy8yNTYve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYVd4aFltMWxaR2xoSWl3aVlTSTZJbU5wYkhZeWNYWjJiVEF4YWpaMWMydHpkV1UxYjNneWRuWWlmUS5BSHhsOHBQWnNqc3Fvejk1LTYwNG53JyxcbiAgICAgIHt9XG4gICAgKS5hZGRUbyhfdGhpcy5sZWFmbGV0KVxuXG4gICAgaWYgKCFfdGhpcy5oYXNPd25Qcm9wZXJ0eSgnem9vbXNsaWRlcicpIHx8IF90aGlzLnpvb21zbGlkZXIpIHtcbiAgICAgIEwuY29udHJvbC56b29tc2xpZGVyKCkuYWRkVG8oX3RoaXMubGVhZmxldClcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMuZnVsbHNjcmVlbikge1xuICAgICAgd2luZG93LmZ1bGxzY3JlZW4gPSBuZXcgTC5Db250cm9sLkZ1bGxzY3JlZW4oKVxuXG4gICAgICBfdGhpcy5sZWFmbGV0LmFkZENvbnRyb2wod2luZG93LmZ1bGxzY3JlZW4pXG4gICAgfVxuXG4gICAgTC5jb250cm9sXG4gICAgICAuYXR0cmlidXRpb24oe1xuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbWxlZnQnXG4gICAgICB9KVxuICAgICAgLnNldFByZWZpeChfdGhpcy5hdHRyaWJ1dGlvbilcbiAgICAgIC5hZGRUbyhfdGhpcy5sZWFmbGV0KVxuXG4gICAgX3RoaXMucmVzZXRGaWx0ZXJzKClcblxuICAgIHJldHVybiBfdGhpc1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlRG9jdW1lbnROb2RlcyhvcHRpb25zKSB7XG4gIHZhciBuZXdTZWN0aW9uSFRNTCA9ICcnXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8c2VjdGlvbiBpZD1cIicgKyBvcHRpb25zLnNsdWcgKyAnXCI+J1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPGRpdiBpZD1cIicgKyBvcHRpb25zLnNsdWcgKyAnX19tYXBcIiBjbGFzcz1cIm1hcFwiPjwvZGl2PidcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxhc2lkZSBjbGFzcz1cInRvb2xib3hcIj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9IG9wdGlvbnMudGl0bGVcbiAgICA/ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZCBjbGFzcz1cInVpIG1vYmlsZS1vbmx5XCI+PGRpdiBjbGFzcz1cImhhbWJ1cmdlciBtb2JpbGUtb25seVwiPjxkaXYgY2xhc3M9XCJpY29uXCI+IDxzcGFuPjwvc3Bhbj4gPHNwYW4+PC9zcGFuPiA8c3Bhbj48L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz1cIm1lbnUgdHJhbnNsYXRlXCI+PC9kaXY+PC9kaXY+J1xuICAgIDogJydcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxkaXYgY2xhc3M9XCJib3hcIj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9XG4gICAgb3B0aW9ucy50aXRsZSB8fCBvcHRpb25zLmxvZ28gfHwgb3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgPyAnPGhlYWRlciAgY2xhc3M9XCJ0cmFuc2xhdGVcIj4gPGgxPjxhIHRhcmdldD1cIl9ibGFua1wiIGlkPVwibG9nb1wiPjwvYT48L2gxPiAgPHAgY2xhc3M9XCJ0cmFuc2xhdGVcIj48L3A+PC9oZWFkZXI+J1xuICAgICAgOiAnJ1xuICBuZXdTZWN0aW9uSFRNTCArPVxuICAgIChvcHRpb25zLmluc3RydWN0aW9uc1xuICAgICAgPyAnPHAgY2xhc3M9XCJ0cmFuc2xhdGVcIj4nICsgb3B0aW9ucy5pbnN0cnVjdGlvbnMgKyAnPC9wPidcbiAgICAgIDogJycpICtcbiAgICAnPGRpdiBpZD1cImNvbnRyb2xzXCI+PGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PjwvZGl2Pjxmb290ZXI+PGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PjwvZm9vdGVyPjwvZGl2PjwvYXNpZGU+J1xuICBuZXdTZWN0aW9uSFRNTCArPSBvcHRpb25zLnRpdGxlY2FyZGNvbnRlbnRcbiAgICA/ICc8YnV0dG9uIGlkPVwiJyArXG4gICAgICBvcHRpb25zLnNsdWcgK1xuICAgICAgJ19fYWJvdXRcIiBjbGFzcz1cImFib3V0LXRyaWdnZXIgdHJhbnNsYXRlXCI+QUJPVVQgVEhJUyBNQVA8L2J1dHRvbj4nXG4gICAgOiAnJ1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPC9zZWN0aW9uPidcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gbmV3U2VjdGlvbkhUTUxcblxuICB2YXIgdHJhbnNsYXRhYmxlU3RyaW5nc1xuXG4gIGlmIChsYW5nKSB7XG4gICAgdHJhbnNsYXRhYmxlU3RyaW5ncyA9IE9iamVjdC5rZXlzKG9wdGlvbnMudHJhbnNsYXRpb25zKS5zb3J0KGZ1bmN0aW9uKFxuICAgICAgYSxcbiAgICAgIGJcbiAgICApIHtcbiAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoXG4gICAgfSlcbiAgfVxuICBpZiAob3B0aW9ucy50aXRsZWNhcmRjb250ZW50KSB7XG4gICAgdmFyIG5ld0RpYWxvZ0hUTUwgPSAnJ1xuICAgIG5ld0RpYWxvZ0hUTUwgKz0gJzxkaXYgY2xhc3M9XCJkaWFsb2dcIiBpZD1cIicgKyBvcHRpb25zLnNsdWcgKyAnX19kaWFsb2dcIj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxkaXYgY2xhc3M9XCJkaWFsb2ctb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIiBkYXRhLWExMXktZGlhbG9nLWhpZGU+PC9kaXY+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz1cbiAgICAgICc8ZGlhbG9nIGNsYXNzPVwiZGlhbG9nLWNvbnRlbnRcIiBhcmlhLWxhYmVsbGVkYnk9XCJkaWFsb2dUaXRsZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJkaWFsb2dDb250ZW50XCI+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz1cbiAgICAgICc8YnV0dG9uIGRhdGEtYTExeS1kaWFsb2ctaGlkZSBjbGFzcz1cImRpYWxvZy1jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSB0aGlzIGRpYWxvZyB3aW5kb3dcIj4mdGltZXM7PC9idXR0b24+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz0gb3B0aW9ucy50aXRsZWNhcmR0aXRsZVxuICAgICAgPyAnPGgxIGlkPVwiZGlhbG9nVGl0bGVcIj4nICsgb3B0aW9ucy50aXRsZWNhcmR0aXRsZSArICc8L2gxPidcbiAgICAgIDogJydcbiAgICBuZXdEaWFsb2dIVE1MICs9XG4gICAgICAnPGRpdiBpZD1cImRpYWxvZ0NvbnRlbnRcIj4nICsgb3B0aW9ucy50aXRsZWNhcmRjb250ZW50ICsgJzwvZGl2PidcbiAgICBuZXdEaWFsb2dIVE1MICs9ICc8L2RpYWxvZz4nXG4gICAgbmV3RGlhbG9nSFRNTCArPSAnPC9kaXY+J1xuXG4gICAgaWYgKGxhbmcpIHtcbiAgICAgIHRyYW5zbGF0YWJsZVN0cmluZ3MuZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFxiKCcgKyBSZWdFeHAuZXNjYXBlKHQpICsgJyknLCAnZ2knKVxuICAgICAgICBuZXdEaWFsb2dIVE1MID0gbmV3RGlhbG9nSFRNTC5yZXBsYWNlKHJlLCBvcHRpb25zLnRyYW5zbGF0aW9uc1t0XSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gbmV3RGlhbG9nSFRNTFxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgdmFyIGRpYWxvZ0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5zbHVnICsgJ19fZGlhbG9nJylcbiAgICB2YXIgbWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMuc2x1ZycpXG4gICAgdmFyIGRpYWxvZ1RyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLnNsdWcgKyAnX19hYm91dCcpXG5cbiAgICB2YXIgZGlhbG9nQm94ID0gbmV3IEExMXlEaWFsb2coZGlhbG9nRWwsIG1haW5FbClcbiAgICB2YXIgZGlhbG9nID0gZGlhbG9nQm94LmRpYWxvZ1xuICAgIGRpYWxvZ0JveC5zaG93KClcbiAgICBkaWFsb2dCb3gub24oJ2hpZGUnLCBmdW5jdGlvbihkaWFsb2dFbCkge1xuICAgICAgZGlhbG9nVHJpZ2dlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH0pXG4gICAgZGlhbG9nQm94Lm9uKCdzaG93JywgZnVuY3Rpb24oZGlhbG9nRWwpIHtcbiAgICAgIGRpYWxvZ1RyaWdnZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH0pXG4gICAgZGlhbG9nVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgZGlhbG9nQm94LnNob3coKVxuICAgIH0pXG4gIH1cblxuICBkb2N1bWVudC50aXRsZSA9IG9wdGlvbnMudGl0bGUgKyAnIHwgQ1NJUyAnICsgb3B0aW9ucy5wcm9ncmFtXG4gIHZhciBtZXRhTG9jYWxlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUxvY2FsZU9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6bG9jYWxlJylcbiAgbWV0YUxvY2FsZU9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdlbl9VUycpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUxvY2FsZU9HKVxuICB2YXIgbWV0YVR5cGVPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVHlwZU9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6dHlwZScpXG4gIG1ldGFUeXBlT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ2FydGljbGUnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUeXBlT0cpXG4gIHZhciBtZXRhV2lkdGhPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhV2lkdGhPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmltYWdlOndpZHRoJylcbiAgbWV0YVdpZHRoT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJzIwMDAnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFXaWR0aE9HKVxuICB2YXIgbWV0YUhlaWdodE9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFIZWlnaHRPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmltYWdlOmhlaWdodCcpXG4gIG1ldGFIZWlnaHRPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnMTMzMycpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUhlaWdodE9HKVxuICB2YXIgbWV0YVR3aXR0ZXJDYXJkT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVR3aXR0ZXJDYXJkT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOmNhcmQnKVxuICBtZXRhVHdpdHRlckNhcmRPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnc3VtbWFyeScpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVR3aXR0ZXJDYXJkT0cpXG4gIHZhciBtZXRhVGl0bGVPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVGl0bGVPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOnRpdGxlJylcbiAgbWV0YVRpdGxlT0cuc2V0QXR0cmlidXRlKFxuICAgICdjb250ZW50JyxcbiAgICBvcHRpb25zLnRpdGxlICsgJyB8IENTSVMgJyArIG9wdGlvbnMucHJvZ3JhbVxuICApXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVRpdGxlT0cpXG4gIHZhciBtZXRhVGl0bGVUd2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFUaXRsZVR3aXR0ZXIuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOnRpdGxlJylcbiAgbWV0YVRpdGxlVHdpdHRlci5zZXRBdHRyaWJ1dGUoXG4gICAgJ2NvbnRlbnQnLFxuICAgIG9wdGlvbnMudGl0bGUgKyAnIHwgQ1NJUyAnICsgb3B0aW9ucy5wcm9ncmFtXG4gIClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhVGl0bGVUd2l0dGVyKVxuICB2YXIgbWV0YURlc2NyaXB0aW9uT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YURlc2NyaXB0aW9uT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzpkZXNjcmlwdGlvbicpXG4gIG1ldGFEZXNjcmlwdGlvbk9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuZGVzY3JpcHRpb24pXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YURlc2NyaXB0aW9uT0cpXG4gIHZhciBtZXRhRGVzY3JpcHRpb25Ud2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOmRlc2NyaXB0aW9uJylcbiAgbWV0YURlc2NyaXB0aW9uVHdpdHRlci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBvcHRpb25zLmRlc2NyaXB0aW9uKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIpXG4gIHZhciBtZXRhSW1hZ2VPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhSW1hZ2VPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmltYWdlJylcbiAgbWV0YUltYWdlT0cuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5zY3JlZW5zaG90KVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFJbWFnZU9HKVxuICB2YXIgbWV0YUltYWdlVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhSW1hZ2VUd2l0dGVyLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjppbWFnZScpXG4gIG1ldGFJbWFnZVR3aXR0ZXIuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5zY3JlZW5zaG90KVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFJbWFnZVR3aXR0ZXIpXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXInKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAubWVudScpLmlubmVyVGV4dCA9XG4gICAgICBvcHRpb25zLnRpdGxlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBoMScpLmlubmVySFRNTCArPVxuICAgICAgb3B0aW9ucy50aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBhJ1xuICAgICkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gb3B0aW9ucy5sb2dvID8gJ3VybCgnICsgb3B0aW9ucy5sb2dvICsgJyknIDogJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgYSdcbiAgICApLmhyZWYgPSBvcHRpb25zLndlYnNpdGUgPyBvcHRpb25zLndlYnNpdGUgOiAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBwJ1xuICAgICkuaW5uZXJUZXh0ID0gb3B0aW9ucy5kZXNjcmlwdGlvbiA/IG9wdGlvbnMuZGVzY3JpcHRpb24gOiAnJ1xuICB9XG59XG4iLCJpbXBvcnQgQ3VzdG9tTWFwIGZyb20gJy4vQ3VzdG9tTWFwLmpzJ1xuaW1wb3J0IG1ha2VMYXllcnMgZnJvbSAnLi9tYWtlTGF5ZXJzLmpzJ1xuaW1wb3J0IHsgY29udmVydFR5cGUgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1hcFdpZGdldHNUb1N0YXRlKG9wdGlvbnMsIHdpZGdldENvbnRlbnQpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAubWFwJylcblxuICB2YXIgbWFwID0gbmV3IEN1c3RvbU1hcChjb250YWluZXIsIG9wdGlvbnMpLnJlbmRlcigpXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgdGFibGVzID0gT2JqZWN0LmtleXMob3B0aW9ucykuZmlsdGVyKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiBrLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndGFibGUnKSA+IC0xXG4gICAgfSlcblxuICAgIFByb21pc2UuYWxsKFxuICAgICAgdGFibGVzLm1hcChmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICByZXR1cm4gZmV0Y2goXG4gICAgICAgICAgJ2h0dHBzOi8vY3Npcy5jYXJ0by5jb20vYXBpL3YyL3NxbD9hcGlfa2V5PScgK1xuICAgICAgICAgICAgbWFwLmFwaWtleSArXG4gICAgICAgICAgICAnJmZvcm1hdD1nZW9qc29uJnE9U0VMRUNUJTIwKiUyMEZST00lMjAnICtcbiAgICAgICAgICAgIG9wdGlvbnNbdGFibGVdXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgICByZXNwb25zZXMubWFwKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgLnRoZW4oZnVuY3Rpb24oanNvbnMpIHtcbiAgICAgICAgdmFyIGpzb24gPSBqc29ucy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgZmVhdHVyZXM6IGEuZmVhdHVyZXMuY29uY2F0KGIuZmVhdHVyZXMpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHZhciBjb2xvcktleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgICAgICAgIHJldHVybiB3LnR5cGUgPT09ICdjb2xvcidcbiAgICAgICAgfSlcbiAgICAgICAgbWFwLmpzb24gPSBbanNvbl1cblxuICAgICAgICBpZiAoY29sb3JLZXlXaWRnZXQpIHtcbiAgICAgICAgICBtYXAuanNvbiA9IFtdXG4gICAgICAgICAgdmFyIGZlYXR1cmVHcm91cHMgPSBqc29uLmZlYXR1cmVzLmdyb3VwQnkoXG4gICAgICAgICAgICBjb2xvcktleVdpZGdldC5maWVsZCxcbiAgICAgICAgICAgICdwcm9wZXJ0aWVzJ1xuICAgICAgICAgIClcbiAgICAgICAgICBPYmplY3Qua2V5cyhmZWF0dXJlR3JvdXBzKVxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gZmVhdHVyZUdyb3Vwc1tiXVswXS5wcm9wZXJ0aWVzW1xuICAgICAgICAgICAgICAgIGNvbG9yS2V5V2lkZ2V0LmZpZWxkXG4gICAgICAgICAgICAgIF0ubG9jYWxlQ29tcGFyZShcbiAgICAgICAgICAgICAgICBmZWF0dXJlR3JvdXBzW2FdWzBdLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgbWFwLmpzb24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZUdyb3Vwc1tmZWF0dXJlXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy53aWRnZXRzLmxlbmd0aCkge1xuICAgICAgICAgIG1ha2VMYXllcnMobWFwKVxuICAgICAgICAgIHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgI2NvbnRyb2xzJylcbiAgICAgICAgICBib3guaW5uZXJIVE1MID0gJydcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5pdGlhbGl6ZWQgPSAwXG5cbiAgICAgICAgb3B0aW9ucy53aWRnZXRzLmZvckVhY2goZnVuY3Rpb24odywgeCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjJyArIG9wdGlvbnMuc2x1ZyArICcgLndpZGdldC4nICsgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykgJiYgd2lkZ2V0Q29udGVudFt4XS5vcHRpb25zKSB7XG4gICAgICAgICAgICBuZXcgQ2hvaWNlcyhcbiAgICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcbiAgICAgICAgICAgICAgd2lkZ2V0Q29udGVudFt4XS5vcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWRePVxcJ3NlYXJjaFxcJ10nKSkge1xuICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI3Jlc2V0QnV0dG9uJylcbiAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUmVzZXQoZWxlbWVudCwgbWFwLCB4KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzZWxlY3RzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKVxuICAgICAgICAgIHZhciBjaGVja3MgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ2NoZWNrYm94XFwnXScpXG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciBzZWFyY2ggPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddOm5vdCguY2hvaWNlc19faW5wdXQpJylcbiAgICAgICAgICApXG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwncmFkaW9cXCddJylcbiAgICAgICAgICApXG5cbiAgICAgICAgICB2YXIgaW5wdXRzID0gc2VsZWN0c1xuICAgICAgICAgICAgLmNvbmNhdChjaGVja3MpXG4gICAgICAgICAgICAuY29uY2F0KHNlYXJjaClcbiAgICAgICAgICAgIC5jb25jYXQodG9nZ2xlKVxuXG4gICAgICAgICAgaWYgKCFpbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIG1ha2VMYXllcnMobWFwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQrK1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjb3VudCA9IGlucHV0cy5sZW5ndGhcbiAgICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShcbiAgICAgICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zLndpZGdldHMsXG4gICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICArK2luaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2lkZ2V0cyxcbiAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICsraW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgnY3JlYXRlRXZlbnQnIGluIGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpXG4gICAgICAgICAgICAgIGV2dC5pbml0RXZlbnQoJ2NoYW5nZScsIGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlucHV0LmZpcmVFdmVudCgnb25jaGFuZ2UnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3Lm1hcF9pZCA9IG1hcC5pZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKG1hcC50cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICB2YXIgdHJhbnNsYXRhYmxlTm9kZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYW5zbGF0ZScpXG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciB0cmFuc2xhdGFibGVTdHJpbmdzID0gT2JqZWN0LmtleXMobWFwLnRyYW5zbGF0aW9ucykuc29ydChmdW5jdGlvbihcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICBiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdHJhbnNsYXRhYmxlTm9kZXMuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkge1xuICAgICAgICAgICAgdHJhbnNsYXRhYmxlU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1hcC50cmFuc2xhdGlvbnNbdF0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFxiKCcgKyBSZWdFeHAuZXNjYXBlKHQpICsgJyknLCAnZ2knKVxuICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGVsLmlubmVySFRNTC5yZXBsYWNlKHJlLCBtYXAudHJhbnNsYXRpb25zW3RdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc2V0KGVsZW1lbnQsIG1hcCwgeCkge1xuICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKS52YWx1ZSA9ICcnXG4gIGlmIChtYXAuZ3JvdXBzLmxlbmd0aCkgbWFwLnJlbW92ZUdyb3VwcygpXG5cbiAgbWFwLmZpbHRlcnNbeF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbWFrZUxheWVycyhtYXApXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZShtYXAsIGVsZW1lbnQsIHdpZGdldHMsIHgsIGNvdW50LCBpbml0aWFsaXplZCkge1xuICB2YXIga2V5bGVzc1dpZGdldHMgPSBbJ3RvZ2dsZScsICdzZWFyY2gnXVxuICB2YXIgb3B0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICA/IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5vcHRpb25zKVxuICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJylcbiAgICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKSlcbiAgICAgIDogQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpXG4gIHZhciBzZWxlY3Rpb25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLm9wdGlvbnMpXG4gICAgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKVxuICAgICAgPyBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXScpKVxuICAgICAgOiBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpKVxuICB2YXIgcG9zc2libGVDaGVja3MgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSkubWFwKFxuICAgIGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiBvLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgKVxuXG4gIHZhciBwb3NzaWJsZU9wdGlvbnMsIHBvc3NpYmxlUXVlcmllc1xuICBpZiAoa2V5bGVzc1dpZGdldHMuaW5kZXhPZih3aWRnZXRzW3hdLmlucHV0KSA8IDApIHtcbiAgICBwb3NzaWJsZU9wdGlvbnMgPSB3aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcblxuICAgIHBvc3NpYmxlUXVlcmllcyA9IHBvc3NpYmxlQ2hlY2tzLmNvbmNhdChwb3NzaWJsZU9wdGlvbnMpXG4gIH1cblxuICB2YXIgcXVlcnkgPSBBcnJheS5mcm9tKHNlbGVjdGlvbnMpLm1hcChmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cXCdjaGVja2JveFxcJ10nKVxuICAgICAgPyBvLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgOiBvLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgfSlcblxuICBtYXAuZmlsdGVyc1t3aWRnZXRzW3hdLmlkXSA9XG4gICAgd2lkZ2V0c1t4XS5pbnB1dCA9PT0gJ3RvZ2dsZSdcbiAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICB2YXIgYm9vbCA9IHRydWVcblxuICAgICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnRvZ2dsZSkge1xuICAgICAgICAgIGJvb2wgPSBjb252ZXJ0VHlwZShxdWVyeVswXSkgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib29sID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgIH1cbiAgICAgIDogd2lkZ2V0c1t4XS5maWVsZCA9PT0gJ2FsbCdcbiAgICAgICAgPyBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgdmFyIGJvb2wgPSB0cnVlXG4gICAgICAgICAgdmFyIHdpdGhEaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgdmFyIHdpdGhvdXREaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAubGF0aW5pc2UoKVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2l0aERpYWNyaXRpY3MuaW5kZXhPZihxdWVyeVswXSkgPCAwICYmXG4gICAgICAgICAgICAgIHdpdGhvdXREaWFjcml0aWNzLmluZGV4T2YocXVlcnlbMF0pIDwgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVycykge1xuICAgICAgICAgIHZhciBib29sID0gdHJ1ZVxuICAgICAgICAgIHZhciBmaWVsZCA9IHdpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgICAgICAgID8gd2lkZ2V0c1t4XS5ncm91cGluZ1xuICAgICAgICAgICAgOiB3aWRnZXRzW3hdLmZpZWxkXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NzaWJsZVF1ZXJpZXMuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZmllbGRdLnRvTG93ZXJDYXNlKCkpID5cbiAgICAgICAgICAgICAgICAtMSAmJlxuICAgICAgICAgICAgICBxdWVyeS5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllc1tmaWVsZF0udG9Mb3dlckNhc2UoKSkgPCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBib29sID0gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYm9vbFxuICAgICAgICB9XG5cbiAgaWYgKGluaXRpYWxpemVkID49IGNvdW50KSBtYXAucmVtb3ZlR3JvdXBzKClcbiAgaWYgKHdpZGdldHMubGVuZ3RoID49IHggKyAxICYmIGluaXRpYWxpemVkID49IGNvdW50KSBtYWtlTGF5ZXJzKG1hcClcbn1cbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuaW1wb3J0IG1hcFdpZGdldHNUb1N0YXRlIGZyb20gJy4vbWFwV2lkZ2V0c1RvU3RhdGUuanMnXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBtYWtlRHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuaW1wb3J0IHsgcGFyc2VMZWdlbmREYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xud2luZG93LnN0eWxlS2V5ID0gc3R5bGVLZXlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFrZVdpZGdldHMoanNvbnMsIG9wdGlvbnMsIGJveENvbnRlbnQpIHtcbiAgdmFyIHdpZGdldENvbnRlbnQgPSBbXVxuICBvcHRpb25zLndpZGdldHMuZm9yRWFjaChmdW5jdGlvbih3LCB4KSB7XG4gICAgaWYgKCF3Lmhhc093blByb3BlcnR5KCdpZCcpKSB3LmlkID0geFxuICAgIHZhciBsZWdlbmREYXRhID0gdy5yZWZlcmVuY2VcbiAgICAgID8gcGFyc2VMZWdlbmREYXRhKG9wdGlvbnMsIGpzb25zW3hdLmZlZWQuZW50cnksIHcudHlwZSlcbiAgICAgIDogdy5rZXlzXG4gICAgb3B0aW9ucy53aWRnZXRzW3hdLmtleXMgPSBsZWdlbmREYXRhXG4gICAgd2lkZ2V0Q29udGVudC5wdXNoKGZvcm1hdFdpZGdldHMob3B0aW9ucywgeCkpXG4gICAgYm94Q29udGVudCArPVxuICAgICAgJzxzZWN0aW9uIGNsYXNzPVwid2lkZ2V0ICcgK1xuICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICdcIj48aDMgY2xhc3M9XCJ0cmFuc2xhdGVcIj4nICtcbiAgICAgIHdpZGdldENvbnRlbnRbeF0udGl0bGUgK1xuICAgICAgJzwvaDM+J1xuICAgIGJveENvbnRlbnQgKz0gd2lkZ2V0Q29udGVudFt4XS5ub2Rlc1xuICAgIGJveENvbnRlbnQgKz0gJzwvc2VjdGlvbj4nXG4gICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgIGJveC5pbm5lckhUTUwgPSBib3hDb250ZW50XG4gICAgdmFyIGxhYmVsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAuaXRlbVRleHQnKVxuICAgIEFycmF5LmZyb20obGFiZWxUZXh0KS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW1UZXh0KSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gaXRlbVRleHQub2Zmc2V0SGVpZ2h0XG4gICAgICB2YXIgZm9udFNpemUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtVGV4dClbJ2ZvbnQtc2l6ZSddXG4gICAgICB2YXIgb2Zmc2V0ID0gaGVpZ2h0IC8gcGFyc2VJbnQoZm9udFNpemUucmVwbGFjZSgncHgnLCAnJyksIDEwKVxuICAgICAgaXRlbVRleHQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJyArIG9mZnNldCAqIDEwICsgJyUpJ1xuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIGF3YWl0IG1hcFdpZGdldHNUb1N0YXRlKG9wdGlvbnMsIHdpZGdldENvbnRlbnQpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdpZGdldHMob3B0aW9ucywgeCkge1xuICB2YXIgd2lkZ2V0Tm9kZXMgPSAnJ1xuICB2YXIgZHJvcGRvd25PcHRpb25zXG5cbiAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0uaW5wdXQpIHtcbiAgY2FzZSAndG9nZ2xlJzpcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPGxhYmVsIGZvcj1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIGNsYXNzPVwidHJhbnNsYXRlXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCInICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIGlkPVwidG9nZ2xlXycgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgIHZhbHVlPVwiMVwiIGNoZWNrZWQ+U2hvdzwvbGFiZWw+J1xuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8bGFiZWwgZm9yPVwiJHRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIGNsYXNzPVwidHJhbnNsYXRlXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCInICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIGlkPVwidG9nZ2xlXycgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgdmFsdWU9XCIwXCIgPkhpZGU8L2xhYmVsPidcbiAgICBicmVha1xuXG4gIGNhc2UgJ3NlYXJjaCc6XG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoXycgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgcGxhY2Vob2xkZXI9XCInICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmluc3RydWN0aW9ucyArXG4gICAgICAgICdcIiBzaXplPVwiMTBcIiAvPidcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJyZXNldEJ1dHRvblwiIGNsYXNzPVwidHJhbnNsYXRlXCI+UmVzZXQ8L2J1dHRvbj4nXG4gICAgYnJlYWtcblxuICBjYXNlICdkcm9wZG93bic6XG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxzZWxlY3QgaWQ9XCJkcm9wZG93bl8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHBsYWNlaG9sZGVyPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnN0cnVjdGlvbnMgK1xuICAgICAgICAnXCIgbXVsdGlwbGU9XCJcIj48L3NlbGVjdD4nXG4gICAgZHJvcGRvd25PcHRpb25zID0gbWFrZURyb3Bkb3duT3B0aW9ucyhvcHRpb25zLCB4KVxuICAgIGJyZWFrXG5cbiAgY2FzZSAnY2hlY2tib3gnOlxuICAgIHdpZGdldE5vZGVzICs9ICc8dWw+J1xuICAgIHZhciBrZXlTdHlsZVxuICAgIHZhciBsZWdlbmRJdGVtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5ncm91cGluZ1xuICAgICAgPyBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdncm91cCcpXG4gICAgICA6IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2xhYmVsJylcbiAgICBPYmplY3Qua2V5cyhsZWdlbmRJdGVtcykuZm9yRWFjaChmdW5jdGlvbihncm91cCwgaSkge1xuICAgICAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0udHlwZSkge1xuICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgIHZhciBmb3JtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgICAgcmV0dXJuIGYudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICBncm91cDogbGVnZW5kSXRlbXNbZ3JvdXBdLFxuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgIG1hcDogb3B0aW9ucyxcbiAgICAgICAgICBncm91cDogbGVnZW5kSXRlbXNbZ3JvdXBdXG4gICAgICAgIH1cbiAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICAgJzxsaT48bGFiZWwgZm9yPVwiJyArXG4gICAgICAgICAgZ3JvdXAgK1xuICAgICAgICAgICdcIj48aW5wdXQgY2xhc3M9XCJ3aWRnZXQgJyArXG4gICAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmlucHV0ICtcbiAgICAgICAgICAnXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIicgK1xuICAgICAgICAgIChvcHRpb25zLndpZGdldHNbeF0uZ3JvdXBpbmcgPyBncm91cCA6IGxlZ2VuZEl0ZW1zW2dyb3VwXVswXS52YWx1ZSkgK1xuICAgICAgICAgICdcIiBpZD1cIicgK1xuICAgICAgICAgIGdyb3VwICtcbiAgICAgICAgICAnXCIgJyArXG4gICAgICAgICAgKGxlZ2VuZEl0ZW1zW2dyb3VwXVswXS5zZWxlY3RlZCA/ICdjaGVja2VkJyA6ICcnKSArXG4gICAgICAgICAgJyA+PHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgICBrZXlTdHlsZS5jbGFzcyArXG4gICAgICAgICAgJ0tleVwiICcgK1xuICAgICAgICAgICdzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICtcbiAgICAgICAgICBrZXlTdHlsZS5zdmcgK1xuICAgICAgICAgICdcIik+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaXRlbVRleHRcIj4nICtcbiAgICAgICAgICBjYXBpdGFsaXplKGdyb3VwKSArXG4gICAgICAgICAgJzwvc3Bhbj48L2xhYmVsPjwvbGk+J1xuICAgIH0pXG4gICAgd2lkZ2V0Tm9kZXMgKz0gJzwvdWw+J1xuICAgIGJyZWFrXG5cbiAgZGVmYXVsdDpcbiAgICB3aWRnZXROb2RlcyArPSAnPHVsPidcbiAgICB2YXIga2V5U3R5bGVcbiAgICB2YXIgbGVnZW5kSXRlbXMgPSBvcHRpb25zLndpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgID8gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnZ3JvdXAnKVxuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdsYWJlbCcpXG4gICAgT2JqZWN0LmtleXMobGVnZW5kSXRlbXMpLmZvckVhY2goZnVuY3Rpb24oZ3JvdXAsIGkpIHtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXSxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICBtYXA6IG9wdGlvbnMsXG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXVxuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAgICc8bGk+PHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgICBrZXlTdHlsZS5jbGFzcyArXG4gICAgICAgICAgJ0tleVwiICcgK1xuICAgICAgICAgICdzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICtcbiAgICAgICAgICBrZXlTdHlsZS5zdmcgK1xuICAgICAgICAgICdcIik+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaXRlbVRleHRcIj4nICtcbiAgICAgICAgICBjYXBpdGFsaXplKGdyb3VwKSArXG4gICAgICAgICAgJzwvc3Bhbj48L2xpPidcbiAgICB9KVxuICAgIHdpZGdldE5vZGVzICs9ICc8L3VsPidcbiAgICBicmVha1xuICB9XG5cbiAgdmFyIHdpZGdldFRpdGxlID1cbiAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgPT09ICdhbGwnXG4gICAgICA/ICdTZWFyY2gnXG4gICAgICA6IG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZC5yZXBsYWNlKC9fL2csICcgJylcbiAgcmV0dXJuIHtcbiAgICBub2Rlczogd2lkZ2V0Tm9kZXMsXG4gICAgdGl0bGU6IHdpZGdldFRpdGxlLFxuICAgIG9wdGlvbnM6IGRyb3Bkb3duT3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZU1ldGFEYXRhLCBwYXJzZVdpZGdldERhdGEgfSBmcm9tICcuL3BhcnNlcnMuanMnXG5pbXBvcnQgbWFrZVdpZGdldHMgZnJvbSAnLi9tYWtlV2lkZ2V0cy5qcydcbmltcG9ydCBtYWtlRG9jdW1lbnROb2RlcyBmcm9tICcuL21ha2VEb2N1bWVudE5vZGVzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpbml0V2l0aFNwcmVhZHNoZWV0KFxuICBkYXRhVVJMLFxuICBvcHRpb25zLFxuICB0cmFuc2xhdGlvbnNcbikge1xuICB2YXIgbWFwXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBkYXRhVVJMICsgb3B0aW9ucy5nb29nbGVTaGVldCArICcvJyArIDIgKyAnL3B1YmxpYy92YWx1ZXM/YWx0PWpzb24nXG4gICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgdmFyIG1ldGFEYXRhID0gcGFyc2VNZXRhRGF0YShqc29uLmZlZWQuZW50cnkpXG4gICAgICAgIHZhciB3aWRnZXRzID0gcGFyc2VXaWRnZXREYXRhKG1ldGFEYXRhKVxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHt9XG4gICAgICAgIE9iamVjdC5rZXlzKG1ldGFEYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzW2RhdGFdID0gbWV0YURhdGFbZGF0YV1cbiAgICAgICAgfSlcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgcHJvcGVydGllc1tkYXRhXSA9IG9wdGlvbnNbZGF0YV1cbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgdHdvRF9wcm9wZXJpdGVzID0gW1xuICAgICAgICAgIHsgbmFtZTogJ2NlbnRlcicsIGRlZmF1bHQ6IFswLCAwXSB9LFxuICAgICAgICAgIHsgbmFtZTogJ2ljb25zaXplJywgZGVmYXVsdDogWzIwLCAyMF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICdpY29uYW5jaG9yJywgZGVmYXVsdDogWzUsIDVdIH0sXG4gICAgICAgICAgeyBuYW1lOiAnc3dib3VuZHMnLCBkZWZhdWx0OiBbLTkwLCAtMTgwXSB9LFxuICAgICAgICAgIHsgbmFtZTogJ25lYm91bmRzJywgZGVmYXVsdDogWzkwLCAxODBdIH1cbiAgICAgICAgXVxuXG4gICAgICAgIHR3b0RfcHJvcGVyaXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgICAgICAgcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXSA9XG4gICAgICAgICAgICB0eXBlb2YgcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyBwcm9wZXJ0aWVzW3Byb3BlcnR5Lm5hbWVdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodiwgMTApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXVxuICAgICAgICAgICAgICAgID8gcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXVxuICAgICAgICAgICAgICAgIDogcHJvcGVydHkuZGVmYXVsdFxuICAgICAgICB9KVxuICAgICAgICBwcm9wZXJ0aWVzLnNsdWcgPSBwcm9wZXJ0aWVzLm1hcElELnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgICAgIHByb3BlcnRpZXMudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zXG4gICAgICAgIHByb3BlcnRpZXMud2lkZ2V0cyA9IHdpZGdldHNcbiAgICAgICAgbWFrZURvY3VtZW50Tm9kZXMocHJvcGVydGllcylcbiAgICAgICAgdmFyIHJlZmVyZW5jZVNoZWV0cyA9IHdpZGdldHMuZmlsdGVyKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICByZXR1cm4gdy5yZWZlcmVuY2VcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAocmVmZXJlbmNlU2hlZXRzKSB7XG4gICAgICAgICAgdmFyIGJveENvbnRlbnQgPSAnJ1xuICAgICAgICAgIHZhciByZWZlcmVuY2VTaGVldFVSTFMgPSB3aWRnZXRzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICAgICAgaWYgKHcucmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIGRhdGFVUkwgK1xuICAgICAgICAgICAgICAgICAgb3B0aW9ucy5nb29nbGVTaGVldCArXG4gICAgICAgICAgICAgICAgICAnLycgK1xuICAgICAgICAgICAgICAgICAgdy5yZWZlcmVuY2UgK1xuICAgICAgICAgICAgICAgICAgJy9wdWJsaWMvdmFsdWVzP2FsdD1qc29uJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odSkge1xuICAgICAgICAgICAgICByZXR1cm4gdVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIHJlZmVyZW5jZVNoZWV0VVJMUy5tYXAoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmZXRjaCh1cmwpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlcykge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzLm1hcChmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihhc3luYyBmdW5jdGlvbihqc29ucykge1xuICAgICAgICAgICAgICBtYXAgPSBhd2FpdCBtYWtlV2lkZ2V0cyhqc29ucywgcHJvcGVydGllcywgYm94Q29udGVudClcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5mb290ZXIgJiYgcHJvcGVydGllcy5mb290ZXIudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvb3Rlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgICAgICAgICAgICAgIGZvb3Rlck5vZGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuZm9vdGVyICsgJyAgPGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PidcbiAgICAgICAgICAgICAgICB2YXIgcGVuVWx0aW1hdGVOb2RlID1cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICcjJyArIHByb3BlcnRpZXMuc2x1ZyArICcgI2NvbnRyb2xzJ1xuICAgICAgICAgICAgICAgICAgKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb3BlcnRpZXMuc2x1ZyArICdoZWFkZXInKVxuICAgICAgICAgICAgICAgIHBlblVsdGltYXRlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgIGZvb3Rlck5vZGUsXG4gICAgICAgICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICAgICAgICAgIG1ha2VMYXllcnMobWFwKVxuICAgICAgICAgIHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgI2NvbnRyb2xzJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmZvb3RlciAmJiBwcm9wZXJ0aWVzLmZvb3Rlci50cmltKCkpIHtcbiAgICAgICAgICB2YXIgZm9vdGVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgICAgICAgZm9vdGVyTm9kZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgcHJvcGVydGllcy5mb290ZXIgKyAnICA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+J1xuICAgICAgICAgIHZhciBwZW5VbHRpbWF0ZU5vZGUgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnICNjb250cm9scycpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb3BlcnRpZXMuc2x1ZyArICdoZWFkZXInKVxuICAgICAgICAgIHBlblVsdGltYXRlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIGZvb3Rlck5vZGUsXG4gICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUubmV4dFNpYmxpbmdcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTQhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTQhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgbWFrZURvY3VtZW50Tm9kZXMgZnJvbSAnLi9tYWtlRG9jdW1lbnROb2Rlcy5qcydcbmltcG9ydCBtYWtlTGF5ZXJzIGZyb20gJy4vbWFrZUxheWVycy5qcydcbmltcG9ydCBtYWtlV2lkZ2V0cyBmcm9tICcuL21ha2VXaWRnZXRzLmpzJ1xuaW1wb3J0IEN1c3RvbU1hcCBmcm9tICcuL0N1c3RvbU1hcC5qcydcbndpbmRvdy5tYWtlTGF5ZXJzID0gbWFrZUxheWVyc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdFdpdGhvdXRTcHJlYWRzaGVldChvcHRpb25zLCB0cmFuc2xhdGlvbnMpIHtcbiAgdmFyIHR3b0RfcHJvcGVyaXRlcyA9IFtcbiAgICB7IG5hbWU6ICdjZW50ZXInLCBkZWZhdWx0OiBbMCwgMF0gfSxcbiAgICB7IG5hbWU6ICdpY29uc2l6ZScsIGRlZmF1bHQ6IFsyMCwgMjBdIH0sXG4gICAgeyBuYW1lOiAnaWNvbmFuY2hvcicsIGRlZmF1bHQ6IFs1LCA1XSB9LFxuICAgIHsgbmFtZTogJ3N3Ym91bmRzJywgZGVmYXVsdDogWy05MCwgLTE4MF0gfSxcbiAgICB7IG5hbWU6ICduZWJvdW5kcycsIGRlZmF1bHQ6IFs5MCwgMTgwXSB9XG4gIF1cblxuICB0d29EX3Byb3Blcml0ZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIG9wdGlvbnNbcHJvcGVydHkubmFtZV0gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbcHJvcGVydHkubmFtZV0gPT09ICdzdHJpbmcnXG4gICAgICAgID8gb3B0aW9uc1twcm9wZXJ0eS5uYW1lXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYsIDEwKVxuICAgICAgICB9KVxuICAgICAgICA6IG9wdGlvbnNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICA/IG9wdGlvbnNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICA6IHByb3BlcnR5LmRlZmF1bHRcbiAgfSlcblxuICBvcHRpb25zLnNsdWcgPSBvcHRpb25zLm1hcElELnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpXG4gIG9wdGlvbnMudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zXG4gIG1ha2VEb2N1bWVudE5vZGVzKG9wdGlvbnMpXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICdfX21hcC5tYXAnKVxuXG4gIGlmIChvcHRpb25zLmZvcm1hdFRvb2xib3gpIHtcbiAgICB2YXIgbWFwID0gbmV3IEN1c3RvbU1hcChjb250YWluZXIsIG9wdGlvbnMpLnJlbmRlcigpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmV0dXJuIGZldGNoKFxuICAgICAgICAnaHR0cHM6Ly9jc2lzLmNhcnRvLmNvbS9hcGkvdjIvc3FsP2FwaV9rZXk9JyArXG4gICAgICAgICAgbWFwLmFwaWtleSArXG4gICAgICAgICAgJyZmb3JtYXQ9Z2VvanNvbiZxPVNFTEVDVCUyMColMjBGUk9NJTIwJyArXG4gICAgICAgICAgbWFwLnRhYmxlXG4gICAgICApXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICAgIG1hcC5qc29uID0gW2pzb25dXG4gICAgICAgICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgICAgICAgIG1hcC5mb3JtYXR0b29sYm94KGJveClcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgICAgfSlcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJldHVybiBmZXRjaChcbiAgICAgICAgJ2h0dHBzOi8vY3Npcy5jYXJ0by5jb20vYXBpL3YyL3NxbD9hcGlfa2V5PScgK1xuICAgICAgICAgIChvcHRpb25zLmFwaWtleSB8fCBvcHRpb25zLmFwaUtleSB8fCBvcHRpb25zWydhcGkga2V5J10pICtcbiAgICAgICAgICAnJmZvcm1hdD1nZW9qc29uJnE9U0VMRUNUJTIwKiUyMEZST00lMjAnICtcbiAgICAgICAgICBvcHRpb25zLnRhYmxlXG4gICAgICApXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24oanNvbikge1xuICAgICAgICAgIG9wdGlvbnMuanNvbiA9IFtqc29uXVxuICAgICAgICAgIHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgI2NvbnRyb2xzJylcbiAgICAgICAgICB2YXIgYm94Q29udGVudCA9ICcnXG4gICAgICAgICAgdmFyIG1hcFxuICAgICAgICAgIGlmIChvcHRpb25zLndpZGdldHMpIHtcbiAgICAgICAgICAgIG1hcCA9IGF3YWl0IG1ha2VXaWRnZXRzKG9wdGlvbnMuanNvbiwgb3B0aW9ucywgYm94Q29udGVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICAgICAgICAgICAgbWFrZUxheWVycyhtYXApXG4gICAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuZm9vdGVyICYmIG9wdGlvbnMuZm9vdGVyLnRyaW0oKSkge1xuICAgICAgICAgICAgdmFyIGZvb3Rlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgICAgICAgICAgZm9vdGVyTm9kZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICBvcHRpb25zLmZvb3RlciArICcgIDxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj4nXG4gICAgICAgICAgICB2YXIgcGVuVWx0aW1hdGVOb2RlID1cbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJ2hlYWRlcicpXG4gICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgIGZvb3Rlck5vZGUsXG4gICAgICAgICAgICAgIHBlblVsdGltYXRlTm9kZS5uZXh0U2libGluZ1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUobWFwKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlTGFuZ3VhZ2VEYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xuXG52YXIgdXJsID1cbiAgd2luZG93LmxvY2F0aW9uICE9IHdpbmRvdy5wYXJlbnQubG9jYXRpb25cbiAgICA/IGRvY3VtZW50LnJlZmVycmVyXG4gICAgOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXG52YXIgaHJlZiA9IC9sYW5nPShbXiZdKykvLmV4ZWModXJsKVxud2luZG93LmxhbmcgPSBocmVmID8gaHJlZlsxXSA6IG51bGxcblxudmFyIGxlYWZsZXRMb2FkZWQgPSAwXG5cbnZhciBwcmltYXJ5SnNGaWxlcyA9IFtcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXRAMS4zLjEvZGlzdC9sZWFmbGV0LmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL3doYXR3Zy1mZXRjaEAzLjAuMC9kaXN0L2ZldGNoLnVtZC5qcydcbl1cblxudmFyIHNlY29uZGFyeUpzRmlsZXMgPSBbXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0Lnpvb21zbGlkZXJAMC43LjEvc3JjL0wuQ29udHJvbC5ab29tc2xpZGVyLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXQtZnVsbHNjcmVlbkAxLjAuMi9kaXN0L0xlYWZsZXQuZnVsbHNjcmVlbi5taW4uanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vY2hyb21hLWpzQDIuMC4zL2Nocm9tYS5taW4uanMnLFxuICAnaHR0cHM6Ly9jc2lzLWlsYWIuZ2l0aHViLmlvL21hcC10ZW1wbGF0ZXMvZGlzdC9qcy92ZW5kb3IvQTExeS1EaWFsb2cuanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vY2hvaWNlcy5qc0A3LjAuMC9wdWJsaWMvYXNzZXRzL3NjcmlwdHMvY2hvaWNlcy5taW4uanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldC5tYXJrZXJjbHVzdGVyQDEuNC4xL2Rpc3QvbGVhZmxldC5tYXJrZXJjbHVzdGVyLmpzJyxcbiAgJ2h0dHBzOi8vY3Npcy1pbGFiLmdpdGh1Yi5pby9tYXAtdGVtcGxhdGVzL2Rpc3QvanMvdmVuZG9yL3BhdHRlcm5zLmpzJyxcbiAgJ2h0dHBzOi8vY3Npcy1pbGFiLmdpdGh1Yi5pby9tYXAtdGVtcGxhdGVzL2Rpc3QvanMvdmVuZG9yL2xhdGluaXplLmpzJ1xuXVxuXG5mdW5jdGlvbiBoYW5kbGVMb2FkTGVhZmxldCgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHNlY29uZGFyeUpzRmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWRcbiAgICAgIHZhciBqc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAganNMaW5rLnNyYyA9IGZpbGVcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoanNMaW5rKVxuXG4gICAgICBqc0xpbmsub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxlYWZsZXRMb2FkZWQrK1xuXG4gICAgICAgIGlmIChsZWFmbGV0TG9hZGVkID09PSBzZWNvbmRhcnlKc0ZpbGVzLmxlbmd0aCArIHByaW1hcnlKc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJlc29sdmUobGVhZmxldExvYWRlZClcbiAgICAgICAgICByZXR1cm4gbGVhZmxldExvYWRlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW1wb3J0RmlsZXMoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcmltYXJ5SnNGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZFxuICAgICAgdmFyIGpzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBqc0xpbmsuc3JjID0gZmlsZVxuICAgICAganNMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZWFmbGV0TG9hZGVkKytcblxuICAgICAgICBpZiAobGVhZmxldExvYWRlZCA9PT0gcHJpbWFyeUpzRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgaGFuZGxlTG9hZExlYWZsZXQoKVxuICAgICAgICAgIHJlc29sdmUobGVhZmxldExvYWRlZClcbiAgICAgICAgICByZXR1cm4gbGVhZmxldExvYWRlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGpzTGluaylcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFrZU1hcChvcHRpb25zKSB7XG4gIGlmICghbGVhZmxldExvYWRlZCkge1xuICAgIHJldHVybiBhd2FpdCBpbXBvcnRGaWxlcygpLnRoZW4oYXN5bmMgZnVuY3Rpb24oc2NyaXB0c0xvYWRlZCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGluaXQob3B0aW9ucylcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhd2FpdCBpbml0KG9wdGlvbnMpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdChvcHRpb25zKSB7XG4gIHZhciBkYXRhVVJMID0gJ2h0dHBzOi8vc3ByZWFkc2hlZXRzLmdvb2dsZS5jb20vZmVlZHMvbGlzdC8nXG4gIHdpbmRvdy5kZWZhdWx0Q29sb3IgPVxuICAgIG9wdGlvbnMub2NlYW5jb2xvciB8fCBvcHRpb25zLm9jZWFuQ29sb3IgfHwgb3B0aW9uc1snb2NlYW4gY29sb3InXVxuICB2YXIgdHJhbnNsYXRpb25zXG5cbiAgaWYgKGxhbmcpIHtcbiAgICBmZXRjaChkYXRhVVJMICsgb3B0aW9ucy5nb29nbGVTaGVldCArICcvJyArIDMgKyAnL3B1YmxpYy92YWx1ZXM/YWx0PWpzb24nKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgdHJhbnNsYXRpb25zID0gcGFyc2VMYW5ndWFnZURhdGEoanNvbi5mZWVkLmVudHJ5KVxuXG4gICAgICAgIGNvbnN0IGluaXRXaXRoU3ByZWFkc2hlZXQgPSByZXF1aXJlKCcuL2luaXRXaXRoU3ByZWFkc2hlZXQuanMnKS5kZWZhdWx0XG4gICAgICAgIHJldHVybiBhd2FpdCBpbml0V2l0aFNwcmVhZHNoZWV0KGRhdGFVUkwsIG9wdGlvbnMsIHRyYW5zbGF0aW9ucylcbiAgICAgIH0pXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5nb29nbGVTaGVldCkge1xuICAgIGNvbnN0IGluaXRXaXRoU3ByZWFkc2hlZXQgPSByZXF1aXJlKCcuL2luaXRXaXRoU3ByZWFkc2hlZXQuanMnKS5kZWZhdWx0XG4gICAgcmV0dXJuIGF3YWl0IGluaXRXaXRoU3ByZWFkc2hlZXQoZGF0YVVSTCwgb3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbml0V2l0aG91dFNwcmVhZHNoZWV0ID0gcmVxdWlyZSgnLi9pbml0V2l0aG91dFNwcmVhZHNoZWV0LmpzJylcbiAgICAgIC5kZWZhdWx0XG4gICAgcmV0dXJuIGF3YWl0IGluaXRXaXRob3V0U3ByZWFkc2hlZXQob3B0aW9ucylcbiAgfVxufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFmcmljYVBvcnRzKCkge1xuICB2YXIgbWFwID0gYXdhaXQgbWFrZU1hcCh7XG4gICAgbWFwSUQ6ICdhZnJpY2EnLFxuICAgIGNlbnRlcjogWy01LCA0MF0sXG4gICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICB6b29tOiA0LFxuICAgIG1heFpvb206IDYsXG4gICAgbWluWm9vbTogMyxcbiAgICBjbHVzdGVyRGlzdGFuY2U6IDE1LFxuICAgIEF0dHJpYnV0aW9uOlxuICAgICAgJ0RhdGEgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNzaXMub3JnL3Byb2dyYW1zL2FmcmljYS1wcm9ncmFtXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q1NJUyBBZnJpY2EgUHJvZ3JhbTwvYT4sIMKpIE9wZW5TdHJlZXRNYXAsIExlYWZsZXQgY29udHJpYnV0b3JzLCDCqSBDQVJUTycsXG4gICAgdGFibGU6ICdhZnJpY2FfcG9ydHMnLFxuICAgIGFwaUtleTogJ0VEN3pOVlBGb3JVSkVmSU1kWG5aeVEnLFxuICAgIHByb2dyYW06ICdBZnJpY2EgUHJvZ3JhbScsXG4gICAgd2Vic2l0ZTogJ2h0dHBzOi8vd3d3LmNzaXMub3JnL3Byb2dyYW1zL2FmcmljYS1wcm9ncmFtJyxcbiAgICB0aXRsZTogJ0NoaW5lc2UgUG9ydCBJbnZlc3RtZW50cyBpbiBBZnJpY2EnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIENTSVMgQWZyaWNhIFByb2dyYW0gaWRlbnRpZmllZCBzdWItU2FoYXJhbiBBZnJpY2FuIHBvcnRzIHdpdGggZmluYW5jaWFsLCBjb25zdHJ1Y3Rpb24sIGFuZCBvciBvcGVyYXRpb25hbCBpbnZvbHZlbWVudCBieSBDaGluZXNlIGVudGl0aWVzLiAgV2hpbGUgdGhlIGV4cGFuc2lvbiBvZiBwb3J0cyBpcyBrZXkgdG8gZWNvbm9taWMgZGV2ZWxvcG1lbnQsIHRoZXNlIGludmVzdG1lbnRzIGFsc28gcHJvdmlkZSBDaGluYSB3aXRoIGFjY2VzcyB0byBhY2hpZXZlIHZhcnlpbmcgc3RyYXRlZ2ljIG9iamVjdGl2ZXMuIE1hcHBpbmcgdGhlIHNwcmVhZCBhbmQgc2NvcGUgb2YgQ2hpbmVzZSBwb3J0IHByb2plY3RzIHByb3ZpZGVzIGNsYXJpdHkgb24gd2hpY2ggaW52ZXN0bWVudHMgYXJlIHRoZSBtb3N0IHN1c2NlcHRpYmxlIHRvIENoaW5lc2UgaW5mbHVlbmNlLCBhcyB3ZWxsIGFzIHRoZWlyIGdlb3N0cmF0ZWdpYyBhbmQgY29tbWVyY2lhbCBpbXBvcnRhbmNlLicsXG4gICAgbWFwYm94U3R5bGU6IFwiY2p2aWkwNHE2MGM4ODFjcGo5aXBoOWlid1wiLFxuICAgICdvY2VhbiBjb2xvcic6ICcjYjdjN2QxJyxcbiAgICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uIGZvcm1hdFBvcHVwQ29udGVudChmZWF0dXJlLCBtYXApIHtcbiAgICAgIHZhciBkZXNjcmlwdGlvbiA9IGZlYXR1cmUucHJvcGVydGllcy5kZXNjcmlwdGlvblxuICAgICAgICA/IGZlYXR1cmUucHJvcGVydGllcy5kZXNjcmlwdGlvbiArXG4gICAgICAgICAgKGZlYXR1cmUucHJvcGVydGllcy5saW5rXG4gICAgICAgICAgICA/ICcgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiIGhyZWY9XCInICtcbiAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLmxpbmsgK1xuICAgICAgICAgICAgICAnXCI8L2E+JyArXG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllcy5saW5rX3RpdGxlICtcbiAgICAgICAgICAgICAgZXh0ZXJuYWxMaW5rICtcbiAgICAgICAgICAgICAgJzwvYT4nXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgICA6ICcnXG4gICAgICByZXR1cm4gKFxuICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwVGl0bGVTdHlsZVwiPicgK1xuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMucG9ydCArXG4gICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgIGZlYXR1cmUucHJvcGVydGllcy5wb3J0X2NpdHkgK1xuICAgICAgICAnLCAnICtcbiAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnBvcnRfY291bnRyeSArXG4gICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPkludmVzdG1lbnQgVHlwZTwvZGl2Pjx1bCBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuaW52ZXN0bWVudF90eXBlXG4gICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnPGxpPicgKyBjYXBpdGFsaXplKHIpICsgJzwvbGk+J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmpvaW4oJycpICtcbiAgICAgICAgJzwvdWw+JyArXG4gICAgICAgICc8cD4nICtcbiAgICAgICAgZGVzY3JpcHRpb24gK1xuICAgICAgICAnPC9wPidcbiAgICAgIClcbiAgICB9LFxuXG4gICAgem9vbVNsaWRlcjogZmFsc2UsXG5cbiAgd2lkZ2V0czogW1xuICAgIHtcbiAgICAgIGlkOiAnMScsXG4gICAgICBmaWVsZDogXCJtYXJpdGltZV9yb3V0ZXNcIixcbiAgICAgIGlucHV0OiBcImNoZWNrYm94XCIsXG4gICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgICBrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICAgIHZhbHVlOiBcIm1ham9yXCIsXG4gICAgICAgICAgbGFiZWw6ICdNYWpvcicsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgZm9ybTogJ2xpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogJyNkZGQnLFxuICAgICAgICAgIHZhbHVlOiBcIm90aGVyXCIsXG4gICAgICAgICAgbGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgZm9ybTogJ2xpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogJyMzOWE0YWMnLFxuICAgICAgICAgIHZhbHVlOiAnTWFyaXRpbWUgU2lsayBSb2FkJyxcbiAgICAgICAgICBsYWJlbDogJ01hcml0aW1lIFNpbGsgUm9hZCcsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgZm9ybTogJ2xpbmUnXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogJzAnLFxuICAgICAgZmllbGQ6IFwiaW52ZXN0bWVudF90eXBlXCIsXG4gICAgICBpbnB1dDogXCJjaGVja2JveFwiLFxuICAgICAgdHlwZTogXCJmb3JtXCIsXG4gICAgICBrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogJ2J1aWxkZXInLFxuICAgICAgICAgIGxhYmVsOiAnQnVpbGRlcicsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgZm9ybTogJ2ljb24nLFxuICAgICAgICAgIGljb246ICdpY29ucy9idWlsZGluZy5zdmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogJ29wZXJhdG9yJyxcbiAgICAgICAgICBsYWJlbDogJ09wZXJhdG9yJyxcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICBmb3JtOiAnaWNvbicsXG4gICAgICAgICAgaWNvbjogJ2ljb25zL29wZXJhdGluZy5zdmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogJ2Z1bmRlcicsXG4gICAgICAgICAgbGFiZWw6ICdGdW5kZXInLFxuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgIGZvcm06ICdpY29uJyxcbiAgICAgICAgICBpY29uOiAnaWNvbnMvZnVuZGluZy5zdmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogJ2J1aWxkZXIsb3BlcmF0b3InLFxuICAgICAgICAgIGxhYmVsOiAnQnVpbGRlciBhbmQgT3BlcmF0b3InLFxuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgIGZvcm06ICdpY29uJyxcbiAgICAgICAgICBpY29uOiAnaWNvbnMvQnVpbGRpbmdPcGVyYXRpbmcuc3ZnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICdvcGVyYXRvcixmdW5kZXInLFxuICAgICAgICAgIGxhYmVsOiAnT3BlcmF0b3IgYW5kIEZ1bmRlcicsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgZm9ybTogJ2ljb24nLFxuICAgICAgICAgIGljb246ICdpY29ucy9GdW5kaW5nT3BlcmF0aW5nLnN2ZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiAnZnVuZGVyLGJ1aWxkZXInLFxuICAgICAgICAgIGxhYmVsOiAnRnVuZGVyIGFuZCBCdWlsZGVyJyxcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICBmb3JtOiAnaWNvbicsXG4gICAgICAgICAgaWNvbjogJ2ljb25zL0Z1bmRpbmdCdWlsZGluZy5zdmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogJ2Z1bmRlcixidWlsZGVyLG9wZXJhdG9yJyxcbiAgICAgICAgICBsYWJlbDogJ0Z1bmRlciwgQnVpbGRlciBhbmQgT3BlcmF0b3InLFxuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgIGZvcm06ICdpY29uJyxcbiAgICAgICAgICBpY29uOiAnaWNvbnMvRnVuZGluZ0J1aWxkaW5nT3BlcmF0aW5nLnN2ZydcbiAgICAgICAgfSwgICAgICAgICAgXG4gICAgICBdLFxuICAgIH0sXG5cbiAgXVxuXG4gICAgXG4gIH0pXG59XG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2NzcydcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJ1xuaW1wb3J0IHsgbWFrZU1hcCB9IGZyb20gJy4vanMvbWFrZU1hcCdcbmltcG9ydCB7IGV4dGVybmFsTGluayB9IGZyb20gJy4vanMvaGVscGVycy5qcydcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuL2pzL2hlbHBlcnMuanMnXG53aW5kb3cubWFrZU1hcCA9IG1ha2VNYXBcbndpbmRvdy5leHRlcm5hbExpbmsgPSBleHRlcm5hbExpbmtcbndpbmRvdy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZVxuXG5pbXBvcnQgeyBhZnJpY2FQb3J0cyB9IGZyb20gJy4vYWZyaWNhLXBvcnRzJ1xuYWZyaWNhUG9ydHMoKVxuXG4vLyBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbi8vICAgaWYgKG1hcC5tYXBJRCA9PT0gJ2FmcmljYScpIHtcbi8vICAgICB2YXIgbmV3TWFwID0gYXdhaXQgbWFrZU1hcChtYXApXG5cbi8vICAgICB2YXIgY2hva2Vwb2ludCA9IEwuZGl2SWNvbih7XG4vLyAgICAgICBjbGFzc05hbWU6ICdjaG9rZXBvaW50LWxhYmVsJyxcbi8vICAgICAgIGh0bWw6ICc8c3Bhbj5jaG9rZSBwb2ludDwvc3Bhbj4nLFxuLy8gICAgICAgaWNvbkFuY2hvcjogWy03NSwgNy41XSxcbi8vICAgICAgIGljb25TaXplOiBbMjAsIDIwXVxuLy8gICAgIH0pXG5cbi8vICAgICBuZXcgTC5tYXJrZXIoWzEyLjU4NjczMjQzMjQ2NDA2MiwgNDMuMzQxMDY0NDUzMTI1XSwge1xuLy8gICAgICAgaWNvbjogY2hva2Vwb2ludFxuLy8gICAgIH0pLmFkZFRvKG5ld01hcC5sZWFmbGV0KVxuXG4vLyAgICAgZG9jdW1lbnRcbi8vICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudG9vbGJveCBpbnB1dC51aVt0eXBlPVxcJ2NoZWNrYm94XFwnXScpXG4vLyAgICAgICAucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJylcblxuLy8gICAgIGNvbnNvbGUubG9nKCdhZnJpY2EnKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIG1ha2VNYXAobWFwKVxuLy8gICAgIGNvbnNvbGUubG9nKG1hcC5tYXBJRClcbi8vICAgfVxuLy8gfSwgMjAwMCAqIGkpXG5cbndpbmRvdy5jb252ZXJ0VHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciB2ID0gTnVtYmVyKHZhbHVlKVxuICByZXR1cm4gIWlzTmFOKHYpXG4gICAgPyB2XG4gICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ251bGwnXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJ1xuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJ1xuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiB2YWx1ZVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKVxuICAgIHJldHVybiBldnRcbiAgfVxuXG4gIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGVcblxuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudFxufVxuXG5BcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKHByb3BlcnR5MSwgcHJvcGVydHkyKSB7XG4gIHJldHVybiBwcm9wZXJ0eTJcbiAgICA/IHRoaXMucmVkdWNlKGZ1bmN0aW9uKGdyb3VwcywgaXRlbSkge1xuICAgICAgdmFyIHZhbCA9IGl0ZW1bcHJvcGVydHkyXVtwcm9wZXJ0eTFdXG4gICAgICBncm91cHNbdmFsXSA9IGdyb3Vwc1t2YWxdIHx8IFtdXG4gICAgICBncm91cHNbdmFsXS5wdXNoKGl0ZW0pXG4gICAgICByZXR1cm4gZ3JvdXBzXG4gICAgfSwge30pXG4gICAgOiB0aGlzLnJlZHVjZShmdW5jdGlvbihncm91cHMsIGl0ZW0pIHtcbiAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BlcnR5MV1cbiAgICAgIGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW11cbiAgICAgIGdyb3Vwc1t2YWxdLnB1c2goaXRlbSlcbiAgICAgIHJldHVybiBncm91cHNcbiAgICB9LCB7fSlcbn1cblxuUmVnRXhwLmVzY2FwZSA9IGZ1bmN0aW9uKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvW1xcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==