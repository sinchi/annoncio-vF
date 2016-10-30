import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import SignupForm from './signup_form';
import LoginForm from './login_form';

class Header extends Component {

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

onConnexionClick(event){
  event.preventDefault();
  const email = this.refs.email.value;
  const password = this.refs.password.value;
  console.log("Email", email);
  console.log("Password", password);
}

onInscriptionClick(event){
  event.preventDefault();
  this.handleClick();
}

onSignupClick(event){
  event.preventDefault();
  console.log("Inscription");
}

  render(){
    return(
      <nav className="nav navbar-default navbar-fixed-top ">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#" className="navbar-brand" style={{ color:"black" }}>Annoncio</a>
        </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#"><span className="glyphicon glyphicon-flag" aria-hidden="true"></span>  Publier une Annonce <span className="sr-only">(current)</span></a></li>
        </ul>


        <div className="nav navbar-nav navbar-right">
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input ref="email" type="text" className="nav-input form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input ref="password" type="password" className="nav-input form-control" placeholder="Mot de passe" />
            </div>
            <button onClick={ this.onConnexionClick.bind(this) } type="submit" className="nav-btn btn btn-default">Connexion</button>
            <button onClick={ this.onInscriptionClick.bind(this) } type="submit" className="nav-btn btn btn-success">Inscription</button>
          </form>
        </div>
      </div>

        {
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose.bind(this)}>
            <ModalDialog onClose={this.handleClose.bind(this)}>

              <div>
                <div className="col-xs-5">
                    <h1>Inscription</h1>
                    <SignupForm  onClose={ this.handleClose.bind(this)} onSignup={ this.onSignupClick.bind(this) }/>
                </div>

                <div className="col-xs-5 col-xs-offset-2">
                    <h1>Connexion</h1>
                    <LoginForm  />
                </div>
              </div>
            </ModalDialog>
          </ModalContainer>
        }

    </nav>
    )
  }
}

export default Header;
