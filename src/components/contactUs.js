import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
var server = 'http://localhost:3001',
    $ = require('jquery-ajax');

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMailingList = this.handleMailingList.bind(this);
    }

    handleSubmit(event) {
        var data = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            color: this.state.color,
            message: this.state.message
        };
        $.ajax({
            type: 'POST',
            url: server + '/contactUs',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            dataType:'json'
        })
        .done(function(data) {
            //TODO: implement clearForm and success message.
            //self.clearForm()
            console.log('success!');
        })
        .fail(function(jqXhr) {
            console.log('failed to register');
        });
        event.preventDefault();
    }

    handleMailingList(event) {
        var data = {
            email: this.state.mailingListEmail
        };
        $.ajax({
            type: 'POST',
            url: server + '/subscribeToMailer',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            dataType:'json'
        })
        .done(function(data) {
            //self.clearForm()
            console.log('success!');
        })
        .fail(function(jqXhr) {
            console.log('failed to register');
        });
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
                                    <label htmlFor="nameInput">Name</label>
                                    <input type="text" className="form-control text-muted" id="nameInput" value={this.state.name} onChange={this.handleChange('name')} placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailInput">Email</label>
                                    <input type="email" className="form-control text-muted" id="emailInput" value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" autoComplete="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNumberInput">Phone Number</label>
                                    <input type="text" className="form-control text-muted" id="phoneNumberInput" value={this.state.phoneNumber} onChange={this.handleChange('phoneNumber')} placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="genderSelect">Preferred Gender</label>
                                    <select id="genderSelect" className="form-control text-muted" value={this.state.gender} onChange={this.handleChange('gender')}>
                                        <option value="Unselected">Choose a gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="NoPref">No Preference</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="colorSelect">Preferred Color</label>
                                    <select id="colorSelect" className="form-control text-muted" value={this.state.color} onChange={this.handleChange('color')}>
                                        <option value="Unselected">Choose a color</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Bronze">Bronze</option>
                                        <option value="Smoke">Smoke</option>
                                        <option value="NoPref">No Preference</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="messageTextArea">Message</label>
                                    <textarea id="messageTextArea" className="form-control text-muted" value={this.state.message} onChange={this.handleChange('message')} placeholder="Message" />
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-3">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12"><hr/></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">&nbsp;</div>
                        <div className="col-sm-6">
                           <form className="form-inline" onSubmit={this.handleMailingList}>
                                <div className="form-group">
                                    <label htmlFor="mailingListInput">Subscribe to mailing list: &nbsp;</label>
                                    <input type="email" className="form-control text-muted" id="mailingListInput" value={this.state.mailingListEmail} onChange={this.handleChange('mailingListEmail')} placeholder="Email" autoComplete="email" />
                                </div>
                                &nbsp;
                                <button type="submit" className="btn btn-default" onClick={this.handleMailingList}>Subscribe</button>
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