import React, { Component } from 'react';

class TypeOffreFilter extends Component {
  render(){

    const radios = this.props.radios.map(radio => {
      return (
        <div className="radio" key={radio}>
          <label>
            <input type="radio" name="type_offre" ref="type_offre" id="type_offre" value={radio} />
            <strong>{radio}</strong>
          </label>
        </div>
      )
    });

    return(
      <div style={{ margin: "15px 0 0 0" }}>
        <span className="glyphicon glyphicon-pushpin"></span>  <label className="form-label" htmlFor='offre'>Type d''offre</label>
          { radios }
      </div>
    )
  }
}

export default TypeOffreFilter;
