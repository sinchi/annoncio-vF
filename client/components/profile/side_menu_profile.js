import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class SideMenuProfile extends Component {
  render(){

    return(
        <div className="list-group">
          <Link to={`/profile/${Meteor.userId()}`} className="list-group-item">
            <div className="media">
              <div className="media-left">
                  <img className="media-object" width="30" height="30" src="http://arswiki.info/twiki/pub/Main/UserProfileHeader/default-user-profile.jpg" alt="image profile" />                
              </div>
              <div className="media-body">
                 <label style={{ margin: "10px 0 0 0" }} className="label-control">{ (Meteor.user()) ? Meteor.user().emails[0].address.split('@')[0] : "" }</label>
               </div>
            </div>
          </Link>
          <Link to={`/edit-profile/${Meteor.userId()}`} className="list-group-item">
            <FontAwesome name="user" size="2x" /> <label className="label-control">Modifier le profil</label>
          </Link>
          <Link to={`/my-annonces-list/${Meteor.userId()}`} className="list-group-item">
            <FontAwesome name="flag" size="2x" /> <label className="label-control"> Annonces</label>
          </Link>
          <Link to={`/my-search/${Meteor.userId()}`} className="list-group-item">
            <FontAwesome name="search" size="2x" /> <label className="label-control"> Recherches</label>
          </Link>
          <Link to={`/my-shops/${Meteor.userId()}`} className="list-group-item">
            <FontAwesome name="shopping-bag" size="2x" /> <label className="label-control"> Boutiques</label>
          </Link>
          <Link to={`/my-messages/${Meteor.userId()}`} className="list-group-item">
            <FontAwesome name="envelope" size="2x" /> <label className="label-control"> Messages</label>
          </Link>
          <Link to={`/my-comments/${Meteor.userId()}`} className="list-group-item">
            <FontAwesome name="comments" size="2x" /> <label className="label-control"> Commentaires</label>
          </Link>
        </div>
    );
  }
}

export default SideMenuProfile;
