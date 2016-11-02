import React, { Component } from 'react';

class NotificationsHeader extends Component {
  render(){
    return(
      <li className="btn-group">
          <a className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="glyphicon glyphicon-bell"></span> Notifications <label className="badge">2</label> <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li>
                <a href="#" >
                  <span className="glyphicon glyphicon-comment"></span> <a href="#">Ayoub Amani</a> a commenté sur votre annonce
                </a>
            </li>
            <li>
                <a href="#" >
                  <span className="glyphicon glyphicon-thumbs-up"></span> <a href="#">Samahe Courtane</a> a aimée votre annonce
                </a>
            </li>
            <li>
                <a href="#" >
                  <span className="glyphicon glyphicon-link"></span> <a href="#">Samahe Courtane</a> maintenant vous suivre
                </a>
            </li>
          </ul>
      </li>
    )
  }
}

export default NotificationsHeader;
