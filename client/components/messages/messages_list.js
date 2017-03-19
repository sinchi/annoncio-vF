import React , { Component } from 'react';

import MessageItem from './message_item';

class MessagesList extends Component {

  render(){
    const Messages = this.props.messages.map((message) => {
      return <MessageItem key={message._id} message={ message }  />
    });

    return (
      <div className="panel-body msg_container_base">
         { Messages }
     </div>
    )
  }
}

export default MessagesList;
