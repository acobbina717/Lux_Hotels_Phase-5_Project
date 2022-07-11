import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./Components/Main";
import HotelsPage from "./Components/HotelsPage";
import HotelInfoPage from "./Components/HotelInfoPage";
import UserProfile from "./Components/UserProfile";

function App() {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  console.log("user", user);
  console.log("currentUser", currentUser.username);

  const getCurrentUser = () => {
    fetch("/current_user").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCurrentUser(data);
        });
      }
    });
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main user={user} setUser={setUser} getCurrentUser={getCurrentUser} />
        }
      />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/hotels/:id" element={<HotelInfoPage />} />
      {currentUser ? (
        <Route
          path={`/${currentUser.username}`}
          element={<UserProfile setCurrentUser={setCurrentUser} />}
        />
      ) : null}
    </Routes>
  );
}

export default App;
