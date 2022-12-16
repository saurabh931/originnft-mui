import React from "react";
import "./Profilesettingslide.css";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Featuredvector from "../../Images/Vector.png";
import { Link } from "react-router-dom";
import Navbarnft from "../Navbars/Navbarnft";
import Footer from "../Footer";
import "./Featureditems.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// IMAGES IMPORT
import Vectorimg1 from "../../Images/tabimage1.png";
import vectorclick from "./Imagesprofile/Vector.png";

export default function Profilesettingslide() {
  return (
    <>
      <div className="container-fluid background-profile-setting"></div>
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12 section-color">
              <div>
                <ul className="listed-section">
                  <span className="setting-sections">Setting</span>
                  <Link to="/profilesetting">
                    <li className="section-list">
                      <span>
                        <PermIdentityOutlinedIcon className="icons-tabs" />
                      </span>{" "}
                      <span className="content-style">Profile</span>
                    </li>
                  </Link>
                  <Link to="/notifications">
                    {" "}
                    <li className="section-list">
                      <span>
                        <NotificationsOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Notifications</span>
                    </li>
                  </Link>
                  <Link to="/featureditems">
                    {" "}
                    <li className="section-list featured-setting">
                      <span>
                        <img src={Featuredvector} alt="" className="iconsddd" />
                      </span>{" "}
                      <span className="content-style">Featured Items</span>
                    </li>
                  </Link>
                  <Link to="/offers">
                    {" "}
                    <li className="section-list">
                      <span>
                        <LocalOfferOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Offers</span>
                    </li>
                  </Link>
                  <Link to="/accountsupport">
                    {" "}
                    <li className="section-list">
                      <span>
                        <VerifiedUserOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Account support</span>
                    </li>
                  </Link>
                  <Link to="/earnings">
                    {" "}
                    <li className="section-list">
                      <span>
                        <MonetizationOnOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Earnings</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className=" col-lg-9 col-md-12 col-sm-12 col-12 notification-padding">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 mb-5">
                  <div className="section-feature-content">
                    <h1 className="profile-setting-heading">Featured Items</h1>
                    <p className="para-featured">
                      Featured items will appear on your profile’s “Featured”
                      tab. You can feature up to 10 items per section.
                    </p>
                  </div>
                  <div className="buttons-section-ddd d-flex">
                    <button className="create-bu">Create Section</button>
                    <button className="view-section-button">
                      View on profile
                    </button>
                  </div>
                  <div className="row card-create-section">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                      <div className="cards-name-ddd">
                        <p className="name-card">RENGA</p>
                        <p className="nnhi-card">Bear, Punks, Halloween</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="images-sections-featured">
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <MoreHorizIcon className="horizonicon" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row card-create-section">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                      <div className="cards-name-ddd">
                        <p className="name-card">RENGA</p>
                        <p className="nnhi-card">Bear, Punks, Halloween</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="images-sections-featured">
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <MoreHorizIcon className="horizonicon" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row card-create-section">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                      <div className="cards-name-ddd">
                        <p className="name-card">RENGA</p>
                        <p className="nnhi-card">Bear, Punks, Halloween</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="images-sections-featured">
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <img
                            src={Vectorimg1}
                            alt=""
                            className="icons-featured"
                          />
                        </span>
                        <span>
                          <MoreHorizIcon className="horizonicon" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="section-button-featured">
                    <button className="featured-save-button">Save</button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
