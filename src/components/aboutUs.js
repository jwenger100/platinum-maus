import React, { Component } from 'react';
import Nat14 from '../assets/images/Nat14.jpg'

class AboutUs extends Component {
  render() {
    return (
      <div className="w3-row-padding">
        <div className="w3-half">
          <img src={Nat14} role="presentation" className="pictureLeftColumn"></img>
        </div>
        <div className="w3-half">
          <div className="fancyHeading">About Us</div>
          <p>We are a small, home based cattery located near Seattle, Washington.</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;