import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./Form";
import { Route, Routes } from "react-router-dom";
import { Hello } from "./Hello";
import { Login } from "./Login";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { FocusableInput } from "./FocusableInput";
import { Colors } from "./Colors";
import { ToDoList } from "./ToDoList";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
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
            <GithubUser username={'MartaFerraris'}/>
            <Routes>
                <Route path="/" element={<Welcome name="Ugo" />}/>
                <Route path="/counter" element={<Counter/>} />
                <Route path="/user/:username" element={<GithubUsers/>}/>
            </Routes>
        </div>
    )
}