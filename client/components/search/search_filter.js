import React, { Component } from 'react';
import CitiesCombo from '../combosData/cities_combo';
import CategoriesCombo from '../combosData/categories_combo';
import FontAwesome from 'react-fontawesome';

class SearchFilter extends Component {

  constructor(props){
    super(props);
    this.state = { icon:'th', category:'', clearable: false , categoryObject: {}, priceMin:0, priceMax:10000, step: 100 };
  }

  onCategoriesChange(val){
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
      console.log("category", val);
    }else{
      this.setState({ category: '', clearable: false, categoryObject: {} });
    }
  }

  render(){

    return(

          <form>
            <div className="form-group city">
              <span className="glyphicon glyphicon-globe"></span><label className="label-control" htmlFor="city">Ville:</label>
              <CitiesCombo params={{className:"form-control", id:"city", title:"Choisir la ville"}}/>
            </div>
            <div className="form-group category">
              <FontAwesome name={this.state.icon} /> <label htmlFor="category" className="label-control">Categorie:</label>
              <CategoriesCombo
                category={this.state.category}
                clearable={this.state.clearable}
                categoryObject={this.state.categoryObject}
                onCategoriesChange={this.onCategoriesChange.bind(this)}
                priceMin={ this.state.priceMin }
                priceMax={ this.state.priceMax }
                step= { this.state.step }
                params={{className:"form-control", id:"category", title:"Choisir la categorie"}}/>
            </div>
            <div className=" form-group">
              <input type="text" className="form-control" placeholder="Rechercher" />
            </div>
            <div className="form-group">
              <button style={{ background:"rgb(39,180,189)", color:"white" }} className="btn form-control" type="button">Rechercher <span style={{ color:"rgb(242,106,110)" }} className="glyphicon glyphicon-search pull-right"></span></button>
            </div>
          </form>
      
    )
  }
}

export default SearchFilter;
