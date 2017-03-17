import React , { Component } from 'react';

class ChatBox extends Component{

  constructor(props){
    super(props);
    this.state = { style: {}, open: true };
  }

  componentDidMount(){
    const height = this.state.open ? "300px" : "40px";
    const style = {
      "position":"fixed",
     "bottom":"0",
     "width":"100%",
     "height": height
   };
   this.setState({ style: style, open: !this.state.open });
  }





  openChatBox(){
    const height = this.state.open ? "300px" : "40px";
    const style = {
      "position":"fixed",
     "bottom":"0",
     "width":"100%",
     "height": height
   };
   this.setState({ style: style, open: !this.state.open });
  }


  render(){

    return (
      <div ref="chatBox" className="container" style={this.state.style}>
        <div className="col-md-offset-10">
          <div className="panel panel-primary">
            <div className="panel-heading" onClick={ this.openChatBox.bind(this) }>
              <h3 className="panel-title">Ayoub Sinchi </h3>
            </div>
            <div className="panel-body" style={{ "height": "200px" }}>
              <p>Bonjour Bonjour Bonjour BonjourBonjour Bonjour Bonjour BonjourBonjour Bonjour Bonjour Bonjour</p>
            </div>
            <div className="panel-footer"><textarea></textarea></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBox;
