import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './helpers/moment_locale';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AnnoncesMain from './components/annonces/annonces_main';
import App from './app';
import SideMenu from './components/side_menu';
import ResetPassword from './components/reset_password';
import VerifyEmail from './components/verify_email';
import { Cities } from '../imports/collections/cities';
import { Users } from '../imports/collections/users';
import { Categories } from '../imports/collections/categories';
import { Brands } from '../imports/collections/brands';

var localLocale = moment();

localLocale.locale('fr'); // set this instance to use French

const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={AnnoncesMain} />
      <Route path="/verify-email/:token" component={VerifyEmail} />
      <Route path="/reset-password/:token" component={ResetPassword} />
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-content'));
});
