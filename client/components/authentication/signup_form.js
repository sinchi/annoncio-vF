import React, { Component } from 'react';
import LaddaButton, { XL, SLIDE_UP } from 'react-ladda';

class SignupForm extends Component {


  render(){
    /* <button 
                         onClick={ this.props.onInscriptionClick }  
                         type="submit" 
                         className="nav-btn btn btn-success btn-block">Inscription</button>
    */
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

              <LaddaButton
                  loading={ this.props.inscriptionLoading }
                  onClick={ this.props.onInscriptionClick }
                  data-color="#000"
                  data-size={XL}
                  data-style={SLIDE_UP}
                  data-spinner-size={30}
                  data-spinner-color="#000"
                  data-spinner-lines={12}
                  className="btn btn-success btn-block"
                >
                  {this.props.inscriptionLaddaText}
                </LaddaButton>

          </fieldset>
        </form>
    )
  }
}

export default SignupForm;
