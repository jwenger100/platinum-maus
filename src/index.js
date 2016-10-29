import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './components/photoGrid.js';
import ContactUs from './components/contactUs.js';
import Kittens from './components/kittens.js';
import Queens from './components/queens.js';
import Studs from './components/studs.js';
import Learn from './components/learn.js';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Router path="home" component={Home} />
    <Router path="kittens" component={Kittens} />
    <Router path="queens" component={Queens} />
    <Router path="studs" component={Studs} />
    <Router path="Learn" component={Learn} />
    <Router path="contact" component={ContactUs} />
  </Router>
), document.getElementById('root'));
