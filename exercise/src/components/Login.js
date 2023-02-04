import {useState} from 'react';

function Login() {
    const [state, setState] = useState({
        name: '',
        password: '',
        remember: false,
    });

    const handleInput = (e) => {
        const {name, type, value, checked} = e.target;
        setState(
            {
                [name]: (type === 'checkbox') ? checked : value
            }
        )
    }
    return <>
        <input name='name' value={state.name} onChange={handleInput} />
        <input name='password' type='password' value={state.password} onChange={handleInput} />
        <input name='remember' type='checkbox' value={state.remember} onChange={handleInput} />
    </>
}

export default Login;