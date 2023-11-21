import { useEffect, useRef } from "react"

export function FocusableInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    })
    return (
        <div>
            <h2>Focus</h2>
            <label>Focus: </label>
            <input name="focus" ref={inputRef} />
        </div>
    )
}