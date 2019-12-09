import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import cx from 'classnames';

// var $ = require('jquery-ajax'),
var
    server = 'http://localhost:3001',
    errorCssClasses = 'text-danger background-white',
    _this;

class SubscriberList extends React.Component {
    constructor(props) {
        super(props);
        _this = this;

        _this.state = {
             subscribers: [],
             messageCss: '',
             userMessage: ''
        };
    }

    componentDidMount() {
        // $.ajax({
        //     type: 'GET',
        //     url: server + '/subscribers'
        // }).then(res => {     
        //     if(res.subscribers) {
        //         _this.setState({
        //             subscribers: res.subscribers
        //         });
        //     }
        // })
    }

    handleRemoveEntry(emailAddress) {
        var data = {
            email: emailAddress
        };
        _this.subscribeToMailerService(data)
            .done(function(data) {
                var updatedSubsribers = _this.state.subscribers.filter(function(item) {
                    return item.emailAddress !== emailAddress;
                });
                _this.setState({
                    subscribers: updatedSubsribers
                })
                _this.setState({
                    userMessage: 'Successfully removed from Mailing List!',
                });
            }).fail(function(jqXhr) {
                _this.setState({
                    userMessage: 'Error being removed from Mailing List!  If the problem persists email platinummaus@gmail.com.',
                    messageCss: errorCssClasses
                });
            });
    }

    subscribeToMailerService(postData) {
        // return $.ajax({
        //     type: 'POST',
        //     url: server + '/unsubscribe',
        //     contentType: 'application/json; charset=utf-8',
        //     data: JSON.stringify(postData),
        //     dataType:'json'
        // });
    }

    render() {
        return (
            <div>
                
                <div className="text-center fancyHeading" ><h1>Subscribers</h1></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">&nbsp;</div>
                        <div className="col-sm-6 text-center">
                            <h4 className={this.state.messageCss}>{this.state.userMessage}</h4>
                        </div>
                        <div className="col-sm-3">&nbsp;</div>
                    </div> 
                    <div className="row">
                        <div className="col-sm-2">&nbsp;</div>
                        <div className="col-sm-2 text-center">
                            <h4>#</h4>
                        </div>
                        <div className="col-sm-2 text-center">
                            <h4>Email Address</h4>
                        </div>
                        <div className="col-sm-2 text-center">
                            <h4>Name</h4>
                        </div>
                        <div className="col-sm-2 text-center">
                            <h4>Remove</h4>
                        </div>
                        <div className="col-sm-2">&nbsp;</div>
                    </div> 

                    {this.state.subscribers.length > 0 && this.state.subscribers.map((subscriber, index) => 
                        <div key={index+1} className={cx('row top-buffer', { 'row top-buffer bottom-buffer' : index === this.state.subscribers.length-1 })}>
                            <div className="col-sm-2">&nbsp;</div>
                            <div className="col-sm-2 text-center">
                                {index+1}
                            </div>
                            <div className="col-sm-2 text-center">
                                {subscriber.emailAddress}
                            </div>
                            <div className="col-sm-2 text-center">
                                {subscriber.name}
                            </div>
                            <div className="col-sm-2 text-center">
                                <button className="btn btn-default btn-xs" onClick={() => this.handleRemoveEntry(subscriber.emailAddress)}>X</button>
                            </div>
                        </div> 
                    )}

                    
                </div>
            </div>
        );
    }

}

export default SubscriberList;