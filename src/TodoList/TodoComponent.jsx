import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoContext from "./TodoContext"
import TodoItemsList from "./TodoItemList"
import TodoFormError from "./TodoFormError"

export default function TodoComponent() {

    const [error, setError] = useState(false)
    const [list, setList] = useState([])

    return <>
        <h2>TODO List:</h2>
        <TodoContext.Provider value={{list, setList, error, setError}}>
            <TodoFormError />
            <TodoForm/>
            <TodoItemsList />
        </TodoContext.Provider>
    </>
}