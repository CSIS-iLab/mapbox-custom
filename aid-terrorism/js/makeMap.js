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

          if (forms) {
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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map.widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var w = _step.value;
      var thisFormKeyWidget = w.type === 'form' ? w : null;
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
        var svg = '<svg xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" fill="' + 'red' + '"/></svg>';
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
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'color';
  });
  var formKeyWidget = map.widgets.find(function (w) {
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

      if (forms && formKeyForm === 'line' || forms && colorKeyForm === 'line') {
        var i = forms.indexOf(feature.properties[formKeyWidget.field]);

        if (i > -1) {
          nonPointStyle = {
            color: colors[i][index] === undefined ? '#cad2d3' : colors[i][index] !== null ? colors[i][index] : color,
            weight: helpers["f" /* lineWeights */][i][index],
            lineCap: 'square',
            dashArray: helpers["e" /* lineDashArrays */][i] ? helpers["e" /* lineDashArrays */][i][index] : null
          };
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


function mapWidgetsToState(options) {
  var container = document.querySelector('#' + options.slug + ' .map');
  var map = new CustomMap_CustomMap(container, options).render();
  return new Promise(function (resolve, reject) {
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
        var inputs = selects.concat(checks).concat(search).concat(toggle); // if (!inputs.length) makeLayers(map)

        var initialized = 0;
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
  });
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
  var possibleOptions = widgets[x].keys.map(function (key) {
    return key.value.toLowerCase();
  });
  var possibleQueries = possibleChecks.concat(possibleOptions);
  var query = Array.from(selections).map(function (o) {
    return element.querySelector('input[type=\'checkbox\']') ? o.name.toLowerCase() : o.value.toLowerCase();
  });
  map.filters[widgets[x].id] = widgets[x].input === 'toggle' ? function (feature) {
    var bool = true;

    if (feature.properties.toggle) {
      bool = convertType(query[0]) ? true : false;
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




function makeWidgets(jsons, options, boxContent) {
  var widgetContent = [];
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
  mapWidgetsToState(options);
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function initWithSpreadsheet(_x, _x2, _x3) {
  return _initWithSpreadsheet.apply(this, arguments);
}

function _initWithSpreadsheet() {
  _initWithSpreadsheet = _asyncToGenerator(
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
                    var _ref = _asyncToGenerator(
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
window.externalLink = helpers["d" /* externalLink */]; // ;(async function() {
//   var newMap = await makeMap({
//     googleSheet: '1gG0m4xRVeBQ7eTypfZ0SQev_RxUK0uj_9IlyUqSev7c',
//     mapID: 'aid-terrorism',
//     formatPopupContent: function(feature, map) {
//       var jsons = map.json
//         .reduce(function(a, b) {
//           return {
//             type: 'FeatureCollection',
//             features: a.features.concat(b.features)
//           }
//         })
//         .features.map(function(f) {
//           return f.properties
//         })
//
//       var countryData = jsons
//         .filter(function(f) {
//           return f.country === feature.properties.country
//         })
//         .reduce(function(a, b) {
//           return {
//             terrorism: a.terrorism ? a.terrorism : b.terrorism,
//             foreign_assistance: a.foreign_assistance
//               ? a.foreign_assistance
//               : b.foreign_assistance
//           }
//         })
//
//       var groups = '',
//         assistance,
//         terrorism = countryData.terrorism,
//         aid = {
//           e: '$100,000,000-$1,500,000,000',
//           d: '$30,000,000-$99,000,000',
//           c: '$2,000,000-$29,999,000',
//           b: '$10,000-$1,999,000',
//           a: '$0-$10,000'
//         }
//
//       if (terrorism.length) {
//         groups = `<br><div class="popupHeaderStyle">Terrorist Groups</div>
//         <ul>${terrorism
//     .split('~')
//     .map(function(group) {
//       return `<li class='popupEntryStyle'>${group}</li>`
//     })
//     .join('')}</ul>`
//       }
//
//       assistance = aid[countryData.foreign_assistance]
//         ? `<div class="popupHeaderStyle">Foreign Assistance: ${(assistance =
//             aid[countryData.foreign_assistance])}</div>`
//         : ''
//
//       return `<div class="popupTitleStyle">${feature.properties.country}</div>
//         ${assistance}      ${groups}`
//     }
//   })
// })()
//
// makeMap({
//   googleSheet: '1gG0m4xRVeBQ7eTypfZ0SQev_RxUK0uj_9IlyUqSev7c',
//   mapID: 'aid-terrorism',
//   formatPopupContent: function(feature, map) {
//     var jsons = map.json
//       .reduce(function(a, b) {
//         return {
//           type: 'FeatureCollection',
//           features: a.features.concat(b.features)
//         }
//       })
//       .features.map(function(f) {
//         return f.properties
//       })
//
//     var countryData = jsons
//       .filter(function(f) {
//         return f.country === feature.properties.country
//       })
//       .reduce(function(a, b) {
//         return {
//           terrorism: a.terrorism ? a.terrorism : b.terrorism,
//           foreign_assistance: a.foreign_assistance
//             ? a.foreign_assistance
//             : b.foreign_assistance
//         }
//       })
//
//     var groups = '',
//       assistance,
//       terrorism = countryData.terrorism,
//       aid = {
//         e: '$100,000,000-$1,500,000,000',
//         d: '$30,000,000-$99,000,000',
//         c: '$2,000,000-$29,999,000',
//         b: '$10,000-$1,999,000',
//         a: '$0-$10,000'
//       }
//
//     if (terrorism.length) {
//       groups = `<br><div class="popupHeaderStyle">Terrorist Groups</div>
//       <ul>${terrorism
//     .split('~')
//     .map(function(group) {
//       return `<li class='popupEntryStyle'>${group}</li>`
//     })
//     .join('')}</ul>`
//     }
//
//     assistance = aid[countryData.foreign_assistance]
//       ? `<div class="popupHeaderStyle">Foreign Assistance: ${(assistance =
//           aid[countryData.foreign_assistance])}</div>`
//       : ''
//
//     return `<div class="popupTitleStyle">${feature.properties.country}</div>
//       ${assistance}      ${groups}`
//   }
// })
// makeMap({
//   googleSheet: '1R9J3haGLDsRPhtT1P1JvQL_XzaPZZsa33vBFO6xs6g4',
//   mapID: 'chinapower',
//   mapboxStyle:
//     lang && lang.indexOf('zh-') > -1
//       ? 'citui3waw00162jo1zcsf1urj'
//       : 'cj84s9bet10f52ro2lrna50yg',
//   onEachFeature: {
//     mouseover: function mouseover(e) {
//       this.openPopup(e.latlng)
//     },
//     mouseout: function mouseover(e) {
//       this.closePopup()
//     }
//   },
//   formatPopupContent: function(feature, map) {
//     var prefix = lang ? '_' + lang : ''
//
//     var name = feature.properties['name' + prefix]
//
//     // var description = feature.properties['description' + prefix]
//     //   .replace(/<a href=/gi, '<a target="_blank" href=')
//     //   .replace(/<\/a>/gi, externalLink + '</a>')
//
//     var outpost = feature.properties.chinese_outposts
//     return (
//       '<div class="popupEntryStyle">' +
//       outpost +
//       (name && outpost ? '<br/>' : '') +
//       (name !== outpost ? name : '') +
//       (feature.properties.observed
//         ? '<br/>(expected)'
//         : feature.properties.observed === false
//           ? '<br />(observed)'
//           : '') +
//       '</div>' +
//       '<div class="popupEntryStyle">' +
//       'description' +
//       '</div>'
//     )
//   }
// })
// var maps = [
//   // {
//   //   id: 'claims-map',
//   //   sheet: '14MvucMac-lYCu0-2vD5tcxfCUqIJog2h4-REFkpH3Kw',
//   //   'popup headers': [
//   //     window.lang ? 'name_' + window.lang : 'name',
//   //     window.lang ? 'description_' + window.lang : 'description',
//   //     'link'
//   //   ]
//   // }
//   // ,
//   {
//     id: 'venezuela',
//     sheet: '13tvoxc7kB8BzSKO67c6kf949kqte_o-WFF5W21h5O98'
//   },
//   {
//     id: 'features-map',
//     sheet: '1REFNJ8WZ9fOzShYC8SpUJ7pZQEMkWlqzC2KpMb-wSyc'
//   },
//   {
//     id: 'resources-map',
//     sheet: '11rUaoISSkqakEKZ6hi4xeVbbiEnfPi1qsRoq4r0SrPA',
//     'popup headers': [
//       lang ? 'name_' + lang : 'name',
//       lang ? 'description_' + lang : 'description',
//       'link'
//     ]
//   },
//   {
//     id: 'aegis',
//     sheet: '15oJSmk0KW3_5D8Uj1eSiz-e-PpW51e9N-XSgLIQtZIk'
//   },
//   {
//     id: 'wbi-terrorism',
//     sheet: '1d4Ee65KT_S46x0mk62sV6CYDpMZ40c2oYJ6BQs9a_10'
//   }
// ]
//
// maps.reverse().forEach((map, i) => {
//   var mapboxStyle =
//     lang && lang.indexOf('zh-') > -1
//       ? (mapboxStyle = 'citui3waw00162jo1zcsf1urj')
//       : (mapboxStyle = 'cj84s9bet10f52ro2lrna50yg')
//
//   setTimeout(() => {
//     console.log('another one')
//     makeMap({
//       mapID: map.id,
//       externalLinkText: 'yo, click here',
//       googleSheet: map.sheet,
//       fullScreen: true,
//       'mapbox style':
//         map.id === 'aegis'
//           ? 'cjoiv6dmo29kh2rsd2z5qda2p'
//           : map.id === 'venezuela' || map.id === 'wbi-terrorism'
//             ? 'cjrawc1zs2bzc2sq3y9wvt22t'
//             : mapboxStyle,
//       'ocean color': '#cad2d3',
//       'popup headers': map['popup headers'], // Array
//       // "popup content": [],
//       // pointStyle: function(feature,latlng){},
//       // nonPointStyle: function(feature){},
//       // onEachFeature: {
//       // click: function(feature, layer){}
//       // dbclick: function(feature, layer, map){},
//       // mousedown: function(feature, layer, map){},
//       // mouseenter: function(feature, layer, map){},
//       // mouseout: function(feature, layer, map){}
//       // },
//       formatPopupContent:
//         map.id === 'aegis'
//           ? function(feature, map) {
//             return `<div class="popupTitleStyle">${
//               feature.properties.name
//             }</div>
//
//         ${
//   feature.properties.total_guided_missile_cruisers
//     ? `<div class="popupHeaderStyle">Guided Missile Cruisers: ${
//       feature.properties.total_guided_missile_cruisers
//     }</div>
//         <div><span class='popupEntryStyle'>BMD-Capable:</span>
//         <span class='popupEntryStyle'>${
//   feature.properties.bmd_capable_gmc
// }</span></div>`
//     : ''
// }
//     ${
//   feature.properties.total_guided_missile_destroyers
//     ? `<div class="popupHeaderStyle">Guided Missile Destroyers: ${
//       feature.properties.total_guided_missile_destroyers
//     }</div>
//     <div><span class='popupEntryStyle'>BMD-Capable:</span>
//     <span class='popupEntryStyle'>${
//   feature.properties.total_guided_missile_destroyers
// }</span></div>`
//     : ''
// }`
//           }
//           : map.id === 'venezuela'
//             ? function(feature, map) {
//               return (
//                 '<div class="popupHeaderStyle">' +
//                   feature.properties.country +
//                   '</div><div class="popupEntryStyle">' +
//                   (feature.properties.recognition.toLowerCase() === 'y'
//                     ? feature.properties.country +
//                       ' recognizes Juan Guaid\xF3 as President of Venezuela'
//                     : feature.properties.country +
//                       ' recognizes Nicol\xE1s Maduro as President of Venezuela</div>') +
//                   '</div>'
//               )
//             }
//             : null
//     })
//   }, 2000 * i)
// })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DdXN0b21NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hhbmRsZUZlYXR1cmVFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlTm9uUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VHZW9Kc29uT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZUxheWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFwV2lkZ2V0c1RvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VXaWRnZXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlRG9jdW1lbnROb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/MTI5NyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY3JlYXRlQ29sb3JTY2FsZSIsImNvdW50IiwiaW5kZXgiLCJzY2FsZU9uZSIsImNocm9tYSIsImN1YmVoZWxpeCIsImh1ZSIsImxpZ2h0bmVzcyIsInNjYWxlIiwiY29sb3JzIiwic2NhbGVUd28iLCJnYW1tYSIsInJldmVyc2UiLCJpIiwiY29sb3IiLCJzYXR1cmF0ZSIsImhleCIsInB1c2giLCJsaW5lV2VpZ2h0cyIsImxpbmVEYXNoQXJyYXlzIiwiZXh0ZXJuYWxMaW5rIiwicmVtb3ZlIiwiY29udmVydFR5cGUiLCJ2YWx1ZSIsInYiLCJOdW1iZXIiLCJpc05hTiIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwiY2FwaXRhbGl6ZSIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsb2FkIiwidXJsIiwiZWxlbWVudCIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJpbm5lckhUTUwiLCJyZXNwb25zZVRleHQiLCJtYWtlRHJvcGRvd25PcHRpb25zIiwib3B0aW9ucyIsIngiLCJncm91cHMiLCJ3aWRnZXRzIiwia2V5cyIsImdyb3VwQnkiLCJjaG9pY2VzIiwiT2JqZWN0IiwibWFwIiwiZyIsInoiLCJpZCIsImxhYmVsIiwidHJpbSIsInBhcnNlSW50IiwiTmFOIiwiZGlzYWJsZWQiLCJyZW1vdmVJdGVtQnV0dG9uIiwibWF4SXRlbUNvdW50IiwibWF4aW11bSIsImNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsIl90aGlzIiwiaXRlbSIsImNsYXNzTmFtZXMiLCJkYXRhIiwia2V5IiwiZmluZCIsImtleVN0eWxlIiwidHlwZSIsImZvcm1zIiwiayIsImluZGV4T2YiLCJzdHlsZU9wdGlvbnMiLCJzdHlsZUtleSIsIm1hcmt1cCIsImFjdGl2ZSIsImNsYXNzIiwic3ZnIiwid2luZG93IiwiYnRvYSIsImNob2ljZSIsIml0ZW1DaG9pY2UiLCJpdGVtRGlzYWJsZWQiLCJpdGVtU2VsZWN0YWJsZSIsImNvbmZpZyIsIml0ZW1TZWxlY3RUZXh0IiwiZ3JvdXBJZCIsInBhcnNlTGFuZ3VhZ2VEYXRhIiwibGFuZ3VhZ2VEYXRhIiwiZm9yRWFjaCIsInJvdyIsImNvbHVtbiIsImNvbHVtbk5hbWUiLCJyZXBsYWNlIiwibGFuZyIsInBhcnNlTGVnZW5kRGF0YSIsImpzb24iLCJzdHlsZSIsImNvbG9yU2NhbGUiLCJsZW5ndGgiLCJsZWdlbmRJdGVtcyIsInkiLCJncm91cCIsInNlbGVjdGVkIiwiY29sb3JWYWwiLCJmb3JtIiwiZGVmYXVsdENvbG9yIiwiaWNvbiIsInBhdHRlcm4iLCJzcGxpdCIsInRyYW5zbGF0aW9ucyIsInBhcnNlTWV0YURhdGEiLCJwYXJzZVdpZGdldERhdGEiLCJtZXRhRGF0YSIsInByb2Nlc3MiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJmaWx0ZXIiLCJtYXRjaCIsInciLCJmaWVsZCIsImZlYXR1cmUiLCJpY29uU2l6ZSIsImljb25zaXplIiwiZGl2aWRlcnMiLCJzaXplIiwia2V5Q29sb3IiLCJmb3JtS2V5V2lkZ2V0IiwiY29sb3JLZXlXaWRnZXQiLCJjb2xvcktleSIsImZvcm1LZXkiLCJldmVyeSIsImF2ZXJhZ2UiLCJvY2VhbmNvbG9yIiwiZGFya2VuIiwic2x1ZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN2Z0NvbnRlbnQiLCJwMSIsInAyIiwicDMiLCJjb2xvclR3byIsImNvbG9yT25lIiwibWFwSWQiLCJDdXN0b21NYXAiLCJjb250YWluZXIiLCJmaWx0ZXJzIiwibGVhZmxldCIsInBvcHVwY29udGVudCIsInBvcHVwaGVhZGVycyIsImFsbCIsInJlc2V0RmlsdGVycyIsInJlbW92ZUdyb3VwcyIsInJlbW92ZUxheWVyIiwicmVuZGVyIiwiTCIsIm1pblpvb20iLCJtaW56b29tIiwibWF4Wm9vbSIsIm1heHpvb20iLCJtYXhCb3VuZHMiLCJtYXhib3VuZHMiLCJzd2JvdW5kcyIsIm5lYm91bmRzIiwic2Nyb2xsV2hlZWxab29tIiwiaW5uZXJXaWR0aCIsInpvb21Db250cm9sIiwiaGFzT3duUHJvcGVydHkiLCJ6b29tc2xpZGVyIiwiYXR0cmlidXRpb25Db250cm9sIiwibG9hZEV2ZW50Iiwib24iLCJsb2FkZXZlbnQiLCJhZGRFdmVudCIsImFkZGV2ZW50Iiwic2V0VmlldyIsImNlbnRlciIsInpvb20iLCJ0aWxlTGF5ZXIiLCJtYXBib3hzdHlsZSIsImFkZFRvIiwiY29udHJvbCIsImZ1bGxzY3JlZW4iLCJDb250cm9sIiwiRnVsbHNjcmVlbiIsImFkZENvbnRyb2wiLCJhdHRyaWJ1dGlvbiIsInBvc2l0aW9uIiwic2V0UHJlZml4IiwiaGFuZGxlRmVhdHVyZUV2ZW50cyIsImxheWVyIiwiZXZlbnRPcHRpb25zIiwib25lYWNoZmVhdHVyZSIsImNsaWNrIiwiaGFuZGxlTGF5ZXJDbGljayIsImxpc3RlbmVyIiwicG9wdXBDb250ZW50IiwiZm9ybWF0cG9wdXBjb250ZW50IiwiZm9ybWF0UG9wdXBDb250ZW50IiwiYmluZFBvcHVwIiwiY29udGVudCIsInAiLCJqb2luIiwibGluayIsImh5cGVybGluayIsImV4dGVybmFsTGlua0NvbnRlbnQiLCJleHRlcm5hbExpbmtUZXh0IiwidHJhbnNsYXRhYmxlU3RyaW5ncyIsInNvcnQiLCJhIiwiYiIsInQiLCJyZSIsIlJlZ0V4cCIsImVzY2FwZSIsImlzU3BpZGVyZmllZCIsIl9wcmVTcGlkZXJmeUxhdGxuZyIsIl9sYXllcnMiLCJsIiwidW5zcGlkZXJmeSIsIl9fcGFyZW50IiwidmFsdWVzIiwiX2dyb3VwIiwiX2ZlYXR1cmVHcm91cCIsIl9zcGlkZXJmaWVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImQiLCJvcGFjaXR5Iiwic3R5bGVQb2ludCIsImxhdGxuZyIsInBvaW50U3R5bGUiLCJDdXN0b21JY29uIiwiSWNvbiIsImV4dGVuZCIsImljb25BbmNob3IiLCJpY29uYW5jaG9yIiwibm9uUG9pbnRTdHlsZSIsImRpdkljb24iLCJ0aGlzRm9ybUtleVdpZGdldCIsInRoaXNDb2xvcktleVdpZGdldCIsImNsYXNzTmFtZSIsImh0bWwiLCJlbmNvZGVVUkkiLCJpY29uVXJsIiwibWFya2VyIiwic3R5bGVOb25Qb2ludCIsImZvcm1LZXlGb3JtIiwicmVkdWNlIiwiYyIsImNvbG9yS2V5Rm9ybSIsImYiLCJ3ZWlnaHQiLCJsaW5lQ2FwIiwiZGFzaEFycmF5IiwicGF0dGVybk9wdGlvbnMiLCJzcGFjZVdlaWdodCIsInNwYWNlQ29sb3IiLCJzcGFjZU9wYWNpdHkiLCJhbmdsZSIsIlN0cmlwZVBhdHRlcm4iLCJzaGFwZU9wdGlvbnMiLCJyYWRpdXMiLCJmaWxsIiwic3Ryb2tlIiwiZmlsbENvbG9yIiwiZmlsbE9wYWNpdHkiLCJzaGFwZSIsIlBhdHRlcm5DaXJjbGUiLCJ3aWR0aCIsImhlaWdodCIsIlBhdHRlcm4iLCJhZGRTaGFwZSIsImZpbGxQYXR0ZXJuIiwibGluZUNvbG9yIiwibGluZVdlaWdodCIsImxpbmVPcGFjaXR5IiwiZ2VvbWV0cnkiLCJicmlnaHRlbiIsIm1ha2VHZW9Kc29uT3B0aW9ucyIsImNvbG9yS2V5V2lkZ2V0cyIsImZvcm1LZXlXaWRnZXRzIiwib25FYWNoRmVhdHVyZSIsImJhY2tncm91bmRPcHRpb25zIiwicG9pbnRUb0xheWVyIiwiZm9yZWdyb3VuZE9wdGlvbnMiLCJtYWtlTGF5ZXJzIiwiZ2VvSnNvbk9wdGlvbnMiLCJjbHVzdGVyQ29sb3IiLCJjb2xvcktleXMiLCJ3aWRnZXQiLCJjb2xsZWN0aW9uTmFtZSIsImZlYXR1cmVzIiwiYWxsUG9pbnRzIiwiTWFya2VyQ2x1c3Rlckdyb3VwIiwic2hvd0NvdmVyYWdlT25Ib3ZlciIsInpvb21Ub0JvdW5kc09uQ2xpY2siLCJtYXhDbHVzdGVyUmFkaXVzIiwiY2x1c3RlcmRpc3RhbmNlIiwiaWNvbkNyZWF0ZUZ1bmN0aW9uIiwiY2x1c3RlciIsImdldENoaWxkQ291bnQiLCJoYXNMaW5lRmVhdHVyZXMiLCJzb21lIiwib3B0aW9uIiwibG9jYWxlQ29tcGFyZSIsImdlb0pzb24iLCJhZGRMYXllciIsImdldExheWVycyIsImUiLCJoYW5kbGVDbHVzdGVyQ2xpY2siLCJfbGVhZmxldF9pZCIsInNwaWRlcmZ5IiwiZ2V0QWxsQ2hpbGRNYXJrZXJzIiwibSIsImdldEVsZW1lbnQiLCJtYXBXaWRnZXRzVG9TdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGFibGVzIiwidGFibGUiLCJmZXRjaCIsImFwaWtleSIsInRoZW4iLCJyZXNwb25zZXMiLCJyZXNwb25zZSIsImpzb25zIiwiY29uY2F0IiwiZmVhdHVyZUdyb3VwcyIsImJveCIsIndpZGdldENvbnRlbnQiLCJDaG9pY2VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJlc2V0Iiwic2VsZWN0cyIsImNoZWNrcyIsInNlYXJjaCIsInRvZ2dsZSIsImlucHV0cyIsImluaXRpYWxpemVkIiwiaW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJmaXJlRXZlbnQiLCJtYXBfaWQiLCJ0cmFuc2xhdGFibGVOb2RlcyIsImVsIiwic2VsZWN0aW9ucyIsInBvc3NpYmxlQ2hlY2tzIiwibyIsIm5hbWUiLCJwb3NzaWJsZU9wdGlvbnMiLCJwb3NzaWJsZVF1ZXJpZXMiLCJxdWVyeSIsImJvb2wiLCJ3aXRoRGlhY3JpdGljcyIsIndpdGhvdXREaWFjcml0aWNzIiwibGF0aW5pc2UiLCJsYXllcnMiLCJncm91cGluZyIsIm1ha2VXaWRnZXRzIiwiYm94Q29udGVudCIsImxlZ2VuZERhdGEiLCJyZWZlcmVuY2UiLCJmZWVkIiwiZW50cnkiLCJmb3JtYXRXaWRnZXRzIiwidGl0bGUiLCJub2RlcyIsImxhYmVsVGV4dCIsIml0ZW1UZXh0Iiwib2Zmc2V0SGVpZ2h0IiwiZm9udFNpemUiLCJnZXRDb21wdXRlZFN0eWxlIiwib2Zmc2V0IiwidHJhbnNmb3JtIiwid2lkZ2V0Tm9kZXMiLCJkcm9wZG93bk9wdGlvbnMiLCJpbnN0cnVjdGlvbnMiLCJ3aWRnZXRUaXRsZSIsIm1ha2VEb2N1bWVudE5vZGVzIiwibmV3U2VjdGlvbkhUTUwiLCJsb2dvIiwiZGVzY3JpcHRpb24iLCJ0aXRsZWNhcmRjb250ZW50IiwiYm9keSIsIm5ld0RpYWxvZ0hUTUwiLCJ0aXRsZWNhcmR0aXRsZSIsIm92ZXJmbG93IiwiZGlhbG9nRWwiLCJnZXRFbGVtZW50QnlJZCIsIm1haW5FbCIsImRpYWxvZ1RyaWdnZXIiLCJkaWFsb2dCb3giLCJBMTF5RGlhbG9nIiwiZGlhbG9nIiwic2hvdyIsImRpc3BsYXkiLCJwcm9ncmFtIiwibWV0YUxvY2FsZU9HIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm1ldGFUeXBlT0ciLCJtZXRhV2lkdGhPRyIsIm1ldGFIZWlnaHRPRyIsIm1ldGFUd2l0dGVyQ2FyZE9HIiwibWV0YVRpdGxlT0ciLCJtZXRhVGl0bGVUd2l0dGVyIiwibWV0YURlc2NyaXB0aW9uT0ciLCJtZXRhRGVzY3JpcHRpb25Ud2l0dGVyIiwibWV0YUltYWdlT0ciLCJzY3JlZW5zaG90IiwibWV0YUltYWdlVHdpdHRlciIsImlubmVyVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImhyZWYiLCJ3ZWJzaXRlIiwiaW5pdFdpdGhTcHJlYWRzaGVldCIsImRhdGFVUkwiLCJnb29nbGVTaGVldCIsInR3b0RfcHJvcGVyaXRlcyIsImRlZmF1bHQiLCJtYXBJRCIsInJlZmVyZW5jZVNoZWV0cyIsInJlZmVyZW5jZVNoZWV0VVJMUyIsInUiLCJmb290ZXIiLCJmb290ZXJOb2RlIiwicGVuVWx0aW1hdGVOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwibG9jYXRpb24iLCJwYXJlbnQiLCJyZWZlcnJlciIsImV4ZWMiLCJsZWFmbGV0TG9hZGVkIiwicHJpbWFyeUpzRmlsZXMiLCJzZWNvbmRhcnlKc0ZpbGVzIiwiaGFuZGxlTG9hZExlYWZsZXQiLCJmaWxlIiwianNMaW5rIiwic3JjIiwib25sb2FkIiwiaW1wb3J0RmlsZXMiLCJtYWtlTWFwIiwic2NyaXB0c0xvYWRlZCIsImluaXQiLCJvY2VhbkNvbG9yIiwicmVxdWlyZSIsImluaXRXaXRob3V0U3ByZWFkc2hlZXQiLCJDdXN0b21FdmVudCIsImV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJpbml0Q3VzdG9tRXZlbnQiLCJwcm90b3R5cGUiLCJFdmVudCIsInByb3BlcnR5MSIsInByb3BlcnR5MiIsInZhbCIsInMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUM3QyxNQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FDbEJDLFNBRFksR0FFWkMsR0FGWSxDQUVSLEdBRlEsRUFHWkMsU0FIWSxDQUdGLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FIRSxFQUlaQyxLQUpZLEdBS1pDLE1BTFksQ0FLTFIsS0FBSyxH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QVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxPQUFPK0QsTUFBTSxDQUFDNlgsV0FBZCxLQUE4QixVQUFsQyxFQUE4QztBQUFBLE1BQ25DQSxXQURtQyxHQUM1QyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDbENBLFVBQU0sR0FBR0EsTUFBTSxJQUFJO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCQyxnQkFBVSxFQUFFLEtBQTlCO0FBQXFDQyxZQUFNLEVBQUV6YjtBQUE3QyxLQUFuQjtBQUNBLFFBQUlrVSxHQUFHLEdBQUdqTixRQUFRLENBQUNrTixXQUFULENBQXFCLGFBQXJCLENBQVY7QUFDQUQsT0FBRyxDQUFDd0gsZUFBSixDQUFvQkwsS0FBcEIsRUFBMkJDLE1BQU0sQ0FBQ0MsT0FBbEMsRUFBMkNELE1BQU0sQ0FBQ0UsVUFBbEQsRUFBOERGLE1BQU0sQ0FBQ0csTUFBckU7QUFDQSxXQUFPdkgsR0FBUDtBQUNELEdBTjJDOztBQVE1Q2tILGFBQVcsQ0FBQ08sU0FBWixHQUF3QnBZLE1BQU0sQ0FBQ3FZLEtBQVAsQ0FBYUQsU0FBckM7QUFFQXBZLFFBQU0sQ0FBQzZYLFdBQVAsR0FBcUJBLFdBQXJCO0FBQ0Q7O0FBRUR6TyxLQUFLLENBQUNnUCxTQUFOLENBQWdCdGEsT0FBaEIsR0FBMEIsVUFBU3dhLFNBQVQsRUFBb0JDLFNBQXBCLEVBQStCO0FBQ3ZELFNBQU9BLFNBQVMsR0FDWixLQUFLM04sTUFBTCxDQUFZLFVBQVNqTixNQUFULEVBQWlCcUIsSUFBakIsRUFBdUI7QUFDbkMsUUFBSXdaLEdBQUcsR0FBR3haLElBQUksQ0FBQ3VaLFNBQUQsQ0FBSixDQUFnQkQsU0FBaEIsQ0FBVjtBQUNBM2EsVUFBTSxDQUFDNmEsR0FBRCxDQUFOLEdBQWM3YSxNQUFNLENBQUM2YSxHQUFELENBQU4sSUFBZSxFQUE3QjtBQUNBN2EsVUFBTSxDQUFDNmEsR0FBRCxDQUFOLENBQVkxYyxJQUFaLENBQWlCa0QsSUFBakI7QUFDQSxXQUFPckIsTUFBUDtBQUNELEdBTEMsRUFLQyxFQUxELENBRFksR0FPWixLQUFLaU4sTUFBTCxDQUFZLFVBQVNqTixNQUFULEVBQWlCcUIsSUFBakIsRUFBdUI7QUFDbkMsUUFBSXdaLEdBQUcsR0FBR3haLElBQUksQ0FBQ3NaLFNBQUQsQ0FBZDtBQUNBM2EsVUFBTSxDQUFDNmEsR0FBRCxDQUFOLEdBQWM3YSxNQUFNLENBQUM2YSxHQUFELENBQU4sSUFBZSxFQUE3QjtBQUNBN2EsVUFBTSxDQUFDNmEsR0FBRCxDQUFOLENBQVkxYyxJQUFaLENBQWlCa0QsSUFBakI7QUFDQSxXQUFPckIsTUFBUDtBQUNELEdBTEMsRUFLQyxFQUxELENBUEo7QUFhRCxDQWREOztBQWdCQTZLLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixVQUFTZ1EsQ0FBVCxFQUFZO0FBQzFCLFNBQU9BLENBQUMsQ0FBQzFYLE9BQUYsQ0FBVSx1QkFBVixFQUFtQyxNQUFuQyxDQUFQO0FBQ0QsQ0FGRCxDIiwiZmlsZSI6Im1ha2VNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sb3JTY2FsZShjb3VudCwgaW5kZXgpIHtcbiAgdmFyIHNjYWxlT25lID0gY2hyb21hXG4gICAgLmN1YmVoZWxpeCgpXG4gICAgLmh1ZSgwLjUpXG4gICAgLmxpZ2h0bmVzcyhbMC40LCAwLjZdKVxuICAgIC5zY2FsZSgpXG4gICAgLmNvbG9ycyhjb3VudCAqIDIpXG4gIHZhciBzY2FsZVR3byA9IGNocm9tYVxuICAgIC5jdWJlaGVsaXgoKVxuICAgIC5odWUoMSlcbiAgICAuZ2FtbWEoMC41KVxuICAgIC5zY2FsZSgpXG4gICAgLmNvbG9ycyhjb3VudCAqIDIpXG4gICAgLnJldmVyc2UoKVxuICB2YXIgc2NhbGUgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIHZhciBjb2xvciA9IGkgJSAyID09PSAwID8gc2NhbGVPbmVbaSAqIDJdIDogc2NhbGVUd29baSAqIDJdXG4gICAgY29sb3IgPSBjaHJvbWEoY29sb3IpXG4gICAgICAuc2F0dXJhdGUoKVxuICAgICAgLmhleCgpXG4gICAgc2NhbGUucHVzaChjb2xvcilcbiAgfVxuXG4gIHJldHVybiBzY2FsZVxufVxuXG5leHBvcnQgdmFyIGxpbmVXZWlnaHRzID0gW1szLCAzXSwgWzUsIDJdLCBbNCwgMy41XSwgWzcsIDNdLCBbNCwgNF1dXG5leHBvcnQgdmFyIGxpbmVEYXNoQXJyYXlzID0gW1xuICBbbnVsbCwgJzYsOSddLFxuICBbbnVsbCwgbnVsbF0sXG4gIFtudWxsLCAnNiwxMiddLFxuICBbbnVsbCwgbnVsbF0sXG4gIFsnMTgsMjQnLCAnMTgsMjQnXVxuXVxuZXhwb3J0IHZhciBleHRlcm5hbExpbmsgPVxuICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAxNSAxNVwiPjxwYXRoIGQ9XCJNNy40OSwwVjEuNjdIMS42OFYxMy4zMkgxMy4zMlY3LjUySDE1djUuNzJhMS43NiwxLjc2LDAsMCwxLS40MiwxLjE5LDEuNjQsMS42NCwwLDAsMS0xLjEzLjU2SDEuNzRhMS42NywxLjY3LDAsMCwxLTEuMTYtLjQxQTEuNjEsMS42MSwwLDAsMSwwLDEzLjQ4di0uMjdDMCw5LjQsMCw1LjYsMCwxLjhBMS44MywxLjgzLDAsMCwxLC41OC40YTEuNTMsMS41MywwLDAsMSwxLS4zOWg2WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCIvPjxwYXRoIGQ9XCJNOS4xNywxLjY3VjBIMTVWNS44NEgxMy4zNHYtM2gwYy0uMDUuMDUtLjExLjEtLjE2LjE2bC0uNDUuNDYtMS4zLDEuMjktLjg0Ljg0LS44OS45LS44OC44Ny0uODkuOWMtLjI4LjI5LS41Ny41Ny0uODYuODZMNi4xNiwxMGwtLjg4Ljg3YTEuODMsMS44MywwLDAsMS0uMTMuMTZMNCw5Ljg2bDAsMEw1LjM2LDguNDdsLjk1LTEsLjc1LS43NSwxLTFMOC44Nyw1bDEtLjk0Ljg1LS44Ni45Mi0uOTEuNTYtLjU4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCIvPjwvc3ZnPidcbmV4cG9ydCB2YXIgcmVtb3ZlID1cbiAgJzxzdmcgdmlld0JveD1cIjAgMCAyMSAyMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTIuNTkyLjA0NGwxOC4zNjQgMTguMzY0LTIuNTQ4IDIuNTQ4TC4wNDQgMi41OTJ6XCIvPjxwYXRoIGQ9XCJNMCAxOC4zNjRMMTguMzY0IDBsMi41NDggMi41NDhMMi41NDggMjAuOTEyelwiLz48L2c+PC9zdmc+J1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFR5cGUodmFsdWUpIHtcbiAgdmFyIHYgPSBOdW1iZXIodmFsdWUpXG4gIHJldHVybiAhaXNOYU4odilcbiAgICA/IHZcbiAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnbnVsbCdcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKHVybCwgZWxlbWVudCkge1xuICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgcmVxLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpXG4gIHJlcS5zZW5kKG51bGwpXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVxLnJlc3BvbnNlVGV4dFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURyb3Bkb3duT3B0aW9ucyhvcHRpb25zLCB4KSB7XG4gIHZhciBncm91cHMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdncm91cCcpXG4gIHZhciBjaG9pY2VzID0gT2JqZWN0LmtleXMoZ3JvdXBzKS5tYXAoZnVuY3Rpb24oZywgeikge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogeixcbiAgICAgIGxhYmVsOiBnLnRyaW0oKSAmJiBwYXJzZUludChnLCAxMCkgPT09IE5hTiA/IGcgOiAnJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIGNob2ljZXM6IGdyb3Vwc1tnXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHtcbiAgICBjaG9pY2VzOiBjaG9pY2VzLFxuICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWUsXG4gICAgbWF4SXRlbUNvdW50OiBvcHRpb25zLndpZGdldHNbeF0ubWF4aW11bSxcbiAgICBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzOiBmdW5jdGlvbiBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzKHRlbXBsYXRlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW06IGZ1bmN0aW9uIGl0ZW0oY2xhc3NOYW1lcywgZGF0YSkge1xuICAgICAgICAgIHZhciBrZXkgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5maW5kKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB2LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGRhdGEudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdmFyIGtleVN0eWxlXG5cbiAgICAgICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgICByZXR1cm4gay52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB2YXIgaSA9IGZvcm1zLmluZGV4T2Yoa2V5LnZhbHVlLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbWFya3VwID1cbiAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwiYm9yZGVyLWNvbG9yOicgK1xuICAgICAgICAgICAga2V5LmNvbG9yICtcbiAgICAgICAgICAgICdcIiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5pdGVtICtcbiAgICAgICAgICAgICdcIiBkYXRhLWl0ZW0gZGF0YS1pZD1cIicgK1xuICAgICAgICAgICAgZGF0YS5pZCArXG4gICAgICAgICAgICAnXCIgZGF0YS12YWx1ZT1cIicgK1xuICAgICAgICAgICAgZGF0YS52YWx1ZSArXG4gICAgICAgICAgICAnXCIgJyArXG4gICAgICAgICAgICAoZGF0YS5hY3RpdmUgPyAnYXJpYS1zZWxlY3RlZD1cInRydWVcIicgOiAnJykgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIChkYXRhLmRpc2FibGVkID8gJ2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCInIDogJycpICtcbiAgICAgICAgICAgICc+PHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgICAgIGtleVN0eWxlLmNsYXNzICtcbiAgICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAgICdzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICtcbiAgICAgICAgICAgIGtleVN0eWxlLnN2ZyArXG4gICAgICAgICAgICAnXCIpPjwvc3Bhbj4gJyArXG4gICAgICAgICAgICBjYXBpdGFsaXplKGRhdGEubGFiZWwpICtcbiAgICAgICAgICAgICc8YnV0dG9uIHN0eWxlPVwiYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAnICtcbiAgICAgICAgICAgIGtleS5jb2xvciArXG4gICAgICAgICAgICAnOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgIHdpbmRvdy5idG9hKHJlbW92ZSkgK1xuICAgICAgICAgICAgJ1xcJylcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjaG9pY2VzX19idXR0b25cIiBkYXRhLWJ1dHRvbj1cIlwiIGFyaWEtbGFiZWw9XCJSZW1vdmUgaXRlbVwiPlJlbW92ZSBpdGVtPC9idXR0b24+PC9kaXY+J1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZShtYXJrdXApXG4gICAgICAgIH0sXG4gICAgICAgIGNob2ljZTogZnVuY3Rpb24gY2hvaWNlKGNsYXNzTmFtZXMsIGRhdGEpIHtcbiAgICAgICAgICB2YXIga2V5ID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZmluZChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gdi52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBkYXRhLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHZhciBrZXlTdHlsZVxuXG4gICAgICAgICAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGsudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbWFya3VwID1cbiAgICAgICAgICAgICcgPGRpdiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5pdGVtICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBjbGFzc05hbWVzLml0ZW1DaG9pY2UgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIChkYXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgID8gY2xhc3NOYW1lcy5pdGVtRGlzYWJsZWRcbiAgICAgICAgICAgICAgOiBjbGFzc05hbWVzLml0ZW1TZWxlY3RhYmxlKSArXG4gICAgICAgICAgICAnXCIgZGF0YS1zZWxlY3QtdGV4dD1cIicgK1xuICAgICAgICAgICAgX3RoaXMuY29uZmlnLml0ZW1TZWxlY3RUZXh0ICtcbiAgICAgICAgICAgICdcIiBkYXRhLWNob2ljZSAnICtcbiAgICAgICAgICAgIChkYXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgID8gJ2RhdGEtY2hvaWNlLWRpc2FibGVkIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCInXG4gICAgICAgICAgICAgIDogJ2RhdGEtY2hvaWNlLXNlbGVjdGFibGUnKSArXG4gICAgICAgICAgICAnIGRhdGEtaWQ9XCInICtcbiAgICAgICAgICAgIGRhdGEuaWQgK1xuICAgICAgICAgICAgJ1wiIGRhdGEtdmFsdWU9XCInICtcbiAgICAgICAgICAgIGRhdGEudmFsdWUgK1xuICAgICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgICAgKGRhdGEuZ3JvdXBJZCA+IDAgPyAncm9sZT1cInRyZWVpdGVtXCInIDogJ3JvbGU9XCJvcHRpb25cIicpICtcbiAgICAgICAgICAgICc+IDxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5jbGFzcyArXG4gICAgICAgICAgICAnS2V5XCIgJyArXG4gICAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5zdmcgK1xuICAgICAgICAgICAgJ1wiKT48L3NwYW4+ICcgK1xuICAgICAgICAgICAgY2FwaXRhbGl6ZShkYXRhLmxhYmVsKSArXG4gICAgICAgICAgICAnIDwvZGl2PiAnXG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKG1hcmt1cClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udmVydFR5cGUsIGNyZWF0ZUNvbG9yU2NhbGUgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbmd1YWdlRGF0YShkYXRhKSB7XG4gIHZhciBsYW5ndWFnZURhdGEgPSB7fVxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgdmFyIGtleVxuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2x1bW4sIGkpIHtcbiAgICAgIGlmIChjb2x1bW4uaW5kZXhPZignZ3N4JCcpID4gLTEpIHtcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4ucmVwbGFjZSgnZ3N4JCcsICcnKVxuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSAnZW4nKSB7XG4gICAgICAgICAga2V5ID0gcm93W2NvbHVtbl1bJyR0J11cbiAgICAgICAgICBsYW5ndWFnZURhdGFba2V5XSA9IHt9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gbGFuZykge1xuICAgICAgICAgIGxhbmd1YWdlRGF0YVtrZXldID0gcm93W2NvbHVtbl1bJyR0J11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIHJldHVybiBsYW5ndWFnZURhdGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGVnZW5kRGF0YShvcHRpb25zLCBqc29uLCBzdHlsZSkge1xuICB2YXIgY29sb3JTY2FsZSA9IGNyZWF0ZUNvbG9yU2NhbGUoanNvbi5sZW5ndGgpXG4gIHZhciBsZWdlbmRJdGVtcyA9IFtdXG4gIGpzb24uZm9yRWFjaChmdW5jdGlvbihyb3csIHgpIHtcbiAgICB2YXIgZGF0YSA9IHt9XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgeSkge1xuICAgICAgaWYgKGNvbHVtbi5pbmRleE9mKCdnc3gkJykgPiAtMSkge1xuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5yZXBsYWNlKCdnc3gkJywgJycpXG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09ICdsYWJlbCcpIHtcbiAgICAgICAgICB2YXIga2V5ID0gcm93W2NvbHVtbl1bJyR0J10udG9Mb3dlckNhc2UoKVxuICAgICAgICAgIGRhdGEua2V5ID0ga2V5XG4gICAgICAgICAgZGF0YS5sYWJlbCA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAwXV1bJyR0J11cbiAgICAgICAgICBkYXRhLnZhbHVlID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDFdXVsnJHQnXVxuICAgICAgICAgIGRhdGEuZ3JvdXAgPSBjb252ZXJ0VHlwZShyb3dbT2JqZWN0LmtleXMocm93KVt5ICsgMl1dWyckdCddKVxuICAgICAgICAgIGRhdGEuc2VsZWN0ZWQgPSBjb252ZXJ0VHlwZShyb3dbT2JqZWN0LmtleXMocm93KVt5ICsgM11dWyckdCddKVxuICAgICAgICAgIHZhciBjb2xvclZhbCA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyA0XV1bJyR0J11cbiAgICAgICAgICBkYXRhLmZvcm0gPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNV1dWyckdCddXG4gICAgICAgICAgZGF0YS5jb2xvciA9IGNvbG9yVmFsXG4gICAgICAgICAgICA/IGNvbG9yVmFsXG4gICAgICAgICAgICA6IGRhdGEuZm9ybSA9PT0gJ2xpbmUnXG4gICAgICAgICAgICAgID8gZGVmYXVsdENvbG9yXG4gICAgICAgICAgICAgIDogY29sb3JTY2FsZVt4XVxuICAgICAgICAgIGRhdGEuaWNvbiA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyA2XV1bJyR0J11cbiAgICAgICAgICBkYXRhLnBhdHRlcm4gPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgN11dWyckdCddLnNwbGl0KCcsJylcblxuICAgICAgICAgIGlmIChvcHRpb25zLnRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgZGF0YS5sYWJlbCA9IG9wdGlvbnMudHJhbnNsYXRpb25zW2RhdGEubGFiZWxdXG4gICAgICAgICAgICBkYXRhLmdyb3VwID0gb3B0aW9ucy50cmFuc2xhdGlvbnNbZGF0YS5ncm91cF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZWdlbmRJdGVtcy5wdXNoKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICByZXR1cm4gbGVnZW5kSXRlbXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWV0YURhdGEoanNvbikge1xuICB2YXIgZGF0YSA9IHt9XG4gIGpzb24uZm9yRWFjaChmdW5jdGlvbihyb3csIHgpIHtcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCB5KSB7XG4gICAgICBpZiAoY29sdW1uLmluZGV4T2YoJ2dzeCQnKSA+IC0xKSB7XG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnJlcGxhY2UoJ2dzeCQnLCAnJylcblxuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gJ3Byb3BlcnR5Jykge1xuICAgICAgICAgIHZhciBrZXkgPSByb3dbY29sdW1uXVsnJHQnXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJycpXG4gICAgICAgICAgZGF0YVtrZXldID0gZGF0YVtrZXldIHx8IHt9XG4gICAgICAgICAgZGF0YVtrZXldID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDFdXVsnJHQnXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVdpZGdldERhdGEobWV0YURhdGEpIHtcbiAgdmFyIHdpZGdldHMgPSBbXVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoaywgaW5kZXgsIHByb3BlcnR5KSB7XG4gICAgaWYgKGsudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByb3BlcnR5KSA+IC0xKVxuICAgICAgd2lkZ2V0c1tpbmRleCAtIDFdW3Byb3BlcnR5XSA9IGNvbnZlcnRUeXBlKG1ldGFEYXRhW2tdKVxuICB9XG5cbiAgdmFyIHByb3BlcnRpZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnZmllbGQnLFxuICAgICdncm91cGluZycsXG4gICAgJ2luc3RydWN0aW9ucycsXG4gICAgJ21heGltdW0nLFxuICAgICd0eXBlJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAnc3R5bGUnXG4gIF1cbiAgT2JqZWN0LmtleXMobWV0YURhdGEpXG4gICAgLmZpbHRlcihmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gay50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpZGdldCcpID4gLTFcbiAgICB9KVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBpbmRleCA9IGsubWF0Y2goL1xcZCsvKVswXVxuICAgICAgd2lkZ2V0c1tpbmRleCAtIDFdID0gd2lkZ2V0c1tpbmRleCAtIDFdIHx8IHt9XG4gICAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgICAgcHJvY2VzcyhrLCBpbmRleCwgcHJvcGVydHkpXG4gICAgICB9KVxuICAgIH0pXG4gIHdpZGdldHMuZm9yRWFjaChmdW5jdGlvbih3LCBpKSB7XG4gICAgdy5maWVsZCA9IHcuZmllbGQucmVwbGFjZSgvIC9nLCAnXycpXG4gICAgdy5pZCA9IGlcbiAgfSlcbiAgcmV0dXJuIHdpZGdldHNcbn1cbiIsImltcG9ydCB7IGNhcGl0YWxpemUsIGxvYWQsIGxpbmVXZWlnaHRzLCBsaW5lRGFzaEFycmF5cyB9IGZyb20gJy4vaGVscGVycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVLZXkob3B0aW9ucykge1xuICB2YXIgbWFwID0gb3B0aW9ucy5tYXAsXG4gICAgZmVhdHVyZSA9IG9wdGlvbnMuZmVhdHVyZSxcbiAgICBncm91cCA9IG9wdGlvbnMuZ3JvdXAsXG4gICAga2V5ID0gb3B0aW9ucy5rZXksXG4gICAgaW5kZXggPSBvcHRpb25zLmluZGV4LFxuICAgIGZvcm1zID0gb3B0aW9ucy5mb3JtcyxcbiAgICBpY29uU2l6ZSA9IG1hcC5pY29uc2l6ZSxcbiAgICBkaXZpZGVycyA9IGljb25TaXplLm1hcChzaXplID0+IHNpemUgLyAxMilcblxuICB2YXIgY29sb3JzLCBrZXlDb2xvclxuICB2YXIga2V5ID0gZ3JvdXAgPyBncm91cFswXSA6IGtleVxuXG4gIGZvciAobGV0IHcgb2YgbWFwLndpZGdldHMpIHtcbiAgICB2YXIgZm9ybUtleVdpZGdldCA9IHcudHlwZSA9PT0gJ2Zvcm0nID8gdyA6IG51bGxcbiAgICB2YXIgY29sb3JLZXlXaWRnZXQgPSB3LnR5cGUgPT09ICdjb2xvcicgPyB3IDogbnVsbFxuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIHZhciBjb2xvcktleSA9IGNvbG9yS2V5V2lkZ2V0XG4gICAgICAgID8gY29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSlcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIHZhciBmb3JtS2V5ID0gZm9ybUtleVdpZGdldFxuICAgICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgICB9KVxuICAgICAgICA6IG51bGxcblxuICAgICAga2V5Q29sb3IgPSBjb2xvcktleSA/IGNvbG9yS2V5LmNvbG9yIDogZm9ybUtleSA/IGZvcm1LZXkuY29sb3IgOiBudWxsXG5cbiAgICAgIGljb25TaXplID0gaWNvblNpemUubWFwKHNpemUgPT4gc2l6ZSAvIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGljb25TaXplID0gaWNvblNpemUubWFwKChzaXplLCBpKSA9PiBzaXplIC8gZGl2aWRlcnNbaV0pXG4gICAgfVxuXG4gICAga2V5LmNvbG9yID1cbiAgICAgIGdyb3VwICYmXG4gICAgICBncm91cC5ldmVyeShmdW5jdGlvbihnKSB7XG4gICAgICAgIHJldHVybiBnLmNvbG9yXG4gICAgICB9KVxuICAgICAgICA/IGNocm9tYS5hdmVyYWdlKFxuICAgICAgICAgIGdyb3VwLm1hcChmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICByZXR1cm4gZy5jb2xvclxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgOiBrZXkuY29sb3JcblxuICAgIHN3aXRjaCAoa2V5LmZvcm0pIHtcbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIGtleUNvbG9yID0ga2V5LmNvbG9yXG4gICAgICAgID8ga2V5LmNvbG9yXG4gICAgICAgIDogb3B0aW9ucy5tYXAub2NlYW5jb2xvclxuICAgICAgICAgID8gb3B0aW9ucy5tYXAub2NlYW5jb2xvclxuICAgICAgICAgIDogbnVsbFxuXG4gICAgICBpZiAoZm9ybXMpIHtcbiAgICAgICAgdmFyIHN2Z1xuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKCksXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKClcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29sb3JzID0gW1xuICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpLFxuICAgICAgICAgICAgJyNmZmZmZmYnXG4gICAgICAgICAgXVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbG9ycyA9IFsnIzAwMDAwMCcsIGtleUNvbG9yID8ga2V5Q29sb3IgOiBkZWZhdWx0Q29sb3JdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29sb3JzID0gW1xuICAgICAgICAgICAgJyNmZmZmZmYnLFxuICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpXG4gICAgICAgICAgXVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKCksXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKClcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAnPHN2ZyB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJyB2aWV3Qm94PVxcJzAgMCA0OCAxMlxcJz48bGluZSB4MT1cXCcwXFwnIHgyPVxcJzQ4XFwnIHkxPVxcJzUwJVxcJyB5Mj1cXCc1MCVcXCcgc3Ryb2tlPVxcJycgK1xuICAgICAgICAgICAgY29sb3JzWzBdICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLXdpZHRoPVxcJycgK1xuICAgICAgICAgICAgbGluZVdlaWdodHNbaW5kZXhdWzBdICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLWxpbmVjYXA9XFwnc3F1YXJlXFwnIHN0cm9rZS1kYXNoYXJyYXk9XFwnJyArXG4gICAgICAgICAgICAoaW5kZXggPT09IDQgPyAnMTgsMTInIDogbGluZURhc2hBcnJheXNbaW5kZXhdWzBdKSArXG4gICAgICAgICAgICAnXFwnLz48bGluZSB4MT1cXCcwXFwnIHgyPVxcJzQ4XFwnIHkxPVxcJzUwJVxcJyB5Mj1cXCc1MCVcXCcgc3Ryb2tlPVxcJycgK1xuICAgICAgICAgICAgY29sb3JzWzFdICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLXdpZHRoPVxcJycgK1xuICAgICAgICAgICAgbGluZVdlaWdodHNbaW5kZXhdWzFdICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLWxpbmVjYXA9XFwnc3F1YXJlXFwnIHN0cm9rZS1kYXNoYXJyYXk9XFwnJyArXG4gICAgICAgICAgICAoaW5kZXggPT09IDQgPyAnMTgsMTInIDogbGluZURhc2hBcnJheXNbaW5kZXhdWzFdKSArXG4gICAgICAgICAgICAnXFwnLz48L3N2Zz4nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgJzxzdmcgeG1sbnM9XFwnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXCcgdmlld0JveD1cXCcwIDAgNDggMTJcXCc+PGxpbmUgeDE9XFwnMFxcJyB4Mj1cXCc0OFxcJyB5MT1cXCc1MCVcXCcgeTI9XFwnNTAlXFwnIHN0cm9rZT1cXCcnICtcbiAgICAgICAgICAgIGtleUNvbG9yICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLXdpZHRoPVxcJycgK1xuICAgICAgICAgICAgMyArXG4gICAgICAgICAgICAnXFwnIHN0cm9rZS1saW5lY2FwPVxcJ3NxdWFyZVxcJyBzdHJva2UtZGFzaGFycmF5PVxcJycgK1xuICAgICAgICAgICAgJzMsNycgK1xuICAgICAgICAgICAgJ1xcJy8+PC9zdmc+J1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmcpLFxuICAgICAgICBjbGFzczogJ2xpbmUnXG4gICAgICB9XG5cbiAgICBjYXNlICdpY29uJzpcbiAgICAgIGlmIChrZXkuaWNvbikge1xuICAgICAgICB2YXIgc2x1ZyA9IGtleS52YWx1ZS5yZXBsYWNlKC8gL2csICctJylcbiAgICAgICAgbG9hZChrZXkuaWNvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGRlbicpKVxuICAgICAgICB2YXIgc3ZnQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4nKS5pbm5lckhUTUxcblxuICAgICAgICBpZiAoY29sb3JLZXlXaWRnZXQgJiYga2V5Q29sb3IpIHtcbiAgICAgICAgICBzdmdDb250ZW50ID0gc3ZnQ29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgLygoXFxiZmlsbD1cIiMpKChbMC1hLWZBLUZdezJ9KXszfXwoWzAtOWEtZkEtRl0pezN9KVwiKS9naSxcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKVxuICAgICAgICAgIHN2Z0NvbnRlbnQgPSBzdmdDb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAvKDxjaXJjbGUgfDxyZWN0YW5nbGUgfDxlbGxpcHNlIHw8cG9seWdvbiB8PHBhdGggKS9nLFxuICAgICAgICAgICAgZnVuY3Rpb24obWF0Y2gsIHAxLCBwMiwgcDMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UobWF0Y2gsIG1hdGNoICsgJ2ZpbGw9XCInICsga2V5Q29sb3IgKyAnXCIgJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBzdmcgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2Eoc3ZnQ29udGVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgIHdpbmRvdy5idG9hKFxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIicgK1xuICAgICAgICAgICAgICAgIGljb25TaXplWzBdIC8gMiArXG4gICAgICAgICAgICAgICAgJ1wiIGN5PVwiJyArXG4gICAgICAgICAgICAgICAgaWNvblNpemVbMV0gLyAyICtcbiAgICAgICAgICAgICAgICAnXCIgcj1cIicgK1xuICAgICAgICAgICAgICAgIChpY29uU2l6ZVswXSArIGljb25TaXplWzFdKSAvIDQgK1xuICAgICAgICAgICAgICAgICdcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgKGtleUNvbG9yIHx8IGtleS5jb2xvcikgK1xuICAgICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgY2xhc3M6IGtleS5pY29uID8gJ2ljb24nIDogJ2NvbG9yJ1xuICAgICAgfVxuXG4gICAgY2FzZSAncGF0dGVybic6XG4gICAgICBrZXlDb2xvciA9IGtleS5jb2xvclxuICAgICAgdmFyIHN2Z1xuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2Uga2V5LnBhdHRlcm5bMF0uaW5kZXhPZignc3RyaXBlJykgPiAtMTpcbiAgICAgICAgdmFyIGNvbG9yVHdvID0ga2V5LnBhdHRlcm5bMV1cbiAgICAgICAgdmFyIGNvbG9yT25lID0ga2V5LnBhdHRlcm5ba2V5LnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgICAgIHdpbmRvdy5idG9hKFxuICAgICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCI+PHBvbHlnb24gcG9pbnRzPVwiNS43MyAwIDQuNjcgMCAwIDQuNjYgMCA1LjcxIDUuNzMgMFwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yT25lICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMi4yOCAwIDEuMjIgMCAwIDEuMjIgMCAyLjI3IDIuMjggMFwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yVHdvICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiOC44NSAwIDcuNzkgMCAwIDcuNzcgMCA4LjgyIDguODUgMFwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yVHdvICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTIgMCAxMS4yNCAwIDAgMTEuMiAwIDEyIDAuMjYgMTIgMTIgMC4zIDEyIDBcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvck9uZSArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEyIDEwLjEyIDEyIDkuMDYgOS4wNSAxMiAxMC4xMSAxMiAxMiAxMC4xMlwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yVHdvICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTIgMy41MiAxMiAyLjQ2IDIuNDMgMTIgMy40OSAxMiAxMiAzLjUyXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiA2Ljk2IDEyIDUuOSA1Ljg4IDEyIDYuOTQgMTIgMTIgNi45NlwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yT25lICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICAgICAgICApXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2Uga2V5LnBhdHRlcm5bMF0uaW5kZXhPZignZG90JykgPiAtMTpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgICAgIHdpbmRvdy5idG9hKFxuICAgICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEzLjA2XCIgaGVpZ2h0PVwiMTUuMVwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIj48dGl0bGU+c3RyaXBlczwvdGl0bGU+PHBhdGggZD1cIk01LjQ5LDFBMS4xNiwxLjE2LDAsMSwxLDQuMzMtLjE2LDEuMTYsMS4xNiwwLDAsMSw1LjQ5LDFaTTQuMzMsMy43N0ExLjE2LDEuMTYsMCwxLDAsNS40OSw0LjkzLDEuMTUsMS4xNSwwLDAsMCw0LjMzLDMuNzdabTAsMy45M0ExLjE2LDEuMTYsMCwxLDAsNS40OSw4Ljg2LDEuMTUsMS4xNSwwLDAsMCw0LjMzLDcuN1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNSwxLjE1LDAsMCwwLDQuMzMsMTEuNjNaTTExLjUtLjE2QTEuMTYsMS4xNiwwLDEsMCwxMi42NiwxLDEuMTYsMS4xNiwwLDAsMCwxMS41LS4xNlptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNiwxLjE2LDAsMCwwLDExLjUsMy43N1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNiwxLjE2LDAsMCwwLDExLjUsNy43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsMTEuNSwxMS42M1pNNy45Mi0xLjE2QTEuMTYsMS4xNiwwLDAsMCw2Ljc2LDAsMS4xNiwxLjE2LDAsMCwwLDcuOTIsMS4xNiwxLjE2LDEuMTYsMCwwLDAsOS4wNywwLDEuMTYsMS4xNiwwLDAsMCw3LjkyLTEuMTZabTAsMy45M0ExLjE2LDEuMTYsMCwxLDAsOS4wNywzLjkzLDEuMTYsMS4xNiwwLDAsMCw3LjkyLDIuNzdabTAsMy45M0ExLjE2LDEuMTYsMCwxLDAsOS4wNyw3Ljg2LDEuMTYsMS4xNiwwLDAsMCw3LjkyLDYuN1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE1LDEuMTZBMS4xNiwxLjE2LDAsMCwwLDcuOTIsMTAuNjNaTS43NS0xLjE2QTEuMTYsMS4xNiwwLDAsMC0uNDEsMCwxLjE2LDEuMTYsMCwwLDAsLjc1LDEuMTYsMS4xNiwxLjE2LDAsMCwwLDEuOTEsMCwxLjE2LDEuMTYsMCwwLDAsLjc1LTEuMTZabTAsMy45M0ExLjE2LDEuMTYsMCwxLDAsMS45MSwzLjkzLDEuMTYsMS4xNiwwLDAsMCwuNzUsMi43N1ptMCwzLjkzQTEuMTYsMS4xNiwwLDAsMC0uNDEsNy44NiwxLjE1LDEuMTUsMCwwLDAsLjc1LDksMS4xNSwxLjE1LDAsMCwwLDEuOTEsNy44NiwxLjE2LDEuMTYsMCwwLDAsLjc1LDYuN1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNiwxLjE2LDAsMCwwLC43NSwxMC42M1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC43IDIpXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgICAgIHdpbmRvdy5idG9hKFxuICAgICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNlwiIGN5PVwiNlwiIHI9XCI1XCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAga2V5Q29sb3IgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgIGNsYXNzOiBrZXkucGF0dGVybiA/ICdwYXR0ZXJuJyA6ICdjb2xvcidcbiAgICAgIH1cblxuICAgIGNhc2UgJ3NoYXBlJzpcbiAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBjb2xvcktleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgICAgICAgIHJldHVybiB3LnR5cGUgPT09ICdjb2xvcidcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIGNvbG9yS2V5ID0gY29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIGtleUNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGtleUNvbG9yID8ga2V5Q29sb3IgOiBudWxsXG4gICAgICB9XG5cbiAgICAgIHZhciBzdmdcblxuICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwicmFpbmJvd1wiICB5MT1cIjQuNVwiIHgyPVwiOVwiIHkyPVwiNC41XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoNC41IC00LjUpIHJvdGF0ZSgxMzUpXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjxzdG9wIG9mZnNldD1cIjAuMzI1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMC41XCIgc3RvcC1jb2xvcj1cIiNmMmI3MDFcIi8+PHN0b3Agb2Zmc2V0PVwiMC42NzVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiMzOTY5YWNcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD1cIjMuMjVcIiB5PVwiMS43NVwiIHdpZHRoPVwiOVwiIGhlaWdodD1cIjlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNC41IC00LjUpIHJvdGF0ZSg0NSlcIiAnICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8gJ3BhaW50LW9yZGVyPVwic3Ryb2tlXCIgc3Ryb2tlPVwiI2ZmZmZmZlwiJyA6ICcnKSArXG4gICAgICAgICAgICAgICcgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyBrZXlDb2xvciA6ICd1cmwoI3JhaW5ib3cpJykgK1xuICAgICAgICAgICAgICAnXCIgLz48L3N2Zz4nXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cInJhaW5ib3dcIiB5MT1cIjVcIiB4Mj1cIjEwXCIgeTI9XCI1XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjMzk2OWFjXCIvPjxzdG9wIG9mZnNldD1cIjAuMjVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAnc3Ryb2tlPVwiI2ZmZmZmZlwiJyA6ICcnKSArXG4gICAgICAgICAgICAgICcgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyBrZXlDb2xvciA6ICd1cmwoI3JhaW5ib3cpJykgK1xuICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwicmFpbmJvd1wiIHkxPVwiNVwiIHgyPVwiMTBcIiB5Mj1cIjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMzOTY5YWNcIi8+PHN0b3Agb2Zmc2V0PVwiMC4zMjVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjY3NVwiIHN0b3AtY29sb3I9XCIjZTczZjc0XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzdmM2M4ZFwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cG9seWdvbiBwb2ludHM9XCI2IDEwLjM5IDAgMTAuMzkgMyA1LjIgNiAwIDkgNS4yIDEyIDEwLjM5IDYgMTAuMzlcIiAnICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8gJ3BhaW50LW9yZGVyPVwic3Ryb2tlXCIgc3Ryb2tlPVwiI2ZmZmZmZlwiJyA6ICcnKSArXG4gICAgICAgICAgICAgICcgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyBrZXlDb2xvciA6ICd1cmwoI3JhaW5ib3cpJykgK1xuICAgICAgICAgICAgICAnXCIgLz48L3N2Zz4nXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgeTE9XCI1XCIgeDI9XCIxMFwiIHkyPVwiNVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48c3RvcCBvZmZzZXQ9XCIwLjI1XCIgc3RvcC1jb2xvcj1cIiMxMWE1NzlcIi8+PHN0b3Agb2Zmc2V0PVwiMC41XCIgc3RvcC1jb2xvcj1cIiNmMmI3MDFcIi8+PHN0b3Agb2Zmc2V0PVwiMC43NVwiIHN0b3AtY29sb3I9XCIjZTczZjc0XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzdmM2M4ZFwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PVwiNlwiIGN5PVwiNlwiIHI9XCI1XCIgJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/ICdzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmcpLFxuICAgICAgICBjbGFzczogJ3NoYXBlJ1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIGtleUNvbG9yID0ga2V5LmNvbG9yXG5cbiAgICAgIHN2ZyA9XG4gICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIicgK1xuICAgICAgICAgICAgICBpY29uU2l6ZVswXSAvIDIgK1xuICAgICAgICAgICAgICAnXCIgY3k9XCInICtcbiAgICAgICAgICAgICAgaWNvblNpemVbMV0gLyAyICtcbiAgICAgICAgICAgICAgJ1wiIHI9XCInICtcbiAgICAgICAgICAgICAgKGljb25TaXplWzBdICsgaWNvblNpemVbMV0pIC8gNCArXG4gICAgICAgICAgICAgICdcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciB8fCBrZXkuY29sb3IpICtcbiAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgIGNsYXNzOiAnY29sb3InXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJ2YXIgbWFwSWQgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbU1hcChjb250YWluZXIsIHByb3BlcnRpZXMpIHtcbiAgdGhpcy5pZCA9IG1hcElkKytcbiAgdGhpcy5maWx0ZXJzID0gW11cbiAgdGhpcy5ncm91cHMgPSBbXVxuICB0aGlzLmpzb24gPSBbXVxuICB0aGlzLmxlYWZsZXRcblxuICB2YXIgX3RoaXMgPSB0aGlzXG5cbiAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIF90aGlzW3Byb3BlcnR5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnJyldID0gcHJvcGVydGllc1twcm9wZXJ0eV1cbiAgfSlcbiAgX3RoaXMucG9wdXBjb250ZW50ID1cbiAgICBfdGhpcy5wb3B1cGNvbnRlbnQgJiYgdHlwZW9mIF90aGlzLnBvcHVwY29udGVudCA9PT0gJ3N0cmluZydcbiAgICAgID8gX3RoaXMucG9wdXBjb250ZW50LnNwbGl0KCcsJylcbiAgICAgIDogX3RoaXMucG9wdXBjb250ZW50ICYmIHRoaXMucG9wdXBjb250ZW50ID09PSAnb2JqZWN0J1xuICAgICAgICA/IF90aGlzLnBvcHVwY29udGVudFxuICAgICAgICA6IFtdXG4gIF90aGlzLnBvcHVwaGVhZGVycyA9XG4gICAgX3RoaXMucG9wdXBoZWFkZXJzICYmIHR5cGVvZiBfdGhpcy5wb3B1cGhlYWRlcnMgPT09ICdzdHJpbmcnXG4gICAgICA/IF90aGlzLnBvcHVwaGVhZGVycy5zcGxpdCgnLCcpXG4gICAgICA6IF90aGlzLnBvcHVwaGVhZGVycyAmJiBfdGhpcy5wb3B1cGhlYWRlcnMgPT09ICdvYmplY3QnXG4gICAgICAgID8gX3RoaXMucG9wdXBoZWFkZXJzXG4gICAgICAgIDogW11cbiAgQ3VzdG9tTWFwLmFsbCA9IEN1c3RvbU1hcC5hbGwgfHwgW11cbiAgQ3VzdG9tTWFwLmFsbC5wdXNoKHRoaXMpXG5cbiAgX3RoaXMucmVzZXRGaWx0ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMuZmlsdGVycyA9IFtdXG4gIH1cblxuICBfdGhpcy5yZW1vdmVHcm91cHMgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcy5ncm91cHMuZm9yRWFjaChmdW5jdGlvbihncm91cCkge1xuICAgICAgX3RoaXMubGVhZmxldC5yZW1vdmVMYXllcihncm91cClcbiAgICB9KVxuXG4gICAgX3RoaXMuZ3JvdXBzID0gW11cbiAgfVxuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMubGVhZmxldCA9IEwubWFwKGNvbnRhaW5lciwge1xuICAgICAgbWluWm9vbTogX3RoaXMubWluem9vbSB8fCBudWxsLFxuICAgICAgbWF4Wm9vbTogX3RoaXMubWF4em9vbSB8fCAyMCxcbiAgICAgIG1heEJvdW5kczogX3RoaXMubWF4Ym91bmRzIHx8IFtfdGhpcy5zd2JvdW5kcywgX3RoaXMubmVib3VuZHNdLFxuICAgICAgc2Nyb2xsV2hlZWxab29tOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgIHpvb21Db250cm9sOlxuICAgICAgICAhX3RoaXMuaGFzT3duUHJvcGVydHkoJ3pvb21zbGlkZXInKSB8fCBfdGhpcy56b29tc2xpZGVyID8gZmFsc2UgOiB0cnVlLFxuICAgICAgYXR0cmlidXRpb25Db250cm9sOiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAoX3RoaXMubG9hZEV2ZW50KSBfdGhpcy5sZWFmbGV0Lm9uKCdsb2FkJywgX3RoaXMubG9hZGV2ZW50KVxuICAgIGlmIChfdGhpcy5hZGRFdmVudCkgX3RoaXMubGVhZmxldC5vbignbGF5ZXJhZGQnLCBfdGhpcy5hZGRldmVudClcbiAgICB0aGlzLmxlYWZsZXQuc2V0VmlldyhfdGhpcy5jZW50ZXIsIF90aGlzLnpvb20gfHwgMilcbiAgICBMLnRpbGVMYXllcihcbiAgICAgICdodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9pbGFibWVkaWEvJyArXG4gICAgICAgIF90aGlzLm1hcGJveHN0eWxlICtcbiAgICAgICAgJy90aWxlcy8yNTYve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYVd4aFltMWxaR2xoSWl3aVlTSTZJbU5wYkhZeWNYWjJiVEF4YWpaMWMydHpkV1UxYjNneWRuWWlmUS5BSHhsOHBQWnNqc3Fvejk1LTYwNG53JyxcbiAgICAgIHt9XG4gICAgKS5hZGRUbyhfdGhpcy5sZWFmbGV0KVxuXG4gICAgaWYgKCFfdGhpcy5oYXNPd25Qcm9wZXJ0eSgnem9vbXNsaWRlcicpIHx8IF90aGlzLnpvb21zbGlkZXIpIHtcbiAgICAgIEwuY29udHJvbC56b29tc2xpZGVyKCkuYWRkVG8oX3RoaXMubGVhZmxldClcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMuZnVsbHNjcmVlbikge1xuICAgICAgd2luZG93LmZ1bGxzY3JlZW4gPSBuZXcgTC5Db250cm9sLkZ1bGxzY3JlZW4oKVxuXG4gICAgICBfdGhpcy5sZWFmbGV0LmFkZENvbnRyb2wod2luZG93LmZ1bGxzY3JlZW4pXG4gICAgfVxuXG4gICAgTC5jb250cm9sXG4gICAgICAuYXR0cmlidXRpb24oe1xuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbWxlZnQnXG4gICAgICB9KVxuICAgICAgLnNldFByZWZpeChfdGhpcy5hdHRyaWJ1dGlvbilcbiAgICAgIC5hZGRUbyhfdGhpcy5sZWFmbGV0KVxuXG4gICAgX3RoaXMucmVzZXRGaWx0ZXJzKClcblxuICAgIHJldHVybiBfdGhpc1xuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlcm5hbExpbmsgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUZlYXR1cmVFdmVudHMoZmVhdHVyZSwgbGF5ZXIsIG1hcCkge1xuICB2YXIgZXZlbnRPcHRpb25zID0gbWFwLm9uZWFjaGZlYXR1cmVcbiAgICA/IG1hcC5vbmVhY2hmZWF0dXJlXG4gICAgOiB7XG4gICAgICBjbGljazogZnVuY3Rpb24gY2xpY2soKSB7XG4gICAgICAgIGhhbmRsZUxheWVyQ2xpY2soZmVhdHVyZSwgbGF5ZXIsIG1hcC5sZWFmbGV0KVxuICAgICAgfVxuICAgIH1cblxuICBPYmplY3Qua2V5cyhldmVudE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICBsYXllci5vbihsaXN0ZW5lciwgZXZlbnRPcHRpb25zW2xpc3RlbmVyXSlcbiAgfSlcblxuICB2YXIgcG9wdXBDb250ZW50ID1cbiAgICB0eXBlb2YgbWFwLmZvcm1hdHBvcHVwY29udGVudCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBtYXAuZm9ybWF0cG9wdXBjb250ZW50KGZlYXR1cmUsIG1hcClcbiAgICAgIDogZm9ybWF0UG9wdXBDb250ZW50KGZlYXR1cmUsIG1hcClcbiAgbGF5ZXIuYmluZFBvcHVwKHBvcHVwQ29udGVudClcbn1cblxuZnVuY3Rpb24gZm9ybWF0UG9wdXBDb250ZW50KGZlYXR1cmUsIG1hcCkge1xuICB2YXIgY29udGVudFxuICBjb250ZW50ID0gT2JqZWN0LmtleXMoZmVhdHVyZS5wcm9wZXJ0aWVzKVxuICAgIC5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllc1twXSkge1xuICAgICAgICBpZiAobWFwLnBvcHVwaGVhZGVycy5sZW5ndGggJiYgbWFwLnBvcHVwY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwLnBvcHVwaGVhZGVycy5pbmRleE9mKHApID4gLTEgJiZcbiAgICAgICAgICAgIG1hcC5wb3B1cGNvbnRlbnQuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIHAudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgOiBtYXAucG9wdXBjb250ZW50LmluZGV4T2YocCkgPiAtMVxuICAgICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSBpZiAobWFwLnBvcHVwaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwLnBvcHVwaGVhZGVycy5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgID8gJzxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgcC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbcF0gK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSBpZiAobWFwLnBvcHVwY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwLnBvcHVwY29udGVudC5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgID8gJzxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICsgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICsgJzwvZGl2PidcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+JyArXG4gICAgICAgICAgICBwLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnICcpICtcbiAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbcF0gK1xuICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgcmV0dXJuIHBcbiAgICB9KVxuICAgIC5qb2luKCcnKVxuICB2YXIgbGluayA9IGZlYXR1cmUucHJvcGVydGllcy5oeXBlcmxpbmsgfHwgZmVhdHVyZS5wcm9wZXJ0aWVzLmxpbmtcbiAgdmFyIGV4dGVybmFsTGlua0NvbnRlbnQgPVxuICAgIGxpbmsgJiYgbGluay50cmltKClcbiAgICAgID8gJzxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj48ZGl2IGNsYXNzPVwiaHlwZXJsaW5rIHBvcHVwRW50cnlTdHlsZVwiPjxhIGNsYXNzPVwidHJhbnNsYXRlXCIgaHJlZj0nICtcbiAgICAgICAgbGluay50cmltKCkgK1xuICAgICAgICAnIHRhcmdldD1cIl9ibGFua1wiPicgK1xuICAgICAgICBtYXAuZXh0ZXJuYWxMaW5rVGV4dCArXG4gICAgICAgICc8L2E+JyArXG4gICAgICAgIGV4dGVybmFsTGluayArXG4gICAgICAgICc8L2Rpdj4nXG4gICAgICA6ICcnXG4gIGNvbnRlbnQgKz0gZXh0ZXJuYWxMaW5rQ29udGVudFxuXG4gIGlmIChsYW5nKSB7XG4gICAgdmFyIHRyYW5zbGF0YWJsZVN0cmluZ3MgPSBPYmplY3Qua2V5cyhtYXAudHJhbnNsYXRpb25zKS5zb3J0KGZ1bmN0aW9uKFxuICAgICAgYSxcbiAgICAgIGJcbiAgICApIHtcbiAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoXG4gICAgfSlcbiAgICB0cmFuc2xhdGFibGVTdHJpbmdzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnXFxcXGIoJyArIFJlZ0V4cC5lc2NhcGUodCkgKyAnKScsICdnaScpXG4gICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlLCBtYXAudHJhbnNsYXRpb25zW3RdKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY29udGVudFxufVxuXG53aW5kb3cuaGFuZGxlTGF5ZXJDbGljayA9IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVyLCBsZWFmbGV0KSB7XG4gIHZhciBpc1NwaWRlcmZpZWQgPSBmYWxzZVxuXG4gIGlmICghbGF5ZXIuX3ByZVNwaWRlcmZ5TGF0bG5nKSB7XG4gICAgT2JqZWN0LmtleXMobGVhZmxldC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGwsIGkpIHtcbiAgICAgIGlmIChsZWFmbGV0Ll9sYXllcnNbbF0udW5zcGlkZXJmeSkgbGVhZmxldC5fbGF5ZXJzW2xdLnVuc3BpZGVyZnkoKVxuICAgIH0pXG5cbiAgICBpZiAobGF5ZXIuX19wYXJlbnQpIHtcbiAgICAgIE9iamVjdC52YWx1ZXMobGF5ZXIuX19wYXJlbnQuX2dyb3VwLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24odikge1xuICAgICAgICAgIGlmICh2Ll9ncm91cCAmJiB2Ll9ncm91cC5fc3BpZGVyZmllZCkgaXNTcGlkZXJmaWVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgc3R5bGVLZXkgZnJvbSAnLi9zdHlsZUtleS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVQb2ludChmZWF0dXJlLCBsYXRsbmcsIG1hcCkge1xuICB2YXIgcG9pbnRTdHlsZSwga2V5LCBzdHlsZU9wdGlvbnNcblxuICB2YXIgQ3VzdG9tSWNvbiA9IEwuSWNvbi5leHRlbmQoe1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIGljb25TaXplOiBtYXAuaWNvbnNpemUgfHwgWzIwLCAyMF0sXG4gICAgICBpY29uQW5jaG9yOiBtYXAuaWNvbnNpemVcbiAgICAgICAgPyBtYXAuaWNvbnNpemUgLyA0XG4gICAgICAgIDogbWFwLmljb25hbmNob3JcbiAgICAgICAgICA/IG1hcC5pY29uYW5jaG9yXG4gICAgICAgICAgOiBbNSwgNV1cbiAgICB9XG4gIH0pXG5cbiAgdmFyIG5vblBvaW50U3R5bGUsIGtleSwgZGl2SWNvblxuXG4gIGZvciAobGV0IHcgb2YgbWFwLndpZGdldHMpIHtcbiAgICB2YXIgdGhpc0Zvcm1LZXlXaWRnZXQgPSB3LnR5cGUgPT09ICdmb3JtJyA/IHcgOiBudWxsXG4gICAgdmFyIHRoaXNDb2xvcktleVdpZGdldCA9IHcudHlwZSA9PT0gJ2NvbG9yJyA/IHcgOiBudWxsXG5cbiAgICB2YXIgY29sb3JLZXkgPSB0aGlzQ29sb3JLZXlXaWRnZXRcbiAgICAgID8gdGhpc0NvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzQ29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBmb3JtS2V5ID0gdGhpc0Zvcm1LZXlXaWRnZXRcbiAgICAgID8gdGhpc0Zvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXNGb3JtS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICB2YXIgY29sb3IgPSBjb2xvcktleSA/IGNvbG9yS2V5LmNvbG9yIDogZm9ybUtleSA/IGZvcm1LZXkuY29sb3IgOiBudWxsXG5cbiAgICBpZiAodGhpc0Zvcm1LZXlXaWRnZXQgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXNGb3JtS2V5V2lkZ2V0LmZpZWxkXSkge1xuICAgICAgdmFyIGZvcm1zID0gdGhpc0Zvcm1LZXlXaWRnZXQua2V5cy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gay52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKFxuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIClcbiAgICAgIGtleSA9IHRoaXNGb3JtS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG5cbiAgICAgIGlmICgha2V5KSBicmVha1xuXG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICBrZXk6IGZvcm1LZXksXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgIGZlYXR1cmU6IGZlYXR1cmVcbiAgICAgIH1cblxuICAgICAgaWYgKGtleS5mb3JtID09PSAnZGl2Jykge1xuICAgICAgICB2YXIgdmFsdWUgPSBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdXG4gICAgICAgIHZhciBjb3VudCA9IHZhbHVlID8gdmFsdWUuc3BsaXQoJ34nKS5sZW5ndGggOiAwXG5cbiAgICAgICAgZGl2SWNvbiA9IEwuZGl2SWNvbih7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnaWNvbi1kaXYnLFxuICAgICAgICAgIGh0bWw6XG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicgK1xuICAgICAgICAgICAgY29sb3IgK1xuICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgY291bnQgK1xuICAgICAgICAgICAgJzwvc3Bhbj4nXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHBvaW50U3R5bGUgPSBkaXZJY29uID8gZGl2SWNvbiA6IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpc0NvbG9yS2V5V2lkZ2V0ICYmXG4gICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICkge1xuICAgICAga2V5ID0gdGhpc0NvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuXG4gICAgICBpZiAoIWtleSkgYnJlYWtcblxuICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAga2V5OiBjb2xvcktleSxcbiAgICAgICAgY29sb3I6IGNvbG9yS2V5LmNvbG9yLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgZmVhdHVyZTogZmVhdHVyZVxuICAgICAgfVxuXG4gICAgICBwb2ludFN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3ZnID1cbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiBmaWxsPVwiJyArXG4gICAgICAgICdyZWQnICtcbiAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICBwb2ludFN0eWxlID0ge1xuICAgICAgICBjbGFzczogJ2RlZmF1bHQnLFxuICAgICAgICBzdmc6IGVuY29kZVVSSSgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2Eoc3ZnKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaWNvblVybCA9IHBvaW50U3R5bGUuc3ZnXG4gICAgdmFyIGljb24gPSBuZXcgQ3VzdG9tSWNvbih7XG4gICAgICBpY29uVXJsOiBpY29uVXJsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBMLm1hcmtlcihsYXRsbmcsIHtcbiAgICBpY29uOiBkaXZJY29uID8gZGl2SWNvbiA6IGljb25cbiAgfSlcbn1cbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuaW1wb3J0IHsgbGluZVdlaWdodHMsIGxpbmVEYXNoQXJyYXlzIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZU5vblBvaW50KGZlYXR1cmUsIG1hcCwgaW5kZXgpIHtcbiAgdmFyIG5vblBvaW50U3R5bGUsXG4gICAgY29sb3JzID0gW10sXG4gICAgZm9ybXMgPSBbXSxcbiAgICBzb3J0ID0gWydmb3JtJywgJ2NvbG9yJ11cblxuICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICB2YXIga2V5ID0gdy5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSAnY29sb3InXG4gIH0pXG5cbiAgdmFyIGZvcm1LZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICB2YXIga2V5ID0gdy5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSAnZm9ybSdcbiAgfSlcblxuICBmb3IgKGxldCB3IG9mIG1hcC53aWRnZXRzKSB7XG4gICAgdmFyIGNvbG9yS2V5ID0gY29sb3JLZXlXaWRnZXRcbiAgICAgID8gY29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICB2YXIgZm9ybUtleSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgID8gZm9ybUtleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGZvcm1LZXkgPyBmb3JtS2V5LmNvbG9yIDogbnVsbFxuXG4gICAgdmFyIGZvcm1LZXlGb3JtID0gZm9ybUtleVdpZGdldFxuICAgICAgPyBmb3JtS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGNvbG9yS2V5Rm9ybSA9IGNvbG9yS2V5V2lkZ2V0XG4gICAgICA/IGNvbG9yS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGZvcm0gPSBmb3JtS2V5V2lkZ2V0XG4gICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYykge1xuICAgICAgICByZXR1cm4gYy5mb3JtXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAoZm9ybUtleVdpZGdldCAmJiBmb3JtID09PSAnbGluZScpIHtcbiAgICAgIGZvcm1zID0gZm9ybUtleVdpZGdldC5rZXlzLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICB9KVxuICAgICAgZm9ybXMuZm9yRWFjaChmdW5jdGlvbihmLCBpKSB7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgY29sb3JzLnB1c2goWyd0cmFuc3BhcmVudCcsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFtudWxsLCBkZWZhdWx0Q29sb3JdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsnIzAwMDAwMCcsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsnI2ZmZmZmZicsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xvcnMucHVzaChbbnVsbCwgbnVsbF0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoZm9ybXMgJiYgZm9ybUtleUZvcm0gPT09ICdsaW5lJykgfHxcbiAgICAgIChmb3JtcyAmJiBjb2xvcktleUZvcm0gPT09ICdsaW5lJylcbiAgICApIHtcbiAgICAgIHZhciBpID0gZm9ybXMuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0pXG4gICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICBjb2xvcnNbaV1baW5kZXhdID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyAnI2NhZDJkMydcbiAgICAgICAgICAgICAgOiBjb2xvcnNbaV1baW5kZXhdICE9PSBudWxsXG4gICAgICAgICAgICAgICAgPyBjb2xvcnNbaV1baW5kZXhdXG4gICAgICAgICAgICAgICAgOiBjb2xvcixcbiAgICAgICAgICB3ZWlnaHQ6IGxpbmVXZWlnaHRzW2ldW2luZGV4XSxcbiAgICAgICAgICBsaW5lQ2FwOiAnc3F1YXJlJyxcbiAgICAgICAgICBkYXNoQXJyYXk6IGxpbmVEYXNoQXJyYXlzW2ldID8gbGluZURhc2hBcnJheXNbaV1baW5kZXhdIDogbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmb3JtS2V5Rm9ybSA9PT0gJ2xpbmUnIHx8IGNvbG9yS2V5Rm9ybSA9PT0gJ2xpbmUnKSB7XG4gICAgICBub25Qb2ludFN0eWxlID0ge1xuICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIHdlaWdodDogMixcbiAgICAgICAgbGluZUNhcDogJ3NxdWFyZScsXG4gICAgICAgIGRhc2hBcnJheTogJzMsNydcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbG9yS2V5ICYmIGNvbG9yS2V5LmZvcm0gPT09ICdwYXR0ZXJuJykge1xuICAgICAgdmFyIHBhdHRlcm5cblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGNvbG9yS2V5LnBhdHRlcm5bMF0uaW5kZXhPZignc3RyaXBlJykgPiAtMTpcbiAgICAgICAgdmFyIHBhdHRlcm5PcHRpb25zID0ge1xuICAgICAgICAgIHdlaWdodDogMyxcbiAgICAgICAgICBzcGFjZVdlaWdodDogMyxcbiAgICAgICAgICBjb2xvcjogY29sb3JLZXkucGF0dGVyblsxXSxcbiAgICAgICAgICBzcGFjZUNvbG9yOiBjb2xvcktleS5wYXR0ZXJuW2NvbG9yS2V5LnBhdHRlcm4ubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgc3BhY2VPcGFjaXR5OiAxLFxuICAgICAgICAgIGFuZ2xlOiA0NVxuICAgICAgICB9XG4gICAgICAgIHBhdHRlcm4gPSBuZXcgTC5TdHJpcGVQYXR0ZXJuKHBhdHRlcm5PcHRpb25zKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIGNvbG9yS2V5LnBhdHRlcm5bMF0uaW5kZXhPZignZG90JykgPiAtMTpcbiAgICAgICAgdmFyIHNoYXBlT3B0aW9ucyA9IHtcbiAgICAgICAgICB4OiA0LFxuICAgICAgICAgIHk6IDQsXG4gICAgICAgICAgcmFkaXVzOiAyLFxuICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgc3Ryb2tlOiBmYWxzZSxcbiAgICAgICAgICBmaWxsQ29sb3I6IGNvbG9yS2V5LnBhdHRlcm5bY29sb3JLZXkucGF0dGVybi5sZW5ndGggLSAxXSxcbiAgICAgICAgICBmaWxsT3BhY2l0eTogMVxuICAgICAgICB9XG4gICAgICAgIHZhciBzaGFwZSA9IG5ldyBMLlBhdHRlcm5DaXJjbGUoc2hhcGVPcHRpb25zKVxuICAgICAgICB2YXIgcGF0dGVybk9wdGlvbnMgPSB7XG4gICAgICAgICAgd2lkdGg6IDgsXG4gICAgICAgICAgaGVpZ2h0OiA4XG4gICAgICAgIH1cbiAgICAgICAgcGF0dGVybiA9IG5ldyBMLlBhdHRlcm4ocGF0dGVybk9wdGlvbnMpXG4gICAgICAgIHBhdHRlcm4uYWRkU2hhcGUoc2hhcGUpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHBhdHRlcm4uYWRkVG8obWFwLmxlYWZsZXQpXG4gICAgICBub25Qb2ludFN0eWxlID0ge1xuICAgICAgICBmaWxsUGF0dGVybjogcGF0dGVybiA/IHBhdHRlcm4gOiBudWxsLFxuICAgICAgICBmaWxsQ29sb3I6IGNvbG9yLFxuICAgICAgICBjb2xvcjogZGVmYXVsdENvbG9yLFxuICAgICAgICBmaWxsT3BhY2l0eTogMC43LFxuICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgIHdlaWdodDogMixcbiAgICAgICAgbGluZUNhcDogJ3NxdWFyZSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxpbmVDb2xvclxuICAgICAgdmFyIGxpbmVXZWlnaHRcbiAgICAgIHZhciBsaW5lT3BhY2l0eVxuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgZmVhdHVyZS5nZW9tZXRyeS50eXBlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbGluZScpID4gLTE6XG4gICAgICAgIGxpbmVDb2xvciA9IGNvbG9yXG4gICAgICAgICAgPyBjaHJvbWEoY29sb3IpXG4gICAgICAgICAgICAuYnJpZ2h0ZW4oKVxuICAgICAgICAgICAgLmhleCgpXG4gICAgICAgICAgOiBudWxsXG4gICAgICAgIGxpbmVPcGFjaXR5ID0gMVxuICAgICAgICBsaW5lV2VpZ2h0ID0gNFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3BvbHlnb24nKSA+IC0xOlxuICAgICAgICBsaW5lQ29sb3IgPSBkZWZhdWx0Q29sb3JcbiAgICAgICAgbGluZU9wYWNpdHkgPSAwLjVcbiAgICAgICAgbGluZVdlaWdodCA9IDJcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgbm9uUG9pbnRTdHlsZSA9IHtcbiAgICAgICAgZmlsbFBhdHRlcm46IHBhdHRlcm4sXG4gICAgICAgIGZpbGxDb2xvcjogY29sb3IsXG4gICAgICAgIGNvbG9yOiBsaW5lQ29sb3IsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjcsXG4gICAgICAgIG9wYWNpdHk6IGxpbmVPcGFjaXR5LFxuICAgICAgICB3ZWlnaHQ6IGxpbmVXZWlnaHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9uUG9pbnRTdHlsZSkgcmV0dXJuIG5vblBvaW50U3R5bGVcbiAgfVxufVxuIiwiaW1wb3J0IGhhbmRsZUZlYXR1cmVFdmVudHMgZnJvbSAnLi9oYW5kbGVGZWF0dXJlRXZlbnRzLmpzJ1xuaW1wb3J0IHN0eWxlUG9pbnQgZnJvbSAnLi9zdHlsZVBvaW50LmpzJ1xuaW1wb3J0IHN0eWxlTm9uUG9pbnQgZnJvbSAnLi9zdHlsZU5vblBvaW50LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlR2VvSnNvbk9wdGlvbnMoXG4gIG1hcCxcbiAgY29sb3JLZXlXaWRnZXRzLFxuICBmb3JtS2V5V2lkZ2V0c1xuKSB7XG4gIGZ1bmN0aW9uIGZpbHRlcihmZWF0dXJlKSB7XG4gICAgcmV0dXJuIG1hcC5maWx0ZXJzXG4gICAgICAubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgcmV0dXJuIGYoZmVhdHVyZSlcbiAgICAgIH0pXG4gICAgICAuZXZlcnkoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZiAhPT0gZmFsc2VcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBvbkVhY2hGZWF0dXJlKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgaGFuZGxlRmVhdHVyZUV2ZW50cyhmZWF0dXJlLCBsYXllciwgbWFwKVxuICB9XG5cbiAgdmFyIGJhY2tncm91bmRPcHRpb25zID0ge1xuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIG9uRWFjaEZlYXR1cmU6IG9uRWFjaEZlYXR1cmUsXG4gICAgcG9pbnRUb0xheWVyOlxuICAgICAgbWFwLnBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUsIGxhdGxuZykge1xuICAgICAgICByZXR1cm4gc3R5bGVQb2ludChmZWF0dXJlLCBsYXRsbmcsIG1hcClcbiAgICAgIH0sXG4gICAgc3R5bGU6XG4gICAgICBtYXAubm9uUG9pbnRTdHlsZSB8fFxuICAgICAgZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdHlsZU5vblBvaW50KGZlYXR1cmUsIHN0eWxlT3B0aW9ucywgMCkpXG4gICAgICAgIHJldHVybiBzdHlsZU5vblBvaW50KGZlYXR1cmUsIG1hcCwgMClcbiAgICAgIH1cbiAgfVxuICB2YXIgZm9yZWdyb3VuZE9wdGlvbnMgPSB7XG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgb25FYWNoRmVhdHVyZTogb25FYWNoRmVhdHVyZSxcbiAgICBwb2ludFRvTGF5ZXI6XG4gICAgICBtYXAucG9pbnRTdHlsZSB8fFxuICAgICAgZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG5nKSB7XG4gICAgICAgIHJldHVybiBzdHlsZVBvaW50KGZlYXR1cmUsIGxhdGxuZywgbWFwKVxuICAgICAgfSxcbiAgICBzdHlsZTpcbiAgICAgIG1hcC5ub25Qb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBzdHlsZU5vblBvaW50KGZlYXR1cmUsIG1hcCwgMSlcbiAgICAgIH1cbiAgfVxuXG4gIHJldHVybiBbYmFja2dyb3VuZE9wdGlvbnMsIGZvcmVncm91bmRPcHRpb25zXVxufVxuIiwiaW1wb3J0IG1ha2VHZW9Kc29uT3B0aW9ucyBmcm9tICcuL21ha2VHZW9Kc29uT3B0aW9ucy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUxheWVycyhtYXApIHtcbiAgdmFyIGNvbG9yS2V5V2lkZ2V0cyA9IFtdLFxuICAgIGZvcm1LZXlXaWRnZXRzID0gW11cblxuICBpZiAobWFwLndpZGdldHMpIHtcbiAgICBjb2xvcktleVdpZGdldHMgPSBtYXAud2lkZ2V0cy5maWx0ZXIoZnVuY3Rpb24odykge1xuICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICAgIH0pXG4gICAgZm9ybUtleVdpZGdldHMgPSBtYXAud2lkZ2V0cy5maWx0ZXIoZnVuY3Rpb24odykge1xuICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2Zvcm0nXG4gICAgfSlcbiAgfVxuXG4gIHZhciBnZW9Kc29uT3B0aW9ucyA9IG1hcC5nZW9Kc29uT3B0aW9uc1xuICAgID8gbWFwLmdlb0pzb25PcHRpb25zKG1hcClcbiAgICA6IG1ha2VHZW9Kc29uT3B0aW9ucyhtYXApXG4gIG1hcC5qc29uLmZvckVhY2goZnVuY3Rpb24oanNvbiwgaSkge1xuICAgIHZhciBjbHVzdGVyQ29sb3IsIGNvbG9yS2V5V2lkZ2V0XG5cbiAgICBpZiAoY29sb3JLZXlXaWRnZXRzLmxlbmd0aCkge1xuICAgICAgdmFyIGNvbG9yS2V5cyA9IGNvbG9yS2V5V2lkZ2V0c1xuICAgICAgICAubWFwKGZ1bmN0aW9uKHdpZGdldCkge1xuICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IGpzb24uZmVhdHVyZXNbMF0ucHJvcGVydGllc1t3aWRnZXQuZmllbGRdXG5cbiAgICAgICAgICB2YXIga2V5ID0gd2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gY29sbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBjb2xvcktleVdpZGdldCA9IHdpZGdldFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ga2V5XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oY29sb3JLZXkpIHtcbiAgICAgICAgICByZXR1cm4gY29sb3JLZXlcbiAgICAgICAgfSlcblxuICAgICAgY2x1c3RlckNvbG9yID0gY29sb3JLZXlzWzBdID8gY29sb3JLZXlzWzBdLmNvbG9yIDogJyMwMDAwMDAnXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsdXN0ZXJDb2xvciA9ICcjMDAwMDAwJ1xuICAgIH1cblxuICAgIHZhciBhbGxQb2ludHMgPSBqc29uLmZlYXR1cmVzLmV2ZXJ5KGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgIHJldHVybiBmZWF0dXJlLmdlb21ldHJ5ICYmIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpID09PSAncG9pbnQnXG4gICAgfSlcblxuICAgIG1hcC5ncm91cHMucHVzaChcbiAgICAgIG5ldyBMLk1hcmtlckNsdXN0ZXJHcm91cCh7XG4gICAgICAgIHNob3dDb3ZlcmFnZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICB6b29tVG9Cb3VuZHNPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgbWF4Q2x1c3RlclJhZGl1czpcbiAgICAgICAgICBhbGxQb2ludHMgJiYgbWFwLmNsdXN0ZXJkaXN0YW5jZSA/IG1hcC5jbHVzdGVyZGlzdGFuY2UgOiBOYU4sXG4gICAgICAgIGljb25DcmVhdGVGdW5jdGlvbjogZnVuY3Rpb24gaWNvbkNyZWF0ZUZ1bmN0aW9uKGNsdXN0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ljb24tZ3JvdXAnLFxuICAgICAgICAgICAgaHRtbDpcbiAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dFwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQnICtcbiAgICAgICAgICAgICAgY2x1c3RlckNvbG9yICtcbiAgICAgICAgICAgICAgJzsgY29sb3I6JyArXG4gICAgICAgICAgICAgIGNsdXN0ZXJDb2xvciArXG4gICAgICAgICAgICAgICdcIj4nICtcbiAgICAgICAgICAgICAgY2x1c3Rlci5nZXRDaGlsZENvdW50KCkgK1xuICAgICAgICAgICAgICAnPC9zcGFuPidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcblxuICAgIHZhciBoYXNMaW5lRmVhdHVyZXMgPSBqc29uLmZlYXR1cmVzLnNvbWUoZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZmVhdHVyZS5nZW9tZXRyeSAmJlxuICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdsaW5lJykgPiAtMVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBnZW9Kc29uT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgIGlmIChjb2xvcktleVdpZGdldCkge1xuICAgICAgICBqc29uLmZlYXR1cmVzID0ganNvbi5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYi5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS5sb2NhbGVDb21wYXJlKFxuICAgICAgICAgICAgYS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdmFyIGdlb0pzb24gPSBMLmdlb0pzb24oanNvbiwgb3B0aW9uKVxuICAgICAgaWYgKCghaGFzTGluZUZlYXR1cmVzICYmIGluZGV4ICUgMiA9PT0gMCkgfHwgaGFzTGluZUZlYXR1cmVzKSB7XG4gICAgICAgIG1hcC5ncm91cHNbaV0uYWRkTGF5ZXIoZ2VvSnNvbilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKG1hcC5ncm91cHNbaV0uZ2V0TGF5ZXJzKCkubGVuZ3RoKSB7XG4gICAgICBtYXAubGVhZmxldC5hZGRMYXllcihtYXAuZ3JvdXBzW2ldKVxuICAgICAgbWFwLmdyb3Vwc1tpXS5vbignY2x1c3RlcmNsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBoYW5kbGVDbHVzdGVyQ2xpY2soZSwgbWFwLCBpKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsdXN0ZXJDbGljayhlLCBtYXAsIGkpIHtcbiAgbWFwLmxlYWZsZXQuX2xheWVyc1tlLmxheWVyLl9sZWFmbGV0X2lkXS5zcGlkZXJmeSgpXG5cbiAgT2JqZWN0LmtleXMobWFwLmxlYWZsZXQuX2xheWVycykuZm9yRWFjaChmdW5jdGlvbihsYXllciwgaSkge1xuICAgIGlmIChwYXJzZUludChsYXllciwgMTApICE9PSBlLmxheWVyLl9sZWFmbGV0X2lkKSB7XG4gICAgICBpZiAobWFwLmxlYWZsZXQuX2xheWVyc1tsYXllcl0udW5zcGlkZXJmeSlcbiAgICAgICAgbWFwLmxlYWZsZXQuX2xheWVyc1tsYXllcl0udW5zcGlkZXJmeSgpXG4gICAgfVxuICB9KVxuICB2YXIgaXNTcGlkZXJmaWVkID0gZmFsc2VcbiAgT2JqZWN0LnZhbHVlcyhtYXAuZ3JvdXBzW2ldLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgaWYgKHYuX2dyb3VwICYmIHYuX2dyb3VwLl9zcGlkZXJmaWVkKSBpc1NwaWRlcmZpZWQgPSB0cnVlXG4gIH0pXG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmxlYWZsZXQtbWFya2VyLWljb24nKSkuZm9yRWFjaChcbiAgICBmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgIH1cbiAgKVxuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIChkLnN0eWxlLm9wYWNpdHkgPSBpc1NwaWRlcmZpZWQgPyAwLjMzIDogMSlcbiAgICB9XG4gIClcbiAgT2JqZWN0LnZhbHVlcyhtYXAuZ3JvdXBzW2ldLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZmlsdGVyKGZ1bmN0aW9uKHYpIHtcbiAgICBlLmxheWVyXG4gICAgICAuZ2V0QWxsQ2hpbGRNYXJrZXJzKClcbiAgICAgIC5tYXAoZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gbS5nZXRFbGVtZW50KClcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIG1cbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiAobS5zdHlsZS5vcGFjaXR5ID0gMSlcbiAgICAgIH0pXG4gIH0pXG59XG4iLCJpbXBvcnQgQ3VzdG9tTWFwIGZyb20gJy4vQ3VzdG9tTWFwLmpzJ1xuaW1wb3J0IG1ha2VMYXllcnMgZnJvbSAnLi9tYWtlTGF5ZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXBXaWRnZXRzVG9TdGF0ZShvcHRpb25zKSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgLm1hcCcpXG5cbiAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHRhYmxlcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gay50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3RhYmxlJykgPiAtMVxuICAgIH0pXG5cbiAgICBQcm9taXNlLmFsbChcbiAgICAgIHRhYmxlcy5tYXAoZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFxuICAgICAgICAgICdodHRwczovL2NzaXMuY2FydG8uY29tL2FwaS92Mi9zcWw/YXBpX2tleT0nICtcbiAgICAgICAgICAgIG1hcC5hcGlrZXkgK1xuICAgICAgICAgICAgJyZmb3JtYXQ9Z2VvanNvbiZxPVNFTEVDVCUyMColMjBGUk9NJTIwJyArXG4gICAgICAgICAgICBvcHRpb25zW3RhYmxlXVxuICAgICAgICApXG4gICAgICB9KVxuICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlcykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgICAgcmVzcG9uc2VzLm1hcChmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIC50aGVuKGZ1bmN0aW9uKGpzb25zKSB7XG4gICAgICAgIHZhciBqc29uID0ganNvbnMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBhLmZlYXR1cmVzLmNvbmNhdChiLmZlYXR1cmVzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICByZXR1cm4gdy50eXBlID09PSAnY29sb3InXG4gICAgICAgIH0pXG4gICAgICAgIG1hcC5qc29uID0gW2pzb25dXG5cbiAgICAgICAgaWYgKGNvbG9yS2V5V2lkZ2V0KSB7XG4gICAgICAgICAgbWFwLmpzb24gPSBbXVxuICAgICAgICAgIHZhciBmZWF0dXJlR3JvdXBzID0ganNvbi5mZWF0dXJlcy5ncm91cEJ5KFxuICAgICAgICAgICAgY29sb3JLZXlXaWRnZXQuZmllbGQsXG4gICAgICAgICAgICAncHJvcGVydGllcydcbiAgICAgICAgICApXG4gICAgICAgICAgT2JqZWN0LmtleXMoZmVhdHVyZUdyb3VwcylcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmVHcm91cHNbYl1bMF0ucHJvcGVydGllc1tcbiAgICAgICAgICAgICAgICBjb2xvcktleVdpZGdldC5maWVsZFxuICAgICAgICAgICAgICBdLmxvY2FsZUNvbXBhcmUoXG4gICAgICAgICAgICAgICAgZmVhdHVyZUdyb3Vwc1thXVswXS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICAgIG1hcC5qc29uLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVHcm91cHNbZmVhdHVyZV1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMud2lkZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgICAgYm94LmlubmVySFRNTCA9ICcnXG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLndpZGdldHMuZm9yRWFjaChmdW5jdGlvbih3LCB4KSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyAud2lkZ2V0LicgKyBvcHRpb25zLndpZGdldHNbeF0uZmllbGRcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSAmJiB3aWRnZXRDb250ZW50W3hdLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG5ldyBDaG9pY2VzKFxuICAgICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxuICAgICAgICAgICAgICB3aWRnZXRDb250ZW50W3hdLm9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZF49XFwnc2VhcmNoXFwnXScpKSB7XG4gICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjcmVzZXRCdXR0b24nKVxuICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVSZXNldChlbGVtZW50LCBtYXAsIHgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNlbGVjdHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpXG4gICAgICAgICAgdmFyIGNoZWNrcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwnY2hlY2tib3hcXCddJylcbiAgICAgICAgICApXG4gICAgICAgICAgdmFyIHNlYXJjaCA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ106bm90KC5jaG9pY2VzX19pbnB1dCknKVxuICAgICAgICAgIClcbiAgICAgICAgICB2YXIgdG9nZ2xlID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCdyYWRpb1xcJ10nKVxuICAgICAgICAgIClcbiAgICAgICAgICB2YXIgaW5wdXRzID0gc2VsZWN0c1xuICAgICAgICAgICAgLmNvbmNhdChjaGVja3MpXG4gICAgICAgICAgICAuY29uY2F0KHNlYXJjaClcbiAgICAgICAgICAgIC5jb25jYXQodG9nZ2xlKSAvLyBpZiAoIWlucHV0cy5sZW5ndGgpIG1ha2VMYXllcnMobWFwKVxuXG4gICAgICAgICAgdmFyIGluaXRpYWxpemVkID0gMFxuXG4gICAgICAgICAgdmFyIGNvdW50ID0gaW5wdXRzLmxlbmd0aFxuICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2lkZ2V0cyxcbiAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICsraW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoXG4gICAgICAgICAgICAgICAgICBtYXAsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aWRnZXRzLFxuICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICAgICAgKytpbml0aWFsaXplZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCdjcmVhdGVFdmVudCcgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJylcbiAgICAgICAgICAgICAgZXZ0LmluaXRFdmVudCgnY2hhbmdlJywgZmFsc2UsIHRydWUpXG4gICAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5wdXQuZmlyZUV2ZW50KCdvbmNoYW5nZScpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHcubWFwX2lkID0gbWFwLmlkXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAobWFwLnRyYW5zbGF0aW9ucykge1xuICAgICAgICAgIHZhciB0cmFuc2xhdGFibGVOb2RlcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhbnNsYXRlJylcbiAgICAgICAgICApXG4gICAgICAgICAgdmFyIHRyYW5zbGF0YWJsZVN0cmluZ3MgPSBPYmplY3Qua2V5cyhtYXAudHJhbnNsYXRpb25zKS5zb3J0KGZ1bmN0aW9uKFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIGJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0cmFuc2xhdGFibGVOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpKSB7XG4gICAgICAgICAgICB0cmFuc2xhdGFibGVTdHJpbmdzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobWFwLnRyYW5zbGF0aW9uc1t0XSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnXFxcXGIoJyArIFJlZ0V4cC5lc2NhcGUodCkgKyAnKScsICdnaScpXG4gICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MLnJlcGxhY2UocmUsIG1hcC50cmFuc2xhdGlvbnNbdF0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUobWFwKVxuICAgICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVzZXQoZWxlbWVudCwgbWFwLCB4KSB7XG4gIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXScpLnZhbHVlID0gJydcbiAgaWYgKG1hcC5ncm91cHMubGVuZ3RoKSBtYXAucmVtb3ZlR3JvdXBzKClcblxuICBtYXAuZmlsdGVyc1t4XSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtYWtlTGF5ZXJzKG1hcClcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKG1hcCwgZWxlbWVudCwgd2lkZ2V0cywgeCwgY291bnQsIGluaXRpYWxpemVkKSB7XG4gIHZhciBvcHRpb25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLm9wdGlvbnMpXG4gICAgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKVxuICAgICAgPyBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXScpKVxuICAgICAgOiBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSlcbiAgdmFyIHNlbGVjdGlvbnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpXG4gICAgPyBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jykub3B0aW9ucylcbiAgICA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXScpXG4gICAgICA/IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJykpXG4gICAgICA6IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpjaGVja2VkJykpXG4gIHZhciBwb3NzaWJsZUNoZWNrcyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKS5tYXAoXG4gICAgZnVuY3Rpb24obykge1xuICAgICAgcmV0dXJuIG8ubmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuICApXG4gIHZhciBwb3NzaWJsZU9wdGlvbnMgPSB3aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBrZXkudmFsdWUudG9Mb3dlckNhc2UoKVxuICB9KVxuXG4gIHZhciBwb3NzaWJsZVF1ZXJpZXMgPSBwb3NzaWJsZUNoZWNrcy5jb25jYXQocG9zc2libGVPcHRpb25zKVxuICB2YXIgcXVlcnkgPSBBcnJheS5mcm9tKHNlbGVjdGlvbnMpLm1hcChmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cXCdjaGVja2JveFxcJ10nKVxuICAgICAgPyBvLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgOiBvLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgfSlcblxuICBtYXAuZmlsdGVyc1t3aWRnZXRzW3hdLmlkXSA9XG4gICAgd2lkZ2V0c1t4XS5pbnB1dCA9PT0gJ3RvZ2dsZSdcbiAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICB2YXIgYm9vbCA9IHRydWVcblxuICAgICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnRvZ2dsZSkge1xuICAgICAgICAgIGJvb2wgPSBjb252ZXJ0VHlwZShxdWVyeVswXSkgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib29sID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgIH1cbiAgICAgIDogd2lkZ2V0c1t4XS5maWVsZCA9PT0gJ2FsbCdcbiAgICAgICAgPyBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgdmFyIGJvb2wgPSB0cnVlXG4gICAgICAgICAgdmFyIHdpdGhEaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgdmFyIHdpdGhvdXREaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAubGF0aW5pc2UoKVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2l0aERpYWNyaXRpY3MuaW5kZXhPZihxdWVyeVswXSkgPCAwICYmXG4gICAgICAgICAgICAgIHdpdGhvdXREaWFjcml0aWNzLmluZGV4T2YocXVlcnlbMF0pIDwgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVycykge1xuICAgICAgICAgIHZhciBib29sID0gdHJ1ZVxuICAgICAgICAgIHZhciBmaWVsZCA9IHdpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgICAgICAgID8gd2lkZ2V0c1t4XS5ncm91cGluZ1xuICAgICAgICAgICAgOiB3aWRnZXRzW3hdLmZpZWxkXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NzaWJsZVF1ZXJpZXMuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZmllbGRdLnRvTG93ZXJDYXNlKCkpID5cbiAgICAgICAgICAgICAgICAtMSAmJlxuICAgICAgICAgICAgICBxdWVyeS5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllc1tmaWVsZF0udG9Mb3dlckNhc2UoKSkgPCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBib29sID0gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYm9vbFxuICAgICAgICB9XG5cbiAgaWYgKGluaXRpYWxpemVkID49IGNvdW50KSBtYXAucmVtb3ZlR3JvdXBzKClcbiAgaWYgKHdpZGdldHMubGVuZ3RoID49IHggKyAxICYmIGluaXRpYWxpemVkID49IGNvdW50KSBtYWtlTGF5ZXJzKG1hcClcbn1cbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuaW1wb3J0IG1hcFdpZGdldHNUb1N0YXRlIGZyb20gJy4vbWFwV2lkZ2V0c1RvU3RhdGUuanMnXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBtYWtlRHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuaW1wb3J0IHsgcGFyc2VMZWdlbmREYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlV2lkZ2V0cyhqc29ucywgb3B0aW9ucywgYm94Q29udGVudCkge1xuICB2YXIgd2lkZ2V0Q29udGVudCA9IFtdXG4gIG9wdGlvbnMud2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHcsIHgpIHtcbiAgICBpZiAoIXcuaGFzT3duUHJvcGVydHkoJ2lkJykpIHcuaWQgPSB4XG4gICAgdmFyIGxlZ2VuZERhdGEgPSB3LnJlZmVyZW5jZVxuICAgICAgPyBwYXJzZUxlZ2VuZERhdGEob3B0aW9ucywganNvbnNbeF0uZmVlZC5lbnRyeSwgdy50eXBlKVxuICAgICAgOiB3LmtleXNcbiAgICBvcHRpb25zLndpZGdldHNbeF0ua2V5cyA9IGxlZ2VuZERhdGFcbiAgICB3aWRnZXRDb250ZW50LnB1c2goZm9ybWF0V2lkZ2V0cyhvcHRpb25zLCB4KSlcbiAgICBib3hDb250ZW50ICs9XG4gICAgICAnPHNlY3Rpb24gY2xhc3M9XCJ3aWRnZXQgJyArXG4gICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgJ1wiPjxoMyBjbGFzcz1cInRyYW5zbGF0ZVwiPicgK1xuICAgICAgd2lkZ2V0Q29udGVudFt4XS50aXRsZSArXG4gICAgICAnPC9oMz4nXG4gICAgYm94Q29udGVudCArPSB3aWRnZXRDb250ZW50W3hdLm5vZGVzXG4gICAgYm94Q29udGVudCArPSAnPC9zZWN0aW9uPidcbiAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgYm94LmlubmVySFRNTCA9IGJveENvbnRlbnRcbiAgICB2YXIgbGFiZWxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBvcHRpb25zLnNsdWcgKyAnIC5pdGVtVGV4dCcpXG4gICAgQXJyYXkuZnJvbShsYWJlbFRleHQpLmZvckVhY2goZnVuY3Rpb24oaXRlbVRleHQpIHtcbiAgICAgIHZhciBoZWlnaHQgPSBpdGVtVGV4dC5vZmZzZXRIZWlnaHRcbiAgICAgIHZhciBmb250U2l6ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGl0ZW1UZXh0KVsnZm9udC1zaXplJ11cbiAgICAgIHZhciBvZmZzZXQgPSBoZWlnaHQgLyBwYXJzZUludChmb250U2l6ZS5yZXBsYWNlKCdweCcsICcnKSwgMTApXG4gICAgICBpdGVtVGV4dC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgb2Zmc2V0ICogMTAgKyAnJSknXG4gICAgfSlcbiAgfSlcblxuICBtYXBXaWRnZXRzVG9TdGF0ZShvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRXaWRnZXRzKG9wdGlvbnMsIHgpIHtcbiAgdmFyIHdpZGdldE5vZGVzID0gJydcbiAgdmFyIGRyb3Bkb3duT3B0aW9uc1xuXG4gIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLmlucHV0KSB7XG4gIGNhc2UgJ3RvZ2dsZSc6XG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxsYWJlbCBmb3I9XCJ0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBjbGFzcz1cInRyYW5zbGF0ZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBpZD1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiICB2YWx1ZT1cIjFcIiBjaGVja2VkPlNob3c8L2xhYmVsPidcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPGxhYmVsIGZvcj1cIiR0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBjbGFzcz1cInRyYW5zbGF0ZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBpZD1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHZhbHVlPVwiMFwiID5IaWRlPC9sYWJlbD4nXG4gICAgYnJlYWtcblxuICBjYXNlICdzZWFyY2gnOlxuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaF8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHBsYWNlaG9sZGVyPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnN0cnVjdGlvbnMgK1xuICAgICAgICAnXCIgc2l6ZT1cIjEwXCIgLz4nXG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwicmVzZXRCdXR0b25cIiBjbGFzcz1cInRyYW5zbGF0ZVwiPlJlc2V0PC9idXR0b24+J1xuICAgIGJyZWFrXG5cbiAgY2FzZSAnZHJvcGRvd24nOlxuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8c2VsZWN0IGlkPVwiZHJvcGRvd25fJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBwbGFjZWhvbGRlcj1cIicgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uaW5zdHJ1Y3Rpb25zICtcbiAgICAgICAgJ1wiIG11bHRpcGxlPVwiXCI+PC9zZWxlY3Q+J1xuICAgIGRyb3Bkb3duT3B0aW9ucyA9IG1ha2VEcm9wZG93bk9wdGlvbnMob3B0aW9ucywgeClcbiAgICBicmVha1xuXG4gIGNhc2UgJ2NoZWNrYm94JzpcbiAgICB3aWRnZXROb2RlcyArPSAnPHVsPidcbiAgICB2YXIga2V5U3R5bGVcbiAgICB2YXIgbGVnZW5kSXRlbXMgPSBvcHRpb25zLndpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgID8gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnZ3JvdXAnKVxuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdsYWJlbCcpXG4gICAgT2JqZWN0LmtleXMobGVnZW5kSXRlbXMpLmZvckVhY2goZnVuY3Rpb24oZ3JvdXAsIGkpIHtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXSxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICBtYXA6IG9wdGlvbnMsXG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXVxuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAgICc8bGk+PGxhYmVsIGZvcj1cIicgK1xuICAgICAgICAgIGdyb3VwICtcbiAgICAgICAgICAnXCI+PGlucHV0IGNsYXNzPVwid2lkZ2V0ICcgK1xuICAgICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnB1dCArXG4gICAgICAgICAgJ1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCInICtcbiAgICAgICAgICAob3B0aW9ucy53aWRnZXRzW3hdLmdyb3VwaW5nID8gZ3JvdXAgOiBsZWdlbmRJdGVtc1tncm91cF1bMF0udmFsdWUpICtcbiAgICAgICAgICAnXCIgaWQ9XCInICtcbiAgICAgICAgICBncm91cCArXG4gICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgIChsZWdlbmRJdGVtc1tncm91cF1bMF0uc2VsZWN0ZWQgPyAnY2hlY2tlZCcgOiAnJykgK1xuICAgICAgICAgICcgPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAnXCIpPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW1UZXh0XCI+JyArXG4gICAgICAgICAgY2FwaXRhbGl6ZShncm91cCkgK1xuICAgICAgICAgICc8L3NwYW4+PC9sYWJlbD48L2xpPidcbiAgICB9KVxuICAgIHdpZGdldE5vZGVzICs9ICc8L3VsPidcbiAgICBicmVha1xuXG4gIGRlZmF1bHQ6XG4gICAgd2lkZ2V0Tm9kZXMgKz0gJzx1bD4nXG4gICAgdmFyIGtleVN0eWxlXG4gICAgdmFyIGxlZ2VuZEl0ZW1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmdyb3VwaW5nXG4gICAgICA/IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2dyb3VwJylcbiAgICAgIDogb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnbGFiZWwnKVxuICAgIE9iamVjdC5rZXlzKGxlZ2VuZEl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwLCBpKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICByZXR1cm4gZi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF0sXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgbWFwOiBvcHRpb25zLFxuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF1cbiAgICAgICAgfVxuICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgICAnPGxpPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAnXCIpPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW1UZXh0XCI+JyArXG4gICAgICAgICAgY2FwaXRhbGl6ZShncm91cCkgK1xuICAgICAgICAgICc8L3NwYW4+PC9saT4nXG4gICAgfSlcbiAgICB3aWRnZXROb2RlcyArPSAnPC91bD4nXG4gICAgYnJlYWtcbiAgfVxuXG4gIHZhciB3aWRnZXRUaXRsZSA9XG4gICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkID09PSAnYWxsJ1xuICAgICAgPyAnU2VhcmNoJ1xuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0uZmllbGQucmVwbGFjZSgvXy9nLCAnICcpXG4gIHJldHVybiB7XG4gICAgbm9kZXM6IHdpZGdldE5vZGVzLFxuICAgIHRpdGxlOiB3aWRnZXRUaXRsZSxcbiAgICBvcHRpb25zOiBkcm9wZG93bk9wdGlvbnNcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZURvY3VtZW50Tm9kZXMob3B0aW9ucykge1xuICB2YXIgbmV3U2VjdGlvbkhUTUwgPSAnJ1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPHNlY3Rpb24gaWQ9XCInICsgb3B0aW9ucy5zbHVnICsgJ1wiPidcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxkaXYgaWQ9XCInICsgb3B0aW9ucy5zbHVnICsgJ19fbWFwXCIgY2xhc3M9XCJtYXBcIj48L2Rpdj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8YXNpZGUgY2xhc3M9XCJ0b29sYm94XCI+J1xuICBuZXdTZWN0aW9uSFRNTCArPSBvcHRpb25zLnRpdGxlXG4gICAgPyAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQgY2xhc3M9XCJ1aSBtb2JpbGUtb25seVwiPjxkaXYgY2xhc3M9XCJoYW1idXJnZXIgbW9iaWxlLW9ubHlcIj48ZGl2IGNsYXNzPVwiaWNvblwiPiA8c3Bhbj48L3NwYW4+IDxzcGFuPjwvc3Bhbj4gPHNwYW4+PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJtZW51IHRyYW5zbGF0ZVwiPjwvZGl2PjwvZGl2PidcbiAgICA6ICcnXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8ZGl2IGNsYXNzPVwiYm94XCI+J1xuICBuZXdTZWN0aW9uSFRNTCArPVxuICAgIG9wdGlvbnMudGl0bGUgfHwgb3B0aW9ucy5sb2dvIHx8IG9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgID8gJzxoZWFkZXIgIGNsYXNzPVwidHJhbnNsYXRlXCI+IDxoMT48YSB0YXJnZXQ9XCJfYmxhbmtcIiBpZD1cImxvZ29cIj48L2E+PC9oMT4gIDxwIGNsYXNzPVwidHJhbnNsYXRlXCI+PC9wPjwvaGVhZGVyPidcbiAgICAgIDogJydcbiAgbmV3U2VjdGlvbkhUTUwgKz1cbiAgICAob3B0aW9ucy5pbnN0cnVjdGlvbnNcbiAgICAgID8gJzxwIGNsYXNzPVwidHJhbnNsYXRlXCI+JyArIG9wdGlvbnMuaW5zdHJ1Y3Rpb25zICsgJzwvcD4nXG4gICAgICA6ICcnKSArXG4gICAgJzxkaXYgaWQ9XCJjb250cm9sc1wiPjxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj48L2Rpdj48Zm9vdGVyPjxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj48L2Zvb3Rlcj48L2Rpdj48L2FzaWRlPidcbiAgbmV3U2VjdGlvbkhUTUwgKz0gb3B0aW9ucy50aXRsZWNhcmRjb250ZW50XG4gICAgPyAnPGJ1dHRvbiBpZD1cIicgK1xuICAgICAgb3B0aW9ucy5zbHVnICtcbiAgICAgICdfX2Fib3V0XCIgY2xhc3M9XCJhYm91dC10cmlnZ2VyXCI+QUJPVVQgVEhJUyBNQVA8L2J1dHRvbj4nXG4gICAgOiAnJ1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPC9zZWN0aW9uPidcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gbmV3U2VjdGlvbkhUTUxcblxuICBpZiAob3B0aW9ucy50aXRsZWNhcmRjb250ZW50KSB7XG4gICAgdmFyIG5ld0RpYWxvZ0hUTUwgPSAnJ1xuICAgIG5ld0RpYWxvZ0hUTUwgKz0gJzxkaXYgY2xhc3M9XCJkaWFsb2dcIiBpZD1cIicgKyBvcHRpb25zLnNsdWcgKyAnX19kaWFsb2dcIj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxkaXYgY2xhc3M9XCJkaWFsb2ctb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIiBkYXRhLWExMXktZGlhbG9nLWhpZGU+PC9kaXY+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz1cbiAgICAgICc8ZGlhbG9nIGNsYXNzPVwiZGlhbG9nLWNvbnRlbnRcIiBhcmlhLWxhYmVsbGVkYnk9XCJkaWFsb2dUaXRsZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJkaWFsb2dDb250ZW50XCI+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz1cbiAgICAgICc8YnV0dG9uIGRhdGEtYTExeS1kaWFsb2ctaGlkZSBjbGFzcz1cImRpYWxvZy1jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSB0aGlzIGRpYWxvZyB3aW5kb3dcIj4mdGltZXM7PC9idXR0b24+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz0gb3B0aW9ucy50aXRsZWNhcmR0aXRsZVxuICAgICAgPyAnPGgxIGlkPVwiZGlhbG9nVGl0bGVcIj4nICsgb3B0aW9ucy50aXRsZWNhcmR0aXRsZSArICc8L2gxPidcbiAgICAgIDogJydcbiAgICBuZXdEaWFsb2dIVE1MICs9XG4gICAgICAnPGRpdiBpZD1cImRpYWxvZ0NvbnRlbnRcIj4nICsgb3B0aW9ucy50aXRsZWNhcmRjb250ZW50ICsgJzwvZGl2PidcbiAgICBuZXdEaWFsb2dIVE1MICs9ICc8L2RpYWxvZz4nXG4gICAgbmV3RGlhbG9nSFRNTCArPSAnPC9kaXY+J1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IG5ld0RpYWxvZ0hUTUxcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICB2YXIgZGlhbG9nRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLnNsdWcgKyAnX19kaWFsb2cnKVxuICAgIHZhciBtYWluRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9ucy5zbHVnJylcbiAgICB2YXIgZGlhbG9nVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuc2x1ZyArICdfX2Fib3V0JylcblxuICAgIHZhciBkaWFsb2dCb3ggPSBuZXcgQTExeURpYWxvZyhkaWFsb2dFbCwgbWFpbkVsKVxuICAgIHZhciBkaWFsb2cgPSBkaWFsb2dCb3guZGlhbG9nXG4gICAgZGlhbG9nQm94LnNob3coKVxuICAgIGRpYWxvZ0JveC5vbignaGlkZScsIGZ1bmN0aW9uKGRpYWxvZ0VsKSB7XG4gICAgICBkaWFsb2dUcmlnZ2VyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfSlcbiAgICBkaWFsb2dCb3gub24oJ3Nob3cnLCBmdW5jdGlvbihkaWFsb2dFbCkge1xuICAgICAgZGlhbG9nVHJpZ2dlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfSlcbiAgICBkaWFsb2dUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBkaWFsb2dCb3guc2hvdygpXG4gICAgfSlcbiAgfVxuXG4gIGRvY3VtZW50LnRpdGxlID0gb3B0aW9ucy50aXRsZSArICcgfCBDU0lTICcgKyBvcHRpb25zLnByb2dyYW1cbiAgdmFyIG1ldGFMb2NhbGVPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhTG9jYWxlT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzpsb2NhbGUnKVxuICBtZXRhTG9jYWxlT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ2VuX1VTJylcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhTG9jYWxlT0cpXG4gIHZhciBtZXRhVHlwZU9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFUeXBlT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzp0eXBlJylcbiAgbWV0YVR5cGVPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnYXJ0aWNsZScpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVR5cGVPRylcbiAgdmFyIG1ldGFXaWR0aE9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFXaWR0aE9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6aW1hZ2U6d2lkdGgnKVxuICBtZXRhV2lkdGhPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnMjAwMCcpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVdpZHRoT0cpXG4gIHZhciBtZXRhSGVpZ2h0T0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUhlaWdodE9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6aW1hZ2U6aGVpZ2h0JylcbiAgbWV0YUhlaWdodE9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICcxMzMzJylcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhSGVpZ2h0T0cpXG4gIHZhciBtZXRhVHdpdHRlckNhcmRPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVHdpdHRlckNhcmRPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ3R3aXR0ZXI6Y2FyZCcpXG4gIG1ldGFUd2l0dGVyQ2FyZE9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdzdW1tYXJ5JylcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhVHdpdHRlckNhcmRPRylcbiAgdmFyIG1ldGFUaXRsZU9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFUaXRsZU9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6dGl0bGUnKVxuICBtZXRhVGl0bGVPRy5zZXRBdHRyaWJ1dGUoXG4gICAgJ2NvbnRlbnQnLFxuICAgIG9wdGlvbnMudGl0bGUgKyAnIHwgQ1NJUyAnICsgb3B0aW9ucy5wcm9ncmFtXG4gIClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhVGl0bGVPRylcbiAgdmFyIG1ldGFUaXRsZVR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVRpdGxlVHdpdHRlci5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ3R3aXR0ZXI6dGl0bGUnKVxuICBtZXRhVGl0bGVUd2l0dGVyLnNldEF0dHJpYnV0ZShcbiAgICAnY29udGVudCcsXG4gICAgb3B0aW9ucy50aXRsZSArICcgfCBDU0lTICcgKyBvcHRpb25zLnByb2dyYW1cbiAgKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUaXRsZVR3aXR0ZXIpXG4gIHZhciBtZXRhRGVzY3JpcHRpb25PRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhRGVzY3JpcHRpb25PRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmRlc2NyaXB0aW9uJylcbiAgbWV0YURlc2NyaXB0aW9uT0cuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5kZXNjcmlwdGlvbilcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhRGVzY3JpcHRpb25PRylcbiAgdmFyIG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YURlc2NyaXB0aW9uVHdpdHRlci5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nKVxuICBtZXRhRGVzY3JpcHRpb25Ud2l0dGVyLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuZGVzY3JpcHRpb24pXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YURlc2NyaXB0aW9uVHdpdHRlcilcbiAgdmFyIG1ldGFJbWFnZU9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFJbWFnZU9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6aW1hZ2UnKVxuICBtZXRhSW1hZ2VPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBvcHRpb25zLnNjcmVlbnNob3QpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUltYWdlT0cpXG4gIHZhciBtZXRhSW1hZ2VUd2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFJbWFnZVR3aXR0ZXIuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOmltYWdlJylcbiAgbWV0YUltYWdlVHdpdHRlci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBvcHRpb25zLnNjcmVlbnNob3QpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUltYWdlVHdpdHRlcilcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlcicpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnIC5tZW51JykuaW5uZXJUZXh0ID1cbiAgICAgIG9wdGlvbnMudGl0bGVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgaGVhZGVyIGgxJykuaW5uZXJIVE1MICs9XG4gICAgICBvcHRpb25zLnRpdGxlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjJyArIG9wdGlvbnMuc2x1ZyArICcgaGVhZGVyIGEnXG4gICAgKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBvcHRpb25zLmxvZ28gPyAndXJsKCcgKyBvcHRpb25zLmxvZ28gKyAnKScgOiAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBhJ1xuICAgICkuaHJlZiA9IG9wdGlvbnMud2Vic2l0ZSA/IG9wdGlvbnMud2Vic2l0ZSA6ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjJyArIG9wdGlvbnMuc2x1ZyArICcgaGVhZGVyIHAnXG4gICAgKS5pbm5lclRleHQgPSBvcHRpb25zLmRlc2NyaXB0aW9uID8gb3B0aW9ucy5kZXNjcmlwdGlvbiA6ICcnXG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlTWV0YURhdGEsIHBhcnNlV2lkZ2V0RGF0YSB9IGZyb20gJy4vcGFyc2Vycy5qcydcbmltcG9ydCBtYWtlV2lkZ2V0cyBmcm9tICcuL21ha2VXaWRnZXRzLmpzJ1xuaW1wb3J0IG1ha2VEb2N1bWVudE5vZGVzIGZyb20gJy4vbWFrZURvY3VtZW50Tm9kZXMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXRXaXRoU3ByZWFkc2hlZXQoXG4gIGRhdGFVUkwsXG4gIG9wdGlvbnMsXG4gIHRyYW5zbGF0aW9uc1xuKSB7XG4gIHZhciBtYXBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGRhdGFVUkwgKyBvcHRpb25zLmdvb2dsZVNoZWV0ICsgJy8nICsgMiArICcvcHVibGljL3ZhbHVlcz9hbHQ9anNvbidcbiAgICApXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICB2YXIgbWV0YURhdGEgPSBwYXJzZU1ldGFEYXRhKGpzb24uZmVlZC5lbnRyeSlcbiAgICAgICAgdmFyIHdpZGdldHMgPSBwYXJzZVdpZGdldERhdGEobWV0YURhdGEpXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0ge31cbiAgICAgICAgT2JqZWN0LmtleXMobWV0YURhdGEpLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIHByb3BlcnRpZXNbZGF0YV0gPSBtZXRhRGF0YVtkYXRhXVxuICAgICAgICB9KVxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzW2RhdGFdID0gb3B0aW9uc1tkYXRhXVxuICAgICAgICB9KVxuXG4gICAgICAgIHZhciB0d29EX3Byb3Blcml0ZXMgPSBbXG4gICAgICAgICAgeyBuYW1lOiAnY2VudGVyJywgZGVmYXVsdDogWzAsIDBdIH0sXG4gICAgICAgICAgeyBuYW1lOiAnaWNvbnNpemUnLCBkZWZhdWx0OiBbMjAsIDIwXSB9LFxuICAgICAgICAgIHsgbmFtZTogJ2ljb25hbmNob3InLCBkZWZhdWx0OiBbNSwgNV0gfSxcbiAgICAgICAgICB7IG5hbWU6ICdzd2JvdW5kcycsIGRlZmF1bHQ6IFstOTAsIC0xODBdIH0sXG4gICAgICAgICAgeyBuYW1lOiAnbmVib3VuZHMnLCBkZWZhdWx0OiBbOTAsIDE4MF0gfVxuICAgICAgICBdXG5cbiAgICAgICAgdHdvRF9wcm9wZXJpdGVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzW3Byb3BlcnR5Lm5hbWVdID1cbiAgICAgICAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzW3Byb3BlcnR5Lm5hbWVdID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh2LCAxMClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBwcm9wZXJ0aWVzW3Byb3BlcnR5Lm5hbWVdXG4gICAgICAgICAgICAgICAgPyBwcm9wZXJ0aWVzW3Byb3BlcnR5Lm5hbWVdXG4gICAgICAgICAgICAgICAgOiBwcm9wZXJ0eS5kZWZhdWx0XG4gICAgICAgIH0pXG4gICAgICAgIHByb3BlcnRpZXMuc2x1ZyA9IHByb3BlcnRpZXMubWFwSUQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICctJylcbiAgICAgICAgcHJvcGVydGllcy50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnNcbiAgICAgICAgcHJvcGVydGllcy53aWRnZXRzID0gd2lkZ2V0c1xuICAgICAgICBtYWtlRG9jdW1lbnROb2Rlcyhwcm9wZXJ0aWVzKVxuICAgICAgICB2YXIgcmVmZXJlbmNlU2hlZXRzID0gd2lkZ2V0cy5maWx0ZXIoZnVuY3Rpb24odykge1xuICAgICAgICAgIHJldHVybiB3LnJlZmVyZW5jZVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChyZWZlcmVuY2VTaGVldHMpIHtcbiAgICAgICAgICB2YXIgYm94Q29udGVudCA9ICcnXG4gICAgICAgICAgdmFyIHJlZmVyZW5jZVNoZWV0VVJMUyA9IHdpZGdldHNcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24odykge1xuICAgICAgICAgICAgICBpZiAody5yZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgZGF0YVVSTCArXG4gICAgICAgICAgICAgICAgICBvcHRpb25zLmdvb2dsZVNoZWV0ICtcbiAgICAgICAgICAgICAgICAgICcvJyArXG4gICAgICAgICAgICAgICAgICB3LnJlZmVyZW5jZSArXG4gICAgICAgICAgICAgICAgICAnL3B1YmxpYy92YWx1ZXM/YWx0PWpzb24nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbih1KSB7XG4gICAgICAgICAgICAgIHJldHVybiB1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgcmVmZXJlbmNlU2hlZXRVUkxTLm1hcChmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKHVybClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2VzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICByZXNwb25zZXMubWFwKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uKGpzb25zKSB7XG4gICAgICAgICAgICAgIG1hcCA9IGF3YWl0IG1ha2VXaWRnZXRzKGpzb25zLCBwcm9wZXJ0aWVzLCBib3hDb250ZW50KVxuXG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmZvb3RlciAmJiBwcm9wZXJ0aWVzLmZvb3Rlci50cmltKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9vdGVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgICAgICAgICAgICAgZm9vdGVyTm9kZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5mb290ZXIgKyAnICA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+J1xuICAgICAgICAgICAgICAgIHZhciBwZW5VbHRpbWF0ZU5vZGUgPVxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJyMnICsgcHJvcGVydGllcy5zbHVnICsgJyAjY29udHJvbHMnXG4gICAgICAgICAgICAgICAgICApIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvcGVydGllcy5zbHVnICsgJ2hlYWRlcicpXG4gICAgICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgZm9vdGVyTm9kZSxcbiAgICAgICAgICAgICAgICAgIHBlblVsdGltYXRlTm9kZS5uZXh0U2libGluZ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJlc29sdmUobWFwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbWFwID0gbmV3IEN1c3RvbU1hcChjb250YWluZXIsIG9wdGlvbnMpLnJlbmRlcigpXG4gICAgICAgICAgbWFrZUxheWVycyhtYXApXG4gICAgICAgICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXMuZm9vdGVyICYmIHByb3BlcnRpZXMuZm9vdGVyLnRyaW0oKSkge1xuICAgICAgICAgIHZhciBmb290ZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICAgICAgICBmb290ZXJOb2RlLmlubmVySFRNTCA9XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmZvb3RlciArICcgIDxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj4nXG4gICAgICAgICAgdmFyIHBlblVsdGltYXRlTm9kZSA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb3BlcnRpZXMuc2x1ZyArICcgI2NvbnRyb2xzJykgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvcGVydGllcy5zbHVnICsgJ2hlYWRlcicpXG4gICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgZm9vdGVyTm9kZSxcbiAgICAgICAgICAgIHBlblVsdGltYXRlTm9kZS5uZXh0U2libGluZ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfSlcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtNCEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiaW1wb3J0IHsgcGFyc2VMYW5ndWFnZURhdGEgfSBmcm9tICcuL3BhcnNlcnMuanMnXG5cbnZhciB1cmwgPVxuICB3aW5kb3cubG9jYXRpb24gIT0gd2luZG93LnBhcmVudC5sb2NhdGlvblxuICAgID8gZG9jdW1lbnQucmVmZXJyZXJcbiAgICA6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWZcbnZhciBocmVmID0gL2xhbmc9KFteJl0rKS8uZXhlYyh1cmwpXG53aW5kb3cubGFuZyA9IGhyZWYgPyBocmVmWzFdIDogbnVsbFxuXG52YXIgbGVhZmxldExvYWRlZCA9IDBcblxudmFyIHByaW1hcnlKc0ZpbGVzID0gW1xuICAnaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjMuMS9kaXN0L2xlYWZsZXQuanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vd2hhdHdnLWZldGNoQDMuMC4wL2Rpc3QvZmV0Y2gudW1kLmpzJ1xuXVxuXG52YXIgc2Vjb25kYXJ5SnNGaWxlcyA9IFtcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXQuem9vbXNsaWRlckAwLjcuMS9zcmMvTC5Db250cm9sLlpvb21zbGlkZXIuanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldC1mdWxsc2NyZWVuQDEuMC4yL2Rpc3QvTGVhZmxldC5mdWxsc2NyZWVuLm1pbi5qcycsXG4gICdodHRwczovL3VucGtnLmNvbS9jaHJvbWEtanNAMi4wLjMvY2hyb21hLm1pbi5qcycsXG4gICdodHRwczovL2NzaXMtaWxhYi5naXRodWIuaW8vbWFwLXRlbXBsYXRlcy9kaXN0L2pzL3ZlbmRvci9BMTF5LURpYWxvZy5qcycsXG4gICdodHRwczovL3VucGtnLmNvbS9jaG9pY2VzLmpzQDcuMC4wL3B1YmxpYy9hc3NldHMvc2NyaXB0cy9jaG9pY2VzLm1pbi5qcycsXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0Lm1hcmtlcmNsdXN0ZXJAMS40LjEvZGlzdC9sZWFmbGV0Lm1hcmtlcmNsdXN0ZXIuanMnLFxuICAnaHR0cHM6Ly9jc2lzLWlsYWIuZ2l0aHViLmlvL21hcC10ZW1wbGF0ZXMvZGlzdC9qcy92ZW5kb3IvcGF0dGVybnMuanMnLFxuICAnaHR0cHM6Ly9jc2lzLWlsYWIuZ2l0aHViLmlvL21hcC10ZW1wbGF0ZXMvZGlzdC9qcy92ZW5kb3IvbGF0aW5pemUuanMnXG5dXG5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRMZWFmbGV0KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgc2Vjb25kYXJ5SnNGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZFxuICAgICAgdmFyIGpzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBqc0xpbmsuc3JjID0gZmlsZVxuICAgICAgaGVhZC5hcHBlbmRDaGlsZChqc0xpbmspXG5cbiAgICAgIGpzTGluay5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGVhZmxldExvYWRlZCsrXG5cbiAgICAgICAgaWYgKGxlYWZsZXRMb2FkZWQgPT09IHNlY29uZGFyeUpzRmlsZXMubGVuZ3RoICsgcHJpbWFyeUpzRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmVzb2x2ZShsZWFmbGV0TG9hZGVkKVxuICAgICAgICAgIHJldHVybiBsZWFmbGV0TG9hZGVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbXBvcnRGaWxlcygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHByaW1hcnlKc0ZpbGVzLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkXG4gICAgICB2YXIganNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAgIGpzTGluay5zcmMgPSBmaWxlXG4gICAgICBqc0xpbmsub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxlYWZsZXRMb2FkZWQrK1xuXG4gICAgICAgIGlmIChsZWFmbGV0TG9hZGVkID09PSBwcmltYXJ5SnNGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBoYW5kbGVMb2FkTGVhZmxldCgpXG4gICAgICAgICAgcmVzb2x2ZShsZWFmbGV0TG9hZGVkKVxuICAgICAgICAgIHJldHVybiBsZWFmbGV0TG9hZGVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoanNMaW5rKVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWtlTWFwKG9wdGlvbnMpIHtcbiAgaWYgKCFsZWFmbGV0TG9hZGVkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGltcG9ydEZpbGVzKCkudGhlbihhc3luYyBmdW5jdGlvbihzY3JpcHRzTG9hZGVkKSB7XG4gICAgICByZXR1cm4gYXdhaXQgaW5pdChvcHRpb25zKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IGluaXQob3B0aW9ucylcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0KG9wdGlvbnMpIHtcbiAgdmFyIGRhdGFVUkwgPSAnaHR0cHM6Ly9zcHJlYWRzaGVldHMuZ29vZ2xlLmNvbS9mZWVkcy9saXN0LydcbiAgd2luZG93LmRlZmF1bHRDb2xvciA9XG4gICAgb3B0aW9ucy5vY2VhbmNvbG9yIHx8IG9wdGlvbnMub2NlYW5Db2xvciB8fCBvcHRpb25zWydvY2VhbiBjb2xvciddXG4gIHZhciB0cmFuc2xhdGlvbnNcblxuICBpZiAobGFuZykge1xuICAgIGZldGNoKGRhdGFVUkwgKyBvcHRpb25zLmdvb2dsZVNoZWV0ICsgJy8nICsgMyArICcvcHVibGljL3ZhbHVlcz9hbHQ9anNvbicpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24oanNvbikge1xuICAgICAgICB0cmFuc2xhdGlvbnMgPSBwYXJzZUxhbmd1YWdlRGF0YShqc29uLmZlZWQuZW50cnkpXG5cbiAgICAgICAgY29uc3QgaW5pdFdpdGhTcHJlYWRzaGVldCA9IHJlcXVpcmUoJy4vaW5pdFdpdGhTcHJlYWRzaGVldC5qcycpLmRlZmF1bHRcbiAgICAgICAgcmV0dXJuIGF3YWl0IGluaXRXaXRoU3ByZWFkc2hlZXQoZGF0YVVSTCwgb3B0aW9ucywgdHJhbnNsYXRpb25zKVxuICAgICAgfSlcbiAgfSBlbHNlIGlmIChvcHRpb25zLmdvb2dsZVNoZWV0KSB7XG4gICAgY29uc3QgaW5pdFdpdGhTcHJlYWRzaGVldCA9IHJlcXVpcmUoJy4vaW5pdFdpdGhTcHJlYWRzaGVldC5qcycpLmRlZmF1bHRcbiAgICByZXR1cm4gYXdhaXQgaW5pdFdpdGhTcHJlYWRzaGVldChkYXRhVVJMLCBvcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGluaXRXaXRob3V0U3ByZWFkc2hlZXQgPSByZXF1aXJlKCcuL2luaXRXaXRoU3ByZWFkc2hlZXQuanMnKS5kZWZhdWx0XG4gICAgcmV0dXJuIGF3YWl0IGluaXRXaXRob3V0U3ByZWFkc2hlZXQob3B0aW9ucylcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnXG5pbXBvcnQgeyBtYWtlTWFwIH0gZnJvbSAnLi9qcy9tYWtlTWFwJ1xuaW1wb3J0IHsgZXh0ZXJuYWxMaW5rIH0gZnJvbSAnLi9qcy9oZWxwZXJzLmpzJ1xud2luZG93Lm1ha2VNYXAgPSBtYWtlTWFwXG53aW5kb3cuZXh0ZXJuYWxMaW5rID0gZXh0ZXJuYWxMaW5rXG4vLyA7KGFzeW5jIGZ1bmN0aW9uKCkge1xuLy8gICB2YXIgbmV3TWFwID0gYXdhaXQgbWFrZU1hcCh7XG4vLyAgICAgZ29vZ2xlU2hlZXQ6ICcxZ0cwbTR4UlZlQlE3ZVR5cGZaMFNRZXZfUnhVSzB1al85SWx5VXFTZXY3YycsXG4vLyAgICAgbWFwSUQ6ICdhaWQtdGVycm9yaXNtJyxcbi8vICAgICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uKGZlYXR1cmUsIG1hcCkge1xuLy8gICAgICAgdmFyIGpzb25zID0gbWFwLmpzb25cbi8vICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4vLyAgICAgICAgICAgICBmZWF0dXJlczogYS5mZWF0dXJlcy5jb25jYXQoYi5mZWF0dXJlcylcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5mZWF0dXJlcy5tYXAoZnVuY3Rpb24oZikge1xuLy8gICAgICAgICAgIHJldHVybiBmLnByb3BlcnRpZXNcbi8vICAgICAgICAgfSlcbi8vXG4vLyAgICAgICB2YXIgY291bnRyeURhdGEgPSBqc29uc1xuLy8gICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGYpIHtcbi8vICAgICAgICAgICByZXR1cm4gZi5jb3VudHJ5ID09PSBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgdGVycm9yaXNtOiBhLnRlcnJvcmlzbSA/IGEudGVycm9yaXNtIDogYi50ZXJyb3Jpc20sXG4vLyAgICAgICAgICAgICBmb3JlaWduX2Fzc2lzdGFuY2U6IGEuZm9yZWlnbl9hc3Npc3RhbmNlXG4vLyAgICAgICAgICAgICAgID8gYS5mb3JlaWduX2Fzc2lzdGFuY2Vcbi8vICAgICAgICAgICAgICAgOiBiLmZvcmVpZ25fYXNzaXN0YW5jZVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbi8vXG4vLyAgICAgICB2YXIgZ3JvdXBzID0gJycsXG4vLyAgICAgICAgIGFzc2lzdGFuY2UsXG4vLyAgICAgICAgIHRlcnJvcmlzbSA9IGNvdW50cnlEYXRhLnRlcnJvcmlzbSxcbi8vICAgICAgICAgYWlkID0ge1xuLy8gICAgICAgICAgIGU6ICckMTAwLDAwMCwwMDAtJDEsNTAwLDAwMCwwMDAnLFxuLy8gICAgICAgICAgIGQ6ICckMzAsMDAwLDAwMC0kOTksMDAwLDAwMCcsXG4vLyAgICAgICAgICAgYzogJyQyLDAwMCwwMDAtJDI5LDk5OSwwMDAnLFxuLy8gICAgICAgICAgIGI6ICckMTAsMDAwLSQxLDk5OSwwMDAnLFxuLy8gICAgICAgICAgIGE6ICckMC0kMTAsMDAwJ1xuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgaWYgKHRlcnJvcmlzbS5sZW5ndGgpIHtcbi8vICAgICAgICAgZ3JvdXBzID0gYDxicj48ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPlRlcnJvcmlzdCBHcm91cHM8L2Rpdj5cbi8vICAgICAgICAgPHVsPiR7dGVycm9yaXNtXG4vLyAgICAgLnNwbGl0KCd+Jylcbi8vICAgICAubWFwKGZ1bmN0aW9uKGdyb3VwKSB7XG4vLyAgICAgICByZXR1cm4gYDxsaSBjbGFzcz0ncG9wdXBFbnRyeVN0eWxlJz4ke2dyb3VwfTwvbGk+YFxuLy8gICAgIH0pXG4vLyAgICAgLmpvaW4oJycpfTwvdWw+YFxuLy8gICAgICAgfVxuLy9cbi8vICAgICAgIGFzc2lzdGFuY2UgPSBhaWRbY291bnRyeURhdGEuZm9yZWlnbl9hc3Npc3RhbmNlXVxuLy8gICAgICAgICA/IGA8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPkZvcmVpZ24gQXNzaXN0YW5jZTogJHsoYXNzaXN0YW5jZSA9XG4vLyAgICAgICAgICAgICBhaWRbY291bnRyeURhdGEuZm9yZWlnbl9hc3Npc3RhbmNlXSl9PC9kaXY+YFxuLy8gICAgICAgICA6ICcnXG4vL1xuLy8gICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicG9wdXBUaXRsZVN0eWxlXCI+JHtmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeX08L2Rpdj5cbi8vICAgICAgICAgJHthc3Npc3RhbmNlfSAgICAgICR7Z3JvdXBzfWBcbi8vICAgICB9XG4vLyAgIH0pXG4vLyB9KSgpXG4vL1xuLy8gbWFrZU1hcCh7XG4vLyAgIGdvb2dsZVNoZWV0OiAnMWdHMG00eFJWZUJRN2VUeXBmWjBTUWV2X1J4VUswdWpfOUlseVVxU2V2N2MnLFxuLy8gICBtYXBJRDogJ2FpZC10ZXJyb3Jpc20nLFxuLy8gICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uKGZlYXR1cmUsIG1hcCkge1xuLy8gICAgIHZhciBqc29ucyA9IG1hcC5qc29uXG4vLyAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuLy8gICAgICAgICAgIGZlYXR1cmVzOiBhLmZlYXR1cmVzLmNvbmNhdChiLmZlYXR1cmVzKVxuLy8gICAgICAgICB9XG4vLyAgICAgICB9KVxuLy8gICAgICAgLmZlYXR1cmVzLm1hcChmdW5jdGlvbihmKSB7XG4vLyAgICAgICAgIHJldHVybiBmLnByb3BlcnRpZXNcbi8vICAgICAgIH0pXG4vL1xuLy8gICAgIHZhciBjb3VudHJ5RGF0YSA9IGpzb25zXG4vLyAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGYpIHtcbi8vICAgICAgICAgcmV0dXJuIGYuY291bnRyeSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzLmNvdW50cnlcbi8vICAgICAgIH0pXG4vLyAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICB0ZXJyb3Jpc206IGEudGVycm9yaXNtID8gYS50ZXJyb3Jpc20gOiBiLnRlcnJvcmlzbSxcbi8vICAgICAgICAgICBmb3JlaWduX2Fzc2lzdGFuY2U6IGEuZm9yZWlnbl9hc3Npc3RhbmNlXG4vLyAgICAgICAgICAgICA/IGEuZm9yZWlnbl9hc3Npc3RhbmNlXG4vLyAgICAgICAgICAgICA6IGIuZm9yZWlnbl9hc3Npc3RhbmNlXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0pXG4vL1xuLy8gICAgIHZhciBncm91cHMgPSAnJyxcbi8vICAgICAgIGFzc2lzdGFuY2UsXG4vLyAgICAgICB0ZXJyb3Jpc20gPSBjb3VudHJ5RGF0YS50ZXJyb3Jpc20sXG4vLyAgICAgICBhaWQgPSB7XG4vLyAgICAgICAgIGU6ICckMTAwLDAwMCwwMDAtJDEsNTAwLDAwMCwwMDAnLFxuLy8gICAgICAgICBkOiAnJDMwLDAwMCwwMDAtJDk5LDAwMCwwMDAnLFxuLy8gICAgICAgICBjOiAnJDIsMDAwLDAwMC0kMjksOTk5LDAwMCcsXG4vLyAgICAgICAgIGI6ICckMTAsMDAwLSQxLDk5OSwwMDAnLFxuLy8gICAgICAgICBhOiAnJDAtJDEwLDAwMCdcbi8vICAgICAgIH1cbi8vXG4vLyAgICAgaWYgKHRlcnJvcmlzbS5sZW5ndGgpIHtcbi8vICAgICAgIGdyb3VwcyA9IGA8YnI+PGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj5UZXJyb3Jpc3QgR3JvdXBzPC9kaXY+XG4vLyAgICAgICA8dWw+JHt0ZXJyb3Jpc21cbi8vICAgICAuc3BsaXQoJ34nKVxuLy8gICAgIC5tYXAoZnVuY3Rpb24oZ3JvdXApIHtcbi8vICAgICAgIHJldHVybiBgPGxpIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPiR7Z3JvdXB9PC9saT5gXG4vLyAgICAgfSlcbi8vICAgICAuam9pbignJyl9PC91bD5gXG4vLyAgICAgfVxuLy9cbi8vICAgICBhc3Npc3RhbmNlID0gYWlkW2NvdW50cnlEYXRhLmZvcmVpZ25fYXNzaXN0YW5jZV1cbi8vICAgICAgID8gYDxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+Rm9yZWlnbiBBc3Npc3RhbmNlOiAkeyhhc3Npc3RhbmNlID1cbi8vICAgICAgICAgICBhaWRbY291bnRyeURhdGEuZm9yZWlnbl9hc3Npc3RhbmNlXSl9PC9kaXY+YFxuLy8gICAgICAgOiAnJ1xuLy9cbi8vICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJwb3B1cFRpdGxlU3R5bGVcIj4ke2ZlYXR1cmUucHJvcGVydGllcy5jb3VudHJ5fTwvZGl2PlxuLy8gICAgICAgJHthc3Npc3RhbmNlfSAgICAgICR7Z3JvdXBzfWBcbi8vICAgfVxuLy8gfSlcblxuLy8gbWFrZU1hcCh7XG4vLyAgIGdvb2dsZVNoZWV0OiAnMVI5SjNoYUdMRHNSUGh0VDFQMUp2UUxfWHphUFpac2EzM3ZCRk82eHM2ZzQnLFxuLy8gICBtYXBJRDogJ2NoaW5hcG93ZXInLFxuLy8gICBtYXBib3hTdHlsZTpcbi8vICAgICBsYW5nICYmIGxhbmcuaW5kZXhPZignemgtJykgPiAtMVxuLy8gICAgICAgPyAnY2l0dWkzd2F3MDAxNjJqbzF6Y3NmMXVyaidcbi8vICAgICAgIDogJ2NqODRzOWJldDEwZjUycm8ybHJuYTUweWcnLFxuLy8gICBvbkVhY2hGZWF0dXJlOiB7XG4vLyAgICAgbW91c2VvdmVyOiBmdW5jdGlvbiBtb3VzZW92ZXIoZSkge1xuLy8gICAgICAgdGhpcy5vcGVuUG9wdXAoZS5sYXRsbmcpXG4vLyAgICAgfSxcbi8vICAgICBtb3VzZW91dDogZnVuY3Rpb24gbW91c2VvdmVyKGUpIHtcbi8vICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpXG4vLyAgICAgfVxuLy8gICB9LFxuLy8gICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uKGZlYXR1cmUsIG1hcCkge1xuLy8gICAgIHZhciBwcmVmaXggPSBsYW5nID8gJ18nICsgbGFuZyA6ICcnXG4vL1xuLy8gICAgIHZhciBuYW1lID0gZmVhdHVyZS5wcm9wZXJ0aWVzWyduYW1lJyArIHByZWZpeF1cbi8vXG4vLyAgICAgLy8gdmFyIGRlc2NyaXB0aW9uID0gZmVhdHVyZS5wcm9wZXJ0aWVzWydkZXNjcmlwdGlvbicgKyBwcmVmaXhdXG4vLyAgICAgLy8gICAucmVwbGFjZSgvPGEgaHJlZj0vZ2ksICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPScpXG4vLyAgICAgLy8gICAucmVwbGFjZSgvPFxcL2E+L2dpLCBleHRlcm5hbExpbmsgKyAnPC9hPicpXG4vL1xuLy8gICAgIHZhciBvdXRwb3N0ID0gZmVhdHVyZS5wcm9wZXJ0aWVzLmNoaW5lc2Vfb3V0cG9zdHNcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgJzxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICtcbi8vICAgICAgIG91dHBvc3QgK1xuLy8gICAgICAgKG5hbWUgJiYgb3V0cG9zdCA/ICc8YnIvPicgOiAnJykgK1xuLy8gICAgICAgKG5hbWUgIT09IG91dHBvc3QgPyBuYW1lIDogJycpICtcbi8vICAgICAgIChmZWF0dXJlLnByb3BlcnRpZXMub2JzZXJ2ZWRcbi8vICAgICAgICAgPyAnPGJyLz4oZXhwZWN0ZWQpJ1xuLy8gICAgICAgICA6IGZlYXR1cmUucHJvcGVydGllcy5vYnNlcnZlZCA9PT0gZmFsc2Vcbi8vICAgICAgICAgICA/ICc8YnIgLz4ob2JzZXJ2ZWQpJ1xuLy8gICAgICAgICAgIDogJycpICtcbi8vICAgICAgICc8L2Rpdj4nICtcbi8vICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4vLyAgICAgICAnZGVzY3JpcHRpb24nICtcbi8vICAgICAgICc8L2Rpdj4nXG4vLyAgICAgKVxuLy8gICB9XG4vLyB9KVxuXG4vLyB2YXIgbWFwcyA9IFtcbi8vICAgLy8ge1xuLy8gICAvLyAgIGlkOiAnY2xhaW1zLW1hcCcsXG4vLyAgIC8vICAgc2hlZXQ6ICcxNE12dWNNYWMtbFlDdTAtMnZENXRjeGZDVXFJSm9nMmg0LVJFRmtwSDNLdycsXG4vLyAgIC8vICAgJ3BvcHVwIGhlYWRlcnMnOiBbXG4vLyAgIC8vICAgICB3aW5kb3cubGFuZyA/ICduYW1lXycgKyB3aW5kb3cubGFuZyA6ICduYW1lJyxcbi8vICAgLy8gICAgIHdpbmRvdy5sYW5nID8gJ2Rlc2NyaXB0aW9uXycgKyB3aW5kb3cubGFuZyA6ICdkZXNjcmlwdGlvbicsXG4vLyAgIC8vICAgICAnbGluaydcbi8vICAgLy8gICBdXG4vLyAgIC8vIH1cbi8vICAgLy8gLFxuLy8gICB7XG4vLyAgICAgaWQ6ICd2ZW5lenVlbGEnLFxuLy8gICAgIHNoZWV0OiAnMTN0dm94YzdrQjhCelNLTzY3YzZrZjk0OWtxdGVfby1XRkY1VzIxaDVPOTgnXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ2ZlYXR1cmVzLW1hcCcsXG4vLyAgICAgc2hlZXQ6ICcxUkVGTko4V1o5Zk96U2hZQzhTcFVKN3BaUUVNa1dscXpDMktwTWItd1N5Yydcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAncmVzb3VyY2VzLW1hcCcsXG4vLyAgICAgc2hlZXQ6ICcxMXJVYW9JU1NrcWFrRUtaNmhpNHhlVmJiaUVuZlBpMXFzUm9xNHIwU3JQQScsXG4vLyAgICAgJ3BvcHVwIGhlYWRlcnMnOiBbXG4vLyAgICAgICBsYW5nID8gJ25hbWVfJyArIGxhbmcgOiAnbmFtZScsXG4vLyAgICAgICBsYW5nID8gJ2Rlc2NyaXB0aW9uXycgKyBsYW5nIDogJ2Rlc2NyaXB0aW9uJyxcbi8vICAgICAgICdsaW5rJ1xuLy8gICAgIF1cbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnYWVnaXMnLFxuLy8gICAgIHNoZWV0OiAnMTVvSlNtazBLVzNfNUQ4VWoxZVNpei1lLVBwVzUxZTlOLVhTZ0xJUXRaSWsnXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3diaS10ZXJyb3Jpc20nLFxuLy8gICAgIHNoZWV0OiAnMWQ0RWU2NUtUX1M0NngwbWs2MnNWNkNZRHBNWjQwYzJvWUo2QlFzOWFfMTAnXG4vLyAgIH1cbi8vIF1cbi8vXG4vLyBtYXBzLnJldmVyc2UoKS5mb3JFYWNoKChtYXAsIGkpID0+IHtcbi8vICAgdmFyIG1hcGJveFN0eWxlID1cbi8vICAgICBsYW5nICYmIGxhbmcuaW5kZXhPZignemgtJykgPiAtMVxuLy8gICAgICAgPyAobWFwYm94U3R5bGUgPSAnY2l0dWkzd2F3MDAxNjJqbzF6Y3NmMXVyaicpXG4vLyAgICAgICA6IChtYXBib3hTdHlsZSA9ICdjajg0czliZXQxMGY1MnJvMmxybmE1MHlnJylcbi8vXG4vLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdhbm90aGVyIG9uZScpXG4vLyAgICAgbWFrZU1hcCh7XG4vLyAgICAgICBtYXBJRDogbWFwLmlkLFxuLy8gICAgICAgZXh0ZXJuYWxMaW5rVGV4dDogJ3lvLCBjbGljayBoZXJlJyxcbi8vICAgICAgIGdvb2dsZVNoZWV0OiBtYXAuc2hlZXQsXG4vLyAgICAgICBmdWxsU2NyZWVuOiB0cnVlLFxuLy8gICAgICAgJ21hcGJveCBzdHlsZSc6XG4vLyAgICAgICAgIG1hcC5pZCA9PT0gJ2FlZ2lzJ1xuLy8gICAgICAgICAgID8gJ2Nqb2l2NmRtbzI5a2gycnNkMno1cWRhMnAnXG4vLyAgICAgICAgICAgOiBtYXAuaWQgPT09ICd2ZW5lenVlbGEnIHx8IG1hcC5pZCA9PT0gJ3diaS10ZXJyb3Jpc20nXG4vLyAgICAgICAgICAgICA/ICdjanJhd2MxenMyYnpjMnNxM3k5d3Z0MjJ0J1xuLy8gICAgICAgICAgICAgOiBtYXBib3hTdHlsZSxcbi8vICAgICAgICdvY2VhbiBjb2xvcic6ICcjY2FkMmQzJyxcbi8vICAgICAgICdwb3B1cCBoZWFkZXJzJzogbWFwWydwb3B1cCBoZWFkZXJzJ10sIC8vIEFycmF5XG4vLyAgICAgICAvLyBcInBvcHVwIGNvbnRlbnRcIjogW10sXG4vLyAgICAgICAvLyBwb2ludFN0eWxlOiBmdW5jdGlvbihmZWF0dXJlLGxhdGxuZyl7fSxcbi8vICAgICAgIC8vIG5vblBvaW50U3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpe30sXG4vLyAgICAgICAvLyBvbkVhY2hGZWF0dXJlOiB7XG4vLyAgICAgICAvLyBjbGljazogZnVuY3Rpb24oZmVhdHVyZSwgbGF5ZXIpe31cbi8vICAgICAgIC8vIGRiY2xpY2s6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVyLCBtYXApe30sXG4vLyAgICAgICAvLyBtb3VzZWRvd246IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVyLCBtYXApe30sXG4vLyAgICAgICAvLyBtb3VzZWVudGVyOiBmdW5jdGlvbihmZWF0dXJlLCBsYXllciwgbWFwKXt9LFxuLy8gICAgICAgLy8gbW91c2VvdXQ6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVyLCBtYXApe31cbi8vICAgICAgIC8vIH0sXG4vLyAgICAgICBmb3JtYXRQb3B1cENvbnRlbnQ6XG4vLyAgICAgICAgIG1hcC5pZCA9PT0gJ2FlZ2lzJ1xuLy8gICAgICAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSwgbWFwKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJwb3B1cFRpdGxlU3R5bGVcIj4ke1xuLy8gICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMubmFtZVxuLy8gICAgICAgICAgICAgfTwvZGl2PlxuLy9cbi8vICAgICAgICAgJHtcbi8vICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnRvdGFsX2d1aWRlZF9taXNzaWxlX2NydWlzZXJzXG4vLyAgICAgPyBgPGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj5HdWlkZWQgTWlzc2lsZSBDcnVpc2VyczogJHtcbi8vICAgICAgIGZlYXR1cmUucHJvcGVydGllcy50b3RhbF9ndWlkZWRfbWlzc2lsZV9jcnVpc2Vyc1xuLy8gICAgIH08L2Rpdj5cbi8vICAgICAgICAgPGRpdj48c3BhbiBjbGFzcz0ncG9wdXBFbnRyeVN0eWxlJz5CTUQtQ2FwYWJsZTo8L3NwYW4+XG4vLyAgICAgICAgIDxzcGFuIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPiR7XG4vLyAgIGZlYXR1cmUucHJvcGVydGllcy5ibWRfY2FwYWJsZV9nbWNcbi8vIH08L3NwYW4+PC9kaXY+YFxuLy8gICAgIDogJydcbi8vIH1cbi8vICAgICAke1xuLy8gICBmZWF0dXJlLnByb3BlcnRpZXMudG90YWxfZ3VpZGVkX21pc3NpbGVfZGVzdHJveWVyc1xuLy8gICAgID8gYDxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+R3VpZGVkIE1pc3NpbGUgRGVzdHJveWVyczogJHtcbi8vICAgICAgIGZlYXR1cmUucHJvcGVydGllcy50b3RhbF9ndWlkZWRfbWlzc2lsZV9kZXN0cm95ZXJzXG4vLyAgICAgfTwvZGl2PlxuLy8gICAgIDxkaXY+PHNwYW4gY2xhc3M9J3BvcHVwRW50cnlTdHlsZSc+Qk1ELUNhcGFibGU6PC9zcGFuPlxuLy8gICAgIDxzcGFuIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPiR7XG4vLyAgIGZlYXR1cmUucHJvcGVydGllcy50b3RhbF9ndWlkZWRfbWlzc2lsZV9kZXN0cm95ZXJzXG4vLyB9PC9zcGFuPjwvZGl2PmBcbi8vICAgICA6ICcnXG4vLyB9YFxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICA6IG1hcC5pZCA9PT0gJ3ZlbmV6dWVsYSdcbi8vICAgICAgICAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSwgbWFwKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+JyArXG4vLyAgICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSArXG4vLyAgICAgICAgICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuLy8gICAgICAgICAgICAgICAgICAgKGZlYXR1cmUucHJvcGVydGllcy5yZWNvZ25pdGlvbi50b0xvd2VyQ2FzZSgpID09PSAneSdcbi8vICAgICAgICAgICAgICAgICAgICAgPyBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSArXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJyByZWNvZ25pemVzIEp1YW4gR3VhaWRcXHhGMyBhcyBQcmVzaWRlbnQgb2YgVmVuZXp1ZWxhJ1xuLy8gICAgICAgICAgICAgICAgICAgICA6IGZlYXR1cmUucHJvcGVydGllcy5jb3VudHJ5ICtcbi8vICAgICAgICAgICAgICAgICAgICAgICAnIHJlY29nbml6ZXMgTmljb2xcXHhFMXMgTWFkdXJvIGFzIFByZXNpZGVudCBvZiBWZW5lenVlbGE8L2Rpdj4nKSArXG4vLyAgICAgICAgICAgICAgICAgICAnPC9kaXY+J1xuLy8gICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICA6IG51bGxcbi8vICAgICB9KVxuLy8gICB9LCAyMDAwICogaSlcbi8vIH0pXG5cbmlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH1cbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpXG4gICAgcmV0dXJuIGV2dFxuICB9XG5cbiAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZVxuXG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50XG59XG5cbkFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24ocHJvcGVydHkxLCBwcm9wZXJ0eTIpIHtcbiAgcmV0dXJuIHByb3BlcnR5MlxuICAgID8gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XG4gICAgICB2YXIgdmFsID0gaXRlbVtwcm9wZXJ0eTJdW3Byb3BlcnR5MV1cbiAgICAgIGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW11cbiAgICAgIGdyb3Vwc1t2YWxdLnB1c2goaXRlbSlcbiAgICAgIHJldHVybiBncm91cHNcbiAgICB9LCB7fSlcbiAgICA6IHRoaXMucmVkdWNlKGZ1bmN0aW9uKGdyb3VwcywgaXRlbSkge1xuICAgICAgdmFyIHZhbCA9IGl0ZW1bcHJvcGVydHkxXVxuICAgICAgZ3JvdXBzW3ZhbF0gPSBncm91cHNbdmFsXSB8fCBbXVxuICAgICAgZ3JvdXBzW3ZhbF0ucHVzaChpdGVtKVxuICAgICAgcmV0dXJuIGdyb3Vwc1xuICAgIH0sIHt9KVxufVxuXG5SZWdFeHAuZXNjYXBlID0gZnVuY3Rpb24ocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9