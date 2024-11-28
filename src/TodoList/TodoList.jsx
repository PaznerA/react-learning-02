import { useContext, useState } from "react"
import TodoForm from "./TodoForm"
import ListContext from "./TodoContext"

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
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>isDone</th>
                    </tr>
                </thead>
                    <TodoItemsList />
            </table>
        </ListContext.Provider>
    </>


}


function TodoItemsList() {
    const {list} = useContext(ListContext)
    return <>
        <tbody>
            {list.map((elem, i) => <tr key={i} style={{background: i%2 === 0 ? "lightgray": "black"}}>
                    <td>{elem.id}</td>
                    <td>{elem.title}</td>
                    <td>{elem.isDone ? "Y" : "N"}</td>
                </tr>
            )}
        </tbody>
    </>
}