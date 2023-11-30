import { useState } from "react"

export function useUser() {
    
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    
    function handleData(event) {
        const { name, value } = event.target;

        setData((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    return {
        data: data,
        onInput: handleData
    }
}