import React , { Component } from 'react';

class ChatBox extends Component{

  constructor(props){
    super(props);
    this.state = { open: true };
  }

  componentDidMount(){
    this.showChatBox();
  }

  showChatBox(){
    const height = this.state.open ? "300px" : "40px";
    this.setState({ height: height, open: !this.state.open });
  }

  render(){

    const style = {
      "position":"fixed",
      "bottom":"0",
      "height": this.state.height,
      "right": this.props.right
    };
    return (
      <div ref="chatBox" className="col-md-12" style={style}>
        <div className={"col-md-offset-10"}>
          <div className="panel panel-default" >
            <div className="panel-heading" onClick={ this.showChatBox.bind(this) }>
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
