import React,  { Component } from 'react';
import { browserHistory } from 'react-router';

import LaddaButton, { XL, SLIDE_UP } from 'react-ladda';


class InlineForm extends Component {



  constructor(props){
    super(props);
    this.state = { error: '' , loading: false, laddaText:"Connexion"}
  }
  

  onConnexionClick(event){
    event.preventDefault();

    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const that = this;
    if(email && password){
      that.setState({ loading: !this.state.loading, progress: 0.5, laddaText:"Conenxion en cours" });
      Meteor.loginWithPassword(email, password, function(error){
        if(!error){
          that.setState({ loading: false });
          //browserHistory.push('/');
        }else {

           let reason = "" ;
            switch(error.reason){
              case 'Incorrect password':
                reason = "Le mot de passe est incorrect";
              break;
              case 'User not found':
                reason = "Cet utilisateur n'existe pas";
              break;
            }

          that.setState({ 
            loading: false,
            laddaText: `${reason}`
           });
          console.log("Error", error);
        }
      });
    }
  }
  render(){
    //<button onClick={ this.onConnexionClick.bind(this) } type="submit" className="nav-btn btn bg-small btn-default">Connexion</button>
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
        
        <LaddaButton
                  loading={ this.state.loading }
                  onClick={ this.onConnexionClick.bind(this) }
                  data-color="#000"
                  data-size={XL}
                  data-style={SLIDE_UP}
                  data-spinner-size={30}
                  data-spinner-color="#000"
                  data-spinner-lines={12}
                  className="nav-btn btn bg-small"
                >
                  {this.state.laddaText}
                </LaddaButton>
        <button onClick={ this.props.onInscriptionClick } type="submit" className="nav-btn btn bg-small btn-success">Inscription</button>
      </form>
    )
  }
}

export default InlineForm;
