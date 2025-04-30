import React from 'react';
import "./NavCss.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="nav">
      <div id="left_div">
        Akhil
      </div>
      <div id="right_div">
        <Link to="/home">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
