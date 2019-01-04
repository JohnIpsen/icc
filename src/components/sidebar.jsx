import React, { Component } from "react";
import "../styles/sidebar.css";
import { Menu, Segment, Sidebar, Button } from "semantic-ui-react";
import { BrowserRouter as Link } from "react-router-dom";

class SideNav extends Component {
  render() {
    return (
      <Sidebar.Pushable className="sidebar" as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          vertical
          visible
          width="thin"
        >
          <Menu.Item as={Link} path="/">
            <Button>Home</Button>
          </Menu.Item>
          <Menu.Item as={Link} to="/about">
            <Button>About</Button>
          </Menu.Item>
          <Menu.Item as={Link} to="/sires">
            <Button>Herd Sires</Button>
          </Menu.Item>
          <Menu.Item as={Link} to="/cowherd">
            <Button>Cowherd</Button>
          </Menu.Item>
          <Menu.Item as={Link} to="/forsale">
            <Button>For Sale</Button>
          </Menu.Item>
          <Menu.Item as={Link} to="/gallery">
            <Button>Gallery</Button>
          </Menu.Item>
          <Menu.Item as={Link} to="/links">
            <Button>Links</Button>
          </Menu.Item>
          <Menu.Item as={Link} to="/contact">
            <Button>Contact</Button>
          </Menu.Item>
        </Sidebar>
      </Sidebar.Pushable>
    );
  }
}

export default SideNav;
