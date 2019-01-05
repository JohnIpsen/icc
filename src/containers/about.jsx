import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import News from "../components/about/news";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          menuItem: "News",
          render: () => (
            <Tab.Pane>
              <News />
            </Tab.Pane>
          )
        },
        {
          menuItem: "History",
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
        },
        {
          menuItem: "Philosophy",
          render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Tab panes={this.state.options} />
      </div>
    );
  }
}

export default About;
