import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../Images/mainslider1.png";
import Image2 from "../Images/mainslider2.png";
import Image3 from "../Images/mainslider3.png";
import Image4 from "../Images/mainslider4.png";
import Image5 from "../Images/mainslider1.png";
import Image6 from "../Images/mainslider2.png";
import Image7 from "../Images/mainslider3.png";
import Image8 from "../Images/mainslider4.png";
import Image9 from "../Images/mainslider1.png";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import Hometabs from "./Hometabs";
import HeaderSlider from "./HeaderSlider";
import Tab from "./Tab";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="container-fluid background">
          <div>
            <h1 className="header">Explore, collect, and sell NFTs</h1>
            <div className="main-button">
              {" "}
              <Link
                className="button-primary mx-3"
                id="button-1"
                to="/explore"
                component={RouterLink}
              >
                Explore
              </Link>
              <Link
                className="button-secondary"
                id="button-2"
                to="/exploreinsidepage"
                component={RouterLink}
              >
                Sell
              </Link>
            </div>
          </div>
          <div className="container-fluid py-5  swiper213 ">
            <HeaderSlider />
          </div>
        </div>
      </div>
      <div>
      {/*   <Hometabs /> */}
        <Tab/>  
      </div>
    </>
  );
}
