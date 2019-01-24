import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import pap from "../../images/news/pap.jpg";
import salea from "../../images/news/salea.jpg";
import "../../styles/about.css";

class News extends Component {
  render() {
    return (
      <div>
        <div className="color-block">
          <img alt="news img" className="news-img" src={pap} />
          <h3 className="news-header">2018 PAP Testing</h3>
          <p className="news-meta">
            PAP testing finished this last October. Yearling weights are in and
            EPD's updated. Come see the offering anytime. We are pretty excited
            about this set of Angus and Hereford bulls. Will have a very nice
            set of bred heifers offered, including one right out of our ET
            program.
          </p>
        </div>
        <Item.Group className="color-block">
          <Item>
            <Item.Image className="news-img" size="tiny" src={salea} />

            <Item.Content>
              <Item.Header>
                <h3 className="news-header">2018 Bull Sale Concludes</h3>
              </Item.Header>
              <Item.Meta>
                {" "}
                <p className="news-meta">
                  Thank you to all who supported us this year. We are grateful
                  to all bidders and buyers. Averages: $4100.00 on Fall Angus
                  Bulls, $3300.00 on Fall Hereford Bulls, $2600.00 on Yearling
                  Angus Bulls. Lot 18 was our high selling bull overall at
                  $7,900. Thanks again. We are working now to get the pens ready
                  and wean next years herd sires.
                </p>
              </Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}

export default News;
