import React, { Component } from 'react';
import { PropTypes} from "prop-types";
import { FormattedMessage, injectIntl } from 'react-intl';
import {Collapse} from "react-collapse";
import AccountForm from '../../Components/AccountForm/AccountForm';

/**
 * Class : Quick Address Recap
 */
class ContactInformation extends Component {

  // Define Constructor
  constructor(props) {
    super(props);
  }

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

  static getAddress1Value(localInfo) {
    return localInfo.size !== undefined
      ? localInfo.get('addresses', new Map()).get('address1')
      : '';
  }

  static getAddress2Value(localInfo) {
    return localInfo.size !== undefined
      ? localInfo.get('addresses', new Map()).get('address2')
      : '';
  }

  static getZipcodeValue(localInfo) {
    return localInfo.size !== undefined
      ? localInfo.get('addresses', new Map()).get('zipcode')
      : '';
  }

  static getCityValue(localInfo) {
    return localInfo.size !== undefined
      ? localInfo.get('addresses', new Map()).get('city')
      : '';
  }

  static getCountryValue(localInfo) {
    return localInfo.size !== undefined
      ? localInfo.get('addresses', new Map()).get('country')
      : '';
  }

  static renderSvgBook() {
    return <svg width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1" >
      <g id="icon-/-adress-/-black" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="Rectangle" stroke="#585858" x="5.5" y="1.5" width="15" height="21" rx="3"></rect>
        <circle id="Oval-4-Copy" stroke="#585858" cx="13" cy="10" r="2"></circle>
        <path d="M4,11.5 L7,11.5" id="Path-5-Copy" stroke="#585858" stroke-linecap="round"></path>
        <path d="M4,15.5 L7,15.5" id="Path-5-Copy-2" stroke="#585858" stroke-linecap="round"></path>
        <path d="M4,7.5 L7,7.5" id="Path-5" stroke="#585858" stroke-linecap="round"></path>
        <path d="M10,15 C9.99958562,13 10.999588,12 13.0000073,12 C15.0004265,12 16.0004289,13 16.0000145,15" id="Path-6" stroke="#585858"></path>
      </g>
    </svg>
  }

  renderQuickInfoRecap(localInfo) {
    return (
      <div className="quickInfoRecap col-xs-12">
        <span className="bookSvg">{ContactInformation.renderSvgBook()}</span>
        <p>Informations de contact</p>
        <div className="col-xs-4">
          <p><FormattedMessage id="rp.checkout.customer.email.label" defaultMessage="email"/></p>
          <p><FormattedMessage id="rp.checkout.customer.lastname" defaultMessage="lastname"/></p>
          <p><FormattedMessage id="rp.checkout.customer.firstname" defaultMessage="firstname"/></p>
          <p><FormattedMessage id="rp.checkout.customer.mobile" defaultMessage="mobile"/></p>
          <p><FormattedMessage id="rp.checkout.billingaddress.address1" defaultMessage="address1"/></p>
        </div>
        <div className="col-xs-6">
          <p>{ContactInformation.getEmailValue(localInfo) || ""}</p>
          <p>{ContactInformation.getFirstnameValue(localInfo) || ""}</p>
          <p>{ContactInformation.getFirstnameValue(localInfo) || ""}</p>
          <p>{ContactInformation.getMobileValue(localInfo) || ""}</p>

          <p>{ContactInformation.getAddress1Value(localInfo) || ""}
            {ContactInformation.getAddress2Value(localInfo) || ""}
            {ContactInformation.getZipcodeValue(localInfo) || ""}
            {ContactInformation.getCityValue(localInfo) || ""}
            {ContactInformation.getCountryValue(localInfo) || ""}</p>
        </div>
        <button className="btnEditContact"
                onClick={() => ""}
                type="submit">
          <FormattedMessage id="rp.forms.identification.modification.button" defaultMessage="edit"/>
        </button>
      </div>
    );
  }

  // renderAccountForm() {
  //   return (
  //     <div id="accountForm" className="checkout_part_content accountForm">
  //       <div className="panel-body">
  //         <AccountForm
  //           contact={this.props.contact}
  //           localInfo={this.props.localInfo}
  //           render={this.props.render}
  //           setAddress={this.props.setAddress}
  //           setFirstname={this.props.setFirstname}
  //           setLastname={this.props.setLastname}
  //           setMobile={this.props.setMobile}
  //           setOptIn={this.props.setOptIn}
  //           setPhone={this.props.setPhone}
  //           setEmail={this.props.setEmail}
  //           setBirthdate={this.props.setBirthdate}
  //           setPassword={this.props.setPassword}
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    const {
      localInfo,
    } = this.props;

    return (
      <div className='contactInformation'>
        { this.renderQuickInfoRecap(localInfo) }
        { this.renderAccountForm() }
      </div>
    );
  }
}

ContactInformation.proptypes = {
  localInfo: PropTypes.object.isRequired,
  render: PropTypes.object.isRequired,
  contact: PropTypes.func.isRequired,
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

ContactInformation.defaultProps = {
  localInfo: {},
};

export default injectIntl(ContactInformation);