'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _ContactInformation = require('../Components/ContactInformation/ContactInformation');

var _ContactInformation2 = _interopRequireDefault(_ContactInformation);

var _FormAccountEdit = require('../Components/FormAccountEdit/FormAccountEdit');

var _FormAccountEdit2 = _interopRequireDefault(_FormAccountEdit);

var _AccountForm = require('../../../../../identification/src/Components/AccountForm/AccountForm');

var _AccountForm2 = _interopRequireDefault(_AccountForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountLib = function AccountLib(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ContactInformation2.default, {
      data: props.data
    }),
    _react2.default.createElement(_FormAccountEdit2.default, {
      data: props.data
      // onClickEditAccount={props.onClickEditAccount}
      // setAddress={this.props.setAddress}
      // setFirstname={this.props.setFirstname}
      // setLastname={this.props.setLastname}
      // setMobile={this.props.setMobile}
      // setOptIn={this.props.setOptIn}
      // setPhone={this.props.setPhone}
      // setEmail={this.props.setEmail}
      // setBirthdate={this.props.setBirthdate}
      // setPassword={this.props.setPassword}
    })
  );
};

exports.default = AccountLib;
//# sourceMappingURL=AccountLib.js.map