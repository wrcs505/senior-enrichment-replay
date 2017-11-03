import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
        <Route exact path="/" render={() => (<h1>JUST SETTING THINGS UP!</h1>)} />
    </Switch>
  </Router>,
  document.getElementById('app')
);