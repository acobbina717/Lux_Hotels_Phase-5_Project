import React from "react";
import HotelCard from "./HotelCard";

const HotelsList = ({ hotels, destination }) => {
  return (
    <div>
      {hotels
        .filter((hotel) =>
          hotel.neighbourhood.toLowerCase().includes(destination.toLowerCase())
        )
        ?.map((hotel) => (
          <HotelCard
            id={hotel.id}
            key={hotel.id}
            name={hotel.name}
            rate={hotel.rate}
            image={hotel.desktop_thumbnail}
            starRating={hotel.star_rating}
            neighbourhood={hotel.neighbourhood}
          />
        ))}
    </div>
  );
};

export default HotelsList;
