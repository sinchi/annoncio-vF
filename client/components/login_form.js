import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { browserHistory } from 'react-router';

import ForgotPassword from './forgot_password';


class LoginForm extends Component {

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

  render(){
    return (
      <div>
          <form className="login_form" onSubmit={ this.props.onLoginClick }>
              <fieldset>
                <div className="form-group">
                  <input type="text" id="login_email" ref="login_email"  className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="password" id="login_password" ref="login_password" className="form-control" placeholder="Mot de passe" />
                </div>
                <button onClick={ this.props.onLoginClick } type="submit" className="btn btn-primary btn-block ">Connexion</button>
                <a onClick={ this.handleClick.bind(this) } href="#">Mot de passe oublier !</a>

              </fieldset>
            </form>
            {
              this.state.isShowingModal &&
              <ModalContainer onClose={this.handleClose.bind(this)}>
                <ModalDialog onClose={this.handleClose.bind(this)}>
                  <ForgotPassword />
                </ModalDialog>
              </ModalContainer>
            }
        </div>
    )
  }
}

export default LoginForm;
