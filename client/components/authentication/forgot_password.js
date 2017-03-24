import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
class ForgotPassword extends Component {

  onSendClick(event){
    let email = this.refs.forgot_email.value;
    console.log(email);
    this.props.onSendClick(email);
  }

  render(){

    return (

              <form className="forgot_password">
                  <fieldset>
                    <div className="form-group">
                      <input type="text" id="email" ref="forgot_email" className="form-control" placeholder="Email" />
                    </div>
                    <button onClick={ this.onSendClick.bind(this) } type="submit" style={{ background:"rgb(39,180,189)", color:"white" }} className="btn btn-block ">Envoyer</button>
                  </fieldset>
                </form>
    )
  }
}

export default ForgotPassword;
