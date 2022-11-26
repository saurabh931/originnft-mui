import React, { useState } from "react";
import Navbaroffcanvas from "./Navbaroffcanvas";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbarnft.css";
import { Grid } from "@mui/material";

import avtaricon from "./Navimg/profile.png";
import walleticon from "./Navimg/wallet.png";
import carticon from "./Navimg/cart.png";
import logo from "./Navimg/origins-NFT1.png";
import logoorigin from "./Navimg/logo.png";

// IMAGES
import Nft from "./Navimg/Ellipse 9.png";
import Recordian from "./Navimg/Ellipse 2.png";
import Art from "./Navimg/Ellipse 3.png";
import Collectibles from "./Navimg/Ellipse 4.png";
import Music from "./Navimg/Ellipse 5.png";
import Photography from "./Navimg/Ellipse 6.png";
import Videos from "./Navimg/Ellipse 7.png";
import Imgback from "./Navimg/Rectangle 684.png";

// ICONS
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Grid container className="navbar">
        <Grid item xl={3} lg={3} md={9} sm={9} xs={9} className="d-flex">
          <span>
            {" "}
            <img src={logo} alt="" />
          </span>
          <span>
            {" "}
            <img src={logoorigin} alt="" className="origin-logo" />
          </span>
        </Grid>
        <Grid item xl={9} lg={9} md={3} sm={3} xs={3} className="toggle-btn">
          <Navbaroffcanvas />
        </Grid>
      {/*   <Grid
          item
          xl={4}
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className="navbar-desktop"
        ></Grid> */}
        <Grid
          item
          xl={9}
          lg={9}
          md={3}
          sm={3}
          xs={3}
          className="navbar-desktop"
        >
          <ul className="nav-icon">
            {" "}
            <div className="dropdown">
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={avtaricon} alt="" />
              </li>
              <ul className="dropdown-menu">
                <li className="li-section">
                  {" "}
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    {" "}
                    Favourites
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    {" "}
                    Watchlist
                  </a>
                </li>
                <li className="li-section">
                  <Link className="dropdown-item" to="/mycollections">
                    My Collections
                  </Link>
                </li>
                <li className="li-section">
                  <Link className="dropdown-item" to="/profilesetting">
                    Settings
                  </Link>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    Night Mode
                  </a>
                </li>
              </ul>
            </div>
            <li>
              <img src={walleticon} alt="" />
            </li>
            <div className="dropdown ">
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={carticon} alt="" />
              </li>
              <ul className="dropdown-menu card-section image-bg" >
                <li className="cart-menu">Haven’t found<br/> the right NFT? </li>
                <li className="para-li">
                  Add NFTs to your bag to
                  <br /> check out and get hold of them.
                </li>
                <li><button className="card-section-button">Explore Recordian NFT</button></li>
                <li>
                  {/* <img src={Imgback} alt="" className="imgback"/> */}
                </li>
                
              </ul>
            </div>
          </ul>
          <ul className="nav-list">
            <div className="dropdown">
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Explore
              </li>
              <ul className="dropdown-menu">
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    <img src={Nft} alt="" />
                    All NFTs
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    <img src={Recordian} alt="" />
                    Recordian
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    <img src={Art} alt="" />
                    Art
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    <img src={Collectibles} alt="" />
                    Collectibles
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    <img src={Music} alt="" />
                    Music
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    <img src={Photography} alt="" />
                    Photography
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    <img src={Videos} alt="" />
                    Videos
                  </a>
                </li>
              </ul>
            </div>
            {/* <li>Explore</li> */}
            <div className="dropdown">
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false">
                State
              </li>
              <ul className="dropdown-menu">
                <li className="li-section">
                  <Link className="dropdown-item" to="/collectionsstate">
                    Rankings
                  </Link>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    Activities
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </li>
              <ul className="dropdown-menu">
              <li className="li-section">
                  <Link className="dropdown-item" to="/resourceshelpcenter" >
                    Help Center
                  </Link>
                </li>
                <li className="li-section">
                  <Link className="dropdown-item" to="/resourcesnewsletter" >
                   Newsletter
                  </Link>
                </li>
              
                <li className="li-section">
                  <a className="dropdown-item" href="/" >
                    Docs
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    Partners
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    Advertisement
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    Newsletter
                  </a>
                </li>
                <li className="li-section">
                  <a className="dropdown-item" href="/">
                    <span className="ic">
                      <FaDiscord className="discord" />
                    </span>
                    <span className="ic">
                      <FaTelegramPlane className="tele" />
                    </span>
                    <span className="ic">
                      <BsFacebook className="face" />
                    </span>
                    <span className="ic">
                      <BsInstagram className="insta" />
                    </span>
                    <span className="ic">
                      <BsTwitter className="twitter" />
                    </span>
                    <span className="ic">
                      <FaTiktok className="tik" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Create
              </li>
              {/* <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
  </ul> */}
            </div>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
