import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { createContainer } from 'react-meteor-data';
import { Conversations } from '../../../imports/collections/conversations';
import { Messages } from '../../../imports/collections/messages';
import MessageHeaderItem from './message_header_item';
import {Annonces} from '../../../imports/collections/annonces';


class MessagesHeader extends Component {
  render(){

    const Messages = this.props.messages.length > 0 ? this.props.messages.map((message) => {          
      return <MessageHeaderItem message={message} key={message._id} />
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

export default createContainer((props) => {

   const subscription = Meteor.subscribe('conversations.last_message');    

  return {
    messages : Messages.find({}, { sort: { createdAt: -1 } }).fetch(),
    conversations: Conversations.find({}).fetch(),    
    loading: !subscription.ready()
  }

}, MessagesHeader);
