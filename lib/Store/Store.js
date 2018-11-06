'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _Reducers = require('../Reducers/Reducers');

var _Reducers2 = _interopRequireDefault(_Reducers);

var _defaultState = require('../Config/defaultState');

var _defaultState2 = _interopRequireDefault(_defaultState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_Reducers2.default, _defaultState2.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

exports.default = store;
//# sourceMappingURL=Store.js.map