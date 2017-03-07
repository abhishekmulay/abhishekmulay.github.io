import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './homepage/HomePage.js';
import Resume from './resume/Resume.js';

class App extends Component {
    render() {
        return (
            <div>
                {/*<HomePage></HomePage>*/}
                <Resume></Resume>
            </div>
        );
    }
}

export default App;
