import {useState} from 'react';

function Login() {
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
        console.log(state);;
    }
    
    return <>
    <form onSubmit={handleSubmit} className='form' >
        <input name='name' value={state.name} onChange={handleInput} placeholder='name'/>
        <input name='password' type='password' value={state.password} onChange={handleInput} placeholder='password'/>
        <label htmlFor='remember'>Keep me logged in
            <input id='remember' name='remember' type='checkbox' value={state.remember} onChange={handleInput} />
        </label>
        <button 
            className={(!state.name || state.password.length < 8)? 'submit-not-allowed' : 'submit-allowed'} 
            type='submit' 
            disabled={!state.name || state.password.length < 8}>
                login
        </button>
    </form>
    </>
}

export default Login;