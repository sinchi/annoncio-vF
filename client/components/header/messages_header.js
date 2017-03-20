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
    const { conversations, messages } = this.props;
    const Messages = conversations.length > 0 ? conversations.map((conversation) => { 
      const lastMessage = _.filter(messages, (message) => message.conversationId === conversation._id)[0];      
      return <MessageHeaderItem lastMessage={lastMessage} conversation={conversation} key={conversation._id} />
    }) : "";
 
    return(
      <li className="btn-group">
          <a className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <FontAwesome name="envelope" size="2x" /><sup><label className="badge">{this.props.conversations.length > 0 ? this.props.conversations.length : "" }</label></sup>
          </a>
          <ul className="dropdown-menu">
            { Messages }
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
    messages: Messages.find().fetch(),
    loading: !subscription.ready()
  }

}, MessagesHeader);
