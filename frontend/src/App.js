import React, { Component } from 'react';
import logo from './logo.svg';
import Title from './Title';
import './App.css';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Title />
        <List />
      </div>
    );
  }
}

export default App;
