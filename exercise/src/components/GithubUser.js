import { useState } from "react";
import useGithubUser from "../hooks/useGithubUser";

function GithubUser({username}){
    const [newUsername, setNewUsername] = useState('');

    const {user, err, loading, fetchUser} = useGithubUser(username);
    
    const handleClick = () => {
        username = newUsername
        fetchUser(username)
    }

    const handleInput = e => {
        const {value} = e.target;
        setNewUsername(value)
    }


    return (
        <>
            {!loading
            ? <div>
                {user && <>
                <h1>{user.name? user.name : username}</h1>
                <img src={user.avatar_url}></img>
                </>}
                {err && <p>{err.message}</p>}
            </div>
            : <p>loading...</p>}
            <button onClick={handleClick}>load user</button>
            <input onInput={handleInput} value={newUsername} placeholder='enter a github username'/>
        </>
    )
}

export default GithubUser;