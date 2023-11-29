import { useEffect, useRef } from "react"

export function FocusableInput() {
    const inputRef = useRef(null)
    const mountedRef = useRef(false)

    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current = true
            console.log('First mounting')
        } else {
            console.log('You are mounting again for debugging')
        }
        inputRef.current?.focus()
    }, [])
    return (
        <div>
            <h2>Focus</h2>
            <label>Focus: </label>
            <input name="focus" ref={inputRef} />
        </div>
    )
}