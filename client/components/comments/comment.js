import React , { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
  componentWillMount(){

  }

  render(){
    const { image, username, createdAt, content } = this.props.comment;
     moment.locale('fr');
     
    return(

        <li className="list-group-item">
          <div className="media">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src={image} width="49" height="50" alt="" />
              </a>
            </div>
            <div className="media-body">
              <h5 className="media-heading"><a style={{ color:"rgb(39,180,189)" }} href="#">{ username }</a> <span className="glyphicon glyphicon-upload" aria-hidden="true"></span></h5>
             {`${moment(createdAt).toNow()}`} <span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
              <p className="comment_text">
                {content}
              </p>
            </div>
          </div>
        </li>
    )
  }
}

export default Comment;
