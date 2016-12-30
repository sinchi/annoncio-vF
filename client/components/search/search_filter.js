import React, { Component } from 'react';
import CitiesCombo from '../combosData/cities_combo';
import CategoriesCombo from '../combosData/categories_combo';
import PriceFilter from './filters_components/price_filter';
import TypeOffreFilter from './filters_components/type_offre_filter';
import FontAwesome from 'react-fontawesome';

class SearchFilter extends Component {

  constructor(props){
    super(props);
    this.state = { category:'', city:'' }
  }

  onCategoriesChange(val){
    this.setState({ category: val });
  }

  onCityChange(val){
    this.setState({ city: val });
  }

  render(){

    const radiosImmobilier = ["Tout", "Offre", "Demande", "Offre de location", "Demande de location"];
    const radiosAll = ["Tout", "Offre", "Demande"];

    return(

          <form>
            <div className="form-group city">
              <CitiesCombo onCityChange={ this.onCityChange.bind(this) } val={ this.state.city }/>
            </div>
            <div className="form-group category">
              <CategoriesCombo onCategoriesChange={ this.onCategoriesChange.bind(this) } val={ this.state.category }/>
            </div>
            {
              (this.state.category.value && this.state.category.parent !== "EMPLOI ET SERVICES" && this.state.category.value !== "EMPLOI ET SERVICES") && (
                <div className="form-group">
                  <TypeOffreFilter radios={(this.state.category.value === "IMMOBILIER" || this.state.category.parent==="IMMOBILIER") ? radiosImmobilier : radiosAll}/>
                  <PriceFilter min={500} max={100000} step={100}  category={ this.state.category } />
                </div>
              )
            }
            <div className=" form-group">
              <input type="text" className="form-control" placeholder="Rechercher" />
            </div>
            <div className="form-group">
              <button style={{ background:"rgb(39,180,189)", color:"white" }} className="btn form-control" type="button">Rechercher <span style={{ color:"rgb(242,106,110)" }} className="glyphicon glyphicon-search pull-right"></span></button>
            </div>
          </form>

    )
  }
}

export default SearchFilter;
