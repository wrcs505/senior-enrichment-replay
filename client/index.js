import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllAircrafts from './components/AllAircrafts.js';

ReactDOM.render(
  <Router>
    <Switch>
        <Route exact path="/" component={AllAircrafts}/>
    </Switch>
  </Router>,
  document.getElementById('app')
);