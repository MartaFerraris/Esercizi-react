import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "./LanguageContext"
import { useCurrentLocation } from "./useCurrentLocation";

export function Clock() {
    const [time, setDate] = useState(new Date())
    const language = useContext(LanguageContext);
    const message = language === 'it' ? 'Orario attuale' : 'Current time'
    const { location } = useCurrentLocation()

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    console.log(location)

    return (
        <div className="clock">
            <h2>{message}: {time.toLocaleTimeString()}</h2>
            {location && <div>Latitude: {location.latitude}; Longitude: {location.longitude};</div>}
        </div>
    )
}