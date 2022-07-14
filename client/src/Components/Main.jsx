import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import HotelsList from "./HotelsList";
// import ImageGalleryCarousel from "./ImageGalleryCarousel";
import "./MainPage.css";
const Main = ({
  hotels,
  destination,
  setDestination,
  setDateRange,
  currentUser,
}) => {
  return (
    <div>
      <SearchBar
        destination={destination}
        setDestination={setDestination}
        setDateRange={setDateRange}
      />
      <div className="hotel-list-container">
        <HotelsList
          hotels={hotels}
          destination={destination}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default Main;
