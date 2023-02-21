import { useEffect, useState } from "react";

const useGithubUser = (username) => {
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

    return {
        user: user,
    }
}

export default useGithubUser
