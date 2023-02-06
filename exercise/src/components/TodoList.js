import { useState } from "react";

function TodoList() {

    const[state, setState] = useState({
        items: [
            {id: 1, todo: 'learn Javascript', completed: true},
            {id: 2, todo: 'learn React', completed: true},
            {id: 3, todo: 'learn Node', completed: false},
        ],
        newTodo: '',
    })

    const handleInput = (e) => {
        const {name, value} = e.target;
        setState(state => {
            return {
                ...state,
                [name]: value
            }
        })
    }

    const handleNewTodo = (e) => {
        e.preventDefault();
        if (!state.newTodo) return;
        const newID = state.items.length
                    ? state.items[state.items.length - 1].id + 1 
                    : 1;
        state.items.push({id: newID, todo: state.newTodo, completed: false});
        setState(state => {
            return {
                ...state,
                newTodo: '',
            }
        })
    }

    const handleDelete = (e) => {
        const deletedID = Number(e.target.dataset.id);
        const deletedIndex = state.items.findIndex(item => {
            return item.id === deletedID
        });
        state.items.splice(deletedIndex, 1);
        e.target.parentElement.className = 'to-delete';
        setTimeout(() => {
            setState(state => {
                return {
                    ...state,
                }
            });  
        }, 300);
    }

    const handleReset = () => {
        setState(() => {
            return {
                items: [],
            newTodo: '',
            }
        });
    }

    /* const itemsList = state.items.map(todoItem => (
            <li key={todoItem.id}>
                {todoItem.todo}
                <input type='checkbox' value={todoItem.completed} />
                <button onClick={handleDelete} data-id={todoItem.id}>DELETE</button>
            </li>
        )) */

    const renderList = (items, deleteBtn) => {
        return state.items.map(todoItem => (
            <li key={todoItem.id}>
                <input type='checkbox' value={todoItem.completed} />
                <span>{todoItem.todo}</span>
                <button onClick={handleDelete} data-id={todoItem.id}>DELETE</button>
            </li>
        ))
    }

    return <div className="todo">
        <h1>Todo List</h1>
        <form onSubmit={handleNewTodo} className="todo-form">
            <input name="newTodo" value={state.newTodo} onChange={handleInput} />
            <button type="submit">ADD</button>
            <button onClick={handleReset}>RESET</button>
        </form>
        <ul className="todo-list" >{renderList(state.items, handleDelete)}</ul>
    </div>
}


export default TodoList;