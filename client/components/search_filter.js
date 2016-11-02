import React, { Component } from 'react';
import CitiesCombo from './combosData/cities_combo';
import CategoriesCombo from './combosData/categories_combo';

class SearchFilter extends Component {
  render(){
    return(
      <fieldset className="search_bar">
          <form>
            <div className="form-group city">
              <span className="glyphicon glyphicon-globe"></span><label className="label-control" htmlFor="city">Ville:</label>
              <CitiesCombo params={{className:"form-control", id:"city", title:"Choisir la ville"}}/>
            </div>
            <div className="form-group category">
              <span className="glyphicon glyphicon-th-large"></span><label htmlFor="category" className="label-control">Categorie:</label>
              <CategoriesCombo params={{className:"form-control", id:"category", title:"Choisir la categorie"}}/>
            </div>
            <div className=" form-group">
              <input type="text" className="form-control" placeholder="Rechercher" />
            </div>
            <div className="form-group">
              <button style={{ background:"rgb(39,180,189)", color:"white" }} className="btn form-control" type="button">Rechercher <span style={{ color:"rgb(242,106,110)" }} className="glyphicon glyphicon-search pull-right"></span></button>
            </div>
          </form>
      </fieldset>
    )
  }
}

export default SearchFilter;
