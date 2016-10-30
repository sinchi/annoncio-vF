import React , { Component } from 'react';

class CommentBox extends Component {

  onCommentClick(event){
    console.log("Comment");
  }

  render(){
    const style =  {
      background:"rgb(39,180,189)",
      color:"white"
    };



    return(
      <form>
        <div className="form-group">
          <textarea className="form-control"></textarea>
        </div>
        <button style={style} className="btn btn-default " onClick={  (!Meteor.userId) ? this.props.onInscriptionClick : this.onCommentClick.bind(this)   }>Commenter</button>
      </form>
    )
  }
}

export default CommentBox;
