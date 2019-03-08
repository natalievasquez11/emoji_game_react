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
      bestScore: 0,
      message: `Start by clicking emojis`
  };

  resultClass = "";

  componentDidMount() {
    this.setState({
      imageArr: shuffle(this.state.imageArr)
    });
  }

handlePlay = event => {
  const name = event.target.name;
  const tempArr = this.state.clickArr;
  let emojiExists = false;

  for (var x = 0; x < tempArr.length; x++) {
    if (name === tempArr[x]) {
      let newState = {
        imageArr: shuffle(this.state.imageArr),
        clickArr: [],
        score: 0,
        message: "Incorrect Guess!"
      };

      this.resultClass = "incorrect";
      emojiExists = true;

      if (this.state.score > this.state.bestScore) {
        newState.bestScore = this.state.score;
      }

      this.setState(newState);
      break;
    } 
  }

  if (!emojiExists) {
    this.resultClass = "correct";
    tempArr.push(name);

    this.setState({
      imageArr: shuffle(this.state.imageArr),
      score: this.state.score + 1,
      clickArr: tempArr,
      message: "Correct Guess!"
    });
  }

  console.log(this.state.clickArr);
}

  render() {
    return (
      <div>
        <Navbar 
        score={this.state.score}
        bestScore={this.state.bestScore}
        message={this.state.message}
        resultClass={this.resultClass}/>
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
