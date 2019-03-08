import React from "react";
import "./style.css";

function Main(props) {
  return(
    <div className="container">
      <div className="row">
        <ul className="col m8 offset-m2">
          {props.images.map(result => (
            <li key={result} className="emojis">
              <img name={result} alt={result} src={result} onClick={props.handlePlay}/>
            </li>
          ))}  
        </ul>
      </div>
    </div>
  );
}

export default Main;