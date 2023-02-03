import {Component} from 'react'
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
    state = {
        count: this.props.initialValue,
    }
    constructor(props) {
        super(props);

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementBy
                }
            })
        }, 1000);
    }

    render() {
        return <>
            <CounterDisplay count={this.state.count}/>
        </>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}

export default Counter;