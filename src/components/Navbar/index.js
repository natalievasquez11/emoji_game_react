import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div className="navbar-fixed">
      <nav className="grey darken-3">
      <div className="nav-wrapper">
          <ul>
            <li><a href="/" className="home">Emoji Game</a></li>
            <li className={props.resultClass}>{props.message}</li> 
            <li>Points: {props.score} | Best Score: {props.bestScore}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;