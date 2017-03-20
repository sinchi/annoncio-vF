import React, { Component } from 'react';

class MessageBox extends Component{

	handleForm(event){
		event.preventDefault();
		const messageBody = this.refs.message.value;		
		this.props.handleClose("showPopupForChatMessage");
		this.props.openChatBox(messageBody);
	}

	handleAnnuler(){
		this.props.handleClose("showPopupForChatMessage");	
	}

	render(){
		return 	<div>
					<form className="login_form" onSubmit={ this.handleForm.bind(this) }>
		              <fieldset>
		                <div className="form-group">
		                  <textarea autoFocus cols="50" rows="5" ref="message"></textarea>
		                </div>		                
		                <button type="submit" className="btn btn-primary btn-block ">Envoyer</button>
						<button onClick={this.handleAnnuler.bind(this)} type="button" className="btn btn-primary btn-block ">Annuler</button>		                		                
		              </fieldset>
		            </form>
				</div>
	}
}

export default MessageBox;