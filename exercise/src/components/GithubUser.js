import useGithubUser from "../hooks/useGithubUser";

function GithubUser({username}){

    const {user} = useGithubUser(username);
    
    return (
        <div>
            {user? <h1>{user.name}</h1>
            :<p>User not found</p>}
        </div>
    )
}

export default GithubUser;