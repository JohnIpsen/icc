import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import main from "../../images/history/hist_main.jpg";
import Coverflow from "react-coverflow";
import "../../styles/about.css";

class AngusSires extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  switchModal = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
    console.log(this.state.isOpen);
  };

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
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation
          infiniteScroll
          enableHeading
        >
          <img src={main} alt="Album one" onClick={() => this.switchModal()} />
          <img src={main} alt="Album two" data-action="http://passer.cc" />
          <img src={main} alt="Album three" data-action="https://doce.cc/" />
          <img src={main} alt="Album four" data-action="http://tw.yahoo.com" />
        </Coverflow>
        <Modal
          dimmer={this.state.isOpen}
          open={this.state.isOpen}
          onClose={() => this.switchModal()}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content>
            <img className="modal-img" src={main} alt="Album one" />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default AngusSires;
