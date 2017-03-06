import React , { Component } from 'react';

class CommentBox extends Component {

  onCommentClick(event){
    event.preventDefault();
    console.log("Comment");
    console.log(Meteor.userId());
  }

  render(){
    const style =  {
      background:"rgb(39,180,189)",
      color:"white"
    };

    return(
      <form onSubmit={  (!Meteor.userId()) ? this.props.onInscriptionClick : this.onCommentClick.bind(this)   }>
        <div className="form-group">
          <textarea className="form-control"></textarea>
        </div>
        <button style={style} className="btn btn-default " onClick={  (!Meteor.userId()) ? this.props.onInscriptionClick : this.onCommentClick.bind(this)   }>Commenter</button>
      </form>
    )
  }
}

export default CommentBox;
