import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { ModalDialog, ModalContainer  } from 'react-modal-dialog';
import FontAwesome from 'react-fontawesome';
import CitiesCombo from '../combosData/cities_combo';
import CategoriesCombo from '../combosData/categories_combo';
import TypeOffreFilter from '../search/filters_components/type_offre_filter';
import _ from 'lodash';
import FileInput from './file_input';


class PublishAnnonceForm extends Component {

  render(){
    const radiosImmobilier = ["Offre", "Demande", "Offre de location", "Demande de location"];
    const radiosAll = ["Offre", "Demande"];
    const { 
        isShowingModal, 
        handleClose, 
        imagesUrl, 
        onInputFileChange, 
        onPublishAnnonceSubmit, 
        onCategoriesChange, 
        onCityChange, 
        onOffreChange, 
        category, 
        city, 
        offre
    } = this.props;
    const images = imagesUrl.map((img) => {
      return (
          <div className="col-xs-3" key={ img }>
            <a href="#" className="thumbnail"><img src={img} alt="apercu" className="img-thumbnail"/></a>
          </div>
      )
    });
    const modal = (isShowingModal) ? (
      <ModalContainer>
        <ModalDialog>
          <div className="">
          <div className="panel panel-success">
            <div className="panel-heading"><h1><FontAwesome name="flag" size="2x"/> Publier une annonce ! </h1></div>
            <form>
              <div className="panel-body">

                    <div className="col-xs-6">
                        <CategoriesCombo val={ category } onCategoriesChange={ onCategoriesChange } />
                        {
                          (category && category.parent !== "EMPLOI ET SERVICES" && category.value !== "EMPLOI ET SERVICES") && (
                            <div className="form-group">
                              <TypeOffreFilter offre={offre} onOffreChange={ onOffreChange } radios={(category.value === "IMMOBILIER" || category.parent==="IMMOBILIER") ? radiosImmobilier : radiosAll}/>
                            </div>
                          )
                        }
                        <CitiesCombo val={ city } onCityChange={ onCityChange } />
                    </div>

                    <div className="col-xs-6">
                      <div className="form-group">
                        <label className="label-control">Titre</label>
                        <input ref="title" type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="label-control">Description </label>
                        <textarea ref="description" className="form-control" cols="10" rows="3"></textarea>
                      </div>
                      <div className="form-group">
                        <label className="label-control">Prix </label>
                        <input ref="price" type="number" className="form-control" />
                      </div>

                    </div>
                    <div className="form-group">
                      <label className="label-control">Photos </label>
                      <input onChange={ onInputFileChange } type="file" multiple className="form-control"  />
                      {
                        imagesUrl && (
                          <div className="form-group">
                              { images }
                          </div>
                        )
                      }
                    </div>

                  </div>
                  <div className="panel-footer">
                    <button onClick={ onPublishAnnonceSubmit } className="btn btn-success">Publier votre annonce</button>
                    <button onClick={ handleClose } className="btn btn-default pull-right">Fermer</button>
                  </div>
                </form>
            </div>
            </div>
        </ModalDialog>
      </ModalContainer>
    ) : '';
    return(
      <div>{ modal }</div>
    )
  }
}

export default PublishAnnonceForm;
