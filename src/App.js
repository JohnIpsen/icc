import React, { Component } from "react";
import ICC from "./components/ICC.jsx";
import { HashRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <ICC />
      </Router>
    );
  }
}

export default App;
