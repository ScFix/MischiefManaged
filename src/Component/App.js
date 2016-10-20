import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Navigation from "./Navigation/Navigation"

//these are the components for the app

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mischief Managed</h2>
        </div>
        <Navigation />
        <div className='Content'>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}
export default App;
