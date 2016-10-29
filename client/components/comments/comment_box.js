import React , { Component } from 'react';

class CommentBox extends Component {
  render(){
    const style =  { 
      margin:"0px 0px 5px 0",
      display:"block",
      background:"rgb(39,180,189)",
      color:"white"
    };

    return(
      <div className="container">
        <textarea cols="40"></textarea>
        <button  className="btn btn-default " style={style}>Commenter</button>
      </div>
    )
  }
}

export default CommentBox;
