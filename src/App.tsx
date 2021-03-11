import * as api from 'lib/api';
import * as Pages from 'pages';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import 'styles/App.scss';

function App() {
  useEffect(() => {
    console.log(api.getRequest('/user'));
  }, []);
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
