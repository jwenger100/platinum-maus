import React, { Component } from 'react';
import Boy1 from '../assets/images/boy1.jpg'
import Boy2 from '../assets/images/boy2.jpg'
import Boy3 from '../assets/images/boy3.jpg'

class Kittens extends Component {
  render() {
    return (
        <div>
            <div className="w3-row w3-padding-8">
              <div className="w3-col s6 w3-center">
                <img src={Boy1} role="presentation" className="pictureLeftColumn"></img>
              </div>
              <div className="w3-col s6 w3-center">
                <div className="fancyHeading">Next Litter Expected - March 2020 <br/></div>
                <div>Please send us an email to get added to mailing list, we will notify when the next litter arrives!</div>
                {/* <div className="fancyHeading">Next Litter Expected - March 2020 <br/><br/><br/><br/> Boy 1</div> */}
              </div>
            </div>
            {/* <div className="w3-row w3-padding-8">
              <div className="w3-col s6 w3-center">
                <img src={Boy2} role="presentation" className="pictureLeftColumn"></img>
              </div>
              <div className="fancyHeading w3-col s6 w3-center w3-margin-top-large">Boy 2</div>
            </div>
            <div className="w3-row w3-padding-8">
              <div className="w3-col s6 w3-center">
                <img src={Boy3} role="presentation" className="pictureLeftColumn"></img>
              </div>
              <div className="fancyHeading w3-col s6 w3-center w3-margin-top-large">Boy 3</div>
            </div> */}
        </div>
    );
  }
}

export default Kittens;