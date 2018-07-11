import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  state={
    persons:[{id:"kd",name:"Shashwat",age:5},{id:"bd",name:"Sandeep Kumar",age:12},{id:"dd",name:"sahil",age:15}],
    showme:true,
  }
/*   nameHandler=(nam)=>{
    this.setState({ persons:[{name:nam,age:5},{name:"Sandeep Kumar",age:12},{name:"sahil",age:995}]});
    console.log("button was clicked");
  } */
  toggleHandler=()=>{
    const togs=this.state.showme;
    this.setState({showme:!togs});
    
  }

  deletePersonHandler=(index)=>{
    const persons=[...this.state.persons];
    persons.splice(index,1);
    this.setState({persons})

  }
  changeHandler=(event,id)=>{
   var pIndex=this.state.persons.findIndex(p=> p.id===id);
   const ersons=[...this.state.persons];
    var  person=ersons[pIndex];
    console.log(person);
    console.log("index value "+pIndex);
    person.name=event.target.value;
    ersons[pIndex]=person;
    this.setState({persons:ersons}); 
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
              (person,index)=>{
                return <Person click={()=>this.deletePersonHandler(index)} name={person.name} 
                age={person.age} key={person.id} chan={(event)=>this.changeHandler(event,person.id)}></Person>
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
