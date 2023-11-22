import { useEffect, useState } from "react"

export function ToDoList({ todosArr }) {

    const [todos, setTodos] = useState();
    const [inputText, setInputText] = useState();

    useEffect(() => {
        setTodos(todosArr)
    }, [todosArr])

    console.log("State: ", todos)

    function handleInput(event) {
        setInputText(event.target.value)
    }

    console.log(inputText)

    function handleEvent(event) {
        todos.push(inputText)
    }

    return (
        <div>
            <input onChange={handleInput} />
            <button onClick={handleEvent}>Click</button>
            {todos?.map((todo) => <li>{todo}</li>)}
        </div>
    )
}