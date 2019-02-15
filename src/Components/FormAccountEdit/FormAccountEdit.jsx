import React, { Component } from 'react';
import { PropTypes} from "prop-types";
import { FormattedMessage, injectIntl } from 'react-intl';
import moment from 'moment/src/moment';
import IntlTelInput from "react-intl-tel-input";
import AddressForm from "../AddressForm/AddressForm";
import {isValidField} from '../../Helpers/ValidatorFieldsHelper';

/**
 * Class : Account Form
 */
class FormAccountEdit extends Component {

  static getLastnameValue(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('lastname')
      : '';
  }

  static getFirstnameValue(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('firstname')
      : '';
  }

  static getBirthdateValue(localInfo) {
    return localInfo.size > 0
      ? moment(localInfo.get('values').get('birthdate'), 'YYYY-MM-DD HH:mm:ssZZ').format('DD/MM/YYYY')
      : '';
  }

  static getOptinValue(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('optIn')
      : '';
  }

  static getMobileValue(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('mobile')
      : '';
  }

  static getPhoneValue(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('phone')
      : '';
  }

  // Define Constructor
  constructor(props) {
    super(props);

    this.onchangeOptin = this.onchangeOptin.bind(this);
    this.onchangeMobile = this.onchangeMobile.bind(this);
    this.onchangePhone = this.onchangePhone.bind(this);
  }

  /**
   * Executed after the first render only on the client side
   */
  componentDidMount() {
    // We add element label for input mobile and phone
    this.setLabelElementForInput('account_user_mobile', 'rp.checkout.customer.mobile');
    this.setLabelElementForInput('account_user_phone', 'rp.checkout.customer.phone');
  }

  /**
   *
   * @param idLabel
   * @param idTrad
   */
  setLabelElementForInput(idLabel, idTrad) {
    let newlabel = document.createElement("Label");
    newlabel.setAttribute('class', 'control-label paddingLeftPhone');
    newlabel.setAttribute('for', idLabel);
    newlabel.innerHTML = this.props.intl.formatMessage({id: idTrad, defaultMessage: 'phone number'});

    let elemLabel = document.getElementById(idLabel);
    elemLabel.setAttribute('data-control', 'true');
    elemLabel.after(newlabel);

    document.getElementById(idLabel).setAttribute('required', 'required');
  }

