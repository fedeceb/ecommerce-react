//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
        <SwiperSlide><img src={`/assets/Air-Max1-Premium-WS-H.jpg`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/Converse-Run-Star-Motion-H.jpg`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/Dunk-High-Up_banner-H.jpg`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/NB-H.jpg`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/327-banner-H.jpg`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/vans-banner.jpg`} /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperJS