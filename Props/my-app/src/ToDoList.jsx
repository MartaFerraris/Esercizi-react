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
        if (inputText != "") {
            setInputText("")
        } 
    }

    function handleReset() {
        setTodos([])
    }

    return (
        <div>
            <h2>To Do List</h2>
            <input onChange={handleInput} value={inputText}/>
            <button onClick={handleEvent}>Click</button>
            <button type="reset" onClick={handleReset}>Reset</button>
            {todos?.map((todo) => <li>{todo}</li>)}
        </div>
    )
}