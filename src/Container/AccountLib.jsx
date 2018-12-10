import React from 'react';
import {PropTypes} from "prop-types";
import ContactInformation from '../Components/ContactInformation/ContactInformation';
import FormAccountEdit from '../Components/FormAccountEdit/FormAccountEdit';

const AccountLib = props => (
  <div>
    <ContactInformation
      data={props.data}
    />
    <Collapse isOpened={this.props.render.get('openCreationAccount', false)}>
      <FormAccountEdit
        data={props.data}
        onClickEditAccount={props.onClickEditAccount}
        setAddress={this.props.setAddress}
        setFirstname={this.props.setFirstname}
        setLastname={this.props.setLastname}
        setMobile={this.props.setMobile}
        setOptIn={this.props.setOptIn}
        setPhone={this.props.setPhone}
        setEmail={this.props.setEmail}
        setBirthdate={this.props.setBirthdate}
        setPassword={this.props.setPassword}
      />
    </Collapse>
  </div>
);

export default AccountLib;