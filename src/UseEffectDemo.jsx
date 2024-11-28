import { useCallback, useEffect, useState } from "react";

export default function UseEffectDemo() {

    const [log, setLog] = useState([])
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const memoX = useCallback(setX, [setX])
    const memoY = useCallback(setY, [setY])

    //deps empty array - react only for init
    // return function is called on component destroy
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
    // })
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
    <button onClick={() => memoX(old => old+1)}>X++</button>
    <button onClick={() => memoY(old => old+1)}>Y++</button>
        {log.map((item, i) => <p key={i}>{item}</p>)}
    </>
}