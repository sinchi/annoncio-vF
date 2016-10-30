import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './helpers/moment_locale';


import App from './app';
import { Cities } from '../imports/collections/cities';

var localLocale = moment();

localLocale.locale('fr'); // set this instance to use French

//console.log("locale", localLocale);
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-content'));
});
