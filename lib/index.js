'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactIntlRedux = require('react-intl-redux');

var _reactIntl = require('react-intl');

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

var _Store = require('./Store/Store');

var _Store2 = _interopRequireDefault(_Store);

var _AccountLib = require('./Container/AccountLib');

var _AccountLib2 = _interopRequireDefault(_AccountLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _reactIntl.addLocaleData)([].concat(_toConsumableArray(_en2.default), _toConsumableArray(_fr2.default)));

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _Store2.default },
  _react2.default.createElement(
    _reactIntlRedux.IntlProvider,
    null,
    _react2.default.createElement(_AccountLib2.default, null)
  )
), document.getElementById('root'));
//# sourceMappingURL=index.js.map