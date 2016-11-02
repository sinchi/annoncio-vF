import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Brands } from '../../../imports/collections/brands';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import _ from 'lodash';

import ModelsCombo from './models_combo';

class BrandsCombo extends Component {

  constructor(props){
    super(props);
    this.state = { brand:'', clearable: false };
  }

  onBrandsChange(val){
    if(val && val.value){
      this.setState({ brand: val.value, clearable: true });

      console.log("brand", val);
    }else{
      this.setState({ brand: '', clearable: false });
    }
  }

  render(){


    const Options = this.props.brands.map(brand => {
      const { name, _id } = brand;
      return { label: name, value: name }
    });

    return(
      <div className="form-group">
        <span className="glyphicon glyphicon-off"></span> <label className="label-control">Marque</label>
        <Select
            name={"ok"}
            value={this.state.brand}
            options={Options}
            onChange={ this.onBrandsChange.bind(this) }
            clearable={this.state.clearable}
            placeholder={"Choisir la marque"}
            noResultsText={ "Aucune marque" } />
            <ModelsCombo parent={ this.state.brand } />
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('brands');
  const brands = Brands.find({parent:{$eq: null}}, {sort: {name: 1}} ).fetch();
  return { brands: brands }
}, BrandsCombo);
