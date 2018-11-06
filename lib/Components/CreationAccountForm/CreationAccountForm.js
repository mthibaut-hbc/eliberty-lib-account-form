'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactIntl = require('react-intl');

var _ValidatorFieldsHelper = require('../../Helpers/ValidatorFieldsHelper');

var _reactIntlTelInput = require('react-intl-tel-input');

var _reactIntlTelInput2 = _interopRequireDefault(_reactIntlTelInput);

var _moment = require('moment/src/moment');

var _moment2 = _interopRequireDefault(_moment);

var _PasswordAndProgressBar = require('../PasswordAndProgressBar/PasswordAndProgressBar');

var _PasswordAndProgressBar2 = _interopRequireDefault(_PasswordAndProgressBar);

var _AddressForm = require('../AddressForm/AddressForm');

var _AddressForm2 = _interopRequireDefault(_AddressForm);

require('react-intl-tel-input/dist/libphonenumber');

require('react-intl-tel-input/dist/main.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class : Creation Account Form
 */
var CreationAccountForm = function (_Component) {
  _inherits(CreationAccountForm, _Component);

  _createClass(CreationAccountForm, null, [{
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
      return localInfo.size > 0 ? (0, _moment2.default)(localInfo.get('values').get('birthdate'), 'YYYY-MM-DD HH:mm:ssZZ').format('DD/MM/YYYY') : '';
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

    // Define Constructor

  }]);

  function CreationAccountForm(props) {
    _classCallCheck(this, CreationAccountForm);

    var _this = _possibleConstructorReturn(this, (CreationAccountForm.__proto__ || Object.getPrototypeOf(CreationAccountForm)).call(this, props));

    _this.onchangeOptin = _this.onchangeOptin.bind(_this);
    _this.onchangeMobile = _this.onchangeMobile.bind(_this);
    _this.onchangePhone = _this.onchangePhone.bind(_this);
    _this.onChangeLastname = _this.onChangeLastname.bind(_this);
    _this.onChangeFirstname = _this.onChangeFirstname.bind(_this);
    _this.onChangeEmail = _this.onChangeEmail.bind(_this);
    _this.onChangeBirthdate = _this.onChangeBirthdate.bind(_this);
    return _this;
  }

  /**
   * Executed after the first render only on the client side
   */


  _createClass(CreationAccountForm, [{
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
      var value = this.props.localInfo.get('optIn');
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
  }, {
    key: 'onChangeLastname',
    value: function onChangeLastname(e) {
      this.props.setLastname(e.target.value);
    }
  }, {
    key: 'onChangeFirstname',
    value: function onChangeFirstname(e) {
      this.props.setFirstname(e.target.value);
    }
  }, {
    key: 'onChangeEmail',
    value: function onChangeEmail(e) {
      this.props.setEmail(e.target.value);
    }
  }, {
    key: 'onChangeBirthdate',
    value: function onChangeBirthdate(e) {
      this.props.setBirthdate(e.target.value);
    }

    /**
     * Display text of error for second password
     displayError() {
      const error = 'vérifiez!';
      return <p className="errorInputText">{error}</p>;
    }
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formatMessage = this.props.intl.formatMessage;
      var _props = this.props,
          localInfo = _props.localInfo,
          render = _props.render,
          setAddress = _props.setAddress;


      return _react2.default.createElement(
        'div',
        { id: 'creationAccountForm', className: 'checkout_part_content creationAccountForm ${this.props.className' },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'h5',
            { className: 'text-center' },
            _react2.default.createElement(
              'em',
              null,
              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.newaccount.label', defaultMessage: 'new account' })
            )
          ),
          _react2.default.createElement(
            'h5',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.required.input', defaultMessage: 'required' })
          ),
          _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.newaccount.title', defaultMessage: 'new account title' })
          ),
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              'div',
              { className: 'row form_content_wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-xs-12' },
                      _react2.default.createElement('input', { type: 'text',
                        id: 'creationaccount_user_email',
                        name: 'creationaccount_user_email',
                        required: true,
                        placeholder: formatMessage({
                          id: 'rp.checkout.customer.email.label',
                          defaultMessage: 'email'
                        }),
                        'data-control': 'true',
                        value: CreationAccountForm.getEmailValue(localInfo) || "",
                        onChange: function onChange(e) {
                          return _this2.onChangeEmail(e);
                        }
                      }),
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'creationaccount_user_email', className: 'control-label' },
                        formatMessage({ id: 'rp.checkout.customer.email.label', defaultMessage: 'email' })
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(_PasswordAndProgressBar2.default, {
              setPassword: this.props.setPassword
            }),
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.newaccount.contact_title', defaultMessage: 'Contact Information' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'row form_content_wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-xs-12' },
                      _react2.default.createElement('input', { type: 'text',
                        id: 'creationaccount_lastname',
                        required: true,
                        placeholder: formatMessage({
                          id: 'rp.checkout.customer.lastname',
                          defaultMessage: 'lastname'
                        }),
                        'data-control': 'true',
                        value: CreationAccountForm.getLastnameValue(localInfo) || "",
                        onChange: function onChange(e) {
                          return _this2.onChangeLastname(e);
                        }
                      }),
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'creationaccount_lastname', className: 'control-label' },
                        formatMessage({ id: 'rp.checkout.customer.lastname', defaultMessage: 'lastname' })
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row form_content_wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-xs-12' },
                      _react2.default.createElement('input', { type: 'text',
                        id: 'creationaccount_firstname',
                        required: true,
                        placeholder: formatMessage({
                          id: 'rp.checkout.customer.firstname',
                          defaultMessage: 'firstname'
                        }),
                        'data-control': 'true',
                        value: CreationAccountForm.getFirstnameValue(localInfo) || "",
                        onChange: function onChange(e) {
                          return _this2.onChangeFirstname(e);
                        }
                      }),
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'creationaccount_firstname', className: 'control-label' },
                        formatMessage({ id: 'rp.checkout.customer.firstname', defaultMessage: 'firstname' })
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row form_content_wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-xs-12' },
                      _react2.default.createElement('input', { type: 'text',
                        id: 'creationaccount_birthdate',
                        required: true,
                        className: 'rp_date',
                        placeholder: formatMessage({
                          id: 'rp.checkout.customer.birthdate',
                          defaultMessage: 'birthdate'
                        }),
                        'data-control': 'true',
                        value: CreationAccountForm.getBirthdateValue(localInfo) || "",
                        onChange: function onChange(e) {
                          return _this2.onChangeBirthdate(e);
                        }
                      }),
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'creationaccount_birthdate', className: 'control-label' },
                        formatMessage({ id: 'rp.checkout.customer.birthdate', defaultMessage: 'birthdate' })
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row form_content_wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-6 no-padding' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12' },
                    _react2.default.createElement(_reactIntlTelInput2.default, { preferredCountries: ['fr'],
                      css: ['intl-tel-input', 'form-control'],
                      fieldId: 'account_user_mobile',
                      utilsScript: 'libphonenumber.js',
                      format: true,
                      defaultValue: '',
                      autoPlaceholder: true,
                      autoHideDialCode: true,
                      onPhoneNumberChange: this.onchangeMobile,
                      onPhoneNumberBlur: this.onchangeMobile,
                      value: CreationAccountForm.getMobileValue(localInfo) || "",
                      formatOnInit: false
                    }),
                    _react2.default.createElement(
                      'div',
                      { className: 'phone-icon-elements' },
                      _react2.default.createElement('span', { className: 'phone-checker phone-icon fa fa-2x form-control-feedback withoutprepend fa-check' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-6 no-padding' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12' },
                    _react2.default.createElement(_reactIntlTelInput2.default, { preferredCountries: ['fr'],
                      css: ['intl-tel-input', 'form-control'],
                      fieldId: 'account_user_phone',
                      utilsScript: 'libphonenumber.js',
                      format: true,
                      defaultValue: '',
                      autoPlaceholder: true,
                      autoHideDialCode: true,
                      onPhoneNumberChange: this.onchangePhone,
                      onPhoneNumberBlur: this.onchangePhone,
                      value: CreationAccountForm.getPhoneValue(localInfo) || "",
                      defaultCountry: 'fr',
                      formatOnInit: false
                    }),
                    _react2.default.createElement(
                      'div',
                      { className: 'phone-icon-elements' },
                      _react2.default.createElement('span', { className: 'phone-checker phone-icon fa fa-2x form-control-feedback withoutprepend fa-exclamation-triangle' })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(_AddressForm2.default, {
              localInfo: localInfo,
              render: render,
              setAddress: setAddress
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
                      id: 'creationaccount_optIn',
                      required: true,
                      defaultChecked: CreationAccountForm.getOptinValue(localInfo) || false,
                      value: '1',
                      onChange: function onChange(e) {
                        return _this2.onchangeOptin(e);
                      }
                    }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'creationaccount_optIn' },
                      _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.checkout.payment.optin', defaultMessage: 'optIn' })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 cgv' },
              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.checkout.cnil', defaultMessage: 'Cnil' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12' },
                _react2.default.createElement(
                  'b',
                  null,
                  _react2.default.createElement(
                    'b',
                    null,
                    _react2.default.createElement(
                      'button',
                      { className: 'btn-main btn-full btn-lg small-margin-top',
                        onClick: function onClick() {
                          return _this2.props.createContact();
                        },
                        type: 'submit' },
                      _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.next.btn', defaultMessage: 'accept and continue' })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CreationAccountForm;
}(_react.Component);

CreationAccountForm.proptypes = {
  localInfo: _propTypes.PropTypes.object.isRequired,
  createContact: _propTypes.PropTypes.func.isRequired,
  render: _propTypes.PropTypes.object.isRequired,
  setAddress: _propTypes.PropTypes.func.isRequired,
  setBirthdate: _propTypes.PropTypes.func.isRequired,
  setEmail: _propTypes.PropTypes.func.isRequired,
  setFirstname: _propTypes.PropTypes.func.isRequired,
  setLastname: _propTypes.PropTypes.func.isRequired,
  setMobile: _propTypes.PropTypes.func.isRequired,
  setOptIn: _propTypes.PropTypes.func.isRequired,
  setPassword: _propTypes.PropTypes.func.isRequired,
  setPhone: _propTypes.PropTypes.func.isRequired
};

CreationAccountForm.defaultProps = {
  localInfo: {}
};

exports.default = (0, _reactIntl.injectIntl)(CreationAccountForm);
//# sourceMappingURL=CreationAccountForm.js.map