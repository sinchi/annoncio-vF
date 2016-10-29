import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import moment from 'moment';

class AnnoncesHeader extends Component{

  constructor(props){
    super(props);
    this.state = { ups: 5, downs: 5 };
  }


  /*onStarClick(nextValue, prevValue, name){
    if(nextValue > prevValue){
      var diff = nextValue - prevValue;
      console.log("diff", diff);
      this.setState({ ups: (this.state.ups + diff) });
    }else if(nextValue < prevValue){
      var diff = prevValue - nextValue ;
      console.log("diff", diff);
      this.setState({ downs: (this.state.downs + diff) });
    }
     console.log("nextValue:" + nextValue + ", prevValue: " + prevValue+ " , name" + name);
     console.log("ups", this.state.ups);
     console.log("downs", this.state.downs);
  }*/

  render(){
    const { image, createdAt, username, _id  } = this.props.annonce;
    const upsPercent = `${100 * (this.state.ups / (this.state.ups + this.state.downs))}%`;
    const downsPercent = `${100 * (this.state.downs / (this.state.ups + this.state.downs))}%`;
    console.log("ups", this.state.ups);
    console.log("downs", this.state.downs);
    return(
      <div>
        <div className="media col-xs-6">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={image} width="49" height="50" alt="" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading"><a href="#">{username}</a> <span className="glyphicon glyphicon-upload" aria-hidden="true"></span></h4>
            {`${moment(createdAt).fromNow()}`} <span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-offset-9"><button className="btn btn-success btn-suivre">Suivre</button></div>
          <div className="progress">
            <div style={ {width: upsPercent} } className="progress-bar progress-bar-success progress-bar-striped"/>
            <div style={ {width: downsPercent} } className="progress-bar progress-bar-danger progress-bar-striped" />
          </div>

            <button type="button" className="btn btn-success" onClick={ () => this.setState({ ups: this.state.ups + 1 }) }><span className="glyphicon glyphicon-thumbs-up"></span></button>
            <button type="button" className="btn btn-danger pull-right" onClick={ () => this.setState({ downs: this.state.downs + 1 }) }><span className="glyphicon glyphicon-thumbs-down"></span></button>

          {/*<StarRatingComponent
                    name={_id}
                    editing={true}
                    renderStarIcon={() => <span className="glyphicon glyphicon-star"></span>}
                    starCount={10}
                    value={5}
                    onStarClick={this.onStarClick.bind(this)}
                    className="rate2"
                />*/}
        </div>
      </div>
    )
  }
}

export default AnnoncesHeader;
