import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';
import store from './Store/Store';
import AccountLib from './Container/AccountLib';

addLocaleData([...en, ...fr]);

render(
  <Provider store={store}>
    <IntlProvider>
      <AccountLib/>
    </IntlProvider>
  </Provider>, document.getElementById('root'));