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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
      label: g.trim() && parseInt(g, 10) === NaN ? g : '',
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
              keyStyle = styleKey(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = styleKey(styleOptions);
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
              keyStyle = styleKey(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = styleKey(styleOptions);
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
/* 2 */
/*!****************************************************!*\
  !*** ./src/js/initWithSpreadsheet.js + 10 modules ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/parsers.js because of ./src/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/js/parsers.js
var parsers = __webpack_require__(1);

// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/styleKey.js

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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map.widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

            svg = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 48 12\'><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + colors[0] + '\' stroke-width=\'' + helpers["f" /* lineWeights */][index][0] + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + (index === 4 ? '18,12' : helpers["e" /* lineDashArrays */][index][0]) + '\'/><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + colors[1] + '\' stroke-width=\'' + helpers["f" /* lineWeights */][index][1] + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + (index === 4 ? '18,12' : helpers["e" /* lineDashArrays */][index][1]) + '\'/></svg>';
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
            Object(helpers["g" /* load */])(key.icon, document.querySelector('.hidden'));
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
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
// CONCATENATED MODULE: ./src/js/CustomMap.js
var mapId = 0;
function CustomMap_CustomMap(container, properties) {
  this.id = mapId++;
  this.filters = [];
  this.groups = [];
  this.json = [];
  this.leaflet;

  var _this = this;

  Object.keys(properties).forEach(function (property) {
    _this[property.toLowerCase().replace(/ /g, '')] = properties[property];
  });
  _this.popupcontent = _this.popupcontent && typeof _this.popupcontent === 'string' ? _this.popupcontent.split(',') : _this.popupcontent && this.popupcontent === 'object' ? _this.popupcontent : [];
  _this.popupheaders = _this.popupheaders && typeof _this.popupheaders === 'string' ? _this.popupheaders.split(',') : _this.popupheaders && _this.popupheaders === 'object' ? _this.popupheaders : [];
  CustomMap_CustomMap.all = CustomMap_CustomMap.all || [];
  CustomMap_CustomMap.all.push(this);

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
    if (_this.loadEvent) _this.leaflet.on('load', _this.loadevent);
    if (_this.addEvent) _this.leaflet.on('layeradd', _this.addevent);
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
  var externalLinkContent = link && link.trim() ? '<div class="separator"></div><div class="hyperlink popupEntryStyle"><a class="translate" href=' + link.trim() + ' target="_blank">' + map.externalLinkText + '</a>' + helpers["d" /* externalLink */] + '</div>' : '';
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

window.handleLayerClick = function (feature, layer, leaflet) {
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
};
// CONCATENATED MODULE: ./src/js/stylePoint.js

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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map.widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

        pointStyle = divIcon ? divIcon : styleKey(styleOptions);
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
        pointStyle = styleKey(styleOptions);
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
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return L.marker(latlng, {
    icon: divIcon ? divIcon : icon
  });
}
// CONCATENATED MODULE: ./src/js/styleNonPoint.js


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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map.widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
// CONCATENATED MODULE: ./src/js/makeGeoJsonOptions.js



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
      // console.log(styleNonPoint(feature, styleOptions, 0))
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

function makeLayers_makeLayers(map) {
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

  var geoJsonOptions = map.geoJsonOptions ? map.geoJsonOptions(map) : makeGeoJsonOptions(map);
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

      if (!hasLineFeatures && index % 2 === 0 || hasLineFeatures) {
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
// CONCATENATED MODULE: ./src/js/mapWidgetsToState.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function mapWidgetsToState(_x) {
  return _mapWidgetsToState.apply(this, arguments);
}

function _mapWidgetsToState() {
  _mapWidgetsToState = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(options) {
    var container, map;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            container = document.querySelector('#' + options.slug + ' .map');
            map = new CustomMap_CustomMap(container, options).render();
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
                  makeLayers_makeLayers(map);
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
                      makeLayers_makeLayers(map);
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

  makeLayers_makeLayers(map);
}

function handleChange(map, element, widgets, x, count, initialized) {
  var options = element.querySelector('select') ? Array.from(element.querySelector('select').options) : element.querySelector('input[type=\'text\']') ? Array.from(element.querySelectorAll('input[type=\'text\']')) : Array.from(element.querySelectorAll('input'));
  var selections = element.querySelector('select') ? Array.from(element.querySelector('select').options) : element.querySelector('input[type=\'text\']') ? Array.from(element.querySelectorAll('input[type=\'text\']')) : Array.from(element.querySelectorAll('input:checked'));
  var possibleChecks = Array.from(element.querySelectorAll('input')).map(function (o) {
    return o.name.toLowerCase();
  });
  var possibleOptions, possibleQueries;

  if (widgets[x].input !== 'toggle') {
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
  if (widgets.length >= x + 1 && initialized >= count) makeLayers_makeLayers(map);
}
// CONCATENATED MODULE: ./src/js/makeWidgets.js
function makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function makeWidgets_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





function makeWidgets(_x, _x2, _x3) {
  return _makeWidgets.apply(this, arguments);
}

function _makeWidgets() {
  _makeWidgets = makeWidgets_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(jsons, options, boxContent) {
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
            return mapWidgetsToState(options);

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
            keyStyle = styleKey(styleOptions);
            break;

          case 'color':
            var styleOptions = {
              map: options,
              group: legendItems[group]
            };
            keyStyle = styleKey(styleOptions);
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
            keyStyle = styleKey(styleOptions);
            break;

          case 'color':
            var styleOptions = {
              map: options,
              group: legendItems[group]
            };
            keyStyle = styleKey(styleOptions);
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
// CONCATENATED MODULE: ./src/js/makeDocumentNodes.js
function makeDocumentNodes(options) {
  var newSectionHTML = '';
  newSectionHTML += '<section id="' + options.slug + '">';
  newSectionHTML += '<div id="' + options.slug + '__map" class="map"></div>';
  newSectionHTML += '<aside class="toolbox">';
  newSectionHTML += options.title ? '<input type="checkbox" checked class="ui mobile-only"><div class="hamburger mobile-only"><div class="icon"> <span></span> <span></span> <span></span></div><div class="menu translate"></div></div>' : '';
  newSectionHTML += '<div class="box">';
  newSectionHTML += options.title || options.logo || options.description ? '<header  class="translate"> <h1><a target="_blank" id="logo"></a></h1>  <p class="translate"></p></header>' : '';
  newSectionHTML += (options.instructions ? '<p class="translate">' + options.instructions + '</p>' : '') + '<div id="controls"><div class="loader"></div></div><footer><div class="hidden"></div></footer></div></aside>';
  newSectionHTML += options.titlecardcontent ? '<button id="' + options.slug + '__about" class="about-trigger">ABOUT THIS MAP</button>' : '';
  newSectionHTML += '</section>';
  document.body.innerHTML += newSectionHTML;

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
// CONCATENATED MODULE: ./src/js/initWithSpreadsheet.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initWithSpreadsheet; });
function initWithSpreadsheet_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function initWithSpreadsheet_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { initWithSpreadsheet_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { initWithSpreadsheet_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function initWithSpreadsheet(_x, _x2, _x3) {
  return _initWithSpreadsheet.apply(this, arguments);
}

function _initWithSpreadsheet() {
  _initWithSpreadsheet = initWithSpreadsheet_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(dataURL, options, translations) {
    var map;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch(dataURL + options.googleSheet + '/' + 2 + '/public/values?alt=json').then(function (response) {
                return response.json();
              }).then(function (json) {
                var metaData = Object(parsers["c" /* parseMetaData */])(json.feed.entry);
                var widgets = Object(parsers["d" /* parseWidgetData */])(metaData);
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
                makeDocumentNodes(properties);
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
                  }).then(
                  /*#__PURE__*/
                  function () {
                    var _ref = initWithSpreadsheet_asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee(jsons) {
                      var footerNode, penUltimateNode;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return makeWidgets(jsons, properties, boxContent);

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
/* 3 */
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader??ref--5-2!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--5-4!./main.scss */ 4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 4 */
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--5-2!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--5-4!./src/scss/main.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
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

var	fixUrls = __webpack_require__(/*! ./urls */ 6);

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
/* 6 */
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
/* 7 */
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
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

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
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
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
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
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

  function AsyncIterator(generator) {
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
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
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
        return new Promise(function(resolve, reject) {
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
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
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

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

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
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 8 */
/*!**********************************!*\
  !*** ./src/index.js + 1 modules ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/js/initWithSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/parsers.js because of ./src/js/initWithSpreadsheet.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(7);

// EXTERNAL MODULE: ./src/js/parsers.js
var parsers = __webpack_require__(1);

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
  _importFiles = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
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

function makeMap(_x) {
  return _makeMap.apply(this, arguments);
}

function _makeMap() {
  _makeMap = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(options) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (leafletLoaded) {
              _context3.next = 6;
              break;
            }

            _context3.next = 3;
            return importFiles().then(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(scriptsLoaded) {
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
  _init = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(options) {
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
            }).then(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(json) {
                var initWithSpreadsheet;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        translations = Object(parsers["a" /* parseLanguageData */])(json.feed.entry);
                        initWithSpreadsheet = __webpack_require__(/*! ./initWithSpreadsheet.js */ 2).default;
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

            initWithSpreadsheet = __webpack_require__(/*! ./initWithSpreadsheet.js */ 2).default;
            _context5.next = 10;
            return initWithSpreadsheet(dataURL, options);

          case 10:
            return _context5.abrupt("return", _context5.sent);

          case 13:
            initWithoutSpreadsheet = __webpack_require__(/*! ./initWithSpreadsheet.js */ 2).default;
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

// CONCATENATED MODULE: ./src/index.js





window.makeMap = makeMap;
window.externalLink = helpers["d" /* externalLink */];
window.capitalize = helpers["a" /* capitalize */]; // examples()
// async function examples() {
//   var newMap
//   var maps = [
//     {
//       googleSheet: '1gG0m4xRVeBQ7eTypfZ0SQev_RxUK0uj_9IlyUqSev7c',
//       mapID: 'aid-terrorism',
//       formatPopupContent: function(feature, map) {
//         var jsons = map.json
//           .reduce(function(a, b) {
//             return {
//               type: 'FeatureCollection',
//               features: a.features.concat(b.features)
//             }
//           })
//           .features.map(function(f) {
//             return f.properties
//           })
//
//         var palestinianTerritories = ['Gaza Strip', 'West Bank', 'Palestine']
//         var countryData0 = jsons.filter(function(f) {
//           return palestinianTerritories.indexOf(feature.properties.country) > -1
//             ? palestinianTerritories.indexOf(f.country) > -1
//             : f.country === feature.properties.country
//         })
//
//         var countryData = countryData0.reduce(function(a, b) {
//           var countryTerrorismData = ''
//
//           switch (feature.properties.country) {
//           case 'West Bank':
//             countryTerrorismData +=
//                 a.country === 'West Bank' && a.terrorism
//                   ? a.terrorism
//                   : b.country === 'West Bank' && b.terrorism
//                     ? b.terrorism
//                     : ''
//             break
//
//           case 'Gaza Strip':
//             countryTerrorismData +=
//                 a.country === 'Gaza Strip' && a.terrorism
//                   ? a.terrorism
//                   : b.country === 'Gaza Strip' && b.terrorism
//                     ? b.terrorism
//                     : ''
//             break
//
//           case 'Palestine':
//             countryTerrorismData += a.terrorism + '~' + b.terrorism
//             break
//
//           default:
//             countryTerrorismData = a.terrorism ? a.terrorism : b.terrorism
//           }
//
//           return {
//             country: feature.properties.country,
//             terrorism: countryTerrorismData,
//             foreign_assistance: a.foreign_assistance
//               ? a.foreign_assistance
//               : b.foreign_assistance,
//             actual_assistance: a.actual_assistance
//               ? a.actual_assistance
//               : b.actual_assistance
//           }
//         })
//
//         var groups = '',
//           assistance = '',
//           terrorism = countryData.terrorism
//
//         if (terrorism.length) {
//           groups = `<br><div class="popupHeaderStyle">Terrorist Groups</div>
//             <ul>${terrorism
//     .split('~')
//     .filter(function(t) {
//       return t
//     })
//     .map(function(group) {
//       return `<li class='popupEntryStyle'>${group}</li>`
//     })
//     .join('')}</ul>`
//         }
//
//         if (countryData.actual_assistance) {
//           assistance = `<div class="popupHeaderStyle">Foreign Assistance: $${countryData.actual_assistance.toLocaleString()}</div>`
//         }
//
//         return `<div class="popupTitleStyle">${countryData.country}</div>
//             ${assistance}      ${groups}`
//       }
//     },
//
//     {
//       googleSheet: '11hN6uzXcO7amn5bT-a09T8oEvgrw7lZ-oBfGtLRzpws',
//       mapID: 'africa',
//       formatPopupContent: function formatPopupContent(feature, map) {
//         var description = feature.properties.description
//           ? feature.properties.description +
//             (feature.properties.link
//               ? ' <a target="_blank" rel="noreferrer noopener" href="' +
//                 feature.properties.link +
//                 '"</a>' +
//                 feature.properties.link_title +
//                 externalLink +
//                 '</a>'
//               : '')
//           : ''
//
//         return (
//           '<div class="popupTitleStyle">' +
//           feature.properties.port +
//           '</div><div class="popupEntryStyle">' +
//           feature.properties.port_city +
//           ', ' +
//           feature.properties.port_country +
//           '</div><div class="popupHeaderStyle">Investment Type</div><ul class="popupEntryStyle">' +
//           feature.properties.investment_type
//             .split(',')
//             .map(function(r) {
//               return '<li>' + capitalize(r) + '</li>'
//             })
//             .join('') +
//           '</ul>' +
//           '<p>' +
//           description +
//           '</p>'
//         )
//       }
//     },
//
//     {
//       googleSheet: '1R9J3haGLDsRPhtT1P1JvQL_XzaPZZsa33vBFO6xs6g4',
//       mapID: 'chinapower',
//       titlecardtitle: null,
//       titlecardcontent: null,
//       mapboxStyle:
//         lang && lang.indexOf('zh-') > -1
//           ? 'citui3waw00162jo1zcsf1urj'
//           : 'cj84s9bet10f52ro2lrna50yg',
//       onEachFeature: {
//         mouseover: function mouseover(e) {
//           this.openPopup(e.latlng)
//         },
//         mouseout: function mouseover(e) {
//           this.closePopup()
//         }
//       },
//       formatPopupContent: function(feature, map) {
//         var prefix = lang ? '_' + lang : ''
//
//         var name = feature.properties['name' + prefix]
//
//         // var description = feature.properties['description' + prefix]
//         //   .replace(/<a href=/gi, '<a target="_blank" href=')
//         //   .replace(/<\/a>/gi, externalLink + '</a>')
//
//         var outpost = feature.properties.chinese_outposts
//         return (
//           '<div class="popupEntryStyle">' +
//           outpost +
//           (name && outpost ? '<br/>' : '') +
//           (name !== outpost ? name : '') +
//           (feature.properties.observed
//             ? '<br/>(expected)'
//             : feature.properties.observed === false
//               ? '<br />(observed)'
//               : '') +
//           '</div>' +
//           '<div class="popupEntryStyle">' +
//           'description' +
//           '</div>'
//         )
//       }
//     },
//
//     {
//       mapID: 'venezuela',
//       externalLinkText: 'yo, click here',
//       googleSheet: '13tvoxc7kB8BzSKO67c6kf949kqte_o-WFF5W21h5O98',
//       fullScreen: true,
//       'mapbox style': 'cjrawc1zs2bzc2sq3y9wvt22t',
//       'ocean color': '#cad2d3',
//       formatPopupContent: function(feature, map) {
//         return (
//           '<div class="popupHeaderStyle">' +
//           feature.properties.country +
//           '</div><div class="popupEntryStyle">' +
//           (feature.properties.recognition.toLowerCase() === 'y'
//             ? feature.properties.country +
//               ' recognizes Juan Guaid\xF3 as President of Venezuela'
//             : feature.properties.country +
//               ' recognizes Nicol\xE1s Maduro as President of Venezuela</div>') +
//           '</div>'
//         )
//       }
//     },
//
//     {
//       mapID: 'features-map',
//       externalLinkText: 'yo, click here',
//       googleSheet: '13tvoxc7kB8BzSKO67c6kf949kqte_o-WFF5W21h5O98',
//       fullScreen: true,
//       'mapbox style': 'cjrawc1zs2bzc2sq3y9wvt22t',
//       'ocean color': '#cad2d3'
//     },
//
//     {
//       mapID: 'resources-map',
//       externalLinkText: 'yo, click here',
//       googleSheet: '11rUaoISSkqakEKZ6hi4xeVbbiEnfPi1qsRoq4r0SrPA',
//       fullScreen: true,
//       'mapbox style': 'cjrawc1zs2bzc2sq3y9wvt22t',
//       'ocean color': '#cad2d3',
//       'popup headers': [
//         lang ? 'name_' + lang : 'name',
//         lang ? 'description_' + lang : 'description',
//         'link'
//       ]
//     },
//
//     {
//       mapID: 'aegis',
//       externalLinkText: 'yo, click here',
//       googleSheet: '15oJSmk0KW3_5D8Uj1eSiz-e-PpW51e9N-XSgLIQtZIk',
//       fullScreen: true,
//       'mapbox style': 'cjrawc1zs2bzc2sq3y9wvt22t',
//       'ocean color': '#cad2d3',
//       formatPopupContent: function(feature, map) {
//         return `<div class="popupTitleStyle">${feature.properties.name}</div>
//
//                       ${
//   feature.properties.total_guided_missile_cruisers
//     ? `<div class="popupHeaderStyle">Guided Missile Cruisers: ${
//       feature.properties.total_guided_missile_cruisers
//     }</div>
//                       <div><span class='popupEntryStyle'>BMD-Capable:</span>
//                       <span class='popupEntryStyle'>${
//   feature.properties.bmd_capable_gmc
// }</span></div>`
//     : ''
// }
//                   ${
//   feature.properties.total_guided_missile_destroyers
//     ? `<div class="popupHeaderStyle">Guided Missile Destroyers: ${
//       feature.properties.total_guided_missile_destroyers
//     }</div>
//                   <div><span class='popupEntryStyle'>BMD-Capable:</span>
//                   <span class='popupEntryStyle'>${
//   feature.properties.total_guided_missile_destroyers
// }</span></div>`
//     : ''
// }`
//       }
//     },
//     {
//       mapID: 'wbi-terrorism',
//       externalLinkText: 'yo, click here',
//       googleSheet: '1d4Ee65KT_S46x0mk62sV6CYDpMZ40c2oYJ6BQs9a_10',
//       fullScreen: true,
//       'mapbox style': 'cjrawc1zs2bzc2sq3y9wvt22t',
//       'ocean color': '#cad2d3'
//     }
//   ]
//
//   maps.reverse().forEach((map, i) => {
//     setTimeout(() => {
//       console.log(map.mapID)
//       newMap = makeMap(map)
//
//       if (map.mapID === 'africa') {
//         var chokepoint = L.divIcon({
//           className: 'chokepoint-label',
//           html: '<span>choke point</span>',
//           iconAnchor: [-75, 7.5],
//           iconSize: [20, 20]
//         })
//
//         new L.marker([12.586732432464062, 43.341064453125], {
//           icon: chokepoint
//         }).addTo(newMap.leaflet)
//
//         document
//           .querySelector('.toolbox input.ui[type=\'checkbox\']')
//           .removeAttribute('checked')
//
//         console.log('africa')
//       }
//     }, 2000 * i)
//   })
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DdXN0b21NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hhbmRsZUZlYXR1cmVFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlTm9uUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VHZW9Kc29uT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZUxheWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFwV2lkZ2V0c1RvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VXaWRnZXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlRG9jdW1lbnROb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/MTI5NyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY3JlYXRlQ29sb3JTY2FsZSIsImNvdW50IiwiaW5kZXgiLCJzY2FsZU9uZSIsImNocm9tYSIsImN1YmVoZWxpeCIsImh1ZSIsImxpZ2h0bmVzcyIsInNjYWxlIiwiY29sb3JzIiwic2NhbGVUd28iLCJnYW1tYSIsInJldmVyc2UiLCJpIiwiY29sb3IiLCJzYXR1cmF0ZSIsImhleCIsInB1c2giLCJsaW5lV2VpZ2h0cyIsImxpbmVEYXNoQXJyYXlzIiwiZXh0ZXJuYWxMaW5rIiwicmVtb3ZlIiwiY29udmVydFR5cGUiLCJ2YWx1ZSIsInYiLCJOdW1iZXIiLCJpc05hTiIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwiY2FwaXRhbGl6ZSIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsb2FkIiwidXJsIiwiZWxlbWVudCIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJpbm5lckhUTUwiLCJyZXNwb25zZVRleHQiLCJtYWtlRHJvcGRvd25PcHRpb25zIiwib3B0aW9ucyIsIngiLCJncm91cHMiLCJ3aWRnZXRzIiwia2V5cyIsImdyb3VwQnkiLCJjaG9pY2VzIiwiT2JqZWN0IiwibWFwIiwiZyIsInoiLCJpZCIsImxhYmVsIiwidHJpbSIsInBhcnNlSW50IiwiTmFOIiwiZGlzYWJsZWQiLCJyZW1vdmVJdGVtQnV0dG9uIiwibWF4SXRlbUNvdW50IiwibWF4aW11bSIsImNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsIl90aGlzIiwiaXRlbSIsImNsYXNzTmFtZXMiLCJkYXRhIiwia2V5IiwiZmluZCIsImtleVN0eWxlIiwidHlwZSIsImZvcm1zIiwiayIsImluZGV4T2YiLCJzdHlsZU9wdGlvbnMiLCJzdHlsZUtleSIsIm1hcmt1cCIsImFjdGl2ZSIsImNsYXNzIiwic3ZnIiwid2luZG93IiwiYnRvYSIsImNob2ljZSIsIml0ZW1DaG9pY2UiLCJpdGVtRGlzYWJsZWQiLCJpdGVtU2VsZWN0YWJsZSIsImNvbmZpZyIsIml0ZW1TZWxlY3RUZXh0IiwiZ3JvdXBJZCIsInBhcnNlTGFuZ3VhZ2VEYXRhIiwibGFuZ3VhZ2VEYXRhIiwiZm9yRWFjaCIsInJvdyIsImNvbHVtbiIsImNvbHVtbk5hbWUiLCJyZXBsYWNlIiwibGFuZyIsInBhcnNlTGVnZW5kRGF0YSIsImpzb24iLCJzdHlsZSIsImNvbG9yU2NhbGUiLCJsZW5ndGgiLCJsZWdlbmRJdGVtcyIsInkiLCJncm91cCIsInNlbGVjdGVkIiwiY29sb3JWYWwiLCJmb3JtIiwiZGVmYXVsdENvbG9yIiwiaWNvbiIsInBhdHRlcm4iLCJzcGxpdCIsInRyYW5zbGF0aW9ucyIsInBhcnNlTWV0YURhdGEiLCJwYXJzZVdpZGdldERhdGEiLCJtZXRhRGF0YSIsInByb2Nlc3MiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJmaWx0ZXIiLCJtYXRjaCIsInciLCJmaWVsZCIsImZlYXR1cmUiLCJpY29uU2l6ZSIsImljb25zaXplIiwiZGl2aWRlcnMiLCJzaXplIiwia2V5Q29sb3IiLCJmb3JtS2V5V2lkZ2V0IiwiY29sb3JLZXlXaWRnZXQiLCJjb2xvcktleSIsImZvcm1LZXkiLCJldmVyeSIsImF2ZXJhZ2UiLCJvY2VhbmNvbG9yIiwiZGFya2VuIiwic2x1ZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN2Z0NvbnRlbnQiLCJwMSIsInAyIiwicDMiLCJjb2xvclR3byIsImNvbG9yT25lIiwibWFwSWQiLCJDdXN0b21NYXAiLCJjb250YWluZXIiLCJmaWx0ZXJzIiwibGVhZmxldCIsInBvcHVwY29udGVudCIsInBvcHVwaGVhZGVycyIsImFsbCIsInJlc2V0RmlsdGVycyIsInJlbW92ZUdyb3VwcyIsInJlbW92ZUxheWVyIiwicmVuZGVyIiwiTCIsIm1pblpvb20iLCJtaW56b29tIiwibWF4Wm9vbSIsIm1heHpvb20iLCJtYXhCb3VuZHMiLCJtYXhib3VuZHMiLCJzd2JvdW5kcyIsIm5lYm91bmRzIiwic2Nyb2xsV2hlZWxab29tIiwiaW5uZXJXaWR0aCIsInpvb21Db250cm9sIiwiaGFzT3duUHJvcGVydHkiLCJ6b29tc2xpZGVyIiwiYXR0cmlidXRpb25Db250cm9sIiwibG9hZEV2ZW50Iiwib24iLCJsb2FkZXZlbnQiLCJhZGRFdmVudCIsImFkZGV2ZW50Iiwic2V0VmlldyIsImNlbnRlciIsInpvb20iLCJ0aWxlTGF5ZXIiLCJtYXBib3hzdHlsZSIsImFkZFRvIiwiY29udHJvbCIsImZ1bGxzY3JlZW4iLCJDb250cm9sIiwiRnVsbHNjcmVlbiIsImFkZENvbnRyb2wiLCJhdHRyaWJ1dGlvbiIsInBvc2l0aW9uIiwic2V0UHJlZml4IiwiaGFuZGxlRmVhdHVyZUV2ZW50cyIsImxheWVyIiwiZXZlbnRPcHRpb25zIiwib25lYWNoZmVhdHVyZSIsImNsaWNrIiwiaGFuZGxlTGF5ZXJDbGljayIsImxpc3RlbmVyIiwicG9wdXBDb250ZW50IiwiZm9ybWF0cG9wdXBjb250ZW50IiwiZm9ybWF0UG9wdXBDb250ZW50IiwiYmluZFBvcHVwIiwiY29udGVudCIsInAiLCJqb2luIiwibGluayIsImh5cGVybGluayIsImV4dGVybmFsTGlua0NvbnRlbnQiLCJleHRlcm5hbExpbmtUZXh0IiwidHJhbnNsYXRhYmxlU3RyaW5ncyIsInNvcnQiLCJhIiwiYiIsInQiLCJyZSIsIlJlZ0V4cCIsImVzY2FwZSIsImlzU3BpZGVyZmllZCIsIl9wcmVTcGlkZXJmeUxhdGxuZyIsIl9sYXllcnMiLCJsIiwidW5zcGlkZXJmeSIsIl9fcGFyZW50IiwidmFsdWVzIiwiX2dyb3VwIiwiX2ZlYXR1cmVHcm91cCIsIl9zcGlkZXJmaWVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImQiLCJvcGFjaXR5Iiwic3R5bGVQb2ludCIsImxhdGxuZyIsInBvaW50U3R5bGUiLCJDdXN0b21JY29uIiwiSWNvbiIsImV4dGVuZCIsImljb25BbmNob3IiLCJpY29uYW5jaG9yIiwibm9uUG9pbnRTdHlsZSIsImRpdkljb24iLCJ0aGlzRm9ybUtleVdpZGdldCIsInRoaXNDb2xvcktleVdpZGdldCIsImNsYXNzTmFtZSIsImh0bWwiLCJlbmNvZGVVUkkiLCJpY29uVXJsIiwibWFya2VyIiwic3R5bGVOb25Qb2ludCIsImZvcm1LZXlGb3JtIiwicmVkdWNlIiwiYyIsImNvbG9yS2V5Rm9ybSIsImYiLCJ3ZWlnaHQiLCJsaW5lQ2FwIiwiZGFzaEFycmF5IiwicGF0dGVybk9wdGlvbnMiLCJzcGFjZVdlaWdodCIsInNwYWNlQ29sb3IiLCJzcGFjZU9wYWNpdHkiLCJhbmdsZSIsIlN0cmlwZVBhdHRlcm4iLCJzaGFwZU9wdGlvbnMiLCJyYWRpdXMiLCJmaWxsIiwic3Ryb2tlIiwiZmlsbENvbG9yIiwiZmlsbE9wYWNpdHkiLCJzaGFwZSIsIlBhdHRlcm5DaXJjbGUiLCJ3aWR0aCIsImhlaWdodCIsIlBhdHRlcm4iLCJhZGRTaGFwZSIsImZpbGxQYXR0ZXJuIiwibGluZUNvbG9yIiwibGluZVdlaWdodCIsImxpbmVPcGFjaXR5IiwiZ2VvbWV0cnkiLCJicmlnaHRlbiIsIm1ha2VHZW9Kc29uT3B0aW9ucyIsImNvbG9yS2V5V2lkZ2V0cyIsImZvcm1LZXlXaWRnZXRzIiwib25FYWNoRmVhdHVyZSIsImJhY2tncm91bmRPcHRpb25zIiwicG9pbnRUb0xheWVyIiwiZm9yZWdyb3VuZE9wdGlvbnMiLCJtYWtlTGF5ZXJzIiwiZ2VvSnNvbk9wdGlvbnMiLCJjbHVzdGVyQ29sb3IiLCJjb2xvcktleXMiLCJ3aWRnZXQiLCJjb2xsZWN0aW9uTmFtZSIsImZlYXR1cmVzIiwiYWxsUG9pbnRzIiwiTWFya2VyQ2x1c3Rlckdyb3VwIiwic2hvd0NvdmVyYWdlT25Ib3ZlciIsInpvb21Ub0JvdW5kc09uQ2xpY2siLCJtYXhDbHVzdGVyUmFkaXVzIiwiY2x1c3RlcmRpc3RhbmNlIiwiaWNvbkNyZWF0ZUZ1bmN0aW9uIiwiY2x1c3RlciIsImdldENoaWxkQ291bnQiLCJoYXNMaW5lRmVhdHVyZXMiLCJzb21lIiwib3B0aW9uIiwibG9jYWxlQ29tcGFyZSIsImdlb0pzb24iLCJhZGRMYXllciIsImdldExheWVycyIsImUiLCJoYW5kbGVDbHVzdGVyQ2xpY2siLCJfbGVhZmxldF9pZCIsInNwaWRlcmZ5IiwiZ2V0QWxsQ2hpbGRNYXJrZXJzIiwibSIsImdldEVsZW1lbnQiLCJtYXBXaWRnZXRzVG9TdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGFibGVzIiwidGFibGUiLCJmZXRjaCIsImFwaWtleSIsInRoZW4iLCJyZXNwb25zZXMiLCJyZXNwb25zZSIsImpzb25zIiwiY29uY2F0IiwiZmVhdHVyZUdyb3VwcyIsImJveCIsImluaXRpYWxpemVkIiwid2lkZ2V0Q29udGVudCIsIkNob2ljZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzZXQiLCJzZWxlY3RzIiwiY2hlY2tzIiwic2VhcmNoIiwidG9nZ2xlIiwiaW5wdXRzIiwiaW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJmaXJlRXZlbnQiLCJtYXBfaWQiLCJ0cmFuc2xhdGFibGVOb2RlcyIsImVsIiwic2VsZWN0aW9ucyIsInBvc3NpYmxlQ2hlY2tzIiwibyIsIm5hbWUiLCJwb3NzaWJsZU9wdGlvbnMiLCJwb3NzaWJsZVF1ZXJpZXMiLCJxdWVyeSIsImJvb2wiLCJ3aXRoRGlhY3JpdGljcyIsIndpdGhvdXREaWFjcml0aWNzIiwibGF0aW5pc2UiLCJsYXllcnMiLCJncm91cGluZyIsIm1ha2VXaWRnZXRzIiwiYm94Q29udGVudCIsImxlZ2VuZERhdGEiLCJyZWZlcmVuY2UiLCJmZWVkIiwiZW50cnkiLCJmb3JtYXRXaWRnZXRzIiwidGl0bGUiLCJub2RlcyIsImxhYmVsVGV4dCIsIml0ZW1UZXh0Iiwib2Zmc2V0SGVpZ2h0IiwiZm9udFNpemUiLCJnZXRDb21wdXRlZFN0eWxlIiwib2Zmc2V0IiwidHJhbnNmb3JtIiwid2lkZ2V0Tm9kZXMiLCJkcm9wZG93bk9wdGlvbnMiLCJpbnN0cnVjdGlvbnMiLCJ3aWRnZXRUaXRsZSIsIm1ha2VEb2N1bWVudE5vZGVzIiwibmV3U2VjdGlvbkhUTUwiLCJsb2dvIiwiZGVzY3JpcHRpb24iLCJ0aXRsZWNhcmRjb250ZW50IiwiYm9keSIsIm5ld0RpYWxvZ0hUTUwiLCJ0aXRsZWNhcmR0aXRsZSIsIm92ZXJmbG93IiwiZGlhbG9nRWwiLCJnZXRFbGVtZW50QnlJZCIsIm1haW5FbCIsImRpYWxvZ1RyaWdnZXIiLCJkaWFsb2dCb3giLCJBMTF5RGlhbG9nIiwiZGlhbG9nIiwic2hvdyIsImRpc3BsYXkiLCJwcm9ncmFtIiwibWV0YUxvY2FsZU9HIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm1ldGFUeXBlT0ciLCJtZXRhV2lkdGhPRyIsIm1ldGFIZWlnaHRPRyIsIm1ldGFUd2l0dGVyQ2FyZE9HIiwibWV0YVRpdGxlT0ciLCJtZXRhVGl0bGVUd2l0dGVyIiwibWV0YURlc2NyaXB0aW9uT0ciLCJtZXRhRGVzY3JpcHRpb25Ud2l0dGVyIiwibWV0YUltYWdlT0ciLCJzY3JlZW5zaG90IiwibWV0YUltYWdlVHdpdHRlciIsImlubmVyVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImhyZWYiLCJ3ZWJzaXRlIiwiaW5pdFdpdGhTcHJlYWRzaGVldCIsImRhdGFVUkwiLCJnb29nbGVTaGVldCIsInR3b0RfcHJvcGVyaXRlcyIsImRlZmF1bHQiLCJtYXBJRCIsInJlZmVyZW5jZVNoZWV0cyIsInJlZmVyZW5jZVNoZWV0VVJMUyIsInUiLCJmb290ZXIiLCJmb290ZXJOb2RlIiwicGVuVWx0aW1hdGVOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwibG9jYXRpb24iLCJwYXJlbnQiLCJyZWZlcnJlciIsImV4ZWMiLCJsZWFmbGV0TG9hZGVkIiwicHJpbWFyeUpzRmlsZXMiLCJzZWNvbmRhcnlKc0ZpbGVzIiwiaGFuZGxlTG9hZExlYWZsZXQiLCJmaWxlIiwianNMaW5rIiwic3JjIiwib25sb2FkIiwiaW1wb3J0RmlsZXMiLCJtYWtlTWFwIiwic2NyaXB0c0xvYWRlZCIsImluaXQiLCJvY2VhbkNvbG9yIiwicmVxdWlyZSIsImluaXRXaXRob3V0U3ByZWFkc2hlZXQiLCJDdXN0b21FdmVudCIsImV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJpbml0Q3VzdG9tRXZlbnQiLCJwcm90b3R5cGUiLCJFdmVudCIsInByb3BlcnR5MSIsInByb3BlcnR5MiIsInZhbCIsInMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUM3QyxNQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FDbEJDLFNBRFksR0FFWkMsR0FGWSxDQUVSLEdBRlEsRUFHWkMsU0FIWSxDQUdGLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FIRSxFQUlaQyxLQUpZLEdBS1pDLE1BTFksQ0FLTFIsS0FBSyxH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QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxPQUFPc0QsTUFBTSxDQUFDNlgsV0FBZCxLQUE4QixVQUFsQyxFQUE4QztBQUFBLE1BQ25DQSxXQURtQyxHQUM1QyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDbENBLFVBQU0sR0FBR0EsTUFBTSxJQUFJO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCQyxnQkFBVSxFQUFFLEtBQTlCO0FBQXFDQyxZQUFNLEVBQUV6YjtBQUE3QyxLQUFuQjtBQUNBLFFBQUlrVSxHQUFHLEdBQUdqTixRQUFRLENBQUNrTixXQUFULENBQXFCLGFBQXJCLENBQVY7QUFDQUQsT0FBRyxDQUFDd0gsZUFBSixDQUFvQkwsS0FBcEIsRUFBMkJDLE1BQU0sQ0FBQ0MsT0FBbEMsRUFBMkNELE1BQU0sQ0FBQ0UsVUFBbEQsRUFBOERGLE1BQU0sQ0FBQ0csTUFBckU7QUFDQSxXQUFPdkgsR0FBUDtBQUNELEdBTjJDOztBQVE1Q2tILGFBQVcsQ0FBQ08sU0FBWixHQUF3QnBZLE1BQU0sQ0FBQ3FZLEtBQVAsQ0FBYUQsU0FBckM7QUFFQXBZLFFBQU0sQ0FBQzZYLFdBQVAsR0FBcUJBLFdBQXJCO0FBQ0Q7O0FBRUR6TyxLQUFLLENBQUNnUCxTQUFOLENBQWdCdGEsT0FBaEIsR0FBMEIsVUFBU3dhLFNBQVQsRUFBb0JDLFNBQXBCLEVBQStCO0FBQ3ZELFNBQU9BLFNBQVMsR0FDWixLQUFLM04sTUFBTCxDQUFZLFVBQVNqTixNQUFULEVBQWlCcUIsSUFBakIsRUFBdUI7QUFDbkMsUUFBSXdaLEdBQUcsR0FBR3haLElBQUksQ0FBQ3VaLFNBQUQsQ0FBSixDQUFnQkQsU0FBaEIsQ0FBVjtBQUNBM2EsVUFBTSxDQUFDNmEsR0FBRCxDQUFOLEdBQWM3YSxNQUFNLENBQUM2YSxHQUFELENBQU4sSUFBZSxFQUE3QjtBQUNBN2EsVUFBTSxDQUFDNmEsR0FBRCxDQUFOLENBQVkxYyxJQUFaLENBQWlCa0QsSUFBakI7QUFDQSxXQUFPckIsTUFBUDtBQUNELEdBTEMsRUFLQyxFQUxELENBRFksR0FPWixLQUFLaU4sTUFBTCxDQUFZLFVBQVNqTixNQUFULEVBQWlCcUIsSUFBakIsRUFBdUI7QUFDbkMsUUFBSXdaLEdBQUcsR0FBR3haLElBQUksQ0FBQ3NaLFNBQUQsQ0FBZDtBQUNBM2EsVUFBTSxDQUFDNmEsR0FBRCxDQUFOLEdBQWM3YSxNQUFNLENBQUM2YSxHQUFELENBQU4sSUFBZSxFQUE3QjtBQUNBN2EsVUFBTSxDQUFDNmEsR0FBRCxDQUFOLENBQVkxYyxJQUFaLENBQWlCa0QsSUFBakI7QUFDQSxXQUFPckIsTUFBUDtBQUNELEdBTEMsRUFLQyxFQUxELENBUEo7QUFhRCxDQWREOztBQWdCQTZLLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixVQUFTZ1EsQ0FBVCxFQUFZO0FBQzFCLFNBQU9BLENBQUMsQ0FBQzFYLE9BQUYsQ0FBVSx1QkFBVixFQUFtQyxNQUFuQyxDQUFQO0FBQ0QsQ0FGRCxDIiwiZmlsZSI6Im1ha2VNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sb3JTY2FsZShjb3VudCwgaW5kZXgpIHtcbiAgdmFyIHNjYWxlT25lID0gY2hyb21hXG4gICAgLmN1YmVoZWxpeCgpXG4gICAgLmh1ZSgwLjUpXG4gICAgLmxpZ2h0bmVzcyhbMC40LCAwLjZdKVxuICAgIC5zY2FsZSgpXG4gICAgLmNvbG9ycyhjb3VudCAqIDIpXG4gIHZhciBzY2FsZVR3byA9IGNocm9tYVxuICAgIC5jdWJlaGVsaXgoKVxuICAgIC5odWUoMSlcbiAgICAuZ2FtbWEoMC41KVxuICAgIC5zY2FsZSgpXG4gICAgLmNvbG9ycyhjb3VudCAqIDIpXG4gICAgLnJldmVyc2UoKVxuICB2YXIgc2NhbGUgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIHZhciBjb2xvciA9IGkgJSAyID09PSAwID8gc2NhbGVPbmVbaSAqIDJdIDogc2NhbGVUd29baSAqIDJdXG4gICAgY29sb3IgPSBjaHJvbWEoY29sb3IpXG4gICAgICAuc2F0dXJhdGUoKVxuICAgICAgLmhleCgpXG4gICAgc2NhbGUucHVzaChjb2xvcilcbiAgfVxuXG4gIHJldHVybiBzY2FsZVxufVxuXG5leHBvcnQgdmFyIGxpbmVXZWlnaHRzID0gW1szLCAzXSwgWzUsIDJdLCBbNCwgMy41XSwgWzcsIDNdLCBbNCwgNF1dXG5leHBvcnQgdmFyIGxpbmVEYXNoQXJyYXlzID0gW1xuICBbbnVsbCwgJzYsOSddLFxuICBbbnVsbCwgbnVsbF0sXG4gIFtudWxsLCAnNiwxMiddLFxuICBbbnVsbCwgbnVsbF0sXG4gIFsnMTgsMjQnLCAnMTgsMjQnXVxuXVxuZXhwb3J0IHZhciBleHRlcm5hbExpbmsgPVxuICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAxNSAxNVwiPjxwYXRoIGQ9XCJNNy40OSwwVjEuNjdIMS42OFYxMy4zMkgxMy4zMlY3LjUySDE1djUuNzJhMS43NiwxLjc2LDAsMCwxLS40MiwxLjE5LDEuNjQsMS42NCwwLDAsMS0xLjEzLjU2SDEuNzRhMS42NywxLjY3LDAsMCwxLTEuMTYtLjQxQTEuNjEsMS42MSwwLDAsMSwwLDEzLjQ4di0uMjdDMCw5LjQsMCw1LjYsMCwxLjhBMS44MywxLjgzLDAsMCwxLC41OC40YTEuNTMsMS41MywwLDAsMSwxLS4zOWg2WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCIvPjxwYXRoIGQ9XCJNOS4xNywxLjY3VjBIMTVWNS44NEgxMy4zNHYtM2gwYy0uMDUuMDUtLjExLjEtLjE2LjE2bC0uNDUuNDYtMS4zLDEuMjktLjg0Ljg0LS44OS45LS44OC44Ny0uODkuOWMtLjI4LjI5LS41Ny41Ny0uODYuODZMNi4xNiwxMGwtLjg4Ljg3YTEuODMsMS44MywwLDAsMS0uMTMuMTZMNCw5Ljg2bDAsMEw1LjM2LDguNDdsLjk1LTEsLjc1LS43NSwxLTFMOC44Nyw1bDEtLjk0Ljg1LS44Ni45Mi0uOTEuNTYtLjU4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCIvPjwvc3ZnPidcbmV4cG9ydCB2YXIgcmVtb3ZlID1cbiAgJzxzdmcgdmlld0JveD1cIjAgMCAyMSAyMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTIuNTkyLjA0NGwxOC4zNjQgMTguMzY0LTIuNTQ4IDIuNTQ4TC4wNDQgMi41OTJ6XCIvPjxwYXRoIGQ9XCJNMCAxOC4zNjRMMTguMzY0IDBsMi41NDggMi41NDhMMi41NDggMjAuOTEyelwiLz48L2c+PC9zdmc+J1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFR5cGUodmFsdWUpIHtcbiAgdmFyIHYgPSBOdW1iZXIodmFsdWUpXG4gIHJldHVybiAhaXNOYU4odilcbiAgICA/IHZcbiAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnbnVsbCdcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKHVybCwgZWxlbWVudCkge1xuICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgcmVxLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpXG4gIHJlcS5zZW5kKG51bGwpXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVxLnJlc3BvbnNlVGV4dFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURyb3Bkb3duT3B0aW9ucyhvcHRpb25zLCB4KSB7XG4gIHZhciBncm91cHMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdncm91cCcpXG4gIHZhciBjaG9pY2VzID0gT2JqZWN0LmtleXMoZ3JvdXBzKS5tYXAoZnVuY3Rpb24oZywgeikge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogeixcbiAgICAgIGxhYmVsOiBnLnRyaW0oKSAmJiBwYXJzZUludChnLCAxMCkgPT09IE5hTiA/IGcgOiAnJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIGNob2ljZXM6IGdyb3Vwc1tnXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHtcbiAgICBjaG9pY2VzOiBjaG9pY2VzLFxuICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWUsXG4gICAgbWF4SXRlbUNvdW50OiBvcHRpb25zLndpZGdldHNbeF0ubWF4aW11bSxcbiAgICBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzOiBmdW5jdGlvbiBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzKHRlbXBsYXRlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW06IGZ1bmN0aW9uIGl0ZW0oY2xhc3NOYW1lcywgZGF0YSkge1xuICAgICAgICAgIHZhciBrZXkgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5maW5kKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB2LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGRhdGEudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdmFyIGtleVN0eWxlXG5cbiAgICAgICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgICByZXR1cm4gay52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB2YXIgaSA9IGZvcm1zLmluZGV4T2Yoa2V5LnZhbHVlLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbWFya3VwID1cbiAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwiYm9yZGVyLWNvbG9yOicgK1xuICAgICAgICAgICAga2V5LmNvbG9yICtcbiAgICAgICAgICAgICdcIiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5pdGVtICtcbiAgICAgICAgICAgICdcIiBkYXRhLWl0ZW0gZGF0YS1pZD1cIicgK1xuICAgICAgICAgICAgZGF0YS5pZCArXG4gICAgICAgICAgICAnXCIgZGF0YS12YWx1ZT1cIicgK1xuICAgICAgICAgICAgZGF0YS52YWx1ZSArXG4gICAgICAgICAgICAnXCIgJyArXG4gICAgICAgICAgICAoZGF0YS5hY3RpdmUgPyAnYXJpYS1zZWxlY3RlZD1cInRydWVcIicgOiAnJykgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIChkYXRhLmRpc2FibGVkID8gJ2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCInIDogJycpICtcbiAgICAgICAgICAgICc+PHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgICAgIGtleVN0eWxlLmNsYXNzICtcbiAgICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAgICdzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICtcbiAgICAgICAgICAgIGtleVN0eWxlLnN2ZyArXG4gICAgICAgICAgICAnXCIpPjwvc3Bhbj4gJyArXG4gICAgICAgICAgICBjYXBpdGFsaXplKGRhdGEubGFiZWwpICtcbiAgICAgICAgICAgICc8YnV0dG9uIHN0eWxlPVwiYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAnICtcbiAgICAgICAgICAgIGtleS5jb2xvciArXG4gICAgICAgICAgICAnOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgIHdpbmRvdy5idG9hKHJlbW92ZSkgK1xuICAgICAgICAgICAgJ1xcJylcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjaG9pY2VzX19idXR0b25cIiBkYXRhLWJ1dHRvbj1cIlwiIGFyaWEtbGFiZWw9XCJSZW1vdmUgaXRlbVwiPlJlbW92ZSBpdGVtPC9idXR0b24+PC9kaXY+J1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZShtYXJrdXApXG4gICAgICAgIH0sXG4gICAgICAgIGNob2ljZTogZnVuY3Rpb24gY2hvaWNlKGNsYXNzTmFtZXMsIGRhdGEpIHtcbiAgICAgICAgICB2YXIga2V5ID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZmluZChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gdi52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBkYXRhLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHZhciBrZXlTdHlsZVxuXG4gICAgICAgICAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGsudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbWFya3VwID1cbiAgICAgICAgICAgICcgPGRpdiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5pdGVtICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBjbGFzc05hbWVzLml0ZW1DaG9pY2UgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIChkYXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgID8gY2xhc3NOYW1lcy5pdGVtRGlzYWJsZWRcbiAgICAgICAgICAgICAgOiBjbGFzc05hbWVzLml0ZW1TZWxlY3RhYmxlKSArXG4gICAgICAgICAgICAnXCIgZGF0YS1zZWxlY3QtdGV4dD1cIicgK1xuICAgICAgICAgICAgX3RoaXMuY29uZmlnLml0ZW1TZWxlY3RUZXh0ICtcbiAgICAgICAgICAgICdcIiBkYXRhLWNob2ljZSAnICtcbiAgICAgICAgICAgIChkYXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgID8gJ2RhdGEtY2hvaWNlLWRpc2FibGVkIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCInXG4gICAgICAgICAgICAgIDogJ2RhdGEtY2hvaWNlLXNlbGVjdGFibGUnKSArXG4gICAgICAgICAgICAnIGRhdGEtaWQ9XCInICtcbiAgICAgICAgICAgIGRhdGEuaWQgK1xuICAgICAgICAgICAgJ1wiIGRhdGEtdmFsdWU9XCInICtcbiAgICAgICAgICAgIGRhdGEudmFsdWUgK1xuICAgICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgICAgKGRhdGEuZ3JvdXBJZCA+IDAgPyAncm9sZT1cInRyZWVpdGVtXCInIDogJ3JvbGU9XCJvcHRpb25cIicpICtcbiAgICAgICAgICAgICc+IDxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5jbGFzcyArXG4gICAgICAgICAgICAnS2V5XCIgJyArXG4gICAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5zdmcgK1xuICAgICAgICAgICAgJ1wiKT48L3NwYW4+ICcgK1xuICAgICAgICAgICAgY2FwaXRhbGl6ZShkYXRhLmxhYmVsKSArXG4gICAgICAgICAgICAnIDwvZGl2PiAnXG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKG1hcmt1cClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udmVydFR5cGUsIGNyZWF0ZUNvbG9yU2NhbGUgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbmd1YWdlRGF0YShkYXRhKSB7XG4gIHZhciBsYW5ndWFnZURhdGEgPSB7fVxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgdmFyIGtleVxuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2x1bW4sIGkpIHtcbiAgICAgIGlmIChjb2x1bW4uaW5kZXhPZignZ3N4JCcpID4gLTEpIHtcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4ucmVwbGFjZSgnZ3N4JCcsICcnKVxuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSAnZW4nKSB7XG4gICAgICAgICAga2V5ID0gcm93W2NvbHVtbl1bJyR0J11cbiAgICAgICAgICBsYW5ndWFnZURhdGFba2V5XSA9IHt9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gbGFuZykge1xuICAgICAgICAgIGxhbmd1YWdlRGF0YVtrZXldID0gcm93W2NvbHVtbl1bJyR0J11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIHJldHVybiBsYW5ndWFnZURhdGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGVnZW5kRGF0YShvcHRpb25zLCBqc29uLCBzdHlsZSkge1xuICB2YXIgY29sb3JTY2FsZSA9IGNyZWF0ZUNvbG9yU2NhbGUoanNvbi5sZW5ndGgpXG4gIHZhciBsZWdlbmRJdGVtcyA9IFtdXG4gIGpzb24uZm9yRWFjaChmdW5jdGlvbihyb3csIHgpIHtcbiAgICB2YXIgZGF0YSA9IHt9XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgeSkge1xuICAgICAgaWYgKGNvbHVtbi5pbmRleE9mKCdnc3gkJykgPiAtMSkge1xuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5yZXBsYWNlKCdnc3gkJywgJycpXG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09ICdsYWJlbCcpIHtcbiAgICAgICAgICB2YXIga2V5ID0gcm93W2NvbHVtbl1bJyR0J10udG9Mb3dlckNhc2UoKVxuICAgICAgICAgIGRhdGEua2V5ID0ga2V5XG4gICAgICAgICAgZGF0YS5sYWJlbCA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAwXV1bJyR0J11cbiAgICAgICAgICBkYXRhLnZhbHVlID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDFdXVsnJHQnXVxuICAgICAgICAgIGRhdGEuZ3JvdXAgPSBjb252ZXJ0VHlwZShyb3dbT2JqZWN0LmtleXMocm93KVt5ICsgMl1dWyckdCddKVxuICAgICAgICAgIGRhdGEuc2VsZWN0ZWQgPSBjb252ZXJ0VHlwZShyb3dbT2JqZWN0LmtleXMocm93KVt5ICsgM11dWyckdCddKVxuICAgICAgICAgIHZhciBjb2xvclZhbCA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyA0XV1bJyR0J11cbiAgICAgICAgICBkYXRhLmZvcm0gPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNV1dWyckdCddXG4gICAgICAgICAgZGF0YS5jb2xvciA9IGNvbG9yVmFsXG4gICAgICAgICAgICA/IGNvbG9yVmFsXG4gICAgICAgICAgICA6IGRhdGEuZm9ybSA9PT0gJ2xpbmUnXG4gICAgICAgICAgICAgID8gZGVmYXVsdENvbG9yXG4gICAgICAgICAgICAgIDogY29sb3JTY2FsZVt4XVxuICAgICAgICAgIGRhdGEuaWNvbiA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyA2XV1bJyR0J11cbiAgICAgICAgICBkYXRhLnBhdHRlcm4gPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgN11dWyckdCddLnNwbGl0KCcsJylcblxuICAgICAgICAgIGlmIChvcHRpb25zLnRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgZGF0YS5sYWJlbCA9IG9wdGlvbnMudHJhbnNsYXRpb25zW2RhdGEubGFiZWxdXG4gICAgICAgICAgICBkYXRhLmdyb3VwID0gb3B0aW9ucy50cmFuc2xhdGlvbnNbZGF0YS5ncm91cF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZWdlbmRJdGVtcy5wdXNoKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICByZXR1cm4gbGVnZW5kSXRlbXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWV0YURhdGEoanNvbikge1xuICB2YXIgZGF0YSA9IHt9XG4gIGpzb24uZm9yRWFjaChmdW5jdGlvbihyb3csIHgpIHtcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCB5KSB7XG4gICAgICBpZiAoY29sdW1uLmluZGV4T2YoJ2dzeCQnKSA+IC0xKSB7XG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnJlcGxhY2UoJ2dzeCQnLCAnJylcblxuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gJ3Byb3BlcnR5Jykge1xuICAgICAgICAgIHZhciBrZXkgPSByb3dbY29sdW1uXVsnJHQnXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJycpXG4gICAgICAgICAgZGF0YVtrZXldID0gZGF0YVtrZXldIHx8IHt9XG4gICAgICAgICAgZGF0YVtrZXldID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDFdXVsnJHQnXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVdpZGdldERhdGEobWV0YURhdGEpIHtcbiAgdmFyIHdpZGdldHMgPSBbXVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoaywgaW5kZXgsIHByb3BlcnR5KSB7XG4gICAgaWYgKGsudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByb3BlcnR5KSA+IC0xKVxuICAgICAgd2lkZ2V0c1tpbmRleCAtIDFdW3Byb3BlcnR5XSA9IGNvbnZlcnRUeXBlKG1ldGFEYXRhW2tdKVxuICB9XG5cbiAgdmFyIHByb3BlcnRpZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnZmllbGQnLFxuICAgICdncm91cGluZycsXG4gICAgJ2luc3RydWN0aW9ucycsXG4gICAgJ21heGltdW0nLFxuICAgICd0eXBlJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAnc3R5bGUnXG4gIF1cbiAgT2JqZWN0LmtleXMobWV0YURhdGEpXG4gICAgLmZpbHRlcihmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gay50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpZGdldCcpID4gLTFcbiAgICB9KVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBpbmRleCA9IGsubWF0Y2goL1xcZCsvKVswXVxuICAgICAgd2lkZ2V0c1tpbmRleCAtIDFdID0gd2lkZ2V0c1tpbmRleCAtIDFdIHx8IHt9XG4gICAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgICAgcHJvY2VzcyhrLCBpbmRleCwgcHJvcGVydHkpXG4gICAgICB9KVxuICAgIH0pXG4gIHdpZGdldHMuZm9yRWFjaChmdW5jdGlvbih3LCBpKSB7XG4gICAgdy5maWVsZCA9IHcuZmllbGQucmVwbGFjZSgvIC9nLCAnXycpXG4gICAgdy5pZCA9IGlcbiAgfSlcbiAgcmV0dXJuIHdpZGdldHNcbn1cbiIsImltcG9ydCB7IGNhcGl0YWxpemUsIGxvYWQsIGxpbmVXZWlnaHRzLCBsaW5lRGFzaEFycmF5cyB9IGZyb20gJy4vaGVscGVycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVLZXkob3B0aW9ucykge1xuICB2YXIgbWFwID0gb3B0aW9ucy5tYXAsXG4gICAgZmVhdHVyZSA9IG9wdGlvbnMuZmVhdHVyZSxcbiAgICBncm91cCA9IG9wdGlvbnMuZ3JvdXAsXG4gICAga2V5ID0gb3B0aW9ucy5rZXksXG4gICAgaW5kZXggPSBvcHRpb25zLmluZGV4LFxuICAgIGZvcm1zID0gb3B0aW9ucy5mb3JtcyxcbiAgICBpY29uU2l6ZSA9IG1hcC5pY29uc2l6ZSxcbiAgICBkaXZpZGVycyA9IGljb25TaXplLm1hcChzaXplID0+IHNpemUgLyAxMilcblxuICB2YXIgY29sb3JzLCBrZXlDb2xvclxuICB2YXIga2V5ID0gZ3JvdXAgPyBncm91cFswXSA6IGtleVxuXG4gIGZvciAobGV0IHcgb2YgbWFwLndpZGdldHMpIHtcbiAgICB2YXIgZm9ybUtleVdpZGdldCA9IHcudHlwZSA9PT0gJ2Zvcm0nID8gdyA6IG51bGxcbiAgICB2YXIgY29sb3JLZXlXaWRnZXQgPSB3LnR5cGUgPT09ICdjb2xvcicgPyB3IDogbnVsbFxuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIHZhciBjb2xvcktleSA9IGNvbG9yS2V5V2lkZ2V0XG4gICAgICAgID8gY29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSlcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIHZhciBmb3JtS2V5ID0gZm9ybUtleVdpZGdldFxuICAgICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgICB9KVxuICAgICAgICA6IG51bGxcblxuICAgICAga2V5Q29sb3IgPSBjb2xvcktleSA/IGNvbG9yS2V5LmNvbG9yIDogZm9ybUtleSA/IGZvcm1LZXkuY29sb3IgOiBudWxsXG5cbiAgICAgIGljb25TaXplID0gaWNvblNpemUubWFwKHNpemUgPT4gc2l6ZSAvIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGljb25TaXplID0gaWNvblNpemUubWFwKChzaXplLCBpKSA9PiBzaXplIC8gZGl2aWRlcnNbaV0pXG4gICAgfVxuXG4gICAga2V5LmNvbG9yID1cbiAgICAgIGdyb3VwICYmXG4gICAgICBncm91cC5ldmVyeShmdW5jdGlvbihnKSB7XG4gICAgICAgIHJldHVybiBnLmNvbG9yXG4gICAgICB9KVxuICAgICAgICA/IGNocm9tYS5hdmVyYWdlKFxuICAgICAgICAgIGdyb3VwLm1hcChmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICByZXR1cm4gZy5jb2xvclxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgOiBrZXkuY29sb3JcblxuICAgIHN3aXRjaCAoa2V5LmZvcm0pIHtcbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIGtleUNvbG9yID0ga2V5LmNvbG9yXG4gICAgICAgID8ga2V5LmNvbG9yXG4gICAgICAgIDogb3B0aW9ucy5tYXAub2NlYW5jb2xvclxuICAgICAgICAgID8gb3B0aW9ucy5tYXAub2NlYW5jb2xvclxuICAgICAgICAgIDogbnVsbFxuXG4gICAgICBpZiAoZm9ybXMgJiYgZm9ybXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBzdmdcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgY29sb3JzID0gW1xuICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpLFxuICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpXG4gICAgICAgICAgXVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgICcjZmZmZmZmJ1xuICAgICAgICAgIF1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb2xvcnMgPSBbJyMwMDAwMDAnLCBrZXlDb2xvciA/IGtleUNvbG9yIDogZGVmYXVsdENvbG9yXVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgICcjZmZmZmZmJyxcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKVxuICAgICAgICAgIF1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29sb3JzID0gW1xuICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpLFxuICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpXG4gICAgICAgICAgXVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgJzxzdmcgeG1sbnM9XFwnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXCcgdmlld0JveD1cXCcwIDAgNDggMTJcXCc+PGxpbmUgeDE9XFwnMFxcJyB4Mj1cXCc0OFxcJyB5MT1cXCc1MCVcXCcgeTI9XFwnNTAlXFwnIHN0cm9rZT1cXCcnICtcbiAgICAgICAgICAgIGNvbG9yc1swXSArXG4gICAgICAgICAgICAnXFwnIHN0cm9rZS13aWR0aD1cXCcnICtcbiAgICAgICAgICAgIGxpbmVXZWlnaHRzW2luZGV4XVswXSArXG4gICAgICAgICAgICAnXFwnIHN0cm9rZS1saW5lY2FwPVxcJ3NxdWFyZVxcJyBzdHJva2UtZGFzaGFycmF5PVxcJycgK1xuICAgICAgICAgICAgKGluZGV4ID09PSA0ID8gJzE4LDEyJyA6IGxpbmVEYXNoQXJyYXlzW2luZGV4XVswXSkgK1xuICAgICAgICAgICAgJ1xcJy8+PGxpbmUgeDE9XFwnMFxcJyB4Mj1cXCc0OFxcJyB5MT1cXCc1MCVcXCcgeTI9XFwnNTAlXFwnIHN0cm9rZT1cXCcnICtcbiAgICAgICAgICAgIGNvbG9yc1sxXSArXG4gICAgICAgICAgICAnXFwnIHN0cm9rZS13aWR0aD1cXCcnICtcbiAgICAgICAgICAgIGxpbmVXZWlnaHRzW2luZGV4XVsxXSArXG4gICAgICAgICAgICAnXFwnIHN0cm9rZS1saW5lY2FwPVxcJ3NxdWFyZVxcJyBzdHJva2UtZGFzaGFycmF5PVxcJycgK1xuICAgICAgICAgICAgKGluZGV4ID09PSA0ID8gJzE4LDEyJyA6IGxpbmVEYXNoQXJyYXlzW2luZGV4XVsxXSkgK1xuICAgICAgICAgICAgJ1xcJy8+PC9zdmc+J1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVxcJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFwnIHZpZXdCb3g9XFwnMCAwIDQ4IDEyXFwnPjxsaW5lIHgxPVxcJzBcXCcgeDI9XFwnNDhcXCcgeTE9XFwnNTAlXFwnIHkyPVxcJzUwJVxcJyBzdHJva2U9XFwnJyArXG4gICAgICAgICAgICBrZXlDb2xvciArXG4gICAgICAgICAgICAnXFwnIHN0cm9rZS13aWR0aD1cXCcnICtcbiAgICAgICAgICAgIDMgK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2UtbGluZWNhcD1cXCdzcXVhcmVcXCcgc3Ryb2tlLWRhc2hhcnJheT1cXCcnICtcbiAgICAgICAgICAgICczLDcnICtcbiAgICAgICAgICAgICdcXCcvPjwvc3ZnPidcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ZnOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2Eoc3ZnKSxcbiAgICAgICAgY2xhc3M6ICdsaW5lJ1xuICAgICAgfVxuXG4gICAgY2FzZSAnaWNvbic6XG4gICAgICBpZiAoa2V5Lmljb24pIHtcbiAgICAgICAgdmFyIHNsdWcgPSBrZXkudmFsdWUucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgICAgIGxvYWQoa2V5Lmljb24sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4nKSlcbiAgICAgICAgdmFyIHN2Z0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuJykuaW5uZXJIVE1MXG5cbiAgICAgICAgaWYgKGNvbG9yS2V5V2lkZ2V0ICYmIGtleUNvbG9yKSB7XG4gICAgICAgICAgc3ZnQ29udGVudCA9IHN2Z0NvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgIC8oKFxcYmZpbGw9XCIjKSgoWzAtYS1mQS1GXXsyfSl7M318KFswLTlhLWZBLUZdKXszfSlcIikvZ2ksXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgIClcbiAgICAgICAgICBzdmdDb250ZW50ID0gc3ZnQ29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgLyg8Y2lyY2xlIHw8cmVjdGFuZ2xlIHw8ZWxsaXBzZSB8PHBvbHlnb24gfDxwYXRoICkvZyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKG1hdGNoLCBwMSwgcDIsIHAzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaC5yZXBsYWNlKG1hdGNoLCBtYXRjaCArICdmaWxsPVwiJyArIGtleUNvbG9yICsgJ1wiICcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgc3ZnID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHN2Z0NvbnRlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCInICtcbiAgICAgICAgICAgICAgICBpY29uU2l6ZVswXSAvIDIgK1xuICAgICAgICAgICAgICAgICdcIiBjeT1cIicgK1xuICAgICAgICAgICAgICAgIGljb25TaXplWzFdIC8gMiArXG4gICAgICAgICAgICAgICAgJ1wiIHI9XCInICtcbiAgICAgICAgICAgICAgICAoaWNvblNpemVbMF0gKyBpY29uU2l6ZVsxXSkgLyA0ICtcbiAgICAgICAgICAgICAgICAnXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgIChrZXlDb2xvciB8fCBrZXkuY29sb3IpICtcbiAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgIGNsYXNzOiBrZXkuaWNvbiA/ICdpY29uJyA6ICdjb2xvcidcbiAgICAgIH1cblxuICAgIGNhc2UgJ3BhdHRlcm4nOlxuICAgICAga2V5Q29sb3IgPSBrZXkuY29sb3JcbiAgICAgIHZhciBzdmdcblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGtleS5wYXR0ZXJuWzBdLmluZGV4T2YoJ3N0cmlwZScpID4gLTE6XG4gICAgICAgIHZhciBjb2xvclR3byA9IGtleS5wYXR0ZXJuWzFdXG4gICAgICAgIHZhciBjb2xvck9uZSA9IGtleS5wYXR0ZXJuW2tleS5wYXR0ZXJuLmxlbmd0aCAtIDFdXG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgK1xuICAgICAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiPjxwb2x5Z29uIHBvaW50cz1cIjUuNzMgMCA0LjY3IDAgMCA0LjY2IDAgNS43MSA1LjczIDBcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvck9uZSArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjIuMjggMCAxLjIyIDAgMCAxLjIyIDAgMi4yNyAyLjI4IDBcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvclR3byArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjguODUgMCA3Ljc5IDAgMCA3Ljc3IDAgOC44MiA4Ljg1IDBcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvclR3byArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEyIDAgMTEuMjQgMCAwIDExLjIgMCAxMiAwLjI2IDEyIDEyIDAuMyAxMiAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiAxMC4xMiAxMiA5LjA2IDkuMDUgMTIgMTAuMTEgMTIgMTIgMTAuMTJcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvclR3byArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEyIDMuNTIgMTIgMi40NiAyLjQzIDEyIDMuNDkgMTIgMTIgMy41MlwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yVHdvICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTIgNi45NiAxMiA1LjkgNS44OCAxMiA2Ljk0IDEyIDEyIDYuOTZcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvck9uZSArXG4gICAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIGtleS5wYXR0ZXJuWzBdLmluZGV4T2YoJ2RvdCcpID4gLTE6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgK1xuICAgICAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMy4wNlwiIGhlaWdodD1cIjE1LjFcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCI+PHRpdGxlPnN0cmlwZXM8L3RpdGxlPjxwYXRoIGQ9XCJNNS40OSwxQTEuMTYsMS4xNiwwLDEsMSw0LjMzLS4xNiwxLjE2LDEuMTYsMCwwLDEsNS40OSwxWk00LjMzLDMuNzdBMS4xNiwxLjE2LDAsMSwwLDUuNDksNC45MywxLjE1LDEuMTUsMCwwLDAsNC4zMywzLjc3Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMSwwLDUuNDksOC44NiwxLjE1LDEuMTUsMCwwLDAsNC4zMyw3LjdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTUsMS4xNSwwLDAsMCw0LjMzLDExLjYzWk0xMS41LS4xNkExLjE2LDEuMTYsMCwxLDAsMTIuNjYsMSwxLjE2LDEuMTYsMCwwLDAsMTEuNS0uMTZabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTYsMS4xNiwwLDAsMCwxMS41LDMuNzdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTYsMS4xNiwwLDAsMCwxMS41LDcuN1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNiwxLjE2LDAsMCwwLDExLjUsMTEuNjNaTTcuOTItMS4xNkExLjE2LDEuMTYsMCwwLDAsNi43NiwwLDEuMTYsMS4xNiwwLDAsMCw3LjkyLDEuMTYsMS4xNiwxLjE2LDAsMCwwLDkuMDcsMCwxLjE2LDEuMTYsMCwwLDAsNy45Mi0xLjE2Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMSwwLDkuMDcsMy45MywxLjE2LDEuMTYsMCwwLDAsNy45MiwyLjc3Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMSwwLDkuMDcsNy44NiwxLjE2LDEuMTYsMCwwLDAsNy45Miw2LjdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNSwxLjE2QTEuMTYsMS4xNiwwLDAsMCw3LjkyLDEwLjYzWk0uNzUtMS4xNkExLjE2LDEuMTYsMCwwLDAtLjQxLDAsMS4xNiwxLjE2LDAsMCwwLC43NSwxLjE2LDEuMTYsMS4xNiwwLDAsMCwxLjkxLDAsMS4xNiwxLjE2LDAsMCwwLC43NS0xLjE2Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMSwwLDEuOTEsMy45MywxLjE2LDEuMTYsMCwwLDAsLjc1LDIuNzdabTAsMy45M0ExLjE2LDEuMTYsMCwwLDAtLjQxLDcuODYsMS4xNSwxLjE1LDAsMCwwLC43NSw5LDEuMTUsMS4xNSwwLDAsMCwxLjkxLDcuODYsMS4xNiwxLjE2LDAsMCwwLC43NSw2LjdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTYsMS4xNiwwLDAsMCwuNzUsMTAuNjNaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuNyAyKVwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yT25lICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICAgICAgICApXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgK1xuICAgICAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjZcIiBjeT1cIjZcIiByPVwiNVwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGtleUNvbG9yICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICBjbGFzczoga2V5LnBhdHRlcm4gPyAncGF0dGVybicgOiAnY29sb3InXG4gICAgICB9XG5cbiAgICBjYXNlICdzaGFwZSc6XG4gICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICByZXR1cm4gdy50eXBlID09PSAnY29sb3InXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBjb2xvcktleSA9IGNvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBrZXlDb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBrZXlDb2xvciA/IGtleUNvbG9yIDogbnVsbFxuICAgICAgfVxuXG4gICAgICB2YXIgc3ZnXG5cbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cInJhaW5ib3dcIiAgeTE9XCI0LjVcIiB4Mj1cIjlcIiB5Mj1cIjQuNVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDQuNSAtNC41KSByb3RhdGUoMTM1KVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzdmM2M4ZFwiLz48c3RvcCBvZmZzZXQ9XCIwLjMyNVwiIHN0b3AtY29sb3I9XCIjZTczZjc0XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNjc1XCIgc3RvcC1jb2xvcj1cIiMxMWE1NzlcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjMzk2OWFjXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9XCIzLjI1XCIgeT1cIjEuNzVcIiB3aWR0aD1cIjlcIiBoZWlnaHQ9XCI5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQuNSAtNC41KSByb3RhdGUoNDUpXCIgJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/ICdwYWludC1vcmRlcj1cInN0cm9rZVwiIHN0cm9rZT1cIiNmZmZmZmZcIicgOiAnJykgK1xuICAgICAgICAgICAgICAnIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8ga2V5Q29sb3IgOiAndXJsKCNyYWluYm93KScpICtcbiAgICAgICAgICAgICAgJ1wiIC8+PC9zdmc+J1xuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgeTE9XCI1XCIgeDI9XCIxMFwiIHkyPVwiNVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48c3RvcCBvZmZzZXQ9XCIwLjI1XCIgc3RvcC1jb2xvcj1cIiMxMWE1NzlcIi8+PHN0b3Agb2Zmc2V0PVwiMC41XCIgc3RvcC1jb2xvcj1cIiNmMmI3MDFcIi8+PHN0b3Agb2Zmc2V0PVwiMC43NVwiIHN0b3AtY29sb3I9XCIjZTczZjc0XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzdmM2M4ZFwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiAnICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8gJ3N0cm9rZT1cIiNmZmZmZmZcIicgOiAnJykgK1xuICAgICAgICAgICAgICAnIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8ga2V5Q29sb3IgOiAndXJsKCNyYWluYm93KScpICtcbiAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cInJhaW5ib3dcIiB5MT1cIjVcIiB4Mj1cIjEwXCIgeTI9XCI1XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjMzk2OWFjXCIvPjxzdG9wIG9mZnNldD1cIjAuMzI1XCIgc3RvcC1jb2xvcj1cIiMxMWE1NzlcIi8+PHN0b3Agb2Zmc2V0PVwiMC41XCIgc3RvcC1jb2xvcj1cIiNmMmI3MDFcIi8+PHN0b3Agb2Zmc2V0PVwiMC42NzVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBvbHlnb24gcG9pbnRzPVwiNiAxMC4zOSAwIDEwLjM5IDMgNS4yIDYgMCA5IDUuMiAxMiAxMC4zOSA2IDEwLjM5XCIgJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/ICdwYWludC1vcmRlcj1cInN0cm9rZVwiIHN0cm9rZT1cIiNmZmZmZmZcIicgOiAnJykgK1xuICAgICAgICAgICAgICAnIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8ga2V5Q29sb3IgOiAndXJsKCNyYWluYm93KScpICtcbiAgICAgICAgICAgICAgJ1wiIC8+PC9zdmc+J1xuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwicmFpbmJvd1wiIHkxPVwiNVwiIHgyPVwiMTBcIiB5Mj1cIjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMzOTY5YWNcIi8+PHN0b3Agb2Zmc2V0PVwiMC4yNVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNzVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD1cIjZcIiBjeT1cIjZcIiByPVwiNVwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAnc3Ryb2tlPVwiI2ZmZmZmZlwiJyA6ICcnKSArXG4gICAgICAgICAgICAgICcgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyBrZXlDb2xvciA6ICd1cmwoI3JhaW5ib3cpJykgK1xuICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ZnOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2Eoc3ZnKSxcbiAgICAgICAgY2xhc3M6ICdzaGFwZSdcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICBrZXlDb2xvciA9IGtleS5jb2xvclxuXG4gICAgICBzdmcgPVxuICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgK1xuICAgICAgICAgIHdpbmRvdy5idG9hKFxuICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCInICtcbiAgICAgICAgICAgICAgaWNvblNpemVbMF0gLyAyICtcbiAgICAgICAgICAgICAgJ1wiIGN5PVwiJyArXG4gICAgICAgICAgICAgIGljb25TaXplWzFdIC8gMiArXG4gICAgICAgICAgICAgICdcIiByPVwiJyArXG4gICAgICAgICAgICAgIChpY29uU2l6ZVswXSArIGljb25TaXplWzFdKSAvIDQgK1xuICAgICAgICAgICAgICAnXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgfHwga2V5LmNvbG9yKSArXG4gICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICAgIClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICBjbGFzczogJ2NvbG9yJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwidmFyIG1hcElkID0gMFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21NYXAoY29udGFpbmVyLCBwcm9wZXJ0aWVzKSB7XG4gIHRoaXMuaWQgPSBtYXBJZCsrXG4gIHRoaXMuZmlsdGVycyA9IFtdXG4gIHRoaXMuZ3JvdXBzID0gW11cbiAgdGhpcy5qc29uID0gW11cbiAgdGhpcy5sZWFmbGV0XG5cbiAgdmFyIF90aGlzID0gdGhpc1xuXG4gIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICBfdGhpc1twcm9wZXJ0eS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJycpXSA9IHByb3BlcnRpZXNbcHJvcGVydHldXG4gIH0pXG4gIF90aGlzLnBvcHVwY29udGVudCA9XG4gICAgX3RoaXMucG9wdXBjb250ZW50ICYmIHR5cGVvZiBfdGhpcy5wb3B1cGNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICA/IF90aGlzLnBvcHVwY29udGVudC5zcGxpdCgnLCcpXG4gICAgICA6IF90aGlzLnBvcHVwY29udGVudCAmJiB0aGlzLnBvcHVwY29udGVudCA9PT0gJ29iamVjdCdcbiAgICAgICAgPyBfdGhpcy5wb3B1cGNvbnRlbnRcbiAgICAgICAgOiBbXVxuICBfdGhpcy5wb3B1cGhlYWRlcnMgPVxuICAgIF90aGlzLnBvcHVwaGVhZGVycyAmJiB0eXBlb2YgX3RoaXMucG9wdXBoZWFkZXJzID09PSAnc3RyaW5nJ1xuICAgICAgPyBfdGhpcy5wb3B1cGhlYWRlcnMuc3BsaXQoJywnKVxuICAgICAgOiBfdGhpcy5wb3B1cGhlYWRlcnMgJiYgX3RoaXMucG9wdXBoZWFkZXJzID09PSAnb2JqZWN0J1xuICAgICAgICA/IF90aGlzLnBvcHVwaGVhZGVyc1xuICAgICAgICA6IFtdXG4gIEN1c3RvbU1hcC5hbGwgPSBDdXN0b21NYXAuYWxsIHx8IFtdXG4gIEN1c3RvbU1hcC5hbGwucHVzaCh0aGlzKVxuXG4gIF90aGlzLnJlc2V0RmlsdGVycyA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzLmZpbHRlcnMgPSBbXVxuICB9XG5cbiAgX3RoaXMucmVtb3ZlR3JvdXBzID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMuZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgIF90aGlzLmxlYWZsZXQucmVtb3ZlTGF5ZXIoZ3JvdXApXG4gICAgfSlcblxuICAgIF90aGlzLmdyb3VwcyA9IFtdXG4gIH1cblxuICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzLmxlYWZsZXQgPSBMLm1hcChjb250YWluZXIsIHtcbiAgICAgIG1pblpvb206IF90aGlzLm1pbnpvb20gfHwgbnVsbCxcbiAgICAgIG1heFpvb206IF90aGlzLm1heHpvb20gfHwgMjAsXG4gICAgICBtYXhCb3VuZHM6IF90aGlzLm1heGJvdW5kcyB8fCBbX3RoaXMuc3dib3VuZHMsIF90aGlzLm5lYm91bmRzXSxcbiAgICAgIHNjcm9sbFdoZWVsWm9vbTogd2luZG93LmlubmVyV2lkdGggPCA3NjggPyBmYWxzZSA6IHRydWUsXG4gICAgICB6b29tQ29udHJvbDpcbiAgICAgICAgIV90aGlzLmhhc093blByb3BlcnR5KCd6b29tc2xpZGVyJykgfHwgX3RoaXMuem9vbXNsaWRlciA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKF90aGlzLmxvYWRFdmVudCkgX3RoaXMubGVhZmxldC5vbignbG9hZCcsIF90aGlzLmxvYWRldmVudClcbiAgICBpZiAoX3RoaXMuYWRkRXZlbnQpIF90aGlzLmxlYWZsZXQub24oJ2xheWVyYWRkJywgX3RoaXMuYWRkZXZlbnQpXG4gICAgdGhpcy5sZWFmbGV0LnNldFZpZXcoX3RoaXMuY2VudGVyLCBfdGhpcy56b29tIHx8IDIpXG4gICAgTC50aWxlTGF5ZXIoXG4gICAgICAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvaWxhYm1lZGlhLycgK1xuICAgICAgICBfdGhpcy5tYXBib3hzdHlsZSArXG4gICAgICAgICcvdGlsZXMvMjU2L3t6fS97eH0ve3l9P2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFXeGhZbTFsWkdsaElpd2lZU0k2SW1OcGJIWXljWFoyYlRBeGFqWjFjMnR6ZFdVMWIzZ3lkbllpZlEuQUh4bDhwUFpzanNxb3o5NS02MDRudycsXG4gICAgICB7fVxuICAgICkuYWRkVG8oX3RoaXMubGVhZmxldClcblxuICAgIGlmICghX3RoaXMuaGFzT3duUHJvcGVydHkoJ3pvb21zbGlkZXInKSB8fCBfdGhpcy56b29tc2xpZGVyKSB7XG4gICAgICBMLmNvbnRyb2wuem9vbXNsaWRlcigpLmFkZFRvKF90aGlzLmxlYWZsZXQpXG4gICAgfVxuXG4gICAgaWYgKF90aGlzLmZ1bGxzY3JlZW4pIHtcbiAgICAgIHdpbmRvdy5mdWxsc2NyZWVuID0gbmV3IEwuQ29udHJvbC5GdWxsc2NyZWVuKClcblxuICAgICAgX3RoaXMubGVhZmxldC5hZGRDb250cm9sKHdpbmRvdy5mdWxsc2NyZWVuKVxuICAgIH1cblxuICAgIEwuY29udHJvbFxuICAgICAgLmF0dHJpYnV0aW9uKHtcbiAgICAgICAgcG9zaXRpb246ICdib3R0b21sZWZ0J1xuICAgICAgfSlcbiAgICAgIC5zZXRQcmVmaXgoX3RoaXMuYXR0cmlidXRpb24pXG4gICAgICAuYWRkVG8oX3RoaXMubGVhZmxldClcblxuICAgIF90aGlzLnJlc2V0RmlsdGVycygpXG5cbiAgICByZXR1cm4gX3RoaXNcbiAgfVxufVxuIiwiaW1wb3J0IHsgZXh0ZXJuYWxMaW5rIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVGZWF0dXJlRXZlbnRzKGZlYXR1cmUsIGxheWVyLCBtYXApIHtcbiAgdmFyIGV2ZW50T3B0aW9ucyA9IG1hcC5vbmVhY2hmZWF0dXJlXG4gICAgPyBtYXAub25lYWNoZmVhdHVyZVxuICAgIDoge1xuICAgICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKCkge1xuICAgICAgICBoYW5kbGVMYXllckNsaWNrKGZlYXR1cmUsIGxheWVyLCBtYXAubGVhZmxldClcbiAgICAgIH1cbiAgICB9XG5cbiAgT2JqZWN0LmtleXMoZXZlbnRPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgbGF5ZXIub24obGlzdGVuZXIsIGV2ZW50T3B0aW9uc1tsaXN0ZW5lcl0pXG4gIH0pXG5cbiAgdmFyIHBvcHVwQ29udGVudCA9XG4gICAgdHlwZW9mIG1hcC5mb3JtYXRwb3B1cGNvbnRlbnQgPT09ICdmdW5jdGlvbidcbiAgICAgID8gbWFwLmZvcm1hdHBvcHVwY29udGVudChmZWF0dXJlLCBtYXApXG4gICAgICA6IGZvcm1hdFBvcHVwQ29udGVudChmZWF0dXJlLCBtYXApXG4gIGxheWVyLmJpbmRQb3B1cChwb3B1cENvbnRlbnQpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFBvcHVwQ29udGVudChmZWF0dXJlLCBtYXApIHtcbiAgdmFyIGNvbnRlbnRcbiAgY29udGVudCA9IE9iamVjdC5rZXlzKGZlYXR1cmUucHJvcGVydGllcylcbiAgICAubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgIGlmIChmZWF0dXJlLnByb3BlcnRpZXNbcF0pIHtcbiAgICAgICAgaWYgKG1hcC5wb3B1cGhlYWRlcnMubGVuZ3RoICYmIG1hcC5wb3B1cGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcC5wb3B1cGhlYWRlcnMuaW5kZXhPZihwKSA+IC0xICYmXG4gICAgICAgICAgICBtYXAucG9wdXBjb250ZW50LmluZGV4T2YocCkgPiAtMVxuICAgICAgICAgICAgPyAnPGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj4nICtcbiAgICAgICAgICAgICAgICBwLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnICcpICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1twXSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIDogbWFwLnBvcHVwY29udGVudC5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgICAgPyAnPGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1twXSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9IGVsc2UgaWYgKG1hcC5wb3B1cGhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcC5wb3B1cGhlYWRlcnMuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIHAudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9IGVsc2UgaWYgKG1hcC5wb3B1cGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcC5wb3B1cGNvbnRlbnQuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArIGZlYXR1cmUucHJvcGVydGllc1twXSArICc8L2Rpdj4nXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgcC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKSArXG4gICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgIHJldHVybiBwXG4gICAgfSlcbiAgICAuam9pbignJylcbiAgdmFyIGxpbmsgPSBmZWF0dXJlLnByb3BlcnRpZXMuaHlwZXJsaW5rIHx8IGZlYXR1cmUucHJvcGVydGllcy5saW5rXG4gIHZhciBleHRlcm5hbExpbmtDb250ZW50ID1cbiAgICBsaW5rICYmIGxpbmsudHJpbSgpXG4gICAgICA/ICc8ZGl2IGNsYXNzPVwic2VwYXJhdG9yXCI+PC9kaXY+PGRpdiBjbGFzcz1cImh5cGVybGluayBwb3B1cEVudHJ5U3R5bGVcIj48YSBjbGFzcz1cInRyYW5zbGF0ZVwiIGhyZWY9JyArXG4gICAgICAgIGxpbmsudHJpbSgpICtcbiAgICAgICAgJyB0YXJnZXQ9XCJfYmxhbmtcIj4nICtcbiAgICAgICAgbWFwLmV4dGVybmFsTGlua1RleHQgK1xuICAgICAgICAnPC9hPicgK1xuICAgICAgICBleHRlcm5hbExpbmsgK1xuICAgICAgICAnPC9kaXY+J1xuICAgICAgOiAnJ1xuICBjb250ZW50ICs9IGV4dGVybmFsTGlua0NvbnRlbnRcblxuICBpZiAobGFuZykge1xuICAgIHZhciB0cmFuc2xhdGFibGVTdHJpbmdzID0gT2JqZWN0LmtleXMobWFwLnRyYW5zbGF0aW9ucykuc29ydChmdW5jdGlvbihcbiAgICAgIGEsXG4gICAgICBiXG4gICAgKSB7XG4gICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aFxuICAgIH0pXG4gICAgdHJhbnNsYXRhYmxlU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFxiKCcgKyBSZWdFeHAuZXNjYXBlKHQpICsgJyknLCAnZ2knKVxuICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZSwgbWFwLnRyYW5zbGF0aW9uc1t0XSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRcbn1cblxud2luZG93LmhhbmRsZUxheWVyQ2xpY2sgPSBmdW5jdGlvbihmZWF0dXJlLCBsYXllciwgbGVhZmxldCkge1xuICB2YXIgaXNTcGlkZXJmaWVkID0gZmFsc2VcblxuICBpZiAoIWxheWVyLl9wcmVTcGlkZXJmeUxhdGxuZykge1xuICAgIE9iamVjdC5rZXlzKGxlYWZsZXQuX2xheWVycykuZm9yRWFjaChmdW5jdGlvbihsLCBpKSB7XG4gICAgICBpZiAobGVhZmxldC5fbGF5ZXJzW2xdLnVuc3BpZGVyZnkpIGxlYWZsZXQuX2xheWVyc1tsXS51bnNwaWRlcmZ5KClcbiAgICB9KVxuXG4gICAgaWYgKGxheWVyLl9fcGFyZW50KSB7XG4gICAgICBPYmplY3QudmFsdWVzKGxheWVyLl9fcGFyZW50Ll9ncm91cC5fZmVhdHVyZUdyb3VwLl9sYXllcnMpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICBpZiAodi5fZ3JvdXAgJiYgdi5fZ3JvdXAuX3NwaWRlcmZpZWQpIGlzU3BpZGVyZmllZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubGVhZmxldC1tYXJrZXItaWNvbicpKS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIChkLnN0eWxlLm9wYWNpdHkgPSBpc1NwaWRlcmZpZWQgPyAwLjMzIDogMSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcubGVhZmxldC1tYXJrZXItaWNvbicpKS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIChkLnN0eWxlLm9wYWNpdHkgPSBpc1NwaWRlcmZpZWQgPyAwLjMzIDogMSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHN0eWxlS2V5IGZyb20gJy4vc3R5bGVLZXkuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApIHtcbiAgdmFyIHBvaW50U3R5bGUsIGtleSwgc3R5bGVPcHRpb25zXG5cbiAgdmFyIEN1c3RvbUljb24gPSBMLkljb24uZXh0ZW5kKHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBpY29uU2l6ZTogbWFwLmljb25zaXplIHx8IFsyMCwgMjBdLFxuICAgICAgaWNvbkFuY2hvcjogbWFwLmljb25zaXplXG4gICAgICAgID8gbWFwLmljb25zaXplIC8gNFxuICAgICAgICA6IG1hcC5pY29uYW5jaG9yXG4gICAgICAgICAgPyBtYXAuaWNvbmFuY2hvclxuICAgICAgICAgIDogWzUsIDVdXG4gICAgfVxuICB9KVxuXG4gIHZhciBub25Qb2ludFN0eWxlLCBrZXksIGRpdkljb25cblxuICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICBpZiAoIXcua2V5cykgcmV0dXJuXG4gICAgdmFyIGtleSA9IHcua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZlYXR1cmUucHJvcGVydGllc1t3LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICB9KVxuXG4gIHZhciBmb3JtS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVyblxuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBmZWF0dXJlLnByb3BlcnRpZXNbdy5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgIH0pXG5cbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2Zvcm0nXG4gIH0pXG5cbiAgZm9yIChsZXQgdyBvZiBtYXAud2lkZ2V0cykge1xuICAgIHZhciB0aGlzRm9ybUtleVdpZGdldCA9IHcudHlwZSA9PT0gJ2Zvcm0nID8gdyA6IGZvcm1LZXlXaWRnZXRcbiAgICB2YXIgdGhpc0NvbG9yS2V5V2lkZ2V0ID0gdy50eXBlID09PSAnY29sb3InID8gdyA6IG51bGxcblxuICAgIHZhciBjb2xvcktleSA9IHRoaXNDb2xvcktleVdpZGdldFxuICAgICAgPyB0aGlzQ29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXNDb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGZvcm1LZXkgPSB0aGlzRm9ybUtleVdpZGdldFxuICAgICAgPyB0aGlzRm9ybUtleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBjb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBmb3JtS2V5ID8gZm9ybUtleS5jb2xvciA6IG51bGxcblxuICAgIGlmICh0aGlzRm9ybUtleVdpZGdldCAmJiBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdKSB7XG4gICAgICB2YXIgZm9ybXMgPSB0aGlzRm9ybUtleVdpZGdldC5rZXlzLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiBrLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICB2YXIgaSA9IGZvcm1zLmluZGV4T2YoXG4gICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzRm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgKVxuICAgICAga2V5ID0gdGhpc0Zvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzRm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcblxuICAgICAgaWYgKCFrZXkpIGJyZWFrXG5cbiAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgIGtleTogZm9ybUtleSxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgZmVhdHVyZTogZmVhdHVyZVxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5LmZvcm0gPT09ICdkaXYnKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGZlYXR1cmUucHJvcGVydGllc1t0aGlzRm9ybUtleVdpZGdldC5maWVsZF1cbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWUgPyB2YWx1ZS5zcGxpdCgnficpLmxlbmd0aCA6IDBcblxuICAgICAgICBkaXZJY29uID0gTC5kaXZJY29uKHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdpY29uLWRpdicsXG4gICAgICAgICAgaHRtbDpcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JyArXG4gICAgICAgICAgICBjb2xvciArXG4gICAgICAgICAgICAnXCI+JyArXG4gICAgICAgICAgICBjb3VudCArXG4gICAgICAgICAgICAnPC9zcGFuPidcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcG9pbnRTdHlsZSA9IGRpdkljb24gPyBkaXZJY29uIDogc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzQ29sb3JLZXlXaWRnZXQgJiZcbiAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzQ29sb3JLZXlXaWRnZXQuZmllbGRdXG4gICAgKSB7XG4gICAgICBrZXkgPSB0aGlzQ29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzQ29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG5cbiAgICAgIGlmICgha2V5KSBicmVha1xuXG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICBrZXk6IGNvbG9yS2V5LFxuICAgICAgICBjb2xvcjogY29sb3JLZXkuY29sb3IsXG4gICAgICAgIG1hcDogbWFwLFxuICAgICAgICBmZWF0dXJlOiBmZWF0dXJlXG4gICAgICB9XG5cbiAgICAgIHBvaW50U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdmcgPVxuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjZcIiBjeT1cIjZcIiByPVwiNVwiIGZpbGw9XCInICtcbiAgICAgICAgY29sb3IgK1xuICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgIHBvaW50U3R5bGUgPSB7XG4gICAgICAgIGNsYXNzOiAnZGVmYXVsdCcsXG4gICAgICAgIHN2ZzogZW5jb2RlVVJJKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmcpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpY29uVXJsID0gcG9pbnRTdHlsZS5zdmdcbiAgICB2YXIgaWNvbiA9IG5ldyBDdXN0b21JY29uKHtcbiAgICAgIGljb25Vcmw6IGljb25VcmxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIEwubWFya2VyKGxhdGxuZywge1xuICAgIGljb246IGRpdkljb24gPyBkaXZJY29uIDogaWNvblxuICB9KVxufVxuIiwiaW1wb3J0IHN0eWxlS2V5IGZyb20gJy4vc3R5bGVLZXkuanMnXG5pbXBvcnQgeyBsaW5lV2VpZ2h0cywgbGluZURhc2hBcnJheXMgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgbWFwLCBpbmRleCkge1xuICB2YXIgbm9uUG9pbnRTdHlsZSxcbiAgICBjb2xvcnMgPSBbXSxcbiAgICBmb3JtcyA9IFtdLFxuICAgIHNvcnQgPSBbJ2Zvcm0nLCAnY29sb3InXVxuXG4gIHZhciBjb2xvcktleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgIGlmICghdy5rZXlzKSByZXR1cm5cbiAgICB2YXIga2V5ID0gdy5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSAnY29sb3InXG4gIH0pXG5cbiAgdmFyIGZvcm1LZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICBpZiAoIXcua2V5cykgcmV0dXJuXG4gICAgdmFyIGtleSA9IHcua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZlYXR1cmUucHJvcGVydGllc1t3LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcblxuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSAnZm9ybSdcbiAgfSlcblxuICBmb3IgKGxldCB3IG9mIG1hcC53aWRnZXRzKSB7XG4gICAgdmFyIGNvbG9yS2V5ID0gY29sb3JLZXlXaWRnZXRcbiAgICAgID8gY29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICB2YXIgZm9ybUtleSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgID8gZm9ybUtleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGZvcm1LZXkgPyBmb3JtS2V5LmNvbG9yIDogbnVsbFxuXG4gICAgdmFyIGZvcm1LZXlGb3JtID0gZm9ybUtleVdpZGdldFxuICAgICAgPyBmb3JtS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGNvbG9yS2V5Rm9ybSA9IGNvbG9yS2V5V2lkZ2V0XG4gICAgICA/IGNvbG9yS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGZvcm0gPSBmb3JtS2V5V2lkZ2V0XG4gICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYykge1xuICAgICAgICByZXR1cm4gYy5mb3JtXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAoZm9ybUtleVdpZGdldCAmJiBmb3JtID09PSAnbGluZScpIHtcbiAgICAgIGZvcm1zID0gZm9ybUtleVdpZGdldC5rZXlzLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICB9KVxuICAgICAgZm9ybXMuZm9yRWFjaChmdW5jdGlvbihmLCBpKSB7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgY29sb3JzLnB1c2goWyd0cmFuc3BhcmVudCcsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFtudWxsLCBkZWZhdWx0Q29sb3JdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsnIzAwMDAwMCcsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsnI2ZmZmZmZicsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xvcnMucHVzaChbbnVsbCwgbnVsbF0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoZm9ybXMubGVuZ3RoICYmIGZvcm1LZXlGb3JtID09PSAnbGluZScpIHx8XG4gICAgICAoZm9ybXMubGVuZ3RoICYmIGNvbG9yS2V5Rm9ybSA9PT0gJ2xpbmUnKVxuICAgICkge1xuICAgICAgaWYgKGZvcm1LZXlXaWRnZXQpIHtcbiAgICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllc1tmb3JtS2V5V2lkZ2V0LmZpZWxkXSlcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgY29sb3JzW2ldW2luZGV4XSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyAnI2NhZDJkMydcbiAgICAgICAgICAgICAgICA6IGNvbG9yc1tpXVtpbmRleF0gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gY29sb3JzW2ldW2luZGV4XVxuICAgICAgICAgICAgICAgICAgOiBjb2xvcixcbiAgICAgICAgICAgIHdlaWdodDogbGluZVdlaWdodHNbaV1baW5kZXhdLFxuICAgICAgICAgICAgbGluZUNhcDogJ3NxdWFyZScsXG4gICAgICAgICAgICBkYXNoQXJyYXk6IGxpbmVEYXNoQXJyYXlzW2ldID8gbGluZURhc2hBcnJheXNbaV1baW5kZXhdIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm9ybUtleUZvcm0gPT09ICdsaW5lJyB8fCBjb2xvcktleUZvcm0gPT09ICdsaW5lJykge1xuICAgICAgbm9uUG9pbnRTdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB3ZWlnaHQ6IDIsXG4gICAgICAgIGxpbmVDYXA6ICdzcXVhcmUnLFxuICAgICAgICBkYXNoQXJyYXk6ICczLDcnXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2xvcktleSAmJiBjb2xvcktleS5mb3JtID09PSAncGF0dGVybicpIHtcbiAgICAgIHZhciBwYXR0ZXJuXG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBjb2xvcktleS5wYXR0ZXJuWzBdLmluZGV4T2YoJ3N0cmlwZScpID4gLTE6XG4gICAgICAgIHZhciBwYXR0ZXJuT3B0aW9ucyA9IHtcbiAgICAgICAgICB3ZWlnaHQ6IDMsXG4gICAgICAgICAgc3BhY2VXZWlnaHQ6IDMsXG4gICAgICAgICAgY29sb3I6IGNvbG9yS2V5LnBhdHRlcm5bMV0sXG4gICAgICAgICAgc3BhY2VDb2xvcjogY29sb3JLZXkucGF0dGVybltjb2xvcktleS5wYXR0ZXJuLmxlbmd0aCAtIDFdLFxuICAgICAgICAgIHNwYWNlT3BhY2l0eTogMSxcbiAgICAgICAgICBhbmdsZTogNDVcbiAgICAgICAgfVxuICAgICAgICBwYXR0ZXJuID0gbmV3IEwuU3RyaXBlUGF0dGVybihwYXR0ZXJuT3B0aW9ucylcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBjb2xvcktleS5wYXR0ZXJuWzBdLmluZGV4T2YoJ2RvdCcpID4gLTE6XG4gICAgICAgIHZhciBzaGFwZU9wdGlvbnMgPSB7XG4gICAgICAgICAgeDogNCxcbiAgICAgICAgICB5OiA0LFxuICAgICAgICAgIHJhZGl1czogMixcbiAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgIHN0cm9rZTogZmFsc2UsXG4gICAgICAgICAgZmlsbENvbG9yOiBjb2xvcktleS5wYXR0ZXJuW2NvbG9yS2V5LnBhdHRlcm4ubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgZmlsbE9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2hhcGUgPSBuZXcgTC5QYXR0ZXJuQ2lyY2xlKHNoYXBlT3B0aW9ucylcbiAgICAgICAgdmFyIHBhdHRlcm5PcHRpb25zID0ge1xuICAgICAgICAgIHdpZHRoOiA4LFxuICAgICAgICAgIGhlaWdodDogOFxuICAgICAgICB9XG4gICAgICAgIHBhdHRlcm4gPSBuZXcgTC5QYXR0ZXJuKHBhdHRlcm5PcHRpb25zKVxuICAgICAgICBwYXR0ZXJuLmFkZFNoYXBlKHNoYXBlKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBwYXR0ZXJuLmFkZFRvKG1hcC5sZWFmbGV0KVxuICAgICAgbm9uUG9pbnRTdHlsZSA9IHtcbiAgICAgICAgZmlsbFBhdHRlcm46IHBhdHRlcm4gPyBwYXR0ZXJuIDogbnVsbCxcbiAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcbiAgICAgICAgY29sb3I6IGRlZmF1bHRDb2xvcixcbiAgICAgICAgZmlsbE9wYWNpdHk6IDAuNyxcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICB3ZWlnaHQ6IDIsXG4gICAgICAgIGxpbmVDYXA6ICdzcXVhcmUnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsaW5lQ29sb3JcbiAgICAgIHZhciBsaW5lV2VpZ2h0XG4gICAgICB2YXIgbGluZU9wYWNpdHlcblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xpbmUnKSA+IC0xOlxuICAgICAgICBsaW5lQ29sb3IgPSBjb2xvclxuICAgICAgICAgID8gY2hyb21hKGNvbG9yKVxuICAgICAgICAgICAgLmJyaWdodGVuKClcbiAgICAgICAgICAgIC5oZXgoKVxuICAgICAgICAgIDogbnVsbFxuICAgICAgICBsaW5lT3BhY2l0eSA9IDFcbiAgICAgICAgbGluZVdlaWdodCA9IDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdwb2x5Z29uJykgPiAtMTpcbiAgICAgICAgbGluZUNvbG9yID0gZGVmYXVsdENvbG9yXG4gICAgICAgIGxpbmVPcGFjaXR5ID0gMC41XG4gICAgICAgIGxpbmVXZWlnaHQgPSAyXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgIGZpbGxQYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICBmaWxsQ29sb3I6IGNvbG9yLFxuICAgICAgICBjb2xvcjogbGluZUNvbG9yLFxuICAgICAgICBmaWxsT3BhY2l0eTogMC43LFxuICAgICAgICBvcGFjaXR5OiBsaW5lT3BhY2l0eSxcbiAgICAgICAgd2VpZ2h0OiBsaW5lV2VpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vblBvaW50U3R5bGUpIHJldHVybiBub25Qb2ludFN0eWxlXG4gIH1cbn1cbiIsImltcG9ydCBoYW5kbGVGZWF0dXJlRXZlbnRzIGZyb20gJy4vaGFuZGxlRmVhdHVyZUV2ZW50cy5qcydcbmltcG9ydCBzdHlsZVBvaW50IGZyb20gJy4vc3R5bGVQb2ludC5qcydcbmltcG9ydCBzdHlsZU5vblBvaW50IGZyb20gJy4vc3R5bGVOb25Qb2ludC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUdlb0pzb25PcHRpb25zKFxuICBtYXAsXG4gIGNvbG9yS2V5V2lkZ2V0cyxcbiAgZm9ybUtleVdpZGdldHNcbikge1xuICBmdW5jdGlvbiBmaWx0ZXIoZmVhdHVyZSkge1xuICAgIHJldHVybiBtYXAuZmlsdGVyc1xuICAgICAgLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmKGZlYXR1cmUpXG4gICAgICB9KVxuICAgICAgLmV2ZXJ5KGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgcmV0dXJuIGYgIT09IGZhbHNlXG4gICAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gb25FYWNoRmVhdHVyZShmZWF0dXJlLCBsYXllcikge1xuICAgIGhhbmRsZUZlYXR1cmVFdmVudHMoZmVhdHVyZSwgbGF5ZXIsIG1hcClcbiAgfVxuXG4gIHZhciBiYWNrZ3JvdW5kT3B0aW9ucyA9IHtcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICBvbkVhY2hGZWF0dXJlOiBvbkVhY2hGZWF0dXJlLFxuICAgIHBvaW50VG9MYXllcjpcbiAgICAgIG1hcC5wb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlLCBsYXRsbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApXG4gICAgICB9LFxuICAgIHN0eWxlOlxuICAgICAgbWFwLm5vblBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3R5bGVOb25Qb2ludChmZWF0dXJlLCBzdHlsZU9wdGlvbnMsIDApKVxuICAgICAgICByZXR1cm4gc3R5bGVOb25Qb2ludChmZWF0dXJlLCBtYXAsIDApXG4gICAgICB9XG4gIH1cbiAgdmFyIGZvcmVncm91bmRPcHRpb25zID0ge1xuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIG9uRWFjaEZlYXR1cmU6IG9uRWFjaEZlYXR1cmUsXG4gICAgcG9pbnRUb0xheWVyOlxuICAgICAgbWFwLnBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUsIGxhdGxuZykge1xuICAgICAgICByZXR1cm4gc3R5bGVQb2ludChmZWF0dXJlLCBsYXRsbmcsIG1hcClcbiAgICAgIH0sXG4gICAgc3R5bGU6XG4gICAgICBtYXAubm9uUG9pbnRTdHlsZSB8fFxuICAgICAgZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc3R5bGVOb25Qb2ludChmZWF0dXJlLCBtYXAsIDEpXG4gICAgICB9XG4gIH1cblxuICByZXR1cm4gW2JhY2tncm91bmRPcHRpb25zLCBmb3JlZ3JvdW5kT3B0aW9uc11cbn1cbiIsImltcG9ydCBtYWtlR2VvSnNvbk9wdGlvbnMgZnJvbSAnLi9tYWtlR2VvSnNvbk9wdGlvbnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VMYXllcnMobWFwKSB7XG4gIHZhciBjb2xvcktleVdpZGdldHMgPSBbXSxcbiAgICBmb3JtS2V5V2lkZ2V0cyA9IFtdXG5cbiAgaWYgKG1hcC53aWRnZXRzKSB7XG4gICAgY29sb3JLZXlXaWRnZXRzID0gbWFwLndpZGdldHMuZmlsdGVyKGZ1bmN0aW9uKHcpIHtcbiAgICAgIHJldHVybiB3LnR5cGUgPT09ICdjb2xvcidcbiAgICB9KVxuICAgIGZvcm1LZXlXaWRnZXRzID0gbWFwLndpZGdldHMuZmlsdGVyKGZ1bmN0aW9uKHcpIHtcbiAgICAgIHJldHVybiB3LnR5cGUgPT09ICdmb3JtJ1xuICAgIH0pXG4gIH1cblxuICB2YXIgZ2VvSnNvbk9wdGlvbnMgPSBtYXAuZ2VvSnNvbk9wdGlvbnNcbiAgICA/IG1hcC5nZW9Kc29uT3B0aW9ucyhtYXApXG4gICAgOiBtYWtlR2VvSnNvbk9wdGlvbnMobWFwKVxuICBtYXAuanNvbi5mb3JFYWNoKGZ1bmN0aW9uKGpzb24sIGkpIHtcbiAgICB2YXIgY2x1c3RlckNvbG9yLCBjb2xvcktleVdpZGdldFxuXG4gICAgaWYgKGNvbG9yS2V5V2lkZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHZhciBjb2xvcktleXMgPSBjb2xvcktleVdpZGdldHNcbiAgICAgICAgLm1hcChmdW5jdGlvbih3aWRnZXQpIHtcbiAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSBqc29uLmZlYXR1cmVzWzBdLnByb3BlcnRpZXNbd2lkZ2V0LmZpZWxkXVxuXG4gICAgICAgICAgdmFyIGtleSA9IHdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGNvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgY29sb3JLZXlXaWRnZXQgPSB3aWRnZXRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGtleVxuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNvbG9yS2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGNvbG9yS2V5XG4gICAgICAgIH0pXG5cbiAgICAgIGNsdXN0ZXJDb2xvciA9IGNvbG9yS2V5c1swXSA/IGNvbG9yS2V5c1swXS5jb2xvciA6ICcjMDAwMDAwJ1xuICAgIH0gZWxzZSB7XG4gICAgICBjbHVzdGVyQ29sb3IgPSAnIzAwMDAwMCdcbiAgICB9XG5cbiAgICB2YXIgYWxsUG9pbnRzID0ganNvbi5mZWF0dXJlcy5ldmVyeShmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICByZXR1cm4gZmVhdHVyZS5nZW9tZXRyeSAmJiBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3BvaW50J1xuICAgIH0pXG5cbiAgICBtYXAuZ3JvdXBzLnB1c2goXG4gICAgICBuZXcgTC5NYXJrZXJDbHVzdGVyR3JvdXAoe1xuICAgICAgICBzaG93Q292ZXJhZ2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgem9vbVRvQm91bmRzT25DbGljazogZmFsc2UsXG4gICAgICAgIG1heENsdXN0ZXJSYWRpdXM6XG4gICAgICAgICAgYWxsUG9pbnRzICYmIG1hcC5jbHVzdGVyZGlzdGFuY2UgPyBtYXAuY2x1c3RlcmRpc3RhbmNlIDogTmFOLFxuICAgICAgICBpY29uQ3JlYXRlRnVuY3Rpb246IGZ1bmN0aW9uIGljb25DcmVhdGVGdW5jdGlvbihjbHVzdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdpY29uLWdyb3VwJyxcbiAgICAgICAgICAgIGh0bWw6XG4gICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHRcIiBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkJyArXG4gICAgICAgICAgICAgIGNsdXN0ZXJDb2xvciArXG4gICAgICAgICAgICAgICc7IGNvbG9yOicgK1xuICAgICAgICAgICAgICBjbHVzdGVyQ29sb3IgK1xuICAgICAgICAgICAgICAnXCI+JyArXG4gICAgICAgICAgICAgIGNsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpICtcbiAgICAgICAgICAgICAgJzwvc3Bhbj4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG5cbiAgICB2YXIgaGFzTGluZUZlYXR1cmVzID0ganNvbi5mZWF0dXJlcy5zb21lKGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkgJiZcbiAgICAgICAgZmVhdHVyZS5nZW9tZXRyeS50eXBlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbGluZScpID4gLTFcbiAgICAgIClcbiAgICB9KVxuXG4gICAgZ2VvSnNvbk9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcHRpb24sIGluZGV4KSB7XG4gICAgICBpZiAoY29sb3JLZXlXaWRnZXQpIHtcbiAgICAgICAganNvbi5mZWF0dXJlcyA9IGpzb24uZmVhdHVyZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGIucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0ubG9jYWxlQ29tcGFyZShcbiAgICAgICAgICAgIGEucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF1cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHZhciBnZW9Kc29uID0gTC5nZW9Kc29uKGpzb24sIG9wdGlvbilcbiAgICAgIGlmICgoIWhhc0xpbmVGZWF0dXJlcyAmJiBpbmRleCAlIDIgPT09IDApIHx8IGhhc0xpbmVGZWF0dXJlcykge1xuICAgICAgICBtYXAuZ3JvdXBzW2ldLmFkZExheWVyKGdlb0pzb24pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChtYXAuZ3JvdXBzW2ldLmdldExheWVycygpLmxlbmd0aCkge1xuICAgICAgbWFwLmxlYWZsZXQuYWRkTGF5ZXIobWFwLmdyb3Vwc1tpXSlcbiAgICAgIG1hcC5ncm91cHNbaV0ub24oJ2NsdXN0ZXJjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaGFuZGxlQ2x1c3RlckNsaWNrKGUsIG1hcCwgaSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbHVzdGVyQ2xpY2soZSwgbWFwLCBpKSB7XG4gIG1hcC5sZWFmbGV0Ll9sYXllcnNbZS5sYXllci5fbGVhZmxldF9pZF0uc3BpZGVyZnkoKVxuXG4gIE9iamVjdC5rZXlzKG1hcC5sZWFmbGV0Ll9sYXllcnMpLmZvckVhY2goZnVuY3Rpb24obGF5ZXIsIGkpIHtcbiAgICBpZiAocGFyc2VJbnQobGF5ZXIsIDEwKSAhPT0gZS5sYXllci5fbGVhZmxldF9pZCkge1xuICAgICAgaWYgKG1hcC5sZWFmbGV0Ll9sYXllcnNbbGF5ZXJdLnVuc3BpZGVyZnkpXG4gICAgICAgIG1hcC5sZWFmbGV0Ll9sYXllcnNbbGF5ZXJdLnVuc3BpZGVyZnkoKVxuICAgIH1cbiAgfSlcbiAgdmFyIGlzU3BpZGVyZmllZCA9IGZhbHNlXG4gIE9iamVjdC52YWx1ZXMobWFwLmdyb3Vwc1tpXS5fZmVhdHVyZUdyb3VwLl9sYXllcnMpLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgIGlmICh2Ll9ncm91cCAmJiB2Ll9ncm91cC5fc3BpZGVyZmllZCkgaXNTcGlkZXJmaWVkID0gdHJ1ZVxuICB9KVxuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIChkLnN0eWxlLm9wYWNpdHkgPSBpc1NwaWRlcmZpZWQgPyAwLjMzIDogMSlcbiAgICB9XG4gIClcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcubGVhZmxldC1tYXJrZXItaWNvbicpKS5mb3JFYWNoKFxuICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiAoZC5zdHlsZS5vcGFjaXR5ID0gaXNTcGlkZXJmaWVkID8gMC4zMyA6IDEpXG4gICAgfVxuICApXG4gIE9iamVjdC52YWx1ZXMobWFwLmdyb3Vwc1tpXS5fZmVhdHVyZUdyb3VwLl9sYXllcnMpLmZpbHRlcihmdW5jdGlvbih2KSB7XG4gICAgZS5sYXllclxuICAgICAgLmdldEFsbENoaWxkTWFya2VycygpXG4gICAgICAubWFwKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIG0uZ2V0RWxlbWVudCgpXG4gICAgICB9KVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiBtXG4gICAgICB9KVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gKG0uc3R5bGUub3BhY2l0eSA9IDEpXG4gICAgICB9KVxuICB9KVxufVxuIiwiaW1wb3J0IEN1c3RvbU1hcCBmcm9tICcuL0N1c3RvbU1hcC5qcydcbmltcG9ydCBtYWtlTGF5ZXJzIGZyb20gJy4vbWFrZUxheWVycy5qcydcbmltcG9ydCB7IGNvbnZlcnRUeXBlIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtYXBXaWRnZXRzVG9TdGF0ZShvcHRpb25zKSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgLm1hcCcpXG5cbiAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHRhYmxlcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gay50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3RhYmxlJykgPiAtMVxuICAgIH0pXG5cbiAgICBQcm9taXNlLmFsbChcbiAgICAgIHRhYmxlcy5tYXAoZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFxuICAgICAgICAgICdodHRwczovL2NzaXMuY2FydG8uY29tL2FwaS92Mi9zcWw/YXBpX2tleT0nICtcbiAgICAgICAgICAgIG1hcC5hcGlrZXkgK1xuICAgICAgICAgICAgJyZmb3JtYXQ9Z2VvanNvbiZxPVNFTEVDVCUyMColMjBGUk9NJTIwJyArXG4gICAgICAgICAgICBvcHRpb25zW3RhYmxlXVxuICAgICAgICApXG4gICAgICB9KVxuICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlcykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgICAgcmVzcG9uc2VzLm1hcChmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIC50aGVuKGZ1bmN0aW9uKGpzb25zKSB7XG4gICAgICAgIHZhciBqc29uID0ganNvbnMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBhLmZlYXR1cmVzLmNvbmNhdChiLmZlYXR1cmVzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICByZXR1cm4gdy50eXBlID09PSAnY29sb3InXG4gICAgICAgIH0pXG4gICAgICAgIG1hcC5qc29uID0gW2pzb25dXG5cbiAgICAgICAgaWYgKGNvbG9yS2V5V2lkZ2V0KSB7XG4gICAgICAgICAgbWFwLmpzb24gPSBbXVxuICAgICAgICAgIHZhciBmZWF0dXJlR3JvdXBzID0ganNvbi5mZWF0dXJlcy5ncm91cEJ5KFxuICAgICAgICAgICAgY29sb3JLZXlXaWRnZXQuZmllbGQsXG4gICAgICAgICAgICAncHJvcGVydGllcydcbiAgICAgICAgICApXG4gICAgICAgICAgT2JqZWN0LmtleXMoZmVhdHVyZUdyb3VwcylcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmVHcm91cHNbYl1bMF0ucHJvcGVydGllc1tcbiAgICAgICAgICAgICAgICBjb2xvcktleVdpZGdldC5maWVsZFxuICAgICAgICAgICAgICBdLmxvY2FsZUNvbXBhcmUoXG4gICAgICAgICAgICAgICAgZmVhdHVyZUdyb3Vwc1thXVswXS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICAgIG1hcC5qc29uLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVHcm91cHNbZmVhdHVyZV1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMud2lkZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgICAgYm94LmlubmVySFRNTCA9ICcnXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluaXRpYWxpemVkID0gMFxuXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHcsIHgpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIC53aWRnZXQuJyArIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZFxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpICYmIHdpZGdldENvbnRlbnRbeF0ub3B0aW9ucykge1xuICAgICAgICAgICAgbmV3IENob2ljZXMoXG4gICAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXG4gICAgICAgICAgICAgIHdpZGdldENvbnRlbnRbeF0ub3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkXj1cXCdzZWFyY2hcXCddJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNyZXNldEJ1dHRvbicpXG4gICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVJlc2V0KGVsZW1lbnQsIG1hcCwgeClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc2VsZWN0cyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSlcbiAgICAgICAgICB2YXIgY2hlY2tzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCdjaGVja2JveFxcJ10nKVxuICAgICAgICAgIClcbiAgICAgICAgICB2YXIgc2VhcmNoID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXTpub3QoLmNob2ljZXNfX2lucHV0KScpXG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciB0b2dnbGUgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ3JhZGlvXFwnXScpXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgdmFyIGlucHV0cyA9IHNlbGVjdHNcbiAgICAgICAgICAgIC5jb25jYXQoY2hlY2tzKVxuICAgICAgICAgICAgLmNvbmNhdChzZWFyY2gpXG4gICAgICAgICAgICAuY29uY2F0KHRvZ2dsZSlcblxuICAgICAgICAgIGlmICghaW5wdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluaXRpYWxpemVkKytcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY291bnQgPSBpbnB1dHMubGVuZ3RoXG4gICAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoXG4gICAgICAgICAgICAgICAgICBtYXAsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aWRnZXRzLFxuICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICAgICAgKytpbml0aWFsaXplZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShcbiAgICAgICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zLndpZGdldHMsXG4gICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICArK2luaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJ2NyZWF0ZUV2ZW50JyBpbiBkb2N1bWVudCkge1xuICAgICAgICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICAgICAgICAgICAgICBldnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCBmYWxzZSwgdHJ1ZSlcbiAgICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbnB1dC5maXJlRXZlbnQoJ29uY2hhbmdlJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdy5tYXBfaWQgPSBtYXAuaWRcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChtYXAudHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgdmFyIHRyYW5zbGF0YWJsZU5vZGVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFuc2xhdGUnKVxuICAgICAgICAgIClcbiAgICAgICAgICB2YXIgdHJhbnNsYXRhYmxlU3RyaW5ncyA9IE9iamVjdC5rZXlzKG1hcC50cmFuc2xhdGlvbnMpLnNvcnQoZnVuY3Rpb24oXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAgYlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRyYW5zbGF0YWJsZU5vZGVzLmZvckVhY2goZnVuY3Rpb24oZWwsIGkpIHtcbiAgICAgICAgICAgIHRyYW5zbGF0YWJsZVN0cmluZ3MuZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtYXAudHJhbnNsYXRpb25zW3RdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCdcXFxcYignICsgUmVnRXhwLmVzY2FwZSh0KSArICcpJywgJ2dpJylcbiAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUwucmVwbGFjZShyZSwgbWFwLnRyYW5zbGF0aW9uc1t0XSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShtYXApXG4gICAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNldChlbGVtZW50LCBtYXAsIHgpIHtcbiAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJykudmFsdWUgPSAnJ1xuICBpZiAobWFwLmdyb3Vwcy5sZW5ndGgpIG1hcC5yZW1vdmVHcm91cHMoKVxuXG4gIG1hcC5maWx0ZXJzW3hdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG1ha2VMYXllcnMobWFwKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UobWFwLCBlbGVtZW50LCB3aWRnZXRzLCB4LCBjb3VudCwgaW5pdGlhbGl6ZWQpIHtcbiAgdmFyIG9wdGlvbnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpXG4gICAgPyBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jykub3B0aW9ucylcbiAgICA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXScpXG4gICAgICA/IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJykpXG4gICAgICA6IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKVxuICB2YXIgc2VsZWN0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICA/IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5vcHRpb25zKVxuICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJylcbiAgICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKSlcbiAgICAgIDogQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0OmNoZWNrZWQnKSlcbiAgdmFyIHBvc3NpYmxlQ2hlY2tzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpLm1hcChcbiAgICBmdW5jdGlvbihvKSB7XG4gICAgICByZXR1cm4gby5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICB9XG4gIClcblxuICB2YXIgcG9zc2libGVPcHRpb25zLCBwb3NzaWJsZVF1ZXJpZXNcbiAgaWYgKHdpZGdldHNbeF0uaW5wdXQgIT09ICd0b2dnbGUnKSB7XG4gICAgcG9zc2libGVPcHRpb25zID0gd2lkZ2V0c1t4XS5rZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBrZXkudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgIH0pXG5cbiAgICBwb3NzaWJsZVF1ZXJpZXMgPSBwb3NzaWJsZUNoZWNrcy5jb25jYXQocG9zc2libGVPcHRpb25zKVxuICB9XG5cbiAgdmFyIHF1ZXJ5ID0gQXJyYXkuZnJvbShzZWxlY3Rpb25zKS5tYXAoZnVuY3Rpb24obykge1xuICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwnY2hlY2tib3hcXCddJylcbiAgICAgID8gby5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgIDogby52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gIH0pXG5cbiAgbWFwLmZpbHRlcnNbd2lkZ2V0c1t4XS5pZF0gPVxuICAgIHdpZGdldHNbeF0uaW5wdXQgPT09ICd0b2dnbGUnXG4gICAgICA/IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGJvb2wgPSB0cnVlXG5cbiAgICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllcy50b2dnbGUpIHtcbiAgICAgICAgICBib29sID0gY29udmVydFR5cGUocXVlcnlbMF0pID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib29sXG4gICAgICB9XG4gICAgICA6IHdpZGdldHNbeF0uZmllbGQgPT09ICdhbGwnXG4gICAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICAgIHZhciBib29sID0gdHJ1ZVxuICAgICAgICAgIHZhciB3aXRoRGlhY3JpdGljcyA9IE9iamVjdC52YWx1ZXMoZmVhdHVyZS5wcm9wZXJ0aWVzKVxuICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIHZhciB3aXRob3V0RGlhY3JpdGljcyA9IE9iamVjdC52YWx1ZXMoZmVhdHVyZS5wcm9wZXJ0aWVzKVxuICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLmxhdGluaXNlKClcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHdpdGhEaWFjcml0aWNzLmluZGV4T2YocXVlcnlbMF0pIDwgMCAmJlxuICAgICAgICAgICAgICB3aXRob3V0RGlhY3JpdGljcy5pbmRleE9mKHF1ZXJ5WzBdKSA8IDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBib29sXG4gICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbihmZWF0dXJlLCBsYXllcnMpIHtcbiAgICAgICAgICB2YXIgYm9vbCA9IHRydWVcbiAgICAgICAgICB2YXIgZmllbGQgPSB3aWRnZXRzW3hdLmdyb3VwaW5nXG4gICAgICAgICAgICA/IHdpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgICAgICAgIDogd2lkZ2V0c1t4XS5maWVsZFxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcG9zc2libGVRdWVyaWVzLmluZGV4T2YoZmVhdHVyZS5wcm9wZXJ0aWVzW2ZpZWxkXS50b0xvd2VyQ2FzZSgpKSA+XG4gICAgICAgICAgICAgICAgLTEgJiZcbiAgICAgICAgICAgICAgcXVlcnkuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZmllbGRdLnRvTG93ZXJDYXNlKCkpIDwgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgICAgfVxuXG4gIGlmIChpbml0aWFsaXplZCA+PSBjb3VudCkgbWFwLnJlbW92ZUdyb3VwcygpXG4gIGlmICh3aWRnZXRzLmxlbmd0aCA+PSB4ICsgMSAmJiBpbml0aWFsaXplZCA+PSBjb3VudCkgbWFrZUxheWVycyhtYXApXG59XG4iLCJpbXBvcnQgc3R5bGVLZXkgZnJvbSAnLi9zdHlsZUtleS5qcydcbmltcG9ydCBtYXBXaWRnZXRzVG9TdGF0ZSBmcm9tICcuL21hcFdpZGdldHNUb1N0YXRlLmpzJ1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgbWFrZURyb3Bkb3duT3B0aW9ucyB9IGZyb20gJy4vaGVscGVycy5qcydcbmltcG9ydCB7IHBhcnNlTGVnZW5kRGF0YSB9IGZyb20gJy4vcGFyc2Vycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFrZVdpZGdldHMoanNvbnMsIG9wdGlvbnMsIGJveENvbnRlbnQpIHtcbiAgdmFyIHdpZGdldENvbnRlbnQgPSBbXVxuICBvcHRpb25zLndpZGdldHMuZm9yRWFjaChmdW5jdGlvbih3LCB4KSB7XG4gICAgaWYgKCF3Lmhhc093blByb3BlcnR5KCdpZCcpKSB3LmlkID0geFxuICAgIHZhciBsZWdlbmREYXRhID0gdy5yZWZlcmVuY2VcbiAgICAgID8gcGFyc2VMZWdlbmREYXRhKG9wdGlvbnMsIGpzb25zW3hdLmZlZWQuZW50cnksIHcudHlwZSlcbiAgICAgIDogdy5rZXlzXG4gICAgb3B0aW9ucy53aWRnZXRzW3hdLmtleXMgPSBsZWdlbmREYXRhXG4gICAgd2lkZ2V0Q29udGVudC5wdXNoKGZvcm1hdFdpZGdldHMob3B0aW9ucywgeCkpXG4gICAgYm94Q29udGVudCArPVxuICAgICAgJzxzZWN0aW9uIGNsYXNzPVwid2lkZ2V0ICcgK1xuICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICdcIj48aDMgY2xhc3M9XCJ0cmFuc2xhdGVcIj4nICtcbiAgICAgIHdpZGdldENvbnRlbnRbeF0udGl0bGUgK1xuICAgICAgJzwvaDM+J1xuICAgIGJveENvbnRlbnQgKz0gd2lkZ2V0Q29udGVudFt4XS5ub2Rlc1xuICAgIGJveENvbnRlbnQgKz0gJzwvc2VjdGlvbj4nXG4gICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgIGJveC5pbm5lckhUTUwgPSBib3hDb250ZW50XG4gICAgdmFyIGxhYmVsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAuaXRlbVRleHQnKVxuICAgIEFycmF5LmZyb20obGFiZWxUZXh0KS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW1UZXh0KSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gaXRlbVRleHQub2Zmc2V0SGVpZ2h0XG4gICAgICB2YXIgZm9udFNpemUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtVGV4dClbJ2ZvbnQtc2l6ZSddXG4gICAgICB2YXIgb2Zmc2V0ID0gaGVpZ2h0IC8gcGFyc2VJbnQoZm9udFNpemUucmVwbGFjZSgncHgnLCAnJyksIDEwKVxuICAgICAgaXRlbVRleHQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJyArIG9mZnNldCAqIDEwICsgJyUpJ1xuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIGF3YWl0IG1hcFdpZGdldHNUb1N0YXRlKG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdpZGdldHMob3B0aW9ucywgeCkge1xuICB2YXIgd2lkZ2V0Tm9kZXMgPSAnJ1xuICB2YXIgZHJvcGRvd25PcHRpb25zXG5cbiAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0uaW5wdXQpIHtcbiAgY2FzZSAndG9nZ2xlJzpcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPGxhYmVsIGZvcj1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIGNsYXNzPVwidHJhbnNsYXRlXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCInICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIGlkPVwidG9nZ2xlXycgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgIHZhbHVlPVwiMVwiIGNoZWNrZWQ+U2hvdzwvbGFiZWw+J1xuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8bGFiZWwgZm9yPVwiJHRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIGNsYXNzPVwidHJhbnNsYXRlXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCInICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIGlkPVwidG9nZ2xlXycgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgdmFsdWU9XCIwXCIgPkhpZGU8L2xhYmVsPidcbiAgICBicmVha1xuXG4gIGNhc2UgJ3NlYXJjaCc6XG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoXycgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgcGxhY2Vob2xkZXI9XCInICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmluc3RydWN0aW9ucyArXG4gICAgICAgICdcIiBzaXplPVwiMTBcIiAvPidcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJyZXNldEJ1dHRvblwiIGNsYXNzPVwidHJhbnNsYXRlXCI+UmVzZXQ8L2J1dHRvbj4nXG4gICAgYnJlYWtcblxuICBjYXNlICdkcm9wZG93bic6XG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxzZWxlY3QgaWQ9XCJkcm9wZG93bl8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHBsYWNlaG9sZGVyPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnN0cnVjdGlvbnMgK1xuICAgICAgICAnXCIgbXVsdGlwbGU9XCJcIj48L3NlbGVjdD4nXG4gICAgZHJvcGRvd25PcHRpb25zID0gbWFrZURyb3Bkb3duT3B0aW9ucyhvcHRpb25zLCB4KVxuICAgIGJyZWFrXG5cbiAgY2FzZSAnY2hlY2tib3gnOlxuICAgIHdpZGdldE5vZGVzICs9ICc8dWw+J1xuICAgIHZhciBrZXlTdHlsZVxuICAgIHZhciBsZWdlbmRJdGVtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5ncm91cGluZ1xuICAgICAgPyBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdncm91cCcpXG4gICAgICA6IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2xhYmVsJylcbiAgICBPYmplY3Qua2V5cyhsZWdlbmRJdGVtcykuZm9yRWFjaChmdW5jdGlvbihncm91cCwgaSkge1xuICAgICAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0udHlwZSkge1xuICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgIHZhciBmb3JtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgICAgcmV0dXJuIGYudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICBncm91cDogbGVnZW5kSXRlbXNbZ3JvdXBdLFxuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgIG1hcDogb3B0aW9ucyxcbiAgICAgICAgICBncm91cDogbGVnZW5kSXRlbXNbZ3JvdXBdXG4gICAgICAgIH1cbiAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICAgJzxsaT48bGFiZWwgZm9yPVwiJyArXG4gICAgICAgICAgZ3JvdXAgK1xuICAgICAgICAgICdcIj48aW5wdXQgY2xhc3M9XCJ3aWRnZXQgJyArXG4gICAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmlucHV0ICtcbiAgICAgICAgICAnXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIicgK1xuICAgICAgICAgIChvcHRpb25zLndpZGdldHNbeF0uZ3JvdXBpbmcgPyBncm91cCA6IGxlZ2VuZEl0ZW1zW2dyb3VwXVswXS52YWx1ZSkgK1xuICAgICAgICAgICdcIiBpZD1cIicgK1xuICAgICAgICAgIGdyb3VwICtcbiAgICAgICAgICAnXCIgJyArXG4gICAgICAgICAgKGxlZ2VuZEl0ZW1zW2dyb3VwXVswXS5zZWxlY3RlZCA/ICdjaGVja2VkJyA6ICcnKSArXG4gICAgICAgICAgJyA+PHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgICBrZXlTdHlsZS5jbGFzcyArXG4gICAgICAgICAgJ0tleVwiICcgK1xuICAgICAgICAgICdzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICtcbiAgICAgICAgICBrZXlTdHlsZS5zdmcgK1xuICAgICAgICAgICdcIik+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaXRlbVRleHRcIj4nICtcbiAgICAgICAgICBjYXBpdGFsaXplKGdyb3VwKSArXG4gICAgICAgICAgJzwvc3Bhbj48L2xhYmVsPjwvbGk+J1xuICAgIH0pXG4gICAgd2lkZ2V0Tm9kZXMgKz0gJzwvdWw+J1xuICAgIGJyZWFrXG5cbiAgZGVmYXVsdDpcbiAgICB3aWRnZXROb2RlcyArPSAnPHVsPidcbiAgICB2YXIga2V5U3R5bGVcbiAgICB2YXIgbGVnZW5kSXRlbXMgPSBvcHRpb25zLndpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgID8gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnZ3JvdXAnKVxuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdsYWJlbCcpXG4gICAgT2JqZWN0LmtleXMobGVnZW5kSXRlbXMpLmZvckVhY2goZnVuY3Rpb24oZ3JvdXAsIGkpIHtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXSxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICBtYXA6IG9wdGlvbnMsXG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXVxuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAgICc8bGk+PHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgICBrZXlTdHlsZS5jbGFzcyArXG4gICAgICAgICAgJ0tleVwiICcgK1xuICAgICAgICAgICdzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICtcbiAgICAgICAgICBrZXlTdHlsZS5zdmcgK1xuICAgICAgICAgICdcIik+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaXRlbVRleHRcIj4nICtcbiAgICAgICAgICBjYXBpdGFsaXplKGdyb3VwKSArXG4gICAgICAgICAgJzwvc3Bhbj48L2xpPidcbiAgICB9KVxuICAgIHdpZGdldE5vZGVzICs9ICc8L3VsPidcbiAgICBicmVha1xuICB9XG5cbiAgdmFyIHdpZGdldFRpdGxlID1cbiAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgPT09ICdhbGwnXG4gICAgICA/ICdTZWFyY2gnXG4gICAgICA6IG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZC5yZXBsYWNlKC9fL2csICcgJylcbiAgcmV0dXJuIHtcbiAgICBub2Rlczogd2lkZ2V0Tm9kZXMsXG4gICAgdGl0bGU6IHdpZGdldFRpdGxlLFxuICAgIG9wdGlvbnM6IGRyb3Bkb3duT3B0aW9uc1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlRG9jdW1lbnROb2RlcyhvcHRpb25zKSB7XG4gIHZhciBuZXdTZWN0aW9uSFRNTCA9ICcnXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8c2VjdGlvbiBpZD1cIicgKyBvcHRpb25zLnNsdWcgKyAnXCI+J1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPGRpdiBpZD1cIicgKyBvcHRpb25zLnNsdWcgKyAnX19tYXBcIiBjbGFzcz1cIm1hcFwiPjwvZGl2PidcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxhc2lkZSBjbGFzcz1cInRvb2xib3hcIj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9IG9wdGlvbnMudGl0bGVcbiAgICA/ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZCBjbGFzcz1cInVpIG1vYmlsZS1vbmx5XCI+PGRpdiBjbGFzcz1cImhhbWJ1cmdlciBtb2JpbGUtb25seVwiPjxkaXYgY2xhc3M9XCJpY29uXCI+IDxzcGFuPjwvc3Bhbj4gPHNwYW4+PC9zcGFuPiA8c3Bhbj48L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz1cIm1lbnUgdHJhbnNsYXRlXCI+PC9kaXY+PC9kaXY+J1xuICAgIDogJydcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxkaXYgY2xhc3M9XCJib3hcIj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9XG4gICAgb3B0aW9ucy50aXRsZSB8fCBvcHRpb25zLmxvZ28gfHwgb3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgPyAnPGhlYWRlciAgY2xhc3M9XCJ0cmFuc2xhdGVcIj4gPGgxPjxhIHRhcmdldD1cIl9ibGFua1wiIGlkPVwibG9nb1wiPjwvYT48L2gxPiAgPHAgY2xhc3M9XCJ0cmFuc2xhdGVcIj48L3A+PC9oZWFkZXI+J1xuICAgICAgOiAnJ1xuICBuZXdTZWN0aW9uSFRNTCArPVxuICAgIChvcHRpb25zLmluc3RydWN0aW9uc1xuICAgICAgPyAnPHAgY2xhc3M9XCJ0cmFuc2xhdGVcIj4nICsgb3B0aW9ucy5pbnN0cnVjdGlvbnMgKyAnPC9wPidcbiAgICAgIDogJycpICtcbiAgICAnPGRpdiBpZD1cImNvbnRyb2xzXCI+PGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PjwvZGl2Pjxmb290ZXI+PGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PjwvZm9vdGVyPjwvZGl2PjwvYXNpZGU+J1xuICBuZXdTZWN0aW9uSFRNTCArPSBvcHRpb25zLnRpdGxlY2FyZGNvbnRlbnRcbiAgICA/ICc8YnV0dG9uIGlkPVwiJyArXG4gICAgICBvcHRpb25zLnNsdWcgK1xuICAgICAgJ19fYWJvdXRcIiBjbGFzcz1cImFib3V0LXRyaWdnZXJcIj5BQk9VVCBUSElTIE1BUDwvYnV0dG9uPidcbiAgICA6ICcnXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8L3NlY3Rpb24+J1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBuZXdTZWN0aW9uSFRNTFxuXG4gIGlmIChvcHRpb25zLnRpdGxlY2FyZGNvbnRlbnQpIHtcbiAgICB2YXIgbmV3RGlhbG9nSFRNTCA9ICcnXG4gICAgbmV3RGlhbG9nSFRNTCArPSAnPGRpdiBjbGFzcz1cImRpYWxvZ1wiIGlkPVwiJyArIG9wdGlvbnMuc2x1ZyArICdfX2RpYWxvZ1wiPidcbiAgICBuZXdEaWFsb2dIVE1MICs9XG4gICAgICAnPGRpdiBjbGFzcz1cImRpYWxvZy1vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtYTExeS1kaWFsb2ctaGlkZT48L2Rpdj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxkaWFsb2cgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiIGFyaWEtbGFiZWxsZWRieT1cImRpYWxvZ1RpdGxlXCIgYXJpYS1kZXNjcmliZWRieT1cImRpYWxvZ0NvbnRlbnRcIj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxidXR0b24gZGF0YS1hMTF5LWRpYWxvZy1oaWRlIGNsYXNzPVwiZGlhbG9nLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlIHRoaXMgZGlhbG9nIHdpbmRvd1wiPiZ0aW1lczs8L2J1dHRvbj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPSBvcHRpb25zLnRpdGxlY2FyZHRpdGxlXG4gICAgICA/ICc8aDEgaWQ9XCJkaWFsb2dUaXRsZVwiPicgKyBvcHRpb25zLnRpdGxlY2FyZHRpdGxlICsgJzwvaDE+J1xuICAgICAgOiAnJ1xuICAgIG5ld0RpYWxvZ0hUTUwgKz1cbiAgICAgICc8ZGl2IGlkPVwiZGlhbG9nQ29udGVudFwiPicgKyBvcHRpb25zLnRpdGxlY2FyZGNvbnRlbnQgKyAnPC9kaXY+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz0gJzwvZGlhbG9nPidcbiAgICBuZXdEaWFsb2dIVE1MICs9ICc8L2Rpdj4nXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gbmV3RGlhbG9nSFRNTFxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIHZhciBkaWFsb2dFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuc2x1ZyArICdfX2RpYWxvZycpXG4gICAgdmFyIG1haW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zLnNsdWcnKVxuICAgIHZhciBkaWFsb2dUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5zbHVnICsgJ19fYWJvdXQnKVxuXG4gICAgdmFyIGRpYWxvZ0JveCA9IG5ldyBBMTF5RGlhbG9nKGRpYWxvZ0VsLCBtYWluRWwpXG4gICAgdmFyIGRpYWxvZyA9IGRpYWxvZ0JveC5kaWFsb2dcbiAgICBkaWFsb2dCb3guc2hvdygpXG4gICAgZGlhbG9nQm94Lm9uKCdoaWRlJywgZnVuY3Rpb24oZGlhbG9nRWwpIHtcbiAgICAgIGRpYWxvZ1RyaWdnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9KVxuICAgIGRpYWxvZ0JveC5vbignc2hvdycsIGZ1bmN0aW9uKGRpYWxvZ0VsKSB7XG4gICAgICBkaWFsb2dUcmlnZ2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9KVxuICAgIGRpYWxvZ1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGRpYWxvZ0JveC5zaG93KClcbiAgICB9KVxuICB9XG5cbiAgZG9jdW1lbnQudGl0bGUgPSBvcHRpb25zLnRpdGxlICsgJyB8IENTSVMgJyArIG9wdGlvbnMucHJvZ3JhbVxuICB2YXIgbWV0YUxvY2FsZU9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFMb2NhbGVPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmxvY2FsZScpXG4gIG1ldGFMb2NhbGVPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnZW5fVVMnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFMb2NhbGVPRylcbiAgdmFyIG1ldGFUeXBlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVR5cGVPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOnR5cGUnKVxuICBtZXRhVHlwZU9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdhcnRpY2xlJylcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhVHlwZU9HKVxuICB2YXIgbWV0YVdpZHRoT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVdpZHRoT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzppbWFnZTp3aWR0aCcpXG4gIG1ldGFXaWR0aE9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICcyMDAwJylcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhV2lkdGhPRylcbiAgdmFyIG1ldGFIZWlnaHRPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhSGVpZ2h0T0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzppbWFnZTpoZWlnaHQnKVxuICBtZXRhSGVpZ2h0T0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJzEzMzMnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFIZWlnaHRPRylcbiAgdmFyIG1ldGFUd2l0dGVyQ2FyZE9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFUd2l0dGVyQ2FyZE9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjpjYXJkJylcbiAgbWV0YVR3aXR0ZXJDYXJkT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ3N1bW1hcnknKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUd2l0dGVyQ2FyZE9HKVxuICB2YXIgbWV0YVRpdGxlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVRpdGxlT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzp0aXRsZScpXG4gIG1ldGFUaXRsZU9HLnNldEF0dHJpYnV0ZShcbiAgICAnY29udGVudCcsXG4gICAgb3B0aW9ucy50aXRsZSArICcgfCBDU0lTICcgKyBvcHRpb25zLnByb2dyYW1cbiAgKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUaXRsZU9HKVxuICB2YXIgbWV0YVRpdGxlVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVGl0bGVUd2l0dGVyLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjp0aXRsZScpXG4gIG1ldGFUaXRsZVR3aXR0ZXIuc2V0QXR0cmlidXRlKFxuICAgICdjb250ZW50JyxcbiAgICBvcHRpb25zLnRpdGxlICsgJyB8IENTSVMgJyArIG9wdGlvbnMucHJvZ3JhbVxuICApXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVRpdGxlVHdpdHRlcilcbiAgdmFyIG1ldGFEZXNjcmlwdGlvbk9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFEZXNjcmlwdGlvbk9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6ZGVzY3JpcHRpb24nKVxuICBtZXRhRGVzY3JpcHRpb25PRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBvcHRpb25zLmRlc2NyaXB0aW9uKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFEZXNjcmlwdGlvbk9HKVxuICB2YXIgbWV0YURlc2NyaXB0aW9uVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhRGVzY3JpcHRpb25Ud2l0dGVyLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjpkZXNjcmlwdGlvbicpXG4gIG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5kZXNjcmlwdGlvbilcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhRGVzY3JpcHRpb25Ud2l0dGVyKVxuICB2YXIgbWV0YUltYWdlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUltYWdlT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzppbWFnZScpXG4gIG1ldGFJbWFnZU9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuc2NyZWVuc2hvdClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhSW1hZ2VPRylcbiAgdmFyIG1ldGFJbWFnZVR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUltYWdlVHdpdHRlci5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ3R3aXR0ZXI6aW1hZ2UnKVxuICBtZXRhSW1hZ2VUd2l0dGVyLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuc2NyZWVuc2hvdClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhSW1hZ2VUd2l0dGVyKVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgaGVhZGVyJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgLm1lbnUnKS5pbm5lclRleHQgPVxuICAgICAgb3B0aW9ucy50aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgaDEnKS5pbm5lckhUTUwgKz1cbiAgICAgIG9wdGlvbnMudGl0bGVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgYSdcbiAgICApLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG9wdGlvbnMubG9nbyA/ICd1cmwoJyArIG9wdGlvbnMubG9nbyArICcpJyA6ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjJyArIG9wdGlvbnMuc2x1ZyArICcgaGVhZGVyIGEnXG4gICAgKS5ocmVmID0gb3B0aW9ucy53ZWJzaXRlID8gb3B0aW9ucy53ZWJzaXRlIDogJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgcCdcbiAgICApLmlubmVyVGV4dCA9IG9wdGlvbnMuZGVzY3JpcHRpb24gPyBvcHRpb25zLmRlc2NyaXB0aW9uIDogJydcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2VNZXRhRGF0YSwgcGFyc2VXaWRnZXREYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xuaW1wb3J0IG1ha2VXaWRnZXRzIGZyb20gJy4vbWFrZVdpZGdldHMuanMnXG5pbXBvcnQgbWFrZURvY3VtZW50Tm9kZXMgZnJvbSAnLi9tYWtlRG9jdW1lbnROb2Rlcy5qcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdFdpdGhTcHJlYWRzaGVldChcbiAgZGF0YVVSTCxcbiAgb3B0aW9ucyxcbiAgdHJhbnNsYXRpb25zXG4pIHtcbiAgdmFyIG1hcFxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZGF0YVVSTCArIG9wdGlvbnMuZ29vZ2xlU2hlZXQgKyAnLycgKyAyICsgJy9wdWJsaWMvdmFsdWVzP2FsdD1qc29uJ1xuICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHZhciBtZXRhRGF0YSA9IHBhcnNlTWV0YURhdGEoanNvbi5mZWVkLmVudHJ5KVxuICAgICAgICB2YXIgd2lkZ2V0cyA9IHBhcnNlV2lkZ2V0RGF0YShtZXRhRGF0YSlcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB7fVxuICAgICAgICBPYmplY3Qua2V5cyhtZXRhRGF0YSkuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgcHJvcGVydGllc1tkYXRhXSA9IG1ldGFEYXRhW2RhdGFdXG4gICAgICAgIH0pXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIHByb3BlcnRpZXNbZGF0YV0gPSBvcHRpb25zW2RhdGFdXG4gICAgICAgIH0pXG5cbiAgICAgICAgdmFyIHR3b0RfcHJvcGVyaXRlcyA9IFtcbiAgICAgICAgICB7IG5hbWU6ICdjZW50ZXInLCBkZWZhdWx0OiBbMCwgMF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICdpY29uc2l6ZScsIGRlZmF1bHQ6IFsyMCwgMjBdIH0sXG4gICAgICAgICAgeyBuYW1lOiAnaWNvbmFuY2hvcicsIGRlZmF1bHQ6IFs1LCA1XSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3N3Ym91bmRzJywgZGVmYXVsdDogWy05MCwgLTE4MF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICduZWJvdW5kcycsIGRlZmF1bHQ6IFs5MCwgMTgwXSB9XG4gICAgICAgIF1cblxuICAgICAgICB0d29EX3Byb3Blcml0ZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICAgIHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV0gPVxuICAgICAgICAgICAgdHlwZW9mIHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYsIDEwKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICAgICAgICA/IHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICAgICAgICA6IHByb3BlcnR5LmRlZmF1bHRcbiAgICAgICAgfSlcbiAgICAgICAgcHJvcGVydGllcy5zbHVnID0gcHJvcGVydGllcy5tYXBJRC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgICBwcm9wZXJ0aWVzLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9uc1xuICAgICAgICBwcm9wZXJ0aWVzLndpZGdldHMgPSB3aWRnZXRzXG4gICAgICAgIG1ha2VEb2N1bWVudE5vZGVzKHByb3BlcnRpZXMpXG4gICAgICAgIHZhciByZWZlcmVuY2VTaGVldHMgPSB3aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICAgICAgcmV0dXJuIHcucmVmZXJlbmNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVNoZWV0cykge1xuICAgICAgICAgIHZhciBib3hDb250ZW50ID0gJydcbiAgICAgICAgICB2YXIgcmVmZXJlbmNlU2hlZXRVUkxTID0gd2lkZ2V0c1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICAgIGlmICh3LnJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICBkYXRhVVJMICtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZ29vZ2xlU2hlZXQgK1xuICAgICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICAgIHcucmVmZXJlbmNlICtcbiAgICAgICAgICAgICAgICAgICcvcHVibGljL3ZhbHVlcz9hbHQ9anNvbidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICByZWZlcmVuY2VTaGVldFVSTFMubWFwKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlcy5tYXAoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24oanNvbnMpIHtcbiAgICAgICAgICAgICAgbWFwID0gYXdhaXQgbWFrZVdpZGdldHMoanNvbnMsIHByb3BlcnRpZXMsIGJveENvbnRlbnQpXG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuZm9vdGVyICYmIHByb3BlcnRpZXMuZm9vdGVyLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHZhciBmb290ZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICAgICAgICAgICAgICBmb290ZXJOb2RlLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmZvb3RlciArICcgIDxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgdmFyIHBlblVsdGltYXRlTm9kZSA9XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnICNjb250cm9scydcbiAgICAgICAgICAgICAgICAgICkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnaGVhZGVyJylcbiAgICAgICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLm5leHRTaWJsaW5nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZShtYXApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtYXAgPSBuZXcgQ3VzdG9tTWFwKGNvbnRhaW5lciwgb3B0aW9ucykucmVuZGVyKClcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydGllcy5mb290ZXIgJiYgcHJvcGVydGllcy5mb290ZXIudHJpbSgpKSB7XG4gICAgICAgICAgdmFyIGZvb3Rlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgICAgICAgIGZvb3Rlck5vZGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIHByb3BlcnRpZXMuZm9vdGVyICsgJyAgPGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PidcbiAgICAgICAgICB2YXIgcGVuVWx0aW1hdGVOb2RlID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvcGVydGllcy5zbHVnICsgJyAjY29udHJvbHMnKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnaGVhZGVyJylcbiAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLm5leHRTaWJsaW5nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9KVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTQhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTQhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJpbXBvcnQgeyBwYXJzZUxhbmd1YWdlRGF0YSB9IGZyb20gJy4vcGFyc2Vycy5qcydcblxudmFyIHVybCA9XG4gIHdpbmRvdy5sb2NhdGlvbiAhPSB3aW5kb3cucGFyZW50LmxvY2F0aW9uXG4gICAgPyBkb2N1bWVudC5yZWZlcnJlclxuICAgIDogZG9jdW1lbnQubG9jYXRpb24uaHJlZlxudmFyIGhyZWYgPSAvbGFuZz0oW14mXSspLy5leGVjKHVybClcbndpbmRvdy5sYW5nID0gaHJlZiA/IGhyZWZbMV0gOiBudWxsXG5cbnZhciBsZWFmbGV0TG9hZGVkID0gMFxuXG52YXIgcHJpbWFyeUpzRmlsZXMgPSBbXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0QDEuMy4xL2Rpc3QvbGVhZmxldC5qcycsXG4gICdodHRwczovL3VucGtnLmNvbS93aGF0d2ctZmV0Y2hAMy4wLjAvZGlzdC9mZXRjaC51bWQuanMnXG5dXG5cbnZhciBzZWNvbmRhcnlKc0ZpbGVzID0gW1xuICAnaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldC56b29tc2xpZGVyQDAuNy4xL3NyYy9MLkNvbnRyb2wuWm9vbXNsaWRlci5qcycsXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0LWZ1bGxzY3JlZW5AMS4wLjIvZGlzdC9MZWFmbGV0LmZ1bGxzY3JlZW4ubWluLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2Nocm9tYS1qc0AyLjAuMy9jaHJvbWEubWluLmpzJyxcbiAgJ2h0dHBzOi8vY3Npcy1pbGFiLmdpdGh1Yi5pby9tYXAtdGVtcGxhdGVzL2Rpc3QvanMvdmVuZG9yL0ExMXktRGlhbG9nLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2Nob2ljZXMuanNANy4wLjAvcHVibGljL2Fzc2V0cy9zY3JpcHRzL2Nob2ljZXMubWluLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXQubWFya2VyY2x1c3RlckAxLjQuMS9kaXN0L2xlYWZsZXQubWFya2VyY2x1c3Rlci5qcycsXG4gICdodHRwczovL2NzaXMtaWxhYi5naXRodWIuaW8vbWFwLXRlbXBsYXRlcy9kaXN0L2pzL3ZlbmRvci9wYXR0ZXJucy5qcycsXG4gICdodHRwczovL2NzaXMtaWxhYi5naXRodWIuaW8vbWFwLXRlbXBsYXRlcy9kaXN0L2pzL3ZlbmRvci9sYXRpbml6ZS5qcydcbl1cblxuZnVuY3Rpb24gaGFuZGxlTG9hZExlYWZsZXQoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBzZWNvbmRhcnlKc0ZpbGVzLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkXG4gICAgICB2YXIganNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAgIGpzTGluay5zcmMgPSBmaWxlXG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGpzTGluaylcblxuICAgICAganNMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZWFmbGV0TG9hZGVkKytcblxuICAgICAgICBpZiAobGVhZmxldExvYWRlZCA9PT0gc2Vjb25kYXJ5SnNGaWxlcy5sZW5ndGggKyBwcmltYXJ5SnNGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXNvbHZlKGxlYWZsZXRMb2FkZWQpXG4gICAgICAgICAgcmV0dXJuIGxlYWZsZXRMb2FkZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGltcG9ydEZpbGVzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJpbWFyeUpzRmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWRcbiAgICAgIHZhciBqc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAganNMaW5rLnNyYyA9IGZpbGVcbiAgICAgIGpzTGluay5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGVhZmxldExvYWRlZCsrXG5cbiAgICAgICAgaWYgKGxlYWZsZXRMb2FkZWQgPT09IHByaW1hcnlKc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIGhhbmRsZUxvYWRMZWFmbGV0KClcbiAgICAgICAgICByZXNvbHZlKGxlYWZsZXRMb2FkZWQpXG4gICAgICAgICAgcmV0dXJuIGxlYWZsZXRMb2FkZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaGVhZC5hcHBlbmRDaGlsZChqc0xpbmspXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VNYXAob3B0aW9ucykge1xuICBpZiAoIWxlYWZsZXRMb2FkZWQpIHtcbiAgICByZXR1cm4gYXdhaXQgaW1wb3J0RmlsZXMoKS50aGVuKGFzeW5jIGZ1bmN0aW9uKHNjcmlwdHNMb2FkZWQpIHtcbiAgICAgIHJldHVybiBhd2FpdCBpbml0KG9wdGlvbnMpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXdhaXQgaW5pdChvcHRpb25zKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQob3B0aW9ucykge1xuICB2YXIgZGF0YVVSTCA9ICdodHRwczovL3NwcmVhZHNoZWV0cy5nb29nbGUuY29tL2ZlZWRzL2xpc3QvJ1xuICB3aW5kb3cuZGVmYXVsdENvbG9yID1cbiAgICBvcHRpb25zLm9jZWFuY29sb3IgfHwgb3B0aW9ucy5vY2VhbkNvbG9yIHx8IG9wdGlvbnNbJ29jZWFuIGNvbG9yJ11cbiAgdmFyIHRyYW5zbGF0aW9uc1xuXG4gIGlmIChsYW5nKSB7XG4gICAgZmV0Y2goZGF0YVVSTCArIG9wdGlvbnMuZ29vZ2xlU2hlZXQgKyAnLycgKyAzICsgJy9wdWJsaWMvdmFsdWVzP2FsdD1qc29uJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihhc3luYyBmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHRyYW5zbGF0aW9ucyA9IHBhcnNlTGFuZ3VhZ2VEYXRhKGpzb24uZmVlZC5lbnRyeSlcblxuICAgICAgICBjb25zdCBpbml0V2l0aFNwcmVhZHNoZWV0ID0gcmVxdWlyZSgnLi9pbml0V2l0aFNwcmVhZHNoZWV0LmpzJykuZGVmYXVsdFxuICAgICAgICByZXR1cm4gYXdhaXQgaW5pdFdpdGhTcHJlYWRzaGVldChkYXRhVVJMLCBvcHRpb25zLCB0cmFuc2xhdGlvbnMpXG4gICAgICB9KVxuICB9IGVsc2UgaWYgKG9wdGlvbnMuZ29vZ2xlU2hlZXQpIHtcbiAgICBjb25zdCBpbml0V2l0aFNwcmVhZHNoZWV0ID0gcmVxdWlyZSgnLi9pbml0V2l0aFNwcmVhZHNoZWV0LmpzJykuZGVmYXVsdFxuICAgIHJldHVybiBhd2FpdCBpbml0V2l0aFNwcmVhZHNoZWV0KGRhdGFVUkwsIG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaW5pdFdpdGhvdXRTcHJlYWRzaGVldCA9IHJlcXVpcmUoJy4vaW5pdFdpdGhTcHJlYWRzaGVldC5qcycpLmRlZmF1bHRcbiAgICByZXR1cm4gYXdhaXQgaW5pdFdpdGhvdXRTcHJlYWRzaGVldChvcHRpb25zKVxuICB9XG59XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSdcbmltcG9ydCB7IG1ha2VNYXAgfSBmcm9tICcuL2pzL21ha2VNYXAnXG5pbXBvcnQgeyBleHRlcm5hbExpbmsgfSBmcm9tICcuL2pzL2hlbHBlcnMuanMnXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi9qcy9oZWxwZXJzLmpzJ1xud2luZG93Lm1ha2VNYXAgPSBtYWtlTWFwXG53aW5kb3cuZXh0ZXJuYWxMaW5rID0gZXh0ZXJuYWxMaW5rXG53aW5kb3cuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemVcblxuLy8gZXhhbXBsZXMoKVxuLy8gYXN5bmMgZnVuY3Rpb24gZXhhbXBsZXMoKSB7XG4vLyAgIHZhciBuZXdNYXBcbi8vICAgdmFyIG1hcHMgPSBbXG4vLyAgICAge1xuLy8gICAgICAgZ29vZ2xlU2hlZXQ6ICcxZ0cwbTR4UlZlQlE3ZVR5cGZaMFNRZXZfUnhVSzB1al85SWx5VXFTZXY3YycsXG4vLyAgICAgICBtYXBJRDogJ2FpZC10ZXJyb3Jpc20nLFxuLy8gICAgICAgZm9ybWF0UG9wdXBDb250ZW50OiBmdW5jdGlvbihmZWF0dXJlLCBtYXApIHtcbi8vICAgICAgICAgdmFyIGpzb25zID0gbWFwLmpzb25cbi8vICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4vLyAgICAgICAgICAgICAgIGZlYXR1cmVzOiBhLmZlYXR1cmVzLmNvbmNhdChiLmZlYXR1cmVzKVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgLmZlYXR1cmVzLm1hcChmdW5jdGlvbihmKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gZi5wcm9wZXJ0aWVzXG4vLyAgICAgICAgICAgfSlcbi8vXG4vLyAgICAgICAgIHZhciBwYWxlc3RpbmlhblRlcnJpdG9yaWVzID0gWydHYXphIFN0cmlwJywgJ1dlc3QgQmFuaycsICdQYWxlc3RpbmUnXVxuLy8gICAgICAgICB2YXIgY291bnRyeURhdGEwID0ganNvbnMuZmlsdGVyKGZ1bmN0aW9uKGYpIHtcbi8vICAgICAgICAgICByZXR1cm4gcGFsZXN0aW5pYW5UZXJyaXRvcmllcy5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllcy5jb3VudHJ5KSA+IC0xXG4vLyAgICAgICAgICAgICA/IHBhbGVzdGluaWFuVGVycml0b3JpZXMuaW5kZXhPZihmLmNvdW50cnkpID4gLTFcbi8vICAgICAgICAgICAgIDogZi5jb3VudHJ5ID09PSBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeVxuLy8gICAgICAgICB9KVxuLy9cbi8vICAgICAgICAgdmFyIGNvdW50cnlEYXRhID0gY291bnRyeURhdGEwLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG4vLyAgICAgICAgICAgdmFyIGNvdW50cnlUZXJyb3Jpc21EYXRhID0gJydcbi8vXG4vLyAgICAgICAgICAgc3dpdGNoIChmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSkge1xuLy8gICAgICAgICAgIGNhc2UgJ1dlc3QgQmFuayc6XG4vLyAgICAgICAgICAgICBjb3VudHJ5VGVycm9yaXNtRGF0YSArPVxuLy8gICAgICAgICAgICAgICAgIGEuY291bnRyeSA9PT0gJ1dlc3QgQmFuaycgJiYgYS50ZXJyb3Jpc21cbi8vICAgICAgICAgICAgICAgICAgID8gYS50ZXJyb3Jpc21cbi8vICAgICAgICAgICAgICAgICAgIDogYi5jb3VudHJ5ID09PSAnV2VzdCBCYW5rJyAmJiBiLnRlcnJvcmlzbVxuLy8gICAgICAgICAgICAgICAgICAgICA/IGIudGVycm9yaXNtXG4vLyAgICAgICAgICAgICAgICAgICAgIDogJydcbi8vICAgICAgICAgICAgIGJyZWFrXG4vL1xuLy8gICAgICAgICAgIGNhc2UgJ0dhemEgU3RyaXAnOlxuLy8gICAgICAgICAgICAgY291bnRyeVRlcnJvcmlzbURhdGEgKz1cbi8vICAgICAgICAgICAgICAgICBhLmNvdW50cnkgPT09ICdHYXphIFN0cmlwJyAmJiBhLnRlcnJvcmlzbVxuLy8gICAgICAgICAgICAgICAgICAgPyBhLnRlcnJvcmlzbVxuLy8gICAgICAgICAgICAgICAgICAgOiBiLmNvdW50cnkgPT09ICdHYXphIFN0cmlwJyAmJiBiLnRlcnJvcmlzbVxuLy8gICAgICAgICAgICAgICAgICAgICA/IGIudGVycm9yaXNtXG4vLyAgICAgICAgICAgICAgICAgICAgIDogJydcbi8vICAgICAgICAgICAgIGJyZWFrXG4vL1xuLy8gICAgICAgICAgIGNhc2UgJ1BhbGVzdGluZSc6XG4vLyAgICAgICAgICAgICBjb3VudHJ5VGVycm9yaXNtRGF0YSArPSBhLnRlcnJvcmlzbSArICd+JyArIGIudGVycm9yaXNtXG4vLyAgICAgICAgICAgICBicmVha1xuLy9cbi8vICAgICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgY291bnRyeVRlcnJvcmlzbURhdGEgPSBhLnRlcnJvcmlzbSA/IGEudGVycm9yaXNtIDogYi50ZXJyb3Jpc21cbi8vICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICBjb3VudHJ5OiBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSxcbi8vICAgICAgICAgICAgIHRlcnJvcmlzbTogY291bnRyeVRlcnJvcmlzbURhdGEsXG4vLyAgICAgICAgICAgICBmb3JlaWduX2Fzc2lzdGFuY2U6IGEuZm9yZWlnbl9hc3Npc3RhbmNlXG4vLyAgICAgICAgICAgICAgID8gYS5mb3JlaWduX2Fzc2lzdGFuY2Vcbi8vICAgICAgICAgICAgICAgOiBiLmZvcmVpZ25fYXNzaXN0YW5jZSxcbi8vICAgICAgICAgICAgIGFjdHVhbF9hc3Npc3RhbmNlOiBhLmFjdHVhbF9hc3Npc3RhbmNlXG4vLyAgICAgICAgICAgICAgID8gYS5hY3R1YWxfYXNzaXN0YW5jZVxuLy8gICAgICAgICAgICAgICA6IGIuYWN0dWFsX2Fzc2lzdGFuY2Vcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vL1xuLy8gICAgICAgICB2YXIgZ3JvdXBzID0gJycsXG4vLyAgICAgICAgICAgYXNzaXN0YW5jZSA9ICcnLFxuLy8gICAgICAgICAgIHRlcnJvcmlzbSA9IGNvdW50cnlEYXRhLnRlcnJvcmlzbVxuLy9cbi8vICAgICAgICAgaWYgKHRlcnJvcmlzbS5sZW5ndGgpIHtcbi8vICAgICAgICAgICBncm91cHMgPSBgPGJyPjxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+VGVycm9yaXN0IEdyb3VwczwvZGl2PlxuLy8gICAgICAgICAgICAgPHVsPiR7dGVycm9yaXNtXG4vLyAgICAgLnNwbGl0KCd+Jylcbi8vICAgICAuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcbi8vICAgICAgIHJldHVybiB0XG4vLyAgICAgfSlcbi8vICAgICAubWFwKGZ1bmN0aW9uKGdyb3VwKSB7XG4vLyAgICAgICByZXR1cm4gYDxsaSBjbGFzcz0ncG9wdXBFbnRyeVN0eWxlJz4ke2dyb3VwfTwvbGk+YFxuLy8gICAgIH0pXG4vLyAgICAgLmpvaW4oJycpfTwvdWw+YFxuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICBpZiAoY291bnRyeURhdGEuYWN0dWFsX2Fzc2lzdGFuY2UpIHtcbi8vICAgICAgICAgICBhc3Npc3RhbmNlID0gYDxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+Rm9yZWlnbiBBc3Npc3RhbmNlOiAkJHtjb3VudHJ5RGF0YS5hY3R1YWxfYXNzaXN0YW5jZS50b0xvY2FsZVN0cmluZygpfTwvZGl2PmBcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicG9wdXBUaXRsZVN0eWxlXCI+JHtjb3VudHJ5RGF0YS5jb3VudHJ5fTwvZGl2PlxuLy8gICAgICAgICAgICAgJHthc3Npc3RhbmNlfSAgICAgICR7Z3JvdXBzfWBcbi8vICAgICAgIH1cbi8vICAgICB9LFxuLy9cbi8vICAgICB7XG4vLyAgICAgICBnb29nbGVTaGVldDogJzExaE42dXpYY083YW1uNWJULWEwOVQ4b0V2Z3J3N2xaLW9CZkd0TFJ6cHdzJyxcbi8vICAgICAgIG1hcElEOiAnYWZyaWNhJyxcbi8vICAgICAgIGZvcm1hdFBvcHVwQ29udGVudDogZnVuY3Rpb24gZm9ybWF0UG9wdXBDb250ZW50KGZlYXR1cmUsIG1hcCkge1xuLy8gICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSBmZWF0dXJlLnByb3BlcnRpZXMuZGVzY3JpcHRpb25cbi8vICAgICAgICAgICA/IGZlYXR1cmUucHJvcGVydGllcy5kZXNjcmlwdGlvbiArXG4vLyAgICAgICAgICAgICAoZmVhdHVyZS5wcm9wZXJ0aWVzLmxpbmtcbi8vICAgICAgICAgICAgICAgPyAnIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIiBocmVmPVwiJyArXG4vLyAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLmxpbmsgK1xuLy8gICAgICAgICAgICAgICAgICdcIjwvYT4nICtcbi8vICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMubGlua190aXRsZSArXG4vLyAgICAgICAgICAgICAgICAgZXh0ZXJuYWxMaW5rICtcbi8vICAgICAgICAgICAgICAgICAnPC9hPidcbi8vICAgICAgICAgICAgICAgOiAnJylcbi8vICAgICAgICAgICA6ICcnXG4vL1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBUaXRsZVN0eWxlXCI+JyArXG4vLyAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnBvcnQgK1xuLy8gICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4vLyAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnBvcnRfY2l0eSArXG4vLyAgICAgICAgICAgJywgJyArXG4vLyAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnBvcnRfY291bnRyeSArXG4vLyAgICAgICAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+SW52ZXN0bWVudCBUeXBlPC9kaXY+PHVsIGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4vLyAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLmludmVzdG1lbnRfdHlwZVxuLy8gICAgICAgICAgICAgLnNwbGl0KCcsJylcbi8vICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24ocikge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gJzxsaT4nICsgY2FwaXRhbGl6ZShyKSArICc8L2xpPidcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAuam9pbignJykgK1xuLy8gICAgICAgICAgICc8L3VsPicgK1xuLy8gICAgICAgICAgICc8cD4nICtcbi8vICAgICAgICAgICBkZXNjcmlwdGlvbiArXG4vLyAgICAgICAgICAgJzwvcD4nXG4vLyAgICAgICAgIClcbi8vICAgICAgIH1cbi8vICAgICB9LFxuLy9cbi8vICAgICB7XG4vLyAgICAgICBnb29nbGVTaGVldDogJzFSOUozaGFHTERzUlBodFQxUDFKdlFMX1h6YVBaWnNhMzN2QkZPNnhzNmc0Jyxcbi8vICAgICAgIG1hcElEOiAnY2hpbmFwb3dlcicsXG4vLyAgICAgICB0aXRsZWNhcmR0aXRsZTogbnVsbCxcbi8vICAgICAgIHRpdGxlY2FyZGNvbnRlbnQ6IG51bGwsXG4vLyAgICAgICBtYXBib3hTdHlsZTpcbi8vICAgICAgICAgbGFuZyAmJiBsYW5nLmluZGV4T2YoJ3poLScpID4gLTFcbi8vICAgICAgICAgICA/ICdjaXR1aTN3YXcwMDE2MmpvMXpjc2YxdXJqJ1xuLy8gICAgICAgICAgIDogJ2NqODRzOWJldDEwZjUycm8ybHJuYTUweWcnLFxuLy8gICAgICAgb25FYWNoRmVhdHVyZToge1xuLy8gICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uIG1vdXNlb3ZlcihlKSB7XG4vLyAgICAgICAgICAgdGhpcy5vcGVuUG9wdXAoZS5sYXRsbmcpXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbiBtb3VzZW92ZXIoZSkge1xuLy8gICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0sXG4vLyAgICAgICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uKGZlYXR1cmUsIG1hcCkge1xuLy8gICAgICAgICB2YXIgcHJlZml4ID0gbGFuZyA/ICdfJyArIGxhbmcgOiAnJ1xuLy9cbi8vICAgICAgICAgdmFyIG5hbWUgPSBmZWF0dXJlLnByb3BlcnRpZXNbJ25hbWUnICsgcHJlZml4XVxuLy9cbi8vICAgICAgICAgLy8gdmFyIGRlc2NyaXB0aW9uID0gZmVhdHVyZS5wcm9wZXJ0aWVzWydkZXNjcmlwdGlvbicgKyBwcmVmaXhdXG4vLyAgICAgICAgIC8vICAgLnJlcGxhY2UoLzxhIGhyZWY9L2dpLCAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj0nKVxuLy8gICAgICAgICAvLyAgIC5yZXBsYWNlKC88XFwvYT4vZ2ksIGV4dGVybmFsTGluayArICc8L2E+Jylcbi8vXG4vLyAgICAgICAgIHZhciBvdXRwb3N0ID0gZmVhdHVyZS5wcm9wZXJ0aWVzLmNoaW5lc2Vfb3V0cG9zdHNcbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuLy8gICAgICAgICAgIG91dHBvc3QgK1xuLy8gICAgICAgICAgIChuYW1lICYmIG91dHBvc3QgPyAnPGJyLz4nIDogJycpICtcbi8vICAgICAgICAgICAobmFtZSAhPT0gb3V0cG9zdCA/IG5hbWUgOiAnJykgK1xuLy8gICAgICAgICAgIChmZWF0dXJlLnByb3BlcnRpZXMub2JzZXJ2ZWRcbi8vICAgICAgICAgICAgID8gJzxici8+KGV4cGVjdGVkKSdcbi8vICAgICAgICAgICAgIDogZmVhdHVyZS5wcm9wZXJ0aWVzLm9ic2VydmVkID09PSBmYWxzZVxuLy8gICAgICAgICAgICAgICA/ICc8YnIgLz4ob2JzZXJ2ZWQpJ1xuLy8gICAgICAgICAgICAgICA6ICcnKSArXG4vLyAgICAgICAgICAgJzwvZGl2PicgK1xuLy8gICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4vLyAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJyArXG4vLyAgICAgICAgICAgJzwvZGl2Pidcbi8vICAgICAgICAgKVxuLy8gICAgICAgfVxuLy8gICAgIH0sXG4vL1xuLy8gICAgIHtcbi8vICAgICAgIG1hcElEOiAndmVuZXp1ZWxhJyxcbi8vICAgICAgIGV4dGVybmFsTGlua1RleHQ6ICd5bywgY2xpY2sgaGVyZScsXG4vLyAgICAgICBnb29nbGVTaGVldDogJzEzdHZveGM3a0I4QnpTS082N2M2a2Y5NDlrcXRlX28tV0ZGNVcyMWg1Tzk4Jyxcbi8vICAgICAgIGZ1bGxTY3JlZW46IHRydWUsXG4vLyAgICAgICAnbWFwYm94IHN0eWxlJzogJ2NqcmF3YzF6czJiemMyc3EzeTl3dnQyMnQnLFxuLy8gICAgICAgJ29jZWFuIGNvbG9yJzogJyNjYWQyZDMnLFxuLy8gICAgICAgZm9ybWF0UG9wdXBDb250ZW50OiBmdW5jdGlvbihmZWF0dXJlLCBtYXApIHtcbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj4nICtcbi8vICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSArXG4vLyAgICAgICAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICtcbi8vICAgICAgICAgICAoZmVhdHVyZS5wcm9wZXJ0aWVzLnJlY29nbml0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd5J1xuLy8gICAgICAgICAgICAgPyBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSArXG4vLyAgICAgICAgICAgICAgICcgcmVjb2duaXplcyBKdWFuIEd1YWlkXFx4RjMgYXMgUHJlc2lkZW50IG9mIFZlbmV6dWVsYSdcbi8vICAgICAgICAgICAgIDogZmVhdHVyZS5wcm9wZXJ0aWVzLmNvdW50cnkgK1xuLy8gICAgICAgICAgICAgICAnIHJlY29nbml6ZXMgTmljb2xcXHhFMXMgTWFkdXJvIGFzIFByZXNpZGVudCBvZiBWZW5lenVlbGE8L2Rpdj4nKSArXG4vLyAgICAgICAgICAgJzwvZGl2Pidcbi8vICAgICAgICAgKVxuLy8gICAgICAgfVxuLy8gICAgIH0sXG4vL1xuLy8gICAgIHtcbi8vICAgICAgIG1hcElEOiAnZmVhdHVyZXMtbWFwJyxcbi8vICAgICAgIGV4dGVybmFsTGlua1RleHQ6ICd5bywgY2xpY2sgaGVyZScsXG4vLyAgICAgICBnb29nbGVTaGVldDogJzEzdHZveGM3a0I4QnpTS082N2M2a2Y5NDlrcXRlX28tV0ZGNVcyMWg1Tzk4Jyxcbi8vICAgICAgIGZ1bGxTY3JlZW46IHRydWUsXG4vLyAgICAgICAnbWFwYm94IHN0eWxlJzogJ2NqcmF3YzF6czJiemMyc3EzeTl3dnQyMnQnLFxuLy8gICAgICAgJ29jZWFuIGNvbG9yJzogJyNjYWQyZDMnXG4vLyAgICAgfSxcbi8vXG4vLyAgICAge1xuLy8gICAgICAgbWFwSUQ6ICdyZXNvdXJjZXMtbWFwJyxcbi8vICAgICAgIGV4dGVybmFsTGlua1RleHQ6ICd5bywgY2xpY2sgaGVyZScsXG4vLyAgICAgICBnb29nbGVTaGVldDogJzExclVhb0lTU2txYWtFS1o2aGk0eGVWYmJpRW5mUGkxcXNSb3E0cjBTclBBJyxcbi8vICAgICAgIGZ1bGxTY3JlZW46IHRydWUsXG4vLyAgICAgICAnbWFwYm94IHN0eWxlJzogJ2NqcmF3YzF6czJiemMyc3EzeTl3dnQyMnQnLFxuLy8gICAgICAgJ29jZWFuIGNvbG9yJzogJyNjYWQyZDMnLFxuLy8gICAgICAgJ3BvcHVwIGhlYWRlcnMnOiBbXG4vLyAgICAgICAgIGxhbmcgPyAnbmFtZV8nICsgbGFuZyA6ICduYW1lJyxcbi8vICAgICAgICAgbGFuZyA/ICdkZXNjcmlwdGlvbl8nICsgbGFuZyA6ICdkZXNjcmlwdGlvbicsXG4vLyAgICAgICAgICdsaW5rJ1xuLy8gICAgICAgXVxuLy8gICAgIH0sXG4vL1xuLy8gICAgIHtcbi8vICAgICAgIG1hcElEOiAnYWVnaXMnLFxuLy8gICAgICAgZXh0ZXJuYWxMaW5rVGV4dDogJ3lvLCBjbGljayBoZXJlJyxcbi8vICAgICAgIGdvb2dsZVNoZWV0OiAnMTVvSlNtazBLVzNfNUQ4VWoxZVNpei1lLVBwVzUxZTlOLVhTZ0xJUXRaSWsnLFxuLy8gICAgICAgZnVsbFNjcmVlbjogdHJ1ZSxcbi8vICAgICAgICdtYXBib3ggc3R5bGUnOiAnY2pyYXdjMXpzMmJ6YzJzcTN5OXd2dDIydCcsXG4vLyAgICAgICAnb2NlYW4gY29sb3InOiAnI2NhZDJkMycsXG4vLyAgICAgICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uKGZlYXR1cmUsIG1hcCkge1xuLy8gICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJwb3B1cFRpdGxlU3R5bGVcIj4ke2ZlYXR1cmUucHJvcGVydGllcy5uYW1lfTwvZGl2PlxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAke1xuLy8gICBmZWF0dXJlLnByb3BlcnRpZXMudG90YWxfZ3VpZGVkX21pc3NpbGVfY3J1aXNlcnNcbi8vICAgICA/IGA8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPkd1aWRlZCBNaXNzaWxlIENydWlzZXJzOiAke1xuLy8gICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnRvdGFsX2d1aWRlZF9taXNzaWxlX2NydWlzZXJzXG4vLyAgICAgfTwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3M9J3BvcHVwRW50cnlTdHlsZSc+Qk1ELUNhcGFibGU6PC9zcGFuPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPiR7XG4vLyAgIGZlYXR1cmUucHJvcGVydGllcy5ibWRfY2FwYWJsZV9nbWNcbi8vIH08L3NwYW4+PC9kaXY+YFxuLy8gICAgIDogJydcbi8vIH1cbi8vICAgICAgICAgICAgICAgICAgICR7XG4vLyAgIGZlYXR1cmUucHJvcGVydGllcy50b3RhbF9ndWlkZWRfbWlzc2lsZV9kZXN0cm95ZXJzXG4vLyAgICAgPyBgPGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj5HdWlkZWQgTWlzc2lsZSBEZXN0cm95ZXJzOiAke1xuLy8gICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnRvdGFsX2d1aWRlZF9taXNzaWxlX2Rlc3Ryb3llcnNcbi8vICAgICB9PC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPkJNRC1DYXBhYmxlOjwvc3Bhbj5cbi8vICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPiR7XG4vLyAgIGZlYXR1cmUucHJvcGVydGllcy50b3RhbF9ndWlkZWRfbWlzc2lsZV9kZXN0cm95ZXJzXG4vLyB9PC9zcGFuPjwvZGl2PmBcbi8vICAgICA6ICcnXG4vLyB9YFxuLy8gICAgICAgfVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgbWFwSUQ6ICd3YmktdGVycm9yaXNtJyxcbi8vICAgICAgIGV4dGVybmFsTGlua1RleHQ6ICd5bywgY2xpY2sgaGVyZScsXG4vLyAgICAgICBnb29nbGVTaGVldDogJzFkNEVlNjVLVF9TNDZ4MG1rNjJzVjZDWURwTVo0MGMyb1lKNkJRczlhXzEwJyxcbi8vICAgICAgIGZ1bGxTY3JlZW46IHRydWUsXG4vLyAgICAgICAnbWFwYm94IHN0eWxlJzogJ2NqcmF3YzF6czJiemMyc3EzeTl3dnQyMnQnLFxuLy8gICAgICAgJ29jZWFuIGNvbG9yJzogJyNjYWQyZDMnXG4vLyAgICAgfVxuLy8gICBdXG4vL1xuLy8gICBtYXBzLnJldmVyc2UoKS5mb3JFYWNoKChtYXAsIGkpID0+IHtcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKG1hcC5tYXBJRClcbi8vICAgICAgIG5ld01hcCA9IG1ha2VNYXAobWFwKVxuLy9cbi8vICAgICAgIGlmIChtYXAubWFwSUQgPT09ICdhZnJpY2EnKSB7XG4vLyAgICAgICAgIHZhciBjaG9rZXBvaW50ID0gTC5kaXZJY29uKHtcbi8vICAgICAgICAgICBjbGFzc05hbWU6ICdjaG9rZXBvaW50LWxhYmVsJyxcbi8vICAgICAgICAgICBodG1sOiAnPHNwYW4+Y2hva2UgcG9pbnQ8L3NwYW4+Jyxcbi8vICAgICAgICAgICBpY29uQW5jaG9yOiBbLTc1LCA3LjVdLFxuLy8gICAgICAgICAgIGljb25TaXplOiBbMjAsIDIwXVxuLy8gICAgICAgICB9KVxuLy9cbi8vICAgICAgICAgbmV3IEwubWFya2VyKFsxMi41ODY3MzI0MzI0NjQwNjIsIDQzLjM0MTA2NDQ1MzEyNV0sIHtcbi8vICAgICAgICAgICBpY29uOiBjaG9rZXBvaW50XG4vLyAgICAgICAgIH0pLmFkZFRvKG5ld01hcC5sZWFmbGV0KVxuLy9cbi8vICAgICAgICAgZG9jdW1lbnRcbi8vICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRvb2xib3ggaW5wdXQudWlbdHlwZT1cXCdjaGVja2JveFxcJ10nKVxuLy8gICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuLy9cbi8vICAgICAgICAgY29uc29sZS5sb2coJ2FmcmljYScpXG4vLyAgICAgICB9XG4vLyAgICAgfSwgMjAwMCAqIGkpXG4vLyAgIH0pXG4vLyB9XG5cbmlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH1cbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpXG4gICAgcmV0dXJuIGV2dFxuICB9XG5cbiAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZVxuXG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50XG59XG5cbkFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24ocHJvcGVydHkxLCBwcm9wZXJ0eTIpIHtcbiAgcmV0dXJuIHByb3BlcnR5MlxuICAgID8gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XG4gICAgICB2YXIgdmFsID0gaXRlbVtwcm9wZXJ0eTJdW3Byb3BlcnR5MV1cbiAgICAgIGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW11cbiAgICAgIGdyb3Vwc1t2YWxdLnB1c2goaXRlbSlcbiAgICAgIHJldHVybiBncm91cHNcbiAgICB9LCB7fSlcbiAgICA6IHRoaXMucmVkdWNlKGZ1bmN0aW9uKGdyb3VwcywgaXRlbSkge1xuICAgICAgdmFyIHZhbCA9IGl0ZW1bcHJvcGVydHkxXVxuICAgICAgZ3JvdXBzW3ZhbF0gPSBncm91cHNbdmFsXSB8fCBbXVxuICAgICAgZ3JvdXBzW3ZhbF0ucHVzaChpdGVtKVxuICAgICAgcmV0dXJuIGdyb3Vwc1xuICAgIH0sIHt9KVxufVxuXG5SZWdFeHAuZXNjYXBlID0gZnVuY3Rpb24ocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9