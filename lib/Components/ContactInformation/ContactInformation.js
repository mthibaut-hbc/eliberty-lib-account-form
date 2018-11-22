'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactIntl = require('react-intl');

var _reactSvgInline = require('react-svg-inline');

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

var _reactCollapse = require('react-collapse');

var _AccountForm = require('../../Components/AccountForm/AccountForm');

var _AccountForm2 = _interopRequireDefault(_AccountForm);

var _book = require('../../Assets/svg/book.svg');

var _book2 = _interopRequireDefault(_book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class : Quick Address Recap
 */
var ContactInformation = function (_Component) {
  _inherits(ContactInformation, _Component);

  // Define Constructor
  function ContactInformation(props) {
    _classCallCheck(this, ContactInformation);

    return _possibleConstructorReturn(this, (ContactInformation.__proto__ || Object.getPrototypeOf(ContactInformation)).call(this, props));
  }

  _createClass(ContactInformation, [{
    key: 'renderQuickInfoRecap',
    value: function renderQuickInfoRecap(localInfo) {
      return _react2.default.createElement(
        'div',
        { className: 'quickInfoRecap col-xs-12' },
        _react2.default.createElement(_reactSvgInline2.default, { svg: _book2.default, className: 'bookSvg' }),
        _react2.default.createElement(
          'p',
          null,
          'Informations de contact'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-4' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.email.label', defaultMessage: 'email' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.lastname', defaultMessage: 'lastname' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.firstname', defaultMessage: 'firstname' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.mobile', defaultMessage: 'mobile' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.billingaddress.address1', defaultMessage: 'address1' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-6' },
          _react2.default.createElement(
            'p',
            null,
            ContactInformation.getEmailValue(localInfo) || ""
          ),
          _react2.default.createElement(
            'p',
            null,
            ContactInformation.getFirstnameValue(localInfo) || ""
          ),
          _react2.default.createElement(
            'p',
            null,
            ContactInformation.getFirstnameValue(localInfo) || ""
          ),
          _react2.default.createElement(
            'p',
            null,
            ContactInformation.getMobileValue(localInfo) || ""
          ),
          _react2.default.createElement(
            'p',
            null,
            ContactInformation.getAddress1Value(localInfo) || "",
            ContactInformation.getAddress2Value(localInfo) || "",
            ContactInformation.getZipcodeValue(localInfo) || "",
            ContactInformation.getCityValue(localInfo) || "",
            ContactInformation.getCountryValue(localInfo) || ""
          )
        ),
        _react2.default.createElement(
          'button',
          { className: 'btnEditContact',
            onClick: function onClick() {
              return "";
            },
            type: 'submit' },
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.identification.modification.button', defaultMessage: 'edit' })
        )
      );
    }

    // renderAccountForm() {
    //   return (
    //     <div id="accountForm" className="checkout_part_content accountForm">
    //       <div className="panel-body">
    //         <AccountForm
    //           contact={this.props.contact}
    //           localInfo={this.props.localInfo}
    //           render={this.props.render}
    //           setAddress={this.props.setAddress}
    //           setFirstname={this.props.setFirstname}
    //           setLastname={this.props.setLastname}
    //           setMobile={this.props.setMobile}
    //           setOptIn={this.props.setOptIn}
    //           setPhone={this.props.setPhone}
    //           setEmail={this.props.setEmail}
    //           setBirthdate={this.props.setBirthdate}
    //           setPassword={this.props.setPassword}
    //         />
    //       </div>
    //     </div>
    //   );
    // }

  }, {
    key: 'render',
    value: function render() {
      var localInfo = this.props.localInfo;


      return _react2.default.createElement(
        'div',
        { className: 'contactInformation' },
        this.renderQuickInfoRecap(localInfo),
        this.renderAccountForm()
      );
    }
  }], [{
    key: 'getLastnameValue',
    value: function getLastnameValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('values').get('lastname') : '';
    }
  }, {
    key: 'getFirstnameValue',
    value: function getFirstnameValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('values').get('firstname') : '';
    }
  }, {
    key: 'getBirthdateValue',
    value: function getBirthdateValue(localInfo) {
      return localInfo.size > 0 ? moment(localInfo.get('values').get('birthdate'), 'YYYY-MM-DD HH:mm:ssZZ').format('DD/MM/YYYY') : '';
    }
  }, {
    key: 'getOptinValue',
    value: function getOptinValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('values').get('optIn') : '';
    }
  }, {
    key: 'getMobileValue',
    value: function getMobileValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('values').get('mobile') : '';
    }
  }, {
    key: 'getPhoneValue',
    value: function getPhoneValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('values').get('phone') : '';
    }
  }, {
    key: 'getEmailValue',
    value: function getEmailValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('values').get('email') : '';
    }
  }, {
    key: 'getAddress1Value',
    value: function getAddress1Value(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new Map()).get('address1') : '';
    }
  }, {
    key: 'getAddress2Value',
    value: function getAddress2Value(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new Map()).get('address2') : '';
    }
  }, {
    key: 'getZipcodeValue',
    value: function getZipcodeValue(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new Map()).get('zipcode') : '';
    }
  }, {
    key: 'getCityValue',
    value: function getCityValue(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new Map()).get('city') : '';
    }
  }, {
    key: 'getCountryValue',
    value: function getCountryValue(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new Map()).get('country') : '';
    }
  }]);

  return ContactInformation;
}(_react.Component);

ContactInformation.proptypes = {
  localInfo: _propTypes.PropTypes.object.isRequired,
  render: _propTypes.PropTypes.object.isRequired,
  contact: _propTypes.PropTypes.func.isRequired
  // setAddress: PropTypes.func.isRequired,
  // setFirstname: PropTypes.func.isRequired,
  // setLastname: PropTypes.func.isRequired,
  // setMobile: PropTypes.func.isRequired,
  // setOptIn: PropTypes.func.isRequired,
  // setPhone: PropTypes.func.isRequired,
  // setEmail: PropTypes.func.isRequired,
  // setBirthdate: PropTypes.func.isRequired,
  // setPassword: PropTypes.func.isRequired,
};

ContactInformation.defaultProps = {
  localInfo: {}
};

exports.default = (0, _reactIntl.injectIntl)(ContactInformation);
//# sourceMappingURL=ContactInformation.js.map