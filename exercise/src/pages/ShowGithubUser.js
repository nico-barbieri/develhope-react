import { useParams } from "react-router-dom";
import GithubUser from "../components/GithubUser";

const ShowGithubUser =() => {
    const {username = 'nico-barbieri'} = useParams()

    return <>
        <GithubUser username={username}/>
    </>
}

export default ShowGithubUser;