import React, { Component } from 'react';
import '../App.css';
import Nat1 from '../assets/images/Nat1-queens.jpg'
import Nat2 from '../assets/images/Nat2-queens.jpg'

class Queens extends Component {
  render() {
    return (
      <div className="w3-row-padding">
        <div className="w3-half">
          <img src={Nat1} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat2} role="presentation" style={{width:'100%'}}></img>
        </div>
        <div className="w3-half">
          <div className="fancyHeading">Princess Natalie</div>
          <div>
              <p>Princess Natalie is named after Russian Princess Natalie Troubetskaya, 
              who introduced the Egyptian Mau to the United States in 1952. 
              Natalie was born March 3rd, 2012 and came to live with us in July 2012. 
              Her colors and markings are absolutely breathtaking with very dark markings on a crystal clear coat. 
              Natalie embodies the personality of a true princess, as she awaits her destiny as Queen. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Queens;