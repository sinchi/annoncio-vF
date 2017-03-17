import React , { Component } from 'react';

class ChatBox extends Component{

  constructor(props){
    super(props);
    this.state = { style: {}, open: false };
  }

  componentDidMount(){
    const height = this.state.open ? "300px" : "40px";
    const style = {
     "position":"fixed",
     "bottom":"0",
     "right": this.props.right,
     "height": height
   };
   this.setState({ style: style, open: !this.state.open });
  }

  openChatBox(){
    const height = this.state.open ? "300px" : "40px";
    const style = {
     "position":"fixed",
     "bottom":"0",
     "right": this.props.right,
     "height": height
   };
   this.setState({ style: style, open: !this.state.open });
  }


  render(){

    return (
      <div ref="chatBox" className="col-md-12" style={this.state.style}>
        <div className={this.props.offset}>
          <div className="panel panel-default" >
            <div className="panel-heading" onClick={ this.openChatBox.bind(this) }>
              <h3 className="panel-title">{this.props.title} </h3>
            </div>
            <div className="panel-body" style={{ "height": "200px" }}>
              <p>Salam </p>
              <p className="text-right">Ahlan cava ?</p>
            </div>
            <div className="panel-footer"><textarea></textarea></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBox;
