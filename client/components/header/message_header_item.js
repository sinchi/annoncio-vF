import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';


class MessageHeaderItem extends Component {
  render(){
    moment.locale('fr');
    const { lastMessage, conversation } = this.props ;       

    const MessageNotification = lastMessage.from.userId === Meteor.userId() ?    
      <MessageItemInfo  icon={"reply"} 
                        username={lastMessage.to.username} 
                        body={lastMessage.body} 
                        title={conversation.annonce.title} 
                        createdAt={lastMessage.createdAt}
                        category={conversation.annonce.category.value} 
                        conversationId={conversation._id}
      />
      :
      <MessageItemInfo  icon={"envelope"} 
                        username={lastMessage.from.username} 
                        body={lastMessage.body} 
                        title={conversation.annonce.title} 
                        createdAt={lastMessage.createdAt}
                        category={conversation.annonce.category.value}
                        conversationId={conversation._id}
      />
     
    return (
     
           <li key={lastMessage._id}>
              { MessageNotification }              
          </li>
        )
          
  }
}


class MessageItemInfo extends Component {

  setVisible(){
    Meteor.call('conversations.setVisible', true, this.props.conversationId);
  }

  render(){
    const { icon, username, body, title, createdAt, category } = this.props;
    return(
      <a href="#" onClick={this.setVisible.bind(this)}>        
         <FontAwesome name="user" /> <a href="#">{username}</a> :  <span className="badge">{title} : {category}</span><br/>
         <FontAwesome name={icon} /> <strong>{body}</strong><br/>
         <small className="time text-muted"><FontAwesome name="clock-o"/> {`${moment(createdAt).toNow(true)}`}</small>         
      </a>
    )
  }
}

export default MessageHeaderItem;