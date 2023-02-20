import { useState } from "react";
import useLogin from "../hooks/useLogin"

const Login = () => {
    const {data, handleInput} = useLogin()
    const [logged, setLogged] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogged(!logged);
    }


    return <div className="form-container">
        <div className="form-value">
            {!logged && 'login to show user info'}
            {logged && <>
            User info: <br/>
            username: {data.username}<br/>
            password: {data.password}<br/>
            remember informations? {data.remember? 'yes' : 'no'}<br/>
            </>}
        </div>
        <form onSubmit={handleSubmit} className="form">
            <div className="form-fields">
                <span>Username:
                <input 
                    onInput={handleInput} 
                    value={data.username} 
                    name='username' 
                    required
                    disabled={logged}
                />
                </span>
                <span>Password
                <input 
                    type='password'
                    onInput={handleInput}
                    value={data.password}
                    name='password'
                    required
                    disabled={logged}
                />
                </span>
            </div>
            <span>Check the box to remember your informations:
            <input 
                type="checkbox"
                onChange={handleInput} 
                checked={data.remember} 
                name='remember'
                disabled={logged}
            />
            </span>
            <button type="submit">
                {logged? 'logout' : 'login'}
            </button>
        </form>
    </div>
}

export default Login;