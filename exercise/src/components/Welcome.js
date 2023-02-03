import Age from "./Age";

function Welcome({name = 'World', age}) {
    return <>
    <p>Hello, {name}!</p>
    {(age>18 && age<65) && <Age age={age} />}
    </>
}

export default Welcome;