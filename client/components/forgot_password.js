import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
class ForgotPassword extends Component {

  render(){
    return (

              <form className="forgot_password">
                  <fieldset>
                    <div className="form-group">
                      <input type="text" id="email" className="form-control" placeholder="Email" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block ">Envoyer</button>
                  </fieldset>
                </form>
    )
  }
}

export default ForgotPassword;
