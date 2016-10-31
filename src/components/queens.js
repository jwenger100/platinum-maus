import React, { Component } from 'react';
import Amelia1 from '../assets/images/Amelia1.jpg'
import NatAndAmelia1 from '../assets/images/NatAndAmelia1.jpg'

class Queens extends Component {
  render() {
    return (
      <div className="w3-row-padding">
        <div className="w3-half">
          <img src={Amelia1} role="presentation" className="pictureLeftColumn"></img>
          <img src={NatAndAmelia1} role="presentation" className="pictureLeftColumn"></img>
        </div>
        <div className="w3-half">
          <div className="fancyHeading">Amelia Mauheart</div>
          <p>Amelia Mauheart is a one of a kind mau. She was born on July 23rd, 2016 and came to live with us in October 2016.
            Amelia is a beautiful mau with extremely well-defined markings. Her Egyptian heritage is clear. Amelia's personality is 
            absolutely divine, she is extremely sweet and will warm your heart in an instant.</p>
        </div>
      </div>
    );
  }
}

export default Queens;