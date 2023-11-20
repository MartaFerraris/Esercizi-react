import { useState } from "react"

export function InteractWelcome(){
    const [welcome, setWelcome] = useState('')

    function handleInputChange(event){
        setWelcome(event.target.value)
    }
    
    return (
        <div>
            <h2>Form</h2>
            <input name="welcome" value={welcome} onChange={handleInputChange}/>
        </div>
        
    )
}