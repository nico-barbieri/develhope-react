function Welcome({name = 'World', age}) {
    return <>
    <p>Hello, {name}!</p>
    {age && <p>Your age is {age}</p>}
    </>
}

export default Welcome;