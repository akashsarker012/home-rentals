import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{height: "300px", background:"red"}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{height: "300px", background:"red"}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{height: "300px", background:"red"}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height: "300px", background:"red"}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{height: "300px", background:"red"}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{height: "300px", background:"red"}}>Slide 6</SwiperSlide>

      </Swiper>
    </>
  );
}
