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
import ProfilePage from './components/pages/profile_page.js';
import LoginSignupForm from './components/authentication/login_signup_form';
import ContentProfile from './components/profile/content_profile';
import EditProfile from './components/profile/edit_profile';
import MyAnnoncesList from './components/profile/my_annonces_list';
import MySearch from './components/profile/my_search';
import MyShops from './components/profile/my_shops';
import MyMessages from './components/profile/my_messages';
import MyComments from './components/profile/my_comments';

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
      <Route path="/profile/:userId" component={ProfilePage} onEnter={requireAuth}>
        <IndexRoute component={ContentProfile} />
        <Route path="/edit-profile/:userId" component={EditProfile} />
        <Route path="/my-annonces-list/:userId" component={MyAnnoncesList} />
        <Route path="/my-search/:userId" component={MySearch} />
        <Route path="/my-shops/:userId" component={MyShops} />
        <Route path="/my-messages/:userId" component={MyMessages} />
        <Route path="/my-comments/:userId" component={MyComments} />
      </Route>
      <Route path="/verify-email/:token" component={VerifyEmail} />
      <Route path="/reset-password/:token" component={ResetPassword} />
      <Route path="/login" component={LoginSignupForm} />
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-content'));
});
