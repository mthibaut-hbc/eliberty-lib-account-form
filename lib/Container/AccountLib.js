'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactCollapse = require('react-collapse');

var _immutable = require('immutable');

var _ContactInformation = require('../Components/ContactInformation/ContactInformation');

var _ContactInformation2 = _interopRequireDefault(_ContactInformation);

var _FormAccountEdit = require('../Components/FormAccountEdit/FormAccountEdit');

var _FormAccountEdit2 = _interopRequireDefault(_FormAccountEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import AccountForm from "../../../../../identification/src/Components/AccountForm/AccountForm";

var AccountLib = function (_Component) {
  _inherits(AccountLib, _Component);

  function AccountLib() {
    _classCallCheck(this, AccountLib);

    return _possibleConstructorReturn(this, (AccountLib.__proto__ || Object.getPrototypeOf(AccountLib)).apply(this, arguments));
  }

  _createClass(AccountLib, [{
    key: 'render',
    value: function render() {
      var data = (0, _immutable.fromJS)(this.props.data);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ContactInformation2.default, {
          localInfo: data.get('localInfo')
        }),
        _react2.default.createElement(_FormAccountEdit2.default, {
          localInfo: data.get('localInfo')
          // onClickEditAccount={data.onClickEditAccount}
          // setAddress={data.setAddress}
          // setFirstname={data.setFirstname}
          // setLastname={data.setLastname}
          // setMobile={data.setMobile}
          // setOptIn={data.setOptIn}
          // setPhone={data.setPhone}
          // setEmail={data.setEmail}
          // setBirthdate={data.setBirthdate}
          // setPassword={data.setPassword}
        })
      );
    }
  }]);

  return AccountLib;
}(_react.Component);

;

exports.default = AccountLib;
//# sourceMappingURL=AccountLib.js.map