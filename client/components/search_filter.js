import React, { Component } from 'react';
import CitiesCombo from './combosData/cities_combo';

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
              <select className="form-control" id="category">
                <option value="">Choisir la catégorie</option>
              </select>
            </div>
            <div className=" form-group">
              <input type="text" className="form-control" placeholder="Rechercher" />
            </div>
            <div className="form-group">
              <button className="btn btn-success form-control" type="button">Rechercher <span style={{ color:"rgb(242,106,110)" }} className="glyphicon glyphicon-search"></span></button>
            </div>
          </form>
      </fieldset>
    )
  }
}

export default SearchFilter;
