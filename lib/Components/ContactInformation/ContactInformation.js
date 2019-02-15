'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactIntl = require('react-intl');

var _immutable = require('immutable');

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
        _react2.default.createElement(
          'span',
          { className: 'bookSvg' },
          ContactInformation.renderSvgBook()
        ),
        _react2.default.createElement(
          'p',
          { className: 'titleRecapContact' },
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.summary.info.contact.label', defaultMessage: 'contact information' })
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
          { className: 'btnEditContact'
            //  onClick={() => this.props.onClickEditAccount}
            , type: 'submit' },
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.edit.data.button.label', defaultMessage: 'edit' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;


      return _react2.default.createElement(
        'div',
        { className: 'contactInformation' },
        this.renderQuickInfoRecap((0, _immutable.fromJS)(data.localInfo))
      );
    }
  }], [{
    key: 'getLastnameValue',
    value: function getLastnameValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('lastname') : '';
    }
  }, {
    key: 'getFirstnameValue',
    value: function getFirstnameValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('firstname') : '';
    }
  }, {
    key: 'getBirthdateValue',
    value: function getBirthdateValue(localInfo) {
      return localInfo.size > 0 ? moment(localInfo.get('birthdate'), 'YYYY-MM-DD HH:mm:ssZZ').format('DD/MM/YYYY') : '';
    }
  }, {
    key: 'getOptinValue',
    value: function getOptinValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('optIn') : '';
    }
  }, {
    key: 'getMobileValue',
    value: function getMobileValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('mobile') : '';
    }
  }, {
    key: 'getPhoneValue',
    value: function getPhoneValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('phone') : '';
    }
  }, {
    key: 'getEmailValue',
    value: function getEmailValue(localInfo) {
      return localInfo.size > 0 ? localInfo.get('email') : '';
    }
  }, {
    key: 'getAddress1Value',
    value: function getAddress1Value(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new _immutable.Map()).get('address1') : '';
    }
  }, {
    key: 'getAddress2Value',
    value: function getAddress2Value(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new _immutable.Map()).get('address2') : '';
    }
  }, {
    key: 'getZipcodeValue',
    value: function getZipcodeValue(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new _immutable.Map()).get('zipcode') : '';
    }
  }, {
    key: 'getCityValue',
    value: function getCityValue(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new _immutable.Map()).get('city') : '';
    }
  }, {
    key: 'getCountryValue',
    value: function getCountryValue(localInfo) {
      return localInfo.size !== undefined ? localInfo.get('addresses', new _immutable.Map()).get('country') : '';
    }
  }, {
    key: 'renderSvgBook',
    value: function renderSvgBook() {
      return _react2.default.createElement(
        'svg',
        { width: '24px',
          height: '24px',
          viewBox: '0 0 24 24',
          version: '1.1' },
        _react2.default.createElement(
          'g',
          { id: 'icon-/-adress-/-black', stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
          _react2.default.createElement('rect', { id: 'Rectangle', stroke: '#585858', x: '5.5', y: '1.5', width: '15', height: '21', rx: '3' }),
          _react2.default.createElement('circle', { id: 'Oval-4-Copy', stroke: '#585858', cx: '13', cy: '10', r: '2' }),
          _react2.default.createElement('path', { d: 'M4,11.5 L7,11.5', id: 'Path-5-Copy', stroke: '#585858', 'stroke-linecap': 'round' }),
          _react2.default.createElement('path', { d: 'M4,15.5 L7,15.5', id: 'Path-5-Copy-2', stroke: '#585858', 'stroke-linecap': 'round' }),
          _react2.default.createElement('path', { d: 'M4,7.5 L7,7.5', id: 'Path-5', stroke: '#585858', 'stroke-linecap': 'round' }),
          _react2.default.createElement('path', { d: 'M10,15 C9.99958562,13 10.999588,12 13.0000073,12 C15.0004265,12 16.0004289,13 16.0000145,15', id: 'Path-6', stroke: '#585858' })
        )
      );
    }
  }]);

  return ContactInformation;
}(_react.Component);

ContactInformation.proptypes = {
  data: _propTypes.PropTypes.object.isRequired
  //onClickEditAccount: PropTypes.function.isRequired,
};

ContactInformation.defaultProps = {
  data: {}
};

exports.default = (0, _reactIntl.injectIntl)(ContactInformation);
//# sourceMappingURL=ContactInformation.js.map