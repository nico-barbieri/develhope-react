import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GithubUser({username}){

    const [user, setUser] = useState(null)

    const fetchUser = async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const json = await response.json();
                setUser(json);
            } else {
                throw new Error(`No user named ${username} found`);
            }
        } catch (error) {
            console.warn(error);
            setUser(null);
        }

    }

    useEffect(() => {
        fetchUser(username)
    },[username])
    
    return <>
        {user
        ? <div className="user-wrapper">
            <div className="propic-container">
                <img src={user.avatar_url}/>
            </div>
            <div className="user-info">
                <h3>Name: <a href={user.html_url}>{user.name? user.name : username}</a></h3>
                {user.bio && <p>{user.bio}</p>}
            </div>
            <Link to='/users'>Return</Link>        
        </div>
        :<div>
            <p className="user-not-found">User not found</p>
            <Link to='/users'>Return</Link>        
        </div>
        }
    </>
}

export default GithubUser;