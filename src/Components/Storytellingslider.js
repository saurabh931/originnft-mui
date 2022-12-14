import React, { Component } from "react";
import Slider from "react-slick";
import "./headerslider.css";
import Image1 from "../Images/notableimag1.png";
import Image2 from "../Images/notableimag2.png";
import Image3 from "../Images/notableimag3.png";

import Smallimg2 from "../Images/smallimage2.png";
import Smallimg1 from "../Images/tabimage4.png";

import Card from "react-bootstrap/Card";
import Smallimg3 from "../Images/tabimage1.png";
import Storyimage1 from "../Images/storytellingimg1.png";
import Storysmallimg1 from "../Images/tabimage3.png";
import Storyimage2 from "../Images/storyimage2.png";
import Storysmallimg2 from "../Images/tabimage2.png";
import Storyimage3 from "../Images/storyimage3.png";
import Storysmallimage3 from "../Images/tabimage6.png";

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
              <Card.Img variant="top" src={Storyimage1} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Storysmallimg1}
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
              <Card.Img variant="top" src={Storyimage2} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Storysmallimg1}
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
              <Card.Img variant="top" src={Storyimage3} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Storysmallimg1}
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
              <Card.Img variant="top" src={Storyimage1} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Storysmallimg1}
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
              <Card.Img variant="top" src={Storyimage2} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Storysmallimg1}
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