  /**
   *
   * @param e
   */
  onchangeOptin(e) {
    const value = this.props.localInfo.get('values').get('optIn');
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
  onchangeMobile(status, value, countryData, number, id) {
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
  onchangePhone(status, value, countryData, number, id) {
    this.props.setPhone(value);
  }


  render() {
    const { formatMessage } = this.props.intl;
    const {
      data
    } = this.props;

    return (
      <div id="accountForm" className="checkout_part_content accountForm">
        <div className="panel-body">
          <form>
            <div className="row form_content_wrapper">
              <div className="col-xs-12 ">
                <h5><FormattedMessage id="rp.forms.required.input" defaultMessage="required input"/></h5>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input type="text"
                         id="account_user_lastname"
                         disabled="disabled"
                         required="required"
                         placeholder={formatMessage({
                           id: 'rp.checkout.customer.lastname',
                           defaultMessage: 'lastname'
                         })}
                         data-control="true"
                         value={FormAccountEdit.getLastnameValue(data.localInfo) || ""}
                  />
                  <label htmlFor="account_user_lastname" className="control-label">
                    <FormattedMessage id="rp.checkout.customer.lastname" defaultMessage="lastname"/>
                  </label>
                </div>
              </div>
            </div>

            <div className="row form_content_wrapper ">
              <div className="form-group">
                <div className="col-xs-12">
                  <input type="text"
                         id="account_user_firstname"
                         disabled="disabled"
                         required="required"
                         placeholder={formatMessage({
                           id: 'rp.checkout.customer.firstname',
                           defaultMessage: 'firstname'
                         })}
                         data-control="true"
                         value={FormAccountEdit.getFirstnameValue(data.localInfo) || ""}
                  />
                  <label htmlFor="account_user_firstname" className="control-label">
                    <FormattedMessage id="rp.checkout.customer.firstname" defaultMessage="firstname"/>
                  </label>
                </div>
              </div>
            </div>

            <div className="row form_content_wrapper ">
              <div className="col-sm-12">
                <div className="form-group">
                  <input type="text"
                         id="account_user_birthdate"
                         disabled="disabled"
                         required="required"
                         className="rp_date"
                         placeholder={formatMessage({
                           id: 'rp.checkout.customer.birthdate',
                           defaultMessage: 'birthdate'
                         })}
                         data-control="true"
                         value={FormAccountEdit.getBirthdateValue(data.localInfo) || ""}
                  />
                  <label htmlFor="account_user_birthdate" className="control-label">
                    <FormattedMessage id="rp.checkout.customer.birthdate" defaultMessage="birthdate"/>
                  </label>
                </div>
              </div>
            </div>

            <div className="row form_content_wrapper">
              <div className="col-sm-6 no-padding">
                <div className="form-group">
                  <div className="col-xs-12">
                    <IntlTelInput preferredCountries={['fr']}
                                  css={['intl-tel-input', 'form-control']}
                                  fieldId={'account_user_mobile'}
                                  utilsScript={'libphonenumber.js'}
                                  format
                                  defaultValue=''
                                  autoPlaceholder
                                  autoHideDialCode
                                  onPhoneNumberChange={this.onchangeMobile}
                                  onPhoneNumberBlur={this.onchangeMobile}
                                  value={FormAccountEdit.getMobileValue(data.localInfo) || ""}
                                  formatOnInit={false}
                    />
                    <div className="phone-icon-elements">
                      <span className="phone-checker phone-icon fa fa-2x form-control-feedback withoutprepend fa-check" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 no-padding">
                <div className="form-group">
                  <div className="col-xs-12">
                    <IntlTelInput preferredCountries={['fr']}
                                  css={['intl-tel-input', 'form-control']}
                                  fieldId={'account_user_phone'}
                                  utilsScript={'libphonenumber.js'}
                                  format
                                  defaultValue=''
                                  autoPlaceholder
                                  autoHideDialCode
                                  onPhoneNumberChange={this.onchangePhone}
                                  onPhoneNumberBlur={this.onchangePhone}
                                  value={FormAccountEdit.getPhoneValue(data.localInfo) || ""}
                                  defaultCountry={'fr'}
                                  formatOnInit={false}
                    />

                    <div className="phone-icon-elements">
                      <span className="phone-checker phone-icon fa fa-2x form-control-feedback withoutprepend fa-exclamation-triangle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AddressForm
              localInfo={data.localInfo}
              render={render}
              updateAddress={updateAddress}
            />

            <div className="col-md-12 cgv-option">
              <div className="form-group">
                <div className="col-md-12">
                  <div className="checkbox">
                    <input type="checkbox"
                           id="account_user_optIn"
                           required="required"
                           defaultChecked={FormAccountEdit.getOptinValue(data.localInfo) || false}
                           value="1"
                           onChange={(e) => this.onchangeOptin(e)}
                    />
                    <label htmlFor="account_user_optIn">
                      <FormattedMessage id="rp.forms.checkout.payment.optin" defaultMessage="optIn"/>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 cgv">
              <FormattedMessage id="rp.forms.checkout.cnil" defaultMessage="cnil"/>
            </div>

            <div className="row">
              <div className="col-xs-12"><b><b>
                <button className="btn-main btn-full btn-lg small-margin-top" type="submit">
                  <FormattedMessage id="rp.checkout.customer.next.btn" defaultMessage="accept and continue"/>
                </button>
              </b></b>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

FormAccountEdit.proptypes = {
  data: PropTypes.object.isRequired,
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
  data: {},
};

export default injectIntl(FormAccountEdit);