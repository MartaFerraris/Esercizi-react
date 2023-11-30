import { Counter } from "./Counter";
import { Link, Route, Routes } from "react-router-dom";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {

    return (
        <div title={<h1>My application</h1>}>
            <Hello />
            <Message />
            <Routes>
                <Route path="*" element={
                    <div>
                        <p>Not found</p>
                        <Link to={"/"}>Back to home</Link>
                    </div>
                } />
                <Route path="/" element={<Welcome name="Ugo" />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<GithubUserList />}>
                    <Route path=":username" element={<GithubUser />} />
                </Route>
            </Routes>
            <Link to={"/"}>Home</Link><br />
            <Link to={"/counter"}>Counter</Link><br />
            <Link to={"/users"}>User</Link>
        </div>
    )
}