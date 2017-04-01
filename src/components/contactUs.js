import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

var server = 'http://localhost:3001',
    $ = require('jquery-ajax'),
    errorCssClasses = 'text-danger background-white',
    _this;

class ContactUs extends Component {
    constructor(props) {
        super(props);
        _this = this;
        _this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            gender: 'Unselected',
            color: 'Unselected',
            message: '',
            successMessage: '',
            successMailingMessage: '',
            messageCss: '',
            messageMailingCss:'',
            subscribeToMailer: true
        };
    }

    handleSubmit(event) {
        var payload = {
            name: _this.state.name,
            email: _this.state.email,
            phoneNumber: _this.state.phoneNumber,
            gender: _this.state.gender,
            color: _this.state.color,
            message: _this.state.message
        };
        _this.clearLabels();
        $.ajax({
            type: 'POST',
            url: server + '/contactUs',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(payload),
            dataType:'json'
        })
        .done(function(data) {
            if(_this.state.subscribeToMailer) {
                _this.subscribeToMailerService(payload)
                    .done(function(data) {
                        _this.clearForm();
                        _this.setState({
                            successMessage: 'Form Successfully Submitted!'
                        }); 
                    })
                    .fail(function(jqXhr) {
                        _this.setState({
                            successMessage: 'Error submitting form (subscribing)! If the problem persists email platinummaus@gmail.com.',
                            messageCss: errorCssClasses
                        });
                    });
            } else {
                _this.clearForm();
                _this.setState({
                    successMessage: 'Form Successfully Submitted!'
                }); 
            }
            
        })
        .fail(function(jqXhr) {
            _this.setState({
                successMessage: 'Error submitting form! If the problem persists email platinummaus@gmail.com.',
                messageCss: errorCssClasses
            });
        });
        event.preventDefault();
    }

    handleMailingList(event) {
        var data = {
            email: _this.state.mailingListEmail
        };
        _this.clearLabels();
        _this.subscribeToMailerService(data)
            .done(function(data) {
                _this.clearMailingForm();
                _this.setState({
                    successMailingMessage: 'Successfully Subscribed To Mailing List!',
                });
            }).fail(function(jqXhr) {
                _this.setState({
                    successMailingMessage: 'Error Subscribing To Mailing List!  If the problem persists email platinummaus@gmail.com.',
                    messageMailingCss: errorCssClasses
                });
            });
        event.preventDefault();
    }

    subscribeToMailerService(postData) {
        return $.ajax({
            type: 'POST',
            url: server + '/subscribe',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(postData),
            dataType:'json'
        });
    }

    handleChange(key, checked) {
        return function (e) {
            var state = {};
            state[key] = checked ? e.target.checked : e.target.value;
            _this.setState(state);
        };
    }

    clearForm() {
        _this.setState({
            name: '',
            email: '',
            phoneNumber: '',
            gender: 'Unselected',
            color: 'Unselected',
            message:''
        });
    }

    clearMailingForm() {
        _this.setState({
            mailingListEmail: ''
        });
    }

    clearLabels() {
        _this.setState({
            successMessage: '',
            successMailingMessage: '',
            messageCss: '',
            messageMailingCss: ''
        });
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
                        <div className="col-sm-6 text-center">
                            <h4 className={this.state.messageCss}>{this.state.successMessage}</h4>
                        </div>
                        <div className="col-sm-3">&nbsp;</div>
                    </div> 
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
                                <div className="checkbox text-center">
                                    <label>
                                      <input type="checkbox" checked={this.state.subscribeToMailer} onChange={this.handleChange('subscribeToMailer', true)}/> Subscribe to mailing list
                                    </label>
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
                        <div className="col-sm-6 text-center">
                            <h4 className={this.state.messageMailingCss}>{this.state.successMailingMessage}</h4>
                        </div>
                        <div className="col-sm-3">&nbsp;</div>
                    </div> 
                    <div className="row">
                        <div className="col-sm-3">&nbsp;</div>
                        <div className="col-sm-6 text-center">
                            <h4>Subscribe to mailing list for updates on future litters.</h4>
                        </div>
                        <div className="col-sm-3">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">&nbsp;</div>
                        <div className="col-sm-6 text-center">
                            <form className="form-inline" onSubmit={this.handleMailingList}>
                                <div className="form-group">
                                    <label htmlFor="mailingListInput">Email: &nbsp;</label>
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