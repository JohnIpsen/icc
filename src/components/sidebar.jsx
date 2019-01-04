import React, { Component } from "react";
import "../styles/sidebar.css";
import { Menu, Segment, Sidebar } from "semantic-ui-react";

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
          <Menu.Item as="a" link="/">
            Home
          </Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          <Menu.Item as="a">Herd Sires</Menu.Item>
          <Menu.Item as="a">Cowherd</Menu.Item>
          <Menu.Item as="a">For Sale</Menu.Item>
          <Menu.Item as="a">Gallery</Menu.Item>
          <Menu.Item as="a">Links</Menu.Item>
          <Menu.Item as="a">Contact</Menu.Item>
        </Sidebar>
      </Sidebar.Pushable>
    );
  }
}

export default SideNav;
