import { useState } from "react"
import TodoForm from "./TodoForm"
import ListContext from "./TodoContext"
import TodoItemsList from "./TodoItemList"
import TodoFormError from "./TodoFormError"

export default function TodoComponent() {

    const [list, setList] = useState([])

    return <>
        <h2>TODO List:</h2>
        <ListContext.Provider value={{list, setList}}>
            <TodoFormError />
            <TodoForm/>
            <TodoItemsList />
        </ListContext.Provider>
    </>
}