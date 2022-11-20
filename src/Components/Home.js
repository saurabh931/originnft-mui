import React from 'react'
import "./Home.css"
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
import { Link } from "react-router-dom";
import Hometabs from "./Hometabs"
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function Home() {
  return (
    <>
    <div>
    <div className='container-fluid background'>
    <div>
      <h1 className='header'>Explore, collect, and sell NFTs</h1>
      <div className='main-button'> <Link className='button-primary mx-3' id='button-1' to="/explore">Explore</Link>
      <button className='button-secondary'>Sell</button></div>
    </div>
    <div className="container-fluid py-5 swiper213 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: false,
          }}
          navigation={{
            clickable: false,
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[ Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={Image1}
              alt=""
              className="slider1"
             
            />
          </SwiperSlide>
          <SwiperSlide >
            {" "}
            <img src={Image2} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image3} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image4} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image5} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image6} alt="" className="slider1" />
          </SwiperSlide>
          {/* <SwiperSlide>
            {" "}
            <img src={Image7} alt="" className="slider1" />
          </SwiperSlide> */}
         {/*  <SwiperSlide>
            {" "}
            <img src={Image8} alt="" className="slider1" />
          </SwiperSlide> */}
         {/*  <SwiperSlide>
            <img src={Image9} alt="" className="slider1" />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
    
      
    </div>
    <div><Hometabs/></div>
    </>
  )
}
