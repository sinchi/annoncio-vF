import React, { Component } from 'react';


class AnnoncesCarousel extends Component {

  render(){
    const { title, images, _id  } = this.props.annonce;
    const { items, description } = images;
    const idCarousel = `#carousel-${_id}`;
    const style = {
      width: "544px",
      height: "307px"
    };

    const Items = items.length > 0 ? items.map(item => {
      const { img, alt, caption, active } = item;
      const className = `item ${active}`;
      return (
        <div key={alt} className={className}>
          <img src={img} alt={alt} style={style}/>
          <div className="carousel-caption">
            {caption}
          </div>
        </div>
      )
    }) : '';

    var i = -1;
    const Indicators = items.map(item => {
      const { img, alt, caption, active } = item;
      i++;
      return(
        <li key={alt} data-target={idCarousel} data-slide-to={i} className={active}></li>
      )

    });

    return(
      <div>
        <h4>{ title }</h4>
        <div id={`carousel-${_id}`} className="carousel slide" data-ride="carousel">

          {
            items.length > 1 ? (
              <ol className="carousel-indicators">
                { Indicators }
              </ol>
            ): ''
          }

          <div className="carousel-inner" role="listbox">
            { Items }
            <p>{ description }</p>
          </div>

          {
            items.length > 1 ? (
              <a className="left carousel-control" href={idCarousel} role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Précédent</span>
              </a>) : ''
          }
              {
                items.length > 1 ? (  <a className="right carousel-control" href={idCarousel} role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Suivant</span>
              </a>
            ) : ''
          }
        </div>
      </div>
    )
  }
}

export default AnnoncesCarousel;
