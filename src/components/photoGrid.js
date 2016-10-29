import React, { Component } from 'react';
import Nat1 from '../assets/images/Nat1.jpg'
import Nat2 from '../assets/images/Nat2.jpg'
import Nat3 from '../assets/images/Nat3.jpg'
import Nat4 from '../assets/images/Nat4.jpg'
import Nat5 from '../assets/images/Nat5.jpg'
import Nat6 from '../assets/images/Nat6.jpg'
import Nat7 from '../assets/images/Nat7.jpg'
import Nat8 from '../assets/images/Nat8.jpg'
import Nat9 from '../assets/images/Nat9.jpg'
import Nat10 from '../assets/images/Nat10.jpg'
import Nat11 from '../assets/images/Nat11.jpg'
import Nat12 from '../assets/images/Nat12.jpg'
import '../style.css';

class PhotoGrid extends Component {
  render() {
    return (
      <div className="w3-row-padding">
        <div className="w3-half">
          <img src={Nat1} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat2} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat3} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat4} role="presentation" style={{width:'100%'}}></img>
        </div>
         <div className="w3-half">
          <img src={Nat7} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat8} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat9} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat10} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat11} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat12} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat5} role="presentation" style={{width:'100%'}}></img>
          <img src={Nat6} role="presentation" style={{width:'100%'}}></img>
        </div>
      </div>
    );
  }
}

export default PhotoGrid;