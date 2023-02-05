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
    
    return <>
    <form onSubmit={handleSubmit} className='form' >
        <input name='name' value={state.name} onChange={handleInput} placeholder='name'/>
        <input name='password' type='password' value={state.password} onChange={handleInput} placeholder='password'/>
        <span>Keep me logged in</span>
        <input name='remember' type='checkbox' value={state.remember} onChange={handleInput} />
        <button 
            className={(state.password.length < 8)? 'submit-not-allowed' : 'submit-allowed'} 
            type='submit' 
            disabled={!state.name || state.password.length < 8}>
                login
        </button>
    </form>
    </>
}

export default Login;