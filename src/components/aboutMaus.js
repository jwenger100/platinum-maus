import React, { Component } from 'react';
import Jaimie from '../assets/images/Jaimie.jpg'

class AboutMaus extends Component {
  render() {
    return (
      <div className="w3-row-padding">
        <div className="w3-half">
          <img src={Jaimie} role="presentation" className="pictureLeftColumn"></img>
        </div>
        <div className="w3-half">
          <div className="fancyHeading">About us</div>
          <p>The Egyptian Mau is believed to be the oldest breed of cat, descended from the highly regarded and worshipped cats of Ancient Egypt. 
              The wild exotic look of the modern Egyptian Mau is practically identical those of the paintings, statues, and other records left behind by the Ancient Egyptians. 
              They have long lean and muscular bodies, and a skin fold behind their hind legs similar to a cheetah, allowing them to be the fastest domesticated cat. 
              The lineage of the Maus today can be traced back to three kittens given to Natalie Troubetskaya, a Russian Princess, in 1952 by the ambassador to Egypt.</p>
          <p>Egyptian Maus are extremely intelligent and curious. Is it not uncommon for a Mau to be taught tricks such as sit, lay down, roll over, fetch, or to learn to open a door. 
              Many describe the Mau personality as more dog like than cat. Some even play in water and carry off their toys and hide them. The Mau is also known for its loyalty. 
              Often they will pick one person to be "their" person. The Mau can be timid of new situations, but once they are comfortable they demand for attention and adoration. </p>
          <p>The Egyptian Mau typically has a distinct chirp or chortle rather than a meow, and they will “talk” to you as long as you are talking back. 
             Maus also sometimes will vibrate their tail when they are in a very good mood.</p>
          <p>Maus have very short hair and while not being hypoallergenic, they tend to shed very little and are known to be easy on allergies. 
             The Egyptian Mau is generally a very healthy breed with a long life expectancy of up to 18 years. It is recommended that a Mau have plenty of room to run,
             and things to keep them stimulated such as toys and scratching trees. Their intelligence and curiosity make them a fun and entertaining part of the family,
             and their distinct personality and loyalty make them a wonderful life long companion.</p>
        </div>
      </div>
    );
  }
}

export default AboutMaus;














