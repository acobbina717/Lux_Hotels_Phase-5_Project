import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "../styles.css";
import HotelRoomCard from "./HotelRoomCard";

const CardSwiper = ({ children }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HotelRoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <HotelRoomCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CardSwiper;
