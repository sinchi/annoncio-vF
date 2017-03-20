import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class MessageHeaderItem extends Component {
  render(){
    const { lastMessage, conversation } = this.props ;   
    //const username = lastMessage.from.userId === Meteor.userId() ? "To " + lastMessage.to.username : "from " + lastMessage.from.username;    
    return (
     
           <li key={lastMessage._id}>
              <a href="#">
                <FontAwesome name="envelope" /> <a href="#">{"username"}</a> {lastMessage.body}
              </a>
          </li>
        )
          
  }
}

export default MessageHeaderItem;