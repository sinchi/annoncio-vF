import React, { Component } from 'react';
import Annonce from './annonce';
import { createContainer } from 'meteor/react-meteor-data';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import  FontAwesome from  'react-fontawesome';
import  Infinite from 'react-infinite';
import Annonces from '../../../imports/collections/annonces';



class AnnoncesList extends Component {

  constructor(props){
    super(props);
    this.state = {isInfiniteLoading: false};
  }

  handleInfiniteLoad(limit){
    console.log("Limit is " + limit);
    //this.setState({ isInfiniteLoading: this.props.loading });
    // const { search } = this.props;
    // const subscription = Meteor.subscribe('annonces', {"city.value": search.city.value, "category.value": search.category.value});
    // const loading = !subscription.ready();
    // this.setState({ isInfiniteLoading: loading });
  }

  elementInfiniteLoad(){
    return (<span><FontAwesome name="spinner" size='3x' spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>Chargement en cours...</span>);
  }

  handleClose(event){
    if(event)
    event.preventDefault();
    this.setState({isShowingModal: false})
  }

  render(){

    let Annonces = this.props.loading ? (
      <ModalContainer>
        <ModalDialog>
          <FontAwesome name="spinner" size='3x' spin pulse style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
        </ModalDialog>
      </ModalContainer>
    ) :
       this.props.annonces.map((annonce => {
        return (
                <Annonce
                  key={ annonce._id }
                  annonce = { annonce }
                  onInscriptionClick={ this.props.onInscriptionClick }
                  addComment={ this.props.addComment }
                />
            );
      }));

    return(
      <div>
        { Annonces }
      </div>
    )
  }
}

export default createContainer((props) => {
  const { category, city, model, brand } = props.search;
  let query = {};
  if(category){
    if(category.value && !category.parent){
        query = Object.assign({}, query, { "category.parent" : category.value });
    }else{
       query = Object.assign({}, query, { "category.value" : category.value });
    }
  }
  if(city){
    query = Object.assign({}, query, { "city.value": city.value });
  }
  if(model || brand){
    if(model){
      query = Object.assign({}, query, { "model.value": model.value });
    }else{
      query = Object.assign({}, query, { "brand.value": brand.value });
    }
  }
  console.log(query);
  const subscription = Meteor.subscribe('annonces', query, 5);
  const comments = [
    {
      _id:1,
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-1/c1.0.160.160/p160x160/14691104_170628660057646_2916366093939806805_n.jpg?oh=96b010d6c9d0e7b3acfd57afffcc0bec&oe=58890332",
      username: "Samahe Courtane",
      createAt: new Date(),
      content: "Salam chhal akhir taman ?"
    },

      {
        _id:2,
        image: "https://z-1-scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p160x160/11013639_1675345039364941_2359817135560082373_n.jpg?oh=adba19c4f9c14e6315248eebb2640268&oe=58A4CEE9",
        username: "hamoda Tahiri",
        createAt: new Date(),
        content: "Jdid ???"
      },
      {
        _id:3,
        image: "https://z-1-scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/p160x160/14729334_1258940240833238_4210616661215166095_n.jpg?oh=3fa6aee20b7845346e9bfa42d878fd85&oe=589833F1",
        username: "Sin Comerlo Ni Beberlo ",
        createAt: new Date(),
        content: "o bech7al  ?"
      },
      {
        _id:4,
        image: "https://z-1-scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/p160x160/11826074_10207213565358439_2172120943394923433_n.jpg?oh=1a61ac344e04d34c78d7ce4687a9a459&oe=589901CD",
        username: "Mehdi Barmaki ",
        createAt: new Date(),
        content: "sayb chwiya ra ghali hadchi  ?"
      },
      {
        _id:5,
        image: "https://z-1-scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p160x160/11013639_1675345039364941_2359817135560082373_n.jpg?oh=adba19c4f9c14e6315248eebb2640268&oe=58A4CEE9",
        username: "hamoda Tahiri",
        createAt: new Date(),
        content: "Wach Jdid Jawbni?"
      },
      {
        _id:6,
        image: "https://z-1-scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p160x160/11013639_1675345039364941_2359817135560082373_n.jpg?oh=adba19c4f9c14e6315248eebb2640268&oe=58A4CEE9",
        username: "hamoda Tahiri",
        createAt: new Date(),
        content: "Wach Jdid Jawbni?"
      }

  ]
  const annonces = [
    {
      _id: "1",
      username:"Ayoub Sinchi",
      image: "http://arswiki.info/twiki/pub/Main/UserProfileHeader/default-user-profile.jpg",
      createdAt: new Date(),
      title: "Samsung Galaxy S4",
      images:
          {
              items:[
                {

                  img: "http://res.cloudinary.com/annoncio/image/upload/v1483201076/s17xgequrmpqcsqjeqt6.jpg",
                  alt:"image1",
                  caption: "Galaxy s4"
                },
                {
                  img: "http://res.cloudinary.com/annoncio/image/upload/v1483201077/nknooolvmxpjf7fkrdlr.jpg",
                  alt:"image2",
                  caption: "Encore new",
                  active:"active"
                }
            ],
            description:"Versions: J710F, J710FN (EMEA); J710M (LATAM); J710H (South Africa, Pakistan, Vietnam) Also known as Samsung Galaxy J7 (2016) Duos with dual-SIM card slots Asia/China model with 1080p display and 3 GB RAM"
        },
      comments:comments
    },
    {
      _id:"2",
      username: "Samahe Courtane",
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-1/c1.0.160.160/p160x160/14691104_170628660057646_2916366093939806805_n.jpg?oh=96b010d6c9d0e7b3acfd57afffcc0bec&oe=58890332",
      createdAt: new Date(),
      title: "Samsung Galaxy S6",
      images:
          {
              items:[
                {
                  img: "http://actu.meilleurmobile.com/wp-content/uploads/2015/04/Flash-Recovery-Samsung-Galaxy-S4-Canadian-900x600.jpg",
                  alt:"S6",
                  caption: "Galaxy s6",
                  active:"active"
                },
                {
                  img: "http://www.revolucaodigital.net/wp-content/uploads/2013/04/apresentacao_galaxy-s4_03-610x406.jpg",
                  alt:"others6",
                  caption: "S6"
                }
            ],
            description:"Versions: J710F, J710FN (EMEA); J710M (LATAM); J710H (South Africa, Pakistan, Vietnam) Also known as Samsung Galaxy J7 (2016) Duos with dual-SIM card slots Asia/China model with 1080p display and 3 GB RAM"
        },
      comments:comments
    }
  ]

  return {
    annonces: Annonces.find({}, { sort: { createdAt: -1 } }).fetch(),
    loading: !subscription.ready()
  }
}, AnnoncesList);
