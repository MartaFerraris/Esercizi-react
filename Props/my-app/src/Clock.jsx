import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "./LanguageContext"

export function Clock() {
    const [time, setDate] = useState(new Date())
    const language = useContext(LanguageContext);
    const message = language === 'it' ? 'Orario attuale' : 'Current time'

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return <div className="clock"><h2>{message}: {time.toLocaleTimeString()}</h2></div>
}