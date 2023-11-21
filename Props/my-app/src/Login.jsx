import { useState } from "react"

export function Login({ onLogin }) {

    const [data, setData] = useState({
        username: '',
        password: '',
        checkbox: false
    })

    function handleLogin(event) {
        event.preventDefault();
        const name = event.target.name
        const checkbox = event.target.checked
        const type = event.target.type
        const value = event.target.value
        setData((d) => {
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
            checkbox: false
        })
    }

    function handleForm(event) {
        event.preventDefault(); 
        // utilizzando il metodo `preventDefault()` previene il ricaricamento della pagina e 
        // permette una gestione personalizzata dell'invio del modulo secondo la propria logica. 
        const username = data;
        const password = data;

        if (username === "your_username" && password === "your_password") {
            onLogin(data);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleForm}>
                <label>Username:</label>
                <input name="username" value={data.username} onChange={handleLogin} />
                <label>Password:</label>
                <input name="password" type="password" value={data.password} onChange={handleLogin} />
                <input name="checkbox" type="checkbox" checked={data.checkbox} onChange={handleLogin} />
                <button type="submit" disabled={!data.username || !data.password} onClick={() => onLogin(data)}>Login</button>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}