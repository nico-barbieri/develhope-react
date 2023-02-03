function Age({age}) {
    return <>
    {(age>18)
        ?<p>Your age is {age}</p>
        :<p>You are very young!</p>}
    </>
}

export default Age;