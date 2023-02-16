import { useEffect, useState } from "react";

function GithubUser({username}){

    const [data, setData] = useState({})

    const fetchUser = (username) => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response =>{
            return response.json()
        })
        .then(json => {
            setData(json)
        })
    }

    useEffect(() => {
        fetchUser(username)
    },[username])
    
    return (
        <div>
            {data? <h1>{data.user.name}</h1>
            :<p>Something went wrong</p>}
        </div>
    )
}

export default GithubUser;