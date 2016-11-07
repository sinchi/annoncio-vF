import React, { Component } from 'react';

class MyMessages extends Component {
  render(){
    return(
      <div>
        Mes Messages { this.props.params.userId }
      </div>
    )
  }
}


export default MyMessages;
