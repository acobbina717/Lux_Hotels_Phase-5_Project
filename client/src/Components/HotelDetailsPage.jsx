import React from "react";
import HotelCard from "./HotelCard";
import HotelRoomCard from "./HotelRoomCard";
import NavBar from "./NavBar";
import Reviews from "./Reviews";

const HotelDetailsPage = () => {
  return (
    <div>
      <NavBar />
      <HotelCard />
      <HotelRoomCard />
      <Reviews />
    </div>
  );
};

export default HotelDetailsPage;
