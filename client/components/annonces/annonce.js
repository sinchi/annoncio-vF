import React, { Component } from 'react';

import AnnoncesHeader from './annonces_header';
import AnnoncesCarousel from './annonces_carousel';
import AnnoncesFooter from './annonces_footer';
import CommentsMain from '../comments/comments_main';

class Annonce extends Component {
  render(){
    const { annonce }  = this.props;
    return(
      <li className="list-group-item">
        <AnnoncesHeader annonce={ annonce }/>
        <AnnoncesCarousel annonce={ annonce }/>
        <AnnoncesFooter annonce={ annonce }/>
        <CommentsMain annonce={ annonce }/>
      </li>
    )
  }
}


export default Annonce;
