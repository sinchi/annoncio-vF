import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './helpers/moment_locale';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AnnoncesPage from './components/pages/annonces_page';
import App from './app';
import SideMenu from './components/search/side_menu';
import ResetPassword from './components/authentication/reset_password';
import VerifyEmail from './components/authentication/verify_email';
import { Cities } from '../imports/collections/cities';
import { Users } from '../imports/collections/users';
import { Categories } from '../imports/collections/categories';
import { Brands } from '../imports/collections/brands';
import ProfilePage from './components/pages/profile_page.js';
import LoginSignupForm from './components/authentication/login_signup_form';

var localLocale = moment();

localLocale.locale('fr'); // set this instance to use French

const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={AnnoncesPage} />
      <Route path="/profile/:userId" component={ProfilePage} onEnter={requireAuth}/>
      <Route path="/verify-email/:token" component={VerifyEmail} />
      <Route path="/reset-password/:token" component={ResetPassword} />
      <Route path="/login" component={LoginSignupForm} />
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-content'));
});
