import {useState} from 'react'

function ClickTracker(state) {
    const [lastClicked, setLastClicked] = useState('') 

    const handleClick = (event) => {
        let name = event.target.name;
        console.log(event.target);
        setLastClicked(name);
    }

    return <>
            <button name="blue" onClick={handleClick} style={{background:'rgb(20,80,180)'}}>
                BLUE
            </button>
            <button name="yellow" onClick={handleClick} style={{background:'rgb(200,150,0)'}}>
                YELLOW
            </button>
            <button name="red" onClick={handleClick} style={{background:'rgb(180,10,20)'}}>
                RED
            </button>
            {lastClicked
            ? <h1>You clicked {lastClicked} button!</h1>
            : <h1>Click one button</h1>
            }
        </>

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
}

export default ClickTracker;