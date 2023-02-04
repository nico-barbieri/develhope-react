function UncontrolledLogin(prop) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        prop.onLogin({
            name: e.target.elements.name.value,
            password: e.target.elements.password.value,
            remember: e.target.elements.remember.checked,
        });
    }
    
    return <>
    <form onSubmit={handleSubmit}>
        <input name='name' required autoFocus/>
        <input name='password' type='password' required />
        <input name='remember' type='checkbox'/>
        <button type='submit'>login</button>
        <button type="reset">reset</button>
    </form>
    </>
}

export default UncontrolledLogin;