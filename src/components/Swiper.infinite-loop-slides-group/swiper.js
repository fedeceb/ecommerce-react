// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import "./swiperLoop.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperInfiniteLoop = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={200}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="loopSwiper"
      >
        <SwiperSlide><Link to='/category/adidas'><img src={`/assets/logo-adidasoriginals.png`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='/category/converse'><img src={`/assets/logo-converse.png`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='/category/new-balance'><img src={`/assets/logo-nb.png`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='/category/nike'><img src={`/assets/logo-nike.png`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='/category/puma'><img src={`/assets/logo-puma.png`} /></Link></SwiperSlide>
        <SwiperSlide><Link to='/category/vans'><img src={`/assets/logo-vans.jpg`} /></Link></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperInfiniteLoop