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
function src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function src_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






window.makeMap = makeMap;
window.externalLink = helpers["d" /* externalLink */];
window.capitalize = helpers["a" /* capitalize */]; // examples()

function examples() {
  return _examples.apply(this, arguments);
}

function _examples() {
  _examples = src_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var newMap, chokepoint, maps, more_maps;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return makeMap({
              googleSheet: '11hN6uzXcO7amn5bT-a09T8oEvgrw7lZ-oBfGtLRzpws',
              mapID: 'africa',
              formatPopupContent: function formatPopupContent(feature, map) {
                var description = feature.properties.description ? feature.properties.description + (feature.properties.link ? ' <a target="_blank" rel="noreferrer noopener" href="' + feature.properties.link + '"</a>' + feature.properties.link_title + helpers["d" /* externalLink */] + '</a>' : '') : '';
                return '<div class="popupTitleStyle">' + feature.properties.port + '</div><div class="popupEntryStyle">' + feature.properties.port_city + ', ' + feature.properties.port_country + '</div><div class="popupHeaderStyle">Investment Type</div><ul class="popupEntryStyle">' + feature.properties.investment_type.split(',').map(function (r) {
                  return '<li>' + Object(helpers["a" /* capitalize */])(r) + '</li>';
                }).join('') + '</ul>' + '<p>' + description + '</p>';
              }
            });

          case 2:
            newMap = _context.sent;
            chokepoint = L.divIcon({
              className: 'chokepoint-label',
              html: '<span>choke point</span>',
              iconAnchor: [-75, 7.5],
              iconSize: [20, 20]
            });
            new L.marker([12.586732432464062, 43.341064453125], {
              icon: chokepoint
            }).addTo(newMap.leaflet);
            document.querySelector('.toolbox input.ui[type=\'checkbox\']').removeAttribute('checked');
            console.log('africa');
            maps = [{
              googleSheet: '1gG0m4xRVeBQ7eTypfZ0SQev_RxUK0uj_9IlyUqSev7c',
              mapID: 'aid-terrorism',
              formatPopupContent: function formatPopupContent(feature, map) {
                var jsons = map.json.reduce(function (a, b) {
                  return {
                    type: 'FeatureCollection',
                    features: a.features.concat(b.features)
                  };
                }).features.map(function (f) {
                  return f.properties;
                });
                var countryData = jsons.filter(function (f) {
                  return f.country === feature.properties.country;
                }).reduce(function (a, b) {
                  return {
                    terrorism: a.terrorism ? a.terrorism : b.terrorism,
                    foreign_assistance: a.foreign_assistance ? a.foreign_assistance : b.foreign_assistance
                  };
                });
                var groups = '',
                    assistance,
                    terrorism = countryData.terrorism,
                    aid = {
                  e: '$100,000,000-$1,500,000,000',
                  d: '$30,000,000-$99,000,000',
                  c: '$2,000,000-$29,999,000',
                  b: '$10,000-$1,999,000',
                  a: '$0-$10,000'
                };

                if (terrorism.length) {
                  groups = "<br><div class=\"popupHeaderStyle\">Terrorist Groups</div>\n        <ul>".concat(terrorism.split('~').map(function (group) {
                    return "<li class='popupEntryStyle'>".concat(group, "</li>");
                  }).join(''), "</ul>");
                }

                assistance = aid[countryData.foreign_assistance] ? "<div class=\"popupHeaderStyle\">Foreign Assistance: ".concat(assistance = aid[countryData.foreign_assistance], "</div>") : '';
                return "<div class=\"popupTitleStyle\">".concat(feature.properties.country, "</div>\n        ").concat(assistance, "      ").concat(groups);
              }
            }, {
              googleSheet: '1R9J3haGLDsRPhtT1P1JvQL_XzaPZZsa33vBFO6xs6g4',
              mapID: 'chinapower',
              titlecardtitle: null,
              titlecardcontent: null,
              mapboxStyle: lang && lang.indexOf('zh-') > -1 ? 'citui3waw00162jo1zcsf1urj' : 'cj84s9bet10f52ro2lrna50yg',
              onEachFeature: {
                mouseover: function mouseover(e) {
                  this.openPopup(e.latlng);
                },
                mouseout: function mouseover(e) {
                  this.closePopup();
                }
              },
              formatPopupContent: function formatPopupContent(feature, map) {
                var prefix = lang ? '_' + lang : '';
                var name = feature.properties['name' + prefix]; // var description = feature.properties['description' + prefix]
                //   .replace(/<a href=/gi, '<a target="_blank" href=')
                //   .replace(/<\/a>/gi, externalLink + '</a>')

                var outpost = feature.properties.chinese_outposts;
                return '<div class="popupEntryStyle">' + outpost + (name && outpost ? '<br/>' : '') + (name !== outpost ? name : '') + (feature.properties.observed ? '<br/>(expected)' : feature.properties.observed === false ? '<br />(observed)' : '') + '</div>' + '<div class="popupEntryStyle">' + 'description' + '</div>';
              }
            }];
            maps.reverse().forEach(function (map, i) {
              setTimeout(function () {
                console.log(map.mapID);
                makeMap(map);
              }, 2000 * i);
            });
            more_maps = [{
              id: 'venezuela',
              sheet: '13tvoxc7kB8BzSKO67c6kf949kqte_o-WFF5W21h5O98'
            }, {
              id: 'features-map',
              sheet: '1REFNJ8WZ9fOzShYC8SpUJ7pZQEMkWlqzC2KpMb-wSyc'
            }, {
              id: 'resources-map',
              sheet: '11rUaoISSkqakEKZ6hi4xeVbbiEnfPi1qsRoq4r0SrPA',
              'popup headers': [lang ? 'name_' + lang : 'name', lang ? 'description_' + lang : 'description', 'link']
            }, {
              id: 'aegis',
              sheet: '15oJSmk0KW3_5D8Uj1eSiz-e-PpW51e9N-XSgLIQtZIk'
            }, {
              id: 'wbi-terrorism',
              sheet: '1d4Ee65KT_S46x0mk62sV6CYDpMZ40c2oYJ6BQs9a_10'
            }];
            more_maps.reverse().forEach(function (map, i) {
              setTimeout(function () {
                console.log(map.id);
                makeMap({
                  mapID: map.id,
                  externalLinkText: 'yo, click here',
                  googleSheet: map.sheet,
                  fullScreen: true,
                  'mapbox style': 'cjrawc1zs2bzc2sq3y9wvt22t',
                  'ocean color': '#cad2d3',
                  'popup headers': map['popup headers'],
                  // Array
                  // "popup content": [],
                  // pointStyle: function(feature,latlng){},
                  // nonPointStyle: function(feature){},
                  // onEachFeature: {
                  // click: function(feature, layer){}
                  // dbclick: function(feature, layer, map){},
                  // mousedown: function(feature, layer, map){},
                  // mouseenter: function(feature, layer, map){},
                  // mouseout: function(feature, layer, map){}
                  // },
                  formatPopupContent: map.id === 'aegis' ? function (feature, map) {
                    return "<div class=\"popupTitleStyle\">".concat(feature.properties.name, "</div>\n\n            ").concat(feature.properties.total_guided_missile_cruisers ? "<div class=\"popupHeaderStyle\">Guided Missile Cruisers: ".concat(feature.properties.total_guided_missile_cruisers, "</div>\n            <div><span class='popupEntryStyle'>BMD-Capable:</span>\n            <span class='popupEntryStyle'>").concat(feature.properties.bmd_capable_gmc, "</span></div>") : '', "\n        ").concat(feature.properties.total_guided_missile_destroyers ? "<div class=\"popupHeaderStyle\">Guided Missile Destroyers: ".concat(feature.properties.total_guided_missile_destroyers, "</div>\n        <div><span class='popupEntryStyle'>BMD-Capable:</span>\n        <span class='popupEntryStyle'>").concat(feature.properties.total_guided_missile_destroyers, "</span></div>") : '');
                  } : map.id === 'venezuela' ? function (feature, map) {
                    return '<div class="popupHeaderStyle">' + feature.properties.country + '</div><div class="popupEntryStyle">' + (feature.properties.recognition.toLowerCase() === 'y' ? feature.properties.country + ' recognizes Juan Guaid\xF3 as President of Venezuela' : feature.properties.country + ' recognizes Nicol\xE1s Maduro as President of Venezuela</div>') + '</div>';
                  } : null
                });
              }, 2000 * i);
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _examples.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DdXN0b21NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hhbmRsZUZlYXR1cmVFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlTm9uUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VHZW9Kc29uT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZUxheWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFwV2lkZ2V0c1RvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VXaWRnZXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlRG9jdW1lbnROb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/MTI5NyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY3JlYXRlQ29sb3JTY2FsZSIsImNvdW50IiwiaW5kZXgiLCJzY2FsZU9uZSIsImNocm9tYSIsImN1YmVoZWxpeCIsImh1ZSIsImxpZ2h0bmVzcyIsInNjYWxlIiwiY29sb3JzIiwic2NhbGVUd28iLCJnYW1tYSIsInJldmVyc2UiLCJpIiwiY29sb3IiLCJzYXR1cmF0ZSIsImhleCIsInB1c2giLCJsaW5lV2VpZ2h0cyIsImxpbmVEYXNoQXJyYXlzIiwiZXh0ZXJuYWxMaW5rIiwicmVtb3ZlIiwiY29udmVydFR5cGUiLCJ2YWx1ZSIsInYiLCJOdW1iZXIiLCJpc05hTiIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwiY2FwaXRhbGl6ZSIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsb2FkIiwidXJsIiwiZWxlbWVudCIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJpbm5lckhUTUwiLCJyZXNwb25zZVRleHQiLCJtYWtlRHJvcGRvd25PcHRpb25zIiwib3B0aW9ucyIsIngiLCJncm91cHMiLCJ3aWRnZXRzIiwia2V5cyIsImdyb3VwQnkiLCJjaG9pY2VzIiwiT2JqZWN0IiwibWFwIiwiZyIsInoiLCJpZCIsImxhYmVsIiwidHJpbSIsInBhcnNlSW50IiwiTmFOIiwiZGlzYWJsZWQiLCJyZW1vdmVJdGVtQnV0dG9uIiwibWF4SXRlbUNvdW50IiwibWF4aW11bSIsImNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsIl90aGlzIiwiaXRlbSIsImNsYXNzTmFtZXMiLCJkYXRhIiwia2V5IiwiZmluZCIsImtleVN0eWxlIiwidHlwZSIsImZvcm1zIiwiayIsImluZGV4T2YiLCJzdHlsZU9wdGlvbnMiLCJzdHlsZUtleSIsIm1hcmt1cCIsImFjdGl2ZSIsImNsYXNzIiwic3ZnIiwid2luZG93IiwiYnRvYSIsImNob2ljZSIsIml0ZW1DaG9pY2UiLCJpdGVtRGlzYWJsZWQiLCJpdGVtU2VsZWN0YWJsZSIsImNvbmZpZyIsIml0ZW1TZWxlY3RUZXh0IiwiZ3JvdXBJZCIsInBhcnNlTGFuZ3VhZ2VEYXRhIiwibGFuZ3VhZ2VEYXRhIiwiZm9yRWFjaCIsInJvdyIsImNvbHVtbiIsImNvbHVtbk5hbWUiLCJyZXBsYWNlIiwibGFuZyIsInBhcnNlTGVnZW5kRGF0YSIsImpzb24iLCJzdHlsZSIsImNvbG9yU2NhbGUiLCJsZW5ndGgiLCJsZWdlbmRJdGVtcyIsInkiLCJncm91cCIsInNlbGVjdGVkIiwiY29sb3JWYWwiLCJmb3JtIiwiZGVmYXVsdENvbG9yIiwiaWNvbiIsInBhdHRlcm4iLCJzcGxpdCIsInRyYW5zbGF0aW9ucyIsInBhcnNlTWV0YURhdGEiLCJwYXJzZVdpZGdldERhdGEiLCJtZXRhRGF0YSIsInByb2Nlc3MiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJmaWx0ZXIiLCJtYXRjaCIsInciLCJmaWVsZCIsImZlYXR1cmUiLCJpY29uU2l6ZSIsImljb25zaXplIiwiZGl2aWRlcnMiLCJzaXplIiwia2V5Q29sb3IiLCJmb3JtS2V5V2lkZ2V0IiwiY29sb3JLZXlXaWRnZXQiLCJjb2xvcktleSIsImZvcm1LZXkiLCJldmVyeSIsImF2ZXJhZ2UiLCJvY2VhbmNvbG9yIiwiZGFya2VuIiwic2x1ZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN2Z0NvbnRlbnQiLCJwMSIsInAyIiwicDMiLCJjb2xvclR3byIsImNvbG9yT25lIiwibWFwSWQiLCJDdXN0b21NYXAiLCJjb250YWluZXIiLCJmaWx0ZXJzIiwibGVhZmxldCIsInBvcHVwY29udGVudCIsInBvcHVwaGVhZGVycyIsImFsbCIsInJlc2V0RmlsdGVycyIsInJlbW92ZUdyb3VwcyIsInJlbW92ZUxheWVyIiwicmVuZGVyIiwiTCIsIm1pblpvb20iLCJtaW56b29tIiwibWF4Wm9vbSIsIm1heHpvb20iLCJtYXhCb3VuZHMiLCJtYXhib3VuZHMiLCJzd2JvdW5kcyIsIm5lYm91bmRzIiwic2Nyb2xsV2hlZWxab29tIiwiaW5uZXJXaWR0aCIsInpvb21Db250cm9sIiwiaGFzT3duUHJvcGVydHkiLCJ6b29tc2xpZGVyIiwiYXR0cmlidXRpb25Db250cm9sIiwibG9hZEV2ZW50Iiwib24iLCJsb2FkZXZlbnQiLCJhZGRFdmVudCIsImFkZGV2ZW50Iiwic2V0VmlldyIsImNlbnRlciIsInpvb20iLCJ0aWxlTGF5ZXIiLCJtYXBib3hzdHlsZSIsImFkZFRvIiwiY29udHJvbCIsImZ1bGxzY3JlZW4iLCJDb250cm9sIiwiRnVsbHNjcmVlbiIsImFkZENvbnRyb2wiLCJhdHRyaWJ1dGlvbiIsInBvc2l0aW9uIiwic2V0UHJlZml4IiwiaGFuZGxlRmVhdHVyZUV2ZW50cyIsImxheWVyIiwiZXZlbnRPcHRpb25zIiwib25lYWNoZmVhdHVyZSIsImNsaWNrIiwiaGFuZGxlTGF5ZXJDbGljayIsImxpc3RlbmVyIiwicG9wdXBDb250ZW50IiwiZm9ybWF0cG9wdXBjb250ZW50IiwiZm9ybWF0UG9wdXBDb250ZW50IiwiYmluZFBvcHVwIiwiY29udGVudCIsInAiLCJqb2luIiwibGluayIsImh5cGVybGluayIsImV4dGVybmFsTGlua0NvbnRlbnQiLCJleHRlcm5hbExpbmtUZXh0IiwidHJhbnNsYXRhYmxlU3RyaW5ncyIsInNvcnQiLCJhIiwiYiIsInQiLCJyZSIsIlJlZ0V4cCIsImVzY2FwZSIsImlzU3BpZGVyZmllZCIsIl9wcmVTcGlkZXJmeUxhdGxuZyIsIl9sYXllcnMiLCJsIiwidW5zcGlkZXJmeSIsIl9fcGFyZW50IiwidmFsdWVzIiwiX2dyb3VwIiwiX2ZlYXR1cmVHcm91cCIsIl9zcGlkZXJmaWVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImQiLCJvcGFjaXR5Iiwic3R5bGVQb2ludCIsImxhdGxuZyIsInBvaW50U3R5bGUiLCJDdXN0b21JY29uIiwiSWNvbiIsImV4dGVuZCIsImljb25BbmNob3IiLCJpY29uYW5jaG9yIiwibm9uUG9pbnRTdHlsZSIsImRpdkljb24iLCJ0aGlzRm9ybUtleVdpZGdldCIsInRoaXNDb2xvcktleVdpZGdldCIsImNsYXNzTmFtZSIsImh0bWwiLCJlbmNvZGVVUkkiLCJpY29uVXJsIiwibWFya2VyIiwic3R5bGVOb25Qb2ludCIsImZvcm1LZXlGb3JtIiwicmVkdWNlIiwiYyIsImNvbG9yS2V5Rm9ybSIsImYiLCJ3ZWlnaHQiLCJsaW5lQ2FwIiwiZGFzaEFycmF5IiwicGF0dGVybk9wdGlvbnMiLCJzcGFjZVdlaWdodCIsInNwYWNlQ29sb3IiLCJzcGFjZU9wYWNpdHkiLCJhbmdsZSIsIlN0cmlwZVBhdHRlcm4iLCJzaGFwZU9wdGlvbnMiLCJyYWRpdXMiLCJmaWxsIiwic3Ryb2tlIiwiZmlsbENvbG9yIiwiZmlsbE9wYWNpdHkiLCJzaGFwZSIsIlBhdHRlcm5DaXJjbGUiLCJ3aWR0aCIsImhlaWdodCIsIlBhdHRlcm4iLCJhZGRTaGFwZSIsImZpbGxQYXR0ZXJuIiwibGluZUNvbG9yIiwibGluZVdlaWdodCIsImxpbmVPcGFjaXR5IiwiZ2VvbWV0cnkiLCJicmlnaHRlbiIsIm1ha2VHZW9Kc29uT3B0aW9ucyIsImNvbG9yS2V5V2lkZ2V0cyIsImZvcm1LZXlXaWRnZXRzIiwib25FYWNoRmVhdHVyZSIsImJhY2tncm91bmRPcHRpb25zIiwicG9pbnRUb0xheWVyIiwiZm9yZWdyb3VuZE9wdGlvbnMiLCJtYWtlTGF5ZXJzIiwiZ2VvSnNvbk9wdGlvbnMiLCJjbHVzdGVyQ29sb3IiLCJjb2xvcktleXMiLCJ3aWRnZXQiLCJjb2xsZWN0aW9uTmFtZSIsImZlYXR1cmVzIiwiYWxsUG9pbnRzIiwiTWFya2VyQ2x1c3Rlckdyb3VwIiwic2hvd0NvdmVyYWdlT25Ib3ZlciIsInpvb21Ub0JvdW5kc09uQ2xpY2siLCJtYXhDbHVzdGVyUmFkaXVzIiwiY2x1c3RlcmRpc3RhbmNlIiwiaWNvbkNyZWF0ZUZ1bmN0aW9uIiwiY2x1c3RlciIsImdldENoaWxkQ291bnQiLCJoYXNMaW5lRmVhdHVyZXMiLCJzb21lIiwib3B0aW9uIiwibG9jYWxlQ29tcGFyZSIsImdlb0pzb24iLCJhZGRMYXllciIsImdldExheWVycyIsImUiLCJoYW5kbGVDbHVzdGVyQ2xpY2siLCJfbGVhZmxldF9pZCIsInNwaWRlcmZ5IiwiZ2V0QWxsQ2hpbGRNYXJrZXJzIiwibSIsImdldEVsZW1lbnQiLCJtYXBXaWRnZXRzVG9TdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGFibGVzIiwidGFibGUiLCJmZXRjaCIsImFwaWtleSIsInRoZW4iLCJyZXNwb25zZXMiLCJyZXNwb25zZSIsImpzb25zIiwiY29uY2F0IiwiZmVhdHVyZUdyb3VwcyIsImJveCIsIndpZGdldENvbnRlbnQiLCJDaG9pY2VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJlc2V0Iiwic2VsZWN0cyIsImNoZWNrcyIsInNlYXJjaCIsInRvZ2dsZSIsImlucHV0cyIsImluaXRpYWxpemVkIiwiaW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJmaXJlRXZlbnQiLCJtYXBfaWQiLCJ0cmFuc2xhdGFibGVOb2RlcyIsImVsIiwic2VsZWN0aW9ucyIsInBvc3NpYmxlQ2hlY2tzIiwibyIsIm5hbWUiLCJwb3NzaWJsZU9wdGlvbnMiLCJwb3NzaWJsZVF1ZXJpZXMiLCJxdWVyeSIsImJvb2wiLCJ3aXRoRGlhY3JpdGljcyIsIndpdGhvdXREaWFjcml0aWNzIiwibGF0aW5pc2UiLCJsYXllcnMiLCJncm91cGluZyIsIm1ha2VXaWRnZXRzIiwiYm94Q29udGVudCIsImxlZ2VuZERhdGEiLCJyZWZlcmVuY2UiLCJmZWVkIiwiZW50cnkiLCJmb3JtYXRXaWRnZXRzIiwidGl0bGUiLCJub2RlcyIsImxhYmVsVGV4dCIsIml0ZW1UZXh0Iiwib2Zmc2V0SGVpZ2h0IiwiZm9udFNpemUiLCJnZXRDb21wdXRlZFN0eWxlIiwib2Zmc2V0IiwidHJhbnNmb3JtIiwid2lkZ2V0Tm9kZXMiLCJkcm9wZG93bk9wdGlvbnMiLCJpbnN0cnVjdGlvbnMiLCJ3aWRnZXRUaXRsZSIsIm1ha2VEb2N1bWVudE5vZGVzIiwibmV3U2VjdGlvbkhUTUwiLCJsb2dvIiwiZGVzY3JpcHRpb24iLCJ0aXRsZWNhcmRjb250ZW50IiwiYm9keSIsIm5ld0RpYWxvZ0hUTUwiLCJ0aXRsZWNhcmR0aXRsZSIsIm92ZXJmbG93IiwiZGlhbG9nRWwiLCJnZXRFbGVtZW50QnlJZCIsIm1haW5FbCIsImRpYWxvZ1RyaWdnZXIiLCJkaWFsb2dCb3giLCJBMTF5RGlhbG9nIiwiZGlhbG9nIiwic2hvdyIsImRpc3BsYXkiLCJwcm9ncmFtIiwibWV0YUxvY2FsZU9HIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm1ldGFUeXBlT0ciLCJtZXRhV2lkdGhPRyIsIm1ldGFIZWlnaHRPRyIsIm1ldGFUd2l0dGVyQ2FyZE9HIiwibWV0YVRpdGxlT0ciLCJtZXRhVGl0bGVUd2l0dGVyIiwibWV0YURlc2NyaXB0aW9uT0ciLCJtZXRhRGVzY3JpcHRpb25Ud2l0dGVyIiwibWV0YUltYWdlT0ciLCJzY3JlZW5zaG90IiwibWV0YUltYWdlVHdpdHRlciIsImlubmVyVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImhyZWYiLCJ3ZWJzaXRlIiwiaW5pdFdpdGhTcHJlYWRzaGVldCIsImRhdGFVUkwiLCJnb29nbGVTaGVldCIsInR3b0RfcHJvcGVyaXRlcyIsImRlZmF1bHQiLCJtYXBJRCIsInJlZmVyZW5jZVNoZWV0cyIsInJlZmVyZW5jZVNoZWV0VVJMUyIsInUiLCJmb290ZXIiLCJmb290ZXJOb2RlIiwicGVuVWx0aW1hdGVOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwibG9jYXRpb24iLCJwYXJlbnQiLCJyZWZlcnJlciIsImV4ZWMiLCJsZWFmbGV0TG9hZGVkIiwicHJpbWFyeUpzRmlsZXMiLCJzZWNvbmRhcnlKc0ZpbGVzIiwiaGFuZGxlTG9hZExlYWZsZXQiLCJmaWxlIiwianNMaW5rIiwic3JjIiwib25sb2FkIiwiaW1wb3J0RmlsZXMiLCJtYWtlTWFwIiwic2NyaXB0c0xvYWRlZCIsImluaXQiLCJvY2VhbkNvbG9yIiwicmVxdWlyZSIsImluaXRXaXRob3V0U3ByZWFkc2hlZXQiLCJleGFtcGxlcyIsImxpbmtfdGl0bGUiLCJwb3J0IiwicG9ydF9jaXR5IiwicG9ydF9jb3VudHJ5IiwiaW52ZXN0bWVudF90eXBlIiwiciIsIm5ld01hcCIsImNob2tlcG9pbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwibWFwcyIsImNvdW50cnlEYXRhIiwiY291bnRyeSIsInRlcnJvcmlzbSIsImZvcmVpZ25fYXNzaXN0YW5jZSIsImFzc2lzdGFuY2UiLCJhaWQiLCJtYXBib3hTdHlsZSIsIm1vdXNlb3ZlciIsIm9wZW5Qb3B1cCIsIm1vdXNlb3V0IiwiY2xvc2VQb3B1cCIsInByZWZpeCIsIm91dHBvc3QiLCJjaGluZXNlX291dHBvc3RzIiwib2JzZXJ2ZWQiLCJzZXRUaW1lb3V0IiwibW9yZV9tYXBzIiwic2hlZXQiLCJmdWxsU2NyZWVuIiwidG90YWxfZ3VpZGVkX21pc3NpbGVfY3J1aXNlcnMiLCJibWRfY2FwYWJsZV9nbWMiLCJ0b3RhbF9ndWlkZWRfbWlzc2lsZV9kZXN0cm95ZXJzIiwicmVjb2duaXRpb24iLCJDdXN0b21FdmVudCIsImV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJpbml0Q3VzdG9tRXZlbnQiLCJwcm90b3R5cGUiLCJFdmVudCIsInByb3BlcnR5MSIsInByb3BlcnR5MiIsInZhbCIsInMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtB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QUFDaWQsR0FBRCxDQUFOLElBQWUsRUFBN0I7QUFDQWpkLFVBQU0sQ0FBQ2lkLEdBQUQsQ0FBTixDQUFZOWUsSUFBWixDQUFpQmtELElBQWpCO0FBQ0EsV0FBT3JCLE1BQVA7QUFDRCxHQUxDLEVBS0MsRUFMRCxDQURZLEdBT1osS0FBS2lOLE1BQUwsQ0FBWSxVQUFTak4sTUFBVCxFQUFpQnFCLElBQWpCLEVBQXVCO0FBQ25DLFFBQUk0YixHQUFHLEdBQUc1YixJQUFJLENBQUMwYixTQUFELENBQWQ7QUFDQS9jLFVBQU0sQ0FBQ2lkLEdBQUQsQ0FBTixHQUFjamQsTUFBTSxDQUFDaWQsR0FBRCxDQUFOLElBQWUsRUFBN0I7QUFDQWpkLFVBQU0sQ0FBQ2lkLEdBQUQsQ0FBTixDQUFZOWUsSUFBWixDQUFpQmtELElBQWpCO0FBQ0EsV0FBT3JCLE1BQVA7QUFDRCxHQUxDLEVBS0MsRUFMRCxDQVBKO0FBYUQsQ0FkRDs7QUFnQkE2SyxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsVUFBU29TLENBQVQsRUFBWTtBQUMxQixTQUFPQSxDQUFDLENBQUM5WixPQUFGLENBQVUsdUJBQVYsRUFBbUMsTUFBbkMsQ0FBUDtBQUNELENBRkQsQyIsImZpbGUiOiJtYWtlTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9yU2NhbGUoY291bnQsIGluZGV4KSB7XG4gIHZhciBzY2FsZU9uZSA9IGNocm9tYVxuICAgIC5jdWJlaGVsaXgoKVxuICAgIC5odWUoMC41KVxuICAgIC5saWdodG5lc3MoWzAuNCwgMC42XSlcbiAgICAuc2NhbGUoKVxuICAgIC5jb2xvcnMoY291bnQgKiAyKVxuICB2YXIgc2NhbGVUd28gPSBjaHJvbWFcbiAgICAuY3ViZWhlbGl4KClcbiAgICAuaHVlKDEpXG4gICAgLmdhbW1hKDAuNSlcbiAgICAuc2NhbGUoKVxuICAgIC5jb2xvcnMoY291bnQgKiAyKVxuICAgIC5yZXZlcnNlKClcbiAgdmFyIHNjYWxlID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICB2YXIgY29sb3IgPSBpICUgMiA9PT0gMCA/IHNjYWxlT25lW2kgKiAyXSA6IHNjYWxlVHdvW2kgKiAyXVxuICAgIGNvbG9yID0gY2hyb21hKGNvbG9yKVxuICAgICAgLnNhdHVyYXRlKClcbiAgICAgIC5oZXgoKVxuICAgIHNjYWxlLnB1c2goY29sb3IpXG4gIH1cblxuICByZXR1cm4gc2NhbGVcbn1cblxuZXhwb3J0IHZhciBsaW5lV2VpZ2h0cyA9IFtbMywgM10sIFs1LCAyXSwgWzQsIDMuNV0sIFs3LCAzXSwgWzQsIDRdXVxuZXhwb3J0IHZhciBsaW5lRGFzaEFycmF5cyA9IFtcbiAgW251bGwsICc2LDknXSxcbiAgW251bGwsIG51bGxdLFxuICBbbnVsbCwgJzYsMTInXSxcbiAgW251bGwsIG51bGxdLFxuICBbJzE4LDI0JywgJzE4LDI0J11cbl1cbmV4cG9ydCB2YXIgZXh0ZXJuYWxMaW5rID1cbiAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNVwiIHZpZXdCb3g9XCIwIDAgMTUgMTVcIj48cGF0aCBkPVwiTTcuNDksMFYxLjY3SDEuNjhWMTMuMzJIMTMuMzJWNy41MkgxNXY1LjcyYTEuNzYsMS43NiwwLDAsMS0uNDIsMS4xOSwxLjY0LDEuNjQsMCwwLDEtMS4xMy41NkgxLjc0YTEuNjcsMS42NywwLDAsMS0xLjE2LS40MUExLjYxLDEuNjEsMCwwLDEsMCwxMy40OHYtLjI3QzAsOS40LDAsNS42LDAsMS44QTEuODMsMS44MywwLDAsMSwuNTguNGExLjUzLDEuNTMsMCwwLDEsMS0uMzloNlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiLz48cGF0aCBkPVwiTTkuMTcsMS42N1YwSDE1VjUuODRIMTMuMzR2LTNoMGMtLjA1LjA1LS4xMS4xLS4xNi4xNmwtLjQ1LjQ2LTEuMywxLjI5LS44NC44NC0uODkuOS0uODguODctLjg5LjljLS4yOC4yOS0uNTcuNTctLjg2Ljg2TDYuMTYsMTBsLS44OC44N2ExLjgzLDEuODMsMCwwLDEtLjEzLjE2TDQsOS44NmwwLDBMNS4zNiw4LjQ3bC45NS0xLC43NS0uNzUsMS0xTDguODcsNWwxLS45NC44NS0uODYuOTItLjkxLjU2LS41OFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiLz48L3N2Zz4nXG5leHBvcnQgdmFyIHJlbW92ZSA9XG4gICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjEgMjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgZmlsbD1cIiMwMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyelwiLz48cGF0aCBkPVwiTTAgMTguMzY0TDE4LjM2NCAwbDIuNTQ4IDIuNTQ4TDIuNTQ4IDIwLjkxMnpcIi8+PC9nPjwvc3ZnPidcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUeXBlKHZhbHVlKSB7XG4gIHZhciB2ID0gTnVtYmVyKHZhbHVlKVxuICByZXR1cm4gIWlzTmFOKHYpXG4gICAgPyB2XG4gICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ251bGwnXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJ1xuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJ1xuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZCh1cmwsIGVsZW1lbnQpIHtcbiAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHJlcS5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKVxuICByZXEuc2VuZChudWxsKVxuICBlbGVtZW50LmlubmVySFRNTCA9IHJlcS5yZXNwb25zZVRleHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcm9wZG93bk9wdGlvbnMob3B0aW9ucywgeCkge1xuICB2YXIgZ3JvdXBzID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnZ3JvdXAnKVxuICB2YXIgY2hvaWNlcyA9IE9iamVjdC5rZXlzKGdyb3VwcykubWFwKGZ1bmN0aW9uKGcsIHopIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHosXG4gICAgICBsYWJlbDogZy50cmltKCkgJiYgcGFyc2VJbnQoZywgMTApID09PSBOYU4gPyBnIDogJycsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBjaG9pY2VzOiBncm91cHNbZ11cbiAgICB9XG4gIH0pXG4gIHJldHVybiB7XG4gICAgY2hvaWNlczogY2hvaWNlcyxcbiAgICByZW1vdmVJdGVtQnV0dG9uOiB0cnVlLFxuICAgIG1heEl0ZW1Db3VudDogb3B0aW9ucy53aWRnZXRzW3hdLm1heGltdW0sXG4gICAgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlczogZnVuY3Rpb24gY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcyh0ZW1wbGF0ZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpc1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpdGVtOiBmdW5jdGlvbiBpdGVtKGNsYXNzTmFtZXMsIGRhdGEpIHtcbiAgICAgICAgICB2YXIga2V5ID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZmluZChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gdi52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBkYXRhLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHZhciBrZXlTdHlsZVxuXG4gICAgICAgICAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGsudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG1hcmt1cCA9XG4gICAgICAgICAgICAnPGRpdiBzdHlsZT1cImJvcmRlci1jb2xvcjonICtcbiAgICAgICAgICAgIGtleS5jb2xvciArXG4gICAgICAgICAgICAnXCIgY2xhc3M9XCInICtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuaXRlbSArXG4gICAgICAgICAgICAnXCIgZGF0YS1pdGVtIGRhdGEtaWQ9XCInICtcbiAgICAgICAgICAgIGRhdGEuaWQgK1xuICAgICAgICAgICAgJ1wiIGRhdGEtdmFsdWU9XCInICtcbiAgICAgICAgICAgIGRhdGEudmFsdWUgK1xuICAgICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgICAgKGRhdGEuYWN0aXZlID8gJ2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCInIDogJycpICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAoZGF0YS5kaXNhYmxlZCA/ICdhcmlhLWRpc2FibGVkPVwidHJ1ZVwiJyA6ICcnKSArXG4gICAgICAgICAgICAnPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5jbGFzcyArXG4gICAgICAgICAgICAnS2V5XCIgJyArXG4gICAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5zdmcgK1xuICAgICAgICAgICAgJ1wiKT48L3NwYW4+ICcgK1xuICAgICAgICAgICAgY2FwaXRhbGl6ZShkYXRhLmxhYmVsKSArXG4gICAgICAgICAgICAnPGJ1dHRvbiBzdHlsZT1cImJvcmRlci1sZWZ0OiAxcHggc29saWQgJyArXG4gICAgICAgICAgICBrZXkuY29sb3IgK1xuICAgICAgICAgICAgJzsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgICB3aW5kb3cuYnRvYShyZW1vdmUpICtcbiAgICAgICAgICAgICdcXCcpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2hvaWNlc19fYnV0dG9uXCIgZGF0YS1idXR0b249XCJcIiBhcmlhLWxhYmVsPVwiUmVtb3ZlIGl0ZW1cIj5SZW1vdmUgaXRlbTwvYnV0dG9uPjwvZGl2PidcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGUobWFya3VwKVxuICAgICAgICB9LFxuICAgICAgICBjaG9pY2U6IGZ1bmN0aW9uIGNob2ljZShjbGFzc05hbWVzLCBkYXRhKSB7XG4gICAgICAgICAgdmFyIGtleSA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmZpbmQoZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHYudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZGF0YS52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICB2YXIga2V5U3R5bGVcblxuICAgICAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgICAgIHZhciBmb3JtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICAgIHJldHVybiBrLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG1hcmt1cCA9XG4gICAgICAgICAgICAnIDxkaXYgY2xhc3M9XCInICtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuaXRlbSArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5pdGVtQ2hvaWNlICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAoZGF0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICA/IGNsYXNzTmFtZXMuaXRlbURpc2FibGVkXG4gICAgICAgICAgICAgIDogY2xhc3NOYW1lcy5pdGVtU2VsZWN0YWJsZSkgK1xuICAgICAgICAgICAgJ1wiIGRhdGEtc2VsZWN0LXRleHQ9XCInICtcbiAgICAgICAgICAgIF90aGlzLmNvbmZpZy5pdGVtU2VsZWN0VGV4dCArXG4gICAgICAgICAgICAnXCIgZGF0YS1jaG9pY2UgJyArXG4gICAgICAgICAgICAoZGF0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICA/ICdkYXRhLWNob2ljZS1kaXNhYmxlZCBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiJ1xuICAgICAgICAgICAgICA6ICdkYXRhLWNob2ljZS1zZWxlY3RhYmxlJykgK1xuICAgICAgICAgICAgJyBkYXRhLWlkPVwiJyArXG4gICAgICAgICAgICBkYXRhLmlkICtcbiAgICAgICAgICAgICdcIiBkYXRhLXZhbHVlPVwiJyArXG4gICAgICAgICAgICBkYXRhLnZhbHVlICtcbiAgICAgICAgICAgICdcIiAnICtcbiAgICAgICAgICAgIChkYXRhLmdyb3VwSWQgPiAwID8gJ3JvbGU9XCJ0cmVlaXRlbVwiJyA6ICdyb2xlPVwib3B0aW9uXCInKSArXG4gICAgICAgICAgICAnPiA8c3BhbiBjbGFzcz1cIicgK1xuICAgICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICAgJ0tleVwiICcgK1xuICAgICAgICAgICAgJ3N0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJycgK1xuICAgICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAgICdcIik+PC9zcGFuPiAnICtcbiAgICAgICAgICAgIGNhcGl0YWxpemUoZGF0YS5sYWJlbCkgK1xuICAgICAgICAgICAgJyA8L2Rpdj4gJ1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZShtYXJrdXApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnZlcnRUeXBlLCBjcmVhdGVDb2xvclNjYWxlIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW5ndWFnZURhdGEoZGF0YSkge1xuICB2YXIgbGFuZ3VhZ2VEYXRhID0ge31cbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgIHZhciBrZXlcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCBpKSB7XG4gICAgICBpZiAoY29sdW1uLmluZGV4T2YoJ2dzeCQnKSA+IC0xKSB7XG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnJlcGxhY2UoJ2dzeCQnLCAnJylcblxuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gJ2VuJykge1xuICAgICAgICAgIGtleSA9IHJvd1tjb2x1bW5dWyckdCddXG4gICAgICAgICAgbGFuZ3VhZ2VEYXRhW2tleV0gPSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09IGxhbmcpIHtcbiAgICAgICAgICBsYW5ndWFnZURhdGFba2V5XSA9IHJvd1tjb2x1bW5dWyckdCddXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICByZXR1cm4gbGFuZ3VhZ2VEYXRhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxlZ2VuZERhdGEob3B0aW9ucywganNvbiwgc3R5bGUpIHtcbiAgdmFyIGNvbG9yU2NhbGUgPSBjcmVhdGVDb2xvclNjYWxlKGpzb24ubGVuZ3RoKVxuICB2YXIgbGVnZW5kSXRlbXMgPSBbXVxuICBqc29uLmZvckVhY2goZnVuY3Rpb24ocm93LCB4KSB7XG4gICAgdmFyIGRhdGEgPSB7fVxuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2x1bW4sIHkpIHtcbiAgICAgIGlmIChjb2x1bW4uaW5kZXhPZignZ3N4JCcpID4gLTEpIHtcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4ucmVwbGFjZSgnZ3N4JCcsICcnKVxuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSAnbGFiZWwnKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHJvd1tjb2x1bW5dWyckdCddLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICBkYXRhLmtleSA9IGtleVxuICAgICAgICAgIGRhdGEubGFiZWwgPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgMF1dWyckdCddXG4gICAgICAgICAgZGF0YS52YWx1ZSA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAxXV1bJyR0J11cbiAgICAgICAgICBkYXRhLmdyb3VwID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDJdXVsnJHQnXSlcbiAgICAgICAgICBkYXRhLnNlbGVjdGVkID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDNdXVsnJHQnXSlcbiAgICAgICAgICB2YXIgY29sb3JWYWwgPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNF1dWyckdCddXG4gICAgICAgICAgZGF0YS5mb3JtID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDVdXVsnJHQnXVxuICAgICAgICAgIGRhdGEuY29sb3IgPSBjb2xvclZhbFxuICAgICAgICAgICAgPyBjb2xvclZhbFxuICAgICAgICAgICAgOiBkYXRhLmZvcm0gPT09ICdsaW5lJ1xuICAgICAgICAgICAgICA/IGRlZmF1bHRDb2xvclxuICAgICAgICAgICAgICA6IGNvbG9yU2NhbGVbeF1cbiAgICAgICAgICBkYXRhLmljb24gPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNl1dWyckdCddXG4gICAgICAgICAgZGF0YS5wYXR0ZXJuID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDddXVsnJHQnXS5zcGxpdCgnLCcpXG5cbiAgICAgICAgICBpZiAob3B0aW9ucy50cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIGRhdGEubGFiZWwgPSBvcHRpb25zLnRyYW5zbGF0aW9uc1tkYXRhLmxhYmVsXVxuICAgICAgICAgICAgZGF0YS5ncm91cCA9IG9wdGlvbnMudHJhbnNsYXRpb25zW2RhdGEuZ3JvdXBdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVnZW5kSXRlbXMucHVzaChkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIGxlZ2VuZEl0ZW1zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1ldGFEYXRhKGpzb24pIHtcbiAgdmFyIGRhdGEgPSB7fVxuICBqc29uLmZvckVhY2goZnVuY3Rpb24ocm93LCB4KSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgeSkge1xuICAgICAgaWYgKGNvbHVtbi5pbmRleE9mKCdnc3gkJykgPiAtMSkge1xuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5yZXBsYWNlKCdnc3gkJywgJycpXG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgICB2YXIga2V5ID0gcm93W2NvbHVtbl1bJyR0J10udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKVxuICAgICAgICAgIGRhdGFba2V5XSA9IGRhdGFba2V5XSB8fCB7fVxuICAgICAgICAgIGRhdGFba2V5XSA9IGNvbnZlcnRUeXBlKHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAxXV1bJyR0J10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VXaWRnZXREYXRhKG1ldGFEYXRhKSB7XG4gIHZhciB3aWRnZXRzID0gW11cblxuICBmdW5jdGlvbiBwcm9jZXNzKGssIGluZGV4LCBwcm9wZXJ0eSkge1xuICAgIGlmIChrLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwcm9wZXJ0eSkgPiAtMSlcbiAgICAgIHdpZGdldHNbaW5kZXggLSAxXVtwcm9wZXJ0eV0gPSBjb252ZXJ0VHlwZShtZXRhRGF0YVtrXSlcbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0gW1xuICAgICdpbnB1dCcsXG4gICAgJ2ZpZWxkJyxcbiAgICAnZ3JvdXBpbmcnLFxuICAgICdpbnN0cnVjdGlvbnMnLFxuICAgICdtYXhpbXVtJyxcbiAgICAndHlwZScsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3N0eWxlJ1xuICBdXG4gIE9iamVjdC5rZXlzKG1ldGFEYXRhKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuIGsudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aWRnZXQnKSA+IC0xXG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIgaW5kZXggPSBrLm1hdGNoKC9cXGQrLylbMF1cbiAgICAgIHdpZGdldHNbaW5kZXggLSAxXSA9IHdpZGdldHNbaW5kZXggLSAxXSB8fCB7fVxuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgICAgIHByb2Nlc3MoaywgaW5kZXgsIHByb3BlcnR5KVxuICAgICAgfSlcbiAgICB9KVxuICB3aWRnZXRzLmZvckVhY2goZnVuY3Rpb24odywgaSkge1xuICAgIHcuZmllbGQgPSB3LmZpZWxkLnJlcGxhY2UoLyAvZywgJ18nKVxuICAgIHcuaWQgPSBpXG4gIH0pXG4gIHJldHVybiB3aWRnZXRzXG59XG4iLCJpbXBvcnQgeyBjYXBpdGFsaXplLCBsb2FkLCBsaW5lV2VpZ2h0cywgbGluZURhc2hBcnJheXMgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlS2V5KG9wdGlvbnMpIHtcbiAgdmFyIG1hcCA9IG9wdGlvbnMubWFwLFxuICAgIGZlYXR1cmUgPSBvcHRpb25zLmZlYXR1cmUsXG4gICAgZ3JvdXAgPSBvcHRpb25zLmdyb3VwLFxuICAgIGtleSA9IG9wdGlvbnMua2V5LFxuICAgIGluZGV4ID0gb3B0aW9ucy5pbmRleCxcbiAgICBmb3JtcyA9IG9wdGlvbnMuZm9ybXMsXG4gICAgaWNvblNpemUgPSBtYXAuaWNvbnNpemUsXG4gICAgZGl2aWRlcnMgPSBpY29uU2l6ZS5tYXAoc2l6ZSA9PiBzaXplIC8gMTIpXG5cbiAgdmFyIGNvbG9ycywga2V5Q29sb3JcbiAgdmFyIGtleSA9IGdyb3VwID8gZ3JvdXBbMF0gOiBrZXlcblxuICBmb3IgKGxldCB3IG9mIG1hcC53aWRnZXRzKSB7XG4gICAgdmFyIGZvcm1LZXlXaWRnZXQgPSB3LnR5cGUgPT09ICdmb3JtJyA/IHcgOiBudWxsXG4gICAgdmFyIGNvbG9yS2V5V2lkZ2V0ID0gdy50eXBlID09PSAnY29sb3InID8gdyA6IG51bGxcblxuICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICB2YXIgY29sb3JLZXkgPSBjb2xvcktleVdpZGdldFxuICAgICAgICA/IGNvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICB2YXIgZm9ybUtleSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgICAgPyBmb3JtS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSlcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGtleUNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGZvcm1LZXkgPyBmb3JtS2V5LmNvbG9yIDogbnVsbFxuXG4gICAgICBpY29uU2l6ZSA9IGljb25TaXplLm1hcChzaXplID0+IHNpemUgLyAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBpY29uU2l6ZSA9IGljb25TaXplLm1hcCgoc2l6ZSwgaSkgPT4gc2l6ZSAvIGRpdmlkZXJzW2ldKVxuICAgIH1cblxuICAgIGtleS5jb2xvciA9XG4gICAgICBncm91cCAmJlxuICAgICAgZ3JvdXAuZXZlcnkoZnVuY3Rpb24oZykge1xuICAgICAgICByZXR1cm4gZy5jb2xvclxuICAgICAgfSlcbiAgICAgICAgPyBjaHJvbWEuYXZlcmFnZShcbiAgICAgICAgICBncm91cC5tYXAoZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgcmV0dXJuIGcuY29sb3JcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIDoga2V5LmNvbG9yXG5cbiAgICBzd2l0Y2ggKGtleS5mb3JtKSB7XG4gICAgY2FzZSAnbGluZSc6XG4gICAgICBrZXlDb2xvciA9IGtleS5jb2xvclxuICAgICAgICA/IGtleS5jb2xvclxuICAgICAgICA6IG9wdGlvbnMubWFwLm9jZWFuY29sb3JcbiAgICAgICAgICA/IG9wdGlvbnMubWFwLm9jZWFuY29sb3JcbiAgICAgICAgICA6IG51bGxcblxuICAgICAgaWYgKGZvcm1zICYmIGZvcm1zLmxlbmd0aCkge1xuICAgICAgICB2YXIgc3ZnXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKVxuICAgICAgICAgIF1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKCksXG4gICAgICAgICAgICAnI2ZmZmZmZidcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29sb3JzID0gWycjMDAwMDAwJywga2V5Q29sb3IgPyBrZXlDb2xvciA6IGRlZmF1bHRDb2xvcl1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICAnI2ZmZmZmZicsXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKClcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKVxuICAgICAgICAgIF1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVxcJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFwnIHZpZXdCb3g9XFwnMCAwIDQ4IDEyXFwnPjxsaW5lIHgxPVxcJzBcXCcgeDI9XFwnNDhcXCcgeTE9XFwnNTAlXFwnIHkyPVxcJzUwJVxcJyBzdHJva2U9XFwnJyArXG4gICAgICAgICAgICBjb2xvcnNbMF0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2Utd2lkdGg9XFwnJyArXG4gICAgICAgICAgICBsaW5lV2VpZ2h0c1tpbmRleF1bMF0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2UtbGluZWNhcD1cXCdzcXVhcmVcXCcgc3Ryb2tlLWRhc2hhcnJheT1cXCcnICtcbiAgICAgICAgICAgIChpbmRleCA9PT0gNCA/ICcxOCwxMicgOiBsaW5lRGFzaEFycmF5c1tpbmRleF1bMF0pICtcbiAgICAgICAgICAgICdcXCcvPjxsaW5lIHgxPVxcJzBcXCcgeDI9XFwnNDhcXCcgeTE9XFwnNTAlXFwnIHkyPVxcJzUwJVxcJyBzdHJva2U9XFwnJyArXG4gICAgICAgICAgICBjb2xvcnNbMV0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2Utd2lkdGg9XFwnJyArXG4gICAgICAgICAgICBsaW5lV2VpZ2h0c1tpbmRleF1bMV0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2UtbGluZWNhcD1cXCdzcXVhcmVcXCcgc3Ryb2tlLWRhc2hhcnJheT1cXCcnICtcbiAgICAgICAgICAgIChpbmRleCA9PT0gNCA/ICcxOCwxMicgOiBsaW5lRGFzaEFycmF5c1tpbmRleF1bMV0pICtcbiAgICAgICAgICAgICdcXCcvPjwvc3ZnPidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAnPHN2ZyB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJyB2aWV3Qm94PVxcJzAgMCA0OCAxMlxcJz48bGluZSB4MT1cXCcwXFwnIHgyPVxcJzQ4XFwnIHkxPVxcJzUwJVxcJyB5Mj1cXCc1MCVcXCcgc3Ryb2tlPVxcJycgK1xuICAgICAgICAgICAga2V5Q29sb3IgK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2Utd2lkdGg9XFwnJyArXG4gICAgICAgICAgICAzICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLWxpbmVjYXA9XFwnc3F1YXJlXFwnIHN0cm9rZS1kYXNoYXJyYXk9XFwnJyArXG4gICAgICAgICAgICAnMyw3JyArXG4gICAgICAgICAgICAnXFwnLz48L3N2Zz4nXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2ZzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHN2ZyksXG4gICAgICAgIGNsYXNzOiAnbGluZSdcbiAgICAgIH1cblxuICAgIGNhc2UgJ2ljb24nOlxuICAgICAgaWYgKGtleS5pY29uKSB7XG4gICAgICAgIHZhciBzbHVnID0ga2V5LnZhbHVlLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgICBsb2FkKGtleS5pY29uLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuJykpXG4gICAgICAgIHZhciBzdmdDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGRlbicpLmlubmVySFRNTFxuXG4gICAgICAgIGlmIChjb2xvcktleVdpZGdldCAmJiBrZXlDb2xvcikge1xuICAgICAgICAgIHN2Z0NvbnRlbnQgPSBzdmdDb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAvKChcXGJmaWxsPVwiIykoKFswLWEtZkEtRl17Mn0pezN9fChbMC05YS1mQS1GXSl7M30pXCIpL2dpLFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApXG4gICAgICAgICAgc3ZnQ29udGVudCA9IHN2Z0NvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgIC8oPGNpcmNsZSB8PHJlY3RhbmdsZSB8PGVsbGlwc2UgfDxwb2x5Z29uIHw8cGF0aCApL2csXG4gICAgICAgICAgICBmdW5jdGlvbihtYXRjaCwgcDEsIHAyLCBwMykge1xuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2gucmVwbGFjZShtYXRjaCwgbWF0Y2ggKyAnZmlsbD1cIicgKyBrZXlDb2xvciArICdcIiAnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmdDb250ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgK1xuICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiJyArXG4gICAgICAgICAgICAgICAgaWNvblNpemVbMF0gLyAyICtcbiAgICAgICAgICAgICAgICAnXCIgY3k9XCInICtcbiAgICAgICAgICAgICAgICBpY29uU2l6ZVsxXSAvIDIgK1xuICAgICAgICAgICAgICAgICdcIiByPVwiJyArXG4gICAgICAgICAgICAgICAgKGljb25TaXplWzBdICsgaWNvblNpemVbMV0pIC8gNCArXG4gICAgICAgICAgICAgICAgJ1wiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAoa2V5Q29sb3IgfHwga2V5LmNvbG9yKSArXG4gICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICBjbGFzczoga2V5Lmljb24gPyAnaWNvbicgOiAnY29sb3InXG4gICAgICB9XG5cbiAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGtleUNvbG9yID0ga2V5LmNvbG9yXG4gICAgICB2YXIgc3ZnXG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBrZXkucGF0dGVyblswXS5pbmRleE9mKCdzdHJpcGUnKSA+IC0xOlxuICAgICAgICB2YXIgY29sb3JUd28gPSBrZXkucGF0dGVyblsxXVxuICAgICAgICB2YXIgY29sb3JPbmUgPSBrZXkucGF0dGVybltrZXkucGF0dGVybi5sZW5ndGggLSAxXVxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIj48cG9seWdvbiBwb2ludHM9XCI1LjczIDAgNC42NyAwIDAgNC42NiAwIDUuNzEgNS43MyAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIyLjI4IDAgMS4yMiAwIDAgMS4yMiAwIDIuMjcgMi4yOCAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCI4Ljg1IDAgNy43OSAwIDAgNy43NyAwIDguODIgOC44NSAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiAwIDExLjI0IDAgMCAxMS4yIDAgMTIgMC4yNiAxMiAxMiAwLjMgMTIgMFwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yT25lICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTIgMTAuMTIgMTIgOS4wNiA5LjA1IDEyIDEwLjExIDEyIDEyIDEwLjEyXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiAzLjUyIDEyIDIuNDYgMi40MyAxMiAzLjQ5IDEyIDEyIDMuNTJcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvclR3byArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEyIDYuOTYgMTIgNS45IDUuODggMTIgNi45NCAxMiAxMiA2Ljk2XCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBrZXkucGF0dGVyblswXS5pbmRleE9mKCdkb3QnKSA+IC0xOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTMuMDZcIiBoZWlnaHQ9XCIxNS4xXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiPjx0aXRsZT5zdHJpcGVzPC90aXRsZT48cGF0aCBkPVwiTTUuNDksMUExLjE2LDEuMTYsMCwxLDEsNC4zMy0uMTYsMS4xNiwxLjE2LDAsMCwxLDUuNDksMVpNNC4zMywzLjc3QTEuMTYsMS4xNiwwLDEsMCw1LjQ5LDQuOTMsMS4xNSwxLjE1LDAsMCwwLDQuMzMsMy43N1ptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCw1LjQ5LDguODYsMS4xNSwxLjE1LDAsMCwwLDQuMzMsNy43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE1LDEuMTUsMCwwLDAsNC4zMywxMS42M1pNMTEuNS0uMTZBMS4xNiwxLjE2LDAsMSwwLDEyLjY2LDEsMS4xNiwxLjE2LDAsMCwwLDExLjUtLjE2Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsMTEuNSwzLjc3Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsMTEuNSw3LjdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTYsMS4xNiwwLDAsMCwxMS41LDExLjYzWk03LjkyLTEuMTZBMS4xNiwxLjE2LDAsMCwwLDYuNzYsMCwxLjE2LDEuMTYsMCwwLDAsNy45MiwxLjE2LDEuMTYsMS4xNiwwLDAsMCw5LjA3LDAsMS4xNiwxLjE2LDAsMCwwLDcuOTItMS4xNlptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCw5LjA3LDMuOTMsMS4xNiwxLjE2LDAsMCwwLDcuOTIsMi43N1ptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCw5LjA3LDcuODYsMS4xNiwxLjE2LDAsMCwwLDcuOTIsNi43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTUsMS4xNkExLjE2LDEuMTYsMCwwLDAsNy45MiwxMC42M1pNLjc1LTEuMTZBMS4xNiwxLjE2LDAsMCwwLS40MSwwLDEuMTYsMS4xNiwwLDAsMCwuNzUsMS4xNiwxLjE2LDEuMTYsMCwwLDAsMS45MSwwLDEuMTYsMS4xNiwwLDAsMCwuNzUtMS4xNlptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCwxLjkxLDMuOTMsMS4xNiwxLjE2LDAsMCwwLC43NSwyLjc3Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMCwwLS40MSw3Ljg2LDEuMTUsMS4xNSwwLDAsMCwuNzUsOSwxLjE1LDEuMTUsMCwwLDAsMS45MSw3Ljg2LDEuMTYsMS4xNiwwLDAsMCwuNzUsNi43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsLjc1LDEwLjYzWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjcgMilcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvck9uZSArXG4gICAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgKVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBrZXlDb2xvciArXG4gICAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgY2xhc3M6IGtleS5wYXR0ZXJuID8gJ3BhdHRlcm4nIDogJ2NvbG9yJ1xuICAgICAgfVxuXG4gICAgY2FzZSAnc2hhcGUnOlxuICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGNvbG9yS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICAgICAgICB9KVxuICAgICAgICB2YXIgY29sb3JLZXkgPSBjb2xvcktleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAga2V5Q29sb3IgPSBjb2xvcktleSA/IGNvbG9yS2V5LmNvbG9yIDoga2V5Q29sb3IgPyBrZXlDb2xvciA6IG51bGxcbiAgICAgIH1cblxuICAgICAgdmFyIHN2Z1xuXG4gICAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgIHkxPVwiNC41XCIgeDI9XCI5XCIgeTI9XCI0LjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjUgLTQuNSkgcm90YXRlKDEzNSlcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PHN0b3Agb2Zmc2V0PVwiMC4zMjVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjY3NVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PVwiMy4yNVwiIHk9XCIxLjc1XCIgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiOVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjUgLTQuNSkgcm90YXRlKDQ1KVwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAncGFpbnQtb3JkZXI9XCJzdHJva2VcIiBzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIiAvPjwvc3ZnPidcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwicmFpbmJvd1wiIHkxPVwiNVwiIHgyPVwiMTBcIiB5Mj1cIjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMzOTY5YWNcIi8+PHN0b3Agb2Zmc2V0PVwiMC4yNVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNzVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/ICdzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgeTE9XCI1XCIgeDI9XCIxMFwiIHkyPVwiNVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48c3RvcCBvZmZzZXQ9XCIwLjMyNVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwb2x5Z29uIHBvaW50cz1cIjYgMTAuMzkgMCAxMC4zOSAzIDUuMiA2IDAgOSA1LjIgMTIgMTAuMzkgNiAxMC4zOVwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAncGFpbnQtb3JkZXI9XCJzdHJva2VcIiBzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIiAvPjwvc3ZnPidcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cInJhaW5ib3dcIiB5MT1cIjVcIiB4Mj1cIjEwXCIgeTI9XCI1XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjMzk2OWFjXCIvPjxzdG9wIG9mZnNldD1cIjAuMjVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiAnICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8gJ3N0cm9rZT1cIiNmZmZmZmZcIicgOiAnJykgK1xuICAgICAgICAgICAgICAnIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8ga2V5Q29sb3IgOiAndXJsKCNyYWluYm93KScpICtcbiAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2ZzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHN2ZyksXG4gICAgICAgIGNsYXNzOiAnc2hhcGUnXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAga2V5Q29sb3IgPSBrZXkuY29sb3JcblxuICAgICAgc3ZnID1cbiAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiJyArXG4gICAgICAgICAgICAgIGljb25TaXplWzBdIC8gMiArXG4gICAgICAgICAgICAgICdcIiBjeT1cIicgK1xuICAgICAgICAgICAgICBpY29uU2l6ZVsxXSAvIDIgK1xuICAgICAgICAgICAgICAnXCIgcj1cIicgK1xuICAgICAgICAgICAgICAoaWNvblNpemVbMF0gKyBpY29uU2l6ZVsxXSkgLyA0ICtcbiAgICAgICAgICAgICAgJ1wiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yIHx8IGtleS5jb2xvcikgK1xuICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICApXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgY2xhc3M6ICdjb2xvcidcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsInZhciBtYXBJZCA9IDBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tTWFwKGNvbnRhaW5lciwgcHJvcGVydGllcykge1xuICB0aGlzLmlkID0gbWFwSWQrK1xuICB0aGlzLmZpbHRlcnMgPSBbXVxuICB0aGlzLmdyb3VwcyA9IFtdXG4gIHRoaXMuanNvbiA9IFtdXG4gIHRoaXMubGVhZmxldFxuXG4gIHZhciBfdGhpcyA9IHRoaXNcblxuICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgX3RoaXNbcHJvcGVydHkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XVxuICB9KVxuICBfdGhpcy5wb3B1cGNvbnRlbnQgPVxuICAgIF90aGlzLnBvcHVwY29udGVudCAmJiB0eXBlb2YgX3RoaXMucG9wdXBjb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgPyBfdGhpcy5wb3B1cGNvbnRlbnQuc3BsaXQoJywnKVxuICAgICAgOiBfdGhpcy5wb3B1cGNvbnRlbnQgJiYgdGhpcy5wb3B1cGNvbnRlbnQgPT09ICdvYmplY3QnXG4gICAgICAgID8gX3RoaXMucG9wdXBjb250ZW50XG4gICAgICAgIDogW11cbiAgX3RoaXMucG9wdXBoZWFkZXJzID1cbiAgICBfdGhpcy5wb3B1cGhlYWRlcnMgJiYgdHlwZW9mIF90aGlzLnBvcHVwaGVhZGVycyA9PT0gJ3N0cmluZydcbiAgICAgID8gX3RoaXMucG9wdXBoZWFkZXJzLnNwbGl0KCcsJylcbiAgICAgIDogX3RoaXMucG9wdXBoZWFkZXJzICYmIF90aGlzLnBvcHVwaGVhZGVycyA9PT0gJ29iamVjdCdcbiAgICAgICAgPyBfdGhpcy5wb3B1cGhlYWRlcnNcbiAgICAgICAgOiBbXVxuICBDdXN0b21NYXAuYWxsID0gQ3VzdG9tTWFwLmFsbCB8fCBbXVxuICBDdXN0b21NYXAuYWxsLnB1c2godGhpcylcblxuICBfdGhpcy5yZXNldEZpbHRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcy5maWx0ZXJzID0gW11cbiAgfVxuXG4gIF90aGlzLnJlbW92ZUdyb3VwcyA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzLmdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICBfdGhpcy5sZWFmbGV0LnJlbW92ZUxheWVyKGdyb3VwKVxuICAgIH0pXG5cbiAgICBfdGhpcy5ncm91cHMgPSBbXVxuICB9XG5cbiAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcy5sZWFmbGV0ID0gTC5tYXAoY29udGFpbmVyLCB7XG4gICAgICBtaW5ab29tOiBfdGhpcy5taW56b29tIHx8IG51bGwsXG4gICAgICBtYXhab29tOiBfdGhpcy5tYXh6b29tIHx8IDIwLFxuICAgICAgbWF4Qm91bmRzOiBfdGhpcy5tYXhib3VuZHMgfHwgW190aGlzLnN3Ym91bmRzLCBfdGhpcy5uZWJvdW5kc10sXG4gICAgICBzY3JvbGxXaGVlbFpvb206IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ID8gZmFsc2UgOiB0cnVlLFxuICAgICAgem9vbUNvbnRyb2w6XG4gICAgICAgICFfdGhpcy5oYXNPd25Qcm9wZXJ0eSgnem9vbXNsaWRlcicpIHx8IF90aGlzLnpvb21zbGlkZXIgPyBmYWxzZSA6IHRydWUsXG4gICAgICBhdHRyaWJ1dGlvbkNvbnRyb2w6IGZhbHNlXG4gICAgfSlcblxuICAgIGlmIChfdGhpcy5sb2FkRXZlbnQpIF90aGlzLmxlYWZsZXQub24oJ2xvYWQnLCBfdGhpcy5sb2FkZXZlbnQpXG4gICAgaWYgKF90aGlzLmFkZEV2ZW50KSBfdGhpcy5sZWFmbGV0Lm9uKCdsYXllcmFkZCcsIF90aGlzLmFkZGV2ZW50KVxuICAgIHRoaXMubGVhZmxldC5zZXRWaWV3KF90aGlzLmNlbnRlciwgX3RoaXMuem9vbSB8fCAyKVxuICAgIEwudGlsZUxheWVyKFxuICAgICAgJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL2lsYWJtZWRpYS8nICtcbiAgICAgICAgX3RoaXMubWFwYm94c3R5bGUgK1xuICAgICAgICAnL3RpbGVzLzI1Ni97en0ve3h9L3t5fT9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lhV3hoWW0xbFpHbGhJaXdpWVNJNkltTnBiSFl5Y1haMmJUQXhhaloxYzJ0emRXVTFiM2d5ZG5ZaWZRLkFIeGw4cFBac2pzcW96OTUtNjA0bncnLFxuICAgICAge31cbiAgICApLmFkZFRvKF90aGlzLmxlYWZsZXQpXG5cbiAgICBpZiAoIV90aGlzLmhhc093blByb3BlcnR5KCd6b29tc2xpZGVyJykgfHwgX3RoaXMuem9vbXNsaWRlcikge1xuICAgICAgTC5jb250cm9sLnpvb21zbGlkZXIoKS5hZGRUbyhfdGhpcy5sZWFmbGV0KVxuICAgIH1cblxuICAgIGlmIChfdGhpcy5mdWxsc2NyZWVuKSB7XG4gICAgICB3aW5kb3cuZnVsbHNjcmVlbiA9IG5ldyBMLkNvbnRyb2wuRnVsbHNjcmVlbigpXG5cbiAgICAgIF90aGlzLmxlYWZsZXQuYWRkQ29udHJvbCh3aW5kb3cuZnVsbHNjcmVlbilcbiAgICB9XG5cbiAgICBMLmNvbnRyb2xcbiAgICAgIC5hdHRyaWJ1dGlvbih7XG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tbGVmdCdcbiAgICAgIH0pXG4gICAgICAuc2V0UHJlZml4KF90aGlzLmF0dHJpYnV0aW9uKVxuICAgICAgLmFkZFRvKF90aGlzLmxlYWZsZXQpXG5cbiAgICBfdGhpcy5yZXNldEZpbHRlcnMoKVxuXG4gICAgcmV0dXJuIF90aGlzXG4gIH1cbn1cbiIsImltcG9ydCB7IGV4dGVybmFsTGluayB9IGZyb20gJy4vaGVscGVycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRmVhdHVyZUV2ZW50cyhmZWF0dXJlLCBsYXllciwgbWFwKSB7XG4gIHZhciBldmVudE9wdGlvbnMgPSBtYXAub25lYWNoZmVhdHVyZVxuICAgID8gbWFwLm9uZWFjaGZlYXR1cmVcbiAgICA6IHtcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljaygpIHtcbiAgICAgICAgaGFuZGxlTGF5ZXJDbGljayhmZWF0dXJlLCBsYXllciwgbWFwLmxlYWZsZXQpXG4gICAgICB9XG4gICAgfVxuXG4gIE9iamVjdC5rZXlzKGV2ZW50T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIGxheWVyLm9uKGxpc3RlbmVyLCBldmVudE9wdGlvbnNbbGlzdGVuZXJdKVxuICB9KVxuXG4gIHZhciBwb3B1cENvbnRlbnQgPVxuICAgIHR5cGVvZiBtYXAuZm9ybWF0cG9wdXBjb250ZW50ID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG1hcC5mb3JtYXRwb3B1cGNvbnRlbnQoZmVhdHVyZSwgbWFwKVxuICAgICAgOiBmb3JtYXRQb3B1cENvbnRlbnQoZmVhdHVyZSwgbWFwKVxuICBsYXllci5iaW5kUG9wdXAocG9wdXBDb250ZW50KVxufVxuXG5mdW5jdGlvbiBmb3JtYXRQb3B1cENvbnRlbnQoZmVhdHVyZSwgbWFwKSB7XG4gIHZhciBjb250ZW50XG4gIGNvbnRlbnQgPSBPYmplY3Qua2V5cyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgLm1hcChmdW5jdGlvbihwKSB7XG4gICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzW3BdKSB7XG4gICAgICAgIGlmIChtYXAucG9wdXBoZWFkZXJzLmxlbmd0aCAmJiBtYXAucG9wdXBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBtYXAucG9wdXBoZWFkZXJzLmluZGV4T2YocCkgPiAtMSAmJlxuICAgICAgICAgICAgbWFwLnBvcHVwY29udGVudC5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgID8gJzxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgcC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbcF0gK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICA6IG1hcC5wb3B1cGNvbnRlbnQuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICAgID8gJzxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbcF0gK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgfSBlbHNlIGlmIChtYXAucG9wdXBoZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBtYXAucG9wdXBoZWFkZXJzLmluZGV4T2YocCkgPiAtMVxuICAgICAgICAgICAgPyAnPGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj4nICtcbiAgICAgICAgICAgICAgICBwLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnICcpICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1twXSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfSBlbHNlIGlmIChtYXAucG9wdXBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBtYXAucG9wdXBjb250ZW50LmluZGV4T2YocCkgPiAtMVxuICAgICAgICAgICAgPyAnPGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgKyBmZWF0dXJlLnByb3BlcnRpZXNbcF0gKyAnPC9kaXY+J1xuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj4nICtcbiAgICAgICAgICAgIHAudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykgK1xuICAgICAgICAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICtcbiAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1twXSArXG4gICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICByZXR1cm4gcFxuICAgIH0pXG4gICAgLmpvaW4oJycpXG4gIHZhciBsaW5rID0gZmVhdHVyZS5wcm9wZXJ0aWVzLmh5cGVybGluayB8fCBmZWF0dXJlLnByb3BlcnRpZXMubGlua1xuICB2YXIgZXh0ZXJuYWxMaW5rQ29udGVudCA9XG4gICAgbGluayAmJiBsaW5rLnRyaW0oKVxuICAgICAgPyAnPGRpdiBjbGFzcz1cInNlcGFyYXRvclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJoeXBlcmxpbmsgcG9wdXBFbnRyeVN0eWxlXCI+PGEgY2xhc3M9XCJ0cmFuc2xhdGVcIiBocmVmPScgK1xuICAgICAgICBsaW5rLnRyaW0oKSArXG4gICAgICAgICcgdGFyZ2V0PVwiX2JsYW5rXCI+JyArXG4gICAgICAgIG1hcC5leHRlcm5hbExpbmtUZXh0ICtcbiAgICAgICAgJzwvYT4nICtcbiAgICAgICAgZXh0ZXJuYWxMaW5rICtcbiAgICAgICAgJzwvZGl2PidcbiAgICAgIDogJydcbiAgY29udGVudCArPSBleHRlcm5hbExpbmtDb250ZW50XG5cbiAgaWYgKGxhbmcpIHtcbiAgICB2YXIgdHJhbnNsYXRhYmxlU3RyaW5ncyA9IE9iamVjdC5rZXlzKG1hcC50cmFuc2xhdGlvbnMpLnNvcnQoZnVuY3Rpb24oXG4gICAgICBhLFxuICAgICAgYlxuICAgICkge1xuICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGhcbiAgICB9KVxuICAgIHRyYW5zbGF0YWJsZVN0cmluZ3MuZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCdcXFxcYignICsgUmVnRXhwLmVzY2FwZSh0KSArICcpJywgJ2dpJylcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UocmUsIG1hcC50cmFuc2xhdGlvbnNbdF0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjb250ZW50XG59XG5cbndpbmRvdy5oYW5kbGVMYXllckNsaWNrID0gZnVuY3Rpb24oZmVhdHVyZSwgbGF5ZXIsIGxlYWZsZXQpIHtcbiAgdmFyIGlzU3BpZGVyZmllZCA9IGZhbHNlXG5cbiAgaWYgKCFsYXllci5fcHJlU3BpZGVyZnlMYXRsbmcpIHtcbiAgICBPYmplY3Qua2V5cyhsZWFmbGV0Ll9sYXllcnMpLmZvckVhY2goZnVuY3Rpb24obCwgaSkge1xuICAgICAgaWYgKGxlYWZsZXQuX2xheWVyc1tsXS51bnNwaWRlcmZ5KSBsZWFmbGV0Ll9sYXllcnNbbF0udW5zcGlkZXJmeSgpXG4gICAgfSlcblxuICAgIGlmIChsYXllci5fX3BhcmVudCkge1xuICAgICAgT2JqZWN0LnZhbHVlcyhsYXllci5fX3BhcmVudC5fZ3JvdXAuX2ZlYXR1cmVHcm91cC5fbGF5ZXJzKS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgaWYgKHYuX2dyb3VwICYmIHYuX2dyb3VwLl9zcGlkZXJmaWVkKSBpc1NwaWRlcmZpZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmxlYWZsZXQtbWFya2VyLWljb24nKSkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiAoZC5zdHlsZS5vcGFjaXR5ID0gaXNTcGlkZXJmaWVkID8gMC4zMyA6IDEpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmxlYWZsZXQtbWFya2VyLWljb24nKSkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiAoZC5zdHlsZS5vcGFjaXR5ID0gaXNTcGlkZXJmaWVkID8gMC4zMyA6IDEpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZVBvaW50KGZlYXR1cmUsIGxhdGxuZywgbWFwKSB7XG4gIHZhciBwb2ludFN0eWxlLCBrZXksIHN0eWxlT3B0aW9uc1xuXG4gIHZhciBDdXN0b21JY29uID0gTC5JY29uLmV4dGVuZCh7XG4gICAgb3B0aW9uczoge1xuICAgICAgaWNvblNpemU6IG1hcC5pY29uc2l6ZSB8fCBbMjAsIDIwXSxcbiAgICAgIGljb25BbmNob3I6IG1hcC5pY29uc2l6ZVxuICAgICAgICA/IG1hcC5pY29uc2l6ZSAvIDRcbiAgICAgICAgOiBtYXAuaWNvbmFuY2hvclxuICAgICAgICAgID8gbWFwLmljb25hbmNob3JcbiAgICAgICAgICA6IFs1LCA1XVxuICAgIH1cbiAgfSlcblxuICB2YXIgbm9uUG9pbnRTdHlsZSwga2V5LCBkaXZJY29uXG5cbiAgdmFyIGNvbG9yS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVyblxuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBmZWF0dXJlLnByb3BlcnRpZXNbdy5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgIH0pXG4gICAgcmV0dXJuIGtleSAmJiB3LnR5cGUgPT09ICdjb2xvcidcbiAgfSlcblxuICB2YXIgZm9ybUtleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgIGlmICghdy5rZXlzKSByZXR1cm5cbiAgICB2YXIga2V5ID0gdy5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGtleSAmJiB3LnR5cGUgPT09ICdmb3JtJ1xuICB9KVxuXG4gIGZvciAobGV0IHcgb2YgbWFwLndpZGdldHMpIHtcbiAgICB2YXIgdGhpc0Zvcm1LZXlXaWRnZXQgPSB3LnR5cGUgPT09ICdmb3JtJyA/IHcgOiBmb3JtS2V5V2lkZ2V0XG4gICAgdmFyIHRoaXNDb2xvcktleVdpZGdldCA9IHcudHlwZSA9PT0gJ2NvbG9yJyA/IHcgOiBudWxsXG5cbiAgICB2YXIgY29sb3JLZXkgPSB0aGlzQ29sb3JLZXlXaWRnZXRcbiAgICAgID8gdGhpc0NvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzQ29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBmb3JtS2V5ID0gdGhpc0Zvcm1LZXlXaWRnZXRcbiAgICAgID8gdGhpc0Zvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXNGb3JtS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICB2YXIgY29sb3IgPSBjb2xvcktleSA/IGNvbG9yS2V5LmNvbG9yIDogZm9ybUtleSA/IGZvcm1LZXkuY29sb3IgOiBudWxsXG5cbiAgICBpZiAodGhpc0Zvcm1LZXlXaWRnZXQgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXNGb3JtS2V5V2lkZ2V0LmZpZWxkXSkge1xuICAgICAgdmFyIGZvcm1zID0gdGhpc0Zvcm1LZXlXaWRnZXQua2V5cy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gay52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKFxuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIClcbiAgICAgIGtleSA9IHRoaXNGb3JtS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG5cbiAgICAgIGlmICgha2V5KSBicmVha1xuXG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICBrZXk6IGZvcm1LZXksXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgIGZlYXR1cmU6IGZlYXR1cmVcbiAgICAgIH1cblxuICAgICAgaWYgKGtleS5mb3JtID09PSAnZGl2Jykge1xuICAgICAgICB2YXIgdmFsdWUgPSBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdXG4gICAgICAgIHZhciBjb3VudCA9IHZhbHVlID8gdmFsdWUuc3BsaXQoJ34nKS5sZW5ndGggOiAwXG5cbiAgICAgICAgZGl2SWNvbiA9IEwuZGl2SWNvbih7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnaWNvbi1kaXYnLFxuICAgICAgICAgIGh0bWw6XG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicgK1xuICAgICAgICAgICAgY29sb3IgK1xuICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgY291bnQgK1xuICAgICAgICAgICAgJzwvc3Bhbj4nXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHBvaW50U3R5bGUgPSBkaXZJY29uID8gZGl2SWNvbiA6IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpc0NvbG9yS2V5V2lkZ2V0ICYmXG4gICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICkge1xuICAgICAga2V5ID0gdGhpc0NvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuXG4gICAgICBpZiAoIWtleSkgYnJlYWtcblxuICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAga2V5OiBjb2xvcktleSxcbiAgICAgICAgY29sb3I6IGNvbG9yS2V5LmNvbG9yLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgZmVhdHVyZTogZmVhdHVyZVxuICAgICAgfVxuXG4gICAgICBwb2ludFN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3ZnID1cbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiBmaWxsPVwiJyArXG4gICAgICAgIGNvbG9yICtcbiAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICBwb2ludFN0eWxlID0ge1xuICAgICAgICBjbGFzczogJ2RlZmF1bHQnLFxuICAgICAgICBzdmc6IGVuY29kZVVSSSgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2Eoc3ZnKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaWNvblVybCA9IHBvaW50U3R5bGUuc3ZnXG4gICAgdmFyIGljb24gPSBuZXcgQ3VzdG9tSWNvbih7XG4gICAgICBpY29uVXJsOiBpY29uVXJsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBMLm1hcmtlcihsYXRsbmcsIHtcbiAgICBpY29uOiBkaXZJY29uID8gZGl2SWNvbiA6IGljb25cbiAgfSlcbn1cbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuaW1wb3J0IHsgbGluZVdlaWdodHMsIGxpbmVEYXNoQXJyYXlzIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZU5vblBvaW50KGZlYXR1cmUsIG1hcCwgaW5kZXgpIHtcbiAgdmFyIG5vblBvaW50U3R5bGUsXG4gICAgY29sb3JzID0gW10sXG4gICAgZm9ybXMgPSBbXSxcbiAgICBzb3J0ID0gWydmb3JtJywgJ2NvbG9yJ11cblxuICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICBpZiAoIXcua2V5cykgcmV0dXJuXG4gICAgdmFyIGtleSA9IHcua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZlYXR1cmUucHJvcGVydGllc1t3LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICB9KVxuXG4gIHZhciBmb3JtS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVyblxuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBmZWF0dXJlLnByb3BlcnRpZXNbdy5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgIH0pXG5cbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2Zvcm0nXG4gIH0pXG5cbiAgZm9yIChsZXQgdyBvZiBtYXAud2lkZ2V0cykge1xuICAgIHZhciBjb2xvcktleSA9IGNvbG9yS2V5V2lkZ2V0XG4gICAgICA/IGNvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGZvcm1LZXkgPSBmb3JtS2V5V2lkZ2V0XG4gICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBjb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBmb3JtS2V5ID8gZm9ybUtleS5jb2xvciA6IG51bGxcblxuICAgIHZhciBmb3JtS2V5Rm9ybSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgID8gZm9ybUtleVdpZGdldC5rZXlzLnJlZHVjZShmdW5jdGlvbihhLCBjKSB7XG4gICAgICAgIHJldHVybiBjLmZvcm1cbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBjb2xvcktleUZvcm0gPSBjb2xvcktleVdpZGdldFxuICAgICAgPyBjb2xvcktleVdpZGdldC5rZXlzLnJlZHVjZShmdW5jdGlvbihhLCBjKSB7XG4gICAgICAgIHJldHVybiBjLmZvcm1cbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBmb3JtID0gZm9ybUtleVdpZGdldFxuICAgICAgPyBmb3JtS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgaWYgKGZvcm1LZXlXaWRnZXQgJiYgZm9ybSA9PT0gJ2xpbmUnKSB7XG4gICAgICBmb3JtcyA9IGZvcm1LZXlXaWRnZXQua2V5cy5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZi52YWx1ZVxuICAgICAgfSlcbiAgICAgIGZvcm1zLmZvckVhY2goZnVuY3Rpb24oZiwgaSkge1xuICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsndHJhbnNwYXJlbnQnLCBudWxsXSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb2xvcnMucHVzaChbbnVsbCwgZGVmYXVsdENvbG9yXSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb2xvcnMucHVzaChbJyMwMDAwMDAnLCBudWxsXSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb2xvcnMucHVzaChbJyNmZmZmZmYnLCBudWxsXSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29sb3JzLnB1c2goW251bGwsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKGZvcm1zLmxlbmd0aCAmJiBmb3JtS2V5Rm9ybSA9PT0gJ2xpbmUnKSB8fFxuICAgICAgKGZvcm1zLmxlbmd0aCAmJiBjb2xvcktleUZvcm0gPT09ICdsaW5lJylcbiAgICApIHtcbiAgICAgIGlmIChmb3JtS2V5V2lkZ2V0KSB7XG4gICAgICAgIHZhciBpID0gZm9ybXMuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0pXG4gICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICBub25Qb2ludFN0eWxlID0ge1xuICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgIGNvbG9yc1tpXVtpbmRleF0gPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gJyNjYWQyZDMnXG4gICAgICAgICAgICAgICAgOiBjb2xvcnNbaV1baW5kZXhdICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICA/IGNvbG9yc1tpXVtpbmRleF1cbiAgICAgICAgICAgICAgICAgIDogY29sb3IsXG4gICAgICAgICAgICB3ZWlnaHQ6IGxpbmVXZWlnaHRzW2ldW2luZGV4XSxcbiAgICAgICAgICAgIGxpbmVDYXA6ICdzcXVhcmUnLFxuICAgICAgICAgICAgZGFzaEFycmF5OiBsaW5lRGFzaEFycmF5c1tpXSA/IGxpbmVEYXNoQXJyYXlzW2ldW2luZGV4XSA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvcm1LZXlGb3JtID09PSAnbGluZScgfHwgY29sb3JLZXlGb3JtID09PSAnbGluZScpIHtcbiAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgd2VpZ2h0OiAyLFxuICAgICAgICBsaW5lQ2FwOiAnc3F1YXJlJyxcbiAgICAgICAgZGFzaEFycmF5OiAnMyw3J1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29sb3JLZXkgJiYgY29sb3JLZXkuZm9ybSA9PT0gJ3BhdHRlcm4nKSB7XG4gICAgICB2YXIgcGF0dGVyblxuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgY29sb3JLZXkucGF0dGVyblswXS5pbmRleE9mKCdzdHJpcGUnKSA+IC0xOlxuICAgICAgICB2YXIgcGF0dGVybk9wdGlvbnMgPSB7XG4gICAgICAgICAgd2VpZ2h0OiAzLFxuICAgICAgICAgIHNwYWNlV2VpZ2h0OiAzLFxuICAgICAgICAgIGNvbG9yOiBjb2xvcktleS5wYXR0ZXJuWzFdLFxuICAgICAgICAgIHNwYWNlQ29sb3I6IGNvbG9yS2V5LnBhdHRlcm5bY29sb3JLZXkucGF0dGVybi5sZW5ndGggLSAxXSxcbiAgICAgICAgICBzcGFjZU9wYWNpdHk6IDEsXG4gICAgICAgICAgYW5nbGU6IDQ1XG4gICAgICAgIH1cbiAgICAgICAgcGF0dGVybiA9IG5ldyBMLlN0cmlwZVBhdHRlcm4ocGF0dGVybk9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgY29sb3JLZXkucGF0dGVyblswXS5pbmRleE9mKCdkb3QnKSA+IC0xOlxuICAgICAgICB2YXIgc2hhcGVPcHRpb25zID0ge1xuICAgICAgICAgIHg6IDQsXG4gICAgICAgICAgeTogNCxcbiAgICAgICAgICByYWRpdXM6IDIsXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICBzdHJva2U6IGZhbHNlLFxuICAgICAgICAgIGZpbGxDb2xvcjogY29sb3JLZXkucGF0dGVybltjb2xvcktleS5wYXR0ZXJuLmxlbmd0aCAtIDFdLFxuICAgICAgICAgIGZpbGxPcGFjaXR5OiAxXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNoYXBlID0gbmV3IEwuUGF0dGVybkNpcmNsZShzaGFwZU9wdGlvbnMpXG4gICAgICAgIHZhciBwYXR0ZXJuT3B0aW9ucyA9IHtcbiAgICAgICAgICB3aWR0aDogOCxcbiAgICAgICAgICBoZWlnaHQ6IDhcbiAgICAgICAgfVxuICAgICAgICBwYXR0ZXJuID0gbmV3IEwuUGF0dGVybihwYXR0ZXJuT3B0aW9ucylcbiAgICAgICAgcGF0dGVybi5hZGRTaGFwZShzaGFwZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcGF0dGVybi5hZGRUbyhtYXAubGVhZmxldClcbiAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgIGZpbGxQYXR0ZXJuOiBwYXR0ZXJuID8gcGF0dGVybiA6IG51bGwsXG4gICAgICAgIGZpbGxDb2xvcjogY29sb3IsXG4gICAgICAgIGNvbG9yOiBkZWZhdWx0Q29sb3IsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjcsXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgd2VpZ2h0OiAyLFxuICAgICAgICBsaW5lQ2FwOiAnc3F1YXJlJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGluZUNvbG9yXG4gICAgICB2YXIgbGluZVdlaWdodFxuICAgICAgdmFyIGxpbmVPcGFjaXR5XG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdsaW5lJykgPiAtMTpcbiAgICAgICAgbGluZUNvbG9yID0gY29sb3JcbiAgICAgICAgICA/IGNocm9tYShjb2xvcilcbiAgICAgICAgICAgIC5icmlnaHRlbigpXG4gICAgICAgICAgICAuaGV4KClcbiAgICAgICAgICA6IG51bGxcbiAgICAgICAgbGluZU9wYWNpdHkgPSAxXG4gICAgICAgIGxpbmVXZWlnaHQgPSA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgZmVhdHVyZS5nZW9tZXRyeS50eXBlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigncG9seWdvbicpID4gLTE6XG4gICAgICAgIGxpbmVDb2xvciA9IGRlZmF1bHRDb2xvclxuICAgICAgICBsaW5lT3BhY2l0eSA9IDAuNVxuICAgICAgICBsaW5lV2VpZ2h0ID0gMlxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBub25Qb2ludFN0eWxlID0ge1xuICAgICAgICBmaWxsUGF0dGVybjogcGF0dGVybixcbiAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcbiAgICAgICAgY29sb3I6IGxpbmVDb2xvcixcbiAgICAgICAgZmlsbE9wYWNpdHk6IDAuNyxcbiAgICAgICAgb3BhY2l0eTogbGluZU9wYWNpdHksXG4gICAgICAgIHdlaWdodDogbGluZVdlaWdodFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub25Qb2ludFN0eWxlKSByZXR1cm4gbm9uUG9pbnRTdHlsZVxuICB9XG59XG4iLCJpbXBvcnQgaGFuZGxlRmVhdHVyZUV2ZW50cyBmcm9tICcuL2hhbmRsZUZlYXR1cmVFdmVudHMuanMnXG5pbXBvcnQgc3R5bGVQb2ludCBmcm9tICcuL3N0eWxlUG9pbnQuanMnXG5pbXBvcnQgc3R5bGVOb25Qb2ludCBmcm9tICcuL3N0eWxlTm9uUG9pbnQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VHZW9Kc29uT3B0aW9ucyhcbiAgbWFwLFxuICBjb2xvcktleVdpZGdldHMsXG4gIGZvcm1LZXlXaWRnZXRzXG4pIHtcbiAgZnVuY3Rpb24gZmlsdGVyKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gbWFwLmZpbHRlcnNcbiAgICAgIC5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZihmZWF0dXJlKVxuICAgICAgfSlcbiAgICAgIC5ldmVyeShmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmICE9PSBmYWxzZVxuICAgICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRWFjaEZlYXR1cmUoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICBoYW5kbGVGZWF0dXJlRXZlbnRzKGZlYXR1cmUsIGxheWVyLCBtYXApXG4gIH1cblxuICB2YXIgYmFja2dyb3VuZE9wdGlvbnMgPSB7XG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgb25FYWNoRmVhdHVyZTogb25FYWNoRmVhdHVyZSxcbiAgICBwb2ludFRvTGF5ZXI6XG4gICAgICBtYXAucG9pbnRTdHlsZSB8fFxuICAgICAgZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG5nKSB7XG4gICAgICAgIHJldHVybiBzdHlsZVBvaW50KGZlYXR1cmUsIGxhdGxuZywgbWFwKVxuICAgICAgfSxcbiAgICBzdHlsZTpcbiAgICAgIG1hcC5ub25Qb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgc3R5bGVPcHRpb25zLCAwKSlcbiAgICAgICAgcmV0dXJuIHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgbWFwLCAwKVxuICAgICAgfVxuICB9XG4gIHZhciBmb3JlZ3JvdW5kT3B0aW9ucyA9IHtcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICBvbkVhY2hGZWF0dXJlOiBvbkVhY2hGZWF0dXJlLFxuICAgIHBvaW50VG9MYXllcjpcbiAgICAgIG1hcC5wb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlLCBsYXRsbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApXG4gICAgICB9LFxuICAgIHN0eWxlOlxuICAgICAgbWFwLm5vblBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgbWFwLCAxKVxuICAgICAgfVxuICB9XG5cbiAgcmV0dXJuIFtiYWNrZ3JvdW5kT3B0aW9ucywgZm9yZWdyb3VuZE9wdGlvbnNdXG59XG4iLCJpbXBvcnQgbWFrZUdlb0pzb25PcHRpb25zIGZyb20gJy4vbWFrZUdlb0pzb25PcHRpb25zLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlTGF5ZXJzKG1hcCkge1xuICB2YXIgY29sb3JLZXlXaWRnZXRzID0gW10sXG4gICAgZm9ybUtleVdpZGdldHMgPSBbXVxuXG4gIGlmIChtYXAud2lkZ2V0cykge1xuICAgIGNvbG9yS2V5V2lkZ2V0cyA9IG1hcC53aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICByZXR1cm4gdy50eXBlID09PSAnY29sb3InXG4gICAgfSlcbiAgICBmb3JtS2V5V2lkZ2V0cyA9IG1hcC53aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICByZXR1cm4gdy50eXBlID09PSAnZm9ybSdcbiAgICB9KVxuICB9XG5cbiAgdmFyIGdlb0pzb25PcHRpb25zID0gbWFwLmdlb0pzb25PcHRpb25zXG4gICAgPyBtYXAuZ2VvSnNvbk9wdGlvbnMobWFwKVxuICAgIDogbWFrZUdlb0pzb25PcHRpb25zKG1hcClcbiAgbWFwLmpzb24uZm9yRWFjaChmdW5jdGlvbihqc29uLCBpKSB7XG4gICAgdmFyIGNsdXN0ZXJDb2xvciwgY29sb3JLZXlXaWRnZXRcblxuICAgIGlmIChjb2xvcktleVdpZGdldHMubGVuZ3RoKSB7XG4gICAgICB2YXIgY29sb3JLZXlzID0gY29sb3JLZXlXaWRnZXRzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24od2lkZ2V0KSB7XG4gICAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0ganNvbi5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzW3dpZGdldC5maWVsZF1cblxuICAgICAgICAgIHZhciBrZXkgPSB3aWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBjb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGNvbG9yS2V5V2lkZ2V0ID0gd2lkZ2V0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBrZXlcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihjb2xvcktleSkge1xuICAgICAgICAgIHJldHVybiBjb2xvcktleVxuICAgICAgICB9KVxuXG4gICAgICBjbHVzdGVyQ29sb3IgPSBjb2xvcktleXNbMF0gPyBjb2xvcktleXNbMF0uY29sb3IgOiAnIzAwMDAwMCdcbiAgICB9IGVsc2Uge1xuICAgICAgY2x1c3RlckNvbG9yID0gJyMwMDAwMDAnXG4gICAgfVxuXG4gICAgdmFyIGFsbFBvaW50cyA9IGpzb24uZmVhdHVyZXMuZXZlcnkoZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgcmV0dXJuIGZlYXR1cmUuZ2VvbWV0cnkgJiYgZmVhdHVyZS5nZW9tZXRyeS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2ludCdcbiAgICB9KVxuXG4gICAgbWFwLmdyb3Vwcy5wdXNoKFxuICAgICAgbmV3IEwuTWFya2VyQ2x1c3Rlckdyb3VwKHtcbiAgICAgICAgc2hvd0NvdmVyYWdlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgIHpvb21Ub0JvdW5kc09uQ2xpY2s6IGZhbHNlLFxuICAgICAgICBtYXhDbHVzdGVyUmFkaXVzOlxuICAgICAgICAgIGFsbFBvaW50cyAmJiBtYXAuY2x1c3RlcmRpc3RhbmNlID8gbWFwLmNsdXN0ZXJkaXN0YW5jZSA6IE5hTixcbiAgICAgICAgaWNvbkNyZWF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiBpY29uQ3JlYXRlRnVuY3Rpb24oY2x1c3Rlcikge1xuICAgICAgICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnaWNvbi1ncm91cCcsXG4gICAgICAgICAgICBodG1sOlxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCcgK1xuICAgICAgICAgICAgICBjbHVzdGVyQ29sb3IgK1xuICAgICAgICAgICAgICAnOyBjb2xvcjonICtcbiAgICAgICAgICAgICAgY2x1c3RlckNvbG9yICtcbiAgICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgICBjbHVzdGVyLmdldENoaWxkQ291bnQoKSArXG4gICAgICAgICAgICAgICc8L3NwYW4+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuXG4gICAgdmFyIGhhc0xpbmVGZWF0dXJlcyA9IGpzb24uZmVhdHVyZXMuc29tZShmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBmZWF0dXJlLmdlb21ldHJ5ICYmXG4gICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xpbmUnKSA+IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGdlb0pzb25PcHRpb25zLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgICAgaWYgKGNvbG9yS2V5V2lkZ2V0KSB7XG4gICAgICAgIGpzb24uZmVhdHVyZXMgPSBqc29uLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiBiLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdLmxvY2FsZUNvbXBhcmUoXG4gICAgICAgICAgICBhLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB2YXIgZ2VvSnNvbiA9IEwuZ2VvSnNvbihqc29uLCBvcHRpb24pXG4gICAgICBpZiAoKCFoYXNMaW5lRmVhdHVyZXMgJiYgaW5kZXggJSAyID09PSAwKSB8fCBoYXNMaW5lRmVhdHVyZXMpIHtcbiAgICAgICAgbWFwLmdyb3Vwc1tpXS5hZGRMYXllcihnZW9Kc29uKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAobWFwLmdyb3Vwc1tpXS5nZXRMYXllcnMoKS5sZW5ndGgpIHtcbiAgICAgIG1hcC5sZWFmbGV0LmFkZExheWVyKG1hcC5ncm91cHNbaV0pXG4gICAgICBtYXAuZ3JvdXBzW2ldLm9uKCdjbHVzdGVyY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGhhbmRsZUNsdXN0ZXJDbGljayhlLCBtYXAsIGkpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2x1c3RlckNsaWNrKGUsIG1hcCwgaSkge1xuICBtYXAubGVhZmxldC5fbGF5ZXJzW2UubGF5ZXIuX2xlYWZsZXRfaWRdLnNwaWRlcmZ5KClcblxuICBPYmplY3Qua2V5cyhtYXAubGVhZmxldC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGxheWVyLCBpKSB7XG4gICAgaWYgKHBhcnNlSW50KGxheWVyLCAxMCkgIT09IGUubGF5ZXIuX2xlYWZsZXRfaWQpIHtcbiAgICAgIGlmIChtYXAubGVhZmxldC5fbGF5ZXJzW2xheWVyXS51bnNwaWRlcmZ5KVxuICAgICAgICBtYXAubGVhZmxldC5fbGF5ZXJzW2xheWVyXS51bnNwaWRlcmZ5KClcbiAgICB9XG4gIH0pXG4gIHZhciBpc1NwaWRlcmZpZWQgPSBmYWxzZVxuICBPYmplY3QudmFsdWVzKG1hcC5ncm91cHNbaV0uX2ZlYXR1cmVHcm91cC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICBpZiAodi5fZ3JvdXAgJiYgdi5fZ3JvdXAuX3NwaWRlcmZpZWQpIGlzU3BpZGVyZmllZCA9IHRydWVcbiAgfSlcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubGVhZmxldC1tYXJrZXItaWNvbicpKS5mb3JFYWNoKFxuICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiAoZC5zdHlsZS5vcGFjaXR5ID0gaXNTcGlkZXJmaWVkID8gMC4zMyA6IDEpXG4gICAgfVxuICApXG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmxlYWZsZXQtbWFya2VyLWljb24nKSkuZm9yRWFjaChcbiAgICBmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgIH1cbiAgKVxuICBPYmplY3QudmFsdWVzKG1hcC5ncm91cHNbaV0uX2ZlYXR1cmVHcm91cC5fbGF5ZXJzKS5maWx0ZXIoZnVuY3Rpb24odikge1xuICAgIGUubGF5ZXJcbiAgICAgIC5nZXRBbGxDaGlsZE1hcmtlcnMoKVxuICAgICAgLm1hcChmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiBtLmdldEVsZW1lbnQoKVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gbVxuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIChtLnN0eWxlLm9wYWNpdHkgPSAxKVxuICAgICAgfSlcbiAgfSlcbn1cbiIsImltcG9ydCBDdXN0b21NYXAgZnJvbSAnLi9DdXN0b21NYXAuanMnXG5pbXBvcnQgbWFrZUxheWVycyBmcm9tICcuL21ha2VMYXllcnMuanMnXG5pbXBvcnQgeyBjb252ZXJ0VHlwZSB9IGZyb20gJy4vaGVscGVycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFwV2lkZ2V0c1RvU3RhdGUob3B0aW9ucykge1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnIC5tYXAnKVxuXG4gIHZhciBtYXAgPSBuZXcgQ3VzdG9tTWFwKGNvbnRhaW5lciwgb3B0aW9ucykucmVuZGVyKClcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciB0YWJsZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5maWx0ZXIoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuIGsudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd0YWJsZScpID4gLTFcbiAgICB9KVxuXG4gICAgUHJvbWlzZS5hbGwoXG4gICAgICB0YWJsZXMubWFwKGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcbiAgICAgICAgICAnaHR0cHM6Ly9jc2lzLmNhcnRvLmNvbS9hcGkvdjIvc3FsP2FwaV9rZXk9JyArXG4gICAgICAgICAgICBtYXAuYXBpa2V5ICtcbiAgICAgICAgICAgICcmZm9ybWF0PWdlb2pzb24mcT1TRUxFQ1QlMjAqJTIwRlJPTSUyMCcgK1xuICAgICAgICAgICAgb3B0aW9uc1t0YWJsZV1cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICApXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgIHJlc3BvbnNlcy5tYXAoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICAudGhlbihmdW5jdGlvbihqc29ucykge1xuICAgICAgICB2YXIganNvbiA9IGpzb25zLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICBmZWF0dXJlczogYS5mZWF0dXJlcy5jb25jYXQoYi5mZWF0dXJlcylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdmFyIGNvbG9yS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICAgICAgICB9KVxuICAgICAgICBtYXAuanNvbiA9IFtqc29uXVxuXG4gICAgICAgIGlmIChjb2xvcktleVdpZGdldCkge1xuICAgICAgICAgIG1hcC5qc29uID0gW11cbiAgICAgICAgICB2YXIgZmVhdHVyZUdyb3VwcyA9IGpzb24uZmVhdHVyZXMuZ3JvdXBCeShcbiAgICAgICAgICAgIGNvbG9yS2V5V2lkZ2V0LmZpZWxkLFxuICAgICAgICAgICAgJ3Byb3BlcnRpZXMnXG4gICAgICAgICAgKVxuICAgICAgICAgIE9iamVjdC5rZXlzKGZlYXR1cmVHcm91cHMpXG4gICAgICAgICAgICAuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmZWF0dXJlR3JvdXBzW2JdWzBdLnByb3BlcnRpZXNbXG4gICAgICAgICAgICAgICAgY29sb3JLZXlXaWRnZXQuZmllbGRcbiAgICAgICAgICAgICAgXS5sb2NhbGVDb21wYXJlKFxuICAgICAgICAgICAgICAgIGZlYXR1cmVHcm91cHNbYV1bMF0ucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICAgICAgICBtYXAuanNvbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlR3JvdXBzW2ZlYXR1cmVdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLndpZGdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgbWFrZUxheWVycyhtYXApXG4gICAgICAgICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgICAgICAgIGJveC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy53aWRnZXRzLmZvckVhY2goZnVuY3Rpb24odywgeCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjJyArIG9wdGlvbnMuc2x1ZyArICcgLndpZGdldC4nICsgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykgJiYgd2lkZ2V0Q29udGVudFt4XS5vcHRpb25zKSB7XG4gICAgICAgICAgICBuZXcgQ2hvaWNlcyhcbiAgICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcbiAgICAgICAgICAgICAgd2lkZ2V0Q29udGVudFt4XS5vcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWRePVxcJ3NlYXJjaFxcJ10nKSkge1xuICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI3Jlc2V0QnV0dG9uJylcbiAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUmVzZXQoZWxlbWVudCwgbWFwLCB4KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzZWxlY3RzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKVxuICAgICAgICAgIHZhciBjaGVja3MgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ2NoZWNrYm94XFwnXScpXG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciBzZWFyY2ggPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddOm5vdCguY2hvaWNlc19faW5wdXQpJylcbiAgICAgICAgICApXG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwncmFkaW9cXCddJylcbiAgICAgICAgICApXG4gICAgICAgICAgdmFyIGlucHV0cyA9IHNlbGVjdHNcbiAgICAgICAgICAgIC5jb25jYXQoY2hlY2tzKVxuICAgICAgICAgICAgLmNvbmNhdChzZWFyY2gpXG4gICAgICAgICAgICAuY29uY2F0KHRvZ2dsZSkgLy8gaWYgKCFpbnB1dHMubGVuZ3RoKSBtYWtlTGF5ZXJzKG1hcClcblxuICAgICAgICAgIHZhciBpbml0aWFsaXplZCA9IDBcblxuICAgICAgICAgIHZhciBjb3VudCA9IGlucHV0cy5sZW5ndGhcbiAgICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShcbiAgICAgICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zLndpZGdldHMsXG4gICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICArK2luaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2lkZ2V0cyxcbiAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICsraW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgnY3JlYXRlRXZlbnQnIGluIGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpXG4gICAgICAgICAgICAgIGV2dC5pbml0RXZlbnQoJ2NoYW5nZScsIGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlucHV0LmZpcmVFdmVudCgnb25jaGFuZ2UnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3Lm1hcF9pZCA9IG1hcC5pZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKG1hcC50cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICB2YXIgdHJhbnNsYXRhYmxlTm9kZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYW5zbGF0ZScpXG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciB0cmFuc2xhdGFibGVTdHJpbmdzID0gT2JqZWN0LmtleXMobWFwLnRyYW5zbGF0aW9ucykuc29ydChmdW5jdGlvbihcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICBiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdHJhbnNsYXRhYmxlTm9kZXMuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkge1xuICAgICAgICAgICAgdHJhbnNsYXRhYmxlU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1hcC50cmFuc2xhdGlvbnNbdF0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFxiKCcgKyBSZWdFeHAuZXNjYXBlKHQpICsgJyknLCAnZ2knKVxuICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGVsLmlubmVySFRNTC5yZXBsYWNlKHJlLCBtYXAudHJhbnNsYXRpb25zW3RdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc2V0KGVsZW1lbnQsIG1hcCwgeCkge1xuICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKS52YWx1ZSA9ICcnXG4gIGlmIChtYXAuZ3JvdXBzLmxlbmd0aCkgbWFwLnJlbW92ZUdyb3VwcygpXG5cbiAgbWFwLmZpbHRlcnNbeF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbWFrZUxheWVycyhtYXApXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZShtYXAsIGVsZW1lbnQsIHdpZGdldHMsIHgsIGNvdW50LCBpbml0aWFsaXplZCkge1xuICB2YXIgb3B0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICA/IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5vcHRpb25zKVxuICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJylcbiAgICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKSlcbiAgICAgIDogQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpXG4gIHZhciBzZWxlY3Rpb25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLm9wdGlvbnMpXG4gICAgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKVxuICAgICAgPyBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXScpKVxuICAgICAgOiBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpKVxuICB2YXIgcG9zc2libGVDaGVja3MgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSkubWFwKFxuICAgIGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiBvLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgKVxuXG4gIHZhciBwb3NzaWJsZU9wdGlvbnMsIHBvc3NpYmxlUXVlcmllc1xuICBpZiAod2lkZ2V0c1t4XS5pbnB1dCAhPT0gJ3RvZ2dsZScpIHtcbiAgICBwb3NzaWJsZU9wdGlvbnMgPSB3aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcblxuICAgIHBvc3NpYmxlUXVlcmllcyA9IHBvc3NpYmxlQ2hlY2tzLmNvbmNhdChwb3NzaWJsZU9wdGlvbnMpXG4gIH1cblxuICB2YXIgcXVlcnkgPSBBcnJheS5mcm9tKHNlbGVjdGlvbnMpLm1hcChmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cXCdjaGVja2JveFxcJ10nKVxuICAgICAgPyBvLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgOiBvLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgfSlcblxuICBtYXAuZmlsdGVyc1t3aWRnZXRzW3hdLmlkXSA9XG4gICAgd2lkZ2V0c1t4XS5pbnB1dCA9PT0gJ3RvZ2dsZSdcbiAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICB2YXIgYm9vbCA9IHRydWVcblxuICAgICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnRvZ2dsZSkge1xuICAgICAgICAgIGJvb2wgPSBjb252ZXJ0VHlwZShxdWVyeVswXSkgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib29sID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgIH1cbiAgICAgIDogd2lkZ2V0c1t4XS5maWVsZCA9PT0gJ2FsbCdcbiAgICAgICAgPyBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgdmFyIGJvb2wgPSB0cnVlXG4gICAgICAgICAgdmFyIHdpdGhEaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgdmFyIHdpdGhvdXREaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAubGF0aW5pc2UoKVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2l0aERpYWNyaXRpY3MuaW5kZXhPZihxdWVyeVswXSkgPCAwICYmXG4gICAgICAgICAgICAgIHdpdGhvdXREaWFjcml0aWNzLmluZGV4T2YocXVlcnlbMF0pIDwgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVycykge1xuICAgICAgICAgIHZhciBib29sID0gdHJ1ZVxuICAgICAgICAgIHZhciBmaWVsZCA9IHdpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgICAgICAgID8gd2lkZ2V0c1t4XS5ncm91cGluZ1xuICAgICAgICAgICAgOiB3aWRnZXRzW3hdLmZpZWxkXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NzaWJsZVF1ZXJpZXMuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZmllbGRdLnRvTG93ZXJDYXNlKCkpID5cbiAgICAgICAgICAgICAgICAtMSAmJlxuICAgICAgICAgICAgICBxdWVyeS5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllc1tmaWVsZF0udG9Mb3dlckNhc2UoKSkgPCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBib29sID0gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYm9vbFxuICAgICAgICB9XG5cbiAgaWYgKGluaXRpYWxpemVkID49IGNvdW50KSBtYXAucmVtb3ZlR3JvdXBzKClcbiAgaWYgKHdpZGdldHMubGVuZ3RoID49IHggKyAxICYmIGluaXRpYWxpemVkID49IGNvdW50KSBtYWtlTGF5ZXJzKG1hcClcbn1cbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuaW1wb3J0IG1hcFdpZGdldHNUb1N0YXRlIGZyb20gJy4vbWFwV2lkZ2V0c1RvU3RhdGUuanMnXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBtYWtlRHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuaW1wb3J0IHsgcGFyc2VMZWdlbmREYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtYWtlV2lkZ2V0cyhqc29ucywgb3B0aW9ucywgYm94Q29udGVudCkge1xuICB2YXIgd2lkZ2V0Q29udGVudCA9IFtdXG4gIG9wdGlvbnMud2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHcsIHgpIHtcbiAgICBpZiAoIXcuaGFzT3duUHJvcGVydHkoJ2lkJykpIHcuaWQgPSB4XG4gICAgdmFyIGxlZ2VuZERhdGEgPSB3LnJlZmVyZW5jZVxuICAgICAgPyBwYXJzZUxlZ2VuZERhdGEob3B0aW9ucywganNvbnNbeF0uZmVlZC5lbnRyeSwgdy50eXBlKVxuICAgICAgOiB3LmtleXNcbiAgICBvcHRpb25zLndpZGdldHNbeF0ua2V5cyA9IGxlZ2VuZERhdGFcbiAgICB3aWRnZXRDb250ZW50LnB1c2goZm9ybWF0V2lkZ2V0cyhvcHRpb25zLCB4KSlcbiAgICBib3hDb250ZW50ICs9XG4gICAgICAnPHNlY3Rpb24gY2xhc3M9XCJ3aWRnZXQgJyArXG4gICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgJ1wiPjxoMyBjbGFzcz1cInRyYW5zbGF0ZVwiPicgK1xuICAgICAgd2lkZ2V0Q29udGVudFt4XS50aXRsZSArXG4gICAgICAnPC9oMz4nXG4gICAgYm94Q29udGVudCArPSB3aWRnZXRDb250ZW50W3hdLm5vZGVzXG4gICAgYm94Q29udGVudCArPSAnPC9zZWN0aW9uPidcbiAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgYm94LmlubmVySFRNTCA9IGJveENvbnRlbnRcbiAgICB2YXIgbGFiZWxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBvcHRpb25zLnNsdWcgKyAnIC5pdGVtVGV4dCcpXG4gICAgQXJyYXkuZnJvbShsYWJlbFRleHQpLmZvckVhY2goZnVuY3Rpb24oaXRlbVRleHQpIHtcbiAgICAgIHZhciBoZWlnaHQgPSBpdGVtVGV4dC5vZmZzZXRIZWlnaHRcbiAgICAgIHZhciBmb250U2l6ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGl0ZW1UZXh0KVsnZm9udC1zaXplJ11cbiAgICAgIHZhciBvZmZzZXQgPSBoZWlnaHQgLyBwYXJzZUludChmb250U2l6ZS5yZXBsYWNlKCdweCcsICcnKSwgMTApXG4gICAgICBpdGVtVGV4dC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgb2Zmc2V0ICogMTAgKyAnJSknXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gYXdhaXQgbWFwV2lkZ2V0c1RvU3RhdGUob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2lkZ2V0cyhvcHRpb25zLCB4KSB7XG4gIHZhciB3aWRnZXROb2RlcyA9ICcnXG4gIHZhciBkcm9wZG93bk9wdGlvbnNcblxuICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS5pbnB1dCkge1xuICBjYXNlICd0b2dnbGUnOlxuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8bGFiZWwgZm9yPVwidG9nZ2xlXycgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgY2xhc3M9XCJ0cmFuc2xhdGVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIicgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgaWQ9XCJ0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiAgdmFsdWU9XCIxXCIgY2hlY2tlZD5TaG93PC9sYWJlbD4nXG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxsYWJlbCBmb3I9XCIkdG9nZ2xlXycgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgY2xhc3M9XCJ0cmFuc2xhdGVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIicgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgaWQ9XCJ0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiB2YWx1ZT1cIjBcIiA+SGlkZTwvbGFiZWw+J1xuICAgIGJyZWFrXG5cbiAgY2FzZSAnc2VhcmNoJzpcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBwbGFjZWhvbGRlcj1cIicgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uaW5zdHJ1Y3Rpb25zICtcbiAgICAgICAgJ1wiIHNpemU9XCIxMFwiIC8+J1xuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInJlc2V0QnV0dG9uXCIgY2xhc3M9XCJ0cmFuc2xhdGVcIj5SZXNldDwvYnV0dG9uPidcbiAgICBicmVha1xuXG4gIGNhc2UgJ2Ryb3Bkb3duJzpcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPHNlbGVjdCBpZD1cImRyb3Bkb3duXycgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uZmllbGQgK1xuICAgICAgICAnXCIgcGxhY2Vob2xkZXI9XCInICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmluc3RydWN0aW9ucyArXG4gICAgICAgICdcIiBtdWx0aXBsZT1cIlwiPjwvc2VsZWN0PidcbiAgICBkcm9wZG93bk9wdGlvbnMgPSBtYWtlRHJvcGRvd25PcHRpb25zKG9wdGlvbnMsIHgpXG4gICAgYnJlYWtcblxuICBjYXNlICdjaGVja2JveCc6XG4gICAgd2lkZ2V0Tm9kZXMgKz0gJzx1bD4nXG4gICAgdmFyIGtleVN0eWxlXG4gICAgdmFyIGxlZ2VuZEl0ZW1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmdyb3VwaW5nXG4gICAgICA/IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2dyb3VwJylcbiAgICAgIDogb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnbGFiZWwnKVxuICAgIE9iamVjdC5rZXlzKGxlZ2VuZEl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwLCBpKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICByZXR1cm4gZi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF0sXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgbWFwOiBvcHRpb25zLFxuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF1cbiAgICAgICAgfVxuICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgICAnPGxpPjxsYWJlbCBmb3I9XCInICtcbiAgICAgICAgICBncm91cCArXG4gICAgICAgICAgJ1wiPjxpbnB1dCBjbGFzcz1cIndpZGdldCAnICtcbiAgICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uaW5wdXQgK1xuICAgICAgICAgICdcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiJyArXG4gICAgICAgICAgKG9wdGlvbnMud2lkZ2V0c1t4XS5ncm91cGluZyA/IGdyb3VwIDogbGVnZW5kSXRlbXNbZ3JvdXBdWzBdLnZhbHVlKSArXG4gICAgICAgICAgJ1wiIGlkPVwiJyArXG4gICAgICAgICAgZ3JvdXAgK1xuICAgICAgICAgICdcIiAnICtcbiAgICAgICAgICAobGVnZW5kSXRlbXNbZ3JvdXBdWzBdLnNlbGVjdGVkID8gJ2NoZWNrZWQnIDogJycpICtcbiAgICAgICAgICAnID48c3BhbiBjbGFzcz1cIicgK1xuICAgICAgICAgIGtleVN0eWxlLmNsYXNzICtcbiAgICAgICAgICAnS2V5XCIgJyArXG4gICAgICAgICAgJ3N0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJycgK1xuICAgICAgICAgIGtleVN0eWxlLnN2ZyArXG4gICAgICAgICAgJ1wiKT48L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtVGV4dFwiPicgK1xuICAgICAgICAgIGNhcGl0YWxpemUoZ3JvdXApICtcbiAgICAgICAgICAnPC9zcGFuPjwvbGFiZWw+PC9saT4nXG4gICAgfSlcbiAgICB3aWRnZXROb2RlcyArPSAnPC91bD4nXG4gICAgYnJlYWtcblxuICBkZWZhdWx0OlxuICAgIHdpZGdldE5vZGVzICs9ICc8dWw+J1xuICAgIHZhciBrZXlTdHlsZVxuICAgIHZhciBsZWdlbmRJdGVtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5ncm91cGluZ1xuICAgICAgPyBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdncm91cCcpXG4gICAgICA6IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2xhYmVsJylcbiAgICBPYmplY3Qua2V5cyhsZWdlbmRJdGVtcykuZm9yRWFjaChmdW5jdGlvbihncm91cCwgaSkge1xuICAgICAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0udHlwZSkge1xuICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgIHZhciBmb3JtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgICAgcmV0dXJuIGYudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICBncm91cDogbGVnZW5kSXRlbXNbZ3JvdXBdLFxuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgIG1hcDogb3B0aW9ucyxcbiAgICAgICAgICBncm91cDogbGVnZW5kSXRlbXNbZ3JvdXBdXG4gICAgICAgIH1cbiAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICAgJzxsaT48c3BhbiBjbGFzcz1cIicgK1xuICAgICAgICAgIGtleVN0eWxlLmNsYXNzICtcbiAgICAgICAgICAnS2V5XCIgJyArXG4gICAgICAgICAgJ3N0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJycgK1xuICAgICAgICAgIGtleVN0eWxlLnN2ZyArXG4gICAgICAgICAgJ1wiKT48L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtVGV4dFwiPicgK1xuICAgICAgICAgIGNhcGl0YWxpemUoZ3JvdXApICtcbiAgICAgICAgICAnPC9zcGFuPjwvbGk+J1xuICAgIH0pXG4gICAgd2lkZ2V0Tm9kZXMgKz0gJzwvdWw+J1xuICAgIGJyZWFrXG4gIH1cblxuICB2YXIgd2lkZ2V0VGl0bGUgPVxuICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCA9PT0gJ2FsbCdcbiAgICAgID8gJ1NlYXJjaCdcbiAgICAgIDogb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkLnJlcGxhY2UoL18vZywgJyAnKVxuICByZXR1cm4ge1xuICAgIG5vZGVzOiB3aWRnZXROb2RlcyxcbiAgICB0aXRsZTogd2lkZ2V0VGl0bGUsXG4gICAgb3B0aW9uczogZHJvcGRvd25PcHRpb25zXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VEb2N1bWVudE5vZGVzKG9wdGlvbnMpIHtcbiAgdmFyIG5ld1NlY3Rpb25IVE1MID0gJydcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxzZWN0aW9uIGlkPVwiJyArIG9wdGlvbnMuc2x1ZyArICdcIj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8ZGl2IGlkPVwiJyArIG9wdGlvbnMuc2x1ZyArICdfX21hcFwiIGNsYXNzPVwibWFwXCI+PC9kaXY+J1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPGFzaWRlIGNsYXNzPVwidG9vbGJveFwiPidcbiAgbmV3U2VjdGlvbkhUTUwgKz0gb3B0aW9ucy50aXRsZVxuICAgID8gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkIGNsYXNzPVwidWkgbW9iaWxlLW9ubHlcIj48ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyIG1vYmlsZS1vbmx5XCI+PGRpdiBjbGFzcz1cImljb25cIj4gPHNwYW4+PC9zcGFuPiA8c3Bhbj48L3NwYW4+IDxzcGFuPjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVwibWVudSB0cmFuc2xhdGVcIj48L2Rpdj48L2Rpdj4nXG4gICAgOiAnJ1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPGRpdiBjbGFzcz1cImJveFwiPidcbiAgbmV3U2VjdGlvbkhUTUwgKz1cbiAgICBvcHRpb25zLnRpdGxlIHx8IG9wdGlvbnMubG9nbyB8fCBvcHRpb25zLmRlc2NyaXB0aW9uXG4gICAgICA/ICc8aGVhZGVyICBjbGFzcz1cInRyYW5zbGF0ZVwiPiA8aDE+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaWQ9XCJsb2dvXCI+PC9hPjwvaDE+ICA8cCBjbGFzcz1cInRyYW5zbGF0ZVwiPjwvcD48L2hlYWRlcj4nXG4gICAgICA6ICcnXG4gIG5ld1NlY3Rpb25IVE1MICs9XG4gICAgKG9wdGlvbnMuaW5zdHJ1Y3Rpb25zXG4gICAgICA/ICc8cCBjbGFzcz1cInRyYW5zbGF0ZVwiPicgKyBvcHRpb25zLmluc3RydWN0aW9ucyArICc8L3A+J1xuICAgICAgOiAnJykgK1xuICAgICc8ZGl2IGlkPVwiY29udHJvbHNcIj48ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+PC9kaXY+PGZvb3Rlcj48ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+PC9mb290ZXI+PC9kaXY+PC9hc2lkZT4nXG4gIG5ld1NlY3Rpb25IVE1MICs9IG9wdGlvbnMudGl0bGVjYXJkY29udGVudFxuICAgID8gJzxidXR0b24gaWQ9XCInICtcbiAgICAgIG9wdGlvbnMuc2x1ZyArXG4gICAgICAnX19hYm91dFwiIGNsYXNzPVwiYWJvdXQtdHJpZ2dlclwiPkFCT1VUIFRISVMgTUFQPC9idXR0b24+J1xuICAgIDogJydcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzwvc2VjdGlvbj4nXG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IG5ld1NlY3Rpb25IVE1MXG5cbiAgaWYgKG9wdGlvbnMudGl0bGVjYXJkY29udGVudCkge1xuICAgIHZhciBuZXdEaWFsb2dIVE1MID0gJydcbiAgICBuZXdEaWFsb2dIVE1MICs9ICc8ZGl2IGNsYXNzPVwiZGlhbG9nXCIgaWQ9XCInICsgb3B0aW9ucy5zbHVnICsgJ19fZGlhbG9nXCI+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz1cbiAgICAgICc8ZGl2IGNsYXNzPVwiZGlhbG9nLW92ZXJsYXlcIiB0YWJpbmRleD1cIi0xXCIgZGF0YS1hMTF5LWRpYWxvZy1oaWRlPjwvZGl2PidcbiAgICBuZXdEaWFsb2dIVE1MICs9XG4gICAgICAnPGRpYWxvZyBjbGFzcz1cImRpYWxvZy1jb250ZW50XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGlhbG9nVGl0bGVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZGlhbG9nQ29udGVudFwiPidcbiAgICBuZXdEaWFsb2dIVE1MICs9XG4gICAgICAnPGJ1dHRvbiBkYXRhLWExMXktZGlhbG9nLWhpZGUgY2xhc3M9XCJkaWFsb2ctY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgdGhpcyBkaWFsb2cgd2luZG93XCI+JnRpbWVzOzwvYnV0dG9uPidcbiAgICBuZXdEaWFsb2dIVE1MICs9IG9wdGlvbnMudGl0bGVjYXJkdGl0bGVcbiAgICAgID8gJzxoMSBpZD1cImRpYWxvZ1RpdGxlXCI+JyArIG9wdGlvbnMudGl0bGVjYXJkdGl0bGUgKyAnPC9oMT4nXG4gICAgICA6ICcnXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxkaXYgaWQ9XCJkaWFsb2dDb250ZW50XCI+JyArIG9wdGlvbnMudGl0bGVjYXJkY29udGVudCArICc8L2Rpdj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPSAnPC9kaWFsb2c+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz0gJzwvZGl2PidcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBuZXdEaWFsb2dIVE1MXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgdmFyIGRpYWxvZ0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5zbHVnICsgJ19fZGlhbG9nJylcbiAgICB2YXIgbWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMuc2x1ZycpXG4gICAgdmFyIGRpYWxvZ1RyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLnNsdWcgKyAnX19hYm91dCcpXG5cbiAgICB2YXIgZGlhbG9nQm94ID0gbmV3IEExMXlEaWFsb2coZGlhbG9nRWwsIG1haW5FbClcbiAgICB2YXIgZGlhbG9nID0gZGlhbG9nQm94LmRpYWxvZ1xuICAgIGRpYWxvZ0JveC5zaG93KClcbiAgICBkaWFsb2dCb3gub24oJ2hpZGUnLCBmdW5jdGlvbihkaWFsb2dFbCkge1xuICAgICAgZGlhbG9nVHJpZ2dlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH0pXG4gICAgZGlhbG9nQm94Lm9uKCdzaG93JywgZnVuY3Rpb24oZGlhbG9nRWwpIHtcbiAgICAgIGRpYWxvZ1RyaWdnZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH0pXG4gICAgZGlhbG9nVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgZGlhbG9nQm94LnNob3coKVxuICAgIH0pXG4gIH1cblxuICBkb2N1bWVudC50aXRsZSA9IG9wdGlvbnMudGl0bGUgKyAnIHwgQ1NJUyAnICsgb3B0aW9ucy5wcm9ncmFtXG4gIHZhciBtZXRhTG9jYWxlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUxvY2FsZU9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6bG9jYWxlJylcbiAgbWV0YUxvY2FsZU9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdlbl9VUycpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUxvY2FsZU9HKVxuICB2YXIgbWV0YVR5cGVPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVHlwZU9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6dHlwZScpXG4gIG1ldGFUeXBlT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ2FydGljbGUnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUeXBlT0cpXG4gIHZhciBtZXRhV2lkdGhPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhV2lkdGhPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmltYWdlOndpZHRoJylcbiAgbWV0YVdpZHRoT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJzIwMDAnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFXaWR0aE9HKVxuICB2YXIgbWV0YUhlaWdodE9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFIZWlnaHRPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmltYWdlOmhlaWdodCcpXG4gIG1ldGFIZWlnaHRPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnMTMzMycpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUhlaWdodE9HKVxuICB2YXIgbWV0YVR3aXR0ZXJDYXJkT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVR3aXR0ZXJDYXJkT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOmNhcmQnKVxuICBtZXRhVHdpdHRlckNhcmRPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnc3VtbWFyeScpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVR3aXR0ZXJDYXJkT0cpXG4gIHZhciBtZXRhVGl0bGVPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVGl0bGVPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOnRpdGxlJylcbiAgbWV0YVRpdGxlT0cuc2V0QXR0cmlidXRlKFxuICAgICdjb250ZW50JyxcbiAgICBvcHRpb25zLnRpdGxlICsgJyB8IENTSVMgJyArIG9wdGlvbnMucHJvZ3JhbVxuICApXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVRpdGxlT0cpXG4gIHZhciBtZXRhVGl0bGVUd2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFUaXRsZVR3aXR0ZXIuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOnRpdGxlJylcbiAgbWV0YVRpdGxlVHdpdHRlci5zZXRBdHRyaWJ1dGUoXG4gICAgJ2NvbnRlbnQnLFxuICAgIG9wdGlvbnMudGl0bGUgKyAnIHwgQ1NJUyAnICsgb3B0aW9ucy5wcm9ncmFtXG4gIClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhVGl0bGVUd2l0dGVyKVxuICB2YXIgbWV0YURlc2NyaXB0aW9uT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YURlc2NyaXB0aW9uT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzpkZXNjcmlwdGlvbicpXG4gIG1ldGFEZXNjcmlwdGlvbk9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuZGVzY3JpcHRpb24pXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YURlc2NyaXB0aW9uT0cpXG4gIHZhciBtZXRhRGVzY3JpcHRpb25Ud2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOmRlc2NyaXB0aW9uJylcbiAgbWV0YURlc2NyaXB0aW9uVHdpdHRlci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBvcHRpb25zLmRlc2NyaXB0aW9uKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIpXG4gIHZhciBtZXRhSW1hZ2VPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhSW1hZ2VPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmltYWdlJylcbiAgbWV0YUltYWdlT0cuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5zY3JlZW5zaG90KVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFJbWFnZU9HKVxuICB2YXIgbWV0YUltYWdlVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhSW1hZ2VUd2l0dGVyLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjppbWFnZScpXG4gIG1ldGFJbWFnZVR3aXR0ZXIuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5zY3JlZW5zaG90KVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFJbWFnZVR3aXR0ZXIpXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXInKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAubWVudScpLmlubmVyVGV4dCA9XG4gICAgICBvcHRpb25zLnRpdGxlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBoMScpLmlubmVySFRNTCArPVxuICAgICAgb3B0aW9ucy50aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBhJ1xuICAgICkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gb3B0aW9ucy5sb2dvID8gJ3VybCgnICsgb3B0aW9ucy5sb2dvICsgJyknIDogJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgYSdcbiAgICApLmhyZWYgPSBvcHRpb25zLndlYnNpdGUgPyBvcHRpb25zLndlYnNpdGUgOiAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBwJ1xuICAgICkuaW5uZXJUZXh0ID0gb3B0aW9ucy5kZXNjcmlwdGlvbiA/IG9wdGlvbnMuZGVzY3JpcHRpb24gOiAnJ1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZU1ldGFEYXRhLCBwYXJzZVdpZGdldERhdGEgfSBmcm9tICcuL3BhcnNlcnMuanMnXG5pbXBvcnQgbWFrZVdpZGdldHMgZnJvbSAnLi9tYWtlV2lkZ2V0cy5qcydcbmltcG9ydCBtYWtlRG9jdW1lbnROb2RlcyBmcm9tICcuL21ha2VEb2N1bWVudE5vZGVzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpbml0V2l0aFNwcmVhZHNoZWV0KFxuICBkYXRhVVJMLFxuICBvcHRpb25zLFxuICB0cmFuc2xhdGlvbnNcbikge1xuICB2YXIgbWFwXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBkYXRhVVJMICsgb3B0aW9ucy5nb29nbGVTaGVldCArICcvJyArIDIgKyAnL3B1YmxpYy92YWx1ZXM/YWx0PWpzb24nXG4gICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgdmFyIG1ldGFEYXRhID0gcGFyc2VNZXRhRGF0YShqc29uLmZlZWQuZW50cnkpXG4gICAgICAgIHZhciB3aWRnZXRzID0gcGFyc2VXaWRnZXREYXRhKG1ldGFEYXRhKVxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHt9XG4gICAgICAgIE9iamVjdC5rZXlzKG1ldGFEYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzW2RhdGFdID0gbWV0YURhdGFbZGF0YV1cbiAgICAgICAgfSlcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgcHJvcGVydGllc1tkYXRhXSA9IG9wdGlvbnNbZGF0YV1cbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgdHdvRF9wcm9wZXJpdGVzID0gW1xuICAgICAgICAgIHsgbmFtZTogJ2NlbnRlcicsIGRlZmF1bHQ6IFswLCAwXSB9LFxuICAgICAgICAgIHsgbmFtZTogJ2ljb25zaXplJywgZGVmYXVsdDogWzIwLCAyMF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICdpY29uYW5jaG9yJywgZGVmYXVsdDogWzUsIDVdIH0sXG4gICAgICAgICAgeyBuYW1lOiAnc3dib3VuZHMnLCBkZWZhdWx0OiBbLTkwLCAtMTgwXSB9LFxuICAgICAgICAgIHsgbmFtZTogJ25lYm91bmRzJywgZGVmYXVsdDogWzkwLCAxODBdIH1cbiAgICAgICAgXVxuXG4gICAgICAgIHR3b0RfcHJvcGVyaXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgICAgICAgcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXSA9XG4gICAgICAgICAgICB0eXBlb2YgcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyBwcm9wZXJ0aWVzW3Byb3BlcnR5Lm5hbWVdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodiwgMTApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXVxuICAgICAgICAgICAgICAgID8gcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXVxuICAgICAgICAgICAgICAgIDogcHJvcGVydHkuZGVmYXVsdFxuICAgICAgICB9KVxuICAgICAgICBwcm9wZXJ0aWVzLnNsdWcgPSBwcm9wZXJ0aWVzLm1hcElELnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgICAgIHByb3BlcnRpZXMudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zXG4gICAgICAgIHByb3BlcnRpZXMud2lkZ2V0cyA9IHdpZGdldHNcbiAgICAgICAgbWFrZURvY3VtZW50Tm9kZXMocHJvcGVydGllcylcbiAgICAgICAgdmFyIHJlZmVyZW5jZVNoZWV0cyA9IHdpZGdldHMuZmlsdGVyKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICByZXR1cm4gdy5yZWZlcmVuY2VcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAocmVmZXJlbmNlU2hlZXRzKSB7XG4gICAgICAgICAgdmFyIGJveENvbnRlbnQgPSAnJ1xuICAgICAgICAgIHZhciByZWZlcmVuY2VTaGVldFVSTFMgPSB3aWRnZXRzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICAgICAgaWYgKHcucmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIGRhdGFVUkwgK1xuICAgICAgICAgICAgICAgICAgb3B0aW9ucy5nb29nbGVTaGVldCArXG4gICAgICAgICAgICAgICAgICAnLycgK1xuICAgICAgICAgICAgICAgICAgdy5yZWZlcmVuY2UgK1xuICAgICAgICAgICAgICAgICAgJy9wdWJsaWMvdmFsdWVzP2FsdD1qc29uJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odSkge1xuICAgICAgICAgICAgICByZXR1cm4gdVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIHJlZmVyZW5jZVNoZWV0VVJMUy5tYXAoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmZXRjaCh1cmwpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlcykge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzLm1hcChmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihhc3luYyBmdW5jdGlvbihqc29ucykge1xuICAgICAgICAgICAgICBtYXAgPSBhd2FpdCBtYWtlV2lkZ2V0cyhqc29ucywgcHJvcGVydGllcywgYm94Q29udGVudClcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5mb290ZXIgJiYgcHJvcGVydGllcy5mb290ZXIudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvb3Rlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgICAgICAgICAgICAgIGZvb3Rlck5vZGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuZm9vdGVyICsgJyAgPGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PidcbiAgICAgICAgICAgICAgICB2YXIgcGVuVWx0aW1hdGVOb2RlID1cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICcjJyArIHByb3BlcnRpZXMuc2x1ZyArICcgI2NvbnRyb2xzJ1xuICAgICAgICAgICAgICAgICAgKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb3BlcnRpZXMuc2x1ZyArICdoZWFkZXInKVxuICAgICAgICAgICAgICAgIHBlblVsdGltYXRlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgIGZvb3Rlck5vZGUsXG4gICAgICAgICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICAgICAgICAgIG1ha2VMYXllcnMobWFwKVxuICAgICAgICAgIHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgI2NvbnRyb2xzJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmZvb3RlciAmJiBwcm9wZXJ0aWVzLmZvb3Rlci50cmltKCkpIHtcbiAgICAgICAgICB2YXIgZm9vdGVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgICAgICAgZm9vdGVyTm9kZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgcHJvcGVydGllcy5mb290ZXIgKyAnICA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+J1xuICAgICAgICAgIHZhciBwZW5VbHRpbWF0ZU5vZGUgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnICNjb250cm9scycpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb3BlcnRpZXMuc2x1ZyArICdoZWFkZXInKVxuICAgICAgICAgIHBlblVsdGltYXRlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIGZvb3Rlck5vZGUsXG4gICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUubmV4dFNpYmxpbmdcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtNCEuL21haW4uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtNCEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTQhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImltcG9ydCB7IHBhcnNlTGFuZ3VhZ2VEYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xuXG52YXIgdXJsID1cbiAgd2luZG93LmxvY2F0aW9uICE9IHdpbmRvdy5wYXJlbnQubG9jYXRpb25cbiAgICA/IGRvY3VtZW50LnJlZmVycmVyXG4gICAgOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXG52YXIgaHJlZiA9IC9sYW5nPShbXiZdKykvLmV4ZWModXJsKVxud2luZG93LmxhbmcgPSBocmVmID8gaHJlZlsxXSA6IG51bGxcblxudmFyIGxlYWZsZXRMb2FkZWQgPSAwXG5cbnZhciBwcmltYXJ5SnNGaWxlcyA9IFtcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXRAMS4zLjEvZGlzdC9sZWFmbGV0LmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL3doYXR3Zy1mZXRjaEAzLjAuMC9kaXN0L2ZldGNoLnVtZC5qcydcbl1cblxudmFyIHNlY29uZGFyeUpzRmlsZXMgPSBbXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0Lnpvb21zbGlkZXJAMC43LjEvc3JjL0wuQ29udHJvbC5ab29tc2xpZGVyLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXQtZnVsbHNjcmVlbkAxLjAuMi9kaXN0L0xlYWZsZXQuZnVsbHNjcmVlbi5taW4uanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vY2hyb21hLWpzQDIuMC4zL2Nocm9tYS5taW4uanMnLFxuICAnaHR0cHM6Ly9jc2lzLWlsYWIuZ2l0aHViLmlvL21hcC10ZW1wbGF0ZXMvZGlzdC9qcy92ZW5kb3IvQTExeS1EaWFsb2cuanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vY2hvaWNlcy5qc0A3LjAuMC9wdWJsaWMvYXNzZXRzL3NjcmlwdHMvY2hvaWNlcy5taW4uanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldC5tYXJrZXJjbHVzdGVyQDEuNC4xL2Rpc3QvbGVhZmxldC5tYXJrZXJjbHVzdGVyLmpzJyxcbiAgJ2h0dHBzOi8vY3Npcy1pbGFiLmdpdGh1Yi5pby9tYXAtdGVtcGxhdGVzL2Rpc3QvanMvdmVuZG9yL3BhdHRlcm5zLmpzJyxcbiAgJ2h0dHBzOi8vY3Npcy1pbGFiLmdpdGh1Yi5pby9tYXAtdGVtcGxhdGVzL2Rpc3QvanMvdmVuZG9yL2xhdGluaXplLmpzJ1xuXVxuXG5mdW5jdGlvbiBoYW5kbGVMb2FkTGVhZmxldCgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHNlY29uZGFyeUpzRmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWRcbiAgICAgIHZhciBqc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAganNMaW5rLnNyYyA9IGZpbGVcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoanNMaW5rKVxuXG4gICAgICBqc0xpbmsub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxlYWZsZXRMb2FkZWQrK1xuXG4gICAgICAgIGlmIChsZWFmbGV0TG9hZGVkID09PSBzZWNvbmRhcnlKc0ZpbGVzLmxlbmd0aCArIHByaW1hcnlKc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJlc29sdmUobGVhZmxldExvYWRlZClcbiAgICAgICAgICByZXR1cm4gbGVhZmxldExvYWRlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW1wb3J0RmlsZXMoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcmltYXJ5SnNGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZFxuICAgICAgdmFyIGpzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBqc0xpbmsuc3JjID0gZmlsZVxuICAgICAganNMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZWFmbGV0TG9hZGVkKytcblxuICAgICAgICBpZiAobGVhZmxldExvYWRlZCA9PT0gcHJpbWFyeUpzRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgaGFuZGxlTG9hZExlYWZsZXQoKVxuICAgICAgICAgIHJlc29sdmUobGVhZmxldExvYWRlZClcbiAgICAgICAgICByZXR1cm4gbGVhZmxldExvYWRlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGpzTGluaylcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFrZU1hcChvcHRpb25zKSB7XG4gIGlmICghbGVhZmxldExvYWRlZCkge1xuICAgIHJldHVybiBhd2FpdCBpbXBvcnRGaWxlcygpLnRoZW4oYXN5bmMgZnVuY3Rpb24oc2NyaXB0c0xvYWRlZCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGluaXQob3B0aW9ucylcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhd2FpdCBpbml0KG9wdGlvbnMpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdChvcHRpb25zKSB7XG4gIHZhciBkYXRhVVJMID0gJ2h0dHBzOi8vc3ByZWFkc2hlZXRzLmdvb2dsZS5jb20vZmVlZHMvbGlzdC8nXG4gIHdpbmRvdy5kZWZhdWx0Q29sb3IgPVxuICAgIG9wdGlvbnMub2NlYW5jb2xvciB8fCBvcHRpb25zLm9jZWFuQ29sb3IgfHwgb3B0aW9uc1snb2NlYW4gY29sb3InXVxuICB2YXIgdHJhbnNsYXRpb25zXG5cbiAgaWYgKGxhbmcpIHtcbiAgICBmZXRjaChkYXRhVVJMICsgb3B0aW9ucy5nb29nbGVTaGVldCArICcvJyArIDMgKyAnL3B1YmxpYy92YWx1ZXM/YWx0PWpzb24nKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgdHJhbnNsYXRpb25zID0gcGFyc2VMYW5ndWFnZURhdGEoanNvbi5mZWVkLmVudHJ5KVxuXG4gICAgICAgIGNvbnN0IGluaXRXaXRoU3ByZWFkc2hlZXQgPSByZXF1aXJlKCcuL2luaXRXaXRoU3ByZWFkc2hlZXQuanMnKS5kZWZhdWx0XG4gICAgICAgIHJldHVybiBhd2FpdCBpbml0V2l0aFNwcmVhZHNoZWV0KGRhdGFVUkwsIG9wdGlvbnMsIHRyYW5zbGF0aW9ucylcbiAgICAgIH0pXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5nb29nbGVTaGVldCkge1xuICAgIGNvbnN0IGluaXRXaXRoU3ByZWFkc2hlZXQgPSByZXF1aXJlKCcuL2luaXRXaXRoU3ByZWFkc2hlZXQuanMnKS5kZWZhdWx0XG4gICAgcmV0dXJuIGF3YWl0IGluaXRXaXRoU3ByZWFkc2hlZXQoZGF0YVVSTCwgb3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbml0V2l0aG91dFNwcmVhZHNoZWV0ID0gcmVxdWlyZSgnLi9pbml0V2l0aFNwcmVhZHNoZWV0LmpzJykuZGVmYXVsdFxuICAgIHJldHVybiBhd2FpdCBpbml0V2l0aG91dFNwcmVhZHNoZWV0KG9wdGlvbnMpXG4gIH1cbn1cbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2NzcydcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJ1xuaW1wb3J0IHsgbWFrZU1hcCB9IGZyb20gJy4vanMvbWFrZU1hcCdcbmltcG9ydCB7IGV4dGVybmFsTGluayB9IGZyb20gJy4vanMvaGVscGVycy5qcydcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuL2pzL2hlbHBlcnMuanMnXG53aW5kb3cubWFrZU1hcCA9IG1ha2VNYXBcbndpbmRvdy5leHRlcm5hbExpbmsgPSBleHRlcm5hbExpbmtcbndpbmRvdy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZVxuXG4vLyBleGFtcGxlcygpXG5hc3luYyBmdW5jdGlvbiBleGFtcGxlcygpIHtcbiAgdmFyIG5ld01hcFxuICBuZXdNYXAgPSBhd2FpdCBtYWtlTWFwKHtcbiAgICBnb29nbGVTaGVldDogJzExaE42dXpYY083YW1uNWJULWEwOVQ4b0V2Z3J3N2xaLW9CZkd0TFJ6cHdzJyxcbiAgICBtYXBJRDogJ2FmcmljYScsXG4gICAgZm9ybWF0UG9wdXBDb250ZW50OiBmdW5jdGlvbiBmb3JtYXRQb3B1cENvbnRlbnQoZmVhdHVyZSwgbWFwKSB7XG4gICAgICB2YXIgZGVzY3JpcHRpb24gPSBmZWF0dXJlLnByb3BlcnRpZXMuZGVzY3JpcHRpb25cbiAgICAgICAgPyBmZWF0dXJlLnByb3BlcnRpZXMuZGVzY3JpcHRpb24gK1xuICAgICAgICAgIChmZWF0dXJlLnByb3BlcnRpZXMubGlua1xuICAgICAgICAgICAgPyAnIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIiBocmVmPVwiJyArXG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllcy5saW5rICtcbiAgICAgICAgICAgICAgJ1wiPC9hPicgK1xuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMubGlua190aXRsZSArXG4gICAgICAgICAgICAgIGV4dGVybmFsTGluayArXG4gICAgICAgICAgICAgICc8L2E+J1xuICAgICAgICAgICAgOiAnJylcbiAgICAgICAgOiAnJ1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwVGl0bGVTdHlsZVwiPicgK1xuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMucG9ydCArXG4gICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgIGZlYXR1cmUucHJvcGVydGllcy5wb3J0X2NpdHkgK1xuICAgICAgICAnLCAnICtcbiAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLnBvcnRfY291bnRyeSArXG4gICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPkludmVzdG1lbnQgVHlwZTwvZGl2Pjx1bCBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuaW52ZXN0bWVudF90eXBlXG4gICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnPGxpPicgKyBjYXBpdGFsaXplKHIpICsgJzwvbGk+J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmpvaW4oJycpICtcbiAgICAgICAgJzwvdWw+JyArXG4gICAgICAgICc8cD4nICtcbiAgICAgICAgZGVzY3JpcHRpb24gK1xuICAgICAgICAnPC9wPidcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgdmFyIGNob2tlcG9pbnQgPSBMLmRpdkljb24oe1xuICAgIGNsYXNzTmFtZTogJ2Nob2tlcG9pbnQtbGFiZWwnLFxuICAgIGh0bWw6ICc8c3Bhbj5jaG9rZSBwb2ludDwvc3Bhbj4nLFxuICAgIGljb25BbmNob3I6IFstNzUsIDcuNV0sXG4gICAgaWNvblNpemU6IFsyMCwgMjBdXG4gIH0pXG5cbiAgbmV3IEwubWFya2VyKFsxMi41ODY3MzI0MzI0NjQwNjIsIDQzLjM0MTA2NDQ1MzEyNV0sIHtcbiAgICBpY29uOiBjaG9rZXBvaW50XG4gIH0pLmFkZFRvKG5ld01hcC5sZWFmbGV0KVxuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy50b29sYm94IGlucHV0LnVpW3R5cGU9XFwnY2hlY2tib3hcXCddJylcbiAgICAucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJylcblxuICBjb25zb2xlLmxvZygnYWZyaWNhJylcblxuICB2YXIgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnb29nbGVTaGVldDogJzFnRzBtNHhSVmVCUTdlVHlwZlowU1Fldl9SeFVLMHVqXzlJbHlVcVNldjdjJyxcbiAgICAgIG1hcElEOiAnYWlkLXRlcnJvcmlzbScsXG4gICAgICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uKGZlYXR1cmUsIG1hcCkge1xuICAgICAgICB2YXIganNvbnMgPSBtYXAuanNvblxuICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgZmVhdHVyZXM6IGEuZmVhdHVyZXMuY29uY2F0KGIuZmVhdHVyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmVhdHVyZXMubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICAgIHJldHVybiBmLnByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHZhciBjb3VudHJ5RGF0YSA9IGpzb25zXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICByZXR1cm4gZi5jb3VudHJ5ID09PSBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0ZXJyb3Jpc206IGEudGVycm9yaXNtID8gYS50ZXJyb3Jpc20gOiBiLnRlcnJvcmlzbSxcbiAgICAgICAgICAgICAgZm9yZWlnbl9hc3Npc3RhbmNlOiBhLmZvcmVpZ25fYXNzaXN0YW5jZVxuICAgICAgICAgICAgICAgID8gYS5mb3JlaWduX2Fzc2lzdGFuY2VcbiAgICAgICAgICAgICAgICA6IGIuZm9yZWlnbl9hc3Npc3RhbmNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICB2YXIgZ3JvdXBzID0gJycsXG4gICAgICAgICAgYXNzaXN0YW5jZSxcbiAgICAgICAgICB0ZXJyb3Jpc20gPSBjb3VudHJ5RGF0YS50ZXJyb3Jpc20sXG4gICAgICAgICAgYWlkID0ge1xuICAgICAgICAgICAgZTogJyQxMDAsMDAwLDAwMC0kMSw1MDAsMDAwLDAwMCcsXG4gICAgICAgICAgICBkOiAnJDMwLDAwMCwwMDAtJDk5LDAwMCwwMDAnLFxuICAgICAgICAgICAgYzogJyQyLDAwMCwwMDAtJDI5LDk5OSwwMDAnLFxuICAgICAgICAgICAgYjogJyQxMCwwMDAtJDEsOTk5LDAwMCcsXG4gICAgICAgICAgICBhOiAnJDAtJDEwLDAwMCdcbiAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlcnJvcmlzbS5sZW5ndGgpIHtcbiAgICAgICAgICBncm91cHMgPSBgPGJyPjxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+VGVycm9yaXN0IEdyb3VwczwvZGl2PlxuICAgICAgICA8dWw+JHt0ZXJyb3Jpc21cbiAgICAuc3BsaXQoJ34nKVxuICAgIC5tYXAoZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgIHJldHVybiBgPGxpIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPiR7Z3JvdXB9PC9saT5gXG4gICAgfSlcbiAgICAuam9pbignJyl9PC91bD5gXG4gICAgICAgIH1cblxuICAgICAgICBhc3Npc3RhbmNlID0gYWlkW2NvdW50cnlEYXRhLmZvcmVpZ25fYXNzaXN0YW5jZV1cbiAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPkZvcmVpZ24gQXNzaXN0YW5jZTogJHsoYXNzaXN0YW5jZSA9XG4gICAgICAgICAgICAgIGFpZFtjb3VudHJ5RGF0YS5mb3JlaWduX2Fzc2lzdGFuY2VdKX08L2Rpdj5gXG4gICAgICAgICAgOiAnJ1xuXG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInBvcHVwVGl0bGVTdHlsZVwiPiR7ZmVhdHVyZS5wcm9wZXJ0aWVzLmNvdW50cnl9PC9kaXY+XG4gICAgICAgICR7YXNzaXN0YW5jZX0gICAgICAke2dyb3Vwc31gXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnb29nbGVTaGVldDogJzFSOUozaGFHTERzUlBodFQxUDFKdlFMX1h6YVBaWnNhMzN2QkZPNnhzNmc0JyxcbiAgICAgIG1hcElEOiAnY2hpbmFwb3dlcicsXG4gICAgICB0aXRsZWNhcmR0aXRsZTogbnVsbCxcbiAgICAgIHRpdGxlY2FyZGNvbnRlbnQ6IG51bGwsXG4gICAgICBtYXBib3hTdHlsZTpcbiAgICAgICAgbGFuZyAmJiBsYW5nLmluZGV4T2YoJ3poLScpID4gLTFcbiAgICAgICAgICA/ICdjaXR1aTN3YXcwMDE2MmpvMXpjc2YxdXJqJ1xuICAgICAgICAgIDogJ2NqODRzOWJldDEwZjUycm8ybHJuYTUweWcnLFxuICAgICAgb25FYWNoRmVhdHVyZToge1xuICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uIG1vdXNlb3ZlcihlKSB7XG4gICAgICAgICAgdGhpcy5vcGVuUG9wdXAoZS5sYXRsbmcpXG4gICAgICAgIH0sXG4gICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbiBtb3VzZW92ZXIoZSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uKGZlYXR1cmUsIG1hcCkge1xuICAgICAgICB2YXIgcHJlZml4ID0gbGFuZyA/ICdfJyArIGxhbmcgOiAnJ1xuXG4gICAgICAgIHZhciBuYW1lID0gZmVhdHVyZS5wcm9wZXJ0aWVzWyduYW1lJyArIHByZWZpeF1cblxuICAgICAgICAvLyB2YXIgZGVzY3JpcHRpb24gPSBmZWF0dXJlLnByb3BlcnRpZXNbJ2Rlc2NyaXB0aW9uJyArIHByZWZpeF1cbiAgICAgICAgLy8gICAucmVwbGFjZSgvPGEgaHJlZj0vZ2ksICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPScpXG4gICAgICAgIC8vICAgLnJlcGxhY2UoLzxcXC9hPi9naSwgZXh0ZXJuYWxMaW5rICsgJzwvYT4nKVxuXG4gICAgICAgIHZhciBvdXRwb3N0ID0gZmVhdHVyZS5wcm9wZXJ0aWVzLmNoaW5lc2Vfb3V0cG9zdHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgIG91dHBvc3QgK1xuICAgICAgICAgIChuYW1lICYmIG91dHBvc3QgPyAnPGJyLz4nIDogJycpICtcbiAgICAgICAgICAobmFtZSAhPT0gb3V0cG9zdCA/IG5hbWUgOiAnJykgK1xuICAgICAgICAgIChmZWF0dXJlLnByb3BlcnRpZXMub2JzZXJ2ZWRcbiAgICAgICAgICAgID8gJzxici8+KGV4cGVjdGVkKSdcbiAgICAgICAgICAgIDogZmVhdHVyZS5wcm9wZXJ0aWVzLm9ic2VydmVkID09PSBmYWxzZVxuICAgICAgICAgICAgICA/ICc8YnIgLz4ob2JzZXJ2ZWQpJ1xuICAgICAgICAgICAgICA6ICcnKSArXG4gICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgJ2Rlc2NyaXB0aW9uJyArXG4gICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgXVxuXG4gIG1hcHMucmV2ZXJzZSgpLmZvckVhY2goKG1hcCwgaSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cobWFwLm1hcElEKVxuICAgICAgbWFrZU1hcChtYXApXG4gICAgfSwgMjAwMCAqIGkpXG4gIH0pXG5cbiAgdmFyIG1vcmVfbWFwcyA9IFtcbiAgICB7XG4gICAgICBpZDogJ3ZlbmV6dWVsYScsXG4gICAgICBzaGVldDogJzEzdHZveGM3a0I4QnpTS082N2M2a2Y5NDlrcXRlX28tV0ZGNVcyMWg1Tzk4J1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdmZWF0dXJlcy1tYXAnLFxuICAgICAgc2hlZXQ6ICcxUkVGTko4V1o5Zk96U2hZQzhTcFVKN3BaUUVNa1dscXpDMktwTWItd1N5YydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmVzb3VyY2VzLW1hcCcsXG4gICAgICBzaGVldDogJzExclVhb0lTU2txYWtFS1o2aGk0eGVWYmJpRW5mUGkxcXNSb3E0cjBTclBBJyxcbiAgICAgICdwb3B1cCBoZWFkZXJzJzogW1xuICAgICAgICBsYW5nID8gJ25hbWVfJyArIGxhbmcgOiAnbmFtZScsXG4gICAgICAgIGxhbmcgPyAnZGVzY3JpcHRpb25fJyArIGxhbmcgOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAnbGluaydcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYWVnaXMnLFxuICAgICAgc2hlZXQ6ICcxNW9KU21rMEtXM181RDhVajFlU2l6LWUtUHBXNTFlOU4tWFNnTElRdFpJaydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnd2JpLXRlcnJvcmlzbScsXG4gICAgICBzaGVldDogJzFkNEVlNjVLVF9TNDZ4MG1rNjJzVjZDWURwTVo0MGMyb1lKNkJRczlhXzEwJ1xuICAgIH1cbiAgXVxuXG4gIG1vcmVfbWFwcy5yZXZlcnNlKCkuZm9yRWFjaCgobWFwLCBpKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhtYXAuaWQpXG5cbiAgICAgIG1ha2VNYXAoe1xuICAgICAgICBtYXBJRDogbWFwLmlkLFxuICAgICAgICBleHRlcm5hbExpbmtUZXh0OiAneW8sIGNsaWNrIGhlcmUnLFxuICAgICAgICBnb29nbGVTaGVldDogbWFwLnNoZWV0LFxuICAgICAgICBmdWxsU2NyZWVuOiB0cnVlLFxuICAgICAgICAnbWFwYm94IHN0eWxlJzogJ2NqcmF3YzF6czJiemMyc3EzeTl3dnQyMnQnLFxuICAgICAgICAnb2NlYW4gY29sb3InOiAnI2NhZDJkMycsXG4gICAgICAgICdwb3B1cCBoZWFkZXJzJzogbWFwWydwb3B1cCBoZWFkZXJzJ10sIC8vIEFycmF5XG4gICAgICAgIC8vIFwicG9wdXAgY29udGVudFwiOiBbXSxcbiAgICAgICAgLy8gcG9pbnRTdHlsZTogZnVuY3Rpb24oZmVhdHVyZSxsYXRsbmcpe30sXG4gICAgICAgIC8vIG5vblBvaW50U3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpe30sXG4gICAgICAgIC8vIG9uRWFjaEZlYXR1cmU6IHtcbiAgICAgICAgLy8gY2xpY2s6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVyKXt9XG4gICAgICAgIC8vIGRiY2xpY2s6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVyLCBtYXApe30sXG4gICAgICAgIC8vIG1vdXNlZG93bjogZnVuY3Rpb24oZmVhdHVyZSwgbGF5ZXIsIG1hcCl7fSxcbiAgICAgICAgLy8gbW91c2VlbnRlcjogZnVuY3Rpb24oZmVhdHVyZSwgbGF5ZXIsIG1hcCl7fSxcbiAgICAgICAgLy8gbW91c2VvdXQ6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVyLCBtYXApe31cbiAgICAgICAgLy8gfSxcbiAgICAgICAgZm9ybWF0UG9wdXBDb250ZW50OlxuICAgICAgICAgIG1hcC5pZCA9PT0gJ2FlZ2lzJ1xuICAgICAgICAgICAgPyBmdW5jdGlvbihmZWF0dXJlLCBtYXApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicG9wdXBUaXRsZVN0eWxlXCI+JHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMubmFtZVxuICAgICAgICAgICAgICB9PC9kaXY+XG5cbiAgICAgICAgICAgICR7XG4gIGZlYXR1cmUucHJvcGVydGllcy50b3RhbF9ndWlkZWRfbWlzc2lsZV9jcnVpc2Vyc1xuICAgID8gYDxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+R3VpZGVkIE1pc3NpbGUgQ3J1aXNlcnM6ICR7XG4gICAgICBmZWF0dXJlLnByb3BlcnRpZXMudG90YWxfZ3VpZGVkX21pc3NpbGVfY3J1aXNlcnNcbiAgICB9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPkJNRC1DYXBhYmxlOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPiR7XG4gIGZlYXR1cmUucHJvcGVydGllcy5ibWRfY2FwYWJsZV9nbWNcbn08L3NwYW4+PC9kaXY+YFxuICAgIDogJydcbn1cbiAgICAgICAgJHtcbiAgZmVhdHVyZS5wcm9wZXJ0aWVzLnRvdGFsX2d1aWRlZF9taXNzaWxlX2Rlc3Ryb3llcnNcbiAgICA/IGA8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPkd1aWRlZCBNaXNzaWxlIERlc3Ryb3llcnM6ICR7XG4gICAgICBmZWF0dXJlLnByb3BlcnRpZXMudG90YWxfZ3VpZGVkX21pc3NpbGVfZGVzdHJveWVyc1xuICAgIH08L2Rpdj5cbiAgICAgICAgPGRpdj48c3BhbiBjbGFzcz0ncG9wdXBFbnRyeVN0eWxlJz5CTUQtQ2FwYWJsZTo8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdwb3B1cEVudHJ5U3R5bGUnPiR7XG4gIGZlYXR1cmUucHJvcGVydGllcy50b3RhbF9ndWlkZWRfbWlzc2lsZV9kZXN0cm95ZXJzXG59PC9zcGFuPjwvZGl2PmBcbiAgICA6ICcnXG59YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBtYXAuaWQgPT09ICd2ZW5lenVlbGEnXG4gICAgICAgICAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSwgbWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgIChmZWF0dXJlLnByb3BlcnRpZXMucmVjb2duaXRpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3knXG4gICAgICAgICAgICAgICAgICAgICAgPyBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnIHJlY29nbml6ZXMgSnVhbiBHdWFpZFxceEYzIGFzIFByZXNpZGVudCBvZiBWZW5lenVlbGEnXG4gICAgICAgICAgICAgICAgICAgICAgOiBmZWF0dXJlLnByb3BlcnRpZXMuY291bnRyeSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnIHJlY29nbml6ZXMgTmljb2xcXHhFMXMgTWFkdXJvIGFzIFByZXNpZGVudCBvZiBWZW5lenVlbGE8L2Rpdj4nKSArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgfSlcbiAgICB9LCAyMDAwICogaSlcbiAgfSlcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfVxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbClcbiAgICByZXR1cm4gZXZ0XG4gIH1cblxuICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlXG5cbiAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnRcbn1cblxuQXJyYXkucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbihwcm9wZXJ0eTEsIHByb3BlcnR5Mikge1xuICByZXR1cm4gcHJvcGVydHkyXG4gICAgPyB0aGlzLnJlZHVjZShmdW5jdGlvbihncm91cHMsIGl0ZW0pIHtcbiAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BlcnR5Ml1bcHJvcGVydHkxXVxuICAgICAgZ3JvdXBzW3ZhbF0gPSBncm91cHNbdmFsXSB8fCBbXVxuICAgICAgZ3JvdXBzW3ZhbF0ucHVzaChpdGVtKVxuICAgICAgcmV0dXJuIGdyb3Vwc1xuICAgIH0sIHt9KVxuICAgIDogdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XG4gICAgICB2YXIgdmFsID0gaXRlbVtwcm9wZXJ0eTFdXG4gICAgICBncm91cHNbdmFsXSA9IGdyb3Vwc1t2YWxdIHx8IFtdXG4gICAgICBncm91cHNbdmFsXS5wdXNoKGl0ZW0pXG4gICAgICByZXR1cm4gZ3JvdXBzXG4gICAgfSwge30pXG59XG5cblJlZ0V4cC5lc2NhcGUgPSBmdW5jdGlvbihzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1tcXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=