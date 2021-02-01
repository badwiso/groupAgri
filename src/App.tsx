import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Client from './Client';

const Bob = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('hi!!!');
    // document.location.pathname = "/";
  };
  return (
    <div>
      <div>Hi I am Bob</div>
      <button type="button" onClick={handleClick}>
        click Me
      </button>
    </div>
  );
};
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/client" component={Client} />
        <Route path="/" component={Bob} />
      </Switch>
    </Router>
  );
}
