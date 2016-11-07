import React, { Component } from 'react';

class MySearch extends Component {
  render(){
    return(
      <div>
        Mes Recherches { this.props.params.userId }
      </div>
    )
  }
}


export default MySearch;
