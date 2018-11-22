import React from 'react';
import {PropTypes} from "prop-types";
import ContactInformation from '../Components/ContactInformation/ContactInformation';

const AccountLib = props => (
  <div>
    <span>HELLO AccountLib</span>
    <ContactInformation
      localInfo={props.localInfo}
      render={props.render}
      contact={props.contact}
    />
  </div>
);

export default AccountLib;