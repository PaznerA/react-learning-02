import { useEffect, useState } from "react";

export default function UseEffectDemo() {

    const [log, setLog] = useState([])
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    //deps empty array - react only for init
    useEffect(() => {
        setLog(old => [...old, 'init'])
        //cleanup
        return () => {
            console.log("this component is being removed")
        }
    }, [])

    // react on every change - ERROR - LOOP FOREVER
    // useEffect(() => {
    //     setLog(old => [...old, 'anychange'])
    // }, undefined)
    // useEffect(() => {
    //     console.log("test")
    // }, undefined)

    useEffect(() => {
        setLog(old => [...old, 'X changed'])
    }, [x])

    useEffect(() => {
        setLog(old => [...old, 'X or Y changed'])
    }, [x, y])


    return <>
    <h2>Lifecycle demo</h2>
    <button onClick={() => setX(old => old+1)}>X++</button>
    <button onClick={() => setY(old => old+1)}>Y++</button>
        {log.map((item, i) => <p key={i}>{item}</p>)}
    </>
}