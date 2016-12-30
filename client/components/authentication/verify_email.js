import React, { Component } from 'react';
import { ModalDialog, ModalContainer } from 'react-modal-dialog';
import { browserHistory } from 'react-router';
import LoginForm from './login_form';

class VerifyEmail extends Component{

  constructor(props){
    super(props);
    this.state = { isShowingModal: true };
  }

  componentDidMount(){
      if(Meteor.userId()){
        const { token } = this.props.params;
        if(token){
          this.verifyEmail(token);
        }
      }
  }

  verifyEmail(token){
    Accounts.verifyEmail(token, (error) => {
      if(error){
        console.log("Error verifying email", error);
      }else{
        console.log("Email verified with success");
        Meteor.setTimeout(function(){
          browserHistory.push('/');
        }, 2 * 1000)
      }
    });
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
          const { token } = that.props.params;
          const link = `/verify-email/${token}`;
          console.log("link", link);
          that.verifyEmail(token);
        }
      });
    }
  }



  render(){
    const content = (Meteor.userId()) ? (
      <div className="row">
        <h1>Vérification de votre Email</h1>
        <p>Votre Email est vérifié avec succée, vous serez redirigé vers la page daccueil dans quelque instant</p>
      </div>
    ) : (
      <div className="row">
        <LoginForm ref="embedded_login_form" onLoginClick={ this.onLoginClick.bind(this) } />
      </div>
    )
    return(
          <ModalContainer onClose={ () => browserHistory.push('/') }>
            <ModalDialog onClose={ () => browserHistory.push('/') }>
              { content }
            </ModalDialog>
          </ModalContainer>
    )
  }
}

export default VerifyEmail;
