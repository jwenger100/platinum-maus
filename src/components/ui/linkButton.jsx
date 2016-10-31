import { Link } from 'react-router';
import React from 'react';

export default class LinkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSelected: props.selected, cssClass: props.className};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var cssClass = !this.state.isSelected ? 'w3-light-grey' : '';
    if(cssClass.length > 0) {
        cssClass = cssClass + ' ' + this.state.cssClass;
    } else {
        cssClass = this.state.cssClass.replace('w3-light-grey', '');
    }
    

    this.setState(prevState => ({
      isSelected: !prevState.isSelected,
      cssClass: cssClass
    }));
  }

  render() {
    return (
      <Link onClick={this.handleClick} to={this.props.to} className={this.state.cssClass}>{this.props.linkName}
    </Link>
    );
  }
}