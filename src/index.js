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
    <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="home" component={Home} />
        <Route path="kittens" component={Kittens} />
        <Route path="queens" component={Queens} />
        <Route path="studs" component={Studs} />
        <Route path="Learn" component={Learn} />
        <Route path="contact" component={ContactUs} />
    </Route>
  </Router>
), document.getElementById('root'));
