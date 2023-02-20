import { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter"

const Counter = ({initialValue, step}) => {
    const [state, setState] = useState({
        initialValue: initialValue? initialValue : 0,
        step: step? step : 1,
    })

    const handleChange = e => {
        const {name, value} = e.target;
            setState(state => {
                return {
                    ...state,
                    [name]: (isNaN(Number(value)))? state[name] : Number(value),
                }
            }
        )
    }

    useEffect(() => {
        setInitialValue(state.initialValue)
    }, [state.initialValue])

    const {counterValue, onIncrement, onReset, setInitialValue} = useCounter(state.initialValue, state.step);
    return <div className="counter-container">
        <div className="counter-value">{counterValue}</div>
        <div className="counter-buttons">
            <span>Initial Value:</span><input onChange={handleChange} value={state.initialValue} name='initialValue' placeholder="initial value" pattern="[0-9]+"/>
            <span>Step:</span><input onChange={handleChange} value={state.step} name='step' placeholder="step" pattern="[0-9]+"/>
            <button onClick={onIncrement}>
                {state.step > 0
                    ? <>add {state.step}</> 
                    : <>subtract {state.step * -1}</>
                }
            </button>
            <button onClick={onReset}>RESET</button>
        </div>
    </div>
}

export default Counter;