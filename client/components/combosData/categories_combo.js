import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Categories } from '../../../imports/collections/categories';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import PriceFilter from '../search/filters_components/price_filter';
import TypeOffreFilter from '../search/filters_components/type_offre_filter';
import BrandsCombo from './brands_combo';

class CategoriesCombo extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { className, id, title } = this.props.params;

    const Options = this.props.categories.map(category => {
      const { name, _id, parent } = category;
      return { label: name, value: name, parent:parent }
    });

    const radiosImmobilier = ["Tout", "Offre", "Demande", "Offre de location", "Demande de location"];
    const radiosAll = ["Tout", "Offre", "Demande"];

    const { category, clearable, categoryObject, onCategoriesChange, priceMin, priceMax, step } = this.props;

    return(
      <div>
            <Select
                name={className}
                value={category}
                options={Options}
                onChange={ onCategoriesChange }
                clearable={clearable}
                placeholder={"Choisir la catégorie"}
                noResultsText={ "Aucune catégorie" } />
                {
                  (category && category === "Voitures") && (
                    <div style={{ margin:"10px 0" }}>
                      <BrandsCombo />
                    </div>
                  )
                }
                {
                  (category && categoryObject.parent !== "EMPLOI ET SERVICES" && category !== "EMPLOI ET SERVICES") && (
                    <div>
                      <TypeOffreFilter radios={(category === "IMMOBILIER" || categoryObject.parent==="IMMOBILIER") ? radiosImmobilier : radiosAll}/>
                      <PriceFilter min={priceMin} max={priceMax} step={step}  category={ categoryObject } />
                    </div>
                  )
                }

      </div>

    );
  }
}

export default createContainer((props) => {

  Meteor.subscribe('categories');

  return { categories: Categories.find({}).fetch() }

}, CategoriesCombo);
