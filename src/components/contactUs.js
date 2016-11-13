import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleSubmit(event) {
        alert('Test: ' + this.state.name);
        event.preventDefault();
    }

    handleChangeName(event) {
        this.setState( {
            name: event.target.value
        });
    }
  render() {
    return (
        <div>
            <div className="text-center fancyHeading"><h1>Contact Us</h1></div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-right">Email:</div>
                    <div className="col-sm-6">platinummaus@gmail.com</div>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-right">Phone:</div>
                    <div className="col-sm-6">360-990-9303</div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-3">&nbsp;</div>
                    <div className="col-sm-6">     
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="nameInput">Name</label>
                                <input type="text" className="form-control text-muted" id="nameInput" value={this.state.name} onChange={this.handleChangeName} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label for="emailInput">Email</label>
                                <input type="email" className="form-control text-muted" id="emailInput" value={this.state.email} onChange={this.handleChange} placeholder="Email" autocomplete="email" />
                            </div>
                            <div className="form-group">
                                <label for="phoneNumberInput">Phone Number</label>
                                <input type="text" className="form-control text-muted" id="phoneNumberInput" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <label for="sexSelect">Preferred Gender</label>
                                <select id="sexSelect" className="form-control text-muted" value={this.state.sex} onChange={this.handleChange} placeholder="Choose a gender">
                                    <option value="U">Choose a gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="D">No Preference</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="messageTextArea">Message</label>
                                <textarea id="messageTextArea" className="form-control text-muted" value={this.state.message} onChange={this.handleChange} placeholder="Message" />
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-3">&nbsp;</div>
                </div>
            </div>
            <br/>
        </div>
    );
  }
}

export default ContactUs;

// <div className="w3-container">
//             <div className="w3-third">&nbsp;</div>
//             <div className="w3-third">
//                 <h1>Contact Us</h1>
//                 <div className="w3-row">
//                     <div className="w3-col">Email: </div>
//                     <div className="w3-col">platinummaus@gmail.com</div>
//                 </div>
//                 <div className="w3-row">
//                     <div className="w3-col">Phone: </div>
//                     <div className="w3-col">360-990-9303</div>
//                 </div>
//             </div>
//              <div className="w3-third">&nbsp;</div>
//         </div>