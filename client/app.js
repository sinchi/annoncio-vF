import React, {Component, Children, cloneElement} from 'react';
import { Meteor } from 'meteor/meteor';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { browserHistory } from 'react-router';
import Header from './components/header/header';
import _ from 'underscore';

import SignupForm from './components/authentication/signup_form';
import LoginForm from './components/authentication/login_form';
import ChatBox from './components/chat/chat_box';

import { createContainer } from 'meteor/react-meteor-data';
import { Conversations } from '../imports/collections/conversations';
import { Messages } from '../imports/collections/messages';
import { Annonces } from '../imports/collections/annonces';

import MessageBox from './components/messages/message_box';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { isShowingModal: false , annoncesChat:[], showPopupForChatMessage: false, annonceMessage: {}};
  } 

  componentWillReceiveProps(props){
    this.setState({ annoncesChat: props.conversations });
  }

  handleClick(){
    this.setState({isShowingModal: true})
  }

  handleClose(what, event){   
    if(what === "isShowingModal"){
      this.setState({isShowingModal: false});  
    }else if(what === "showPopupForChatMessage"){
      this.setState({showPopupForChatMessage: false});
    }

    return false; 
    
  }

  onInscriptionClick(event){
    event.preventDefault();
    this.handleClick();
  }

  onLoginClick(event){
    event.preventDefault();
    const email = this.refs.embedded_login_form.refs.login_email.value;
    const password = this.refs.embedded_login_form.refs.login_password.value;

    const that = this;
    if(email && password){
      Meteor.loginWithPassword(email, password, function(error){
        if(!error){
          that.setState({ isShowingModal: false });
          browserHistory.push('/');
        }else {
          console.log("Error", error);
        }
      });
    }
  }

  onSignupClick(event){
    event.preventDefault();
    const that = this;
    const email = this.refs.embedded_signup_form.refs.signup_email.value;
    const password = this.refs.embedded_signup_form.refs.signup_password.value;
    const repassword = this.refs.embedded_signup_form.refs.signup_repassword.value;
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
              that.setState({ isShowingModal: false });
              browserHistory.push('/');
            }else{
              console.log("Erreur ", error);
            }
        })

    }

  }

  showPopupForChatMessage(annonce){
    this.setState({ showPopupForChatMessage: true, annonceMessage: annonce });    
  }

  openChatBox(messageBody){    
    Meteor.call("messages.insert_new",messageBody ,this.state.annonceMessage._id);
  }  

  closeChatBox(i){
    let newAnnonces = this.state.annoncesChat;
    newAnnonces.splice(i, 1);
    this.setState({ annoncesChat: newAnnonces });
  }

  findAnnonceById(id){
    return _.find(this.props.annonces, function(annonce) {
      return id === annonce._id;
    });
  }

  render(){
    let ChatBoxs = this.state.annoncesChat.length > 0 ? this.state.annoncesChat.map((conversation, i) => {     
      //let annonce =  this.props.annonces.length > 0 ?  this.findAnnonceById(annonceChat.annonceId) : this.findAnnonceById(annonceChat._id); 

          return (<ChatBox
                        key={conversation._id}
                        right={`${ i * 300 }px`}                        
                        closeChatBox={this.closeChatBox.bind(this)}
                        conversation={conversation}
                        focus={ i === (this.state.annoncesChat.length - 1) ? true : false }
                        position={i}                        
                        />);
        }) : "";
    const children = cloneElement(this.props.children, { 
        openChatBox: this.openChatBox.bind(this), 
        showPopupForChatMessage: this.showPopupForChatMessage.bind(this)
    });

    return(
      <div>
        <Header onInscriptionClick={ this.onInscriptionClick.bind(this) }/>
        { ChatBoxs }
        { children }
        {
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose.bind(this, "isShowingModal")}>
            <ModalDialog onClose={this.handleClose.bind(this, "isShowingModal")}>
              <div className="row">
                <div className="col-xs-6">
                    <h1>Inscription</h1>
                    <SignupForm
                    ref="embedded_signup_form" onInscriptionClick={ this.onSignupClick.bind(this) }
                    onClose={ this.handleClose.bind(this, "isShowingModal") }
                    />
                </div>
                <div className="col-xs-6">
                    <h1>Connexion</h1>
                    <LoginForm ref="embedded_login_form" onLoginClick={ this.onLoginClick.bind(this) }/>
                </div>
              </div>
            </ModalDialog>
          </ModalContainer>
        }
        {
          this.state.showPopupForChatMessage &&
          <ModalContainer onClose={this.handleClose.bind(this, "showPopupForChatMessage")}>
            <ModalDialog>
              <div className="row">
                <MessageBox 
                            annonce={this.state.annonceMessage} 
                            openChatBox={this.openChatBox.bind(this)} 
                            handleClose={this.handleClose.bind(this, "showPopupForChatMessage")}
                />
              </div>
            </ModalDialog>
          </ModalContainer>
        }

      </div>
    )
  }
}

export default createContainer(() => {
  const subscription = Meteor.subscribe('conversations.last_message');
  const conversations =  Conversations.find({}).fetch();  
  const messages = Messages.find({}).fetch();  
  return {
    conversations: conversations,  
    messages: messages,    
    loading: !subscription.ready() 
  }
}, App);
