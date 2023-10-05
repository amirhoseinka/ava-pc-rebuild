"use client";
import Image from "next/image";

import firstSWiperPhoto from "@/public/pictures/swiper/1.jpg";
import secondSWiperPhoto from "@/public/pictures/swiper/2.jpg";
import thirdSWiperPhoto from "@/public/pictures/swiper/3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";

import swiperCore from "swiper"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const firstSectionSwiper = () => {
    swiperCore.use([Autoplay])
  return (
    <div className="mx-2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar,A11y]}
        slidesPerView={1}
        navigation={{enabled: false}}
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
            delay:2000,
        }}
        breakpoints={{
          768: {
            // width: 576 ,
            navigation: {
              enabled: true
            },
          },
          
        }}
        className="mt-3 container rounded-lg"
      >
        <SwiperSlide>
          <Image src={firstSWiperPhoto} alt="firstsWiperPhoto" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={secondSWiperPhoto} alt="secondsWiperPhoto" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={thirdSWiperPhoto} alt="thirdsWiperPhoto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default firstSectionSwiper;
