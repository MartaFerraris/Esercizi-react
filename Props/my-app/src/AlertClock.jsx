export function AlertClock({ handleClick }) {
    return (
        <div>
            <p>Click the button for to know what time its!</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}