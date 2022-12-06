import React from "react";
import "./Profile.css";
import Navbarnft from "../Navbars/Navbarnft";
import Profileimg from "../../Images/profileimg.png";
import { FiCopy } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FiUpload } from "react-icons/fi";
import { MdOutlineMoreHoriz } from "react-icons/md";

import Profiletabs from "./Profiletabs"
import Footer from "../Footer";

function Profile() {
  return (
    <>
 {/*      <Navbarnft /> */}
      <div className="container-fluid background-profile"></div>
      <div className="container-fluid">
        <div className="row">
          <div>
            <img src={Profileimg} alt="" className="profileimage" />
          </div>
          <div className="profile-detail">
            <h5 className="profile-name">Jane Doe</h5>
            <span className="wallet">
              0xasddffqe23r...0fd3
              <FiCopy style={{ marginLeft: "10px" }} />
            </span>
            <br />
            <br />
            <span className="www">
              <TfiWorld />
              janedoe.com
            </span>
            <br />
            <br />
            <span className="www">Joined November 2022</span>
          </div>
        </div>
        <div className="row">
          <div className="edit">
            <button className="edit-button">Edit Profile</button>
            <span className="upload-bu">
              <FiUpload className="up-bu" />
            </span>
            <span className="upload-bu">
              <MdOutlineMoreHoriz className="up-bu" />
            </span>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <Profiletabs/>
      </div>
      <Footer/>
    </>
  );
}

export default Profile;
