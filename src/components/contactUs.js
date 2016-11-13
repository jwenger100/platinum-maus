import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert('Test: ' + this.state.name + ' ' + this.state.email);
        event.preventDefault();
    }

    handleChange(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }
  render() {
    return (
        <div>
            <div className="text-center fancyHeading"><h1>Contact Us</h1></div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">&nbsp;</div>
                    <div className="col-sm-6 text-center">
                        <p>Email: platinummaus@gmail.com <br/>
                            Phone: 360-990-9303</p>
                    </div>
                    <div className="col-sm-3">&nbsp;</div>
                </div> 
                <br/>
                <div className="row">
                    <div className="col-sm-3">&nbsp;</div>
                    <div className="col-sm-6">     
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="nameInput">Name</label>
                                <input type="text" className="form-control text-muted" id="nameInput" value={this.state.name} onChange={this.handleChange('name')} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label for="emailInput">Email</label>
                                <input type="email" className="form-control text-muted" id="emailInput" value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" autocomplete="email" />
                            </div>
                            <div className="form-group">
                                <label for="phoneNumberInput">Phone Number</label>
                                <input type="text" className="form-control text-muted" id="phoneNumberInput" value={this.state.phoneNumber} onChange={this.handleChange('phoneNumber')} placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <label for="genderSelect">Preferred Gender</label>
                                <select id="genderSelect" className="form-control text-muted" value={this.state.gender} onChange={this.handleChange('gender')}>
                                    <option value="Unselected">Choose a gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="NoPref">No Preference</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="colorSelect">Preferred Color</label>
                                <select id="colorSelect" className="form-control text-muted" value={this.state.color} onChange={this.handleChange('color')}>
                                    <option value="Unselected">Choose a color</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Bronze">Bronze</option>
                                    <option value="Smoke">Smoke</option>
                                    <option value="NoPref">No Preference</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="messageTextArea">Message</label>
                                <textarea id="messageTextArea" className="form-control text-muted" value={this.state.message} onChange={this.handleChange('message')} placeholder="Message" />
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