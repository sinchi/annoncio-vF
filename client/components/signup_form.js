import React, { Component } from 'react';

class SignupForm extends Component {

  render(){
    return (
      <form className="signup_form">
          <fieldset>
            <div className="form-group">
              <input type="text" id="signup_email" className="nav-input form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" id="signup_password" className="nav-input form-control" placeholder="Mot de passe" />
            </div>
            <div className="form-group">
              <input type="password" id="signup_repassword" className="nav-input form-control" placeholder="Resaisir le mot de passe" />
            </div>
            <button onClick={ this.props.onSignup }  type="submit" className="nav-btn btn btn-success btn-block">Inscription</button>
          </fieldset>
        </form>
    )
  }
}

export default SignupForm;
