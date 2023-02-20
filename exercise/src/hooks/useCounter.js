import { useState } from "react";

const useCounter = (initialValue = 0, step = 1) => {
    const [value, setValue] = useState(initialValue)

    const handleIncrement = () => {
        setValue(value => value + step)
    } 

    const handleReset = () => {
        setValue(initialValue)
    }

    const setInitialValue = (value) => {
        setValue(value)
    }
    return {
        counterValue: value,
        onIncrement: handleIncrement,
        onReset: handleReset, 
        setInitialValue: setInitialValue,
    }
}

export default useCounter;