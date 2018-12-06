import React, { Component } from 'react';
import { PropTypes} from "prop-types";
import { FormattedMessage, injectIntl } from 'react-intl';
import { Map, fromJS } from 'immutable';

/**
 * Class : Quick Address Recap
 */
class ContactInformation extends Component {

  // Define Constructor
  constructor(props) {
    super(props);
  }

  static getLastnameValue(contact) {
    return contact.size > 0
      ? contact.get('lastname')
      : '';
  }

  static getFirstnameValue(contact) {
    return contact.size > 0
      ? contact.get('firstname')
      : '';
  }

  static getBirthdateValue(contact) {
    return contact.size > 0
      ? moment(contact.get('birthdate'), 'YYYY-MM-DD HH:mm:ssZZ').format('DD/MM/YYYY')
      : '';
  }

  static getOptinValue(contact) {
    return contact.size > 0
      ? contact.get('optIn')
      : '';
  }

  static getMobileValue(contact) {
    return contact.size > 0
      ? contact.get('mobile')
      : '';
  }

  static getPhoneValue(contact) {
    return contact.size > 0
      ? contact.get('phone')
      : '';
  }

  static getEmailValue(contact) {
    return contact.size > 0
      ? contact.get('email')
      : '';
  }

  static getAddress1Value(contact) {
    return contact.size !== undefined
      ? contact.get('addresses', new Map()).get('address1')
      : '';
  }

  static getAddress2Value(contact) {
    return contact.size !== undefined
      ? contact.get('addresses', new Map()).get('address2')
      : '';
  }

  static getZipcodeValue(contact) {
    return contact.size !== undefined
      ? contact.get('addresses', new Map()).get('zipcode')
      : '';
  }

  static getCityValue(contact) {
    return contact.size !== undefined
      ? contact.get('addresses', new Map()).get('city')
      : '';
  }

  static getCountryValue(contact) {
    return contact.size !== undefined
      ? contact.get('addresses', new Map()).get('country')
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

  renderQuickInfoRecap(data) {
    const contact = data.get('contact');
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
          <p>{ContactInformation.getEmailValue(contact) || ""}</p>
          <p>{ContactInformation.getFirstnameValue(contact) || ""}</p>
          <p>{ContactInformation.getFirstnameValue(contact) || ""}</p>
          <p>{ContactInformation.getMobileValue(contact) || ""}</p>

          <p>{ContactInformation.getAddress1Value(contact) || ""}
            {ContactInformation.getAddress2Value(contact) || ""}
            {ContactInformation.getZipcodeValue(contact) || ""}
            {ContactInformation.getCityValue(contact) || ""}
            {ContactInformation.getCountryValue(contact) || ""}</p>
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
      data,
    } = this.props;

    return (
      <div className='contactInformation'>
        { this.renderQuickInfoRecap(fromJS(data)) }
        {/*{ this.renderAccountForm() }*/}
      </div>
    );
  }
}

ContactInformation.proptypes = {
  data: PropTypes.object.isRequired,
  // render: PropTypes.object.isRequired,
  // contact: PropTypes.func.isRequired,
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
  data: {},
};

export default injectIntl(ContactInformation);