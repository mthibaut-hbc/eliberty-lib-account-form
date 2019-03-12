import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { CountryDropdown } from 'react-country-region-selector';

/**
 * Class : Address Form
 */
class AddressForm extends Component {

  /**
   * Takes the input ID to be grafted onto, creates an autocomplete,
   * and listens for the place_changed event
   *
   * @param id
   */
  static initializeAutocomplete(id) {
    const element = document.getElementById(id);
    if (element) {
      const options = {
        types: ['geocode'],
      };
      const autocomplete = new google.maps.places.Autocomplete(element, options);
      google.maps.event.addListener(autocomplete, 'place_changed', AddressForm.onPlaceChanged);
    }
  }

  /**
   * We will retrieve detailed information of the chosen address
   */
  static onPlaceChanged() {
    const place = this.getPlace();
    const fullAddress = [];

    for (let i in place.address_components) {
      const component = place.address_components[i];

      for (const j in component.types) {
        const typeElement = document.getElementById(component.types[j]);

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
  constructor(props) {
    super(props);
    this.state = {
      country: '',
    };

    this.onchangeAddress = this.onchangeAddress.bind(this);
  }

  /**
   * Executed after the first render only on the client side
   */
  componentDidMount() {
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
  onchangeAddress(value, id) {
    this.props.setAddress(id, value);
  }

  /**
   *
   * @param value
   */
  selectCountry(value) {
    this.setState({ country: value });
    this.onchangeAddress(value, 'country');
  }

  /**
   *
   * @param key
   * @returns {string}
   */
  getAddressValue(key) {
    return this.props.localInfo.size > 0
      ? this.props.localInfo.get('addresses', new Map()).get(key)
      : '';
  }

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        <div className="row form_content_wrapper">
          <div className="form-group">
            <div className="col-xs-12">
              <input
                type="text"
                id="address_billingaddress_address1"
                data-control="true"
                autoComplete="address-line1"
                value={this.getAddressValue('address1') || ''}
                onChange={e => this.onchangeAddress(e.target.value, 'address1')}
                required
              />
              <label className="control-label" htmlFor="address_billingaddress_address1">
                {formatMessage({ id: 'rp.checkout.billingaddress.address1', defaultMessage: 'address1' })}
              </label>
            </div>
          </div>
        </div>

        <div className="row form_content_wrapper">
          <div className="form-group">
            <div className="col-xs-12">
              <input
                type="text"
                id="fullAddr"
                name="fullAddr"
                data-control="true"
                autoComplete="address-line2"
                value={this.getAddressValue('address2') || ''}
                onChange={e => this.onchangeAddress(e.target.value, 'address2')}
              />
              <label className="control-label" htmlFor="fullAddr">
                {formatMessage({ id: 'rp.checkout.billingaddress.address2', defaultMessage: 'address2' })}
              </label>
            </div>
          </div>
        </div>

        <div className="row form_content_wrapper">
          <div className="col-sm-6 no-padding">
            <div className="form-group">
              <div className="col-xs-12">
                <input
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  data-control="true"
                  autoComplete="postal-code"
                  value={this.getAddressValue('zipcode') || ''}
                  onChange={e => this.onchangeAddress(e.target.value, 'zipcode')}
                  required
                />
                <label className="control-label" htmlFor="postal_code">
                  {formatMessage({ id: 'rp.checkout.billingaddress.zipcode', defaultMessage: 'zipcode' })}
                </label>
              </div>
            </div>
          </div>

          <div className="col-sm-6 no-padding">
            <div className="form-group">
              <div className="col-xs-12">
                <input
                  type="text"
                  id="locality"
                  name="locality"
                  data-control="true"
                  autoComplete="address-line2"
                  value={this.getAddressValue('city') || ''}
                  required
                  onChange={e => this.onchangeAddress(e.target.value, 'city')}
                />
                <label className="control-label" htmlFor="locality">
                  {formatMessage({ id: 'rp.checkout.billingaddress.city', defaultMessage: 'city' })}
                </label>
              </div>
            </div>
          </div>
        </div>

        <CountryDropdown
          defaultOptionLabel={formatMessage({ id: 'rp.checkout.billingaddress.country', defaultMessage: 'country' })}
          value={this.getAddressValue('country') || ''}
          // valueType={'short'}
          onChange={(value) => {
            this.selectCountry(value);
            // this.onchangeAddress(e, 'country');
          }}
        />
      </div>
    );
  }
}

AddressForm.propTypes = {
  intl: intlShape.isRequired, // for the internationalization
  localInfo: PropTypes.object,
//  render: PropTypes.object.isRequired,
//  setAddress: PropTypes.func.isRequired,
};

AddressForm.defaultProps = {
  localInfo: {},
};

export default injectIntl(AddressForm);
