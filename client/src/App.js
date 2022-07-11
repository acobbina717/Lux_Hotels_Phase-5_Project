import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import "./App.css";
import UserProfile from "./Components/UserProfile";
import HotelDetailsPage from "./Components/HotelDetailsPage";
import HotelReviewsPage from "./Components/HotelReviewsPage";
import HotelsPage from "./Components/HotelsPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const getCurrentUser = () => {
    fetch("/current_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  console.log(currentUser);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main currentUser={currentUser} />} />
        <Route path={`/${currentUser.uername}`} element={<UserProfile />} />
        <Route path="/hotel/:id" element={<HotelDetailsPage />} />
        <Route path="/hotel/:id/review" element={<HotelReviewsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
