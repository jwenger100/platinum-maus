import React, { Component } from 'react';
import KittenCare from '../assets/images/kitten-care.jpg'

class NewKitten extends Component {
  render() {
    return (
      <div className="w3-row-padding">
        <div className="w3-half">
          <img src={KittenCare} role="presentation" className="pictureLeftColumn"></img>
        </div>
        <div className="w3-half">
          <div className="fancyHeading">Tips for caring for your new kitten</div>
          <p>Adding a new member to your family can be one of the most exciting times. Raising your kitten well and providing a healthy and stimulating environment, 
          as well as vetrinary care, is critically important. The first few days in a kittens new home can be both exciting and daunting, 
          below are some things you can do to prepare for your kittens arrival.</p>
          <ul>
            <li>Have at least one clean litter box ready. Many cats will not use a box that is already claimed by another animal, 
            if you have more than one cat in your family its best to have at least one for each.</li>
            <li>Have fresh food and clean water available at all times in a location that is easy for your kitten to get to. 
            It's a common misconception that cats will overeat to their detriment, unless you have a cat that is overweight 
            or under the care of a veterinarian its best to have fresh food and water always available.</li>
            <li>Kittens love to play! Having a scratching post ready and a few toys will ensure your kitten expresses this energy in appropriate ways.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NewKitten;



