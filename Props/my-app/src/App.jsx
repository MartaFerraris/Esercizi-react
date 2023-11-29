import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Route } from "react-router-dom";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Routes } from "./Routes";
import { Welcome } from "./Welcome";

export function App() {

    function showLocalTime() {
        const time = new Date()
        alert(`The current time is ${time.toLocaleTimeString()}`)
    }

    return (
        <div>
            <Hello />
            <Message />
            <Routes>
                <Route path="/" element={<Welcome name="Ugo" />}/>
            </Routes>
        </div>
    )
}