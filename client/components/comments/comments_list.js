import React, { Component } from 'react';
import Comment from './comment';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import  FontAwesome from  'react-fontawesome';

class CommentsList extends Component {
  render(){
    const style = {
      height: "400px",
      overflowX: "hidden",
      overflow: "auto"
    }

    const Comments = this.props.loading ?
    (

          <FontAwesome name="spinner" size='3x' spin pulse style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>

    ):this.props.comments.map(comment => {
      return <Comment key={ comment._id } comment={comment} />
    });

    return(
      <div className="list-group comment_container_base" style={style}>
          { Comments }
      </div>
    )
  }
}

export default CommentsList;
