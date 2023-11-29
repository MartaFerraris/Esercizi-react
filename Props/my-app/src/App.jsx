import { Route } from "react-router-dom";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Routes } from "./Routes";
import { Welcome } from "./Welcome";

export function App() {
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