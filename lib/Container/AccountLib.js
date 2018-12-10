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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountLib = function AccountLib(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ContactInformation2.default, {
      data: props.data
    }),
    _react2.default.createElement(
      Collapse,
      { isOpened: undefined.props.render.get('openCreationAccount', false) },
      _react2.default.createElement(_FormAccountEdit2.default, {
        data: props.data,
        onClickEditAccount: props.onClickEditAccount,
        setAddress: undefined.props.setAddress,
        setFirstname: undefined.props.setFirstname,
        setLastname: undefined.props.setLastname,
        setMobile: undefined.props.setMobile,
        setOptIn: undefined.props.setOptIn,
        setPhone: undefined.props.setPhone,
        setEmail: undefined.props.setEmail,
        setBirthdate: undefined.props.setBirthdate,
        setPassword: undefined.props.setPassword
      })
    )
  );
};

exports.default = AccountLib;
//# sourceMappingURL=AccountLib.js.map