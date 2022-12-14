import React, { Component } from "react";
import Slider from "react-slick";
import "./headerslider.css";
import Image1 from "../Images/notableimag1.png";
import Image2 from "../Images/notableimag2.png";
import Image3 from "../Images/notableimag3.png";

import Smallimg2 from "../Images/smallimage2.png";
import Smallimg1 from "../Images/tabimage4.png";

import Card from "react-bootstrap/Card";
import Hotimg1 from "../Images/hotimage1.png";
import Hotsmallimg1 from "../Images/hotshort1.png";
import Hotimg2 from "../Images/hotimage2.png";
import Hotsmallimg2 from "../Images/tabimage1.png";
import Hotimg3 from "../Images/hotimage3.png";
import Hotsmallimg3 from "../Images/tabimage2.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,

      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Card>
              <Card.Img variant="top" src={Hotimg1} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Hotsmallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons"></span>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={Hotimg2} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Hotsmallimg2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons"></span>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={Hotimg3} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Hotsmallimg3}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons"></span>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={Hotimg1} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Hotsmallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons"></span>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={Hotimg2} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Hotsmallimg2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons"></span>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
