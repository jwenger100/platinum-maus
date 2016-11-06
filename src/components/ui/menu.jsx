import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router';

//TODO: If the user already has the page loaded, and they type in a new route, the activeElement does NOT update.
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
	  	//Find initially selected route
	  	var initialSelectedId = 0;
	   	for(var l of this.state.links) {
	   		if(props.pathname === l.to) {
	   			initialSelectedId = l.id;
	   		}
	   	}
	   	this.state.selectedId = initialSelectedId;
	    // This binding is necessary to make `this` work in the callback
	    this.onItemClick = this.onItemClick.bind(this);
  	}

 	render() {
		return (
		  <div className="w3-btn-bar w3-border w3-show-inline-block">
		  	{this.state.links.map(l => {
		  		var currentClass = cx(l.defaultCss, { [this.props.selectedCss] : l.id === this.state.selectedId });
		  		return (
		  			<Link to={l.to} onClick={this.onItemClick.bind(this, l.id)} key={l.id} className={currentClass}>{l.name}</Link>
		  		)}
		  	)}
		  </div>
		);
  	}

 	onItemClick(key) {
 		this.setState({
 			selectedId:key
 		});
  	}
}

export default Menu;