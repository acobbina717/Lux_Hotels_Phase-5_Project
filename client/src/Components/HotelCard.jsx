import React from "react";
import { Rating } from "@mui/material";
import "./HotelCard.css";
import { Link } from "react-router-dom";

const HotelCard = ({ id, name, rate, image, starRating, neighbourhood }) => {
  return (
    <div className="hotel-card-container">
      <div className="searchItem">
        <img
          src={image}
          alt=""
          className="siImg"
          style={{ borderRadius: "7px 0px 0px 7px", border: "2px solid black" }}
        />
        <Link
          to={`hotels/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="siDesc">
            <h1 className="siTitle">{name}</h1>
            <span className="siState">{neighbourhood}</span>
            <Rating disabled={true} value={starRating} />
            <span className="siSubtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
              Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <div className="siDetails">
              <div className="siDetailTexts">
                <span className="siPrice">{`$${rate}`}</span>
                <span className="siTotalPrice">$112 total</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
