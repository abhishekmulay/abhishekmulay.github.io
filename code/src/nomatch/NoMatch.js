/**
 * Created by abhishek on 3/6/17.
 */


import React, {Component} from 'react';

class NoMatch extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-xs-6 col-xs-offset-3">
                    <h1  className="text-center">You entered wrong wormhole!</h1>
                </div>
                <div className="col-xs-12 text-center">
                    <h4 className="text-center"> Let's get back to  <a href="/">Mother Earth</a></h4>
                </div>
            </div>
        );
    }
}

export default NoMatch;
