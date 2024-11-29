import { useContext } from "react"
import TodoContext from "./TodoContext"

export default function TodoFormError() {
    const {error} = useContext(TodoContext)
    return <>
        {error && <label color="danger">
            {error}
        </label>}
    </>
}