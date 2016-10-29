import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Cities } from '../../../imports/collections/cities';
import 'react-select/dist/react-select.css';
import Select from 'react-select';


class CitiesCombo extends Component {

  constructor(props){
    super(props);
    this.state = { city:'Aricberg' };
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
          onChange={(val) => this.setState({ city: val.value })}
          clearableValue={true}
      />

    );
  }
}

export default createContainer((props) => {

  Meteor.subscribe('cities');

  return { cities: Cities.find({}).fetch() }

}, CitiesCombo);
