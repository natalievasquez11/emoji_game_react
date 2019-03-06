import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron/index";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
