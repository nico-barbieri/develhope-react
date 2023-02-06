import Age from "./Age";

//Since I used functions instead of classes in the previous exercises too, 
//I leave the component written as a class in the following comment:

/* import { Component } from 'react'

export default class Welcome extends Component{
    render() {
        return <>
        <p>Hello, <strong>{this.props.name}</strong>!</p>
        {this.props.age && <Age age={this.props.age} />}
    </>
    }
}

Welcome.defaultProps = {
    name: 'World',
} */


function Welcome({name = 'World', age}) {
    return <>
    <p>Hello, <strong>{name}</strong>!</p>
    {age && <Age age={age} />}
    </>
}

export default Welcome;