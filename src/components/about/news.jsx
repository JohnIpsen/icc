import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import pap from "../../images/news/pap.jpg";

class News extends Component {
  render() {
    return (
      <div>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={pap} />

            <Item.Content>
              <Item.Header>2018 PAP Testing</Item.Header>
              <Item.Meta>
                PAP testing finished this last October. Yearling weights are in
                and EPD's updated. Come see the offering anytime. We are pretty
                excited about this set of Angus and Hereford bulls. Will have a
                very nice set of bred heifers offered, including one right out
                of our ET program.
              </Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}

export default News;
