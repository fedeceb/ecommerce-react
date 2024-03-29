//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import "./styles.scss";

// import required modules
import { Pagination } from "swiper";

const SwiperJS = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Link to='/productos/1'><img className="img-swiperPagination" src={`/assets/Air-Max1-Premium-WS-H.jpg`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='/productos/4'><img className="img-swiperPagination" src={`/assets/Converse-Run-Star-Motion-H.jpg`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='productos/3'><img className="img-swiperPagination" src={`/assets/Dunk-High-Up_banner-H.jpg`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='/productos/2'><img className="img-swiperPagination" src={`/assets/NB-H.jpg`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='productos/28'><img className="img-swiperPagination" src={`/assets/327-banner-H.jpg`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='productos/7'><img className="img-swiperPagination" src={`/assets/vans-banner.jpg`} /></Link></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperJS