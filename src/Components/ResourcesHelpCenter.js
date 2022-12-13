import React from "react";
import "./ResourcesHelpCenter.css";
import Navbarnft from "./Navbars/Navbarnft";
import Card from "react-bootstrap/Card";
import Image1 from "../Images/notableimag2.png";
import Smallimg1 from "../Images/tabimage1.png";
import TickIcons from "../Images/tickimg.png";
import Ceo from "../Images/images-ceo.png";
import Comma from "../Images/comma.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "./Footer";

export default function ResourcesHelpCenter() {
  return (
    <>
     
      <div className="container-fluid background-resources position-relative">
        <div className="text-cont welcome-text">
          <h2 className="welcome-text">Welcome to Origins Marketplace </h2>
          <p>
            Lorem Ipsum dolor sit amet Lorem Ipsum dolor
            <br /> sit amet Lorem Ipsum dolor sit amet{" "}
          </p>
        </div>
      </div>
      <div className="origin-sections">
        <h4 className="origin-part">Why partner with Origins</h4>
        <p className="origin-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          diam tellus, rhoncus
          <br /> sed eleifend a, accumsan vel massa. Ut non leo diam. Phasellus
          imperdiet dui nec <br />
          libero finibus, vitae rutrum libero dictum.
        </p>
      </div>
      <div className="container my-5">
        <div className="row" style={{justifyContent:"center", alignItems:"center"}}>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div className="hhumjk"></div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div className="hhumjk"></div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div className="hhumjk"></div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
          <div className="hhumjk"></div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
        <div className="hhumjk"></div>
       </div>
        </div>
      </div>
    
      <div className="container-fluid my-5">
        <div>
          <h4 className="partners">Meet our partners</h4>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <SwiperSlide>
              <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title className="card-body12">
                    <span>
                      {" "}
                      <img
                        src={Smallimg1}
                        alt=""
                        style={{ display: "inline-flex" }}
                        className="card-image121"
                      />{" "}
                    </span>
                    <p className="text111">
                      Hot Cheetos
                      <img
                        src={TickIcons}
                        alt=""
                        style={{ width: "5%", marginLeft: "10px" }}
                      />
                    </p>
                    <p className="tick-icons11">By Genies</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <SwiperSlide>
              <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title className="card-body12">
                    <span>
                      {" "}
                      <img
                        src={Smallimg1}
                        alt=""
                        style={{ display: "inline-flex" }}
                        className="card-image121"
                      />{" "}
                    </span>
                    <p className="text111">
                      Hot Cheetos
                      <img
                        src={TickIcons}
                        alt=""
                        style={{ width: "5%", marginLeft: "10px" }}
                      />
                    </p>
                    <p className="tick-icons11">By Genies</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <SwiperSlide>
              <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title className="card-body12">
                    <span>
                      {" "}
                      <img
                        src={Smallimg1}
                        alt=""
                        style={{ display: "inline-flex" }}
                        className="card-image121"
                      />{" "}
                    </span>
                    <p className="text111">
                      Hot Cheetos
                      <img
                        src={TickIcons}
                        alt=""
                        style={{ width: "5%", marginLeft: "10px" }}
                      />
                    </p>
                    <p className="tick-icons11">By Genies</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <SwiperSlide>
              <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title className="card-body12">
                    <span>
                      {" "}
                      <img
                        src={Smallimg1}
                        alt=""
                        style={{ display: "inline-flex" }}
                        className="card-image121"
                      />{" "}
                    </span>
                    <p className="text111">
                      Hot Cheetos
                      <img
                        src={TickIcons}
                        alt=""
                        style={{ width: "5%", marginLeft: "10px" }}
                      />
                    </p>
                    <p className="tick-icons11">By Genies</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </div>
     
 
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <SwiperSlide>
              <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title className="card-body12">
                    <span>
                      {" "}
                      <img
                        src={Smallimg1}
                        alt=""
                        style={{ display: "inline-flex" }}
                        className="card-image121"
                      />{" "}
                    </span>
                    <p className="text111">
                      Hot Cheetos
                      <img
                        src={TickIcons}
                        alt=""
                        style={{ width: "5%", marginLeft: "10px" }}
                      />
                    </p>
                    <p className="tick-icons11">By Genies</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <SwiperSlide>
              <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title className="card-body12">
                    <span>
                      {" "}
                      <img
                        src={Smallimg1}
                        alt=""
                        style={{ display: "inline-flex" }}
                        className="card-image121"
                      />{" "}
                    </span>
                    <p className="text111">
                      Hot Cheetos
                      <img
                        src={TickIcons}
                        alt=""
                        style={{ width: "5%", marginLeft: "10px" }}
                      />
                    </p>
                    <p className="tick-icons11">By Genies</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <SwiperSlide>
              <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title className="card-body12">
                    <span>
                      {" "}
                      <img
                        src={Smallimg1}
                        alt=""
                        style={{ display: "inline-flex" }}
                        className="card-image121"
                      />{" "}
                    </span>
                    <p className="text111">
                      Hot Cheetos
                      <img
                        src={TickIcons}
                        alt=""
                        style={{ width: "5%", marginLeft: "10px" }}
                      />
                    </p>
                    <p className="tick-icons11">By Genies</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <SwiperSlide>
              <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title className="card-body12">
                    <span>
                      {" "}
                      <img
                        src={Smallimg1}
                        alt=""
                        style={{ display: "inline-flex" }}
                        className="card-image121"
                      />{" "}
                    </span>
                    <p className="text111">
                      Hot Cheetos
                      <img
                        src={TickIcons}
                        alt=""
                        style={{ width: "5%", marginLeft: "10px" }}
                      />
                    </p>
                    <p className="tick-icons11">By Genies</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </div>
          </div>
      </div>

      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <img src={Ceo} alt="" className="ceo-image" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
              <img src={Comma} alt="" />
              <h3 className="place112">
                Placeholder: Origins
                <br /> Marketplace is excellent{" "}
              </h3>
              <p className="place1124">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus diam tellus, rhoncus sed eleifend a, accumsan vel
                massa. Ut non leo diam. Phasellus imperdiet dui nec libero
                finibus, vitae rutrum libero dictum.
              </p>
            </div>
            <div>
                <span className="ceo-info">Jane Doe<br/>
CEO, Company</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
