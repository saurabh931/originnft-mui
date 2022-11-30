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
import "./Offers.css";

// IMPORT
import Imgside1 from "./Imagesprofile/Rectangle 7.png";
import Imgside2 from "./Imagesprofile/Rectangle 721.png";
import Imgside3 from "./Imagesprofile/Rectangle 723.png";

// INPUT IMPORT FILE
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Eth from "./Imagesprofile/Ellipse 124.png";

export default function Profilesettingslide() {
  return (
    <>
      <Navbarnft />
      <div className="container-fluid background-profile-setting"></div>
      <div >
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-2 col-md-2 col-sm-3 col-3 section-color">
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
            
            <div className="col-lg-10 col-md-10 col-sm-9 col-9">
              <div className="section-offers">
                <h1 className="offer-head">Offer settings</h1>
                <p className="set-para">
                  Set a minimum after for collective to ignore low offers.
                </p>
              </div>
              <button className="offer-button">View my offers</button>
              <p className="offer11021">View my offers</p>
              <div className="row sser">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="section-offer">
                    <img src={Imgside1} alt="" />
                    <span>
                      <p className="ppo">3 items</p>
                      <p className="ppo10">Cloud Ball</p>
                      <p className="ppo">Floor price: 0 ETH</p>
                    </span>
                  </div>
                  <div className="section-offer">
                    <img src={Imgside2} alt="" />
                    <span>
                      <p className="ppo">134 items</p>
                      <p className="ppo10">Loop_1k</p>
                      <p className="ppo">Floor price: 0.12 ETH</p>
                    </span>
                  </div>
                  <div className="section-offer">
                    <img src={Imgside3} alt="" />
                    <span>
                      <p className="ppo">3 items</p>
                      <p className="ppo10">hindsight</p>
                      <p className="ppo">Floor price: 0.12 ETH</p>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <InputGroup className="mb-3 box-create">
                    <InputGroup.Text id="basic-addon1" className="hhus">
                      <img src={Eth} alt="" />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="0"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className="jjjdd"
                    />
                  </InputGroup>
                  <span className="tag-bottom">$0 USD</span>
                  <InputGroup className="mb-3 box-create">
                    <InputGroup.Text id="basic-addon1" className="hhus">
                      <img src={Eth} alt="" />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="0"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className="jjjdd"
                    />
                  </InputGroup>
                  <span className="tag-bottom">$0 USD</span>
                  <InputGroup className="mb-3 box-create">
                    <InputGroup.Text id="basic-addon1" className="hhus">
                      <img src={Eth} alt="" />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="0"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className="jjjdd"
                    />
                  </InputGroup>
                  <span className="tag-bottom">$0 USD</span>
                </div>
              </div>
              <div className="offer-bu">
              <button className="offer-save">Save</button></div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
