import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/MainPage';
// Render the main component into the dom

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
), document.getElementById('app'));
