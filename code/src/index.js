import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Resume from './resume/Resume.js';
import { Router, Route, Link, browserHistory } from 'react-router';
import NoMatch from './nomatch/NoMatch';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            {/*child path here*/}
            {/*<Route path="/resume" component={Resume}/>*/}
        </Route>
        <Route path="/resume" component={Resume}/>
        <Route path="*" component={NoMatch}/>
    </Router>,
  document.getElementById('root')
);
