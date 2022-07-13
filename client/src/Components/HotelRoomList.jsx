import React from "react";
import HotelRoomCard from "./HotelRoomCard";
// import { Grid } from "@mantine/core";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import CardSwiper from "./CardSwiper";

const HotelRoomList = () => {
  return (
    <>
      <CardSwiper>{<HotelRoomCard />}</CardSwiper>
    </>
  );
};

export default HotelRoomList;
