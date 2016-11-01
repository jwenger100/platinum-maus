import React, { Component } from 'react';
//import LinkButton from './ui/linkButton.jsx';
import { Link } from 'react-router';
import update from 'immutability-helper';

class Menu extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	   		links: [
	   			{name:'Home', to:'/home', id:1, defaultCss:'w3-btn', selectedCss:''},
	   			{name:'Kittens Available', to:'/kittens', id:2, defaultCss:'w3-btn', selectedCss:''},
	   			{name:'Queens', to:'/queens', id:3, defaultCss:'w3-btn w3-hide-small', selectedCss:''},
	   			{name:'Studs', to:'/studs', id:4, defaultCss:'w3-btn w3-hide-small', selectedCss:''},
	   			{name:'Learn', to:'/learn', id:5, defaultCss:'w3-btn w3-hide-small', selectedCss:''},
	   			{name:'Contact Us', to:'/contact', id:6, defaultCss:'w3-btn', selectedCss:''}
	   		]
	    };
	    var links = this.state.links; 
	    for(var l of this.state.links) {
	    	var css = props.pathname === l.to ? l.defaultCss + ' ' + this.props.selectedCss : l.defaultCss;
	    	var idx = l.id-1;
 			var updatedCss = update(links[idx], {selectedCss: {$set: css}});
 			var newLink = update(links, {
 				$splice: [[idx, 1, updatedCss]]
 			});
 			this.state.links[idx] = newLink[idx];
	    }
	    // This binding is necessary to make `this` work in the callback
	    this.onItemClick = this.onItemClick.bind(this);
  	}
 	render() {
		return (
		  <div className="w3-btn-bar w3-border w3-show-inline-block">
		  	{this.state.links.map(l => {
		  		return (
		  			<Link to={l.to} onClick={this.onItemClick.bind(this, l.id)} key={l.id} className={l.selectedCss}>{l.name}</Link>
		  		)}
		  	)}
		  </div>
		);
  	}

 	onItemClick(key) {
 		var links = this.state.links; 
 		var id = key;
 		var tempLinks = [];
 		for(var l of links) {
 			var css = id === l.id ? l.defaultCss + ' ' + this.props.selectedCss : l.defaultCss;
 			var idx = l.id-1;
 			var updatedCss = update(links[idx], {selectedCss: {$set: css}});
 			var newLink = update(links, {
 				$splice: [[idx, 1, updatedCss]]
 			});
 			tempLinks.push(newLink[idx]);
 		}
 		this.setState({
 			links:tempLinks
 		});
  	}
}

export default Menu;