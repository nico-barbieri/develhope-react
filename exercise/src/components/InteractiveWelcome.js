import Welcome from "./Welcome";
import {useState} from 'react';

function InteractiveWelcome() {
    const [state, setState] = useState({
        name: '',
    });

    const handleInput = (e) => {
        const {name, value} = e.target;
        setState(
            {
                [name]: value
            }
        )
    }
    return <>
        <input name='name' value={state.name} onChange={handleInput} />
        <Welcome name={state.name}/>
    </>
}

export default InteractiveWelcome;