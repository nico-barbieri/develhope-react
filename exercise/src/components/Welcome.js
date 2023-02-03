import Age from "./Age";

function Welcome({name = 'World', age}) {
    return <>
    <p>Hello, {<strong>{name}</strong>}!</p>
    {(age>18 && age<65 && name=='John') && <Age age={age} />}
    </>
}

export default Welcome;