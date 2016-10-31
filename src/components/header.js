import React, { Component } from 'react';
import LinkButton from './ui/linkButton.jsx';
import '../style.css';

class Header extends Component {
  render() {
    return (
      <header className="w3-panel w3-padding-128 w3-center w3-opacity">
          <h1>Platinum Maus</h1>
          <h1 className="w3-xlarge">By Design</h1>
          
          <div className="w3-padding-32">
            <div className="w3-btn-bar w3-border w3-show-inline-block">
              <LinkButton to="/home" className="w3-btn" selected="true" linkName="Home"></LinkButton>
              <LinkButton to="/kittens" className="w3-btn" linkName="Kittens Available"></LinkButton>
              <LinkButton to="/queens" className="w3-btn w3-hide-small" linkName="Queens"></LinkButton>
              <LinkButton to="/studs" className="w3-btn w3-hide-small" linkName="Studs"></LinkButton>
              <LinkButton to="/learn" className="w3-btn w3-hide-small" linkName="Learn"></LinkButton>
              <LinkButton to="/contact" className="w3-btn" linkName="Contact Us"></LinkButton>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;