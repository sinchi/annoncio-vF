import React from 'react';
import SearchBar from './search_bar';

const SideMenu = () => {
  return(
      <div>
        <SearchBar />
      {/*  <fieldset className="side_menu">
          <legend>Catégorie:</legend>
            <div><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> <a href="#">Informatique et multimedia</a></div>
            <div><span className="glyphicon glyphicon-heart" aria-hidden="true"></span> <a href="#">Vehicules</a></div>
            <div><span className="glyphicon glyphicon-search" aria-hidden="true"></span> <a href="#">Immobilier</a></div>
            <div><span className="glyphicon glyphicon-search" aria-hidden="true"></span> <a href="#">Pour la maison et jardin</a></div>
            <div><span className="glyphicon glyphicon-search" aria-hidden="true"></span> <a href="#">Loisirs et divertissements</a></div>
            <div><span className="glyphicon glyphicon-search" aria-hidden="true"></span> <a href="#">Emploi et services</a></div>
            <hr/>
            <button className="btn btn-default">Publier Une annonce</button>
        </fieldset> */}
      </div>

  )
}

export default SideMenu;
