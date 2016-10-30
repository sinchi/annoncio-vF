import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Header from './components/header';
import LoginForm from './components/login_form';
import SideMenu from './components/side_menu';
import SearchBar from './components/search_bar';
import AnnoncesMain from './components/annonces/annonces_main';
import SignupForm from './components/signup_form';


class App extends Component {

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
      <div className="container">
        <Header onInscriptionClick={ this.onInscriptionClick.bind(this) }/>
        <div className="row" style={{ marginTop:"90px" }}>
          <div className="col-xs-5 col-sm-3 col-md-2" style={{ position:"fixed" }}>
            <SideMenu />
          </div>
          <div className="col-xs-12 col-xs-offset-5 col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3">
            <AnnoncesMain onInscriptionClick={ this.onInscriptionClick.bind(this) }/>
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
      </div>
    )
  }
}

export default App;
