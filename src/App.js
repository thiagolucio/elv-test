import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
