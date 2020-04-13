// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
// Styles
import './index.css';

import App from './components/App/App';

import * as serviceWorker from './serviceWorker';

import i18n from './engine/init/i18n'

const element = document.getElementById('root');

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
