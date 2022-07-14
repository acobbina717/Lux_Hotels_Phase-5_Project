import React from "react";
import HotelRoomCard from "./HotelRoomCard";
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
