import React, { Component } from 'react';
import Annonce from './annonce';

class AnnoncesList extends Component {
  render(){

    const style ={
      margin : "20px"
    }

    const Annonces = this.props.annonces.map((annonce => {
      return (
        <div key={ annonce._id }>
          <Annonce  annonce = { annonce }/>;
          <li role="separator" className="divider"></li>
        </div>
      )
    }));

    return(
      <ul className="list-group" style={style}>
          { Annonces }
      </ul>
    )
  }
}


export default AnnoncesList;
