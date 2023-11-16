import { useState } from "react"

export function Counter() {
    const [counter, setCounter ] = useState(0)

    function incrCounter() {
        setCounter((c) => c + 1) 
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>            
            <button onClick={incrCounter}>Increment</button>
        </div>
    )
}

// Sì possono usare sia una funzione che un valore.
// Passando una funzione è più indicato in alcune situazioni, 
// soprattutto quando il nuovo stato dipende dal valore precedente.