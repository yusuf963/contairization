import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Fib } from './Fib'
import { FibForm } from './FibForm'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit and more and really more <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other page</Link>
          <Route exact path='/' component={Fib} />
          <Route exact path='/otherpage' component={FibForm} />
        </header>
      </div>
    </Router>
  );
}

export default App;
