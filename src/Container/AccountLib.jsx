import React from 'react';
import {PropTypes} from "prop-types";
import ContactInformation from '../Components/ContactInformation/ContactInformation';

const AccountLib = props => (
  <div>
    <span>HELLO AccountLib</span>
    <ContactInformation
      identificationRedux={props.identificationRedux}
    />
  </div>
);

export default AccountLib;