import { useState } from "react"
import TodoForm from "./TodoForm"
import ListContext from "./TodoContext"
import TodoItemsList from "./TodoItemList"

export default function TodoList() {

    const [hasError, setError] = useState(false)
    const [list, setList] = useState([])

    const validateInput = (task) => {
        if(task.id === 0){
            throw new Error('ID cannot be  0!')
        }
        if(task.title === ''){
            setError('Title cannot be empty!')
            return false
        }
        setError()
        return true
    }


    return <>
        <h2>TODO List:</h2>
        {hasError && <label color="danger">
            {hasError}
        </label>}
        
        <ListContext.Provider value={{list, setList, validateInput}}>
            <TodoForm/>
            <TodoItemsList />
        </ListContext.Provider>
    </>
}