import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { createContainer } from 'react-meteor-data';
import { Conversations } from '../../../imports/collections/conversations';
import { Messages } from '../../../imports/collections/messages';
import MessageHeaderItem from './message_header_item';
import {Annonces} from '../../../imports/collections/annonces';
import _ from 'underscore';


class MessagesHeader extends Component {
  render(){
    const { conversations } = this.props;
    const lastMessages = conversations.length > 0 ? conversations.map((conversation) => {
      return {
              lastMessage: Messages.findOne({ conversationId: conversation._id }, { sort: { createdAt: -1 } }),
              conversation: conversation
            }
    }).sort((currentMessage, nextMessage) => {
          if(currentMessage && nextMessage){
            return nextMessage.lastMessage.createdAt - currentMessage.lastMessage.createdAt;
          }
            
    }) : [];        
    const MessagesNotifications = lastMessages.length > 0 ? lastMessages.map((message) => {    
      const { lastMessage, conversation } = message;
      return <MessageHeaderItem lastMessage={lastMessage} conversation={conversation} key={conversation._id} />
    }) : "";
 
    return(
      <li className="btn-group">
          <a className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <FontAwesome name="envelope" size="2x" /><sup><label className="badge">{this.props.countMessages > 0 ? this.props.countMessages : "" }</label></sup>
          </a>
          <ul className="dropdown-menu">
            {
              !this.props.loading && MessagesNotifications
            }
          </ul>
      </li>
    )
  }
}

export default createContainer(() => {

   const subscription = Meteor.subscribe('conversations.last_message');    

  return {    
    conversations: Conversations.find({
      $or:[
        { originatingFromId: Meteor.userId() },
        { originatingToId: Meteor.userId() }
      ]
    }).fetch(),
    countMessages: Messages.find({"to.userId" : Meteor.userId() }).count(),
    loading: !subscription.ready()
  }

}, MessagesHeader);
