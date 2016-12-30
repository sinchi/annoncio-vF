import React, { Component } from 'react';

class SignupForm extends Component {


  render(){
    return (
      <form>
          <fieldset>
            <div className="form-group">
              <input type="text" id="signup_email" ref="signup_email" className="nav-input form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" id="signup_password" ref="signup_password" className="nav-input form-control" placeholder="Mot de passe" />
            </div>
            <div className="form-group">
              <input type="password" id="signup_repassword" ref="signup_repassword" className="nav-input form-control" placeholder="Resaisir le mot de passe" />
            </div>
            <button onClick={ this.props.onInscriptionClick }  type="submit" className="nav-btn btn btn-success btn-block">Inscription</button>
          </fieldset>
        </form>
    )
  }
}

export default SignupForm;
