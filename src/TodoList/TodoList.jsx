import { createContext, useContext, useState } from "react"

// const FormContext = createContext()
const ListContext = createContext()

export default function TodoList() {

    const [hasError, setError] = useState(false)
    const [list, setList] = useState([])

    const validateInput = (task) => {
        if(task.id === 0){
            throw "ID cannot be  0!"
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

function TodoForm() {

    const {list, setList, validateInput} = useContext(ListContext)

    const [task, setTask] = useState({
        id: 0,
        title: "",
        isDone: false
    })

    const addTask = (e) => {
        const newId = list.length + 1
        const newTask = ({...task, id: newId})
        if(validateInput(newTask)){
            setList(list => ([...list, newTask]))
            setTask({title: "", isDone: false, id: 0})
        }
        e.preventDefault()
    }

    const handleOnChange = (e) => {
        if(e.target.type === "checkbox") {
            setTask((old) => ({...old, isDone: e.target.checked}))
        }else {
            setTask((old) => ({...old, title: e.target.value}))
        }
    }

    // const {setTask} = useContext(ListContext)
    return <>
        <form>
            <label>Task: <input value={task.title} onChange={handleOnChange} /></label><br />
            <label>Done: <input type="checkbox" value={task.title} checked={task.isDone} onChange={handleOnChange}></input></label><br />
            <button type="button" onClick={addTask}>Add</button>
        </form>
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