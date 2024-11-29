import { Link } from "react-router-dom";

export default function Navigation() {
    return <>
     <ul>
        <li><Link to="todo" >TODO in app</Link></li>
        <li><Link to="/nevim" >TODO outside app</Link></li>
        <li><Link to="demo" >DEMOS in app</Link></li>
     </ul>
    </>
}