import React, {Component} from 'react';
import '../App.css';
class Person extends Component {
    render(){
        return(
            <p onDoubleClick={this.props.click}> Hey, I am {this.props.name} and {this.props.age } years old !
            {this.props.children}
            </p>
        )
    }
}
export default Person;