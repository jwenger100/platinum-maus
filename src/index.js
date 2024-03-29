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
import NewKitten from './components/newKitten.js';
import AboutMaus from './components/aboutMaus.js';
import AboutUs from './components/aboutUs.js';
import SubscriberList from './components/subscriberList.js';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="home" component={Home} />
        <Route path="kittens" component={Kittens} />
        <Route path="queens" component={Queens} />
        <Route path="studs" component={Studs} />
        <Route path="Learn" component={AboutUs} />
        <Route path="contact" component={ContactUs} />
        <Route path="subscribers" component={SubscriberList} />
    </Route>
  </Router>
), document.getElementById('root'));
