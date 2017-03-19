import React , { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import  FontAwesome from  'react-fontawesome';
import MessagesList from '../messages/messages_list';

class ChatBox extends Component{

  constructor(props){
    super(props);
    this.state = { open: true };
  }

  componentDidMount(){
    this.toggleChatBox();
  }

  toggleChatBox(){
    const height = this.state.open ? "400px" : "40px";
    this.setState({ height: height, open: !this.state.open });
  }

  onKeyPressSendChatMessage(event){
    if((event.key === 'Enter' && event.target.value !== "")){    
      this.sendIt(event.target.value);
    }
  }

  sendChatMessage(){
    const body = this.refs.message.value;
    if(body){
      this.sendIt(body);
    }
  }

  sendIt(body){
    const message = {
        conversationId: 1,
        from : {
          userId: Meteor.userId()          
        }, 
        to : {
          userId: this.props.chat.owner.id,
          read: false
        },        
        body: body,
        createdAt: new Date()
      };

      this.props.sendChatMessage(message);
      this.refs.message.value = "";
      this.refs.message.focus();
    }

    closeChatBox(){
      this.props.closeChatBox(this.props.chat._id);
    }
  

  render(){

    const style = {
      "position":"fixed",
      "bottom":"0",
      "height": this.state.height,
      "right": this.props.right,
      "zIndex": 1,
      "float": "right"
    };
    const topBarStyle = {
      padding: "10px",
      position: "relative",
      overflow: "hidden"
    };

    return (
      <div className="row col-xs-5 col-md-3" id="chat_window_1" style={style}>
        <div className="col-xs-12 col-md-12">
        	<div className="panel panel-default">
                <div className="panel-heading" style={topBarStyle}>
                    <div className="col-md-8 col-xs-8" onClick={ this.toggleChatBox.bind(this) }>
                        <h3 className="panel-title"><span className="glyphicon glyphicon-comment"></span> {this.props.title}</h3>
                    </div>
                    <div className="col-md-4 col-xs-4" style={{ "textAlign": "right" }}>
                        <a onClick={ this.toggleChatBox.bind(this) } className="btn btn-sm"><span id="minim_chat_window" className="glyphicon glyphicon-minus icon_minim"></span></a>
                        <a onClick={ this.closeChatBox.bind(this)}><span className="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>
                    </div>
                </div>

                <MessagesList messages={this.props.messages} />

                <div className="panel-footer">
                    <div className="input-group">
                        <input onKeyPress={ this.onKeyPressSendChatMessage.bind(this) } autoFocus={this.props.focus} ref="message" id="btn-input" type="text" className="form-control input-sm chat_input" placeholder="Ecrire votre message içi..." />
                        <span className="input-group-btn">
                        <button className="btn btn-primary btn-sm" id="btn-chat" onClick={ this.sendChatMessage.bind(this) }>Envoyer</button>
                        </span>
                    </div>
                </div>
    		  </div>
        </div>
    </div>
    );
  }
}

export default createContainer((props) => {
  const messages = [
    {
      _id: 1,
      type: "sent",
      body: "Salam Cava",
      createdAt: new Date(),
      img:"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
    },
    {
      _id: 2,
      type: "receive",
      body: "Oui hamdollah et toi ?",
      createdAt: new Date(),
      img:"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
    },
    {
      _id: 3,
      type: "sent",
      body: "Cava",
      createdAt: new Date(),
      img:"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
    },
    {
      _id: 4,
      type: "receive",
      body: "dernier prix ?",
      createdAt: new Date(),
      img:"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
    }
  ];
  return {
    messages: messages
  }
}, ChatBox);
