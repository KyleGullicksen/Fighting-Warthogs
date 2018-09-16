import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App'
import Information from './Information'
import Submit from './Submit'
import Report from './Report'
import Feedback from './Feedback'

class Main extends Component {
    render() {
        return (
          <div>
            <Router>
              <div>
                <Route exact path="/" component={App} />
                <Route exact path="/info" component={Information} />
                <Route exact path="/submit" component={Submit} />
                <Route exact path="/report" component={Report} />
                <Route exact path="/feedback" component={Feedback} />
              </div>
            </Router>
          </div>
        );
      }
    }
    
    export default Main;    