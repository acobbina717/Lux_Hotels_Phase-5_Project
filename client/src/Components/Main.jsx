import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import HotelsList from "./HotelsList";
// import ImageGalleryCarousel from "./ImageGalleryCarousel";
import "./MainPage.css";
const Main = ({ hotels, destination, setDestination, setDateRange }) => {
  return (
    <div>
      <SearchBar
        destination={destination}
        setDestination={setDestination}
        setDateRange={setDateRange}
      />
      <div className="hotel-list-container">
        <HotelsList hotels={hotels} destination={destination} />
      </div>
    </div>
  );
};

export default Main;
