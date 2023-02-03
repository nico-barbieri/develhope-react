import {Component} from 'react'
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
    state = {
        count: this.props.initialValue,
    }
    //Instead of setting the interval in the constructor we can
    //set it when the component is rendered for the first time
    //as it follows:
    componentDidMount() {
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