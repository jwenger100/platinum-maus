import React, { Component } from 'react';
import KittensPic from '../assets/images/kittens.jpg'
import Starlight from '../assets/images/Starlight.jpg'
import Starbright from '../assets/images/Starbright.jpg'
import Penelope from '../assets/images/Penelope.jpg'

class Kittens extends Component {
  render() {
    return (
        <div>
            <div className="w3-row w3-padding-8">
              <div className="w3-col s6 w3-center">
                <img src={KittensPic} role="presentation" className="pictureLeftColumn"></img>
              </div>
              <div className="w3-col s6 w3-center">
                <div className="fancyHeading">Available Kittens</div>
              </div>
            </div>
            <div className="w3-row w3-padding-8">
              <div className="w3-col s6 w3-center">
                <img src={Starlight} role="presentation" className="pictureLeftColumn"></img>
              </div>
              <div className="w3-col s6 w3-center w3-margin-top-large">Stardust (reserved)</div>
            </div>
            <div className="w3-row w3-padding-8">
              <div className="w3-col s6 w3-center">
                <img src={Starbright} role="presentation" className="pictureLeftColumn"></img>
              </div>
              <div className="w3-col s6 w3-center w3-margin-top-large">Zoella (reserved)</div>
            </div>
            <div className="w3-row w3-padding-8">
              <div className="w3-col s6 w3-center">
                <img src={Penelope} role="presentation" className="pictureLeftColumn"></img>
              </div>
              <div className="w3-col s6 w3-center w3-margin-top-large">Penelope (reserved)</div>
            </div>
        </div>
    );
  }
}

export default Kittens;