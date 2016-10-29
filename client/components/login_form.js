import React, { Component } from 'react';

class LoginForm extends Component {

  render(){
    return (
      <form className="login_form">
          <fieldset>
            <div className="form-group">
              <input type="text" id="email" className="nav-input form-control" placeholder="Email" />
            </div>
            <div className="form-group">

              <input type="text" id="password" className="nav-input form-control" placeholder="Mot de passe" />
            </div>
            <button type="submit" className="nav-btn btn btn-default">Connexion</button>
            <button type="submit" className="nav-btn btn btn-success">Inscription</button>
          </fieldset>
        </form>
    )
  }
}

export default LoginForm;
