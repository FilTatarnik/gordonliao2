import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles.css';

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true
    };
    return (
      <div className="sliderWhiteDiv">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="indvSlider">
            <h3>1</h3>
          </div>
          <div className="indvSlider">
            <h3>2</h3>
          </div>
          <div className="indvSlider">
            <h3>3</h3>
          </div>
          <div className="indvSlider">
            <h3>4</h3>
          </div>
          <div className="indvSlider">
            <h3>5</h3>
          </div>
          <div className="indvSlider">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;