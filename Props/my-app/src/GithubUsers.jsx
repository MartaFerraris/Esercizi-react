import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUsers() {

    const [username, setUsername] = useState()
    const [userList, setUserList] = useState([])

    function handleInput(event) {
        setUsername(event.target.value)
    }

    function handleSubmit() {
        setUserList([...userList, username])
    }

    return (
        <div>
            <input onChange={handleInput} name="username" />
            <button onClick={handleSubmit}>Submit</button>
            {userList.map((user, index) => (
                <div key={user + index}>
                    <GithubUser username={user} />
                </div>))}
        </div>
    )
}