import { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({ initValue = 0 }) {
    const [counter, setCounter] = useState(initValue)

    useEffect(() => {
        console.log(`Value of counter: ${counter}`)
    }, [counter])

    function incrCounter() {
        setCounter((c) => c + 1)
    }

    function decrCounter() {
        setCounter((c) => c - 1)
    }

    function resetCounter() {
        setCounter(initValue)
    }

    return (
        <div>
            <h1>Counter</h1>
            <CounterDisplay counter={counter} />
            <button onClick={decrCounter}>Decrement</button>
            <button onClick={incrCounter}>Increment</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}