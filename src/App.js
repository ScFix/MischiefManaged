import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from "./Component/Navigation/Navigation"

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
        {this.props.children}
      </div>
    );
  }
}
export default App;
