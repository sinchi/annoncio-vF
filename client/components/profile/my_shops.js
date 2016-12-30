import React, { Component } from 'react';

class MyShops extends Component {
  render(){
    return(
      <div>
        Mes boutiques { this.props.params.userId }
      </div>
    )
  }
}


export default MyShops;
