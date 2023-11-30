import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export function GithubUserList() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then(resp => { return resp.json() })
            .then(json => { 
                console.log(json); 
                setData(json) 
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <ul>
                {data && data.map((user) => (
                    <li key={user.login}>
                        <Link to={`/users/${user.login}`}>{user.login}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}