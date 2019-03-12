'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactIntl = require('react-intl');

var _reactCountryRegionSelector = require('react-country-region-selector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class : Address Form
 */
var AddressForm = function (_Component) {
  _inherits(AddressForm, _Component);

  _createClass(AddressForm, null, [{
    key: 'initializeAutocomplete',


    /**
     * Takes the input ID to be grafted onto, creates an autocomplete,
     * and listens for the place_changed event
     *
     * @param id
     */
    value: function initializeAutocomplete(id) {
      var element = document.getElementById(id);
      if (element) {
        var options = {
          types: ['geocode']
        };
        var autocomplete = new google.maps.places.Autocomplete(element, options);
        google.maps.event.addListener(autocomplete, 'place_changed', AddressForm.onPlaceChanged);
      }
    }

    /**
     * We will retrieve detailed information of the chosen address
     */

  }, {
    key: 'onPlaceChanged',
    value: function onPlaceChanged() {
      var place = this.getPlace();
      var fullAddress = [];

      for (var i in place.address_components) {
        var component = place.address_components[i];

        for (var j in component.types) {
          var typeElement = document.getElementById(component.types[j]);

          if (component.types[j] === 'street_number') {
            fullAddress[0] = component.long_name;
          }

          if (component.types[j] === 'route') {
            fullAddress[1] = component.long_name;
          }

          if (component.types[j] === 'country') {
            document.getElementById('country_dropdown').value = component.long_name;
          }

          document.getElementById('fullAddr').setAttribute('value', fullAddress);
          document.getElementById('fullAddr').value = fullAddress;

          if (typeElement) {
            typeElement.setAttribute('value', component.long_name);
            typeElement.value = component.long_name;
          }
        }
      }
    }

    // Define Constructor

  }]);

  function AddressForm(props) {
    _classCallCheck(this, AddressForm);

    var _this = _possibleConstructorReturn(this, (AddressForm.__proto__ || Object.getPrototypeOf(AddressForm)).call(this, props));

    _this.state = {
      country: ''
    };

    _this.onchangeAddress = _this.onchangeAddress.bind(_this);
    return _this;
  }

  /**
   * Executed after the first render only on the client side
   */


  _createClass(AddressForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // We add a DOM event here to show an alert if the DIV containing the place is load.
      google.maps.event.addDomListener(window, 'load', function () {
        AddressForm.initializeAutocomplete('address_billingaddress_address1');
      });
    }

    /**
     *
     * @param value
     * @param id
     */

  }, {
    key: 'onchangeAddress',
    value: function onchangeAddress(value, id) {
      this.props.setAddress(id, value);
    }

    /**
     *
     * @param value
     */

  }, {
    key: 'selectCountry',
    value: function selectCountry(value) {
      this.setState({ country: value });
      this.onchangeAddress(value, 'country');
    }

    /**
     *
     * @param key
     * @returns {string}
     */

  }, {
    key: 'getAddressValue',
    value: function getAddressValue(key) {
      return this.props.localInfo.size > 0 ? this.props.localInfo.get('addresses', new Map()).get(key) : '';
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
          { className: 'row form_content_wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement('input', {
                type: 'text',
                id: 'address_billingaddress_address1',
                'data-control': 'true',
                autoComplete: 'address-line1',
                value: this.getAddressValue('address1') || '',
                onChange: function onChange(e) {
                  return _this2.onchangeAddress(e.target.value, 'address1');
                },
                required: true
              }),
              _react2.default.createElement(
                'label',
                { className: 'control-label', htmlFor: 'address_billingaddress_address1' },
                formatMessage({ id: 'rp.checkout.billingaddress.address1', defaultMessage: 'address1' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row form_content_wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement('input', {
                type: 'text',
                id: 'fullAddr',
                name: 'fullAddr',
                'data-control': 'true',
                autoComplete: 'address-line2',
                value: this.getAddressValue('address2') || '',
                onChange: function onChange(e) {
                  return _this2.onchangeAddress(e.target.value, 'address2');
                }
              }),
              _react2.default.createElement(
                'label',
                { className: 'control-label', htmlFor: 'fullAddr' },
                formatMessage({ id: 'rp.checkout.billingaddress.address2', defaultMessage: 'address2' })
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
                _react2.default.createElement('input', {
                  type: 'text',
                  id: 'postal_code',
                  name: 'postal_code',
                  'data-control': 'true',
                  autoComplete: 'postal-code',
                  value: this.getAddressValue('zipcode') || '',
                  onChange: function onChange(e) {
                    return _this2.onchangeAddress(e.target.value, 'zipcode');
                  },
                  required: true
                }),
                _react2.default.createElement(
                  'label',
                  { className: 'control-label', htmlFor: 'postal_code' },
                  formatMessage({ id: 'rp.checkout.billingaddress.zipcode', defaultMessage: 'zipcode' })
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
                _react2.default.createElement('input', {
                  type: 'text',
                  id: 'locality',
                  name: 'locality',
                  'data-control': 'true',
                  autoComplete: 'address-line2',
                  value: this.getAddressValue('city') || '',
                  required: true,
                  onChange: function onChange(e) {
                    return _this2.onchangeAddress(e.target.value, 'city');
                  }
                }),
                _react2.default.createElement(
                  'label',
                  { className: 'control-label', htmlFor: 'locality' },
                  formatMessage({ id: 'rp.checkout.billingaddress.city', defaultMessage: 'city' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(_reactCountryRegionSelector.CountryDropdown, {
          defaultOptionLabel: formatMessage({ id: 'rp.checkout.billingaddress.country', defaultMessage: 'country' }),
          value: this.getAddressValue('country') || ''
          // valueType={'short'}
          , onChange: function onChange(value) {
            _this2.selectCountry(value);
            // this.onchangeAddress(e, 'country');
          }
        })
      );
    }
  }]);

  return AddressForm;
}(_react.Component);

AddressForm.propTypes = {
  intl: _reactIntl.intlShape.isRequired, // for the internationalization
  localInfo: _propTypes.PropTypes.object
  //  render: PropTypes.object.isRequired,
  //  setAddress: PropTypes.func.isRequired,
};

AddressForm.defaultProps = {
  localInfo: {}
};

exports.default = (0, _reactIntl.injectIntl)(AddressForm);
//# sourceMappingURL=AddressForm.js.map