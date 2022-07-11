import React from "react";
import NavBar from "./NavBar";

const UserProfile = () => {
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        res.json();
        setCurrentUser(null);
      }
    });
  };
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default UserProfile;
