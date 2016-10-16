import React, { Component } from 'react';
import '../style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="w3-container w3-padding-64 w3-light-grey w3-center">
        <a href="#" className="w3-hover-text-indigo"><i className="fa fa-facebook-official"></i></a>
        <a href="#" className="w3-hover-text-red"><i className="fa fa-pinterest-p"></i></a>
        <a href="#" className="w3-hover-text-light-blue"><i className="fa fa-twitter"></i></a>
        <a href="#" className="w3-hover-text-grey"><i className="fa fa-flickr"></i></a>
        <a href="#" className="w3-hover-text-indigo"><i className="fa fa-linkedin"></i></a>
        <p>Powered by Jonalatraud Productions</p>
      </footer>
    );
  }
}

export default Footer;