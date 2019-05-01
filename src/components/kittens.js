import React, { Component } from 'react';
import KittensPic from '../assets/images/kittens.jpg'
import Starlight from '../assets/images/Starlight.jpg'

class Kittens extends Component {
  render() {
    return (
        <div>
            <div className="w3-row w3-padding-8">
              <div className="w3-col s6 w3-center">
                <img src={KittensPic} role="presentation" className="pictureLeftColumn"></img>
              </div>
              <div className="w3-col s6 w3-center">
                <div className="fancyHeading">Available Kittens <br/><br/><br/><br/> Valentino</div>
              </div>
            </div>
            <div className="w3-row w3-padding-8">
              <div className="w3-col s6 w3-center">
                <img src={Starlight} role="presentation" className="pictureLeftColumn"></img>
              </div>
              <div className="w3-col s6 w3-center w3-margin-top-large"></div>
            </div>
        </div>
    );
  }
}

export default Kittens;