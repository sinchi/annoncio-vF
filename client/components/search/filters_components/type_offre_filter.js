import React, { Component } from 'react';

class TypeOffreFilter extends Component {

  render(){

    const { onOffreChange, offre } = this.props;

    const radios = this.props.radios.map(radio => {
      return (
        <div className="radio" key={radio}>
          <label>
            <input type="radio" name="type_offre" ref={radio}  value={radio} />
            <strong>{radio}</strong>
          </label>
        </div>
      )
    });

    return(
      <div onChange={ onOffreChange } value={offre} style={{ margin: "15px 0 0 0" }}>
        <span className="glyphicon glyphicon-pushpin"></span>  <label className="form-label" htmlFor='offre'>Type d''offre</label>
          { radios }
      </div>
    )
  }
}

export default TypeOffreFilter;
