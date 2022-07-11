import React from "react";
import SearchBar from "./SearchBar";
import UserEntryModal from "./UserEntryModal";
import NavBar from "./NavBar";
import HotelsList from "./HotelsList";

const Main = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? <NavBar /> : <UserEntryModal />}
      <SearchBar />
      <HotelsList />
    </div>
  );
};

export default Main;
