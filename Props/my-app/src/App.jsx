import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./Form";
import { Hello } from "./Hello";
import { Login } from "./Login";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App() {

    function showLocalTime() {
        const time = new Date()
        alert(`The current time is ${time.toLocaleTimeString()}`)
    }

    function handleOnLogin(data) {
        console.log("data: ", data)
    }

    return (
        <div>
            <Hello />
            <Message />
            <Welcome name="John" age={19} />
            <Welcome name="Sam" age={10} />
            <AlertClock handleClick={showLocalTime} />
            <Counter initValue={0} />
            <Clock />
            <MouseClicker one="Click!" />
            <InteractiveWelcome />
            <Login onLogin={handleOnLogin} />
        </div>
    )
}