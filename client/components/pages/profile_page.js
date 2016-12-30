import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import AnnoncesList from '../annonces/annonces_list';
import SideMenuProfile from '../profile/side_menu_profile';


class ProfilePage extends Component {
  render(){
    const style = {
      position:"fixed",
      overflow: "auto"
    }
    return(
      <div className="container" style={{ marginTop:"90px" }}>
        <div className="col-xs-5 col-sm-3 col-md-2" style={style}>
          <SideMenuProfile />
        </div>
        <div className="col-xs-12 col-xs-offset-5 col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
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
      image: "https://z-1-scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/p160x160/14291890_10154930613105663_1850540376112361297_n.jpg?oh=baf50636e2236a30a6df5e07772ba6f3&oe=58A1038E",
      createdAt: new Date(),
      title: "Samsung Galaxy S4",
      images:
          {
              items:[
                {

                  img: "http://actu.meilleurmobile.com/wp-content/uploads/2015/04/Flash-Recovery-Samsung-Galaxy-S4-Canadian-900x600.jpg",
                  alt:"image1",
                  caption: "Galaxy s4"
                },
                {
                  img: "http://www.revolucaodigital.net/wp-content/uploads/2013/04/apresentacao_galaxy-s4_03-610x406.jpg",
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
  ];
  return {
    annonces: annonces
  }
}, ProfilePage);
