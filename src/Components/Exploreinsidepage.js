import React from "react";
import "./Exploreinsidepage.css";
import Topimg from "../Images/Group 9043.png";
import Topimg1 from "../Images/Group 9041.png";
import Topimg2 from "../Images/Group 9040.png";

import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
import Image1 from "../Images/notableimag1.png";
import Smallimg1 from "../Images/tabimage1.png";
import Navbarnft from "../Components/Navbars/Navbarnft";
import Footer from "./Footer";

function ExploreInsidepage() {
  return (
    <>
      <Navbarnft />
      <div className="container-fluid ">
        <div className="row background-ex">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12  position-relative explore-art-text-lorem">
          <div className="explore-art-text">
            <h1 className="explore-art">Explore Art</h1>
            <p className="explore-para">
              Lorem Ipsum dolor sit amet Lorem Ipsum dolor
              <br /> sit amet Lorem Ipsum dolor sit amet{" "}
            </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 explore-inside-page-image23">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 top-image1">
                <img src={Topimg} alt="" className="topimg" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
     
              <div>
                    <img src={Topimg1} alt="" className="topimg23" />
                    </div>
                    <div>
            
                    <img src={Topimg2} alt="" className="topimg23" />
                    </div>
       
              </div>
            </div>
          </div>
        </div>

        <div className="container-explore-inside">
        <div className="row">
          <div>
            <h3 className="hot-section">What’s hot</h3>
          </div>
          <div className="row g-0">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
     
                <Card className="cards-explore-inside">
                  <Card.Img variant="top" src={Image1} />
                  <Card.Body>
                    <Card.Title className="card-body12">
                      <span>
                        {" "}
                        <img
                          src={Smallimg1}
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
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
         
                <Card>
                  <Card.Img variant="top" src={Image1} />
                  <Card.Body>
                    <Card.Title className="card-body12">
                      <span>
                        {" "}
                        <img
                          src={Smallimg1}
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
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
    
                <Card>
                  <Card.Img variant="top" src={Image1} />
                  <Card.Body>
                    <Card.Title className="card-body12">
                      <span>
                        {" "}
                        <img
                          src={Smallimg1}
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
            <div className="see-more-button">
              <button className="button-see">See More</button>
            </div>
          </div>
        </div>
      </div>

      </div>

    </>
  );
}

export default ExploreInsidepage;
