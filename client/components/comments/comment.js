import React , { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
  componentWillMount(){

  }

  render(){
    const { image, username, createdAt, content } = this.props.comment;
     moment.locale('fr');

    return(

        <div className="list-group-item">
          <div className="media">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src={image} width="49" height="50" alt="" />
              </a>
            </div>
            <div className="media-body">
              <h5 className="media-heading"><a href="#">{ username }</a> <span style={{ color:"rgb(39,180,189)" }} className="glyphicon glyphicon-flash" aria-hidden="true"></span></h5>
             {`${moment(createdAt).toNow(true)}`} <span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
              <p className="comment_text">
                <strong>{content}</strong>
              </p>
            </div>
          </div>
        </div>
    )
  }
}

export default Comment;
