import { useContext } from "react"
import ListContext from "./TodoContext"

export default function TodoItemsList() {
    const {list} = useContext(ListContext)
    return <>
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