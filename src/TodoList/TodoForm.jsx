import { useContext, useState } from "react"
import ListContext from "./TodoContext"

export default function TodoForm() {

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