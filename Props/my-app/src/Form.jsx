import { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome(){
    const [welcome, setWelcome] = useState('')

    function handleInputChange(event){
        setWelcome(event.target.value)
    }
    
    return (
        <div>
            <h2>Form</h2>
            <input name="welcome" value={welcome} onChange={handleInputChange}/>
            <Welcome name={welcome}/>
        </div>
        
    )
}