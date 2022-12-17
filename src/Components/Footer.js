import React from "react";
import { BsDiscord } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import "./Footer.css";

function Footer(props) {
  return (
    <>
      <div className="Footer-left-spacing">
        <div className="container-fluid  py-5 px-5 ">
          <div className="row" id="foter21">
            <div
              className="col-lg-5 col-md-12 col-sm-12 col-12"
              id="footer-posted-margin-bottom"
            >
              <h5 className="keep-head">Keep Posted</h5>
              <p className="subs-para">
                Subscribe to our newsletter to stay in the loop with our newest
                feature release, NFT drops, and tips and tricks for navigating
                Origins Marketplace.
              </p>
              <div className="input-group1 mb-3">
                <input
                  type="email"
                  className="form-control22"
                  placeholder="Enter email address..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button className="signup" type="button" id="button-addon2">
                  Subscribe
                </button>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-12"
              id="footer-posted-margin-bottom"
            >
              <h5 className="join-header">Join the community</h5>
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
              <div className="col-lg-5 col-md-12 col-sm-12 col-12 footer-opensea footer-section">
                <h5 className="list-heading">Origins Marketplace</h5>

                <p className="origins-para">
                  The Origins Token ($ORGNS) is an intercontinental
                  cryptocurrency primed to become an integral part of a global
                  ecosystem where artist, creators, investors and the general
                  public are given the freedom to participate in and earn
                  profits from endeavours they are passionate about.
                </p>
              </div>
              <div className="col-lg col-md col-sm-12 col-12 footer-section">
                {" "}
                <h5 className="list-heading">Marketplace</h5>
                <ul className="footer2-list">
                  <li>All NFTs</li>

                  <li>Art</li>
                  <li>Collectibles</li>

                  <li>Photography</li>
                  <li>Recordian</li>
                  <li>Videos</li>
                  <li>Trending</li>
                </ul>
              </div>
              <div className="col-lg col-md col-sm-12 col-12 profile-fo footer-section">
                {" "}
                <h5 className="list-heading">My Profile</h5>
                <ul className="footer2-list">
                  <li>Overview</li>
                  <li>Favourites</li>
                  <li>Watchlist</li>
                  <li>My Collections</li>
                  <li>Settings</li>
                </ul>
              </div>
              <div className="col-lg col-md col-sm-12 col-12 footer-section">
                {" "}
                <h5 className="list-heading">Resources</h5>
                <ul className="footer2-list">
                  <li>Docs</li>
                  <li>Partners</li>
                  <li>Advertisement</li>
                  <li>Newsletter</li>
                  <li>Socials</li>
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
