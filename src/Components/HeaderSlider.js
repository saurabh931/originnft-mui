import React, { Component } from "react";
import Slider from "react-slick";
import "./headerslider.css";
import Image1 from "../Images/mainslider1.png";
import Image2 from "../Images/mainslider2.png";
import Image3 from "../Images/mainslider3.png";
import Image4 from "../Images/mainslider4.png";
import Image5 from "../Images/mainslider1.png";
import Image6 from "../Images/mainslider2.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
     
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
     
        <Slider {...settings}>
          <div>
          <img src={Image1} alt="" className="slider1" />
          </div>
          <div>
          <img src={Image2} alt="" className="slider1" />
          </div>
          <div>
          <img src={Image3} alt="" className="slider1" />
          </div>
          <div>
          <img src={Image4} alt="" className="slider1" />
          </div>
          <div>
          <img src={Image5} alt="" className="slider1" />
          </div>
          <div>
          <img src={Image6} alt="" className="slider1" />
          </div>
        </Slider>
      </div>
    );
  }
}