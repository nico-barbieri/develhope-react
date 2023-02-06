import { useEffect, useState } from "react"

function ClickCounter(props) {
    const [state, setState] = useState({
        count: props.initialValue,
    })

    const handleCountChange = useEffect(()=> {
        props.onCountChange(state.count)
    }, [state.count]);
        
    const handleCounterClick = () => {
        setState((state) => {
            return {
                count: state.count + props.incrementBy
            }
        })
    }
    
    return <>
        <h1>Count: {state.count}</h1>
        <button onClick={handleCounterClick}>
            {(props.incrementBy >= 0)
                ? <>ADD {props.incrementBy}</>
                : <>SUBTRACT {props.incrementBy * -1}</>}
        </button>
        <p>{handleCountChange}</p>
    </>
}

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}

export default ClickCounter;