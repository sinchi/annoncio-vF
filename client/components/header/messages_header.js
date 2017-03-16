import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class MessagesHeader extends Component {
  render(){
    return(
      <li className="btn-group">
          <a className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <FontAwesome name="envelope" size="2x" /> <sup> <label className="badge">10</label></sup>
          </a>
          <ul className="dropdown-menu">
            <li>
                <a href="#" onClick={ this.props.onLogoutClick }>
                  <FontAwesome name="envelope"/> Nouveau message
                </a>
            </li>
            <li>
                <a href="#" onClick={ this.props.onLogoutClick }>
                  <FontAwesome  name="navicon" /> Voir tous les messages
                </a>
            </li>
          </ul>
      </li>
    )
  }
}

export default MessagesHeader;
