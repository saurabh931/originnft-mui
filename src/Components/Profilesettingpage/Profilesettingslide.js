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
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// IMPORT
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Imagevector from "./Imagesprofile/Image-vector.png";
import Profileimg from "./Imagesprofile/profileimg.png";

export default function Profilesettingslide() {
  return (
    <>

      <div className="container-fluid background-profile-setting "></div>
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 section-color">
              <div>
                <ul className="listed-section">
                  <span className="setting-sections">Setting</span>
                  <Link to="/profilesetting">
                    <li className="section-list profile-setting">
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
                    <li className="section-list">
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
            <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="profile-head-section">
                <span className="profile-heading">Profile details</span>
                <span className="preview-profile-button">
                  <RemoveRedEyeOutlinedIcon className="icons-eye" />
                  Preview
                </span>
              </div>
              <div>
                <p className="profile-section-banner">Profile Banner</p>
              </div>
              <div className="section-profile-line">
                <div className="drop-section-image">
                  <div>
                    <img src={Imagevector} alt="" />
                  </div>{" "}
                  <span className="img-span">
                    Drop image here or
                    <br /> browse
                  </span>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                  <div>
                    <span className="user-section">Username</span>
                    <div>
                      <input
                        placeholder="Enter username"
                        className="place-input-profile"
                      />
                    </div>
                  </div>
                  <div className="my-3">
                    <span className="user-section">Email-Address</span>
                    <div>
                      <input
                        placeholder="Enter email"
                        className="place-input-profile"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="profile-section-banner">Social Connections</p>
                    <p className="profile-line">
                      Verify your account by connecting social accounts
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div className="section-twitter">
                        <TwitterIcon style={{ color: "#6A6A6A" }} />
                        <span className="twit">Twitter</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <button className="connect-bu">Connect</button>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div className="section-twitter">
                        <InstagramIcon style={{ color: "#6A6A6A" }} />
                        <span className="twit">Instagram</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <button className="connect-bu">Connect</button>
                    </div>
                  </div>
                  <div>
                    <p className="profile-section-banner">Links</p>
                    <div>
                      <input
                        placeholder="https://"
                        className="place-input-profile"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="profile-section-banner">Wallet address</p>
                    <div>
                      <InputGroup className="mb-3 inputgrp">
                        {/* <InputGroup.Text>$</InputGroup.Text> */}
                        <Form.Control
                          aria-label="Amount (to the nearest dollar)"
                          style={{ borderRight: "none" }}
                        />
                        <InputGroup.Text>
                          <ContentCopyIcon style={{ color: "#6a6a6a" }} />
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </div>
                  
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                  <div className="profile-section-content" >
                    <span className="user-section-img">Profile image</span>
                    <div style={{ marginTop: "10px" }}>
                      <img src={Profileimg} alt="" />
                    </div>
                  </div>
                  <div className="user-bio-section">
                    <span className="user-section-img">Bio</span>
                    <div>
                      <textarea
                        className="input-bio"
                        placeholder="Tell us about yourself"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                    <button className="save-bu-pro my-4">Save</button>
                  </div>
                <div className="col-lg-2 col-md-2 col-sm-0 col-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
