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

var _reactSvgInline = require('react-svg-inline');

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class : Quick Address Recap
 */
var ContactInformation = function (_Component) {
  _inherits(ContactInformation, _Component);

  _createClass(ContactInformation, null, [{
    key: 'renderSvgBook',

    /**
     *
     * @returns {*}
     */
    value: function renderSvgBook() {
      return _react2.default.createElement(
        'svg',
        { width: '24px', height: '24px', viewBox: '0 0 24 24', version: '1.1' },
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

  function ContactInformation(props) {
    _classCallCheck(this, ContactInformation);

    return _possibleConstructorReturn(this, (ContactInformation.__proto__ || Object.getPrototypeOf(ContactInformation)).call(this, props));
  }

  /**
   *
   * @param key
   * @returns {string}
   */


  _createClass(ContactInformation, [{
    key: 'getValueForInput',
    value: function getValueForInput(key) {
      return this.props.localInfo.size > 0 ? this.props.localInfo.get(key) : '';
    }

    /**
     *
     * @param localInfo
     * @returns {string}
     */

  }, {
    key: 'getBirthdateValue',
    value: function getBirthdateValue(key) {
      return this.props.localInfo.size > 0 ? moment(this.props.localInfo.get(key), 'YYYY-MM-DD HH:mm:ssZZ').format('DD/MM/YYYY') : '';
    }

    /**
     *
     * @param key
     * @returns {string}
     */

  }, {
    key: 'getAddressValue',
    value: function getAddressValue(key) {
      return this.props.localInfo.size !== undefined ? this.props.localInfo.get('addresses', new _immutable.Map()).get(key) : '';
    }

    /**
     *
     * @param localInfo
     * @returns {*}
     */

  }, {
    key: 'renderQuickInfoRecap',
    value: function renderQuickInfoRecap(localInfo) {
      return _react2.default.createElement(
        'div',
        { className: 'quickInfoRecap col-xs-12' },
        _react2.default.createElement(
          'div',
          { className: 'headerTitle' },
          _react2.default.createElement(
            'span',
            { className: 'bookSvg' },
            ContactInformation.renderSvgBook()
          ),
          _react2.default.createElement(
            'h4',
            { className: 'titleRecapContact' },
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.summary.info.contact.label', defaultMessage: 'contact information' })
          )
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
            this.getValueForInput('email') || ""
          ),
          _react2.default.createElement(
            'p',
            null,
            this.getValueForInput('lastname') || ""
          ),
          _react2.default.createElement(
            'p',
            null,
            this.getValueForInput('firstname') || ""
          ),
          _react2.default.createElement(
            'p',
            null,
            this.getValueForInput('mobile') || ""
          ),
          _react2.default.createElement(
            'p',
            null,
            (this.getAddressValue('address1') || "") + ' ' + (this.getAddressValue('address2') || "")
          ),
          _react2.default.createElement(
            'p',
            null,
            (this.getAddressValue('zipcode') || "") + ' ' + (this.getAddressValue('city') || "")
          )
        ),
        _react2.default.createElement(
          'button',
          { className: 'btnEditContact'
            //  onClick={() => this.props.onClickEditAccount}
            , onClick: function onClick() {
              return console.log('EDITER COMPTE');
            },
            type: 'submit' },
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.edit.data.button.label', defaultMessage: 'edit' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'contactInformation' },
        this.renderQuickInfoRecap(this.props.localInfo)
      );
    }
  }]);

  return ContactInformation;
}(_react.Component);

ContactInformation.propTypes = {
  localInfo: _propTypes.PropTypes.object.isRequired
  // onClickEditAccount: PropTypes.function.isRequired,
};

ContactInformation.defaultProps = {
  localInfo: {}
};

exports.default = (0, _reactIntl.injectIntl)(ContactInformation);
//# sourceMappingURL=ContactInformation.js.map