import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <nav className="nav navbar-default navbar-fixed-top ">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#" className="navbar-brand" style={{ color:"black" }}>Annoncio</a>
        </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#"><span className="glyphicon glyphicon-flag" aria-hidden="true"></span>  Publier une Annonce <span className="sr-only">(current)</span></a></li>
        </ul>


        <div className="nav navbar-nav navbar-right">
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" className="nav-input form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" className="nav-input form-control" placeholder="Mot de passe" />
            </div>
            <button type="submit" className="nav-btn btn btn-default">Connexion</button>
            <button type="submit" className="nav-btn btn btn-success">Inscription</button>
          </form>
        </div>
      </div>
    </nav>
    )
  }
}

export default Header;
