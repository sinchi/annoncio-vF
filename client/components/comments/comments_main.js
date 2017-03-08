import React, { Component } from 'react';
import CommentsList from './comments_list';
import CommentBox from './comment_box';
import { createContainer } from 'react-meteor-data';

class CommentsMain extends Component{
  render(){

    const style = {
      background:"white",
      position: "absolute",
      left: "510px",
      top: "0px",
      width: "70%"
    }

  const commentBox = (Meteor.userId()) ? <CommentBox onInscriptionClick={ this.props.onInscriptionClick } /> : '';

    return(
        <div>
          <h3 style={{ margin: "10px" , color:"blue", fontWeight: "bold"}}>{this.props.annonce.price} DH</h3>     
          <CommentsList comments={ this.props.comments } />
          { commentBox }
        </div>
    )

  }
}

export default createContainer((props) => {

  const comments = props.annonce.comments;
  return {
    comments: comments
  }
}, CommentsMain);
