import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Components/Main";
import "./App.css";
import UserProfile from "./Components/UserProfile";
import HotelReviewsPage from "./Components/HotelReviewsPage";
import HotelPage from "./Components/HotelPage";
import UserEntryModal from "./Components/UserEntryModal";
import NavBar from "./Components/NavBar";
import SignUpPage from "./SignUpPage";
import { Dialog, Text } from "@mantine/core";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const getHotels = () => {
    fetch("/hotels").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setHotels(data);
        });
      }
    });
  };

  const getCurrentUser = () => {
    fetch("/current_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        setOpenDialog(true);
      }
    });
  };

  useEffect(() => {
    getHotels();
    getCurrentUser();
  }, []);

  const profilePath = currentUser ? `/${currentUser.username}` : "#";

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        navigate("/");
      }
    });
  };

  const deleteAccount = () => {
    fetch(`/users/${currentUser.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        navigate("/");
      }
    });
  };

  const formatDate = (date) => {
    if (date) {
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }
  };

  const calculateNightStays = (checkin, checkout) => {
    const checkinDate = checkin.getDate();
    const checkoutDate = checkout.getDate();
    const days = checkoutDate - checkinDate;
    return days;
  };

  return (
    <div className="App">
      <Dialog
        opened={openDialog}
        withCloseButton
        onClose={() => setOpenDialog(false)}
        size="lg"
        radius="md"
      >
        <Text>Please Login or SignUp</Text>
      </Dialog>

      {currentUser ? (
        <NavBar
          handleLogout={handleLogout}
          profilePath={profilePath}
          deleteAccount={deleteAccount}
        />
      ) : (
        <UserEntryModal getCurrentUser={getCurrentUser} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Main
              destination={destination}
              setDestination={setDestination}
              currentUser={currentUser}
              getCurrentUser={getCurrentUser}
              hotels={hotels}
              profilePath={profilePath}
              setDateRange={setDateRange}
            />
          }
        />
        <Route
          path={profilePath}
          element={<UserProfile currentUser={currentUser} />}
        />
        <Route
          path="hotels/:id"
          element={
            <HotelPage
              getCurrentUser={getCurrentUser}
              currentUser={currentUser}
              dateRange={dateRange}
              formatDate={formatDate}
            />
          }
        />
        <Route path="hotel/:id/review" element={<HotelReviewsPage />} />
        <Route
          path="signup"
          element={<SignUpPage getCurrentUser={getCurrentUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
