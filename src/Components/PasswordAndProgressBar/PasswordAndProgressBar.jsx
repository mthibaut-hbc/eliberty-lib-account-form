import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { checkStrengthPassword, checkPasswordConfirm } from '../../Helpers/PasswordCheckHelper';
import {PropTypes} from "prop-types";

/**
 * Class : Progress bar
 */
class PasswordAndProgressBar extends Component {

  // Define Constructor
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirm: '',
      checkOk: true,
    };
    this.onChangeFirstPassword = this.onChangeFirstPassword.bind(this);
    this.onChangeFirstPassword = this.onChangeFirstPassword.bind(this);
  }

  /**
   * Validation First Password Progress Bar
   * @param e
   */
  onChangeFirstPassword(e) {
    this.setState({password: e.target.value});
    checkStrengthPassword(e.target.value);
    this.props.setPassword(e.target.value);

  }

  /**
   * Validation Second Password equality first password
   * @param e
   */
  onChangeSecondPassword(e) {
    this.setState({passwordConfirm: e.target.value});
    const checkOk = checkPasswordConfirm(this.state.password, e.target.value);
    this.setState({checkOk: checkOk});
  }

  /**
   * Display text of error for second password
   */
  displayError() {
    const error = 'les mots de passés doivent être idéntiques';
    return this.state.checkOk ? null : <p className="errorInputText">{error}</p>
  }

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <div>
        <div className="row form_content_wrapper password_first">
          <div className="col-xs-12">
            <div className="row">
              <div className="form-group">
                <div className="col-xs-12 passwordfirst new-password">
                  <div className="content-psw">
                    <input type="password"
                           id="user_password_first"
                           className="show-pwd-active"
                           required="required"
                           autoComplete="off"
                           data-control="true"
                           value={this.state.password}
                           onChange={(e) => this.onChangeFirstPassword(e)}
                           placeholder={formatMessage({
                             id: 'rp.checkout.customer.password.label',
                             defaultMessage: 'Password'
                           })}/>
                    <label htmlFor="user_password_first" className="control-label">
                      <FormattedMessage id="rp.checkout.customer.password.label" defaultMessage="Password"/>
                    </label>
                    <div className="group-eye">
                      <button id="btn-eye" type="button" onClick={() => false} className="btn-eye pwd-eye"/>
                    </div>
                  </div>
                  <div className="content-required-pwd" tabIndex='-1'>
                    <span className="progress-bar"/>
                    <FormattedMessage id="rp.forms.identification.password.required.list"
                                      defaultMessage="Password required list"/>
                    <ul className="list-valid-pwd">
                      <li className="pwd-item1">
                        <FormattedMessage id="rp.forms.identification.password.required.character.min"
                                          defaultMessage="8 characters min"/>
                      </li>
                      <li className="pwd-item2">
                        <FormattedMessage id="rp.forms.identification.password.required.capital.letter"
                                          defaultMessage="A capital letter"/>
                      </li>
                      <li className="pwd-item3">
                        <FormattedMessage id="rp.forms.identification.password.required.number"
                                          defaultMessage="A number"/>
                      </li>
                    </ul>
                  </div>
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
                  <input type="password"
                         id="user_password_second"
                         required="required"
                         autoComplete="off"
                         data-control="true"
                         className={this.state.checkOk ? '' : 'inputError show-pwd-active'}
                         value={this.state.passwordConfirm}
                         onChange={(e) => this.onChangeSecondPassword(e)}
                         placeholder={formatMessage({
                           id: 'rp.checkout.customer.password.validate',
                           defaultMessage: 'password validate'
                         })}/>
                  <label htmlFor="user_password_second" className="control-label">
                    <FormattedMessage id="rp.checkout.customer.password.validate" defaultMessage="A number"/>
                  </label>
                  {this.displayError()}
                  <div className="group-eye">
                    <button id="btn-eye-confirm" type="button" onClick={() => false} className="btn-eye pwd-eye"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PasswordAndProgressBar.proptypes = {
  setPassword: PropTypes.func.isRequired,
};

export default injectIntl(PasswordAndProgressBar);