import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import SignupForm from './signup_form';
import LoginForm from './login_form';

class SignupLoginModal extends Component{
  render(){
    return (
      <ModalContainer onClose={this.props.handleClose}>
        <ModalDialog onClose={this.props.handleClose}>

          <div className="row">
            <div className="col-xs-6">
                <h1>Inscription</h1>
                <SignupForm onClose={ this.props.handleClose }/>
            </div>

            <div className="col-xs-6">
                <h1>Connexion</h1>
                <LoginForm ref="embedded_login_form" onLoginClick={ this.props.onLoginClick }/>
            </div>
          </div>
        </ModalDialog>
      </ModalContainer>
    )
  }
}

export default SignupLoginModal;
