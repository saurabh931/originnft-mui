import React from "react";
import "./ResourcesNewsletter.css";
import Navbarnft from "./Navbars/Navbarnft";
import Footer from "./Footer";
import Sectionimg from "../Images/testimonial-bg-remove.png";

export default function ResourcesNewsletter() {
  return (
    <>
    
      <div className="container-fluid background-newsletter">
        <div className="container use-section">
          <div className="row containsection">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div>
                <img src={Sectionimg} alt="" className="sectionimg" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 py-5">
              <div>
                <h4 className="head-news">
                  Be the first to know
                  <br /> our latest updates!
                </h4>
                <p className="news-para">
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit. Phasellus diam tellus, rhoncus
                  <br /> sed eleifend a, accumsan vel massa.{" "}
                </p>
                <input
                  placeholder="Enter email address"
                  className="input-email"
                />
                <div>
                  <button className="subs-button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
