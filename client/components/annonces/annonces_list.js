import React, { Component } from 'react';
import Annonce from './annonce';

class AnnoncesList extends Component {
  render(){

    const Annonces = this.props.annonces.map((annonce => {
      return <Annonce key={ annonce._id } annonce = { annonce } onInscriptionClick={ this.props.onInscriptionClick }/>
    }));

    return(
      <div>
          { Annonces }
      </div>
    )
  }
}


export default AnnoncesList;
