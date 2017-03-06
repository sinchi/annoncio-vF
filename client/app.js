import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { browserHistory } from 'react-router';
import Header from './components/header/header';

import SignupForm from './components/authentication/signup_form';
import LoginForm from './components/authentication/login_form';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { isShowingModal: false };
  }

  handleClick(){
    this.setState({isShowingModal: true})
  }

  handleClose(event){
    if(event)
    event.preventDefault();
    this.setState({isShowingModal: false})
  }

  onInscriptionClick(event){
    event.preventDefault();
    this.handleClick();
  }

  onLoginClick(event){
    event.preventDefault();
    const email = this.refs.embedded_login_form.refs.login_email.value;
    const password = this.refs.embedded_login_form.refs.login_password.value;

    const that = this;
    if(email && password){
      Meteor.loginWithPassword(email, password, function(error){
        if(!error){
          that.setState({ isShowingModal: false });
          browserHistory.push('/');
        }else {
          console.log("Error", error);
        }
      });
    }
  }

  onSignupClick(event){
    event.preventDefault();
    const that = this;
    const email = this.refs.embedded_signup_form.refs.signup_email.value;
    const password = this.refs.embedded_signup_form.refs.signup_password.value;
    const repassword = this.refs.embedded_signup_form.refs.signup_repassword.value;
    if(email && password && (password === repassword)){
        const profile = {
          status: true
        }
        const options = {
          name: email.split('@')[0],
          email,
          password,
          profile
        }

        Accounts.createUser(options, function(error){
            if(!error){
              console.log("User created with success");
              that.setState({ isShowingModal: false });
              browserHistory.push('/');
            }else{
              console.log("Erreur ", error);
            }
        })

    }

  }

  render(){

    return(
      <div className="row">
        <Header onInscriptionClick={ this.onInscriptionClick.bind(this) }/>
        { this.props.children }
        {
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose.bind(this)}>
            <ModalDialog onClose={this.handleClose.bind(this)}>
              <div className="row">
                <div className="col-xs-6">
                    <h1>Inscription</h1>
                    <SignupForm
                    ref="embedded_signup_form" onInscriptionClick={ this.onSignupClick.bind(this) }  
                    onClose={ this.handleClose.bind(this) }
                    />
                </div>
                <div className="col-xs-6">
                    <h1>Connexion</h1>
                    <LoginForm ref="embedded_login_form" onLoginClick={ this.onLoginClick.bind(this) }/>
                </div>
              </div>
            </ModalDialog>
          </ModalContainer>
        }
      </div>
    )
  }
}

export default App;
