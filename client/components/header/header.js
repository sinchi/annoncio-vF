import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'react-meteor-data';

import InlineForm from '../authentication/inline_form';
import MessagesHeader from './messages_header';
import NotificationsHeader from './notifications_header';
import FontAwesome from 'react-fontawesome';

class Header extends Component {

  onLogoutClick(event){
    event.preventDefault();
    Meteor.logout(function(){
        browserHistory.push('/');
    });

  }

  render(){
    const email = (Meteor.user()) ? Meteor.user().emails[0].address.split('@')[0] : '';
    const authentication = (Meteor.userId()) ? (


      <ul className="nav navbar-nav navbar-right" style={{ margin: "0" }}>
        <MessagesHeader onLogoutClick={ this.onLogoutClick.bind(this) }/>
        <NotificationsHeader />
        <li className="btn-group">

            <a className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="media" width="20" height="20" alt="" src="https://z-1-scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/p160x160/14291890_10154930613105663_1850540376112361297_n.jpg?oh=baf50636e2236a30a6df5e07772ba6f3&oe=58A1038E" /> { email } <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li>
                  <Link to={`/profile/${Meteor.userId()}`}>
                    <span className="glyphicon glyphicon-cog"></span> Mon Compte
                  </Link>
              </li>
              <li>
                  <a href="#" onClick={ this.onLogoutClick.bind(this) }>
                    <span className="glyphicon glyphicon-off"></span> Déconnexion
                  </a>
              </li>
            </ul>
        </li>
        {(Meteor.user() && !Meteor.user().emails[0].verified) ? <li><a href="#"><FontAwesome name="warning" /> <u>"Votre adresse mail n'est pas encore verifié ! "</u> </a></li>: "" }
      </ul>
    ) : <div className="nav navbar-nav navbar-right"><InlineForm onInscriptionClick={this.props.onInscriptionClick} /></div> ;

    return(
      <nav className="nav navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to={"/"} className="navbar-brand" style={{ color:"" }}>Annoncio</Link>
        </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className=""><a href="#"><span className="glyphicon glyphicon-flag" aria-hidden="true"></span>  Publier une Annonce <span className="sr-only">(current)</span></a></li>

        </ul>

        {authentication}
      </div>
    </nav>
    )
  }
}

export default Header;
