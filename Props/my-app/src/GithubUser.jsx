import { useEffect } from "react"
import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {

    const {data, error, loading, onFetchUser} = useGithubUser(username)

    useEffect(() => {
        onFetchUser(username)
    }, [username])

    return (
        <div>
            <h2>Github user</h2>
            {loading && <div>Loading...</div>}
            {data && <img className="gituser" src={data.avatar_url} alt="profile image" />}
            {data && <div>User name: {data.name}; User login: {data.login}</div>}
            {!data && error && <div>User not found.</div> }
        </div>
    )
}