import { useState } from "react";
import UncontrolledLogin from "./components/UncontrolledLogin";

function App() {
    const [state, setState] = useState({
        name: '',
        password: '',
        remember: false,
    })
    
    const onLogin = (user) => {
        setState(state => {
            return {
                ...state,
                name: user.name,
                password: user.password,
                remember: user.remember,
            }
        })
    }

    return <>
        <UncontrolledLogin onLogin={onLogin}/>
        {(state.name && <div>
            <h1>Hello {state.name}</h1>
            <p>Your password is {state.password}</p>
            <p>You have{!state.remember && <>n't</>} checked the box</p>
        </div>)}
    </>
}

export default App;