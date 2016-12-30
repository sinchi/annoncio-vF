import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'rc-slider/assets/index.css';
import Rcslider from 'rc-slider';
class PriceFilter extends Component {

  constructor(props){
    super(props);
    this.state = { priceMin:this.props.min, priceMax: this.props.max, value:[this.props.min, this.props.max] };
    this.min = this.props.min;
    this.max = this.props.max;
  }

  onSliderChange(value){
    this.setState({ value: value })
    this.refs.priceMin.value = value[0];
    this.refs.priceMax.value = value[1];
    this.setState({ priceMin: value[0], priceMax: value[1] });
  }

  onPriceMinInputChange(){
    const priceMin = this.refs.priceMin.value;
    if(priceMin && priceMin > this.state.priceMax)
      this.refs.priceMin.value = this.state.priceMax;

    if(priceMin && priceMin >= 0 && priceMin <= this.state.priceMax){
      this.setState({ value: [parseInt(priceMin), this.state.priceMax] });
      this.setState({ priceMin: parseInt(priceMin) });
    }
  }

  onPriceMaxInputChange(){
    const priceMax = this.refs.priceMax.value;

    if(priceMax && priceMax >= this.state.priceMin && priceMax <= 10000){
      this.setState({ value: [this.state.priceMin, parseInt(priceMax)] });
      this.setState({ priceMax: parseInt(priceMax) });
    }
  }

  render(){

    const { value, parent } = this.props.category;
    console.log("parent", parent);


    return (

              <div className="form-group">
                <div className="col-xs-8" style={{ margin: "5px 0 5px 0", padding:0 }}>

                  <FontAwesome name="money" /> <label className="form-label" htmlFor='price'>Prix Min </label>  <FontAwesome name="minus-square" /> :
                  <input className="form-control" placeholder="Min" ref='priceMin' onChange={ this.onPriceMinInputChange.bind(this) } id='priceMin' type="text"  aria-label="Amount (to the nearest dollar)" />
                  <FontAwesome name="money" />  <label className="form-label" htmlFor='price'>Prix Max </label>  <FontAwesome name="plus-square" /> :
                  <input className="form-control" placeholder="Max" ref='priceMax' onChange={ this.onPriceMaxInputChange.bind(this) } id='priceMax' type="text" aria-label="Amount (to the nearest dollar)" />

                  {/*<Rcslider
                      id="slider"
                      ref="slider"
                      range={true}
                      min={this.min}
                      max={this.max}
                      step={this.props.step}
                      allowCross={false}
                      value={ this.state.value }
                      onChange={ this.onSliderChange.bind(this) }
                      className="form-control"
                      />*/}
                </div>
              </div>


    )
  }
}

export default PriceFilter;
