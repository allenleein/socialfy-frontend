import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Auth from './containers/Auth';
import User from './containers/User';

import Header, {
  HeaderContext,
  HeaderContextProvider,
} from './components/header';

import { Firebase } from './helpers';
import config from './config';

Firebase.initialize();

const App = () => (
  <Router>
    <HeaderContextProvider>
      <Header />
      <Switch>
        <Route exact path={config.routes.HOME} component={Home} />
        <Route path={config.routes.AUTH} component={Auth} />
        <Route path="/:userId" component={User} />
        <Route path="*" component={() => <p>no match</p>} />
      </Switch>
    </HeaderContextProvider>
  </Router>
);

export default App;
