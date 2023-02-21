import { useParams } from "react-router-dom";

function Welcome() {
    const {name = 'World'} = useParams();
    return <>
    <h2>Hello, <strong>{name}</strong>!</h2>
    </>
}

export default Welcome;