import { useState } from "react";
import GithubUser from './GithubUser'

const GithubUserList = () => {
    const [state, setState] = useState({
        userList: [],
        usernameToAdd: '',
    });

    const handleInput = e => {
        const {name, value} = e.target;
        setState(state => {
            return {
                ...state,
                [name]: value,
            }
        }) 
    }

    const handleReset = e => {
        e.preventDefault();
        setState({
            userList: [],
            usernameToAdd: '',
        })
    }

    const addUser = e => {
        e.preventDefault();
        const newId = state.userList.length
                    ? state.userList[state.userList.length -1].id + 1 
                    : 1;
                    
        state.userList.push({id: newId, username: state.usernameToAdd});
        setState(state => {
            return {
                ...state,
                usernameToAdd: '',
            }
        })
    }

    const handleRemove = e => {
        const {id} = e.target.dataset;
        const indexOfUser = state.userList.findIndex(user => user.id == id);
        state.userList.splice(indexOfUser, 1)
        setState(state => {
            return {
                ...state,
            }
        })        
    }

    const renderUsers = (list) => {
        return list.map(user =>
            <div key={user.id} className='user-container'>
                <h2>{user.username}:</h2>
                <GithubUser username={user.username} />
                <button data-id={user.id} onClick={handleRemove}>REMOVE</button>
            </div>
        )
    }


    return <>
        <div className="header">
            <h1>Github Users</h1>
            <form onSubmit={addUser}>
                <div className="input-container">
                    <input 
                        name='usernameToAdd' 
                        value={state.usernameToAdd} 
                        onInput={handleInput} 
                        placeholder='Github user-name'
                    />
                </div>
                <button type="submit" disabled={!state.usernameToAdd}>ADD</button>
                <button onClick={handleReset}>RESET</button>
            </form>
        </div>
        <div className="users-container">{
            state.userList.length 
            ? renderUsers(state.userList)
            : 'Enter a valid username in the input field to display his information in this list'
        }</div>
     </>
}

export default GithubUserList;