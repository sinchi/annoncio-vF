import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Messages } from '../../../imports/collections/messages';
import FontAwesome from 'react-fontawesome';


class MessageHeaderItem extends Component {
  render(){
    const { message, annonce } = this.props ;   
    const username = Meteor.userId() === message.from.userId ? `to ${message.to.username}` : `from ${message.from.username}`;
    return (
     
           <li key={this.props.message._id}>
              <a href="#">
                <FontAwesome name="envelope" /> <a href="#">{username}</a> {message.body}
              </a>
          </li>
        )
          
  }
}

export default MessageHeaderItem;