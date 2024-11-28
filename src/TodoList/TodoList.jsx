import { useState } from "react"

export default function TodoList() {

    const [hasError, setError] = useState(false)
    const [list, setList] = useState([])
    const [task, setTask] = useState({
        id: 0,
        title: "",
        isDone: false
    })

    //too complicated state - should be separated into mulitiple components
    // const [data, setData] = useState({
    //     task: {
    //         id: 0,
    //         title: "",
    //         isDone: false
    //     },
    //     list: [],
    //     error: null
    // })

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

    return <>
        <h2>TODO List:</h2>
        <form>
            <label>Task: <input value={task.title} onChange={handleOnChange} /></label><br />
            <label>Done: <input type="checkbox" value={task.title} checked={task.isDone} onChange={handleOnChange}></input></label><br />
            <button type="button" onClick={addTask}>Add</button>
        </form>
        {hasError && <label color="danger">
            {hasError}
        </label>}
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>isDone</th>
                </tr>
            </thead>
            <tbody>
                {list.map((elem, i) => <tr key={i} style={{background: i%2 === 0 ? "lightgray": "black"}}>
                        <td>{elem.id}</td>
                        <td>{elem.title}</td>
                        <td>{elem.isDone ? "Y" : "N"}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>


}
