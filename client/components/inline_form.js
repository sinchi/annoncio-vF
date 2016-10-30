import React,  { Component } from 'react';

class InlineForm extends Component {
  onConnexionClick(event){
    event.preventDefault();
    console.log(event.refs);
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log("Email", email);
    console.log("Password", password);
  }
  render(){
    return(
      <form className="navbar-form">
        <div className="form-group">
          <input ref="email" type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input ref="password" type="password" className="form-control" placeholder="Mot de passe" />
        </div>
        <button onClick={ this.onConnexionClick.bind(this) } type="submit" className="nav-btn btn bg-small btn-default">Connexion</button>
        <button onClick={ this.props.onInscriptionClick.bind(this) } type="submit" className="nav-btn btn bg-small btn-success">Inscription</button>
      </form>
    )
  }
}

export default InlineForm;
