import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'react-meteor-data';
import FontAwesome from 'react-fontawesome';
import { Notifications } from '../../../imports/collections/notifications';


class NotificationsHeader extends Component {
  render(){

    const Notifications = this.props.notifs.length > 0 ? this.props.notifs.map((notif) => {
      const { _id, notiferName, action, icon, createdAt, content, annonceId, text } = notif ;
      return (
        <li key={_id}>
            <a href="#">
              <FontAwesome name={icon} /> <a href="#">{notiferName}</a> {text}
            </a>
        </li>
      )
    }) : "";

    return(
      <li className="btn-group">
          <a className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <FontAwesome name="bell" size="2x" /><sup><label className="badge">{this.props.notifs.length > 0 ? this.props.notifs.length : "" }</label></sup>
          </a>
          <ul className="dropdown-menu">
            { Notifications }
          </ul>
      </li>
    )
  }
}

export default createContainer(() => {

  const notifComment = {
    _id:"147852",
    notiferName: "Amine Alamin",
    action: "comment",
    icon:"comment-o",
    createdAt: new Date(),
    content: "bechhal hada",
    annonceId: "125471232",
    text: `a commenté sur votre annonce `
  };

  const notifLike = {
    _id:"3698741",
    notiferName: "Samahe Courtane",
    action: "like",
    icon:"thumbs-o-up",
    createdAt: new Date(),
    annonceId: "125471232",
    text: ` a aimé votre annonce `
  };

  const notifSuivre = {
    _id:"1247569",
    notiferName: "Samahe Courtane",
    action: "follow",
    icon:"heart-o",
    createdAt: new Date(),
    annonceId: "125471232",
    text: ` maintenant vous suivre`
  };

  const subscription = Meteor.subscribe('notifications', Meteor.userId());
  const commentsNotifications = Notifications.find({action: 'comment'}, { sort: { createdAt: -1 } }).fetch();
  let notifs = [commentsNotifications, notifLike, notifSuivre];

  return {
    notifs : commentsNotifications,
    loading: !subscription.ready()
  }


}, NotificationsHeader) ;
