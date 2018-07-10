import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  state={
    persons:[{name:"Shashwat",age:5},{name:"Sandeep Kumar",age:12},{name:"sahil",age:15}],
    showme:true,
  }
  nameHandler=(nam)=>{
    this.setState({ persons:[{name:nam,age:5},{name:"Sandeep Kumar",age:12},{name:"sahil",age:995}]});
    console.log("button was clicked");
  }
  toggleHandler=()=>{
    const togs=this.state.showme;
    this.setState({showme:!togs});
    
  }
  render() {
    const title ='dk';
    return (
      <div>
      <h1> First React </h1>
      <h1> hey {title}</h1>
      <button onClick={this.toggleHandler}>Click </button>
      { 
        this.state.showme ?
          <div>
            {this.state.persons.map(
              person=>{
                return <Person name={person.name} age={person.age}></Person>
              }
            )}
        {/*   <Person className="App" name={this.state.persons[0].name} age={this.state.persons[0].age}> I am feeling good </Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={()=>this.nameHandler('Max')}> </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> </Person>
  */}         </div>: null
      }
          </div> 
      
    );
  }
}

export default App;
