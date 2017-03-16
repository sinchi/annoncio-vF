import React , { Component } from 'react';

class CommentBox extends Component {

  onCommentClick(event){
    event.preventDefault();
    const content = this.refs.content.value;
    if(content.trim() !== ""){
      const comment = {
        image: "http://arswiki.info/twiki/pub/Main/UserProfileHeader/default-user-profile.jpg",
        username: Meteor.user().emails[0].address.split('@')[0],
        createdAt: new Date(),
        content: content,
        owner: Meteor.userId(),
        annonceId: this.props.annonceId
      };
      this.props.addComment(comment);
      this.refs.content.value = "";
    }
  }

  render(){
    const style =  {
      background:"rgb(39,180,189)",
      color:"white"
    };

    return(
      <form onSubmit={  (!Meteor.userId()) ? this.props.onInscriptionClick : this.onCommentClick.bind(this)   }>
        <div className="form-group">
          <textarea ref="content" className="form-control"></textarea>
        </div>
        <button style={style} className="btn btn-default " onClick={  (!Meteor.userId()) ? this.props.onInscriptionClick : this.onCommentClick.bind(this)   }>Commenter</button>
      </form>
    )
  }
}

export default CommentBox;
