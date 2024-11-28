import { useEffect, useState } from "react"

class Counter {
    count = 0
    countChangeCallbacks = []

    inc = () => {
        this.count++
        for(const cb of this.countChangeCallbacks) cb()
    }
}

const counter = new Counter()

export default function ExtStateMng () {
    return <>
        <h2>Ext context manamement demo</h2>
        <Display />
        <Toolbar />
    </>
}

function Toolbar() {
    return <button onClick={counter.inc}>Add</button> 
}

function Display () {
    const [count, setCount] = useState(counter.count)
    // way to redraw component

    // only on init?
    useEffect(() => {
        counter.countChangeCallbacks.push(() => setCount(counter.count))
    })
    return <div>count: {count}</div>
}