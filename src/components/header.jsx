import React, { Component } from "react";
import logo from "../images/ICCLogo.jpg";
import "../styles/header.css";
import { Image } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <div>
        <Image
          src={logo}
          as="a"
          size="medium"
          href="http://google.com"
          target="_blank"
        />
      </div>
    );
  }
}

export default Header;
