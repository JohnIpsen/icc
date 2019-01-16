import React, { Component } from "react";
import ICC from "./containers/ICC.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import "semantic-ui-css/semantic.min.css";

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
