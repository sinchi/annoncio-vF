import React from 'react';
import SearchFilter from './search_filter';

const SideMenu = (props) => {
  const {
    city,
    onCityChange,
    category,
    brand,
    model,
    offre,
    onOffreChange,
    onCategoriesChange,
    onBrandsChange,
    onModelsChange
  } = props;
  return(
      <div>
        <SearchFilter
          city={city}
          onCityChange={onCityChange}
          category={category}
          brand={brand}
          model={model}
          onCategoriesChange={onCategoriesChange}
          onModelsChange={onModelsChange}
          onBrandsChange={onBrandsChange}
          offre={props.offre}
          onOffreChange={props.onOffreChange}
          />
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
