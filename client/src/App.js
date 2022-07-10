import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route path="/testing">
          <h1>Hello, world!</h1>
        </Route>
        <Route path="/">
          <h1>Page Count: {count}</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
