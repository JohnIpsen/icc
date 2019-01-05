import React, { Component } from "react";
import logo from "../images/ICCLogoTransparent.png";
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <div className="icc-header">
        <div id="header-bg-color" />
        <img id="ICCLogo" src={logo} as="a" href="/icc" alt="ICC" />
        {/* <h3>Breeding for Genetics That Matter</h3> */}
      </div>
    );
  }
}

export default Header;
