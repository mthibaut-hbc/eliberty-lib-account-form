import React from 'react';
import {PropTypes} from "prop-types";
import ContactInformation from '../Components/ContactInformation/ContactInformation';

const AccountLib = props => (
  <div>
    <ContactInformation
      data={props.data}
    />
  </div>
);

export default AccountLib;