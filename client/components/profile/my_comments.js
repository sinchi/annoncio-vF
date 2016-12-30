import React, { Component } from 'react';

class MyComments extends Component {
  render(){
    return(
      <div>
        Mes Commentaires { this.props.params.userId }
      </div>
    )
  }
}


export default MyComments;
