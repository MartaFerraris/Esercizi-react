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

    function handleRemove(event, i) { 
        
        let array = [...todos];
        let index = array.indexOf(event.target.value)
        if (i !== -1) {
            array.splice(index, 1);
            setTodos(array);
        }
        console.log(event)

    }

    return (
        <div className="todolist">
            <h2>To Do List</h2>
            <input onChange={handleInput} value={inputText} />
            <button onClick={handleEvent}>Click</button>
            <button type="reset" onClick={handleReset}>Reset</button>
            {todos?.map((todo, i) => {
                return (
                    <div key={i}>
                        <li>{todo} <button onClick={(event) => handleRemove(event, i)}>Remove</button></li>                        
                    </div>)
            })}
        </div>
    )
}