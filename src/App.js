import React, { Component } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import './App.css';
import './style.css';

class App extends Component {
    render() {
        return (
          <div className="w3-dark-grey">
            <Header pathname={this.props.location.pathname}/>
            {this.props.children}
            <Footer/>
          </div>
        );
    }
}

export default App;
