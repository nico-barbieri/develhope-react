import Age from "./Age";

function Welcome({name = 'World', age}) {
    return <>
    <p>Hello, {name}!</p>
    <Age age={age} />
    </>
}

export default Welcome;