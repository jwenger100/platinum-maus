import React, { Component } from 'react';
import '../style.css';

class Header extends Component {
  render() {
    return (
      <header className="w3-panel w3-padding-128 w3-center w3-opacity">
          <h1>Platinum Maus</h1>
          <h1 className="w3-xlarge">By Design</h1>
          
          <div className="w3-padding-32">
            <div className="w3-btn-bar w3-border w3-show-inline-block">
              <a href="#" className="w3-btn w3-light-grey">Home</a>
              <a href="#" className="w3-btn">Kittens Available</a>
              <a href="#" className="w3-btn w3-hide-small">Queens</a>
              <a href="#" className="w3-btn w3-hide-small">Studs</a>
              <a href="#" className="w3-btn w3-hide-small">Learn</a>
              <a href="#" className="w3-btn">Contact Us</a>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;