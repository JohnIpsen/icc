import React, { Component } from "react";
import "../styles/sidebar.css";
import { Menu, Segment, Sidebar, Button } from "semantic-ui-react";

class SideNav extends Component {
  render() {
    return (
      <div>
        <div className="side-bar" id="side-bg-color" />
        <Sidebar.Pushable className="side-bar" as={Segment}>
          <Sidebar
            className="side-menu"
            as={Menu}
            animation="overlay"
            inverted
            vertical
            visible
            width="thin"
          >
            <Menu.Item href="/icc">
              <Button className="side-link">Home</Button>
            </Menu.Item>
            <Menu.Item href="/icc/about">
              <Button className="side-link">About</Button>
            </Menu.Item>
            <Menu.Item href="/icc/about">
              <Button className="side-link">Herd Sires</Button>
            </Menu.Item>
            <Menu.Item href="/icc/about">
              <Button className="side-link">Cowherd</Button>
            </Menu.Item>
            <Menu.Item href="/icc/about">
              <Button className="side-link">For Sale</Button>
            </Menu.Item>
            <Menu.Item href="/icc/about">
              <Button className="side-link">Gallery</Button>
            </Menu.Item>
            <Menu.Item href="/icc/about">
              <Button className="side-link">Links</Button>
            </Menu.Item>
            <Menu.Item href="/icc/about">
              <Button className="side-link">Contact</Button>
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default SideNav;
