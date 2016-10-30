import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import App from './app';
import { Cities } from '../imports/collections/cities';


Meteor.startup(() => {

  ReactDOM.render(<App />, document.querySelector('.render-content'));
});
