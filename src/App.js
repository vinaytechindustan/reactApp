import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  render() {
    const title ='dk';
    return (
      <div>
      <h1> First React </h1>
      <h1> hey {title}</h1>
 
      </div>
    );
  }
}

export default App;
