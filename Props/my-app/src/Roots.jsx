import { BrowserRouter } from "react-router-dom";
import { App } from "./App"

export function Roots() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}