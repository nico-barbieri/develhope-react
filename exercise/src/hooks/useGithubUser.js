import { useEffect, useState } from "react";

const useGithubUser = (username) => {
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(false)


    const fetchUser = (username) => {
        setLoading(true);
        setErr(null);
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
        })
        .catch(error => {
            setErr(error),
            setUser(null)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchUser(username)
    },[username])

    return {
        user, err, loading, fetchUser
    }
}

export default useGithubUser
