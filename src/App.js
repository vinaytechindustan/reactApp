import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  state={
    persons:[{name:"Shashwat",age:5},{name:"Sandeep Kumar",age:12},{name:"sahil",age:15}]
  }
  nameHandler=()=>{
    this.setState({ persons:[{name:"Vikas",age:5},{name:"Sandeep Kumar",age:12},{name:"sahil",age:995}]});
    console.log("button was clicked");
  }
  render() {
    const title ='dk';
    return (
      <div>
      <h1> First React </h1>
      <h1> hey {title}</h1>
      <button onClick={this.nameHandler}>Click </button>
      <Person className="App" name={this.state.persons[0].name} age={this.state.persons[0].age}> I am feeling good </Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> </Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> </Person>
      </div>
    );
  }
}

export default App;
