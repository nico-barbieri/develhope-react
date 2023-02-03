import {Component} from 'react'

class ClickCounter extends Component {
    state = {
        count: this.props.initialValue,
    }
    
    handleCounterClick = () => {
        this.setState((state) => {
            return {
                count: state.count + this.props.incrementBy
            }
        })
    }
    
    render() {
        return <>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleCounterClick}>
                {(this.props.incrementBy >= 0)
                 ? <>ADD {this.props.incrementBy}</>
                 : <>SUBTRACT {this.props.incrementBy * -1}</>}
            </button>
        </>
    }
}

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}

export default ClickCounter;