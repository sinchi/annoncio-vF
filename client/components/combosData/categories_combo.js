import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Categories } from '../../../imports/collections/categories';
import 'react-select/dist/react-select.css';
import Select from 'react-select';

import BrandsCombo from './brands_combo';
import FontAwesome from 'react-fontawesome';

class CategoriesCombo extends Component {

  constructor(props){
    super(props);
    this.state = { icon:'th', category:'', clearable: false , categoryObject: {} };
  }

  componentWillReceiveProps(props){
    const { val } = props;
    if(val && val.value){
      this.setState({ category: val.value, clearable: true, categoryObject: val });
      switch (val.value) {
          case "Image Et Son":
            this.setState({ icon: "image"  })
          break;
          case "Télévisions":
            this.setState({ icon: "television" })
          break;
          case "Appareils photo et Caméras":
            this.setState({ icon: "camera-retro" });
          break;
          case "Jeux vidéo et Consoles":
            this.setState({ icon: "gamepad" });
          break;
          case "Téléphones":
            this.setState({ icon:"mobile" });
          break;
          case "Tablettes":
            this.setState({ icon: "tablet" })
          break;
          case "Ordinateurs de bureau":
            this.setState({ icon: "desktop" });
          break;
          case "Ordinateurs portables":
            this.setState({ icon: "laptop" });
          break;
          case "VEHICULES":
             this.setState({icon:"road"});
            break;
          case "Voitures":
              this.setState({ icon:"car" });
            break;
        case "Vélos":
           this.setState({icon:"bicycle"});
          break;
       case "Motos":
           this.setState({icon:"motorcycle"});
        break;
      case "Bateaux":
         this.setState({icon:"ship"});
        break;

      case "Véhicules Professionnels":
           this.setState({icon:"truck"});
          break;
      default:
        this.setState({ icon: "th" });
        break;
      }
    //  console.log("category", val);
    }else{
      this.setState({ category: '', clearable: false, categoryObject: {} });
    }
  }


  render(){

    const Options = this.props.categories.map(category => {
      const { name, _id, parent } = category;
      return { label: name, value: name, parent:parent }
    });


    return(
      <div className="form-group">
            <FontAwesome name={this.state.icon} /> <label htmlFor="category" className="label-control">Categorie:</label>
            <Select
                name="category"
                value={this.state.category}
                options={Options}
                onChange={ this.props.onCategoriesChange }
                clearable={this.state.clearable}
                placeholder={"Choisir la catégorie"}
                noResultsText={ "Aucune catégorie" } />
                {
                  (this.state.category && this.state.category === "Voitures") && (
                    <div style={{ margin:"10px 0" }}>
                      <BrandsCombo
                        brand={this.props.brand}
                         onBrandsChange={this.props.onBrandsChange}
                         model={this.props.model}
                         onModelsChange={this.props.onModelsChange}
                         />
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
