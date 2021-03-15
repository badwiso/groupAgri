import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.global.css';
// import './tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleUp,
  faAngleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faSquare,
  faCheck,
  faCaretUp,
  faCaretDown,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Client from './Client';
import Sidenav from './components/Sidenav';
import Region from './Region';
import Session from './Session';

library.add(
  faAngleUp,
  faAngleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faSquare,
  faCheck,
  faCaretUp,
  faCaretDown,
  faSearch
);

export default function App() {
  return (
    <Router>
      <Sidenav routes={['/client', '/region', '/session']} />
      <Switch>
        <Route path="/client" component={Client} />
        <Route path="/region" component={Region} />
        <Route path="/session" component={Session} />
        <Redirect from="/" to="/client" />
      </Switch>
    </Router>
  );
}
