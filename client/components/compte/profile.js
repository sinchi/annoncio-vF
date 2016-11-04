import React, { Component } from 'react';

class Profile extends Component {
  render(){
    return(
      <div className="row" style={{ marginTop:"90px" }}>
        Profile { this.props.params.userId }
      </div>
    )
  }
}

export default Profile;
