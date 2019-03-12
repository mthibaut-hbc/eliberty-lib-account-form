import React, { Component } from 'react';
import { PropTypes} from "prop-types";
import { FormattedMessage, injectIntl } from 'react-intl';
import { Map, fromJS } from 'immutable';
import SVGInline from 'react-svg-inline';

/**
 * Class : Quick Address Recap
 */
class ContactInformation extends Component {
  /**
   *
   * @returns {*}
   */
  static renderSvgBook() {
    return (
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
        <g id="icon-/-adress-/-black" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <rect id="Rectangle" stroke="#585858" x="5.5" y="1.5" width="15" height="21" rx="3"></rect>
          <circle id="Oval-4-Copy" stroke="#585858" cx="13" cy="10" r="2"></circle>
          <path d="M4,11.5 L7,11.5" id="Path-5-Copy" stroke="#585858" stroke-linecap="round"></path>
          <path d="M4,15.5 L7,15.5" id="Path-5-Copy-2" stroke="#585858" stroke-linecap="round"></path>
          <path d="M4,7.5 L7,7.5" id="Path-5" stroke="#585858" stroke-linecap="round"></path>
          <path d="M10,15 C9.99958562,13 10.999588,12 13.0000073,12 C15.0004265,12 16.0004289,13 16.0000145,15" id="Path-6" stroke="#585858"></path>
        </g>
      </svg>
    );
  }

  constructor(props) {
    super(props);
  }

  /**
   *
   * @param key
   * @returns {string}
   */
  getValueForInput(key) {
    return this.props.localInfo.size > 0
      ? this.props.localInfo.get(key)
      : '';
  }

  /**
   *
   * @param localInfo
   * @returns {string}
   */
  getBirthdateValue(key) {
    return this.props.localInfo.size > 0
      ? moment(this.props.localInfo.get(key), 'YYYY-MM-DD HH:mm:ssZZ').format('DD/MM/YYYY')
      : '';
  }

  /**
   *
   * @param key
   * @returns {string}
   */
  getAddressValue(key) {
    return this.props.localInfo.size !== undefined
      ? this.props.localInfo.get('addresses', new Map()).get(key)
      : '';
  }

  /**
   *
   * @param localInfo
   * @returns {*}
   */
  renderQuickInfoRecap(localInfo) {
    return (
      <div className="quickInfoRecap col-xs-12">
        <div className="headerTitle">
          <span className="bookSvg">{ContactInformation.renderSvgBook()}</span>
          <h4 className="titleRecapContact">
            <FormattedMessage id="rp.checkout.summary.info.contact.label" defaultMessage="contact information"/>
          </h4>
        </div>
        <div className="col-xs-4">
          <p><FormattedMessage id="rp.checkout.customer.email.label" defaultMessage="email"/></p>
          <p><FormattedMessage id="rp.checkout.customer.lastname" defaultMessage="lastname"/></p>
          <p><FormattedMessage id="rp.checkout.customer.firstname" defaultMessage="firstname"/></p>
          <p><FormattedMessage id="rp.checkout.customer.mobile" defaultMessage="mobile"/></p>
          <p><FormattedMessage id="rp.checkout.billingaddress.address1" defaultMessage="address1"/></p>
        </div>
        <div className="col-xs-6">
          <p>{this.getValueForInput('email') || ""}</p>
          <p>{this.getValueForInput('lastname') || ""}</p>
          <p>{this.getValueForInput('firstname') || ""}</p>
          <p>{this.getValueForInput('mobile') || ""}</p>
          <p>{`${this.getAddressValue('address1') || ""} ${this.getAddressValue('address2') || ""}`}</p>
          <p>{`${this.getAddressValue('zipcode') || ""} ${this.getAddressValue('city') || ""}`}</p>
        </div>
        <button className="btnEditContact"
          //  onClick={() => this.props.onClickEditAccount}
                onClick={() => console.log('EDITER COMPTE')}
                type="submit">
          <FormattedMessage id="rp.checkout.edit.data.button.label" defaultMessage="edit"/>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className='contactInformation'>
        { this.renderQuickInfoRecap(this.props.localInfo) }
      </div>
    );
  }
}

ContactInformation.propTypes = {
  localInfo: PropTypes.object.isRequired,
  // onClickEditAccount: PropTypes.function.isRequired,
};

ContactInformation.defaultProps = {
  localInfo: {},
};

export default injectIntl(ContactInformation);
