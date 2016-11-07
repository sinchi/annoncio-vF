import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Cities } from '../../../imports/collections/cities';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import FontAwesome from 'react-fontawesome';


class CitiesCombo extends Component {

  constructor(props){
    super(props);
    this.state = { city:'', clearable:false };
  }


  componentWillReceiveProps(props){
    const { val } = props;
    if (val && val.value){
      this.setState({ city: val.value, clearable: true });
      console.log("city", val.value);
    }else {
      this.setState({ city:'', clearable: false });
    }
  }

  render(){

    const Options = this.props.cities.map(city => {
      const { name, _id } = city;
      return { label: name, value: name }
    });
    return(
      <div className="form-group">
        <label className="label-control" htmlFor="city"><FontAwesome name="globe" /> Ville:</label>
        <Select
            name={"form-control"}
            value={this.state.city}
            options={Options}
            onChange={ this.props.onCityChange }
            clearable={this.state.clearable}
            placeholder={"Choisir la ville"}
        />
      </div>

    );
  }
}

export default createContainer((props) => {

  Meteor.subscribe('cities');

  return { cities: Cities.find({}).fetch() }

}, CitiesCombo);
