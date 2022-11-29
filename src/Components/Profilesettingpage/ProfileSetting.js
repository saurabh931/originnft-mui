import React from "react";
import "./ProfileSetting.css";
import Navbarnft from "../Navbars/Navbarnft";
import Profilesettingslide from "./Profilesettingslide";

function ProfileSetting() {
  return (
    <>
      <Navbarnft />
      <div className="container-fluid"></div>
      <div>
        <Profilesettingslide />
      </div>
    </>
  );
}

export default ProfileSetting;
