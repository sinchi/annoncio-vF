import React , { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';


import MessageItem from './message_item';
import {Messages}  from '../../../imports/collections/messages';

class MessagesList extends Component {

  render(){
    const Messages = this.props.messages.map((message) => {
      return <MessageItem key={message._id} message={ message }  />
    });

    return (
      <div className="panel-body msg_container_base" id={this.props.conversationId}>
         { Messages }
     </div>
    )
  }
}

export default createContainer((props) => {
  const { conversationId } = props;  
  const subscription = Meteor.subscribe('messages', conversationId); 
  let messages = Messages.find({ conversationId: conversationId }, { sort: { createdAt: 1 } }).fetch();  
  return {
    messages: messages,
    loading: !subscription.ready()
  }
}, MessagesList);
