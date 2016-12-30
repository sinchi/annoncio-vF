import React, { Component } from 'react';
import { ModalDialog, ModalContainer } from 'react-modal-dialog';
import { browserHistory } from 'react-router';
import LoginForm from './login_form';
import SignupForm from './signup_form';

class LoginSignupForm extends Component {

  constructor(props){
    super(props);
    this.state = { isShowingModal: false, category: '' };
  }

  handleClick(){
    this.setState({isShowingModal: true})
  }
  handleClose(event){
    if(event)
    event.preventDefault();
    this.setState({isShowingModal: false});
    browserHistory.push('/');
  }

  onInscriptionClick(event){
    event.preventDefault();
    this.handleClick();
  }

  onLoginClick(event){
    event.preventDefault();
    const email = this.refs.embedded_login_form.refs.login_email.value;
    const password = this.refs.embedded_login_form.refs.login_password.value;
    console.log(email + " " + password);
    const that = this;
    if(email && password){
      Meteor.loginWithPassword(email, password, function(error){
        if(!error){
          that.setState({ isShowingModal: false });
          browserHistory.push('/');
        }
      });
    }
  }

  render(){

    return(
      <ModalContainer onClose={this.handleClose.bind(this)}>
        <ModalDialog onClose={this.handleClose.bind(this)}>

          <div className="row">
            <div className="col-xs-6">
                <h1>Inscription</h1>
                <SignupForm onClose={ this.handleClose.bind(this) }/>
            </div>

            <div className="col-xs-6">
                <h1>Connexion</h1>
                <LoginForm ref="embedded_login_form" onLoginClick={ this.onLoginClick.bind(this) }/>
            </div>
          </div>
        </ModalDialog>
      </ModalContainer>
    )
  }
}

export default LoginSignupForm;
