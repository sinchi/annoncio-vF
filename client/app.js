import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { browserHistory } from 'react-router';
import Header from './components/header';
import SideMenu from './components/side_menu';
import SearchBar from './components/search_bar';
import AnnoncesMain from './components/annonces/annonces_main';
import SignupForm from './components/signup_form';
import LoginForm from './components/login_form';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { isShowingModal: false };
  }

  componentDidMount(){
      const { token } = this.props.params;
      if(token){
        Accounts.verifyEmail(token, (error) => {
          if(error){
            console.log("Error verifying email", error);
          }else{
            console.log("Email verified with success");
          }
        });
      }

  }

  handleClick(){
    this.setState({isShowingModal: true})
  }
  handleClose(event){
    if(event)
    event.preventDefault();
    this.setState({isShowingModal: false})
  }

  onInscriptionClick(event){
    event.preventDefault();
    this.handleClick();
  }

  onLoginClick(event){
    event.preventDefault();
    const email = this.refs.embedded_login_form.refs.login_email.value;
    const password = this.refs.embedded_login_form.refs.login_password.value;
    console.log(email + " " + password);
    const that = this;
    if(email && password){
      Meteor.loginWithPassword(email, password, function(error){
        if(!error){
          that.setState({ isShowingModal: false });
          browserHistory.push('/');
        }
      });
    }
  }

  render(){

    return(
      <div className="container">

        <Header onInscriptionClick={ this.onInscriptionClick.bind(this) }/>
        <div className="row" style={{ marginTop:"90px" }}>
          <div className="col-xs-5 col-sm-3 col-md-2" style={{ position:"fixed" }}>
            <SideMenu />
          </div>
          <div className="col-xs-12 col-xs-offset-5 col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3">
            { this.props.children }
          </div>
        </div>
        {
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose.bind(this)}>
            <ModalDialog onClose={this.handleClose.bind(this)}>

              <div className="row">
                <div className="col-xs-6">
                    <h1>Inscription</h1>
                    <SignupForm  onClose={ this.handleClose.bind(this) }/>
                </div>

                <div className="col-xs-6">
                    <h1>Connexion</h1>
                    <LoginForm ref="embedded_login_form" onLoginClick={ this.onLoginClick.bind(this) }/>
                </div>
              </div>
            </ModalDialog>
          </ModalContainer>
        }
      </div>
    )
  }
}

export default App;
