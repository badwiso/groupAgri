import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Client from './Client';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/client" component={Client} />
      </Switch>
    </Router>
  );
}
