import { useEffect, useState } from "react";
import "./App.css";

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
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
