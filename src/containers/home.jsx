import React, { Component } from "react";
import collage from "../images/bull_tri.jpg";
import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Breeding for Genetics That Matter</h1>
        <h3>
          Internet Production Sale on March 5, 2019 <br />
          Contact us to be placed on our catalog list!
        </h3>
        <img id="bull-collage" src={collage} alt="bulls collage" />
        <p>
          We invite you to take a tour of our operation! We are very diversified
          and have the opportunity to critique two breeds of cattle with the
          main goal of customer satisfaction. We can't wait to show our
          operation to you! Please explore our Angus and Hereford operations,
          see what we have for sale at various public and private auctions, take
          a tour of our history and gallery and experience even much more!
        </p>
      </div>
    );
  }
}

export default Home;
