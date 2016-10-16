import React, { Component } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import PhotoGrid from './components/photoGrid.js';
import './App.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="w3-dark-grey">
        <Header/>
        <PhotoGrid/>
        <Footer/>
      </div>
    );
  }
}

export default App;
