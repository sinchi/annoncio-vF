import React, { Component } from 'react';

import AnnoncesHeader from './annonces_header';
import AnnoncesCarousel from './annonces_carousel';
import AnnoncesFooter from './annonces_footer';
import CommentsMain from '../comments/comments_main';

class Annonce extends Component {
  render(){
    const { annonce }  = this.props;
    return(
        <div className="row" style={{ marginBottom:"40px", background:"white", padding:"20px 0 20px 0" }}>
          <div className="col-sm-12 col-sm-12 col-md-7">
            <AnnoncesHeader annonce={ annonce } onInscriptionClick={ this.props.onInscriptionClick }/>
            <AnnoncesCarousel annonce={ annonce }/>
            <AnnoncesFooter 
                          annonce={ annonce } 
                          onInscriptionClick={ this.props.onInscriptionClick } 
                          openChatBox={this.props.openChatBox}
                          showPopupForChatMessage={this.props.showPopupForChatMessage} />
          </div>
          <div className="col-sm-12 col-sm-12 col-md-5">
            <CommentsMain
              annonce={ annonce }
              onInscriptionClick={ this.props.onInscriptionClick }
              addComment={this.props.addComment}
              />
          </div>
        </div>

    )
  }
}


export default Annonce;
