import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}

export default App;
