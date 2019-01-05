import React, { Component } from "react";
import logo from "../images/ICCLogo.jpg";
import "../styles/header.css";
import { Image } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Image
          id="ICCLogo"
          src={logo}
          as="a"
          size="medium"
          href="http://google.com"
          target="_blank"
        />
        {/* <h3>Breeding for Genetics That Matter</h3> */}
      </div>
    );
  }
}

export default Header;
