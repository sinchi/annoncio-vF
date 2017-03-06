import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'react-meteor-data';

import InlineForm from '../authentication/inline_form';
import MessagesHeader from './messages_header';
import NotificationsHeader from './notifications_header';
import FontAwesome from 'react-fontawesome';

import PublishAnnonceForm from './publish_annonce_form';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
        category:'',
        brand:'',
        model: '',
        city:'',
        offre:'',
        isShowingModal: false,
        imagesUrl: []
    }
  }

  onLogoutClick(event){
    event.preventDefault();
    Meteor.logout(function(){
        browserHistory.push('/');
    });

  }

  onPublishAnnonceClick(event){
    event.preventDefault();
    this.setState({ isShowingModal: true })
  }

  onPublishAnnonceSubmit(event){
    event.preventDefault();
    $.cloudinary.config({
      cloud_name: "annoncio"
    });
    const title = this.refs.publish_annonce_form.refs.title.value;
    const description = this.refs.publish_annonce_form.refs.description.value;
    const price = this.refs.publish_annonce_form.refs.price.value;
    const category = this.state.category;
    const city = this.state.city;
    const offre = this.state.offre;
    var images = this.state.imagesUrl;
    var items = [];
    _.each(images, (img) => {
      Cloudinary._upload_file(img, {},  function(err, res) {
            if(!err){
              var item = {

                "img": res.url,
                "alt": res.url,
                "caption": "",
                "active": items.length === 0 ? "active": ""
              };
              items.push(item);
              if(images.length === items.length){
                const newAnnonce = {
                  "title" : title,
                  "description" : description,
                  "price" : price,
                  "category": category,
                  "city": city,
                  "offre": offre,
                  "images": {
                    "items": items,
                    "description": ""
                  }
                };
              return  Meteor.call('annonces.insert', newAnnonce);
              }
            }
          });
    });
    this.setState({ isShowingModal: false, imagesUrl:[] });
    //console.log(`titre : ${title}, description: ${description}, price: ${price}, offre:${this.state.offre}, category: ${this.state.category.value}`);
  }

  onCategoriesChange(val){
    this.setState({ category: val });
  }

  onCityChange(val){
    this.setState({ city: val });
  }

  onOffreChange(event){
    this.setState({ offre: (event.target.value) ? event.target.value : '' });
    console.log("offre" ,event.target.value);
  }

  onInputFileChange(event){
    event.preventDefault();

    let images = event.target.files;
    let that = this;

    _.each(images, (image) => {
          let picReader = new FileReader();
          console.log("loading images...");
          picReader.addEventListener("load", function(event) {
            let picFile = event.target;
            let imagesUrl = that.state.imagesUrl;
            imagesUrl.push(picFile.result);
            that.setState({ imagesUrl: imagesUrl });
            console.log("End of loading images");
          });
          picReader.readAsDataURL(image);
    });

    //console.log("images", this.state.imagesUrl);
  }

  handleClose(event){
    event.preventDefault();
    this.setState({ isShowingModal: false, imagesUrl:[] });
  }

  render(){
    const email = (Meteor.user()) ? Meteor.user().emails[0].address.split('@')[0] : '';
    const authentication = (Meteor.userId()) ? (

      <ul className="nav navbar-nav navbar-right" style={{ margin: "0" }}>
        <li>
          <Link to={`/profile/${Meteor.userId()}`}>
            <img className="media" width="30" height="30" alt="" src="http://arswiki.info/twiki/pub/Main/UserProfileHeader/default-user-profile.jpg" /> { email }
          </Link>
        </li>

        {(Meteor.user() && !Meteor.user().emails[0].verified) ? <li><a href="#"><FontAwesome name="warning" /> <u>"Votre adresse mail n'est pas encore verifié ! "</u> </a></li>: "" }

        <li className="btn-group">
          <Link className="btn" to="/"><FontAwesome name="home" size="2x"/></Link>
        </li>

        <MessagesHeader onLogoutClick={ this.onLogoutClick.bind(this) }/>
        <NotificationsHeader />

        <li className="btn-group">
            <a className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FontAwesome name="cog" size="2x"/> <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li>
                  <a href="#" onClick={ this.onLogoutClick.bind(this) }>
                    <span className="glyphicon glyphicon-off"></span> Déconnexion
                  </a>
              </li>
            </ul>
        </li>
      </ul>
    ) : <div className="nav navbar-nav navbar-right"><InlineForm onInscriptionClick={this.props.onInscriptionClick} /></div> ;

    return(
      <nav className="nav navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to={"/"} className="navbar-brand">Annoncio</Link>
        </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className=""><a href="#" onClick={ this.onPublishAnnonceClick.bind(this) }><span className="glyphicon glyphicon-flag" aria-hidden="true"></span>  Publier une Annonce <span className="sr-only">(current)</span></a></li>
        </ul>

        {authentication}

        <PublishAnnonceForm
            imagesUrl={ this.state.imagesUrl }
            onInputFileChange={ this.onInputFileChange.bind(this) }
            isShowingModal={ this.state.isShowingModal }
            handleClose={ this.handleClose.bind(this) }
            onPublishAnnonceSubmit={ this.onPublishAnnonceSubmit.bind(this) }
            onCategoriesChange={ this.onCategoriesChange.bind(this) }
            onCityChange={ this.onCityChange.bind(this) }
            category={ this.state.category }
            city={ this.state.city }
            onOffreChange={ this.onOffreChange.bind(this) }
            offre= { this.state.offre }
            ref="publish_annonce_form"
            />
      </div>
    </nav>
    )
  }
}

export default Header;
