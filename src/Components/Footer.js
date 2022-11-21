import React from "react";
import { BsDiscord } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
// import { CgMail } from "react-icons/cg";
import "./Footer.css";

function Footer(props) {
  return (
    <>
      <div >
        <div className="container-fluid  py-5 px-5 " style={{background:"#000", color:'#fff'}}>
          <div className="row" id="foter21">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <h4
                className="keep-head"
                // style={{
                //   color: props.mode === "light" ? "black " : "white ",
                // }}
              >
                Keep posted
              </h4>
              <p
                className="subs-para"
                // style={{
                //   color: props.mode === "light" ? "black " : "white ",
                // }}
              >
                Subscribe to our newsletter to stay in the loop with our newest
                feature
                <br /> release, NFT drops, and tips and tricks for navigating
                Origins Marketplace.
              </p>
              <div className="input-group1 mb-3">
                <input
                  type="email"
                  className="form-control22"
                  placeholder="Enter email address..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  // style={{
                  //   color: props.mode === "light" ? "black " : "white ",
                  // }}
                />
                <button
                  className="signup"
                  type="button"
                  id="button-addon2"
                  
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <h4
                className="join-header"
                // style={{
                //   color: props.mode === "light" ? "black " : "white ",
                // }}
              >
                Join the community
              </h4>
              <div>
                <ul className="icon">
                  <li className="twitter-icons">
                    <BsDiscord />
                  </li>
                  <li className="twitter-icons">
                    <BsFacebook />
                  </li>
                  <li className="twitter-icons">
                    <BsTwitter />
                  </li>
                  <li className="twitter-icons">
                    <FaTelegramPlane />
                  </li>

                  <li className="twitter-icons">
                    <BsYoutube />
                  </li>
                  <li className="twitter-icons">
                    <FiInstagram />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12 footer-opensea">
                {/* <img
                  src="https://opensea.io/static/images/logos/opensea-white.svg"
                  alt=""
                  className="logo-icon"
                /> */}
                <br />
                <br />
                <h5
                  className="origins-head"
                  // style={{
                  //   color: props.mode === "light" ? "black " : "white ",
                  // }}
                >
                  Origins Marketplace
                </h5>
                <br />
                <p
                  className="origins-para"
                  // style={{
                  //   color: props.mode === "light" ? "black " : "white ",
                  // }}
                >
                  The Origins Token ($ORGNS) is an intercontinental
                  cryptocurrency primed to become an integral part of a global
                  ecosystem where artist, creators, investors and the general
                  public are given the freedom to participate in and earn
                  profits from endeavours they are passionate about.
                </p>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5
                  className="list-heading"
                  // style={{
                  //   color: props.mode === "light" ? "black " : "white ",
                  // }}
                >
                  Marketplace
                </h5>
                <ul className="footer2-list">
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    All NFTs
                  </li>

                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Art
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Collectibles
                  </li>

                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Photography
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Recordian
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Videos
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Trending
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6 profile-fo">
                {" "}
                <h5
                  className="list-heading"
                  // style={{
                  //   color: props.mode === "light" ? "black " : "white ",
                  // }}
                >
                  My Profile
                </h5>
                <ul className="footer2-list">
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Overview
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Favourites
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Watchlist
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    My Collections
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Settings
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5
                  className="list-heading"
                  // style={{
                  //   color: props.mode === "light" ? "black " : "white ",
                  // }}
                >
                  Resources
                </h5>
                <ul className="footer2-list">
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Docs
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Partners
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Advertisement
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Newsletter
                  </li>
                  <li
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  >
                    Socials
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Footer;

