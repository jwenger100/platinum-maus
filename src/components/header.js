import React, { Component } from 'react';
import Menu from './ui/menu.jsx';
import '../style.css';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header className="paddingLargeTop text-center w3-opacity">
          <h1>Platinum Maus</h1>
          <h1 className="w3-xlarge">By Design</h1>
          
          <div className="w3-padding-32">
            <Menu pathname={this.props.pathname} selectedCss="w3-light-grey"/>
          </div>
      </header>
    );
  }
}

export default Header;