import React,  { Component } from 'react';
import { browserHistory } from 'react-router';



class InlineForm extends Component {

  constructor(props){
    super(props);
    this.state = { error: '' }
  }

  onConnexionClick(event){
    event.preventDefault();

    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const that = this;
    if(email && password){
      Meteor.loginWithPassword(email, password, function(error){
        if(!error){
          browserHistory.push('/');
        }
      });
    }
  }
  render(){
    const emailError = () => {
      console.log("erreur : " , this.state.error);
      return  (this.state.error) ? <label className="control-label" for="email">Email Error</label> : '';
    }
    return(
      <form className="navbar-form">
        <div className={`form-group ${this.state.error}`}>
          {  emailError }
          <input id="email" ref="email" type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input ref="password" type="password" className="form-control" placeholder="Mot de passe" />
        </div>
        <button onClick={ this.onConnexionClick.bind(this) } type="submit" className="nav-btn btn bg-small btn-default">Connexion</button>
        <button onClick={ this.props.onInscriptionClick } type="submit" className="nav-btn btn bg-small btn-success">Inscription</button>
      </form>
    )
  }
}

export default InlineForm;
