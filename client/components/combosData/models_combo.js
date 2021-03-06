import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Brands } from '../../../imports/collections/brands';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';

class ModelsCombo extends Component {

  constructor(props){
    super(props);
    this.state = { model:'', clearable: false };
  }

  componentWillReceiveProps(props){
    const { model } = props;
    if(model && model.value){
      this.setState({ model: model });
    }
  }

  onModelsChange(val){
    if(val && val.value){
      this.setState({ model: val.value, clearable: true });
      console.log("model", val);

    }else{
      this.setState({ brand: '', clearable: false });
    }
  }

  render(){

    const { models } = this.props;
    const Options = models.map(model => {
      const { name, _id } = model;
      return { label: name, value: name }
    });

    return(
      <div className="form-group">
        <FontAwesome name="trademark" /><label className="label-control">Model</label>
        <Select
            value={this.state.model}
            options={Options}
            onChange={ this.props.onModelsChange }
            clearable={this.state.clearable}
            placeholder={"Choisir le model"}
            noResultsText={ "Aucun model" } />
      </div>
    )
  }
}

export default createContainer((props) => {
  Meteor.subscribe('brands');
  const { parent } = props;
  const models = Brands.find({parent: parent}, {sort: {name: 1}}).fetch();
  return { models: models }
}, ModelsCombo);
