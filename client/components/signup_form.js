import React, { Component } from 'react';

class SignupForm extends Component {

  onInscriptionClick(event){
    event.preventDefault();
    const email = this.refs.signup_email.value;
    const password = this.refs.signup_password.value;
    const repassword = this.refs.signup_repassword.value;
    if(email && password && (password === repassword)){
        const profile = {
          status: true
        }
        const options = {
          name: email.split('@')[0],
          email,
          password,
          profile
        }
        Accounts.createUser(options, function(error){
            if(!error){
            console.log("User created with success");

            }else{
              console.log("Erreur ", error);
            }
        })

    }

  }

  render(){
    return (
      <form className="signup_form">
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
            <button onClick={ this.onInscriptionClick.bind(this) }  type="submit" className="nav-btn btn btn-success btn-block">Inscription</button>
          </fieldset>
        </form>
    )
  }
}

export default SignupForm;
