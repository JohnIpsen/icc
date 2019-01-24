import React, { Component } from "react";
import "../styles/sidebar.css";

class SideNav extends Component {
  render() {
    return (
      <div>
        <div className="side-bar" id="side-bg-color" />
        <div className="side-bar">
          <div className="side-menu">
            <a href="/">
              <button className="side-link">Home</button>
            </a>
            <a href="/about">
              <button className="side-link">About</button>
            </a>
            <a href="/herdsires">
              <button className="side-link">Herd Sires</button>
            </a>
            <a href="/about">
              <button className="side-link">Cowherd</button>
            </a>
            <a href="/about">
              <button className="side-link">For Sale</button>
            </a>
            <a href="/about">
              <button className="side-link">Gallery</button>
            </a>
            <a href="/about">
              <button className="side-link">Links</button>
            </a>
            <a href="/about">
              <button className="side-link" id="bottom-link">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
