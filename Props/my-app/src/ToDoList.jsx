import { useEffect, useState } from "react"

export function ToDoList({ todosArr }) {

    const [todos, setTodos] = useState();
    const [inputText, setInputText] = useState();

    useEffect(() => {
        setTodos(todosArr)
    }, [])

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

    function handleRemove(i) { 
        const remove = todos.splice(i, 1)
        console.log(remove)
    }

    return (
        <div>
            <h2>To Do List</h2>
            <input onChange={handleInput} value={inputText} />
            <button onClick={handleEvent}>Click</button>
            <button type="reset" onClick={handleReset}>Reset</button>
            {todos?.map((todo, i) => {
                return (
                    <div key={i}>
                        <li>{todo} <button onClick={() => handleRemove(i)}>Remove</button></li>                        
                    </div>)
            })}
        </div>
    )
}