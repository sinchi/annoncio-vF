import React , { Component } from 'react';
import moment from 'moment';

class MessageItem extends Component {

  render(){
    moment.locale('fr');
    const {message} = this.props;

    return (
      <div key={message._id} className="row msg_container base_{message.type}">
        {
          message.type === "sent" && (
            <div className="col-md-2 col-xs-2 avatar">
                <img src={message.img} className=" img-responsive " />
            </div>
          )
        }
        <div className="col-md-10 col-xs-10 ">
            <div className="messages msg_{message.type}">
                <p>{message.body}</p>
              <time dateTime={message.createdAt}>{`${moment(message.createdAt).toNow(true)}`}</time>
            </div>
        </div>
        {
          message.type === "receive" && (
            <div className="col-md-2 col-xs-2 avatar">
                <img src={message.img} className=" img-responsive " />
            </div>
          )
        }
      </div>
    )
  }
}

export default MessageItem;
