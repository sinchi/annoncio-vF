import React, { Component } from 'react';

class EditProfile extends Component {
  render(){
    return(
      <div>
        Edit Profil { this.props.params.userId }
      </div>
    )
  }
}

export default EditProfile;
