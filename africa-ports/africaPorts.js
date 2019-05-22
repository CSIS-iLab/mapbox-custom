"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var map;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return makeMap({
            googleSheet: '11hN6uzXcO7amn5bT-a09T8oEvgrw7lZ-oBfGtLRzpws',
            mapID: 'africa',
            formatPopupContent: function formatPopupContent(feature, map) {
              return '<div class="popupTitleStyle">' + feature.properties.port + '</div><div class="popupEntryStyle">' + feature.properties.port_city + ', ' + feature.properties.port_country + '</div><div class="popupHeaderStyle">Investment Type</div><ul class="popupEntryStyle">' + feature.properties.investment_type.split(',').map(function (r) {
                return '<li>' + capitalize(r) + '</li>';
              }).join('') + '</ul>';
            }
          });

        case 2:
          map = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
