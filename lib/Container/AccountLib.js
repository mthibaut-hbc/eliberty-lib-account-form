'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _ContactInformation = require('../Components/ContactInformation/ContactInformation');

var _ContactInformation2 = _interopRequireDefault(_ContactInformation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountLib = function AccountLib(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      null,
      'HELLO AccountLib'
    ),
    _react2.default.createElement(_ContactInformation2.default, {
      identificationRedux: props.identificationRedux
    })
  );
};

exports.default = AccountLib;
//# sourceMappingURL=AccountLib.js.map