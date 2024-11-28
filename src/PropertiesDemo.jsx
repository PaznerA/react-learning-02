import { useState } from "react"

export default function PropertiesDemo () {
    const [count, setCount] = useState(0)
    const handleIncrease = () => setCount(count => count+1)
    return <>
        <h2>Properties demo</h2>
        {/* <Display {...{count: count}} /> */}
        {/* <Display {...{count}} /> if the names of pro and value are the same */}
        <Display count={count} />
        <Toolbar handle={handleIncrease} />
    </>
}

function Toolbar({handle}) {
    return <>
      <button onClick={handle}>Add</button> 
    </>
}

function Display (props) {
    const { count } = props
    return <>
        <div>count: {count}</div>
    </>
}