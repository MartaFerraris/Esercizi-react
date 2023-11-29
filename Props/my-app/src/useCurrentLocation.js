import { useEffect, useState } from "react"

export function useCurrentLocation() {

    const [location, setLocation] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setLoading(false);
            },
            (error) => {
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        getCurrentPosition()
    }, [])

    return {
        location: location,
        loading: loading,
        error: error,
        position: getCurrentPosition
    }
}