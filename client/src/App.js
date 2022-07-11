import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch("/current_user")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
