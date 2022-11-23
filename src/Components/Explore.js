import React from "react";
import Exploretabs from "./Exploretabs";
import "./Explore.css";
import Navbarnft from "../Components/Navbars/Navbarnft";
import Footer from "./Footer";

function Explore() {
  return (
    <>
      <Navbarnft />
      <div className="container-fluid background-image mx-0">
        <div className="mx-0">
          <h1 className="explore-header">Explore</h1>
          <Exploretabs />
        </div>{" "}
      </div>
      <Footer/>
    </>
  );
}

export default Explore;
