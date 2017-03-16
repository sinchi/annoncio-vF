import React, { Component } from 'react';
import CitiesCombo from '../combosData/cities_combo';
import CategoriesCombo from '../combosData/categories_combo';
import PriceFilter from './filters_components/price_filter';
import TypeOffreFilter from './filters_components/type_offre_filter';
import FontAwesome from 'react-fontawesome';

class SearchFilter extends Component {

  constructor(props){
    super(props);
  }

  render(){

    const radiosImmobilier = ["Tout", "Offre", "Demande", "Offre de location", "Demande de location"];
    const radiosAll = ["Tout", "Offre", "Demande"];
    const {
      city,
      brand,
      model,
      offre,
      onOffreChange,
      onModelsChange,
      onBrandsChange,
      onCityChange,
      onCategoriesChange,
      category
    } = this.props;

    return(

          <form>
            <div className="form-group city">
              <CitiesCombo onCityChange={ onCityChange } val={ city }/>
            </div>
            <div className="form-group category">
              <CategoriesCombo
                onCategoriesChange={ onCategoriesChange }
                val={ category }
                brand={brand}
                onBrandsChange={onBrandsChange}
                model={model}
                onModelsChange={onModelsChange}
                />
            </div>
            {
              (category && category.parent !== "EMPLOI ET SERVICES" && category.value !== "EMPLOI ET SERVICES") && (
                <div className="form-group">
                  <TypeOffreFilter offre={offre} onOffreChange={onOffreChange} radios={(category.value === "IMMOBILIER" || category.parent==="IMMOBILIER") ? radiosImmobilier : radiosAll}/>
                  <PriceFilter min={500} max={100000} step={100}  category={category } />
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
