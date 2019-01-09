import React, { Component } from "react";
import main from "../../images/history/hist_main.jpg";
import { StyleRoot } from "radium";
import Coverflow from "react-coverflow";
import "../../styles/about.css";

class AngusSires extends Component {
  render() {
    return (
      <div className="color-block">
        <p>
          Sire selection for the Angus herd has been strict, but basic. Sires
          must have a recognized, marketable pedigree known for the convenience
          traits in which we select our replacements from. If we don't feel a
          sire will give us something to work with down the road, he is culled
          from our prospect list. No 'one-trait-solid' sire will be used, rather
          a sire must complete the rigorous testing course that competent Angus
          breeders put these proving bulls through before they touch our cows.
        </p>
        <StyleRoot>
          <Coverflow
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
              "@media (max-width: 900px)": {
                width: "600px",
                height: "300px"
              },
              "@media (min-width: 900px)": {
                width: "960px",
                height: "600px"
              }
            }}
          >
            <img
              src={main}
              alt="Album one"
              data-action="https://facebook.github.io/react/"
            />
            <img src={main} alt="Album two" data-action="http://passer.cc" />
            <img src={main} alt="Album three" data-action="https://doce.cc/" />
            <img
              src={main}
              alt="Album four"
              data-action="http://tw.yahoo.com"
            />
          </Coverflow>
        </StyleRoot>
      </div>
    );
  }
}

export default AngusSires;
