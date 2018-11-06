'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _PasswordCheckHelper = require('../../Helpers/PasswordCheckHelper');

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class : Progress bar
 */
var PasswordAndProgressBar = function (_Component) {
  _inherits(PasswordAndProgressBar, _Component);

  // Define Constructor
  function PasswordAndProgressBar(props) {
    _classCallCheck(this, PasswordAndProgressBar);

    var _this = _possibleConstructorReturn(this, (PasswordAndProgressBar.__proto__ || Object.getPrototypeOf(PasswordAndProgressBar)).call(this, props));

    _this.state = {
      password: '',
      passwordConfirm: '',
      checkOk: true
    };
    _this.onChangeFirstPassword = _this.onChangeFirstPassword.bind(_this);
    _this.onChangeFirstPassword = _this.onChangeFirstPassword.bind(_this);
    return _this;
  }

  /**
   * Validation First Password Progress Bar
   * @param e
   */


  _createClass(PasswordAndProgressBar, [{
    key: 'onChangeFirstPassword',
    value: function onChangeFirstPassword(e) {
      this.setState({ password: e.target.value });
      (0, _PasswordCheckHelper.checkStrengthPassword)(e.target.value);
      this.props.setPassword(e.target.value);
    }

    /**
     * Validation Second Password equality first password
     * @param e
     */

  }, {
    key: 'onChangeSecondPassword',
    value: function onChangeSecondPassword(e) {
      this.setState({ passwordConfirm: e.target.value });
      var checkOk = (0, _PasswordCheckHelper.checkPasswordConfirm)(this.state.password, e.target.value);
      this.setState({ checkOk: checkOk });
    }

    /**
     * Display text of error for second password
     */

  }, {
    key: 'displayError',
    value: function displayError() {
      var error = 'les mots de passés doivent être idéntiques';
      return this.state.checkOk ? null : _react2.default.createElement(
        'p',
        { className: 'errorInputText' },
        error
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formatMessage = this.props.intl.formatMessage;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row form_content_wrapper password_first' },
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
                  { className: 'col-xs-12 passwordfirst new-password' },
                  _react2.default.createElement(
                    'div',
                    { className: 'content-psw' },
                    _react2.default.createElement('input', { type: 'password',
                      id: 'user_password_first',
                      className: 'show-pwd-active',
                      required: 'required',
                      autoComplete: 'off',
                      'data-control': 'true',
                      value: this.state.password,
                      onChange: function onChange(e) {
                        return _this2.onChangeFirstPassword(e);
                      },
                      placeholder: formatMessage({
                        id: 'rp.checkout.customer.password.label',
                        defaultMessage: 'Password'
                      }) }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'user_password_first', className: 'control-label' },
                      _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.password.label', defaultMessage: 'Password' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'group-eye' },
                      _react2.default.createElement('button', { id: 'btn-eye', type: 'button', onClick: function onClick() {
                          return false;
                        }, className: 'btn-eye pwd-eye' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'content-required-pwd', tabIndex: '-1' },
                    _react2.default.createElement('span', { className: 'progress-bar' }),
                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.identification.password.required.list',
                      defaultMessage: 'Password required list' }),
                    _react2.default.createElement(
                      'ul',
                      { className: 'list-valid-pwd' },
                      _react2.default.createElement(
                        'li',
                        { className: 'pwd-item1' },
                        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.identification.password.required.character.min',
                          defaultMessage: '8 characters min' })
                      ),
                      _react2.default.createElement(
                        'li',
                        { className: 'pwd-item2' },
                        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.identification.password.required.capital.letter',
                          defaultMessage: 'A capital letter' })
                      ),
                      _react2.default.createElement(
                        'li',
                        { className: 'pwd-item3' },
                        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.forms.identification.password.required.number',
                          defaultMessage: 'A number' })
                      )
                    )
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
                  _react2.default.createElement('input', { type: 'password',
                    id: 'user_password_second',
                    required: 'required',
                    autoComplete: 'off',
                    'data-control': 'true',
                    className: this.state.checkOk ? '' : 'inputError show-pwd-active',
                    value: this.state.passwordConfirm,
                    onChange: function onChange(e) {
                      return _this2.onChangeSecondPassword(e);
                    },
                    placeholder: formatMessage({
                      id: 'rp.checkout.customer.password.validate',
                      defaultMessage: 'password validate'
                    }) }),
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'user_password_second', className: 'control-label' },
                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'rp.checkout.customer.password.validate', defaultMessage: 'A number' })
                  ),
                  this.displayError(),
                  _react2.default.createElement(
                    'div',
                    { className: 'group-eye' },
                    _react2.default.createElement('button', { id: 'btn-eye-confirm', type: 'button', onClick: function onClick() {
                        return false;
                      }, className: 'btn-eye pwd-eye' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PasswordAndProgressBar;
}(_react.Component);

PasswordAndProgressBar.proptypes = {
  setPassword: _propTypes.PropTypes.func.isRequired
};

exports.default = (0, _reactIntl.injectIntl)(PasswordAndProgressBar);
//# sourceMappingURL=PasswordAndProgressBar.js.map