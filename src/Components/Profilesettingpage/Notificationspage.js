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
import "./Notificationspage.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Ethlogo from "./Imagesprofile/Ellipse 124.png";

// IMPORT
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

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
        backgroundColor: theme.palette.mode === "dark" ? "#FEC200" : "#FEC200",
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
    width: 20,
    height: 20,
    marginTop: 1,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#6A6A6A" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function Profilesettingslide() {
  return (
    <>
      <Navbarnft />
      <div className="container-fluid background-profile-setting"></div>
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 section-color">
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
            <div
              className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12"
              // style={{ height: "120vh" }}
            >
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-9 co-12">
                  <div className="head-notification">
                    <h1 className="notification-head">Notification Settings</h1>
                    <p className="notification-para">
                      Activate which notifications you would like to receive
                    </p>
                  </div>
                  <div className="row notifiactions-sections-cards">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                      <div className="cards-notifiactions-element">
                        <p className="card-name-notifications">Items sold</p>
                        <p className="card-name-notifications-ss">
                          when someone purchased one of your items
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                      <div className="toggle-button-notification">
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          label=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row notifiactions-sections-cards">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                      <div className="cards-notifiactions-element">
                        <p className="card-name-notifications">Bid activity</p>
                        <p className="card-name-notifications-ss">
                          Push, emails, SMS
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div className="toggle-button-notification">
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          label=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row notifiactions-sections-cards">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                      <div className="cards-notifiactions-element">
                        <p className="card-name-notifications">Price change</p>
                        <p className="card-name-notifications-ss">
                          Push, emails, SMS
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div className="toggle-button-notification">
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          label=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row notifiactions-sections-cards">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                      <div className="cards-notifiactions-element">
                        <p className="card-name-notifications">
                          Auction expired
                        </p>
                        <p className="card-name-notifications-ss">
                          Push, emails, SMS
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div className="toggle-button-notification">
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          label=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row notifiactions-sections-cards">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                      <div className="cards-notifiactions-element">
                        <p className="card-name-notifications">Outbid</p>
                        <p className="card-name-notifications-ss">
                          Push, emails, SMS
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div className="toggle-button-notification">
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          label=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row notifiactions-sections-cards">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                      <div className="cards-notifiactions-element">
                        <p className="card-name-notifications">
                          Owned item updates
                        </p>
                        <p className="card-name-notifications-ss">
                          Push, emails, SMS
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div className="toggle-button-notification">
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          label=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row notifiactions-sections-cards">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                      <div className="cards-notifiactions-element">
                        <p className="card-name-notifications">
                          Successful purchase
                        </p>
                        <p className="card-name-notifications-ss">Push, SMS</p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div className="toggle-button-notification">
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          label=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row notifiactions-sections-cards">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                      <div className="cards-notifiactions-element">
                        <p className="card-name-notifications">
                          Origins NFT Newsletter
                        </p>
                        <p className="card-name-notifications-ss">
                          when there is an update from Origins NFT team
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div className="toggle-button-notification">
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          label=""
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="turn-section-component">
                    <span className="turn-all-ele">Turn all off</span>
                  </div>
                  
                  <div className="section-mini">
                    <p className="minimum-notification">
                      Minimum Bid Threshold
                    </p>
                    <span className="para-notification-section">
                      Receive notifications only when you received offers with a
                      value greater than or equal to this amount of ETH
                    </span>
                  </div>
                  <div className="input-notification-section-eth">
                    <InputGroup className="input-notification-eth">
                      <InputGroup.Text>
                        <img src={Ethlogo} alt="" />
                        <div style={{ display: "grid", marginLeft: "10px" }}>
                          <span className="eth-notification-input">ETH</span>
                          <span className="etherum-notification">Ethereum</span>
                        </div>
                      </InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        placeholder="0.0000 ETH"
                        className=""
                      />
                    </InputGroup>
                  </div>
                  <div className="save-button-notification">
                    <button className="save-notification">Save</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-3 col-12"></div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
