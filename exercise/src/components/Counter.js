import { useEffect, useState } from "react";

function Counter() {
    const [state, setState] = useState({
        count: 0,
    })

    useEffect(() => {
        console.log('mounting - initializing the interval...');
        const counterInterval = setInterval(() => {
            setState((state) => {
                return {
                    count: state.count + 1
                }
            })
        }, 1000);

        return() => {
            console.log('unmounting - clearing the interval...');
            clearInterval(counterInterval)
        }
    }, [])


    return <h1>{state.count}</h1>

}

export default Counter;