import React, { Component } from 'react';
import CommentsList from './comments_list';
import CommentBox from './comment_box';
import { createContainer } from 'react-meteor-data';
import { Comments } from '../../../imports/collections/comments';

class CommentsMain extends Component{
  render(){

    const style = {
      background:"white",
      position: "absolute",
      left: "510px",
      top: "0px",
      width: "70%"
    }

  const commentBox = (Meteor.userId()) ? (  <CommentBox
                                            addComment={this.props.addComment}
                                            annonceId= { this.props.annonce._id }
                                            onInscriptionClick={ this.props.onInscriptionClick }
                                            />
                                        ) : '';

    return(
        <div>
          <h3 style={{ margin: "10px" , color:"blue", fontWeight: "bold"}}>{this.props.annonce.price} DH</h3>
          <CommentsList
            loading={this.props.loading}
            comments={ this.props.comments }
          />
          { commentBox }
        </div>
    )

  }
}

export default createContainer((props) => {
  const { annonce } = props;
  const {_id} = annonce;
  const subscription = Meteor.subscribe('comments', _id);
  return {
    comments: Comments.find({annonceId: _id}, { sort: { createdAt: -1 } }).fetch(),
    annonce: annonce,
    loading: !subscription.ready()
  }
}, CommentsMain);
