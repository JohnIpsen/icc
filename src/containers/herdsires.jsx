import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import AngusSires from "../components/herd/angussires";
import "../styles/about.css";

class HerdSires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          menuItem: "Angus Herdsires",
          render: () => (
            <Tab.Pane>
              <AngusSires />
            </Tab.Pane>
          )
        },
        {
          menuItem: "Hereford Herdsires",
          render: () => <Tab.Pane>hey</Tab.Pane>
        }
      ]
    };
  }
  render() {
    return (
      <div id="about">
        <Tab panes={this.state.options} />
      </div>
    );
  }
}

export default HerdSires;
