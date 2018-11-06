import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { FormattedMessage, injectIntl } from 'react-intl';
import { isValidField } from '../../Helpers/ValidatorFieldsHelper';
import IntlTelInput from 'react-intl-tel-input';
import moment from 'moment/src/moment';
import PasswordAndProgressBar from '../PasswordAndProgressBar/PasswordAndProgressBar';
import AddressForm from '../AddressForm/AddressForm';
import 'react-intl-tel-input/dist/libphonenumber';
import 'react-intl-tel-input/dist/main.css';

/**
 * Class : Creation Account Form
 */
class CreationAccountForm extends Component {

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

  static getEmailValue(localInfo) {
    return localInfo.size > 0
      ? localInfo.get('values').get('email')
      : '';
  }

  // Define Constructor
  constructor(props) {
    super(props);

    this.onchangeOptin = this.onchangeOptin.bind(this);
    this.onchangeMobile = this.onchangeMobile.bind(this);
    this.onchangePhone = this.onchangePhone.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBirthdate = this.onChangeBirthdate.bind(this);
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
    const value = this.props.localInfo.get('optIn');
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


  onChangeLastname(e) {
    this.props.setLastname(e.target.value);
  }

  onChangeFirstname(e) {
    this.props.setFirstname(e.target.value);
  }

  onChangeEmail(e) {
    this.props.setEmail(e.target.value);
  }

  onChangeBirthdate(e) {
    this.props.setBirthdate(e.target.value);
  }

  /**
   * Display text of error for second password
   displayError() {
    const error = 'vérifiez!';
    return <p className="errorInputText">{error}</p>;
  }
   */

  render() {
    const { formatMessage } = this.props.intl;
    const { localInfo, render, setAddress } = this.props;

    return (
      <div id="creationAccountForm" className="checkout_part_content creationAccountForm ${this.props.className">
        <div className="panel-body">

          <h5 className="text-center">
            <em><FormattedMessage id="rp.checkout.newaccount.label" defaultMessage="new account"/></em>
          </h5>
          <h5><FormattedMessage id="rp.forms.required.input" defaultMessage="required"/></h5>
          <h4><FormattedMessage id="rp.checkout.newaccount.title" defaultMessage="new account title"/></h4>

          <form>
            <div className="row form_content_wrapper">
              <div className="col-xs-12">
                <div className="row">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <input type="text"
                             id="creationaccount_user_email"
                             name="creationaccount_user_email"
                             required
                             placeholder={formatMessage({
                               id: 'rp.checkout.customer.email.label',
                               defaultMessage: 'email'
                             })}
                             data-control="true"
                             value={CreationAccountForm.getEmailValue(localInfo) || ""}
                             onChange={(e) => this.onChangeEmail(e)}
                      />
                      <label htmlFor="creationaccount_user_email" className="control-label">
                        {formatMessage({id: 'rp.checkout.customer.email.label', defaultMessage: 'email'})}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PasswordAndProgressBar
              setPassword={this.props.setPassword}
            />

            <h4><FormattedMessage id="rp.checkout.newaccount.contact_title" defaultMessage="Contact Information"/></h4>

            <div className="row form_content_wrapper">
              <div className="col-xs-12">
                <div className="row">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <input type="text"
                             id="creationaccount_lastname"
                             required
                             placeholder={formatMessage({
                               id: 'rp.checkout.customer.lastname',
                               defaultMessage: 'lastname'
                             })}
                             data-control="true"
                             value={CreationAccountForm.getLastnameValue(localInfo) || ""}
                             onChange={(e) => this.onChangeLastname(e)}
                      />
                      <label htmlFor="creationaccount_lastname" className="control-label">
                        {formatMessage({id: 'rp.checkout.customer.lastname', defaultMessage: 'lastname'})}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row form_content_wrapper">
              <div className="col-xs-12">
                <div className="row">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <input type="text"
                             id="creationaccount_firstname"
                             required
                             placeholder={formatMessage({
                               id: 'rp.checkout.customer.firstname',
                               defaultMessage: 'firstname'
                             })}
                             data-control="true"
                             value={CreationAccountForm.getFirstnameValue(localInfo) || ""}
                             onChange={(e) => this.onChangeFirstname(e)}
                      />
                      <label htmlFor="creationaccount_firstname" className="control-label">
                        {formatMessage({id: 'rp.checkout.customer.firstname', defaultMessage: 'firstname'})}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row form_content_wrapper">
              <div className="col-xs-12">
                <div className="row">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <input type="text"
                             id="creationaccount_birthdate"
                             required
                             className="rp_date"
                             placeholder={formatMessage({
                               id: 'rp.checkout.customer.birthdate',
                               defaultMessage: 'birthdate'
                             })}
                             data-control="true"
                             value={CreationAccountForm.getBirthdateValue(localInfo) || ""}
                             onChange={(e) => this.onChangeBirthdate(e)}
                      />
                      <label htmlFor="creationaccount_birthdate" className="control-label">
                        {formatMessage({id: 'rp.checkout.customer.birthdate', defaultMessage: 'birthdate'})}
                      </label>
                    </div>
                  </div>
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
                                  value={CreationAccountForm.getMobileValue(localInfo) || ""}
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
                                  value={CreationAccountForm.getPhoneValue(localInfo) || ""}
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
              localInfo={localInfo}
              render={render}
              setAddress={setAddress}
            />

            <div className="col-md-12 cgv-option">
              <div className="form-group">
                <div className="col-md-12">
                  <div className="checkbox">
                    <input type="checkbox"
                           id="creationaccount_optIn"
                           required
                           defaultChecked={CreationAccountForm.getOptinValue(localInfo) || false}
                           value="1"
                           onChange={(e) => this.onchangeOptin(e)}
                    />
                    <label htmlFor="creationaccount_optIn">
                      <FormattedMessage id="rp.forms.checkout.payment.optin" defaultMessage="optIn"/>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 cgv">
              <FormattedMessage id="rp.forms.checkout.cnil" defaultMessage="Cnil"/>
            </div>

            <div className="row">
              <div className="col-xs-12"><b><b>
                <button className="btn-main btn-full btn-lg small-margin-top"
                        onClick={() => this.props.createContact()}
                        type="submit">
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

CreationAccountForm.proptypes = {
  localInfo: PropTypes.object.isRequired,
  createContact: PropTypes.func.isRequired,
  render: PropTypes.object.isRequired,
  setAddress: PropTypes.func.isRequired,
  setBirthdate: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setFirstname: PropTypes.func.isRequired,
  setLastname: PropTypes.func.isRequired,
  setMobile: PropTypes.func.isRequired,
  setOptIn: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
};

CreationAccountForm.defaultProps = {
  localInfo: {},
};

export default injectIntl(CreationAccountForm);