import { useState } from "react"

export function useGithubUser(username) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    function fetchGithubUser() {
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
            .then(response => { return response.json() })
            .then(json => {
                console.log(json)
                setData(json)
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }

    return {
        data: data,
        error: error,
        loading: loading,
        onFetchUser: fetchGithubUser
    }
}
