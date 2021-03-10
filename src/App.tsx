import { getRequest } from 'lib/axios';
import * as Pages from 'pages';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import 'styles/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Pages.WelcomePage />
        </Route>
        <Route path="*">
          <Pages.NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
