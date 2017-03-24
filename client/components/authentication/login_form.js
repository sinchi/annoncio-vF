import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { browserHistory } from 'react-router';

import ForgotPassword from './forgot_password';
import LaddaButton, { XL, SLIDE_UP } from 'react-ladda';


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

  onSendClick(email){
    //event.preventDefault();
  //  const email = email;// this.refs.forgot_password_form.refs.forgot_email.value;
    console.log(email);
    const options = { email };
    if(options.email){
        Accounts.forgotPassword(options, (error) => {
          if(error)
            console.log("Error", error);
          else{
            console.log("Un Email est vous envoyé pour redifinir votre mot de passe");
            this.setState({ isShowingModal: false });
          }
        });
    }

  }

  render(){
    // <button onClick={ this.props.onLoginClick } type="submit" className="btn btn-primary btn-block ">Connexion</button>
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
               
                <LaddaButton
                  loading={ this.props.connexionLoading }
                  onClick={ this.props.onLoginClick }
                  data-color="#000"
                  data-size={XL}
                  data-style={SLIDE_UP}
                  data-spinner-size={30}
                  data-spinner-color="#000"
                  data-spinner-lines={12}
                  className="btn btn-primary btn-block"
                >
                  {this.props.connexionLaddaText}
                </LaddaButton>
                <a onClick={ this.handleClick.bind(this) } href="#">Mot de passe oublier !</a>
              </fieldset>
            </form>
            {
              this.state.isShowingModal &&
              <ModalContainer onClose={this.handleClose.bind(this)}>
                <ModalDialog onClose={this.handleClose.bind(this)}>
                  <ForgotPassword ref="forgot_password_form" onSendClick={ this.onSendClick.bind(this) }/>
                </ModalDialog>
              </ModalContainer>
            }
        </div>
    )
  }
}

export default LoginForm;
