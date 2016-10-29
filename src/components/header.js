import React, { Component } from 'react';
import { Link } from 'react-router';
import '../style.css';

class Header extends Component {
  render() {
    return (
      <header className="w3-panel w3-padding-128 w3-center w3-opacity">
          <h1>Platinum Maus</h1>
          <h1 className="w3-xlarge">By Design</h1>
          
          <div className="w3-padding-32">
            <div className="w3-btn-bar w3-border w3-show-inline-block">
              <Link to="/home" className="w3-btn w3-light-grey">Home</Link>
              <Link to="/kittens" className="w3-btn">Kittens Available</Link>
              <Link to="/queens" className="w3-btn w3-hide-small">Queens</Link>
              <Link to="/studs" className="w3-btn w3-hide-small">Studs</Link>
              <Link to="/learn" className="w3-btn w3-hide-small">Learn</Link>
              <Link to="/contact" className="w3-btn">Contact Us</Link>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;