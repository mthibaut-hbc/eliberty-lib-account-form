import React, { Component} from 'react';
import {PropTypes} from "prop-types";
import { Collapse } from 'react-collapse';
import { fromJS } from 'immutable';
import ContactInformation from '../Components/ContactInformation/ContactInformation';
import FormAccountEdit from '../Components/FormAccountEdit/FormAccountEdit';
//import AccountForm from "../../../../../identification/src/Components/AccountForm/AccountForm";

class AccountLib extends Component {
  render() {
    const data = fromJS(this.props.data);

    return (
      <div>
        <ContactInformation
          localInfo={data.get('localInfo')}
        />

        {/*<Collapse isOpened={props.data.render.openCreationAccount}>*/}
        <FormAccountEdit
          localInfo={data.get('localInfo')}
          // onClickEditAccount={data.onClickEditAccount}
          // setAddress={data.setAddress}
          // setFirstname={data.setFirstname}
          // setLastname={data.setLastname}
          // setMobile={data.setMobile}
          // setOptIn={data.setOptIn}
          // setPhone={data.setPhone}
          // setEmail={data.setEmail}
          // setBirthdate={data.setBirthdate}
          // setPassword={data.setPassword}
        />
        {/*</Collapse>*/}
      </div>
    );
  }
};

export default AccountLib;
