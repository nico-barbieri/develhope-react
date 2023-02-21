import { useEffect, useState } from "react";

function GithubUser({username}){

    const [user, setUser] = useState(null)

    const fetchUser = (username) => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response =>{
            if (response.ok) {
                return response.json()
            } else {             
                throw new Error('Something went wrong');
            }
        })
        .then(json => {
            setUser(json)
            console.log(user);
        })
        .catch(error => alert(error));
    }

    useEffect(() => {
        fetchUser(username)
    },[username])
    
    return (
        <div>
            {user? <h1>{user.name}</h1>
            :<p>User not found</p>}
        </div>
    )
}

export default GithubUser;