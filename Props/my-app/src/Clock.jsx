import { useEffect, useState } from "react"

export function Clock() {
    const [time, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return <div className="clock"><h2>Current time: {time.toLocaleTimeString()}</h2></div>
}