import React , { Component } from 'react';
import { Meteor } from 'meteor/meteor';
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
    const { conversation } = this.props;
    const that = this;
      Meteor.call("messages.insert",body ,conversation, function(err){
        if(!err){
          that.refs.message.value = "";
          that.refs.message.focus();         
        }
      });
  }

    closeChatBox(){
      this.props.closeChatBox(this.props.position);
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
                        <h5 className="panel-title"><FontAwesome name="comment" /> {this.props.conversation.annonce.title} <span className="badge">{ this.props.conversation.annonce.price }DH</span></h5>
                    </div>
                    <div className="col-md-4 col-xs-4" style={{ "textAlign": "right" }}>
                        <a onClick={ this.toggleChatBox.bind(this) } className="btn btn-sm"><span id="minim_chat_window" className="glyphicon glyphicon-minus icon_minim"></span></a>
                        <a onClick={ this.closeChatBox.bind(this)}><span className="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>
                    </div>
                </div>

                <MessagesList conversationId={ this.props.conversation._id } />

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

export default ChatBox;
