import React, { Component } from "react";
import Header from "./header";
import SideNav from "./sidebar";
import logo from "../images/logo.svg";
import "../styles/App.css";

class ICC extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideNav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default ICC;
