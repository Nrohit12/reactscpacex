import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div
        className="bg_image"
      >
      <h1> SpaceX Launch Site</h1>
      <Link to="/launches/upcoming">
        <button>Launch Website</button></Link>
      </div>
  );
}

export default Home