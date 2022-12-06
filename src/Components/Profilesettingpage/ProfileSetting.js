import React from "react";
import "./ProfileSetting.css";
import Navbarnft from "../Navbars/Navbarnft";
import Profilesettingslide from "./Profilesettingslide";
import Footer from "../Footer"

function ProfileSetting() {
  return (
    <>
    {/*   <Navbarnft /> */}
      <div className="container-fluid"></div>
      <div>
        <Profilesettingslide />
        <Footer/>
      </div>
    </>
  );
}

export default ProfileSetting;
