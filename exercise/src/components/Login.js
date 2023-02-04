import {useState} from 'react';

function Login(prop) {
    const [state, setState] = useState({
        name: '',
        password: '',
        remember: false,
    });

    const handleInput = (e) => {
        const {name, type, value, checked} = e.target;
        setState((state) =>{
            return {
                ...state,
                [name]: (type === 'checkbox') ? checked : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        prop.onLogin(state);
    }

    const handleReset = () => {
        setState((state) =>{
            return {
                ...state,
                name: '',
                password: '',
                remember: false,
            }
        })
    }
    
    return <>
    <form onSubmit={handleSubmit}>
        <input name='name' value={state.name} onChange={handleInput} />
        <input name='password' type='password' value={state.password} onChange={handleInput} />
        <input name='remember' type='checkbox' value={state.remember} onChange={handleInput} />
        <button type='submit' disabled={!state.name || !state.password}>login</button>
        <button onClick={handleReset}>reset</button>
    </form>
    </>
}

export default Login;