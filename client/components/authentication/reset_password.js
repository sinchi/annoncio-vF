import React, { Component } from 'react';
import { ModalDialog, ModalContainer } from 'react-modal-dialog';
import { browserHistory } from 'react-router';

class ResetPassword extends Component{

  constructor(props){
    super(props);
    this.state = { isShowingModal: true };
  }

  handleClose(event){
    event.preventDefault();
    this.setState({ isShowingModal: false });
  }

  componentDidMount(){
    console.log("token", this.props.params.token);
  }


  onValiderClick(event){
    event.preventDefault();
    const { token } = this.props.params;
    const newPassword = this.refs.new_password.value;
    const confirmNewPassword = this.refs.new_repassword.value;
    if(newPassword && newPassword === confirmNewPassword){
        Accounts.resetPassword(token, newPassword, (error) => {
          if(error){
            console.log("Error", error);
          }else{
            console.log("Votre mot de passe est rédifini avec succés");
            browserHistory.push('/');
          }
        });
    }

  }


  render(){
    return(
          <ModalContainer>
            <ModalDialog>
              <form>
                <div className="form-group">
                  <label htmlFor="new_password">Nouveau Mot de passe</label>
                  <input type="password" ref="new_password" id="new_password" className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="new_repassword">Confirmation Mot de passe</label>
                  <input type="password" ref="new_repassword" id="new_repassword" className="form-control"/>
                </div>
                <button type="submit" onClick={ this.onValiderClick.bind(this) } className="btn btn-block btn-primary">Valider</button>
              </form>
            </ModalDialog>
          </ModalContainer>
    )
  }
}

export default ResetPassword;
