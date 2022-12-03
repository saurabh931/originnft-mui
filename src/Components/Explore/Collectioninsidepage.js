import React from "react";
import Navbar from "../Navbars/Navbarnft";
import "./Collectioninsidepage.css";
import ProfileImage from "./Collection-images/Rectangle730.png";
import Checkvector from "./Collection-images/check.png";

//ICONS IMPORT
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { FaDiscord } from "react-icons/fa";
import Discord from "./Collection-images/discord-img.png";
import { RiArrowDropDownLine} from 'react-icons/ri';

export default function Collectioninsidepage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid background-images-collections"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <img src={ProfileImage} alt="" className="profile-setting-img" />
            <h6 className="profile-name-inside">
              Gamefi Legends <img src={Checkvector} alt="" />
            </h6>
            <h6 className="sub-title-profile">
              by Crypto Khem
              <img src={Checkvector} alt="" />
            </h6>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <span className="icons-collections-inside">
              <LanguageOutlinedIcon style={{ color: "#6A6A6A" }} />
              <img src={Discord} alt="" className="icons-setting-width" />
              <InstagramIcon className="icons-setting-width" />
              <TwitterIcon className="icons-setting-width" />
              <StarBorderOutlinedIcon className="icons-setting-width" />
              <ShareIcon className="icons-setting-width" />
              <MoreHorizIcon className="icons-setting-width11" />
            </span>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-8 col-md-8 col-sm-12 col-12"
              style={{ marginLeft: "90px" }}
            >
              <span>Items 3 </span>
              <span style={{ marginLeft: "10px" }}>Created Sep 2022</span>
              <span style={{ marginLeft: "10px" }}>Creator Fee 10%</span>
              <span style={{ marginLeft: "10px" }}>Chain Ethereum</span>
              <p className="collection-inside-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam tellus, rhoncus sed eleifend</p>
              <button className="see-button">See more <RiArrowDropDownLine/></button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12"></div>
          </div>
        </div>
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-6 col-12">
        <span>3,456 ETH</span>
        <span>total volume</span>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-12">

        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-12">

        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-12">

        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-12">

        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-12">

        </div>

        </div>

        </div>
      </div>
    </>
  );
}
