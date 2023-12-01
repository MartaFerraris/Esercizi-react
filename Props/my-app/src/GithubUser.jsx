import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {

    const { data } = useGithubUser({ username })

    return (
        <div>
            <h2>Github user</h2>
{/*             {data && <img className="gituser" src={data.avatar_url} alt="profile image" />} */}
            {data && <div>{/* User name: {data.name}; */} User login: {data.login}</div>}
        </div>
    )
}