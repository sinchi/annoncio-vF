import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Cities } from '../../../imports/collections/cities';
import 'react-select/dist/react-select.css';
import Select from 'react-select';


class CitiesCombo extends Component {

  constructor(props){
    super(props);
    this.state = { city:'', clearable:false };
  }

  onCityChange(val){
    if (val && val.value){
      this.setState({ city: val.value, clearable: true });
      console.log("city", val.value);
    }else {
      this.setState({ city:'', clearable: false });
    }
  }

  render(){
    const { className, id, title } = this.props.params;

    const Options = this.props.cities.map(city => {
      const { name, _id } = city;
      return { label: name, value: name }
    });
    return(
      <Select
          name={className}
          value={this.state.city}
          options={Options}
          onChange={ this.onCityChange.bind(this) }
          clearable={this.state.clearable}
          placeholder={"Choisir la ville"}
      />

    );
  }
}

export default createContainer((props) => {

  Meteor.subscribe('cities');

  return { cities: Cities.find({}).fetch() }

}, CitiesCombo);
