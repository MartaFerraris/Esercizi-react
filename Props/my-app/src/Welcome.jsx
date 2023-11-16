export function Welcome({ name, age }) {
    /*     return <p>Welcome, {name}!</p> 
    <p>Welcome, {name ? name : 'user'}!</p> 
    */
    return (
        <div>
            <p>Welcome, <strong>{name}</strong></p>
            <p>Your age is {age}</p>
        </div>
    )
} // caso in cui posso utilizzare un valore di default con l'operatore ternario.