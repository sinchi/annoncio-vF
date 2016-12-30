import React, { Component } from 'react';

class AnnoncesFooter extends Component{

  onDetailClick(event){
    const { _id } = this.props.annonce;
    const disp = document.querySelector(`#hidden-detail${_id}`).style.display;
    if(disp == "block" )
      document.querySelector(`#hidden-detail${_id}`).style.display = "none";
    else
      document.querySelector(`#hidden-detail${_id}`).style.display = "block";
  }

  onMessageClick(event){
    console.log("Message Click");
  }

  onCallClick(event){
    console.log("Appler click");
  }

  render(){
    const { _id } = this.props.annonce;
    const hiddenDetailId = `hidden-detail${_id}`;
    return(
      <div>
        <div id={hiddenDetailId} style={{ display:"none" }}>
          <h3>Caractéristiques: </h3>
          <table className="table">
            <tbody>
              <tr>
                <th>Reseaux:</th>
                <td>Technologie</td>
                <td>GSM / HSPA / LTE</td>
              </tr>
              <tr>
                <th>Sortie:</th>
                <td>Date</td>
                <td>Juin, 2015</td>
              </tr>
              <tr>
                <th>Corp:</th>
                <td>SIM</td>
                <td>MICRO-SIM</td>
              </tr>
              <tr>
                <th>Affichage:</th>
                <td>Type</td>
                <td>Super AMOLED capacitive touchscreen, 16M colors</td>
              </tr>
              <tr>
                <th>Platforme:</th>
                <td>OS</td>
                <td>Android OS, v4.4.4 (KitKat)</td>
              </tr>
              <tr>
                <th>Memoire:</th>
                <td>Interne</td>
                <td>8 GB, 1.5 GB RAM</td>
              </tr>
              <tr>
                <th>Camera:</th>
                <td>Principal</td>
                <td>8 MP, autofocus, LED flash</td>
              </tr>

            </tbody>
          </table>
        </div>
        <div style={{ marginTop:"20px" }}>
          <button className="nav-btn  btn btn-primary" onClick={ (!Meteor.userId()) ? this.props.onInscriptionClick : this.onMessageClick.bind(this) }>Message</button>
          <button className="nav-btn btn btn-success" onClick={ (!Meteor.userId()) ? this.props.onInscriptionClick : this.onCallClick.bind(this) }>Appeler</button>
          <button onClick={this.onDetailClick.bind(this)} className="nav-btn btn btn-default pull-right">Detail</button>
        </div>
      </div>
    )
  }
}

export default AnnoncesFooter;
