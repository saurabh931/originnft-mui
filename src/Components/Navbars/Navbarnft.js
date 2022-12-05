import React, { useState } from "react";
import { useEffect } from "react";
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
import Imgcarts from "./Navimg/cartimg.png";
import Imgcarts1 from "./Navimg/cartimg2.png";
import Checkicons from "./Navimg/che.png";

// ICONS
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";

// IMPORT SWITCH TAB FOR NIGHT MODE
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import CheckIcon from "@mui/icons-material/Check";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#FEC200",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function Navbar(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
   theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };
  useEffect(() => { 
  document.body.className = theme;
  },[theme]);
  


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
              <ul className="dropdown-menu show-profile">
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
                <li className="li-section d-flex">
                  <a className="dropdown-item" href="/">
                    Night Mode
                  </a>
                  <div
                    className={`form-check form-switch  text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    {" "}
                    <span
                      onClick={() => {
                        setShow1(!show1);
                      }}
                    >
                      <FormControlLabel
                        control={
                          <IOSSwitch
                            sx={{ m: 1 }}
                        
                            className="ios-switch"
                         onClick = {() => toggleTheme()} 
                          />
                        }
                        // label="iOS style"
                      />
                    </span>
                  </div>
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
              <ul className="dropdown-menu card-section image-bg">
                <li className="cart-menu">
                  Haven’t found
                  <br /> the right NFT?{" "}
                </li>
                <li className="para-li">
                  Add NFTs to your bag to
                  <br /> check out and get hold of them.
                </li>
                <li>
                  <button className="card-section-button">
                    Explore Recordian NFT
                  </button>
                </li>
                <li>{/* <img src={Imgback} alt="" className="imgback"/> */}</li>
              </ul>
            </div>
          </ul>
          <ul className="nav-list">
            <div className="dropdown">
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false" id="list-text">
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
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false"  id="list-text">
                Stats
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
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false"  id="list-text">
                Resources
              </li>
              <ul className="dropdown-menu">
                <li className="li-section">
                  <Link className="dropdown-item" to="/resourceshelpcenter">
                    Help Center
                  </Link>
                </li>
                <li className="li-section">
                  <Link className="dropdown-item" to="/collectioninsidepage">
                    Collection-inside-page
                  </Link>
                </li>
                {/* <li className="li-section">
                  <Link className="dropdown-item" to="/resourcesnewsletter" >
                   Newsletter
                  </Link>
                </li> */}

                <li className="li-section">
                  <a className="dropdown-item" href="/">
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
                  <Link className="dropdown-item" to="/resourcesnewsletter">
                    Newsletter
                  </Link>
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
              <li type="button" data-bs-toggle="dropdown" aria-expanded="false"  id="list-text">
                Create
              </li>
              {/* <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
  </ul> */}
            </div>
          </ul>
          {/* <div className="cart-box-section">
            <div className="row py-5 px-3">
              <div className="col-6 mb-3">
                <span className="beg-section ">
                  Beg <strong className="num-redco">2</strong>
                </span>
              </div>
              <div className="col-6 ">
                <div className="icons-cross">
                  <HighlightOffIcon />
                </div>{" "}
              </div>
              <div className="row ">
                <div className="col-4">
                  <img src={Imgcarts} alt="" />
                </div>
                <div className="col-4" style={{ lineHeight: "12px" }}>
                  <span className="loop-section">Loop(Common..)</span>
                  <br />
                  <span className="loop-section1">
                    Red Angrybol
                    <img src={Checkicons} alt="" />
                  </span>

                  <span className="loop-section1">Creator fee: 10%</span>
                </div>
                <div className="col-4">
                  <span className="amount-cart-item">6.5667 ETH</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <img src={Imgcarts1} alt="" />
                </div>
                <div className="col-4" style={{ lineHeight: "12px" }}>
                  <span className="loop-section">Loop(Common..)</span>
                  <br />
                  <span className="loop-section1">
                    Red Angrybol
                    <img src={Checkicons} alt="" />
                  </span>

                  <span className="loop-section1">Creator fee: 10%</span>
                </div>
                <div className="col-4">
                  <span className="amount-cart-item">6.5667 ETH</span>
                </div>
              </div>
              <div className="row py-5 px-4">
                <div className="section-eth-amount">
                  <div className="col-6">
                    <span>Total</span>
                  </div>
                  <div className="col-6 ethllo">
                    <span>6.5667 ETH</span>
                  </div>
                </div>
              </div>
              <div className="row py-5 px-4">
                <div className="section-eth-amount1">
                  <span className="check-out11">Check Out</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="cart-box-section">
            <div className="row py-5 px-3">
              <div className="col-6 mb-3">
                <span className="beg-section ">
                  Beg <strong className="num-redco">2</strong>
                </span>
              </div>
              <div className="col-6 ">
                <div className="icons-cross">
                  <HighlightOffIcon />
                </div>{" "}
              </div>
              <div className="row ">
                <div className="col-4">
                  <img src={Imgcarts} alt="" />
                </div>
                <div className="col-4" style={{ lineHeight: "12px" }}>
                  <span className="loop-section">Loop(Common..)</span>
                  <br />
                  <span className="loop-section1">
                    Red Angrybol
                    <img src={Checkicons} alt="" />
                  </span>
                  <span className="loop-section1">Creator fee: 10%</span>
                </div>
                <div className="col-4">
                  <span className="amount-cart-item">6.5667 ETH</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <img src={Imgcarts1} alt="" />
                </div>
                <div className="col-4" style={{ lineHeight: "12px" }}>
                  <span className="loop-section">Loop(Common..)</span>
                  <br />
                  <span className="loop-section1">
                    Red Angrybol
                    <img src={Checkicons} alt="" />
                  </span>
                  <span className="loop-section1">Creator fee: 10%</span>
                </div>
                <div className="col-4">
                  <span className="amount-cart-item">6.5667 ETH</span>
                </div>
              </div>
              <div className="row py-5 px-4">
                <div className="section-eth-amount">
                  <div className="col-6">
                    <span>Total</span>
                  </div>
                  <div className="col-6 ethllo">
                    <span>6.5667 ETH</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <span>Payment method</span>
                  <div className="col-3">
                    <div>
                      <Radio
                        checked={selectedValue === "a"}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <span>CRYPTO</span>
                    <br />
                    <span>Ethereum</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <div>
                      <Radio
                        checked={selectedValue === "a"}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <span>Credit or debit card</span>
                    <br />
                    <span>*******9095</span>
                  </div>
                </div>
              </div>
              <div className="row py-5 px-4">
                <div className="section-eth-amount1">
                  <span className="check-out11">Complete Purchase</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="cart-box-section">
            <div className="row py-5 px-3">
              <div className="col-6 mb-3">
                
              </div>
              <div className="col-6 ">
                <div className="icons-cross">
                  <HighlightOffIcon />
                </div>{" "}
              </div>
              <div className="row ">
                <div className="chek">
                  <CheckIcon className="cor-dd" />
                </div>
                <div className="pur-div">
                  <span className="purchse-com">Purchase complete</span>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <span className="item-se">Items:</span>
                </div>
                <div className="col-6">
                  <span className="item-se">(2) Loop, Cloudball</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="item-se">SubTotal:</span>
                </div>
                <div className="col-6">
                  <span className="item-se">6.5667 ETH</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="item-se">Paid with:</span>
                </div>
                <div className="col-6">
                  <span className="item-se">Credit or debit card</span>
                </div>
              </div>

              <div className="row py-5 px-4">
                <div className="hhun">
                  <span className="check-out122">Back to Explore page</span>
                </div>
              </div>
            </div>
          </div> */}
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
