import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { injectIntl } from 'react-intl';
import { CountryDropdown } from 'react-country-region-selector';

/**
 * Class : Address Form
 */
class AddressForm extends Component {

  /**
   * Takes the input ID to be grafted onto, creates an autocomplete, and listens for the place_changed event
   * @param id
   */
  static initializeAutocomplete(id) {
    const element = document.getElementById(id);
    if (element) {
      const options = {
        types: ['geocode']
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
        const type_element = document.getElementById(component.types[j]);

        if (component.types[j] === "street_number") {
          fullAddress[0] = component.long_name;
        }

        if (component.types[j] === "route") {
          fullAddress[1] = component.long_name;
        }

        if (component.types[j] === "country") {
          document.getElementById('country_dropdown').value = component.long_name;
        }

        document.getElementById('fullAddr').setAttribute('value', fullAddress);
        document.getElementById('fullAddr').value = fullAddress;

        if (type_element) {
          type_element.setAttribute('value', component.long_name);
          type_element.value = component.long_name;
        }
      }
    }
  }

  static getAddress1Value(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('addresses', new Map()).get('address1')
      : '';
  }

  static getAddress2Value(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('addresses', new Map()).get('address2')
      : '';
  }

  static getZipcodeValue(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('addresses', new Map()).get('zipcode')
      : '';
  }

  static getCityValue(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('addresses', new Map()).get('city')
      : '';
  }

  static getCountryValue(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('addresses', new Map()).get('country')
      : '';
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
   * @param val
   */
  selectCountry(val) {
    this.setState({ country: val });
  }

  onchangeAddress(e, id) {
    this.props.setAddress( id, e.target.value);
  }

  render() {
    const { formatMessage } = this.props.intl;
    const { localInfo } = this.props;

    return (
      <div>
        <div className="row form_content_wrapper">
          <div className="form-group">
            <div className="col-xs-12">
              <input type="text"
                     id="address_billingaddress_address1"
                     data-control="true"
                     autoComplete="address-line1"
                     value={AddressForm.getAddress1Value(localInfo) || ""}
                     onChange={(e) => this.onchangeAddress(e, 'address1')}
                     required
              />
              <label className="control-label" htmlFor="address_billingaddress_address1">
                {formatMessage({id: 'rp.checkout.billingaddress.address1', defaultMessage: 'address1'})}
              </label>
            </div>
          </div>
        </div>

        <div className="row form_content_wrapper">
          <div className="form-group">
            <div className="col-xs-12">
              <input type="text"
                     id="fullAddr"
                     name="fullAddr"
                     data-control="true"
                     autoComplete="address-line2"
                     value={AddressForm.getAddress2Value(localInfo) || ""}
                     onChange={(e) => this.onchangeAddress(e, 'address2')}
              />
              <label className="control-label" htmlFor="fullAddr">
                {formatMessage({id: 'rp.checkout.billingaddress.address2', defaultMessage: 'address2'})}
              </label>
            </div>
          </div>
        </div>

        <div className="row form_content_wrapper">
          <div className="col-sm-6 no-padding">
            <div className="form-group">
              <div className="col-xs-12">
                <input type="text"
                       id="postal_code"
                       name="postal_code"
                       data-control="true"
                       autoComplete="postal-code"
                       value={AddressForm.getZipcodeValue(localInfo) || ""}
                       onChange={(e) => this.onchangeAddress(e, 'zipcode')}
                       required
                />
                <label className="control-label" htmlFor="postal_code">
                  {formatMessage({id: 'rp.checkout.billingaddress.zipcode', defaultMessage: 'zipcode'})}
                </label>
              </div>
            </div>
          </div>

          <div className="col-sm-6 no-padding">
            <div className="form-group">
              <div className="col-xs-12">
                <input type="text"
                       id="locality"
                       name="locality"
                       data-control="true"
                       autoComplete="address-line2"
                       value={AddressForm.getCityValue(localInfo) || ""}
                       required
                       onChange={(e) => this.onchangeAddress(e, 'city')}
                />
                <label className="control-label" htmlFor="locality">
                  {formatMessage({id: 'rp.checkout.billingaddress.city', defaultMessage: 'city'})}
                </label>
              </div>
            </div>
          </div>
        </div>

        <CountryDropdown
          defaultOptionLabel={formatMessage({id: 'rp.checkout.billingaddress.country', defaultMessage: 'country'})}
          value={AddressForm.getCountryValue(localInfo) || ""}
          valueType={'short'}
          onChange={(val) => this.selectCountry(val)}
        />
      </div>
    );
  }
}

AddressForm.propTypes = {
  localInfo: PropTypes.object,
  render: PropTypes.object.isRequired,
  setAddress: PropTypes.func.isRequired,
};

AddressForm.defaultProps = {
  localInfo: {},
};

export default injectIntl(AddressForm);