import React, { Component } from 'react';
import AnnoncesList from '../annonces/annonces_list';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { browserHistory } from 'react-router';
import SignupForm from '../authentication/signup_form';
import LoginForm from '../authentication/login_form';
import SideMenu from '../search/side_menu';
import Annonces from '../../../imports/collections/annonces';

let SEARCH = {};

class AnnoncesPage extends Component {

  constructor(props){
    super(props);
    this.state = { isShowingModal: false, category: '', city:''};
  }

  componentDidMount(){
      console.log("didMount");
  }

  componentWillUnmount(){
    console.log("unmount");
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

  onOffreChange(event){
    this.setState({ typeOffre: event.target.value, 'search.offre': event.target.value });
    Meteor.subscribe("annonces", this.state.search);
  }

  onCategoriesChange(val){
    if(val && val.value){
      this.SEARCH =  Object.assign({}, this.SEARCH, {'category.value': val.value});
    }else{
      this.SEARCH =  Object.assign({}, this.SEARCH, {'category.value': ""});
    }
    this.setState({ search: this.SEARCH });
    //console.log(this.SEARCH);
    //Meteor.subscribe('annonces', this.SEARCH);
    this.setState({ category: val });

  }

  onCityChange(val){
    this.setState({ city: val });
    console.log(( val && val.value) ? val.value : "");
  }

  render(){
    return(
        <div className="container" style={{ marginTop:"90px" }}>
          <div className="col-xs-5 col-sm-3 col-md-2" style={{ position:"fixed" }}>
            <SideMenu
              city={this.state.city}
              category={this.state.category}
              onCityChange={this.onCityChange.bind(this)}
              onOffreChange={this.onOffreChange.bind(this)}
              onCategoriesChange={this.onCategoriesChange.bind(this)}/>
          </div>

          <div className="col-xs-12 col-xs-offset-5 col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3">
            <AnnoncesList category={this.state.category} search={{ city: this.state.city, category: this.state.category }} onInscriptionClick={ this.onInscriptionClick.bind(this) }/>
          </div>

          {
            this.state.isShowingModal &&
            <ModalContainer onClose={this.handleClose.bind(this)}>
              <ModalDialog onClose={this.handleClose.bind(this)}>

                <div className="row">
                  <div className="col-xs-6">
                      <h1>Inscription</h1>
                      <SignupForm onClose={ this.handleClose.bind(this) }/>
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

export default AnnoncesPage;
