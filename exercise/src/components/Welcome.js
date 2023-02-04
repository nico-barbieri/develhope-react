function Welcome({name}) {
    return <p>
        Hello{
            name && <span>, {name}</span>
        }!
        </p>
}

export default Welcome;