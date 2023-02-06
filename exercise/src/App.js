import { useState } from "react";
import Counter from "./components/Counter";

function App() {
    const [state, setState] = useState({
        play: true,
    })

    const handlePlayStop = () => {
        setState(state => {
            return {
                ...state,
                play: !state.play,
            }
        })
    }
    
    return <>
        {state.play && <Counter />}
        <button 
        onClick={handlePlayStop}>
            {state.play? 'stop' : 'play'}
        </button>
    </>
}

export default App;