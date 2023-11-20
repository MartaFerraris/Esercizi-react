import { useState } from "react"

export function Login() {

    const [data, setData] = useState({
        username: '',
        password: '',
        checkbox: false
    })

    function handleLogin(event){
        const name = event.target.name
        const checkbox = event.target.checked
        const type = event.target.type
        const value = event.target.value
        setData((data) =>{
            return {
                ...data,
                [name]: type === 'checkbox' ? checkbox : value,
            }
        })
    }

    function handleReset() {
        setData({
            username: '',
            password: '',
            checkbox: false,
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <label>Username:</label>
            <input name="username" value={data.username} onChange={handleLogin}/>
            <label>Password:</label>
            <input name="password" type="password" value={data.password} onChange={handleLogin}/>
            <input name="checkbox" type="checkbox" checked={data.checkbox} onChange={handleLogin} />
        </div>
    )
}