import Age from "./Age";

function Welcome({name = 'World', age}) {
    return <>
    <p>Hello, {name}!</p>
    {age && <Age age={age} />}
    </>
}

export default Welcome;