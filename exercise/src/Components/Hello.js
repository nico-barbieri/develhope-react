import {Component} from 'react'
import Message from './Message'
class Hello extends Component {
    render() {
        return <>
            <h1>Hello, world!</h1>
            <Message />
        </>
    }
}

export default Hello;