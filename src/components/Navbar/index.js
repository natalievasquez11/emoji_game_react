import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav className="grey darken-3">
      <div className="nav-wrapper">
          <ul>
            <li>Emoji Game</li>
            <li>Start by clicking emojis!</li> 
            <li>Points: 0 | Best Score: 0</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;