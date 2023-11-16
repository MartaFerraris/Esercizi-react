/*
REQUEST EXERCISE 2 OF HANDLING EVENTS:
Add an image inside the button and add an onClick event handler to it that prints the src of the image to the console.
How can you prevent the name attribute of the button from being printed to the console when the image is clicked?

Si può impedire che l'attributo "name" del pulsante venga stampato nella console quando l'immagine viene cliccata utilizzando il metodo event.stopPropagation(), 
nell'evento di clic dell'immagine. In questo modo, l'evento non si propagherà al gestore di eventi del pulsante, evitando la stampa dell'attributo "name" nella console.*/

export function MouseClicker({ one }) {

    function handleImgClick(event) {
        console.log(event.target.src)
        event.stopPropagation()
    }

    function handleBtnClick(event) {
        console.log(event.currentTarget.name)
    }

    return (
        <button name={one} onClick={handleBtnClick}>
            <img
                width={20} 
                height={20} 
                src="https://pngimg.com/uploads/cat/cat_PNG50480.png" 
                onClick={handleImgClick}/>
            {one}
        </button>

    )
} 