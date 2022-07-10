import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const hello = () => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  };
  useEffect(() => {
    hello();
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
