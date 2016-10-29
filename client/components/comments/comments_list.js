import React, { Component } from 'react';
import Comment from './comment';

class CommentsList extends Component {
  render(){
    const style = {
      height: "400px",
      overflowX: "hidden",
      overflow: "auto"
    }

    const Comments = this.props.comments.map(comment => {
      return <Comment key={ comment._id } comment={comment}/>
    });

    return(
      <ul className="list-group" style={style}>
          { Comments }
      </ul>
    )
  }
}

export default CommentsList;
