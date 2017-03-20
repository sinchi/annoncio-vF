import React , { Component } from 'react';
import moment from 'moment';

class MessageItem extends Component {

  componentDidMount(){
    $("#"+this.props.message.conversationId).scrollTop($("#"+this.props.message.conversationId)[0].scrollHeight);
  }

  render(){
    moment.locale('fr');
    const {message} = this.props;
    const type = message.from.userId === Meteor.userId() ? "sent" : "receive";    
    const username = message.from.userId === Meteor.userId() ? "" : message.from.username;  
    return (
      <div key={message._id} className="row msg_container base_{type}">
        {
          type === "receive" && (
            <div className="col-md-2 col-xs-2 avatar">
                <img src="http://arswiki.info/twiki/pub/Main/UserProfileHeader/default-user-profile.jpg" className=" img-responsive " />
                <span className="badge">{username}</span>
                
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
          type === "sent" && (
            <div className="col-md-2 col-xs-2 avatar">
                <img src="http://arswiki.info/twiki/pub/Main/UserProfileHeader/default-user-profile.jpg" className=" img-responsive " />    
                <span className="badge">{username}</span>            
            </div>
          )
        }
      </div>
    )
  }
}

export default MessageItem;
