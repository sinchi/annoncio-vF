import React, { Component } from 'react';
import Comment from './comment';

class CommentsList extends Component {
  render(){
    const style = {
      height: "400px",
      overflowX: "hidden",
      overflow: "auto"
    }

    const Comments = this.props.comments ? this.props.comments.map(comment => {
      return <Comment key={ comment._id } comment={comment} />
    }) : '';

    return(
      <div className="list-group" style={style}>
          { Comments }
      </div>
    )
  }
}

export default CommentsList;
