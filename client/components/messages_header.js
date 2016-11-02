import React, { Component } from 'react';

class MessagesHeader extends Component {
  render(){
    return(
      <li className="btn-group">
          <a className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="glyphicon glyphicon-comment"></span> Messages <label className="badge">2</label> <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li>
                <a href="#" onClick={ this.props.onLogoutClick }>
                  <span className="glyphicon glyphicon-cog"></span> Mon Compte
                </a>
            </li>
            <li>
                <a href="#" onClick={ this.props.onLogoutClick }>
                  <span className="glyphicon glyphicon-off"></span> Déconnexion
                </a>
            </li>
          </ul>
      </li>
    )
  }
}

export default MessagesHeader;
