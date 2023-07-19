import React from "react";
import Home from "./Home";
import About from "./About";
import { username, city, image } from "../data/user";
function App() {
  return (
    <div>
      <Home username={username} city={city} />
      <About image={image} />
      <p>name {username}</p>
      <p>city {city}</p>
      <p>{image}</p>
    </div>
  );
}

export default App;
