/* import { useEffect, useState } from "react"
 */
import { useParams } from "react-router-dom"

export function GithubUser() {

    /* const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => { return response.json() })
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [username]) */

    const { username } = useParams()

    return (
        <div>
            <h2>Github user</h2>
            {/* {data && <img className="gituser" src={data.avatar_url} alt="profile image" />}
            {data && <div>User name: {data.name}; User login: {data.login}</div>} */}
            <div>{username}</div>
        </div>
    )
}