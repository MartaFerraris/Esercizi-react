/*
REQUEST EXERCISE 1 OF HANDLING EVENTS:  
Create a MouseClicker component that contains a button with a name prop set to the "one" string.
Attach an event handler to the button that prints the name prop to the console when clicked by reading the event.target.name property. */

export function MouseClicker({ one }) {

    function handleBtnClick(event) {
        console.log(event.target)
    }

    return (
        <button onClick={handleBtnClick}>{one}</button>
    )
} 