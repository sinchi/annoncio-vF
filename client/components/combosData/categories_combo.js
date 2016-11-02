import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Categories } from '../../../imports/collections/categories';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import PriceFilter from '../filters_components/price_filter';
import TypeOffreFilter from '../filters_components/type_offre_filter';
import BrandsCombo from './brands_combo';

class CategoriesCombo extends Component {

  constructor(props){
    super(props);
    this.state = { category:'', clearable: false , categoryObject: {} };
  }

  onCategoriesChange(val){
    if(val && val.value){
      this.setState({ category: val.value, clearable: true, categoryObject: val });

      console.log("category", val);
    }else{
      this.setState({ category: '', clearable: false, categoryObject: {} });
    }
  }

  render(){
    const { className, id, title } = this.props.params;

    const Options = this.props.categories.map(category => {
      const { name, _id, parent } = category;
      return { label: name, value: name, parent:parent }
    });

    const radiosImmobilier = ["Tout", "Offre", "Demande", "Offre de location", "Demande de location"];
    const radiosAll = ["Tout", "Offre", "Demande"];

    return(
      <div>
            <Select
                name={className}
                value={this.state.category}
                options={Options}
                onChange={ this.onCategoriesChange.bind(this) }
                clearable={this.state.clearable}
                placeholder={"Choisir la catégorie"}
                noResultsText={ "Aucune catégorie" } />
                {
                  (this.state.category  && this.state.categoryObject.parent === "VEHICULES" || this.state.category === "VEHICULES") && (
                    <div style={{ margin:"10px 0" }}>
                      <BrandsCombo />
                    </div>
                  )
                }
                {
                  (this.state.category && this.state.categoryObject.parent !== "EMPLOI ET SERVICES" && this.state.category !== "EMPLOI ET SERVICES") && (
                    <div>
                      <TypeOffreFilter radios={(this.state.category === "IMMOBILIER" || this.state.categoryObject.parent==="IMMOBILIER") ? radiosImmobilier : radiosAll}/>
                      <PriceFilter min={0} max={10000} step={100}  category={ this.state.categoryObject } />
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
