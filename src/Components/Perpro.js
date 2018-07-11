import React from 'react';
import Person from './Person';
const perpro=(props)=>props.persons.map((person,index)=>{
    return <Person 
        click={()=>props.click(index)} 
        name={person.name} 
        age={person.age} key={person.id} 
        chan={(event)=>props.changed(event,person.id)}>
    </Person>

}); 
export default perpro;