import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Main from "./components/Main";
import shuffle from "shuffle-array";
import angry from "./assets/Angry.png";
import confounded from "./assets/Confounded.png";
import flushed from "./assets/Flushed.png";
import halo from "./assets/Halo.png";
import hushed from "./assets/Hushed.png";
import loudly_Crying from "./assets/Loudly_Crying.png";
import mad from "./assets/Mad.png";
import sunglasses from "./assets/Sunglasses.png";
import tears from "./assets/Tears.png";
import tightly_Closed from "./assets/Tightly_Closed.png";
import tongue_Winking from "./assets/Tongue_Winking.png";
import upside_Down from "./assets/Upside-Down.png";

class App extends Component {
  state = {
    imageArr: [angry, confounded, flushed, halo, hushed, 
      loudly_Crying, mad, sunglasses, tears, tightly_Closed, 
      tongue_Winking, upside_Down],
      clickArr: [],
      score: 0,
      bestScore: 0
  };

  componentDidMount() {
    this.setState({
      imageArr: shuffle(this.state.imageArr)
    });
  }

handlePlay = event => {
  const name = event.target.name;
  const tempArr = this.state.clickArr;
  tempArr.push(name);

  this.setState({
    imageArr: shuffle(this.state.imageArr),
    clickArr: tempArr
  });
  
  console.log(this.state.clickArr);

}

  render() {
    return (
      <div>
        <Navbar 
        score={this.state.score}
        bestScore={this.state.bestScore}/>
        <Jumbotron />
        <Main images={this.state.imageArr}
          handlePlay={this.handlePlay}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
