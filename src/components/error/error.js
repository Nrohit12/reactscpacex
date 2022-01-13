import React from "react";
import { Link } from 'react-router-dom';

function Error() {
  return (
      <div
        className="bg_image"
      >
        <h1>404!</h1>
        <h4>Oops page not found!!</h4>
        <Link to="/">
        <button >Back to Home</button></Link>
      
        
      </div>
  );
}

export default Error