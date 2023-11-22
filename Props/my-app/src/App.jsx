import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./Form";
import { Hello } from "./Hello";
import { Login } from "./Login";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { FocusableInput } from "./FocusableInput";
import { Colors } from "./Colors";
import { ToDoList } from "./ToDoList";


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
            <UncontrolledLogin />
            <FocusableInput />
            <Colors colors={colors}/>
            <ToDoList todosArr={todosArr}/>
        </div>
    )
}