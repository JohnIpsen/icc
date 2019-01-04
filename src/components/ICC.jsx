import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import SideNav from "./sidebar";
import Home from "./home";
import About from "./about";
import "../styles/App.css";

class ICC extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default ICC;
