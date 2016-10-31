import React, { Component } from 'react';
import James1 from '../assets/images/James1.jpg'
import James2 from '../assets/images/James2.jpg'

class Studs extends Component {
  render() {
    return (
        <div className="w3-row-padding">
            <div className="w3-half">
              <img src={James2} role="presentation" className="pictureLeftColumn"></img>
              <img src={James1} role="presentation" className="pictureLeftColumn"></img>
            </div>
            <div className="w3-half">
              <div className="fancyHeading">James</div>
              <div>
                  <p>James really is the star of show. Imported from London in 2012 he settled in quickly as a member of the family. 
                    He was born May 23rd, 2012, from a long line of Grand Champions, Supreme Grand Champions, and FIFE European and International Champions. 
                    James has impeccably defined markings on a polished thick silver coat. His coat is naturally soft and silky and his posture often resembles
                    that of a cheetah or other wild cat. James is extremely affectionate, and will headbutt anyone who looks his direction, including the dog and the other cats. 
                    He kneads with his paws in midair as he walks, or when he’s being held. He seems to prance more than walk, and chirps when he doesn’t feel he’s receiving enough attention. 
                    He is patient with the kittens, and seems continuously confident in himself. He has a special place in our hearts and we couldn’t be more delighted to have him.</p>
              </div>
            </div>
        </div>
    );
  }
}

export default Studs;