import React, { useState, useEffect } from "react";
import HotelDetails from "./HotelDetails";
import { useParams } from "react-router-dom";

const HotelPage = ({ currentUser, getCurrentUser, dateRange }) => {
  let { id } = useParams();
  const [currentHotel, setCurrentHotel] = useState({});

  const getCurrentHotel = () => {
    fetch(`${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCurrentHotel(data);
        });
      }
    });
  };

  useEffect(() => {
    getCurrentHotel();
  }, []);
  return (
    <>
      <HotelDetails
        currentUser={currentUser}
        currentHotel={currentHotel}
        id={id}
        getCurrentHotel={getCurrentHotel}
        getCurrentUser={getCurrentUser}
        dateRange={dateRange}
      />
    </>
  );
};

export default HotelPage;
