import React, { Component } from 'react';

class MyAnnoncesList extends Component {
  render(){
    return(
      <div>
        Mes annonces List {this.props.params.userId}
      </div>
    )
  }
}

export default MyAnnoncesList;
