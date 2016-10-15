import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from "./Navigation/Navigation"

//these are the components for the app

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Navigation />
        <ul>
          <li>item</li>
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
      </div>
    );
  }
}
export default App;
