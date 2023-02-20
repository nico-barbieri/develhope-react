import { useState } from "react";

const useLogin = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    const handleInput = e => {
        const {name, value, type, checked} = e.target;
        setData(state => {
            return {
                ...state, 
                [name]: type=='checkbox' ? checked : value, 
            }
        })
    } 

    return {
        data,
        handleInput,
    }
}

export default useLogin;