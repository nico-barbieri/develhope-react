import { useParams } from "react-router-dom";

function Welcome() {
    const {name = 'World'} = useParams();
    return <>
    <h1>Hello, <strong>{name}</strong>!</h1>
    </>
}

export default Welcome;