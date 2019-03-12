'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactIntl = require('react-intl');

var _moment = require('moment/src/moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactIntlTelInput = require('react-intl-tel-input');

var _reactIntlTelInput2 = _interopRequireDefault(_reactIntlTelInput);

var _AddressForm = require('../AddressForm/AddressForm');

var _AddressForm2 = _interopRequireDefault(_AddressForm);

var _ValidatorFieldsHelper = require('../../Helpers/ValidatorFieldsHelper');

require('react-intl-tel-input/dist/main.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class : Account Form
 */
var FormAccountEdit = function (_Component) {
  _inherits(FormAccountEdit, _Component);

  function FormAccountEdit(props) {
    _classCallCheck(this, FormAccountEdit);

    var _this = _possibleConstructorReturn(this, (FormAccountEdit.__proto__ || Object.getPrototypeOf(FormAccountEdit)).call(this, props));

    _this.onchangeOptin = _this.onchangeOptin.bind(_this);
    _this.onchangeMobile = _this.onchangeMobile.bind(_this);
    _this.onchangePhone = _this.onchangePhone.bind(_this);
    return _this;
  }

  /**
   * Executed after the first render only on the client side
   */


  _createClass(FormAccountEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // We add element label for input mobile and phone
      this.setLabelElementForInput('account_user_mobile', 'rp.checkout.customer.mobile');
      this.setLabelElementForInput('account_user_phone', 'rp.checkout.customer.phone');
    }

    /**
     *
     * @param idLabel
     * @param idTrad
     */

  }, {
    key: 'setLabelElementForInput',
    value: function setLabelElementForInput(idLabel, idTrad) {
      var newlabel = document.createElement("Label");
      newlabel.setAttribute('class', 'control-label paddingLeftPhone');
      newlabel.setAttribute('for', idLabel);
      newlabel.innerHTML = this.props.intl.formatMessage({ id: idTrad, defaultMessage: 'phone number' });

      var elemLabel = document.getElementById(idLabel);
      elemLabel.setAttribute('data-control', 'true');
      elemLabel.after(newlabel);

      document.getElementById(idLabel).setAttribute('required', 'required');
    }

    /**
     *
     * @param e
     */

  }, {
    key: 'onchangeOptin',
    value: function onchangeOptin(e) {
      var value = this.props.localInfo.get('values').get('optIn');
      this.props.setOptIn(value);
    }

    /**
     *
     * @param status
     * @param value
     * @param countryData
     * @param number
     * @param id
     */

  }, {
    key: 'onchangeMobile',
    value: function onchangeMobile(status, value, countryData, number, id) {
      this.props.setMobile(value);
    }

    /**
     *
     * @param status
     * @param value
     * @param countryData
     * @param number
     * @param id
     */

  }, {
    key: 'onchangePhone',
    value: function onchangePhone(status, value, countryData, number, id) {
      this.props.setPhone(value);
    }

    /**
     *
     * @param key
     * @returns {string}
     */

  }, {
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
      return this.props.localInfo.size > 0 ? (0, _moment2.default)(this.props.localInfo.get(key), 'YYYY-MM-DD HH:mm:ssZZ').format('DD/MM/YYYY') : '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formatMessage = this.props.intl.formatMessage;


      return _react2.default.createElement(
        'div',
        { id: 'accountForm', className: 'checkout_part_content accountForm' },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'div',
            { className: 'row form_content_wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement('input', {
                type: 'text',
                id: 'account_user_lastname',
                disabled: 'disabled',
                required: 'required',
                placeholder: formatMessage({ id: 'rp.checkout.customer.lastname', defaultMessage: 'lastname' }),
                'data-control': 'true',
                value: this.getValueForInput('lastname') || ""
              }),
              _react2.default.createElement(
                'label',
                { htmlFor: 'account_user_lastname', className: 'control-label' },
                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.lastname', defaultMessage: 'lastname' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement('input', {
                type: 'text',
                id: 'account_user_firstname',
                disabled: 'disabled',
                required: 'required',
                placeholder: formatMessage({ id: 'rp.checkout.customer.firstname', defaultMessage: 'firstname' }),
                'data-control': 'true',
                value: this.getValueForInput('firstname') || ""
              }),
              _react2.default.createElement(
                'label',
                { htmlFor: 'account_user_firstname', className: 'control-label' },
                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.firstname', defaultMessage: 'firstname' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row form_content_wrapper ' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement('input', {
                type: 'text',
                id: 'account_user_birthdate',
                disabled: 'disabled',
                required: 'required',
                className: 'rp_date',
                placeholder: formatMessage({ id: 'rp.checkout.customer.birthdate', defaultMessage: 'birthdate' }),
                'data-control': 'true',
                value: this.getBirthdateValue('birthdate') || ""
              }),
              _react2.default.createElement(
                'label',
                { htmlFor: 'account_user_birthdate', className: 'control-label' },
                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.birthdate', defaultMessage: 'birthdate' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row form_content_wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(_reactIntlTelInput2.default, {
                preferredCountries: ['fr'],
                css: ['intl-tel-input', 'form-control'],
                fieldId: 'account_user_mobile',
                utilsScript: 'libphonenumber.js',
                format: true,
                defaultValue: '',
                autoPlaceholder: true,
                autoHideDialCode: true,
                onPhoneNumberChange: this.onchangeMovil,
                onPhoneNumberBlur: this.onchangeMovil,
                value: this.getValueForInput('mobile') || '',
                formatOnInit: false
              }),
              _react2.default.createElement(
                'div',
                { className: 'phone-icon-elements' },
                _react2.default.createElement('span', { className: 'phone-checker phone-icon fa fa-2x form-control-feedback withoutprepend fa-check' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(_reactIntlTelInput2.default, {
                preferredCountries: ['fr'],
                css: ['intl-tel-input', 'form-control'],
                fieldId: 'account_user_phone',
                utilsScript: 'libphonenumber.js',
                format: true,
                defaultValue: '',
                autoPlaceholder: true,
                autoHideDialCode: true,
                onPhoneNumberChange: this.onchangePhone,
                onPhoneNumberBlur: this.onchangePhone,
                value: this.getValueForInput('phone') || '',
                defaultCountry: 'fr',
                formatOnInit: false
              }),
              _react2.default.createElement(
                'div',
                { className: 'phone-icon-elements' },
                _react2.default.createElement('span', {
                  className: 'phone-checker phone-icon fa fa-2x form-control-feedback withoutprepend fa-exclamation-triangle' })
              )
            )
          ),
          _react2.default.createElement(_AddressForm2.default, {
            localInfo: this.props.localInfo
            // render={render}
            //   updateAddress={updateAddress}
          }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12 cgv-option' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-12' },
                _react2.default.createElement(
                  'div',
                  { className: 'checkbox' },
                  _react2.default.createElement('input', { type: 'checkbox',
                    id: 'account_user_optIn',
                    required: 'required',
                    defaultChecked: this.getValueForInput('optIn') || false,
                    value: '1',
                    onChange: function onChange(e) {
                      return _this2.onchangeOptin(e);
                    }
                  }),
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'account_user_optIn' },
                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.checkout.payment.optin', defaultMessage: 'optIn' })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 cgv' },
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.checkout.cnil', defaultMessage: 'cnil' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(
                'b',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  _react2.default.createElement(
                    'button',
                    {
                      className: 'btn-main btn-full btn-lg small-margin-top',
                      type: 'submit',
                      onClick: function onClick() {
                        return console.log('UPDATE CONTACT');
                      }
                    },
                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.next.btn', defaultMessage: 'accept and continue' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FormAccountEdit;
}(_react.Component);

FormAccountEdit.propTypes = {
  localInfo: _propTypes.PropTypes.object.isRequired
  // onClickEditAccount: PropTypes.func.isRequired,
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

FormAccountEdit.defaultProps = {
  localInfo: {}
};

exports.default = (0, _reactIntl.injectIntl)(FormAccountEdit);
//# sourceMappingURL=FormAccountEdit.js.map