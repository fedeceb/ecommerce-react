// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
        <SwiperSlide><img src={`/assets/logo-adidasoriginals.png`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/logo-converse.png`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/logo-nb.png`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/logo-nike.png`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/logo-puma.png`} /></SwiperSlide>
        <SwiperSlide><img src={`/assets/logo-vans.jpg`} /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperInfiniteLoop