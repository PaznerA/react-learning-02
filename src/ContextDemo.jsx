import { createContext, useContext, useState } from "react"

const CounterContext = createContext()

export default function ContextDemo () {
    const [count, setCount] = useState(0)
    const handleIncrease = () => setCount(count => count+1)
    return <>
        <h2>Context demo</h2>
        <CounterContext.Provider value={{count, handleIncrease}}>
            <Display />
            <Toolbar />
        </CounterContext.Provider>
    </>
}

function Toolbar() {
    const {handleIncrease} = useContext(CounterContext)
    return <>
      <button onClick={handleIncrease}>Add</button> 
    </>
}

function Display () {
    const {count} = useContext(CounterContext)
    return <>
        <div>count: {count}</div>
    </>
}