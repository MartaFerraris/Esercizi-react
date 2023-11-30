import { Counter } from "./Counter";
import { Link, Route, Routes } from "react-router-dom";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { useState } from "react";
import { GithubUsers } from "./GithubUsers";
import { GithubUser } from "./GithubUser";

export function App() {

    function showLocalTime() {
        const time = new Date()
        alert(`The current time is ${time.toLocaleTimeString()}`)
    }

    function handleOnLogin(data) {
        console.log("Login data: ", data)
    }

    const colors = [
        { id: 1, name: 'red' },
        { id: 2, name: 'green' },
        { id: 3, name: 'blue' },
        { id: 4, name: 'orange' },
        { id: 5, name: 'violet' }
    ]

    const todosArr = ["heavy machinegun", "hadouken", "Kamehamehaaa"]

    const [language, setLanguage] = useState('it')

    function handleLangChange(event) {
        setLanguage(event.target.value)
    }

    return (
        <div title={<h1>My application</h1>}>
            <Hello />
            <Message />
            <GithubUser/>
            {/* <Routes>
                <Route path="/" element={<Welcome name="Ugo" />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<GithubUsers />}>
                    <Route path=":username" element={<GithubUser />} />
                </Route>                
                <Route path="*" element={
                    <div>
                        <p>Not found</p>
                        <Link to={"/"}>Back to home</Link>
                    </div>
                }/>
            </Routes>
            <Link to={"/"}>Home</Link><br />
            <Link to={"/counter"}>Counter</Link><br />
            <Link to={"/users"}>GithubUser</Link> */}
        </div>
    )
}